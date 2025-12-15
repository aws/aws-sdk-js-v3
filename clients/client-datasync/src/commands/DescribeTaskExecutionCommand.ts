// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeTaskExecutionRequest, DescribeTaskExecutionResponse } from "../models/models_0";
import { DescribeTaskExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTaskExecutionCommand}.
 */
export interface DescribeTaskExecutionCommandInput extends DescribeTaskExecutionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTaskExecutionCommand}.
 */
export interface DescribeTaskExecutionCommandOutput extends DescribeTaskExecutionResponse, __MetadataBearer {}

/**
 * <p>Provides information about an execution of your DataSync task. You can
 *       use this operation to help monitor the progress of an ongoing data transfer or check the
 *       results of the transfer.</p>
 *          <note>
 *             <p>Some <code>DescribeTaskExecution</code> response elements are only relevant to a
 *         specific task mode. For information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/choosing-task-mode.html#task-mode-differences">Understanding task mode differences</a> and <a href="https://docs.aws.amazon.com/datasync/latest/userguide/transfer-performance-counters.html">Understanding data
 *           transfer performance counters</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeTaskExecutionCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeTaskExecutionCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // DescribeTaskExecutionRequest
 *   TaskExecutionArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeTaskExecutionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTaskExecutionResponse
 * //   TaskExecutionArn: "STRING_VALUE",
 * //   Status: "QUEUED" || "CANCELLING" || "LAUNCHING" || "PREPARING" || "TRANSFERRING" || "VERIFYING" || "SUCCESS" || "ERROR",
 * //   Options: { // Options
 * //     VerifyMode: "POINT_IN_TIME_CONSISTENT" || "ONLY_FILES_TRANSFERRED" || "NONE",
 * //     OverwriteMode: "ALWAYS" || "NEVER",
 * //     Atime: "NONE" || "BEST_EFFORT",
 * //     Mtime: "NONE" || "PRESERVE",
 * //     Uid: "NONE" || "INT_VALUE" || "NAME" || "BOTH",
 * //     Gid: "NONE" || "INT_VALUE" || "NAME" || "BOTH",
 * //     PreserveDeletedFiles: "PRESERVE" || "REMOVE",
 * //     PreserveDevices: "NONE" || "PRESERVE",
 * //     PosixPermissions: "NONE" || "PRESERVE",
 * //     BytesPerSecond: Number("long"),
 * //     TaskQueueing: "ENABLED" || "DISABLED",
 * //     LogLevel: "OFF" || "BASIC" || "TRANSFER",
 * //     TransferMode: "CHANGED" || "ALL",
 * //     SecurityDescriptorCopyFlags: "NONE" || "OWNER_DACL" || "OWNER_DACL_SACL",
 * //     ObjectTags: "PRESERVE" || "NONE",
 * //   },
 * //   Excludes: [ // FilterList
 * //     { // FilterRule
 * //       FilterType: "SIMPLE_PATTERN",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Includes: [
 * //     {
 * //       FilterType: "SIMPLE_PATTERN",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ManifestConfig: { // ManifestConfig
 * //     Action: "TRANSFER",
 * //     Format: "CSV",
 * //     Source: { // SourceManifestConfig
 * //       S3: { // S3ManifestConfig
 * //         ManifestObjectPath: "STRING_VALUE", // required
 * //         BucketAccessRoleArn: "STRING_VALUE", // required
 * //         S3BucketArn: "STRING_VALUE", // required
 * //         ManifestObjectVersionId: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   StartTime: new Date("TIMESTAMP"),
 * //   EstimatedFilesToTransfer: Number("long"),
 * //   EstimatedBytesToTransfer: Number("long"),
 * //   FilesTransferred: Number("long"),
 * //   BytesWritten: Number("long"),
 * //   BytesTransferred: Number("long"),
 * //   BytesCompressed: Number("long"),
 * //   Result: { // TaskExecutionResultDetail
 * //     PrepareDuration: Number("long"),
 * //     PrepareStatus: "PENDING" || "SUCCESS" || "ERROR",
 * //     TotalDuration: Number("long"),
 * //     TransferDuration: Number("long"),
 * //     TransferStatus: "PENDING" || "SUCCESS" || "ERROR",
 * //     VerifyDuration: Number("long"),
 * //     VerifyStatus: "PENDING" || "SUCCESS" || "ERROR",
 * //     ErrorCode: "STRING_VALUE",
 * //     ErrorDetail: "STRING_VALUE",
 * //   },
 * //   TaskReportConfig: { // TaskReportConfig
 * //     Destination: { // ReportDestination
 * //       S3: { // ReportDestinationS3
 * //         Subdirectory: "STRING_VALUE",
 * //         S3BucketArn: "STRING_VALUE", // required
 * //         BucketAccessRoleArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     OutputType: "SUMMARY_ONLY" || "STANDARD",
 * //     ReportLevel: "ERRORS_ONLY" || "SUCCESSES_AND_ERRORS",
 * //     ObjectVersionIds: "INCLUDE" || "NONE",
 * //     Overrides: { // ReportOverrides
 * //       Transferred: { // ReportOverride
 * //         ReportLevel: "ERRORS_ONLY" || "SUCCESSES_AND_ERRORS",
 * //       },
 * //       Verified: {
 * //         ReportLevel: "ERRORS_ONLY" || "SUCCESSES_AND_ERRORS",
 * //       },
 * //       Deleted: {
 * //         ReportLevel: "ERRORS_ONLY" || "SUCCESSES_AND_ERRORS",
 * //       },
 * //       Skipped: {
 * //         ReportLevel: "ERRORS_ONLY" || "SUCCESSES_AND_ERRORS",
 * //       },
 * //     },
 * //   },
 * //   FilesDeleted: Number("long"),
 * //   FilesSkipped: Number("long"),
 * //   FilesVerified: Number("long"),
 * //   ReportResult: { // ReportResult
 * //     Status: "PENDING" || "SUCCESS" || "ERROR",
 * //     ErrorCode: "STRING_VALUE",
 * //     ErrorDetail: "STRING_VALUE",
 * //   },
 * //   EstimatedFilesToDelete: Number("long"),
 * //   TaskMode: "BASIC" || "ENHANCED",
 * //   FilesPrepared: Number("long"),
 * //   FilesListed: { // TaskExecutionFilesListedDetail
 * //     AtSource: Number("long"),
 * //     AtDestinationForDelete: Number("long"),
 * //   },
 * //   FilesFailed: { // TaskExecutionFilesFailedDetail
 * //     Prepare: Number("long"),
 * //     Transfer: Number("long"),
 * //     Verify: Number("long"),
 * //     Delete: Number("long"),
 * //   },
 * //   EstimatedFoldersToDelete: Number("long"),
 * //   EstimatedFoldersToTransfer: Number("long"),
 * //   FoldersSkipped: Number("long"),
 * //   FoldersPrepared: Number("long"),
 * //   FoldersTransferred: Number("long"),
 * //   FoldersVerified: Number("long"),
 * //   FoldersDeleted: Number("long"),
 * //   FoldersListed: { // TaskExecutionFoldersListedDetail
 * //     AtSource: Number("long"),
 * //     AtDestinationForDelete: Number("long"),
 * //   },
 * //   FoldersFailed: { // TaskExecutionFoldersFailedDetail
 * //     List: Number("long"),
 * //     Prepare: Number("long"),
 * //     Transfer: Number("long"),
 * //     Verify: Number("long"),
 * //     Delete: Number("long"),
 * //   },
 * //   LaunchTime: new Date("TIMESTAMP"),
 * //   EndTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeTaskExecutionCommandInput - {@link DescribeTaskExecutionCommandInput}
 * @returns {@link DescribeTaskExecutionCommandOutput}
 * @see {@link DescribeTaskExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribeTaskExecutionCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 *
 * @public
 */
export class DescribeTaskExecutionCommand extends $Command
  .classBuilder<
    DescribeTaskExecutionCommandInput,
    DescribeTaskExecutionCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FmrsService", "DescribeTaskExecution", {})
  .n("DataSyncClient", "DescribeTaskExecutionCommand")
  .sc(DescribeTaskExecution$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTaskExecutionRequest;
      output: DescribeTaskExecutionResponse;
    };
    sdk: {
      input: DescribeTaskExecutionCommandInput;
      output: DescribeTaskExecutionCommandOutput;
    };
  };
}
