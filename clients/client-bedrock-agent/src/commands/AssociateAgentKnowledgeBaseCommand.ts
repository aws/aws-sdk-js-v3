// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateAgentKnowledgeBaseRequest, AssociateAgentKnowledgeBaseResponse } from "../models/models_1";
import { AssociateAgentKnowledgeBase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateAgentKnowledgeBaseCommand}.
 */
export interface AssociateAgentKnowledgeBaseCommandInput extends AssociateAgentKnowledgeBaseRequest {}
/**
 * @public
 *
 * The output of {@link AssociateAgentKnowledgeBaseCommand}.
 */
export interface AssociateAgentKnowledgeBaseCommandOutput extends AssociateAgentKnowledgeBaseResponse, __MetadataBearer {}

/**
 * Associates a knowledge base with an agent. If a knowledge base is associated and its `indexState` is set to `Enabled`, the agent queries the knowledge base for information to augment its response to the user.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, AssociateAgentKnowledgeBaseCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, AssociateAgentKnowledgeBaseCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // AssociateAgentKnowledgeBaseRequest
 *   agentId: "STRING_VALUE", // required
 *   agentVersion: "STRING_VALUE", // required
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   description: "STRING_VALUE", // required
 *   knowledgeBaseState: "ENABLED" || "DISABLED",
 * };
 * const command = new AssociateAgentKnowledgeBaseCommand(input);
 * const response = await client.send(command);
 * // { // AssociateAgentKnowledgeBaseResponse
 * //   agentKnowledgeBase: { // AgentKnowledgeBase
 * //     agentId: "STRING_VALUE", // required
 * //     agentVersion: "STRING_VALUE", // required
 * //     knowledgeBaseId: "STRING_VALUE", // required
 * //     description: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     knowledgeBaseState: "ENABLED" || "DISABLED", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateAgentKnowledgeBaseCommandInput - {@link AssociateAgentKnowledgeBaseCommandInput}
 * @returns {@link AssociateAgentKnowledgeBaseCommandOutput}
 * @see {@link AssociateAgentKnowledgeBaseCommandInput} for command's `input` shape.
 * @see {@link AssociateAgentKnowledgeBaseCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request is denied because of missing access permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict performing an operation.
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
 * @throws {@link BedrockAgentServiceException}
 *
 * Base exception class for all service exceptions from BedrockAgent service.
 *
 * @public
 */
export class AssociateAgentKnowledgeBaseCommand extends command<AssociateAgentKnowledgeBaseCommandInput, AssociateAgentKnowledgeBaseCommandOutput>(
  _ep0,
  _mw0,
  "AssociateAgentKnowledgeBase",
  AssociateAgentKnowledgeBase$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateAgentKnowledgeBaseRequest;
      output: AssociateAgentKnowledgeBaseResponse;
    };
    sdk: {
      input: AssociateAgentKnowledgeBaseCommandInput;
      output: AssociateAgentKnowledgeBaseCommandOutput;
    };
  };
}
