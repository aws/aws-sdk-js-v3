// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UntagPolicyRequest } from "../models/models_1";
import { UntagPolicy } from "../schemas/schemas_38_Untag";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UntagPolicyCommand}.
 */
export interface UntagPolicyCommandInput extends UntagPolicyRequest {}
/**
 * @public
 *
 * The output of {@link UntagPolicyCommand}.
 */
export interface UntagPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the specified tags from the customer managed policy. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UntagPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UntagPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // UntagPolicyRequest
 *   PolicyArn: "STRING_VALUE", // required
 *   TagKeys: [ // tagKeyListType // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UntagPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UntagPolicyCommandInput - {@link UntagPolicyCommandInput}
 * @returns {@link UntagPolicyCommandOutput}
 * @see {@link UntagPolicyCommandInput} for command's `input` shape.
 * @see {@link UntagPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
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
export class UntagPolicyCommand extends $Command
  .classBuilder<
    UntagPolicyCommandInput,
    UntagPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "UntagPolicy", {})
  .n("IAMClient", "UntagPolicyCommand")
  .sc(UntagPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UntagPolicyRequest;
      output: {};
    };
    sdk: {
      input: UntagPolicyCommandInput;
      output: UntagPolicyCommandOutput;
    };
  };
}
