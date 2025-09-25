// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { AttachGroupPolicyRequest } from "../models/models_0";
import { AttachGroupPolicy } from "../schemas/schemas_45_Policy";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AttachGroupPolicyCommand}.
 */
export interface AttachGroupPolicyCommandInput extends AttachGroupPolicyRequest {}
/**
 * @public
 *
 * The output of {@link AttachGroupPolicyCommand}.
 */
export interface AttachGroupPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Attaches the specified managed policy to the specified IAM group.</p>
 *          <p>You use this operation to attach a managed policy to a group. To embed an inline
 *             policy in a group, use <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutGroupPolicy.html">
 *                <code>PutGroupPolicy</code>
 *             </a>.</p>
 *          <p>As a best practice, you can validate your IAM policies.
 *      To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a>
 *             in the <i>IAM User Guide</i>.</p>
 *          <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, AttachGroupPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, AttachGroupPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // AttachGroupPolicyRequest
 *   GroupName: "STRING_VALUE", // required
 *   PolicyArn: "STRING_VALUE", // required
 * };
 * const command = new AttachGroupPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AttachGroupPolicyCommandInput - {@link AttachGroupPolicyCommandInput}
 * @returns {@link AttachGroupPolicyCommandOutput}
 * @see {@link AttachGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link AttachGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link PolicyNotAttachableException} (client fault)
 *  <p>The request failed because Amazon Web Services service role policies can only be attached to the
 *       service-linked role for that service.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @example To attach a managed policy to an IAM group
 * ```javascript
 * // The following command attaches the AWS managed policy named ReadOnlyAccess to the IAM group named Finance.
 * const input = {
 *   GroupName: "Finance",
 *   PolicyArn: "arn:aws:iam::aws:policy/ReadOnlyAccess"
 * };
 * const command = new AttachGroupPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AttachGroupPolicyCommand extends $Command
  .classBuilder<
    AttachGroupPolicyCommandInput,
    AttachGroupPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "AttachGroupPolicy", {})
  .n("IAMClient", "AttachGroupPolicyCommand")
  .sc(AttachGroupPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachGroupPolicyRequest;
      output: {};
    };
    sdk: {
      input: AttachGroupPolicyCommandInput;
      output: AttachGroupPolicyCommandOutput;
    };
  };
}
