// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetPolicyRequest, GetPolicyResponse } from "../models/models_0";
import { GetPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPolicyCommand}.
 */
export interface GetPolicyCommandInput extends GetPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetPolicyCommand}.
 */
export interface GetPolicyCommandOutput extends GetPolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves the resource-based policy attached to a private CA. If either the private CA resource or the policy cannot be found, this action returns a <code>ResourceNotFoundException</code>. </p> <p>The policy can be attached or updated with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_PutPolicy.html">PutPolicy</a> and removed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePolicy.html">DeletePolicy</a>.</p> <p class="title"> <b>About Policies</b> </p> <ul> <li> <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> <li> <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates signed by a CA in another account.</p> </li> <li> <p>For ACM to manage automatic renewal of these certificates, the ACM user must configure a Service Linked Role (SLR). The SLR allows the ACM service to assume the identity of the user, subject to confirmation against the Amazon Web Services Private CA policy. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a Service Linked Role with ACM</a>.</p> </li> <li> <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, GetPolicyCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, GetPolicyCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * // import type { ACMPCAClientConfig } from "@aws-sdk/client-acm-pca";
 * const config = {}; // type is ACMPCAClientConfig
 * const client = new ACMPCAClient(config);
 * const input = { // GetPolicyRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new GetPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetPolicyResponse
 * //   Policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPolicyCommandInput - {@link GetPolicyCommandInput}
 * @returns {@link GetPolicyCommandOutput}
 * @see {@link GetPolicyCommandInput} for command's `input` shape.
 * @see {@link GetPolicyCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>The state of the private CA does not allow this action to occur.</p>
 *
 * @throws {@link RequestFailedException} (client fault)
 *  <p>The request has failed for an unspecified reason.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource such as a private CA, S3 bucket, certificate, audit report, or policy cannot be found.</p>
 *
 * @throws {@link ACMPCAServiceException}
 * <p>Base exception class for all service exceptions from ACMPCA service.</p>
 *
 *
 * @public
 */
export class GetPolicyCommand extends $Command
  .classBuilder<
    GetPolicyCommandInput,
    GetPolicyCommandOutput,
    ACMPCAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ACMPCAClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ACMPrivateCA", "GetPolicy", {})
  .n("ACMPCAClient", "GetPolicyCommand")
  .sc(GetPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPolicyRequest;
      output: GetPolicyResponse;
    };
    sdk: {
      input: GetPolicyCommandInput;
      output: GetPolicyCommandOutput;
    };
  };
}
