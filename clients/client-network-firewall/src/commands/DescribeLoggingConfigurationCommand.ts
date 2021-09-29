import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { DescribeLoggingConfigurationRequest, DescribeLoggingConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_json1_0DescribeLoggingConfigurationCommand,
  serializeAws_json1_0DescribeLoggingConfigurationCommand,
} from "../protocols/Aws_json1_0";
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

export interface DescribeLoggingConfigurationCommandInput extends DescribeLoggingConfigurationRequest {}
export interface DescribeLoggingConfigurationCommandOutput
  extends DescribeLoggingConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Returns the logging configuration for the specified firewall. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DescribeLoggingConfigurationCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DescribeLoggingConfigurationCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new DescribeLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeLoggingConfigurationCommand extends $Command<
  DescribeLoggingConfigurationCommandInput,
  DescribeLoggingConfigurationCommandOutput,
  NetworkFirewallClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLoggingConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkFirewallClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLoggingConfigurationCommandInput, DescribeLoggingConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "DescribeLoggingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLoggingConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeLoggingConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeLoggingConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeLoggingConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLoggingConfigurationCommandOutput> {
    return deserializeAws_json1_0DescribeLoggingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
