// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SearchDataSetsRequest, SearchDataSetsResponse } from "../models/models_4";
import { de_SearchDataSetsCommand, se_SearchDataSetsCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchDataSetsCommand}.
 */
export interface SearchDataSetsCommandInput extends SearchDataSetsRequest {}
/**
 * @public
 *
 * The output of {@link SearchDataSetsCommand}.
 */
export interface SearchDataSetsCommandOutput extends SearchDataSetsResponse, __MetadataBearer {}

/**
 * <p>Use the <code>SearchDataSets</code> operation to search for datasets that belong to an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, SearchDataSetsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, SearchDataSetsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // SearchDataSetsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Filters: [ // DataSetSearchFilterList // required
 *     { // DataSetSearchFilter
 *       Operator: "StringEquals" || "StringLike", // required
 *       Name: "QUICKSIGHT_VIEWER_OR_OWNER" || "QUICKSIGHT_OWNER" || "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER" || "DIRECT_QUICKSIGHT_OWNER" || "DIRECT_QUICKSIGHT_SOLE_OWNER" || "DATASET_NAME", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new SearchDataSetsCommand(input);
 * const response = await client.send(command);
 * // { // SearchDataSetsResponse
 * //   DataSetSummaries: [ // DataSetSummaryList
 * //     { // DataSetSummary
 * //       Arn: "STRING_VALUE",
 * //       DataSetId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       ImportMode: "SPICE" || "DIRECT_QUERY",
 * //       RowLevelPermissionDataSet: { // RowLevelPermissionDataSet
 * //         Namespace: "STRING_VALUE",
 * //         Arn: "STRING_VALUE", // required
 * //         PermissionPolicy: "GRANT_ACCESS" || "DENY_ACCESS", // required
 * //         FormatVersion: "VERSION_1" || "VERSION_2",
 * //         Status: "ENABLED" || "DISABLED",
 * //       },
 * //       RowLevelPermissionTagConfigurationApplied: true || false,
 * //       ColumnLevelPermissionRulesApplied: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchDataSetsCommandInput - {@link SearchDataSetsCommandInput}
 * @returns {@link SearchDataSetsCommandOutput}
 * @see {@link SearchDataSetsCommandInput} for command's `input` shape.
 * @see {@link SearchDataSetsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
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
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class SearchDataSetsCommand extends $Command
  .classBuilder<
    SearchDataSetsCommandInput,
    SearchDataSetsCommandOutput,
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
  .s("QuickSight_20180401", "SearchDataSets", {})
  .n("QuickSightClient", "SearchDataSetsCommand")
  .f(void 0, void 0)
  .ser(se_SearchDataSetsCommand)
  .de(de_SearchDataSetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchDataSetsRequest;
      output: SearchDataSetsResponse;
    };
    sdk: {
      input: SearchDataSetsCommandInput;
      output: SearchDataSetsCommandOutput;
    };
  };
}
