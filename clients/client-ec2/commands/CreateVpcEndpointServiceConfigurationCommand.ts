import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  CreateVpcEndpointServiceConfigurationRequest,
  CreateVpcEndpointServiceConfigurationResult,
} from "../models/models_1";
import {
  deserializeAws_ec2CreateVpcEndpointServiceConfigurationCommand,
  serializeAws_ec2CreateVpcEndpointServiceConfigurationCommand,
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

export type CreateVpcEndpointServiceConfigurationCommandInput = CreateVpcEndpointServiceConfigurationRequest;
export type CreateVpcEndpointServiceConfigurationCommandOutput = CreateVpcEndpointServiceConfigurationResult &
  __MetadataBearer;

/**
 * <p>Creates a VPC endpoint service configuration to which service consumers (AWS accounts,
 *             IAM users, and IAM roles) can connect.</p>
 *         <p>To create an endpoint service configuration, you must first create one of the
 *             following for your service:</p>
 *         <ul>
 *             <li>
 *                 <p>A <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html">Network Load Balancer</a>. Service consumers connect to your service using an
 *                     interface endpoint.</p>
 *             </li>
 *             <li>
 *                 <p>A <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/introduction.html">Gateway Load Balancer</a>. Service consumers connect to your service using a
 *                     Gateway Load Balancer endpoint.</p>
 *             </li>
 *          </ul>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-service.html">VPC Endpoint Services</a> in the
 *                 <i>Amazon Virtual Private Cloud User Guide</i>. </p>
 *         <p>If you set the private DNS name, you must prove that you own the private DNS domain
 *             name. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-dns-validation.html">VPC Endpoint Service
 *                 Private DNS Name Verification</a> in the
 *             <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 */
export class CreateVpcEndpointServiceConfigurationCommand extends $Command<
  CreateVpcEndpointServiceConfigurationCommandInput,
  CreateVpcEndpointServiceConfigurationCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateVpcEndpointServiceConfigurationCommandInput) {
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
  ): Handler<CreateVpcEndpointServiceConfigurationCommandInput, CreateVpcEndpointServiceConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateVpcEndpointServiceConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVpcEndpointServiceConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVpcEndpointServiceConfigurationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateVpcEndpointServiceConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2CreateVpcEndpointServiceConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateVpcEndpointServiceConfigurationCommandOutput> {
    return deserializeAws_ec2CreateVpcEndpointServiceConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
