import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { EnableDomainAutoRenewRequest, EnableDomainAutoRenewResponse } from "../models/models_0";
import {
  deserializeAws_json1_1EnableDomainAutoRenewCommand,
  serializeAws_json1_1EnableDomainAutoRenewCommand,
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

export type EnableDomainAutoRenewCommandInput = EnableDomainAutoRenewRequest;
export type EnableDomainAutoRenewCommandOutput = EnableDomainAutoRenewResponse & __MetadataBearer;

/**
 * <p>This operation configures Amazon Route 53 to automatically renew the specified domain before the domain registration expires.
 * 			The cost of renewing your domain registration is billed to your AWS account.</p>
 * 		       <p>The period during which you can renew a domain name varies by TLD. For a list of TLDs and their renewal policies, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains That You Can Register with Amazon Route 53</a>
 * 			in the <i>Amazon Route 53 Developer Guide</i>. Route 53 requires that you renew before the end of the renewal period
 * 			so we can complete processing before the deadline.</p>
 */
export class EnableDomainAutoRenewCommand extends $Command<
  EnableDomainAutoRenewCommandInput,
  EnableDomainAutoRenewCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableDomainAutoRenewCommandInput) {
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
  ): Handler<EnableDomainAutoRenewCommandInput, EnableDomainAutoRenewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "EnableDomainAutoRenewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableDomainAutoRenewRequest.filterSensitiveLog,
      outputFilterSensitiveLog: EnableDomainAutoRenewResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableDomainAutoRenewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1EnableDomainAutoRenewCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableDomainAutoRenewCommandOutput> {
    return deserializeAws_json1_1EnableDomainAutoRenewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
