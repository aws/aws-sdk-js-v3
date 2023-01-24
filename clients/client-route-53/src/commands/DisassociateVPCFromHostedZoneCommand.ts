// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
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
  DisassociateVPCFromHostedZoneRequest,
  DisassociateVPCFromHostedZoneRequestFilterSensitiveLog,
  DisassociateVPCFromHostedZoneResponse,
  DisassociateVPCFromHostedZoneResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlDisassociateVPCFromHostedZoneCommand,
  serializeAws_restXmlDisassociateVPCFromHostedZoneCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface DisassociateVPCFromHostedZoneCommandInput extends DisassociateVPCFromHostedZoneRequest {}
export interface DisassociateVPCFromHostedZoneCommandOutput
  extends DisassociateVPCFromHostedZoneResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates an Amazon Virtual Private Cloud (Amazon VPC) from an Amazon Route 53
 * 			private hosted zone. Note the following:</p>
 *          <ul>
 *             <li>
 *                <p>You can't disassociate the last Amazon VPC from a private hosted zone.</p>
 *             </li>
 *             <li>
 *                <p>You can't convert a private hosted zone into a public hosted zone.</p>
 *             </li>
 *             <li>
 *                <p>You can submit a <code>DisassociateVPCFromHostedZone</code> request using
 * 					either the account that created the hosted zone or the account that created the
 * 					Amazon VPC.</p>
 *             </li>
 *             <li>
 *                <p>Some services, such as Cloud Map and Amazon Elastic File System
 * 					(Amazon EFS) automatically create hosted zones and associate VPCs with the
 * 					hosted zones. A service can create a hosted zone using your account or using its
 * 					own account. You can disassociate a VPC from a hosted zone only if the service
 * 					created the hosted zone using your account.</p>
 *                <p>When you run <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZonesByVPC.html">DisassociateVPCFromHostedZone</a>, if the hosted zone has a value for
 * 						<code>OwningAccount</code>, you can use
 * 						<code>DisassociateVPCFromHostedZone</code>. If the hosted zone has a value
 * 					for <code>OwningService</code>, you can't use
 * 						<code>DisassociateVPCFromHostedZone</code>.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>When revoking access, the hosted zone and the Amazon VPC must belong to
 * 				the same partition. A partition is a group of Amazon Web Services Regions. Each
 * 					Amazon Web Services account is scoped to one partition.</p>
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
 * import { Route53Client, DisassociateVPCFromHostedZoneCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DisassociateVPCFromHostedZoneCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new DisassociateVPCFromHostedZoneCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateVPCFromHostedZoneCommandInput} for command's `input` shape.
 * @see {@link DisassociateVPCFromHostedZoneCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class DisassociateVPCFromHostedZoneCommand extends $Command<
  DisassociateVPCFromHostedZoneCommandInput,
  DisassociateVPCFromHostedZoneCommandOutput,
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

  constructor(readonly input: DisassociateVPCFromHostedZoneCommandInput) {
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
  ): Handler<DisassociateVPCFromHostedZoneCommandInput, DisassociateVPCFromHostedZoneCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateVPCFromHostedZoneCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "DisassociateVPCFromHostedZoneCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateVPCFromHostedZoneRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateVPCFromHostedZoneResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateVPCFromHostedZoneCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlDisassociateVPCFromHostedZoneCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateVPCFromHostedZoneCommandOutput> {
    return deserializeAws_restXmlDisassociateVPCFromHostedZoneCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
