import {
  KinesisVideoSignalingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisVideoSignalingClient";
import { SendAlexaOfferToMasterRequest, SendAlexaOfferToMasterResponse } from "../models/models_0";
import {
  deserializeAws_restJson1SendAlexaOfferToMasterCommand,
  serializeAws_restJson1SendAlexaOfferToMasterCommand,
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

export type SendAlexaOfferToMasterCommandInput = SendAlexaOfferToMasterRequest;
export type SendAlexaOfferToMasterCommandOutput = SendAlexaOfferToMasterResponse & __MetadataBearer;

/**
 * <p>This API allows you to connect WebRTC-enabled devices with Alexa display devices. When
 *             invoked, it sends the Alexa Session Description Protocol (SDP) offer to the master peer.
 *             The offer is delivered as soon as the master is connected to the specified signaling
 *             channel. This API returns the SDP answer from the connected master. If the master is not
 *             connected to the signaling channel, redelivery requests are made until the message
 *             expires.</p>
 */
export class SendAlexaOfferToMasterCommand extends $Command<
  SendAlexaOfferToMasterCommandInput,
  SendAlexaOfferToMasterCommandOutput,
  KinesisVideoSignalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendAlexaOfferToMasterCommandInput) {
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
  ): Handler<SendAlexaOfferToMasterCommandInput, SendAlexaOfferToMasterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoSignalingClient";
    const commandName = "SendAlexaOfferToMasterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendAlexaOfferToMasterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendAlexaOfferToMasterResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendAlexaOfferToMasterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SendAlexaOfferToMasterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendAlexaOfferToMasterCommandOutput> {
    return deserializeAws_restJson1SendAlexaOfferToMasterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
