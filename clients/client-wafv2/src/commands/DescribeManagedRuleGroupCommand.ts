// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeManagedRuleGroupRequest, DescribeManagedRuleGroupResponse } from "../models/models_0";
import { de_DescribeManagedRuleGroupCommand, se_DescribeManagedRuleGroupCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeManagedRuleGroupCommand}.
 */
export interface DescribeManagedRuleGroupCommandInput extends DescribeManagedRuleGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeManagedRuleGroupCommand}.
 */
export interface DescribeManagedRuleGroupCommandOutput extends DescribeManagedRuleGroupResponse, __MetadataBearer {}

/**
 * <p>Provides high-level information for a managed rule group, including descriptions of the rules. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, DescribeManagedRuleGroupCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, DescribeManagedRuleGroupCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // DescribeManagedRuleGroupRequest
 *   VendorName: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   VersionName: "STRING_VALUE",
 * };
 * const command = new DescribeManagedRuleGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeManagedRuleGroupResponse
 * //   VersionName: "STRING_VALUE",
 * //   SnsTopicArn: "STRING_VALUE",
 * //   Capacity: Number("long"),
 * //   Rules: [ // RuleSummaries
 * //     { // RuleSummary
 * //       Name: "STRING_VALUE",
 * //       Action: { // RuleAction
 * //         Block: { // BlockAction
 * //           CustomResponse: { // CustomResponse
 * //             ResponseCode: Number("int"), // required
 * //             CustomResponseBodyKey: "STRING_VALUE",
 * //             ResponseHeaders: [ // CustomHTTPHeaders
 * //               { // CustomHTTPHeader
 * //                 Name: "STRING_VALUE", // required
 * //                 Value: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         Allow: { // AllowAction
 * //           CustomRequestHandling: { // CustomRequestHandling
 * //             InsertHeaders: [ // required
 * //               {
 * //                 Name: "STRING_VALUE", // required
 * //                 Value: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         Count: { // CountAction
 * //           CustomRequestHandling: {
 * //             InsertHeaders: [ // required
 * //               {
 * //                 Name: "STRING_VALUE", // required
 * //                 Value: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         Captcha: { // CaptchaAction
 * //           CustomRequestHandling: {
 * //             InsertHeaders: [ // required
 * //               {
 * //                 Name: "STRING_VALUE", // required
 * //                 Value: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         Challenge: { // ChallengeAction
 * //           CustomRequestHandling: {
 * //             InsertHeaders: [ // required
 * //               {
 * //                 Name: "STRING_VALUE", // required
 * //                 Value: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   LabelNamespace: "STRING_VALUE",
 * //   AvailableLabels: [ // LabelSummaries
 * //     { // LabelSummary
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ConsumedLabels: [
 * //     {
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeManagedRuleGroupCommandInput - {@link DescribeManagedRuleGroupCommandInput}
 * @returns {@link DescribeManagedRuleGroupCommandOutput}
 * @see {@link DescribeManagedRuleGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeManagedRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFExpiredManagedRuleGroupVersionException} (client fault)
 *  <p>The operation failed because the specified version for the managed rule group has
 *          expired. You can retrieve the available versions for the managed rule group by calling
 *             <a>ListAvailableManagedRuleGroupVersions</a>.</p>
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
 * @throws {@link WAFInvalidResourceException} (client fault)
 *  <p>WAF couldn’t perform the operation because the resource that you requested isn’t
 *          valid. Check the resource, and try again.</p>
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
 *
 * @public
 */
export class DescribeManagedRuleGroupCommand extends $Command
  .classBuilder<
    DescribeManagedRuleGroupCommandInput,
    DescribeManagedRuleGroupCommandOutput,
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
  .s("AWSWAF_20190729", "DescribeManagedRuleGroup", {})
  .n("WAFV2Client", "DescribeManagedRuleGroupCommand")
  .f(void 0, void 0)
  .ser(se_DescribeManagedRuleGroupCommand)
  .de(de_DescribeManagedRuleGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeManagedRuleGroupRequest;
      output: DescribeManagedRuleGroupResponse;
    };
    sdk: {
      input: DescribeManagedRuleGroupCommandInput;
      output: DescribeManagedRuleGroupCommandOutput;
    };
  };
}
