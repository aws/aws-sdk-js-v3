import {
  GlueClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../GlueClient";
import { BatchGetJobsRequest, BatchGetJobsResponse } from "../models/index";
import {
  deserializeAws_json1_1BatchGetJobsCommand,
  serializeAws_json1_1BatchGetJobsCommand
} from "../protocols/Aws_json1_1";
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

export type BatchGetJobsCommandInput = BatchGetJobsRequest;
export type BatchGetJobsCommandOutput = BatchGetJobsResponse & __MetadataBearer;

export class BatchGetJobsCommand extends $Command<
  BatchGetJobsCommandInput,
  BatchGetJobsCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchGetJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetJobsCommandInput, BatchGetJobsCommandOutput> {
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
    input: BatchGetJobsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchGetJobsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchGetJobsCommandOutput> {
    return deserializeAws_json1_1BatchGetJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
