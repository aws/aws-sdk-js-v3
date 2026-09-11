// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelJobsRequest, CancelJobsResponse } from "../models/models_0";
import { CancelJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelJobsCommand}.
 */
export interface CancelJobsCommandInput extends CancelJobsRequest {}
/**
 * @public
 *
 * The output of {@link CancelJobsCommand}.
 */
export interface CancelJobsCommandOutput extends CancelJobsResponse, __MetadataBearer {}

/**
 * <p>Cancels up to 50 jobs in an Batch job queue. This is a bulk version of <a>CancelJob</a>. Jobs that are in a
 *         <code>SUBMITTED</code>, <code>PENDING</code>, or <code>RUNNABLE</code> state are cancelled
 *       and the job status is updated to <code>FAILED</code>.</p>
 *          <note>
 *             <p>A <code>PENDING</code> job is cancelled after all dependency jobs are completed.
 *         Therefore, it might take longer than expected to cancel a job in <code>PENDING</code>
 *         status.</p>
 *             <p>When you try to cancel an array parent job in <code>PENDING</code>, Batch attempts to
 *         cancel all child jobs. The array parent job is cancelled when all child jobs are
 *         completed.</p>
 *          </note>
 *          <p>Jobs that progressed to the <code>STARTING</code> or <code>RUNNING</code> state aren't
 *       cancelled. These jobs must be terminated with the <a>TerminateJob</a> or
 *         <a>TerminateJobs</a> operation.</p>
 *          <p>Batch reports the result for each job individually in the response. Jobs that
 *       were processed successfully are reported in the <code>successful</code> list. Jobs that
 *       encountered errors are reported in the <code>errors</code> list. The response returns an
 *       HTTP status code of <code>200</code> even when some jobs encountered errors, so check the
 *       <code>errors</code> list. Jobs that can't be found are treated as successfully
 *       processed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, CancelJobsCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, CancelJobsCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * // import type { BatchClientConfig } from "@aws-sdk/client-batch";
 * const config = {}; // type is BatchClientConfig
 * const client = new BatchClient(config);
 * const input = { // CancelJobsRequest
 *   jobs: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 *   reason: "STRING_VALUE", // required
 * };
 * const command = new CancelJobsCommand(input);
 * const response = await client.send(command);
 * // { // CancelJobsResponse
 * //   successful: [ // StringList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   errors: [ // CancelJobsErrorDetailList // required
 * //     { // CancelJobsErrorDetail
 * //       job: "STRING_VALUE", // required
 * //       code: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CancelJobsCommandInput - {@link CancelJobsCommandInput}
 * @returns {@link CancelJobsCommandOutput}
 * @see {@link CancelJobsCommandInput} for command's `input` shape.
 * @see {@link CancelJobsCommandOutput} for command's `response` shape.
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
 * @example To cancel multiple jobs
 * ```javascript
 * // This example cancels the jobs with the specified job IDs.
 * const input = {
 *   jobs: [
 *     "1d828f65-7a4d-42e8-996d-3b900ed59dc4",
 *     "b3d0f26e-6d3a-4a5b-9c2e-7f4a1b2c3d4e"
 *   ],
 *   reason: "Cancelling jobs."
 * };
 * const command = new CancelJobsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   errors: [
 *     {
 *       code: "ServerException",
 *       job: "b3d0f26e-6d3a-4a5b-9c2e-7f4a1b2c3d4e",
 *       message: "Failed to read job state. Please retry this job."
 *     }
 *   ],
 *   successful: [
 *     "1d828f65-7a4d-42e8-996d-3b900ed59dc4"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CancelJobsCommand extends command<CancelJobsCommandInput, CancelJobsCommandOutput>(
  _ep0,
  _mw0,
  "CancelJobs",
  CancelJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelJobsRequest;
      output: CancelJobsResponse;
    };
    sdk: {
      input: CancelJobsCommandInput;
      output: CancelJobsCommandOutput;
    };
  };
}
