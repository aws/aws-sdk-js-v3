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
 *          If a model has unique inference parameters, you can also pass those unique parameters
 *          to the model.</p>
 *          <p>Amazon Bedrock doesn't store any text, images, or documents that you provide as content. The data is only used to generate the response.</p>
 *          <p>For information about the Converse API, see <i>Use the Converse API</i> in the <i>Amazon Bedrock User Guide</i>.
 *             To use a guardrail, see  <i>Use a guardrail with the Converse API</i> in the <i>Amazon Bedrock User Guide</i>.
 *             To use a tool with a model, see <i>Tool use (Function calling)</i> in the <i>Amazon Bedrock User Guide</i>
 *          </p>
 *          <p>For example code, see <i>Converse API examples</i> in the <i>Amazon Bedrock User Guide</i>.
 *       </p>
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
 *           document: { // DocumentBlock
 *             format: "pdf" || "csv" || "doc" || "docx" || "xls" || "xlsx" || "html" || "txt" || "md", // required
 *             name: "STRING_VALUE", // required
 *             source: { // DocumentSource Union: only one key present
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
 *                 document: {
 *                   format: "pdf" || "csv" || "doc" || "docx" || "xls" || "xlsx" || "html" || "txt" || "md", // required
 *                   name: "STRING_VALUE", // required
 *                   source: {//  Union: only one key present
 *                     bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
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
 *   guardrailConfig: { // GuardrailConfiguration
 *     guardrailIdentifier: "STRING_VALUE", // required
 *     guardrailVersion: "STRING_VALUE", // required
 *     trace: "enabled" || "disabled",
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
 * //           document: { // DocumentBlock
 * //             format: "pdf" || "csv" || "doc" || "docx" || "xls" || "xlsx" || "html" || "txt" || "md", // required
 * //             name: "STRING_VALUE", // required
 * //             source: { // DocumentSource Union: only one key present
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
 * //                 document: {
 * //                   format: "pdf" || "csv" || "doc" || "docx" || "xls" || "xlsx" || "html" || "txt" || "md", // required
 * //                   name: "STRING_VALUE", // required
 * //                   source: {//  Union: only one key present
 * //                     bytes: new Uint8Array(),
 * //                   },
 * //                 },
 * //               },
 * //             ],
 * //             status: "success" || "error",
 * //           },
 * //           guardContent: { // GuardrailConverseContentBlock Union: only one key present
 * //             text: { // GuardrailConverseTextBlock
 * //               text: "STRING_VALUE", // required
 * //               qualifiers: [ // GuardrailConverseContentQualifierList
 * //                 "grounding_source" || "query" || "guard_content",
 * //               ],
 * //             },
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   stopReason: "end_turn" || "tool_use" || "max_tokens" || "stop_sequence" || "guardrail_intervened" || "content_filtered", // required
 * //   usage: { // TokenUsage
 * //     inputTokens: Number("int"), // required
 * //     outputTokens: Number("int"), // required
 * //     totalTokens: Number("int"), // required
 * //   },
 * //   metrics: { // ConverseMetrics
 * //     latencyMs: Number("long"), // required
 * //   },
 * //   additionalModelResponseFields: "DOCUMENT_VALUE",
 * //   trace: { // ConverseTrace
 * //     guardrail: { // GuardrailTraceAssessment
 * //       modelOutput: [ // ModelOutputs
 * //         "STRING_VALUE",
 * //       ],
 * //       inputAssessment: { // GuardrailAssessmentMap
 * //         "<keys>": { // GuardrailAssessment
 * //           topicPolicy: { // GuardrailTopicPolicyAssessment
 * //             topics: [ // GuardrailTopicList // required
 * //               { // GuardrailTopic
 * //                 name: "STRING_VALUE", // required
 * //                 type: "DENY", // required
 * //                 action: "BLOCKED", // required
 * //               },
 * //             ],
 * //           },
 * //           contentPolicy: { // GuardrailContentPolicyAssessment
 * //             filters: [ // GuardrailContentFilterList // required
 * //               { // GuardrailContentFilter
 * //                 type: "INSULTS" || "HATE" || "SEXUAL" || "VIOLENCE" || "MISCONDUCT" || "PROMPT_ATTACK", // required
 * //                 confidence: "NONE" || "LOW" || "MEDIUM" || "HIGH", // required
 * //                 action: "BLOCKED", // required
 * //               },
 * //             ],
 * //           },
 * //           wordPolicy: { // GuardrailWordPolicyAssessment
 * //             customWords: [ // GuardrailCustomWordList // required
 * //               { // GuardrailCustomWord
 * //                 match: "STRING_VALUE", // required
 * //                 action: "BLOCKED", // required
 * //               },
 * //             ],
 * //             managedWordLists: [ // GuardrailManagedWordList // required
 * //               { // GuardrailManagedWord
 * //                 match: "STRING_VALUE", // required
 * //                 type: "PROFANITY", // required
 * //                 action: "BLOCKED", // required
 * //               },
 * //             ],
 * //           },
 * //           sensitiveInformationPolicy: { // GuardrailSensitiveInformationPolicyAssessment
 * //             piiEntities: [ // GuardrailPiiEntityFilterList // required
 * //               { // GuardrailPiiEntityFilter
 * //                 match: "STRING_VALUE", // required
 * //                 type: "ADDRESS" || "AGE" || "AWS_ACCESS_KEY" || "AWS_SECRET_KEY" || "CA_HEALTH_NUMBER" || "CA_SOCIAL_INSURANCE_NUMBER" || "CREDIT_DEBIT_CARD_CVV" || "CREDIT_DEBIT_CARD_EXPIRY" || "CREDIT_DEBIT_CARD_NUMBER" || "DRIVER_ID" || "EMAIL" || "INTERNATIONAL_BANK_ACCOUNT_NUMBER" || "IP_ADDRESS" || "LICENSE_PLATE" || "MAC_ADDRESS" || "NAME" || "PASSWORD" || "PHONE" || "PIN" || "SWIFT_CODE" || "UK_NATIONAL_HEALTH_SERVICE_NUMBER" || "UK_NATIONAL_INSURANCE_NUMBER" || "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER" || "URL" || "USERNAME" || "US_BANK_ACCOUNT_NUMBER" || "US_BANK_ROUTING_NUMBER" || "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" || "US_PASSPORT_NUMBER" || "US_SOCIAL_SECURITY_NUMBER" || "VEHICLE_IDENTIFICATION_NUMBER", // required
 * //                 action: "ANONYMIZED" || "BLOCKED", // required
 * //               },
 * //             ],
 * //             regexes: [ // GuardrailRegexFilterList // required
 * //               { // GuardrailRegexFilter
 * //                 name: "STRING_VALUE",
 * //                 match: "STRING_VALUE",
 * //                 regex: "STRING_VALUE",
 * //                 action: "ANONYMIZED" || "BLOCKED", // required
 * //               },
 * //             ],
 * //           },
 * //           contextualGroundingPolicy: { // GuardrailContextualGroundingPolicyAssessment
 * //             filters: [ // GuardrailContextualGroundingFilters
 * //               { // GuardrailContextualGroundingFilter
 * //                 type: "GROUNDING" || "RELEVANCE", // required
 * //                 threshold: Number("double"), // required
 * //                 score: Number("double"), // required
 * //                 action: "BLOCKED" || "NONE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       },
 * //       outputAssessments: { // GuardrailAssessmentListMap
 * //         "<keys>": [ // GuardrailAssessmentList
 * //           {
 * //             topicPolicy: {
 * //               topics: [ // required
 * //                 {
 * //                   name: "STRING_VALUE", // required
 * //                   type: "DENY", // required
 * //                   action: "BLOCKED", // required
 * //                 },
 * //               ],
 * //             },
 * //             contentPolicy: {
 * //               filters: [ // required
 * //                 {
 * //                   type: "INSULTS" || "HATE" || "SEXUAL" || "VIOLENCE" || "MISCONDUCT" || "PROMPT_ATTACK", // required
 * //                   confidence: "NONE" || "LOW" || "MEDIUM" || "HIGH", // required
 * //                   action: "BLOCKED", // required
 * //                 },
 * //               ],
 * //             },
 * //             wordPolicy: {
 * //               customWords: [ // required
 * //                 {
 * //                   match: "STRING_VALUE", // required
 * //                   action: "BLOCKED", // required
 * //                 },
 * //               ],
 * //               managedWordLists: [ // required
 * //                 {
 * //                   match: "STRING_VALUE", // required
 * //                   type: "PROFANITY", // required
 * //                   action: "BLOCKED", // required
 * //                 },
 * //               ],
 * //             },
 * //             sensitiveInformationPolicy: {
 * //               piiEntities: [ // required
 * //                 {
 * //                   match: "STRING_VALUE", // required
 * //                   type: "ADDRESS" || "AGE" || "AWS_ACCESS_KEY" || "AWS_SECRET_KEY" || "CA_HEALTH_NUMBER" || "CA_SOCIAL_INSURANCE_NUMBER" || "CREDIT_DEBIT_CARD_CVV" || "CREDIT_DEBIT_CARD_EXPIRY" || "CREDIT_DEBIT_CARD_NUMBER" || "DRIVER_ID" || "EMAIL" || "INTERNATIONAL_BANK_ACCOUNT_NUMBER" || "IP_ADDRESS" || "LICENSE_PLATE" || "MAC_ADDRESS" || "NAME" || "PASSWORD" || "PHONE" || "PIN" || "SWIFT_CODE" || "UK_NATIONAL_HEALTH_SERVICE_NUMBER" || "UK_NATIONAL_INSURANCE_NUMBER" || "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER" || "URL" || "USERNAME" || "US_BANK_ACCOUNT_NUMBER" || "US_BANK_ROUTING_NUMBER" || "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" || "US_PASSPORT_NUMBER" || "US_SOCIAL_SECURITY_NUMBER" || "VEHICLE_IDENTIFICATION_NUMBER", // required
 * //                   action: "ANONYMIZED" || "BLOCKED", // required
 * //                 },
 * //               ],
 * //               regexes: [ // required
 * //                 {
 * //                   name: "STRING_VALUE",
 * //                   match: "STRING_VALUE",
 * //                   regex: "STRING_VALUE",
 * //                   action: "ANONYMIZED" || "BLOCKED", // required
 * //                 },
 * //               ],
 * //             },
 * //             contextualGroundingPolicy: {
 * //               filters: [
 * //                 {
 * //                   type: "GROUNDING" || "RELEVANCE", // required
 * //                   threshold: Number("double"), // required
 * //                   score: Number("double"), // required
 * //                   action: "BLOCKED" || "NONE", // required
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   },
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
 *  <p>The model specified in the request is not ready to serve inference requests. The AWS SDK
 *            will automatically retry the operation up to 5 times. For information about configuring
 *            automatic retries, see <a href="https://docs.aws.amazon.com/sdkref/latest/guide/feature-retry-behavior.html">Retry behavior</a> in the <i>AWS SDKs and Tools</i>
 *            reference guide.</p>
 *
 * @throws {@link ModelTimeoutException} (client fault)
 *  <p>The request took too long to process. Processing time exceeded the model timeout length.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service isn't currently available. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request was throttled because of service-wide limitations. Resubmit your request later or in a different region. You can also purchase <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prov-throughput.html">Provisioned Throughput</a> to increase the rate or number of tokens you can process.</p>
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
  .ep(commonParams)
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
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ConverseRequest;
      output: ConverseResponse;
    };
    sdk: {
      input: ConverseCommandInput;
      output: ConverseCommandOutput;
    };
  };
}
