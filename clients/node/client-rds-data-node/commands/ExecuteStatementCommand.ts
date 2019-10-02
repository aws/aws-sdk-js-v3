import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import { serializerMiddleware } from "@aws-sdk/middleware-serializer";
import { deserializerMiddleware } from "@aws-sdk/middleware-deserializer";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RDSDataResolvedConfiguration } from "../RDSDataConfiguration";
import { HttpRequest } from '@aws-sdk/protocol-http';
import { executeStatementSerializer, executeStatementDeserializer } from '../protocol/ExecuteStatement'
import { FinalizeHandlerArguments } from '@aws-sdk/types';

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

    this.middlewareStack.add(
      serializerMiddleware(
        configuration.protocol,
        executeStatementSerializer
      ),
      {
        step: "serialize",
        priority: 90,
        tags: { SERIALIZER: true }
      }
    );
    this.middlewareStack.add(
      deserializerMiddleware<ExecuteStatementInput, ExecuteStatementOutput>(
        configuration.protocol,
        executeStatementDeserializer
      ) as any,
      {
        step: "deserialize",
        priority: Infinity,
        tags: { DESERIALIZER: true }
      }
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any
    };

    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) => {return httpHandler.handle(request.request as HttpRequest, options || {})},
      handlerExecutionContext
    );
  }
}
