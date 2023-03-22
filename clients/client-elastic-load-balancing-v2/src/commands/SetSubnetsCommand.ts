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
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import {
  SetSubnetsInput,
  SetSubnetsInputFilterSensitiveLog,
  SetSubnetsOutput,
  SetSubnetsOutputFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_querySetSubnetsCommand, serializeAws_querySetSubnetsCommand } from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link SetSubnetsCommand}.
 */
export interface SetSubnetsCommandInput extends SetSubnetsInput {}
/**
 * @public
 *
 * The output of {@link SetSubnetsCommand}.
 */
export interface SetSubnetsCommandOutput extends SetSubnetsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Enables the Availability Zones for the specified public subnets for the specified
 *       Application Load Balancer or Network Load Balancer. The specified subnets replace the
 *       previously enabled subnets.</p>
 *          <p>When you specify subnets for a Network Load Balancer, you must include all subnets that
 *       were enabled previously, with their existing configurations, plus any additional
 *       subnets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, SetSubnetsCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, SetSubnetsCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new SetSubnetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param SetSubnetsCommandInput - {@link SetSubnetsCommandInput}
 * @returns {@link SetSubnetsCommandOutput}
 * @see {@link SetSubnetsCommandInput} for command's `input` shape.
 * @see {@link SetSubnetsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link AllocationIdNotFoundException} (client fault)
 *  <p>The specified allocation ID does not exist.</p>
 *
 * @throws {@link AvailabilityZoneNotSupportedException} (client fault)
 *  <p>The specified Availability Zone is not supported.</p>
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration is not valid.</p>
 *
 * @throws {@link InvalidSubnetException} (client fault)
 *  <p>The specified subnet is out of available addresses.</p>
 *
 * @throws {@link LoadBalancerNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link SubnetNotFoundException} (client fault)
 *  <p>The specified subnet does not exist.</p>
 *
 *
 * @example To enable Availability Zones for a load balancer
 * ```javascript
 * // This example enables the Availability Zones for the specified subnets for the specified load balancer.
 * const input = {
 *   "LoadBalancerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188",
 *   "Subnets": [
 *     "subnet-8360a9e7",
 *     "subnet-b7d581c0"
 *   ]
 * };
 * const command = new SetSubnetsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AvailabilityZones": [
 *     {
 *       "SubnetId": "subnet-8360a9e7",
 *       "ZoneName": "us-west-2a"
 *     },
 *     {
 *       "SubnetId": "subnet-b7d581c0",
 *       "ZoneName": "us-west-2b"
 *     }
 *   ]
 * }
 * *\/
 * // example id: elbv2-set-subnets-1
 * ```
 *
 */
export class SetSubnetsCommand extends $Command<
  SetSubnetsCommandInput,
  SetSubnetsCommandOutput,
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
  constructor(readonly input: SetSubnetsCommandInput) {
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
  ): Handler<SetSubnetsCommandInput, SetSubnetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SetSubnetsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "SetSubnetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetSubnetsInputFilterSensitiveLog,
      outputFilterSensitiveLog: SetSubnetsOutputFilterSensitiveLog,
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
  private serialize(input: SetSubnetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySetSubnetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetSubnetsCommandOutput> {
    return deserializeAws_querySetSubnetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
