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
 * Terminates up to 50 jobs in a job queue. This is a bulk version of TerminateJob. Jobs that are in the `STARTING` or `RUNNING` state are terminated, which causes them to transition to `FAILED`. Jobs that have not progressed to the `STARTING` state are cancelled.
 *
 * Batch reports the result for each job individually in the response. Jobs that were processed successfully are reported in the `successful` list. Jobs that encountered errors are reported in the `errors` list. The response returns an HTTP status code of `200` even when some jobs encountered errors, so check the `errors` list. Jobs that can't be found are treated as successfully processed.
 *
 * > **Important:** This operation requires `batch:TerminateJob` permission for each job in the request. There is no separate `batch:TerminateJobs` IAM action. If a caller's IAM policy grants `batch:TerminateJob`, they can use both the singular TerminateJob and bulk `TerminateJobs` operations.
 *
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
 *
 * These errors are usually caused by a client action. One example cause is using an action or resource on behalf of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier that's not valid.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server issue.
 *
 * @throws {@link BatchServiceException}
 *
 * Base exception class for all service exceptions from Batch service.
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
