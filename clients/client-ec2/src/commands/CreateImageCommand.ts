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
import { CreateImageRequest, CreateImageResult } from "../models/models_1";
import { de_CreateImageCommand, se_CreateImageCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateImageCommand}.
 */
export interface CreateImageCommandInput extends CreateImageRequest {}
/**
 * @public
 *
 * The output of {@link CreateImageCommand}.
 */
export interface CreateImageCommandOutput extends CreateImageResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates an Amazon EBS-backed AMI from an Amazon EBS-backed instance
 *      	that is either running or stopped.</p>
 *          <p>If you customized your instance with instance store volumes or Amazon EBS volumes in addition to the root device volume, the
 *      	new AMI contains block device mapping information for those volumes. When you launch an instance from this new AMI,
 *      	the instance automatically launches with those additional volumes.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami-ebs.html">Create an Amazon EBS-backed Linux
 *         AMI</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateImageRequest
 *   BlockDeviceMappings: [ // BlockDeviceMappingRequestList
 *     { // BlockDeviceMapping
 *       DeviceName: "STRING_VALUE",
 *       VirtualName: "STRING_VALUE",
 *       Ebs: { // EbsBlockDevice
 *         DeleteOnTermination: true || false,
 *         Iops: Number("int"),
 *         SnapshotId: "STRING_VALUE",
 *         VolumeSize: Number("int"),
 *         VolumeType: "standard" || "io1" || "io2" || "gp2" || "sc1" || "st1" || "gp3",
 *         KmsKeyId: "STRING_VALUE",
 *         Throughput: Number("int"),
 *         OutpostArn: "STRING_VALUE",
 *         Encrypted: true || false,
 *       },
 *       NoDevice: "STRING_VALUE",
 *     },
 *   ],
 *   Description: "STRING_VALUE",
 *   DryRun: true || false,
 *   InstanceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   NoReboot: true || false,
 *   TagSpecifications: [ // TagSpecificationList
 *     { // TagSpecification
 *       ResourceType: "capacity-reservation" || "client-vpn-endpoint" || "customer-gateway" || "carrier-gateway" || "coip-pool" || "dedicated-host" || "dhcp-options" || "egress-only-internet-gateway" || "elastic-ip" || "elastic-gpu" || "export-image-task" || "export-instance-task" || "fleet" || "fpga-image" || "host-reservation" || "image" || "import-image-task" || "import-snapshot-task" || "instance" || "instance-event-window" || "internet-gateway" || "ipam" || "ipam-pool" || "ipam-scope" || "ipv4pool-ec2" || "ipv6pool-ec2" || "key-pair" || "launch-template" || "local-gateway" || "local-gateway-route-table" || "local-gateway-virtual-interface" || "local-gateway-virtual-interface-group" || "local-gateway-route-table-vpc-association" || "local-gateway-route-table-virtual-interface-group-association" || "natgateway" || "network-acl" || "network-interface" || "network-insights-analysis" || "network-insights-path" || "network-insights-access-scope" || "network-insights-access-scope-analysis" || "placement-group" || "prefix-list" || "replace-root-volume-task" || "reserved-instances" || "route-table" || "security-group" || "security-group-rule" || "snapshot" || "spot-fleet-request" || "spot-instances-request" || "subnet" || "subnet-cidr-reservation" || "traffic-mirror-filter" || "traffic-mirror-session" || "traffic-mirror-target" || "transit-gateway" || "transit-gateway-attachment" || "transit-gateway-connect-peer" || "transit-gateway-multicast-domain" || "transit-gateway-policy-table" || "transit-gateway-route-table" || "transit-gateway-route-table-announcement" || "volume" || "vpc" || "vpc-endpoint" || "vpc-endpoint-connection" || "vpc-endpoint-service" || "vpc-endpoint-service-permission" || "vpc-peering-connection" || "vpn-connection" || "vpn-gateway" || "vpc-flow-log" || "capacity-reservation-fleet" || "traffic-mirror-filter-rule" || "vpc-endpoint-connection-device-type" || "verified-access-instance" || "verified-access-group" || "verified-access-endpoint" || "verified-access-policy" || "verified-access-trust-provider" || "vpn-connection-device-type" || "vpc-block-public-access-exclusion" || "ipam-resource-discovery" || "ipam-resource-discovery-association" || "instance-connect-endpoint",
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new CreateImageCommand(input);
 * const response = await client.send(command);
 * // { // CreateImageResult
 * //   ImageId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateImageCommandInput - {@link CreateImageCommandInput}
 * @returns {@link CreateImageCommandOutput}
 * @see {@link CreateImageCommandInput} for command's `input` shape.
 * @see {@link CreateImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To create an AMI from an Amazon EBS-backed instance
 * ```javascript
 * // This example creates an AMI from the specified instance and adds an EBS volume with the device name /dev/sdh and an instance store volume with the device name /dev/sdc.
 * const input = {
 *   "BlockDeviceMappings": [
 *     {
 *       "DeviceName": "/dev/sdh",
 *       "Ebs": {
 *         "VolumeSize": "100"
 *       }
 *     },
 *     {
 *       "DeviceName": "/dev/sdc",
 *       "VirtualName": "ephemeral1"
 *     }
 *   ],
 *   "Description": "An AMI for my server",
 *   "InstanceId": "i-1234567890abcdef0",
 *   "Name": "My server",
 *   "NoReboot": true
 * };
 * const command = new CreateImageCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ImageId": "ami-1a2b3c4d"
 * }
 * *\/
 * // example id: to-create-an-ami-from-an-amazon-ebs-backed-instance-1529023150636
 * ```
 *
 */
export class CreateImageCommand extends $Command<
  CreateImageCommandInput,
  CreateImageCommandOutput,
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
  constructor(readonly input: CreateImageCommandInput) {
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
  ): Handler<CreateImageCommandInput, CreateImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateImageCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateImageCommand";
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
  private serialize(input: CreateImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateImageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateImageCommandOutput> {
    return de_CreateImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
