import {
  KinesisVideoSignalingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisVideoSignalingClient";
import { GetIceServerConfigRequest, GetIceServerConfigResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetIceServerConfigCommand,
  serializeAws_restJson1GetIceServerConfigCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetIceServerConfigCommandInput = GetIceServerConfigRequest;
export type GetIceServerConfigCommandOutput = GetIceServerConfigResponse & __MetadataBearer;

/**
 * <p>Gets the Interactive Connectivity Establishment (ICE) server configuration
 *             information, including URIs, username, and password which can be used to configure the
 *             WebRTC connection. The ICE component uses this configuration information to setup the
 *             WebRTC connection, including authenticating with the Traversal Using Relays around NAT
 *             (TURN) relay server. </p>
 *         <p>TURN is a protocol that is used to improve the connectivity of peer-to-peer
 *             applications. By providing a cloud-based relay service, TURN ensures that a connection
 *             can be established even when one or more peers are incapable of a direct peer-to-peer
 *             connection. For more information, see <a href="https://tools.ietf.org/html/draft-uberti-rtcweb-turn-rest-00">A REST API For
 *                 Access To TURN Services</a>.</p>
 *         <p> You can invoke this API to establish a fallback mechanism in case either of the peers
 *             is unable to establish a direct peer-to-peer connection over a signaling channel. You
 *             must specify either a signaling channel ARN or the client ID in order to invoke this
 *             API.</p>
 */
export class GetIceServerConfigCommand extends $Command<
  GetIceServerConfigCommandInput,
  GetIceServerConfigCommandOutput,
  KinesisVideoSignalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetIceServerConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoSignalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetIceServerConfigCommandInput, GetIceServerConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoSignalingClient";
    const commandName = "GetIceServerConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetIceServerConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetIceServerConfigResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetIceServerConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetIceServerConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetIceServerConfigCommandOutput> {
    return deserializeAws_restJson1GetIceServerConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
