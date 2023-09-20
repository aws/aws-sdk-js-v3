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
import {
  GetEventConfigurationByResourceTypesRequest,
  GetEventConfigurationByResourceTypesResponse,
} from "../models/models_0";
import {
  de_GetEventConfigurationByResourceTypesCommand,
  se_GetEventConfigurationByResourceTypesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetEventConfigurationByResourceTypesCommand}.
 */
export interface GetEventConfigurationByResourceTypesCommandInput extends GetEventConfigurationByResourceTypesRequest {}
/**
 * @public
 *
 * The output of {@link GetEventConfigurationByResourceTypesCommand}.
 */
export interface GetEventConfigurationByResourceTypesCommandOutput
  extends GetEventConfigurationByResourceTypesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Get the event configuration based on resource types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetEventConfigurationByResourceTypesCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetEventConfigurationByResourceTypesCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = {};
 * const command = new GetEventConfigurationByResourceTypesCommand(input);
 * const response = await client.send(command);
 * // { // GetEventConfigurationByResourceTypesResponse
 * //   DeviceRegistrationState: { // DeviceRegistrationStateResourceTypeEventConfiguration
 * //     Sidewalk: { // SidewalkResourceTypeEventConfiguration
 * //       WirelessDeviceEventTopic: "Enabled" || "Disabled",
 * //     },
 * //   },
 * //   Proximity: { // ProximityResourceTypeEventConfiguration
 * //     Sidewalk: {
 * //       WirelessDeviceEventTopic: "Enabled" || "Disabled",
 * //     },
 * //   },
 * //   Join: { // JoinResourceTypeEventConfiguration
 * //     LoRaWAN: { // LoRaWANJoinResourceTypeEventConfiguration
 * //       WirelessDeviceEventTopic: "Enabled" || "Disabled",
 * //     },
 * //   },
 * //   ConnectionStatus: { // ConnectionStatusResourceTypeEventConfiguration
 * //     LoRaWAN: { // LoRaWANConnectionStatusResourceTypeEventConfiguration
 * //       WirelessGatewayEventTopic: "Enabled" || "Disabled",
 * //     },
 * //   },
 * //   MessageDeliveryStatus: { // MessageDeliveryStatusResourceTypeEventConfiguration
 * //     Sidewalk: {
 * //       WirelessDeviceEventTopic: "Enabled" || "Disabled",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEventConfigurationByResourceTypesCommandInput - {@link GetEventConfigurationByResourceTypesCommandInput}
 * @returns {@link GetEventConfigurationByResourceTypesCommandOutput}
 * @see {@link GetEventConfigurationByResourceTypesCommandInput} for command's `input` shape.
 * @see {@link GetEventConfigurationByResourceTypesCommandOutput} for command's `response` shape.
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
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 */
export class GetEventConfigurationByResourceTypesCommand extends $Command<
  GetEventConfigurationByResourceTypesCommandInput,
  GetEventConfigurationByResourceTypesCommandOutput,
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
  constructor(readonly input: GetEventConfigurationByResourceTypesCommandInput) {
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
  ): Handler<GetEventConfigurationByResourceTypesCommandInput, GetEventConfigurationByResourceTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEventConfigurationByResourceTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "GetEventConfigurationByResourceTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "iotwireless",
        operation: "GetEventConfigurationByResourceTypes",
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
  private serialize(
    input: GetEventConfigurationByResourceTypesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetEventConfigurationByResourceTypesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetEventConfigurationByResourceTypesCommandOutput> {
    return de_GetEventConfigurationByResourceTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
