// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteResourcePolicyRequest, DeleteResourcePolicyResponse } from "../models/models_0";
import { DeleteResourcePolicy } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteResourcePolicyCommand}.
 */
export interface DeleteResourcePolicyCommandInput extends DeleteResourcePolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteResourcePolicyCommand}.
 */
export interface DeleteResourcePolicyCommandOutput extends DeleteResourcePolicyResponse, __MetadataBearer {}

/**
 * <p>Deletes a Systems Manager resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. The following
 *    resources support Systems Manager resource policies.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>OpsItemGroup</code> - The resource policy for <code>OpsItemGroup</code> enables
 *      Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems).</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Parameter</code> - The resource policy is used to share a parameter with other
 *      accounts using Resource Access Manager (RAM). For more information about
 *      cross-account sharing of parameters, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-shared-parameters.html">Working with
 *       shared parameters</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteResourcePolicyCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteResourcePolicyCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DeleteResourcePolicyRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   PolicyId: "STRING_VALUE", // required
 *   PolicyHash: "STRING_VALUE", // required
 * };
 * const command = new DeleteResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteResourcePolicyCommandInput - {@link DeleteResourcePolicyCommandInput}
 * @returns {@link DeleteResourcePolicyCommandOutput}
 * @see {@link DeleteResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteResourcePolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourcePolicyNotFoundException} (client fault)
 *  <p>No policies with the specified policy ID and hash could be found.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class DeleteResourcePolicyCommand extends $Command
  .classBuilder<
    DeleteResourcePolicyCommandInput,
    DeleteResourcePolicyCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "DeleteResourcePolicy", {})
  .n("SSMClient", "DeleteResourcePolicyCommand")
  .sc(DeleteResourcePolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteResourcePolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteResourcePolicyCommandInput;
      output: DeleteResourcePolicyCommandOutput;
    };
  };
}
