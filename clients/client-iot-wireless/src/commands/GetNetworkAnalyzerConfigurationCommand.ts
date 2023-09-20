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
import { GetNetworkAnalyzerConfigurationRequest, GetNetworkAnalyzerConfigurationResponse } from "../models/models_0";
import {
  de_GetNetworkAnalyzerConfigurationCommand,
  se_GetNetworkAnalyzerConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetNetworkAnalyzerConfigurationCommand}.
 */
export interface GetNetworkAnalyzerConfigurationCommandInput extends GetNetworkAnalyzerConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetNetworkAnalyzerConfigurationCommand}.
 */
export interface GetNetworkAnalyzerConfigurationCommandOutput
  extends GetNetworkAnalyzerConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Get network analyzer configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetNetworkAnalyzerConfigurationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetNetworkAnalyzerConfigurationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // GetNetworkAnalyzerConfigurationRequest
 *   ConfigurationName: "STRING_VALUE", // required
 * };
 * const command = new GetNetworkAnalyzerConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetNetworkAnalyzerConfigurationResponse
 * //   TraceContent: { // TraceContent
 * //     WirelessDeviceFrameInfo: "ENABLED" || "DISABLED",
 * //     LogLevel: "INFO" || "ERROR" || "DISABLED",
 * //     MulticastFrameInfo: "ENABLED" || "DISABLED",
 * //   },
 * //   WirelessDevices: [ // WirelessDeviceList
 * //     "STRING_VALUE",
 * //   ],
 * //   WirelessGateways: [ // WirelessGatewayList
 * //     "STRING_VALUE",
 * //   ],
 * //   Description: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   MulticastGroups: [ // NetworkAnalyzerMulticastGroupList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetNetworkAnalyzerConfigurationCommandInput - {@link GetNetworkAnalyzerConfigurationCommandInput}
 * @returns {@link GetNetworkAnalyzerConfigurationCommandOutput}
 * @see {@link GetNetworkAnalyzerConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetNetworkAnalyzerConfigurationCommandOutput} for command's `response` shape.
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
export class GetNetworkAnalyzerConfigurationCommand extends $Command<
  GetNetworkAnalyzerConfigurationCommandInput,
  GetNetworkAnalyzerConfigurationCommandOutput,
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
  constructor(readonly input: GetNetworkAnalyzerConfigurationCommandInput) {
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
  ): Handler<GetNetworkAnalyzerConfigurationCommandInput, GetNetworkAnalyzerConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetNetworkAnalyzerConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "GetNetworkAnalyzerConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "iotwireless",
        operation: "GetNetworkAnalyzerConfiguration",
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
    input: GetNetworkAnalyzerConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetNetworkAnalyzerConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetNetworkAnalyzerConfigurationCommandOutput> {
    return de_GetNetworkAnalyzerConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
