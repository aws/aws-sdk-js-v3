// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UntagSAMLProviderRequest } from "../models/models_1";
import { de_UntagSAMLProviderCommand, se_UntagSAMLProviderCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UntagSAMLProviderCommand}.
 */
export interface UntagSAMLProviderCommandInput extends UntagSAMLProviderRequest {}
/**
 * @public
 *
 * The output of {@link UntagSAMLProviderCommand}.
 */
export interface UntagSAMLProviderCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the specified tags from the specified Security Assertion Markup Language (SAML)
 *       identity provider in IAM. For more information about these providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity
 *         federation</a>. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UntagSAMLProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UntagSAMLProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // UntagSAMLProviderRequest
 *   SAMLProviderArn: "STRING_VALUE", // required
 *   TagKeys: [ // tagKeyListType // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UntagSAMLProviderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UntagSAMLProviderCommandInput - {@link UntagSAMLProviderCommandInput}
 * @returns {@link UntagSAMLProviderCommandOutput}
 * @see {@link UntagSAMLProviderCommandInput} for command's `input` shape.
 * @see {@link UntagSAMLProviderCommandOutput} for command's `response` shape.
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
export class UntagSAMLProviderCommand extends $Command
  .classBuilder<
    UntagSAMLProviderCommandInput,
    UntagSAMLProviderCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "UntagSAMLProvider", {})
  .n("IAMClient", "UntagSAMLProviderCommand")
  .f(void 0, void 0)
  .ser(se_UntagSAMLProviderCommand)
  .de(de_UntagSAMLProviderCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UntagSAMLProviderRequest;
      output: {};
    };
    sdk: {
      input: UntagSAMLProviderCommandInput;
      output: UntagSAMLProviderCommandOutput;
    };
  };
}
