import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { PublishInput, PublishResponse } from "../models/models_0";
import { deserializeAws_queryPublishCommand, serializeAws_queryPublishCommand } from "../protocols/Aws_query";
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

export type PublishCommandInput = PublishInput;
export type PublishCommandOutput = PublishResponse & __MetadataBearer;

/**
 * <p>Sends a message to an Amazon SNS topic, a text message (SMS message) directly to a phone
 *             number, or a message to a mobile platform endpoint (when you specify the
 *                 <code>TargetArn</code>).</p>
 *         <p>If you send a message to a topic, Amazon SNS delivers the message to each endpoint that is
 *             subscribed to the topic. The format of the message depends on the notification protocol
 *             for each subscribed endpoint.</p>
 *         <p>When a <code>messageId</code> is returned, the message has been saved and Amazon SNS
 *             will attempt to deliver it shortly.</p>
 *         <p>To use the <code>Publish</code> action for sending a message to a mobile endpoint,
 *             such as an app on a Kindle device or mobile phone, you must specify the EndpointArn for
 *             the TargetArn parameter. The EndpointArn is returned when making a call with the
 *                 <code>CreatePlatformEndpoint</code> action.
 *       </p>
 *         <p>For more information about formatting messages, see <a href="https://docs.aws.amazon.com/sns/latest/dg/mobile-push-send-custommessage.html">Send Custom
 *                 Platform-Specific Payloads in Messages to Mobile Devices</a>. </p>
 *         <important>
 *             <p>You can publish messages only to topics and endpoints in the same AWS Region.</p>
 *         </important>
 */
export class PublishCommand extends $Command<PublishCommandInput, PublishCommandOutput, SNSClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PublishCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PublishCommandInput, PublishCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "PublishCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PublishInput.filterSensitiveLog,
      outputFilterSensitiveLog: PublishResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PublishCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPublishCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PublishCommandOutput> {
    return deserializeAws_queryPublishCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
