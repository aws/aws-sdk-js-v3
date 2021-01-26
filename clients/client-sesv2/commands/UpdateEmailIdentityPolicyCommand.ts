import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { UpdateEmailIdentityPolicyRequest, UpdateEmailIdentityPolicyResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateEmailIdentityPolicyCommand,
  serializeAws_restJson1UpdateEmailIdentityPolicyCommand,
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

export type UpdateEmailIdentityPolicyCommandInput = UpdateEmailIdentityPolicyRequest;
export type UpdateEmailIdentityPolicyCommandOutput = UpdateEmailIdentityPolicyResponse & __MetadataBearer;

/**
 * <p>Updates the specified sending authorization policy for the given identity (an email
 *             address or a domain). This API returns successfully even if a policy with the specified
 *             name does not exist.</p>
 *         <note>
 *             <p>This API is for the identity owner only. If you have not verified the identity,
 *                 this API will return an error.</p>
 *         </note>
 *         <p>Sending authorization is a feature that enables an identity owner to authorize other
 *             senders to use its identities. For information about using sending authorization, see
 *             the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
 *                 Guide</a>.</p>
 *
 *         <p>You can execute this operation no more than once per second.</p>
 */
export class UpdateEmailIdentityPolicyCommand extends $Command<
  UpdateEmailIdentityPolicyCommandInput,
  UpdateEmailIdentityPolicyCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateEmailIdentityPolicyCommandInput) {
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
  ): Handler<UpdateEmailIdentityPolicyCommandInput, UpdateEmailIdentityPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "UpdateEmailIdentityPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateEmailIdentityPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateEmailIdentityPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateEmailIdentityPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateEmailIdentityPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateEmailIdentityPolicyCommandOutput> {
    return deserializeAws_restJson1UpdateEmailIdentityPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
