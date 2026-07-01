// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListExecutionsRequest, ListExecutionsResponse } from "../models/models_0";
import { ListExecutions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p>List executions</p>
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
 *  <p>Access to the requested resource is denied due to insufficient permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an unexpected error occurs in the processing of a request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests. Please slow down and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *  <p>This exception is thrown when the content size exceeds the allowed limit.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters provided in the request are invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed the service quota limit.</p>
 *
 * @throws {@link DevOpsAgentServiceException}
 * <p>Base exception class for all service exceptions from DevOpsAgent service.</p>
 *
 *
 * @public
 */
export class ListExecutionsCommand extends command<ListExecutionsCommandInput, ListExecutionsCommandOutput>(
  _ep0,
  _mw0,
  "ListExecutions",
  ListExecutions$
) {
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
