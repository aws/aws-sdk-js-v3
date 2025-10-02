// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DescribeModelVersionsRequest, DescribeModelVersionsResult } from "../models/models_0";
import { de_DescribeModelVersionsCommand, se_DescribeModelVersionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeModelVersionsCommand}.
 */
export interface DescribeModelVersionsCommandInput extends DescribeModelVersionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeModelVersionsCommand}.
 */
export interface DescribeModelVersionsCommandOutput extends DescribeModelVersionsResult, __MetadataBearer {}

/**
 * <p>Gets all of the model versions for the specified model type or for the specified model type and model ID. You can also get details for a single, specified model version. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DescribeModelVersionsCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DescribeModelVersionsCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // DescribeModelVersionsRequest
 *   modelId: "STRING_VALUE",
 *   modelVersionNumber: "STRING_VALUE",
 *   modelType: "ONLINE_FRAUD_INSIGHTS" || "TRANSACTION_FRAUD_INSIGHTS" || "ACCOUNT_TAKEOVER_INSIGHTS",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeModelVersionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeModelVersionsResult
 * //   modelVersionDetails: [ // modelVersionDetailList
 * //     { // ModelVersionDetail
 * //       modelId: "STRING_VALUE",
 * //       modelType: "ONLINE_FRAUD_INSIGHTS" || "TRANSACTION_FRAUD_INSIGHTS" || "ACCOUNT_TAKEOVER_INSIGHTS",
 * //       modelVersionNumber: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       trainingDataSource: "EXTERNAL_EVENTS" || "INGESTED_EVENTS",
 * //       trainingDataSchema: { // TrainingDataSchema
 * //         modelVariables: [ // ListOfStrings // required
 * //           "STRING_VALUE",
 * //         ],
 * //         labelSchema: { // LabelSchema
 * //           labelMapper: { // labelMapper
 * //             "<keys>": [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           unlabeledEventsTreatment: "IGNORE" || "FRAUD" || "LEGIT" || "AUTO",
 * //         },
 * //       },
 * //       externalEventsDetail: { // ExternalEventsDetail
 * //         dataLocation: "STRING_VALUE", // required
 * //         dataAccessRoleArn: "STRING_VALUE", // required
 * //       },
 * //       ingestedEventsDetail: { // IngestedEventsDetail
 * //         ingestedEventsTimeWindow: { // IngestedEventsTimeWindow
 * //           startTime: "STRING_VALUE", // required
 * //           endTime: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       trainingResult: { // TrainingResult
 * //         dataValidationMetrics: { // DataValidationMetrics
 * //           fileLevelMessages: [ // fileValidationMessageList
 * //             { // FileValidationMessage
 * //               title: "STRING_VALUE",
 * //               content: "STRING_VALUE",
 * //               type: "STRING_VALUE",
 * //             },
 * //           ],
 * //           fieldLevelMessages: [ // fieldValidationMessageList
 * //             { // FieldValidationMessage
 * //               fieldName: "STRING_VALUE",
 * //               identifier: "STRING_VALUE",
 * //               title: "STRING_VALUE",
 * //               content: "STRING_VALUE",
 * //               type: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //         trainingMetrics: { // TrainingMetrics
 * //           auc: Number("float"),
 * //           metricDataPoints: [ // metricDataPointsList
 * //             { // MetricDataPoint
 * //               fpr: Number("float"),
 * //               precision: Number("float"),
 * //               tpr: Number("float"),
 * //               threshold: Number("float"),
 * //             },
 * //           ],
 * //         },
 * //         variableImportanceMetrics: { // VariableImportanceMetrics
 * //           logOddsMetrics: [ // ListOfLogOddsMetrics
 * //             { // LogOddsMetric
 * //               variableName: "STRING_VALUE", // required
 * //               variableType: "STRING_VALUE", // required
 * //               variableImportance: Number("float"), // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       lastUpdatedTime: "STRING_VALUE",
 * //       createdTime: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       trainingResultV2: { // TrainingResultV2
 * //         dataValidationMetrics: {
 * //           fileLevelMessages: [
 * //             {
 * //               title: "STRING_VALUE",
 * //               content: "STRING_VALUE",
 * //               type: "STRING_VALUE",
 * //             },
 * //           ],
 * //           fieldLevelMessages: [
 * //             {
 * //               fieldName: "STRING_VALUE",
 * //               identifier: "STRING_VALUE",
 * //               title: "STRING_VALUE",
 * //               content: "STRING_VALUE",
 * //               type: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //         trainingMetricsV2: { // TrainingMetricsV2
 * //           ofi: { // OFITrainingMetricsValue
 * //             metricDataPoints: [ // OFIMetricDataPointsList
 * //               { // OFIMetricDataPoint
 * //                 fpr: Number("float"),
 * //                 precision: Number("float"),
 * //                 tpr: Number("float"),
 * //                 threshold: Number("float"),
 * //               },
 * //             ],
 * //             modelPerformance: { // OFIModelPerformance
 * //               auc: Number("float"),
 * //               uncertaintyRange: { // UncertaintyRange
 * //                 lowerBoundValue: Number("float"), // required
 * //                 upperBoundValue: Number("float"), // required
 * //               },
 * //             },
 * //           },
 * //           tfi: { // TFITrainingMetricsValue
 * //             metricDataPoints: [ // TFIMetricDataPointsList
 * //               { // TFIMetricDataPoint
 * //                 fpr: Number("float"),
 * //                 precision: Number("float"),
 * //                 tpr: Number("float"),
 * //                 threshold: Number("float"),
 * //               },
 * //             ],
 * //             modelPerformance: { // TFIModelPerformance
 * //               auc: Number("float"),
 * //               uncertaintyRange: {
 * //                 lowerBoundValue: Number("float"), // required
 * //                 upperBoundValue: Number("float"), // required
 * //               },
 * //             },
 * //           },
 * //           ati: { // ATITrainingMetricsValue
 * //             metricDataPoints: [ // ATIMetricDataPointsList
 * //               { // ATIMetricDataPoint
 * //                 cr: Number("float"),
 * //                 adr: Number("float"),
 * //                 threshold: Number("float"),
 * //                 atodr: Number("float"),
 * //               },
 * //             ],
 * //             modelPerformance: { // ATIModelPerformance
 * //               asi: Number("float"),
 * //             },
 * //           },
 * //         },
 * //         variableImportanceMetrics: {
 * //           logOddsMetrics: [
 * //             {
 * //               variableName: "STRING_VALUE", // required
 * //               variableType: "STRING_VALUE", // required
 * //               variableImportance: Number("float"), // required
 * //             },
 * //           ],
 * //         },
 * //         aggregatedVariablesImportanceMetrics: { // AggregatedVariablesImportanceMetrics
 * //           logOddsMetrics: [ // ListOfAggregatedLogOddsMetrics
 * //             { // AggregatedLogOddsMetric
 * //               variableNames: "<ListOfStrings>", // required
 * //               aggregatedVariablesImportance: Number("float"), // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeModelVersionsCommandInput - {@link DescribeModelVersionsCommandInput}
 * @returns {@link DescribeModelVersionsCommandOutput}
 * @see {@link DescribeModelVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeModelVersionsCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception indicating the specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An exception indicating a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception indicating a specified value is not allowed.</p>
 *
 * @throws {@link FraudDetectorServiceException}
 * <p>Base exception class for all service exceptions from FraudDetector service.</p>
 *
 *
 * @public
 */
export class DescribeModelVersionsCommand extends $Command
  .classBuilder<
    DescribeModelVersionsCommandInput,
    DescribeModelVersionsCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHawksNestServiceFacade", "DescribeModelVersions", {})
  .n("FraudDetectorClient", "DescribeModelVersionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeModelVersionsCommand)
  .de(de_DescribeModelVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeModelVersionsRequest;
      output: DescribeModelVersionsResult;
    };
    sdk: {
      input: DescribeModelVersionsCommandInput;
      output: DescribeModelVersionsCommandOutput;
    };
  };
}
