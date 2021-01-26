import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteVpcEndpointsRequest, DeleteVpcEndpointsResult } from "../models/models_2";
import {
  deserializeAws_ec2DeleteVpcEndpointsCommand,
  serializeAws_ec2DeleteVpcEndpointsCommand,
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

export type DeleteVpcEndpointsCommandInput = DeleteVpcEndpointsRequest;
export type DeleteVpcEndpointsCommandOutput = DeleteVpcEndpointsResult & __MetadataBearer;

/**
 * <p>Deletes one or more specified VPC endpoints. Deleting a gateway endpoint also deletes
 *             the endpoint routes in the route tables that were associated with the endpoint. Deleting
 *             an interface endpoint or a Gateway Load Balancer endpoint deletes the endpoint network interfaces. Gateway Load Balancer endpoints can only be deleted if the routes that are associated with the endpoint are deleted.</p>
 */
export class DeleteVpcEndpointsCommand extends $Command<
  DeleteVpcEndpointsCommandInput,
  DeleteVpcEndpointsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteVpcEndpointsCommandInput) {
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
  ): Handler<DeleteVpcEndpointsCommandInput, DeleteVpcEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteVpcEndpointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteVpcEndpointsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteVpcEndpointsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteVpcEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteVpcEndpointsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteVpcEndpointsCommandOutput> {
    return deserializeAws_ec2DeleteVpcEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
