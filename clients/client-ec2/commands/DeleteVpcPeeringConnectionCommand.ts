import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteVpcPeeringConnectionRequest, DeleteVpcPeeringConnectionResult } from "../models/models_2";
import {
  deserializeAws_ec2DeleteVpcPeeringConnectionCommand,
  serializeAws_ec2DeleteVpcPeeringConnectionCommand,
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

export type DeleteVpcPeeringConnectionCommandInput = DeleteVpcPeeringConnectionRequest;
export type DeleteVpcPeeringConnectionCommandOutput = DeleteVpcPeeringConnectionResult & __MetadataBearer;

/**
 * <p>Deletes a VPC peering connection. Either the owner of the requester VPC or the owner
 *             of the accepter VPC can delete the VPC peering connection if it's in the
 *                 <code>active</code> state. The owner of the requester VPC can delete a VPC peering
 *             connection in the <code>pending-acceptance</code> state. You cannot delete a VPC peering
 *             connection that's in the <code>failed</code> state.</p>
 */
export class DeleteVpcPeeringConnectionCommand extends $Command<
  DeleteVpcPeeringConnectionCommandInput,
  DeleteVpcPeeringConnectionCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteVpcPeeringConnectionCommandInput) {
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
  ): Handler<DeleteVpcPeeringConnectionCommandInput, DeleteVpcPeeringConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteVpcPeeringConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteVpcPeeringConnectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteVpcPeeringConnectionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteVpcPeeringConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteVpcPeeringConnectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteVpcPeeringConnectionCommandOutput> {
    return deserializeAws_ec2DeleteVpcPeeringConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
