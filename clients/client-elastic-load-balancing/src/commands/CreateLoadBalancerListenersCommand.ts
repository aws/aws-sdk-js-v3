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
  CreateLoadBalancerListenerInput,
  CreateLoadBalancerListenerInputFilterSensitiveLog,
  CreateLoadBalancerListenerOutput,
  CreateLoadBalancerListenerOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateLoadBalancerListenersCommand,
  serializeAws_queryCreateLoadBalancerListenersCommand,
} from "../protocols/Aws_query";

export interface CreateLoadBalancerListenersCommandInput extends CreateLoadBalancerListenerInput {}
export interface CreateLoadBalancerListenersCommandOutput extends CreateLoadBalancerListenerOutput, __MetadataBearer {}

/**
 * <p>Creates one or more listeners for the specified load balancer. If a listener with the specified port does not already exist, it is created; otherwise, the properties of the new listener must match the properties of the existing listener.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, CreateLoadBalancerListenersCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, CreateLoadBalancerListenersCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new CreateLoadBalancerListenersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLoadBalancerListenersCommandInput} for command's `input` shape.
 * @see {@link CreateLoadBalancerListenersCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 */
export class CreateLoadBalancerListenersCommand extends $Command<
  CreateLoadBalancerListenersCommandInput,
  CreateLoadBalancerListenersCommandOutput,
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

  constructor(readonly input: CreateLoadBalancerListenersCommandInput) {
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
  ): Handler<CreateLoadBalancerListenersCommandInput, CreateLoadBalancerListenersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLoadBalancerListenersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "CreateLoadBalancerListenersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLoadBalancerListenerInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateLoadBalancerListenerOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLoadBalancerListenersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateLoadBalancerListenersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateLoadBalancerListenersCommandOutput> {
    return deserializeAws_queryCreateLoadBalancerListenersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
