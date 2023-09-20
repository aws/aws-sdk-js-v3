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
import { ListEventConfigurationsRequest, ListEventConfigurationsResponse } from "../models/models_0";
import { de_ListEventConfigurationsCommand, se_ListEventConfigurationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListEventConfigurationsCommand}.
 */
export interface ListEventConfigurationsCommandInput extends ListEventConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListEventConfigurationsCommand}.
 */
export interface ListEventConfigurationsCommandOutput extends ListEventConfigurationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>List event configurations where at least one event topic has been enabled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListEventConfigurationsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListEventConfigurationsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // ListEventConfigurationsRequest
 *   ResourceType: "SidewalkAccount" || "WirelessDevice" || "WirelessGateway", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListEventConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListEventConfigurationsResponse
 * //   NextToken: "STRING_VALUE",
 * //   EventConfigurationsList: [ // EventConfigurationsList
 * //     { // EventConfigurationItem
 * //       Identifier: "STRING_VALUE",
 * //       IdentifierType: "PartnerAccountId" || "DevEui" || "GatewayEui" || "WirelessDeviceId" || "WirelessGatewayId",
 * //       PartnerType: "Sidewalk",
 * //       Events: { // EventNotificationItemConfigurations
 * //         DeviceRegistrationState: { // DeviceRegistrationStateEventConfiguration
 * //           Sidewalk: { // SidewalkEventNotificationConfigurations
 * //             AmazonIdEventTopic: "Enabled" || "Disabled",
 * //           },
 * //           WirelessDeviceIdEventTopic: "Enabled" || "Disabled",
 * //         },
 * //         Proximity: { // ProximityEventConfiguration
 * //           Sidewalk: {
 * //             AmazonIdEventTopic: "Enabled" || "Disabled",
 * //           },
 * //           WirelessDeviceIdEventTopic: "Enabled" || "Disabled",
 * //         },
 * //         Join: { // JoinEventConfiguration
 * //           LoRaWAN: { // LoRaWANJoinEventNotificationConfigurations
 * //             DevEuiEventTopic: "Enabled" || "Disabled",
 * //           },
 * //           WirelessDeviceIdEventTopic: "Enabled" || "Disabled",
 * //         },
 * //         ConnectionStatus: { // ConnectionStatusEventConfiguration
 * //           LoRaWAN: { // LoRaWANConnectionStatusEventNotificationConfigurations
 * //             GatewayEuiEventTopic: "Enabled" || "Disabled",
 * //           },
 * //           WirelessGatewayIdEventTopic: "Enabled" || "Disabled",
 * //         },
 * //         MessageDeliveryStatus: { // MessageDeliveryStatusEventConfiguration
 * //           Sidewalk: {
 * //             AmazonIdEventTopic: "Enabled" || "Disabled",
 * //           },
 * //           WirelessDeviceIdEventTopic: "Enabled" || "Disabled",
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListEventConfigurationsCommandInput - {@link ListEventConfigurationsCommandInput}
 * @returns {@link ListEventConfigurationsCommandOutput}
 * @see {@link ListEventConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListEventConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
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
export class ListEventConfigurationsCommand extends $Command<
  ListEventConfigurationsCommandInput,
  ListEventConfigurationsCommandOutput,
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
  constructor(readonly input: ListEventConfigurationsCommandInput) {
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
  ): Handler<ListEventConfigurationsCommandInput, ListEventConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEventConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "ListEventConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "iotwireless",
        operation: "ListEventConfigurations",
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
  private serialize(input: ListEventConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListEventConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEventConfigurationsCommandOutput> {
    return de_ListEventConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
