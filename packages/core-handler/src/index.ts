import {
  CommandInput,
  FinalizeHandler,
  FinalizeHandlerArguments,
  HandlerExecutionContext,
  HttpHandler,
  MetadataBearer,
  ResponseParser,
  Terminalware
} from "@aws-sdk/types";

export function coreHandler<
  OutputConstraint extends MetadataBearer,
  Stream = Uint8Array
>(
  httpHandler: HttpHandler<Stream>,
  responseParser: ResponseParser<Stream>
): Terminalware<OutputConstraint, Stream> {
  return <Input extends CommandInput, Output extends OutputConstraint>({
    model
  }: HandlerExecutionContext): FinalizeHandler<Input, Output, Stream> => ({
    request,
    input: { $abortSignal: abortSignal }
  }: FinalizeHandlerArguments<Input, Stream>): Promise<Output> =>
    httpHandler
      .handle(request, { abortSignal })
      .then(response => responseParser.parse<Output>(model, response));
}
