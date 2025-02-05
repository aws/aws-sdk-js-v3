// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetManagedRuleSetRequest, GetManagedRuleSetResponse } from "../models/models_0";
import { de_GetManagedRuleSetCommand, se_GetManagedRuleSetCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetManagedRuleSetCommand}.
 */
export interface GetManagedRuleSetCommandInput extends GetManagedRuleSetRequest {}
/**
 * @public
 *
 * The output of {@link GetManagedRuleSetCommand}.
 */
export interface GetManagedRuleSetCommandOutput extends GetManagedRuleSetResponse, __MetadataBearer {}

/**
 * <p>Retrieves the specified managed rule set. </p>
 *          <note>
 *             <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p>
 *             <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetManagedRuleSetCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetManagedRuleSetCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new WAFV2Client(config);
 * const input = { // GetManagedRuleSetRequest
 *   Name: "STRING_VALUE", // required
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetManagedRuleSetCommand(input);
 * const response = await client.send(command);
 * // { // GetManagedRuleSetResponse
 * //   ManagedRuleSet: { // ManagedRuleSet
 * //     Name: "STRING_VALUE", // required
 * //     Id: "STRING_VALUE", // required
 * //     ARN: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     PublishedVersions: { // PublishedVersions
 * //       "<keys>": { // ManagedRuleSetVersion
 * //         AssociatedRuleGroupArn: "STRING_VALUE",
 * //         Capacity: Number("long"),
 * //         ForecastedLifetime: Number("int"),
 * //         PublishTimestamp: new Date("TIMESTAMP"),
 * //         LastUpdateTimestamp: new Date("TIMESTAMP"),
 * //         ExpiryTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //     RecommendedVersion: "STRING_VALUE",
 * //     LabelNamespace: "STRING_VALUE",
 * //   },
 * //   LockToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetManagedRuleSetCommandInput - {@link GetManagedRuleSetCommandInput}
 * @returns {@link GetManagedRuleSetCommandOutput}
 * @see {@link GetManagedRuleSetCommandInput} for command's `input` shape.
 * @see {@link GetManagedRuleSetCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>Your request is valid, but WAF couldn’t perform the operation because of a system
 *          problem. Retry your request. </p>
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *  <p>The operation isn't valid. </p>
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *  <p>The operation failed because WAF didn't recognize a parameter in the request. For
 *          example: </p>
 *          <ul>
 *             <li>
 *                <p>You specified a parameter name or value that isn't valid.</p>
 *             </li>
 *             <li>
 *                <p>Your nested statement isn't valid. You might have tried to nest a statement that
 *                can’t be nested. </p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>WebACL</code> with a <code>DefaultAction</code> that
 *                isn't among the types available at <a>DefaultAction</a>.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                with which a web ACL can't be associated.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>WAF couldn’t perform the operation because your resource doesn't exist.
 *        If you've just created a resource that you're using in this operation, you might
 *        just need to wait a few minutes. It can take from a few seconds to a number of minutes
 *        for changes to propagate. </p>
 *
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 * @public
 */
export class GetManagedRuleSetCommand extends $Command
  .classBuilder<
    GetManagedRuleSetCommandInput,
    GetManagedRuleSetCommandOutput,
    WAFV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWAF_20190729", "GetManagedRuleSet", {})
  .n("WAFV2Client", "GetManagedRuleSetCommand")
  .f(void 0, void 0)
  .ser(se_GetManagedRuleSetCommand)
  .de(de_GetManagedRuleSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetManagedRuleSetRequest;
      output: GetManagedRuleSetResponse;
    };
    sdk: {
      input: GetManagedRuleSetCommandInput;
      output: GetManagedRuleSetCommandOutput;
    };
  };
}
