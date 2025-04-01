// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeAssetBundleExportJobRequest,
  DescribeAssetBundleExportJobResponse,
  DescribeAssetBundleExportJobResponseFilterSensitiveLog,
} from "../models/models_4";
import {
  de_DescribeAssetBundleExportJobCommand,
  se_DescribeAssetBundleExportJobCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAssetBundleExportJobCommand}.
 */
export interface DescribeAssetBundleExportJobCommandInput extends DescribeAssetBundleExportJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAssetBundleExportJobCommand}.
 */
export interface DescribeAssetBundleExportJobCommandOutput
  extends DescribeAssetBundleExportJobResponse,
    __MetadataBearer {}

/**
 * <p>Describes an existing export job.</p>
 *          <p>Poll job descriptions after a job starts to know the status of the job. When a job succeeds, a URL is provided to download the exported assets' data from. Download URLs are valid for five minutes after they are generated. You can call the <code>DescribeAssetBundleExportJob</code> API for a new download URL as needed.</p>
 *          <p>Job descriptions are available for 14 days after the job starts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeAssetBundleExportJobCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeAssetBundleExportJobCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // DescribeAssetBundleExportJobRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   AssetBundleExportJobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAssetBundleExportJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAssetBundleExportJobResponse
 * //   JobStatus: "QUEUED_FOR_IMMEDIATE_EXECUTION" || "IN_PROGRESS" || "SUCCESSFUL" || "FAILED",
 * //   DownloadUrl: "STRING_VALUE",
 * //   Errors: [ // AssetBundleExportJobErrorList
 * //     { // AssetBundleExportJobError
 * //       Arn: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Arn: "STRING_VALUE",
 * //   CreatedTime: new Date("TIMESTAMP"),
 * //   AssetBundleExportJobId: "STRING_VALUE",
 * //   AwsAccountId: "STRING_VALUE",
 * //   ResourceArns: [ // AssetBundleResourceArns
 * //     "STRING_VALUE",
 * //   ],
 * //   IncludeAllDependencies: true || false,
 * //   ExportFormat: "CLOUDFORMATION_JSON" || "QUICKSIGHT_JSON",
 * //   CloudFormationOverridePropertyConfiguration: { // AssetBundleCloudFormationOverridePropertyConfiguration
 * //     ResourceIdOverrideConfiguration: { // AssetBundleExportJobResourceIdOverrideConfiguration
 * //       PrefixForAllResources: true || false,
 * //     },
 * //     VPCConnections: [ // AssetBundleExportJobVPCConnectionOverridePropertiesList
 * //       { // AssetBundleExportJobVPCConnectionOverrideProperties
 * //         Arn: "STRING_VALUE", // required
 * //         Properties: [ // AssetBundleExportJobVPCConnectionPropertyToOverrideList // required
 * //           "Name" || "DnsResolvers" || "RoleArn",
 * //         ],
 * //       },
 * //     ],
 * //     RefreshSchedules: [ // AssetBundleExportJobRefreshScheduleOverridePropertiesList
 * //       { // AssetBundleExportJobRefreshScheduleOverrideProperties
 * //         Arn: "STRING_VALUE", // required
 * //         Properties: [ // AssetBundleExportJobRefreshSchedulePropertyToOverrideList // required
 * //           "StartAfterDateTime",
 * //         ],
 * //       },
 * //     ],
 * //     DataSources: [ // AssetBundleExportJobDataSourceOverridePropertiesList
 * //       { // AssetBundleExportJobDataSourceOverrideProperties
 * //         Arn: "STRING_VALUE", // required
 * //         Properties: [ // AssetBundleExportJobDataSourcePropertyToOverrideList // required
 * //           "Name" || "DisableSsl" || "SecretArn" || "Username" || "Password" || "Domain" || "WorkGroup" || "Host" || "Port" || "Database" || "DataSetName" || "Catalog" || "InstanceId" || "ClusterId" || "ManifestFileLocation" || "Warehouse" || "RoleArn" || "ProductType",
 * //         ],
 * //       },
 * //     ],
 * //     DataSets: [ // AssetBundleExportJobDataSetOverridePropertiesList
 * //       { // AssetBundleExportJobDataSetOverrideProperties
 * //         Arn: "STRING_VALUE", // required
 * //         Properties: [ // AssetBundleExportJobDataSetPropertyToOverrideList // required
 * //           "Name" || "RefreshFailureEmailAlertStatus",
 * //         ],
 * //       },
 * //     ],
 * //     Themes: [ // AssetBundleExportJobThemeOverridePropertiesList
 * //       { // AssetBundleExportJobThemeOverrideProperties
 * //         Arn: "STRING_VALUE", // required
 * //         Properties: [ // AssetBundleExportJobThemePropertyToOverrideList // required
 * //           "Name",
 * //         ],
 * //       },
 * //     ],
 * //     Analyses: [ // AssetBundleExportJobAnalysisOverridePropertiesList
 * //       { // AssetBundleExportJobAnalysisOverrideProperties
 * //         Arn: "STRING_VALUE", // required
 * //         Properties: [ // AssetBundleExportJobAnalysisPropertyToOverrideList // required
 * //           "Name",
 * //         ],
 * //       },
 * //     ],
 * //     Dashboards: [ // AssetBundleExportJobDashboardOverridePropertiesList
 * //       { // AssetBundleExportJobDashboardOverrideProperties
 * //         Arn: "STRING_VALUE", // required
 * //         Properties: [ // AssetBundleExportJobDashboardPropertyToOverrideList // required
 * //           "Name",
 * //         ],
 * //       },
 * //     ],
 * //     Folders: [ // AssetBundleExportJobFolderOverridePropertiesList
 * //       { // AssetBundleExportJobFolderOverrideProperties
 * //         Arn: "STRING_VALUE", // required
 * //         Properties: [ // AssetBundleExportJobFolderPropertyToOverrideList // required
 * //           "Name" || "ParentFolderArn",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * //   IncludePermissions: true || false,
 * //   IncludeTags: true || false,
 * //   ValidationStrategy: { // AssetBundleExportJobValidationStrategy
 * //     StrictModeForAllResources: true || false,
 * //   },
 * //   Warnings: [ // AssetBundleExportJobWarningList
 * //     { // AssetBundleExportJobWarning
 * //       Arn: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   IncludeFolderMemberships: true || false,
 * //   IncludeFolderMembers: "RECURSE" || "ONE_LEVEL" || "NONE",
 * // };
 *
 * ```
 *
 * @param DescribeAssetBundleExportJobCommandInput - {@link DescribeAssetBundleExportJobCommandInput}
 * @returns {@link DescribeAssetBundleExportJobCommandOutput}
 * @see {@link DescribeAssetBundleExportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeAssetBundleExportJobCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
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
 * 			Amazon QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class DescribeAssetBundleExportJobCommand extends $Command
  .classBuilder<
    DescribeAssetBundleExportJobCommandInput,
    DescribeAssetBundleExportJobCommandOutput,
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
  .s("QuickSight_20180401", "DescribeAssetBundleExportJob", {})
  .n("QuickSightClient", "DescribeAssetBundleExportJobCommand")
  .f(void 0, DescribeAssetBundleExportJobResponseFilterSensitiveLog)
  .ser(se_DescribeAssetBundleExportJobCommand)
  .de(de_DescribeAssetBundleExportJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAssetBundleExportJobRequest;
      output: DescribeAssetBundleExportJobResponse;
    };
    sdk: {
      input: DescribeAssetBundleExportJobCommandInput;
      output: DescribeAssetBundleExportJobCommandOutput;
    };
  };
}
