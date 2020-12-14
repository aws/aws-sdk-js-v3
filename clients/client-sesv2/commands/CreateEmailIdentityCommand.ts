import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { CreateEmailIdentityRequest, CreateEmailIdentityResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateEmailIdentityCommand,
  serializeAws_restJson1CreateEmailIdentityCommand,
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

export type CreateEmailIdentityCommandInput = CreateEmailIdentityRequest;
export type CreateEmailIdentityCommandOutput = CreateEmailIdentityResponse & __MetadataBearer;

/**
 * <p>Starts the process of verifying an email identity. An <i>identity</i> is
 *             an email address or domain that you use when you send email. Before you can use an
 *             identity to send email, you first have to verify it. By verifying an identity, you
 *             demonstrate that you're the owner of the identity, and that you've given Amazon SES API v2
 *             permission to send email from the identity.</p>
 *         <p>When you verify an email address, Amazon SES sends an email to the address. Your email
 *             address is verified as soon as you follow the link in the verification email.
 *
 *         </p>
 *         <p>When you verify a domain without specifying the <code>DkimSigningAttributes</code>
 *             object, this operation provides a set of DKIM tokens. You can convert these tokens into
 *             CNAME records, which you then add to the DNS configuration for your domain. Your domain
 *             is verified when Amazon SES detects these records in the DNS configuration for your domain.
 *             This verification method is known as <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p>
 *         <p>Alternatively, you can perform the verification process by providing your own
 *             public-private key pair. This verification method is known as Bring Your Own DKIM
 *             (BYODKIM). To use BYODKIM, your call to the <code>CreateEmailIdentity</code> operation
 *             has to include the <code>DkimSigningAttributes</code> object. When you specify this
 *             object, you provide a selector (a component of the DNS record name that identifies the
 *             public key that you want to use for DKIM authentication) and a private key.</p>
 */
export class CreateEmailIdentityCommand extends $Command<
  CreateEmailIdentityCommandInput,
  CreateEmailIdentityCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateEmailIdentityCommandInput) {
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
  ): Handler<CreateEmailIdentityCommandInput, CreateEmailIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "CreateEmailIdentityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEmailIdentityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateEmailIdentityResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateEmailIdentityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateEmailIdentityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEmailIdentityCommandOutput> {
    return deserializeAws_restJson1CreateEmailIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
