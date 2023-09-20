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
import { SendDataToWirelessDeviceRequest, SendDataToWirelessDeviceResponse } from "../models/models_1";
import { de_SendDataToWirelessDeviceCommand, se_SendDataToWirelessDeviceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SendDataToWirelessDeviceCommand}.
 */
export interface SendDataToWirelessDeviceCommandInput extends SendDataToWirelessDeviceRequest {}
/**
 * @public
 *
 * The output of {@link SendDataToWirelessDeviceCommand}.
 */
export interface SendDataToWirelessDeviceCommandOutput extends SendDataToWirelessDeviceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Sends a decrypted application data frame to a device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, SendDataToWirelessDeviceCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, SendDataToWirelessDeviceCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // SendDataToWirelessDeviceRequest
 *   Id: "STRING_VALUE", // required
 *   TransmitMode: Number("int"), // required
 *   PayloadData: "STRING_VALUE", // required
 *   WirelessMetadata: { // WirelessMetadata
 *     LoRaWAN: { // LoRaWANSendDataToDevice
 *       FPort: Number("int"),
 *       ParticipatingGateways: { // ParticipatingGateways
 *         DownlinkMode: "SEQUENTIAL" || "CONCURRENT" || "USING_UPLINK_GATEWAY", // required
 *         GatewayList: [ // GatewayList // required
 *           { // GatewayListItem
 *             GatewayId: "STRING_VALUE", // required
 *             DownlinkFrequency: Number("int"), // required
 *           },
 *         ],
 *         TransmissionInterval: Number("int"), // required
 *       },
 *     },
 *     Sidewalk: { // SidewalkSendDataToDevice
 *       Seq: Number("int"),
 *       MessageType: "CUSTOM_COMMAND_ID_NOTIFY" || "CUSTOM_COMMAND_ID_GET" || "CUSTOM_COMMAND_ID_SET" || "CUSTOM_COMMAND_ID_RESP",
 *       AckModeRetryDurationSecs: Number("int"),
 *     },
 *   },
 * };
 * const command = new SendDataToWirelessDeviceCommand(input);
 * const response = await client.send(command);
 * // { // SendDataToWirelessDeviceResponse
 * //   MessageId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendDataToWirelessDeviceCommandInput - {@link SendDataToWirelessDeviceCommandInput}
 * @returns {@link SendDataToWirelessDeviceCommandOutput}
 * @see {@link SendDataToWirelessDeviceCommandInput} for command's `input` shape.
 * @see {@link SendDataToWirelessDeviceCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
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
export class SendDataToWirelessDeviceCommand extends $Command<
  SendDataToWirelessDeviceCommandInput,
  SendDataToWirelessDeviceCommandOutput,
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
  constructor(readonly input: SendDataToWirelessDeviceCommandInput) {
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
  ): Handler<SendDataToWirelessDeviceCommandInput, SendDataToWirelessDeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SendDataToWirelessDeviceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "SendDataToWirelessDeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "iotwireless",
        operation: "SendDataToWirelessDevice",
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
  private serialize(input: SendDataToWirelessDeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SendDataToWirelessDeviceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendDataToWirelessDeviceCommandOutput> {
    return de_SendDataToWirelessDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
