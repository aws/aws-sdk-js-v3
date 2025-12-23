// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetPerformanceAnalysisReportRequest, GetPerformanceAnalysisReportResponse } from "../models/models_0";
import type { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient";
import { GetPerformanceAnalysisReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPerformanceAnalysisReportCommand}.
 */
export interface GetPerformanceAnalysisReportCommandInput extends GetPerformanceAnalysisReportRequest {}
/**
 * @public
 *
 * The output of {@link GetPerformanceAnalysisReportCommand}.
 */
export interface GetPerformanceAnalysisReportCommandOutput extends GetPerformanceAnalysisReportResponse, __MetadataBearer {}

/**
 * <p>Retrieves the report including the report ID, status, time details, and the insights
 *             with recommendations. The report status can be <code>RUNNING</code>,
 *             <code>SUCCEEDED</code>, or <code>FAILED</code>. The insights include the
 *             <code>description</code> and <code>recommendation</code> fields. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, GetPerformanceAnalysisReportCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, GetPerformanceAnalysisReportCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * // import type { PIClientConfig } from "@aws-sdk/client-pi";
 * const config = {}; // type is PIClientConfig
 * const client = new PIClient(config);
 * const input = { // GetPerformanceAnalysisReportRequest
 *   ServiceType: "RDS" || "DOCDB", // required
 *   Identifier: "STRING_VALUE", // required
 *   AnalysisReportId: "STRING_VALUE", // required
 *   TextFormat: "PLAIN_TEXT" || "MARKDOWN",
 *   AcceptLanguage: "EN_US",
 * };
 * const command = new GetPerformanceAnalysisReportCommand(input);
 * const response = await client.send(command);
 * // { // GetPerformanceAnalysisReportResponse
 * //   AnalysisReport: { // AnalysisReport
 * //     AnalysisReportId: "STRING_VALUE", // required
 * //     Identifier: "STRING_VALUE",
 * //     ServiceType: "RDS" || "DOCDB",
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     Status: "RUNNING" || "SUCCEEDED" || "FAILED",
 * //     Insights: [ // InsightList
 * //       { // Insight
 * //         InsightId: "STRING_VALUE", // required
 * //         InsightType: "STRING_VALUE",
 * //         Context: "CAUSAL" || "CONTEXTUAL",
 * //         StartTime: new Date("TIMESTAMP"),
 * //         EndTime: new Date("TIMESTAMP"),
 * //         Severity: "LOW" || "MEDIUM" || "HIGH",
 * //         SupportingInsights: [
 * //           {
 * //             InsightId: "STRING_VALUE", // required
 * //             InsightType: "STRING_VALUE",
 * //             Context: "CAUSAL" || "CONTEXTUAL",
 * //             StartTime: new Date("TIMESTAMP"),
 * //             EndTime: new Date("TIMESTAMP"),
 * //             Severity: "LOW" || "MEDIUM" || "HIGH",
 * //             SupportingInsights: "<InsightList>",
 * //             Description: "STRING_VALUE",
 * //             Recommendations: [ // RecommendationList
 * //               { // Recommendation
 * //                 RecommendationId: "STRING_VALUE",
 * //                 RecommendationDescription: "STRING_VALUE",
 * //               },
 * //             ],
 * //             InsightData: [ // DataList
 * //               { // Data
 * //                 PerformanceInsightsMetric: { // PerformanceInsightsMetric
 * //                   Metric: "STRING_VALUE",
 * //                   DisplayName: "STRING_VALUE",
 * //                   Dimensions: { // DescriptiveMap
 * //                     "<keys>": "STRING_VALUE",
 * //                   },
 * //                   Filter: {
 * //                     "<keys>": "STRING_VALUE",
 * //                   },
 * //                   Value: Number("double"),
 * //                 },
 * //               },
 * //             ],
 * //             BaselineData: [
 * //               {
 * //                 PerformanceInsightsMetric: {
 * //                   Metric: "STRING_VALUE",
 * //                   DisplayName: "STRING_VALUE",
 * //                   Dimensions: {
 * //                     "<keys>": "STRING_VALUE",
 * //                   },
 * //                   Filter: {
 * //                     "<keys>": "STRING_VALUE",
 * //                   },
 * //                   Value: Number("double"),
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         Description: "STRING_VALUE",
 * //         Recommendations: [
 * //           {
 * //             RecommendationId: "STRING_VALUE",
 * //             RecommendationDescription: "STRING_VALUE",
 * //           },
 * //         ],
 * //         InsightData: [
 * //           {
 * //             PerformanceInsightsMetric: {
 * //               Metric: "STRING_VALUE",
 * //               DisplayName: "STRING_VALUE",
 * //               Dimensions: {
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //               Filter: "<DescriptiveMap>",
 * //               Value: Number("double"),
 * //             },
 * //           },
 * //         ],
 * //         BaselineData: [
 * //           {
 * //             PerformanceInsightsMetric: {
 * //               Metric: "STRING_VALUE",
 * //               DisplayName: "STRING_VALUE",
 * //               Dimensions: "<DescriptiveMap>",
 * //               Filter: "<DescriptiveMap>",
 * //               Value: Number("double"),
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPerformanceAnalysisReportCommandInput - {@link GetPerformanceAnalysisReportCommandInput}
 * @returns {@link GetPerformanceAnalysisReportCommandOutput}
 * @see {@link GetPerformanceAnalysisReportCommandInput} for command's `input` shape.
 * @see {@link GetPerformanceAnalysisReportCommandOutput} for command's `response` shape.
 * @see {@link PIClientResolvedConfig | config} for PIClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>The request failed due to an unknown error.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>One of the arguments provided is invalid for this request.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>The user is not authorized to perform this request.</p>
 *
 * @throws {@link PIServiceException}
 * <p>Base exception class for all service exceptions from PI service.</p>
 *
 *
 * @public
 */
export class GetPerformanceAnalysisReportCommand extends $Command
  .classBuilder<
    GetPerformanceAnalysisReportCommandInput,
    GetPerformanceAnalysisReportCommandOutput,
    PIClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PIClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PerformanceInsightsv20180227", "GetPerformanceAnalysisReport", {})
  .n("PIClient", "GetPerformanceAnalysisReportCommand")
  .sc(GetPerformanceAnalysisReport$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPerformanceAnalysisReportRequest;
      output: GetPerformanceAnalysisReportResponse;
    };
    sdk: {
      input: GetPerformanceAnalysisReportCommandInput;
      output: GetPerformanceAnalysisReportCommandOutput;
    };
  };
}
