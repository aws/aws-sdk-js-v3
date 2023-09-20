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

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { CreateLaunchConfigurationType } from "../models/models_0";
import { de_CreateLaunchConfigurationCommand, se_CreateLaunchConfigurationCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateLaunchConfigurationCommand}.
 */
export interface CreateLaunchConfigurationCommandInput extends CreateLaunchConfigurationType {}
/**
 * @public
 *
 * The output of {@link CreateLaunchConfigurationCommand}.
 */
export interface CreateLaunchConfigurationCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Creates a launch configuration.</p>
 *          <p>If you exceed your maximum limit of launch configurations, the call fails. To query
 *             this limit, call the <a>DescribeAccountLimits</a> API. For information about
 *             updating this limit, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-quotas.html">Quotas for
 *                 Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/LaunchConfiguration.html">Launch
 *                 configurations</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *          <note>
 *             <p>Amazon EC2 Auto Scaling configures instances launched as part of an Auto Scaling group using either a
 *                 launch template or a launch configuration. We strongly recommend that you do not use
 *                 launch configurations. They do not provide full functionality for Amazon EC2 Auto Scaling or Amazon EC2.
 *                 For information about using launch templates, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/launch-templates.html">Launch templates</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, CreateLaunchConfigurationCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, CreateLaunchConfigurationCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // CreateLaunchConfigurationType
 *   LaunchConfigurationName: "STRING_VALUE", // required
 *   ImageId: "STRING_VALUE",
 *   KeyName: "STRING_VALUE",
 *   SecurityGroups: [ // SecurityGroups
 *     "STRING_VALUE",
 *   ],
 *   ClassicLinkVPCId: "STRING_VALUE",
 *   ClassicLinkVPCSecurityGroups: [ // ClassicLinkVPCSecurityGroups
 *     "STRING_VALUE",
 *   ],
 *   UserData: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE",
 *   InstanceType: "STRING_VALUE",
 *   KernelId: "STRING_VALUE",
 *   RamdiskId: "STRING_VALUE",
 *   BlockDeviceMappings: [ // BlockDeviceMappings
 *     { // BlockDeviceMapping
 *       VirtualName: "STRING_VALUE",
 *       DeviceName: "STRING_VALUE", // required
 *       Ebs: { // Ebs
 *         SnapshotId: "STRING_VALUE",
 *         VolumeSize: Number("int"),
 *         VolumeType: "STRING_VALUE",
 *         DeleteOnTermination: true || false,
 *         Iops: Number("int"),
 *         Encrypted: true || false,
 *         Throughput: Number("int"),
 *       },
 *       NoDevice: true || false,
 *     },
 *   ],
 *   InstanceMonitoring: { // InstanceMonitoring
 *     Enabled: true || false,
 *   },
 *   SpotPrice: "STRING_VALUE",
 *   IamInstanceProfile: "STRING_VALUE",
 *   EbsOptimized: true || false,
 *   AssociatePublicIpAddress: true || false,
 *   PlacementTenancy: "STRING_VALUE",
 *   MetadataOptions: { // InstanceMetadataOptions
 *     HttpTokens: "optional" || "required",
 *     HttpPutResponseHopLimit: Number("int"),
 *     HttpEndpoint: "disabled" || "enabled",
 *   },
 * };
 * const command = new CreateLaunchConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateLaunchConfigurationCommandInput - {@link CreateLaunchConfigurationCommandInput}
 * @returns {@link CreateLaunchConfigurationCommandOutput}
 * @see {@link CreateLaunchConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateLaunchConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @example To create a launch configuration
 * ```javascript
 * // This example creates a launch configuration.
 * const input = {
 *   "IamInstanceProfile": "my-iam-role",
 *   "ImageId": "ami-12345678",
 *   "InstanceType": "m3.medium",
 *   "LaunchConfigurationName": "my-launch-config",
 *   "SecurityGroups": [
 *     "sg-eb2af88e"
 *   ]
 * };
 * const command = new CreateLaunchConfigurationCommand(input);
 * await client.send(command);
 * // example id: autoscaling-create-launch-configuration-1
 * ```
 *
 */
export class CreateLaunchConfigurationCommand extends $Command<
  CreateLaunchConfigurationCommandInput,
  CreateLaunchConfigurationCommandOutput,
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
  constructor(readonly input: CreateLaunchConfigurationCommandInput) {
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
  ): Handler<CreateLaunchConfigurationCommandInput, CreateLaunchConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLaunchConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "CreateLaunchConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AutoScaling_2011_01_01",
        operation: "CreateLaunchConfiguration",
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
  private serialize(input: CreateLaunchConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateLaunchConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateLaunchConfigurationCommandOutput> {
    return de_CreateLaunchConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
