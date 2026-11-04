// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListChangeSetsRequest, ListChangeSetsResponse } from "../models/models_0";
import { ListChangeSets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListChangeSetsCommand}.
 */
export interface ListChangeSetsCommandInput extends ListChangeSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListChangeSetsCommand}.
 */
export interface ListChangeSetsCommandOutput extends ListChangeSetsResponse, __MetadataBearer {}

/**
 * Returns the list of change sets owned by the account being used to make the call. You can filter this list by providing any combination of `entityId`, `ChangeSetName`, and status. If you provide more than one filter, the API operation applies a logical AND between the filters.
 *
 * You can describe a change during the 60-day request history retention period for API calls.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, ListChangeSetsCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, ListChangeSetsCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * // import type { MarketplaceCatalogClientConfig } from "@aws-sdk/client-marketplace-catalog";
 * const config = {}; // type is MarketplaceCatalogClientConfig
 * const client = new MarketplaceCatalogClient(config);
 * const input = { // ListChangeSetsRequest
 *   Catalog: "STRING_VALUE", // required
 *   FilterList: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       ValueList: [ // ValueList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Sort: { // Sort
 *     SortBy: "STRING_VALUE",
 *     SortOrder: "ASCENDING" || "DESCENDING",
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListChangeSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListChangeSetsResponse
 * //   ChangeSetSummaryList: [ // ChangeSetSummaryList
 * //     { // ChangeSetSummaryListItem
 * //       ChangeSetId: "STRING_VALUE",
 * //       ChangeSetArn: "STRING_VALUE",
 * //       ChangeSetName: "STRING_VALUE",
 * //       StartTime: "STRING_VALUE",
 * //       EndTime: "STRING_VALUE",
 * //       Status: "PREPARING" || "APPLYING" || "SUCCEEDED" || "CANCELLED" || "FAILED",
 * //       EntityIdList: [ // ResourceIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       FailureCode: "CLIENT_ERROR" || "SERVER_FAULT",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChangeSetsCommandInput - {@link ListChangeSetsCommandInput}
 * @returns {@link ListChangeSetsCommandOutput}
 * @see {@link ListChangeSetsCommandInput} for command's `input` shape.
 * @see {@link ListChangeSetsCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCatalogClientResolvedConfig | config} for MarketplaceCatalogClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied.
 *
 * HTTP status code: 403
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * There was an internal service exception.
 *
 * HTTP status code: 500
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Too many requests.
 *
 * HTTP status code: 429
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An error occurred during validation.
 *
 * HTTP status code: 422
 *
 * @throws {@link MarketplaceCatalogServiceException}
 *
 * Base exception class for all service exceptions from MarketplaceCatalog service.
 *
 * @public
 */
export class ListChangeSetsCommand extends command<ListChangeSetsCommandInput, ListChangeSetsCommandOutput>(
  _ep0,
  _mw0,
  "ListChangeSets",
  ListChangeSets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListChangeSetsRequest;
      output: ListChangeSetsResponse;
    };
    sdk: {
      input: ListChangeSetsCommandInput;
      output: ListChangeSetsCommandOutput;
    };
  };
}
