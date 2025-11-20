// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateDelegateMacVolumeOwnershipTaskRequest,
  CreateDelegateMacVolumeOwnershipTaskResult,
} from "../models/models_0";
import { CreateDelegateMacVolumeOwnershipTask } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDelegateMacVolumeOwnershipTaskCommand}.
 */
export interface CreateDelegateMacVolumeOwnershipTaskCommandInput extends CreateDelegateMacVolumeOwnershipTaskRequest {}
/**
 * @public
 *
 * The output of {@link CreateDelegateMacVolumeOwnershipTaskCommand}.
 */
export interface CreateDelegateMacVolumeOwnershipTaskCommandOutput
  extends CreateDelegateMacVolumeOwnershipTaskResult,
    __MetadataBearer {}

/**
 * <p>Delegates ownership of the Amazon EBS root volume for an Apple silicon
 *          Mac instance to an administrative user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateDelegateMacVolumeOwnershipTaskCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateDelegateMacVolumeOwnershipTaskCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CreateDelegateMacVolumeOwnershipTaskRequest
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 *   InstanceId: "STRING_VALUE", // required
 *   MacCredentials: "STRING_VALUE", // required
 *   TagSpecifications: [ // TagSpecificationList
 *     { // TagSpecification
 *       ResourceType: "capacity-reservation" || "client-vpn-endpoint" || "customer-gateway" || "carrier-gateway" || "coip-pool" || "declarative-policies-report" || "dedicated-host" || "dhcp-options" || "egress-only-internet-gateway" || "elastic-ip" || "elastic-gpu" || "export-image-task" || "export-instance-task" || "fleet" || "fpga-image" || "host-reservation" || "image" || "image-usage-report" || "import-image-task" || "import-snapshot-task" || "instance" || "instance-event-window" || "internet-gateway" || "ipam" || "ipam-pool" || "ipam-scope" || "ipv4pool-ec2" || "ipv6pool-ec2" || "key-pair" || "launch-template" || "local-gateway" || "local-gateway-route-table" || "local-gateway-virtual-interface" || "local-gateway-virtual-interface-group" || "local-gateway-route-table-vpc-association" || "local-gateway-route-table-virtual-interface-group-association" || "natgateway" || "network-acl" || "network-interface" || "network-insights-analysis" || "network-insights-path" || "network-insights-access-scope" || "network-insights-access-scope-analysis" || "outpost-lag" || "placement-group" || "prefix-list" || "replace-root-volume-task" || "reserved-instances" || "route-table" || "security-group" || "security-group-rule" || "service-link-virtual-interface" || "snapshot" || "spot-fleet-request" || "spot-instances-request" || "subnet" || "subnet-cidr-reservation" || "traffic-mirror-filter" || "traffic-mirror-session" || "traffic-mirror-target" || "transit-gateway" || "transit-gateway-attachment" || "transit-gateway-connect-peer" || "transit-gateway-multicast-domain" || "transit-gateway-policy-table" || "transit-gateway-metering-policy" || "transit-gateway-route-table" || "transit-gateway-route-table-announcement" || "volume" || "vpc" || "vpc-endpoint" || "vpc-endpoint-connection" || "vpc-endpoint-service" || "vpc-endpoint-service-permission" || "vpc-peering-connection" || "vpn-connection" || "vpn-gateway" || "vpc-flow-log" || "capacity-reservation-fleet" || "traffic-mirror-filter-rule" || "vpc-endpoint-connection-device-type" || "verified-access-instance" || "verified-access-group" || "verified-access-endpoint" || "verified-access-policy" || "verified-access-trust-provider" || "vpn-connection-device-type" || "vpc-block-public-access-exclusion" || "vpc-encryption-control" || "route-server" || "route-server-endpoint" || "route-server-peer" || "ipam-resource-discovery" || "ipam-resource-discovery-association" || "instance-connect-endpoint" || "verified-access-endpoint-target" || "ipam-external-resource-verification-token" || "capacity-block" || "mac-modification-task" || "ipam-prefix-list-resolver" || "ipam-policy" || "ipam-prefix-list-resolver-target" || "capacity-manager-data-export" || "vpn-concentrator",
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new CreateDelegateMacVolumeOwnershipTaskCommand(input);
 * const response = await client.send(command);
 * // { // CreateDelegateMacVolumeOwnershipTaskResult
 * //   MacModificationTask: { // MacModificationTask
 * //     InstanceId: "STRING_VALUE",
 * //     MacModificationTaskId: "STRING_VALUE",
 * //     MacSystemIntegrityProtectionConfig: { // MacSystemIntegrityProtectionConfiguration
 * //       AppleInternal: "enabled" || "disabled",
 * //       BaseSystem: "enabled" || "disabled",
 * //       DebuggingRestrictions: "enabled" || "disabled",
 * //       DTraceRestrictions: "enabled" || "disabled",
 * //       FilesystemProtections: "enabled" || "disabled",
 * //       KextSigning: "enabled" || "disabled",
 * //       NvramProtections: "enabled" || "disabled",
 * //       Status: "enabled" || "disabled",
 * //     },
 * //     StartTime: new Date("TIMESTAMP"),
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     TaskState: "successful" || "failed" || "in-progress" || "pending",
 * //     TaskType: "sip-modification" || "volume-ownership-delegation",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDelegateMacVolumeOwnershipTaskCommandInput - {@link CreateDelegateMacVolumeOwnershipTaskCommandInput}
 * @returns {@link CreateDelegateMacVolumeOwnershipTaskCommandOutput}
 * @see {@link CreateDelegateMacVolumeOwnershipTaskCommandInput} for command's `input` shape.
 * @see {@link CreateDelegateMacVolumeOwnershipTaskCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateDelegateMacVolumeOwnershipTaskCommand extends $Command
  .classBuilder<
    CreateDelegateMacVolumeOwnershipTaskCommandInput,
    CreateDelegateMacVolumeOwnershipTaskCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "CreateDelegateMacVolumeOwnershipTask", {})
  .n("EC2Client", "CreateDelegateMacVolumeOwnershipTaskCommand")
  .sc(CreateDelegateMacVolumeOwnershipTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDelegateMacVolumeOwnershipTaskRequest;
      output: CreateDelegateMacVolumeOwnershipTaskResult;
    };
    sdk: {
      input: CreateDelegateMacVolumeOwnershipTaskCommandInput;
      output: CreateDelegateMacVolumeOwnershipTaskCommandOutput;
    };
  };
}
