// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StartTaskExecutionRequest, StartTaskExecutionResponse } from "../models/models_0";
import { StartTaskExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartTaskExecutionCommand}.
 */
export interface StartTaskExecutionCommandInput extends StartTaskExecutionRequest {}
/**
 * @public
 *
 * The output of {@link StartTaskExecutionCommand}.
 */
export interface StartTaskExecutionCommandOutput extends StartTaskExecutionResponse, __MetadataBearer {}

/**
 * <p>Starts an DataSync transfer task. For each task, you can only run one task
 *       execution at a time.</p>
 *          <p>There are several steps to a task execution. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/working-with-task-executions.html#understand-task-execution-statuses">Task execution statuses</a>.</p>
 *          <important>
 *             <p>If you're planning to transfer data to or from an Amazon S3 location, review
 *           <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-s3-requests">how
 *             DataSync can affect your S3 request charges</a> and the <a href="http://aws.amazon.com/datasync/pricing/">DataSync pricing page</a> before
 *         you begin.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, StartTaskExecutionCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, StartTaskExecutionCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // StartTaskExecutionRequest
 *   TaskArn: "STRING_VALUE", // required
 *   OverrideOptions: { // Options
 *     VerifyMode: "POINT_IN_TIME_CONSISTENT" || "ONLY_FILES_TRANSFERRED" || "NONE",
 *     OverwriteMode: "ALWAYS" || "NEVER",
 *     Atime: "NONE" || "BEST_EFFORT",
 *     Mtime: "NONE" || "PRESERVE",
 *     Uid: "NONE" || "INT_VALUE" || "NAME" || "BOTH",
 *     Gid: "NONE" || "INT_VALUE" || "NAME" || "BOTH",
 *     PreserveDeletedFiles: "PRESERVE" || "REMOVE",
 *     PreserveDevices: "NONE" || "PRESERVE",
 *     PosixPermissions: "NONE" || "PRESERVE",
 *     BytesPerSecond: Number("long"),
 *     TaskQueueing: "ENABLED" || "DISABLED",
 *     LogLevel: "OFF" || "BASIC" || "TRANSFER",
 *     TransferMode: "CHANGED" || "ALL",
 *     SecurityDescriptorCopyFlags: "NONE" || "OWNER_DACL" || "OWNER_DACL_SACL",
 *     ObjectTags: "PRESERVE" || "NONE",
 *   },
 *   Includes: [ // FilterList
 *     { // FilterRule
 *       FilterType: "SIMPLE_PATTERN",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   Excludes: [
 *     {
 *       FilterType: "SIMPLE_PATTERN",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   ManifestConfig: { // ManifestConfig
 *     Action: "TRANSFER",
 *     Format: "CSV",
 *     Source: { // SourceManifestConfig
 *       S3: { // S3ManifestConfig
 *         ManifestObjectPath: "STRING_VALUE", // required
 *         BucketAccessRoleArn: "STRING_VALUE", // required
 *         S3BucketArn: "STRING_VALUE", // required
 *         ManifestObjectVersionId: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   TaskReportConfig: { // TaskReportConfig
 *     Destination: { // ReportDestination
 *       S3: { // ReportDestinationS3
 *         Subdirectory: "STRING_VALUE",
 *         S3BucketArn: "STRING_VALUE", // required
 *         BucketAccessRoleArn: "STRING_VALUE", // required
 *       },
 *     },
 *     OutputType: "SUMMARY_ONLY" || "STANDARD",
 *     ReportLevel: "ERRORS_ONLY" || "SUCCESSES_AND_ERRORS",
 *     ObjectVersionIds: "INCLUDE" || "NONE",
 *     Overrides: { // ReportOverrides
 *       Transferred: { // ReportOverride
 *         ReportLevel: "ERRORS_ONLY" || "SUCCESSES_AND_ERRORS",
 *       },
 *       Verified: {
 *         ReportLevel: "ERRORS_ONLY" || "SUCCESSES_AND_ERRORS",
 *       },
 *       Deleted: {
 *         ReportLevel: "ERRORS_ONLY" || "SUCCESSES_AND_ERRORS",
 *       },
 *       Skipped: {
 *         ReportLevel: "ERRORS_ONLY" || "SUCCESSES_AND_ERRORS",
 *       },
 *     },
 *   },
 *   Tags: [ // InputTagList
 *     { // TagListEntry
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new StartTaskExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StartTaskExecutionResponse
 * //   TaskExecutionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartTaskExecutionCommandInput - {@link StartTaskExecutionCommandInput}
 * @returns {@link StartTaskExecutionCommandOutput}
 * @see {@link StartTaskExecutionCommandInput} for command's `input` shape.
 * @see {@link StartTaskExecutionCommandOutput} for command's `response` shape.
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
export class StartTaskExecutionCommand extends $Command
  .classBuilder<
    StartTaskExecutionCommandInput,
    StartTaskExecutionCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FmrsService", "StartTaskExecution", {})
  .n("DataSyncClient", "StartTaskExecutionCommand")
  .sc(StartTaskExecution$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartTaskExecutionRequest;
      output: StartTaskExecutionResponse;
    };
    sdk: {
      input: StartTaskExecutionCommandInput;
      output: StartTaskExecutionCommandOutput;
    };
  };
}
