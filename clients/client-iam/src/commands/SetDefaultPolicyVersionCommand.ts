// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { SetDefaultPolicyVersionRequest } from "../models/models_0";
import { SetDefaultPolicyVersion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetDefaultPolicyVersionCommand}.
 */
export interface SetDefaultPolicyVersionCommandInput extends SetDefaultPolicyVersionRequest {}
/**
 * @public
 *
 * The output of {@link SetDefaultPolicyVersionCommand}.
 */
export interface SetDefaultPolicyVersionCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets the specified version of the specified policy as the policy's default (operative)
 *             version.</p>
 *          <p>This operation affects all users, groups, and roles that the policy is attached to. To
 *             list the users, groups, and roles that the policy is attached to, use <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListEntitiesForPolicy.html">ListEntitiesForPolicy</a>.</p>
 *          <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, SetDefaultPolicyVersionCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, SetDefaultPolicyVersionCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // SetDefaultPolicyVersionRequest
 *   PolicyArn: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE", // required
 * };
 * const command = new SetDefaultPolicyVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetDefaultPolicyVersionCommandInput - {@link SetDefaultPolicyVersionCommandInput}
 * @returns {@link SetDefaultPolicyVersionCommandOutput}
 * @see {@link SetDefaultPolicyVersionCommandInput} for command's `input` shape.
 * @see {@link SetDefaultPolicyVersionCommandOutput} for command's `response` shape.
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
export class SetDefaultPolicyVersionCommand extends $Command
  .classBuilder<
    SetDefaultPolicyVersionCommandInput,
    SetDefaultPolicyVersionCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "SetDefaultPolicyVersion", {})
  .n("IAMClient", "SetDefaultPolicyVersionCommand")
  .sc(SetDefaultPolicyVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetDefaultPolicyVersionRequest;
      output: {};
    };
    sdk: {
      input: SetDefaultPolicyVersionCommandInput;
      output: SetDefaultPolicyVersionCommandOutput;
    };
  };
}
