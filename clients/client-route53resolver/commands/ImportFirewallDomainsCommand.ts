import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { ImportFirewallDomainsRequest, ImportFirewallDomainsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ImportFirewallDomainsCommand,
  serializeAws_json1_1ImportFirewallDomainsCommand,
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

export type ImportFirewallDomainsCommandInput = ImportFirewallDomainsRequest;
export type ImportFirewallDomainsCommandOutput = ImportFirewallDomainsResponse & __MetadataBearer;

/**
 * <p>Imports domain names from a file into a domain list, for use in a DNS firewall rule group. </p>
 *          <p>Each domain specification in your domain list must satisfy the following
 * 	requirements: </p>
 *          <ul>
 *             <li>
 *       	        <p>It can optionally start with <code>*</code> (asterisk).</p>
 *       	     </li>
 *             <li>
 *       	        <p>With the exception of the optional starting asterisk, it must only contain
 *       	   the following characters: <code>A-Z</code>, <code>a-z</code>,
 *       	   <code>0-9</code>, <code>-</code> (hyphen).</p>
 *       	     </li>
 *             <li>
 *       	        <p>It must be from 1-255 characters in length. </p>
 *       	     </li>
 *          </ul>
 */
export class ImportFirewallDomainsCommand extends $Command<
  ImportFirewallDomainsCommandInput,
  ImportFirewallDomainsCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ImportFirewallDomainsCommandInput) {
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
  ): Handler<ImportFirewallDomainsCommandInput, ImportFirewallDomainsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "ImportFirewallDomainsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportFirewallDomainsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ImportFirewallDomainsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportFirewallDomainsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ImportFirewallDomainsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportFirewallDomainsCommandOutput> {
    return deserializeAws_json1_1ImportFirewallDomainsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
