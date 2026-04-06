// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchUpdateTaskRequest, BatchUpdateTaskResponse } from "../models/models_0";
import { BatchUpdateTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdateTaskCommand}.
 */
export interface BatchUpdateTaskCommandInput extends BatchUpdateTaskRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateTaskCommand}.
 */
export interface BatchUpdateTaskCommandOutput extends BatchUpdateTaskResponse, __MetadataBearer {}

/**
 * <p>Updates multiple tasks in a single request. This is a batch version of the <code>UpdateTask</code> API.</p> <p>The result of updating each task is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, BatchUpdateTaskCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, BatchUpdateTaskCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // BatchUpdateTaskRequest
 *   clientToken: "STRING_VALUE",
 *   tasks: [ // BatchUpdateTaskItems // required
 *     { // BatchUpdateTaskItem
 *       farmId: "STRING_VALUE", // required
 *       queueId: "STRING_VALUE", // required
 *       jobId: "STRING_VALUE", // required
 *       stepId: "STRING_VALUE", // required
 *       taskId: "STRING_VALUE", // required
 *       targetRunStatus: "READY" || "FAILED" || "SUCCEEDED" || "CANCELED" || "SUSPENDED" || "PENDING", // required
 *     },
 *   ],
 * };
 * const command = new BatchUpdateTaskCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateTaskResponse
 * //   errors: [ // BatchUpdateTaskErrors // required
 * //     { // BatchUpdateTaskError
 * //       farmId: "STRING_VALUE", // required
 * //       queueId: "STRING_VALUE", // required
 * //       jobId: "STRING_VALUE", // required
 * //       stepId: "STRING_VALUE", // required
 * //       taskId: "STRING_VALUE", // required
 * //       code: "ConflictException" || "InternalServerErrorException" || "ResourceNotFoundException" || "ValidationException" || "AccessDeniedException" || "ThrottlingException", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdateTaskCommandInput - {@link BatchUpdateTaskCommandInput}
 * @returns {@link BatchUpdateTaskCommandOutput}
 * @see {@link BatchUpdateTaskCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateTaskCommandOutput} for command's `response` shape.
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
 * @example Update multiple tasks in a single request
 * ```javascript
 * //
 * const input = {
 *   tasks: [
 *     {
 *       farmId: "farm-1234567890abcdef1234567890abcdef",
 *       jobId: "job-1234567890abcdef1234567890abcdef",
 *       queueId: "queue-1234567890abcdef1234567890abcdef",
 *       stepId: "step-1234567890abcdef1234567890abcdef",
 *       targetRunStatus: "FAILED",
 *       taskId: "task-1234567890abcdef1234567890abcdef-0"
 *     },
 *     {
 *       farmId: "farm-1234567890abcdef1234567890abcdef",
 *       jobId: "job-1234567890abcdef1234567890abcdef",
 *       queueId: "queue-1234567890abcdef1234567890abcdef",
 *       stepId: "step-1234567890abcdef1234567890abcdef",
 *       targetRunStatus: "FAILED",
 *       taskId: "task-1234567890abcdef1234567890abcdef-1"
 *     }
 *   ]
 * };
 * const command = new BatchUpdateTaskCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class BatchUpdateTaskCommand extends $Command
  .classBuilder<
    BatchUpdateTaskCommandInput,
    BatchUpdateTaskCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "BatchUpdateTask", {})
  .n("DeadlineClient", "BatchUpdateTaskCommand")
  .sc(BatchUpdateTask$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchUpdateTaskRequest;
      output: BatchUpdateTaskResponse;
    };
    sdk: {
      input: BatchUpdateTaskCommandInput;
      output: BatchUpdateTaskCommandOutput;
    };
  };
}
