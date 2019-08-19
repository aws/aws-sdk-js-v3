import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetExecutionHistory } from "../model/operations/GetExecutionHistory";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetExecutionHistoryInput } from "../types/GetExecutionHistoryInput";
import { GetExecutionHistoryOutput } from "../types/GetExecutionHistoryOutput";
import { SFNResolvedConfiguration } from "../SFNConfiguration";
export * from "../types/GetExecutionHistoryInput";
export * from "../types/GetExecutionHistoryOutput";
export * from "../types/GetExecutionHistoryExceptionsUnion";

export class GetExecutionHistoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetExecutionHistoryInput,
      OutputTypesUnion,
      GetExecutionHistoryOutput,
      SFNResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetExecutionHistory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetExecutionHistoryInput,
    GetExecutionHistoryOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetExecutionHistoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SFNResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetExecutionHistoryInput,
    GetExecutionHistoryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetExecutionHistoryInput, GetExecutionHistoryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
