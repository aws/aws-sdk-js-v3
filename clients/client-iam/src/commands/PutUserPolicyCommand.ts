// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { PutUserPolicyRequest } from "../models/models_0";
import { de_PutUserPolicyCommand, se_PutUserPolicyCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutUserPolicyCommand}.
 */
export interface PutUserPolicyCommandInput extends PutUserPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutUserPolicyCommand}.
 */
export interface PutUserPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Adds or updates an inline policy document that is embedded in the specified IAM
 *             user.</p>
 *          <p>An IAM user can also have a managed policy attached to it. To attach a managed
 *             policy to a user, use <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachUserPolicy.html">
 *                <code>AttachUserPolicy</code>
 *             </a>. To create a new managed policy, use
 *                 <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html">
 *                <code>CreatePolicy</code>
 *             </a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
 *                 policies and inline policies</a> in the
 *             <i>IAM User Guide</i>.</p>
 *          <p>For information about the maximum number of inline policies that you can embed in a
 *             user, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>
 *          <note>
 *             <p>Because policy documents can be large, you should use POST rather than GET when
 *                 calling <code>PutUserPolicy</code>. For general information about using the Query
 *                 API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the
 *                     <i>IAM User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, PutUserPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, PutUserPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // PutUserPolicyRequest
 *   UserName: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 *   PolicyDocument: "STRING_VALUE", // required
 * };
 * const command = new PutUserPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutUserPolicyCommandInput - {@link PutUserPolicyCommandInput}
 * @returns {@link PutUserPolicyCommandOutput}
 * @see {@link PutUserPolicyCommandInput} for command's `input` shape.
 * @see {@link PutUserPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link MalformedPolicyDocumentException} (client fault)
 *  <p>The request was rejected because the policy document was malformed. The error message
 *       describes the specific error.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @example To attach a policy to an IAM user
 * ```javascript
 * // The following command attaches a policy to the IAM user named Bob.
 * const input = {
 *   PolicyDocument: `{"Version":"2012-10-17","Statement":{"Effect":"Allow","Action":"*","Resource":"*"}}`,
 *   PolicyName: "AllAccessPolicy",
 *   UserName: "Bob"
 * };
 * const command = new PutUserPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class PutUserPolicyCommand extends $Command
  .classBuilder<
    PutUserPolicyCommandInput,
    PutUserPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "PutUserPolicy", {})
  .n("IAMClient", "PutUserPolicyCommand")
  .f(void 0, void 0)
  .ser(se_PutUserPolicyCommand)
  .de(de_PutUserPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutUserPolicyRequest;
      output: {};
    };
    sdk: {
      input: PutUserPolicyCommandInput;
      output: PutUserPolicyCommandOutput;
    };
  };
}
