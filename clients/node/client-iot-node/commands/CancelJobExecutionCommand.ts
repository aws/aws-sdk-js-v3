import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CancelJobExecution } from "../model/operations/CancelJobExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelJobExecutionInput } from "../types/CancelJobExecutionInput";
import { CancelJobExecutionOutput } from "../types/CancelJobExecutionOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/CancelJobExecutionInput";
export * from "../types/CancelJobExecutionOutput";
export * from "../types/CancelJobExecutionExceptionsUnion";

export class CancelJobExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelJobExecutionInput,
      OutputTypesUnion,
      CancelJobExecutionOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CancelJobExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelJobExecutionInput,
    CancelJobExecutionOutput,
    _stream.Readable
  >();

  constructor(readonly input: CancelJobExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CancelJobExecutionInput,
    CancelJobExecutionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CancelJobExecutionInput, CancelJobExecutionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
