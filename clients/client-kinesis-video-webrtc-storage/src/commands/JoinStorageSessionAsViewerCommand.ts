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
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  KinesisVideoWebRTCStorageClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisVideoWebRTCStorageClient";
import { JoinStorageSessionAsViewerInput, JoinStorageSessionAsViewerInputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1JoinStorageSessionAsViewerCommand,
  serializeAws_restJson1JoinStorageSessionAsViewerCommand,
} from "../protocols/Aws_restJson1";

export interface JoinStorageSessionAsViewerCommandInput extends JoinStorageSessionAsViewerInput {}
export interface JoinStorageSessionAsViewerCommandOutput extends __MetadataBearer {}

/**
 * <p>
 *       Join the ongoing one way-video and/or multi-way audio WebRTC session as
 *       a viewer for an input channel. If there’s
 *       no existing session for the channel, create a new streaming session and provide
 *       the Amazon Resource Name (ARN) of the signaling channel (<code>channelArn</code>)
 *       and client id (<code>clientId</code>).
 *     </p>
 *          <p>Currently for <code>SINGLE_MASTER</code> type, a video producing device
 *       is able to ingest both audio and video media into a stream, while viewers
 *       can only ingest audio. Both a video producing device and viewers can join
 *       a session first and wait for other participants. While participants are having peer to peer conversations through webRTC,
 *       the ingested media session will be stored into the Kinesis Video Stream.
 *       Multiple viewers are able to playback real-time media.
 *     </p>
 *          <p>Customers can also use existing Kinesis Video Streams features like
 *       <code>HLS</code> or <code>DASH</code> playback, Image generation, and more
 *       with ingested WebRTC media. If there’s an existing session with the same
 *       <code>clientId</code> that's found in the join session request, the new request takes precedence.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoWebRTCStorageClient, JoinStorageSessionAsViewerCommand } from "@aws-sdk/client-kinesis-video-webrtc-storage"; // ES Modules import
 * // const { KinesisVideoWebRTCStorageClient, JoinStorageSessionAsViewerCommand } = require("@aws-sdk/client-kinesis-video-webrtc-storage"); // CommonJS import
 * const client = new KinesisVideoWebRTCStorageClient(config);
 * const command = new JoinStorageSessionAsViewerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link JoinStorageSessionAsViewerCommandInput} for command's `input` shape.
 * @see {@link JoinStorageSessionAsViewerCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoWebRTCStorageClientResolvedConfig | config} for KinesisVideoWebRTCStorageClient's `config` shape.
 *
 */
export class JoinStorageSessionAsViewerCommand extends $Command<
  JoinStorageSessionAsViewerCommandInput,
  JoinStorageSessionAsViewerCommandOutput,
  KinesisVideoWebRTCStorageClientResolvedConfig
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

  constructor(readonly input: JoinStorageSessionAsViewerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoWebRTCStorageClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<JoinStorageSessionAsViewerCommandInput, JoinStorageSessionAsViewerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, JoinStorageSessionAsViewerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoWebRTCStorageClient";
    const commandName = "JoinStorageSessionAsViewerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: JoinStorageSessionAsViewerInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: JoinStorageSessionAsViewerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1JoinStorageSessionAsViewerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<JoinStorageSessionAsViewerCommandOutput> {
    return deserializeAws_restJson1JoinStorageSessionAsViewerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
