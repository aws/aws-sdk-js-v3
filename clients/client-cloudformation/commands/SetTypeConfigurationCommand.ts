import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { SetTypeConfigurationInput, SetTypeConfigurationOutput } from "../models/models_0";
import {
  deserializeAws_querySetTypeConfigurationCommand,
  serializeAws_querySetTypeConfigurationCommand,
} from "../protocols/Aws_query";
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

export interface SetTypeConfigurationCommandInput extends SetTypeConfigurationInput {}
export interface SetTypeConfigurationCommandOutput extends SetTypeConfigurationOutput, __MetadataBearer {}

/**
 * <p>Specifies the configuration data for a registered CloudFormation extension, in the given
 *          account and region.</p>
 *          <p>To view the current configuration data for an extension, refer to the
 *             <code>ConfigurationSchema</code> element of <a href="AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>.
 *          For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the
 *             <i>CloudFormation User Guide</i>.</p>
 *          <important>
 *             <p>It is strongly recommended that you use dynamic references to restrict sensitive
 *             configuration definitions, such as third-party credentials. For more details on dynamic
 *             references, see <a href="https://docs.aws.amazon.com/">Using dynamic references to specify
 *                template values</a> in the <i>CloudFormation User
 *             Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, SetTypeConfigurationCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, SetTypeConfigurationCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new SetTypeConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetTypeConfigurationCommandInput} for command's `input` shape.
 * @see {@link SetTypeConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SetTypeConfigurationCommand extends $Command<
  SetTypeConfigurationCommandInput,
  SetTypeConfigurationCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetTypeConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetTypeConfigurationCommandInput, SetTypeConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "SetTypeConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetTypeConfigurationInput.filterSensitiveLog,
      outputFilterSensitiveLog: SetTypeConfigurationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetTypeConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySetTypeConfigurationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetTypeConfigurationCommandOutput> {
    return deserializeAws_querySetTypeConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
