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

import {
  KinesisVideoArchivedMediaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisVideoArchivedMediaClient";
import { GetDASHStreamingSessionURLInput, GetDASHStreamingSessionURLOutput } from "../models/models_0";
import { de_GetDASHStreamingSessionURLCommand, se_GetDASHStreamingSessionURLCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDASHStreamingSessionURLCommand}.
 */
export interface GetDASHStreamingSessionURLCommandInput extends GetDASHStreamingSessionURLInput {}
/**
 * @public
 *
 * The output of {@link GetDASHStreamingSessionURLCommand}.
 */
export interface GetDASHStreamingSessionURLCommandOutput extends GetDASHStreamingSessionURLOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves an MPEG Dynamic Adaptive Streaming over HTTP (DASH) URL for the stream. You
 *             can then open the URL in a media player to view the stream contents.</p>
 *          <p>Both the <code>StreamName</code> and the <code>StreamARN</code> parameters are
 *             optional, but you must specify either the <code>StreamName</code> or the
 *                 <code>StreamARN</code> when invoking this API operation.</p>
 *          <p>An Amazon Kinesis video stream has the following requirements for providing data
 *             through MPEG-DASH:</p>
 *          <ul>
 *             <li>
 *                <p>The media must contain h.264 or h.265 encoded video and, optionally, AAC or
 *                     G.711 encoded audio. Specifically, the codec ID of track 1 should be
 *                         <code>V_MPEG/ISO/AVC</code> (for h.264) or V_MPEGH/ISO/HEVC (for H.265).
 *                     Optionally, the codec ID of track 2 should be <code>A_AAC</code> (for AAC) or
 *                     A_MS/ACM (for G.711).</p>
 *             </li>
 *             <li>
 *                <p>Data retention must be greater than 0.</p>
 *             </li>
 *             <li>
 *                <p>The video track of each fragment must contain codec private data in the
 *                     Advanced Video Coding (AVC) for H.264 format and HEVC for H.265 format. For more
 *                     information, see <a href="https://www.iso.org/standard/55980.html">MPEG-4
 *                         specification ISO/IEC 14496-15</a>. For information about adapting
 *                     stream data to a given format, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/producer-reference-nal.html">NAL Adaptation Flags</a>.</p>
 *             </li>
 *             <li>
 *                <p>The audio track (if present) of each fragment must contain codec private data
 *                     in the AAC format (<a href="https://www.iso.org/standard/43345.html">AAC
 *                         specification ISO/IEC 13818-7</a>) or the <a href="http://www-mmsp.ece.mcgill.ca/Documents/AudioFormats/WAVE/WAVE.html">MS
 *                         Wave format</a>.</p>
 *             </li>
 *          </ul>
 *          <p>The following procedure shows how to use MPEG-DASH with Kinesis Video Streams:</p>
 *          <ol>
 *             <li>
 *                <p>Get an endpoint using <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetDataEndpoint.html">GetDataEndpoint</a>, specifying
 *                         <code>GET_DASH_STREAMING_SESSION_URL</code> for the <code>APIName</code>
 *                     parameter.</p>
 *             </li>
 *             <li>
 *                <p>Retrieve the MPEG-DASH URL using <code>GetDASHStreamingSessionURL</code>.
 *                     Kinesis Video Streams creates an MPEG-DASH streaming session to be used for
 *                     accessing content in a stream using the MPEG-DASH protocol.
 *                         <code>GetDASHStreamingSessionURL</code> returns an authenticated URL (that
 *                     includes an encrypted session token) for the session's MPEG-DASH
 *                         <i>manifest</i> (the root resource needed for streaming with
 *                     MPEG-DASH).</p>
 *                <note>
 *                   <p>Don't share or store this token where an unauthorized entity can access
 *                         it. The token provides access to the content of the stream. Safeguard the
 *                         token with the same measures that you use with your Amazon Web Services credentials.</p>
 *                </note>
 *                <p>The media that is made available through the manifest consists only of the
 *                     requested stream, time range, and format. No other media data (such as frames
 *                     outside the requested window or alternate bitrates) is made available.</p>
 *             </li>
 *             <li>
 *                <p>Provide the URL (containing the encrypted session token) for the MPEG-DASH
 *                     manifest to a media player that supports the MPEG-DASH protocol. Kinesis Video
 *                     Streams makes the initialization fragment and media fragments available through
 *                     the manifest URL. The initialization fragment contains the codec private data
 *                     for the stream, and other data needed to set up the video or audio decoder and
 *                     renderer. The media fragments contain encoded video frames or encoded audio
 *                     samples.</p>
 *             </li>
 *             <li>
 *                <p>The media player receives the authenticated URL and requests stream metadata
 *                     and media data normally. When the media player requests data, it calls the
 *                     following actions:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <b>GetDASHManifest:</b> Retrieves an MPEG DASH
 *                             manifest, which contains the metadata for the media that you want to
 *                             playback.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>GetMP4InitFragment:</b> Retrieves the MP4
 *                             initialization fragment. The media player typically loads the
 *                             initialization fragment before loading any media fragments. This
 *                             fragment contains the "<code>fytp</code>" and "<code>moov</code>" MP4
 *                             atoms, and the child atoms that are needed to initialize the media
 *                             player decoder.</p>
 *                      <p>The initialization fragment does not correspond to a fragment in a
 *                             Kinesis video stream. It contains only the codec private data for the
 *                             stream and respective track, which the media player needs to decode the
 *                             media frames.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>GetMP4MediaFragment:</b> Retrieves MP4
 *                             media fragments. These fragments contain the "<code>moof</code>" and
 *                                 "<code>mdat</code>" MP4 atoms and their child atoms, containing the
 *                             encoded fragment's media frames and their timestamps. </p>
 *                      <note>
 *                         <p>After the first media fragment is made available in a streaming
 *                                 session, any fragments that don't contain the same codec private
 *                                 data cause an error to be returned when those different media
 *                                 fragments are loaded. Therefore, the codec private data should not
 *                                 change between fragments in a session. This also means that the
 *                                 session fails if the fragments in a stream change from having only
 *                                 video to having both audio and video.</p>
 *                      </note>
 *                      <p>Data retrieved with this action is billable. See <a href="https://aws.amazon.com/kinesis/video-streams/pricing/">Pricing</a> for details.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ol>
 *          <note>
 *             <p>For restrictions that apply to MPEG-DASH sessions, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/limits.html">Kinesis Video Streams Limits</a>.</p>
 *          </note>
 *          <p>You can monitor the amount of data that the media player consumes by monitoring the
 *                 <code>GetMP4MediaFragment.OutgoingBytes</code> Amazon CloudWatch metric. For
 *             information about using CloudWatch to monitor Kinesis Video Streams, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/monitoring.html">Monitoring Kinesis Video Streams</a>. For pricing information, see <a href="https://aws.amazon.com/kinesis/video-streams/pricing/">Amazon Kinesis Video
 *                 Streams Pricing</a> and <a href="https://aws.amazon.com/pricing/">Amazon Web Services
 *                 Pricing</a>. Charges for both HLS sessions and outgoing Amazon Web Services data apply.</p>
 *          <p>For more information about HLS, see <a href="https://developer.apple.com/streaming/">HTTP Live Streaming</a> on the
 *                 <a href="https://developer.apple.com">Apple Developer site</a>.</p>
 *          <important>
 *             <p>If an error is thrown after invoking a Kinesis Video Streams archived media API,
 *                 in addition to the HTTP status code and the response body, it includes the following
 *                 pieces of information: </p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <code>x-amz-ErrorType</code> HTTP header – contains a more specific error
 *                         type in addition to what the HTTP status code provides. </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>x-amz-RequestId</code> HTTP header – if you want to report an issue to
 *                         Amazon Web Services the support team can better diagnose the problem if given the Request
 *                         Id.</p>
 *                </li>
 *             </ul>
 *             <p>Both the HTTP status code and the ErrorType header can be utilized to make
 *                 programmatic decisions about whether errors are retry-able and under what
 *                 conditions, as well as provide information on what actions the client programmer
 *                 might need to take in order to successfully try again.</p>
 *             <p>For more information, see the <b>Errors</b> section at
 *                 the bottom of this topic, as well as <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/CommonErrors.html">Common Errors</a>.
 *             </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoArchivedMediaClient, GetDASHStreamingSessionURLCommand } from "@aws-sdk/client-kinesis-video-archived-media"; // ES Modules import
 * // const { KinesisVideoArchivedMediaClient, GetDASHStreamingSessionURLCommand } = require("@aws-sdk/client-kinesis-video-archived-media"); // CommonJS import
 * const client = new KinesisVideoArchivedMediaClient(config);
 * const input = { // GetDASHStreamingSessionURLInput
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 *   PlaybackMode: "LIVE" || "LIVE_REPLAY" || "ON_DEMAND",
 *   DisplayFragmentTimestamp: "ALWAYS" || "NEVER",
 *   DisplayFragmentNumber: "ALWAYS" || "NEVER",
 *   DASHFragmentSelector: { // DASHFragmentSelector
 *     FragmentSelectorType: "PRODUCER_TIMESTAMP" || "SERVER_TIMESTAMP",
 *     TimestampRange: { // DASHTimestampRange
 *       StartTimestamp: new Date("TIMESTAMP"),
 *       EndTimestamp: new Date("TIMESTAMP"),
 *     },
 *   },
 *   Expires: Number("int"),
 *   MaxManifestFragmentResults: Number("long"),
 * };
 * const command = new GetDASHStreamingSessionURLCommand(input);
 * const response = await client.send(command);
 * // { // GetDASHStreamingSessionURLOutput
 * //   DASHStreamingSessionURL: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDASHStreamingSessionURLCommandInput - {@link GetDASHStreamingSessionURLCommandInput}
 * @returns {@link GetDASHStreamingSessionURLCommandOutput}
 * @see {@link GetDASHStreamingSessionURLCommandInput} for command's `input` shape.
 * @see {@link GetDASHStreamingSessionURLCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoArchivedMediaClientResolvedConfig | config} for KinesisVideoArchivedMediaClient's `config` shape.
 *
 * @throws {@link ClientLimitExceededException} (client fault)
 *  <p>Kinesis Video Streams has throttled the request because you have exceeded a limit. Try making the call later. For information about limits, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/limits.html">Kinesis Video Streams Limits</a>.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>A specified parameter exceeds its restrictions, is not supported, or can't be
 *             used.</p>
 *
 * @throws {@link InvalidCodecPrivateDataException} (client fault)
 *  <p>The codec private data in at least one of the tracks of the video stream is not valid
 *             for this operation.</p>
 *
 * @throws {@link MissingCodecPrivateDataException} (client fault)
 *  <p>No codec private data was found in at least one of tracks of the video stream.</p>
 *
 * @throws {@link NoDataRetentionException} (client fault)
 *  <p>A streaming session was requested for a stream that does not retain data (that is, has
 *             a <code>DataRetentionInHours</code> of 0). </p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>Status Code: 403, The caller is not authorized to perform an operation on the given
 *             stream, or the token has expired.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>
 *             <code>GetImages</code> will throw this error when Kinesis Video Streams can't find the stream
 *             that you specified.</p>
 *          <p>
 *             <code>GetHLSStreamingSessionURL</code> and <code>GetDASHStreamingSessionURL</code> throw
 *             this error if a session with a <code>PlaybackMode</code> of <code>ON_DEMAND</code> or
 *                 <code>LIVE_REPLAY</code>is requested for a stream that has no fragments within the
 *             requested time range, or if a session with a <code>PlaybackMode</code> of
 *                 <code>LIVE</code> is requested for a stream that has no fragments within the last 30
 *             seconds.</p>
 *
 * @throws {@link UnsupportedStreamMediaTypeException} (client fault)
 *  <p>The type of the media (for example, h.264 or h.265 video or ACC or G.711 audio) could
 *             not be determined from the codec IDs of the tracks in the first fragment for a playback
 *             session. The codec ID for track 1 should be <code>V_MPEG/ISO/AVC</code> and, optionally,
 *             the codec ID for track 2 should be <code>A_AAC</code>.</p>
 *
 * @throws {@link KinesisVideoArchivedMediaServiceException}
 * <p>Base exception class for all service exceptions from KinesisVideoArchivedMedia service.</p>
 *
 */
export class GetDASHStreamingSessionURLCommand extends $Command<
  GetDASHStreamingSessionURLCommandInput,
  GetDASHStreamingSessionURLCommandOutput,
  KinesisVideoArchivedMediaClientResolvedConfig
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
  constructor(readonly input: GetDASHStreamingSessionURLCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoArchivedMediaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDASHStreamingSessionURLCommandInput, GetDASHStreamingSessionURLCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDASHStreamingSessionURLCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoArchivedMediaClient";
    const commandName = "GetDASHStreamingSessionURLCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSAcuityReader",
        operation: "GetDASHStreamingSessionURL",
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
  private serialize(input: GetDASHStreamingSessionURLCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDASHStreamingSessionURLCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDASHStreamingSessionURLCommandOutput> {
    return de_GetDASHStreamingSessionURLCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
