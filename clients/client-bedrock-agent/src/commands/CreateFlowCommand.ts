// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateFlowRequest,
  CreateFlowRequestFilterSensitiveLog,
  CreateFlowResponse,
  CreateFlowResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateFlowCommand, se_CreateFlowCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFlowCommand}.
 */
export interface CreateFlowCommandInput extends CreateFlowRequest {}
/**
 * @public
 *
 * The output of {@link CreateFlowCommand}.
 */
export interface CreateFlowCommandOutput extends CreateFlowResponse, __MetadataBearer {}

/**
 * <p>Creates a prompt flow that you can use to send an input through various steps to yield an output. Configure nodes, each of which corresponds to a step of the flow, and create connections between the nodes to create paths to different outputs. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-how-it-works.html">How it works</a> and <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-create.html">Create a flow in Amazon Bedrock</a> in the Amazon Bedrock User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, CreateFlowCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, CreateFlowCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // CreateFlowRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   executionRoleArn: "STRING_VALUE", // required
 *   customerEncryptionKeyArn: "STRING_VALUE",
 *   definition: { // FlowDefinition
 *     nodes: [ // FlowNodes
 *       { // FlowNode
 *         name: "STRING_VALUE", // required
 *         type: "Input" || "Output" || "KnowledgeBase" || "Condition" || "Lex" || "Prompt" || "LambdaFunction" || "Storage" || "Agent" || "Retrieval" || "Iterator" || "Collector", // required
 *         configuration: { // FlowNodeConfiguration Union: only one key present
 *           input: {},
 *           output: {},
 *           knowledgeBase: { // KnowledgeBaseFlowNodeConfiguration
 *             knowledgeBaseId: "STRING_VALUE", // required
 *             modelId: "STRING_VALUE",
 *             guardrailConfiguration: { // GuardrailConfiguration
 *               guardrailIdentifier: "STRING_VALUE",
 *               guardrailVersion: "STRING_VALUE",
 *             },
 *           },
 *           condition: { // ConditionFlowNodeConfiguration
 *             conditions: [ // FlowConditions // required
 *               { // FlowCondition
 *                 name: "STRING_VALUE", // required
 *                 expression: "STRING_VALUE",
 *               },
 *             ],
 *           },
 *           lex: { // LexFlowNodeConfiguration
 *             botAliasArn: "STRING_VALUE", // required
 *             localeId: "STRING_VALUE", // required
 *           },
 *           prompt: { // PromptFlowNodeConfiguration
 *             sourceConfiguration: { // PromptFlowNodeSourceConfiguration Union: only one key present
 *               resource: { // PromptFlowNodeResourceConfiguration
 *                 promptArn: "STRING_VALUE", // required
 *               },
 *               inline: { // PromptFlowNodeInlineConfiguration
 *                 templateType: "TEXT" || "CHAT", // required
 *                 templateConfiguration: { // PromptTemplateConfiguration Union: only one key present
 *                   text: { // TextPromptTemplateConfiguration
 *                     text: "STRING_VALUE", // required
 *                     cachePoint: { // CachePointBlock
 *                       type: "default", // required
 *                     },
 *                     inputVariables: [ // PromptInputVariablesList
 *                       { // PromptInputVariable
 *                         name: "STRING_VALUE",
 *                       },
 *                     ],
 *                   },
 *                   chat: { // ChatPromptTemplateConfiguration
 *                     messages: [ // Messages // required
 *                       { // Message
 *                         role: "user" || "assistant", // required
 *                         content: [ // ContentBlocks // required
 *                           { // ContentBlock Union: only one key present
 *                             text: "STRING_VALUE",
 *                             cachePoint: {
 *                               type: "default", // required
 *                             },
 *                           },
 *                         ],
 *                       },
 *                     ],
 *                     system: [ // SystemContentBlocks
 *                       { // SystemContentBlock Union: only one key present
 *                         text: "STRING_VALUE",
 *                         cachePoint: "<CachePointBlock>",
 *                       },
 *                     ],
 *                     inputVariables: [
 *                       {
 *                         name: "STRING_VALUE",
 *                       },
 *                     ],
 *                     toolConfiguration: { // ToolConfiguration
 *                       tools: [ // Tools // required
 *                         { // Tool Union: only one key present
 *                           toolSpec: { // ToolSpecification
 *                             name: "STRING_VALUE", // required
 *                             description: "STRING_VALUE",
 *                             inputSchema: { // ToolInputSchema Union: only one key present
 *                               json: "DOCUMENT_VALUE",
 *                             },
 *                           },
 *                           cachePoint: "<CachePointBlock>",
 *                         },
 *                       ],
 *                       toolChoice: { // ToolChoice Union: only one key present
 *                         auto: {},
 *                         any: {},
 *                         tool: { // SpecificToolChoice
 *                           name: "STRING_VALUE", // required
 *                         },
 *                       },
 *                     },
 *                   },
 *                 },
 *                 modelId: "STRING_VALUE", // required
 *                 inferenceConfiguration: { // PromptInferenceConfiguration Union: only one key present
 *                   text: { // PromptModelInferenceConfiguration
 *                     temperature: Number("float"),
 *                     topP: Number("float"),
 *                     maxTokens: Number("int"),
 *                     stopSequences: [ // StopSequences
 *                       "STRING_VALUE",
 *                     ],
 *                   },
 *                 },
 *                 additionalModelRequestFields: "DOCUMENT_VALUE",
 *               },
 *             },
 *             guardrailConfiguration: {
 *               guardrailIdentifier: "STRING_VALUE",
 *               guardrailVersion: "STRING_VALUE",
 *             },
 *           },
 *           lambdaFunction: { // LambdaFunctionFlowNodeConfiguration
 *             lambdaArn: "STRING_VALUE", // required
 *           },
 *           storage: { // StorageFlowNodeConfiguration
 *             serviceConfiguration: { // StorageFlowNodeServiceConfiguration Union: only one key present
 *               s3: { // StorageFlowNodeS3Configuration
 *                 bucketName: "STRING_VALUE", // required
 *               },
 *             },
 *           },
 *           agent: { // AgentFlowNodeConfiguration
 *             agentAliasArn: "STRING_VALUE", // required
 *           },
 *           retrieval: { // RetrievalFlowNodeConfiguration
 *             serviceConfiguration: { // RetrievalFlowNodeServiceConfiguration Union: only one key present
 *               s3: { // RetrievalFlowNodeS3Configuration
 *                 bucketName: "STRING_VALUE", // required
 *               },
 *             },
 *           },
 *           iterator: {},
 *           collector: {},
 *         },
 *         inputs: [ // FlowNodeInputs
 *           { // FlowNodeInput
 *             name: "STRING_VALUE", // required
 *             type: "String" || "Number" || "Boolean" || "Object" || "Array", // required
 *             expression: "STRING_VALUE", // required
 *           },
 *         ],
 *         outputs: [ // FlowNodeOutputs
 *           { // FlowNodeOutput
 *             name: "STRING_VALUE", // required
 *             type: "String" || "Number" || "Boolean" || "Object" || "Array", // required
 *           },
 *         ],
 *       },
 *     ],
 *     connections: [ // FlowConnections
 *       { // FlowConnection
 *         type: "Data" || "Conditional", // required
 *         name: "STRING_VALUE", // required
 *         source: "STRING_VALUE", // required
 *         target: "STRING_VALUE", // required
 *         configuration: { // FlowConnectionConfiguration Union: only one key present
 *           data: { // FlowDataConnectionConfiguration
 *             sourceOutput: "STRING_VALUE", // required
 *             targetInput: "STRING_VALUE", // required
 *           },
 *           conditional: { // FlowConditionalConnectionConfiguration
 *             condition: "STRING_VALUE", // required
 *           },
 *         },
 *       },
 *     ],
 *   },
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateFlowCommand(input);
 * const response = await client.send(command);
 * // { // CreateFlowResponse
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   executionRoleArn: "STRING_VALUE", // required
 * //   customerEncryptionKeyArn: "STRING_VALUE",
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   status: "Failed" || "Prepared" || "Preparing" || "NotPrepared", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   version: "STRING_VALUE", // required
 * //   definition: { // FlowDefinition
 * //     nodes: [ // FlowNodes
 * //       { // FlowNode
 * //         name: "STRING_VALUE", // required
 * //         type: "Input" || "Output" || "KnowledgeBase" || "Condition" || "Lex" || "Prompt" || "LambdaFunction" || "Storage" || "Agent" || "Retrieval" || "Iterator" || "Collector", // required
 * //         configuration: { // FlowNodeConfiguration Union: only one key present
 * //           input: {},
 * //           output: {},
 * //           knowledgeBase: { // KnowledgeBaseFlowNodeConfiguration
 * //             knowledgeBaseId: "STRING_VALUE", // required
 * //             modelId: "STRING_VALUE",
 * //             guardrailConfiguration: { // GuardrailConfiguration
 * //               guardrailIdentifier: "STRING_VALUE",
 * //               guardrailVersion: "STRING_VALUE",
 * //             },
 * //           },
 * //           condition: { // ConditionFlowNodeConfiguration
 * //             conditions: [ // FlowConditions // required
 * //               { // FlowCondition
 * //                 name: "STRING_VALUE", // required
 * //                 expression: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //           lex: { // LexFlowNodeConfiguration
 * //             botAliasArn: "STRING_VALUE", // required
 * //             localeId: "STRING_VALUE", // required
 * //           },
 * //           prompt: { // PromptFlowNodeConfiguration
 * //             sourceConfiguration: { // PromptFlowNodeSourceConfiguration Union: only one key present
 * //               resource: { // PromptFlowNodeResourceConfiguration
 * //                 promptArn: "STRING_VALUE", // required
 * //               },
 * //               inline: { // PromptFlowNodeInlineConfiguration
 * //                 templateType: "TEXT" || "CHAT", // required
 * //                 templateConfiguration: { // PromptTemplateConfiguration Union: only one key present
 * //                   text: { // TextPromptTemplateConfiguration
 * //                     text: "STRING_VALUE", // required
 * //                     cachePoint: { // CachePointBlock
 * //                       type: "default", // required
 * //                     },
 * //                     inputVariables: [ // PromptInputVariablesList
 * //                       { // PromptInputVariable
 * //                         name: "STRING_VALUE",
 * //                       },
 * //                     ],
 * //                   },
 * //                   chat: { // ChatPromptTemplateConfiguration
 * //                     messages: [ // Messages // required
 * //                       { // Message
 * //                         role: "user" || "assistant", // required
 * //                         content: [ // ContentBlocks // required
 * //                           { // ContentBlock Union: only one key present
 * //                             text: "STRING_VALUE",
 * //                             cachePoint: {
 * //                               type: "default", // required
 * //                             },
 * //                           },
 * //                         ],
 * //                       },
 * //                     ],
 * //                     system: [ // SystemContentBlocks
 * //                       { // SystemContentBlock Union: only one key present
 * //                         text: "STRING_VALUE",
 * //                         cachePoint: "<CachePointBlock>",
 * //                       },
 * //                     ],
 * //                     inputVariables: [
 * //                       {
 * //                         name: "STRING_VALUE",
 * //                       },
 * //                     ],
 * //                     toolConfiguration: { // ToolConfiguration
 * //                       tools: [ // Tools // required
 * //                         { // Tool Union: only one key present
 * //                           toolSpec: { // ToolSpecification
 * //                             name: "STRING_VALUE", // required
 * //                             description: "STRING_VALUE",
 * //                             inputSchema: { // ToolInputSchema Union: only one key present
 * //                               json: "DOCUMENT_VALUE",
 * //                             },
 * //                           },
 * //                           cachePoint: "<CachePointBlock>",
 * //                         },
 * //                       ],
 * //                       toolChoice: { // ToolChoice Union: only one key present
 * //                         auto: {},
 * //                         any: {},
 * //                         tool: { // SpecificToolChoice
 * //                           name: "STRING_VALUE", // required
 * //                         },
 * //                       },
 * //                     },
 * //                   },
 * //                 },
 * //                 modelId: "STRING_VALUE", // required
 * //                 inferenceConfiguration: { // PromptInferenceConfiguration Union: only one key present
 * //                   text: { // PromptModelInferenceConfiguration
 * //                     temperature: Number("float"),
 * //                     topP: Number("float"),
 * //                     maxTokens: Number("int"),
 * //                     stopSequences: [ // StopSequences
 * //                       "STRING_VALUE",
 * //                     ],
 * //                   },
 * //                 },
 * //                 additionalModelRequestFields: "DOCUMENT_VALUE",
 * //               },
 * //             },
 * //             guardrailConfiguration: {
 * //               guardrailIdentifier: "STRING_VALUE",
 * //               guardrailVersion: "STRING_VALUE",
 * //             },
 * //           },
 * //           lambdaFunction: { // LambdaFunctionFlowNodeConfiguration
 * //             lambdaArn: "STRING_VALUE", // required
 * //           },
 * //           storage: { // StorageFlowNodeConfiguration
 * //             serviceConfiguration: { // StorageFlowNodeServiceConfiguration Union: only one key present
 * //               s3: { // StorageFlowNodeS3Configuration
 * //                 bucketName: "STRING_VALUE", // required
 * //               },
 * //             },
 * //           },
 * //           agent: { // AgentFlowNodeConfiguration
 * //             agentAliasArn: "STRING_VALUE", // required
 * //           },
 * //           retrieval: { // RetrievalFlowNodeConfiguration
 * //             serviceConfiguration: { // RetrievalFlowNodeServiceConfiguration Union: only one key present
 * //               s3: { // RetrievalFlowNodeS3Configuration
 * //                 bucketName: "STRING_VALUE", // required
 * //               },
 * //             },
 * //           },
 * //           iterator: {},
 * //           collector: {},
 * //         },
 * //         inputs: [ // FlowNodeInputs
 * //           { // FlowNodeInput
 * //             name: "STRING_VALUE", // required
 * //             type: "String" || "Number" || "Boolean" || "Object" || "Array", // required
 * //             expression: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         outputs: [ // FlowNodeOutputs
 * //           { // FlowNodeOutput
 * //             name: "STRING_VALUE", // required
 * //             type: "String" || "Number" || "Boolean" || "Object" || "Array", // required
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     connections: [ // FlowConnections
 * //       { // FlowConnection
 * //         type: "Data" || "Conditional", // required
 * //         name: "STRING_VALUE", // required
 * //         source: "STRING_VALUE", // required
 * //         target: "STRING_VALUE", // required
 * //         configuration: { // FlowConnectionConfiguration Union: only one key present
 * //           data: { // FlowDataConnectionConfiguration
 * //             sourceOutput: "STRING_VALUE", // required
 * //             targetInput: "STRING_VALUE", // required
 * //           },
 * //           conditional: { // FlowConditionalConnectionConfiguration
 * //             condition: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateFlowCommandInput - {@link CreateFlowCommandInput}
 * @returns {@link CreateFlowCommandOutput}
 * @see {@link CreateFlowCommandInput} for command's `input` shape.
 * @see {@link CreateFlowCommandOutput} for command's `response` shape.
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
export class CreateFlowCommand extends $Command
  .classBuilder<
    CreateFlowCommandInput,
    CreateFlowCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "CreateFlow", {})
  .n("BedrockAgentClient", "CreateFlowCommand")
  .f(CreateFlowRequestFilterSensitiveLog, CreateFlowResponseFilterSensitiveLog)
  .ser(se_CreateFlowCommand)
  .de(de_CreateFlowCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFlowRequest;
      output: CreateFlowResponse;
    };
    sdk: {
      input: CreateFlowCommandInput;
      output: CreateFlowCommandOutput;
    };
  };
}
