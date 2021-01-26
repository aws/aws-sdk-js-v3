import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateVpcEndpointRequest, CreateVpcEndpointResult } from "../models/models_1";
import {
  deserializeAws_ec2CreateVpcEndpointCommand,
  serializeAws_ec2CreateVpcEndpointCommand,
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

export type CreateVpcEndpointCommandInput = CreateVpcEndpointRequest;
export type CreateVpcEndpointCommandOutput = CreateVpcEndpointResult & __MetadataBearer;

/**
 * <p>Creates a VPC endpoint for a specified service. An endpoint enables you to create a
 *             private connection between your VPC and the service. The service may be provided by AWS,
 *             an AWS Marketplace Partner, or another AWS account. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html">VPC Endpoints</a> in
 *             the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 *         <p>A <code>gateway</code> endpoint serves as a target for a route in your route table for
 *             traffic destined for the AWS service. You can specify an endpoint policy to attach to
 *             the endpoint, which will control access to the service from your VPC. You can also
 *             specify the VPC route tables that use the endpoint.</p>
 *         <p>An <code>interface</code> endpoint is a network interface in your subnet that
 *             serves as an endpoint for communicating with the specified service. You can specify the
 *             subnets in which to create an endpoint, and the security groups to associate with the
 *             endpoint network interface.</p>
 *         <p>A <code>GatewayLoadBalancer</code> endpoint is a network interface in your subnet that serves an endpoint for communicating with a Gateway Load Balancer that you've configured as a VPC endpoint service.</p>
 *         <p>Use <a>DescribeVpcEndpointServices</a> to get a list of supported
 *             services.</p>
 */
export class CreateVpcEndpointCommand extends $Command<
  CreateVpcEndpointCommandInput,
  CreateVpcEndpointCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateVpcEndpointCommandInput) {
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
  ): Handler<CreateVpcEndpointCommandInput, CreateVpcEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateVpcEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVpcEndpointRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVpcEndpointResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVpcEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateVpcEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVpcEndpointCommandOutput> {
    return deserializeAws_ec2CreateVpcEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
