// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateAliasRequest } from "../models/models_0";
import { de_AssociateAliasCommand, se_AssociateAliasCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateAliasCommand}.
 */
export interface AssociateAliasCommandInput extends AssociateAliasRequest {}
/**
 * @public
 *
 * The output of {@link AssociateAliasCommand}.
 */
export interface AssociateAliasCommandOutput extends __MetadataBearer {}

/**
 * <p>Associates an alias (also known as a CNAME or an alternate domain name) with a CloudFront
 * 			distribution.</p>
 *          <p>With this operation you can move an alias that's already in use on a CloudFront distribution
 * 			to a different distribution in one step. This prevents the downtime that could occur if
 * 			you first remove the alias from one distribution and then separately add the alias to
 * 			another distribution.</p>
 *          <p>To use this operation to associate an alias with a distribution, you provide the alias
 * 			and the ID of the target distribution for the alias. For more information, including how
 * 			to set up the target distribution, prerequisites that you must complete, and other
 * 			restrictions, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-move">Moving an alternate domain name to a different
 * 				distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, AssociateAliasCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, AssociateAliasCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudFrontClient(config);
 * const input = { // AssociateAliasRequest
 *   TargetDistributionId: "STRING_VALUE", // required
 *   Alias: "STRING_VALUE", // required
 * };
 * const command = new AssociateAliasCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateAliasCommandInput - {@link AssociateAliasCommandInput}
 * @returns {@link AssociateAliasCommandOutput}
 * @see {@link AssociateAliasCommandInput} for command's `input` shape.
 * @see {@link AssociateAliasCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link IllegalUpdate} (client fault)
 *  <p>The update contains modifications that are not allowed.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link NoSuchDistribution} (client fault)
 *  <p>The specified distribution does not exist.</p>
 *
 * @throws {@link TooManyDistributionCNAMEs} (client fault)
 *  <p>Your request contains more CNAMEs than are allowed per distribution.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 * @public
 */
export class AssociateAliasCommand extends $Command
  .classBuilder<
    AssociateAliasCommandInput,
    AssociateAliasCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "AssociateAlias", {})
  .n("CloudFrontClient", "AssociateAliasCommand")
  .f(void 0, void 0)
  .ser(se_AssociateAliasCommand)
  .de(de_AssociateAliasCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateAliasRequest;
      output: {};
    };
    sdk: {
      input: AssociateAliasCommandInput;
      output: AssociateAliasCommandOutput;
    };
  };
}
