// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetPromptRequest, GetPromptResponse, GetPromptResponseFilterSensitiveLog } from "../models/models_1";
import { de_GetPromptCommand, se_GetPromptCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPromptCommand}.
 */
export interface GetPromptCommandInput extends GetPromptRequest {}
/**
 * @public
 *
 * The output of {@link GetPromptCommand}.
 */
export interface GetPromptCommandOutput extends GetPromptResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the working draft (<code>DRAFT</code> version) of a prompt or a version of it, depending on whether you include the <code>promptVersion</code> field or not. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-manage.html#prompt-management-view.html">View information about prompts using Prompt management</a> and <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-deploy.html#prompt-management-versions-view.html">View information about a version of your prompt</a> in the Amazon Bedrock User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, GetPromptCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, GetPromptCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // GetPromptRequest
 *   promptIdentifier: "STRING_VALUE", // required
 *   promptVersion: "STRING_VALUE",
 * };
 * const command = new GetPromptCommand(input);
 * const response = await client.send(command);
 * // { // GetPromptResponse
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   customerEncryptionKeyArn: "STRING_VALUE",
 * //   defaultVariant: "STRING_VALUE",
 * //   variants: [ // PromptVariantList
 * //     { // PromptVariant
 * //       name: "STRING_VALUE", // required
 * //       templateType: "TEXT" || "CHAT", // required
 * //       templateConfiguration: { // PromptTemplateConfiguration Union: only one key present
 * //         text: { // TextPromptTemplateConfiguration
 * //           text: "STRING_VALUE", // required
 * //           cachePoint: { // CachePointBlock
 * //             type: "default", // required
 * //           },
 * //           inputVariables: [ // PromptInputVariablesList
 * //             { // PromptInputVariable
 * //               name: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //         chat: { // ChatPromptTemplateConfiguration
 * //           messages: [ // Messages // required
 * //             { // Message
 * //               role: "user" || "assistant", // required
 * //               content: [ // ContentBlocks // required
 * //                 { // ContentBlock Union: only one key present
 * //                   text: "STRING_VALUE",
 * //                   cachePoint: {
 * //                     type: "default", // required
 * //                   },
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //           system: [ // SystemContentBlocks
 * //             { // SystemContentBlock Union: only one key present
 * //               text: "STRING_VALUE",
 * //               cachePoint: "<CachePointBlock>",
 * //             },
 * //           ],
 * //           inputVariables: [
 * //             {
 * //               name: "STRING_VALUE",
 * //             },
 * //           ],
 * //           toolConfiguration: { // ToolConfiguration
 * //             tools: [ // Tools // required
 * //               { // Tool Union: only one key present
 * //                 toolSpec: { // ToolSpecification
 * //                   name: "STRING_VALUE", // required
 * //                   description: "STRING_VALUE",
 * //                   inputSchema: { // ToolInputSchema Union: only one key present
 * //                     json: "DOCUMENT_VALUE",
 * //                   },
 * //                 },
 * //                 cachePoint: "<CachePointBlock>",
 * //               },
 * //             ],
 * //             toolChoice: { // ToolChoice Union: only one key present
 * //               auto: {},
 * //               any: {},
 * //               tool: { // SpecificToolChoice
 * //                 name: "STRING_VALUE", // required
 * //               },
 * //             },
 * //           },
 * //         },
 * //       },
 * //       modelId: "STRING_VALUE",
 * //       inferenceConfiguration: { // PromptInferenceConfiguration Union: only one key present
 * //         text: { // PromptModelInferenceConfiguration
 * //           temperature: Number("float"),
 * //           topP: Number("float"),
 * //           maxTokens: Number("int"),
 * //           stopSequences: [ // StopSequences
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       metadata: [ // PromptMetadataList
 * //         { // PromptMetadataEntry
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       additionalModelRequestFields: "DOCUMENT_VALUE",
 * //       genAiResource: { // PromptGenAiResource Union: only one key present
 * //         agent: { // PromptAgentResource
 * //           agentIdentifier: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   version: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetPromptCommandInput - {@link GetPromptCommandInput}
 * @returns {@link GetPromptCommandOutput}
 * @see {@link GetPromptCommandInput} for command's `input` shape.
 * @see {@link GetPromptCommandOutput} for command's `response` shape.
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
export class GetPromptCommand extends $Command
  .classBuilder<
    GetPromptCommandInput,
    GetPromptCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "GetPrompt", {})
  .n("BedrockAgentClient", "GetPromptCommand")
  .f(void 0, GetPromptResponseFilterSensitiveLog)
  .ser(se_GetPromptCommand)
  .de(de_GetPromptCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPromptRequest;
      output: GetPromptResponse;
    };
    sdk: {
      input: GetPromptCommandInput;
      output: GetPromptCommandOutput;
    };
  };
}
