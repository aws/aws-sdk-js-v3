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
import {
  DescribePredictorRequest,
  DescribePredictorRequestFilterSensitiveLog,
  DescribePredictorResponse,
  DescribePredictorResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribePredictorCommand,
  serializeAws_json1_1DescribePredictorCommand,
} from "../protocols/Aws_json1_1";

export interface DescribePredictorCommandInput extends DescribePredictorRequest {}
export interface DescribePredictorCommandOutput extends DescribePredictorResponse, __MetadataBearer {}

/**
 * <note>
 *             <p> This operation is only valid for legacy predictors created with CreatePredictor. If you
 *         are not using a legacy predictor, use <a>DescribeAutoPredictor</a>.</p>
 *          </note>
 *          <p>Describes a predictor created using the <a>CreatePredictor</a>
 *       operation.</p>
 *          <p>In addition to listing the properties provided in the <code>CreatePredictor</code>
 *       request, this operation lists the following properties:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>DatasetImportJobArns</code> - The dataset import jobs used to import training
 *           data.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>AutoMLAlgorithmArns</code> - If AutoML is performed, the algorithms that were
 *           evaluated.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LastModificationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Status</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Message</code> - If an error occurred, information about the error.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribePredictorCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribePredictorCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DescribePredictorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePredictorCommandInput} for command's `input` shape.
 * @see {@link DescribePredictorCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 */
export class DescribePredictorCommand extends $Command<
  DescribePredictorCommandInput,
  DescribePredictorCommandOutput,
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

  constructor(readonly input: DescribePredictorCommandInput) {
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
  ): Handler<DescribePredictorCommandInput, DescribePredictorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePredictorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "DescribePredictorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePredictorRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribePredictorResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePredictorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribePredictorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePredictorCommandOutput> {
    return deserializeAws_json1_1DescribePredictorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
