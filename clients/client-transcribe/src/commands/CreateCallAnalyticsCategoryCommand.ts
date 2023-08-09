// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CreateCallAnalyticsCategoryRequest, CreateCallAnalyticsCategoryResponse } from "../models/models_0";
import { de_CreateCallAnalyticsCategoryCommand, se_CreateCallAnalyticsCategoryCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
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
 */
export class CreateCallAnalyticsCategoryCommand extends $Command<
  CreateCallAnalyticsCategoryCommandInput,
  CreateCallAnalyticsCategoryCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateCallAnalyticsCategoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCallAnalyticsCategoryCommandInput, CreateCallAnalyticsCategoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCallAnalyticsCategoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "CreateCallAnalyticsCategoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateCallAnalyticsCategoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateCallAnalyticsCategoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCallAnalyticsCategoryCommandOutput> {
    return de_CreateCallAnalyticsCategoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
