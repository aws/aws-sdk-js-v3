// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetRolePolicyRequest, GetRolePolicyResponse } from "../models/models_0";
import { de_GetRolePolicyCommand, se_GetRolePolicyCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRolePolicyCommand}.
 */
export interface GetRolePolicyCommandInput extends GetRolePolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetRolePolicyCommand}.
 */
export interface GetRolePolicyCommandOutput extends GetRolePolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves the specified inline policy document that is embedded with the specified
 *             IAM role.</p>
 *          <note>
 *             <p>Policies returned by this operation are URL-encoded compliant
 *     with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL
 *     decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
 *     can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in
 *     the Java SDK. Other languages and SDKs provide similar functionality, and some SDKs do this decoding
 *     automatically.</p>
 *          </note>
 *          <p>An IAM role can also have managed policies attached to it. To retrieve a managed
 *             policy document that is attached to a role, use <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicy.html">GetPolicy</a> to determine the
 *             policy's default version, then use <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicyVersion.html">GetPolicyVersion</a> to
 *             retrieve the policy document.</p>
 *          <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 *          <p> For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM roles</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetRolePolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetRolePolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // GetRolePolicyRequest
 *   RoleName: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 * };
 * const command = new GetRolePolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetRolePolicyResponse
 * //   RoleName: "STRING_VALUE", // required
 * //   PolicyName: "STRING_VALUE", // required
 * //   PolicyDocument: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetRolePolicyCommandInput - {@link GetRolePolicyCommandInput}
 * @returns {@link GetRolePolicyCommandOutput}
 * @see {@link GetRolePolicyCommandInput} for command's `input` shape.
 * @see {@link GetRolePolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
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
 * @public
 */
export class GetRolePolicyCommand extends $Command
  .classBuilder<
    GetRolePolicyCommandInput,
    GetRolePolicyCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "GetRolePolicy", {})
  .n("IAMClient", "GetRolePolicyCommand")
  .f(void 0, void 0)
  .ser(se_GetRolePolicyCommand)
  .de(de_GetRolePolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRolePolicyRequest;
      output: GetRolePolicyResponse;
    };
    sdk: {
      input: GetRolePolicyCommandInput;
      output: GetRolePolicyCommandOutput;
    };
  };
}
