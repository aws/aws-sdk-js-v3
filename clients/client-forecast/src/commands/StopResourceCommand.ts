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

import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { StopResourceRequest, StopResourceRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1StopResourceCommand,
  serializeAws_json1_1StopResourceCommand,
} from "../protocols/Aws_json1_1";

export interface StopResourceCommandInput extends StopResourceRequest {}
export interface StopResourceCommandOutput extends __MetadataBearer {}

/**
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
 * const command = new StopResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopResourceCommandInput} for command's `input` shape.
 * @see {@link StopResourceCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
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
      inputFilterSensitiveLog: StopResourceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopResourceCommandOutput> {
    return deserializeAws_json1_1StopResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
