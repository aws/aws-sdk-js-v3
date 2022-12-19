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
import { JoinStorageSessionInput, JoinStorageSessionInputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1JoinStorageSessionCommand,
  serializeAws_restJson1JoinStorageSessionCommand,
} from "../protocols/Aws_restJson1";

export interface JoinStorageSessionCommandInput extends JoinStorageSessionInput {}
export interface JoinStorageSessionCommandOutput extends __MetadataBearer {}

/**
 * <p>
 *       Join the ongoing one way-video and/or multi-way audio WebRTC session as
 *       a video producing device for an input channel. If there’s no existing
 *       session for the channel, a new streaming session needs to be created, and the
 *       Amazon Resource Name (ARN) of the signaling channel must be provided.
 *     </p>
 *          <p>Currently for the <code>SINGLE_MASTER</code> type, a video producing
 *       device is able to ingest both audio and video media into a stream,
 *       while viewers can only ingest audio. Both a video producing device
 *       and viewers can join the session first, and wait for other participants.</p>
 *          <p>While participants are having peer to peer conversations through webRTC,
 *       the ingested media session will be stored into the Kinesis Video Stream.
 *       Multiple viewers are able to playback real-time media.</p>
 *          <p>Customers can also use existing Kinesis Video Streams features like
 *       <code>HLS</code> or <code>DASH</code> playback, Image generation, and more
 *       with ingested WebRTC media.</p>
 *          <note>
 *             <p>Assume that only one video producing device client
 *       can be associated with a session for the channel. If more than one
 *       client joins the session of a specific channel as a video producing device,
 *       the most recent client request takes precedence. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoWebRTCStorageClient, JoinStorageSessionCommand } from "@aws-sdk/client-kinesis-video-webrtc-storage"; // ES Modules import
 * // const { KinesisVideoWebRTCStorageClient, JoinStorageSessionCommand } = require("@aws-sdk/client-kinesis-video-webrtc-storage"); // CommonJS import
 * const client = new KinesisVideoWebRTCStorageClient(config);
 * const command = new JoinStorageSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link JoinStorageSessionCommandInput} for command's `input` shape.
 * @see {@link JoinStorageSessionCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoWebRTCStorageClientResolvedConfig | config} for KinesisVideoWebRTCStorageClient's `config` shape.
 *
 */
export class JoinStorageSessionCommand extends $Command<
  JoinStorageSessionCommandInput,
  JoinStorageSessionCommandOutput,
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

  constructor(readonly input: JoinStorageSessionCommandInput) {
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
  ): Handler<JoinStorageSessionCommandInput, JoinStorageSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, JoinStorageSessionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoWebRTCStorageClient";
    const commandName = "JoinStorageSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: JoinStorageSessionInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: JoinStorageSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1JoinStorageSessionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<JoinStorageSessionCommandOutput> {
    return deserializeAws_restJson1JoinStorageSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
