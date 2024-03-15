// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetAgentVersionRequest,
  GetAgentVersionResponse,
  GetAgentVersionResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetAgentVersionCommand, se_GetAgentVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAgentVersionCommand}.
 */
export interface GetAgentVersionCommandInput extends GetAgentVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetAgentVersionCommand}.
 */
export interface GetAgentVersionCommandOutput extends GetAgentVersionResponse, __MetadataBearer {}

/**
 * Gets an Agent version for existing Amazon Bedrock Agent
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, GetAgentVersionCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, GetAgentVersionCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // GetAgentVersionRequest
 *   agentId: "STRING_VALUE", // required
 *   agentVersion: "STRING_VALUE", // required
 * };
 * const command = new GetAgentVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetAgentVersionResponse
 * //   agentVersion: { // AgentVersion
 * //     agentId: "STRING_VALUE", // required
 * //     agentName: "STRING_VALUE", // required
 * //     agentArn: "STRING_VALUE", // required
 * //     version: "STRING_VALUE", // required
 * //     instruction: "STRING_VALUE",
 * //     agentStatus: "CREATING" || "PREPARING" || "PREPARED" || "NOT_PREPARED" || "DELETING" || "FAILED" || "VERSIONING" || "UPDATING", // required
 * //     foundationModel: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     idleSessionTTLInSeconds: Number("int"), // required
 * //     agentResourceRoleArn: "STRING_VALUE", // required
 * //     customerEncryptionKeyArn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
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
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAgentVersionCommandInput - {@link GetAgentVersionCommandInput}
 * @returns {@link GetAgentVersionCommandOutput}
 * @see {@link GetAgentVersionCommandInput} for command's `input` shape.
 * @see {@link GetAgentVersionCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception is thrown when a request is denied per access permissions
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
export class GetAgentVersionCommand extends $Command
  .classBuilder<
    GetAgentVersionCommandInput,
    GetAgentVersionCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "GetAgentVersion", {})
  .n("BedrockAgentClient", "GetAgentVersionCommand")
  .f(void 0, GetAgentVersionResponseFilterSensitiveLog)
  .ser(se_GetAgentVersionCommand)
  .de(de_GetAgentVersionCommand)
  .build() {}
