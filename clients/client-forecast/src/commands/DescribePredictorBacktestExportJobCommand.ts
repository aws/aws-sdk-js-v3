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
import {
  DescribePredictorBacktestExportJobRequest,
  DescribePredictorBacktestExportJobResponse,
} from "../models/models_0";
import {
  de_DescribePredictorBacktestExportJobCommand,
  se_DescribePredictorBacktestExportJobCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribePredictorBacktestExportJobCommand}.
 */
export interface DescribePredictorBacktestExportJobCommandInput extends DescribePredictorBacktestExportJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribePredictorBacktestExportJobCommand}.
 */
export interface DescribePredictorBacktestExportJobCommandOutput
  extends DescribePredictorBacktestExportJobResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes a predictor backtest export job created using the <a>CreatePredictorBacktestExportJob</a> operation.</p>
 *          <p>In addition to listing the properties provided by the user in the
 *                 <code>CreatePredictorBacktestExportJob</code> request, this operation lists the
 *             following properties:</p>
 *          <ul>
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
 *                   <code>Message</code> (if an error occurred)</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribePredictorBacktestExportJobCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribePredictorBacktestExportJobCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const input = { // DescribePredictorBacktestExportJobRequest
 *   PredictorBacktestExportJobArn: "STRING_VALUE", // required
 * };
 * const command = new DescribePredictorBacktestExportJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribePredictorBacktestExportJobResponse
 * //   PredictorBacktestExportJobArn: "STRING_VALUE",
 * //   PredictorBacktestExportJobName: "STRING_VALUE",
 * //   PredictorArn: "STRING_VALUE",
 * //   Destination: { // DataDestination
 * //     S3Config: { // S3Config
 * //       Path: "STRING_VALUE", // required
 * //       RoleArn: "STRING_VALUE", // required
 * //       KMSKeyArn: "STRING_VALUE",
 * //     },
 * //   },
 * //   Message: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModificationTime: new Date("TIMESTAMP"),
 * //   Format: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribePredictorBacktestExportJobCommandInput - {@link DescribePredictorBacktestExportJobCommandInput}
 * @returns {@link DescribePredictorBacktestExportJobCommandOutput}
 * @see {@link DescribePredictorBacktestExportJobCommandInput} for command's `input` shape.
 * @see {@link DescribePredictorBacktestExportJobCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try
 *       again.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 */
export class DescribePredictorBacktestExportJobCommand extends $Command<
  DescribePredictorBacktestExportJobCommandInput,
  DescribePredictorBacktestExportJobCommandOutput,
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
  constructor(readonly input: DescribePredictorBacktestExportJobCommandInput) {
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
  ): Handler<DescribePredictorBacktestExportJobCommandInput, DescribePredictorBacktestExportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePredictorBacktestExportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "DescribePredictorBacktestExportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonForecast",
        operation: "DescribePredictorBacktestExportJob",
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
    input: DescribePredictorBacktestExportJobCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribePredictorBacktestExportJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribePredictorBacktestExportJobCommandOutput> {
    return de_DescribePredictorBacktestExportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
