// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeletePolicyRequest } from "../models/models_0";
import { de_DeletePolicyCommand, se_DeletePolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePolicyCommand}.
 */
export interface DeletePolicyCommandInput extends DeletePolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeletePolicyCommand}.
 */
export interface DeletePolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the resource-based policy attached to a private CA. Deletion will remove any
 * 			access that the policy has granted. If there is no policy attached to the private CA,
 * 			this action will return successful.</p>
 *          <p>If you delete a policy that was applied through Amazon Web Services Resource Access Manager (RAM),
 * 			the CA will be removed from all shares in which it was included. </p>
 *          <p>The Certificate Manager Service Linked Role that the policy supports is not affected when you
 * 			delete the policy. </p>
 *          <p>The current policy can be shown with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetPolicy.html">GetPolicy</a> and updated with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_PutPolicy.html">PutPolicy</a>.</p>
 *          <p class="title">
 *             <b>About Policies</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to
 * 			an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information,
 * 			see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p>
 *             </li>
 *             <li>
 *                <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates
 * 			signed by a CA in another account.</p>
 *             </li>
 *             <li>
 *                <p>For ACM to manage automatic renewal of these certificates,
 * 			the ACM user must configure a Service Linked Role (SLR). The SLR allows
 * 			the ACM service to assume the identity of the user, subject to confirmation against the
 * 			Amazon Web Services Private CA policy. For more information, see
 * 			<a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a
 *             Service Linked Role with ACM</a>.</p>
 *             </li>
 *             <li>
 *                <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information,
 * 			see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account
 * 			Access</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, DeletePolicyCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, DeletePolicyCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const input = { // DeletePolicyRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new DeletePolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePolicyCommandInput - {@link DeletePolicyCommandInput}
 * @returns {@link DeletePolicyCommandOutput}
 * @see {@link DeletePolicyCommandInput} for command's `input` shape.
 * @see {@link DeletePolicyCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>A previous update to your private CA is still ongoing.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing
 * 			resource.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>The state of the private CA does not allow this action to occur.</p>
 *
 * @throws {@link LockoutPreventedException} (client fault)
 *  <p>The current action was prevented because it would lock the caller out from performing
 * 			subsequent actions. Verify that the specified parameters would not result in the caller
 * 			being denied access to the resource. </p>
 *
 * @throws {@link RequestFailedException} (client fault)
 *  <p>The request has failed for an unspecified reason.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource such as a private CA, S3 bucket, certificate, audit report, or policy
 * 			cannot be found.</p>
 *
 * @throws {@link ACMPCAServiceException}
 * <p>Base exception class for all service exceptions from ACMPCA service.</p>
 *
 * @public
 */
export class DeletePolicyCommand extends $Command
  .classBuilder<
    DeletePolicyCommandInput,
    DeletePolicyCommandOutput,
    ACMPCAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ACMPCAClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ACMPrivateCA", "DeletePolicy", {})
  .n("ACMPCAClient", "DeletePolicyCommand")
  .f(void 0, void 0)
  .ser(se_DeletePolicyCommand)
  .de(de_DeletePolicyCommand)
  .build() {}
