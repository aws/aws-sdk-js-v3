import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteCrawlerRequest, DeleteCrawlerResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteCrawlerCommand,
  serializeAws_json1_1DeleteCrawlerCommand,
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

export type DeleteCrawlerCommandInput = DeleteCrawlerRequest;
export type DeleteCrawlerCommandOutput = DeleteCrawlerResponse & __MetadataBearer;

/**
 * <p>Removes a specified crawler from the AWS Glue Data Catalog, unless the crawler state is
 *         <code>RUNNING</code>.</p>
 */
export class DeleteCrawlerCommand extends $Command<
  DeleteCrawlerCommandInput,
  DeleteCrawlerCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteCrawlerCommandInput) {
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
  ): Handler<DeleteCrawlerCommandInput, DeleteCrawlerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "DeleteCrawlerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCrawlerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteCrawlerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteCrawlerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteCrawlerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCrawlerCommandOutput> {
    return deserializeAws_json1_1DeleteCrawlerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
