import {
  RequestSerializer,
  SerializeHandler,
  SerializeHandlerArguments,
  SerializeHandlerOutput,
  SerializeMiddleware,
  EndpointBearer,
  TransferHandler
} from "@aws-sdk/types";

export function serializerMiddleware<
  Input extends object,
  Output extends object,
  RuntimeUtils extends EndpointBearer
>(
  options: {
    transferHandler: TransferHandler<any, any, any>;
    protocol: string;
  } & RuntimeUtils,
  serializer: RequestSerializer<any, RuntimeUtils>
): SerializeMiddleware<Input, Output> {
  return (
    next: SerializeHandler<Input, Output>
  ): SerializeHandler<Input, Output> => async (
    args: SerializeHandlerArguments<Input>
  ): Promise<SerializeHandlerOutput<Output>> => {
    const endpointResolvedOptions = {
      ...options,
      endpoint: await options.endpoint()
    };
    const request = serializer(
      args.input,
      options.protocol,
      endpointResolvedOptions
    );
    return next({
      ...args,
      request
    });
  };
}
