// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CountTokensRequest, CountTokensResponse } from "../models/models_0";
import { CountTokens$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns the token count for a given inference request. This operation helps you estimate token usage before sending requests to foundation models by returning the token count that would be used if the same input were sent to the model in an inference request.
 *
 * Token counting is model-specific because different models use different tokenization strategies. The token count returned by this operation will match the token count that would be charged if the same input were sent to the model in an `InvokeModel` or `Converse` request.
 *
 * You can use this operation to:
 *
 * - Estimate costs before sending inference requests.
 * - Optimize prompts to fit within token limits.
 * - Plan for token usage in your applications.
 *
 * This operation accepts the same input formats as `InvokeModel` and `Converse`, allowing you to count tokens for both raw text inputs and structured conversation formats.
 *
 * The following operations are related to `CountTokens`:
 *
 * - [InvokeModel](https://docs.aws.amazon.com/bedrock/latest/API/API_runtime_InvokeModel.html) - Sends inference requests to foundation models
 * - [Converse](https://docs.aws.amazon.com/bedrock/latest/API/API_runtime_Converse.html) - Sends conversation-based inference requests to foundation models
 *
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
 *           role: "user" || "assistant" || "system", // required
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
 *                 error: { // ErrorBlock
 *                   message: "STRING_VALUE",
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
 *               audio: { // AudioBlock
 *                 format: "mp3" || "opus" || "wav" || "aac" || "flac" || "mp4" || "ogg" || "mkv" || "mka" || "x-aac" || "m4a" || "mpeg" || "mpga" || "pcm" || "webm", // required
 *                 source: { // AudioSource Union: only one key present
 *                   bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *                   s3Location: {
 *                     uri: "STRING_VALUE", // required
 *                     bucketOwner: "STRING_VALUE",
 *                   },
 *                 },
 *                 error: {
 *                   message: "STRING_VALUE",
 *                 },
 *               },
 *               toolUse: { // ToolUseBlock
 *                 toolUseId: "STRING_VALUE", // required
 *                 name: "STRING_VALUE", // required
 *                 input: "DOCUMENT_VALUE", // required
 *                 type: "server_tool_use",
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
 *                       error: {
 *                         message: "STRING_VALUE",
 *                       },
 *                     },
 *                     document: {
 *                       format: "pdf" || "csv" || "doc" || "docx" || "xls" || "xlsx" || "html" || "txt" || "md",
 *                       name: "STRING_VALUE", // required
 *                       source: {//  Union: only one key present
 *                         bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *                         s3Location: "<S3Location>",
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
 *                     searchResult: { // SearchResultBlock
 *                       source: "STRING_VALUE", // required
 *                       title: "STRING_VALUE", // required
 *                       content: [ // SearchResultContentBlocks // required
 *                         { // SearchResultContentBlock
 *                           text: "STRING_VALUE", // required
 *                         },
 *                       ],
 *                       citations: {
 *                         enabled: true || false, // required
 *                       },
 *                     },
 *                   },
 *                 ],
 *                 status: "success" || "error",
 *                 type: "STRING_VALUE",
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
 *                 ttl: "5m" || "1h",
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
 *                     source: "STRING_VALUE",
 *                     sourceContent: [ // CitationSourceContentList
 *                       { // CitationSourceContent Union: only one key present
 *                         text: "STRING_VALUE",
 *                       },
 *                     ],
 *                     location: { // CitationLocation Union: only one key present
 *                       web: { // WebLocation
 *                         url: "STRING_VALUE",
 *                         domain: "STRING_VALUE",
 *                       },
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
 *                       searchResultLocation: { // SearchResultLocation
 *                         searchResultIndex: Number("int"),
 *                         start: Number("int"),
 *                         end: Number("int"),
 *                       },
 *                     },
 *                   },
 *                 ],
 *               },
 *               searchResult: {
 *                 source: "STRING_VALUE", // required
 *                 title: "STRING_VALUE", // required
 *                 content: [ // required
 *                   {
 *                     text: "STRING_VALUE", // required
 *                   },
 *                 ],
 *                 citations: {
 *                   enabled: true || false, // required
 *                 },
 *               },
 *               toolAddition: { // ToolAdditionBlock
 *                 tool: { // ToolReference
 *                   type: "STRING_VALUE",
 *                   name: "STRING_VALUE",
 *                   serverName: "STRING_VALUE",
 *                 },
 *               },
 *               toolRemoval: { // ToolRemovalBlock
 *                 tool: {
 *                   type: "STRING_VALUE",
 *                   name: "STRING_VALUE",
 *                   serverName: "STRING_VALUE",
 *                 },
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
 *             ttl: "5m" || "1h",
 *           },
 *         },
 *       ],
 *       toolConfig: { // ToolConfiguration
 *         tools: [ // Tools // required
 *           { // Tool Union: only one key present
 *             toolSpec: { // ToolSpecification
 *               name: "STRING_VALUE", // required
 *               description: "STRING_VALUE",
 *               inputSchema: { // ToolInputSchema Union: only one key present
 *                 json: "DOCUMENT_VALUE",
 *               },
 *               strict: true || false,
 *             },
 *             systemTool: { // SystemTool
 *               name: "STRING_VALUE", // required
 *             },
 *             cachePoint: "<CachePointBlock>",
 *           },
 *         ],
 *         toolChoice: { // ToolChoice Union: only one key present
 *           auto: {},
 *           any: {},
 *           tool: { // SpecificToolChoice
 *             name: "STRING_VALUE", // required
 *           },
 *         },
 *       },
 *       additionalModelRequestFields: "DOCUMENT_VALUE",
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
 *
 * The request is denied because you do not have sufficient permissions to perform the requested action. For troubleshooting this error, see [AccessDeniedException](https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-access-denied) in the Amazon Bedrock User Guide
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. For troubleshooting this error, see [InternalFailure](https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-internal-failure) in the Amazon Bedrock User Guide
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource ARN was not found. For troubleshooting this error, see [ResourceNotFound](https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-resource-not-found) in the Amazon Bedrock User Guide
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service isn't currently available. For troubleshooting this error, see [ServiceUnavailable](https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-service-unavailable) in the Amazon Bedrock User Guide
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Your request was denied due to exceeding the account quotas for *Amazon Bedrock*. For troubleshooting this error, see [ThrottlingException](https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-throttling-exception) in the Amazon Bedrock User Guide
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by *Amazon Bedrock*. For troubleshooting this error, see [ValidationError](https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-validation-error) in the Amazon Bedrock User Guide
 *
 * @throws {@link BedrockRuntimeServiceException}
 *
 * Base exception class for all service exceptions from BedrockRuntime service.
 *
 * @public
 */
export class CountTokensCommand extends command<CountTokensCommandInput, CountTokensCommandOutput>(
  _ep0,
  _mw0,
  "CountTokens",
  CountTokens$
) {
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
