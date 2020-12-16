import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateCrawlerRequest, CreateCrawlerResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateCrawlerCommand,
  serializeAws_json1_1CreateCrawlerCommand,
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

export type CreateCrawlerCommandInput = CreateCrawlerRequest;
export type CreateCrawlerCommandOutput = CreateCrawlerResponse & __MetadataBearer;

/**
 * <p>Creates a new crawler with specified targets, role, configuration, and optional schedule.
 *       At least one crawl target must be specified, in the <code>s3Targets</code> field, the
 *         <code>jdbcTargets</code> field, or the <code>DynamoDBTargets</code> field.</p>
 */
export class CreateCrawlerCommand extends $Command<
  CreateCrawlerCommandInput,
  CreateCrawlerCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCrawlerCommandInput) {
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
  ): Handler<CreateCrawlerCommandInput, CreateCrawlerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "CreateCrawlerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCrawlerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCrawlerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCrawlerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateCrawlerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCrawlerCommandOutput> {
    return deserializeAws_json1_1CreateCrawlerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
