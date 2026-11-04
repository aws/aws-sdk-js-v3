// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAgentMemoryRequest, DeleteAgentMemoryResponse } from "../models/models_0";
import { DeleteAgentMemory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAgentMemoryCommand}.
 */
export interface DeleteAgentMemoryCommandInput extends DeleteAgentMemoryRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAgentMemoryCommand}.
 */
export interface DeleteAgentMemoryCommandOutput extends DeleteAgentMemoryResponse, __MetadataBearer {}

/**
 * Deletes memory from the specified memory identifier.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentRuntimeClient, DeleteAgentMemoryCommand } from "@aws-sdk/client-bedrock-agent-runtime"; // ES Modules import
 * // const { BedrockAgentRuntimeClient, DeleteAgentMemoryCommand } = require("@aws-sdk/client-bedrock-agent-runtime"); // CommonJS import
 * // import type { BedrockAgentRuntimeClientConfig } from "@aws-sdk/client-bedrock-agent-runtime";
 * const config = {}; // type is BedrockAgentRuntimeClientConfig
 * const client = new BedrockAgentRuntimeClient(config);
 * const input = { // DeleteAgentMemoryRequest
 *   agentId: "STRING_VALUE", // required
 *   agentAliasId: "STRING_VALUE", // required
 *   memoryId: "STRING_VALUE",
 *   sessionId: "STRING_VALUE",
 * };
 * const command = new DeleteAgentMemoryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAgentMemoryCommandInput - {@link DeleteAgentMemoryCommandInput}
 * @returns {@link DeleteAgentMemoryCommandOutput}
 * @see {@link DeleteAgentMemoryCommandInput} for command's `input` shape.
 * @see {@link DeleteAgentMemoryCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentRuntimeClientResolvedConfig | config} for BedrockAgentRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request is denied because of missing access permissions. Check your permissions and retry your request.
 *
 * @throws {@link BadGatewayException} (server fault)
 *
 * There was an issue with a dependency due to a server issue. Retry your request.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict performing an operation. Resolve the conflict and retry your request.
 *
 * @throws {@link DependencyFailedException} (client fault)
 *
 * There was an issue with a dependency. Check the resource configurations and retry the request.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The number of requests exceeds the service quota. Resubmit your request later.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link BedrockAgentRuntimeServiceException}
 *
 * Base exception class for all service exceptions from BedrockAgentRuntime service.
 *
 * @public
 */
export class DeleteAgentMemoryCommand extends command<DeleteAgentMemoryCommandInput, DeleteAgentMemoryCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAgentMemory",
  DeleteAgentMemory$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAgentMemoryRequest;
      output: {};
    };
    sdk: {
      input: DeleteAgentMemoryCommandInput;
      output: DeleteAgentMemoryCommandOutput;
    };
  };
}
