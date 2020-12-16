import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { RegisterDomainRequest, RegisterDomainResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RegisterDomainCommand,
  serializeAws_json1_1RegisterDomainCommand,
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

export type RegisterDomainCommandInput = RegisterDomainRequest;
export type RegisterDomainCommandOutput = RegisterDomainResponse & __MetadataBearer;

/**
 * <p>This operation registers a domain. Domains are registered either by Amazon Registrar (for .com, .net, and .org domains) or by
 * 			our registrar associate, Gandi (for all other domains). For some top-level domains (TLDs), this operation requires extra parameters.</p>
 * 		       <p>When you register a domain, Amazon Route 53 does the following:</p>
 * 			      <ul>
 *             <li>
 *                <p>Creates a Route 53 hosted zone that has the same name as the domain. Route 53 assigns four name servers
 * 					to your hosted zone and automatically updates your domain registration with the names of these name servers.</p>
 *             </li>
 *             <li>
 *                <p>Enables autorenew, so your domain registration will renew automatically each year. We'll notify you
 * 					in advance of the renewal date so you can choose whether to renew the registration.</p>
 *             </li>
 *             <li>
 *                <p>Optionally enables privacy protection, so WHOIS queries return contact information either for Amazon Registrar
 * 					(for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you don't enable privacy
 * 					protection, WHOIS queries return the information that you entered for the registrant, admin, and tech contacts.</p>
 *             </li>
 *             <li>
 *                <p>If registration is successful, returns an operation ID that you can use to track the progress and
 * 					completion of the action. If the request is not completed successfully, the domain registrant is notified by email.</p>
 *             </li>
 *             <li>
 *                <p>Charges your AWS account an amount based on the top-level domain. For more information, see
 * 					<a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
 *             </li>
 *          </ul>
 */
export class RegisterDomainCommand extends $Command<
  RegisterDomainCommandInput,
  RegisterDomainCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterDomainCommandInput) {
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
  ): Handler<RegisterDomainCommandInput, RegisterDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "RegisterDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterDomainRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterDomainResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterDomainCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterDomainCommandOutput> {
    return deserializeAws_json1_1RegisterDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
