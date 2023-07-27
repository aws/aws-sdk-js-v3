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
import { CreateSnapshotRequest, Snapshot } from "../models/models_2";
import { de_CreateSnapshotCommand, se_CreateSnapshotCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSnapshotCommand}.
 */
export interface CreateSnapshotCommandInput extends CreateSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link CreateSnapshotCommand}.
 */
export interface CreateSnapshotCommandOutput extends Snapshot, __MetadataBearer {}

/**
 * @public
 * <p>Creates a snapshot of an EBS volume and stores it in Amazon S3. You can use snapshots for
 *   	backups, to make copies of EBS volumes, and to save data before shutting down an
 *   	instance.</p>
 *          <p>You can create snapshots of volumes in a Region and volumes on an Outpost. If you
 *     	create a snapshot of a volume in a Region, the snapshot must be stored in the same
 *     	Region as the volume. If you create a snapshot of a volume on an Outpost, the snapshot
 *     	can be stored on the same Outpost as the volume, or in the Region for that Outpost.</p>
 *          <p>When a snapshot is created, any Amazon Web Services Marketplace product codes that are associated with the
 *       source volume are propagated to the snapshot.</p>
 *          <p>You can take a snapshot of an attached volume that is in use. However, snapshots only
 *       capture data that has been written to your Amazon EBS volume at the time the snapshot command is
 *       issued; this might exclude any data that has been cached by any applications or the operating
 *       system. If you can pause any file systems on the volume long enough to take a snapshot, your
 *       snapshot should be complete. However, if you cannot pause all file writes to the volume, you
 *       should unmount the volume from within the instance, issue the snapshot command, and then
 *       remount the volume to ensure a consistent and complete snapshot. You may remount and use your
 *       volume while the snapshot status is <code>pending</code>.</p>
 *          <p>When you create a snapshot for an EBS volume that serves as a root device, we recommend
 *       that you stop the instance before taking the snapshot.</p>
 *          <p>Snapshots that are taken from encrypted volumes are automatically encrypted. Volumes that
 *       are created from encrypted snapshots are also automatically encrypted. Your encrypted volumes
 *       and any associated snapshots always remain protected.</p>
 *          <p>You can tag your snapshots during creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tag your Amazon EC2
 *         resources</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html">Amazon Elastic Block Store</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateSnapshotCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateSnapshotCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateSnapshotRequest
 *   Description: "STRING_VALUE",
 *   OutpostArn: "STRING_VALUE",
 *   VolumeId: "STRING_VALUE", // required
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
 *   DryRun: true || false,
 * };
 * const command = new CreateSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // Snapshot
 * //   DataEncryptionKeyId: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Encrypted: true || false,
 * //   KmsKeyId: "STRING_VALUE",
 * //   OwnerId: "STRING_VALUE",
 * //   Progress: "STRING_VALUE",
 * //   SnapshotId: "STRING_VALUE",
 * //   StartTime: new Date("TIMESTAMP"),
 * //   State: "pending" || "completed" || "error" || "recoverable" || "recovering",
 * //   StateMessage: "STRING_VALUE",
 * //   VolumeId: "STRING_VALUE",
 * //   VolumeSize: Number("int"),
 * //   OwnerAlias: "STRING_VALUE",
 * //   OutpostArn: "STRING_VALUE",
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   StorageTier: "archive" || "standard",
 * //   RestoreExpiryTime: new Date("TIMESTAMP"),
 * //   SseType: "sse-ebs" || "sse-kms" || "none",
 * // };
 *
 * ```
 *
 * @param CreateSnapshotCommandInput - {@link CreateSnapshotCommandInput}
 * @returns {@link CreateSnapshotCommandOutput}
 * @see {@link CreateSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To create a snapshot
 * ```javascript
 * // This example creates a snapshot of the volume with a volume ID of ``vol-1234567890abcdef0`` and a short description to identify the snapshot.
 * const input = {
 *   "Description": "This is my root volume snapshot.",
 *   "VolumeId": "vol-1234567890abcdef0"
 * };
 * const command = new CreateSnapshotCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Description": "This is my root volume snapshot.",
 *   "OwnerId": "012345678910",
 *   "SnapshotId": "snap-066877671789bd71b",
 *   "StartTime": "2014-02-28T21:06:01.000Z",
 *   "State": "pending",
 *   "Tags": [],
 *   "VolumeId": "vol-1234567890abcdef0",
 *   "VolumeSize": 8
 * }
 * *\/
 * // example id: to-create-a-snapshot-1472502529790
 * ```
 *
 */
export class CreateSnapshotCommand extends $Command<
  CreateSnapshotCommandInput,
  CreateSnapshotCommandOutput,
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
  constructor(readonly input: CreateSnapshotCommandInput) {
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
  ): Handler<CreateSnapshotCommandInput, CreateSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateSnapshotCommand";
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
  private serialize(input: CreateSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateSnapshotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSnapshotCommandOutput> {
    return de_CreateSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
