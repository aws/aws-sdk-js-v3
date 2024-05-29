// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListMessagesRequest, ListMessagesResponse } from "../models/models_0";
import { de_ListMessagesCommand, se_ListMessagesCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * <p>Gets a list of messages associated with an Amazon Q Business web experience.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, ListMessagesCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, ListMessagesCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
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
 * //           status: "FAILED" || "SUCCEEDED",
 * //           error: { // ErrorDetail
 * //             errorMessage: "STRING_VALUE",
 * //             errorCode: "InternalError" || "InvalidRequest" || "ResourceInactive" || "ResourceNotFound",
 * //           },
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
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       actionReview: { // ActionReview
 * //         pluginId: "STRING_VALUE",
 * //         pluginType: "SERVICE_NOW" || "SALESFORCE" || "JIRA" || "ZENDESK" || "CUSTOM",
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
 *  <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
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
 *  <p>The resource you want to use doesn’t exist. Make sure you have provided the correct
 *             resource and try again.</p>
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
 * @public
 */
export class ListMessagesCommand extends $Command
  .classBuilder<
    ListMessagesCommandInput,
    ListMessagesCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ExpertQ", "ListMessages", {})
  .n("QBusinessClient", "ListMessagesCommand")
  .f(void 0, void 0)
  .ser(se_ListMessagesCommand)
  .de(de_ListMessagesCommand)
  .build() {}
