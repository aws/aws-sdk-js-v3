import { getSuffixForArnEndpoint } from "@aws-sdk/middleware-bucket-endpoint";
import { HttpRequest } from "@aws-sdk/protocol-http";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOutput,
  BuildMiddleware,
  HandlerExecutionContext,
  MetadataBearer,
  Pluggable,
  Provider,
  RelativeMiddlewareOptions,
} from "@aws-sdk/types";

type PreviouslyResolved = {
  region: Provider<string>;
  isCustomEndpoint?: boolean;
  disableHostPrefix: boolean;
  runtime: string;
};

type Input = {
  RequestRoute: string | undefined;
};

/**
 * @internal
 */
export const writeGetObjectResponseEndpointMiddleware =
  (config: PreviouslyResolved): BuildMiddleware<any, any> =>
  <Output extends MetadataBearer>(
    next: BuildHandler<Input, Output>,
    context: HandlerExecutionContext
  ): BuildHandler<Input, Output> =>
  async (args: BuildHandlerArguments<Input>): Promise<BuildHandlerOutput<Output>> => {
    const { region: regionProvider, isCustomEndpoint, disableHostPrefix } = config;
    const region = await regionProvider();
    const { request, input } = args;
    if (!HttpRequest.isInstance(request)) return next({ ...args });
    let hostname = request.hostname;
    if (hostname.endsWith("s3.amazonaws.com") || hostname.endsWith("s3-external-1.amazonaws.com")) {
      return next({ ...args });
    }
    if (!isCustomEndpoint) {
      const [, suffix] = getSuffixForArnEndpoint(request.hostname);
      hostname = `s3-object-lambda.${region}.${suffix}`;
    }
    if (!disableHostPrefix && input.RequestRoute) {
      hostname = `${input.RequestRoute}.${hostname}`;
    }
    request.hostname = hostname;
    context["signing_service"] = "s3-object-lambda";

    // Set the chunked transfer encoding when content-length cannot be inferred
    // Only set in node because this header is forbidden in browser.
    if (config.runtime === "node" && !request.headers["content-length"]) {
      request.headers["transfer-encoding"] = "chunked";
    }
    return next({ ...args });
  };

/**
 * @internal
 */
export const writeGetObjectResponseEndpointMiddlewareOptions: RelativeMiddlewareOptions = {
  relation: "after",
  toMiddleware: "contentLengthMiddleware",
  tags: ["WRITE_GET_OBJECT_RESPONSE", "S3", "ENDPOINT"],
  name: "writeGetObjectResponseEndpointMiddleware",
  override: true,
};

/**
 * @internal
 */
export const getWriteGetObjectResponseEndpointPlugin = (config: PreviouslyResolved): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(
      writeGetObjectResponseEndpointMiddleware(config),
      writeGetObjectResponseEndpointMiddlewareOptions
    );
  },
});
