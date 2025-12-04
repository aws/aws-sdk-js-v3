// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CancelJobRequest, CancelJobResponse } from "../models/models_0";
import { CancelJob } from "../schemas/schemas_0";

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
 * <p>Cancels a job in an Batch job queue. Jobs that are in a <code>SUBMITTED</code>, <code>PENDING</code>, or <code>RUNNABLE</code> state are cancelled and the job status is updated to <code>FAILED</code>.</p>
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
 * // import type { BatchClientConfig } from "@aws-sdk/client-batch";
 * const config = {}; // type is BatchClientConfig
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
 *
 * @example To cancel a job
 * ```javascript
 * // This example cancels a job with the specified job ID.
 * const input = {
 *   jobId: "1d828f65-7a4d-42e8-996d-3b900ed59dc4",
 *   reason: "Cancelling job."
 * };
 * const command = new CancelJobCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CancelJobCommand extends $Command
  .classBuilder<
    CancelJobCommandInput,
    CancelJobCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBatchV20160810", "CancelJob", {})
  .n("BatchClient", "CancelJobCommand")
  .sc(CancelJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelJobRequest;
      output: {};
    };
    sdk: {
      input: CancelJobCommandInput;
      output: CancelJobCommandOutput;
    };
  };
}
