// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTaskRequest, GetTaskResponse } from "../models/models_0";
import { GetTask } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTaskCommand}.
 */
export interface GetTaskCommandInput extends GetTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetTaskCommand}.
 */
export interface GetTaskCommandOutput extends GetTaskResponse, __MetadataBearer {}

/**
 * <p>Gets a task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, GetTaskCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, GetTaskCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // GetTaskRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 *   stepId: "STRING_VALUE", // required
 *   taskId: "STRING_VALUE", // required
 * };
 * const command = new GetTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetTaskResponse
 * //   taskId: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   createdBy: "STRING_VALUE", // required
 * //   runStatus: "PENDING" || "READY" || "ASSIGNED" || "STARTING" || "SCHEDULED" || "INTERRUPTING" || "RUNNING" || "SUSPENDED" || "CANCELED" || "FAILED" || "SUCCEEDED" || "NOT_COMPATIBLE", // required
 * //   targetRunStatus: "READY" || "FAILED" || "SUCCEEDED" || "CANCELED" || "SUSPENDED" || "PENDING",
 * //   failureRetryCount: Number("int"),
 * //   parameters: { // TaskParameters
 * //     "<keys>": { // TaskParameterValue Union: only one key present
 * //       int: "STRING_VALUE",
 * //       float: "STRING_VALUE",
 * //       string: "STRING_VALUE",
 * //       path: "STRING_VALUE",
 * //       chunkInt: "STRING_VALUE",
 * //     },
 * //   },
 * //   startedAt: new Date("TIMESTAMP"),
 * //   endedAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   updatedBy: "STRING_VALUE",
 * //   latestSessionActionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTaskCommandInput - {@link GetTaskCommandInput}
 * @returns {@link GetTaskCommandOutput}
 * @see {@link GetTaskCommandInput} for command's `input` shape.
 * @see {@link GetTaskCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class GetTaskCommand extends $Command
  .classBuilder<
    GetTaskCommandInput,
    GetTaskCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "GetTask", {})
  .n("DeadlineClient", "GetTaskCommand")
  .sc(GetTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTaskRequest;
      output: GetTaskResponse;
    };
    sdk: {
      input: GetTaskCommandInput;
      output: GetTaskCommandOutput;
    };
  };
}
