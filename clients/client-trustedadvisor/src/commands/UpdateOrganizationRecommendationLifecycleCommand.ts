// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateOrganizationRecommendationLifecycleRequest,
  UpdateOrganizationRecommendationLifecycleRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  de_UpdateOrganizationRecommendationLifecycleCommand,
  se_UpdateOrganizationRecommendationLifecycleCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TrustedAdvisorClientResolvedConfig } from "../TrustedAdvisorClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateOrganizationRecommendationLifecycleCommand}.
 */
export interface UpdateOrganizationRecommendationLifecycleCommandInput
  extends UpdateOrganizationRecommendationLifecycleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateOrganizationRecommendationLifecycleCommand}.
 */
export interface UpdateOrganizationRecommendationLifecycleCommandOutput extends __MetadataBearer {}

/**
 * <p>Update the lifecycle of a Recommendation within an Organization. This API only supports prioritized
 *             recommendations.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TrustedAdvisorClient, UpdateOrganizationRecommendationLifecycleCommand } from "@aws-sdk/client-trustedadvisor"; // ES Modules import
 * // const { TrustedAdvisorClient, UpdateOrganizationRecommendationLifecycleCommand } = require("@aws-sdk/client-trustedadvisor"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
 */
export class UpdateOrganizationRecommendationLifecycleCommand extends $Command
  .classBuilder<
    UpdateOrganizationRecommendationLifecycleCommandInput,
    UpdateOrganizationRecommendationLifecycleCommandOutput,
    TrustedAdvisorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TrustedAdvisorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TrustedAdvisor", "UpdateOrganizationRecommendationLifecycle", {})
  .n("TrustedAdvisorClient", "UpdateOrganizationRecommendationLifecycleCommand")
  .f(UpdateOrganizationRecommendationLifecycleRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateOrganizationRecommendationLifecycleCommand)
  .de(de_UpdateOrganizationRecommendationLifecycleCommand)
  .build() {
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
