import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { PutLoggingConfigurationRequest, PutLoggingConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutLoggingConfigurationCommand,
  serializeAws_json1_1PutLoggingConfigurationCommand,
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

export interface PutLoggingConfigurationCommandInput extends PutLoggingConfigurationRequest {}
export interface PutLoggingConfigurationCommandOutput extends PutLoggingConfigurationResponse, __MetadataBearer {}

/**
 * <p>Enables the specified <a>LoggingConfiguration</a>, to start logging from a
 *          web ACL, according to the configuration provided.</p>
 *          <p>You can access information about all traffic that WAF inspects using the following
 *          steps:</p>
 *          <ol>
 *             <li>
 *                <p>Create an Amazon Kinesis Data Firehose. </p>
 *                <p>Create the data firehose with a PUT source and in the Region that you are
 *                operating. If you are capturing logs for Amazon CloudFront, always create the firehose in US
 *                East (N. Virginia). </p>
 *                <p>Give the data firehose a name that starts with the prefix
 *                   <code>aws-waf-logs-</code>. For example,
 *                   <code>aws-waf-logs-us-east-2-analytics</code>.</p>
 *                <note>
 *                   <p>Do not create the data firehose using a <code>Kinesis stream</code> as your
 *                   source.</p>
 *                </note>
 *             </li>
 *             <li>
 *                <p>Associate that firehose to your web ACL using a
 *                   <code>PutLoggingConfiguration</code> request.</p>
 *             </li>
 *          </ol>
 *          <p>When you successfully enable logging using a <code>PutLoggingConfiguration</code>
 *          request, WAF will create a service linked role with the necessary permissions to write
 *          logs to the Amazon Kinesis Data Firehose. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging Web ACL
 *             Traffic Information</a> in the <i>WAF Developer
 *          Guide</i>.</p>
 *          <note>
 *             <p>This operation completely replaces the mutable specifications that you already have for the logging configuration with the ones that you provide to this call. To modify the logging configuration, retrieve it by calling <a>GetLoggingConfiguration</a>, update the settings as needed, and then provide the complete logging configuration specification to this call.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, PutLoggingConfigurationCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, PutLoggingConfigurationCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new PutLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutLoggingConfigurationCommand extends $Command<
  PutLoggingConfigurationCommandInput,
  PutLoggingConfigurationCommandOutput,
  WAFV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutLoggingConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutLoggingConfigurationCommandInput, PutLoggingConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "PutLoggingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutLoggingConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutLoggingConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutLoggingConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutLoggingConfigurationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutLoggingConfigurationCommandOutput> {
    return deserializeAws_json1_1PutLoggingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
