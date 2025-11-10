// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDashboardVersionsRequest, ListDashboardVersionsResponse } from "../models/models_5";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListDashboardVersions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDashboardVersionsCommand}.
 */
export interface ListDashboardVersionsCommandInput extends ListDashboardVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListDashboardVersionsCommand}.
 */
export interface ListDashboardVersionsCommandOutput extends ListDashboardVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists all the versions of the dashboards in the Amazon Quick Sight subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListDashboardVersionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListDashboardVersionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListDashboardVersionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DashboardId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDashboardVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListDashboardVersionsResponse
 * //   DashboardVersionSummaryList: [ // DashboardVersionSummaryList
 * //     { // DashboardVersionSummary
 * //       Arn: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       VersionNumber: Number("long"),
 * //       Status: "CREATION_IN_PROGRESS" || "CREATION_SUCCESSFUL" || "CREATION_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_FAILED" || "DELETED",
 * //       SourceEntityArn: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDashboardVersionsCommandInput - {@link ListDashboardVersionsCommandInput}
 * @returns {@link ListDashboardVersionsCommandOutput}
 * @see {@link ListDashboardVersionsCommandInput} for command's `input` shape.
 * @see {@link ListDashboardVersionsCommandOutput} for command's `response` shape.
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
export class ListDashboardVersionsCommand extends $Command
  .classBuilder<
    ListDashboardVersionsCommandInput,
    ListDashboardVersionsCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "ListDashboardVersions", {})
  .n("QuickSightClient", "ListDashboardVersionsCommand")
  .sc(ListDashboardVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDashboardVersionsRequest;
      output: ListDashboardVersionsResponse;
    };
    sdk: {
      input: ListDashboardVersionsCommandInput;
      output: ListDashboardVersionsCommandOutput;
    };
  };
}
