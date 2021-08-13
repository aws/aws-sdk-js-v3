import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { DeleteHostedZoneRequest, DeleteHostedZoneResponse } from "../models/models_0";
import {
  deserializeAws_restXmlDeleteHostedZoneCommand,
  serializeAws_restXmlDeleteHostedZoneCommand,
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

export interface DeleteHostedZoneCommandInput extends DeleteHostedZoneRequest {}
export interface DeleteHostedZoneCommandOutput extends DeleteHostedZoneResponse, __MetadataBearer {}

/**
 * <p>Deletes a hosted zone.</p>
 *
 * 		       <p>If the hosted zone was created by another service, such as Cloud Map, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DeleteHostedZone.html#delete-public-hosted-zone-created-by-another-service">Deleting
 * 			Public Hosted Zones That Were Created by Another Service</a> in the <i>Amazon Route 53 Developer Guide</i> for information about how to delete it.
 * 			(The process is the same for public and private hosted zones that were created by another service.)</p>
 *
 * 		       <p>If you want to keep your domain registration but you want to stop routing internet traffic to your website or web application,
 * 			we recommend that you delete resource record sets in the hosted zone instead of deleting the hosted zone.</p>
 *
 * 		       <important>
 * 			         <p>If you delete a hosted zone, you can't undelete it. You must create a new hosted zone and update the name servers for your
 * 				domain registration, which can require up to 48 hours to take effect. (If you delegated responsibility for a subdomain to a hosted zone
 * 				and you delete the child hosted zone, you must update the name servers in the parent hosted zone.) In addition, if you delete a hosted zone,
 * 				someone could hijack the domain and route traffic to their own resources using your domain name.</p>
 * 		       </important>
 *
 * 		       <p>If you want to avoid the monthly charge for the hosted zone, you can transfer DNS service for the domain to a free DNS service.
 * 			When you transfer DNS service, you have to update the name servers for the domain registration. If the domain is registered with Route 53,
 * 			see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateDomainNameservers.html">UpdateDomainNameservers</a>
 * 			for information about how to replace Route 53 name servers with name servers for the new DNS service. If the domain is registered with
 * 			another registrar, use the method provided by the registrar to update name servers for the domain registration. For more information,
 * 			perform an internet search on "free DNS service."</p>
 *
 * 		       <p>You can delete a hosted zone only if it contains only the default SOA record and NS resource record sets.
 * 			If the hosted zone contains other resource record sets, you must delete them before you can delete the hosted zone.
 * 			If you try to delete a hosted zone that contains other resource record sets, the request fails, and Route 53 returns a
 * 			<code>HostedZoneNotEmpty</code> error. For information about deleting records from your hosted zone, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html">ChangeResourceRecordSets</a>.</p>
 * 		       <p>To verify that the hosted zone has been deleted, do one of the following:</p>
 * 		       <ul>
 *             <li>
 *                <p>Use the <code>GetHostedZone</code> action to request information about the hosted zone.</p>
 *             </li>
 *             <li>
 *                <p>Use the <code>ListHostedZones</code> action to get a list of the hosted zones associated with the current
 * 				Amazon Web Services account.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteHostedZoneCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteHostedZoneCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new DeleteHostedZoneCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteHostedZoneCommandInput} for command's `input` shape.
 * @see {@link DeleteHostedZoneCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteHostedZoneCommand extends $Command<
  DeleteHostedZoneCommandInput,
  DeleteHostedZoneCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteHostedZoneCommandInput) {
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
  ): Handler<DeleteHostedZoneCommandInput, DeleteHostedZoneCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "DeleteHostedZoneCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteHostedZoneRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteHostedZoneResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteHostedZoneCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteHostedZoneCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteHostedZoneCommandOutput> {
    return deserializeAws_restXmlDeleteHostedZoneCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
