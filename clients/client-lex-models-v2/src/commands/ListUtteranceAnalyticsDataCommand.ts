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
import { ListUtteranceAnalyticsDataRequest, ListUtteranceAnalyticsDataResponse } from "../models/models_1";
import { de_ListUtteranceAnalyticsDataCommand, se_ListUtteranceAnalyticsDataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListUtteranceAnalyticsDataCommand}.
 */
export interface ListUtteranceAnalyticsDataCommandInput extends ListUtteranceAnalyticsDataRequest {}
/**
 * @public
 *
 * The output of {@link ListUtteranceAnalyticsDataCommand}.
 */
export interface ListUtteranceAnalyticsDataCommandOutput extends ListUtteranceAnalyticsDataResponse, __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>To use this API operation, your IAM role must have permissions to
 *             perform the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListAggregatedUtterances.html">ListAggregatedUtterances</a> operation, which provides access to
 *             utterance-related analytics. See <a href="https://docs.aws.amazon.com/lexv2/latest/dg/monitoring-utterances.html">Viewing utterance
 *                statistics</a> for the IAM policy to apply to the IAM role.</p>
 *          </note>
 *          <p>Retrieves a list of metadata for individual user utterances to your bot. The following fields are required:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>startDateTime</code> and <code>endDateTime</code> – Define a time range for which you want to retrieve results.</p>
 *             </li>
 *          </ul>
 *          <p>Of the optional fields, you can organize the results in the following ways:</p>
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
 * import { LexModelsV2Client, ListUtteranceAnalyticsDataCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListUtteranceAnalyticsDataCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // ListUtteranceAnalyticsDataRequest
 *   botId: "STRING_VALUE", // required
 *   startDateTime: new Date("TIMESTAMP"), // required
 *   endDateTime: new Date("TIMESTAMP"), // required
 *   sortBy: { // UtteranceDataSortBy
 *     name: "UtteranceTimestamp", // required
 *     order: "Ascending" || "Descending", // required
 *   },
 *   filters: [ // AnalyticsUtteranceFilters
 *     { // AnalyticsUtteranceFilter
 *       name: "BotAliasId" || "BotVersion" || "LocaleId" || "Modality" || "Channel" || "SessionId" || "OriginatingRequestId" || "UtteranceState" || "UtteranceText", // required
 *       operator: "EQ" || "GT" || "LT", // required
 *       values: [ // AnalyticsFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListUtteranceAnalyticsDataCommand(input);
 * const response = await client.send(command);
 * // { // ListUtteranceAnalyticsDataResponse
 * //   botId: "STRING_VALUE",
 * //   nextToken: "STRING_VALUE",
 * //   utterances: [ // UtteranceSpecifications
 * //     { // UtteranceSpecification
 * //       botAliasId: "STRING_VALUE",
 * //       botVersion: "STRING_VALUE",
 * //       localeId: "STRING_VALUE",
 * //       sessionId: "STRING_VALUE",
 * //       channel: "STRING_VALUE",
 * //       mode: "Speech" || "Text" || "DTMF" || "MultiMode",
 * //       conversationStartTime: new Date("TIMESTAMP"),
 * //       conversationEndTime: new Date("TIMESTAMP"),
 * //       utterance: "STRING_VALUE",
 * //       utteranceTimestamp: new Date("TIMESTAMP"),
 * //       audioVoiceDurationMillis: Number("long"),
 * //       utteranceUnderstood: true || false,
 * //       inputType: "STRING_VALUE",
 * //       outputType: "STRING_VALUE",
 * //       associatedIntentName: "STRING_VALUE",
 * //       associatedSlotName: "STRING_VALUE",
 * //       intentState: "Failed" || "Fulfilled" || "InProgress" || "ReadyForFulfillment" || "Waiting" || "FulfillmentInProgress",
 * //       dialogActionType: "STRING_VALUE",
 * //       botResponseAudioVoiceId: "STRING_VALUE",
 * //       slotsFilledInSession: "STRING_VALUE",
 * //       utteranceRequestId: "STRING_VALUE",
 * //       botResponses: [ // UtteranceBotResponses
 * //         { // UtteranceBotResponse
 * //           content: "STRING_VALUE",
 * //           contentType: "PlainText" || "CustomPayload" || "SSML" || "ImageResponseCard",
 * //           imageResponseCard: { // ImageResponseCard
 * //             title: "STRING_VALUE", // required
 * //             subtitle: "STRING_VALUE",
 * //             imageUrl: "STRING_VALUE",
 * //             buttons: [ // ButtonsList
 * //               { // Button
 * //                 text: "STRING_VALUE", // required
 * //                 value: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListUtteranceAnalyticsDataCommandInput - {@link ListUtteranceAnalyticsDataCommandInput}
 * @returns {@link ListUtteranceAnalyticsDataCommandOutput}
 * @see {@link ListUtteranceAnalyticsDataCommandInput} for command's `input` shape.
 * @see {@link ListUtteranceAnalyticsDataCommandOutput} for command's `response` shape.
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
export class ListUtteranceAnalyticsDataCommand extends $Command<
  ListUtteranceAnalyticsDataCommandInput,
  ListUtteranceAnalyticsDataCommandOutput,
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
  constructor(readonly input: ListUtteranceAnalyticsDataCommandInput) {
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
  ): Handler<ListUtteranceAnalyticsDataCommandInput, ListUtteranceAnalyticsDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListUtteranceAnalyticsDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "ListUtteranceAnalyticsDataCommand";
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
  private serialize(input: ListUtteranceAnalyticsDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListUtteranceAnalyticsDataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListUtteranceAnalyticsDataCommandOutput> {
    return de_ListUtteranceAnalyticsDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
