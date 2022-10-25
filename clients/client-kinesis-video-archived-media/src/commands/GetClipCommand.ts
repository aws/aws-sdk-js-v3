// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SdkStream as __SdkStream,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
  WithSdkStreamMixin as __WithSdkStreamMixin,
} from "@aws-sdk/types";

import {
  KinesisVideoArchivedMediaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisVideoArchivedMediaClient";
import {
  GetClipInput,
  GetClipInputFilterSensitiveLog,
  GetClipOutput,
  GetClipOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetClipCommand,
  serializeAws_restJson1GetClipCommand,
} from "../protocols/Aws_restJson1";

export interface GetClipCommandInput extends GetClipInput {}
export interface GetClipCommandOutput extends __WithSdkStreamMixin<GetClipOutput, "Payload">, __MetadataBearer {}

/**
 * <p>Downloads an MP4 file (clip) containing the archived, on-demand media from the
 *             specified video stream over the specified time range. </p>
 *         <p>Both the StreamName and the StreamARN parameters are optional, but you must specify
 *             either the StreamName or the StreamARN when invoking this API operation. </p>
 *
 *         <p>As a prerequisite to using GetCLip API, you must obtain an endpoint using
 *                 <code>GetDataEndpoint</code>, specifying GET_CLIP for<code></code> the
 *                 <code>APIName</code> parameter. </p>
 *         <p>An Amazon Kinesis video stream has the following requirements for providing data
 *             through MP4:</p>
 *         <ul>
 *             <li>
 *                 <p>The media must contain h.264 or h.265 encoded video and, optionally, AAC or
 *                     G.711 encoded audio. Specifically, the codec ID of track 1 should be
 *                         <code>V_MPEG/ISO/AVC</code> (for h.264) or V_MPEGH/ISO/HEVC (for H.265).
 *                     Optionally, the codec ID of track 2 should be <code>A_AAC</code> (for AAC) or
 *                     A_MS/ACM (for G.711).</p>
 *             </li>
 *             <li>
 *                 <p>Data retention must be greater than 0.</p>
 *             </li>
 *             <li>
 *                 <p>The video track of each fragment must contain codec private data in the
 *                     Advanced Video Coding (AVC) for H.264 format and HEVC for H.265 format. For more
 *                     information, see <a href="https://www.iso.org/standard/55980.html">MPEG-4
 *                         specification ISO/IEC 14496-15</a>. For information about adapting
 *                     stream data to a given format, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/producer-reference-nal.html">NAL Adaptation Flags</a>.</p>
 *             </li>
 *             <li>
 *                 <p>The audio track (if present) of each fragment must contain codec private data
 *                     in the AAC format (<a href="https://www.iso.org/standard/43345.html">AAC
 *                         specification ISO/IEC 13818-7</a>) or the <a href="http://www-mmsp.ece.mcgill.ca/Documents/AudioFormats/WAVE/WAVE.html">MS
 *                         Wave format</a>.</p>
 *             </li>
 *          </ul>
 *
 *         <p>You can monitor the amount of outgoing data by monitoring the
 *                 <code>GetClip.OutgoingBytes</code> Amazon CloudWatch metric. For information about
 *             using CloudWatch to monitor Kinesis Video Streams, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/monitoring.html">Monitoring Kinesis Video Streams</a>. For pricing information, see <a href="https://aws.amazon.com/kinesis/video-streams/pricing/">Amazon Kinesis Video
 *                 Streams Pricing</a> and <a href="https://aws.amazon.com/pricing/">AWS
 *                 Pricing</a>. Charges for outgoing AWS data apply.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoArchivedMediaClient, GetClipCommand } from "@aws-sdk/client-kinesis-video-archived-media"; // ES Modules import
 * // const { KinesisVideoArchivedMediaClient, GetClipCommand } = require("@aws-sdk/client-kinesis-video-archived-media"); // CommonJS import
 * const client = new KinesisVideoArchivedMediaClient(config);
 * const command = new GetClipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetClipCommandInput} for command's `input` shape.
 * @see {@link GetClipCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoArchivedMediaClientResolvedConfig | config} for KinesisVideoArchivedMediaClient's `config` shape.
 *
 */
export class GetClipCommand extends $Command<
  GetClipCommandInput,
  GetClipCommandOutput,
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

  constructor(readonly input: GetClipCommandInput) {
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
  ): Handler<GetClipCommandInput, GetClipCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetClipCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoArchivedMediaClient";
    const commandName = "GetClipCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetClipInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetClipOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetClipCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetClipCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __SdkStreamSerdeContext
  ): Promise<GetClipCommandOutput> {
    return deserializeAws_restJson1GetClipCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
