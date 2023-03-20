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

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { CreateAutoScalingGroupType } from "../models/models_0";
import {
  deserializeAws_queryCreateAutoScalingGroupCommand,
  serializeAws_queryCreateAutoScalingGroupCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link CreateAutoScalingGroupCommand}.
 */
export interface CreateAutoScalingGroupCommandInput extends CreateAutoScalingGroupType {}
/**
 * @public
 *
 * The output of {@link CreateAutoScalingGroupCommand}.
 */
export interface CreateAutoScalingGroupCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>
 *             <b>We strongly recommend using a launch template when calling this operation to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2.</b>
 *          </p>
 *          <p>Creates an Auto Scaling group with the specified name and attributes. </p>
 *          <p>If you exceed your maximum limit of Auto Scaling groups, the call fails. To query this limit,
 *             call the <a>DescribeAccountLimits</a> API. For information about updating
 *             this limit, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-quotas.html">Quotas for
 *                 Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *          <p>For introductory exercises for creating an Auto Scaling group, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/GettingStartedTutorial.html">Getting started with
 *                 Amazon EC2 Auto Scaling</a> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-register-lbs-with-asg.html">Tutorial: Set up a
 *                 scaled and load-balanced application</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroup.html">Auto Scaling
 *                 groups</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *          <p>Every Auto Scaling group has three size properties (<code>DesiredCapacity</code>,
 *                 <code>MaxSize</code>, and <code>MinSize</code>). Usually, you set these sizes based
 *             on a specific number of instances. However, if you configure a mixed instances policy
 *             that defines weights for the instance types, you must specify these sizes with the same
 *             units that you use for weighting instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, CreateAutoScalingGroupCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, CreateAutoScalingGroupCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new CreateAutoScalingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateAutoScalingGroupCommandInput - {@link CreateAutoScalingGroupCommandInput}
 * @returns {@link CreateAutoScalingGroupCommandOutput}
 * @see {@link CreateAutoScalingGroupCommandInput} for command's `input` shape.
 * @see {@link CreateAutoScalingGroupCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link AlreadyExistsFault} (client fault)
 *  <p>You already have an Auto Scaling group or launch configuration with this name.</p>
 *
 * @throws {@link LimitExceededFault} (client fault)
 *  <p>You have already reached a limit for your Amazon EC2 Auto Scaling
 *             resources (for example, Auto Scaling groups, launch configurations, or lifecycle hooks). For
 *             more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeAccountLimits.html">DescribeAccountLimits</a> in the <i>Amazon EC2 Auto Scaling API
 *             Reference</i>.</p>
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link ServiceLinkedRoleFailure} (server fault)
 *  <p>The service-linked role is not yet ready for use.</p>
 *
 *
 * @example To create an Auto Scaling group
 * ```javascript
 * // This example creates an Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "LaunchTemplate": {
 *     "LaunchTemplateName": "my-template-for-auto-scaling",
 *     "Version": "$Latest"
 *   },
 *   "MaxInstanceLifetime": 2592000,
 *   "MaxSize": 3,
 *   "MinSize": 1,
 *   "VPCZoneIdentifier": "subnet-057fa0918fEXAMPLE"
 * };
 * const command = new CreateAutoScalingGroupCommand(input);
 * await client.send(command);
 * // example id: autoscaling-create-auto-scaling-group-1
 * ```
 *
 * @example To create an Auto Scaling group with an attached target group
 * ```javascript
 * // This example creates an Auto Scaling group and attaches the specified target group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "HealthCheckGracePeriod": 300,
 *   "HealthCheckType": "ELB",
 *   "LaunchTemplate": {
 *     "LaunchTemplateName": "my-template-for-auto-scaling",
 *     "Version": "$Latest"
 *   },
 *   "MaxSize": 3,
 *   "MinSize": 1,
 *   "TargetGroupARNs": [
 *     "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067"
 *   ],
 *   "VPCZoneIdentifier": "subnet-057fa0918fEXAMPLE, subnet-610acd08EXAMPLE"
 * };
 * const command = new CreateAutoScalingGroupCommand(input);
 * await client.send(command);
 * // example id: autoscaling-create-auto-scaling-group-2
 * ```
 *
 * @example To create an Auto Scaling group with a mixed instances policy
 * ```javascript
 * // This example creates an Auto Scaling group with a mixed instances policy. It specifies the c5.large, c5a.large, and c6g.large instance types and defines a different launch template for the c6g.large instance type.
 * const input = {
 *   "AutoScalingGroupName": "my-asg",
 *   "DesiredCapacity": 3,
 *   "MaxSize": 5,
 *   "MinSize": 1,
 *   "MixedInstancesPolicy": {
 *     "InstancesDistribution": {
 *       "OnDemandBaseCapacity": 1,
 *       "OnDemandPercentageAboveBaseCapacity": 50,
 *       "SpotAllocationStrategy": "capacity-optimized"
 *     },
 *     "LaunchTemplate": {
 *       "LaunchTemplateSpecification": {
 *         "LaunchTemplateName": "my-launch-template-for-x86",
 *         "Version": "$Latest"
 *       },
 *       "Overrides": [
 *         {
 *           "InstanceType": "c6g.large",
 *           "LaunchTemplateSpecification": {
 *             "LaunchTemplateName": "my-launch-template-for-arm",
 *             "Version": "$Latest"
 *           }
 *         },
 *         {
 *           "InstanceType": "c5.large"
 *         },
 *         {
 *           "InstanceType": "c5a.large"
 *         }
 *       ]
 *     }
 *   },
 *   "VPCZoneIdentifier": "subnet-057fa0918fEXAMPLE, subnet-610acd08EXAMPLE"
 * };
 * const command = new CreateAutoScalingGroupCommand(input);
 * await client.send(command);
 * // example id: to-create-an-auto-scaling-group-with-a-mixed-instances-policy-1617815269039
 * ```
 *
 */
export class CreateAutoScalingGroupCommand extends $Command<
  CreateAutoScalingGroupCommandInput,
  CreateAutoScalingGroupCommandOutput,
  AutoScalingClientResolvedConfig
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
  constructor(readonly input: CreateAutoScalingGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAutoScalingGroupCommandInput, CreateAutoScalingGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAutoScalingGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "CreateAutoScalingGroupCommand";
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
  private serialize(input: CreateAutoScalingGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateAutoScalingGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAutoScalingGroupCommandOutput> {
    return deserializeAws_queryCreateAutoScalingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
