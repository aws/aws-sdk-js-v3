// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type { UpdateJobStatusRequest, UpdateJobStatusResult } from "../models/models_1";
import { UpdateJobStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateJobStatusCommand}.
 */
export interface UpdateJobStatusCommandInput extends UpdateJobStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateJobStatusCommand}.
 */
export interface UpdateJobStatusCommandOutput extends UpdateJobStatusResult, __MetadataBearer {}

/**
 * Updates the status for the specified job. Use this operation to confirm that you want to run a job or to cancel an existing job. For more information, see [S3 Batch Operations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops.html) in the *Amazon S3 User Guide*.
 *
 * - **Permissions**
 *
 *   To use the `UpdateJobStatus` operation, you must have permission to perform the `s3:UpdateJobStatus` action.
 *
 * Related actions include:
 *
 * - [CreateJob](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html)
 * - [ListJobs](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html)
 * - [DescribeJob](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html)
 * - [UpdateJobStatus](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, UpdateJobStatusCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, UpdateJobStatusCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // UpdateJobStatusRequest
 *   AccountId: "STRING_VALUE",
 *   JobId: "STRING_VALUE", // required
 *   RequestedJobStatus: "Cancelled" || "Ready", // required
 *   StatusUpdateReason: "STRING_VALUE",
 * };
 * const command = new UpdateJobStatusCommand(input);
 * const response = await client.send(command);
 * // { // UpdateJobStatusResult
 * //   JobId: "STRING_VALUE",
 * //   Status: "Active" || "Cancelled" || "Cancelling" || "Complete" || "Completing" || "Failed" || "Failing" || "New" || "Paused" || "Pausing" || "Preparing" || "Ready" || "Suspended",
 * //   StatusUpdateReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateJobStatusCommandInput - {@link UpdateJobStatusCommandInput}
 * @returns {@link UpdateJobStatusCommandOutput}
 * @see {@link UpdateJobStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateJobStatusCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * @throws {@link JobStatusException} (client fault)
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * @throws {@link S3ControlServiceException}
 *
 * Base exception class for all service exceptions from S3Control service.
 *
 * @public
 */
export class UpdateJobStatusCommand extends command<UpdateJobStatusCommandInput, UpdateJobStatusCommandOutput>(
  _ep0,
  _mw1,
  "UpdateJobStatus",
  UpdateJobStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateJobStatusRequest;
      output: UpdateJobStatusResult;
    };
    sdk: {
      input: UpdateJobStatusCommandInput;
      output: UpdateJobStatusCommandOutput;
    };
  };
}
