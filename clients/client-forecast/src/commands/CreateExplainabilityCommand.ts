// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import {
  CreateExplainabilityRequest,
  CreateExplainabilityRequestFilterSensitiveLog,
  CreateExplainabilityResponse,
} from "../models/models_0";
import { de_CreateExplainabilityCommand, se_CreateExplainabilityCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <note>
 *             <p>Explainability is only available for Forecasts and Predictors generated from an
 *                 AutoPredictor (<a>CreateAutoPredictor</a>)</p>
 *          </note>
 *          <p>Creates an Amazon Forecast Explainability.</p>
 *          <p>Explainability helps you better understand how the attributes in your datasets impact
 *             forecast. Amazon Forecast uses a metric called Impact scores to quantify the relative
 *             impact of each attribute and determine whether they increase or decrease forecast
 *             values.</p>
 *          <p>To enable Forecast Explainability, your predictor must include at least one of the
 *             following: related time series, item metadata, or additional datasets like Holidays and
 *             the Weather Index.</p>
 *          <p>CreateExplainability accepts either a Predictor ARN or Forecast ARN. To receive
 *             aggregated Impact scores for all time series and time points in your datasets, provide a
 *             Predictor ARN. To receive Impact scores for specific time series and time points,
 *             provide a Forecast ARN.</p>
 *          <p>
 *             <b>CreateExplainability with a Predictor ARN</b>
 *          </p>
 *          <note>
 *             <p>You can only have one Explainability resource per predictor. If you already
 *                 enabled <code>ExplainPredictor</code> in <a>CreateAutoPredictor</a>, that
 *                 predictor already has an Explainability resource.</p>
 *          </note>
 *          <p>The following parameters are required when providing a Predictor ARN:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ExplainabilityName</code> - A unique name for the Explainability.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ResourceArn</code> - The Arn of the predictor.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TimePointGranularity</code> - Must be set to “ALL”.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TimeSeriesGranularity</code> - Must be set to “ALL”.</p>
 *             </li>
 *          </ul>
 *          <p>Do not specify a value for the following parameters:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>DataSource</code> - Only valid when TimeSeriesGranularity is
 *                     “SPECIFIC”.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Schema</code> - Only valid when TimeSeriesGranularity is
 *                     “SPECIFIC”.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>StartDateTime</code> - Only valid when TimePointGranularity is
 *                     “SPECIFIC”.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>EndDateTime</code> - Only valid when TimePointGranularity is
 *                     “SPECIFIC”.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>CreateExplainability with a Forecast ARN</b>
 *          </p>
 *          <note>
 *             <p>You can specify a maximum of 50 time series and 500 time points.</p>
 *          </note>
 *          <p>The following parameters are required when providing a Predictor ARN:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ExplainabilityName</code> - A unique name for the Explainability.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ResourceArn</code> - The Arn of the forecast.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TimePointGranularity</code> - Either “ALL” or “SPECIFIC”.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TimeSeriesGranularity</code> - Either “ALL” or “SPECIFIC”.</p>
 *             </li>
 *          </ul>
 *          <p>If you set TimeSeriesGranularity to “SPECIFIC”, you must also provide the
 *             following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>DataSource</code> - The S3 location of the CSV file specifying your time
 *                     series.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Schema</code> - The Schema defines the attributes and attribute types
 *                     listed in the Data Source.</p>
 *             </li>
 *          </ul>
 *          <p>If you set TimePointGranularity to “SPECIFIC”, you must also provide the
 *             following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>StartDateTime</code> - The first timestamp in the range of time
 *                     points.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>EndDateTime</code> - The last timestamp in the range of time
 *                     points.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateExplainabilityCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateExplainabilityCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
export class CreateExplainabilityCommand extends $Command
  .classBuilder<
    CreateExplainabilityCommandInput,
    CreateExplainabilityCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonForecast", "CreateExplainability", {})
  .n("ForecastClient", "CreateExplainabilityCommand")
  .f(CreateExplainabilityRequestFilterSensitiveLog, void 0)
  .ser(se_CreateExplainabilityCommand)
  .de(de_CreateExplainabilityCommand)
  .build() {
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
