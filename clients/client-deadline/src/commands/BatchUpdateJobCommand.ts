// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchUpdateJobRequest, BatchUpdateJobResponse } from "../models/models_0";
import { BatchUpdateJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdateJobCommand}.
 */
export interface BatchUpdateJobCommandInput extends BatchUpdateJobRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateJobCommand}.
 */
export interface BatchUpdateJobCommandOutput extends BatchUpdateJobResponse, __MetadataBearer {}

/**
 * <p>Updates multiple jobs in a single request. This is a batch version of the <code>UpdateJob</code> API.</p> <p>The result of updating each job is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.</p> <p>When you change the status of a job to <code>ARCHIVED</code>, the job can't be scheduled or archived.</p> <important> <p>An archived job and its steps and tasks are deleted after 120 days. The job can't be recovered.</p> </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, BatchUpdateJobCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, BatchUpdateJobCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // BatchUpdateJobRequest
 *   clientToken: "STRING_VALUE",
 *   jobs: [ // BatchUpdateJobItems // required
 *     { // BatchUpdateJobItem
 *       farmId: "STRING_VALUE", // required
 *       queueId: "STRING_VALUE", // required
 *       jobId: "STRING_VALUE", // required
 *       targetTaskRunStatus: "READY" || "FAILED" || "SUCCEEDED" || "CANCELED" || "SUSPENDED" || "PENDING",
 *       priority: Number("int"),
 *       maxFailedTasksCount: Number("int"),
 *       maxRetriesPerTask: Number("int"),
 *       lifecycleStatus: "ARCHIVED",
 *       maxWorkerCount: Number("int"),
 *       name: "STRING_VALUE",
 *       description: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchUpdateJobCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateJobResponse
 * //   errors: [ // BatchUpdateJobErrors // required
 * //     { // BatchUpdateJobError
 * //       farmId: "STRING_VALUE", // required
 * //       queueId: "STRING_VALUE", // required
 * //       jobId: "STRING_VALUE", // required
 * //       code: "ConflictException" || "InternalServerErrorException" || "ResourceNotFoundException" || "ValidationException" || "AccessDeniedException" || "ThrottlingException", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdateJobCommandInput - {@link BatchUpdateJobCommandInput}
 * @returns {@link BatchUpdateJobCommandOutput}
 * @see {@link BatchUpdateJobCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateJobCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @example Update multiple jobs in a single request
 * ```javascript
 * //
 * const input = {
 *   jobs: [
 *     {
 *       farmId: "farm-1234567890abcdef1234567890abcdef",
 *       jobId: "job-1234567890abcdef1234567890abcdef",
 *       queueId: "queue-1234567890abcdef1234567890abcdef",
 *       targetTaskRunStatus: "FAILED"
 *     },
 *     {
 *       farmId: "farm-1234567890abcdef1234567890abcdef",
 *       jobId: "job-234567890abcdef1234567890abcdef1",
 *       queueId: "queue-1234567890abcdef1234567890abcdef",
 *       targetTaskRunStatus: "FAILED"
 *     }
 *   ]
 * };
 * const command = new BatchUpdateJobCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class BatchUpdateJobCommand extends $Command
  .classBuilder<
    BatchUpdateJobCommandInput,
    BatchUpdateJobCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "BatchUpdateJob", {})
  .n("DeadlineClient", "BatchUpdateJobCommand")
  .sc(BatchUpdateJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchUpdateJobRequest;
      output: BatchUpdateJobResponse;
    };
    sdk: {
      input: BatchUpdateJobCommandInput;
      output: BatchUpdateJobCommandOutput;
    };
  };
}
