// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListByteMatchSetsRequest, ListByteMatchSetsResponse } from "../models/models_0";
import { ListByteMatchSets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListByteMatchSetsCommand}.
 */
export interface ListByteMatchSetsCommandInput extends ListByteMatchSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListByteMatchSetsCommand}.
 */
export interface ListByteMatchSetsCommandOutput extends ListByteMatchSetsResponse, __MetadataBearer {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Returns an array of ByteMatchSetSummary objects.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, ListByteMatchSetsCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, ListByteMatchSetsCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = { // ListByteMatchSetsRequest
 *   NextMarker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListByteMatchSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListByteMatchSetsResponse
 * //   NextMarker: "STRING_VALUE",
 * //   ByteMatchSets: [ // ByteMatchSetSummaries
 * //     { // ByteMatchSetSummary
 * //       ByteMatchSetId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListByteMatchSetsCommandInput - {@link ListByteMatchSetsCommandInput}
 * @returns {@link ListByteMatchSetsCommandOutput}
 * @see {@link ListByteMatchSetsCommandInput} for command's `input` shape.
 * @see {@link ListByteMatchSetsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListByteMatchSetsCommand extends command<ListByteMatchSetsCommandInput, ListByteMatchSetsCommandOutput>(
  _ep0,
  _mw0,
  "ListByteMatchSets",
  ListByteMatchSets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListByteMatchSetsRequest;
      output: ListByteMatchSetsResponse;
    };
    sdk: {
      input: ListByteMatchSetsCommandInput;
      output: ListByteMatchSetsCommandOutput;
    };
  };
}
