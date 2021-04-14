import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { CreateHostedZoneRequest, CreateHostedZoneResponse } from "../models/models_0";
import {
  deserializeAws_restXmlCreateHostedZoneCommand,
  serializeAws_restXmlCreateHostedZoneCommand,
} from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
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

export type CreateHostedZoneCommandInput = CreateHostedZoneRequest;
export type CreateHostedZoneCommandOutput = CreateHostedZoneResponse & __MetadataBearer;

/**
 * <p>Creates a new public or private hosted zone. You create records in a public hosted zone to define how you want to route traffic
 * 			on the internet for a domain, such as example.com, and its subdomains (apex.example.com, acme.example.com). You create records in a
 * 			private hosted zone to define how you want to route traffic for a domain and its subdomains within one or more
 * 			Amazon Virtual Private Clouds (Amazon VPCs). </p>
 * 		       <important>
 * 			         <p>You can't convert a public hosted zone to a private hosted zone or vice versa. Instead, you must create a new hosted zone
 * 				with the same name and create new resource record sets.</p>
 * 		       </important>
 * 		       <p>For more information about charges for hosted zones, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
 * 		       <p>Note the following:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>You can't create a hosted zone for a top-level domain (TLD) such as .com.</p>
 * 			         </li>
 *             <li>
 * 				           <p>For public hosted zones, Route 53 automatically creates a default SOA record and four NS records for the zone.
 * 					For more information about SOA and NS records, see
 * 					<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/SOA-NSrecords.html">NS and SOA Records that Route 53 Creates for a Hosted Zone</a> in the
 * 					<i>Amazon Route 53 Developer Guide</i>.</p>
 * 				           <p>If you want to use the same name servers for multiple public hosted zones, you can optionally associate a reusable delegation set
 * 					with the hosted zone. See the <code>DelegationSetId</code> element.</p>
 * 			         </li>
 *             <li>
 * 				           <p>If your domain is registered with a registrar other than Route 53, you must update the name servers with your registrar to make
 * 					Route 53 the DNS service for the domain. For more information, see
 * 					<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/MigratingDNS.html">Migrating DNS Service for an Existing Domain to Amazon Route 53</a> in the
 * 					<i>Amazon Route 53 Developer Guide</i>. </p>
 * 			         </li>
 *          </ul>
 * 		       <p>When you submit a <code>CreateHostedZone</code> request, the initial status of the hosted zone is <code>PENDING</code>.
 * 			For public hosted zones, this means that the NS and SOA records are not yet available on all Route 53 DNS servers. When the
 * 			NS and SOA records are available, the status of the zone changes to <code>INSYNC</code>.</p>
 */
export class CreateHostedZoneCommand extends $Command<
  CreateHostedZoneCommandInput,
  CreateHostedZoneCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateHostedZoneCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateHostedZoneCommandInput, CreateHostedZoneCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "CreateHostedZoneCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateHostedZoneRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateHostedZoneResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateHostedZoneCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateHostedZoneCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateHostedZoneCommandOutput> {
    return deserializeAws_restXmlCreateHostedZoneCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
