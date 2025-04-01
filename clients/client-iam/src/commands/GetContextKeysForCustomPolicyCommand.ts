// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetContextKeysForCustomPolicyRequest, GetContextKeysForPolicyResponse } from "../models/models_0";
import {
  de_GetContextKeysForCustomPolicyCommand,
  se_GetContextKeysForCustomPolicyCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetContextKeysForCustomPolicyCommand}.
 */
export interface GetContextKeysForCustomPolicyCommandInput extends GetContextKeysForCustomPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetContextKeysForCustomPolicyCommand}.
 */
export interface GetContextKeysForCustomPolicyCommandOutput extends GetContextKeysForPolicyResponse, __MetadataBearer {}

/**
 * <p>Gets a list of all of the context keys referenced in the input policies. The policies
 *             are supplied as a list of one or more strings. To get the context keys from policies
 *             associated with an IAM user, group, or role, use <a>GetContextKeysForPrincipalPolicy</a>.</p>
 *          <p>Context keys are variables maintained by Amazon Web Services and its services that provide details
 *             about the context of an API query request. Context keys can be evaluated by testing
 *             against a value specified in an IAM policy. Use
 *                 <code>GetContextKeysForCustomPolicy</code> to understand what key names and values
 *             you must supply when you call <a>SimulateCustomPolicy</a>. Note that all
 *             parameters are shown in unencoded form here for clarity but must be URL encoded to be
 *             included as a part of a real HTML request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetContextKeysForCustomPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetContextKeysForCustomPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // GetContextKeysForCustomPolicyRequest
 *   PolicyInputList: [ // SimulationPolicyListType // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetContextKeysForCustomPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetContextKeysForPolicyResponse
 * //   ContextKeyNames: [ // ContextKeyNamesResultListType
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetContextKeysForCustomPolicyCommandInput - {@link GetContextKeysForCustomPolicyCommandInput}
 * @returns {@link GetContextKeysForCustomPolicyCommandOutput}
 * @see {@link GetContextKeysForCustomPolicyCommandInput} for command's `input` shape.
 * @see {@link GetContextKeysForCustomPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class GetContextKeysForCustomPolicyCommand extends $Command
  .classBuilder<
    GetContextKeysForCustomPolicyCommandInput,
    GetContextKeysForCustomPolicyCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "GetContextKeysForCustomPolicy", {})
  .n("IAMClient", "GetContextKeysForCustomPolicyCommand")
  .f(void 0, void 0)
  .ser(se_GetContextKeysForCustomPolicyCommand)
  .de(de_GetContextKeysForCustomPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContextKeysForCustomPolicyRequest;
      output: GetContextKeysForPolicyResponse;
    };
    sdk: {
      input: GetContextKeysForCustomPolicyCommandInput;
      output: GetContextKeysForCustomPolicyCommandOutput;
    };
  };
}
