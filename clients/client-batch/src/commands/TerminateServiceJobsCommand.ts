// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TerminateServiceJobsRequest, TerminateServiceJobsResponse } from "../models/models_0";
import { TerminateServiceJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link TerminateServiceJobsCommand}.
 */
export interface TerminateServiceJobsCommandInput extends TerminateServiceJobsRequest {}
/**
 * @public
 *
 * The output of {@link TerminateServiceJobsCommand}.
 */
export interface TerminateServiceJobsCommandOutput extends TerminateServiceJobsResponse, __MetadataBearer {}

/**
 * <p>Terminates up to 50 service jobs in a job queue. This is a bulk version of <a>TerminateServiceJob</a>.</p>
 *          <p>Batch reports the result for each service job individually in the response. Service jobs that were processed successfully are reported in the <code>successful</code> list. Service jobs that encountered errors are reported in the <code>errors</code> list. The response returns an HTTP status code of <code>200</code> even when some service jobs encountered errors, so check the <code>errors</code> list. Service jobs that can't be found are treated as successfully processed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, TerminateServiceJobsCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, TerminateServiceJobsCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * // import type { BatchClientConfig } from "@aws-sdk/client-batch";
 * const config = {}; // type is BatchClientConfig
 * const client = new BatchClient(config);
 * const input = { // TerminateServiceJobsRequest
 *   jobs: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 *   reason: "STRING_VALUE", // required
 * };
 * const command = new TerminateServiceJobsCommand(input);
 * const response = await client.send(command);
 * // { // TerminateServiceJobsResponse
 * //   successful: [ // StringList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   errors: [ // TerminateServiceJobsErrorDetailList // required
 * //     { // TerminateServiceJobsErrorDetail
 * //       job: "STRING_VALUE", // required
 * //       code: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param TerminateServiceJobsCommandInput - {@link TerminateServiceJobsCommandInput}
 * @returns {@link TerminateServiceJobsCommandOutput}
 * @see {@link TerminateServiceJobsCommandInput} for command's `input` shape.
 * @see {@link TerminateServiceJobsCommandOutput} for command's `response` shape.
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
 * @example To terminate multiple service jobs
 * ```javascript
 * // This example terminates the specified service jobs with a reason.
 * const input = {
 *   jobs: [
 *     "a4d6c728-8ee8-4c65-8e2a-9a5e8f4b7c3d",
 *     "b3d0f26e-6d3a-4a5b-9c2e-7f4a1b2c3d4e"
 *   ],
 *   reason: "Job terminated by user request"
 * };
 * const command = new TerminateServiceJobsCommand(input);
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
 *     "a4d6c728-8ee8-4c65-8e2a-9a5e8f4b7c3d"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class TerminateServiceJobsCommand extends command<TerminateServiceJobsCommandInput, TerminateServiceJobsCommandOutput>(
  _ep0,
  _mw0,
  "TerminateServiceJobs",
  TerminateServiceJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TerminateServiceJobsRequest;
      output: TerminateServiceJobsResponse;
    };
    sdk: {
      input: TerminateServiceJobsCommandInput;
      output: TerminateServiceJobsCommandOutput;
    };
  };
}
