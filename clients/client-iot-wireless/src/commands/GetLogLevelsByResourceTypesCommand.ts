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
import { GetLogLevelsByResourceTypesRequest, GetLogLevelsByResourceTypesResponse } from "../models/models_0";
import {
  de_GetLogLevelsByResourceTypesCommand,
  se_GetLogLevelsByResourceTypesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetLogLevelsByResourceTypesCommand}.
 */
export interface GetLogLevelsByResourceTypesCommandInput extends GetLogLevelsByResourceTypesRequest {}
/**
 * @public
 *
 * The output of {@link GetLogLevelsByResourceTypesCommand}.
 */
export interface GetLogLevelsByResourceTypesCommandOutput
  extends GetLogLevelsByResourceTypesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns current default log levels or log levels by resource types. Based on resource
 *             types, log levels can be for wireless device log options or wireless gateway log
 *             options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetLogLevelsByResourceTypesCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetLogLevelsByResourceTypesCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = {};
 * const command = new GetLogLevelsByResourceTypesCommand(input);
 * const response = await client.send(command);
 * // { // GetLogLevelsByResourceTypesResponse
 * //   DefaultLogLevel: "INFO" || "ERROR" || "DISABLED",
 * //   WirelessGatewayLogOptions: [ // WirelessGatewayLogOptionList
 * //     { // WirelessGatewayLogOption
 * //       Type: "LoRaWAN", // required
 * //       LogLevel: "INFO" || "ERROR" || "DISABLED", // required
 * //       Events: [ // WirelessGatewayEventLogOptionList
 * //         { // WirelessGatewayEventLogOption
 * //           Event: "CUPS_Request" || "Certificate", // required
 * //           LogLevel: "INFO" || "ERROR" || "DISABLED", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   WirelessDeviceLogOptions: [ // WirelessDeviceLogOptionList
 * //     { // WirelessDeviceLogOption
 * //       Type: "Sidewalk" || "LoRaWAN", // required
 * //       LogLevel: "INFO" || "ERROR" || "DISABLED", // required
 * //       Events: [ // WirelessDeviceEventLogOptionList
 * //         { // WirelessDeviceEventLogOption
 * //           Event: "Join" || "Rejoin" || "Uplink_Data" || "Downlink_Data" || "Registration", // required
 * //           LogLevel: "INFO" || "ERROR" || "DISABLED", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetLogLevelsByResourceTypesCommandInput - {@link GetLogLevelsByResourceTypesCommandInput}
 * @returns {@link GetLogLevelsByResourceTypesCommandOutput}
 * @see {@link GetLogLevelsByResourceTypesCommandInput} for command's `input` shape.
 * @see {@link GetLogLevelsByResourceTypesCommandOutput} for command's `response` shape.
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
export class GetLogLevelsByResourceTypesCommand extends $Command<
  GetLogLevelsByResourceTypesCommandInput,
  GetLogLevelsByResourceTypesCommandOutput,
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
  constructor(readonly input: GetLogLevelsByResourceTypesCommandInput) {
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
  ): Handler<GetLogLevelsByResourceTypesCommandInput, GetLogLevelsByResourceTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLogLevelsByResourceTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "GetLogLevelsByResourceTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "iotwireless",
        operation: "GetLogLevelsByResourceTypes",
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
  private serialize(input: GetLogLevelsByResourceTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetLogLevelsByResourceTypesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetLogLevelsByResourceTypesCommandOutput> {
    return de_GetLogLevelsByResourceTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
