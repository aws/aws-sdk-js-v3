import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { UpdateNotificationSettingsRequest, UpdateNotificationSettingsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateNotificationSettingsCommand,
  serializeAws_json1_1UpdateNotificationSettingsCommand,
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

export type UpdateNotificationSettingsCommandInput = UpdateNotificationSettingsRequest;
export type UpdateNotificationSettingsCommandOutput = UpdateNotificationSettingsResponse & __MetadataBearer;

/**
 * <p>
 *             The <code>UpdateNotificationSettings</code> operation creates, updates,
 *             disables or re-enables notifications for a HIT type.
 *             If you call the UpdateNotificationSettings operation for a HIT type that already has a
 *             notification specification, the operation replaces the old specification with a new one.
 *             You can call the UpdateNotificationSettings operation to enable or disable notifications
 *             for the HIT type, without having to modify the notification specification itself by providing
 *             updates to the Active status without specifying a new notification specification.
 *             To change the Active status of a HIT type's notifications,
 *             the HIT type must already have a notification specification,
 *             or one must be provided in the same call to <code>UpdateNotificationSettings</code>.
 *         </p>
 */
export class UpdateNotificationSettingsCommand extends $Command<
  UpdateNotificationSettingsCommandInput,
  UpdateNotificationSettingsCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateNotificationSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateNotificationSettingsCommandInput, UpdateNotificationSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "UpdateNotificationSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateNotificationSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateNotificationSettingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateNotificationSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateNotificationSettingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateNotificationSettingsCommandOutput> {
    return deserializeAws_json1_1UpdateNotificationSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
