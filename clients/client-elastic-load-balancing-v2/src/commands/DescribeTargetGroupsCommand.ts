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
  DescribeTargetGroupsInput,
  DescribeTargetGroupsInputFilterSensitiveLog,
  DescribeTargetGroupsOutput,
  DescribeTargetGroupsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeTargetGroupsCommand,
  serializeAws_queryDescribeTargetGroupsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link DescribeTargetGroupsCommand}.
 */
export interface DescribeTargetGroupsCommandInput extends DescribeTargetGroupsInput {}
/**
 * @public
 *
 * The output of {@link DescribeTargetGroupsCommand}.
 */
export interface DescribeTargetGroupsCommandOutput extends DescribeTargetGroupsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified target groups or all of your target groups. By default, all target
 *       groups are described. Alternatively, you can specify one of the following to filter the
 *       results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of
 *       one or more target groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeTargetGroupsCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeTargetGroupsCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new DescribeTargetGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeTargetGroupsCommandInput - {@link DescribeTargetGroupsCommandInput}
 * @returns {@link DescribeTargetGroupsCommandOutput}
 * @see {@link DescribeTargetGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeTargetGroupsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link LoadBalancerNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link TargetGroupNotFoundException} (client fault)
 *  <p>The specified target group does not exist.</p>
 *
 *
 * @example To describe a target group
 * ```javascript
 * // This example describes the specified target group.
 * const input = {
 *   "TargetGroupArns": [
 *     "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067"
 *   ]
 * };
 * const command = new DescribeTargetGroupsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "TargetGroups": [
 *     {
 *       "HealthCheckIntervalSeconds": 30,
 *       "HealthCheckPath": "/",
 *       "HealthCheckPort": "traffic-port",
 *       "HealthCheckProtocol": "HTTP",
 *       "HealthCheckTimeoutSeconds": 5,
 *       "HealthyThresholdCount": 5,
 *       "LoadBalancerArns": [
 *         "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188"
 *       ],
 *       "Matcher": {
 *         "HttpCode": "200"
 *       },
 *       "Port": 80,
 *       "Protocol": "HTTP",
 *       "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
 *       "TargetGroupName": "my-targets",
 *       "UnhealthyThresholdCount": 2,
 *       "VpcId": "vpc-3ac0fb5f"
 *     }
 *   ]
 * }
 * *\/
 * // example id: elbv2-describe-target-groups-1
 * ```
 *
 */
export class DescribeTargetGroupsCommand extends $Command<
  DescribeTargetGroupsCommandInput,
  DescribeTargetGroupsCommandOutput,
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
  constructor(readonly input: DescribeTargetGroupsCommandInput) {
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
  ): Handler<DescribeTargetGroupsCommandInput, DescribeTargetGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTargetGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "DescribeTargetGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTargetGroupsInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeTargetGroupsOutputFilterSensitiveLog,
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
  private serialize(input: DescribeTargetGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeTargetGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTargetGroupsCommandOutput> {
    return deserializeAws_queryDescribeTargetGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
