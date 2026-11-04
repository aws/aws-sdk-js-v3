// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRecommendationLifecycleRequest } from "../models/models_0";
import { UpdateRecommendationLifecycle$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Update the lifecyle of a Recommendation. This API only supports prioritized recommendations and updates global priority recommendations, eliminating the need to call the API in each AWS Region.
 *
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
 *
 * Exception that access has been denied due to insufficient access
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Exception that the request was denied due to conflictions in state
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Exception to notify that an unexpected internal error occurred during processing of the request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Exception that the requested resource has not been found
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Exception to notify that requests are being throttled
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Exception that the request failed to satisfy service constraints
 *
 * @throws {@link TrustedAdvisorServiceException}
 *
 * Base exception class for all service exceptions from TrustedAdvisor service.
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
export class UpdateRecommendationLifecycleCommand extends command<UpdateRecommendationLifecycleCommandInput, UpdateRecommendationLifecycleCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRecommendationLifecycle",
  UpdateRecommendationLifecycle$
) {
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
