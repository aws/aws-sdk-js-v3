// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockRuntimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockRuntimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ConverseStreamRequest,
  ConverseStreamRequestFilterSensitiveLog,
  ConverseStreamResponse,
  ConverseStreamResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ConverseStreamCommand, se_ConverseStreamCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ConverseStreamCommand}.
 */
export interface ConverseStreamCommandInput extends ConverseStreamRequest {}
/**
 * @public
 *
 * The output of {@link ConverseStreamCommand}.
 */
export interface ConverseStreamCommandOutput extends ConverseStreamResponse, __MetadataBearer {}

/**
 * <p>Sends messages to the specified Amazon Bedrock model and returns
 *          the response in a stream. <code>ConverseStream</code> provides a consistent API
 *          that works with all Amazon Bedrock models that support messages.
 *          This allows you to write code once and use it with different models. Should a
 *          model have unique inference parameters, you can also pass those unique parameters to the
 *          model. </p>
 *          <p>To find out if a model supports streaming, call <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetFoundationModel.html">GetFoundationModel</a>
 *          and check the <code>responseStreamingSupported</code> field in the response.</p>
 *          <note>
 *             <p>The CLI doesn't support streaming operations in Amazon Bedrock, including <code>ConverseStream</code>.</p>
 *          </note>
 *          <p>Amazon Bedrock doesn't store any text, images, or documents that you provide as content. The data is only used to generate the response.</p>
 *          <p>You can submit a prompt by including it in the <code>messages</code> field, specifying the <code>modelId</code> of a foundation model or inference profile to run inference on it, and including any other fields that are relevant to your use case.</p>
 *          <p>You can also submit a prompt from Prompt management by specifying the ARN of the prompt version and including a map of variables to values in the <code>promptVariables</code> field. You can append more messages to the prompt by using the <code>messages</code> field. If you use a prompt from Prompt management, you can't include the following fields in the request: <code>additionalModelRequestFields</code>, <code>inferenceConfig</code>, <code>system</code>, or <code>toolConfig</code>. Instead, these fields must be defined through Prompt management. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-use.html">Use a prompt from Prompt management</a>.</p>
 *          <p>For information about the Converse API, see <i>Use the Converse API</i> in the <i>Amazon Bedrock User Guide</i>.
 *          To use a guardrail, see  <i>Use a guardrail with the Converse API</i> in the <i>Amazon Bedrock User Guide</i>.
 *          To use a tool with a model, see <i>Tool use (Function calling)</i> in the <i>Amazon Bedrock User Guide</i>
 *          </p>
 *          <p>For example code, see <i>Conversation streaming example</i> in the <i>Amazon Bedrock User Guide</i>.
 *       </p>
 *          <p>This operation requires permission for the <code>bedrock:InvokeModelWithResponseStream</code> action.</p>
 *          <important>
 *             <p>To deny all inference access to resources that you specify in the modelId field, you
 *          need to deny access to the <code>bedrock:InvokeModel</code> and
 *          <code>bedrock:InvokeModelWithResponseStream</code> actions. Doing this also denies
 *          access to the resource through the base inference actions (<a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_InvokeModel.html">InvokeModel</a> and <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_InvokeModelWithResponseStream.html">InvokeModelWithResponseStream</a>). For more information see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/security_iam_id-based-policy-examples.html#security_iam_id-based-policy-examples-deny-inference">Deny access for inference on specific models</a>.
 *       </p>
 *          </important>
 *          <p>For troubleshooting some of the common errors you might encounter when using the <code>ConverseStream</code> API,
 *          see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html">Troubleshooting Amazon Bedrock API Error Codes</a> in the Amazon Bedrock User Guide</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockRuntimeClient, ConverseStreamCommand } from "@aws-sdk/client-bedrock-runtime"; // ES Modules import
 * // const { BedrockRuntimeClient, ConverseStreamCommand } = require("@aws-sdk/client-bedrock-runtime"); // CommonJS import
 * const client = new BedrockRuntimeClient(config);
 * const input = { // ConverseStreamRequest
 *   modelId: "STRING_VALUE", // required
 *   messages: [ // Messages
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
 *           document: { // DocumentBlock
 *             format: "pdf" || "csv" || "doc" || "docx" || "xls" || "xlsx" || "html" || "txt" || "md", // required
 *             name: "STRING_VALUE", // required
 *             source: { // DocumentSource Union: only one key present
 *               bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *             },
 *           },
 *           video: { // VideoBlock
 *             format: "mkv" || "mov" || "mp4" || "webm" || "flv" || "mpeg" || "mpg" || "wmv" || "three_gp", // required
 *             source: { // VideoSource Union: only one key present
 *               bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *               s3Location: { // S3Location
 *                 uri: "STRING_VALUE", // required
 *                 bucketOwner: "STRING_VALUE",
 *               },
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
 *                 document: {
 *                   format: "pdf" || "csv" || "doc" || "docx" || "xls" || "xlsx" || "html" || "txt" || "md", // required
 *                   name: "STRING_VALUE", // required
 *                   source: {//  Union: only one key present
 *                     bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *                   },
 *                 },
 *                 video: {
 *                   format: "mkv" || "mov" || "mp4" || "webm" || "flv" || "mpeg" || "mpg" || "wmv" || "three_gp", // required
 *                   source: {//  Union: only one key present
 *                     bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *                     s3Location: {
 *                       uri: "STRING_VALUE", // required
 *                       bucketOwner: "STRING_VALUE",
 *                     },
 *                   },
 *                 },
 *               },
 *             ],
 *             status: "success" || "error",
 *           },
 *           guardContent: { // GuardrailConverseContentBlock Union: only one key present
 *             text: { // GuardrailConverseTextBlock
 *               text: "STRING_VALUE", // required
 *               qualifiers: [ // GuardrailConverseContentQualifierList
 *                 "grounding_source" || "query" || "guard_content",
 *               ],
 *             },
 *             image: { // GuardrailConverseImageBlock
 *               format: "png" || "jpeg", // required
 *               source: { // GuardrailConverseImageSource Union: only one key present
 *                 bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *               },
 *             },
 *           },
 *           cachePoint: { // CachePointBlock
 *             type: "default", // required
 *           },
 *           reasoningContent: { // ReasoningContentBlock Union: only one key present
 *             reasoningText: { // ReasoningTextBlock
 *               text: "STRING_VALUE", // required
 *               signature: "STRING_VALUE",
 *             },
 *             redactedContent: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *           },
 *         },
 *       ],
 *     },
 *   ],
 *   system: [ // SystemContentBlocks
 *     { // SystemContentBlock Union: only one key present
 *       text: "STRING_VALUE",
 *       guardContent: {//  Union: only one key present
 *         text: {
 *           text: "STRING_VALUE", // required
 *           qualifiers: [
 *             "grounding_source" || "query" || "guard_content",
 *           ],
 *         },
 *         image: {
 *           format: "png" || "jpeg", // required
 *           source: {//  Union: only one key present
 *             bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *           },
 *         },
 *       },
 *       cachePoint: {
 *         type: "default", // required
 *       },
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
 *         cachePoint: "<CachePointBlock>",
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
 *   guardrailConfig: { // GuardrailStreamConfiguration
 *     guardrailIdentifier: "STRING_VALUE", // required
 *     guardrailVersion: "STRING_VALUE", // required
 *     trace: "enabled" || "disabled" || "enabled_full",
 *     streamProcessingMode: "sync" || "async",
 *   },
 *   additionalModelRequestFields: "DOCUMENT_VALUE",
 *   promptVariables: { // PromptVariableMap
 *     "<keys>": { // PromptVariableValues Union: only one key present
 *       text: "STRING_VALUE",
 *     },
 *   },
 *   additionalModelResponseFieldPaths: [ // AdditionalModelResponseFieldPaths
 *     "STRING_VALUE",
 *   ],
 *   requestMetadata: { // RequestMetadata
 *     "<keys>": "STRING_VALUE",
 *   },
 *   performanceConfig: { // PerformanceConfiguration
 *     latency: "standard" || "optimized",
 *   },
 * };
 * const command = new ConverseStreamCommand(input);
 * const response = await client.send(command);
 * // { // ConverseStreamResponse
 * //   stream: { // ConverseStreamOutput Union: only one key present
 * //     messageStart: { // MessageStartEvent
 * //       role: "user" || "assistant", // required
 * //     },
 * //     contentBlockStart: { // ContentBlockStartEvent
 * //       start: { // ContentBlockStart Union: only one key present
 * //         toolUse: { // ToolUseBlockStart
 * //           toolUseId: "STRING_VALUE", // required
 * //           name: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       contentBlockIndex: Number("int"), // required
 * //     },
 * //     contentBlockDelta: { // ContentBlockDeltaEvent
 * //       delta: { // ContentBlockDelta Union: only one key present
 * //         text: "STRING_VALUE",
 * //         toolUse: { // ToolUseBlockDelta
 * //           input: "STRING_VALUE", // required
 * //         },
 * //         reasoningContent: { // ReasoningContentBlockDelta Union: only one key present
 * //           text: "STRING_VALUE",
 * //           redactedContent: new Uint8Array(),
 * //           signature: "STRING_VALUE",
 * //         },
 * //       },
 * //       contentBlockIndex: Number("int"), // required
 * //     },
 * //     contentBlockStop: { // ContentBlockStopEvent
 * //       contentBlockIndex: Number("int"), // required
 * //     },
 * //     messageStop: { // MessageStopEvent
 * //       stopReason: "end_turn" || "tool_use" || "max_tokens" || "stop_sequence" || "guardrail_intervened" || "content_filtered", // required
 * //       additionalModelResponseFields: "DOCUMENT_VALUE",
 * //     },
 * //     metadata: { // ConverseStreamMetadataEvent
 * //       usage: { // TokenUsage
 * //         inputTokens: Number("int"), // required
 * //         outputTokens: Number("int"), // required
 * //         totalTokens: Number("int"), // required
 * //         cacheReadInputTokens: Number("int"),
 * //         cacheWriteInputTokens: Number("int"),
 * //       },
 * //       metrics: { // ConverseStreamMetrics
 * //         latencyMs: Number("long"), // required
 * //       },
 * //       trace: { // ConverseStreamTrace
 * //         guardrail: { // GuardrailTraceAssessment
 * //           modelOutput: [ // ModelOutputs
 * //             "STRING_VALUE",
 * //           ],
 * //           inputAssessment: { // GuardrailAssessmentMap
 * //             "<keys>": { // GuardrailAssessment
 * //               topicPolicy: { // GuardrailTopicPolicyAssessment
 * //                 topics: [ // GuardrailTopicList // required
 * //                   { // GuardrailTopic
 * //                     name: "STRING_VALUE", // required
 * //                     type: "DENY", // required
 * //                     action: "BLOCKED" || "NONE", // required
 * //                     detected: true || false,
 * //                   },
 * //                 ],
 * //               },
 * //               contentPolicy: { // GuardrailContentPolicyAssessment
 * //                 filters: [ // GuardrailContentFilterList // required
 * //                   { // GuardrailContentFilter
 * //                     type: "INSULTS" || "HATE" || "SEXUAL" || "VIOLENCE" || "MISCONDUCT" || "PROMPT_ATTACK", // required
 * //                     confidence: "NONE" || "LOW" || "MEDIUM" || "HIGH", // required
 * //                     filterStrength: "NONE" || "LOW" || "MEDIUM" || "HIGH",
 * //                     action: "BLOCKED" || "NONE", // required
 * //                     detected: true || false,
 * //                   },
 * //                 ],
 * //               },
 * //               wordPolicy: { // GuardrailWordPolicyAssessment
 * //                 customWords: [ // GuardrailCustomWordList // required
 * //                   { // GuardrailCustomWord
 * //                     match: "STRING_VALUE", // required
 * //                     action: "BLOCKED" || "NONE", // required
 * //                     detected: true || false,
 * //                   },
 * //                 ],
 * //                 managedWordLists: [ // GuardrailManagedWordList // required
 * //                   { // GuardrailManagedWord
 * //                     match: "STRING_VALUE", // required
 * //                     type: "PROFANITY", // required
 * //                     action: "BLOCKED" || "NONE", // required
 * //                     detected: true || false,
 * //                   },
 * //                 ],
 * //               },
 * //               sensitiveInformationPolicy: { // GuardrailSensitiveInformationPolicyAssessment
 * //                 piiEntities: [ // GuardrailPiiEntityFilterList // required
 * //                   { // GuardrailPiiEntityFilter
 * //                     match: "STRING_VALUE", // required
 * //                     type: "ADDRESS" || "AGE" || "AWS_ACCESS_KEY" || "AWS_SECRET_KEY" || "CA_HEALTH_NUMBER" || "CA_SOCIAL_INSURANCE_NUMBER" || "CREDIT_DEBIT_CARD_CVV" || "CREDIT_DEBIT_CARD_EXPIRY" || "CREDIT_DEBIT_CARD_NUMBER" || "DRIVER_ID" || "EMAIL" || "INTERNATIONAL_BANK_ACCOUNT_NUMBER" || "IP_ADDRESS" || "LICENSE_PLATE" || "MAC_ADDRESS" || "NAME" || "PASSWORD" || "PHONE" || "PIN" || "SWIFT_CODE" || "UK_NATIONAL_HEALTH_SERVICE_NUMBER" || "UK_NATIONAL_INSURANCE_NUMBER" || "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER" || "URL" || "USERNAME" || "US_BANK_ACCOUNT_NUMBER" || "US_BANK_ROUTING_NUMBER" || "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" || "US_PASSPORT_NUMBER" || "US_SOCIAL_SECURITY_NUMBER" || "VEHICLE_IDENTIFICATION_NUMBER", // required
 * //                     action: "ANONYMIZED" || "BLOCKED" || "NONE", // required
 * //                     detected: true || false,
 * //                   },
 * //                 ],
 * //                 regexes: [ // GuardrailRegexFilterList // required
 * //                   { // GuardrailRegexFilter
 * //                     name: "STRING_VALUE",
 * //                     match: "STRING_VALUE",
 * //                     regex: "STRING_VALUE",
 * //                     action: "ANONYMIZED" || "BLOCKED" || "NONE", // required
 * //                     detected: true || false,
 * //                   },
 * //                 ],
 * //               },
 * //               contextualGroundingPolicy: { // GuardrailContextualGroundingPolicyAssessment
 * //                 filters: [ // GuardrailContextualGroundingFilters
 * //                   { // GuardrailContextualGroundingFilter
 * //                     type: "GROUNDING" || "RELEVANCE", // required
 * //                     threshold: Number("double"), // required
 * //                     score: Number("double"), // required
 * //                     action: "BLOCKED" || "NONE", // required
 * //                     detected: true || false,
 * //                   },
 * //                 ],
 * //               },
 * //               invocationMetrics: { // GuardrailInvocationMetrics
 * //                 guardrailProcessingLatency: Number("long"),
 * //                 usage: { // GuardrailUsage
 * //                   topicPolicyUnits: Number("int"), // required
 * //                   contentPolicyUnits: Number("int"), // required
 * //                   wordPolicyUnits: Number("int"), // required
 * //                   sensitiveInformationPolicyUnits: Number("int"), // required
 * //                   sensitiveInformationPolicyFreeUnits: Number("int"), // required
 * //                   contextualGroundingPolicyUnits: Number("int"), // required
 * //                   contentPolicyImageUnits: Number("int"),
 * //                 },
 * //                 guardrailCoverage: { // GuardrailCoverage
 * //                   textCharacters: { // GuardrailTextCharactersCoverage
 * //                     guarded: Number("int"),
 * //                     total: Number("int"),
 * //                   },
 * //                   images: { // GuardrailImageCoverage
 * //                     guarded: Number("int"),
 * //                     total: Number("int"),
 * //                   },
 * //                 },
 * //               },
 * //             },
 * //           },
 * //           outputAssessments: { // GuardrailAssessmentListMap
 * //             "<keys>": [ // GuardrailAssessmentList
 * //               {
 * //                 topicPolicy: {
 * //                   topics: [ // required
 * //                     {
 * //                       name: "STRING_VALUE", // required
 * //                       type: "DENY", // required
 * //                       action: "BLOCKED" || "NONE", // required
 * //                       detected: true || false,
 * //                     },
 * //                   ],
 * //                 },
 * //                 contentPolicy: {
 * //                   filters: [ // required
 * //                     {
 * //                       type: "INSULTS" || "HATE" || "SEXUAL" || "VIOLENCE" || "MISCONDUCT" || "PROMPT_ATTACK", // required
 * //                       confidence: "NONE" || "LOW" || "MEDIUM" || "HIGH", // required
 * //                       filterStrength: "NONE" || "LOW" || "MEDIUM" || "HIGH",
 * //                       action: "BLOCKED" || "NONE", // required
 * //                       detected: true || false,
 * //                     },
 * //                   ],
 * //                 },
 * //                 wordPolicy: {
 * //                   customWords: [ // required
 * //                     {
 * //                       match: "STRING_VALUE", // required
 * //                       action: "BLOCKED" || "NONE", // required
 * //                       detected: true || false,
 * //                     },
 * //                   ],
 * //                   managedWordLists: [ // required
 * //                     {
 * //                       match: "STRING_VALUE", // required
 * //                       type: "PROFANITY", // required
 * //                       action: "BLOCKED" || "NONE", // required
 * //                       detected: true || false,
 * //                     },
 * //                   ],
 * //                 },
 * //                 sensitiveInformationPolicy: {
 * //                   piiEntities: [ // required
 * //                     {
 * //                       match: "STRING_VALUE", // required
 * //                       type: "ADDRESS" || "AGE" || "AWS_ACCESS_KEY" || "AWS_SECRET_KEY" || "CA_HEALTH_NUMBER" || "CA_SOCIAL_INSURANCE_NUMBER" || "CREDIT_DEBIT_CARD_CVV" || "CREDIT_DEBIT_CARD_EXPIRY" || "CREDIT_DEBIT_CARD_NUMBER" || "DRIVER_ID" || "EMAIL" || "INTERNATIONAL_BANK_ACCOUNT_NUMBER" || "IP_ADDRESS" || "LICENSE_PLATE" || "MAC_ADDRESS" || "NAME" || "PASSWORD" || "PHONE" || "PIN" || "SWIFT_CODE" || "UK_NATIONAL_HEALTH_SERVICE_NUMBER" || "UK_NATIONAL_INSURANCE_NUMBER" || "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER" || "URL" || "USERNAME" || "US_BANK_ACCOUNT_NUMBER" || "US_BANK_ROUTING_NUMBER" || "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" || "US_PASSPORT_NUMBER" || "US_SOCIAL_SECURITY_NUMBER" || "VEHICLE_IDENTIFICATION_NUMBER", // required
 * //                       action: "ANONYMIZED" || "BLOCKED" || "NONE", // required
 * //                       detected: true || false,
 * //                     },
 * //                   ],
 * //                   regexes: [ // required
 * //                     {
 * //                       name: "STRING_VALUE",
 * //                       match: "STRING_VALUE",
 * //                       regex: "STRING_VALUE",
 * //                       action: "ANONYMIZED" || "BLOCKED" || "NONE", // required
 * //                       detected: true || false,
 * //                     },
 * //                   ],
 * //                 },
 * //                 contextualGroundingPolicy: {
 * //                   filters: [
 * //                     {
 * //                       type: "GROUNDING" || "RELEVANCE", // required
 * //                       threshold: Number("double"), // required
 * //                       score: Number("double"), // required
 * //                       action: "BLOCKED" || "NONE", // required
 * //                       detected: true || false,
 * //                     },
 * //                   ],
 * //                 },
 * //                 invocationMetrics: {
 * //                   guardrailProcessingLatency: Number("long"),
 * //                   usage: {
 * //                     topicPolicyUnits: Number("int"), // required
 * //                     contentPolicyUnits: Number("int"), // required
 * //                     wordPolicyUnits: Number("int"), // required
 * //                     sensitiveInformationPolicyUnits: Number("int"), // required
 * //                     sensitiveInformationPolicyFreeUnits: Number("int"), // required
 * //                     contextualGroundingPolicyUnits: Number("int"), // required
 * //                     contentPolicyImageUnits: Number("int"),
 * //                   },
 * //                   guardrailCoverage: {
 * //                     textCharacters: {
 * //                       guarded: Number("int"),
 * //                       total: Number("int"),
 * //                     },
 * //                     images: {
 * //                       guarded: Number("int"),
 * //                       total: Number("int"),
 * //                     },
 * //                   },
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //           actionReason: "STRING_VALUE",
 * //         },
 * //         promptRouter: { // PromptRouterTrace
 * //           invokedModelId: "STRING_VALUE",
 * //         },
 * //       },
 * //       performanceConfig: { // PerformanceConfiguration
 * //         latency: "standard" || "optimized",
 * //       },
 * //     },
 * //     internalServerException: { // InternalServerException
 * //       message: "STRING_VALUE",
 * //     },
 * //     modelStreamErrorException: { // ModelStreamErrorException
 * //       message: "STRING_VALUE",
 * //       originalStatusCode: Number("int"),
 * //       originalMessage: "STRING_VALUE",
 * //     },
 * //     validationException: { // ValidationException
 * //       message: "STRING_VALUE",
 * //     },
 * //     throttlingException: { // ThrottlingException
 * //       message: "STRING_VALUE",
 * //     },
 * //     serviceUnavailableException: { // ServiceUnavailableException
 * //       message: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param ConverseStreamCommandInput - {@link ConverseStreamCommandInput}
 * @returns {@link ConverseStreamCommandOutput}
 * @see {@link ConverseStreamCommandInput} for command's `input` shape.
 * @see {@link ConverseStreamCommandOutput} for command's `response` shape.
 * @see {@link BedrockRuntimeClientResolvedConfig | config} for BedrockRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because you do not have sufficient permissions to perform the requested action. For troubleshooting this error,
 *          see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-access-denied">AccessDeniedException</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. For troubleshooting this error,
 *          see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-internal-failure">InternalFailure</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link ModelErrorException} (client fault)
 *  <p>The request failed due to an error while processing the model.</p>
 *
 * @throws {@link ModelNotReadyException} (client fault)
 *  <p>The model specified in the request is not ready to serve inference requests. The AWS SDK
 *          will automatically retry the operation up to 5 times. For information about configuring
 *          automatic retries, see <a href="https://docs.aws.amazon.com/sdkref/latest/guide/feature-retry-behavior.html">Retry behavior</a> in the <i>AWS SDKs and Tools</i>
 *       reference guide.</p>
 *
 * @throws {@link ModelTimeoutException} (client fault)
 *  <p>The request took too long to process. Processing time exceeded the model timeout length.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. For troubleshooting this error,
 *          see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-resource-not-found">ResourceNotFound</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service isn't currently available. For troubleshooting this error,
 *          see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-service-unavailable">ServiceUnavailable</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request was denied due to exceeding the account quotas for <i>Amazon Bedrock</i>. For
 *          troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-throttling-exception">ThrottlingException</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by <i>Amazon Bedrock</i>. For troubleshooting this error,
 *          see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-validation-error">ValidationError</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link BedrockRuntimeServiceException}
 * <p>Base exception class for all service exceptions from BedrockRuntime service.</p>
 *
 *
 * @public
 */
export class ConverseStreamCommand extends $Command
  .classBuilder<
    ConverseStreamCommandInput,
    ConverseStreamCommandOutput,
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
  .s("AmazonBedrockFrontendService", "ConverseStream", {
    /**
     * @internal
     */
    eventStream: {
      output: true,
    },
  })
  .n("BedrockRuntimeClient", "ConverseStreamCommand")
  .f(ConverseStreamRequestFilterSensitiveLog, ConverseStreamResponseFilterSensitiveLog)
  .ser(se_ConverseStreamCommand)
  .de(de_ConverseStreamCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ConverseStreamRequest;
      output: ConverseStreamResponse;
    };
    sdk: {
      input: ConverseStreamCommandInput;
      output: ConverseStreamCommandOutput;
    };
  };
}
