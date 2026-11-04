// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCallAnalyticsCategoryRequest, CreateCallAnalyticsCategoryResponse } from "../models/models_0";
import { CreateCallAnalyticsCategory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CreateCallAnalyticsCategoryCommandOutput extends CreateCallAnalyticsCategoryResponse, __MetadataBearer {}

/**
 * Creates a new Call Analytics category.
 *
 * All categories are automatically applied to your Call Analytics transcriptions. Note that in order to apply categories to your transcriptions, you must create them before submitting your transcription request, as categories cannot be applied retroactively.
 *
 * When creating a new category, you can use the `InputType` parameter to label the category as a `POST_CALL` or a `REAL_TIME` category. `POST_CALL` categories can only be applied to post-call transcriptions and `REAL_TIME` categories can only be applied to real-time transcriptions. If you do not include `InputType`, your category is created as a `POST_CALL` category by default.
 *
 * Call Analytics categories are composed of rules. For each category, you must create between 1 and 20 rules. Rules can include these parameters: , , , and .
 *
 * To update an existing category, see .
 *
 * To learn more about Call Analytics categories, see [Creating categories for post-call transcriptions](https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html) and [Creating categories for real-time transcriptions](https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html).
 *
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
 *
 * Your request didn't pass one or more validation tests. This can occur when the entity you're trying to delete doesn't exist or if it's in a non-terminal state (such as `IN PROGRESS`). See the exception message field for more information.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A resource already exists with this name. Resource names must be unique within an Amazon Web Services account.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * There was an internal error. Check the error message, correct the issue, and try your request again.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * You've either sent too many requests or your input file is too long. Wait before retrying your request, or use a smaller file and try your request again.
 *
 * @throws {@link TranscribeServiceException}
 *
 * Base exception class for all service exceptions from Transcribe service.
 *
 * @public
 */
export class CreateCallAnalyticsCategoryCommand extends command<CreateCallAnalyticsCategoryCommandInput, CreateCallAnalyticsCategoryCommandOutput>(
  _ep0,
  _mw0,
  "CreateCallAnalyticsCategory",
  CreateCallAnalyticsCategory$
) {
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
