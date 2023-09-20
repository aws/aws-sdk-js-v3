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

import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { StopResourceRequest } from "../models/models_0";
import { de_StopResourceCommand, se_StopResourceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StopResourceCommand}.
 */
export interface StopResourceCommandInput extends StopResourceRequest {}
/**
 * @public
 *
 * The output of {@link StopResourceCommand}.
 */
export interface StopResourceCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Stops a resource.</p>
 *          <p>The resource undergoes the following states: <code>CREATE_STOPPING</code> and
 *             <code>CREATE_STOPPED</code>. You cannot resume a resource once it has been
 *          stopped.</p>
 *          <p>This operation can be applied to the following resources (and their corresponding child
 *          resources):</p>
 *          <ul>
 *             <li>
 *                <p>Dataset Import Job</p>
 *             </li>
 *             <li>
 *                <p>Predictor Job</p>
 *             </li>
 *             <li>
 *                <p>Forecast Job</p>
 *             </li>
 *             <li>
 *                <p>Forecast Export Job</p>
 *             </li>
 *             <li>
 *                <p>Predictor Backtest Export Job</p>
 *             </li>
 *             <li>
 *                <p>Explainability Job</p>
 *             </li>
 *             <li>
 *                <p>Explainability Export Job</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, StopResourceCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, StopResourceCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const input = { // StopResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new StopResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopResourceCommandInput - {@link StopResourceCommandInput}
 * @returns {@link StopResourceCommandOutput}
 * @see {@link StopResourceCommandInput} for command's `input` shape.
 * @see {@link StopResourceCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit on the number of resources per account has been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try
 *       again.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 */
export class StopResourceCommand extends $Command<
  StopResourceCommandInput,
  StopResourceCommandOutput,
  ForecastClientResolvedConfig
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
  constructor(readonly input: StopResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopResourceCommandInput, StopResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StopResourceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "StopResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonForecast",
        operation: "StopResource",
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
  private serialize(input: StopResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StopResourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopResourceCommandOutput> {
    return de_StopResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
