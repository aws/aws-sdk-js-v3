// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import {
  CreateAutoPredictorRequest,
  CreateAutoPredictorRequestFilterSensitiveLog,
  CreateAutoPredictorResponse,
} from "../models/models_0";
import { de_CreateAutoPredictorCommand, se_CreateAutoPredictorCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAutoPredictorCommand}.
 */
export interface CreateAutoPredictorCommandInput extends CreateAutoPredictorRequest {}
/**
 * @public
 *
 * The output of {@link CreateAutoPredictorCommand}.
 */
export interface CreateAutoPredictorCommandOutput extends CreateAutoPredictorResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Forecast predictor.</p>
 *          <p>Amazon Forecast creates predictors with AutoPredictor, which involves applying the
 *             optimal combination of algorithms to each time series in your datasets. You can use
 *                 <a>CreateAutoPredictor</a> to create new predictors or upgrade/retrain
 *             existing predictors.</p>
 *          <p>
 *             <b>Creating new predictors</b>
 *          </p>
 *          <p>The following parameters are required when creating a new predictor:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>PredictorName</code> - A unique name for the predictor.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DatasetGroupArn</code> - The ARN of the dataset group used to train the
 *                     predictor.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ForecastFrequency</code> - The granularity of your forecasts (hourly,
 *                     daily, weekly, etc).</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ForecastHorizon</code> - The number of time-steps that the model
 *                     predicts. The forecast horizon is also called the prediction length.</p>
 *             </li>
 *          </ul>
 *          <p>When creating a new predictor, do not specify a value for
 *                 <code>ReferencePredictorArn</code>.</p>
 *          <p>
 *             <b>Upgrading and retraining predictors</b>
 *          </p>
 *          <p>The following parameters are required when retraining or upgrading a predictor:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>PredictorName</code> - A unique name for the predictor.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ReferencePredictorArn</code> - The ARN of the predictor to retrain or
 *                     upgrade.</p>
 *             </li>
 *          </ul>
 *          <p>When upgrading or retraining a predictor, only specify values for the
 *                 <code>ReferencePredictorArn</code> and <code>PredictorName</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateAutoPredictorCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateAutoPredictorCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const input = { // CreateAutoPredictorRequest
 *   PredictorName: "STRING_VALUE", // required
 *   ForecastHorizon: Number("int"),
 *   ForecastTypes: [ // ForecastTypes
 *     "STRING_VALUE",
 *   ],
 *   ForecastDimensions: [ // ForecastDimensions
 *     "STRING_VALUE",
 *   ],
 *   ForecastFrequency: "STRING_VALUE",
 *   DataConfig: { // DataConfig
 *     DatasetGroupArn: "STRING_VALUE", // required
 *     AttributeConfigs: [ // AttributeConfigs
 *       { // AttributeConfig
 *         AttributeName: "STRING_VALUE", // required
 *         Transformations: { // Transformations // required
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     ],
 *     AdditionalDatasets: [ // AdditionalDatasets
 *       { // AdditionalDataset
 *         Name: "STRING_VALUE", // required
 *         Configuration: { // Configuration
 *           "<keys>": [ // Values
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     ],
 *   },
 *   EncryptionConfig: { // EncryptionConfig
 *     RoleArn: "STRING_VALUE", // required
 *     KMSKeyArn: "STRING_VALUE", // required
 *   },
 *   ReferencePredictorArn: "STRING_VALUE",
 *   OptimizationMetric: "WAPE" || "RMSE" || "AverageWeightedQuantileLoss" || "MASE" || "MAPE",
 *   ExplainPredictor: true || false,
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   MonitorConfig: { // MonitorConfig
 *     MonitorName: "STRING_VALUE", // required
 *   },
 *   TimeAlignmentBoundary: { // TimeAlignmentBoundary
 *     Month: "JANUARY" || "FEBRUARY" || "MARCH" || "APRIL" || "MAY" || "JUNE" || "JULY" || "AUGUST" || "SEPTEMBER" || "OCTOBER" || "NOVEMBER" || "DECEMBER",
 *     DayOfMonth: Number("int"),
 *     DayOfWeek: "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY",
 *     Hour: Number("int"),
 *   },
 * };
 * const command = new CreateAutoPredictorCommand(input);
 * const response = await client.send(command);
 * // { // CreateAutoPredictorResponse
 * //   PredictorArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAutoPredictorCommandInput - {@link CreateAutoPredictorCommandInput}
 * @returns {@link CreateAutoPredictorCommandOutput}
 * @see {@link CreateAutoPredictorCommandInput} for command's `input` shape.
 * @see {@link CreateAutoPredictorCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit on the number of resources per account has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>There is already a resource with this name. Try again with a different name.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try
 *       again.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 * @public
 */
export class CreateAutoPredictorCommand extends $Command
  .classBuilder<
    CreateAutoPredictorCommandInput,
    CreateAutoPredictorCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonForecast", "CreateAutoPredictor", {})
  .n("ForecastClient", "CreateAutoPredictorCommand")
  .f(CreateAutoPredictorRequestFilterSensitiveLog, void 0)
  .ser(se_CreateAutoPredictorCommand)
  .de(de_CreateAutoPredictorCommand)
  .build() {}
