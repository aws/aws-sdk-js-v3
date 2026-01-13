// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { DetachRolePolicyRequest } from "../models/models_0";
import { DetachRolePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetachRolePolicyCommand}.
 */
export interface DetachRolePolicyCommandInput extends DetachRolePolicyRequest {}
/**
 * @public
 *
 * The output of {@link DetachRolePolicyCommand}.
 */
export interface DetachRolePolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the specified managed policy from the specified role.</p>
 *          <p>A role can also have inline policies embedded with it. To delete an inline policy, use
 *                 <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRolePolicy.html">DeleteRolePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
 *                 policies and inline policies</a> in the
 *             <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DetachRolePolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DetachRolePolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // DetachRolePolicyRequest
 *   RoleName: "STRING_VALUE", // required
 *   PolicyArn: "STRING_VALUE", // required
 * };
 * const command = new DetachRolePolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DetachRolePolicyCommandInput - {@link DetachRolePolicyCommandInput}
 * @returns {@link DetachRolePolicyCommandOutput}
 * @see {@link DetachRolePolicyCommandInput} for command's `input` shape.
 * @see {@link DetachRolePolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link UnmodifiableEntityException} (client fault)
 *  <p>The request was rejected because service-linked roles are protected Amazon Web Services resources. Only
 *       the service that depends on the service-linked role can modify or delete the role on your
 *       behalf. The error message includes the name of the service that depends on this service-linked
 *       role. You must request the change through that service.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class DetachRolePolicyCommand extends $Command
  .classBuilder<
    DetachRolePolicyCommandInput,
    DetachRolePolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "DetachRolePolicy", {})
  .n("IAMClient", "DetachRolePolicyCommand")
  .sc(DetachRolePolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetachRolePolicyRequest;
      output: {};
    };
    sdk: {
      input: DetachRolePolicyCommandInput;
      output: DetachRolePolicyCommandOutput;
    };
  };
}
