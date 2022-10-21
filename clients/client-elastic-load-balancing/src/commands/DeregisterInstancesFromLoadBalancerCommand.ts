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
  DeregisterEndPointsInput,
  DeregisterEndPointsInputFilterSensitiveLog,
  DeregisterEndPointsOutput,
  DeregisterEndPointsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDeregisterInstancesFromLoadBalancerCommand,
  serializeAws_queryDeregisterInstancesFromLoadBalancerCommand,
} from "../protocols/Aws_query";

export interface DeregisterInstancesFromLoadBalancerCommandInput extends DeregisterEndPointsInput {}
export interface DeregisterInstancesFromLoadBalancerCommandOutput extends DeregisterEndPointsOutput, __MetadataBearer {}

/**
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
 * const command = new DeregisterInstancesFromLoadBalancerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterInstancesFromLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link DeregisterInstancesFromLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
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
      inputFilterSensitiveLog: DeregisterEndPointsInputFilterSensitiveLog,
      outputFilterSensitiveLog: DeregisterEndPointsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeregisterInstancesFromLoadBalancerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDeregisterInstancesFromLoadBalancerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeregisterInstancesFromLoadBalancerCommandOutput> {
    return deserializeAws_queryDeregisterInstancesFromLoadBalancerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
