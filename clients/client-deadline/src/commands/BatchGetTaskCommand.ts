// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchGetTaskRequest, BatchGetTaskResponse } from "../models/models_0";
import { BatchGetTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetTaskCommand}.
 */
export interface BatchGetTaskCommandInput extends BatchGetTaskRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetTaskCommand}.
 */
export interface BatchGetTaskCommandOutput extends BatchGetTaskResponse, __MetadataBearer {}

/**
 * <p>Retrieves multiple tasks in a single request. This is a batch version of the <code>GetTask</code> API.</p> <p>The result of getting each task is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, BatchGetTaskCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, BatchGetTaskCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // BatchGetTaskRequest
 *   identifiers: [ // BatchGetTaskIdentifiers // required
 *     { // BatchGetTaskIdentifier
 *       farmId: "STRING_VALUE", // required
 *       queueId: "STRING_VALUE", // required
 *       jobId: "STRING_VALUE", // required
 *       stepId: "STRING_VALUE", // required
 *       taskId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchGetTaskCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetTaskResponse
 * //   tasks: [ // BatchGetTaskItems // required
 * //     { // BatchGetTaskItem
 * //       farmId: "STRING_VALUE", // required
 * //       queueId: "STRING_VALUE", // required
 * //       jobId: "STRING_VALUE", // required
 * //       stepId: "STRING_VALUE", // required
 * //       taskId: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       createdBy: "STRING_VALUE", // required
 * //       runStatus: "PENDING" || "READY" || "ASSIGNED" || "STARTING" || "SCHEDULED" || "INTERRUPTING" || "RUNNING" || "SUSPENDED" || "CANCELED" || "FAILED" || "SUCCEEDED" || "NOT_COMPATIBLE", // required
 * //       targetRunStatus: "READY" || "FAILED" || "SUCCEEDED" || "CANCELED" || "SUSPENDED" || "PENDING",
 * //       failureRetryCount: Number("int"),
 * //       startedAt: new Date("TIMESTAMP"),
 * //       endedAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       updatedBy: "STRING_VALUE",
 * //       latestSessionActionId: "STRING_VALUE",
 * //       parameters: { // TaskParameters
 * //         "<keys>": { // TaskParameterValue Union: only one key present
 * //           int: "STRING_VALUE",
 * //           float: "STRING_VALUE",
 * //           string: "STRING_VALUE",
 * //           path: "STRING_VALUE",
 * //           chunkInt: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   errors: [ // BatchGetTaskErrors // required
 * //     { // BatchGetTaskError
 * //       farmId: "STRING_VALUE", // required
 * //       queueId: "STRING_VALUE", // required
 * //       jobId: "STRING_VALUE", // required
 * //       stepId: "STRING_VALUE", // required
 * //       taskId: "STRING_VALUE", // required
 * //       code: "InternalServerErrorException" || "ResourceNotFoundException" || "ValidationException" || "AccessDeniedException" || "ThrottlingException", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetTaskCommandInput - {@link BatchGetTaskCommandInput}
 * @returns {@link BatchGetTaskCommandOutput}
 * @see {@link BatchGetTaskCommandInput} for command's `input` shape.
 * @see {@link BatchGetTaskCommandOutput} for command's `response` shape.
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
 * @example Get multiple tasks in a single request
 * ```javascript
 * //
 * const input = {
 *   identifiers: [
 *     {
 *       farmId: "farm-1234567890abcdef1234567890abcdef",
 *       jobId: "job-1234567890abcdef1234567890abcdef",
 *       queueId: "queue-1234567890abcdef1234567890abcdef",
 *       stepId: "step-1234567890abcdef1234567890abcdef",
 *       taskId: "task-1234567890abcdef1234567890abcdef-0"
 *     },
 *     {
 *       farmId: "farm-1234567890abcdef1234567890abcdef",
 *       jobId: "job-1234567890abcdef1234567890abcdef",
 *       queueId: "queue-1234567890abcdef1234567890abcdef",
 *       stepId: "step-1234567890abcdef1234567890abcdef",
 *       taskId: "task-1234567890abcdef1234567890abcdef-1"
 *     }
 *   ]
 * };
 * const command = new BatchGetTaskCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class BatchGetTaskCommand extends $Command
  .classBuilder<
    BatchGetTaskCommandInput,
    BatchGetTaskCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "BatchGetTask", {})
  .n("DeadlineClient", "BatchGetTaskCommand")
  .sc(BatchGetTask$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetTaskRequest;
      output: BatchGetTaskResponse;
    };
    sdk: {
      input: BatchGetTaskCommandInput;
      output: BatchGetTaskCommandOutput;
    };
  };
}
