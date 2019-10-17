import { Command } from "@aws-sdk/smithy-client";
import { serdePlugin } from "@aws-sdk/middleware-serde";
import { HttpOptions, Handler, HandlerExecutionContext } from "@aws-sdk/types";
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
} from "../models/index";

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
    options?: HttpOptions
  ): Handler<ExecuteStatementRequest, ExecuteStatementResponse> {
    const {
      protocol: { handler }
    } = configuration;

    this.use(
      serdePlugin(
        configuration,
        executeStatementSerializer,
        executeStatementDeserializer
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };

    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        handler.handle(request.request as HttpRequest, options || {}),
      handlerExecutionContext
    );
  }
}
