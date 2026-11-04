// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type { ListJobsRequest, ListJobsResult } from "../models/models_0";
import { ListJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListJobsCommand}.
 */
export interface ListJobsCommandInput extends ListJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListJobsCommand}.
 */
export interface ListJobsCommandOutput extends ListJobsResult, __MetadataBearer {}

/**
 * Lists current S3 Batch Operations jobs as well as the jobs that have ended within the last 90 days for the Amazon Web Services account making the request. For more information, see [S3 Batch Operations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops.html) in the *Amazon S3 User Guide*.
 *
 * - **Permissions**
 *
 *   To use the `ListJobs` operation, you must have permission to perform the `s3:ListJobs` action.
 *
 * Related actions include:
 *
 * - [CreateJob](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html)
 * - [DescribeJob](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html)
 * - [UpdateJobPriority](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobPriority.html)
 * - [UpdateJobStatus](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, ListJobsCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, ListJobsCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // ListJobsRequest
 *   AccountId: "STRING_VALUE",
 *   JobStatuses: [ // JobStatusList
 *     "Active" || "Cancelled" || "Cancelling" || "Complete" || "Completing" || "Failed" || "Failing" || "New" || "Paused" || "Pausing" || "Preparing" || "Ready" || "Suspended",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListJobsResult
 * //   NextToken: "STRING_VALUE",
 * //   Jobs: [ // JobListDescriptorList
 * //     { // JobListDescriptor
 * //       JobId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Operation: "LambdaInvoke" || "S3PutObjectCopy" || "S3PutObjectAcl" || "S3PutObjectTagging" || "S3DeleteObjectTagging" || "S3InitiateRestoreObject" || "S3PutObjectLegalHold" || "S3PutObjectRetention" || "S3ReplicateObject" || "S3ComputeObjectChecksum" || "S3UpdateObjectEncryption",
 * //       Priority: Number("int"),
 * //       Status: "Active" || "Cancelled" || "Cancelling" || "Complete" || "Completing" || "Failed" || "Failing" || "New" || "Paused" || "Pausing" || "Preparing" || "Ready" || "Suspended",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       TerminationDate: new Date("TIMESTAMP"),
 * //       ProgressSummary: { // JobProgressSummary
 * //         TotalNumberOfTasks: Number("long"),
 * //         NumberOfTasksSucceeded: Number("long"),
 * //         NumberOfTasksFailed: Number("long"),
 * //         Timers: { // JobTimers
 * //           ElapsedTimeInActiveSeconds: Number("long"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListJobsCommandInput - {@link ListJobsCommandInput}
 * @returns {@link ListJobsCommandOutput}
 * @see {@link ListJobsCommandInput} for command's `input` shape.
 * @see {@link ListJobsCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * @throws {@link S3ControlServiceException}
 *
 * Base exception class for all service exceptions from S3Control service.
 *
 * @public
 */
export class ListJobsCommand extends command<ListJobsCommandInput, ListJobsCommandOutput>(
  _ep0,
  _mw1,
  "ListJobs",
  ListJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListJobsRequest;
      output: ListJobsResult;
    };
    sdk: {
      input: ListJobsCommandInput;
      output: ListJobsCommandOutput;
    };
  };
}
