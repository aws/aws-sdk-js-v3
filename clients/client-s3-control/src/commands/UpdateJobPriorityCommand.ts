// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type { UpdateJobPriorityRequest, UpdateJobPriorityResult } from "../models/models_1";
import { UpdateJobPriority$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateJobPriorityCommand}.
 */
export interface UpdateJobPriorityCommandInput extends UpdateJobPriorityRequest {}
/**
 * @public
 *
 * The output of {@link UpdateJobPriorityCommand}.
 */
export interface UpdateJobPriorityCommandOutput extends UpdateJobPriorityResult, __MetadataBearer {}

/**
 * Updates an existing S3 Batch Operations job's priority. For more information, see [S3 Batch Operations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops.html) in the *Amazon S3 User Guide*.
 *
 * - **Permissions**
 *
 *   To use the `UpdateJobPriority` operation, you must have permission to perform the `s3:UpdateJobPriority` action.
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
 * import { S3ControlClient, UpdateJobPriorityCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, UpdateJobPriorityCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // UpdateJobPriorityRequest
 *   AccountId: "STRING_VALUE",
 *   JobId: "STRING_VALUE", // required
 *   Priority: Number("int"), // required
 * };
 * const command = new UpdateJobPriorityCommand(input);
 * const response = await client.send(command);
 * // { // UpdateJobPriorityResult
 * //   JobId: "STRING_VALUE", // required
 * //   Priority: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param UpdateJobPriorityCommandInput - {@link UpdateJobPriorityCommandInput}
 * @returns {@link UpdateJobPriorityCommandOutput}
 * @see {@link UpdateJobPriorityCommandInput} for command's `input` shape.
 * @see {@link UpdateJobPriorityCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * @throws {@link InternalServiceException} (server fault)
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
export class UpdateJobPriorityCommand extends command<UpdateJobPriorityCommandInput, UpdateJobPriorityCommandOutput>(
  _ep0,
  _mw1,
  "UpdateJobPriority",
  UpdateJobPriority$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateJobPriorityRequest;
      output: UpdateJobPriorityResult;
    };
    sdk: {
      input: UpdateJobPriorityCommandInput;
      output: UpdateJobPriorityCommandOutput;
    };
  };
}
