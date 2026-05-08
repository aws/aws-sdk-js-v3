// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListExecutionsRequest, ListExecutionsResponse } from "../models/models_0";
import { ListExecutions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListExecutionsCommand}.
 */
export interface ListExecutionsCommandInput extends ListExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListExecutionsCommand}.
 */
export interface ListExecutionsCommandOutput extends ListExecutionsResponse, __MetadataBearer {}

/**
 * List executions
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, ListExecutionsCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, ListExecutionsCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // ListExecutionsRequest
 *   agentSpaceId: "STRING_VALUE", // required
 *   taskId: "STRING_VALUE", // required
 *   limit: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListExecutionsResponse
 * //   executions: [ // ExecutionList // required
 * //     { // Execution
 * //       agentSpaceId: "STRING_VALUE", // required
 * //       executionId: "STRING_VALUE", // required
 * //       parentExecutionId: "STRING_VALUE",
 * //       agentSubTask: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       executionStatus: "FAILED" || "RUNNING" || "STOPPED" || "CANCELED" || "TIMED_OUT", // required
 * //       agentType: "STRING_VALUE",
 * //       uid: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExecutionsCommandInput - {@link ListExecutionsCommandInput}
 * @returns {@link ListExecutionsCommandOutput}
 * @see {@link ListExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListExecutionsCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource could not be found.
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
export class ListExecutionsCommand extends $Command
  .classBuilder<
    ListExecutionsCommandInput,
    ListExecutionsCommandOutput,
    DevOpsAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DevOpsAgent", "ListExecutions", {})
  .n("DevOpsAgentClient", "ListExecutionsCommand")
  .sc(ListExecutions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExecutionsRequest;
      output: ListExecutionsResponse;
    };
    sdk: {
      input: ListExecutionsCommandInput;
      output: ListExecutionsCommandOutput;
    };
  };
}
