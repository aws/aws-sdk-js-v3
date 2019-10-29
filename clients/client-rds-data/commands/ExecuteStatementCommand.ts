import { Command } from "@aws-sdk/smithy-client";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpOptions,
  Handler,
  HandlerExecutionContext,
  FinalizeHandlerArguments,
  MiddlewareStack,
  SerdeContext
} from "@aws-sdk/types";
import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import {
  executeStatementAwsRestJson1_1Serialize,
  executeStatementAwsRestJson1_1Deserialize
} from "../protocol/AwsRestJson1_1";
import { ExecuteStatementRequest, ExecuteStatementResponse } from "../models";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  RdsDataServiceResolvedConfig
} from "../RdsDataServiceClient";

export class ExecuteStatementCommand extends Command<
  ExecuteStatementRequest,
  ExecuteStatementResponse
> {
  constructor(readonly input: ExecuteStatementRequest) {
    super();
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RdsDataServiceResolvedConfig,
    options?: HttpOptions
  ): Handler<ExecuteStatementRequest, ExecuteStatementResponse> {
    const {
      protocol: { handler }
    } = configuration;

    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
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

  private serialize(
    input: ExecuteStatementRequest,
    protocol: string,
    context: SerdeContext
  ): HttpRequest {
    switch (protocol) {
      case "aws.rest-json-1.1":
        return executeStatementAwsRestJson1_1Serialize(input, context);
      default:
        throw new Error("Unknown protocol, use aws.rest-json-1.1");
    }
  }

  private async deserialize(
    output: HttpResponse,
    protocol: string,
    context: SerdeContext
  ): Promise<ExecuteStatementResponse> {
    switch (protocol) {
      case "aws.rest-json-1.1":
        return executeStatementAwsRestJson1_1Deserialize(output, context);
      default:
        throw new Error("Unknown protocol, use aws.rest-json-1.1");
    }
  }
}
