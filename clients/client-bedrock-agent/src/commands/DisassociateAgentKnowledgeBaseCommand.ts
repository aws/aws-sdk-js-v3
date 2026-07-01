// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateAgentKnowledgeBaseRequest, DisassociateAgentKnowledgeBaseResponse } from "../models/models_1";
import { DisassociateAgentKnowledgeBase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateAgentKnowledgeBaseCommand}.
 */
export interface DisassociateAgentKnowledgeBaseCommandInput extends DisassociateAgentKnowledgeBaseRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateAgentKnowledgeBaseCommand}.
 */
export interface DisassociateAgentKnowledgeBaseCommandOutput extends DisassociateAgentKnowledgeBaseResponse, __MetadataBearer {}

/**
 * <p>Disassociates a knowledge base from an agent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, DisassociateAgentKnowledgeBaseCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, DisassociateAgentKnowledgeBaseCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // DisassociateAgentKnowledgeBaseRequest
 *   agentId: "STRING_VALUE", // required
 *   agentVersion: "STRING_VALUE", // required
 *   knowledgeBaseId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateAgentKnowledgeBaseCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateAgentKnowledgeBaseCommandInput - {@link DisassociateAgentKnowledgeBaseCommandInput}
 * @returns {@link DisassociateAgentKnowledgeBaseCommandOutput}
 * @see {@link DisassociateAgentKnowledgeBaseCommandInput} for command's `input` shape.
 * @see {@link DisassociateAgentKnowledgeBaseCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict performing an operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockAgentServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgent service.</p>
 *
 *
 * @public
 */
export class DisassociateAgentKnowledgeBaseCommand extends command<DisassociateAgentKnowledgeBaseCommandInput, DisassociateAgentKnowledgeBaseCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateAgentKnowledgeBase",
  DisassociateAgentKnowledgeBase$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateAgentKnowledgeBaseRequest;
      output: {};
    };
    sdk: {
      input: DisassociateAgentKnowledgeBaseCommandInput;
      output: DisassociateAgentKnowledgeBaseCommandOutput;
    };
  };
}
