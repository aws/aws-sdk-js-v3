import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { DisassociateVPCFromHostedZoneRequest, DisassociateVPCFromHostedZoneResponse } from "../models/models_0";
import {
  deserializeAws_restXmlDisassociateVPCFromHostedZoneCommand,
  serializeAws_restXmlDisassociateVPCFromHostedZoneCommand,
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

export type DisassociateVPCFromHostedZoneCommandInput = DisassociateVPCFromHostedZoneRequest;
export type DisassociateVPCFromHostedZoneCommandOutput = DisassociateVPCFromHostedZoneResponse & __MetadataBearer;

/**
 * <p>Disassociates an Amazon Virtual Private Cloud (Amazon VPC) from an Amazon Route 53 private hosted zone. Note the following:</p>
 * 		       <ul>
 *             <li>
 *                <p>You can't disassociate the last Amazon VPC from a private hosted zone.</p>
 *             </li>
 *             <li>
 *                <p>You can't convert a private hosted zone into a public hosted zone.</p>
 *             </li>
 *             <li>
 *                <p>You can submit a <code>DisassociateVPCFromHostedZone</code> request using either the account
 * 				that created the hosted zone or the account that created the Amazon VPC.</p>
 *             </li>
 *             <li>
 *                <p>Some services, such as AWS Cloud Map and Amazon Elastic File System (Amazon EFS) automatically create hosted zones and associate
 * 				VPCs with the hosted zones. A service can create a hosted zone using your account or using its own account.
 * 				You can disassociate a VPC from a hosted zone only if the service created the hosted zone using your account.</p>
 * 				           <p>When you run <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZonesByVPC.html">DisassociateVPCFromHostedZone</a>,
 * 					if the hosted zone has a value for <code>OwningAccount</code>, you can use <code>DisassociateVPCFromHostedZone</code>.
 * 					If the hosted zone has a value for <code>OwningService</code>, you can't use <code>DisassociateVPCFromHostedZone</code>.</p>
 * 			         </li>
 *          </ul>
 */
export class DisassociateVPCFromHostedZoneCommand extends $Command<
  DisassociateVPCFromHostedZoneCommandInput,
  DisassociateVPCFromHostedZoneCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "DisassociateVPCFromHostedZoneCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateVPCFromHostedZoneRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateVPCFromHostedZoneResponse.filterSensitiveLog,
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
