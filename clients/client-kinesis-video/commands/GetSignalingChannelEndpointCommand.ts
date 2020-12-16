import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { GetSignalingChannelEndpointInput, GetSignalingChannelEndpointOutput } from "../models/models_0";
import {
  deserializeAws_restJson1GetSignalingChannelEndpointCommand,
  serializeAws_restJson1GetSignalingChannelEndpointCommand,
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

export type GetSignalingChannelEndpointCommandInput = GetSignalingChannelEndpointInput;
export type GetSignalingChannelEndpointCommandOutput = GetSignalingChannelEndpointOutput & __MetadataBearer;

/**
 * <p>Provides an endpoint for the specified signaling channel to send and receive messages.
 *             This API uses the <code>SingleMasterChannelEndpointConfiguration</code> input parameter,
 *             which consists of the <code>Protocols</code> and <code>Role</code> properties.</p>
 *         <p>
 *             <code>Protocols</code> is used to determine the communication mechanism. For example,
 *             if you specify <code>WSS</code> as the protocol, this API produces a secure websocket
 *             endpoint. If you specify <code>HTTPS</code> as the protocol, this API generates an HTTPS
 *             endpoint. </p>
 *         <p>
 *             <code>Role</code> determines the messaging permissions. A <code>MASTER</code> role
 *             results in this API generating an endpoint that a client can use to communicate with any
 *             of the viewers on the channel. A <code>VIEWER</code> role results in this API generating
 *             an endpoint that a client can use to communicate only with a
 *                 <code>MASTER</code>. </p>
 */
export class GetSignalingChannelEndpointCommand extends $Command<
  GetSignalingChannelEndpointCommandInput,
  GetSignalingChannelEndpointCommandOutput,
  KinesisVideoClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSignalingChannelEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSignalingChannelEndpointCommandInput, GetSignalingChannelEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "GetSignalingChannelEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSignalingChannelEndpointInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetSignalingChannelEndpointOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSignalingChannelEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSignalingChannelEndpointCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSignalingChannelEndpointCommandOutput> {
    return deserializeAws_restJson1GetSignalingChannelEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
