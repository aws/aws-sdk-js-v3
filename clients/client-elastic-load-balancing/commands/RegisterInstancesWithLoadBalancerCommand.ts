import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { RegisterEndPointsInput, RegisterEndPointsOutput } from "../models/models_0";
import {
  deserializeAws_queryRegisterInstancesWithLoadBalancerCommand,
  serializeAws_queryRegisterInstancesWithLoadBalancerCommand,
} from "../protocols/Aws_query";
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

export type RegisterInstancesWithLoadBalancerCommandInput = RegisterEndPointsInput;
export type RegisterInstancesWithLoadBalancerCommandOutput = RegisterEndPointsOutput & __MetadataBearer;

/**
 * <p>Adds the specified instances to the specified load balancer.</p>
 *
 *         <p>The instance must be a running instance in the same network as the load balancer (EC2-Classic or the same VPC). If you have EC2-Classic instances and a load balancer in a VPC with ClassicLink enabled, you can link the EC2-Classic instances to that VPC and then register the linked EC2-Classic instances with the load balancer in the VPC.</p>
 *
 *         <p>Note that <code>RegisterInstanceWithLoadBalancer</code> completes when the request has been registered.
 *          Instance registration takes a little time to complete. To check the state of the registered instances, use
 *          <a>DescribeLoadBalancers</a> or <a>DescribeInstanceHealth</a>.</p>
 *
 *         <p>After the instance is registered, it starts receiving traffic
 *          and requests from the load balancer. Any instance that is not
 *          in one of the Availability Zones registered for the load balancer
 *          is moved to the <code>OutOfService</code> state. If an Availability Zone
 *          is added to the load balancer later, any instances registered with the
 *          load balancer move to the <code>InService</code> state.</p>
 *
 *         <p>To deregister instances from a load balancer, use <a>DeregisterInstancesFromLoadBalancer</a>.</p>
 *
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-deregister-register-instances.html">Register or De-Register EC2 Instances</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 */
export class RegisterInstancesWithLoadBalancerCommand extends $Command<
  RegisterInstancesWithLoadBalancerCommandInput,
  RegisterInstancesWithLoadBalancerCommandOutput,
  ElasticLoadBalancingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterInstancesWithLoadBalancerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterInstancesWithLoadBalancerCommandInput, RegisterInstancesWithLoadBalancerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "RegisterInstancesWithLoadBalancerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterEndPointsInput.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterEndPointsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RegisterInstancesWithLoadBalancerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryRegisterInstancesWithLoadBalancerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RegisterInstancesWithLoadBalancerCommandOutput> {
    return deserializeAws_queryRegisterInstancesWithLoadBalancerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
