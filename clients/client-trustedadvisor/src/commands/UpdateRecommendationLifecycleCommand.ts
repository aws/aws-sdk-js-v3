// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateRecommendationLifecycleRequest } from "../models/models_0";
import { UpdateRecommendationLifecycle$ } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  TrustedAdvisorClientResolvedConfig,
} from "../TrustedAdvisorClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRecommendationLifecycleCommand}.
 */
export interface UpdateRecommendationLifecycleCommandInput extends UpdateRecommendationLifecycleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRecommendationLifecycleCommand}.
 */
export interface UpdateRecommendationLifecycleCommandOutput extends __MetadataBearer {}

/**
 * <p>Update the lifecyle of a Recommendation. This API only supports prioritized recommendations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TrustedAdvisorClient, UpdateRecommendationLifecycleCommand } from "@aws-sdk/client-trustedadvisor"; // ES Modules import
 * // const { TrustedAdvisorClient, UpdateRecommendationLifecycleCommand } = require("@aws-sdk/client-trustedadvisor"); // CommonJS import
 * // import type { TrustedAdvisorClientConfig } from "@aws-sdk/client-trustedadvisor";
 * const config = {}; // type is TrustedAdvisorClientConfig
 * const client = new TrustedAdvisorClient(config);
 * const input = { // UpdateRecommendationLifecycleRequest
 *   lifecycleStage: "pending_response" || "in_progress" || "dismissed" || "resolved", // required
 *   updateReason: "STRING_VALUE",
 *   updateReasonCode: "non_critical_account" || "temporary_account" || "valid_business_case" || "other_methods_available" || "low_priority" || "not_applicable" || "other",
 *   recommendationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new UpdateRecommendationLifecycleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRecommendationLifecycleCommandInput - {@link UpdateRecommendationLifecycleCommandInput}
 * @returns {@link UpdateRecommendationLifecycleCommandOutput}
 * @see {@link UpdateRecommendationLifecycleCommandInput} for command's `input` shape.
 * @see {@link UpdateRecommendationLifecycleCommandOutput} for command's `response` shape.
 * @see {@link TrustedAdvisorClientResolvedConfig | config} for TrustedAdvisorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Exception that access has been denied due to insufficient access</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Exception that the request was denied due to conflictions in state</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Exception to notify that an unexpected internal error occurred during processing of the request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception that the requested resource has not been found</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Exception to notify that requests are being throttled</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Exception that the request failed to satisfy service constraints</p>
 *
 * @throws {@link TrustedAdvisorServiceException}
 * <p>Base exception class for all service exceptions from TrustedAdvisor service.</p>
 *
 *
 * @example Update the lifecycle stage of a Recommendation managed by AWS Trusted Advisor Priority
 * ```javascript
 * //
 * const input = {
 *   lifecycleStage: "resolved",
 *   recommendationIdentifier: "arn:aws:trustedadvisor::000000000000:recommendation/861c9c6e-f169-405a-8b59-537a8caccd7a",
 *   updateReason: "Resolved the recommendation",
 *   updateReasonCode: "valid_business_case"
 * };
 * const command = new UpdateRecommendationLifecycleCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateRecommendationLifecycleCommand extends $Command
  .classBuilder<
    UpdateRecommendationLifecycleCommandInput,
    UpdateRecommendationLifecycleCommandOutput,
    TrustedAdvisorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TrustedAdvisorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TrustedAdvisor", "UpdateRecommendationLifecycle", {})
  .n("TrustedAdvisorClient", "UpdateRecommendationLifecycleCommand")
  .sc(UpdateRecommendationLifecycle$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRecommendationLifecycleRequest;
      output: {};
    };
    sdk: {
      input: UpdateRecommendationLifecycleCommandInput;
      output: UpdateRecommendationLifecycleCommandOutput;
    };
  };
}
