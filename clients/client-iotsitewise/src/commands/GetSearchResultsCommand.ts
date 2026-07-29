// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSearchResultsRequest, GetSearchResultsResponse } from "../models/models_1";
import { GetSearchResults$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSearchResultsCommand}.
 */
export interface GetSearchResultsCommandInput extends GetSearchResultsRequest {}
/**
 * @public
 *
 * The output of {@link GetSearchResultsCommand}.
 */
export interface GetSearchResultsCommandOutput extends GetSearchResultsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the ranked results of a search, ordered by descending relevance score. Results are
 * available only after the search has reached the <code>SUCCEEDED</code> status. Calling this on a search
 * that exists but has not yet completed returns <code>InvalidRequestException</code>, while calling it on a
 * search that does not exist returns <code>ResourceNotFoundException</code>. The response is paginated: when
 * <code>nextToken</code> is present, pass it on a subsequent call to retrieve the next page.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, GetSearchResultsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, GetSearchResultsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // GetSearchResultsRequest
 *   searchId: "STRING_VALUE", // required
 *   workspaceName: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetSearchResultsCommand(input);
 * const response = await client.send(command);
 * // { // GetSearchResultsResponse
 * //   searchResults: [ // SearchResultList // required
 * //     { // SearchResult
 * //       searchId: "STRING_VALUE", // required
 * //       workspaceName: "STRING_VALUE", // required
 * //       datasetId: "STRING_VALUE", // required
 * //       timeSeriesId: "STRING_VALUE", // required
 * //       startTimestamp: { // TimeInNanos
 * //         timeInSeconds: Number("long"), // required
 * //         offsetInNanos: Number("int"),
 * //       },
 * //       endTimestamp: {
 * //         timeInSeconds: Number("long"), // required
 * //         offsetInNanos: Number("int"),
 * //       },
 * //       topTimestamp: {
 * //         timeInSeconds: Number("long"), // required
 * //         offsetInNanos: Number("int"),
 * //       },
 * //       score: Number("float"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSearchResultsCommandInput - {@link GetSearchResultsCommandInput}
 * @returns {@link GetSearchResultsCommandOutput}
 * @see {@link GetSearchResultsCommandInput} for command's `input` shape.
 * @see {@link GetSearchResultsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link IoTSiteWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTSiteWise service.</p>
 *
 *
 * @public
 */
export class GetSearchResultsCommand extends command<GetSearchResultsCommandInput, GetSearchResultsCommandOutput>(
  _ep0,
  _mw0,
  "GetSearchResults",
  GetSearchResults$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSearchResultsRequest;
      output: GetSearchResultsResponse;
    };
    sdk: {
      input: GetSearchResultsCommandInput;
      output: GetSearchResultsCommandOutput;
    };
  };
}
