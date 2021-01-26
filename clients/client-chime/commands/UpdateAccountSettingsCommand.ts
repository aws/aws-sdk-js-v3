import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { UpdateAccountSettingsRequest, UpdateAccountSettingsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateAccountSettingsCommand,
  serializeAws_restJson1UpdateAccountSettingsCommand,
} from "../protocols/Aws_restJson1";
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

export type UpdateAccountSettingsCommandInput = UpdateAccountSettingsRequest;
export type UpdateAccountSettingsCommandOutput = UpdateAccountSettingsResponse & __MetadataBearer;

/**
 * <p>Updates the settings for the specified Amazon Chime account. You can update settings
 *       for remote control of shared screens, or for the dial-out option. For more information about
 *       these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the
 *         Policies Page</a> in the <i>Amazon Chime Administration
 *       Guide</i>.</p>
 */
export class UpdateAccountSettingsCommand extends $Command<
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAccountSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAccountSettingsCommandInput, UpdateAccountSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "UpdateAccountSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAccountSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAccountSettingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAccountSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateAccountSettingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAccountSettingsCommandOutput> {
    return deserializeAws_restJson1UpdateAccountSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
