// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { CreateDeviceProfileRequest, CreateDeviceProfileResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateDeviceProfileCommand,
  serializeAws_restJson1CreateDeviceProfileCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateDeviceProfileCommand}.
 */
export interface CreateDeviceProfileCommandInput extends CreateDeviceProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateDeviceProfileCommand}.
 */
export interface CreateDeviceProfileCommandOutput extends CreateDeviceProfileResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new device profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, CreateDeviceProfileCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, CreateDeviceProfileCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = {
 *   Name: "STRING_VALUE",
 *   LoRaWAN: {
 *     SupportsClassB: true || false,
 *     ClassBTimeout: Number("int"),
 *     PingSlotPeriod: Number("int"),
 *     PingSlotDr: Number("int"),
 *     PingSlotFreq: Number("int"),
 *     SupportsClassC: true || false,
 *     ClassCTimeout: Number("int"),
 *     MacVersion: "STRING_VALUE",
 *     RegParamsRevision: "STRING_VALUE",
 *     RxDelay1: Number("int"),
 *     RxDrOffset1: Number("int"),
 *     RxDataRate2: Number("int"),
 *     RxFreq2: Number("int"),
 *     FactoryPresetFreqsList: [
 *       Number("int"),
 *     ],
 *     MaxEirp: Number("int"),
 *     MaxDutyCycle: Number("int"),
 *     RfRegion: "STRING_VALUE",
 *     SupportsJoin: true || false,
 *     Supports32BitFCnt: true || false,
 *   },
 *   Tags: [
 *     {
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new CreateDeviceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateDeviceProfileCommandInput - {@link CreateDeviceProfileCommandInput}
 * @returns {@link CreateDeviceProfileCommandOutput}
 * @see {@link CreateDeviceProfileCommandInput} for command's `input` shape.
 * @see {@link CreateDeviceProfileCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 *
 */
export class CreateDeviceProfileCommand extends $Command<
  CreateDeviceProfileCommandInput,
  CreateDeviceProfileCommandOutput,
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
  constructor(readonly input: CreateDeviceProfileCommandInput) {
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
  ): Handler<CreateDeviceProfileCommandInput, CreateDeviceProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDeviceProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "CreateDeviceProfileCommand";
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
  private serialize(input: CreateDeviceProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateDeviceProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDeviceProfileCommandOutput> {
    return deserializeAws_restJson1CreateDeviceProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
