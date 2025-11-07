// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFirewallRequest, DeleteFirewallResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { DeleteFirewall } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFirewallCommand}.
 */
export interface DeleteFirewallCommandInput extends DeleteFirewallRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFirewallCommand}.
 */
export interface DeleteFirewallCommandOutput extends DeleteFirewallResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified <a>Firewall</a> and its <a>FirewallStatus</a>.
 *        This operation requires the firewall's <code>DeleteProtection</code> flag to be
 *             <code>FALSE</code>. You can't revert this operation. </p>
 *          <p>You can check whether a firewall is
 *          in use by reviewing the route tables for the Availability Zones where you have
 *          firewall subnet mappings. Retrieve the subnet mappings by calling <a>DescribeFirewall</a>.
 *          You define and update the route tables through Amazon VPC. As needed, update the route tables for the
 *          zones to remove the firewall endpoints. When the route tables no longer use the firewall endpoints,
 *          you can remove the firewall safely.</p>
 *          <p>To delete a firewall, remove the delete protection if you need to using <a>UpdateFirewallDeleteProtection</a>,
 *          then delete the firewall by calling <a>DeleteFirewall</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DeleteFirewallCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DeleteFirewallCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // DeleteFirewallRequest
 *   FirewallName: "STRING_VALUE",
 *   FirewallArn: "STRING_VALUE",
 * };
 * const command = new DeleteFirewallCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFirewallResponse
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
 * //   },
 * //   FirewallStatus: { // FirewallStatus
 * //     Status: "PROVISIONING" || "DELETING" || "READY", // required
 * //     ConfigurationSyncStateSummary: "PENDING" || "IN_SYNC" || "CAPACITY_CONSTRAINED", // required
 * //     SyncStates: { // SyncStates
 * //       "<keys>": { // SyncState
 * //         Attachment: { // Attachment
 * //           SubnetId: "STRING_VALUE",
 * //           EndpointId: "STRING_VALUE",
 * //           Status: "CREATING" || "DELETING" || "FAILED" || "ERROR" || "SCALING" || "READY",
 * //           StatusMessage: "STRING_VALUE",
 * //         },
 * //         Config: { // SyncStateConfig
 * //           "<keys>": { // PerObjectStatus
 * //             SyncStatus: "PENDING" || "IN_SYNC" || "CAPACITY_CONSTRAINED",
 * //             UpdateToken: "STRING_VALUE",
 * //           },
 * //         },
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
 * @param DeleteFirewallCommandInput - {@link DeleteFirewallCommandInput}
 * @returns {@link DeleteFirewallCommandOutput}
 * @see {@link DeleteFirewallCommandInput} for command's `input` shape.
 * @see {@link DeleteFirewallCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Your request is valid, but Network Firewall couldn't perform the operation because of a
 *          system problem. Retry your request. </p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation failed because it's not valid. For example, you might have tried to delete
 *          a rule group or firewall policy that's in use.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The operation failed because of a problem with your request. Examples include: </p>
 *          <ul>
 *             <li>
 *                <p>You specified an unsupported parameter name or value.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a property with a value that isn't among the available
 *                types.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                that isn't valid in the context of the request.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Unable to locate a resource using the parameters that you provided.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Unable to process the request due to throttling limitations.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation you requested isn't supported by Network Firewall. </p>
 *
 * @throws {@link NetworkFirewallServiceException}
 * <p>Base exception class for all service exceptions from NetworkFirewall service.</p>
 *
 *
 * @public
 */
export class DeleteFirewallCommand extends $Command
  .classBuilder<
    DeleteFirewallCommandInput,
    DeleteFirewallCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "DeleteFirewall", {})
  .n("NetworkFirewallClient", "DeleteFirewallCommand")
  .sc(DeleteFirewall)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFirewallRequest;
      output: DeleteFirewallResponse;
    };
    sdk: {
      input: DeleteFirewallCommandInput;
      output: DeleteFirewallCommandOutput;
    };
  };
}
