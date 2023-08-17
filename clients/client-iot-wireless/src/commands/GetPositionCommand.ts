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
import { GetPositionRequest, GetPositionResponse } from "../models/models_0";
import { de_GetPositionCommand, se_GetPositionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPositionCommand}.
 */
export interface GetPositionCommandInput extends GetPositionRequest {}
/**
 * @public
 *
 * The output of {@link GetPositionCommand}.
 */
export interface GetPositionCommandOutput extends GetPositionResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Get the position information for a given resource.</p>
 *          <important>
 *             <p>This action is no longer supported. Calls to retrieve the position information
 *                 should use the <a href="https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetResourcePosition.html">GetResourcePosition</a> API operation instead.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetPositionCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetPositionCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // GetPositionRequest
 *   ResourceIdentifier: "STRING_VALUE", // required
 *   ResourceType: "WirelessDevice" || "WirelessGateway", // required
 * };
 * const command = new GetPositionCommand(input);
 * const response = await client.send(command);
 * // { // GetPositionResponse
 * //   Position: [ // PositionCoordinate
 * //     Number("float"),
 * //   ],
 * //   Accuracy: { // Accuracy
 * //     HorizontalAccuracy: Number("float"),
 * //     VerticalAccuracy: Number("float"),
 * //   },
 * //   SolverType: "GNSS",
 * //   SolverProvider: "Semtech",
 * //   SolverVersion: "STRING_VALUE",
 * //   Timestamp: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPositionCommandInput - {@link GetPositionCommandInput}
 * @returns {@link GetPositionCommandOutput}
 * @see {@link GetPositionCommandInput} for command's `input` shape.
 * @see {@link GetPositionCommandOutput} for command's `response` shape.
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
export class GetPositionCommand extends $Command<
  GetPositionCommandInput,
  GetPositionCommandOutput,
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
  constructor(readonly input: GetPositionCommandInput) {
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
  ): Handler<GetPositionCommandInput, GetPositionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetPositionCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "GetPositionCommand";
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
  private serialize(input: GetPositionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetPositionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPositionCommandOutput> {
    return de_GetPositionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
