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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RunScheduledInstancesRequest, RunScheduledInstancesRequestFilterSensitiveLog } from "../models/models_6";
import { RunScheduledInstancesResult } from "../models/models_7";
import { de_RunScheduledInstancesCommand, se_RunScheduledInstancesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RunScheduledInstancesCommand}.
 */
export interface RunScheduledInstancesCommandInput extends RunScheduledInstancesRequest {}
/**
 * @public
 *
 * The output of {@link RunScheduledInstancesCommand}.
 */
export interface RunScheduledInstancesCommandOutput extends RunScheduledInstancesResult, __MetadataBearer {}

/**
 * @public
 * <p>Launches the specified Scheduled Instances.</p>
 *          <p>Before you can launch a Scheduled Instance, you must purchase it and obtain an identifier using <a>PurchaseScheduledInstances</a>.</p>
 *          <p>You must launch a Scheduled Instance during its scheduled time period. You can't stop or reboot a Scheduled Instance,
 *          but you can terminate it as needed. If you terminate a Scheduled Instance before the current scheduled time period ends,
 *          you can launch it again after a few minutes. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-scheduled-instances.html">Scheduled Instances</a>
 *          in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RunScheduledInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RunScheduledInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // RunScheduledInstancesRequest
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 *   InstanceCount: Number("int"),
 *   LaunchSpecification: { // ScheduledInstancesLaunchSpecification
 *     BlockDeviceMappings: [ // ScheduledInstancesBlockDeviceMappingSet
 *       { // ScheduledInstancesBlockDeviceMapping
 *         DeviceName: "STRING_VALUE",
 *         Ebs: { // ScheduledInstancesEbs
 *           DeleteOnTermination: true || false,
 *           Encrypted: true || false,
 *           Iops: Number("int"),
 *           SnapshotId: "STRING_VALUE",
 *           VolumeSize: Number("int"),
 *           VolumeType: "STRING_VALUE",
 *         },
 *         NoDevice: "STRING_VALUE",
 *         VirtualName: "STRING_VALUE",
 *       },
 *     ],
 *     EbsOptimized: true || false,
 *     IamInstanceProfile: { // ScheduledInstancesIamInstanceProfile
 *       Arn: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *     },
 *     ImageId: "STRING_VALUE", // required
 *     InstanceType: "STRING_VALUE",
 *     KernelId: "STRING_VALUE",
 *     KeyName: "STRING_VALUE",
 *     Monitoring: { // ScheduledInstancesMonitoring
 *       Enabled: true || false,
 *     },
 *     NetworkInterfaces: [ // ScheduledInstancesNetworkInterfaceSet
 *       { // ScheduledInstancesNetworkInterface
 *         AssociatePublicIpAddress: true || false,
 *         DeleteOnTermination: true || false,
 *         Description: "STRING_VALUE",
 *         DeviceIndex: Number("int"),
 *         Groups: [ // ScheduledInstancesSecurityGroupIdSet
 *           "STRING_VALUE",
 *         ],
 *         Ipv6AddressCount: Number("int"),
 *         Ipv6Addresses: [ // ScheduledInstancesIpv6AddressList
 *           { // ScheduledInstancesIpv6Address
 *             Ipv6Address: "STRING_VALUE",
 *           },
 *         ],
 *         NetworkInterfaceId: "STRING_VALUE",
 *         PrivateIpAddress: "STRING_VALUE",
 *         PrivateIpAddressConfigs: [ // PrivateIpAddressConfigSet
 *           { // ScheduledInstancesPrivateIpAddressConfig
 *             Primary: true || false,
 *             PrivateIpAddress: "STRING_VALUE",
 *           },
 *         ],
 *         SecondaryPrivateIpAddressCount: Number("int"),
 *         SubnetId: "STRING_VALUE",
 *       },
 *     ],
 *     Placement: { // ScheduledInstancesPlacement
 *       AvailabilityZone: "STRING_VALUE",
 *       GroupName: "STRING_VALUE",
 *     },
 *     RamdiskId: "STRING_VALUE",
 *     SecurityGroupIds: [
 *       "STRING_VALUE",
 *     ],
 *     SubnetId: "STRING_VALUE",
 *     UserData: "STRING_VALUE",
 *   },
 *   ScheduledInstanceId: "STRING_VALUE", // required
 * };
 * const command = new RunScheduledInstancesCommand(input);
 * const response = await client.send(command);
 * // { // RunScheduledInstancesResult
 * //   InstanceIdSet: [ // InstanceIdSet
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param RunScheduledInstancesCommandInput - {@link RunScheduledInstancesCommandInput}
 * @returns {@link RunScheduledInstancesCommandOutput}
 * @see {@link RunScheduledInstancesCommandInput} for command's `input` shape.
 * @see {@link RunScheduledInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class RunScheduledInstancesCommand extends $Command<
  RunScheduledInstancesCommandInput,
  RunScheduledInstancesCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: RunScheduledInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RunScheduledInstancesCommandInput, RunScheduledInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RunScheduledInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RunScheduledInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RunScheduledInstancesRequestFilterSensitiveLog,
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
  private serialize(input: RunScheduledInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RunScheduledInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RunScheduledInstancesCommandOutput> {
    return de_RunScheduledInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
