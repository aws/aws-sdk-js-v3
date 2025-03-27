// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTaskRequest, CreateTaskResponse } from "../models/models_0";
import { de_CreateTaskCommand, se_CreateTaskCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Configures a <i>task</i>, which defines where and how DataSync transfers your
 *       data.</p>
 *          <p>A task includes a source location, destination location, and transfer options (such as bandwidth limits, scheduling, and more).</p>
 *          <important>
 *             <p>If you're planning to transfer data to or from an Amazon S3 location, review
 *           <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-s3-requests">how
 *             DataSync can affect your S3 request charges</a> and the <a href="http://aws.amazon.com/datasync/pricing/">DataSync pricing page</a> before
 *         you begin.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateTaskCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateTaskCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
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
export class CreateTaskCommand extends $Command
  .classBuilder<
    CreateTaskCommandInput,
    CreateTaskCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FmrsService", "CreateTask", {})
  .n("DataSyncClient", "CreateTaskCommand")
  .f(void 0, void 0)
  .ser(se_CreateTaskCommand)
  .de(de_CreateTaskCommand)
  .build() {
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
