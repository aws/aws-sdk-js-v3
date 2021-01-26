import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { UpdateDomainContactPrivacyRequest, UpdateDomainContactPrivacyResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateDomainContactPrivacyCommand,
  serializeAws_json1_1UpdateDomainContactPrivacyCommand,
} from "../protocols/Aws_json1_1";
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

export type UpdateDomainContactPrivacyCommandInput = UpdateDomainContactPrivacyRequest;
export type UpdateDomainContactPrivacyCommandOutput = UpdateDomainContactPrivacyResponse & __MetadataBearer;

/**
 * <p>This operation updates the specified domain contact's privacy setting. When privacy protection is enabled,
 * 			contact information such as email address is replaced either with contact information for Amazon Registrar (for .com, .net, and .org
 * 			domains) or with contact information for our registrar associate, Gandi.</p>
 * 		       <p>This operation affects only the contact information for the specified contact type (registrant, administrator, or tech).
 * 			If the request succeeds, Amazon Route 53 returns an operation ID that you can use with
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>
 * 			to track the progress and completion of the action. If the request doesn't complete successfully, the domain registrant will be notified by email.</p>
 * 		       <important>
 *             <p>By disabling the privacy service via API, you consent to the publication of the contact information provided for this domain
 * 			via the public WHOIS database. You certify that you are the registrant of this domain name and have the authority to make this decision.
 * 			You may withdraw your consent at any time by enabling privacy protection using either <code>UpdateDomainContactPrivacy</code> or the
 * 			Route 53 console. Enabling privacy protection removes the contact information provided for this domain from the WHOIS database.
 * 			For more information on our privacy practices, see
 * 			<a href="https://aws.amazon.com/privacy/">https://aws.amazon.com/privacy/</a>.</p>
 *          </important>
 */
export class UpdateDomainContactPrivacyCommand extends $Command<
  UpdateDomainContactPrivacyCommandInput,
  UpdateDomainContactPrivacyCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDomainContactPrivacyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53DomainsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDomainContactPrivacyCommandInput, UpdateDomainContactPrivacyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "UpdateDomainContactPrivacyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDomainContactPrivacyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDomainContactPrivacyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDomainContactPrivacyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDomainContactPrivacyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateDomainContactPrivacyCommandOutput> {
    return deserializeAws_json1_1UpdateDomainContactPrivacyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
