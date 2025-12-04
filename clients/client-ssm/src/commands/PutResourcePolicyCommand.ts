// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PutResourcePolicyRequest, PutResourcePolicyResponse } from "../models/models_1";
import { PutResourcePolicy } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutResourcePolicyCommand}.
 */
export interface PutResourcePolicyCommandInput extends PutResourcePolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutResourcePolicyCommand}.
 */
export interface PutResourcePolicyCommandOutput extends PutResourcePolicyResponse, __MetadataBearer {}

/**
 * <p>Creates or updates a Systems Manager resource policy. A resource policy helps you to define the
 *     IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources.
 *    The following resources support Systems Manager resource policies.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>OpsItemGroup</code> - The resource policy for <code>OpsItemGroup</code> enables
 *      Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems).</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Parameter</code> - The resource policy is used to share a parameter with other
 *      accounts using Resource Access Manager (RAM). </p>
 *                <p>To share a parameter, it must be in the advanced parameter tier. For information about
 *      parameter tiers, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-advanced-parameters.html">Managing
 *       parameter tiers</a>. For information about changing an existing standard parameter to an
 *      advanced parameter, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-advanced-parameters.html#parameter-store-advanced-parameters-enabling">Changing a standard parameter to an advanced parameter</a>.</p>
 *                <p>To share a <code>SecureString</code> parameter, it must be encrypted with a customer managed key, and you must share the key separately through Key Management Service. Amazon Web Services managed keys cannot be shared. Parameters encrypted with the default Amazon Web Services managed key can be updated to use a customer managed key instead. For KMS key definitions, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html">KMS concepts</a> in the
 *        <i>Key Management Service Developer Guide</i>.</p>
 *                <important>
 *                   <p>While you can share a parameter using the Systems Manager <code>PutResourcePolicy</code> operation,
 *       we recommend using Resource Access Manager (RAM) instead. This is because using
 *        <code>PutResourcePolicy</code> requires the extra step of promoting the parameter to a
 *       standard RAM Resource Share using the RAM
 *       <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> API operation. Otherwise, the parameter won't
 *       be returned by the Systems Manager <a href="https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeParameters.html">DescribeParameters</a> API operation using the <code>--shared</code> option.</p>
 *                   <p>For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-shared-parameters.html#share">Sharing a
 *        parameter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>
 *                   </p>
 *                </important>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, PutResourcePolicyCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, PutResourcePolicyCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // PutResourcePolicyRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   Policy: "STRING_VALUE", // required
 *   PolicyId: "STRING_VALUE",
 *   PolicyHash: "STRING_VALUE",
 * };
 * const command = new PutResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutResourcePolicyResponse
 * //   PolicyId: "STRING_VALUE",
 * //   PolicyHash: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutResourcePolicyCommandInput - {@link PutResourcePolicyCommandInput}
 * @returns {@link PutResourcePolicyCommandOutput}
 * @see {@link PutResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link PutResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link MalformedResourcePolicyDocumentException} (client fault)
 *  <p>The specified policy document is malformed or invalid, or excessive
 *     <code>PutResourcePolicy</code> or <code>DeleteResourcePolicy</code> calls have been made.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified parameter to be shared could not be found.</p>
 *
 * @throws {@link ResourcePolicyConflictException} (client fault)
 *  <p>The hash provided in the call doesn't match the stored hash. This exception is thrown when
 *    trying to update an obsolete policy version or when multiple requests to update a policy are
 *    sent.</p>
 *
 * @throws {@link ResourcePolicyInvalidParameterException} (client fault)
 *  <p>One or more parameters specified for the call aren't valid. Verify the parameters and their
 *    values and try again.</p>
 *
 * @throws {@link ResourcePolicyLimitExceededException} (client fault)
 *  <p>The <a>PutResourcePolicy</a> API action enforces two limits. A policy can't be
 *    greater than 1024 bytes in size. And only one policy can be attached to
 *    <code>OpsItemGroup</code>. Verify these limits and try again.</p>
 *
 * @throws {@link ResourcePolicyNotFoundException} (client fault)
 *  <p>No policies with the specified policy ID and hash could be found.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class PutResourcePolicyCommand extends $Command
  .classBuilder<
    PutResourcePolicyCommandInput,
    PutResourcePolicyCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "PutResourcePolicy", {})
  .n("SSMClient", "PutResourcePolicyCommand")
  .sc(PutResourcePolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutResourcePolicyRequest;
      output: PutResourcePolicyResponse;
    };
    sdk: {
      input: PutResourcePolicyCommandInput;
      output: PutResourcePolicyCommandOutput;
    };
  };
}
