// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getChangeResourceRecordSetsPlugin, getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  ChangeResourceRecordSetsRequest,
  ChangeResourceRecordSetsRequestFilterSensitiveLog,
  ChangeResourceRecordSetsResponse,
  ChangeResourceRecordSetsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlChangeResourceRecordSetsCommand,
  serializeAws_restXmlChangeResourceRecordSetsCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface ChangeResourceRecordSetsCommandInput extends ChangeResourceRecordSetsRequest {}
export interface ChangeResourceRecordSetsCommandOutput extends ChangeResourceRecordSetsResponse, __MetadataBearer {}

/**
 * <p>Creates, changes, or deletes a resource record set, which contains authoritative DNS
 * 			information for a specified domain name or subdomain name. For example, you can use
 * 				<code>ChangeResourceRecordSets</code> to create a resource record set that routes
 * 			traffic for test.example.com to a web server that has an IP address of
 * 			192.0.2.44.</p>
 *          <p>
 *             <b>Deleting Resource Record Sets</b>
 *          </p>
 *          <p>To delete a resource record set, you must specify all the same values that you
 * 			specified when you created it.</p>
 *          <p>
 *             <b>Change Batches and Transactional Changes</b>
 *          </p>
 *          <p>The request body must include a document with a
 * 				<code>ChangeResourceRecordSetsRequest</code> element. The request body contains a
 * 			list of change items, known as a change batch. Change batches are considered
 * 			transactional changes. Route 53 validates the changes in the request and then either
 * 			makes all or none of the changes in the change batch request. This ensures that DNS
 * 			routing isn't adversely affected by partial changes to the resource record sets in a
 * 			hosted zone. </p>
 *          <p>For example, suppose a change batch request contains two changes: it deletes the
 * 				<code>CNAME</code> resource record set for www.example.com and creates an alias
 * 			resource record set for www.example.com. If validation for both records succeeds, Route
 * 			53 deletes the first resource record set and creates the second resource record set in a
 * 			single operation. If validation for either the <code>DELETE</code> or the
 * 				<code>CREATE</code> action fails, then the request is canceled, and the original
 * 				<code>CNAME</code> record continues to exist.</p>
 *          <note>
 *             <p>If you try to delete the same resource record set more than once in a single
 * 				change batch, Route 53 returns an <code>InvalidChangeBatch</code> error.</p>
 *          </note>
 *          <p>
 *             <b>Traffic Flow</b>
 *          </p>
 *          <p>To create resource record sets for complex routing configurations, use either the
 * 			traffic flow visual editor in the Route 53 console or the API actions for traffic
 * 			policies and traffic policy instances. Save the configuration as a traffic policy, then
 * 			associate the traffic policy with one or more domain names (such as example.com) or
 * 			subdomain names (such as www.example.com), in the same hosted zone or in multiple hosted
 * 			zones. You can roll back the updates if the new configuration isn't performing as
 * 			expected. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/traffic-flow.html">Using Traffic Flow to Route
 * 				DNS Traffic</a> in the <i>Amazon Route 53 Developer
 * 			Guide</i>.</p>
 *          <p>
 *             <b>Create, Delete, and Upsert</b>
 *          </p>
 *          <p>Use <code>ChangeResourceRecordsSetsRequest</code> to perform the following
 * 			actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CREATE</code>: Creates a resource record set that has the specified
 * 					values.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DELETE</code>: Deletes an existing resource record set that has the
 * 					specified values.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UPSERT</code>: If a resource set exists Route 53 updates it with the
 * 					values in the request. </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Syntaxes for Creating, Updating, and Deleting Resource Record
 * 				Sets</b>
 *          </p>
 *          <p>The syntax for a request depends on the type of resource record set that you want to
 * 			create, delete, or update, such as weighted, alias, or failover. The XML elements in
 * 			your request must appear in the order listed in the syntax. </p>
 *          <p>For an example for each type of resource record set, see "Examples."</p>
 *          <p>Don't refer to the syntax in the "Parameter Syntax" section, which includes
 * 			all of the elements for every kind of resource record set that you can create, delete,
 * 			or update by using <code>ChangeResourceRecordSets</code>. </p>
 *          <p>
 *             <b>Change Propagation to Route 53 DNS Servers</b>
 *          </p>
 *          <p>When you submit a <code>ChangeResourceRecordSets</code> request, Route 53 propagates
 * 			your changes to all of the Route 53 authoritative DNS servers. While your changes are
 * 			propagating, <code>GetChange</code> returns a status of <code>PENDING</code>. When
 * 			propagation is complete, <code>GetChange</code> returns a status of <code>INSYNC</code>.
 * 			Changes generally propagate to all Route 53 name servers within 60 seconds. For more
 * 			information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetChange.html">GetChange</a>.</p>
 *          <p>
 *             <b>Limits on ChangeResourceRecordSets Requests</b>
 *          </p>
 *          <p>For information about the limits on a <code>ChangeResourceRecordSets</code> request,
 * 			see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ChangeResourceRecordSetsCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ChangeResourceRecordSetsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ChangeResourceRecordSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ChangeResourceRecordSetsCommandInput} for command's `input` shape.
 * @see {@link ChangeResourceRecordSetsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class ChangeResourceRecordSetsCommand extends $Command<
  ChangeResourceRecordSetsCommandInput,
  ChangeResourceRecordSetsCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: ChangeResourceRecordSetsCommandInput) {
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
  ): Handler<ChangeResourceRecordSetsCommandInput, ChangeResourceRecordSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ChangeResourceRecordSetsCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getChangeResourceRecordSetsPlugin(configuration));
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ChangeResourceRecordSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ChangeResourceRecordSetsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ChangeResourceRecordSetsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ChangeResourceRecordSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlChangeResourceRecordSetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ChangeResourceRecordSetsCommandOutput> {
    return deserializeAws_restXmlChangeResourceRecordSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
