// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateWorkspaceInstanceRequest,
  CreateWorkspaceInstanceRequestFilterSensitiveLog,
  CreateWorkspaceInstanceResponse,
} from "../models/models_0";
import { de_CreateWorkspaceInstanceCommand, se_CreateWorkspaceInstanceCommand } from "../protocols/Aws_json1_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkspacesInstancesClientResolvedConfig,
} from "../WorkspacesInstancesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWorkspaceInstanceCommand}.
 */
export interface CreateWorkspaceInstanceCommandInput extends CreateWorkspaceInstanceRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkspaceInstanceCommand}.
 */
export interface CreateWorkspaceInstanceCommandOutput extends CreateWorkspaceInstanceResponse, __MetadataBearer {}

/**
 * <p>Launches a new WorkSpace Instance with specified configuration parameters, enabling programmatic workspace deployment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkspacesInstancesClient, CreateWorkspaceInstanceCommand } from "@aws-sdk/client-workspaces-instances"; // ES Modules import
 * // const { WorkspacesInstancesClient, CreateWorkspaceInstanceCommand } = require("@aws-sdk/client-workspaces-instances"); // CommonJS import
 * const client = new WorkspacesInstancesClient(config);
 * const input = { // CreateWorkspaceInstanceRequest
 *   ClientToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   ManagedInstance: { // ManagedInstanceRequest
 *     BlockDeviceMappings: [ // BlockDeviceMappings
 *       { // BlockDeviceMappingRequest
 *         DeviceName: "STRING_VALUE",
 *         Ebs: { // EbsBlockDevice
 *           VolumeType: "standard" || "io1" || "io2" || "gp2" || "sc1" || "st1" || "gp3",
 *           Encrypted: true || false,
 *           KmsKeyId: "STRING_VALUE",
 *           Iops: Number("int"),
 *           Throughput: Number("int"),
 *           VolumeSize: Number("int"),
 *         },
 *         NoDevice: "STRING_VALUE",
 *         VirtualName: "STRING_VALUE",
 *       },
 *     ],
 *     CapacityReservationSpecification: { // CapacityReservationSpecification
 *       CapacityReservationPreference: "capacity-reservations-only" || "open" || "none",
 *       CapacityReservationTarget: { // CapacityReservationTarget
 *         CapacityReservationId: "STRING_VALUE",
 *         CapacityReservationResourceGroupArn: "STRING_VALUE",
 *       },
 *     },
 *     CpuOptions: { // CpuOptionsRequest
 *       AmdSevSnp: "enabled" || "disabled",
 *       CoreCount: Number("int"),
 *       ThreadsPerCore: Number("int"),
 *     },
 *     CreditSpecification: { // CreditSpecificationRequest
 *       CpuCredits: "standard" || "unlimited",
 *     },
 *     DisableApiStop: true || false,
 *     EbsOptimized: true || false,
 *     EnablePrimaryIpv6: true || false,
 *     EnclaveOptions: { // EnclaveOptionsRequest
 *       Enabled: true || false,
 *     },
 *     HibernationOptions: { // HibernationOptionsRequest
 *       Configured: true || false,
 *     },
 *     IamInstanceProfile: { // IamInstanceProfileSpecification
 *       Arn: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *     },
 *     ImageId: "STRING_VALUE",
 *     InstanceMarketOptions: { // InstanceMarketOptionsRequest
 *       MarketType: "spot" || "capacity-block",
 *       SpotOptions: { // SpotMarketOptions
 *         BlockDurationMinutes: Number("int"),
 *         InstanceInterruptionBehavior: "hibernate" || "stop",
 *         MaxPrice: "STRING_VALUE",
 *         SpotInstanceType: "one-time" || "persistent",
 *         ValidUntilUtc: new Date("TIMESTAMP"),
 *       },
 *     },
 *     InstanceType: "STRING_VALUE",
 *     Ipv6Addresses: [ // Ipv6Addresses
 *       { // InstanceIpv6Address
 *         Ipv6Address: "STRING_VALUE",
 *         IsPrimaryIpv6: true || false,
 *       },
 *     ],
 *     Ipv6AddressCount: Number("int"),
 *     KernelId: "STRING_VALUE",
 *     KeyName: "STRING_VALUE",
 *     LicenseSpecifications: [ // LicenseSpecifications
 *       { // LicenseConfigurationRequest
 *         LicenseConfigurationArn: "STRING_VALUE",
 *       },
 *     ],
 *     MaintenanceOptions: { // InstanceMaintenanceOptionsRequest
 *       AutoRecovery: "disabled" || "default",
 *     },
 *     MetadataOptions: { // InstanceMetadataOptionsRequest
 *       HttpEndpoint: "enabled" || "disabled",
 *       HttpProtocolIpv6: "enabled" || "disabled",
 *       HttpPutResponseHopLimit: Number("int"),
 *       HttpTokens: "optional" || "required",
 *       InstanceMetadataTags: "enabled" || "disabled",
 *     },
 *     Monitoring: { // RunInstancesMonitoringEnabled
 *       Enabled: true || false,
 *     },
 *     NetworkInterfaces: [ // NetworkInterfaces
 *       { // InstanceNetworkInterfaceSpecification
 *         AssociateCarrierIpAddress: true || false,
 *         AssociatePublicIpAddress: true || false,
 *         ConnectionTrackingSpecification: { // ConnectionTrackingSpecificationRequest
 *           TcpEstablishedTimeout: Number("int"),
 *           UdpStreamTimeout: Number("int"),
 *           UdpTimeout: Number("int"),
 *         },
 *         Description: "STRING_VALUE",
 *         DeviceIndex: Number("int"),
 *         EnaSrdSpecification: { // EnaSrdSpecificationRequest
 *           EnaSrdEnabled: true || false,
 *           EnaSrdUdpSpecification: { // EnaSrdUdpSpecificationRequest
 *             EnaSrdUdpEnabled: true || false,
 *           },
 *         },
 *         InterfaceType: "interface" || "efa" || "efa-only",
 *         Ipv4Prefixes: [ // Ipv4Prefixes
 *           { // Ipv4PrefixSpecificationRequest
 *             Ipv4Prefix: "STRING_VALUE",
 *           },
 *         ],
 *         Ipv4PrefixCount: Number("int"),
 *         Ipv6AddressCount: Number("int"),
 *         Ipv6Addresses: [
 *           {
 *             Ipv6Address: "STRING_VALUE",
 *             IsPrimaryIpv6: true || false,
 *           },
 *         ],
 *         Ipv6Prefixes: [ // Ipv6Prefixes
 *           { // Ipv6PrefixSpecificationRequest
 *             Ipv6Prefix: "STRING_VALUE",
 *           },
 *         ],
 *         Ipv6PrefixCount: Number("int"),
 *         NetworkCardIndex: Number("int"),
 *         NetworkInterfaceId: "STRING_VALUE",
 *         PrimaryIpv6: true || false,
 *         PrivateIpAddress: "STRING_VALUE",
 *         PrivateIpAddresses: [ // PrivateIpAddresses
 *           { // PrivateIpAddressSpecification
 *             Primary: true || false,
 *             PrivateIpAddress: "STRING_VALUE",
 *           },
 *         ],
 *         SecondaryPrivateIpAddressCount: Number("int"),
 *         Groups: [ // SecurityGroupIds
 *           "STRING_VALUE",
 *         ],
 *         SubnetId: "STRING_VALUE",
 *       },
 *     ],
 *     NetworkPerformanceOptions: { // InstanceNetworkPerformanceOptionsRequest
 *       BandwidthWeighting: "default" || "vpc-1" || "ebs-1",
 *     },
 *     Placement: { // Placement
 *       Affinity: "STRING_VALUE",
 *       AvailabilityZone: "STRING_VALUE",
 *       GroupId: "STRING_VALUE",
 *       GroupName: "STRING_VALUE",
 *       HostId: "STRING_VALUE",
 *       HostResourceGroupArn: "STRING_VALUE",
 *       PartitionNumber: Number("int"),
 *       Tenancy: "default" || "dedicated" || "host",
 *     },
 *     PrivateDnsNameOptions: { // PrivateDnsNameOptionsRequest
 *       HostnameType: "ip-name" || "resource-name",
 *       EnableResourceNameDnsARecord: true || false,
 *       EnableResourceNameDnsAAAARecord: true || false,
 *     },
 *     PrivateIpAddress: "STRING_VALUE",
 *     RamdiskId: "STRING_VALUE",
 *     SecurityGroupIds: [
 *       "STRING_VALUE",
 *     ],
 *     SecurityGroups: [ // SecurityGroupNames
 *       "STRING_VALUE",
 *     ],
 *     SubnetId: "STRING_VALUE",
 *     TagSpecifications: [ // TagSpecifications
 *       { // TagSpecification
 *         ResourceType: "instance" || "volume" || "spot-instances-request" || "network-interface",
 *         Tags: [
 *           {
 *             Key: "STRING_VALUE",
 *             Value: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *     ],
 *     UserData: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateWorkspaceInstanceCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkspaceInstanceResponse
 * //   WorkspaceInstanceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateWorkspaceInstanceCommandInput - {@link CreateWorkspaceInstanceCommandInput}
 * @returns {@link CreateWorkspaceInstanceCommandOutput}
 * @see {@link CreateWorkspaceInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateWorkspaceInstanceCommandOutput} for command's `response` shape.
 * @see {@link WorkspacesInstancesClientResolvedConfig | config} for WorkspacesInstancesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Indicates insufficient permissions to perform the requested action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Signals a conflict with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates an unexpected server-side error occurred.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Indicates that a service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates the request rate has exceeded limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates invalid input parameters in the request.</p>
 *
 * @throws {@link WorkspacesInstancesServiceException}
 * <p>Base exception class for all service exceptions from WorkspacesInstances service.</p>
 *
 *
 * @public
 */
export class CreateWorkspaceInstanceCommand extends $Command
  .classBuilder<
    CreateWorkspaceInstanceCommandInput,
    CreateWorkspaceInstanceCommandOutput,
    WorkspacesInstancesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkspacesInstancesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("EUCMIFrontendAPIService", "CreateWorkspaceInstance", {})
  .n("WorkspacesInstancesClient", "CreateWorkspaceInstanceCommand")
  .f(CreateWorkspaceInstanceRequestFilterSensitiveLog, void 0)
  .ser(se_CreateWorkspaceInstanceCommand)
  .de(de_CreateWorkspaceInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWorkspaceInstanceRequest;
      output: CreateWorkspaceInstanceResponse;
    };
    sdk: {
      input: CreateWorkspaceInstanceCommandInput;
      output: CreateWorkspaceInstanceCommandOutput;
    };
  };
}
