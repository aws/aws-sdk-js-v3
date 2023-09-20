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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { DeregisterEndPointsInput, DeregisterEndPointsOutput } from "../models/models_0";
import {
  de_DeregisterInstancesFromLoadBalancerCommand,
  se_DeregisterInstancesFromLoadBalancerCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeregisterInstancesFromLoadBalancerCommand}.
 */
export interface DeregisterInstancesFromLoadBalancerCommandInput extends DeregisterEndPointsInput {}
/**
 * @public
 *
 * The output of {@link DeregisterInstancesFromLoadBalancerCommand}.
 */
export interface DeregisterInstancesFromLoadBalancerCommandOutput extends DeregisterEndPointsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Deregisters the specified instances from the specified load balancer. After the instance is deregistered, it no longer receives traffic from the load balancer.</p>
 *
 *         <p>You can use <a>DescribeLoadBalancers</a> to verify that the instance is deregistered from the load balancer.</p>
 *
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-deregister-register-instances.html">Register or De-Register EC2 Instances</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DeregisterInstancesFromLoadBalancerCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DeregisterInstancesFromLoadBalancerCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // DeregisterEndPointsInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   Instances: [ // Instances // required
 *     { // Instance
 *       InstanceId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new DeregisterInstancesFromLoadBalancerCommand(input);
 * const response = await client.send(command);
 * // { // DeregisterEndPointsOutput
 * //   Instances: [ // Instances
 * //     { // Instance
 * //       InstanceId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeregisterInstancesFromLoadBalancerCommandInput - {@link DeregisterInstancesFromLoadBalancerCommandInput}
 * @returns {@link DeregisterInstancesFromLoadBalancerCommandOutput}
 * @see {@link DeregisterInstancesFromLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link DeregisterInstancesFromLoadBalancerCommandOutput} for command's `response` shape.
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
 * @example To deregister instances from a load balancer
 * ```javascript
 * // This example deregisters the specified instance from the specified load balancer.
 * const input = {
 *   "Instances": [
 *     {
 *       "InstanceId": "i-d6f6fae3"
 *     }
 *   ],
 *   "LoadBalancerName": "my-load-balancer"
 * };
 * const command = new DeregisterInstancesFromLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Instances": [
 *     {
 *       "InstanceId": "i-207d9717"
 *     },
 *     {
 *       "InstanceId": "i-afefb49b"
 *     }
 *   ]
 * }
 * *\/
 * // example id: elb-deregister-instances-from-load-balancer-1
 * ```
 *
 */
export class DeregisterInstancesFromLoadBalancerCommand extends $Command<
  DeregisterInstancesFromLoadBalancerCommandInput,
  DeregisterInstancesFromLoadBalancerCommandOutput,
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
  constructor(readonly input: DeregisterInstancesFromLoadBalancerCommandInput) {
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
  ): Handler<DeregisterInstancesFromLoadBalancerCommandInput, DeregisterInstancesFromLoadBalancerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeregisterInstancesFromLoadBalancerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "DeregisterInstancesFromLoadBalancerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticLoadBalancing_v7",
        operation: "DeregisterInstancesFromLoadBalancer",
      },
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
    input: DeregisterInstancesFromLoadBalancerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeregisterInstancesFromLoadBalancerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeregisterInstancesFromLoadBalancerCommandOutput> {
    return de_DeregisterInstancesFromLoadBalancerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
