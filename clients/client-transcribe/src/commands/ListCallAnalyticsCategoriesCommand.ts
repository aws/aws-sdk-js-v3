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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ListCallAnalyticsCategoriesRequest, ListCallAnalyticsCategoriesResponse } from "../models/models_0";
import { de_ListCallAnalyticsCategoriesCommand, se_ListCallAnalyticsCategoriesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
export interface ListCallAnalyticsCategoriesCommandOutput
  extends ListCallAnalyticsCategoriesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Provides a list of Call Analytics categories, including all rules that make up each
 *             category.</p>
 *          <p>To get detailed information about a specific Call Analytics category, use the  operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, ListCallAnalyticsCategoriesCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, ListCallAnalyticsCategoriesCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
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
 */
export class ListCallAnalyticsCategoriesCommand extends $Command<
  ListCallAnalyticsCategoriesCommandInput,
  ListCallAnalyticsCategoriesCommandOutput,
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
  constructor(readonly input: ListCallAnalyticsCategoriesCommandInput) {
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
  ): Handler<ListCallAnalyticsCategoriesCommandInput, ListCallAnalyticsCategoriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCallAnalyticsCategoriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "ListCallAnalyticsCategoriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Transcribe",
        operation: "ListCallAnalyticsCategories",
      },
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
  private serialize(input: ListCallAnalyticsCategoriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListCallAnalyticsCategoriesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCallAnalyticsCategoriesCommandOutput> {
    return de_ListCallAnalyticsCategoriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
