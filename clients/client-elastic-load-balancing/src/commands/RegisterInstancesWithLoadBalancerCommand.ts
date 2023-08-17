// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { RegisterEndPointsInput, RegisterEndPointsOutput } from "../models/models_0";
import {
  de_RegisterInstancesWithLoadBalancerCommand,
  se_RegisterInstancesWithLoadBalancerCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RegisterInstancesWithLoadBalancerCommand}.
 */
export interface RegisterInstancesWithLoadBalancerCommandInput extends RegisterEndPointsInput {}
/**
 * @public
 *
 * The output of {@link RegisterInstancesWithLoadBalancerCommand}.
 */
export interface RegisterInstancesWithLoadBalancerCommandOutput extends RegisterEndPointsOutput, __MetadataBearer {}

/**
 * @public
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, RegisterInstancesWithLoadBalancerCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, RegisterInstancesWithLoadBalancerCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // RegisterEndPointsInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   Instances: [ // Instances // required
 *     { // Instance
 *       InstanceId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new RegisterInstancesWithLoadBalancerCommand(input);
 * const response = await client.send(command);
 * // { // RegisterEndPointsOutput
 * //   Instances: [ // Instances
 * //     { // Instance
 * //       InstanceId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param RegisterInstancesWithLoadBalancerCommandInput - {@link RegisterInstancesWithLoadBalancerCommandInput}
 * @returns {@link RegisterInstancesWithLoadBalancerCommandOutput}
 * @see {@link RegisterInstancesWithLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link RegisterInstancesWithLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link InvalidEndPointException} (client fault)
 *  <p>The specified endpoint is not valid.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 * @example To register instances with a load balancer
 * ```javascript
 * // This example registers the specified instance with the specified load balancer.
 * const input = {
 *   "Instances": [
 *     {
 *       "InstanceId": "i-d6f6fae3"
 *     }
 *   ],
 *   "LoadBalancerName": "my-load-balancer"
 * };
 * const command = new RegisterInstancesWithLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Instances": [
 *     {
 *       "InstanceId": "i-d6f6fae3"
 *     },
 *     {
 *       "InstanceId": "i-207d9717"
 *     },
 *     {
 *       "InstanceId": "i-afefb49b"
 *     }
 *   ]
 * }
 * *\/
 * // example id: elb-register-instances-with-load-balancer-1
 * ```
 *
 */
export class RegisterInstancesWithLoadBalancerCommand extends $Command<
  RegisterInstancesWithLoadBalancerCommandInput,
  RegisterInstancesWithLoadBalancerCommandOutput,
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

  /**
   * @public
   */
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterInstancesWithLoadBalancerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "RegisterInstancesWithLoadBalancerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: RegisterInstancesWithLoadBalancerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_RegisterInstancesWithLoadBalancerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RegisterInstancesWithLoadBalancerCommandOutput> {
    return de_RegisterInstancesWithLoadBalancerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
