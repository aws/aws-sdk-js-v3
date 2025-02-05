// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DescribeAutoPredictorRequest, DescribeAutoPredictorResponse } from "../models/models_0";
import { de_DescribeAutoPredictorCommand, se_DescribeAutoPredictorCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAutoPredictorCommand}.
 */
export interface DescribeAutoPredictorCommandInput extends DescribeAutoPredictorRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAutoPredictorCommand}.
 */
export interface DescribeAutoPredictorCommandOutput extends DescribeAutoPredictorResponse, __MetadataBearer {}

/**
 * <p>Describes a predictor created using the CreateAutoPredictor operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribeAutoPredictorCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribeAutoPredictorCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ForecastClient(config);
 * const input = { // DescribeAutoPredictorRequest
 *   PredictorArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeAutoPredictorCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAutoPredictorResponse
 * //   PredictorArn: "STRING_VALUE",
 * //   PredictorName: "STRING_VALUE",
 * //   ForecastHorizon: Number("int"),
 * //   ForecastTypes: [ // ForecastTypes
 * //     "STRING_VALUE",
 * //   ],
 * //   ForecastFrequency: "STRING_VALUE",
 * //   ForecastDimensions: [ // ForecastDimensions
 * //     "STRING_VALUE",
 * //   ],
 * //   DatasetImportJobArns: [ // ArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   DataConfig: { // DataConfig
 * //     DatasetGroupArn: "STRING_VALUE", // required
 * //     AttributeConfigs: [ // AttributeConfigs
 * //       { // AttributeConfig
 * //         AttributeName: "STRING_VALUE", // required
 * //         Transformations: { // Transformations // required
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     AdditionalDatasets: [ // AdditionalDatasets
 * //       { // AdditionalDataset
 * //         Name: "STRING_VALUE", // required
 * //         Configuration: { // Configuration
 * //           "<keys>": [ // Values
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   EncryptionConfig: { // EncryptionConfig
 * //     RoleArn: "STRING_VALUE", // required
 * //     KMSKeyArn: "STRING_VALUE", // required
 * //   },
 * //   ReferencePredictorSummary: { // ReferencePredictorSummary
 * //     Arn: "STRING_VALUE",
 * //     State: "Active" || "Deleted",
 * //   },
 * //   EstimatedTimeRemainingInMinutes: Number("long"),
 * //   Status: "STRING_VALUE",
 * //   Message: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModificationTime: new Date("TIMESTAMP"),
 * //   OptimizationMetric: "WAPE" || "RMSE" || "AverageWeightedQuantileLoss" || "MASE" || "MAPE",
 * //   ExplainabilityInfo: { // ExplainabilityInfo
 * //     ExplainabilityArn: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //   },
 * //   MonitorInfo: { // MonitorInfo
 * //     MonitorArn: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //   },
 * //   TimeAlignmentBoundary: { // TimeAlignmentBoundary
 * //     Month: "JANUARY" || "FEBRUARY" || "MARCH" || "APRIL" || "MAY" || "JUNE" || "JULY" || "AUGUST" || "SEPTEMBER" || "OCTOBER" || "NOVEMBER" || "DECEMBER",
 * //     DayOfMonth: Number("int"),
 * //     DayOfWeek: "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY",
 * //     Hour: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAutoPredictorCommandInput - {@link DescribeAutoPredictorCommandInput}
 * @returns {@link DescribeAutoPredictorCommandOutput}
 * @see {@link DescribeAutoPredictorCommandInput} for command's `input` shape.
 * @see {@link DescribeAutoPredictorCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeAutoPredictorCommand extends $Command
  .classBuilder<
    DescribeAutoPredictorCommandInput,
    DescribeAutoPredictorCommandOutput,
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
  .s("AmazonForecast", "DescribeAutoPredictor", {})
  .n("ForecastClient", "DescribeAutoPredictorCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAutoPredictorCommand)
  .de(de_DescribeAutoPredictorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAutoPredictorRequest;
      output: DescribeAutoPredictorResponse;
    };
    sdk: {
      input: DescribeAutoPredictorCommandInput;
      output: DescribeAutoPredictorCommandOutput;
    };
  };
}
