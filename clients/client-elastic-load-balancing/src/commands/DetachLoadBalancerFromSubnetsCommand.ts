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
import { DetachLoadBalancerFromSubnetsInput, DetachLoadBalancerFromSubnetsOutput } from "../models/models_0";
import {
  de_DetachLoadBalancerFromSubnetsCommand,
  se_DetachLoadBalancerFromSubnetsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DetachLoadBalancerFromSubnetsCommand}.
 */
export interface DetachLoadBalancerFromSubnetsCommandInput extends DetachLoadBalancerFromSubnetsInput {}
/**
 * @public
 *
 * The output of {@link DetachLoadBalancerFromSubnetsCommand}.
 */
export interface DetachLoadBalancerFromSubnetsCommandOutput
  extends DetachLoadBalancerFromSubnetsOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Removes the specified subnets from the set of configured subnets for the load balancer.</p>
 *         <p>After a subnet is removed, all EC2 instances registered with the load balancer
 *             in the removed subnet go into the <code>OutOfService</code> state. Then,
 *             the load balancer balances the traffic among the remaining routable subnets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DetachLoadBalancerFromSubnetsCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DetachLoadBalancerFromSubnetsCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // DetachLoadBalancerFromSubnetsInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   Subnets: [ // Subnets // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DetachLoadBalancerFromSubnetsCommand(input);
 * const response = await client.send(command);
 * // { // DetachLoadBalancerFromSubnetsOutput
 * //   Subnets: [ // Subnets
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DetachLoadBalancerFromSubnetsCommandInput - {@link DetachLoadBalancerFromSubnetsCommandInput}
 * @returns {@link DetachLoadBalancerFromSubnetsCommandOutput}
 * @see {@link DetachLoadBalancerFromSubnetsCommandInput} for command's `input` shape.
 * @see {@link DetachLoadBalancerFromSubnetsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration change is not valid.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 * @example To detach a load balancer from a subnet
 * ```javascript
 * // This example detaches the specified load balancer from the specified subnet.
 * const input = {
 *   "LoadBalancerName": "my-load-balancer",
 *   "Subnets": [
 *     "subnet-0ecac448"
 *   ]
 * };
 * const command = new DetachLoadBalancerFromSubnetsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Subnets": [
 *     "subnet-15aaab61"
 *   ]
 * }
 * *\/
 * // example id: elb-detach-load-balancer-from-subnets-1
 * ```
 *
 */
export class DetachLoadBalancerFromSubnetsCommand extends $Command<
  DetachLoadBalancerFromSubnetsCommandInput,
  DetachLoadBalancerFromSubnetsCommandOutput,
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
  constructor(readonly input: DetachLoadBalancerFromSubnetsCommandInput) {
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
  ): Handler<DetachLoadBalancerFromSubnetsCommandInput, DetachLoadBalancerFromSubnetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DetachLoadBalancerFromSubnetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "DetachLoadBalancerFromSubnetsCommand";
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
  private serialize(input: DetachLoadBalancerFromSubnetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DetachLoadBalancerFromSubnetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DetachLoadBalancerFromSubnetsCommandOutput> {
    return de_DetachLoadBalancerFromSubnetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
