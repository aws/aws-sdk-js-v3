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
import { UpdateLogLevelsByResourceTypesRequest, UpdateLogLevelsByResourceTypesResponse } from "../models/models_1";
import {
  de_UpdateLogLevelsByResourceTypesCommand,
  se_UpdateLogLevelsByResourceTypesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateLogLevelsByResourceTypesCommand}.
 */
export interface UpdateLogLevelsByResourceTypesCommandInput extends UpdateLogLevelsByResourceTypesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLogLevelsByResourceTypesCommand}.
 */
export interface UpdateLogLevelsByResourceTypesCommandOutput
  extends UpdateLogLevelsByResourceTypesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Set default log level, or log levels by resource types. This can be for wireless
 *             device log options or wireless gateways log options and is used to control the log
 *             messages that'll be displayed in CloudWatch.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateLogLevelsByResourceTypesCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateLogLevelsByResourceTypesCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // UpdateLogLevelsByResourceTypesRequest
 *   DefaultLogLevel: "INFO" || "ERROR" || "DISABLED",
 *   WirelessDeviceLogOptions: [ // WirelessDeviceLogOptionList
 *     { // WirelessDeviceLogOption
 *       Type: "Sidewalk" || "LoRaWAN", // required
 *       LogLevel: "INFO" || "ERROR" || "DISABLED", // required
 *       Events: [ // WirelessDeviceEventLogOptionList
 *         { // WirelessDeviceEventLogOption
 *           Event: "Join" || "Rejoin" || "Uplink_Data" || "Downlink_Data" || "Registration", // required
 *           LogLevel: "INFO" || "ERROR" || "DISABLED", // required
 *         },
 *       ],
 *     },
 *   ],
 *   WirelessGatewayLogOptions: [ // WirelessGatewayLogOptionList
 *     { // WirelessGatewayLogOption
 *       Type: "LoRaWAN", // required
 *       LogLevel: "INFO" || "ERROR" || "DISABLED", // required
 *       Events: [ // WirelessGatewayEventLogOptionList
 *         { // WirelessGatewayEventLogOption
 *           Event: "CUPS_Request" || "Certificate", // required
 *           LogLevel: "INFO" || "ERROR" || "DISABLED", // required
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new UpdateLogLevelsByResourceTypesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLogLevelsByResourceTypesCommandInput - {@link UpdateLogLevelsByResourceTypesCommandInput}
 * @returns {@link UpdateLogLevelsByResourceTypesCommandOutput}
 * @see {@link UpdateLogLevelsByResourceTypesCommandInput} for command's `input` shape.
 * @see {@link UpdateLogLevelsByResourceTypesCommandOutput} for command's `response` shape.
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
export class UpdateLogLevelsByResourceTypesCommand extends $Command<
  UpdateLogLevelsByResourceTypesCommandInput,
  UpdateLogLevelsByResourceTypesCommandOutput,
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
  constructor(readonly input: UpdateLogLevelsByResourceTypesCommandInput) {
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
  ): Handler<UpdateLogLevelsByResourceTypesCommandInput, UpdateLogLevelsByResourceTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateLogLevelsByResourceTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "UpdateLogLevelsByResourceTypesCommand";
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
    input: UpdateLogLevelsByResourceTypesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateLogLevelsByResourceTypesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateLogLevelsByResourceTypesCommandOutput> {
    return de_UpdateLogLevelsByResourceTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
