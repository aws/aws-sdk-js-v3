// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockRuntimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockRuntimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CountTokensRequest, CountTokensRequestFilterSensitiveLog, CountTokensResponse } from "../models/models_0";
import { de_CountTokensCommand, se_CountTokensCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CountTokensCommand}.
 */
export interface CountTokensCommandInput extends CountTokensRequest {}
/**
 * @public
 *
 * The output of {@link CountTokensCommand}.
 */
export interface CountTokensCommandOutput extends CountTokensResponse, __MetadataBearer {}

/**
 * <p>Returns the token count for a given inference request. This operation helps you estimate token usage before sending requests to foundation models by returning the token count that would be used if the same input were sent to the model in an inference request.</p> <p>Token counting is model-specific because different models use different tokenization strategies. The token count returned by this operation will match the token count that would be charged if the same input were sent to the model in an <code>InvokeModel</code> or <code>Converse</code> request.</p> <p>You can use this operation to:</p> <ul> <li> <p>Estimate costs before sending inference requests.</p> </li> <li> <p>Optimize prompts to fit within token limits.</p> </li> <li> <p>Plan for token usage in your applications.</p> </li> </ul> <p>This operation accepts the same input formats as <code>InvokeModel</code> and <code>Converse</code>, allowing you to count tokens for both raw text inputs and structured conversation formats.</p> <p>The following operations are related to <code>CountTokens</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/API/API_runtime_InvokeModel.html">InvokeModel</a> - Sends inference requests to foundation models</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/API/API_runtime_Converse.html">Converse</a> - Sends conversation-based inference requests to foundation models</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockRuntimeClient, CountTokensCommand } from "@aws-sdk/client-bedrock-runtime"; // ES Modules import
 * // const { BedrockRuntimeClient, CountTokensCommand } = require("@aws-sdk/client-bedrock-runtime"); // CommonJS import
 * // import type { BedrockRuntimeClientConfig } from "@aws-sdk/client-bedrock-runtime";
 * const config = {}; // type is BedrockRuntimeClientConfig
 * const client = new BedrockRuntimeClient(config);
 * const input = { // CountTokensRequest
 *   modelId: "STRING_VALUE", // required
 *   input: { // CountTokensInput Union: only one key present
 *     invokeModel: { // InvokeModelTokensRequest
 *       body: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")       // required
 *     },
 *     converse: { // ConverseTokensRequest
 *       messages: [ // Messages
 *         { // Message
 *           role: "user" || "assistant", // required
 *           content: [ // ContentBlocks // required
 *             { // ContentBlock Union: only one key present
 *               text: "STRING_VALUE",
 *               image: { // ImageBlock
 *                 format: "png" || "jpeg" || "gif" || "webp", // required
 *                 source: { // ImageSource Union: only one key present
 *                   bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *                   s3Location: { // S3Location
 *                     uri: "STRING_VALUE", // required
 *                     bucketOwner: "STRING_VALUE",
 *                   },
 *                 },
 *               },
 *               document: { // DocumentBlock
 *                 format: "pdf" || "csv" || "doc" || "docx" || "xls" || "xlsx" || "html" || "txt" || "md",
 *                 name: "STRING_VALUE", // required
 *                 source: { // DocumentSource Union: only one key present
 *                   bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *                   s3Location: {
 *                     uri: "STRING_VALUE", // required
 *                     bucketOwner: "STRING_VALUE",
 *                   },
 *                   text: "STRING_VALUE",
 *                   content: [ // DocumentContentBlocks
 *                     { // DocumentContentBlock Union: only one key present
 *                       text: "STRING_VALUE",
 *                     },
 *                   ],
 *                 },
 *                 context: "STRING_VALUE",
 *                 citations: { // CitationsConfig
 *                   enabled: true || false, // required
 *                 },
 *               },
 *               video: { // VideoBlock
 *                 format: "mkv" || "mov" || "mp4" || "webm" || "flv" || "mpeg" || "mpg" || "wmv" || "three_gp", // required
 *                 source: { // VideoSource Union: only one key present
 *                   bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *                   s3Location: {
 *                     uri: "STRING_VALUE", // required
 *                     bucketOwner: "STRING_VALUE",
 *                   },
 *                 },
 *               },
 *               toolUse: { // ToolUseBlock
 *                 toolUseId: "STRING_VALUE", // required
 *                 name: "STRING_VALUE", // required
 *                 input: "DOCUMENT_VALUE", // required
 *               },
 *               toolResult: { // ToolResultBlock
 *                 toolUseId: "STRING_VALUE", // required
 *                 content: [ // ToolResultContentBlocks // required
 *                   { // ToolResultContentBlock Union: only one key present
 *                     json: "DOCUMENT_VALUE",
 *                     text: "STRING_VALUE",
 *                     image: {
 *                       format: "png" || "jpeg" || "gif" || "webp", // required
 *                       source: {//  Union: only one key present
 *                         bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *                         s3Location: {
 *                           uri: "STRING_VALUE", // required
 *                           bucketOwner: "STRING_VALUE",
 *                         },
 *                       },
 *                     },
 *                     document: {
 *                       format: "pdf" || "csv" || "doc" || "docx" || "xls" || "xlsx" || "html" || "txt" || "md",
 *                       name: "STRING_VALUE", // required
 *                       source: {//  Union: only one key present
 *                         bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *                         s3Location: {
 *                           uri: "STRING_VALUE", // required
 *                           bucketOwner: "STRING_VALUE",
 *                         },
 *                         text: "STRING_VALUE",
 *                         content: [
 *                           {//  Union: only one key present
 *                             text: "STRING_VALUE",
 *                           },
 *                         ],
 *                       },
 *                       context: "STRING_VALUE",
 *                       citations: {
 *                         enabled: true || false, // required
 *                       },
 *                     },
 *                     video: {
 *                       format: "mkv" || "mov" || "mp4" || "webm" || "flv" || "mpeg" || "mpg" || "wmv" || "three_gp", // required
 *                       source: {//  Union: only one key present
 *                         bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *                         s3Location: "<S3Location>",
 *                       },
 *                     },
 *                   },
 *                 ],
 *                 status: "success" || "error",
 *               },
 *               guardContent: { // GuardrailConverseContentBlock Union: only one key present
 *                 text: { // GuardrailConverseTextBlock
 *                   text: "STRING_VALUE", // required
 *                   qualifiers: [ // GuardrailConverseContentQualifierList
 *                     "grounding_source" || "query" || "guard_content",
 *                   ],
 *                 },
 *                 image: { // GuardrailConverseImageBlock
 *                   format: "png" || "jpeg", // required
 *                   source: { // GuardrailConverseImageSource Union: only one key present
 *                     bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *                   },
 *                 },
 *               },
 *               cachePoint: { // CachePointBlock
 *                 type: "default", // required
 *               },
 *               reasoningContent: { // ReasoningContentBlock Union: only one key present
 *                 reasoningText: { // ReasoningTextBlock
 *                   text: "STRING_VALUE", // required
 *                   signature: "STRING_VALUE",
 *                 },
 *                 redactedContent: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *               },
 *               citationsContent: { // CitationsContentBlock
 *                 content: [ // CitationGeneratedContentList
 *                   { // CitationGeneratedContent Union: only one key present
 *                     text: "STRING_VALUE",
 *                   },
 *                 ],
 *                 citations: [ // Citations
 *                   { // Citation
 *                     title: "STRING_VALUE",
 *                     sourceContent: [ // CitationSourceContentList
 *                       { // CitationSourceContent Union: only one key present
 *                         text: "STRING_VALUE",
 *                       },
 *                     ],
 *                     location: { // CitationLocation Union: only one key present
 *                       documentChar: { // DocumentCharLocation
 *                         documentIndex: Number("int"),
 *                         start: Number("int"),
 *                         end: Number("int"),
 *                       },
 *                       documentPage: { // DocumentPageLocation
 *                         documentIndex: Number("int"),
 *                         start: Number("int"),
 *                         end: Number("int"),
 *                       },
 *                       documentChunk: { // DocumentChunkLocation
 *                         documentIndex: Number("int"),
 *                         start: Number("int"),
 *                         end: Number("int"),
 *                       },
 *                     },
 *                   },
 *                 ],
 *               },
 *             },
 *           ],
 *         },
 *       ],
 *       system: [ // SystemContentBlocks
 *         { // SystemContentBlock Union: only one key present
 *           text: "STRING_VALUE",
 *           guardContent: {//  Union: only one key present
 *             text: {
 *               text: "STRING_VALUE", // required
 *               qualifiers: [
 *                 "grounding_source" || "query" || "guard_content",
 *               ],
 *             },
 *             image: {
 *               format: "png" || "jpeg", // required
 *               source: {//  Union: only one key present
 *                 bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *               },
 *             },
 *           },
 *           cachePoint: {
 *             type: "default", // required
 *           },
 *         },
 *       ],
 *     },
 *   },
 * };
 * const command = new CountTokensCommand(input);
 * const response = await client.send(command);
 * // { // CountTokensResponse
 * //   inputTokens: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param CountTokensCommandInput - {@link CountTokensCommandInput}
 * @returns {@link CountTokensCommandOutput}
 * @see {@link CountTokensCommandInput} for command's `input` shape.
 * @see {@link CountTokensCommandOutput} for command's `response` shape.
 * @see {@link BedrockRuntimeClientResolvedConfig | config} for BedrockRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because you do not have sufficient permissions to perform the requested action. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-access-denied">AccessDeniedException</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-internal-failure">InternalFailure</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-resource-not-found">ResourceNotFound</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service isn't currently available. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-service-unavailable">ServiceUnavailable</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request was denied due to exceeding the account quotas for <i>Amazon Bedrock</i>. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-throttling-exception">ThrottlingException</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by <i>Amazon Bedrock</i>. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-validation-error">ValidationError</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link BedrockRuntimeServiceException}
 * <p>Base exception class for all service exceptions from BedrockRuntime service.</p>
 *
 *
 * @public
 */
export class CountTokensCommand extends $Command
  .classBuilder<
    CountTokensCommandInput,
    CountTokensCommandOutput,
    BedrockRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockRuntimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockFrontendService", "CountTokens", {})
  .n("BedrockRuntimeClient", "CountTokensCommand")
  .f(CountTokensRequestFilterSensitiveLog, void 0)
  .ser(se_CountTokensCommand)
  .de(de_CountTokensCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CountTokensRequest;
      output: CountTokensResponse;
    };
    sdk: {
      input: CountTokensCommandInput;
      output: CountTokensCommandOutput;
    };
  };
}
