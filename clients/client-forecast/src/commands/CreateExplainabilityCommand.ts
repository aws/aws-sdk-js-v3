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
  CreateExplainabilityRequest,
  CreateExplainabilityRequestFilterSensitiveLog,
  CreateExplainabilityResponse,
  CreateExplainabilityResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateExplainabilityCommand,
  serializeAws_json1_1CreateExplainabilityCommand,
} from "../protocols/Aws_json1_1";

export interface CreateExplainabilityCommandInput extends CreateExplainabilityRequest {}
export interface CreateExplainabilityCommandOutput extends CreateExplainabilityResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>Explainability is only available for Forecasts and Predictors generated from an
 *                 AutoPredictor (<a>CreateAutoPredictor</a>)</p>
 *         </note>
 *         <p>Creates an Amazon Forecast Explainability.</p>
 *         <p>Explainability helps you better understand how the attributes in your datasets impact
 *             forecast. Amazon Forecast uses a metric called Impact scores to quantify the relative
 *             impact of each attribute and determine whether they increase or decrease forecast
 *             values.</p>
 *         <p>To enable Forecast Explainability, your predictor must include at least one of the
 *             following: related time series, item metadata, or additional datasets like Holidays and
 *             the Weather Index.</p>
 *         <p>CreateExplainability accepts either a Predictor ARN or Forecast ARN. To receive
 *             aggregated Impact scores for all time series and time points in your datasets, provide a
 *             Predictor ARN. To receive Impact scores for specific time series and time points,
 *             provide a Forecast ARN.</p>
 *         <p>
 *             <b>CreateExplainability with a Predictor ARN</b>
 *         </p>
 *         <note>
 *             <p>You can only have one Explainability resource per predictor. If you already
 *                 enabled <code>ExplainPredictor</code> in <a>CreateAutoPredictor</a>, that
 *                 predictor already has an Explainability resource.</p>
 *         </note>
 *         <p>The following parameters are required when providing a Predictor ARN:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>ExplainabilityName</code> - A unique name for the Explainability.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>ResourceArn</code> - The Arn of the predictor.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>TimePointGranularity</code> - Must be set to “ALL”.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>TimeSeriesGranularity</code> - Must be set to “ALL”.</p>
 *             </li>
 *          </ul>
 *         <p>Do not specify a value for the following parameters:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>DataSource</code> - Only valid when TimeSeriesGranularity is
 *                     “SPECIFIC”.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>Schema</code> - Only valid when TimeSeriesGranularity is
 *                     “SPECIFIC”.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>StartDateTime</code> - Only valid when TimePointGranularity is
 *                     “SPECIFIC”.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>EndDateTime</code> - Only valid when TimePointGranularity is
 *                     “SPECIFIC”.</p>
 *             </li>
 *          </ul>
 *         <p>
 *             <b>CreateExplainability with a Forecast ARN</b>
 *         </p>
 *         <note>
 *             <p>You can specify a maximum of 50 time series and 500 time points.</p>
 *         </note>
 *         <p>The following parameters are required when providing a Predictor ARN:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>ExplainabilityName</code> - A unique name for the Explainability.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>ResourceArn</code> - The Arn of the forecast.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>TimePointGranularity</code> - Either “ALL” or “SPECIFIC”.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>TimeSeriesGranularity</code> - Either “ALL” or “SPECIFIC”.</p>
 *             </li>
 *          </ul>
 *         <p>If you set TimeSeriesGranularity to “SPECIFIC”, you must also provide the
 *             following:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>DataSource</code> - The S3 location of the CSV file specifying your time
 *                     series.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>Schema</code> - The Schema defines the attributes and attribute types
 *                     listed in the Data Source.</p>
 *             </li>
 *          </ul>
 *         <p>If you set TimePointGranularity to “SPECIFIC”, you must also provide the
 *             following:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>StartDateTime</code> - The first timestamp in the range of time
 *                     points.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>EndDateTime</code> - The last timestamp in the range of time
 *                     points.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateExplainabilityCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateExplainabilityCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new CreateExplainabilityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateExplainabilityCommandInput} for command's `input` shape.
 * @see {@link CreateExplainabilityCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 */
export class CreateExplainabilityCommand extends $Command<
  CreateExplainabilityCommandInput,
  CreateExplainabilityCommandOutput,
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

  constructor(readonly input: CreateExplainabilityCommandInput) {
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
  ): Handler<CreateExplainabilityCommandInput, CreateExplainabilityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateExplainabilityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "CreateExplainabilityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateExplainabilityRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateExplainabilityResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateExplainabilityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateExplainabilityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateExplainabilityCommandOutput> {
    return deserializeAws_json1_1CreateExplainabilityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
