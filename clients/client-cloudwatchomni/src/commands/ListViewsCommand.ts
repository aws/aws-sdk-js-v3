// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListViewsRequest, ListViewsResponse } from "../models/models_0";
import { ListViews$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListViewsCommand}.
 */
export interface ListViewsCommandInput extends ListViewsRequest {}
/**
 * @public
 *
 * The output of {@link ListViewsCommand}.
 */
export interface ListViewsCommandOutput extends ListViewsResponse, __MetadataBearer {}

/**
 * Lists the views in the caller's account and region.
 *
 * Returns a summary for each view, optionally filtered by view type. View
 * definitions are not included — use GetView to retrieve them.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, ListViewsCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, ListViewsCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // ListViewsRequest
 *   type: "USER" || "MANAGED",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListViewsCommand(input);
 * const response = await client.send(command);
 * // { // ListViewsResponse
 * //   items: [ // ViewSummaryList // required
 * //     { // ViewSummary
 * //       name: "STRING_VALUE", // required
 * //       type: "USER" || "MANAGED", // required
 * //       description: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListViewsCommandInput - {@link ListViewsCommandInput}
 * @returns {@link ListViewsCommandOutput}
 * @see {@link ListViewsCommandInput} for command's `input` shape.
 * @see {@link ListViewsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to exceeding the allowed request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *  A parameter is specified incorrectly.
 *
 * @throws {@link CloudWatchOmniServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchOmni service.</p>
 *
 *
 * @example List the views in an account and Region
 * ```javascript
 * // The following example returns a page of view summaries, filtered to user-created views. Definitions are not included — call GetView to retrieve them. A nextToken is returned when more results are available. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   maxResults: 10,
 *   type: "USER"
 * };
 * const command = new ListViewsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       createdAt: "2026-09-16T14:22:31Z",
 *       description: "Error counts by service",
 *       name: "view.service_errors",
 *       type: "USER",
 *       updatedAt: "2026-09-16T14:22:31Z"
 *     }
 *   ],
 *   nextToken: "eyJvZmZzZXQiOjEwfQ=="
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListViewsCommand extends command<ListViewsCommandInput, ListViewsCommandOutput>(
  _ep0,
  _mw0,
  "ListViews",
  ListViews$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListViewsRequest;
      output: ListViewsResponse;
    };
    sdk: {
      input: ListViewsCommandInput;
      output: ListViewsCommandOutput;
    };
  };
}
