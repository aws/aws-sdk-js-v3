import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  DescribeAccountAuditConfigurationRequest,
  DescribeAccountAuditConfigurationResponse,
} from "../models/models_1";
import {
  deserializeAws_restJson1DescribeAccountAuditConfigurationCommand,
  serializeAws_restJson1DescribeAccountAuditConfigurationCommand,
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

export interface DescribeAccountAuditConfigurationCommandInput extends DescribeAccountAuditConfigurationRequest {}
export interface DescribeAccountAuditConfigurationCommandOutput
  extends DescribeAccountAuditConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Gets information about the Device Defender audit settings for this account.
 *           Settings include how audit notifications are sent and which audit checks are
 *           enabled or disabled.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAccountAuditConfiguration</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeAccountAuditConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeAccountAuditConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeAccountAuditConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountAuditConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountAuditConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeAccountAuditConfigurationCommand extends $Command<
  DescribeAccountAuditConfigurationCommandInput,
  DescribeAccountAuditConfigurationCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAccountAuditConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAccountAuditConfigurationCommandInput, DescribeAccountAuditConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DescribeAccountAuditConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAccountAuditConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAccountAuditConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeAccountAuditConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAccountAuditConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAccountAuditConfigurationCommandOutput> {
    return deserializeAws_restJson1DescribeAccountAuditConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
