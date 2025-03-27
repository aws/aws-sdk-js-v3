// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ValidateFlowDefinitionRequest,
  ValidateFlowDefinitionRequestFilterSensitiveLog,
  ValidateFlowDefinitionResponse,
  ValidateFlowDefinitionResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_ValidateFlowDefinitionCommand, se_ValidateFlowDefinitionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ValidateFlowDefinitionCommand}.
 */
export interface ValidateFlowDefinitionCommandInput extends ValidateFlowDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link ValidateFlowDefinitionCommand}.
 */
export interface ValidateFlowDefinitionCommandOutput extends ValidateFlowDefinitionResponse, __MetadataBearer {}

/**
 * <p>Validates the definition of a flow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, ValidateFlowDefinitionCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, ValidateFlowDefinitionCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // ValidateFlowDefinitionRequest
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
 * };
 * const command = new ValidateFlowDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // ValidateFlowDefinitionResponse
 * //   validations: [ // FlowValidations // required
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
 * //       },
 * //       type: "CyclicConnection" || "DuplicateConnections" || "DuplicateConditionExpression" || "UnreachableNode" || "UnknownConnectionSource" || "UnknownConnectionSourceOutput" || "UnknownConnectionTarget" || "UnknownConnectionTargetInput" || "UnknownConnectionCondition" || "MalformedConditionExpression" || "MalformedNodeInputExpression" || "MismatchedNodeInputType" || "MismatchedNodeOutputType" || "IncompatibleConnectionDataType" || "MissingConnectionConfiguration" || "MissingDefaultCondition" || "MissingEndingNodes" || "MissingNodeConfiguration" || "MissingNodeInput" || "MissingNodeOutput" || "MissingStartingNodes" || "MultipleNodeInputConnections" || "UnfulfilledNodeInput" || "UnsatisfiedConnectionConditions" || "Unspecified" || "UnknownNodeInput" || "UnknownNodeOutput",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ValidateFlowDefinitionCommandInput - {@link ValidateFlowDefinitionCommandInput}
 * @returns {@link ValidateFlowDefinitionCommandOutput}
 * @see {@link ValidateFlowDefinitionCommandInput} for command's `input` shape.
 * @see {@link ValidateFlowDefinitionCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
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
export class ValidateFlowDefinitionCommand extends $Command
  .classBuilder<
    ValidateFlowDefinitionCommandInput,
    ValidateFlowDefinitionCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "ValidateFlowDefinition", {})
  .n("BedrockAgentClient", "ValidateFlowDefinitionCommand")
  .f(ValidateFlowDefinitionRequestFilterSensitiveLog, ValidateFlowDefinitionResponseFilterSensitiveLog)
  .ser(se_ValidateFlowDefinitionCommand)
  .de(de_ValidateFlowDefinitionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ValidateFlowDefinitionRequest;
      output: ValidateFlowDefinitionResponse;
    };
    sdk: {
      input: ValidateFlowDefinitionCommandInput;
      output: ValidateFlowDefinitionCommandOutput;
    };
  };
}
