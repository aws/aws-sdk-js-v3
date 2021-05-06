import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { StopResourceRequest } from "../models/models_0";
import {
  deserializeAws_json1_1StopResourceCommand,
  serializeAws_json1_1StopResourceCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface StopResourceCommandInput extends StopResourceRequest {}
export interface StopResourceCommandOutput extends __MetadataBearer {}

/**
 * <p>Stops a resource.</p>
 *          <p>The resource undergoes the following states:
 *          <code>CREATE_STOPPING</code> and <code>CREATE_STOPPED</code>. You cannot resume
 *          a resource once it has been stopped.</p>
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
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StopResourceCommand extends $Command<
  StopResourceCommandInput,
  StopResourceCommandOutput,
  ForecastClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "StopResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopResourceRequest.filterSensitiveLog,
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
