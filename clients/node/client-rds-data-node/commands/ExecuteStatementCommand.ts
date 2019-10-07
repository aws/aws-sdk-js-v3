import { Command } from '@aws-sdk/smithy-client';
import { serializerPlugin } from "@aws-sdk/middleware-serializer";
import { deserializerPlugin } from "@aws-sdk/middleware-deserializer";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RDSDataResolvedConfiguration } from "../RDSDataConfiguration";
import { HttpRequest } from '@aws-sdk/protocol-http';
import { executeStatementSerializer, executeStatementDeserializer } from '../protocol/ExecuteStatement'
import { FinalizeHandlerArguments, MiddlewareStack } from '@aws-sdk/types';

/**
 * To remove this when move to Smithy model
 */
type ExecuteStatementInput = any;
type ExecuteStatementOutput = any;
type InputTypesUnion = any;
type OutputTypesUnion = any;

export class ExecuteStatementCommand extends Command<ExecuteStatementInput, ExecuteStatementOutput> {

  constructor(readonly input: ExecuteStatementInput) {
    super();
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion
    >,
    configuration: RDSDataResolvedConfiguration,
    options?: __aws_sdk_types.HttpOptions
  ): __aws_sdk_types.Handler<ExecuteStatementInput, ExecuteStatementOutput> {
    const { httpHandler } = configuration;

    this.use(serializerPlugin(configuration, executeStatementSerializer));
    this.use(deserializerPlugin<ExecuteStatementOutput>(configuration, executeStatementDeserializer));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any
    };

    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) => httpHandler.handle(request.request as HttpRequest, options || {}),
      handlerExecutionContext
    );
  }
}
