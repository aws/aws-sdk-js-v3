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

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { StartInstanceRefreshAnswer, StartInstanceRefreshType } from "../models/models_0";
import { de_StartInstanceRefreshCommand, se_StartInstanceRefreshCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartInstanceRefreshCommand}.
 */
export interface StartInstanceRefreshCommandInput extends StartInstanceRefreshType {}
/**
 * @public
 *
 * The output of {@link StartInstanceRefreshCommand}.
 */
export interface StartInstanceRefreshCommandOutput extends StartInstanceRefreshAnswer, __MetadataBearer {}

/**
 * @public
 * <p>Starts an instance refresh. During an instance refresh, Amazon EC2 Auto Scaling performs a rolling
 *             update of instances in an Auto Scaling group. Instances are terminated first and then replaced,
 *             which temporarily reduces the capacity available within your Auto Scaling group.</p>
 *          <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh
 *                 feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group.
 *             This feature is helpful, for example, when you have a new AMI or a new user data script.
 *             You just need to create a new launch template that specifies the new AMI or user data
 *             script. Then start an instance refresh to immediately begin the process of updating
 *             instances in the group. </p>
 *          <p>If successful, the request's response contains a unique ID that you can use to track
 *             the progress of the instance refresh. To query its status, call the <a>DescribeInstanceRefreshes</a> API. To describe the instance refreshes that
 *             have already run, call the <a>DescribeInstanceRefreshes</a> API. To cancel an
 *             instance refresh that is in progress, use the <a>CancelInstanceRefresh</a>
 *             API. </p>
 *          <p>An instance refresh might fail for several reasons, such as EC2 launch failures,
 *             misconfigured health checks, or not ignoring or allowing the termination of instances
 *             that are in <code>Standby</code> state or protected from scale in. You can monitor for
 *             failed EC2 launches using the scaling activities. To find the scaling activities, call
 *             the <a>DescribeScalingActivities</a> API.</p>
 *          <p>If you enable auto rollback, your Auto Scaling group will be rolled back automatically when
 *             the instance refresh fails. You can enable this feature before starting an instance
 *             refresh by specifying the <code>AutoRollback</code> property in the instance refresh
 *             preferences. Otherwise, to roll back an instance refresh before it finishes, use the
 *                 <a>RollbackInstanceRefresh</a> API. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, StartInstanceRefreshCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, StartInstanceRefreshCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // StartInstanceRefreshType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   Strategy: "Rolling",
 *   DesiredConfiguration: { // DesiredConfiguration
 *     LaunchTemplate: { // LaunchTemplateSpecification
 *       LaunchTemplateId: "STRING_VALUE",
 *       LaunchTemplateName: "STRING_VALUE",
 *       Version: "STRING_VALUE",
 *     },
 *     MixedInstancesPolicy: { // MixedInstancesPolicy
 *       LaunchTemplate: { // LaunchTemplate
 *         LaunchTemplateSpecification: {
 *           LaunchTemplateId: "STRING_VALUE",
 *           LaunchTemplateName: "STRING_VALUE",
 *           Version: "STRING_VALUE",
 *         },
 *         Overrides: [ // Overrides
 *           { // LaunchTemplateOverrides
 *             InstanceType: "STRING_VALUE",
 *             WeightedCapacity: "STRING_VALUE",
 *             LaunchTemplateSpecification: "<LaunchTemplateSpecification>",
 *             InstanceRequirements: { // InstanceRequirements
 *               VCpuCount: { // VCpuCountRequest
 *                 Min: Number("int"), // required
 *                 Max: Number("int"),
 *               },
 *               MemoryMiB: { // MemoryMiBRequest
 *                 Min: Number("int"), // required
 *                 Max: Number("int"),
 *               },
 *               CpuManufacturers: [ // CpuManufacturers
 *                 "intel" || "amd" || "amazon-web-services",
 *               ],
 *               MemoryGiBPerVCpu: { // MemoryGiBPerVCpuRequest
 *                 Min: Number("double"),
 *                 Max: Number("double"),
 *               },
 *               ExcludedInstanceTypes: [ // ExcludedInstanceTypes
 *                 "STRING_VALUE",
 *               ],
 *               InstanceGenerations: [ // InstanceGenerations
 *                 "current" || "previous",
 *               ],
 *               SpotMaxPricePercentageOverLowestPrice: Number("int"),
 *               OnDemandMaxPricePercentageOverLowestPrice: Number("int"),
 *               BareMetal: "included" || "excluded" || "required",
 *               BurstablePerformance: "included" || "excluded" || "required",
 *               RequireHibernateSupport: true || false,
 *               NetworkInterfaceCount: { // NetworkInterfaceCountRequest
 *                 Min: Number("int"),
 *                 Max: Number("int"),
 *               },
 *               LocalStorage: "included" || "excluded" || "required",
 *               LocalStorageTypes: [ // LocalStorageTypes
 *                 "hdd" || "ssd",
 *               ],
 *               TotalLocalStorageGB: { // TotalLocalStorageGBRequest
 *                 Min: Number("double"),
 *                 Max: Number("double"),
 *               },
 *               BaselineEbsBandwidthMbps: { // BaselineEbsBandwidthMbpsRequest
 *                 Min: Number("int"),
 *                 Max: Number("int"),
 *               },
 *               AcceleratorTypes: [ // AcceleratorTypes
 *                 "gpu" || "fpga" || "inference",
 *               ],
 *               AcceleratorCount: { // AcceleratorCountRequest
 *                 Min: Number("int"),
 *                 Max: Number("int"),
 *               },
 *               AcceleratorManufacturers: [ // AcceleratorManufacturers
 *                 "nvidia" || "amd" || "amazon-web-services" || "xilinx",
 *               ],
 *               AcceleratorNames: [ // AcceleratorNames
 *                 "a100" || "v100" || "k80" || "t4" || "m60" || "radeon-pro-v520" || "vu9p",
 *               ],
 *               AcceleratorTotalMemoryMiB: { // AcceleratorTotalMemoryMiBRequest
 *                 Min: Number("int"),
 *                 Max: Number("int"),
 *               },
 *               NetworkBandwidthGbps: { // NetworkBandwidthGbpsRequest
 *                 Min: Number("double"),
 *                 Max: Number("double"),
 *               },
 *               AllowedInstanceTypes: [ // AllowedInstanceTypes
 *                 "STRING_VALUE",
 *               ],
 *             },
 *           },
 *         ],
 *       },
 *       InstancesDistribution: { // InstancesDistribution
 *         OnDemandAllocationStrategy: "STRING_VALUE",
 *         OnDemandBaseCapacity: Number("int"),
 *         OnDemandPercentageAboveBaseCapacity: Number("int"),
 *         SpotAllocationStrategy: "STRING_VALUE",
 *         SpotInstancePools: Number("int"),
 *         SpotMaxPrice: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   Preferences: { // RefreshPreferences
 *     MinHealthyPercentage: Number("int"),
 *     InstanceWarmup: Number("int"),
 *     CheckpointPercentages: [ // CheckpointPercentages
 *       Number("int"),
 *     ],
 *     CheckpointDelay: Number("int"),
 *     SkipMatching: true || false,
 *     AutoRollback: true || false,
 *     ScaleInProtectedInstances: "Refresh" || "Ignore" || "Wait",
 *     StandbyInstances: "Terminate" || "Ignore" || "Wait",
 *   },
 * };
 * const command = new StartInstanceRefreshCommand(input);
 * const response = await client.send(command);
 * // { // StartInstanceRefreshAnswer
 * //   InstanceRefreshId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartInstanceRefreshCommandInput - {@link StartInstanceRefreshCommandInput}
 * @returns {@link StartInstanceRefreshCommandOutput}
 * @see {@link StartInstanceRefreshCommandInput} for command's `input` shape.
 * @see {@link StartInstanceRefreshCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link InstanceRefreshInProgressFault} (client fault)
 *  <p>The request failed because an active instance refresh already exists for the specified
 *             Auto Scaling group.</p>
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
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @example To start an instance refresh
 * ```javascript
 * // This example starts an instance refresh for the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "DesiredConfiguration": {
 *     "LaunchTemplate": {
 *       "LaunchTemplateName": "my-template-for-auto-scaling",
 *       "Version": "$Latest"
 *     }
 *   },
 *   "Preferences": {
 *     "InstanceWarmup": 400,
 *     "MinHealthyPercentage": 90,
 *     "SkipMatching": true
 *   }
 * };
 * const command = new StartInstanceRefreshCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "InstanceRefreshId": "08b91cf7-8fa6-48af-b6a6-d227f40f1b9b"
 * }
 * *\/
 * // example id: to-start-an-instance-refresh-1592957271522
 * ```
 *
 */
export class StartInstanceRefreshCommand extends $Command<
  StartInstanceRefreshCommandInput,
  StartInstanceRefreshCommandOutput,
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
  constructor(readonly input: StartInstanceRefreshCommandInput) {
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
  ): Handler<StartInstanceRefreshCommandInput, StartInstanceRefreshCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartInstanceRefreshCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "StartInstanceRefreshCommand";
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
  private serialize(input: StartInstanceRefreshCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartInstanceRefreshCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartInstanceRefreshCommandOutput> {
    return de_StartInstanceRefreshCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
