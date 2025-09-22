// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCallAnalyticsCategoryRequest, CreateCallAnalyticsCategoryResponse } from "../models/models_0";
import { CreateCallAnalyticsCategory } from "../schemas/schemas_4_Call";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCallAnalyticsCategoryCommand}.
 */
export interface CreateCallAnalyticsCategoryCommandInput extends CreateCallAnalyticsCategoryRequest {}
/**
 * @public
 *
 * The output of {@link CreateCallAnalyticsCategoryCommand}.
 */
export interface CreateCallAnalyticsCategoryCommandOutput
  extends CreateCallAnalyticsCategoryResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new Call Analytics category.</p>
 *          <p>All categories are automatically applied to your Call Analytics transcriptions. Note that in
 *             order to apply categories to your transcriptions, you must create them before submitting your
 *             transcription request, as categories cannot be applied retroactively.</p>
 *          <p>When creating a new category, you can use the <code>InputType</code> parameter to
 *             label the category as a <code>POST_CALL</code> or a <code>REAL_TIME</code> category.
 *             <code>POST_CALL</code> categories can only be applied to post-call transcriptions and
 *             <code>REAL_TIME</code> categories can only be applied to real-time transcriptions. If you
 *             do not include <code>InputType</code>, your category is created as a
 *             <code>POST_CALL</code> category by default.</p>
 *          <p>Call Analytics categories are composed of rules. For each category, you must create
 *             between 1 and 20 rules. Rules can include these parameters: , , , and .</p>
 *          <p>To update an existing category, see .</p>
 *          <p>To learn more about Call Analytics categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for post-call
 *             transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for
 *                 real-time transcriptions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, CreateCallAnalyticsCategoryCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, CreateCallAnalyticsCategoryCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * // import type { TranscribeClientConfig } from "@aws-sdk/client-transcribe";
 * const config = {}; // type is TranscribeClientConfig
 * const client = new TranscribeClient(config);
 * const input = { // CreateCallAnalyticsCategoryRequest
 *   CategoryName: "STRING_VALUE", // required
 *   Rules: [ // RuleList // required
 *     { // Rule Union: only one key present
 *       NonTalkTimeFilter: { // NonTalkTimeFilter
 *         Threshold: Number("long"),
 *         AbsoluteTimeRange: { // AbsoluteTimeRange
 *           StartTime: Number("long"),
 *           EndTime: Number("long"),
 *           First: Number("long"),
 *           Last: Number("long"),
 *         },
 *         RelativeTimeRange: { // RelativeTimeRange
 *           StartPercentage: Number("int"),
 *           EndPercentage: Number("int"),
 *           First: Number("int"),
 *           Last: Number("int"),
 *         },
 *         Negate: true || false,
 *       },
 *       InterruptionFilter: { // InterruptionFilter
 *         Threshold: Number("long"),
 *         ParticipantRole: "AGENT" || "CUSTOMER",
 *         AbsoluteTimeRange: {
 *           StartTime: Number("long"),
 *           EndTime: Number("long"),
 *           First: Number("long"),
 *           Last: Number("long"),
 *         },
 *         RelativeTimeRange: {
 *           StartPercentage: Number("int"),
 *           EndPercentage: Number("int"),
 *           First: Number("int"),
 *           Last: Number("int"),
 *         },
 *         Negate: true || false,
 *       },
 *       TranscriptFilter: { // TranscriptFilter
 *         TranscriptFilterType: "EXACT", // required
 *         AbsoluteTimeRange: {
 *           StartTime: Number("long"),
 *           EndTime: Number("long"),
 *           First: Number("long"),
 *           Last: Number("long"),
 *         },
 *         RelativeTimeRange: {
 *           StartPercentage: Number("int"),
 *           EndPercentage: Number("int"),
 *           First: Number("int"),
 *           Last: Number("int"),
 *         },
 *         ParticipantRole: "AGENT" || "CUSTOMER",
 *         Negate: true || false,
 *         Targets: [ // StringTargetList // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       SentimentFilter: { // SentimentFilter
 *         Sentiments: [ // SentimentValueList // required
 *           "POSITIVE" || "NEGATIVE" || "NEUTRAL" || "MIXED",
 *         ],
 *         AbsoluteTimeRange: {
 *           StartTime: Number("long"),
 *           EndTime: Number("long"),
 *           First: Number("long"),
 *           Last: Number("long"),
 *         },
 *         RelativeTimeRange: {
 *           StartPercentage: Number("int"),
 *           EndPercentage: Number("int"),
 *           First: Number("int"),
 *           Last: Number("int"),
 *         },
 *         ParticipantRole: "AGENT" || "CUSTOMER",
 *         Negate: true || false,
 *       },
 *     },
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   InputType: "REAL_TIME" || "POST_CALL",
 * };
 * const command = new CreateCallAnalyticsCategoryCommand(input);
 * const response = await client.send(command);
 * // { // CreateCallAnalyticsCategoryResponse
 * //   CategoryProperties: { // CategoryProperties
 * //     CategoryName: "STRING_VALUE",
 * //     Rules: [ // RuleList
 * //       { // Rule Union: only one key present
 * //         NonTalkTimeFilter: { // NonTalkTimeFilter
 * //           Threshold: Number("long"),
 * //           AbsoluteTimeRange: { // AbsoluteTimeRange
 * //             StartTime: Number("long"),
 * //             EndTime: Number("long"),
 * //             First: Number("long"),
 * //             Last: Number("long"),
 * //           },
 * //           RelativeTimeRange: { // RelativeTimeRange
 * //             StartPercentage: Number("int"),
 * //             EndPercentage: Number("int"),
 * //             First: Number("int"),
 * //             Last: Number("int"),
 * //           },
 * //           Negate: true || false,
 * //         },
 * //         InterruptionFilter: { // InterruptionFilter
 * //           Threshold: Number("long"),
 * //           ParticipantRole: "AGENT" || "CUSTOMER",
 * //           AbsoluteTimeRange: {
 * //             StartTime: Number("long"),
 * //             EndTime: Number("long"),
 * //             First: Number("long"),
 * //             Last: Number("long"),
 * //           },
 * //           RelativeTimeRange: {
 * //             StartPercentage: Number("int"),
 * //             EndPercentage: Number("int"),
 * //             First: Number("int"),
 * //             Last: Number("int"),
 * //           },
 * //           Negate: true || false,
 * //         },
 * //         TranscriptFilter: { // TranscriptFilter
 * //           TranscriptFilterType: "EXACT", // required
 * //           AbsoluteTimeRange: {
 * //             StartTime: Number("long"),
 * //             EndTime: Number("long"),
 * //             First: Number("long"),
 * //             Last: Number("long"),
 * //           },
 * //           RelativeTimeRange: {
 * //             StartPercentage: Number("int"),
 * //             EndPercentage: Number("int"),
 * //             First: Number("int"),
 * //             Last: Number("int"),
 * //           },
 * //           ParticipantRole: "AGENT" || "CUSTOMER",
 * //           Negate: true || false,
 * //           Targets: [ // StringTargetList // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         SentimentFilter: { // SentimentFilter
 * //           Sentiments: [ // SentimentValueList // required
 * //             "POSITIVE" || "NEGATIVE" || "NEUTRAL" || "MIXED",
 * //           ],
 * //           AbsoluteTimeRange: {
 * //             StartTime: Number("long"),
 * //             EndTime: Number("long"),
 * //             First: Number("long"),
 * //             Last: Number("long"),
 * //           },
 * //           RelativeTimeRange: {
 * //             StartPercentage: Number("int"),
 * //             EndPercentage: Number("int"),
 * //             First: Number("int"),
 * //             Last: Number("int"),
 * //           },
 * //           ParticipantRole: "AGENT" || "CUSTOMER",
 * //           Negate: true || false,
 * //         },
 * //       },
 * //     ],
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     LastUpdateTime: new Date("TIMESTAMP"),
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     InputType: "REAL_TIME" || "POST_CALL",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCallAnalyticsCategoryCommandInput - {@link CreateCallAnalyticsCategoryCommandInput}
 * @returns {@link CreateCallAnalyticsCategoryCommandOutput}
 * @see {@link CreateCallAnalyticsCategoryCommandInput} for command's `input` shape.
 * @see {@link CreateCallAnalyticsCategoryCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Your request didn't pass one or more validation tests. This can occur when the entity
 *             you're trying to delete doesn't exist or if it's in a non-terminal state (such as
 *                 <code>IN PROGRESS</code>). See the exception message field for more
 *             information.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource already exists with this name. Resource names must be unique within an
 *                 Amazon Web Services account.</p>
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
export class CreateCallAnalyticsCategoryCommand extends $Command
  .classBuilder<
    CreateCallAnalyticsCategoryCommandInput,
    CreateCallAnalyticsCategoryCommandOutput,
    TranscribeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TranscribeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Transcribe", "CreateCallAnalyticsCategory", {})
  .n("TranscribeClient", "CreateCallAnalyticsCategoryCommand")
  .sc(CreateCallAnalyticsCategory)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCallAnalyticsCategoryRequest;
      output: CreateCallAnalyticsCategoryResponse;
    };
    sdk: {
      input: CreateCallAnalyticsCategoryCommandInput;
      output: CreateCallAnalyticsCategoryCommandOutput;
    };
  };
}
