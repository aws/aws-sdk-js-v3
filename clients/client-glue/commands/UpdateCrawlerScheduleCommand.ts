import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateCrawlerScheduleRequest, UpdateCrawlerScheduleResponse } from "../models/models_1";
import {
  deserializeAws_json1_1UpdateCrawlerScheduleCommand,
  serializeAws_json1_1UpdateCrawlerScheduleCommand,
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

export type UpdateCrawlerScheduleCommandInput = UpdateCrawlerScheduleRequest;
export type UpdateCrawlerScheduleCommandOutput = UpdateCrawlerScheduleResponse & __MetadataBearer;

/**
 * <p>Updates the schedule of a crawler using a <code>cron</code> expression. </p>
 */
export class UpdateCrawlerScheduleCommand extends $Command<
  UpdateCrawlerScheduleCommandInput,
  UpdateCrawlerScheduleCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateCrawlerScheduleCommandInput) {
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
  ): Handler<UpdateCrawlerScheduleCommandInput, UpdateCrawlerScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "UpdateCrawlerScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateCrawlerScheduleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateCrawlerScheduleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateCrawlerScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateCrawlerScheduleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateCrawlerScheduleCommandOutput> {
    return deserializeAws_json1_1UpdateCrawlerScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
