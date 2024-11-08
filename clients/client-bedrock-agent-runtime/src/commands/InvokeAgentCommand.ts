// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockAgentRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentRuntimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  InvokeAgentRequest,
  InvokeAgentRequestFilterSensitiveLog,
  InvokeAgentResponse,
  InvokeAgentResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_InvokeAgentCommand, se_InvokeAgentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InvokeAgentCommand}.
 */
export interface InvokeAgentCommandInput extends InvokeAgentRequest {}
/**
 * @public
 *
 * The output of {@link InvokeAgentCommand}.
 */
export interface InvokeAgentCommandOutput extends InvokeAgentResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>The CLI doesn't support streaming operations in Amazon Bedrock, including <code>InvokeAgent</code>.</p>
 *          </note>
 *          <p>Sends a prompt for the agent to process and respond to. Note the following fields for the request:</p>
 *          <ul>
 *             <li>
 *                <p>To continue the same conversation with an agent, use the same <code>sessionId</code> value in the request.</p>
 *             </li>
 *             <li>
 *                <p>To activate trace enablement, turn <code>enableTrace</code> to <code>true</code>. Trace enablement helps you follow the agent's reasoning process that led it to the information it processed, the actions it took, and the final result it yielded. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-test.html#trace-events">Trace enablement</a>.</p>
 *             </li>
 *             <li>
 *                <p>End a conversation by setting <code>endSession</code> to <code>true</code>.</p>
 *             </li>
 *             <li>
 *                <p>In the <code>sessionState</code> object, you can include attributes for the session or prompt or, if you configured an action group to return control, results from invocation of the action group.</p>
 *             </li>
 *          </ul>
 *          <p>The response is returned in the <code>bytes</code> field of the <code>chunk</code> object.</p>
 *          <ul>
 *             <li>
 *                <p>The <code>attribution</code> object contains citations for parts of the response.</p>
 *             </li>
 *             <li>
 *                <p>If you set <code>enableTrace</code> to <code>true</code> in the request, you can trace the agent's steps and reasoning process that led it to the response.</p>
 *             </li>
 *             <li>
 *                <p>If the action predicted was configured to return control, the response returns parameters for the action, elicited from the user, in the <code>returnControl</code> field.</p>
 *             </li>
 *             <li>
 *                <p>Errors are also surfaced in the response.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentRuntimeClient, InvokeAgentCommand } from "@aws-sdk/client-bedrock-agent-runtime"; // ES Modules import
 * // const { BedrockAgentRuntimeClient, InvokeAgentCommand } = require("@aws-sdk/client-bedrock-agent-runtime"); // CommonJS import
 * const client = new BedrockAgentRuntimeClient(config);
 * const input = { // InvokeAgentRequest
 *   sessionState: { // SessionState
 *     sessionAttributes: { // SessionAttributesMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     promptSessionAttributes: { // PromptSessionAttributesMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     returnControlInvocationResults: [ // ReturnControlInvocationResults
 *       { // InvocationResultMember Union: only one key present
 *         apiResult: { // ApiResult
 *           actionGroup: "STRING_VALUE", // required
 *           httpMethod: "STRING_VALUE",
 *           apiPath: "STRING_VALUE",
 *           confirmationState: "CONFIRM" || "DENY",
 *           responseBody: { // ResponseBody
 *             "<keys>": { // ContentBody
 *               body: "STRING_VALUE",
 *             },
 *           },
 *           httpStatusCode: Number("int"),
 *           responseState: "FAILURE" || "REPROMPT",
 *         },
 *         functionResult: { // FunctionResult
 *           actionGroup: "STRING_VALUE", // required
 *           confirmationState: "CONFIRM" || "DENY",
 *           function: "STRING_VALUE",
 *           responseBody: {
 *             "<keys>": {
 *               body: "STRING_VALUE",
 *             },
 *           },
 *           responseState: "FAILURE" || "REPROMPT",
 *         },
 *       },
 *     ],
 *     invocationId: "STRING_VALUE",
 *     files: [ // InputFiles
 *       { // InputFile
 *         name: "STRING_VALUE", // required
 *         source: { // FileSource
 *           sourceType: "S3" || "BYTE_CONTENT", // required
 *           s3Location: { // S3ObjectFile
 *             uri: "STRING_VALUE", // required
 *           },
 *           byteContent: { // ByteContentFile
 *             mediaType: "STRING_VALUE", // required
 *             data: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")             // required
 *           },
 *         },
 *         useCase: "CODE_INTERPRETER" || "CHAT", // required
 *       },
 *     ],
 *     knowledgeBaseConfigurations: [ // KnowledgeBaseConfigurations
 *       { // KnowledgeBaseConfiguration
 *         knowledgeBaseId: "STRING_VALUE", // required
 *         retrievalConfiguration: { // KnowledgeBaseRetrievalConfiguration
 *           vectorSearchConfiguration: { // KnowledgeBaseVectorSearchConfiguration
 *             numberOfResults: Number("int"),
 *             overrideSearchType: "HYBRID" || "SEMANTIC",
 *             filter: { // RetrievalFilter Union: only one key present
 *               equals: { // FilterAttribute
 *                 key: "STRING_VALUE", // required
 *                 value: "DOCUMENT_VALUE", // required
 *               },
 *               notEquals: {
 *                 key: "STRING_VALUE", // required
 *                 value: "DOCUMENT_VALUE", // required
 *               },
 *               greaterThan: {
 *                 key: "STRING_VALUE", // required
 *                 value: "DOCUMENT_VALUE", // required
 *               },
 *               greaterThanOrEquals: {
 *                 key: "STRING_VALUE", // required
 *                 value: "DOCUMENT_VALUE", // required
 *               },
 *               lessThan: {
 *                 key: "STRING_VALUE", // required
 *                 value: "DOCUMENT_VALUE", // required
 *               },
 *               lessThanOrEquals: "<FilterAttribute>",
 *               in: "<FilterAttribute>",
 *               notIn: "<FilterAttribute>",
 *               startsWith: "<FilterAttribute>",
 *               listContains: "<FilterAttribute>",
 *               stringContains: "<FilterAttribute>",
 *               andAll: [ // RetrievalFilterList
 *                 {//  Union: only one key present
 *                   equals: "<FilterAttribute>",
 *                   notEquals: "<FilterAttribute>",
 *                   greaterThan: "<FilterAttribute>",
 *                   greaterThanOrEquals: "<FilterAttribute>",
 *                   lessThan: "<FilterAttribute>",
 *                   lessThanOrEquals: "<FilterAttribute>",
 *                   in: "<FilterAttribute>",
 *                   notIn: "<FilterAttribute>",
 *                   startsWith: "<FilterAttribute>",
 *                   listContains: "<FilterAttribute>",
 *                   stringContains: "<FilterAttribute>",
 *                   andAll: [
 *                     "<RetrievalFilter>",
 *                   ],
 *                   orAll: [
 *                     "<RetrievalFilter>",
 *                   ],
 *                 },
 *               ],
 *               orAll: [
 *                 "<RetrievalFilter>",
 *               ],
 *             },
 *           },
 *         },
 *       },
 *     ],
 *   },
 *   agentId: "STRING_VALUE", // required
 *   agentAliasId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   endSession: true || false,
 *   enableTrace: true || false,
 *   inputText: "STRING_VALUE",
 *   memoryId: "STRING_VALUE",
 * };
 * const command = new InvokeAgentCommand(input);
 * const response = await client.send(command);
 * // { // InvokeAgentResponse
 * //   completion: { // ResponseStream Union: only one key present
 * //     chunk: { // PayloadPart
 * //       bytes: new Uint8Array(),
 * //       attribution: { // Attribution
 * //         citations: [ // Citations
 * //           { // Citation
 * //             generatedResponsePart: { // GeneratedResponsePart
 * //               textResponsePart: { // TextResponsePart
 * //                 text: "STRING_VALUE",
 * //                 span: { // Span
 * //                   start: Number("int"),
 * //                   end: Number("int"),
 * //                 },
 * //               },
 * //             },
 * //             retrievedReferences: [ // RetrievedReferences
 * //               { // RetrievedReference
 * //                 content: { // RetrievalResultContent
 * //                   text: "STRING_VALUE", // required
 * //                 },
 * //                 location: { // RetrievalResultLocation
 * //                   type: "S3" || "WEB" || "CONFLUENCE" || "SALESFORCE" || "SHAREPOINT", // required
 * //                   s3Location: { // RetrievalResultS3Location
 * //                     uri: "STRING_VALUE",
 * //                   },
 * //                   webLocation: { // RetrievalResultWebLocation
 * //                     url: "STRING_VALUE",
 * //                   },
 * //                   confluenceLocation: { // RetrievalResultConfluenceLocation
 * //                     url: "STRING_VALUE",
 * //                   },
 * //                   salesforceLocation: { // RetrievalResultSalesforceLocation
 * //                     url: "STRING_VALUE",
 * //                   },
 * //                   sharePointLocation: { // RetrievalResultSharePointLocation
 * //                     url: "STRING_VALUE",
 * //                   },
 * //                 },
 * //                 metadata: { // RetrievalResultMetadata
 * //                   "<keys>": "DOCUMENT_VALUE",
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     trace: { // TracePart
 * //       agentId: "STRING_VALUE",
 * //       agentAliasId: "STRING_VALUE",
 * //       sessionId: "STRING_VALUE",
 * //       agentVersion: "STRING_VALUE",
 * //       trace: { // Trace Union: only one key present
 * //         guardrailTrace: { // GuardrailTrace
 * //           action: "INTERVENED" || "NONE",
 * //           traceId: "STRING_VALUE",
 * //           inputAssessments: [ // GuardrailAssessmentList
 * //             { // GuardrailAssessment
 * //               topicPolicy: { // GuardrailTopicPolicyAssessment
 * //                 topics: [ // GuardrailTopicList
 * //                   { // GuardrailTopic
 * //                     name: "STRING_VALUE",
 * //                     type: "DENY",
 * //                     action: "BLOCKED",
 * //                   },
 * //                 ],
 * //               },
 * //               contentPolicy: { // GuardrailContentPolicyAssessment
 * //                 filters: [ // GuardrailContentFilterList
 * //                   { // GuardrailContentFilter
 * //                     type: "INSULTS" || "HATE" || "SEXUAL" || "VIOLENCE" || "MISCONDUCT" || "PROMPT_ATTACK",
 * //                     confidence: "NONE" || "LOW" || "MEDIUM" || "HIGH",
 * //                     action: "BLOCKED",
 * //                   },
 * //                 ],
 * //               },
 * //               wordPolicy: { // GuardrailWordPolicyAssessment
 * //                 customWords: [ // GuardrailCustomWordList
 * //                   { // GuardrailCustomWord
 * //                     match: "STRING_VALUE",
 * //                     action: "BLOCKED",
 * //                   },
 * //                 ],
 * //                 managedWordLists: [ // GuardrailManagedWordList
 * //                   { // GuardrailManagedWord
 * //                     match: "STRING_VALUE",
 * //                     type: "PROFANITY",
 * //                     action: "BLOCKED",
 * //                   },
 * //                 ],
 * //               },
 * //               sensitiveInformationPolicy: { // GuardrailSensitiveInformationPolicyAssessment
 * //                 piiEntities: [ // GuardrailPiiEntityFilterList
 * //                   { // GuardrailPiiEntityFilter
 * //                     type: "ADDRESS" || "AGE" || "AWS_ACCESS_KEY" || "AWS_SECRET_KEY" || "CA_HEALTH_NUMBER" || "CA_SOCIAL_INSURANCE_NUMBER" || "CREDIT_DEBIT_CARD_CVV" || "CREDIT_DEBIT_CARD_EXPIRY" || "CREDIT_DEBIT_CARD_NUMBER" || "DRIVER_ID" || "EMAIL" || "INTERNATIONAL_BANK_ACCOUNT_NUMBER" || "IP_ADDRESS" || "LICENSE_PLATE" || "MAC_ADDRESS" || "NAME" || "PASSWORD" || "PHONE" || "PIN" || "SWIFT_CODE" || "UK_NATIONAL_HEALTH_SERVICE_NUMBER" || "UK_NATIONAL_INSURANCE_NUMBER" || "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER" || "URL" || "USERNAME" || "US_BANK_ACCOUNT_NUMBER" || "US_BANK_ROUTING_NUMBER" || "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" || "US_PASSPORT_NUMBER" || "US_SOCIAL_SECURITY_NUMBER" || "VEHICLE_IDENTIFICATION_NUMBER",
 * //                     match: "STRING_VALUE",
 * //                     action: "BLOCKED" || "ANONYMIZED",
 * //                   },
 * //                 ],
 * //                 regexes: [ // GuardrailRegexFilterList
 * //                   { // GuardrailRegexFilter
 * //                     name: "STRING_VALUE",
 * //                     regex: "STRING_VALUE",
 * //                     match: "STRING_VALUE",
 * //                     action: "BLOCKED" || "ANONYMIZED",
 * //                   },
 * //                 ],
 * //               },
 * //             },
 * //           ],
 * //           outputAssessments: [
 * //             {
 * //               topicPolicy: {
 * //                 topics: [
 * //                   {
 * //                     name: "STRING_VALUE",
 * //                     type: "DENY",
 * //                     action: "BLOCKED",
 * //                   },
 * //                 ],
 * //               },
 * //               contentPolicy: {
 * //                 filters: [
 * //                   {
 * //                     type: "INSULTS" || "HATE" || "SEXUAL" || "VIOLENCE" || "MISCONDUCT" || "PROMPT_ATTACK",
 * //                     confidence: "NONE" || "LOW" || "MEDIUM" || "HIGH",
 * //                     action: "BLOCKED",
 * //                   },
 * //                 ],
 * //               },
 * //               wordPolicy: {
 * //                 customWords: [
 * //                   {
 * //                     match: "STRING_VALUE",
 * //                     action: "BLOCKED",
 * //                   },
 * //                 ],
 * //                 managedWordLists: [
 * //                   {
 * //                     match: "STRING_VALUE",
 * //                     type: "PROFANITY",
 * //                     action: "BLOCKED",
 * //                   },
 * //                 ],
 * //               },
 * //               sensitiveInformationPolicy: {
 * //                 piiEntities: [
 * //                   {
 * //                     type: "ADDRESS" || "AGE" || "AWS_ACCESS_KEY" || "AWS_SECRET_KEY" || "CA_HEALTH_NUMBER" || "CA_SOCIAL_INSURANCE_NUMBER" || "CREDIT_DEBIT_CARD_CVV" || "CREDIT_DEBIT_CARD_EXPIRY" || "CREDIT_DEBIT_CARD_NUMBER" || "DRIVER_ID" || "EMAIL" || "INTERNATIONAL_BANK_ACCOUNT_NUMBER" || "IP_ADDRESS" || "LICENSE_PLATE" || "MAC_ADDRESS" || "NAME" || "PASSWORD" || "PHONE" || "PIN" || "SWIFT_CODE" || "UK_NATIONAL_HEALTH_SERVICE_NUMBER" || "UK_NATIONAL_INSURANCE_NUMBER" || "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER" || "URL" || "USERNAME" || "US_BANK_ACCOUNT_NUMBER" || "US_BANK_ROUTING_NUMBER" || "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" || "US_PASSPORT_NUMBER" || "US_SOCIAL_SECURITY_NUMBER" || "VEHICLE_IDENTIFICATION_NUMBER",
 * //                     match: "STRING_VALUE",
 * //                     action: "BLOCKED" || "ANONYMIZED",
 * //                   },
 * //                 ],
 * //                 regexes: [
 * //                   {
 * //                     name: "STRING_VALUE",
 * //                     regex: "STRING_VALUE",
 * //                     match: "STRING_VALUE",
 * //                     action: "BLOCKED" || "ANONYMIZED",
 * //                   },
 * //                 ],
 * //               },
 * //             },
 * //           ],
 * //         },
 * //         preProcessingTrace: { // PreProcessingTrace Union: only one key present
 * //           modelInvocationInput: { // ModelInvocationInput
 * //             traceId: "STRING_VALUE",
 * //             text: "STRING_VALUE",
 * //             type: "PRE_PROCESSING" || "ORCHESTRATION" || "KNOWLEDGE_BASE_RESPONSE_GENERATION" || "POST_PROCESSING",
 * //             overrideLambda: "STRING_VALUE",
 * //             promptCreationMode: "DEFAULT" || "OVERRIDDEN",
 * //             inferenceConfiguration: { // InferenceConfiguration
 * //               temperature: Number("float"),
 * //               topP: Number("float"),
 * //               topK: Number("int"),
 * //               maximumLength: Number("int"),
 * //               stopSequences: [ // StopSequences
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             parserMode: "DEFAULT" || "OVERRIDDEN",
 * //           },
 * //           modelInvocationOutput: { // PreProcessingModelInvocationOutput
 * //             traceId: "STRING_VALUE",
 * //             parsedResponse: { // PreProcessingParsedResponse
 * //               rationale: "STRING_VALUE",
 * //               isValid: true || false,
 * //             },
 * //             rawResponse: { // RawResponse
 * //               content: "STRING_VALUE",
 * //             },
 * //             metadata: { // Metadata
 * //               usage: { // Usage
 * //                 inputTokens: Number("int"),
 * //                 outputTokens: Number("int"),
 * //               },
 * //             },
 * //           },
 * //         },
 * //         orchestrationTrace: { // OrchestrationTrace Union: only one key present
 * //           rationale: { // Rationale
 * //             traceId: "STRING_VALUE",
 * //             text: "STRING_VALUE",
 * //           },
 * //           invocationInput: { // InvocationInput
 * //             traceId: "STRING_VALUE",
 * //             invocationType: "ACTION_GROUP" || "KNOWLEDGE_BASE" || "FINISH" || "ACTION_GROUP_CODE_INTERPRETER",
 * //             actionGroupInvocationInput: { // ActionGroupInvocationInput
 * //               actionGroupName: "STRING_VALUE",
 * //               verb: "STRING_VALUE",
 * //               apiPath: "STRING_VALUE",
 * //               parameters: [ // Parameters
 * //                 { // Parameter
 * //                   name: "STRING_VALUE",
 * //                   type: "STRING_VALUE",
 * //                   value: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               requestBody: { // RequestBody
 * //                 content: { // ContentMap
 * //                   "<keys>": [
 * //                     {
 * //                       name: "STRING_VALUE",
 * //                       type: "STRING_VALUE",
 * //                       value: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                 },
 * //               },
 * //               function: "STRING_VALUE",
 * //               executionType: "LAMBDA" || "RETURN_CONTROL",
 * //               invocationId: "STRING_VALUE",
 * //             },
 * //             knowledgeBaseLookupInput: { // KnowledgeBaseLookupInput
 * //               text: "STRING_VALUE",
 * //               knowledgeBaseId: "STRING_VALUE",
 * //             },
 * //             codeInterpreterInvocationInput: { // CodeInterpreterInvocationInput
 * //               code: "STRING_VALUE",
 * //               files: [ // Files
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           },
 * //           observation: { // Observation
 * //             traceId: "STRING_VALUE",
 * //             type: "ACTION_GROUP" || "KNOWLEDGE_BASE" || "FINISH" || "ASK_USER" || "REPROMPT",
 * //             actionGroupInvocationOutput: { // ActionGroupInvocationOutput
 * //               text: "STRING_VALUE",
 * //             },
 * //             knowledgeBaseLookupOutput: { // KnowledgeBaseLookupOutput
 * //               retrievedReferences: [
 * //                 {
 * //                   content: {
 * //                     text: "STRING_VALUE", // required
 * //                   },
 * //                   location: {
 * //                     type: "S3" || "WEB" || "CONFLUENCE" || "SALESFORCE" || "SHAREPOINT", // required
 * //                     s3Location: {
 * //                       uri: "STRING_VALUE",
 * //                     },
 * //                     webLocation: {
 * //                       url: "STRING_VALUE",
 * //                     },
 * //                     confluenceLocation: {
 * //                       url: "STRING_VALUE",
 * //                     },
 * //                     salesforceLocation: {
 * //                       url: "STRING_VALUE",
 * //                     },
 * //                     sharePointLocation: {
 * //                       url: "STRING_VALUE",
 * //                     },
 * //                   },
 * //                   metadata: {
 * //                     "<keys>": "DOCUMENT_VALUE",
 * //                   },
 * //                 },
 * //               ],
 * //             },
 * //             finalResponse: { // FinalResponse
 * //               text: "STRING_VALUE",
 * //             },
 * //             repromptResponse: { // RepromptResponse
 * //               text: "STRING_VALUE",
 * //               source: "ACTION_GROUP" || "KNOWLEDGE_BASE" || "PARSER",
 * //             },
 * //             codeInterpreterInvocationOutput: { // CodeInterpreterInvocationOutput
 * //               executionOutput: "STRING_VALUE",
 * //               executionError: "STRING_VALUE",
 * //               files: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               executionTimeout: true || false,
 * //             },
 * //           },
 * //           modelInvocationInput: {
 * //             traceId: "STRING_VALUE",
 * //             text: "STRING_VALUE",
 * //             type: "PRE_PROCESSING" || "ORCHESTRATION" || "KNOWLEDGE_BASE_RESPONSE_GENERATION" || "POST_PROCESSING",
 * //             overrideLambda: "STRING_VALUE",
 * //             promptCreationMode: "DEFAULT" || "OVERRIDDEN",
 * //             inferenceConfiguration: {
 * //               temperature: Number("float"),
 * //               topP: Number("float"),
 * //               topK: Number("int"),
 * //               maximumLength: Number("int"),
 * //               stopSequences: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             parserMode: "DEFAULT" || "OVERRIDDEN",
 * //           },
 * //           modelInvocationOutput: { // OrchestrationModelInvocationOutput
 * //             traceId: "STRING_VALUE",
 * //             rawResponse: {
 * //               content: "STRING_VALUE",
 * //             },
 * //             metadata: {
 * //               usage: {
 * //                 inputTokens: Number("int"),
 * //                 outputTokens: Number("int"),
 * //               },
 * //             },
 * //           },
 * //         },
 * //         postProcessingTrace: { // PostProcessingTrace Union: only one key present
 * //           modelInvocationInput: {
 * //             traceId: "STRING_VALUE",
 * //             text: "STRING_VALUE",
 * //             type: "PRE_PROCESSING" || "ORCHESTRATION" || "KNOWLEDGE_BASE_RESPONSE_GENERATION" || "POST_PROCESSING",
 * //             overrideLambda: "STRING_VALUE",
 * //             promptCreationMode: "DEFAULT" || "OVERRIDDEN",
 * //             inferenceConfiguration: {
 * //               temperature: Number("float"),
 * //               topP: Number("float"),
 * //               topK: Number("int"),
 * //               maximumLength: Number("int"),
 * //               stopSequences: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             parserMode: "DEFAULT" || "OVERRIDDEN",
 * //           },
 * //           modelInvocationOutput: { // PostProcessingModelInvocationOutput
 * //             traceId: "STRING_VALUE",
 * //             parsedResponse: { // PostProcessingParsedResponse
 * //               text: "STRING_VALUE",
 * //             },
 * //             rawResponse: {
 * //               content: "STRING_VALUE",
 * //             },
 * //             metadata: {
 * //               usage: {
 * //                 inputTokens: Number("int"),
 * //                 outputTokens: Number("int"),
 * //               },
 * //             },
 * //           },
 * //         },
 * //         failureTrace: { // FailureTrace
 * //           traceId: "STRING_VALUE",
 * //           failureReason: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     returnControl: { // ReturnControlPayload
 * //       invocationInputs: [ // InvocationInputs
 * //         { // InvocationInputMember Union: only one key present
 * //           apiInvocationInput: { // ApiInvocationInput
 * //             actionGroup: "STRING_VALUE", // required
 * //             httpMethod: "STRING_VALUE",
 * //             apiPath: "STRING_VALUE",
 * //             parameters: [ // ApiParameters
 * //               { // ApiParameter
 * //                 name: "STRING_VALUE",
 * //                 type: "STRING_VALUE",
 * //                 value: "STRING_VALUE",
 * //               },
 * //             ],
 * //             requestBody: { // ApiRequestBody
 * //               content: { // ApiContentMap
 * //                 "<keys>": { // PropertyParameters
 * //                   properties: [ // ParameterList
 * //                     {
 * //                       name: "STRING_VALUE",
 * //                       type: "STRING_VALUE",
 * //                       value: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                 },
 * //               },
 * //             },
 * //             actionInvocationType: "RESULT" || "USER_CONFIRMATION" || "USER_CONFIRMATION_AND_RESULT",
 * //           },
 * //           functionInvocationInput: { // FunctionInvocationInput
 * //             actionGroup: "STRING_VALUE", // required
 * //             parameters: [ // FunctionParameters
 * //               { // FunctionParameter
 * //                 name: "STRING_VALUE",
 * //                 type: "STRING_VALUE",
 * //                 value: "STRING_VALUE",
 * //               },
 * //             ],
 * //             function: "STRING_VALUE",
 * //             actionInvocationType: "RESULT" || "USER_CONFIRMATION" || "USER_CONFIRMATION_AND_RESULT",
 * //           },
 * //         },
 * //       ],
 * //       invocationId: "STRING_VALUE",
 * //     },
 * //     internalServerException: { // InternalServerException
 * //       message: "STRING_VALUE",
 * //     },
 * //     validationException: { // ValidationException
 * //       message: "STRING_VALUE",
 * //     },
 * //     resourceNotFoundException: { // ResourceNotFoundException
 * //       message: "STRING_VALUE",
 * //     },
 * //     serviceQuotaExceededException: { // ServiceQuotaExceededException
 * //       message: "STRING_VALUE",
 * //     },
 * //     throttlingException: { // ThrottlingException
 * //       message: "STRING_VALUE",
 * //     },
 * //     accessDeniedException: { // AccessDeniedException
 * //       message: "STRING_VALUE",
 * //     },
 * //     conflictException: { // ConflictException
 * //       message: "STRING_VALUE",
 * //     },
 * //     dependencyFailedException: { // DependencyFailedException
 * //       message: "STRING_VALUE",
 * //       resourceName: "STRING_VALUE",
 * //     },
 * //     badGatewayException: { // BadGatewayException
 * //       message: "STRING_VALUE",
 * //       resourceName: "STRING_VALUE",
 * //     },
 * //     files: { // FilePart
 * //       files: [ // OutputFiles
 * //         { // OutputFile
 * //           name: "STRING_VALUE",
 * //           type: "STRING_VALUE",
 * //           bytes: new Uint8Array(),
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   contentType: "STRING_VALUE", // required
 * //   sessionId: "STRING_VALUE", // required
 * //   memoryId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param InvokeAgentCommandInput - {@link InvokeAgentCommandInput}
 * @returns {@link InvokeAgentCommandOutput}
 * @see {@link InvokeAgentCommandInput} for command's `input` shape.
 * @see {@link InvokeAgentCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentRuntimeClientResolvedConfig | config} for BedrockAgentRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions. Check your permissions and retry your request.</p>
 *
 * @throws {@link BadGatewayException} (server fault)
 *  <p>There was an issue with a dependency due to a server issue. Retry your request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict performing an operation. Resolve the conflict and retry your request.</p>
 *
 * @throws {@link DependencyFailedException} (client fault)
 *  <p>There was an issue with a dependency. Check the resource configurations and retry the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
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
 * @throws {@link BedrockAgentRuntimeServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentRuntime service.</p>
 *
 * @public
 */
export class InvokeAgentCommand extends $Command
  .classBuilder<
    InvokeAgentCommandInput,
    InvokeAgentCommandOutput,
    BedrockAgentRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentRuntimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentRunTimeService", "InvokeAgent", {
    /**
     * @internal
     */
    eventStream: {
      output: true,
    },
  })
  .n("BedrockAgentRuntimeClient", "InvokeAgentCommand")
  .f(InvokeAgentRequestFilterSensitiveLog, InvokeAgentResponseFilterSensitiveLog)
  .ser(se_InvokeAgentCommand)
  .de(de_InvokeAgentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeAgentRequest;
      output: InvokeAgentResponse;
    };
    sdk: {
      input: InvokeAgentCommandInput;
      output: InvokeAgentCommandOutput;
    };
  };
}
