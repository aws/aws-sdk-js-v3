// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAutoPredictorRequest, CreateAutoPredictorResponse } from "../models/models_0";
import { CreateAutoPredictor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates an Amazon Forecast predictor.
 *
 * Amazon Forecast creates predictors with AutoPredictor, which involves applying the optimal combination of algorithms to each time series in your datasets. You can use CreateAutoPredictor to create new predictors or upgrade/retrain existing predictors.
 *
 * **Creating new predictors**
 *
 * The following parameters are required when creating a new predictor:
 *
 * - `PredictorName` - A unique name for the predictor.
 * - `DatasetGroupArn` - The ARN of the dataset group used to train the predictor.
 * - `ForecastFrequency` - The granularity of your forecasts (hourly, daily, weekly, etc).
 * - `ForecastHorizon` - The number of time-steps that the model predicts. The forecast horizon is also called the prediction length.
 *
 * When creating a new predictor, do not specify a value for `ReferencePredictorArn`.
 *
 * **Upgrading and retraining predictors**
 *
 * The following parameters are required when retraining or upgrading a predictor:
 *
 * - `PredictorName` - A unique name for the predictor.
 * - `ReferencePredictorArn` - The ARN of the predictor to retrain or upgrade.
 *
 * When upgrading or retraining a predictor, only specify values for the `ReferencePredictorArn` and `PredictorName`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateAutoPredictorCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateAutoPredictorCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
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
 *
 * We can't process the request because it includes an invalid value or a value that exceeds the valid range.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The limit on the number of resources per account has been exceeded.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * There is already a resource with this name. Try again with a different name.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try again.
 *
 * @throws {@link ForecastServiceException}
 *
 * Base exception class for all service exceptions from Forecast service.
 *
 * @public
 */
export class CreateAutoPredictorCommand extends command<CreateAutoPredictorCommandInput, CreateAutoPredictorCommandOutput>(
  _ep0,
  _mw0,
  "CreateAutoPredictor",
  CreateAutoPredictor$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAutoPredictorRequest;
      output: CreateAutoPredictorResponse;
    };
    sdk: {
      input: CreateAutoPredictorCommandInput;
      output: CreateAutoPredictorCommandOutput;
    };
  };
}
