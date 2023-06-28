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
import { GetWirelessGatewayRequest, GetWirelessGatewayResponse } from "../models/models_0";
import { de_GetWirelessGatewayCommand, se_GetWirelessGatewayCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetWirelessGatewayCommand}.
 */
export interface GetWirelessGatewayCommandInput extends GetWirelessGatewayRequest {}
/**
 * @public
 *
 * The output of {@link GetWirelessGatewayCommand}.
 */
export interface GetWirelessGatewayCommandOutput extends GetWirelessGatewayResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a wireless gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetWirelessGatewayCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetWirelessGatewayCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // GetWirelessGatewayRequest
 *   Identifier: "STRING_VALUE", // required
 *   IdentifierType: "GatewayEui" || "WirelessGatewayId" || "ThingName", // required
 * };
 * const command = new GetWirelessGatewayCommand(input);
 * const response = await client.send(command);
 * // { // GetWirelessGatewayResponse
 * //   Name: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   LoRaWAN: { // LoRaWANGateway
 * //     GatewayEui: "STRING_VALUE",
 * //     RfRegion: "STRING_VALUE",
 * //     JoinEuiFilters: [ // JoinEuiFilters
 * //       [ // JoinEuiRange
 * //         "STRING_VALUE",
 * //       ],
 * //     ],
 * //     NetIdFilters: [ // NetIdFilters
 * //       "STRING_VALUE",
 * //     ],
 * //     SubBands: [ // SubBands
 * //       Number("int"),
 * //     ],
 * //     Beaconing: { // Beaconing
 * //       DataRate: Number("int"),
 * //       Frequencies: [ // BeaconingFrequencies
 * //         Number("int"),
 * //       ],
 * //     },
 * //     MaxEirp: Number("float"),
 * //   },
 * //   Arn: "STRING_VALUE",
 * //   ThingName: "STRING_VALUE",
 * //   ThingArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetWirelessGatewayCommandInput - {@link GetWirelessGatewayCommandInput}
 * @returns {@link GetWirelessGatewayCommandOutput}
 * @see {@link GetWirelessGatewayCommandInput} for command's `input` shape.
 * @see {@link GetWirelessGatewayCommandOutput} for command's `response` shape.
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
export class GetWirelessGatewayCommand extends $Command<
  GetWirelessGatewayCommandInput,
  GetWirelessGatewayCommandOutput,
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
  constructor(readonly input: GetWirelessGatewayCommandInput) {
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
  ): Handler<GetWirelessGatewayCommandInput, GetWirelessGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetWirelessGatewayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "GetWirelessGatewayCommand";
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
  private serialize(input: GetWirelessGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetWirelessGatewayCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetWirelessGatewayCommandOutput> {
    return de_GetWirelessGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
