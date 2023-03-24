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
import { AutoScalingGroupNamesType, AutoScalingGroupsType } from "../models/models_0";
import {
  deserializeAws_queryDescribeAutoScalingGroupsCommand,
  serializeAws_queryDescribeAutoScalingGroupsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link DescribeAutoScalingGroupsCommand}.
 */
export interface DescribeAutoScalingGroupsCommandInput extends AutoScalingGroupNamesType {}
/**
 * @public
 *
 * The output of {@link DescribeAutoScalingGroupsCommand}.
 */
export interface DescribeAutoScalingGroupsCommandOutput extends AutoScalingGroupsType, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the Auto Scaling groups in the account and Region.</p>
 *          <p>If you specify Auto Scaling group names, the output includes information for only the
 *             specified Auto Scaling groups. If you specify filters, the output includes information for only
 *             those Auto Scaling groups that meet the filter criteria. If you do not specify group names or
 *             filters, the output includes information for all Auto Scaling groups. </p>
 *          <p>This operation also returns information about instances in Auto Scaling groups. To retrieve
 *             information about the instances in a warm pool, you must call the <a>DescribeWarmPool</a> API. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeAutoScalingGroupsCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeAutoScalingGroupsCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = {
 *   AutoScalingGroupNames: [
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Filters: [
 *     {
 *       Name: "STRING_VALUE",
 *       Values: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeAutoScalingGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeAutoScalingGroupsCommandInput - {@link DescribeAutoScalingGroupsCommandInput}
 * @returns {@link DescribeAutoScalingGroupsCommandOutput}
 * @see {@link DescribeAutoScalingGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeAutoScalingGroupsCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 *
 * @example To describe an Auto Scaling group
 * ```javascript
 * // This example describes the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupNames": [
 *     "my-auto-scaling-group"
 *   ]
 * };
 * const command = new DescribeAutoScalingGroupsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AutoScalingGroups": [
 *     {
 *       "AutoScalingGroupARN": "arn:aws:autoscaling:us-west-2:123456789012:autoScalingGroup:930d940e-891e-4781-a11a-7b0acd480f03:autoScalingGroupName/my-auto-scaling-group",
 *       "AutoScalingGroupName": "my-auto-scaling-group",
 *       "AvailabilityZones": [
 *         "us-west-2c"
 *       ],
 *       "CreatedTime": "2013-08-19T20:53:25.584Z",
 *       "DefaultCooldown": 300,
 *       "DesiredCapacity": 1,
 *       "EnabledMetrics": [],
 *       "HealthCheckGracePeriod": 300,
 *       "HealthCheckType": "EC2",
 *       "Instances": [
 *         {
 *           "AvailabilityZone": "us-west-2c",
 *           "HealthStatus": "Healthy",
 *           "InstanceId": "i-4ba0837f",
 *           "LaunchConfigurationName": "my-launch-config",
 *           "LifecycleState": "InService",
 *           "ProtectedFromScaleIn": false
 *         }
 *       ],
 *       "LaunchConfigurationName": "my-launch-config",
 *       "LoadBalancerNames": [],
 *       "MaxSize": 1,
 *       "MinSize": 0,
 *       "NewInstancesProtectedFromScaleIn": false,
 *       "SuspendedProcesses": [],
 *       "Tags": [],
 *       "TerminationPolicies": [
 *         "Default"
 *       ],
 *       "VPCZoneIdentifier": "subnet-12345678"
 *     }
 *   ]
 * }
 * *\/
 * // example id: autoscaling-describe-auto-scaling-groups-1
 * ```
 *
 */
export class DescribeAutoScalingGroupsCommand extends $Command<
  DescribeAutoScalingGroupsCommandInput,
  DescribeAutoScalingGroupsCommandOutput,
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
  constructor(readonly input: DescribeAutoScalingGroupsCommandInput) {
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
  ): Handler<DescribeAutoScalingGroupsCommandInput, DescribeAutoScalingGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAutoScalingGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeAutoScalingGroupsCommand";
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
  private serialize(input: DescribeAutoScalingGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeAutoScalingGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAutoScalingGroupsCommandOutput> {
    return deserializeAws_queryDescribeAutoScalingGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
