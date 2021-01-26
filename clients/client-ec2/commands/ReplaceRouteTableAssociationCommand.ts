import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ReplaceRouteTableAssociationRequest, ReplaceRouteTableAssociationResult } from "../models/models_4";
import {
  deserializeAws_ec2ReplaceRouteTableAssociationCommand,
  serializeAws_ec2ReplaceRouteTableAssociationCommand,
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

export type ReplaceRouteTableAssociationCommandInput = ReplaceRouteTableAssociationRequest;
export type ReplaceRouteTableAssociationCommandOutput = ReplaceRouteTableAssociationResult & __MetadataBearer;

/**
 * <p>Changes the route table associated with a given subnet, internet gateway, or virtual private gateway in a VPC. After the operation
 *       completes, the subnet or gateway uses the routes in the new route table. For more
 *       information about route tables, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route
 *         Tables</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 *          <p>You can also use this operation to change which table is the main route table in the VPC. Specify the main route table's association ID and the route table ID of the new main route table.</p>
 */
export class ReplaceRouteTableAssociationCommand extends $Command<
  ReplaceRouteTableAssociationCommandInput,
  ReplaceRouteTableAssociationCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ReplaceRouteTableAssociationCommandInput) {
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
  ): Handler<ReplaceRouteTableAssociationCommandInput, ReplaceRouteTableAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ReplaceRouteTableAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ReplaceRouteTableAssociationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ReplaceRouteTableAssociationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ReplaceRouteTableAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ReplaceRouteTableAssociationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ReplaceRouteTableAssociationCommandOutput> {
    return deserializeAws_ec2ReplaceRouteTableAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
