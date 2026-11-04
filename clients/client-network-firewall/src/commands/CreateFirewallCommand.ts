// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateFirewallRequest, CreateFirewallResponse } from "../models/models_0";
import { CreateFirewall$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateFirewallCommand}.
 */
export interface CreateFirewallCommandInput extends CreateFirewallRequest {}
/**
 * @public
 *
 * The output of {@link CreateFirewallCommand}.
 */
export interface CreateFirewallCommandOutput extends CreateFirewallResponse, __MetadataBearer {}

/**
 * Creates an Network Firewall Firewall and accompanying FirewallStatus for a VPC.
 *
 * The firewall defines the configuration settings for an Network Firewall firewall. The settings that you can define at creation include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall Amazon Web Services resource.
 *
 * After you create a firewall, you can provide additional settings, like the logging configuration.
 *
 * To update the settings for a firewall, you use the operations that apply to the settings themselves, for example UpdateLoggingConfiguration, AssociateSubnets, and UpdateFirewallDeleteProtection.
 *
 * To manage a firewall's tags, use the standard Amazon Web Services resource tagging operations, ListTagsForResource, TagResource, and UntagResource.
 *
 * To retrieve information about firewalls, use ListFirewalls and DescribeFirewall.
 *
 * To generate a report on the last 30 days of traffic monitored by a firewall, use StartAnalysisReport.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, CreateFirewallCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, CreateFirewallCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // CreateFirewallRequest
 *   FirewallName: "STRING_VALUE", // required
 *   FirewallPolicyArn: "STRING_VALUE", // required
 *   VpcId: "STRING_VALUE",
 *   SubnetMappings: [ // SubnetMappings
 *     { // SubnetMapping
 *       SubnetId: "STRING_VALUE", // required
 *       IPAddressType: "DUALSTACK" || "IPV4" || "IPV6",
 *     },
 *   ],
 *   DeleteProtection: true || false,
 *   SubnetChangeProtection: true || false,
 *   FirewallPolicyChangeProtection: true || false,
 *   Description: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   EncryptionConfiguration: { // EncryptionConfiguration
 *     KeyId: "STRING_VALUE",
 *     Type: "CUSTOMER_KMS" || "AWS_OWNED_KMS_KEY", // required
 *   },
 *   EnabledAnalysisTypes: [ // EnabledAnalysisTypes
 *     "TLS_SNI" || "HTTP_HOST",
 *   ],
 *   TransitGatewayId: "STRING_VALUE",
 *   AvailabilityZoneMappings: [ // AvailabilityZoneMappings
 *     { // AvailabilityZoneMapping
 *       AvailabilityZone: "STRING_VALUE", // required
 *     },
 *   ],
 *   AvailabilityZoneChangeProtection: true || false,
 *   NatGatewayMappings: [ // NatGatewayMappingsList
 *     { // NatGatewayMapping
 *       NatGatewayId: "STRING_VALUE", // required
 *     },
 *   ],
 *   ProxySettings: { // ProxySettings
 *     ListenerProperties: [ // ListenerProperties // required
 *       { // ListenerProperty
 *         Port: Number("int"),
 *         Type: "HTTP" || "HTTPS",
 *       },
 *     ],
 *   },
 *   NoSourcePreservation: true || false,
 *   VpcEndpoint: { // VpcEndpoint
 *     VpcId: "STRING_VALUE", // required
 *     SubnetMappings: [ // required
 *       {
 *         SubnetId: "STRING_VALUE", // required
 *         IPAddressType: "DUALSTACK" || "IPV4" || "IPV6",
 *       },
 *     ],
 *   },
 * };
 * const command = new CreateFirewallCommand(input);
 * const response = await client.send(command);
 * // { // CreateFirewallResponse
 * //   Firewall: { // Firewall
 * //     FirewallName: "STRING_VALUE",
 * //     FirewallArn: "STRING_VALUE",
 * //     FirewallPolicyArn: "STRING_VALUE", // required
 * //     VpcId: "STRING_VALUE", // required
 * //     SubnetMappings: [ // SubnetMappings // required
 * //       { // SubnetMapping
 * //         SubnetId: "STRING_VALUE", // required
 * //         IPAddressType: "DUALSTACK" || "IPV4" || "IPV6",
 * //       },
 * //     ],
 * //     DeleteProtection: true || false,
 * //     SubnetChangeProtection: true || false,
 * //     FirewallPolicyChangeProtection: true || false,
 * //     Description: "STRING_VALUE",
 * //     FirewallId: "STRING_VALUE", // required
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     EncryptionConfiguration: { // EncryptionConfiguration
 * //       KeyId: "STRING_VALUE",
 * //       Type: "CUSTOMER_KMS" || "AWS_OWNED_KMS_KEY", // required
 * //     },
 * //     NumberOfAssociations: Number("int"),
 * //     EnabledAnalysisTypes: [ // EnabledAnalysisTypes
 * //       "TLS_SNI" || "HTTP_HOST",
 * //     ],
 * //     TransitGatewayId: "STRING_VALUE",
 * //     TransitGatewayOwnerAccountId: "STRING_VALUE",
 * //     AvailabilityZoneMappings: [ // AvailabilityZoneMappings
 * //       { // AvailabilityZoneMapping
 * //         AvailabilityZone: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     AvailabilityZoneChangeProtection: true || false,
 * //     NatGatewayMappings: [ // NatGatewayMappingsList
 * //       { // NatGatewayMapping
 * //         NatGatewayId: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     ProxySettings: { // ProxySettings
 * //       ListenerProperties: [ // ListenerProperties // required
 * //         { // ListenerProperty
 * //           Port: Number("int"),
 * //           Type: "HTTP" || "HTTPS",
 * //         },
 * //       ],
 * //     },
 * //     NoSourcePreservation: true || false,
 * //     VpcEndpoint: { // VpcEndpoint
 * //       VpcId: "STRING_VALUE", // required
 * //       SubnetMappings: [ // required
 * //         {
 * //           SubnetId: "STRING_VALUE", // required
 * //           IPAddressType: "DUALSTACK" || "IPV4" || "IPV6",
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   FirewallStatus: { // FirewallStatus
 * //     Status: "PROVISIONING" || "DELETING" || "READY" || "FAILED", // required
 * //     ConfigurationSyncStateSummary: "PENDING" || "IN_SYNC" || "CAPACITY_CONSTRAINED", // required
 * //     SyncStates: { // SyncStates
 * //       "<keys>": { // SyncState
 * //         Attachment: { // Attachment
 * //           SubnetId: "STRING_VALUE",
 * //           EndpointId: "STRING_VALUE",
 * //           Status: "CREATING" || "DELETING" || "FAILED" || "ERROR" || "SCALING" || "READY",
 * //           StatusMessage: "STRING_VALUE",
 * //           DnsName: "STRING_VALUE",
 * //         },
 * //         Config: { // SyncStateConfig
 * //           "<keys>": { // PerObjectStatus
 * //             SyncStatus: "PENDING" || "IN_SYNC" || "CAPACITY_CONSTRAINED" || "NOT_SUBSCRIBED" || "DEPRECATED",
 * //             UpdateToken: "STRING_VALUE",
 * //           },
 * //         },
 * //         NatGatewayAttachments: [ // NatGatewayAttachmentsList
 * //           { // NatGatewayAttachment
 * //             NatGatewayId: "STRING_VALUE", // required
 * //             Status: "CREATING" || "READY" || "UPDATING" || "FAILED" || "DELETING", // required
 * //             StatusMessage: "STRING_VALUE",
 * //             DnsName: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     CapacityUsageSummary: { // CapacityUsageSummary
 * //       CIDRs: { // CIDRSummary
 * //         AvailableCIDRCount: Number("int"),
 * //         UtilizedCIDRCount: Number("int"),
 * //         IPSetReferences: { // IPSetMetadataMap
 * //           "<keys>": { // IPSetMetadata
 * //             ResolvedCIDRCount: Number("int"),
 * //           },
 * //         },
 * //       },
 * //     },
 * //     TransitGatewayAttachmentSyncState: { // TransitGatewayAttachmentSyncState
 * //       AttachmentId: "STRING_VALUE",
 * //       TransitGatewayAttachmentStatus: "CREATING" || "DELETING" || "DELETED" || "FAILED" || "ERROR" || "READY" || "PENDING_ACCEPTANCE" || "REJECTING" || "REJECTED",
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateFirewallCommandInput - {@link CreateFirewallCommandInput}
 * @returns {@link CreateFirewallCommandOutput}
 * @see {@link CreateFirewallCommandInput} for command's `input` shape.
 * @see {@link CreateFirewallCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InsufficientCapacityException} (server fault)
 *
 * Amazon Web Services doesn't currently have enough available capacity to fulfill your request. Try your request later.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Your request is valid, but Network Firewall couldn't perform the operation because of a system problem. Retry your request.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *
 * The operation failed because it's not valid. For example, you might have tried to delete a rule group or firewall policy that's in use.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The operation failed because of a problem with your request. Examples include:
 *
 * - You specified an unsupported parameter name or value.
 * - You tried to update a property with a value that isn't among the available types.
 * - Your request references an ARN that is malformed, or corresponds to a resource that isn't valid in the context of the request.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * Unable to perform the operation because doing so would violate a limit setting.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Unable to process the request due to throttling limitations.
 *
 * @throws {@link NetworkFirewallServiceException}
 *
 * Base exception class for all service exceptions from NetworkFirewall service.
 *
 * @public
 */
export class CreateFirewallCommand extends command<CreateFirewallCommandInput, CreateFirewallCommandOutput>(
  _ep0,
  _mw0,
  "CreateFirewall",
  CreateFirewall$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFirewallRequest;
      output: CreateFirewallResponse;
    };
    sdk: {
      input: CreateFirewallCommandInput;
      output: CreateFirewallCommandOutput;
    };
  };
}
