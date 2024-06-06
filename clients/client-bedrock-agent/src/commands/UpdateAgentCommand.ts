// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateAgentRequest,
  UpdateAgentRequestFilterSensitiveLog,
  UpdateAgentResponse,
  UpdateAgentResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateAgentCommand, se_UpdateAgentCommand } from "../protocols/Aws_restJson1";

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
 * const client = new BedrockAgentClient(config);
 * const input = { // UpdateAgentRequest
 *   agentId: "STRING_VALUE", // required
 *   agentName: "STRING_VALUE", // required
 *   instruction: "STRING_VALUE",
 *   foundationModel: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   idleSessionTTLInSeconds: Number("int"),
 *   agentResourceRoleArn: "STRING_VALUE", // required
 *   customerEncryptionKeyArn: "STRING_VALUE",
 *   promptOverrideConfiguration: { // PromptOverrideConfiguration
 *     promptConfigurations: [ // PromptConfigurations // required
 *       { // PromptConfiguration
 *         promptType: "PRE_PROCESSING" || "ORCHESTRATION" || "POST_PROCESSING" || "KNOWLEDGE_BASE_RESPONSE_GENERATION",
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
 *       },
 *     ],
 *     overrideLambda: "STRING_VALUE",
 *   },
 *   guardrailConfiguration: { // GuardrailConfiguration
 *     guardrailIdentifier: "STRING_VALUE",
 *     guardrailVersion: "STRING_VALUE",
 *   },
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
 * //           promptType: "PRE_PROCESSING" || "ORCHESTRATION" || "POST_PROCESSING" || "KNOWLEDGE_BASE_RESPONSE_GENERATION",
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
 * //         },
 * //       ],
 * //       overrideLambda: "STRING_VALUE",
 * //     },
 * //     guardrailConfiguration: { // GuardrailConfiguration
 * //       guardrailIdentifier: "STRING_VALUE",
 * //       guardrailVersion: "STRING_VALUE",
 * //     },
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "UpdateAgent", {})
  .n("BedrockAgentClient", "UpdateAgentCommand")
  .f(UpdateAgentRequestFilterSensitiveLog, UpdateAgentResponseFilterSensitiveLog)
  .ser(se_UpdateAgentCommand)
  .de(de_UpdateAgentCommand)
  .build() {}
