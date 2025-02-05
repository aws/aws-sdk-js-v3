// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRecommendationPreferencesRequest, DeleteRecommendationPreferencesResponse } from "../models/models_0";
import {
  de_DeleteRecommendationPreferencesCommand,
  se_DeleteRecommendationPreferencesCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRecommendationPreferencesCommand}.
 */
export interface DeleteRecommendationPreferencesCommandInput extends DeleteRecommendationPreferencesRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRecommendationPreferencesCommand}.
 */
export interface DeleteRecommendationPreferencesCommandOutput
  extends DeleteRecommendationPreferencesResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a recommendation preference, such as enhanced infrastructure metrics.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating
 *                 enhanced infrastructure metrics</a> in the <i>Compute Optimizer User
 *                 Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, DeleteRecommendationPreferencesCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, DeleteRecommendationPreferencesCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ComputeOptimizerClient(config);
 * const input = { // DeleteRecommendationPreferencesRequest
 *   resourceType: "Ec2Instance" || "AutoScalingGroup" || "EbsVolume" || "LambdaFunction" || "NotApplicable" || "EcsService" || "License" || "RdsDBInstance" || "Idle", // required
 *   scope: { // Scope
 *     name: "Organization" || "AccountId" || "ResourceArn",
 *     value: "STRING_VALUE",
 *   },
 *   recommendationPreferenceNames: [ // RecommendationPreferenceNames // required
 *     "EnhancedInfrastructureMetrics" || "InferredWorkloadTypes" || "ExternalMetricsPreference" || "LookBackPeriodPreference" || "PreferredResources" || "UtilizationPreferences",
 *   ],
 * };
 * const command = new DeleteRecommendationPreferencesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRecommendationPreferencesCommandInput - {@link DeleteRecommendationPreferencesCommandInput}
 * @returns {@link DeleteRecommendationPreferencesCommandOutput}
 * @see {@link DeleteRecommendationPreferencesCommandInput} for command's `input` shape.
 * @see {@link DeleteRecommendationPreferencesCommandOutput} for command's `response` shape.
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
export class DeleteRecommendationPreferencesCommand extends $Command
  .classBuilder<
    DeleteRecommendationPreferencesCommandInput,
    DeleteRecommendationPreferencesCommandOutput,
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
  .s("ComputeOptimizerService", "DeleteRecommendationPreferences", {})
  .n("ComputeOptimizerClient", "DeleteRecommendationPreferencesCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRecommendationPreferencesCommand)
  .de(de_DeleteRecommendationPreferencesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRecommendationPreferencesRequest;
      output: {};
    };
    sdk: {
      input: DeleteRecommendationPreferencesCommandInput;
      output: DeleteRecommendationPreferencesCommandOutput;
    };
  };
}
