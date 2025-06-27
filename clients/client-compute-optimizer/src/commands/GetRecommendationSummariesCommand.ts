// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRecommendationSummariesRequest, GetRecommendationSummariesResponse } from "../models/models_0";
import { de_GetRecommendationSummariesCommand, se_GetRecommendationSummariesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRecommendationSummariesCommand}.
 */
export interface GetRecommendationSummariesCommandInput extends GetRecommendationSummariesRequest {}
/**
 * @public
 *
 * The output of {@link GetRecommendationSummariesCommand}.
 */
export interface GetRecommendationSummariesCommandOutput extends GetRecommendationSummariesResponse, __MetadataBearer {}

/**
 * <p>Returns the optimization findings for an account.</p>
 *          <p>It returns the number of:</p>
 *          <ul>
 *             <li>
 *                <p>Amazon EC2 instances in an account that are
 *                         <code>Underprovisioned</code>, <code>Overprovisioned</code>, or
 *                         <code>Optimized</code>.</p>
 *             </li>
 *             <li>
 *                <p>EC2Auto Scaling groups in an account that are <code>NotOptimized</code>, or
 *                         <code>Optimized</code>.</p>
 *             </li>
 *             <li>
 *                <p>Amazon EBS volumes in an account that are <code>NotOptimized</code>,
 *                     or <code>Optimized</code>.</p>
 *             </li>
 *             <li>
 *                <p>Lambda functions in an account that are <code>NotOptimized</code>,
 *                     or <code>Optimized</code>.</p>
 *             </li>
 *             <li>
 *                <p>Amazon ECS services in an account that are <code>Underprovisioned</code>,
 *                     <code>Overprovisioned</code>, or <code>Optimized</code>.</p>
 *             </li>
 *             <li>
 *                <p>Commercial software licenses in an account that are <code>InsufficientMetrics</code>,
 *                     <code>NotOptimized</code> or <code>Optimized</code>.</p>
 *             </li>
 *             <li>
 *                <p>Amazon Aurora and Amazon RDS databases in an account that are <code>Underprovisioned</code>,
 *                     <code>Overprovisioned</code>, <code>Optimized</code>, or <code>NotOptimized</code>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetRecommendationSummariesCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetRecommendationSummariesCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const input = { // GetRecommendationSummariesRequest
 *   accountIds: [ // AccountIds
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetRecommendationSummariesCommand(input);
 * const response = await client.send(command);
 * // { // GetRecommendationSummariesResponse
 * //   nextToken: "STRING_VALUE",
 * //   recommendationSummaries: [ // RecommendationSummaries
 * //     { // RecommendationSummary
 * //       summaries: [ // Summaries
 * //         { // Summary
 * //           name: "Underprovisioned" || "Overprovisioned" || "Optimized" || "NotOptimized",
 * //           value: Number("double"),
 * //           reasonCodeSummaries: [ // ReasonCodeSummaries
 * //             { // ReasonCodeSummary
 * //               name: "MemoryOverprovisioned" || "MemoryUnderprovisioned",
 * //               value: Number("double"),
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       idleSummaries: [ // IdleSummaries
 * //         { // IdleSummary
 * //           name: "Idle" || "Unattached",
 * //           value: Number("double"),
 * //         },
 * //       ],
 * //       recommendationResourceType: "Ec2Instance" || "AutoScalingGroup" || "EbsVolume" || "LambdaFunction" || "EcsService" || "License" || "RdsDBInstance" || "RdsDBInstanceStorage" || "AuroraDBClusterStorage",
 * //       accountId: "STRING_VALUE",
 * //       savingsOpportunity: { // SavingsOpportunity
 * //         savingsOpportunityPercentage: Number("double"),
 * //         estimatedMonthlySavings: { // EstimatedMonthlySavings
 * //           currency: "USD" || "CNY",
 * //           value: Number("double"),
 * //         },
 * //       },
 * //       idleSavingsOpportunity: {
 * //         savingsOpportunityPercentage: Number("double"),
 * //         estimatedMonthlySavings: {
 * //           currency: "USD" || "CNY",
 * //           value: Number("double"),
 * //         },
 * //       },
 * //       aggregatedSavingsOpportunity: {
 * //         savingsOpportunityPercentage: Number("double"),
 * //         estimatedMonthlySavings: {
 * //           currency: "USD" || "CNY",
 * //           value: Number("double"),
 * //         },
 * //       },
 * //       currentPerformanceRiskRatings: { // CurrentPerformanceRiskRatings
 * //         high: Number("long"),
 * //         medium: Number("long"),
 * //         low: Number("long"),
 * //         veryLow: Number("long"),
 * //       },
 * //       inferredWorkloadSavings: [ // InferredWorkloadSavings
 * //         { // InferredWorkloadSaving
 * //           inferredWorkloadTypes: [ // InferredWorkloadTypes
 * //             "AmazonEmr" || "ApacheCassandra" || "ApacheHadoop" || "Memcached" || "Nginx" || "PostgreSql" || "Redis" || "Kafka" || "SQLServer",
 * //           ],
 * //           estimatedMonthlySavings: {
 * //             currency: "USD" || "CNY",
 * //             value: Number("double"),
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetRecommendationSummariesCommandInput - {@link GetRecommendationSummariesCommandInput}
 * @returns {@link GetRecommendationSummariesCommandOutput}
 * @see {@link GetRecommendationSummariesCommandInput} for command's `input` shape.
 * @see {@link GetRecommendationSummariesCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for ComputeOptimizerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Try your call again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value supplied for the input parameter is out of range or not valid.</p>
 *
 * @throws {@link MissingAuthenticationToken} (client fault)
 *  <p>The request must contain either a valid (registered) Amazon Web Services access key ID
 *             or X.509 certificate.</p>
 *
 * @throws {@link OptInRequiredException} (client fault)
 *  <p>The account is not opted in to Compute Optimizer.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed due to a temporary failure of the server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ComputeOptimizerServiceException}
 * <p>Base exception class for all service exceptions from ComputeOptimizer service.</p>
 *
 *
 * @public
 */
export class GetRecommendationSummariesCommand extends $Command
  .classBuilder<
    GetRecommendationSummariesCommandInput,
    GetRecommendationSummariesCommandOutput,
    ComputeOptimizerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ComputeOptimizerService", "GetRecommendationSummaries", {})
  .n("ComputeOptimizerClient", "GetRecommendationSummariesCommand")
  .f(void 0, void 0)
  .ser(se_GetRecommendationSummariesCommand)
  .de(de_GetRecommendationSummariesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRecommendationSummariesRequest;
      output: GetRecommendationSummariesResponse;
    };
    sdk: {
      input: GetRecommendationSummariesCommandInput;
      output: GetRecommendationSummariesCommandOutput;
    };
  };
}
