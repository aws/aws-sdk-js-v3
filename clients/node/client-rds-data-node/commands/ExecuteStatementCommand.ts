import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ExecuteStatement } from "../model/ExecuteStatement";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ExecuteStatementInput } from "../types/ExecuteStatementInput";
import { ExecuteStatementOutput } from "../types/ExecuteStatementOutput";
import { RDSDataResolvedConfiguration } from "../RDSDataConfiguration";
export * from "../types/ExecuteStatementInput";
export * from "../types/ExecuteStatementOutput";
export * from "../types/ExecuteStatementExceptionsUnion";

export class ExecuteStatementCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ExecuteStatementInput,
      OutputTypesUnion,
      ExecuteStatementOutput,
      RDSDataResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ExecuteStatement;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ExecuteStatementInput,
    ExecuteStatementOutput,
    _stream.Readable
  >();

  constructor(readonly input: ExecuteStatementInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSDataResolvedConfiguration
  ): __aws_sdk_types.Handler<ExecuteStatementInput, ExecuteStatementOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ExecuteStatementInput, ExecuteStatementOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
