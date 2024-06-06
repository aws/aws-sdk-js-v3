// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetEffectiveRecommendationPreferencesRequest,
  GetEffectiveRecommendationPreferencesResponse,
} from "../models/models_0";
import {
  de_GetEffectiveRecommendationPreferencesCommand,
  se_GetEffectiveRecommendationPreferencesCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEffectiveRecommendationPreferencesCommand}.
 */
export interface GetEffectiveRecommendationPreferencesCommandInput
  extends GetEffectiveRecommendationPreferencesRequest {}
/**
 * @public
 *
 * The output of {@link GetEffectiveRecommendationPreferencesCommand}.
 */
export interface GetEffectiveRecommendationPreferencesCommandOutput
  extends GetEffectiveRecommendationPreferencesResponse,
    __MetadataBearer {}

/**
 * <p>Returns the recommendation preferences that are in effect for a given resource, such
 *             as enhanced infrastructure metrics. Considers all applicable preferences that you might
 *             have set at the resource, account, and organization level.</p>
 *          <p>When you create a recommendation preference, you can set its status to
 *                 <code>Active</code> or <code>Inactive</code>. Use this action to view the
 *             recommendation preferences that are in effect, or <code>Active</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetEffectiveRecommendationPreferencesCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetEffectiveRecommendationPreferencesCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const input = { // GetEffectiveRecommendationPreferencesRequest
 *   resourceArn: "STRING_VALUE", // required
 * };
 * const command = new GetEffectiveRecommendationPreferencesCommand(input);
 * const response = await client.send(command);
 * // { // GetEffectiveRecommendationPreferencesResponse
 * //   enhancedInfrastructureMetrics: "Active" || "Inactive",
 * //   externalMetricsPreference: { // ExternalMetricsPreference
 * //     source: "Datadog" || "Dynatrace" || "NewRelic" || "Instana",
 * //   },
 * //   lookBackPeriod: "DAYS_14" || "DAYS_32" || "DAYS_93",
 * //   utilizationPreferences: [ // UtilizationPreferences
 * //     { // UtilizationPreference
 * //       metricName: "CpuUtilization" || "MemoryUtilization",
 * //       metricParameters: { // CustomizableMetricParameters
 * //         threshold: "P90" || "P95" || "P99_5",
 * //         headroom: "PERCENT_30" || "PERCENT_20" || "PERCENT_10" || "PERCENT_0",
 * //       },
 * //     },
 * //   ],
 * //   preferredResources: [ // EffectivePreferredResources
 * //     { // EffectivePreferredResource
 * //       name: "Ec2InstanceTypes",
 * //       includeList: [ // PreferredResourceValues
 * //         "STRING_VALUE",
 * //       ],
 * //       effectiveIncludeList: [
 * //         "STRING_VALUE",
 * //       ],
 * //       excludeList: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetEffectiveRecommendationPreferencesCommandInput - {@link GetEffectiveRecommendationPreferencesCommandInput}
 * @returns {@link GetEffectiveRecommendationPreferencesCommandOutput}
 * @see {@link GetEffectiveRecommendationPreferencesCommandInput} for command's `input` shape.
 * @see {@link GetEffectiveRecommendationPreferencesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetEffectiveRecommendationPreferencesCommand extends $Command
  .classBuilder<
    GetEffectiveRecommendationPreferencesCommandInput,
    GetEffectiveRecommendationPreferencesCommandOutput,
    ComputeOptimizerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ComputeOptimizerService", "GetEffectiveRecommendationPreferences", {})
  .n("ComputeOptimizerClient", "GetEffectiveRecommendationPreferencesCommand")
  .f(void 0, void 0)
  .ser(se_GetEffectiveRecommendationPreferencesCommand)
  .de(de_GetEffectiveRecommendationPreferencesCommand)
  .build() {}
