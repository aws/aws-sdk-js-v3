// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListXssMatchSetsRequest, ListXssMatchSetsResponse } from "../models/models_0";
import { ListXssMatchSets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListXssMatchSetsCommand}.
 */
export interface ListXssMatchSetsCommandInput extends ListXssMatchSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListXssMatchSetsCommand}.
 */
export interface ListXssMatchSetsCommandOutput extends ListXssMatchSetsResponse, __MetadataBearer {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Returns an array of XssMatchSet objects.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, ListXssMatchSetsCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, ListXssMatchSetsCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * // import type { WAFClientConfig } from "@aws-sdk/client-waf";
 * const config = {}; // type is WAFClientConfig
 * const client = new WAFClient(config);
 * const input = { // ListXssMatchSetsRequest
 *   NextMarker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListXssMatchSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListXssMatchSetsResponse
 * //   NextMarker: "STRING_VALUE",
 * //   XssMatchSets: [ // XssMatchSetSummaries
 * //     { // XssMatchSetSummary
 * //       XssMatchSetId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListXssMatchSetsCommandInput - {@link ListXssMatchSetsCommandInput}
 * @returns {@link ListXssMatchSetsCommandOutput}
 * @see {@link ListXssMatchSetsCommandInput} for command's `input` shape.
 * @see {@link ListXssMatchSetsCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *
 * The operation failed because of a system problem, even though the request was valid. Retry your request.
 *
 * @throws {@link WAFInvalidAccountException} (client fault)
 *
 * The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.
 *
 * @throws {@link WAFServiceException}
 *
 * Base exception class for all service exceptions from WAF service.
 *
 * @example To list XSS match sets
 * ```javascript
 * // The following example returns an array of up to 100 XSS match sets.
 * const input = {
 *   Limit: 100
 * };
 * const command = new ListXssMatchSetsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   XssMatchSets: [
 *     {
 *       Name: "MySampleXssMatchSet",
 *       XssMatchSetId: "example1ds3t-46da-4fdb-b8d5-abc321j569j5"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListXssMatchSetsCommand extends command<ListXssMatchSetsCommandInput, ListXssMatchSetsCommandOutput>(
  _ep0,
  _mw0,
  "ListXssMatchSets",
  ListXssMatchSets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListXssMatchSetsRequest;
      output: ListXssMatchSetsResponse;
    };
    sdk: {
      input: ListXssMatchSetsCommandInput;
      output: ListXssMatchSetsCommandOutput;
    };
  };
}
