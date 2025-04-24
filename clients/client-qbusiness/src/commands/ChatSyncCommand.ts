// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ChatSyncOutput } from "../models/models_0";
import { ChatSyncInput } from "../models/models_1";
import { de_ChatSyncCommand, se_ChatSyncCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ChatSyncCommand}.
 */
export interface ChatSyncCommandInput extends ChatSyncInput {}
/**
 * @public
 *
 * The output of {@link ChatSyncCommand}.
 */
export interface ChatSyncCommandOutput extends ChatSyncOutput, __MetadataBearer {}

/**
 * <p>Starts or continues a non-streaming Amazon Q Business conversation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, ChatSyncCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, ChatSyncCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // ChatSyncInput
 *   applicationId: "STRING_VALUE", // required
 *   userId: "STRING_VALUE",
 *   userGroups: [ // UserGroups
 *     "STRING_VALUE",
 *   ],
 *   userMessage: "STRING_VALUE",
 *   attachments: [ // AttachmentsInput
 *     { // AttachmentInput
 *       data: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *       name: "STRING_VALUE",
 *       copyFrom: { // CopyFromSource Union: only one key present
 *         conversation: { // ConversationSource
 *           conversationId: "STRING_VALUE", // required
 *           attachmentId: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *   ],
 *   actionExecution: { // ActionExecution
 *     pluginId: "STRING_VALUE", // required
 *     payload: { // ActionExecutionPayload // required
 *       "<keys>": { // ActionExecutionPayloadField
 *         value: "DOCUMENT_VALUE", // required
 *       },
 *     },
 *     payloadFieldNameSeparator: "STRING_VALUE", // required
 *   },
 *   authChallengeResponse: { // AuthChallengeResponse
 *     responseMap: { // AuthorizationResponseMap // required
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   conversationId: "STRING_VALUE",
 *   parentMessageId: "STRING_VALUE",
 *   attributeFilter: { // AttributeFilter
 *     andAllFilters: [ // AttributeFilters
 *       {
 *         andAllFilters: [
 *           "<AttributeFilter>",
 *         ],
 *         orAllFilters: [
 *           "<AttributeFilter>",
 *         ],
 *         notFilter: "<AttributeFilter>",
 *         equalsTo: { // DocumentAttribute
 *           name: "STRING_VALUE", // required
 *           value: { // DocumentAttributeValue Union: only one key present
 *             stringValue: "STRING_VALUE",
 *             stringListValue: [ // DocumentAttributeStringListValue
 *               "STRING_VALUE",
 *             ],
 *             longValue: Number("long"),
 *             dateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         containsAll: {
 *           name: "STRING_VALUE", // required
 *           value: {//  Union: only one key present
 *             stringValue: "STRING_VALUE",
 *             stringListValue: [
 *               "STRING_VALUE",
 *             ],
 *             longValue: Number("long"),
 *             dateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         containsAny: {
 *           name: "STRING_VALUE", // required
 *           value: {//  Union: only one key present
 *             stringValue: "STRING_VALUE",
 *             stringListValue: [
 *               "STRING_VALUE",
 *             ],
 *             longValue: Number("long"),
 *             dateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         greaterThan: {
 *           name: "STRING_VALUE", // required
 *           value: {//  Union: only one key present
 *             stringValue: "STRING_VALUE",
 *             stringListValue: [
 *               "STRING_VALUE",
 *             ],
 *             longValue: Number("long"),
 *             dateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         greaterThanOrEquals: {
 *           name: "STRING_VALUE", // required
 *           value: {//  Union: only one key present
 *             stringValue: "STRING_VALUE",
 *             stringListValue: [
 *               "STRING_VALUE",
 *             ],
 *             longValue: Number("long"),
 *             dateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         lessThan: "<DocumentAttribute>",
 *         lessThanOrEquals: "<DocumentAttribute>",
 *       },
 *     ],
 *     orAllFilters: [
 *       "<AttributeFilter>",
 *     ],
 *     notFilter: "<AttributeFilter>",
 *     equalsTo: "<DocumentAttribute>",
 *     containsAll: "<DocumentAttribute>",
 *     containsAny: "<DocumentAttribute>",
 *     greaterThan: "<DocumentAttribute>",
 *     greaterThanOrEquals: "<DocumentAttribute>",
 *     lessThan: "<DocumentAttribute>",
 *     lessThanOrEquals: "<DocumentAttribute>",
 *   },
 *   chatMode: "RETRIEVAL_MODE" || "CREATOR_MODE" || "PLUGIN_MODE",
 *   chatModeConfiguration: { // ChatModeConfiguration Union: only one key present
 *     pluginConfiguration: { // PluginConfiguration
 *       pluginId: "STRING_VALUE", // required
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new ChatSyncCommand(input);
 * const response = await client.send(command);
 * // { // ChatSyncOutput
 * //   conversationId: "STRING_VALUE",
 * //   systemMessage: "STRING_VALUE",
 * //   systemMessageId: "STRING_VALUE",
 * //   userMessageId: "STRING_VALUE",
 * //   actionReview: { // ActionReview
 * //     pluginId: "STRING_VALUE",
 * //     pluginType: "SERVICE_NOW" || "SALESFORCE" || "JIRA" || "ZENDESK" || "CUSTOM" || "QUICKSIGHT" || "SERVICENOW_NOW_PLATFORM" || "JIRA_CLOUD" || "SALESFORCE_CRM" || "ZENDESK_SUITE" || "ATLASSIAN_CONFLUENCE" || "GOOGLE_CALENDAR" || "MICROSOFT_TEAMS" || "MICROSOFT_EXCHANGE" || "PAGERDUTY_ADVANCE" || "SMARTSHEET" || "ASANA",
 * //     payload: { // ActionReviewPayload
 * //       "<keys>": { // ActionReviewPayloadField
 * //         displayName: "STRING_VALUE",
 * //         displayOrder: Number("int"),
 * //         displayDescription: "STRING_VALUE",
 * //         type: "STRING" || "NUMBER" || "ARRAY" || "BOOLEAN",
 * //         value: "DOCUMENT_VALUE",
 * //         allowedValues: [ // ActionReviewPayloadFieldAllowedValues
 * //           { // ActionReviewPayloadFieldAllowedValue
 * //             value: "DOCUMENT_VALUE",
 * //             displayValue: "DOCUMENT_VALUE",
 * //           },
 * //         ],
 * //         allowedFormat: "STRING_VALUE",
 * //         arrayItemJsonSchema: "DOCUMENT_VALUE",
 * //         required: true || false,
 * //       },
 * //     },
 * //     payloadFieldNameSeparator: "STRING_VALUE",
 * //   },
 * //   authChallengeRequest: { // AuthChallengeRequest
 * //     authorizationUrl: "STRING_VALUE", // required
 * //   },
 * //   sourceAttributions: [ // SourceAttributions
 * //     { // SourceAttribution
 * //       title: "STRING_VALUE",
 * //       snippet: "STRING_VALUE",
 * //       url: "STRING_VALUE",
 * //       citationNumber: Number("int"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       textMessageSegments: [ // TextSegmentList
 * //         { // TextSegment
 * //           beginOffset: Number("int"),
 * //           endOffset: Number("int"),
 * //           snippetExcerpt: { // SnippetExcerpt
 * //             text: "STRING_VALUE",
 * //           },
 * //           mediaId: "STRING_VALUE",
 * //           mediaMimeType: "STRING_VALUE",
 * //           sourceDetails: { // SourceDetails Union: only one key present
 * //             imageSourceDetails: { // ImageSourceDetails
 * //               mediaId: "STRING_VALUE",
 * //               mediaMimeType: "STRING_VALUE",
 * //             },
 * //             audioSourceDetails: { // AudioSourceDetails
 * //               mediaId: "STRING_VALUE",
 * //               mediaMimeType: "STRING_VALUE",
 * //               startTimeMilliseconds: Number("long"),
 * //               endTimeMilliseconds: Number("long"),
 * //               audioExtractionType: "TRANSCRIPT" || "SUMMARY",
 * //             },
 * //             videoSourceDetails: { // VideoSourceDetails
 * //               mediaId: "STRING_VALUE",
 * //               mediaMimeType: "STRING_VALUE",
 * //               startTimeMilliseconds: Number("long"),
 * //               endTimeMilliseconds: Number("long"),
 * //               videoExtractionType: "TRANSCRIPT" || "SUMMARY",
 * //             },
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   failedAttachments: [ // AttachmentsOutput
 * //     { // AttachmentOutput
 * //       name: "STRING_VALUE",
 * //       status: "FAILED" || "SUCCESS",
 * //       error: { // ErrorDetail
 * //         errorMessage: "STRING_VALUE",
 * //         errorCode: "InternalError" || "InvalidRequest" || "ResourceInactive" || "ResourceNotFound",
 * //       },
 * //       attachmentId: "STRING_VALUE",
 * //       conversationId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ChatSyncCommandInput - {@link ChatSyncCommandInput}
 * @returns {@link ChatSyncCommandOutput}
 * @see {@link ChatSyncCommandInput} for command's `input` shape.
 * @see {@link ChatSyncCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to perform an action that conflicts with the current status of your resource. Fix any inconsistencies with your resources and try again.</p>
 *
 * @throws {@link ExternalResourceException} (client fault)
 *  <p>An external resource that you configured with your application is returning errors and preventing this operation from succeeding. Fix those errors and try again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link LicenseNotFoundException} (client fault)
 *  <p>You don't have permissions to perform the action because your license is inactive. Ask your admin to activate your license and try again after your licence is active.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 *
 * @public
 */
export class ChatSyncCommand extends $Command
  .classBuilder<
    ChatSyncCommandInput,
    ChatSyncCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ExpertQ", "ChatSync", {})
  .n("QBusinessClient", "ChatSyncCommand")
  .f(void 0, void 0)
  .ser(se_ChatSyncCommand)
  .de(de_ChatSyncCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ChatSyncInput;
      output: ChatSyncOutput;
    };
    sdk: {
      input: ChatSyncCommandInput;
      output: ChatSyncCommandOutput;
    };
  };
}
