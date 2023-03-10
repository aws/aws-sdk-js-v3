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
  DetachLoadBalancerFromSubnetsInput,
  DetachLoadBalancerFromSubnetsInputFilterSensitiveLog,
  DetachLoadBalancerFromSubnetsOutput,
  DetachLoadBalancerFromSubnetsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDetachLoadBalancerFromSubnetsCommand,
  serializeAws_queryDetachLoadBalancerFromSubnetsCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link DetachLoadBalancerFromSubnetsCommand}.
 */
export interface DetachLoadBalancerFromSubnetsCommandInput extends DetachLoadBalancerFromSubnetsInput {}
/**
 * The output of {@link DetachLoadBalancerFromSubnetsCommand}.
 */
export interface DetachLoadBalancerFromSubnetsCommandOutput
  extends DetachLoadBalancerFromSubnetsOutput,
    __MetadataBearer {}

/**
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
 * const command = new DetachLoadBalancerFromSubnetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
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
      inputFilterSensitiveLog: DetachLoadBalancerFromSubnetsInputFilterSensitiveLog,
      outputFilterSensitiveLog: DetachLoadBalancerFromSubnetsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetachLoadBalancerFromSubnetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDetachLoadBalancerFromSubnetsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DetachLoadBalancerFromSubnetsCommandOutput> {
    return deserializeAws_queryDetachLoadBalancerFromSubnetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
