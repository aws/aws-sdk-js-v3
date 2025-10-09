// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAssetBundleExportJobsRequest, ListAssetBundleExportJobsResponse } from "../models/models_4";
import { de_ListAssetBundleExportJobsCommand, se_ListAssetBundleExportJobsCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssetBundleExportJobsCommand}.
 */
export interface ListAssetBundleExportJobsCommandInput extends ListAssetBundleExportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssetBundleExportJobsCommand}.
 */
export interface ListAssetBundleExportJobsCommandOutput extends ListAssetBundleExportJobsResponse, __MetadataBearer {}

/**
 * <p>Lists all asset bundle export jobs that have been taken place in the last 14 days. Jobs
 *          created more than 14 days ago are deleted forever and are not returned. If you are using
 *          the same job ID for multiple jobs, <code>ListAssetBundleExportJobs</code> only returns the
 *          most recent job that uses the repeated job ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListAssetBundleExportJobsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListAssetBundleExportJobsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListAssetBundleExportJobsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAssetBundleExportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssetBundleExportJobsResponse
 * //   AssetBundleExportJobSummaryList: [ // AssetBundleExportJobSummaryList
 * //     { // AssetBundleExportJobSummary
 * //       JobStatus: "QUEUED_FOR_IMMEDIATE_EXECUTION" || "IN_PROGRESS" || "SUCCESSFUL" || "FAILED",
 * //       Arn: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       AssetBundleExportJobId: "STRING_VALUE",
 * //       IncludeAllDependencies: true || false,
 * //       ExportFormat: "CLOUDFORMATION_JSON" || "QUICKSIGHT_JSON",
 * //       IncludePermissions: true || false,
 * //       IncludeTags: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param ListAssetBundleExportJobsCommandInput - {@link ListAssetBundleExportJobsCommandInput}
 * @returns {@link ListAssetBundleExportJobsCommandOutput}
 * @see {@link ListAssetBundleExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListAssetBundleExportJobsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
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
export class ListAssetBundleExportJobsCommand extends $Command
  .classBuilder<
    ListAssetBundleExportJobsCommandInput,
    ListAssetBundleExportJobsCommandOutput,
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
  .s("QuickSight_20180401", "ListAssetBundleExportJobs", {})
  .n("QuickSightClient", "ListAssetBundleExportJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListAssetBundleExportJobsCommand)
  .de(de_ListAssetBundleExportJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssetBundleExportJobsRequest;
      output: ListAssetBundleExportJobsResponse;
    };
    sdk: {
      input: ListAssetBundleExportJobsCommandInput;
      output: ListAssetBundleExportJobsCommandOutput;
    };
  };
}
