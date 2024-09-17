// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetFlowVersionRequest,
  GetFlowVersionResponse,
  GetFlowVersionResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetFlowVersionCommand, se_GetFlowVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFlowVersionCommand}.
 */
export interface GetFlowVersionCommandInput extends GetFlowVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetFlowVersionCommand}.
 */
export interface GetFlowVersionCommandOutput extends GetFlowVersionResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a version of a flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-deploy.html">Deploy a flow in Amazon Bedrock</a> in the Amazon Bedrock User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, GetFlowVersionCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, GetFlowVersionCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // GetFlowVersionRequest
 *   flowIdentifier: "STRING_VALUE", // required
 *   flowVersion: "STRING_VALUE", // required
 * };
 * const command = new GetFlowVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetFlowVersionResponse
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   executionRoleArn: "STRING_VALUE", // required
 * //   customerEncryptionKeyArn: "STRING_VALUE",
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   status: "Failed" || "Prepared" || "Preparing" || "NotPrepared", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
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
 * //                 templateType: "TEXT", // required
 * //                 templateConfiguration: { // PromptTemplateConfiguration Union: only one key present
 * //                   text: { // TextPromptTemplateConfiguration
 * //                     text: "STRING_VALUE", // required
 * //                     inputVariables: [ // PromptInputVariablesList
 * //                       { // PromptInputVariable
 * //                         name: "STRING_VALUE",
 * //                       },
 * //                     ],
 * //                   },
 * //                 },
 * //                 modelId: "STRING_VALUE", // required
 * //                 inferenceConfiguration: { // PromptInferenceConfiguration Union: only one key present
 * //                   text: { // PromptModelInferenceConfiguration
 * //                     temperature: Number("float"),
 * //                     topP: Number("float"),
 * //                     topK: Number("int"),
 * //                     maxTokens: Number("int"),
 * //                     stopSequences: [ // StopSequences
 * //                       "STRING_VALUE",
 * //                     ],
 * //                   },
 * //                 },
 * //               },
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
 * @param GetFlowVersionCommandInput - {@link GetFlowVersionCommandInput}
 * @returns {@link GetFlowVersionCommandOutput}
 * @see {@link GetFlowVersionCommandInput} for command's `input` shape.
 * @see {@link GetFlowVersionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetFlowVersionCommand extends $Command
  .classBuilder<
    GetFlowVersionCommandInput,
    GetFlowVersionCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "GetFlowVersion", {})
  .n("BedrockAgentClient", "GetFlowVersionCommand")
  .f(void 0, GetFlowVersionResponseFilterSensitiveLog)
  .ser(se_GetFlowVersionCommand)
  .de(de_GetFlowVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFlowVersionRequest;
      output: GetFlowVersionResponse;
    };
    sdk: {
      input: GetFlowVersionCommandInput;
      output: GetFlowVersionCommandOutput;
    };
  };
}
