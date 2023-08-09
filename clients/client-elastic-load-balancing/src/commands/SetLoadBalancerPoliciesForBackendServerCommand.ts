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
import {
  SetLoadBalancerPoliciesForBackendServerInput,
  SetLoadBalancerPoliciesForBackendServerOutput,
} from "../models/models_0";
import {
  de_SetLoadBalancerPoliciesForBackendServerCommand,
  se_SetLoadBalancerPoliciesForBackendServerCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetLoadBalancerPoliciesForBackendServerCommand}.
 */
export interface SetLoadBalancerPoliciesForBackendServerCommandInput
  extends SetLoadBalancerPoliciesForBackendServerInput {}
/**
 * @public
 *
 * The output of {@link SetLoadBalancerPoliciesForBackendServerCommand}.
 */
export interface SetLoadBalancerPoliciesForBackendServerCommandOutput
  extends SetLoadBalancerPoliciesForBackendServerOutput,
    __MetadataBearer {}

/**
 * @public
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
 * const input = { // SetLoadBalancerPoliciesForBackendServerInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   InstancePort: Number("int"), // required
 *   PolicyNames: [ // PolicyNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new SetLoadBalancerPoliciesForBackendServerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetLoadBalancerPoliciesForBackendServerCommandInput - {@link SetLoadBalancerPoliciesForBackendServerCommandInput}
 * @returns {@link SetLoadBalancerPoliciesForBackendServerCommandOutput}
 * @see {@link SetLoadBalancerPoliciesForBackendServerCommandInput} for command's `input` shape.
 * @see {@link SetLoadBalancerPoliciesForBackendServerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration change is not valid.</p>
 *
 * @throws {@link PolicyNotFoundException} (client fault)
 *  <p>One or more of the specified policies do not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 * @example To replace the policies associated with a port for a backend instance
 * ```javascript
 * // This example replaces the policies that are currently associated with the specified port.
 * const input = {
 *   "InstancePort": 80,
 *   "LoadBalancerName": "my-load-balancer",
 *   "PolicyNames": [
 *     "my-ProxyProtocol-policy"
 *   ]
 * };
 * const command = new SetLoadBalancerPoliciesForBackendServerCommand(input);
 * await client.send(command);
 * // example id: elb-set-load-balancer-policies-for-backend-server-1
 * ```
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

  /**
   * @public
   */
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
    input: SetLoadBalancerPoliciesForBackendServerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_SetLoadBalancerPoliciesForBackendServerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SetLoadBalancerPoliciesForBackendServerCommandOutput> {
    return de_SetLoadBalancerPoliciesForBackendServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
