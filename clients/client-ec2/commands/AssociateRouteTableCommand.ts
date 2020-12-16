import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AssociateRouteTableRequest, AssociateRouteTableResult } from "../models/models_0";
import {
  deserializeAws_ec2AssociateRouteTableCommand,
  serializeAws_ec2AssociateRouteTableCommand,
} from "../protocols/Aws_ec2";
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

export type AssociateRouteTableCommandInput = AssociateRouteTableRequest;
export type AssociateRouteTableCommandOutput = AssociateRouteTableResult & __MetadataBearer;

/**
 * <p>Associates a subnet in your VPC or an internet gateway or virtual private gateway
 *             attached to your VPC with a route table in your VPC. This association causes traffic
 *             from the subnet or gateway to be routed according to the routes in the route table. The
 *             action returns an association ID, which you need in order to disassociate the route
 *             table later. A route table can be associated with multiple subnets.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route Tables</a> in the
 *                 <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 */
export class AssociateRouteTableCommand extends $Command<
  AssociateRouteTableCommandInput,
  AssociateRouteTableCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateRouteTableCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateRouteTableCommandInput, AssociateRouteTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AssociateRouteTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateRouteTableRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateRouteTableResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateRouteTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AssociateRouteTableCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateRouteTableCommandOutput> {
    return deserializeAws_ec2AssociateRouteTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
