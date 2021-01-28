import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import {
  PutEmailIdentityFeedbackAttributesRequest,
  PutEmailIdentityFeedbackAttributesResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand,
  serializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand,
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

export type PutEmailIdentityFeedbackAttributesCommandInput = PutEmailIdentityFeedbackAttributesRequest;
export type PutEmailIdentityFeedbackAttributesCommandOutput = PutEmailIdentityFeedbackAttributesResponse &
  __MetadataBearer;

/**
 * <p>Used to enable or disable feedback forwarding for an identity. This setting determines
 *             what happens when an identity is used to send an email that results in a bounce or
 *             complaint event.</p>
 *         <p>If the value is <code>true</code>, you receive email notifications when bounce or
 *             complaint events occur. These notifications are sent to the address that you specified
 *             in the <code>Return-Path</code> header of the original email.</p>
 *         <p>You're required to have a method of tracking bounces and complaints. If you haven't
 *             set up another mechanism for receiving bounce or complaint notifications (for example,
 *             by setting up an event destination), you receive an email notification when these events
 *             occur (even if this setting is disabled).</p>
 */
export class PutEmailIdentityFeedbackAttributesCommand extends $Command<
  PutEmailIdentityFeedbackAttributesCommandInput,
  PutEmailIdentityFeedbackAttributesCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutEmailIdentityFeedbackAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutEmailIdentityFeedbackAttributesCommandInput, PutEmailIdentityFeedbackAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "PutEmailIdentityFeedbackAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutEmailIdentityFeedbackAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutEmailIdentityFeedbackAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutEmailIdentityFeedbackAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutEmailIdentityFeedbackAttributesCommandOutput> {
    return deserializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
