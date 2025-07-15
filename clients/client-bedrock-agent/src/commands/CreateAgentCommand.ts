// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateAgentRequest,
  CreateAgentRequestFilterSensitiveLog,
  CreateAgentResponse,
  CreateAgentResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateAgentCommand, se_CreateAgentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAgentCommand}.
 */
export interface CreateAgentCommandInput extends CreateAgentRequest {}
/**
 * @public
 *
 * The output of {@link CreateAgentCommand}.
 */
export interface CreateAgentCommandOutput extends CreateAgentResponse, __MetadataBearer {}

/**
 * <p>Creates an agent that orchestrates interactions between foundation models, data sources, software applications, user conversations, and APIs to carry out tasks to help customers.</p> <ul> <li> <p>Specify the following fields for security purposes.</p> <ul> <li> <p> <code>agentResourceRoleArn</code> – The Amazon Resource Name (ARN) of the role with permissions to invoke API operations on an agent.</p> </li> <li> <p>(Optional) <code>customerEncryptionKeyArn</code> – The Amazon Resource Name (ARN) of a KMS key to encrypt the creation of the agent.</p> </li> <li> <p>(Optional) <code>idleSessionTTLinSeconds</code> – Specify the number of seconds for which the agent should maintain session information. After this time expires, the subsequent <code>InvokeAgent</code> request begins a new session.</p> </li> </ul> </li> <li> <p>To enable your agent to retain conversational context across multiple sessions, include a <code>memoryConfiguration</code> object. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-configure-memory.html">Configure memory</a>.</p> </li> <li> <p>To override the default prompt behavior for agent orchestration and to use advanced prompts, include a <code>promptOverrideConfiguration</code> object. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html">Advanced prompts</a>.</p> </li> <li> <p>If your agent fails to be created, the response returns a list of <code>failureReasons</code> alongside a list of <code>recommendedActions</code> for you to troubleshoot.</p> </li> <li> <p>The agent instructions will not be honored if your agent has only one knowledge base, uses default prompts, has no action group, and user input is disabled.</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, CreateAgentCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, CreateAgentCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // CreateAgentRequest
 *   agentName: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   instruction: "STRING_VALUE",
 *   foundationModel: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   orchestrationType: "DEFAULT" || "CUSTOM_ORCHESTRATION",
 *   customOrchestration: { // CustomOrchestration
 *     executor: { // OrchestrationExecutor Union: only one key present
 *       lambda: "STRING_VALUE",
 *     },
 *   },
 *   idleSessionTTLInSeconds: Number("int"),
 *   agentResourceRoleArn: "STRING_VALUE",
 *   customerEncryptionKeyArn: "STRING_VALUE",
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   promptOverrideConfiguration: { // PromptOverrideConfiguration
 *     promptConfigurations: [ // PromptConfigurations // required
 *       { // PromptConfiguration
 *         promptType: "PRE_PROCESSING" || "ORCHESTRATION" || "POST_PROCESSING" || "KNOWLEDGE_BASE_RESPONSE_GENERATION" || "MEMORY_SUMMARIZATION",
 *         promptCreationMode: "DEFAULT" || "OVERRIDDEN",
 *         promptState: "ENABLED" || "DISABLED",
 *         basePromptTemplate: "STRING_VALUE",
 *         inferenceConfiguration: { // InferenceConfiguration
 *           temperature: Number("float"),
 *           topP: Number("float"),
 *           topK: Number("int"),
 *           maximumLength: Number("int"),
 *           stopSequences: [ // StopSequences
 *             "STRING_VALUE",
 *           ],
 *         },
 *         parserMode: "DEFAULT" || "OVERRIDDEN",
 *         foundationModel: "STRING_VALUE",
 *         additionalModelRequestFields: "DOCUMENT_VALUE",
 *       },
 *     ],
 *     overrideLambda: "STRING_VALUE",
 *   },
 *   guardrailConfiguration: { // GuardrailConfiguration
 *     guardrailIdentifier: "STRING_VALUE",
 *     guardrailVersion: "STRING_VALUE",
 *   },
 *   memoryConfiguration: { // MemoryConfiguration
 *     enabledMemoryTypes: [ // EnabledMemoryTypes // required
 *       "SESSION_SUMMARY",
 *     ],
 *     storageDays: Number("int"),
 *     sessionSummaryConfiguration: { // SessionSummaryConfiguration
 *       maxRecentSessions: Number("int"),
 *     },
 *   },
 *   agentCollaboration: "SUPERVISOR" || "SUPERVISOR_ROUTER" || "DISABLED",
 * };
 * const command = new CreateAgentCommand(input);
 * const response = await client.send(command);
 * // { // CreateAgentResponse
 * //   agent: { // Agent
 * //     agentId: "STRING_VALUE", // required
 * //     agentName: "STRING_VALUE", // required
 * //     agentArn: "STRING_VALUE", // required
 * //     agentVersion: "STRING_VALUE", // required
 * //     clientToken: "STRING_VALUE",
 * //     instruction: "STRING_VALUE",
 * //     agentStatus: "CREATING" || "PREPARING" || "PREPARED" || "NOT_PREPARED" || "DELETING" || "FAILED" || "VERSIONING" || "UPDATING", // required
 * //     foundationModel: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     orchestrationType: "DEFAULT" || "CUSTOM_ORCHESTRATION",
 * //     customOrchestration: { // CustomOrchestration
 * //       executor: { // OrchestrationExecutor Union: only one key present
 * //         lambda: "STRING_VALUE",
 * //       },
 * //     },
 * //     idleSessionTTLInSeconds: Number("int"), // required
 * //     agentResourceRoleArn: "STRING_VALUE", // required
 * //     customerEncryptionKeyArn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     preparedAt: new Date("TIMESTAMP"),
 * //     failureReasons: [ // FailureReasons
 * //       "STRING_VALUE",
 * //     ],
 * //     recommendedActions: [ // RecommendedActions
 * //       "STRING_VALUE",
 * //     ],
 * //     promptOverrideConfiguration: { // PromptOverrideConfiguration
 * //       promptConfigurations: [ // PromptConfigurations // required
 * //         { // PromptConfiguration
 * //           promptType: "PRE_PROCESSING" || "ORCHESTRATION" || "POST_PROCESSING" || "KNOWLEDGE_BASE_RESPONSE_GENERATION" || "MEMORY_SUMMARIZATION",
 * //           promptCreationMode: "DEFAULT" || "OVERRIDDEN",
 * //           promptState: "ENABLED" || "DISABLED",
 * //           basePromptTemplate: "STRING_VALUE",
 * //           inferenceConfiguration: { // InferenceConfiguration
 * //             temperature: Number("float"),
 * //             topP: Number("float"),
 * //             topK: Number("int"),
 * //             maximumLength: Number("int"),
 * //             stopSequences: [ // StopSequences
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           parserMode: "DEFAULT" || "OVERRIDDEN",
 * //           foundationModel: "STRING_VALUE",
 * //           additionalModelRequestFields: "DOCUMENT_VALUE",
 * //         },
 * //       ],
 * //       overrideLambda: "STRING_VALUE",
 * //     },
 * //     guardrailConfiguration: { // GuardrailConfiguration
 * //       guardrailIdentifier: "STRING_VALUE",
 * //       guardrailVersion: "STRING_VALUE",
 * //     },
 * //     memoryConfiguration: { // MemoryConfiguration
 * //       enabledMemoryTypes: [ // EnabledMemoryTypes // required
 * //         "SESSION_SUMMARY",
 * //       ],
 * //       storageDays: Number("int"),
 * //       sessionSummaryConfiguration: { // SessionSummaryConfiguration
 * //         maxRecentSessions: Number("int"),
 * //       },
 * //     },
 * //     agentCollaboration: "SUPERVISOR" || "SUPERVISOR_ROUTER" || "DISABLED",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAgentCommandInput - {@link CreateAgentCommandInput}
 * @returns {@link CreateAgentCommandOutput}
 * @see {@link CreateAgentCommandInput} for command's `input` shape.
 * @see {@link CreateAgentCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
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
export class CreateAgentCommand extends $Command
  .classBuilder<
    CreateAgentCommandInput,
    CreateAgentCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "CreateAgent", {})
  .n("BedrockAgentClient", "CreateAgentCommand")
  .f(CreateAgentRequestFilterSensitiveLog, CreateAgentResponseFilterSensitiveLog)
  .ser(se_CreateAgentCommand)
  .de(de_CreateAgentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAgentRequest;
      output: CreateAgentResponse;
    };
    sdk: {
      input: CreateAgentCommandInput;
      output: CreateAgentCommandOutput;
    };
  };
}
