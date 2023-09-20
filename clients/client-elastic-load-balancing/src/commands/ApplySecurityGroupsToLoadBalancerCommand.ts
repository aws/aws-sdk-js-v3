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
import { ApplySecurityGroupsToLoadBalancerInput, ApplySecurityGroupsToLoadBalancerOutput } from "../models/models_0";
import {
  de_ApplySecurityGroupsToLoadBalancerCommand,
  se_ApplySecurityGroupsToLoadBalancerCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ApplySecurityGroupsToLoadBalancerCommand}.
 */
export interface ApplySecurityGroupsToLoadBalancerCommandInput extends ApplySecurityGroupsToLoadBalancerInput {}
/**
 * @public
 *
 * The output of {@link ApplySecurityGroupsToLoadBalancerCommand}.
 */
export interface ApplySecurityGroupsToLoadBalancerCommandOutput
  extends ApplySecurityGroupsToLoadBalancerOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Associates one or more security groups with your load balancer in a virtual private cloud (VPC). The specified security groups override the previously associated security groups.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-security-groups.html#elb-vpc-security-groups">Security Groups for Load Balancers in a VPC</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, ApplySecurityGroupsToLoadBalancerCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, ApplySecurityGroupsToLoadBalancerCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // ApplySecurityGroupsToLoadBalancerInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   SecurityGroups: [ // SecurityGroups // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ApplySecurityGroupsToLoadBalancerCommand(input);
 * const response = await client.send(command);
 * // { // ApplySecurityGroupsToLoadBalancerOutput
 * //   SecurityGroups: [ // SecurityGroups
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ApplySecurityGroupsToLoadBalancerCommandInput - {@link ApplySecurityGroupsToLoadBalancerCommandInput}
 * @returns {@link ApplySecurityGroupsToLoadBalancerCommandOutput}
 * @see {@link ApplySecurityGroupsToLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link ApplySecurityGroupsToLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration change is not valid.</p>
 *
 * @throws {@link InvalidSecurityGroupException} (client fault)
 *  <p>One or more of the specified security groups do not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 * @example To associate a security group with a load balancer in a VPC
 * ```javascript
 * // This example associates a security group with the specified load balancer in a VPC.
 * const input = {
 *   "LoadBalancerName": "my-load-balancer",
 *   "SecurityGroups": [
 *     "sg-fc448899"
 *   ]
 * };
 * const command = new ApplySecurityGroupsToLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SecurityGroups": [
 *     "sg-fc448899"
 *   ]
 * }
 * *\/
 * // example id: elb-apply-security-groups-to-load-balancer-1
 * ```
 *
 */
export class ApplySecurityGroupsToLoadBalancerCommand extends $Command<
  ApplySecurityGroupsToLoadBalancerCommandInput,
  ApplySecurityGroupsToLoadBalancerCommandOutput,
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
  constructor(readonly input: ApplySecurityGroupsToLoadBalancerCommandInput) {
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
  ): Handler<ApplySecurityGroupsToLoadBalancerCommandInput, ApplySecurityGroupsToLoadBalancerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ApplySecurityGroupsToLoadBalancerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "ApplySecurityGroupsToLoadBalancerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticLoadBalancing_v7",
        operation: "ApplySecurityGroupsToLoadBalancer",
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
    input: ApplySecurityGroupsToLoadBalancerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ApplySecurityGroupsToLoadBalancerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ApplySecurityGroupsToLoadBalancerCommandOutput> {
    return de_ApplySecurityGroupsToLoadBalancerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
