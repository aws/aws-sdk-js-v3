// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeManagedRuleGroupRequest, DescribeManagedRuleGroupResponse } from "../models/models_0";
import { DescribeManagedRuleGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Provides high-level information for a managed rule group, including descriptions of the rules.
 *
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
 * //         Monetize: { // MonetizeAction
 * //           PriceMultiplier: "STRING_VALUE",
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
 *
 * The operation failed because the specified version for the managed rule group has expired. You can retrieve the available versions for the managed rule group by calling ListAvailableManagedRuleGroupVersions.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *
 * Your request is valid, but WAF couldn’t perform the operation because of a system problem. Retry your request.
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *
 * The operation isn't valid.
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *
 * The operation failed because WAF didn't recognize a parameter in the request. For example:
 *
 * - You specified a parameter name or value that isn't valid.
 * - Your nested statement isn't valid. You might have tried to nest a statement that can’t be nested.
 * - You tried to update a `WebACL` with a `DefaultAction` that isn't among the types available at DefaultAction.
 * - Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL can't be associated.
 *
 * @throws {@link WAFInvalidResourceException} (client fault)
 *
 * WAF couldn’t perform the operation because the resource that you requested isn’t valid. Check the resource, and try again.
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *
 * WAF couldn’t perform the operation because your resource doesn't exist. If you've just created a resource that you're using in this operation, you might just need to wait a few minutes. It can take from a few seconds to a number of minutes for changes to propagate.
 *
 * @throws {@link WAFV2ServiceException}
 *
 * Base exception class for all service exceptions from WAFV2 service.
 *
 * @public
 */
export class DescribeManagedRuleGroupCommand extends command<DescribeManagedRuleGroupCommandInput, DescribeManagedRuleGroupCommandOutput>(
  _ep0,
  _mw0,
  "DescribeManagedRuleGroup",
  DescribeManagedRuleGroup$
) {
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
