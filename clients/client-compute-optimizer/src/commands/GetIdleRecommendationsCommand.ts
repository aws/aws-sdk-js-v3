// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIdleRecommendationsRequest, GetIdleRecommendationsResponse } from "../models/models_0";
import { de_GetIdleRecommendationsCommand, se_GetIdleRecommendationsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIdleRecommendationsCommand}.
 */
export interface GetIdleRecommendationsCommandInput extends GetIdleRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link GetIdleRecommendationsCommand}.
 */
export interface GetIdleRecommendationsCommandOutput extends GetIdleRecommendationsResponse, __MetadataBearer {}

/**
 * <p>Returns idle resource recommendations. Compute Optimizer generates recommendations for
 *             idle resources that meet a specific set of requirements. For more information, see
 *             <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Resource requirements</a> in the
 *             <i>Compute Optimizer User Guide</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetIdleRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetIdleRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * // import type { ComputeOptimizerClientConfig } from "@aws-sdk/client-compute-optimizer";
 * const config = {}; // type is ComputeOptimizerClientConfig
 * const client = new ComputeOptimizerClient(config);
 * const input = { // GetIdleRecommendationsRequest
 *   resourceArns: [ // ResourceArns
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filters: [ // IdleRecommendationFilters
 *     { // IdleRecommendationFilter
 *       name: "Finding" || "ResourceType",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   accountIds: [ // AccountIds
 *     "STRING_VALUE",
 *   ],
 *   orderBy: { // OrderBy
 *     dimension: "SavingsValue" || "SavingsValueAfterDiscount",
 *     order: "Asc" || "Desc",
 *   },
 * };
 * const command = new GetIdleRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // GetIdleRecommendationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   idleRecommendations: [ // IdleRecommendations
 * //     { // IdleRecommendation
 * //       resourceArn: "STRING_VALUE",
 * //       resourceId: "STRING_VALUE",
 * //       resourceType: "EC2Instance" || "AutoScalingGroup" || "EBSVolume" || "ECSService" || "RDSDBInstance",
 * //       accountId: "STRING_VALUE",
 * //       finding: "Idle" || "Unattached",
 * //       findingDescription: "STRING_VALUE",
 * //       savingsOpportunity: { // IdleSavingsOpportunity
 * //         savingsOpportunityPercentage: Number("double"),
 * //         estimatedMonthlySavings: { // IdleEstimatedMonthlySavings
 * //           currency: "USD" || "CNY",
 * //           value: Number("double"),
 * //         },
 * //       },
 * //       savingsOpportunityAfterDiscounts: { // IdleSavingsOpportunityAfterDiscounts
 * //         savingsOpportunityPercentage: Number("double"),
 * //         estimatedMonthlySavings: {
 * //           currency: "USD" || "CNY",
 * //           value: Number("double"),
 * //         },
 * //       },
 * //       utilizationMetrics: [ // IdleUtilizationMetrics
 * //         { // IdleUtilizationMetric
 * //           name: "CPU" || "Memory" || "NetworkOutBytesPerSecond" || "NetworkInBytesPerSecond" || "DatabaseConnections" || "EBSVolumeReadIOPS" || "EBSVolumeWriteIOPS" || "VolumeReadOpsPerSecond" || "VolumeWriteOpsPerSecond",
 * //           statistic: "Maximum" || "Average",
 * //           value: Number("double"),
 * //         },
 * //       ],
 * //       lookBackPeriodInDays: Number("double"),
 * //       lastRefreshTimestamp: new Date("TIMESTAMP"),
 * //       tags: [ // Tags
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   errors: [ // IdleRecommendationErrors
 * //     { // IdleRecommendationError
 * //       identifier: "STRING_VALUE",
 * //       code: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //       resourceType: "EC2Instance" || "AutoScalingGroup" || "EBSVolume" || "ECSService" || "RDSDBInstance",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetIdleRecommendationsCommandInput - {@link GetIdleRecommendationsCommandInput}
 * @returns {@link GetIdleRecommendationsCommandOutput}
 * @see {@link GetIdleRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetIdleRecommendationsCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
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
export class GetIdleRecommendationsCommand extends $Command
  .classBuilder<
    GetIdleRecommendationsCommandInput,
    GetIdleRecommendationsCommandOutput,
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
  .s("ComputeOptimizerService", "GetIdleRecommendations", {})
  .n("ComputeOptimizerClient", "GetIdleRecommendationsCommand")
  .f(void 0, void 0)
  .ser(se_GetIdleRecommendationsCommand)
  .de(de_GetIdleRecommendationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIdleRecommendationsRequest;
      output: GetIdleRecommendationsResponse;
    };
    sdk: {
      input: GetIdleRecommendationsCommandInput;
      output: GetIdleRecommendationsCommandOutput;
    };
  };
}
