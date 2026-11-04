// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateOrganizationRecommendationLifecycleRequest } from "../models/models_0";
import { UpdateOrganizationRecommendationLifecycle$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateOrganizationRecommendationLifecycleCommand}.
 */
export interface UpdateOrganizationRecommendationLifecycleCommandInput extends UpdateOrganizationRecommendationLifecycleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateOrganizationRecommendationLifecycleCommand}.
 */
export interface UpdateOrganizationRecommendationLifecycleCommandOutput extends __MetadataBearer {}

/**
 * Update the lifecycle of a Recommendation within an Organization. This API only supports prioritized recommendations and updates global priority recommendations, eliminating the need to call the API in each AWS Region.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TrustedAdvisorClient, UpdateOrganizationRecommendationLifecycleCommand } from "@aws-sdk/client-trustedadvisor"; // ES Modules import
 * // const { TrustedAdvisorClient, UpdateOrganizationRecommendationLifecycleCommand } = require("@aws-sdk/client-trustedadvisor"); // CommonJS import
 * // import type { TrustedAdvisorClientConfig } from "@aws-sdk/client-trustedadvisor";
 * const config = {}; // type is TrustedAdvisorClientConfig
 * const client = new TrustedAdvisorClient(config);
 * const input = { // UpdateOrganizationRecommendationLifecycleRequest
 *   lifecycleStage: "pending_response" || "in_progress" || "dismissed" || "resolved", // required
 *   updateReason: "STRING_VALUE",
 *   updateReasonCode: "non_critical_account" || "temporary_account" || "valid_business_case" || "other_methods_available" || "low_priority" || "not_applicable" || "other",
 *   organizationRecommendationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new UpdateOrganizationRecommendationLifecycleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateOrganizationRecommendationLifecycleCommandInput - {@link UpdateOrganizationRecommendationLifecycleCommandInput}
 * @returns {@link UpdateOrganizationRecommendationLifecycleCommandOutput}
 * @see {@link UpdateOrganizationRecommendationLifecycleCommandInput} for command's `input` shape.
 * @see {@link UpdateOrganizationRecommendationLifecycleCommandOutput} for command's `response` shape.
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
 * @example Update the lifecycle stage of an AWS Organization's Recommendation that is managed by AWS Trusted Advisor Priority
 * ```javascript
 * //
 * const input = {
 *   lifecycleStage: "dismissed",
 *   organizationRecommendationIdentifier: "arn:aws:trustedadvisor:::organization-recommendation/96b5e5ca-7930-444c-90c6-06d386128100",
 *   updateReason: "Does not apply to this resource",
 *   updateReasonCode: "not_applicable"
 * };
 * const command = new UpdateOrganizationRecommendationLifecycleCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateOrganizationRecommendationLifecycleCommand extends command<UpdateOrganizationRecommendationLifecycleCommandInput, UpdateOrganizationRecommendationLifecycleCommandOutput>(
  _ep0,
  _mw0,
  "UpdateOrganizationRecommendationLifecycle",
  UpdateOrganizationRecommendationLifecycle$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateOrganizationRecommendationLifecycleRequest;
      output: {};
    };
    sdk: {
      input: UpdateOrganizationRecommendationLifecycleCommandInput;
      output: UpdateOrganizationRecommendationLifecycleCommandOutput;
    };
  };
}
