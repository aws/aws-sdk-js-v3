import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { PutLoggingConfigurationRequest, PutLoggingConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutLoggingConfigurationCommand,
  serializeAws_json1_1PutLoggingConfigurationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

export interface PutLoggingConfigurationCommandInput extends PutLoggingConfigurationRequest {}
export interface PutLoggingConfigurationCommandOutput extends PutLoggingConfigurationResponse, __MetadataBearer {}

/**
 * <p>Enables the specified <a>LoggingConfiguration</a>, to start logging from a
 *          web ACL, according to the configuration provided. </p>
 *          <note>
 *             <p>You can define one logging destination per web ACL.</p>
 *          </note>
 *          <p>You can access information about the traffic that WAF inspects using the following
 *          steps:</p>
 *          <ol>
 *             <li>
 *                <p>Create your logging destination. You can use an Amazon CloudWatch Logs log group, an Amazon Simple Storage Service (Amazon S3) bucket, or an Amazon Kinesis Data Firehose.
 *                  For information about configuring logging destinations and the permissions that are required for each, see
 *                  <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging web ACL traffic information</a>
 *                  in the <i>WAF Developer Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>Associate your logging destination to your web ACL using a
 *                   <code>PutLoggingConfiguration</code> request.</p>
 *             </li>
 *          </ol>
 *          <p>When you successfully enable logging using a <code>PutLoggingConfiguration</code>
 *           request, WAF creates an additional role or policy that is required to write
 *               logs to the logging destination. For an Amazon CloudWatch Logs log group, WAF creates a resource policy on the log group.
 *           For an Amazon S3 bucket, WAF creates a bucket policy. For an Amazon Kinesis Data Firehose, WAF creates a service-linked role.</p>
 *          <p>For additional information about web ACL logging, see
 *            <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging web ACL traffic information</a>
 *                in the <i>WAF Developer Guide</i>.</p>
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
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
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
