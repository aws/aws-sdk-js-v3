// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ConnectContactLensClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectContactLensClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListRealtimeContactAnalysisSegmentsRequest,
  ListRealtimeContactAnalysisSegmentsResponse,
} from "../models/models_0";
import { ListRealtimeContactAnalysisSegments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRealtimeContactAnalysisSegmentsCommand}.
 */
export interface ListRealtimeContactAnalysisSegmentsCommandInput extends ListRealtimeContactAnalysisSegmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListRealtimeContactAnalysisSegmentsCommand}.
 */
export interface ListRealtimeContactAnalysisSegmentsCommandOutput extends ListRealtimeContactAnalysisSegmentsResponse, __MetadataBearer {}

/**
 * <p>Provides a list of analysis segments for a real-time analysis session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectContactLensClient, ListRealtimeContactAnalysisSegmentsCommand } from "@aws-sdk/client-connect-contact-lens"; // ES Modules import
 * // const { ConnectContactLensClient, ListRealtimeContactAnalysisSegmentsCommand } = require("@aws-sdk/client-connect-contact-lens"); // CommonJS import
 * // import type { ConnectContactLensClientConfig } from "@aws-sdk/client-connect-contact-lens";
 * const config = {}; // type is ConnectContactLensClientConfig
 * const client = new ConnectContactLensClient(config);
 * const input = { // ListRealtimeContactAnalysisSegmentsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRealtimeContactAnalysisSegmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListRealtimeContactAnalysisSegmentsResponse
 * //   Segments: [ // RealtimeContactAnalysisSegments // required
 * //     { // RealtimeContactAnalysisSegment
 * //       Transcript: { // Transcript
 * //         Id: "STRING_VALUE", // required
 * //         ParticipantId: "STRING_VALUE", // required
 * //         ParticipantRole: "STRING_VALUE", // required
 * //         Content: "STRING_VALUE", // required
 * //         BeginOffsetMillis: Number("int"), // required
 * //         EndOffsetMillis: Number("int"), // required
 * //         Sentiment: "POSITIVE" || "NEUTRAL" || "NEGATIVE",
 * //         IssuesDetected: [ // IssuesDetected
 * //           { // IssueDetected
 * //             CharacterOffsets: { // CharacterOffsets
 * //               BeginOffsetChar: Number("int"), // required
 * //               EndOffsetChar: Number("int"), // required
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       Categories: { // Categories
 * //         MatchedCategories: [ // MatchedCategories // required
 * //           "STRING_VALUE",
 * //         ],
 * //         MatchedDetails: { // MatchedDetails // required
 * //           "<keys>": { // CategoryDetails
 * //             PointsOfInterest: [ // PointsOfInterest // required
 * //               { // PointOfInterest
 * //                 BeginOffsetMillis: Number("int"), // required
 * //                 EndOffsetMillis: Number("int"), // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       },
 * //       PostContactSummary: { // PostContactSummary
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
 * @param ListRealtimeContactAnalysisSegmentsCommandInput - {@link ListRealtimeContactAnalysisSegmentsCommandInput}
 * @returns {@link ListRealtimeContactAnalysisSegmentsCommandOutput}
 * @see {@link ListRealtimeContactAnalysisSegmentsCommandInput} for command's `input` shape.
 * @see {@link ListRealtimeContactAnalysisSegmentsCommandOutput} for command's `response` shape.
 * @see {@link ConnectContactLensClientResolvedConfig | config} for ConnectContactLensClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed due to an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectContactLensServiceException}
 * <p>Base exception class for all service exceptions from ConnectContactLens service.</p>
 *
 *
 * @public
 */
export class ListRealtimeContactAnalysisSegmentsCommand extends $Command
  .classBuilder<
    ListRealtimeContactAnalysisSegmentsCommandInput,
    ListRealtimeContactAnalysisSegmentsCommandOutput,
    ConnectContactLensClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectContactLensClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectContactLens", "ListRealtimeContactAnalysisSegments", {})
  .n("ConnectContactLensClient", "ListRealtimeContactAnalysisSegmentsCommand")
  .sc(ListRealtimeContactAnalysisSegments$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRealtimeContactAnalysisSegmentsRequest;
      output: ListRealtimeContactAnalysisSegmentsResponse;
    };
    sdk: {
      input: ListRealtimeContactAnalysisSegmentsCommandInput;
      output: ListRealtimeContactAnalysisSegmentsCommandOutput;
    };
  };
}
