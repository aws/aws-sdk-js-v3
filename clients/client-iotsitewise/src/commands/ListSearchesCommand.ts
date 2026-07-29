// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSearchesRequest, ListSearchesResponse } from "../models/models_1";
import { ListSearches$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSearchesCommand}.
 */
export interface ListSearchesCommandInput extends ListSearchesRequest {}
/**
 * @public
 *
 * The output of {@link ListSearchesCommand}.
 */
export interface ListSearchesCommandOutput extends ListSearchesResponse, __MetadataBearer {}

/**
 * <p>Lists the searches in a workspace, most recently started first. Results can be narrowed with
 * optional filters (status, search type, group, and started-at time range) and are paginated: when
 * <code>nextToken</code> is present, pass it on a subsequent call to retrieve the next page.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListSearchesCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListSearchesCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListSearchesRequest
 *   workspaceName: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   listSearchesFilters: { // ListSearchesFilters
 *     statusFilter: [ // SearchStatusFilterList
 *       "QUEUED" || "RUNNING" || "SUCCEEDED" || "FAILED",
 *     ],
 *     startedAfter: new Date("TIMESTAMP"),
 *     startedBefore: new Date("TIMESTAMP"),
 *     groupIdFilter: [ // GroupIdFilterList
 *       "STRING_VALUE",
 *     ],
 *     searchTypeFilter: [ // SearchTypeFilterList
 *       "DEEP" || "QUICK",
 *     ],
 *   },
 * };
 * const command = new ListSearchesCommand(input);
 * const response = await client.send(command);
 * // { // ListSearchesResponse
 * //   searchSummaries: [ // SearchSummaries // required
 * //     { // SearchSummary
 * //       searchId: "STRING_VALUE", // required
 * //       workspaceName: "STRING_VALUE", // required
 * //       status: "QUEUED" || "RUNNING" || "SUCCEEDED" || "FAILED", // required
 * //       queryStatement: "STRING_VALUE", // required
 * //       searchType: "DEEP" || "QUICK", // required
 * //       statusReason: "STRING_VALUE",
 * //       startedAt: new Date("TIMESTAMP"),
 * //       groupId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSearchesCommandInput - {@link ListSearchesCommandInput}
 * @returns {@link ListSearchesCommandOutput}
 * @see {@link ListSearchesCommandInput} for command's `input` shape.
 * @see {@link ListSearchesCommandOutput} for command's `response` shape.
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
export class ListSearchesCommand extends command<ListSearchesCommandInput, ListSearchesCommandOutput>(
  _ep0,
  _mw0,
  "ListSearches",
  ListSearches$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSearchesRequest;
      output: ListSearchesResponse;
    };
    sdk: {
      input: ListSearchesCommandInput;
      output: ListSearchesCommandOutput;
    };
  };
}
