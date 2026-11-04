// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetEffectiveRecommendationPreferencesRequest,
  GetEffectiveRecommendationPreferencesResponse,
} from "../models/models_0";
import { GetEffectiveRecommendationPreferences$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEffectiveRecommendationPreferencesCommand}.
 */
export interface GetEffectiveRecommendationPreferencesCommandInput extends GetEffectiveRecommendationPreferencesRequest {}
/**
 * @public
 *
 * The output of {@link GetEffectiveRecommendationPreferencesCommand}.
 */
export interface GetEffectiveRecommendationPreferencesCommandOutput extends GetEffectiveRecommendationPreferencesResponse, __MetadataBearer {}

/**
 * Returns the recommendation preferences that are in effect for a given resource, such as enhanced infrastructure metrics. Considers all applicable preferences that you might have set at the resource, account, and organization level.
 *
 * When you create a recommendation preference, you can set its status to `Active` or `Inactive`. Use this action to view the recommendation preferences that are in effect, or `Active`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetEffectiveRecommendationPreferencesCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetEffectiveRecommendationPreferencesCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * // import type { ComputeOptimizerClientConfig } from "@aws-sdk/client-compute-optimizer";
 * const config = {}; // type is ComputeOptimizerClientConfig
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A resource that is required for the action doesn't exist.
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
export class GetEffectiveRecommendationPreferencesCommand extends command<GetEffectiveRecommendationPreferencesCommandInput, GetEffectiveRecommendationPreferencesCommandOutput>(
  _ep0,
  _mw0,
  "GetEffectiveRecommendationPreferences",
  GetEffectiveRecommendationPreferences$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEffectiveRecommendationPreferencesRequest;
      output: GetEffectiveRecommendationPreferencesResponse;
    };
    sdk: {
      input: GetEffectiveRecommendationPreferencesCommandInput;
      output: GetEffectiveRecommendationPreferencesCommandOutput;
    };
  };
}
