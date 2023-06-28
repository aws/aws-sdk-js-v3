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
} from "@smithy/types";

import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  UpdateEventConfigurationByResourceTypesRequest,
  UpdateEventConfigurationByResourceTypesResponse,
} from "../models/models_1";
import {
  de_UpdateEventConfigurationByResourceTypesCommand,
  se_UpdateEventConfigurationByResourceTypesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateEventConfigurationByResourceTypesCommand}.
 */
export interface UpdateEventConfigurationByResourceTypesCommandInput
  extends UpdateEventConfigurationByResourceTypesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEventConfigurationByResourceTypesCommand}.
 */
export interface UpdateEventConfigurationByResourceTypesCommandOutput
  extends UpdateEventConfigurationByResourceTypesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Update the event configuration based on resource types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateEventConfigurationByResourceTypesCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateEventConfigurationByResourceTypesCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // UpdateEventConfigurationByResourceTypesRequest
 *   DeviceRegistrationState: { // DeviceRegistrationStateResourceTypeEventConfiguration
 *     Sidewalk: { // SidewalkResourceTypeEventConfiguration
 *       WirelessDeviceEventTopic: "Enabled" || "Disabled",
 *     },
 *   },
 *   Proximity: { // ProximityResourceTypeEventConfiguration
 *     Sidewalk: {
 *       WirelessDeviceEventTopic: "Enabled" || "Disabled",
 *     },
 *   },
 *   Join: { // JoinResourceTypeEventConfiguration
 *     LoRaWAN: { // LoRaWANJoinResourceTypeEventConfiguration
 *       WirelessDeviceEventTopic: "Enabled" || "Disabled",
 *     },
 *   },
 *   ConnectionStatus: { // ConnectionStatusResourceTypeEventConfiguration
 *     LoRaWAN: { // LoRaWANConnectionStatusResourceTypeEventConfiguration
 *       WirelessGatewayEventTopic: "Enabled" || "Disabled",
 *     },
 *   },
 *   MessageDeliveryStatus: { // MessageDeliveryStatusResourceTypeEventConfiguration
 *     Sidewalk: {
 *       WirelessDeviceEventTopic: "Enabled" || "Disabled",
 *     },
 *   },
 * };
 * const command = new UpdateEventConfigurationByResourceTypesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateEventConfigurationByResourceTypesCommandInput - {@link UpdateEventConfigurationByResourceTypesCommandInput}
 * @returns {@link UpdateEventConfigurationByResourceTypesCommandOutput}
 * @see {@link UpdateEventConfigurationByResourceTypesCommandInput} for command's `input` shape.
 * @see {@link UpdateEventConfigurationByResourceTypesCommandOutput} for command's `response` shape.
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
export class UpdateEventConfigurationByResourceTypesCommand extends $Command<
  UpdateEventConfigurationByResourceTypesCommandInput,
  UpdateEventConfigurationByResourceTypesCommandOutput,
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
  constructor(readonly input: UpdateEventConfigurationByResourceTypesCommandInput) {
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
  ): Handler<
    UpdateEventConfigurationByResourceTypesCommandInput,
    UpdateEventConfigurationByResourceTypesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        UpdateEventConfigurationByResourceTypesCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "UpdateEventConfigurationByResourceTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
    input: UpdateEventConfigurationByResourceTypesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateEventConfigurationByResourceTypesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateEventConfigurationByResourceTypesCommandOutput> {
    return de_UpdateEventConfigurationByResourceTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
