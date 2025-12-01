// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetFlowRequest } from "../models/models_0";
import type { GetFlowResponse } from "../models/models_1";
import { GetFlow } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFlowCommand}.
 */
export interface GetFlowCommandInput extends GetFlowRequest {}
/**
 * @public
 *
 * The output of {@link GetFlowCommand}.
 */
export interface GetFlowCommandOutput extends GetFlowResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-manage.html">Manage a flow in Amazon Bedrock</a> in the Amazon Bedrock User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, GetFlowCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, GetFlowCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // GetFlowRequest
 *   flowIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetFlowCommand(input);
 * const response = await client.send(command);
 * // { // GetFlowResponse
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
 * //         type: "Input" || "Output" || "KnowledgeBase" || "Condition" || "Lex" || "Prompt" || "LambdaFunction" || "Storage" || "Agent" || "Retrieval" || "Iterator" || "Collector" || "InlineCode" || "Loop" || "LoopInput" || "LoopController", // required
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
 * //             numberOfResults: Number("int"),
 * //             promptTemplate: { // KnowledgeBasePromptTemplate
 * //               textPromptTemplate: "STRING_VALUE",
 * //             },
 * //             inferenceConfiguration: { // PromptInferenceConfiguration Union: only one key present
 * //               text: { // PromptModelInferenceConfiguration
 * //                 temperature: Number("float"),
 * //                 topP: Number("float"),
 * //                 maxTokens: Number("int"),
 * //                 stopSequences: [ // StopSequences
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             },
 * //             rerankingConfiguration: { // VectorSearchRerankingConfiguration
 * //               type: "BEDROCK_RERANKING_MODEL", // required
 * //               bedrockRerankingConfiguration: { // VectorSearchBedrockRerankingConfiguration
 * //                 modelConfiguration: { // VectorSearchBedrockRerankingModelConfiguration
 * //                   modelArn: "STRING_VALUE", // required
 * //                   additionalModelRequestFields: { // AdditionalModelRequestFields
 * //                     "<keys>": "DOCUMENT_VALUE",
 * //                   },
 * //                 },
 * //                 numberOfRerankedResults: Number("int"),
 * //                 metadataConfiguration: { // MetadataConfigurationForReranking
 * //                   selectionMode: "SELECTIVE" || "ALL", // required
 * //                   selectiveModeConfiguration: { // RerankingMetadataSelectiveModeConfiguration Union: only one key present
 * //                     fieldsToInclude: [ // FieldsForReranking
 * //                       { // FieldForReranking
 * //                         fieldName: "STRING_VALUE", // required
 * //                       },
 * //                     ],
 * //                     fieldsToExclude: [
 * //                       {
 * //                         fieldName: "STRING_VALUE", // required
 * //                       },
 * //                     ],
 * //                   },
 * //                 },
 * //               },
 * //             },
 * //             orchestrationConfiguration: { // KnowledgeBaseOrchestrationConfiguration
 * //               promptTemplate: {
 * //                 textPromptTemplate: "STRING_VALUE",
 * //               },
 * //               inferenceConfig: {//  Union: only one key present
 * //                 text: {
 * //                   temperature: Number("float"),
 * //                   topP: Number("float"),
 * //                   maxTokens: Number("int"),
 * //                   stopSequences: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
 * //               additionalModelRequestFields: {
 * //                 "<keys>": "DOCUMENT_VALUE",
 * //               },
 * //               performanceConfig: { // PerformanceConfiguration
 * //                 latency: "standard" || "optimized",
 * //               },
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
 * //                 inferenceConfiguration: "<PromptInferenceConfiguration>",
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
 * //           inlineCode: { // InlineCodeFlowNodeConfiguration
 * //             code: "STRING_VALUE", // required
 * //             language: "Python_3", // required
 * //           },
 * //           loop: { // LoopFlowNodeConfiguration
 * //             definition: {
 * //               nodes: [
 * //                 {
 * //                   name: "STRING_VALUE", // required
 * //                   type: "Input" || "Output" || "KnowledgeBase" || "Condition" || "Lex" || "Prompt" || "LambdaFunction" || "Storage" || "Agent" || "Retrieval" || "Iterator" || "Collector" || "InlineCode" || "Loop" || "LoopInput" || "LoopController", // required
 * //                   configuration: {//  Union: only one key present
 * //                     input: {},
 * //                     output: {},
 * //                     knowledgeBase: {
 * //                       knowledgeBaseId: "STRING_VALUE", // required
 * //                       modelId: "STRING_VALUE",
 * //                       guardrailConfiguration: {
 * //                         guardrailIdentifier: "STRING_VALUE",
 * //                         guardrailVersion: "STRING_VALUE",
 * //                       },
 * //                       numberOfResults: Number("int"),
 * //                       promptTemplate: "<KnowledgeBasePromptTemplate>",
 * //                       inferenceConfiguration: "<PromptInferenceConfiguration>",
 * //                       rerankingConfiguration: {
 * //                         type: "BEDROCK_RERANKING_MODEL", // required
 * //                         bedrockRerankingConfiguration: {
 * //                           modelConfiguration: {
 * //                             modelArn: "STRING_VALUE", // required
 * //                             additionalModelRequestFields: "<AdditionalModelRequestFields>",
 * //                           },
 * //                           numberOfRerankedResults: Number("int"),
 * //                           metadataConfiguration: {
 * //                             selectionMode: "SELECTIVE" || "ALL", // required
 * //                             selectiveModeConfiguration: {//  Union: only one key present
 * //                               fieldsToInclude: [
 * //                                 {
 * //                                   fieldName: "STRING_VALUE", // required
 * //                                 },
 * //                               ],
 * //                               fieldsToExclude: [
 * //                                 {
 * //                                   fieldName: "STRING_VALUE", // required
 * //                                 },
 * //                               ],
 * //                             },
 * //                           },
 * //                         },
 * //                       },
 * //                       orchestrationConfiguration: {
 * //                         promptTemplate: "<KnowledgeBasePromptTemplate>",
 * //                         inferenceConfig: "<PromptInferenceConfiguration>",
 * //                         additionalModelRequestFields: "<AdditionalModelRequestFields>",
 * //                         performanceConfig: {
 * //                           latency: "standard" || "optimized",
 * //                         },
 * //                       },
 * //                     },
 * //                     condition: {
 * //                       conditions: [ // required
 * //                         {
 * //                           name: "STRING_VALUE", // required
 * //                           expression: "STRING_VALUE",
 * //                         },
 * //                       ],
 * //                     },
 * //                     lex: {
 * //                       botAliasArn: "STRING_VALUE", // required
 * //                       localeId: "STRING_VALUE", // required
 * //                     },
 * //                     prompt: {
 * //                       sourceConfiguration: {//  Union: only one key present
 * //                         resource: {
 * //                           promptArn: "STRING_VALUE", // required
 * //                         },
 * //                         inline: {
 * //                           templateType: "TEXT" || "CHAT", // required
 * //                           templateConfiguration: {//  Union: only one key present
 * //                             text: {
 * //                               text: "STRING_VALUE", // required
 * //                               cachePoint: "<CachePointBlock>",
 * //                               inputVariables: [
 * //                                 {
 * //                                   name: "STRING_VALUE",
 * //                                 },
 * //                               ],
 * //                             },
 * //                             chat: {
 * //                               messages: [ // required
 * //                                 {
 * //                                   role: "user" || "assistant", // required
 * //                                   content: [ // required
 * //                                     {//  Union: only one key present
 * //                                       text: "STRING_VALUE",
 * //                                       cachePoint: "<CachePointBlock>",
 * //                                     },
 * //                                   ],
 * //                                 },
 * //                               ],
 * //                               system: [
 * //                                 {//  Union: only one key present
 * //                                   text: "STRING_VALUE",
 * //                                   cachePoint: "<CachePointBlock>",
 * //                                 },
 * //                               ],
 * //                               inputVariables: [
 * //                                 {
 * //                                   name: "STRING_VALUE",
 * //                                 },
 * //                               ],
 * //                               toolConfiguration: {
 * //                                 tools: [ // required
 * //                                   {//  Union: only one key present
 * //                                     toolSpec: {
 * //                                       name: "STRING_VALUE", // required
 * //                                       description: "STRING_VALUE",
 * //                                       inputSchema: {//  Union: only one key present
 * //                                         json: "DOCUMENT_VALUE",
 * //                                       },
 * //                                     },
 * //                                     cachePoint: "<CachePointBlock>",
 * //                                   },
 * //                                 ],
 * //                                 toolChoice: {//  Union: only one key present
 * //                                   auto: {},
 * //                                   any: {},
 * //                                   tool: {
 * //                                     name: "STRING_VALUE", // required
 * //                                   },
 * //                                 },
 * //                               },
 * //                             },
 * //                           },
 * //                           modelId: "STRING_VALUE", // required
 * //                           inferenceConfiguration: "<PromptInferenceConfiguration>",
 * //                           additionalModelRequestFields: "DOCUMENT_VALUE",
 * //                         },
 * //                       },
 * //                       guardrailConfiguration: {
 * //                         guardrailIdentifier: "STRING_VALUE",
 * //                         guardrailVersion: "STRING_VALUE",
 * //                       },
 * //                     },
 * //                     lambdaFunction: {
 * //                       lambdaArn: "STRING_VALUE", // required
 * //                     },
 * //                     storage: {
 * //                       serviceConfiguration: {//  Union: only one key present
 * //                         s3: {
 * //                           bucketName: "STRING_VALUE", // required
 * //                         },
 * //                       },
 * //                     },
 * //                     agent: {
 * //                       agentAliasArn: "STRING_VALUE", // required
 * //                     },
 * //                     retrieval: {
 * //                       serviceConfiguration: {//  Union: only one key present
 * //                         s3: {
 * //                           bucketName: "STRING_VALUE", // required
 * //                         },
 * //                       },
 * //                     },
 * //                     iterator: {},
 * //                     collector: {},
 * //                     inlineCode: {
 * //                       code: "STRING_VALUE", // required
 * //                       language: "Python_3", // required
 * //                     },
 * //                     loop: {
 * //                       definition: "<FlowDefinition>", // required
 * //                     },
 * //                     loopInput: {},
 * //                     loopController: { // LoopControllerFlowNodeConfiguration
 * //                       continueCondition: "<FlowCondition>", // required
 * //                       maxIterations: Number("int"),
 * //                     },
 * //                   },
 * //                   inputs: [ // FlowNodeInputs
 * //                     { // FlowNodeInput
 * //                       name: "STRING_VALUE", // required
 * //                       type: "String" || "Number" || "Boolean" || "Object" || "Array", // required
 * //                       expression: "STRING_VALUE", // required
 * //                       category: "LoopCondition" || "ReturnValueToLoopStart" || "ExitLoop",
 * //                     },
 * //                   ],
 * //                   outputs: [ // FlowNodeOutputs
 * //                     { // FlowNodeOutput
 * //                       name: "STRING_VALUE", // required
 * //                       type: "String" || "Number" || "Boolean" || "Object" || "Array", // required
 * //                     },
 * //                   ],
 * //                 },
 * //               ],
 * //               connections: [ // FlowConnections
 * //                 { // FlowConnection
 * //                   type: "Data" || "Conditional", // required
 * //                   name: "STRING_VALUE", // required
 * //                   source: "STRING_VALUE", // required
 * //                   target: "STRING_VALUE", // required
 * //                   configuration: { // FlowConnectionConfiguration Union: only one key present
 * //                     data: { // FlowDataConnectionConfiguration
 * //                       sourceOutput: "STRING_VALUE", // required
 * //                       targetInput: "STRING_VALUE", // required
 * //                     },
 * //                     conditional: { // FlowConditionalConnectionConfiguration
 * //                       condition: "STRING_VALUE", // required
 * //                     },
 * //                   },
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //           loopInput: {},
 * //           loopController: {
 * //             continueCondition: "<FlowCondition>", // required
 * //             maxIterations: Number("int"),
 * //           },
 * //         },
 * //         inputs: [
 * //           {
 * //             name: "STRING_VALUE", // required
 * //             type: "String" || "Number" || "Boolean" || "Object" || "Array", // required
 * //             expression: "STRING_VALUE", // required
 * //             category: "LoopCondition" || "ReturnValueToLoopStart" || "ExitLoop",
 * //           },
 * //         ],
 * //         outputs: [
 * //           {
 * //             name: "STRING_VALUE", // required
 * //             type: "String" || "Number" || "Boolean" || "Object" || "Array", // required
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     connections: [
 * //       {
 * //         type: "Data" || "Conditional", // required
 * //         name: "STRING_VALUE", // required
 * //         source: "STRING_VALUE", // required
 * //         target: "STRING_VALUE", // required
 * //         configuration: {//  Union: only one key present
 * //           data: {
 * //             sourceOutput: "STRING_VALUE", // required
 * //             targetInput: "STRING_VALUE", // required
 * //           },
 * //           conditional: {
 * //             condition: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   validations: [ // FlowValidations
 * //     { // FlowValidation
 * //       message: "STRING_VALUE", // required
 * //       severity: "Warning" || "Error", // required
 * //       details: { // FlowValidationDetails Union: only one key present
 * //         cyclicConnection: { // CyclicConnectionFlowValidationDetails
 * //           connection: "STRING_VALUE", // required
 * //         },
 * //         duplicateConnections: { // DuplicateConnectionsFlowValidationDetails
 * //           source: "STRING_VALUE", // required
 * //           target: "STRING_VALUE", // required
 * //         },
 * //         duplicateConditionExpression: { // DuplicateConditionExpressionFlowValidationDetails
 * //           node: "STRING_VALUE", // required
 * //           expression: "STRING_VALUE", // required
 * //         },
 * //         unreachableNode: { // UnreachableNodeFlowValidationDetails
 * //           node: "STRING_VALUE", // required
 * //         },
 * //         unknownConnectionSource: { // UnknownConnectionSourceFlowValidationDetails
 * //           connection: "STRING_VALUE", // required
 * //         },
 * //         unknownConnectionSourceOutput: { // UnknownConnectionSourceOutputFlowValidationDetails
 * //           connection: "STRING_VALUE", // required
 * //         },
 * //         unknownConnectionTarget: { // UnknownConnectionTargetFlowValidationDetails
 * //           connection: "STRING_VALUE", // required
 * //         },
 * //         unknownConnectionTargetInput: { // UnknownConnectionTargetInputFlowValidationDetails
 * //           connection: "STRING_VALUE", // required
 * //         },
 * //         unknownConnectionCondition: { // UnknownConnectionConditionFlowValidationDetails
 * //           connection: "STRING_VALUE", // required
 * //         },
 * //         malformedConditionExpression: { // MalformedConditionExpressionFlowValidationDetails
 * //           node: "STRING_VALUE", // required
 * //           condition: "STRING_VALUE", // required
 * //           cause: "STRING_VALUE", // required
 * //         },
 * //         malformedNodeInputExpression: { // MalformedNodeInputExpressionFlowValidationDetails
 * //           node: "STRING_VALUE", // required
 * //           input: "STRING_VALUE", // required
 * //           cause: "STRING_VALUE", // required
 * //         },
 * //         mismatchedNodeInputType: { // MismatchedNodeInputTypeFlowValidationDetails
 * //           node: "STRING_VALUE", // required
 * //           input: "STRING_VALUE", // required
 * //           expectedType: "String" || "Number" || "Boolean" || "Object" || "Array", // required
 * //         },
 * //         mismatchedNodeOutputType: { // MismatchedNodeOutputTypeFlowValidationDetails
 * //           node: "STRING_VALUE", // required
 * //           output: "STRING_VALUE", // required
 * //           expectedType: "String" || "Number" || "Boolean" || "Object" || "Array", // required
 * //         },
 * //         incompatibleConnectionDataType: { // IncompatibleConnectionDataTypeFlowValidationDetails
 * //           connection: "STRING_VALUE", // required
 * //         },
 * //         missingConnectionConfiguration: { // MissingConnectionConfigurationFlowValidationDetails
 * //           connection: "STRING_VALUE", // required
 * //         },
 * //         missingDefaultCondition: { // MissingDefaultConditionFlowValidationDetails
 * //           node: "STRING_VALUE", // required
 * //         },
 * //         missingEndingNodes: {},
 * //         missingNodeConfiguration: { // MissingNodeConfigurationFlowValidationDetails
 * //           node: "STRING_VALUE", // required
 * //         },
 * //         missingNodeInput: { // MissingNodeInputFlowValidationDetails
 * //           node: "STRING_VALUE", // required
 * //           input: "STRING_VALUE", // required
 * //         },
 * //         missingNodeOutput: { // MissingNodeOutputFlowValidationDetails
 * //           node: "STRING_VALUE", // required
 * //           output: "STRING_VALUE", // required
 * //         },
 * //         missingStartingNodes: {},
 * //         multipleNodeInputConnections: { // MultipleNodeInputConnectionsFlowValidationDetails
 * //           node: "STRING_VALUE", // required
 * //           input: "STRING_VALUE", // required
 * //         },
 * //         unfulfilledNodeInput: { // UnfulfilledNodeInputFlowValidationDetails
 * //           node: "STRING_VALUE", // required
 * //           input: "STRING_VALUE", // required
 * //         },
 * //         unsatisfiedConnectionConditions: { // UnsatisfiedConnectionConditionsFlowValidationDetails
 * //           connection: "STRING_VALUE", // required
 * //         },
 * //         unspecified: {},
 * //         unknownNodeInput: { // UnknownNodeInputFlowValidationDetails
 * //           node: "STRING_VALUE", // required
 * //           input: "STRING_VALUE", // required
 * //         },
 * //         unknownNodeOutput: { // UnknownNodeOutputFlowValidationDetails
 * //           node: "STRING_VALUE", // required
 * //           output: "STRING_VALUE", // required
 * //         },
 * //         missingLoopInputNode: { // MissingLoopInputNodeFlowValidationDetails
 * //           loopNode: "STRING_VALUE", // required
 * //         },
 * //         missingLoopControllerNode: { // MissingLoopControllerNodeFlowValidationDetails
 * //           loopNode: "STRING_VALUE", // required
 * //         },
 * //         multipleLoopInputNodes: { // MultipleLoopInputNodesFlowValidationDetails
 * //           loopNode: "STRING_VALUE", // required
 * //         },
 * //         multipleLoopControllerNodes: { // MultipleLoopControllerNodesFlowValidationDetails
 * //           loopNode: "STRING_VALUE", // required
 * //         },
 * //         loopIncompatibleNodeType: { // LoopIncompatibleNodeTypeFlowValidationDetails
 * //           node: "STRING_VALUE", // required
 * //           incompatibleNodeType: "Input" || "Condition" || "Iterator" || "Collector", // required
 * //           incompatibleNodeName: "STRING_VALUE", // required
 * //         },
 * //         invalidLoopBoundary: { // InvalidLoopBoundaryFlowValidationDetails
 * //           connection: "STRING_VALUE", // required
 * //           source: "STRING_VALUE", // required
 * //           target: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       type: "CyclicConnection" || "DuplicateConnections" || "DuplicateConditionExpression" || "UnreachableNode" || "UnknownConnectionSource" || "UnknownConnectionSourceOutput" || "UnknownConnectionTarget" || "UnknownConnectionTargetInput" || "UnknownConnectionCondition" || "MalformedConditionExpression" || "MalformedNodeInputExpression" || "MismatchedNodeInputType" || "MismatchedNodeOutputType" || "IncompatibleConnectionDataType" || "MissingConnectionConfiguration" || "MissingDefaultCondition" || "MissingEndingNodes" || "MissingNodeConfiguration" || "MissingNodeInput" || "MissingNodeOutput" || "MissingStartingNodes" || "MultipleNodeInputConnections" || "UnfulfilledNodeInput" || "UnsatisfiedConnectionConditions" || "Unspecified" || "UnknownNodeInput" || "UnknownNodeOutput" || "MissingLoopInputNode" || "MissingLoopControllerNode" || "MultipleLoopInputNodes" || "MultipleLoopControllerNodes" || "LoopIncompatibleNodeType" || "InvalidLoopBoundary",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetFlowCommandInput - {@link GetFlowCommandInput}
 * @returns {@link GetFlowCommandOutput}
 * @see {@link GetFlowCommandInput} for command's `input` shape.
 * @see {@link GetFlowCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
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
export class GetFlowCommand extends $Command
  .classBuilder<
    GetFlowCommandInput,
    GetFlowCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "GetFlow", {})
  .n("BedrockAgentClient", "GetFlowCommand")
  .sc(GetFlow)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFlowRequest;
      output: GetFlowResponse;
    };
    sdk: {
      input: GetFlowCommandInput;
      output: GetFlowCommandOutput;
    };
  };
}
