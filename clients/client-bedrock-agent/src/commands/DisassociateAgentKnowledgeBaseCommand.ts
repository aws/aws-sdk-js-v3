// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateAgentKnowledgeBaseRequest, DisassociateAgentKnowledgeBaseResponse } from "../models/models_0";
import {
  de_DisassociateAgentKnowledgeBaseCommand,
  se_DisassociateAgentKnowledgeBaseCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
export interface DisassociateAgentKnowledgeBaseCommandOutput
  extends DisassociateAgentKnowledgeBaseResponse,
    __MetadataBearer {}

/**
 * Disassociate an existing Knowledge Base from an Amazon Bedrock Agent
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, DisassociateAgentKnowledgeBaseCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, DisassociateAgentKnowledgeBaseCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
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
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link ConflictException} (client fault)
 *  This exception is thrown when there is a conflict performing an operation
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  This exception is thrown when a resource referenced by the operation does not exist
 *
 * @throws {@link ThrottlingException} (client fault)
 *  This exception is thrown when the number of requests exceeds the limit
 *
 * @throws {@link ValidationException} (client fault)
 *  This exception is thrown when the request's input validation fails
 *
 * @throws {@link BedrockAgentServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgent service.</p>
 *
 * @public
 */
export class DisassociateAgentKnowledgeBaseCommand extends $Command
  .classBuilder<
    DisassociateAgentKnowledgeBaseCommandInput,
    DisassociateAgentKnowledgeBaseCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "DisassociateAgentKnowledgeBase", {})
  .n("BedrockAgentClient", "DisassociateAgentKnowledgeBaseCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateAgentKnowledgeBaseCommand)
  .de(de_DisassociateAgentKnowledgeBaseCommand)
  .build() {}
