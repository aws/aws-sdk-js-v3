// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListRealtimeContactAnalysisSegmentsV2Request } from "../models/models_1";
import { ListRealtimeContactAnalysisSegmentsV2Response } from "../models/models_2";
import {
  de_ListRealtimeContactAnalysisSegmentsV2Command,
  se_ListRealtimeContactAnalysisSegmentsV2Command,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRealtimeContactAnalysisSegmentsV2Command}.
 */
export interface ListRealtimeContactAnalysisSegmentsV2CommandInput
  extends ListRealtimeContactAnalysisSegmentsV2Request {}
/**
 * @public
 *
 * The output of {@link ListRealtimeContactAnalysisSegmentsV2Command}.
 */
export interface ListRealtimeContactAnalysisSegmentsV2CommandOutput
  extends ListRealtimeContactAnalysisSegmentsV2Response,
    __MetadataBearer {}

/**
 * <p>Provides a list of analysis segments for a real-time analysis session. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListRealtimeContactAnalysisSegmentsV2Command } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListRealtimeContactAnalysisSegmentsV2Command } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // ListRealtimeContactAnalysisSegmentsV2Request
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   OutputType: "Raw" || "Redacted", // required
 *   SegmentTypes: [ // RealTimeContactAnalysisSegmentTypes // required
 *     "Transcript" || "Categories" || "Issues" || "Event" || "Attachments" || "PostContactSummary",
 *   ],
 * };
 * const command = new ListRealtimeContactAnalysisSegmentsV2Command(input);
 * const response = await client.send(command);
 * // { // ListRealtimeContactAnalysisSegmentsV2Response
 * //   Channel: "VOICE" || "CHAT", // required
 * //   Status: "IN_PROGRESS" || "FAILED" || "COMPLETED", // required
 * //   Segments: [ // RealtimeContactAnalysisSegments // required
 * //     { // RealtimeContactAnalysisSegment Union: only one key present
 * //       Transcript: { // RealTimeContactAnalysisSegmentTranscript
 * //         Id: "STRING_VALUE", // required
 * //         ParticipantId: "STRING_VALUE", // required
 * //         ParticipantRole: "AGENT" || "CUSTOMER" || "SYSTEM" || "CUSTOM_BOT" || "SUPERVISOR", // required
 * //         DisplayName: "STRING_VALUE",
 * //         Content: "STRING_VALUE", // required
 * //         ContentType: "STRING_VALUE",
 * //         Time: { // RealTimeContactAnalysisTimeData Union: only one key present
 * //           AbsoluteTime: new Date("TIMESTAMP"),
 * //         },
 * //         Redaction: { // RealTimeContactAnalysisTranscriptItemRedaction
 * //           CharacterOffsets: [ // RealTimeContactAnalysisCharacterIntervals
 * //             { // RealTimeContactAnalysisCharacterInterval
 * //               BeginOffsetChar: Number("int"), // required
 * //               EndOffsetChar: Number("int"), // required
 * //             },
 * //           ],
 * //         },
 * //         Sentiment: "POSITIVE" || "NEGATIVE" || "NEUTRAL",
 * //       },
 * //       Categories: { // RealTimeContactAnalysisSegmentCategories
 * //         MatchedDetails: { // RealTimeContactAnalysisMatchedDetails // required
 * //           "<keys>": { // RealTimeContactAnalysisCategoryDetails
 * //             PointsOfInterest: [ // RealTimeContactAnalysisPointsOfInterest // required
 * //               { // RealTimeContactAnalysisPointOfInterest
 * //                 TranscriptItems: [ // RealTimeContactAnalysisTranscriptItemsWithCharacterOffsets
 * //                   { // RealTimeContactAnalysisTranscriptItemWithCharacterOffsets
 * //                     Id: "STRING_VALUE", // required
 * //                     CharacterOffsets: {
 * //                       BeginOffsetChar: Number("int"), // required
 * //                       EndOffsetChar: Number("int"), // required
 * //                     },
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       },
 * //       Issues: { // RealTimeContactAnalysisSegmentIssues
 * //         IssuesDetected: [ // RealTimeContactAnalysisIssuesDetected // required
 * //           { // RealTimeContactAnalysisIssueDetected
 * //             TranscriptItems: [ // RealTimeContactAnalysisTranscriptItemsWithContent // required
 * //               { // RealTimeContactAnalysisTranscriptItemWithContent
 * //                 Content: "STRING_VALUE",
 * //                 Id: "STRING_VALUE", // required
 * //                 CharacterOffsets: "<RealTimeContactAnalysisCharacterInterval>",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       Event: { // RealTimeContactAnalysisSegmentEvent
 * //         Id: "STRING_VALUE", // required
 * //         ParticipantId: "STRING_VALUE",
 * //         ParticipantRole: "AGENT" || "CUSTOMER" || "SYSTEM" || "CUSTOM_BOT" || "SUPERVISOR",
 * //         DisplayName: "STRING_VALUE",
 * //         EventType: "STRING_VALUE", // required
 * //         Time: {//  Union: only one key present
 * //           AbsoluteTime: new Date("TIMESTAMP"),
 * //         },
 * //       },
 * //       Attachments: { // RealTimeContactAnalysisSegmentAttachments
 * //         Id: "STRING_VALUE", // required
 * //         ParticipantId: "STRING_VALUE", // required
 * //         ParticipantRole: "AGENT" || "CUSTOMER" || "SYSTEM" || "CUSTOM_BOT" || "SUPERVISOR", // required
 * //         DisplayName: "STRING_VALUE",
 * //         Attachments: [ // RealTimeContactAnalysisAttachments // required
 * //           { // RealTimeContactAnalysisAttachment
 * //             AttachmentName: "STRING_VALUE", // required
 * //             ContentType: "STRING_VALUE",
 * //             AttachmentId: "STRING_VALUE", // required
 * //             Status: "APPROVED" || "REJECTED" || "IN_PROGRESS",
 * //           },
 * //         ],
 * //         Time: {//  Union: only one key present
 * //           AbsoluteTime: new Date("TIMESTAMP"),
 * //         },
 * //       },
 * //       PostContactSummary: { // RealTimeContactAnalysisSegmentPostContactSummary
 * //         Content: "STRING_VALUE",
 * //         Status: "FAILED" || "COMPLETED", // required
 * //         FailureCode: "QUOTA_EXCEEDED" || "INSUFFICIENT_CONVERSATION_CONTENT" || "FAILED_SAFETY_GUIDELINES" || "INVALID_ANALYSIS_CONFIGURATION" || "INTERNAL_ERROR",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRealtimeContactAnalysisSegmentsV2CommandInput - {@link ListRealtimeContactAnalysisSegmentsV2CommandInput}
 * @returns {@link ListRealtimeContactAnalysisSegmentsV2CommandOutput}
 * @see {@link ListRealtimeContactAnalysisSegmentsV2CommandInput} for command's `input` shape.
 * @see {@link ListRealtimeContactAnalysisSegmentsV2CommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link OutputTypeNotFoundException} (client fault)
 *  <p>Thrown for analyzed content when requested OutputType was not enabled for a given contact.
 *    For example, if an OutputType.Raw was requested for a contact that had `RedactedOnly` Redaction
 *    policy set in the flow.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 * @public
 */
export class ListRealtimeContactAnalysisSegmentsV2Command extends $Command
  .classBuilder<
    ListRealtimeContactAnalysisSegmentsV2CommandInput,
    ListRealtimeContactAnalysisSegmentsV2CommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "ListRealtimeContactAnalysisSegmentsV2", {})
  .n("ConnectClient", "ListRealtimeContactAnalysisSegmentsV2Command")
  .f(void 0, void 0)
  .ser(se_ListRealtimeContactAnalysisSegmentsV2Command)
  .de(de_ListRealtimeContactAnalysisSegmentsV2Command)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRealtimeContactAnalysisSegmentsV2Request;
      output: ListRealtimeContactAnalysisSegmentsV2Response;
    };
    sdk: {
      input: ListRealtimeContactAnalysisSegmentsV2CommandInput;
      output: ListRealtimeContactAnalysisSegmentsV2CommandOutput;
    };
  };
}
