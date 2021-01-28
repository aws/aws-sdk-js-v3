import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import {
  UpdateGatewayCapabilityConfigurationRequest,
  UpdateGatewayCapabilityConfigurationResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateGatewayCapabilityConfigurationCommand,
  serializeAws_restJson1UpdateGatewayCapabilityConfigurationCommand,
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

export type UpdateGatewayCapabilityConfigurationCommandInput = UpdateGatewayCapabilityConfigurationRequest;
export type UpdateGatewayCapabilityConfigurationCommandOutput = UpdateGatewayCapabilityConfigurationResponse &
  __MetadataBearer;

/**
 * <p>Updates a gateway capability configuration or defines a new capability configuration.
 *       Each gateway capability defines data sources for a gateway. A capability configuration
 *       can contain multiple data source configurations. If you define OPC-UA sources for a gateway in
 *       the AWS IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To
 *       list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.</p>
 */
export class UpdateGatewayCapabilityConfigurationCommand extends $Command<
  UpdateGatewayCapabilityConfigurationCommandInput,
  UpdateGatewayCapabilityConfigurationCommandOutput,
  IoTSiteWiseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateGatewayCapabilityConfigurationCommandInput) {
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
  ): Handler<UpdateGatewayCapabilityConfigurationCommandInput, UpdateGatewayCapabilityConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "UpdateGatewayCapabilityConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateGatewayCapabilityConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateGatewayCapabilityConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateGatewayCapabilityConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateGatewayCapabilityConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateGatewayCapabilityConfigurationCommandOutput> {
    return deserializeAws_restJson1UpdateGatewayCapabilityConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
