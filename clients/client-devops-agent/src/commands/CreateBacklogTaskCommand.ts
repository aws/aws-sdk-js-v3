// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateBacklogTaskRequest, CreateBacklogTaskResponse } from "../models/models_0";
import { CreateBacklogTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBacklogTaskCommand}.
 */
export interface CreateBacklogTaskCommandInput extends CreateBacklogTaskRequest {}
/**
 * @public
 *
 * The output of {@link CreateBacklogTaskCommand}.
 */
export interface CreateBacklogTaskCommandOutput extends CreateBacklogTaskResponse, __MetadataBearer {}

/**
 * Creates a new backlog task in the specified agent space
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, CreateBacklogTaskCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, CreateBacklogTaskCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // CreateBacklogTaskRequest
 *   agentSpaceId: "STRING_VALUE", // required
 *   reference: { // ReferenceInput
 *     system: "STRING_VALUE", // required
 *     title: "STRING_VALUE",
 *     referenceId: "STRING_VALUE", // required
 *     referenceUrl: "STRING_VALUE", // required
 *     associationId: "STRING_VALUE", // required
 *   },
 *   taskType: "INVESTIGATION" || "EVALUATION", // required
 *   title: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   priority: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "MINIMAL", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateBacklogTaskCommand(input);
 * const response = await client.send(command);
 * // { // CreateBacklogTaskResponse
 * //   task: { // Task
 * //     agentSpaceId: "STRING_VALUE", // required
 * //     taskId: "STRING_VALUE", // required
 * //     executionId: "STRING_VALUE",
 * //     title: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     reference: { // ReferenceOutput
 * //       system: "STRING_VALUE", // required
 * //       title: "STRING_VALUE",
 * //       referenceId: "STRING_VALUE", // required
 * //       referenceUrl: "STRING_VALUE", // required
 * //       associationId: "STRING_VALUE", // required
 * //     },
 * //     taskType: "INVESTIGATION" || "EVALUATION", // required
 * //     priority: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "MINIMAL", // required
 * //     status: "PENDING_TRIAGE" || "LINKED" || "PENDING_START" || "IN_PROGRESS" || "PENDING_CUSTOMER_APPROVAL" || "COMPLETED" || "FAILED" || "TIMED_OUT" || "CANCELED", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     version: Number("int"), // required
 * //     supportMetadata: "DOCUMENT_VALUE",
 * //     metadata: "DOCUMENT_VALUE",
 * //     primaryTaskId: "STRING_VALUE",
 * //     statusReason: "STRING_VALUE",
 * //     hasLinkedTasks: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateBacklogTaskCommandInput - {@link CreateBacklogTaskCommandInput}
 * @returns {@link CreateBacklogTaskCommandOutput}
 * @see {@link CreateBacklogTaskCommandInput} for command's `input` shape.
 * @see {@link CreateBacklogTaskCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  Access to the requested resource is denied due to insufficient permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown when an unexpected error occurs in the processing of a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to too many requests. Please slow down and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *  This exception is thrown when the content size exceeds the allowed limit.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  One or more parameters provided in the request are invalid.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  The request would exceed the service quota limit.
 *
 * @throws {@link DevOpsAgentServiceException}
 * <p>Base exception class for all service exceptions from DevOpsAgent service.</p>
 *
 *
 * @public
 */
export class CreateBacklogTaskCommand extends $Command
  .classBuilder<
    CreateBacklogTaskCommandInput,
    CreateBacklogTaskCommandOutput,
    DevOpsAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DevOpsAgent", "CreateBacklogTask", {})
  .n("DevOpsAgentClient", "CreateBacklogTaskCommand")
  .sc(CreateBacklogTask$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBacklogTaskRequest;
      output: CreateBacklogTaskResponse;
    };
    sdk: {
      input: CreateBacklogTaskCommandInput;
      output: CreateBacklogTaskCommandOutput;
    };
  };
}
