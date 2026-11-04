// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTaskRequest, CreateTaskResponse } from "../models/models_0";
import { CreateTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTaskCommand}.
 */
export interface CreateTaskCommandInput extends CreateTaskRequest {}
/**
 * @public
 *
 * The output of {@link CreateTaskCommand}.
 */
export interface CreateTaskCommandOutput extends CreateTaskResponse, __MetadataBearer {}

/**
 * Configures a *task*, which defines where and how DataSync transfers your data.
 *
 * A task includes a source location, destination location, and transfer options (such as bandwidth limits, scheduling, and more).
 *
 * > **Important:** If you're planning to transfer data to or from an Amazon S3 location, review [how DataSync can affect your S3 request charges](https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-s3-requests) and the [DataSync pricing page](http://aws.amazon.com/datasync/pricing/) before you begin.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateTaskCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateTaskCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // CreateTaskRequest
 *   SourceLocationArn: "STRING_VALUE", // required
 *   DestinationLocationArn: "STRING_VALUE", // required
 *   CloudWatchLogGroupArn: "STRING_VALUE",
 *   Name: "STRING_VALUE",
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
 *     ObjectMetadata: "PRESERVE" || "NONE",
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
 *   Tags: [ // InputTagList
 *     { // TagListEntry
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
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
 *   TaskMode: "BASIC" || "ENHANCED",
 * };
 * const command = new CreateTaskCommand(input);
 * const response = await client.send(command);
 * // { // CreateTaskResponse
 * //   TaskArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTaskCommandInput - {@link CreateTaskCommandInput}
 * @returns {@link CreateTaskCommandOutput}
 * @see {@link CreateTaskCommandInput} for command's `input` shape.
 * @see {@link CreateTaskCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *
 * This exception is thrown when an error occurs in the DataSync service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * This exception is thrown when the client submits a malformed request.
 *
 * @throws {@link DataSyncServiceException}
 *
 * Base exception class for all service exceptions from DataSync service.
 *
 * @public
 */
export class CreateTaskCommand extends command<CreateTaskCommandInput, CreateTaskCommandOutput>(
  _ep0,
  _mw0,
  "CreateTask",
  CreateTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTaskRequest;
      output: CreateTaskResponse;
    };
    sdk: {
      input: CreateTaskCommandInput;
      output: CreateTaskCommandOutput;
    };
  };
}
