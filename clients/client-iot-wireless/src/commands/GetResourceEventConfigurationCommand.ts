// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetResourceEventConfigurationRequest, GetResourceEventConfigurationResponse } from "../models/models_0";
import {
  de_GetResourceEventConfigurationCommand,
  se_GetResourceEventConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetResourceEventConfigurationCommand}.
 */
export interface GetResourceEventConfigurationCommandInput extends GetResourceEventConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceEventConfigurationCommand}.
 */
export interface GetResourceEventConfigurationCommandOutput
  extends GetResourceEventConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Get the event configuration for a particular resource identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetResourceEventConfigurationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetResourceEventConfigurationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // GetResourceEventConfigurationRequest
 *   Identifier: "STRING_VALUE", // required
 *   IdentifierType: "PartnerAccountId" || "DevEui" || "GatewayEui" || "WirelessDeviceId" || "WirelessGatewayId", // required
 *   PartnerType: "Sidewalk",
 * };
 * const command = new GetResourceEventConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceEventConfigurationResponse
 * //   DeviceRegistrationState: { // DeviceRegistrationStateEventConfiguration
 * //     Sidewalk: { // SidewalkEventNotificationConfigurations
 * //       AmazonIdEventTopic: "Enabled" || "Disabled",
 * //     },
 * //     WirelessDeviceIdEventTopic: "Enabled" || "Disabled",
 * //   },
 * //   Proximity: { // ProximityEventConfiguration
 * //     Sidewalk: {
 * //       AmazonIdEventTopic: "Enabled" || "Disabled",
 * //     },
 * //     WirelessDeviceIdEventTopic: "Enabled" || "Disabled",
 * //   },
 * //   Join: { // JoinEventConfiguration
 * //     LoRaWAN: { // LoRaWANJoinEventNotificationConfigurations
 * //       DevEuiEventTopic: "Enabled" || "Disabled",
 * //     },
 * //     WirelessDeviceIdEventTopic: "Enabled" || "Disabled",
 * //   },
 * //   ConnectionStatus: { // ConnectionStatusEventConfiguration
 * //     LoRaWAN: { // LoRaWANConnectionStatusEventNotificationConfigurations
 * //       GatewayEuiEventTopic: "Enabled" || "Disabled",
 * //     },
 * //     WirelessGatewayIdEventTopic: "Enabled" || "Disabled",
 * //   },
 * //   MessageDeliveryStatus: { // MessageDeliveryStatusEventConfiguration
 * //     Sidewalk: {
 * //       AmazonIdEventTopic: "Enabled" || "Disabled",
 * //     },
 * //     WirelessDeviceIdEventTopic: "Enabled" || "Disabled",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetResourceEventConfigurationCommandInput - {@link GetResourceEventConfigurationCommandInput}
 * @returns {@link GetResourceEventConfigurationCommandOutput}
 * @see {@link GetResourceEventConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetResourceEventConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 */
export class GetResourceEventConfigurationCommand extends $Command<
  GetResourceEventConfigurationCommandInput,
  GetResourceEventConfigurationCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetResourceEventConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResourceEventConfigurationCommandInput, GetResourceEventConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetResourceEventConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "GetResourceEventConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "iotwireless",
        operation: "GetResourceEventConfiguration",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetResourceEventConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetResourceEventConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetResourceEventConfigurationCommandOutput> {
    return de_GetResourceEventConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
