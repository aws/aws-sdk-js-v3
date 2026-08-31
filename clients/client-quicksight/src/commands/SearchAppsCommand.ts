// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchAppsRequest, SearchAppsResponse } from "../models/models_5";
import { SearchApps$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchAppsCommand}.
 */
export interface SearchAppsCommandInput extends SearchAppsRequest {}
/**
 * @public
 *
 * The output of {@link SearchAppsCommand}.
 */
export interface SearchAppsCommandOutput extends SearchAppsResponse, __MetadataBearer {}

/**
 * <p>Searches for apps in an Amazon Web Services account using the specified filters. This operation is eventually consistent; the results might not reflect very recent updates. Results are paginated; use the <code>NextToken</code> parameter to retrieve additional results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, SearchAppsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, SearchAppsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // SearchAppsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Filters: [ // SearchAppsFilterList // required
 *     { // SearchAppsFilter
 *       Name: "APP_ID" || "APP_NAME" || "DIRECT_QUICKSIGHT_SOLE_OWNER" || "DIRECT_QUICKSIGHT_OWNER" || "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER", // required
 *       Operator: "StringEquals" || "StringLike", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new SearchAppsCommand(input);
 * const response = await client.send(command);
 * // { // SearchAppsResponse
 * //   AppSummaryList: [ // AppSummaryList // required
 * //     { // AppSummary
 * //       AppId: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       Visibility: "PRIVATE" || "PUBLIC",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchAppsCommandInput - {@link SearchAppsCommandInput}
 * @returns {@link SearchAppsCommandOutput}
 * @see {@link SearchAppsCommandInput} for command's `input` shape.
 * @see {@link SearchAppsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameter has a value that isn't valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class SearchAppsCommand extends command<SearchAppsCommandInput, SearchAppsCommandOutput>(
  _ep0,
  _mw0,
  "SearchApps",
  SearchApps$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchAppsRequest;
      output: SearchAppsResponse;
    };
    sdk: {
      input: SearchAppsCommandInput;
      output: SearchAppsCommandOutput;
    };
  };
}
