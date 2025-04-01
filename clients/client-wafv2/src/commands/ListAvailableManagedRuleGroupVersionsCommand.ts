// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListAvailableManagedRuleGroupVersionsRequest,
  ListAvailableManagedRuleGroupVersionsResponse,
} from "../models/models_0";
import {
  de_ListAvailableManagedRuleGroupVersionsCommand,
  se_ListAvailableManagedRuleGroupVersionsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAvailableManagedRuleGroupVersionsCommand}.
 */
export interface ListAvailableManagedRuleGroupVersionsCommandInput
  extends ListAvailableManagedRuleGroupVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListAvailableManagedRuleGroupVersionsCommand}.
 */
export interface ListAvailableManagedRuleGroupVersionsCommandOutput
  extends ListAvailableManagedRuleGroupVersionsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of the available versions for the specified managed rule group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, ListAvailableManagedRuleGroupVersionsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, ListAvailableManagedRuleGroupVersionsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const input = { // ListAvailableManagedRuleGroupVersionsRequest
 *   VendorName: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   NextMarker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListAvailableManagedRuleGroupVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAvailableManagedRuleGroupVersionsResponse
 * //   NextMarker: "STRING_VALUE",
 * //   Versions: [ // ManagedRuleGroupVersions
 * //     { // ManagedRuleGroupVersion
 * //       Name: "STRING_VALUE",
 * //       LastUpdateTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   CurrentDefaultVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAvailableManagedRuleGroupVersionsCommandInput - {@link ListAvailableManagedRuleGroupVersionsCommandInput}
 * @returns {@link ListAvailableManagedRuleGroupVersionsCommandOutput}
 * @see {@link ListAvailableManagedRuleGroupVersionsCommandInput} for command's `input` shape.
 * @see {@link ListAvailableManagedRuleGroupVersionsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListAvailableManagedRuleGroupVersionsCommand extends $Command
  .classBuilder<
    ListAvailableManagedRuleGroupVersionsCommandInput,
    ListAvailableManagedRuleGroupVersionsCommandOutput,
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
  .s("AWSWAF_20190729", "ListAvailableManagedRuleGroupVersions", {})
  .n("WAFV2Client", "ListAvailableManagedRuleGroupVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListAvailableManagedRuleGroupVersionsCommand)
  .de(de_ListAvailableManagedRuleGroupVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAvailableManagedRuleGroupVersionsRequest;
      output: ListAvailableManagedRuleGroupVersionsResponse;
    };
    sdk: {
      input: ListAvailableManagedRuleGroupVersionsCommandInput;
      output: ListAvailableManagedRuleGroupVersionsCommandOutput;
    };
  };
}
