// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DBRecommendationMessage, ModifyDBRecommendationMessage } from "../models/models_1";
import { de_ModifyDBRecommendationCommand, se_ModifyDBRecommendationCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyDBRecommendationCommand}.
 */
export interface ModifyDBRecommendationCommandInput extends ModifyDBRecommendationMessage {}
/**
 * @public
 *
 * The output of {@link ModifyDBRecommendationCommand}.
 */
export interface ModifyDBRecommendationCommandOutput extends DBRecommendationMessage, __MetadataBearer {}

/**
 * <p>Updates the recommendation status and recommended action status for the specified recommendation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBRecommendationCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBRecommendationCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RDSClient(config);
 * const input = { // ModifyDBRecommendationMessage
 *   RecommendationId: "STRING_VALUE", // required
 *   Locale: "STRING_VALUE",
 *   Status: "STRING_VALUE",
 *   RecommendedActionUpdates: [ // RecommendedActionUpdateList
 *     { // RecommendedActionUpdate
 *       ActionId: "STRING_VALUE", // required
 *       Status: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new ModifyDBRecommendationCommand(input);
 * const response = await client.send(command);
 * // { // DBRecommendationMessage
 * //   DBRecommendation: { // DBRecommendation
 * //     RecommendationId: "STRING_VALUE",
 * //     TypeId: "STRING_VALUE",
 * //     Severity: "STRING_VALUE",
 * //     ResourceArn: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     UpdatedTime: new Date("TIMESTAMP"),
 * //     Detection: "STRING_VALUE",
 * //     Recommendation: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Reason: "STRING_VALUE",
 * //     RecommendedActions: [ // RecommendedActionList
 * //       { // RecommendedAction
 * //         ActionId: "STRING_VALUE",
 * //         Title: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         Operation: "STRING_VALUE",
 * //         Parameters: [ // RecommendedActionParameterList
 * //           { // RecommendedActionParameter
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         ApplyModes: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //         Status: "STRING_VALUE",
 * //         IssueDetails: { // IssueDetails
 * //           PerformanceIssueDetails: { // PerformanceIssueDetails
 * //             StartTime: new Date("TIMESTAMP"),
 * //             EndTime: new Date("TIMESTAMP"),
 * //             Metrics: [ // MetricList
 * //               { // Metric
 * //                 Name: "STRING_VALUE",
 * //                 References: [ // MetricReferenceList
 * //                   { // MetricReference
 * //                     Name: "STRING_VALUE",
 * //                     ReferenceDetails: { // ReferenceDetails
 * //                       ScalarReferenceDetails: { // ScalarReferenceDetails
 * //                         Value: Number("double"),
 * //                       },
 * //                     },
 * //                   },
 * //                 ],
 * //                 StatisticsDetails: "STRING_VALUE",
 * //                 MetricQuery: { // MetricQuery
 * //                   PerformanceInsightsMetricQuery: { // PerformanceInsightsMetricQuery
 * //                     GroupBy: { // PerformanceInsightsMetricDimensionGroup
 * //                       Dimensions: [
 * //                         "STRING_VALUE",
 * //                       ],
 * //                       Group: "STRING_VALUE",
 * //                       Limit: Number("int"),
 * //                     },
 * //                     Metric: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               },
 * //             ],
 * //             Analysis: "STRING_VALUE",
 * //           },
 * //         },
 * //         ContextAttributes: [ // ContextAttributeList
 * //           { // ContextAttribute
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     Category: "STRING_VALUE",
 * //     Source: "STRING_VALUE",
 * //     TypeDetection: "STRING_VALUE",
 * //     TypeRecommendation: "STRING_VALUE",
 * //     Impact: "STRING_VALUE",
 * //     AdditionalInfo: "STRING_VALUE",
 * //     Links: [ // DocLinkList
 * //       { // DocLink
 * //         Text: "STRING_VALUE",
 * //         Url: "STRING_VALUE",
 * //       },
 * //     ],
 * //     IssueDetails: {
 * //       PerformanceIssueDetails: {
 * //         StartTime: new Date("TIMESTAMP"),
 * //         EndTime: new Date("TIMESTAMP"),
 * //         Metrics: [
 * //           {
 * //             Name: "STRING_VALUE",
 * //             References: [
 * //               {
 * //                 Name: "STRING_VALUE",
 * //                 ReferenceDetails: {
 * //                   ScalarReferenceDetails: {
 * //                     Value: Number("double"),
 * //                   },
 * //                 },
 * //               },
 * //             ],
 * //             StatisticsDetails: "STRING_VALUE",
 * //             MetricQuery: {
 * //               PerformanceInsightsMetricQuery: {
 * //                 GroupBy: {
 * //                   Dimensions: "<StringList>",
 * //                   Group: "STRING_VALUE",
 * //                   Limit: Number("int"),
 * //                 },
 * //                 Metric: "STRING_VALUE",
 * //               },
 * //             },
 * //           },
 * //         ],
 * //         Analysis: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyDBRecommendationCommandInput - {@link ModifyDBRecommendationCommandInput}
 * @returns {@link ModifyDBRecommendationCommandOutput}
 * @see {@link ModifyDBRecommendationCommandInput} for command's `input` shape.
 * @see {@link ModifyDBRecommendationCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 */
export class ModifyDBRecommendationCommand extends $Command
  .classBuilder<
    ModifyDBRecommendationCommandInput,
    ModifyDBRecommendationCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "ModifyDBRecommendation", {})
  .n("RDSClient", "ModifyDBRecommendationCommand")
  .f(void 0, void 0)
  .ser(se_ModifyDBRecommendationCommand)
  .de(de_ModifyDBRecommendationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyDBRecommendationMessage;
      output: DBRecommendationMessage;
    };
    sdk: {
      input: ModifyDBRecommendationCommandInput;
      output: ModifyDBRecommendationCommandOutput;
    };
  };
}
