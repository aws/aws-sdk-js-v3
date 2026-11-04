// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMessagesRequest, ListMessagesResponse } from "../models/models_0";
import { ListMessages$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMessagesCommand}.
 */
export interface ListMessagesCommandInput extends ListMessagesRequest {}
/**
 * @public
 *
 * The output of {@link ListMessagesCommand}.
 */
export interface ListMessagesCommandOutput extends ListMessagesResponse, __MetadataBearer {}

/**
 * Gets a list of messages associated with an Amazon Q Business web experience.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, ListMessagesCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, ListMessagesCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // ListMessagesRequest
 *   conversationId: "STRING_VALUE", // required
 *   applicationId: "STRING_VALUE", // required
 *   userId: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListMessagesCommand(input);
 * const response = await client.send(command);
 * // { // ListMessagesResponse
 * //   messages: [ // Messages
 * //     { // Message
 * //       messageId: "STRING_VALUE",
 * //       body: "STRING_VALUE",
 * //       time: new Date("TIMESTAMP"),
 * //       type: "USER" || "SYSTEM",
 * //       attachments: [ // AttachmentsOutput
 * //         { // AttachmentOutput
 * //           name: "STRING_VALUE",
 * //           status: "FAILED" || "SUCCESS",
 * //           error: { // ErrorDetail
 * //             errorMessage: "STRING_VALUE",
 * //             errorCode: "InternalError" || "InvalidRequest" || "ResourceInactive" || "ResourceNotFound",
 * //           },
 * //           attachmentId: "STRING_VALUE",
 * //           conversationId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       sourceAttribution: [ // SourceAttributions
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
 * //           documentId: "STRING_VALUE",
 * //           indexId: "STRING_VALUE",
 * //           datasourceId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       actionReview: { // ActionReview
 * //         pluginId: "STRING_VALUE",
 * //         pluginType: "SERVICE_NOW" || "SALESFORCE" || "JIRA" || "ZENDESK" || "CUSTOM" || "QUICKSIGHT" || "SERVICENOW_NOW_PLATFORM" || "JIRA_CLOUD" || "SALESFORCE_CRM" || "ZENDESK_SUITE" || "ATLASSIAN_CONFLUENCE" || "GOOGLE_CALENDAR" || "MICROSOFT_TEAMS" || "MICROSOFT_EXCHANGE" || "PAGERDUTY_ADVANCE" || "SMARTSHEET" || "ASANA",
 * //         payload: { // ActionReviewPayload
 * //           "<keys>": { // ActionReviewPayloadField
 * //             displayName: "STRING_VALUE",
 * //             displayOrder: Number("int"),
 * //             displayDescription: "STRING_VALUE",
 * //             type: "STRING" || "NUMBER" || "ARRAY" || "BOOLEAN",
 * //             value: "DOCUMENT_VALUE",
 * //             allowedValues: [ // ActionReviewPayloadFieldAllowedValues
 * //               { // ActionReviewPayloadFieldAllowedValue
 * //                 value: "DOCUMENT_VALUE",
 * //                 displayValue: "DOCUMENT_VALUE",
 * //               },
 * //             ],
 * //             allowedFormat: "STRING_VALUE",
 * //             arrayItemJsonSchema: "DOCUMENT_VALUE",
 * //             required: true || false,
 * //           },
 * //         },
 * //         payloadFieldNameSeparator: "STRING_VALUE",
 * //       },
 * //       actionExecution: { // ActionExecution
 * //         pluginId: "STRING_VALUE", // required
 * //         payload: { // ActionExecutionPayload // required
 * //           "<keys>": { // ActionExecutionPayloadField
 * //             value: "DOCUMENT_VALUE", // required
 * //           },
 * //         },
 * //         payloadFieldNameSeparator: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMessagesCommandInput - {@link ListMessagesCommandInput}
 * @returns {@link ListMessagesCommandOutput}
 * @see {@link ListMessagesCommandInput} for command's `input` shape.
 * @see {@link ListMessagesCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact [Support](http://aws.amazon.com/contact-us/) for help.
 *
 * @throws {@link LicenseNotFoundException} (client fault)
 *
 * You don't have permissions to perform the action because your license is inactive. Ask your admin to activate your license and try again after your licence is active.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to throttling. Reduce the number of requests and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.
 *
 * @throws {@link QBusinessServiceException}
 *
 * Base exception class for all service exceptions from QBusiness service.
 *
 * @public
 */
export class ListMessagesCommand extends command<ListMessagesCommandInput, ListMessagesCommandOutput>(
  _ep0,
  _mw0,
  "ListMessages",
  ListMessages$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMessagesRequest;
      output: ListMessagesResponse;
    };
    sdk: {
      input: ListMessagesCommandInput;
      output: ListMessagesCommandOutput;
    };
  };
}
