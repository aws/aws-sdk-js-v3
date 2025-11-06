// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDashboardsRequest, ListDashboardsResponse } from "../models/models_5";
import { de_ListDashboardsCommand, se_ListDashboardsCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDashboardsCommand}.
 */
export interface ListDashboardsCommandInput extends ListDashboardsRequest {}
/**
 * @public
 *
 * The output of {@link ListDashboardsCommand}.
 */
export interface ListDashboardsCommandOutput extends ListDashboardsResponse, __MetadataBearer {}

/**
 * <p>Lists dashboards in an Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListDashboardsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListDashboardsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListDashboardsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDashboardsCommand(input);
 * const response = await client.send(command);
 * // { // ListDashboardsResponse
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
 * @param ListDashboardsCommandInput - {@link ListDashboardsCommandInput}
 * @returns {@link ListDashboardsCommandOutput}
 * @see {@link ListDashboardsCommandInput} for command's `input` shape.
 * @see {@link ListDashboardsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value isn't valid.</p>
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
export class ListDashboardsCommand extends $Command
  .classBuilder<
    ListDashboardsCommandInput,
    ListDashboardsCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "ListDashboards", {})
  .n("QuickSightClient", "ListDashboardsCommand")
  .f(void 0, void 0)
  .ser(se_ListDashboardsCommand)
  .de(de_ListDashboardsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDashboardsRequest;
      output: ListDashboardsResponse;
    };
    sdk: {
      input: ListDashboardsCommandInput;
      output: ListDashboardsCommandOutput;
    };
  };
}
