import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import {coreHandler} from '@aws-sdk/core-handler';
import { RDSDataResolvedConfiguration } from "../RDSDataConfiguration";
import { HttpRequest } from '@aws-sdk/protocol-http';

/**
 * To remove this when move to Smithy model
 */
type ExecuteStatementInput = any;
type ExecuteStatementOutput = any;
type InputTypesUnion = any;
type OutputTypesUnion = any;

export class ExecuteStatementCommand {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ExecuteStatementInput,
    ExecuteStatementOutput
  >();

  constructor(readonly input: ExecuteStatementInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion
    >,
    configuration: RDSDataResolvedConfiguration,
    options?: __aws_sdk_types.HttpOptions
  ): __aws_sdk_types.Handler<ExecuteStatementInput, ExecuteStatementOutput> {
    const { httpHandler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any
    };

    return stack.resolve(
      (request: unknown) => {return httpHandler.handle(request as HttpRequest, options || {})},
      handlerExecutionContext
    );
  }
}
