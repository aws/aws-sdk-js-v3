// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCallAnalyticsCategoryRequest, UpdateCallAnalyticsCategoryResponse } from "../models/models_0";
import { UpdateCallAnalyticsCategory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCallAnalyticsCategoryCommand}.
 */
export interface UpdateCallAnalyticsCategoryCommandInput extends UpdateCallAnalyticsCategoryRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCallAnalyticsCategoryCommand}.
 */
export interface UpdateCallAnalyticsCategoryCommandOutput extends UpdateCallAnalyticsCategoryResponse, __MetadataBearer {}

/**
 * Updates the specified Call Analytics category with new rules. Note that the `UpdateCallAnalyticsCategory` operation overwrites all existing rules contained in the specified category. You cannot append additional rules onto an existing category.
 *
 * To create a new category, see .
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, UpdateCallAnalyticsCategoryCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, UpdateCallAnalyticsCategoryCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * // import type { TranscribeClientConfig } from "@aws-sdk/client-transcribe";
 * const config = {}; // type is TranscribeClientConfig
 * const client = new TranscribeClient(config);
 * const input = { // UpdateCallAnalyticsCategoryRequest
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
 *   InputType: "REAL_TIME" || "POST_CALL",
 * };
 * const command = new UpdateCallAnalyticsCategoryCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCallAnalyticsCategoryResponse
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
 * @param UpdateCallAnalyticsCategoryCommandInput - {@link UpdateCallAnalyticsCategoryCommandInput}
 * @returns {@link UpdateCallAnalyticsCategoryCommandOutput}
 * @see {@link UpdateCallAnalyticsCategoryCommandInput} for command's `input` shape.
 * @see {@link UpdateCallAnalyticsCategoryCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *
 * We can't find the requested resource. Check that the specified name is correct and try your request again.
 *
 * @throws {@link TranscribeServiceException}
 *
 * Base exception class for all service exceptions from Transcribe service.
 *
 * @public
 */
export class UpdateCallAnalyticsCategoryCommand extends command<UpdateCallAnalyticsCategoryCommandInput, UpdateCallAnalyticsCategoryCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCallAnalyticsCategory",
  UpdateCallAnalyticsCategory$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCallAnalyticsCategoryRequest;
      output: UpdateCallAnalyticsCategoryResponse;
    };
    sdk: {
      input: UpdateCallAnalyticsCategoryCommandInput;
      output: UpdateCallAnalyticsCategoryCommandOutput;
    };
  };
}
