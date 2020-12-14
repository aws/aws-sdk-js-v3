import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { TransferDomainRequest, TransferDomainResponse } from "../models/models_0";
import {
  deserializeAws_json1_1TransferDomainCommand,
  serializeAws_json1_1TransferDomainCommand,
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

export type TransferDomainCommandInput = TransferDomainRequest;
export type TransferDomainCommandOutput = TransferDomainResponse & __MetadataBearer;

/**
 * <p>Transfers a domain from another registrar to Amazon Route 53. When the transfer is complete, the domain is registered either with
 * 			Amazon Registrar (for .com, .net, and .org domains) or with our registrar associate, Gandi (for all other TLDs).</p>
 * 		       <p>For more information about transferring domains, see the following topics:</p>
 * 		       <ul>
 *             <li>
 *                <p>For transfer requirements, a detailed procedure, and information about viewing the status of a domain that you're transferring
 * 				to Route 53, see
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-to-route-53.html">Transferring Registration for a
 * 				Domain to Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>For information about how to transfer a domain from one AWS account to another, see
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>.
 * 				</p>
 * 			         </li>
 *             <li>
 *                <p>For information about how to transfer a domain to another domain registrar, see
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-from-route-53.html">Transferring a Domain from
 * 				Amazon Route 53 to Another Registrar</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
 *             </li>
 *          </ul>
 * 		       <p>If the registrar for your domain is also the DNS service provider for the domain, we highly recommend that you
 * 			transfer your DNS service to Route 53 or to another DNS service provider before you transfer your registration. Some registrars
 * 			provide free DNS service when you purchase a domain registration. When you transfer the registration, the previous registrar
 * 			will not renew your domain registration and could end your DNS service at any time.</p>
 *
 * 			      <important>
 * 				        <p>If the registrar for your domain is also the DNS service provider for the domain and you don't
 * 					transfer DNS service to another provider, your website, email, and the web applications associated with the domain
 * 					might become unavailable.</p>
 * 			      </important>
 *
 * 		       <p>If the transfer is successful, this method returns an operation ID that you can use to track the progress and
 * 			completion of the action. If the transfer doesn't complete successfully, the domain registrant will be notified by email.</p>
 */
export class TransferDomainCommand extends $Command<
  TransferDomainCommandInput,
  TransferDomainCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TransferDomainCommandInput) {
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
  ): Handler<TransferDomainCommandInput, TransferDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "TransferDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TransferDomainRequest.filterSensitiveLog,
      outputFilterSensitiveLog: TransferDomainResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TransferDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1TransferDomainCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TransferDomainCommandOutput> {
    return deserializeAws_json1_1TransferDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
