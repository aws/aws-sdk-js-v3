import { HttpRequest } from "@aws-sdk/protocol-http";
import { BuildMiddleware, MetadataBearer } from "@aws-sdk/types";
import { formatUrl } from "@aws-sdk/util-format-url";

import { Polly, PollyClient, SynthesizeSpeechCommand } from "@aws-sdk/client-polly";
import { PollyPresigner } from "./PollyPresigner";

export const getSignedUrl = async (
  client: Polly | PollyClient,
  command: SynthesizeSpeechCommand,
  options: any = {}
): Promise<string> => {
  let pollypresign = new PollyPresigner({ ...client.config });
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

    const presigned = await pollypresign.presign(request, {
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
