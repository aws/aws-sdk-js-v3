// smithy-typescript generated code
import { getEventStreamPlugin } from "@aws-sdk/middleware-eventstream";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ChatOutput, ChatOutputFilterSensitiveLog } from "../models/models_0";
import { ChatInput, ChatInputFilterSensitiveLog } from "../models/models_1";
import { de_ChatCommand, se_ChatCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ChatCommand}.
 */
export interface ChatCommandInput extends ChatInput {}
/**
 * @public
 *
 * The output of {@link ChatCommand}.
 */
export interface ChatCommandOutput extends ChatOutput, __MetadataBearer {}

/**
 * <p>Starts or continues a streaming Amazon Q Business conversation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, ChatCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, ChatCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // ChatInput
 *   applicationId: "STRING_VALUE", // required
 *   userId: "STRING_VALUE",
 *   userGroups: [ // UserGroups
 *     "STRING_VALUE",
 *   ],
 *   conversationId: "STRING_VALUE",
 *   parentMessageId: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   inputStream: { // ChatInputStream Union: only one key present
 *     configurationEvent: { // ConfigurationEvent
 *       chatMode: "RETRIEVAL_MODE" || "CREATOR_MODE" || "PLUGIN_MODE",
 *       chatModeConfiguration: { // ChatModeConfiguration Union: only one key present
 *         pluginConfiguration: { // PluginConfiguration
 *           pluginId: "STRING_VALUE", // required
 *         },
 *       },
 *       attributeFilter: { // AttributeFilter
 *         andAllFilters: [ // AttributeFilters
 *           {
 *             andAllFilters: [
 *               "<AttributeFilter>",
 *             ],
 *             orAllFilters: [
 *               "<AttributeFilter>",
 *             ],
 *             notFilter: "<AttributeFilter>",
 *             equalsTo: { // DocumentAttribute
 *               name: "STRING_VALUE", // required
 *               value: { // DocumentAttributeValue Union: only one key present
 *                 stringValue: "STRING_VALUE",
 *                 stringListValue: [ // DocumentAttributeStringListValue
 *                   "STRING_VALUE",
 *                 ],
 *                 longValue: Number("long"),
 *                 dateValue: new Date("TIMESTAMP"),
 *               },
 *             },
 *             containsAll: {
 *               name: "STRING_VALUE", // required
 *               value: {//  Union: only one key present
 *                 stringValue: "STRING_VALUE",
 *                 stringListValue: [
 *                   "STRING_VALUE",
 *                 ],
 *                 longValue: Number("long"),
 *                 dateValue: new Date("TIMESTAMP"),
 *               },
 *             },
 *             containsAny: {
 *               name: "STRING_VALUE", // required
 *               value: {//  Union: only one key present
 *                 stringValue: "STRING_VALUE",
 *                 stringListValue: [
 *                   "STRING_VALUE",
 *                 ],
 *                 longValue: Number("long"),
 *                 dateValue: new Date("TIMESTAMP"),
 *               },
 *             },
 *             greaterThan: {
 *               name: "STRING_VALUE", // required
 *               value: {//  Union: only one key present
 *                 stringValue: "STRING_VALUE",
 *                 stringListValue: [
 *                   "STRING_VALUE",
 *                 ],
 *                 longValue: Number("long"),
 *                 dateValue: new Date("TIMESTAMP"),
 *               },
 *             },
 *             greaterThanOrEquals: {
 *               name: "STRING_VALUE", // required
 *               value: {//  Union: only one key present
 *                 stringValue: "STRING_VALUE",
 *                 stringListValue: [
 *                   "STRING_VALUE",
 *                 ],
 *                 longValue: Number("long"),
 *                 dateValue: new Date("TIMESTAMP"),
 *               },
 *             },
 *             lessThan: "<DocumentAttribute>",
 *             lessThanOrEquals: "<DocumentAttribute>",
 *           },
 *         ],
 *         orAllFilters: [
 *           "<AttributeFilter>",
 *         ],
 *         notFilter: "<AttributeFilter>",
 *         equalsTo: "<DocumentAttribute>",
 *         containsAll: "<DocumentAttribute>",
 *         containsAny: "<DocumentAttribute>",
 *         greaterThan: "<DocumentAttribute>",
 *         greaterThanOrEquals: "<DocumentAttribute>",
 *         lessThan: "<DocumentAttribute>",
 *         lessThanOrEquals: "<DocumentAttribute>",
 *       },
 *     },
 *     textEvent: { // TextInputEvent
 *       userMessage: "STRING_VALUE", // required
 *     },
 *     attachmentEvent: { // AttachmentInputEvent
 *       attachment: { // AttachmentInput
 *         data: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *         name: "STRING_VALUE",
 *         copyFrom: { // CopyFromSource Union: only one key present
 *           conversation: { // ConversationSource
 *             conversationId: "STRING_VALUE", // required
 *             attachmentId: "STRING_VALUE", // required
 *           },
 *         },
 *       },
 *     },
 *     actionExecutionEvent: { // ActionExecutionEvent
 *       pluginId: "STRING_VALUE", // required
 *       payload: { // ActionExecutionPayload // required
 *         "<keys>": { // ActionExecutionPayloadField
 *           value: "DOCUMENT_VALUE", // required
 *         },
 *       },
 *       payloadFieldNameSeparator: "STRING_VALUE", // required
 *     },
 *     endOfInputEvent: {},
 *     authChallengeResponseEvent: { // AuthChallengeResponseEvent
 *       responseMap: { // AuthorizationResponseMap // required
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   },
 * };
 * const command = new ChatCommand(input);
 * const response = await client.send(command);
 * // { // ChatOutput
 * //   outputStream: { // ChatOutputStream Union: only one key present
 * //     textEvent: { // TextOutputEvent
 * //       conversationId: "STRING_VALUE",
 * //       userMessageId: "STRING_VALUE",
 * //       systemMessageId: "STRING_VALUE",
 * //       systemMessage: "STRING_VALUE",
 * //     },
 * //     metadataEvent: { // MetadataEvent
 * //       conversationId: "STRING_VALUE",
 * //       userMessageId: "STRING_VALUE",
 * //       systemMessageId: "STRING_VALUE",
 * //       sourceAttributions: [ // SourceAttributions
 * //         { // SourceAttribution
 * //           title: "STRING_VALUE",
 * //           snippet: "STRING_VALUE",
 * //           url: "STRING_VALUE",
 * //           citationNumber: Number("int"),
 * //           updatedAt: new Date("TIMESTAMP"),
 * //           textMessageSegments: [ // TextSegmentList
 * //             { // TextSegment
 * //               beginOffset: Number("int"),
 * //               endOffset: Number("int"),
 * //               snippetExcerpt: { // SnippetExcerpt
 * //                 text: "STRING_VALUE",
 * //               },
 * //               mediaId: "STRING_VALUE",
 * //               mediaMimeType: "STRING_VALUE",
 * //               sourceDetails: { // SourceDetails Union: only one key present
 * //                 imageSourceDetails: { // ImageSourceDetails
 * //                   mediaId: "STRING_VALUE",
 * //                   mediaMimeType: "STRING_VALUE",
 * //                 },
 * //                 audioSourceDetails: { // AudioSourceDetails
 * //                   mediaId: "STRING_VALUE",
 * //                   mediaMimeType: "STRING_VALUE",
 * //                   startTimeMilliseconds: Number("long"),
 * //                   endTimeMilliseconds: Number("long"),
 * //                   audioExtractionType: "TRANSCRIPT" || "SUMMARY",
 * //                 },
 * //                 videoSourceDetails: { // VideoSourceDetails
 * //                   mediaId: "STRING_VALUE",
 * //                   mediaMimeType: "STRING_VALUE",
 * //                   startTimeMilliseconds: Number("long"),
 * //                   endTimeMilliseconds: Number("long"),
 * //                   videoExtractionType: "TRANSCRIPT" || "SUMMARY",
 * //                 },
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       finalTextMessage: "STRING_VALUE",
 * //     },
 * //     actionReviewEvent: { // ActionReviewEvent
 * //       conversationId: "STRING_VALUE",
 * //       userMessageId: "STRING_VALUE",
 * //       systemMessageId: "STRING_VALUE",
 * //       pluginId: "STRING_VALUE",
 * //       pluginType: "SERVICE_NOW" || "SALESFORCE" || "JIRA" || "ZENDESK" || "CUSTOM" || "QUICKSIGHT" || "SERVICENOW_NOW_PLATFORM" || "JIRA_CLOUD" || "SALESFORCE_CRM" || "ZENDESK_SUITE" || "ATLASSIAN_CONFLUENCE" || "GOOGLE_CALENDAR" || "MICROSOFT_TEAMS" || "MICROSOFT_EXCHANGE" || "PAGERDUTY_ADVANCE" || "SMARTSHEET" || "ASANA",
 * //       payload: { // ActionReviewPayload
 * //         "<keys>": { // ActionReviewPayloadField
 * //           displayName: "STRING_VALUE",
 * //           displayOrder: Number("int"),
 * //           displayDescription: "STRING_VALUE",
 * //           type: "STRING" || "NUMBER" || "ARRAY" || "BOOLEAN",
 * //           value: "DOCUMENT_VALUE",
 * //           allowedValues: [ // ActionReviewPayloadFieldAllowedValues
 * //             { // ActionReviewPayloadFieldAllowedValue
 * //               value: "DOCUMENT_VALUE",
 * //               displayValue: "DOCUMENT_VALUE",
 * //             },
 * //           ],
 * //           allowedFormat: "STRING_VALUE",
 * //           arrayItemJsonSchema: "DOCUMENT_VALUE",
 * //           required: true || false,
 * //         },
 * //       },
 * //       payloadFieldNameSeparator: "STRING_VALUE",
 * //     },
 * //     failedAttachmentEvent: { // FailedAttachmentEvent
 * //       conversationId: "STRING_VALUE",
 * //       userMessageId: "STRING_VALUE",
 * //       systemMessageId: "STRING_VALUE",
 * //       attachment: { // AttachmentOutput
 * //         name: "STRING_VALUE",
 * //         status: "FAILED" || "SUCCESS",
 * //         error: { // ErrorDetail
 * //           errorMessage: "STRING_VALUE",
 * //           errorCode: "InternalError" || "InvalidRequest" || "ResourceInactive" || "ResourceNotFound",
 * //         },
 * //         attachmentId: "STRING_VALUE",
 * //         conversationId: "STRING_VALUE",
 * //       },
 * //     },
 * //     authChallengeRequestEvent: { // AuthChallengeRequestEvent
 * //       authorizationUrl: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param ChatCommandInput - {@link ChatCommandInput}
 * @returns {@link ChatCommandOutput}
 * @see {@link ChatCommandInput} for command's `input` shape.
 * @see {@link ChatCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to perform an action that conflicts with the current status of your
 *             resource. Fix any inconsistencies with your resources and try again.</p>
 *
 * @throws {@link ExternalResourceException} (client fault)
 *  <p>An external resource that you configured with your application is returning errors and
 *             preventing this operation from succeeding. Fix those errors and try again.
 *         </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait
 *             some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link LicenseNotFoundException} (client fault)
 *  <p>You don't have permissions to perform the action because your license is inactive. Ask
 *             your admin to activate your license and try again after your licence is active.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have
 *             provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try
 *             again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the
 *             correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 *
 * @public
 */
export class ChatCommand extends $Command
  .classBuilder<
    ChatCommandInput,
    ChatCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getEventStreamPlugin(config),
    ];
  })
  .s("ExpertQ", "Chat", {
    /**
     * @internal
     */
    eventStream: {
      input: true,
      output: true,
    },
  })
  .n("QBusinessClient", "ChatCommand")
  .f(ChatInputFilterSensitiveLog, ChatOutputFilterSensitiveLog)
  .ser(se_ChatCommand)
  .de(de_ChatCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ChatInput;
      output: ChatOutput;
    };
    sdk: {
      input: ChatCommandInput;
      output: ChatCommandOutput;
    };
  };
}
