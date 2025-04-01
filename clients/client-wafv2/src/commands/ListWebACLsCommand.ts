// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListWebACLsRequest, ListWebACLsResponse } from "../models/models_0";
import { de_ListWebACLsCommand, se_ListWebACLsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWebACLsCommand}.
 */
export interface ListWebACLsCommandInput extends ListWebACLsRequest {}
/**
 * @public
 *
 * The output of {@link ListWebACLsCommand}.
 */
export interface ListWebACLsCommandOutput extends ListWebACLsResponse, __MetadataBearer {}

/**
 * <p>Retrieves an array of <a>WebACLSummary</a> objects for the web ACLs that you
 *          manage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, ListWebACLsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, ListWebACLsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const input = { // ListWebACLsRequest
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   NextMarker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListWebACLsCommand(input);
 * const response = await client.send(command);
 * // { // ListWebACLsResponse
 * //   NextMarker: "STRING_VALUE",
 * //   WebACLs: [ // WebACLSummaries
 * //     { // WebACLSummary
 * //       Name: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       LockToken: "STRING_VALUE",
 * //       ARN: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListWebACLsCommandInput - {@link ListWebACLsCommandInput}
 * @returns {@link ListWebACLsCommandOutput}
 * @see {@link ListWebACLsCommandInput} for command's `input` shape.
 * @see {@link ListWebACLsCommandOutput} for command's `response` shape.
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
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 *
 * @public
 */
export class ListWebACLsCommand extends $Command
  .classBuilder<
    ListWebACLsCommandInput,
    ListWebACLsCommandOutput,
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
  .s("AWSWAF_20190729", "ListWebACLs", {})
  .n("WAFV2Client", "ListWebACLsCommand")
  .f(void 0, void 0)
  .ser(se_ListWebACLsCommand)
  .de(de_ListWebACLsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWebACLsRequest;
      output: ListWebACLsResponse;
    };
    sdk: {
      input: ListWebACLsCommandInput;
      output: ListWebACLsCommandOutput;
    };
  };
}
