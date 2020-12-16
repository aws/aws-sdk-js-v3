import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { ModifyLoadBalancerAttributesInput, ModifyLoadBalancerAttributesOutput } from "../models/models_0";
import {
  deserializeAws_queryModifyLoadBalancerAttributesCommand,
  serializeAws_queryModifyLoadBalancerAttributesCommand,
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

export type ModifyLoadBalancerAttributesCommandInput = ModifyLoadBalancerAttributesInput;
export type ModifyLoadBalancerAttributesCommandOutput = ModifyLoadBalancerAttributesOutput & __MetadataBearer;

/**
 * <p>Modifies the attributes of the specified load balancer.</p>
 *         <p>You can modify the load balancer attributes, such as <code>AccessLogs</code>, <code>ConnectionDraining</code>, and
 *             <code>CrossZoneLoadBalancing</code> by either enabling or disabling them. Or, you can modify the load balancer attribute
 *             <code>ConnectionSettings</code> by specifying an idle connection timeout value for your load balancer.</p>
 *         <p>For more information, see the following in the <i>Classic Load Balancers Guide</i>:</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html">Cross-Zone Load Balancing</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-conn-drain.html">Connection Draining</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/access-log-collection.html">Access Logs</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-idle-timeout.html">Idle Connection Timeout</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class ModifyLoadBalancerAttributesCommand extends $Command<
  ModifyLoadBalancerAttributesCommandInput,
  ModifyLoadBalancerAttributesCommandOutput,
  ElasticLoadBalancingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyLoadBalancerAttributesCommandInput) {
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
  ): Handler<ModifyLoadBalancerAttributesCommandInput, ModifyLoadBalancerAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "ModifyLoadBalancerAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyLoadBalancerAttributesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyLoadBalancerAttributesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyLoadBalancerAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyLoadBalancerAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyLoadBalancerAttributesCommandOutput> {
    return deserializeAws_queryModifyLoadBalancerAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
