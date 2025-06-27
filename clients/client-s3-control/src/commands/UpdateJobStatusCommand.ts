// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateJobStatusRequest, UpdateJobStatusResult } from "../models/models_1";
import { de_UpdateJobStatusCommand, se_UpdateJobStatusCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates the status for the specified job. Use this operation to confirm that you want to
 *          run a job or to cancel an existing job. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops.html">S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>To use the
 *                   <code>UpdateJobStatus</code> operation, you must have permission to
 *                   perform the <code>s3:UpdateJobStatus</code> action.</p>
 *             </dd>
 *          </dl>
 *          <p>Related actions include:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html">ListJobs</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html">DescribeJob</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, UpdateJobStatusCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, UpdateJobStatusCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
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
 *  <p></p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p></p>
 *
 * @throws {@link JobStatusException} (client fault)
 *  <p></p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p></p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p></p>
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class UpdateJobStatusCommand extends $Command
  .classBuilder<
    UpdateJobStatusCommandInput,
    UpdateJobStatusCommandOutput,
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "UpdateJobStatus", {})
  .n("S3ControlClient", "UpdateJobStatusCommand")
  .f(void 0, void 0)
  .ser(se_UpdateJobStatusCommand)
  .de(de_UpdateJobStatusCommand)
  .build() {
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
