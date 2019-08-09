import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetParameterHistory } from "../model/GetParameterHistory";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetParameterHistoryInput } from "../types/GetParameterHistoryInput";
import { GetParameterHistoryOutput } from "../types/GetParameterHistoryOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/GetParameterHistoryInput";
export * from "../types/GetParameterHistoryOutput";
export * from "../types/GetParameterHistoryExceptionsUnion";

export class GetParameterHistoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetParameterHistoryInput,
      OutputTypesUnion,
      GetParameterHistoryOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetParameterHistory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetParameterHistoryInput,
    GetParameterHistoryOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetParameterHistoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetParameterHistoryInput,
    GetParameterHistoryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetParameterHistoryInput, GetParameterHistoryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
