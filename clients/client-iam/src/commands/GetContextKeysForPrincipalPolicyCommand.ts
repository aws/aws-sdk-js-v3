// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetContextKeysForPolicyResponse, GetContextKeysForPrincipalPolicyRequest } from "../models/models_0";
import {
  de_GetContextKeysForPrincipalPolicyCommand,
  se_GetContextKeysForPrincipalPolicyCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetContextKeysForPrincipalPolicyCommand}.
 */
export interface GetContextKeysForPrincipalPolicyCommandInput extends GetContextKeysForPrincipalPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetContextKeysForPrincipalPolicyCommand}.
 */
export interface GetContextKeysForPrincipalPolicyCommandOutput
  extends GetContextKeysForPolicyResponse,
    __MetadataBearer {}

/**
 * <p>Gets a list of all of the context keys referenced in all the IAM policies that are
 *             attached to the specified IAM entity. The entity can be an IAM user, group, or role.
 *             If you specify a user, then the request also includes all of the policies attached to
 *             groups that the user is a member of.</p>
 *          <p>You can optionally include a list of one or more additional policies, specified as
 *             strings. If you want to include <i>only</i> a list of policies by string,
 *             use <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForCustomPolicy.html">GetContextKeysForCustomPolicy</a> instead.</p>
 *          <p>
 *             <b>Note:</b> This operation discloses information about the
 *             permissions granted to other users. If you do not want users to see other user's
 *             permissions, then consider allowing them to use <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForCustomPolicy.html">GetContextKeysForCustomPolicy</a> instead.</p>
 *          <p>Context keys are variables maintained by Amazon Web Services and its services that provide details
 *             about the context of an API query request. Context keys can be evaluated by testing
 *             against a value in an IAM policy. Use <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForPrincipalPolicy.html">GetContextKeysForPrincipalPolicy</a> to understand what key names and values
 *             you must supply when you call <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulatePrincipalPolicy.html">SimulatePrincipalPolicy</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetContextKeysForPrincipalPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetContextKeysForPrincipalPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // GetContextKeysForPrincipalPolicyRequest
 *   PolicySourceArn: "STRING_VALUE", // required
 *   PolicyInputList: [ // SimulationPolicyListType
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetContextKeysForPrincipalPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetContextKeysForPolicyResponse
 * //   ContextKeyNames: [ // ContextKeyNamesResultListType
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetContextKeysForPrincipalPolicyCommandInput - {@link GetContextKeysForPrincipalPolicyCommandInput}
 * @returns {@link GetContextKeysForPrincipalPolicyCommandOutput}
 * @see {@link GetContextKeysForPrincipalPolicyCommandInput} for command's `input` shape.
 * @see {@link GetContextKeysForPrincipalPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class GetContextKeysForPrincipalPolicyCommand extends $Command
  .classBuilder<
    GetContextKeysForPrincipalPolicyCommandInput,
    GetContextKeysForPrincipalPolicyCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "GetContextKeysForPrincipalPolicy", {})
  .n("IAMClient", "GetContextKeysForPrincipalPolicyCommand")
  .f(void 0, void 0)
  .ser(se_GetContextKeysForPrincipalPolicyCommand)
  .de(de_GetContextKeysForPrincipalPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContextKeysForPrincipalPolicyRequest;
      output: GetContextKeysForPolicyResponse;
    };
    sdk: {
      input: GetContextKeysForPrincipalPolicyCommandInput;
      output: GetContextKeysForPrincipalPolicyCommandOutput;
    };
  };
}
