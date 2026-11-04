// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListWebACLsRequest, ListWebACLsResponse } from "../models/models_0";
import { ListWebACLs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Returns an array of WebACLSummary objects in the response.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, ListWebACLsCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, ListWebACLsCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = { // ListWebACLsRequest
 *   NextMarker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListWebACLsCommand(input);
 * const response = await client.send(command);
 * // { // ListWebACLsResponse
 * //   NextMarker: "STRING_VALUE",
 * //   WebACLs: [ // WebACLSummaries
 * //     { // WebACLSummary
 * //       WebACLId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
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
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *
 * The operation failed because of a system problem, even though the request was valid. Retry your request.
 *
 * @throws {@link WAFInvalidAccountException} (client fault)
 *
 * The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.
 *
 * @throws {@link WAFRegionalServiceException}
 *
 * Base exception class for all service exceptions from WAFRegional service.
 *
 * @example To list Web ACLs
 * ```javascript
 * // The following example returns an array of up to 100 web ACLs.
 * const input = {
 *   Limit: 100
 * };
 * const command = new ListWebACLsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   WebACLs: [
 *     {
 *       Name: "WebACLexample",
 *       WebACLId: "webacl-1472061481310"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListWebACLsCommand extends command<ListWebACLsCommandInput, ListWebACLsCommandOutput>(
  _ep0,
  _mw0,
  "ListWebACLs",
  ListWebACLs$
) {
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
