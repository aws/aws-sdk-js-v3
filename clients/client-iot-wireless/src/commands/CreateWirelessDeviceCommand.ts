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
import { CreateWirelessDeviceRequest, CreateWirelessDeviceResponse } from "../models/models_0";
import { de_CreateWirelessDeviceCommand, se_CreateWirelessDeviceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateWirelessDeviceCommand}.
 */
export interface CreateWirelessDeviceCommandInput extends CreateWirelessDeviceRequest {}
/**
 * @public
 *
 * The output of {@link CreateWirelessDeviceCommand}.
 */
export interface CreateWirelessDeviceCommandOutput extends CreateWirelessDeviceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provisions a wireless device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, CreateWirelessDeviceCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, CreateWirelessDeviceCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // CreateWirelessDeviceRequest
 *   Type: "Sidewalk" || "LoRaWAN", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   DestinationName: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   LoRaWAN: { // LoRaWANDevice
 *     DevEui: "STRING_VALUE",
 *     DeviceProfileId: "STRING_VALUE",
 *     ServiceProfileId: "STRING_VALUE",
 *     OtaaV1_1: { // OtaaV1_1
 *       AppKey: "STRING_VALUE",
 *       NwkKey: "STRING_VALUE",
 *       JoinEui: "STRING_VALUE",
 *     },
 *     OtaaV1_0_x: { // OtaaV1_0_x
 *       AppKey: "STRING_VALUE",
 *       AppEui: "STRING_VALUE",
 *       GenAppKey: "STRING_VALUE",
 *     },
 *     AbpV1_1: { // AbpV1_1
 *       DevAddr: "STRING_VALUE",
 *       SessionKeys: { // SessionKeysAbpV1_1
 *         FNwkSIntKey: "STRING_VALUE",
 *         SNwkSIntKey: "STRING_VALUE",
 *         NwkSEncKey: "STRING_VALUE",
 *         AppSKey: "STRING_VALUE",
 *       },
 *       FCntStart: Number("int"),
 *     },
 *     AbpV1_0_x: { // AbpV1_0_x
 *       DevAddr: "STRING_VALUE",
 *       SessionKeys: { // SessionKeysAbpV1_0_x
 *         NwkSKey: "STRING_VALUE",
 *         AppSKey: "STRING_VALUE",
 *       },
 *       FCntStart: Number("int"),
 *     },
 *     FPorts: { // FPorts
 *       Fuota: Number("int"),
 *       Multicast: Number("int"),
 *       ClockSync: Number("int"),
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
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Positioning: "Enabled" || "Disabled",
 *   Sidewalk: { // SidewalkCreateWirelessDevice
 *     DeviceProfileId: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateWirelessDeviceCommand(input);
 * const response = await client.send(command);
 * // { // CreateWirelessDeviceResponse
 * //   Arn: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateWirelessDeviceCommandInput - {@link CreateWirelessDeviceCommandInput}
 * @returns {@link CreateWirelessDeviceCommandOutput}
 * @see {@link CreateWirelessDeviceCommandInput} for command's `input` shape.
 * @see {@link CreateWirelessDeviceCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Adding, updating, or deleting the resource can cause an inconsistent state.</p>
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
export class CreateWirelessDeviceCommand extends $Command<
  CreateWirelessDeviceCommandInput,
  CreateWirelessDeviceCommandOutput,
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
  constructor(readonly input: CreateWirelessDeviceCommandInput) {
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
  ): Handler<CreateWirelessDeviceCommandInput, CreateWirelessDeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateWirelessDeviceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "CreateWirelessDeviceCommand";
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
  private serialize(input: CreateWirelessDeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateWirelessDeviceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWirelessDeviceCommandOutput> {
    return de_CreateWirelessDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
