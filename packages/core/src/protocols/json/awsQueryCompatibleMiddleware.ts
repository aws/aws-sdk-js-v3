import { Pluggable, RelativeMiddlewareOptions, SerializeHandler, SerializeHandlerArguments } from "@smithy/types";

export const awsQueryCompatibleMiddleware =
  (fields: string[]) => (next: SerializeHandler<any, any>) => (args: SerializeHandlerArguments<any>) => {
    const { request } = args;
    console.log("queryCompatMiddleware", request, fields);
    return next(args);
  };

export const awsQueryCompatibleMiddlewareOptions: RelativeMiddlewareOptions = {
  toMiddleware: "serializerMiddleware",
  relation: "after",
  tags: [],
  override: true,
};

export const getAwsQueryCompatiblePlugin = (fields: string[]): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(awsQueryCompatibleMiddleware(fields), awsQueryCompatibleMiddlewareOptions);
  },
});
