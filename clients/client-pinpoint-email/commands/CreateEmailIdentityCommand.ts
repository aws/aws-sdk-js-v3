import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
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
 * <p>Verifies an email identity for use with Amazon Pinpoint. In Amazon Pinpoint, an identity is an email
 *             address or domain that you use when you send email. Before you can use an identity to
 *             send email with Amazon Pinpoint, you first have to verify it. By verifying an address, you
 *             demonstrate that you're the owner of the address, and that you've given Amazon Pinpoint permission
 *             to send email from the address.</p>
 *         <p>When you verify an email address, Amazon Pinpoint sends an email to the address. Your email
 *             address is verified as soon as you follow the link in the verification email.
 *
 *         </p>
 *         <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can
 *             convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your
 *             domain. Your domain is verified when Amazon Pinpoint detects these records in the DNS
 *             configuration for your domain. It usually takes around 72 hours to complete the domain
 *             verification process.</p>
 */
export class CreateEmailIdentityCommand extends $Command<
  CreateEmailIdentityCommandInput,
  CreateEmailIdentityCommandOutput,
  PinpointEmailClientResolvedConfig
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
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateEmailIdentityCommandInput, CreateEmailIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
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
