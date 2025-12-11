// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { DetachUserPolicyRequest } from "../models/models_0";
import { DetachUserPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetachUserPolicyCommand}.
 */
export interface DetachUserPolicyCommandInput extends DetachUserPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DetachUserPolicyCommand}.
 */
export interface DetachUserPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the specified managed policy from the specified user.</p>
 *          <p>A user can also have inline policies embedded with it. To delete an inline policy, use
 *                 <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUserPolicy.html">DeleteUserPolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
 *                 policies and inline policies</a> in the
 *             <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DetachUserPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DetachUserPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // DetachUserPolicyRequest
 *   UserName: "STRING_VALUE", // required
 *   PolicyArn: "STRING_VALUE", // required
 * };
 * const command = new DetachUserPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DetachUserPolicyCommandInput - {@link DetachUserPolicyCommandInput}
 * @returns {@link DetachUserPolicyCommandOutput}
 * @see {@link DetachUserPolicyCommandInput} for command's `input` shape.
 * @see {@link DetachUserPolicyCommandOutput} for command's `response` shape.
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
export class DetachUserPolicyCommand extends $Command
  .classBuilder<
    DetachUserPolicyCommandInput,
    DetachUserPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "DetachUserPolicy", {})
  .n("IAMClient", "DetachUserPolicyCommand")
  .sc(DetachUserPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetachUserPolicyRequest;
      output: {};
    };
    sdk: {
      input: DetachUserPolicyCommandInput;
      output: DetachUserPolicyCommandOutput;
    };
  };
}
