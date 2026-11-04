// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSqlInjectionMatchSetsRequest, ListSqlInjectionMatchSetsResponse } from "../models/models_0";
import { ListSqlInjectionMatchSets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSqlInjectionMatchSetsCommand}.
 */
export interface ListSqlInjectionMatchSetsCommandInput extends ListSqlInjectionMatchSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListSqlInjectionMatchSetsCommand}.
 */
export interface ListSqlInjectionMatchSetsCommandOutput extends ListSqlInjectionMatchSetsResponse, __MetadataBearer {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Returns an array of SqlInjectionMatchSet objects.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, ListSqlInjectionMatchSetsCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, ListSqlInjectionMatchSetsCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = { // ListSqlInjectionMatchSetsRequest
 *   NextMarker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListSqlInjectionMatchSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListSqlInjectionMatchSetsResponse
 * //   NextMarker: "STRING_VALUE",
 * //   SqlInjectionMatchSets: [ // SqlInjectionMatchSetSummaries
 * //     { // SqlInjectionMatchSetSummary
 * //       SqlInjectionMatchSetId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSqlInjectionMatchSetsCommandInput - {@link ListSqlInjectionMatchSetsCommandInput}
 * @returns {@link ListSqlInjectionMatchSetsCommandOutput}
 * @see {@link ListSqlInjectionMatchSetsCommandInput} for command's `input` shape.
 * @see {@link ListSqlInjectionMatchSetsCommandOutput} for command's `response` shape.
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
 * @example To list SQL injection match sets
 * ```javascript
 * // The following example returns an array of up to 100 SQL injection match sets.
 * const input = {
 *   Limit: 100
 * };
 * const command = new ListSqlInjectionMatchSetsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SqlInjectionMatchSets: [
 *     {
 *       Name: "MySQLInjectionMatchSet",
 *       SqlInjectionMatchSetId: "example1ds3t-46da-4fdb-b8d5-abc321j569j5"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListSqlInjectionMatchSetsCommand extends command<ListSqlInjectionMatchSetsCommandInput, ListSqlInjectionMatchSetsCommandOutput>(
  _ep0,
  _mw0,
  "ListSqlInjectionMatchSets",
  ListSqlInjectionMatchSets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSqlInjectionMatchSetsRequest;
      output: ListSqlInjectionMatchSetsResponse;
    };
    sdk: {
      input: ListSqlInjectionMatchSetsCommandInput;
      output: ListSqlInjectionMatchSetsCommandOutput;
    };
  };
}
