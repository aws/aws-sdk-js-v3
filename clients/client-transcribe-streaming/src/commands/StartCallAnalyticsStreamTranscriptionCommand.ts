// smithy-typescript generated code
import { getEventStreamPlugin } from "@aws-sdk/middleware-eventstream";
import { getWebSocketPlugin } from "@aws-sdk/middleware-websocket";
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  EventStreamSerdeContext as __EventStreamSerdeContext,
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  StartCallAnalyticsStreamTranscriptionRequest,
  StartCallAnalyticsStreamTranscriptionRequestFilterSensitiveLog,
  StartCallAnalyticsStreamTranscriptionResponse,
  StartCallAnalyticsStreamTranscriptionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_StartCallAnalyticsStreamTranscriptionCommand,
  se_StartCallAnalyticsStreamTranscriptionCommand,
} from "../protocols/Aws_restJson1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  TranscribeStreamingClientResolvedConfig,
} from "../TranscribeStreamingClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartCallAnalyticsStreamTranscriptionCommand}.
 */
export interface StartCallAnalyticsStreamTranscriptionCommandInput
  extends StartCallAnalyticsStreamTranscriptionRequest {}
/**
 * @public
 *
 * The output of {@link StartCallAnalyticsStreamTranscriptionCommand}.
 */
export interface StartCallAnalyticsStreamTranscriptionCommandOutput
  extends StartCallAnalyticsStreamTranscriptionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to
 *       Amazon Transcribe and the transcription results are streamed to your application. Use this operation
 *       for <a href="https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics.html">Call Analytics</a> transcriptions.</p>
 *          <p>The following parameters are required:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>language-code</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>media-encoding</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>sample-rate</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>For more information on streaming with Amazon Transcribe, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html">Transcribing streaming audio</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeStreamingClient, StartCallAnalyticsStreamTranscriptionCommand } from "@aws-sdk/client-transcribe-streaming"; // ES Modules import
 * // const { TranscribeStreamingClient, StartCallAnalyticsStreamTranscriptionCommand } = require("@aws-sdk/client-transcribe-streaming"); // CommonJS import
 * const client = new TranscribeStreamingClient(config);
 * const input = { // StartCallAnalyticsStreamTranscriptionRequest
 *   LanguageCode: "en-US" || "en-GB" || "es-US" || "fr-CA" || "fr-FR" || "en-AU" || "it-IT" || "de-DE" || "pt-BR", // required
 *   MediaSampleRateHertz: Number("int"), // required
 *   MediaEncoding: "pcm" || "ogg-opus" || "flac", // required
 *   VocabularyName: "STRING_VALUE",
 *   SessionId: "STRING_VALUE",
 *   AudioStream: { // AudioStream Union: only one key present
 *     AudioEvent: { // AudioEvent
 *       AudioChunk: "BLOB_VALUE",
 *     },
 *     ConfigurationEvent: { // ConfigurationEvent
 *       ChannelDefinitions: [ // ChannelDefinitions
 *         { // ChannelDefinition
 *           ChannelId: Number("int"), // required
 *           ParticipantRole: "AGENT" || "CUSTOMER", // required
 *         },
 *       ],
 *       PostCallAnalyticsSettings: { // PostCallAnalyticsSettings
 *         OutputLocation: "STRING_VALUE", // required
 *         DataAccessRoleArn: "STRING_VALUE", // required
 *         ContentRedactionOutput: "redacted" || "redacted_and_unredacted",
 *         OutputEncryptionKMSKeyId: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   VocabularyFilterName: "STRING_VALUE",
 *   VocabularyFilterMethod: "remove" || "mask" || "tag",
 *   LanguageModelName: "STRING_VALUE",
 *   EnablePartialResultsStabilization: true || false,
 *   PartialResultsStability: "high" || "medium" || "low",
 *   ContentIdentificationType: "PII",
 *   ContentRedactionType: "PII",
 *   PiiEntityTypes: "STRING_VALUE",
 * };
 * const command = new StartCallAnalyticsStreamTranscriptionCommand(input);
 * const response = await client.send(command);
 * // { // StartCallAnalyticsStreamTranscriptionResponse
 * //   RequestId: "STRING_VALUE",
 * //   LanguageCode: "en-US" || "en-GB" || "es-US" || "fr-CA" || "fr-FR" || "en-AU" || "it-IT" || "de-DE" || "pt-BR",
 * //   MediaSampleRateHertz: Number("int"),
 * //   MediaEncoding: "pcm" || "ogg-opus" || "flac",
 * //   VocabularyName: "STRING_VALUE",
 * //   SessionId: "STRING_VALUE",
 * //   CallAnalyticsTranscriptResultStream: { // CallAnalyticsTranscriptResultStream Union: only one key present
 * //     UtteranceEvent: { // UtteranceEvent
 * //       UtteranceId: "STRING_VALUE",
 * //       IsPartial: true || false,
 * //       ParticipantRole: "AGENT" || "CUSTOMER",
 * //       BeginOffsetMillis: Number("long"),
 * //       EndOffsetMillis: Number("long"),
 * //       Transcript: "STRING_VALUE",
 * //       Items: [ // CallAnalyticsItemList
 * //         { // CallAnalyticsItem
 * //           BeginOffsetMillis: Number("long"),
 * //           EndOffsetMillis: Number("long"),
 * //           Type: "pronunciation" || "punctuation",
 * //           Content: "STRING_VALUE",
 * //           Confidence: Number("double"),
 * //           VocabularyFilterMatch: true || false,
 * //           Stable: true || false,
 * //         },
 * //       ],
 * //       Entities: [ // CallAnalyticsEntityList
 * //         { // CallAnalyticsEntity
 * //           BeginOffsetMillis: Number("long"),
 * //           EndOffsetMillis: Number("long"),
 * //           Category: "STRING_VALUE",
 * //           Type: "STRING_VALUE",
 * //           Content: "STRING_VALUE",
 * //           Confidence: Number("double"),
 * //         },
 * //       ],
 * //       Sentiment: "POSITIVE" || "NEGATIVE" || "MIXED" || "NEUTRAL",
 * //       IssuesDetected: [ // IssuesDetected
 * //         { // IssueDetected
 * //           CharacterOffsets: { // CharacterOffsets
 * //             Begin: Number("int"),
 * //             End: Number("int"),
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     CategoryEvent: { // CategoryEvent
 * //       MatchedCategories: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       MatchedDetails: { // MatchedCategoryDetails
 * //         "<keys>": { // PointsOfInterest
 * //           TimestampRanges: [ // TimestampRanges
 * //             { // TimestampRange
 * //               BeginOffsetMillis: Number("long"),
 * //               EndOffsetMillis: Number("long"),
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //     BadRequestException: { // BadRequestException
 * //       Message: "STRING_VALUE",
 * //     },
 * //     LimitExceededException: { // LimitExceededException
 * //       Message: "STRING_VALUE",
 * //     },
 * //     InternalFailureException: { // InternalFailureException
 * //       Message: "STRING_VALUE",
 * //     },
 * //     ConflictException: { // ConflictException
 * //       Message: "STRING_VALUE",
 * //     },
 * //     ServiceUnavailableException: { // ServiceUnavailableException
 * //       Message: "STRING_VALUE",
 * //     },
 * //   },
 * //   VocabularyFilterName: "STRING_VALUE",
 * //   VocabularyFilterMethod: "remove" || "mask" || "tag",
 * //   LanguageModelName: "STRING_VALUE",
 * //   EnablePartialResultsStabilization: true || false,
 * //   PartialResultsStability: "high" || "medium" || "low",
 * //   ContentIdentificationType: "PII",
 * //   ContentRedactionType: "PII",
 * //   PiiEntityTypes: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartCallAnalyticsStreamTranscriptionCommandInput - {@link StartCallAnalyticsStreamTranscriptionCommandInput}
 * @returns {@link StartCallAnalyticsStreamTranscriptionCommandOutput}
 * @see {@link StartCallAnalyticsStreamTranscriptionCommandInput} for command's `input` shape.
 * @see {@link StartCallAnalyticsStreamTranscriptionCommandOutput} for command's `response` shape.
 * @see {@link TranscribeStreamingClientResolvedConfig | config} for TranscribeStreamingClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>One or more arguments to the <code>StartStreamTranscription</code>,
 *       <code>StartMedicalStreamTranscription</code>, or <code>StartCallAnalyticsStreamTranscription</code>
 *       operation was not valid. For example, <code>MediaEncoding</code> or <code>LanguageCode</code>
 *       used not valid values. Check the specified parameters and try your request again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A new stream started with the same session ID. The current stream has been terminated.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>A problem occurred while processing the audio. Amazon Transcribe terminated
 *       processing.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Your client has exceeded one of the Amazon Transcribe limits. This is typically the audio length
 *       limit. Break your audio stream into smaller chunks and try your request again.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable. Try your request later.</p>
 *
 * @throws {@link TranscribeStreamingServiceException}
 * <p>Base exception class for all service exceptions from TranscribeStreaming service.</p>
 *
 */
export class StartCallAnalyticsStreamTranscriptionCommand extends $Command<
  StartCallAnalyticsStreamTranscriptionCommandInput,
  StartCallAnalyticsStreamTranscriptionCommandOutput,
  TranscribeStreamingClientResolvedConfig
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
  constructor(readonly input: StartCallAnalyticsStreamTranscriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeStreamingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartCallAnalyticsStreamTranscriptionCommandInput, StartCallAnalyticsStreamTranscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartCallAnalyticsStreamTranscriptionCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getEventStreamPlugin(configuration));
    this.middlewareStack.use(getWebSocketPlugin(configuration, { headerPrefix: "x-amzn-transcribe-" }));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeStreamingClient";
    const commandName = "StartCallAnalyticsStreamTranscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartCallAnalyticsStreamTranscriptionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartCallAnalyticsStreamTranscriptionResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "Transcribe",
        operation: "StartCallAnalyticsStreamTranscription",
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
  private serialize(
    input: StartCallAnalyticsStreamTranscriptionCommandInput,
    context: __SerdeContext & __EventStreamSerdeContext
  ): Promise<__HttpRequest> {
    return se_StartCallAnalyticsStreamTranscriptionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __EventStreamSerdeContext
  ): Promise<StartCallAnalyticsStreamTranscriptionCommandOutput> {
    return de_StartCallAnalyticsStreamTranscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
