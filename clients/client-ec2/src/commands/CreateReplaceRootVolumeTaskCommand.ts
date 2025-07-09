// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateReplaceRootVolumeTaskRequest, CreateReplaceRootVolumeTaskResult } from "../models/models_2";
import { de_CreateReplaceRootVolumeTaskCommand, se_CreateReplaceRootVolumeTaskCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateReplaceRootVolumeTaskCommand}.
 */
export interface CreateReplaceRootVolumeTaskCommandInput extends CreateReplaceRootVolumeTaskRequest {}
/**
 * @public
 *
 * The output of {@link CreateReplaceRootVolumeTaskCommand}.
 */
export interface CreateReplaceRootVolumeTaskCommandOutput extends CreateReplaceRootVolumeTaskResult, __MetadataBearer {}

/**
 * <p>Replaces the EBS-backed root volume for a <code>running</code> instance with a new
 *       volume that is restored to the original root volume's launch state, that is restored to a
 *       specific snapshot taken from the original root volume, or that is restored from an AMI
 *       that has the same key characteristics as that of the instance.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/replace-root.html">Replace a root volume</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateReplaceRootVolumeTaskCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateReplaceRootVolumeTaskCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateReplaceRootVolumeTaskRequest
 *   InstanceId: "STRING_VALUE", // required
 *   SnapshotId: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 *   TagSpecifications: [ // TagSpecificationList
 *     { // TagSpecification
 *       ResourceType: "capacity-reservation" || "client-vpn-endpoint" || "customer-gateway" || "carrier-gateway" || "coip-pool" || "declarative-policies-report" || "dedicated-host" || "dhcp-options" || "egress-only-internet-gateway" || "elastic-ip" || "elastic-gpu" || "export-image-task" || "export-instance-task" || "fleet" || "fpga-image" || "host-reservation" || "image" || "import-image-task" || "import-snapshot-task" || "instance" || "instance-event-window" || "internet-gateway" || "ipam" || "ipam-pool" || "ipam-scope" || "ipv4pool-ec2" || "ipv6pool-ec2" || "key-pair" || "launch-template" || "local-gateway" || "local-gateway-route-table" || "local-gateway-virtual-interface" || "local-gateway-virtual-interface-group" || "local-gateway-route-table-vpc-association" || "local-gateway-route-table-virtual-interface-group-association" || "natgateway" || "network-acl" || "network-interface" || "network-insights-analysis" || "network-insights-path" || "network-insights-access-scope" || "network-insights-access-scope-analysis" || "outpost-lag" || "placement-group" || "prefix-list" || "replace-root-volume-task" || "reserved-instances" || "route-table" || "security-group" || "security-group-rule" || "service-link-virtual-interface" || "snapshot" || "spot-fleet-request" || "spot-instances-request" || "subnet" || "subnet-cidr-reservation" || "traffic-mirror-filter" || "traffic-mirror-session" || "traffic-mirror-target" || "transit-gateway" || "transit-gateway-attachment" || "transit-gateway-connect-peer" || "transit-gateway-multicast-domain" || "transit-gateway-policy-table" || "transit-gateway-route-table" || "transit-gateway-route-table-announcement" || "volume" || "vpc" || "vpc-endpoint" || "vpc-endpoint-connection" || "vpc-endpoint-service" || "vpc-endpoint-service-permission" || "vpc-peering-connection" || "vpn-connection" || "vpn-gateway" || "vpc-flow-log" || "capacity-reservation-fleet" || "traffic-mirror-filter-rule" || "vpc-endpoint-connection-device-type" || "verified-access-instance" || "verified-access-group" || "verified-access-endpoint" || "verified-access-policy" || "verified-access-trust-provider" || "vpn-connection-device-type" || "vpc-block-public-access-exclusion" || "route-server" || "route-server-endpoint" || "route-server-peer" || "ipam-resource-discovery" || "ipam-resource-discovery-association" || "instance-connect-endpoint" || "verified-access-endpoint-target" || "ipam-external-resource-verification-token" || "capacity-block" || "mac-modification-task",
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   ImageId: "STRING_VALUE",
 *   DeleteReplacedRootVolume: true || false,
 *   VolumeInitializationRate: Number("long"),
 * };
 * const command = new CreateReplaceRootVolumeTaskCommand(input);
 * const response = await client.send(command);
 * // { // CreateReplaceRootVolumeTaskResult
 * //   ReplaceRootVolumeTask: { // ReplaceRootVolumeTask
 * //     ReplaceRootVolumeTaskId: "STRING_VALUE",
 * //     InstanceId: "STRING_VALUE",
 * //     TaskState: "pending" || "in-progress" || "failing" || "succeeded" || "failed" || "failed-detached",
 * //     StartTime: "STRING_VALUE",
 * //     CompleteTime: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ImageId: "STRING_VALUE",
 * //     SnapshotId: "STRING_VALUE",
 * //     DeleteReplacedRootVolume: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateReplaceRootVolumeTaskCommandInput - {@link CreateReplaceRootVolumeTaskCommandInput}
 * @returns {@link CreateReplaceRootVolumeTaskCommandOutput}
 * @see {@link CreateReplaceRootVolumeTaskCommandInput} for command's `input` shape.
 * @see {@link CreateReplaceRootVolumeTaskCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateReplaceRootVolumeTaskCommand extends $Command
  .classBuilder<
    CreateReplaceRootVolumeTaskCommandInput,
    CreateReplaceRootVolumeTaskCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "CreateReplaceRootVolumeTask", {})
  .n("EC2Client", "CreateReplaceRootVolumeTaskCommand")
  .f(void 0, void 0)
  .ser(se_CreateReplaceRootVolumeTaskCommand)
  .de(de_CreateReplaceRootVolumeTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateReplaceRootVolumeTaskRequest;
      output: CreateReplaceRootVolumeTaskResult;
    };
    sdk: {
      input: CreateReplaceRootVolumeTaskCommandInput;
      output: CreateReplaceRootVolumeTaskCommandOutput;
    };
  };
}
