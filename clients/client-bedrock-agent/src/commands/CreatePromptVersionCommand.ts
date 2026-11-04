// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePromptVersionRequest, CreatePromptVersionResponse } from "../models/models_1";
import { CreatePromptVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePromptVersionCommand}.
 */
export interface CreatePromptVersionCommandInput extends CreatePromptVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreatePromptVersionCommand}.
 */
export interface CreatePromptVersionCommandOutput extends CreatePromptVersionResponse, __MetadataBearer {}

/**
 * Creates a static snapshot of your prompt that can be deployed to production. For more information, see [Deploy prompts using Prompt management by creating versions](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-deploy.html) in the Amazon Bedrock User Guide.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, CreatePromptVersionCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, CreatePromptVersionCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // CreatePromptVersionRequest
 *   promptIdentifier: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreatePromptVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreatePromptVersionResponse
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
 * //                   strict: true || false,
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
 * @param CreatePromptVersionCommandInput - {@link CreatePromptVersionCommandInput}
 * @returns {@link CreatePromptVersionCommandOutput}
 * @see {@link CreatePromptVersionCommandInput} for command's `input` shape.
 * @see {@link CreatePromptVersionCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request is denied because of missing access permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict performing an operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The number of requests exceeds the service quota. Resubmit your request later.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link BedrockAgentServiceException}
 *
 * Base exception class for all service exceptions from BedrockAgent service.
 *
 * @public
 */
export class CreatePromptVersionCommand extends command<CreatePromptVersionCommandInput, CreatePromptVersionCommandOutput>(
  _ep0,
  _mw0,
  "CreatePromptVersion",
  CreatePromptVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePromptVersionRequest;
      output: CreatePromptVersionResponse;
    };
    sdk: {
      input: CreatePromptVersionCommandInput;
      output: CreatePromptVersionCommandOutput;
    };
  };
}
