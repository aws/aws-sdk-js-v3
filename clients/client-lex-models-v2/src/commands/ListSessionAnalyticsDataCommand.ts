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

import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { ListSessionAnalyticsDataRequest, ListSessionAnalyticsDataResponse } from "../models/models_1";
import { de_ListSessionAnalyticsDataCommand, se_ListSessionAnalyticsDataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSessionAnalyticsDataCommand}.
 */
export interface ListSessionAnalyticsDataCommandInput extends ListSessionAnalyticsDataRequest {}
/**
 * @public
 *
 * The output of {@link ListSessionAnalyticsDataCommand}.
 */
export interface ListSessionAnalyticsDataCommandOutput extends ListSessionAnalyticsDataResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of metadata for individual user sessions with your bot. The <code>startDateTime</code> and <code>endDateTime</code> fields are required. These fields define a time range for which you want to retrieve results. Of the optional fields, you can organize the results in the following ways:</p>
 *          <ul>
 *             <li>
 *                <p>Use the <code>filters</code> field to filter the results and the <code>sortBy</code> field to specify the values by which to sort the results.</p>
 *             </li>
 *             <li>
 *                <p>Use the <code>maxResults</code> field to limit the number of results to return in a single response and the <code>nextToken</code> field to return the next batch of results if the response does not return the full set of results.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListSessionAnalyticsDataCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListSessionAnalyticsDataCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // ListSessionAnalyticsDataRequest
 *   botId: "STRING_VALUE", // required
 *   startDateTime: new Date("TIMESTAMP"), // required
 *   endDateTime: new Date("TIMESTAMP"), // required
 *   sortBy: { // SessionDataSortBy
 *     name: "ConversationStartTime" || "NumberOfTurns" || "Duration", // required
 *     order: "Ascending" || "Descending", // required
 *   },
 *   filters: [ // AnalyticsSessionFilters
 *     { // AnalyticsSessionFilter
 *       name: "BotAliasId" || "BotVersion" || "LocaleId" || "Modality" || "Channel" || "Duration" || "ConversationEndState" || "SessionId" || "OriginatingRequestId" || "IntentPath", // required
 *       operator: "EQ" || "GT" || "LT", // required
 *       values: [ // AnalyticsFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSessionAnalyticsDataCommand(input);
 * const response = await client.send(command);
 * // { // ListSessionAnalyticsDataResponse
 * //   botId: "STRING_VALUE",
 * //   nextToken: "STRING_VALUE",
 * //   sessions: [ // SessionSpecifications
 * //     { // SessionSpecification
 * //       botAliasId: "STRING_VALUE",
 * //       botVersion: "STRING_VALUE",
 * //       localeId: "STRING_VALUE",
 * //       channel: "STRING_VALUE",
 * //       sessionId: "STRING_VALUE",
 * //       conversationStartTime: new Date("TIMESTAMP"),
 * //       conversationEndTime: new Date("TIMESTAMP"),
 * //       conversationDurationSeconds: Number("long"),
 * //       conversationEndState: "Success" || "Failure" || "Dropped",
 * //       mode: "Speech" || "Text" || "DTMF" || "MultiMode",
 * //       numberOfTurns: Number("long"),
 * //       invokedIntentSamples: [ // InvokedIntentSamples
 * //         { // InvokedIntentSample
 * //           intentName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       originatingRequestId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSessionAnalyticsDataCommandInput - {@link ListSessionAnalyticsDataCommandInput}
 * @returns {@link ListSessionAnalyticsDataCommandOutput}
 * @see {@link ListSessionAnalyticsDataCommandInput} for command's `input` shape.
 * @see {@link ListSessionAnalyticsDataCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>Your request couldn't be completed because one or more request
 *          fields aren't valid. Check the fields in your request and try
 *          again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 */
export class ListSessionAnalyticsDataCommand extends $Command<
  ListSessionAnalyticsDataCommandInput,
  ListSessionAnalyticsDataCommandOutput,
  LexModelsV2ClientResolvedConfig
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
  constructor(readonly input: ListSessionAnalyticsDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSessionAnalyticsDataCommandInput, ListSessionAnalyticsDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSessionAnalyticsDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "ListSessionAnalyticsDataCommand";
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
  private serialize(input: ListSessionAnalyticsDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSessionAnalyticsDataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSessionAnalyticsDataCommandOutput> {
    return de_ListSessionAnalyticsDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
