// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateAgentRequest, UpdateAgentResponse } from "../models/models_0";
import { UpdateAgent } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAgentCommand}.
 */
export interface UpdateAgentCommandInput extends UpdateAgentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAgentCommand}.
 */
export interface UpdateAgentCommandOutput extends UpdateAgentResponse, __MetadataBearer {}

/**
 * <p>Updates the configuration of an agent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, UpdateAgentCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, UpdateAgentCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // UpdateAgentRequest
 *   agentId: "STRING_VALUE", // required
 *   agentName: "STRING_VALUE", // required
 *   instruction: "STRING_VALUE",
 *   foundationModel: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   orchestrationType: "DEFAULT" || "CUSTOM_ORCHESTRATION",
 *   customOrchestration: { // CustomOrchestration
 *     executor: { // OrchestrationExecutor Union: only one key present
 *       lambda: "STRING_VALUE",
 *     },
 *   },
 *   idleSessionTTLInSeconds: Number("int"),
 *   agentResourceRoleArn: "STRING_VALUE", // required
 *   customerEncryptionKeyArn: "STRING_VALUE",
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
 * const command = new UpdateAgentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAgentResponse
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
 * @param UpdateAgentCommandInput - {@link UpdateAgentCommandInput}
 * @returns {@link UpdateAgentCommandOutput}
 * @see {@link UpdateAgentCommandInput} for command's `input` shape.
 * @see {@link UpdateAgentCommandOutput} for command's `response` shape.
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
export class UpdateAgentCommand extends $Command
  .classBuilder<
    UpdateAgentCommandInput,
    UpdateAgentCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "UpdateAgent", {})
  .n("BedrockAgentClient", "UpdateAgentCommand")
  .sc(UpdateAgent)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAgentRequest;
      output: UpdateAgentResponse;
    };
    sdk: {
      input: UpdateAgentCommandInput;
      output: UpdateAgentCommandOutput;
    };
  };
}
