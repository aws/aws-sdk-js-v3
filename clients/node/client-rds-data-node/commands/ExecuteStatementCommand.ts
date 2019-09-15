import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import {coreHandler} from '@aws-sdk/core-handler';
import { RDSDataResolvedConfiguration } from "../RDSDataConfiguration";

export class ExecuteStatementCommand {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ExecuteStatementInput,
    ExecuteStatementOutput,
  >();

  constructor(readonly input: ExecuteStatementInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion
    >,
    configuration: RDSDataResolvedConfiguration
  ): __aws_sdk_types.Handler<ExecuteStatementInput, ExecuteStatementOutput> {
    const { httpHandler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any
    };

    return stack.resolve(
      httpHandler<ExecuteStatementInput, ExecuteStatementOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
