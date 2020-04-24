import {
  RequestSerializer,
  SerializeHandler,
  SerializeHandlerArguments,
  SerializeHandlerOutput,
  SerializeMiddleware,
  EndpointBearer
} from "@aws-sdk/types";

export function serializerMiddleware<
  Input extends object,
  Output extends object,
  RuntimeUtils extends EndpointBearer
>(
  options: RuntimeUtils,
  serializer: RequestSerializer<any, RuntimeUtils>
): SerializeMiddleware<Input, Output> {
  return (
    next: SerializeHandler<Input, Output>
  ): SerializeHandler<Input, Output> => async (
    args: SerializeHandlerArguments<Input>
  ): Promise<SerializeHandlerOutput<Output>> => {
    const request = await serializer(args.input, options);
    return next({
      ...args,
      request
    });
  };
}
