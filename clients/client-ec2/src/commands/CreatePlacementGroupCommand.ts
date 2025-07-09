// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePlacementGroupRequest, CreatePlacementGroupResult } from "../models/models_2";
import { de_CreatePlacementGroupCommand, se_CreatePlacementGroupCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePlacementGroupCommand}.
 */
export interface CreatePlacementGroupCommandInput extends CreatePlacementGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreatePlacementGroupCommand}.
 */
export interface CreatePlacementGroupCommandOutput extends CreatePlacementGroupResult, __MetadataBearer {}

/**
 * <p>Creates a placement group in which to launch instances. The strategy of the placement
 *             group determines how the instances are organized within the group. </p>
 *          <p>A <code>cluster</code> placement group is a logical grouping of instances within a
 *             single Availability Zone that benefit from low network latency, high network throughput.
 *             A <code>spread</code> placement group places instances on distinct hardware. A
 *                 <code>partition</code> placement group places groups of instances in different
 *             partitions, where instances in one partition do not share the same hardware with
 *             instances in another partition.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreatePlacementGroupCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreatePlacementGroupCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreatePlacementGroupRequest
 *   PartitionCount: Number("int"),
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
 *   SpreadLevel: "host" || "rack",
 *   DryRun: true || false,
 *   GroupName: "STRING_VALUE",
 *   Strategy: "cluster" || "spread" || "partition",
 * };
 * const command = new CreatePlacementGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreatePlacementGroupResult
 * //   PlacementGroup: { // PlacementGroup
 * //     GroupName: "STRING_VALUE",
 * //     State: "pending" || "available" || "deleting" || "deleted",
 * //     Strategy: "cluster" || "spread" || "partition",
 * //     PartitionCount: Number("int"),
 * //     GroupId: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     GroupArn: "STRING_VALUE",
 * //     SpreadLevel: "host" || "rack",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreatePlacementGroupCommandInput - {@link CreatePlacementGroupCommandInput}
 * @returns {@link CreatePlacementGroupCommandOutput}
 * @see {@link CreatePlacementGroupCommandInput} for command's `input` shape.
 * @see {@link CreatePlacementGroupCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To create a placement group
 * ```javascript
 * // This example creates a placement group with the specified name.
 * const input = {
 *   GroupName: "my-cluster",
 *   Strategy: "cluster"
 * };
 * const command = new CreatePlacementGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CreatePlacementGroupCommand extends $Command
  .classBuilder<
    CreatePlacementGroupCommandInput,
    CreatePlacementGroupCommandOutput,
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
  .s("AmazonEC2", "CreatePlacementGroup", {})
  .n("EC2Client", "CreatePlacementGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreatePlacementGroupCommand)
  .de(de_CreatePlacementGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePlacementGroupRequest;
      output: CreatePlacementGroupResult;
    };
    sdk: {
      input: CreatePlacementGroupCommandInput;
      output: CreatePlacementGroupCommandOutput;
    };
  };
}
