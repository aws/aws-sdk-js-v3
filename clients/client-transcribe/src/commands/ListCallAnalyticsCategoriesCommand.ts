// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListCallAnalyticsCategoriesRequest, ListCallAnalyticsCategoriesResponse } from "../models/models_0";
import { ListCallAnalyticsCategories$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCallAnalyticsCategoriesCommand}.
 */
export interface ListCallAnalyticsCategoriesCommandInput extends ListCallAnalyticsCategoriesRequest {}
/**
 * @public
 *
 * The output of {@link ListCallAnalyticsCategoriesCommand}.
 */
export interface ListCallAnalyticsCategoriesCommandOutput extends ListCallAnalyticsCategoriesResponse, __MetadataBearer {}

/**
 * <p>Provides a list of Call Analytics categories, including all rules that make up each
 *             category.</p>
 *          <p>To get detailed information about a specific Call Analytics category, use the  operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, ListCallAnalyticsCategoriesCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, ListCallAnalyticsCategoriesCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * // import type { TranscribeClientConfig } from "@aws-sdk/client-transcribe";
 * const config = {}; // type is TranscribeClientConfig
 * const client = new TranscribeClient(config);
 * const input = { // ListCallAnalyticsCategoriesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListCallAnalyticsCategoriesCommand(input);
 * const response = await client.send(command);
 * // { // ListCallAnalyticsCategoriesResponse
 * //   NextToken: "STRING_VALUE",
 * //   Categories: [ // CategoryPropertiesList
 * //     { // CategoryProperties
 * //       CategoryName: "STRING_VALUE",
 * //       Rules: [ // RuleList
 * //         { // Rule Union: only one key present
 * //           NonTalkTimeFilter: { // NonTalkTimeFilter
 * //             Threshold: Number("long"),
 * //             AbsoluteTimeRange: { // AbsoluteTimeRange
 * //               StartTime: Number("long"),
 * //               EndTime: Number("long"),
 * //               First: Number("long"),
 * //               Last: Number("long"),
 * //             },
 * //             RelativeTimeRange: { // RelativeTimeRange
 * //               StartPercentage: Number("int"),
 * //               EndPercentage: Number("int"),
 * //               First: Number("int"),
 * //               Last: Number("int"),
 * //             },
 * //             Negate: true || false,
 * //           },
 * //           InterruptionFilter: { // InterruptionFilter
 * //             Threshold: Number("long"),
 * //             ParticipantRole: "AGENT" || "CUSTOMER",
 * //             AbsoluteTimeRange: {
 * //               StartTime: Number("long"),
 * //               EndTime: Number("long"),
 * //               First: Number("long"),
 * //               Last: Number("long"),
 * //             },
 * //             RelativeTimeRange: {
 * //               StartPercentage: Number("int"),
 * //               EndPercentage: Number("int"),
 * //               First: Number("int"),
 * //               Last: Number("int"),
 * //             },
 * //             Negate: true || false,
 * //           },
 * //           TranscriptFilter: { // TranscriptFilter
 * //             TranscriptFilterType: "EXACT", // required
 * //             AbsoluteTimeRange: {
 * //               StartTime: Number("long"),
 * //               EndTime: Number("long"),
 * //               First: Number("long"),
 * //               Last: Number("long"),
 * //             },
 * //             RelativeTimeRange: {
 * //               StartPercentage: Number("int"),
 * //               EndPercentage: Number("int"),
 * //               First: Number("int"),
 * //               Last: Number("int"),
 * //             },
 * //             ParticipantRole: "AGENT" || "CUSTOMER",
 * //             Negate: true || false,
 * //             Targets: [ // StringTargetList // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           SentimentFilter: { // SentimentFilter
 * //             Sentiments: [ // SentimentValueList // required
 * //               "POSITIVE" || "NEGATIVE" || "NEUTRAL" || "MIXED",
 * //             ],
 * //             AbsoluteTimeRange: {
 * //               StartTime: Number("long"),
 * //               EndTime: Number("long"),
 * //               First: Number("long"),
 * //               Last: Number("long"),
 * //             },
 * //             RelativeTimeRange: {
 * //               StartPercentage: Number("int"),
 * //               EndPercentage: Number("int"),
 * //               First: Number("int"),
 * //               Last: Number("int"),
 * //             },
 * //             ParticipantRole: "AGENT" || "CUSTOMER",
 * //             Negate: true || false,
 * //           },
 * //         },
 * //       ],
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       LastUpdateTime: new Date("TIMESTAMP"),
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       InputType: "REAL_TIME" || "POST_CALL",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCallAnalyticsCategoriesCommandInput - {@link ListCallAnalyticsCategoriesCommandInput}
 * @returns {@link ListCallAnalyticsCategoriesCommandOutput}
 * @see {@link ListCallAnalyticsCategoriesCommandInput} for command's `input` shape.
 * @see {@link ListCallAnalyticsCategoriesCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Your request didn't pass one or more validation tests. This can occur when the entity
 *             you're trying to delete doesn't exist or if it's in a non-terminal state (such as
 *                 <code>IN PROGRESS</code>). See the exception message field for more
 *             information.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal error. Check the error message, correct the issue, and try your
 *             request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've either sent too many requests or your input file is too long. Wait before
 *             retrying your request, or use a smaller file and try your request again.</p>
 *
 * @throws {@link TranscribeServiceException}
 * <p>Base exception class for all service exceptions from Transcribe service.</p>
 *
 *
 * @public
 */
export class ListCallAnalyticsCategoriesCommand extends $Command
  .classBuilder<
    ListCallAnalyticsCategoriesCommandInput,
    ListCallAnalyticsCategoriesCommandOutput,
    TranscribeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TranscribeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Transcribe", "ListCallAnalyticsCategories", {})
  .n("TranscribeClient", "ListCallAnalyticsCategoriesCommand")
  .sc(ListCallAnalyticsCategories$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCallAnalyticsCategoriesRequest;
      output: ListCallAnalyticsCategoriesResponse;
    };
    sdk: {
      input: ListCallAnalyticsCategoriesCommandInput;
      output: ListCallAnalyticsCategoriesCommandOutput;
    };
  };
}
