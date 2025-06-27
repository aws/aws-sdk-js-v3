// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockAgentRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentRuntimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSessionRequest, CreateSessionResponse } from "../models/models_1";
import { de_CreateSessionCommand, se_CreateSessionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSessionCommand}.
 */
export interface CreateSessionCommandInput extends CreateSessionRequest {}
/**
 * @public
 *
 * The output of {@link CreateSessionCommand}.
 */
export interface CreateSessionCommandOutput extends CreateSessionResponse, __MetadataBearer {}

/**
 * <p>Creates a session to temporarily store conversations for generative AI (GenAI) applications built with open-source frameworks such as LangGraph and LlamaIndex. Sessions enable you to save the state of conversations at checkpoints, with the added security and infrastructure of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/sessions.html">Store and retrieve conversation history and context with Amazon Bedrock sessions</a>.</p> <p>By default, Amazon Bedrock uses Amazon Web Services-managed keys for session encryption, including session metadata, or you can use your own KMS key. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/session-encryption.html">Amazon Bedrock session encryption</a>.</p> <note> <p> You use a session to store state and conversation history for generative AI applications built with open-source frameworks. For Amazon Bedrock Agents, the service automatically manages conversation context and associates them with the agent-specific sessionId you specify in the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html">InvokeAgent</a> API operation. </p> </note> <p>Related APIs:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_ListSessions.html">ListSessions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_GetSession.html">GetSession</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_EndSession.html">EndSession</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_DeleteSession.html">DeleteSession</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentRuntimeClient, CreateSessionCommand } from "@aws-sdk/client-bedrock-agent-runtime"; // ES Modules import
 * // const { BedrockAgentRuntimeClient, CreateSessionCommand } = require("@aws-sdk/client-bedrock-agent-runtime"); // CommonJS import
 * const client = new BedrockAgentRuntimeClient(config);
 * const input = { // CreateSessionRequest
 *   sessionMetadata: { // SessionMetadataMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   encryptionKeyArn: "STRING_VALUE",
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSessionCommand(input);
 * const response = await client.send(command);
 * // { // CreateSessionResponse
 * //   sessionId: "STRING_VALUE", // required
 * //   sessionArn: "STRING_VALUE", // required
 * //   sessionStatus: "ACTIVE" || "EXPIRED" || "ENDED", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateSessionCommandInput - {@link CreateSessionCommandInput}
 * @returns {@link CreateSessionCommandOutput}
 * @see {@link CreateSessionCommandInput} for command's `input` shape.
 * @see {@link CreateSessionCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentRuntimeClientResolvedConfig | config} for BedrockAgentRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions. Check your permissions and retry your request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict performing an operation. Resolve the conflict and retry your request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockAgentRuntimeServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentRuntime service.</p>
 *
 *
 * @public
 */
export class CreateSessionCommand extends $Command
  .classBuilder<
    CreateSessionCommandInput,
    CreateSessionCommandOutput,
    BedrockAgentRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentRuntimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentRunTimeService", "CreateSession", {})
  .n("BedrockAgentRuntimeClient", "CreateSessionCommand")
  .f(void 0, void 0)
  .ser(se_CreateSessionCommand)
  .de(de_CreateSessionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSessionRequest;
      output: CreateSessionResponse;
    };
    sdk: {
      input: CreateSessionCommandInput;
      output: CreateSessionCommandOutput;
    };
  };
}
