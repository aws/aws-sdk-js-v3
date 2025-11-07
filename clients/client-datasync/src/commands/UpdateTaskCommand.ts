// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateTaskRequest, UpdateTaskResponse } from "../models/models_0";
import { UpdateTask } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTaskCommand}.
 */
export interface UpdateTaskCommandInput extends UpdateTaskRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTaskCommand}.
 */
export interface UpdateTaskCommandOutput extends UpdateTaskResponse, __MetadataBearer {}

/**
 * <p>Updates the configuration of a <i>task</i>, which defines where and how
 *         DataSync transfers your data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateTaskCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateTaskCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // UpdateTaskRequest
 *   TaskArn: "STRING_VALUE", // required
 *   Options: { // Options
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
 *   Excludes: [ // FilterList
 *     { // FilterRule
 *       FilterType: "SIMPLE_PATTERN",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   Schedule: { // TaskSchedule
 *     ScheduleExpression: "STRING_VALUE", // required
 *     Status: "ENABLED" || "DISABLED",
 *   },
 *   Name: "STRING_VALUE",
 *   CloudWatchLogGroupArn: "STRING_VALUE",
 *   Includes: [
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
 * };
 * const command = new UpdateTaskCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateTaskCommandInput - {@link UpdateTaskCommandInput}
 * @returns {@link UpdateTaskCommandOutput}
 * @see {@link UpdateTaskCommandInput} for command's `input` shape.
 * @see {@link UpdateTaskCommandOutput} for command's `response` shape.
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
export class UpdateTaskCommand extends $Command
  .classBuilder<
    UpdateTaskCommandInput,
    UpdateTaskCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FmrsService", "UpdateTask", {})
  .n("DataSyncClient", "UpdateTaskCommand")
  .sc(UpdateTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTaskRequest;
      output: {};
    };
    sdk: {
      input: UpdateTaskCommandInput;
      output: UpdateTaskCommandOutput;
    };
  };
}
