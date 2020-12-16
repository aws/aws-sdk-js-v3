import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { RenewDomainRequest, RenewDomainResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RenewDomainCommand,
  serializeAws_json1_1RenewDomainCommand,
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

export type RenewDomainCommandInput = RenewDomainRequest;
export type RenewDomainCommandOutput = RenewDomainResponse & __MetadataBearer;

/**
 * <p>This operation renews a domain for the specified number of years. The cost of renewing your domain is billed to your AWS account.</p>
 * 		       <p>We recommend that you renew your domain several weeks before the expiration date. Some TLD registries delete domains before the
 * 			expiration date if you haven't renewed far enough in advance. For more information about renewing domain registration, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-renew.html">Renewing Registration for a Domain</a>
 * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
 */
export class RenewDomainCommand extends $Command<
  RenewDomainCommandInput,
  RenewDomainCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RenewDomainCommandInput) {
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
  ): Handler<RenewDomainCommandInput, RenewDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "RenewDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RenewDomainRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RenewDomainResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RenewDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RenewDomainCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RenewDomainCommandOutput> {
    return deserializeAws_json1_1RenewDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
