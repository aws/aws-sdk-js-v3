// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchGetStepRequest, BatchGetStepResponse } from "../models/models_0";
import { BatchGetStep$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetStepCommand}.
 */
export interface BatchGetStepCommandInput extends BatchGetStepRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetStepCommand}.
 */
export interface BatchGetStepCommandOutput extends BatchGetStepResponse, __MetadataBearer {}

/**
 * <p>Retrieves multiple steps in a single request. This is a batch version of the <code>GetStep</code> API.</p> <p>The result of getting each step is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, BatchGetStepCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, BatchGetStepCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // BatchGetStepRequest
 *   identifiers: [ // BatchGetStepIdentifiers // required
 *     { // BatchGetStepIdentifier
 *       farmId: "STRING_VALUE", // required
 *       queueId: "STRING_VALUE", // required
 *       jobId: "STRING_VALUE", // required
 *       stepId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchGetStepCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetStepResponse
 * //   steps: [ // BatchGetStepItems // required
 * //     { // BatchGetStepItem
 * //       farmId: "STRING_VALUE", // required
 * //       queueId: "STRING_VALUE", // required
 * //       jobId: "STRING_VALUE", // required
 * //       stepId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       lifecycleStatus: "CREATE_COMPLETE" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED" || "UPDATE_SUCCEEDED", // required
 * //       lifecycleStatusMessage: "STRING_VALUE",
 * //       taskRunStatus: "PENDING" || "READY" || "ASSIGNED" || "STARTING" || "SCHEDULED" || "INTERRUPTING" || "RUNNING" || "SUSPENDED" || "CANCELED" || "FAILED" || "SUCCEEDED" || "NOT_COMPATIBLE", // required
 * //       taskRunStatusCounts: { // TaskRunStatusCounts // required
 * //         "<keys>": Number("int"),
 * //       },
 * //       taskFailureRetryCount: Number("int"),
 * //       targetTaskRunStatus: "READY" || "FAILED" || "SUCCEEDED" || "CANCELED" || "SUSPENDED" || "PENDING",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       createdBy: "STRING_VALUE", // required
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       updatedBy: "STRING_VALUE",
 * //       startedAt: new Date("TIMESTAMP"),
 * //       endedAt: new Date("TIMESTAMP"),
 * //       dependencyCounts: { // DependencyCounts
 * //         dependenciesResolved: Number("int"), // required
 * //         dependenciesUnresolved: Number("int"), // required
 * //         consumersResolved: Number("int"), // required
 * //         consumersUnresolved: Number("int"), // required
 * //       },
 * //       requiredCapabilities: { // StepRequiredCapabilities
 * //         attributes: [ // StepAttributeCapabilities // required
 * //           { // StepAttributeCapability
 * //             name: "STRING_VALUE", // required
 * //             anyOf: [ // ListAttributeCapabilityValue
 * //               "STRING_VALUE",
 * //             ],
 * //             allOf: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //         amounts: [ // StepAmountCapabilities // required
 * //           { // StepAmountCapability
 * //             name: "STRING_VALUE", // required
 * //             min: Number("double"),
 * //             max: Number("double"),
 * //             value: Number("double"),
 * //           },
 * //         ],
 * //       },
 * //       parameterSpace: { // ParameterSpace
 * //         parameters: [ // StepParameterList // required
 * //           { // StepParameter
 * //             name: "STRING_VALUE", // required
 * //             type: "INT" || "FLOAT" || "STRING" || "PATH" || "CHUNK_INT", // required
 * //             chunks: { // StepParameterChunks
 * //               defaultTaskCount: Number("int"), // required
 * //               targetRuntimeSeconds: Number("int"),
 * //               rangeConstraint: "CONTIGUOUS" || "NONCONTIGUOUS", // required
 * //             },
 * //           },
 * //         ],
 * //         combination: "STRING_VALUE",
 * //       },
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   errors: [ // BatchGetStepErrors // required
 * //     { // BatchGetStepError
 * //       farmId: "STRING_VALUE", // required
 * //       queueId: "STRING_VALUE", // required
 * //       jobId: "STRING_VALUE", // required
 * //       stepId: "STRING_VALUE", // required
 * //       code: "InternalServerErrorException" || "ResourceNotFoundException" || "ValidationException" || "AccessDeniedException" || "ThrottlingException", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetStepCommandInput - {@link BatchGetStepCommandInput}
 * @returns {@link BatchGetStepCommandOutput}
 * @see {@link BatchGetStepCommandInput} for command's `input` shape.
 * @see {@link BatchGetStepCommandOutput} for command's `response` shape.
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
 * @example Get multiple steps in a single request
 * ```javascript
 * //
 * const input = {
 *   identifiers: [
 *     {
 *       farmId: "farm-1234567890abcdef1234567890abcdef",
 *       jobId: "job-1234567890abcdef1234567890abcdef",
 *       queueId: "queue-1234567890abcdef1234567890abcdef",
 *       stepId: "step-1234567890abcdef1234567890abcdef"
 *     },
 *     {
 *       farmId: "farm-1234567890abcdef1234567890abcdef",
 *       jobId: "job-1234567890abcdef1234567890abcdef",
 *       queueId: "queue-1234567890abcdef1234567890abcdef",
 *       stepId: "step-234567890abcdef1234567890abcdef1"
 *     }
 *   ]
 * };
 * const command = new BatchGetStepCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class BatchGetStepCommand extends $Command
  .classBuilder<
    BatchGetStepCommandInput,
    BatchGetStepCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "BatchGetStep", {})
  .n("DeadlineClient", "BatchGetStepCommand")
  .sc(BatchGetStep$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetStepRequest;
      output: BatchGetStepResponse;
    };
    sdk: {
      input: BatchGetStepCommandInput;
      output: BatchGetStepCommandOutput;
    };
  };
}
