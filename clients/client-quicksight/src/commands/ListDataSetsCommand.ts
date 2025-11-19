// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDataSetsRequest, ListDataSetsResponse } from "../models/models_4";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListDataSets } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataSetsCommand}.
 */
export interface ListDataSetsCommandInput extends ListDataSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataSetsCommand}.
 */
export interface ListDataSetsCommandOutput extends ListDataSetsResponse, __MetadataBearer {}

/**
 * <p>Lists all of the datasets belonging to the current Amazon Web Services account in an
 * 				Amazon Web Services Region.</p>
 *          <p>The permissions resource is
 * 				<code>arn:aws:quicksight:region:aws-account-id:dataset/*</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListDataSetsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListDataSetsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListDataSetsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDataSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataSetsResponse
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
 * //       RowLevelPermissionDataSetMap: { // RowLevelPermissionDataSetMap
 * //         "<keys>": {
 * //           Namespace: "STRING_VALUE",
 * //           Arn: "STRING_VALUE", // required
 * //           PermissionPolicy: "GRANT_ACCESS" || "DENY_ACCESS", // required
 * //           FormatVersion: "VERSION_1" || "VERSION_2",
 * //           Status: "ENABLED" || "DISABLED",
 * //         },
 * //       },
 * //       RowLevelPermissionTagConfigurationApplied: true || false,
 * //       ColumnLevelPermissionRulesApplied: true || false,
 * //       UseAs: "RLS_RULES",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param ListDataSetsCommandInput - {@link ListDataSetsCommandInput}
 * @returns {@link ListDataSetsCommandOutput}
 * @see {@link ListDataSetsCommandInput} for command's `input` shape.
 * @see {@link ListDataSetsCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value isn't valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
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
export class ListDataSetsCommand extends $Command
  .classBuilder<
    ListDataSetsCommandInput,
    ListDataSetsCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "ListDataSets", {})
  .n("QuickSightClient", "ListDataSetsCommand")
  .sc(ListDataSets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataSetsRequest;
      output: ListDataSetsResponse;
    };
    sdk: {
      input: ListDataSetsCommandInput;
      output: ListDataSetsCommandOutput;
    };
  };
}
