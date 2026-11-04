// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateExplainabilityRequest, CreateExplainabilityResponse } from "../models/models_0";
import { CreateExplainability$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateExplainabilityCommand}.
 */
export interface CreateExplainabilityCommandInput extends CreateExplainabilityRequest {}
/**
 * @public
 *
 * The output of {@link CreateExplainabilityCommand}.
 */
export interface CreateExplainabilityCommandOutput extends CreateExplainabilityResponse, __MetadataBearer {}

/**
 * > **Note:** Explainability is only available for Forecasts and Predictors generated from an AutoPredictor (CreateAutoPredictor)
 *
 * Creates an Amazon Forecast Explainability.
 *
 * Explainability helps you better understand how the attributes in your datasets impact forecast. Amazon Forecast uses a metric called Impact scores to quantify the relative impact of each attribute and determine whether they increase or decrease forecast values.
 *
 * To enable Forecast Explainability, your predictor must include at least one of the following: related time series, item metadata, or additional datasets like Holidays and the Weather Index.
 *
 * CreateExplainability accepts either a Predictor ARN or Forecast ARN. To receive aggregated Impact scores for all time series and time points in your datasets, provide a Predictor ARN. To receive Impact scores for specific time series and time points, provide a Forecast ARN.
 *
 * **CreateExplainability with a Predictor ARN**
 *
 * > **Note:** You can only have one Explainability resource per predictor. If you already enabled `ExplainPredictor` in CreateAutoPredictor, that predictor already has an Explainability resource.
 *
 * The following parameters are required when providing a Predictor ARN:
 *
 * - `ExplainabilityName` - A unique name for the Explainability.
 * - `ResourceArn` - The Arn of the predictor.
 * - `TimePointGranularity` - Must be set to “ALL”.
 * - `TimeSeriesGranularity` - Must be set to “ALL”.
 *
 * Do not specify a value for the following parameters:
 *
 * - `DataSource` - Only valid when TimeSeriesGranularity is “SPECIFIC”.
 * - `Schema` - Only valid when TimeSeriesGranularity is “SPECIFIC”.
 * - `StartDateTime` - Only valid when TimePointGranularity is “SPECIFIC”.
 * - `EndDateTime` - Only valid when TimePointGranularity is “SPECIFIC”.
 *
 * **CreateExplainability with a Forecast ARN**
 *
 * > **Note:** You can specify a maximum of 50 time series and 500 time points.
 *
 * The following parameters are required when providing a Predictor ARN:
 *
 * - `ExplainabilityName` - A unique name for the Explainability.
 * - `ResourceArn` - The Arn of the forecast.
 * - `TimePointGranularity` - Either “ALL” or “SPECIFIC”.
 * - `TimeSeriesGranularity` - Either “ALL” or “SPECIFIC”.
 *
 * If you set TimeSeriesGranularity to “SPECIFIC”, you must also provide the following:
 *
 * - `DataSource` - The S3 location of the CSV file specifying your time series.
 * - `Schema` - The Schema defines the attributes and attribute types listed in the Data Source.
 *
 * If you set TimePointGranularity to “SPECIFIC”, you must also provide the following:
 *
 * - `StartDateTime` - The first timestamp in the range of time points.
 * - `EndDateTime` - The last timestamp in the range of time points.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateExplainabilityCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateExplainabilityCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // CreateExplainabilityRequest
 *   ExplainabilityName: "STRING_VALUE", // required
 *   ResourceArn: "STRING_VALUE", // required
 *   ExplainabilityConfig: { // ExplainabilityConfig
 *     TimeSeriesGranularity: "ALL" || "SPECIFIC", // required
 *     TimePointGranularity: "ALL" || "SPECIFIC", // required
 *   },
 *   DataSource: { // DataSource
 *     S3Config: { // S3Config
 *       Path: "STRING_VALUE", // required
 *       RoleArn: "STRING_VALUE", // required
 *       KMSKeyArn: "STRING_VALUE",
 *     },
 *   },
 *   Schema: { // Schema
 *     Attributes: [ // SchemaAttributes
 *       { // SchemaAttribute
 *         AttributeName: "STRING_VALUE",
 *         AttributeType: "string" || "integer" || "float" || "timestamp" || "geolocation",
 *       },
 *     ],
 *   },
 *   EnableVisualization: true || false,
 *   StartDateTime: "STRING_VALUE",
 *   EndDateTime: "STRING_VALUE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateExplainabilityCommand(input);
 * const response = await client.send(command);
 * // { // CreateExplainabilityResponse
 * //   ExplainabilityArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateExplainabilityCommandInput - {@link CreateExplainabilityCommandInput}
 * @returns {@link CreateExplainabilityCommandOutput}
 * @see {@link CreateExplainabilityCommandInput} for command's `input` shape.
 * @see {@link CreateExplainabilityCommandOutput} for command's `response` shape.
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
export class CreateExplainabilityCommand extends command<CreateExplainabilityCommandInput, CreateExplainabilityCommandOutput>(
  _ep0,
  _mw0,
  "CreateExplainability",
  CreateExplainability$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateExplainabilityRequest;
      output: CreateExplainabilityResponse;
    };
    sdk: {
      input: CreateExplainabilityCommandInput;
      output: CreateExplainabilityCommandOutput;
    };
  };
}
