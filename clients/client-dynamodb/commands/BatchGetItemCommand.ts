import {
  DynamoDBClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../DynamoDBClient";
import { BatchGetItemInput, BatchGetItemOutput } from "../models/index";
import {
  deserializeAws_json1_0BatchGetItemCommand,
  serializeAws_json1_0BatchGetItemCommand
} from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type BatchGetItemCommandInput = BatchGetItemInput;
export type BatchGetItemCommandOutput = BatchGetItemOutput & __MetadataBearer;

export class BatchGetItemCommand extends $Command<
  BatchGetItemCommandInput,
  BatchGetItemCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchGetItemCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetItemCommandInput, BatchGetItemCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: BatchGetItemCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0BatchGetItemCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchGetItemCommandOutput> {
    return deserializeAws_json1_0BatchGetItemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
