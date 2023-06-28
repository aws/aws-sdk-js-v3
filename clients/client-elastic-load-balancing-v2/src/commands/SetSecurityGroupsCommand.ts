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
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { SetSecurityGroupsInput, SetSecurityGroupsOutput } from "../models/models_0";
import { de_SetSecurityGroupsCommand, se_SetSecurityGroupsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetSecurityGroupsCommand}.
 */
export interface SetSecurityGroupsCommandInput extends SetSecurityGroupsInput {}
/**
 * @public
 *
 * The output of {@link SetSecurityGroupsCommand}.
 */
export interface SetSecurityGroupsCommandOutput extends SetSecurityGroupsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Associates the specified security groups with the specified Application Load Balancer. The
 *       specified security groups override the previously associated security groups.</p>
 *          <p>You can't specify a security group for a Network Load Balancer or Gateway Load
 *       Balancer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, SetSecurityGroupsCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, SetSecurityGroupsCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // SetSecurityGroupsInput
 *   LoadBalancerArn: "STRING_VALUE", // required
 *   SecurityGroups: [ // SecurityGroups // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new SetSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * // { // SetSecurityGroupsOutput
 * //   SecurityGroupIds: [ // SecurityGroups
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param SetSecurityGroupsCommandInput - {@link SetSecurityGroupsCommandInput}
 * @returns {@link SetSecurityGroupsCommandOutput}
 * @see {@link SetSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link SetSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration is not valid.</p>
 *
 * @throws {@link InvalidSecurityGroupException} (client fault)
 *  <p>The specified security group does not exist.</p>
 *
 * @throws {@link LoadBalancerNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 * @example To associate a security group with a load balancer
 * ```javascript
 * // This example associates the specified security group with the specified load balancer.
 * const input = {
 *   "LoadBalancerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188",
 *   "SecurityGroups": [
 *     "sg-5943793c"
 *   ]
 * };
 * const command = new SetSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SecurityGroupIds": [
 *     "sg-5943793c"
 *   ]
 * }
 * *\/
 * // example id: elbv2-set-security-groups-1
 * ```
 *
 */
export class SetSecurityGroupsCommand extends $Command<
  SetSecurityGroupsCommandInput,
  SetSecurityGroupsCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
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
  constructor(readonly input: SetSecurityGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetSecurityGroupsCommandInput, SetSecurityGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetSecurityGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "SetSecurityGroupsCommand";
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
  private serialize(input: SetSecurityGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SetSecurityGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetSecurityGroupsCommandOutput> {
    return de_SetSecurityGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
