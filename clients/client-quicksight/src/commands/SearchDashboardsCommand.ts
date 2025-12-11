// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { SearchDashboardsRequest, SearchDashboardsResponse } from "../models/models_4";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { SearchDashboards } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchDashboardsCommand}.
 */
export interface SearchDashboardsCommandInput extends SearchDashboardsRequest {}
/**
 * @public
 *
 * The output of {@link SearchDashboardsCommand}.
 */
export interface SearchDashboardsCommandOutput extends SearchDashboardsResponse, __MetadataBearer {}

/**
 * <p>Searches for dashboards that belong to a user. </p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not
 *                 reflect very recent updates and changes.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, SearchDashboardsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, SearchDashboardsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // SearchDashboardsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Filters: [ // DashboardSearchFilterList // required
 *     { // DashboardSearchFilter
 *       Operator: "StringEquals" || "StringLike", // required
 *       Name: "QUICKSIGHT_USER" || "QUICKSIGHT_VIEWER_OR_OWNER" || "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER" || "QUICKSIGHT_OWNER" || "DIRECT_QUICKSIGHT_OWNER" || "DIRECT_QUICKSIGHT_SOLE_OWNER" || "DASHBOARD_NAME",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new SearchDashboardsCommand(input);
 * const response = await client.send(command);
 * // { // SearchDashboardsResponse
 * //   DashboardSummaryList: [ // DashboardSummaryList
 * //     { // DashboardSummary
 * //       Arn: "STRING_VALUE",
 * //       DashboardId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       PublishedVersionNumber: Number("long"),
 * //       LastPublishedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchDashboardsCommandInput - {@link SearchDashboardsCommandInput}
 * @returns {@link SearchDashboardsCommandOutput}
 * @see {@link SearchDashboardsCommandInput} for command's `input` shape.
 * @see {@link SearchDashboardsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value isn't valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon Quick Suite
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Quick Suite currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class SearchDashboardsCommand extends $Command
  .classBuilder<
    SearchDashboardsCommandInput,
    SearchDashboardsCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "SearchDashboards", {})
  .n("QuickSightClient", "SearchDashboardsCommand")
  .sc(SearchDashboards)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchDashboardsRequest;
      output: SearchDashboardsResponse;
    };
    sdk: {
      input: SearchDashboardsCommandInput;
      output: SearchDashboardsCommandOutput;
    };
  };
}
