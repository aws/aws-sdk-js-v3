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
  SetLoadBalancerPoliciesForBackendServerInput,
  SetLoadBalancerPoliciesForBackendServerInputFilterSensitiveLog,
  SetLoadBalancerPoliciesForBackendServerOutput,
  SetLoadBalancerPoliciesForBackendServerOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_querySetLoadBalancerPoliciesForBackendServerCommand,
  serializeAws_querySetLoadBalancerPoliciesForBackendServerCommand,
} from "../protocols/Aws_query";

export interface SetLoadBalancerPoliciesForBackendServerCommandInput
  extends SetLoadBalancerPoliciesForBackendServerInput {}
export interface SetLoadBalancerPoliciesForBackendServerCommandOutput
  extends SetLoadBalancerPoliciesForBackendServerOutput,
    __MetadataBearer {}

/**
 * <p>Replaces the set of policies associated with the specified port on which the EC2 instance is listening with a new set of policies.
 *             At this time, only the back-end server authentication policy type can be applied to the instance ports; this policy type is composed of multiple public key policies.</p>
 *         <p>Each time you use <code>SetLoadBalancerPoliciesForBackendServer</code> to enable the policies,
 *             use the <code>PolicyNames</code> parameter to list the policies that you want to enable.</p>
 *         <p>You can use <a>DescribeLoadBalancers</a> or <a>DescribeLoadBalancerPolicies</a> to verify that the policy
 *             is associated with the EC2 instance.</p>
 *
 *         <p>For more information about enabling back-end instance authentication, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-create-https-ssl-load-balancer.html#configure_backendauth_clt">Configure Back-end Instance Authentication</a>
 *             in the <i>Classic Load Balancers Guide</i>. For more information about Proxy Protocol, see
 *             <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-proxy-protocol.html">Configure Proxy Protocol Support</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, SetLoadBalancerPoliciesForBackendServerCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, SetLoadBalancerPoliciesForBackendServerCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new SetLoadBalancerPoliciesForBackendServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetLoadBalancerPoliciesForBackendServerCommandInput} for command's `input` shape.
 * @see {@link SetLoadBalancerPoliciesForBackendServerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 */
export class SetLoadBalancerPoliciesForBackendServerCommand extends $Command<
  SetLoadBalancerPoliciesForBackendServerCommandInput,
  SetLoadBalancerPoliciesForBackendServerCommandOutput,
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

  constructor(readonly input: SetLoadBalancerPoliciesForBackendServerCommandInput) {
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
  ): Handler<
    SetLoadBalancerPoliciesForBackendServerCommandInput,
    SetLoadBalancerPoliciesForBackendServerCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        SetLoadBalancerPoliciesForBackendServerCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "SetLoadBalancerPoliciesForBackendServerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetLoadBalancerPoliciesForBackendServerInputFilterSensitiveLog,
      outputFilterSensitiveLog: SetLoadBalancerPoliciesForBackendServerOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: SetLoadBalancerPoliciesForBackendServerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_querySetLoadBalancerPoliciesForBackendServerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SetLoadBalancerPoliciesForBackendServerCommandOutput> {
    return deserializeAws_querySetLoadBalancerPoliciesForBackendServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
