// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockRuntimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockRuntimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ConverseRequest, ConverseResponse } from "../models/models_0";
import { de_ConverseCommand, se_ConverseCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ConverseCommand}.
 */
export interface ConverseCommandInput extends ConverseRequest {}
/**
 * @public
 *
 * The output of {@link ConverseCommand}.
 */
export interface ConverseCommandOutput extends ConverseResponse, __MetadataBearer {}

/**
 * <p>Sends messages to the specified Amazon Bedrock model. <code>Converse</code> provides
 *          a consistent interface that works with all models that
 *          support messages. This allows you to write code once and use it with different models.
 *          Should a model have unique inference parameters, you can also pass those unique parameters
 *          to the model. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/api-methods-run.html">Run inference</a> in the Bedrock User Guide.</p>
 *          <p>This operation requires permission for the <code>bedrock:InvokeModel</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockRuntimeClient, ConverseCommand } from "@aws-sdk/client-bedrock-runtime"; // ES Modules import
 * // const { BedrockRuntimeClient, ConverseCommand } = require("@aws-sdk/client-bedrock-runtime"); // CommonJS import
 * const client = new BedrockRuntimeClient(config);
 * const input = { // ConverseRequest
 *   modelId: "STRING_VALUE", // required
 *   messages: [ // Messages // required
 *     { // Message
 *       role: "user" || "assistant", // required
 *       content: [ // ContentBlocks // required
 *         { // ContentBlock Union: only one key present
 *           text: "STRING_VALUE",
 *           image: { // ImageBlock
 *             format: "png" || "jpeg" || "gif" || "webp", // required
 *             source: { // ImageSource Union: only one key present
 *               bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *             },
 *           },
 *           toolUse: { // ToolUseBlock
 *             toolUseId: "STRING_VALUE", // required
 *             name: "STRING_VALUE", // required
 *             input: "DOCUMENT_VALUE", // required
 *           },
 *           toolResult: { // ToolResultBlock
 *             toolUseId: "STRING_VALUE", // required
 *             content: [ // ToolResultContentBlocks // required
 *               { // ToolResultContentBlock Union: only one key present
 *                 json: "DOCUMENT_VALUE",
 *                 text: "STRING_VALUE",
 *                 image: {
 *                   format: "png" || "jpeg" || "gif" || "webp", // required
 *                   source: {//  Union: only one key present
 *                     bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *                   },
 *                 },
 *               },
 *             ],
 *             status: "success" || "error",
 *           },
 *         },
 *       ],
 *     },
 *   ],
 *   system: [ // SystemContentBlocks
 *     { // SystemContentBlock Union: only one key present
 *       text: "STRING_VALUE",
 *     },
 *   ],
 *   inferenceConfig: { // InferenceConfiguration
 *     maxTokens: Number("int"),
 *     temperature: Number("float"),
 *     topP: Number("float"),
 *     stopSequences: [ // NonEmptyStringList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   toolConfig: { // ToolConfiguration
 *     tools: [ // Tools // required
 *       { // Tool Union: only one key present
 *         toolSpec: { // ToolSpecification
 *           name: "STRING_VALUE", // required
 *           description: "STRING_VALUE",
 *           inputSchema: { // ToolInputSchema Union: only one key present
 *             json: "DOCUMENT_VALUE",
 *           },
 *         },
 *       },
 *     ],
 *     toolChoice: { // ToolChoice Union: only one key present
 *       auto: {},
 *       any: {},
 *       tool: { // SpecificToolChoice
 *         name: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 *   additionalModelRequestFields: "DOCUMENT_VALUE",
 *   additionalModelResponseFieldPaths: [ // AdditionalModelResponseFieldPaths
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ConverseCommand(input);
 * const response = await client.send(command);
 * // { // ConverseResponse
 * //   output: { // ConverseOutput Union: only one key present
 * //     message: { // Message
 * //       role: "user" || "assistant", // required
 * //       content: [ // ContentBlocks // required
 * //         { // ContentBlock Union: only one key present
 * //           text: "STRING_VALUE",
 * //           image: { // ImageBlock
 * //             format: "png" || "jpeg" || "gif" || "webp", // required
 * //             source: { // ImageSource Union: only one key present
 * //               bytes: new Uint8Array(),
 * //             },
 * //           },
 * //           toolUse: { // ToolUseBlock
 * //             toolUseId: "STRING_VALUE", // required
 * //             name: "STRING_VALUE", // required
 * //             input: "DOCUMENT_VALUE", // required
 * //           },
 * //           toolResult: { // ToolResultBlock
 * //             toolUseId: "STRING_VALUE", // required
 * //             content: [ // ToolResultContentBlocks // required
 * //               { // ToolResultContentBlock Union: only one key present
 * //                 json: "DOCUMENT_VALUE",
 * //                 text: "STRING_VALUE",
 * //                 image: {
 * //                   format: "png" || "jpeg" || "gif" || "webp", // required
 * //                   source: {//  Union: only one key present
 * //                     bytes: new Uint8Array(),
 * //                   },
 * //                 },
 * //               },
 * //             ],
 * //             status: "success" || "error",
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   stopReason: "end_turn" || "tool_use" || "max_tokens" || "stop_sequence" || "content_filtered", // required
 * //   usage: { // TokenUsage
 * //     inputTokens: Number("int"), // required
 * //     outputTokens: Number("int"), // required
 * //     totalTokens: Number("int"), // required
 * //   },
 * //   metrics: { // ConverseMetrics
 * //     latencyMs: Number("long"), // required
 * //   },
 * //   additionalModelResponseFields: "DOCUMENT_VALUE",
 * // };
 *
 * ```
 *
 * @param ConverseCommandInput - {@link ConverseCommandInput}
 * @returns {@link ConverseCommandOutput}
 * @see {@link ConverseCommandInput} for command's `input` shape.
 * @see {@link ConverseCommandOutput} for command's `response` shape.
 * @see {@link BedrockRuntimeClientResolvedConfig | config} for BedrockRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ModelErrorException} (client fault)
 *  <p>The request failed due to an error while processing the model.</p>
 *
 * @throws {@link ModelNotReadyException} (client fault)
 *  <p>The model specified in the request is not ready to serve inference requests.</p>
 *
 * @throws {@link ModelTimeoutException} (client fault)
 *  <p>The request took too long to process. Processing time exceeded the model timeout length.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockRuntimeServiceException}
 * <p>Base exception class for all service exceptions from BedrockRuntime service.</p>
 *
 * @public
 */
export class ConverseCommand extends $Command
  .classBuilder<
    ConverseCommandInput,
    ConverseCommandOutput,
    BedrockRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BedrockRuntimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockFrontendService", "Converse", {})
  .n("BedrockRuntimeClient", "ConverseCommand")
  .f(void 0, void 0)
  .ser(se_ConverseCommand)
  .de(de_ConverseCommand)
  .build() {}
