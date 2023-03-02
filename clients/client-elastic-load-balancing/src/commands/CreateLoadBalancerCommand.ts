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
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import {
  CreateAccessPointInput,
  CreateAccessPointInputFilterSensitiveLog,
  CreateAccessPointOutput,
  CreateAccessPointOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateLoadBalancerCommand,
  serializeAws_queryCreateLoadBalancerCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link CreateLoadBalancerCommand}.
 */
export interface CreateLoadBalancerCommandInput extends CreateAccessPointInput {}
/**
 * The output of {@link CreateLoadBalancerCommand}.
 */
export interface CreateLoadBalancerCommandOutput extends CreateAccessPointOutput, __MetadataBearer {}

/**
 * <p>Creates a Classic Load Balancer.</p>
 *
 *         <p>You can add listeners, security groups, subnets, and tags when you create your load balancer,
 *             or you can add them later using <a>CreateLoadBalancerListeners</a>,
 *             <a>ApplySecurityGroupsToLoadBalancer</a>, <a>AttachLoadBalancerToSubnets</a>,
 *             and <a>AddTags</a>.</p>
 *         <p>To describe your current load balancers, see <a>DescribeLoadBalancers</a>.
 *             When you are finished with a load balancer, you can delete it using
 *             <a>DeleteLoadBalancer</a>.</p>
 *
 *         <p>You can create up to 20 load balancers per region per account.
 *             You can request an increase for the number of load balancers for your account.
 *             For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html">Limits for Your Classic Load Balancer</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, CreateLoadBalancerCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, CreateLoadBalancerCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new CreateLoadBalancerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link CreateLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @example To create an HTTP load balancer in a VPC
 * ```javascript
 * // This example creates a load balancer with an HTTP listener in a VPC.
 * const input = {
 *   "Listeners": [
 *     {
 *       "InstancePort": 80,
 *       "InstanceProtocol": "HTTP",
 *       "LoadBalancerPort": 80,
 *       "Protocol": "HTTP"
 *     }
 *   ],
 *   "LoadBalancerName": "my-load-balancer",
 *   "SecurityGroups": [
 *     "sg-a61988c3"
 *   ],
 *   "Subnets": [
 *     "subnet-15aaab61"
 *   ]
 * };
 * const command = new CreateLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DNSName": "my-load-balancer-1234567890.us-west-2.elb.amazonaws.com"
 * }
 * *\/
 * ```
 *
 * @example To create an HTTP load balancer in EC2-Classic
 * ```javascript
 * // This example creates a load balancer with an HTTP listener in EC2-Classic.
 * const input = {
 *   "AvailabilityZones": [
 *     "us-west-2a"
 *   ],
 *   "Listeners": [
 *     {
 *       "InstancePort": 80,
 *       "InstanceProtocol": "HTTP",
 *       "LoadBalancerPort": 80,
 *       "Protocol": "HTTP"
 *     }
 *   ],
 *   "LoadBalancerName": "my-load-balancer"
 * };
 * const command = new CreateLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DNSName": "my-load-balancer-123456789.us-west-2.elb.amazonaws.com"
 * }
 * *\/
 * ```
 *
 * @example To create an HTTPS load balancer in a VPC
 * ```javascript
 * // This example creates a load balancer with an HTTPS listener in a VPC.
 * const input = {
 *   "Listeners": [
 *     {
 *       "InstancePort": 80,
 *       "InstanceProtocol": "HTTP",
 *       "LoadBalancerPort": 80,
 *       "Protocol": "HTTP"
 *     },
 *     {
 *       "InstancePort": 80,
 *       "InstanceProtocol": "HTTP",
 *       "LoadBalancerPort": 443,
 *       "Protocol": "HTTPS",
 *       "SSLCertificateId": "arn:aws:iam::123456789012:server-certificate/my-server-cert"
 *     }
 *   ],
 *   "LoadBalancerName": "my-load-balancer",
 *   "SecurityGroups": [
 *     "sg-a61988c3"
 *   ],
 *   "Subnets": [
 *     "subnet-15aaab61"
 *   ]
 * };
 * const command = new CreateLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DNSName": "my-load-balancer-1234567890.us-west-2.elb.amazonaws.com"
 * }
 * *\/
 * ```
 *
 * @example To create an HTTPS load balancer in EC2-Classic
 * ```javascript
 * // This example creates a load balancer with an HTTPS listener in EC2-Classic.
 * const input = {
 *   "AvailabilityZones": [
 *     "us-west-2a"
 *   ],
 *   "Listeners": [
 *     {
 *       "InstancePort": 80,
 *       "InstanceProtocol": "HTTP",
 *       "LoadBalancerPort": 80,
 *       "Protocol": "HTTP"
 *     },
 *     {
 *       "InstancePort": 80,
 *       "InstanceProtocol": "HTTP",
 *       "LoadBalancerPort": 443,
 *       "Protocol": "HTTPS",
 *       "SSLCertificateId": "arn:aws:iam::123456789012:server-certificate/my-server-cert"
 *     }
 *   ],
 *   "LoadBalancerName": "my-load-balancer"
 * };
 * const command = new CreateLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DNSName": "my-load-balancer-123456789.us-west-2.elb.amazonaws.com"
 * }
 * *\/
 * ```
 *
 * @example To create an internal load balancer
 * ```javascript
 * // This example creates an internal load balancer with an HTTP listener in a VPC.
 * const input = {
 *   "Listeners": [
 *     {
 *       "InstancePort": 80,
 *       "InstanceProtocol": "HTTP",
 *       "LoadBalancerPort": 80,
 *       "Protocol": "HTTP"
 *     }
 *   ],
 *   "LoadBalancerName": "my-load-balancer",
 *   "Scheme": "internal",
 *   "SecurityGroups": [
 *     "sg-a61988c3"
 *   ],
 *   "Subnets": [
 *     "subnet-15aaab61"
 *   ]
 * };
 * const command = new CreateLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DNSName": "internal-my-load-balancer-123456789.us-west-2.elb.amazonaws.com"
 * }
 * *\/
 * ```
 *
 */
export class CreateLoadBalancerCommand extends $Command<
  CreateLoadBalancerCommandInput,
  CreateLoadBalancerCommandOutput,
  ElasticLoadBalancingClientResolvedConfig
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

  constructor(readonly input: CreateLoadBalancerCommandInput) {
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
  ): Handler<CreateLoadBalancerCommandInput, CreateLoadBalancerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLoadBalancerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "CreateLoadBalancerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAccessPointInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateAccessPointOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLoadBalancerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateLoadBalancerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLoadBalancerCommandOutput> {
    return deserializeAws_queryCreateLoadBalancerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
