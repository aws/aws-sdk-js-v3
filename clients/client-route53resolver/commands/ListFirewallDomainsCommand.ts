import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { ListFirewallDomainsRequest, ListFirewallDomainsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListFirewallDomainsCommand,
  serializeAws_json1_1ListFirewallDomainsCommand,
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

export type ListFirewallDomainsCommandInput = ListFirewallDomainsRequest;
export type ListFirewallDomainsCommandOutput = ListFirewallDomainsResponse & __MetadataBearer;

/**
 * <p>Retrieves the domains that you have defined for the specified firewall domain list.  </p>
 *          <p>A single call might return only a partial list of the domains. For information, see <code>MaxResults</code>. </p>
 */
export class ListFirewallDomainsCommand extends $Command<
  ListFirewallDomainsCommandInput,
  ListFirewallDomainsCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFirewallDomainsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFirewallDomainsCommandInput, ListFirewallDomainsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "ListFirewallDomainsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFirewallDomainsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFirewallDomainsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFirewallDomainsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListFirewallDomainsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFirewallDomainsCommandOutput> {
    return deserializeAws_json1_1ListFirewallDomainsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
