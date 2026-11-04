// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAssetBundleExportJobsRequest, ListAssetBundleExportJobsResponse } from "../models/models_4";
import { ListAssetBundleExportJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists all asset bundle export jobs that have been taken place in the last 14 days. Jobs created more than 14 days ago are deleted forever and are not returned. If you are using the same job ID for multiple jobs, `ListAssetBundleExportJobs` only returns the most recent job that uses the repeated job ID.
 *
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
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The `NextToken` value isn't valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *
 * This error indicates that you are calling an operation on an Amazon Quick Suite subscription where the edition doesn't include support for that operation. Amazon Quick Suite currently has Standard Edition and Enterprise Edition. Not every operation and capability is available in every edition.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class ListAssetBundleExportJobsCommand extends command<ListAssetBundleExportJobsCommandInput, ListAssetBundleExportJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListAssetBundleExportJobs",
  ListAssetBundleExportJobs$
) {
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
