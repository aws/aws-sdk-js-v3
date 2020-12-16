import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { UpdateServiceSettingRequest, UpdateServiceSettingResult } from "../models/models_1";
import {
  deserializeAws_json1_1UpdateServiceSettingCommand,
  serializeAws_json1_1UpdateServiceSettingCommand,
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

export type UpdateServiceSettingCommandInput = UpdateServiceSettingRequest;
export type UpdateServiceSettingCommandOutput = UpdateServiceSettingResult & __MetadataBearer;

/**
 * <p>
 *             <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting
 *    defines how a user interacts with or uses a service or a feature of a service. For example, if an
 *    AWS service charges money to the account based on feature or service usage, then the AWS service
 *    team might create a default setting of "false". This means the user can't use this feature unless
 *    they change the setting to "true" and intentionally opt in for a paid feature.</p>
 *          <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define
 *    the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>,
 *    but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code>
 *    permission for the setting. Use the <a>GetServiceSetting</a> API action to view the
 *    current value. Or, use the <a>ResetServiceSetting</a> to change the value back to the
 *    original value defined by the AWS service team.</p>
 *
 *          <p>Update the service setting for the account. </p>
 */
export class UpdateServiceSettingCommand extends $Command<
  UpdateServiceSettingCommandInput,
  UpdateServiceSettingCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateServiceSettingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateServiceSettingCommandInput, UpdateServiceSettingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UpdateServiceSettingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateServiceSettingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateServiceSettingResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateServiceSettingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateServiceSettingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateServiceSettingCommandOutput> {
    return deserializeAws_json1_1UpdateServiceSettingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
