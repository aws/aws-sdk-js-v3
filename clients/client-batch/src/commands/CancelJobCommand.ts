// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CancelJobRequest, CancelJobResponse } from "../models/models_0";
import { de_CancelJobCommand, se_CancelJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelJobCommand}.
 */
export interface CancelJobCommandInput extends CancelJobRequest {}
/**
 * @public
 *
 * The output of {@link CancelJobCommand}.
 */
export interface CancelJobCommandOutput extends CancelJobResponse, __MetadataBearer {}

/**
 * <p>Cancels a job in an Batch job queue. Jobs that are in the
 *       <code>SUBMITTED</code>
 *       or
 *         <code>PENDING</code>
 *       are
 *       canceled. A job
 *         in<code>RUNNABLE</code> remains in <code>RUNNABLE</code> until it reaches the head of the
 *       job queue. Then the job status is updated to
 *       <code>FAILED</code>.</p>
 *          <note>
 *             <p>A <code>PENDING</code> job is canceled after all dependency jobs are completed.
 *         Therefore, it may take longer than expected to cancel a job in <code>PENDING</code>
 *         status.</p>
 *             <p>When you try to cancel an array parent job in <code>PENDING</code>, Batch attempts to
 *         cancel all child jobs. The array parent job is canceled when all child jobs are
 *         completed.</p>
 *          </note>
 *          <p>Jobs that progressed to the <code>STARTING</code> or
 *         <code>RUNNING</code> state aren't canceled. However, the API operation still succeeds, even
 *       if no job is canceled. These jobs must be terminated with the <a>TerminateJob</a>
 *       operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, CancelJobCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, CancelJobCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const input = { // CancelJobRequest
 *   jobId: "STRING_VALUE", // required
 *   reason: "STRING_VALUE", // required
 * };
 * const command = new CancelJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelJobCommandInput - {@link CancelJobCommandInput}
 * @returns {@link CancelJobCommandOutput}
 * @see {@link CancelJobCommandInput} for command's `input` shape.
 * @see {@link CancelJobCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link BatchServiceException}
 * <p>Base exception class for all service exceptions from Batch service.</p>
 *
 * @public
 * @example To cancel a job
 * ```javascript
 * // This example cancels a job with the specified job ID.
 * const input = {
 *   "jobId": "1d828f65-7a4d-42e8-996d-3b900ed59dc4",
 *   "reason": "Cancelling job."
 * };
 * const command = new CancelJobCommand(input);
 * await client.send(command);
 * // example id: to-cancel-a-job-1481152314733
 * ```
 *
 */
export class CancelJobCommand extends $Command
  .classBuilder<
    CancelJobCommandInput,
    CancelJobCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBatchV20160810", "CancelJob", {})
  .n("BatchClient", "CancelJobCommand")
  .f(void 0, void 0)
  .ser(se_CancelJobCommand)
  .de(de_CancelJobCommand)
  .build() {}
