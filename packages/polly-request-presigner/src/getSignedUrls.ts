import { PollyClient, SynthesizeSpeechCommand } from "@aws-sdk/client-polly";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import { formatUrl } from "@aws-sdk/util-format-url";

export const getSignedUrl = async (
  client: PollyClient,
  command: SynthesizeSpeechCommand,
  options: any = {}
): Promise<string> => {
  const signer = new SignatureV4({
    service: options.service || "polly",
    uriEscapePath: options.uriEscapePath || false,
    ...client.config,
  });

  const presignInterceptMiddleware = (next: any, context: any) => async (args: any) => {
    const { request } = args;
    if (!HttpRequest.isInstance(request)) {
      throw new Error("Request to be presigned is not an valid HTTP request.");
    }

    // Modify the request so the presigner signs correctly
    request.method = "GET";
    delete request.headers["amz-sdk-invocation-id"];
    delete request.headers["amz-sdk-request"];
    delete request.headers["content-length"];
    request.body = "";
    request.query = {
      ...request.query,
      ...args.input,
    };

    const unsignableHeaders = new Set();
    unsignableHeaders.add("content-type");
    const presigned = await signer.presign(request, {
      expiresIn: 3600,
      unsignableHeaders,
      ...options,
      signingRegion: options.signingRegion ?? context["signing_region"],
      signingService: options.signingService ?? context["signing_service"],
    });

    return {
      // Intercept the middleware stack by returning fake response
      response: {},
      output: {
        $metadata: { httpStatusCode: 200 },
        presigned,
      },
    } as any;
  };

  client.middlewareStack.addRelativeTo(presignInterceptMiddleware, {
    name: "presignInterceptMiddleware",
    relation: "before",
    toMiddleware: "awsAuthMiddleware",
  });

  let presigned: HttpRequest;
  try {
    const output = await client.send(command);
    //@ts-ignore the output is faked, so it's not actually OutputType
    presigned = output.presigned;
  } finally {
    client.middlewareStack.remove("presignInterceptMiddleware");
  }

  return formatUrl(presigned);
};
