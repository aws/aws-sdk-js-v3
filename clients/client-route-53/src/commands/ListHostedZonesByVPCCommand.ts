// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
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
  ListHostedZonesByVPCRequest,
  ListHostedZonesByVPCRequestFilterSensitiveLog,
  ListHostedZonesByVPCResponse,
  ListHostedZonesByVPCResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlListHostedZonesByVPCCommand,
  serializeAws_restXmlListHostedZonesByVPCCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface ListHostedZonesByVPCCommandInput extends ListHostedZonesByVPCRequest {}
export interface ListHostedZonesByVPCCommandOutput extends ListHostedZonesByVPCResponse, __MetadataBearer {}

/**
 * <p>Lists all the private hosted zones that a specified VPC is associated with, regardless
 * 			of which Amazon Web Services account or Amazon Web Services service owns the hosted zones.
 * 			The <code>HostedZoneOwner</code> structure in the response contains one of the following
 * 			values:</p>
 *          <ul>
 *             <li>
 *                <p>An <code>OwningAccount</code> element, which contains the account number of
 * 					either the current Amazon Web Services account or another Amazon Web Services account. Some services, such as Cloud Map, create
 * 					hosted zones using the current account. </p>
 *             </li>
 *             <li>
 *                <p>An <code>OwningService</code> element, which identifies the Amazon Web Services
 * 					service that created and owns the hosted zone. For example, if a hosted zone was
 * 					created by Amazon Elastic File System (Amazon EFS), the value of
 * 						<code>Owner</code> is <code>efs.amazonaws.com</code>. </p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>When listing private hosted zones, the hosted zone and the Amazon VPC must
 * 				belong to the same partition where the hosted zones were created. A partition is a
 * 				group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to
 * 				one partition.</p>
 *             <p>The following are the supported partitions:</p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <code>aws</code> - Amazon Web Services Regions</p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>aws-cn</code> - China Regions</p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>aws-us-gov</code> - Amazon Web Services GovCloud (US) Region</p>
 *                </li>
 *             </ul>
 *             <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Access Management</a>
 * 				in the <i>Amazon Web Services General Reference</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListHostedZonesByVPCCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListHostedZonesByVPCCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListHostedZonesByVPCCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHostedZonesByVPCCommandInput} for command's `input` shape.
 * @see {@link ListHostedZonesByVPCCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class ListHostedZonesByVPCCommand extends $Command<
  ListHostedZonesByVPCCommandInput,
  ListHostedZonesByVPCCommandOutput,
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

  constructor(readonly input: ListHostedZonesByVPCCommandInput) {
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
  ): Handler<ListHostedZonesByVPCCommandInput, ListHostedZonesByVPCCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListHostedZonesByVPCCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ListHostedZonesByVPCCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListHostedZonesByVPCRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListHostedZonesByVPCResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListHostedZonesByVPCCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListHostedZonesByVPCCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListHostedZonesByVPCCommandOutput> {
    return deserializeAws_restXmlListHostedZonesByVPCCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
