import {
  BuildHandler,
  BuildHandlerArguments,
  BuildMiddleware,
  BodyLengthCalculator,
  MetadataBearer,
  BuildHandlerOutput
} from "@aws-sdk/types";
import { HttpRequest } from "@aws-sdk/protocol-http";

export function contentLengthMiddleware(
  bodyLengthCalculator: BodyLengthCalculator
): BuildMiddleware<any, any> {
  return <Output extends MetadataBearer>(
    next: BuildHandler<any, Output>
  ): BuildHandler<any, Output> => async (
    args: BuildHandlerArguments<any>
  ): Promise<BuildHandlerOutput<Output>> => {
    let request = { ...args.request };
    //TODO: cast request with instanceof
    if (HttpRequest.isHttpRequest(request)) {
      const { body, headers } = request;
      if (
        body &&
        Object.keys(headers)
          .map(str => str.toLowerCase())
          .indexOf("content-length") === -1
      ) {
        const length = bodyLengthCalculator(body);
        if (length !== undefined) {
          request.headers = {
            ...request.headers,
            "Content-Length": String(length)
          };
        }
      }
    }

    return next({
      ...args,
      request
    });
  };
}
