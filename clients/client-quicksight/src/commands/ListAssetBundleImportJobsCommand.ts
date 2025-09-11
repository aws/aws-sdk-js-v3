// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAssetBundleImportJobsRequest, ListAssetBundleImportJobsResponse } from "../models/models_4";
import { de_ListAssetBundleImportJobsCommand, se_ListAssetBundleImportJobsCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssetBundleImportJobsCommand}.
 */
export interface ListAssetBundleImportJobsCommandInput extends ListAssetBundleImportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssetBundleImportJobsCommand}.
 */
export interface ListAssetBundleImportJobsCommandOutput extends ListAssetBundleImportJobsResponse, __MetadataBearer {}

/**
 * <p>Lists all asset bundle import jobs that have taken place in the last 14 days. Jobs created more than 14 days ago are deleted forever and are not returned. If you are using the same job ID for multiple jobs, <code>ListAssetBundleImportJobs</code> only returns the most recent job that uses the repeated job ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListAssetBundleImportJobsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListAssetBundleImportJobsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // ListAssetBundleImportJobsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAssetBundleImportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssetBundleImportJobsResponse
 * //   AssetBundleImportJobSummaryList: [ // AssetBundleImportJobSummaryList
 * //     { // AssetBundleImportJobSummary
 * //       JobStatus: "QUEUED_FOR_IMMEDIATE_EXECUTION" || "IN_PROGRESS" || "SUCCESSFUL" || "FAILED" || "FAILED_ROLLBACK_IN_PROGRESS" || "FAILED_ROLLBACK_COMPLETED" || "FAILED_ROLLBACK_ERROR",
 * //       Arn: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       AssetBundleImportJobId: "STRING_VALUE",
 * //       FailureAction: "DO_NOTHING" || "ROLLBACK",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param ListAssetBundleImportJobsCommandInput - {@link ListAssetBundleImportJobsCommandInput}
 * @returns {@link ListAssetBundleImportJobsCommandOutput}
 * @see {@link ListAssetBundleImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListAssetBundleImportJobsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class ListAssetBundleImportJobsCommand extends $Command
  .classBuilder<
    ListAssetBundleImportJobsCommandInput,
    ListAssetBundleImportJobsCommandOutput,
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
  .s("QuickSight_20180401", "ListAssetBundleImportJobs", {})
  .n("QuickSightClient", "ListAssetBundleImportJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListAssetBundleImportJobsCommand)
  .de(de_ListAssetBundleImportJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssetBundleImportJobsRequest;
      output: ListAssetBundleImportJobsResponse;
    };
    sdk: {
      input: ListAssetBundleImportJobsCommandInput;
      output: ListAssetBundleImportJobsCommandOutput;
    };
  };
}
