// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRecommendationSummariesRequest, GetRecommendationSummariesResponse } from "../models/models_0";
import { GetRecommendationSummaries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns the optimization findings for an account.
 *
 * It returns the number of:
 *
 * - Amazon EC2 instances in an account that are `Underprovisioned`, `Overprovisioned`, or `Optimized`.
 * - EC2Auto Scaling groups in an account that are `NotOptimized`, or `Optimized`.
 * - Amazon EBS volumes in an account that are `NotOptimized`, or `Optimized`.
 * - Lambda functions in an account that are `NotOptimized`, or `Optimized`.
 * - Amazon ECS services in an account that are `Underprovisioned`, `Overprovisioned`, or `Optimized`.
 * - Commercial software licenses in an account that are `InsufficientMetrics`, `NotOptimized` or `Optimized`.
 * - Amazon Aurora and Amazon RDS databases in an account that are `Underprovisioned`, `Overprovisioned`, `Optimized`, or `NotOptimized`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetRecommendationSummariesCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetRecommendationSummariesCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * // import type { ComputeOptimizerClientConfig } from "@aws-sdk/client-compute-optimizer";
 * const config = {}; // type is ComputeOptimizerClientConfig
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
 * //           name: "Idle" || "Unattached" || "Unused",
 * //           value: Number("double"),
 * //         },
 * //       ],
 * //       recommendationResourceType: "Ec2Instance" || "AutoScalingGroup" || "EbsVolume" || "LambdaFunction" || "EcsService" || "License" || "RdsDBInstance" || "RdsDBInstanceStorage" || "AuroraDBClusterStorage" || "NatGateway" || "DynamoDBTable" || "ElastiCacheCluster" || "MemoryDBCluster" || "DocumentDBCluster" || "WorkSpaces" || "SageMakerEndpoint",
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error has occurred. Try your call again.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value supplied for the input parameter is out of range or not valid.
 *
 * @throws {@link MissingAuthenticationToken} (client fault)
 *
 * The request must contain either a valid (registered) Amazon Web Services access key ID or X.509 certificate.
 *
 * @throws {@link OptInRequiredException} (client fault)
 *
 * The account is not opted in to Compute Optimizer.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The request has failed due to a temporary failure of the server.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ComputeOptimizerServiceException}
 *
 * Base exception class for all service exceptions from ComputeOptimizer service.
 *
 * @public
 */
export class GetRecommendationSummariesCommand extends command<GetRecommendationSummariesCommandInput, GetRecommendationSummariesCommandOutput>(
  _ep0,
  _mw0,
  "GetRecommendationSummaries",
  GetRecommendationSummaries$
) {
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
