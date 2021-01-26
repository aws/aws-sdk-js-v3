import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import {
  PutEmailIdentityDkimSigningAttributesRequest,
  PutEmailIdentityDkimSigningAttributesResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutEmailIdentityDkimSigningAttributesCommand,
  serializeAws_restJson1PutEmailIdentityDkimSigningAttributesCommand,
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

export type PutEmailIdentityDkimSigningAttributesCommandInput = PutEmailIdentityDkimSigningAttributesRequest;
export type PutEmailIdentityDkimSigningAttributesCommandOutput = PutEmailIdentityDkimSigningAttributesResponse &
  __MetadataBearer;

/**
 * <p>Used to configure or change the DKIM authentication settings for an email domain
 *             identity. You can use this operation to do any of the following:</p>
 *         <ul>
 *             <li>
 *                 <p>Update the signing attributes for an identity that uses Bring Your Own DKIM
 *                     (BYODKIM).</p>
 *             </li>
 *             <li>
 *                 <p>Change from using no DKIM authentication to using Easy DKIM.</p>
 *             </li>
 *             <li>
 *                 <p>Change from using no DKIM authentication to using BYODKIM.</p>
 *             </li>
 *             <li>
 *                 <p>Change from using Easy DKIM to using BYODKIM.</p>
 *             </li>
 *             <li>
 *                 <p>Change from using BYODKIM to using Easy DKIM.</p>
 *             </li>
 *          </ul>
 */
export class PutEmailIdentityDkimSigningAttributesCommand extends $Command<
  PutEmailIdentityDkimSigningAttributesCommandInput,
  PutEmailIdentityDkimSigningAttributesCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutEmailIdentityDkimSigningAttributesCommandInput) {
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
  ): Handler<PutEmailIdentityDkimSigningAttributesCommandInput, PutEmailIdentityDkimSigningAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "PutEmailIdentityDkimSigningAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutEmailIdentityDkimSigningAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutEmailIdentityDkimSigningAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutEmailIdentityDkimSigningAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutEmailIdentityDkimSigningAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutEmailIdentityDkimSigningAttributesCommandOutput> {
    return deserializeAws_restJson1PutEmailIdentityDkimSigningAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
