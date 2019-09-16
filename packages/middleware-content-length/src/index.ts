import {
  BuildHandler,
  BuildHandlerArguments,
  BuildMiddleware,
  BodyLengthCalculator,
  MetadataBearer,
  BuildHandlerOutput,
  HttpRequest
} from "@aws-sdk/types";

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
    const { body, headers } = <HttpRequest>request;
    if (
      body &&
      Object.keys(headers)
        .map(str => str.toLowerCase())
        .indexOf("content-length") === -1
    ) {
      const length = bodyLengthCalculator(body);
      if (length !== undefined) {
        (<HttpRequest>request).headers = {
          ...(<HttpRequest>request).headers,
          "Content-Length": String(length)
        };
      }
    }

    return next({
      ...args,
      request
    });
  };
}
