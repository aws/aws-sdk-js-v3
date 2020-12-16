import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import {
  DescribeGatewayCapabilityConfigurationRequest,
  DescribeGatewayCapabilityConfigurationResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeGatewayCapabilityConfigurationCommand,
  serializeAws_restJson1DescribeGatewayCapabilityConfigurationCommand,
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

export type DescribeGatewayCapabilityConfigurationCommandInput = DescribeGatewayCapabilityConfigurationRequest;
export type DescribeGatewayCapabilityConfigurationCommandOutput = DescribeGatewayCapabilityConfigurationResponse &
  __MetadataBearer;

/**
 * <p>Retrieves information about a gateway capability configuration.
 *       Each gateway capability defines data sources for a gateway. A capability configuration
 *       can contain multiple data source configurations. If you define OPC-UA sources for a gateway in
 *       the AWS IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To
 *       list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.</p>
 */
export class DescribeGatewayCapabilityConfigurationCommand extends $Command<
  DescribeGatewayCapabilityConfigurationCommandInput,
  DescribeGatewayCapabilityConfigurationCommandOutput,
  IoTSiteWiseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeGatewayCapabilityConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSiteWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeGatewayCapabilityConfigurationCommandInput, DescribeGatewayCapabilityConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "DescribeGatewayCapabilityConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeGatewayCapabilityConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeGatewayCapabilityConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeGatewayCapabilityConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeGatewayCapabilityConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeGatewayCapabilityConfigurationCommandOutput> {
    return deserializeAws_restJson1DescribeGatewayCapabilityConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
