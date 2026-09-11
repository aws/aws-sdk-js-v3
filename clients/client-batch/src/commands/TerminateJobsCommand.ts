// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TerminateJobsRequest, TerminateJobsResponse } from "../models/models_0";
import { TerminateJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link TerminateJobsCommand}.
 */
export interface TerminateJobsCommandInput extends TerminateJobsRequest {}
/**
 * @public
 *
 * The output of {@link TerminateJobsCommand}.
 */
export interface TerminateJobsCommandOutput extends TerminateJobsResponse, __MetadataBearer {}

/**
 * <p>Terminates up to 50 jobs in a job queue. This is a bulk version of <a>TerminateJob</a>. Jobs that are in the <code>STARTING</code> or
 *         <code>RUNNING</code> state are terminated, which causes them to transition to
 *         <code>FAILED</code>. Jobs that have not progressed to the <code>STARTING</code> state are
 *       cancelled.</p>
 *          <p>Batch reports the result for each job individually in the response. Jobs that
 *       were processed successfully are reported in the <code>successful</code> list. Jobs that
 *       encountered errors are reported in the <code>errors</code> list. The response returns an
 *       HTTP status code of <code>200</code> even when some jobs encountered errors, so check the
 *       <code>errors</code> list. Jobs that can't be found are treated as successfully
 *       processed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, TerminateJobsCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, TerminateJobsCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * // import type { BatchClientConfig } from "@aws-sdk/client-batch";
 * const config = {}; // type is BatchClientConfig
 * const client = new BatchClient(config);
 * const input = { // TerminateJobsRequest
 *   jobs: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 *   reason: "STRING_VALUE", // required
 * };
 * const command = new TerminateJobsCommand(input);
 * const response = await client.send(command);
 * // { // TerminateJobsResponse
 * //   successful: [ // StringList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   errors: [ // TerminateJobsErrorDetailList // required
 * //     { // TerminateJobsErrorDetail
 * //       job: "STRING_VALUE", // required
 * //       code: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param TerminateJobsCommandInput - {@link TerminateJobsCommandInput}
 * @returns {@link TerminateJobsCommandOutput}
 * @see {@link TerminateJobsCommandInput} for command's `input` shape.
 * @see {@link TerminateJobsCommandOutput} for command's `response` shape.
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
 * @example To terminate multiple jobs
 * ```javascript
 * // This example terminates the jobs with the specified job IDs.
 * const input = {
 *   jobs: [
 *     "61e743ed-35e4-48da-b2de-5c8333821c84",
 *     "b3d0f26e-6d3a-4a5b-9c2e-7f4a1b2c3d4e"
 *   ],
 *   reason: "Terminating jobs."
 * };
 * const command = new TerminateJobsCommand(input);
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
 *     "61e743ed-35e4-48da-b2de-5c8333821c84"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class TerminateJobsCommand extends command<TerminateJobsCommandInput, TerminateJobsCommandOutput>(
  _ep0,
  _mw0,
  "TerminateJobs",
  TerminateJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TerminateJobsRequest;
      output: TerminateJobsResponse;
    };
    sdk: {
      input: TerminateJobsCommandInput;
      output: TerminateJobsCommandOutput;
    };
  };
}
