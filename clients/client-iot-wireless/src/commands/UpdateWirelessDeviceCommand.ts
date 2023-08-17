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
import { UpdateWirelessDeviceRequest, UpdateWirelessDeviceResponse } from "../models/models_1";
import { de_UpdateWirelessDeviceCommand, se_UpdateWirelessDeviceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateWirelessDeviceCommand}.
 */
export interface UpdateWirelessDeviceCommandInput extends UpdateWirelessDeviceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWirelessDeviceCommand}.
 */
export interface UpdateWirelessDeviceCommandOutput extends UpdateWirelessDeviceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates properties of a wireless device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateWirelessDeviceCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateWirelessDeviceCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // UpdateWirelessDeviceRequest
 *   Id: "STRING_VALUE", // required
 *   DestinationName: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   LoRaWAN: { // LoRaWANUpdateDevice
 *     DeviceProfileId: "STRING_VALUE",
 *     ServiceProfileId: "STRING_VALUE",
 *     AbpV1_1: { // UpdateAbpV1_1
 *       FCntStart: Number("int"),
 *     },
 *     AbpV1_0_x: { // UpdateAbpV1_0_x
 *       FCntStart: Number("int"),
 *     },
 *     FPorts: { // UpdateFPorts
 *       Positioning: { // Positioning
 *         ClockSync: Number("int"),
 *         Stream: Number("int"),
 *         Gnss: Number("int"),
 *       },
 *       Applications: [ // Applications
 *         { // ApplicationConfig
 *           FPort: Number("int"),
 *           Type: "SemtechGeolocation",
 *           DestinationName: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   },
 *   Positioning: "Enabled" || "Disabled",
 * };
 * const command = new UpdateWirelessDeviceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateWirelessDeviceCommandInput - {@link UpdateWirelessDeviceCommandInput}
 * @returns {@link UpdateWirelessDeviceCommandOutput}
 * @see {@link UpdateWirelessDeviceCommandInput} for command's `input` shape.
 * @see {@link UpdateWirelessDeviceCommandOutput} for command's `response` shape.
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
export class UpdateWirelessDeviceCommand extends $Command<
  UpdateWirelessDeviceCommandInput,
  UpdateWirelessDeviceCommandOutput,
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
  constructor(readonly input: UpdateWirelessDeviceCommandInput) {
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
  ): Handler<UpdateWirelessDeviceCommandInput, UpdateWirelessDeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateWirelessDeviceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "UpdateWirelessDeviceCommand";
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
  private serialize(input: UpdateWirelessDeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateWirelessDeviceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateWirelessDeviceCommandOutput> {
    return de_UpdateWirelessDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
