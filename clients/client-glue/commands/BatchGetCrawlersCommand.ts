import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchGetCrawlersRequest, BatchGetCrawlersResponse } from "../models/models_0";
import {
  deserializeAws_json1_1BatchGetCrawlersCommand,
  serializeAws_json1_1BatchGetCrawlersCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type BatchGetCrawlersCommandInput = BatchGetCrawlersRequest;
export type BatchGetCrawlersCommandOutput = BatchGetCrawlersResponse & __MetadataBearer;

/**
 * <p>Returns a list of resource metadata for a given list of crawler names. After calling the <code>ListCrawlers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.</p>
 */
export class BatchGetCrawlersCommand extends $Command<
  BatchGetCrawlersCommandInput,
  BatchGetCrawlersCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchGetCrawlersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetCrawlersCommandInput, BatchGetCrawlersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "BatchGetCrawlersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetCrawlersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchGetCrawlersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetCrawlersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchGetCrawlersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetCrawlersCommandOutput> {
    return deserializeAws_json1_1BatchGetCrawlersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
