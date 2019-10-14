import { Command } from "@aws-sdk/smithy-client";
import {
  deserializerPlugin,
  serializerPlugin
} from "@aws-sdk/middleware-serde";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RDSDataResolvedConfiguration } from "../RDSDataConfiguration";
import { HttpRequest } from "@aws-sdk/protocol-http";
import {
  executeStatementSerializer,
  executeStatementDeserializer
} from "../protocol/ExecuteStatement";
import { FinalizeHandlerArguments, MiddlewareStack } from "@aws-sdk/types";
import {
  ExecuteStatementRequest,
  ExecuteStatementResponse
} from "../models/rdsdataservice";

type InputTypesUnion = any;
type OutputTypesUnion = any;

export class ExecuteStatementCommand extends Command<
  ExecuteStatementRequest,
  ExecuteStatementResponse
> {
  constructor(readonly input: ExecuteStatementRequest) {
    super();
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<InputTypesUnion, OutputTypesUnion>,
    configuration: RDSDataResolvedConfiguration,
    options?: __aws_sdk_types.HttpOptions
  ): __aws_sdk_types.Handler<
    ExecuteStatementRequest,
    ExecuteStatementResponse
  > {
    const { httpHandler } = configuration;

    this.use(serializerPlugin(configuration, executeStatementSerializer));
    this.use(
      deserializerPlugin<ExecuteStatementResponse>(
        configuration,
        executeStatementDeserializer
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any
    };

    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        httpHandler.handle(request.request as HttpRequest, options || {}),
      handlerExecutionContext
    );
  }
}
