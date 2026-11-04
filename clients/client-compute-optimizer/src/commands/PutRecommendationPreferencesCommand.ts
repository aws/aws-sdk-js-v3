// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutRecommendationPreferencesRequest, PutRecommendationPreferencesResponse } from "../models/models_0";
import { PutRecommendationPreferences$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutRecommendationPreferencesCommand}.
 */
export interface PutRecommendationPreferencesCommandInput extends PutRecommendationPreferencesRequest {}
/**
 * @public
 *
 * The output of {@link PutRecommendationPreferencesCommand}.
 */
export interface PutRecommendationPreferencesCommandOutput extends PutRecommendationPreferencesResponse, __MetadataBearer {}

/**
 * Creates a new recommendation preference or updates an existing recommendation preference, such as enhanced infrastructure metrics.
 *
 * For more information, see [Activating enhanced infrastructure metrics](https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html) in the *Compute Optimizer User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, PutRecommendationPreferencesCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, PutRecommendationPreferencesCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * // import type { ComputeOptimizerClientConfig } from "@aws-sdk/client-compute-optimizer";
 * const config = {}; // type is ComputeOptimizerClientConfig
 * const client = new ComputeOptimizerClient(config);
 * const input = { // PutRecommendationPreferencesRequest
 *   resourceType: "Ec2Instance" || "AutoScalingGroup" || "EbsVolume" || "LambdaFunction" || "NotApplicable" || "EcsService" || "License" || "RdsDBInstance" || "AuroraDBClusterStorage" || "Idle", // required
 *   scope: { // Scope
 *     name: "Organization" || "AccountId" || "ResourceArn",
 *     value: "STRING_VALUE",
 *   },
 *   enhancedInfrastructureMetrics: "Active" || "Inactive",
 *   inferredWorkloadTypes: "Active" || "Inactive",
 *   externalMetricsPreference: { // ExternalMetricsPreference
 *     source: "Datadog" || "Dynatrace" || "NewRelic" || "Instana",
 *   },
 *   lookBackPeriod: "DAYS_14" || "DAYS_32" || "DAYS_93",
 *   utilizationPreferences: [ // UtilizationPreferences
 *     { // UtilizationPreference
 *       metricName: "CpuUtilization" || "MemoryUtilization",
 *       metricParameters: { // CustomizableMetricParameters
 *         threshold: "P90" || "P95" || "P99_5",
 *         headroom: "PERCENT_30" || "PERCENT_20" || "PERCENT_10" || "PERCENT_0",
 *       },
 *     },
 *   ],
 *   preferredResources: [ // PreferredResources
 *     { // PreferredResource
 *       name: "Ec2InstanceTypes",
 *       includeList: [ // PreferredResourceValues
 *         "STRING_VALUE",
 *       ],
 *       excludeList: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   savingsEstimationMode: "AfterDiscounts" || "BeforeDiscounts",
 * };
 * const command = new PutRecommendationPreferencesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutRecommendationPreferencesCommandInput - {@link PutRecommendationPreferencesCommandInput}
 * @returns {@link PutRecommendationPreferencesCommandOutput}
 * @see {@link PutRecommendationPreferencesCommandInput} for command's `input` shape.
 * @see {@link PutRecommendationPreferencesCommandOutput} for command's `response` shape.
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
export class PutRecommendationPreferencesCommand extends command<PutRecommendationPreferencesCommandInput, PutRecommendationPreferencesCommandOutput>(
  _ep0,
  _mw0,
  "PutRecommendationPreferences",
  PutRecommendationPreferences$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRecommendationPreferencesRequest;
      output: {};
    };
    sdk: {
      input: PutRecommendationPreferencesCommandInput;
      output: PutRecommendationPreferencesCommandOutput;
    };
  };
}
