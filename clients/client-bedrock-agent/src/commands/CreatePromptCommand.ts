// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreatePromptRequest,
  CreatePromptRequestFilterSensitiveLog,
  CreatePromptResponse,
  CreatePromptResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreatePromptCommand, se_CreatePromptCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePromptCommand}.
 */
export interface CreatePromptCommandInput extends CreatePromptRequest {}
/**
 * @public
 *
 * The output of {@link CreatePromptCommand}.
 */
export interface CreatePromptCommandOutput extends CreatePromptResponse, __MetadataBearer {}

/**
 * <p>Creates a prompt in your prompt library that you can add to a flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html">Prompt management in Amazon Bedrock</a>, <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html">Create a prompt using Prompt management</a> and <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows.html">Prompt flows in Amazon Bedrock</a> in the Amazon Bedrock User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, CreatePromptCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, CreatePromptCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // CreatePromptRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   customerEncryptionKeyArn: "STRING_VALUE",
 *   defaultVariant: "STRING_VALUE",
 *   variants: [ // PromptVariantList
 *     { // PromptVariant
 *       name: "STRING_VALUE", // required
 *       templateType: "TEXT", // required
 *       templateConfiguration: { // PromptTemplateConfiguration Union: only one key present
 *         text: { // TextPromptTemplateConfiguration
 *           text: "STRING_VALUE", // required
 *           inputVariables: [ // PromptInputVariablesList
 *             { // PromptInputVariable
 *               name: "STRING_VALUE",
 *             },
 *           ],
 *         },
 *       },
 *       modelId: "STRING_VALUE",
 *       inferenceConfiguration: { // PromptInferenceConfiguration Union: only one key present
 *         text: { // PromptModelInferenceConfiguration
 *           temperature: Number("float"),
 *           topP: Number("float"),
 *           topK: Number("int"),
 *           maxTokens: Number("int"),
 *           stopSequences: [ // StopSequences
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       metadata: [ // PromptMetadataList
 *         { // PromptMetadataEntry
 *           key: "STRING_VALUE", // required
 *           value: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreatePromptCommand(input);
 * const response = await client.send(command);
 * // { // CreatePromptResponse
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   customerEncryptionKeyArn: "STRING_VALUE",
 * //   defaultVariant: "STRING_VALUE",
 * //   variants: [ // PromptVariantList
 * //     { // PromptVariant
 * //       name: "STRING_VALUE", // required
 * //       templateType: "TEXT", // required
 * //       templateConfiguration: { // PromptTemplateConfiguration Union: only one key present
 * //         text: { // TextPromptTemplateConfiguration
 * //           text: "STRING_VALUE", // required
 * //           inputVariables: [ // PromptInputVariablesList
 * //             { // PromptInputVariable
 * //               name: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       modelId: "STRING_VALUE",
 * //       inferenceConfiguration: { // PromptInferenceConfiguration Union: only one key present
 * //         text: { // PromptModelInferenceConfiguration
 * //           temperature: Number("float"),
 * //           topP: Number("float"),
 * //           topK: Number("int"),
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
 * @param CreatePromptCommandInput - {@link CreatePromptCommandInput}
 * @returns {@link CreatePromptCommandOutput}
 * @see {@link CreatePromptCommandInput} for command's `input` shape.
 * @see {@link CreatePromptCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreatePromptCommand extends $Command
  .classBuilder<
    CreatePromptCommandInput,
    CreatePromptCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "CreatePrompt", {})
  .n("BedrockAgentClient", "CreatePromptCommand")
  .f(CreatePromptRequestFilterSensitiveLog, CreatePromptResponseFilterSensitiveLog)
  .ser(se_CreatePromptCommand)
  .de(de_CreatePromptCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePromptRequest;
      output: CreatePromptResponse;
    };
    sdk: {
      input: CreatePromptCommandInput;
      output: CreatePromptCommandOutput;
    };
  };
}
