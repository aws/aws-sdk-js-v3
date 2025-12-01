// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListJobsRequest, ListJobsResult } from "../models/models_0";
import type { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { ListJobs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists current S3 Batch Operations jobs as well as the jobs that have ended within the last 90
 *          days for the Amazon Web Services account making the request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops.html">S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>To use the <code>ListJobs</code> operation, you must have permission to perform
 *                   the <code>s3:ListJobs</code> action.</p>
 *             </dd>
 *          </dl>
 *          <p>Related actions include:</p>
 *          <p></p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html">DescribeJob</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobPriority.html">UpdateJobPriority</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
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
 * //       Operation: "LambdaInvoke" || "S3PutObjectCopy" || "S3PutObjectAcl" || "S3PutObjectTagging" || "S3DeleteObjectTagging" || "S3InitiateRestoreObject" || "S3PutObjectLegalHold" || "S3PutObjectRetention" || "S3ReplicateObject" || "S3ComputeObjectChecksum",
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
 *  <p></p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class ListJobsCommand extends $Command
  .classBuilder<
    ListJobsCommandInput,
    ListJobsCommandOutput,
    S3ControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    RequiresAccountId: { type: "staticContextParams", value: true },
    AccountId: { type: "contextParams", name: "AccountId" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getProcessArnablesPlugin(config)];
  })
  .s("AWSS3ControlServiceV20180820", "ListJobs", {})
  .n("S3ControlClient", "ListJobsCommand")
  .sc(ListJobs)
  .build() {
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
