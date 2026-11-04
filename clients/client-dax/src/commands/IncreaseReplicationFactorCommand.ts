// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { IncreaseReplicationFactorRequest, IncreaseReplicationFactorResponse } from "../models/models_0";
import { IncreaseReplicationFactor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link IncreaseReplicationFactorCommand}.
 */
export interface IncreaseReplicationFactorCommandInput extends IncreaseReplicationFactorRequest {}
/**
 * @public
 *
 * The output of {@link IncreaseReplicationFactorCommand}.
 */
export interface IncreaseReplicationFactorCommandOutput extends IncreaseReplicationFactorResponse, __MetadataBearer {}

/**
 * Adds one or more nodes to a DAX cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, IncreaseReplicationFactorCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, IncreaseReplicationFactorCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * // import type { DAXClientConfig } from "@aws-sdk/client-dax";
 * const config = {}; // type is DAXClientConfig
 * const client = new DAXClient(config);
 * const input = { // IncreaseReplicationFactorRequest
 *   ClusterName: "STRING_VALUE", // required
 *   NewReplicationFactor: Number("int"), // required
 *   AvailabilityZones: [ // AvailabilityZoneList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new IncreaseReplicationFactorCommand(input);
 * const response = await client.send(command);
 * // { // IncreaseReplicationFactorResponse
 * //   Cluster: { // Cluster
 * //     ClusterName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     ClusterArn: "STRING_VALUE",
 * //     TotalNodes: Number("int"),
 * //     ActiveNodes: Number("int"),
 * //     NodeType: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     ClusterDiscoveryEndpoint: { // Endpoint
 * //       Address: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       URL: "STRING_VALUE",
 * //     },
 * //     NodeIdsToRemove: [ // NodeIdentifierList
 * //       "STRING_VALUE",
 * //     ],
 * //     Nodes: [ // NodeList
 * //       { // Node
 * //         NodeId: "STRING_VALUE",
 * //         Endpoint: {
 * //           Address: "STRING_VALUE",
 * //           Port: Number("int"),
 * //           URL: "STRING_VALUE",
 * //         },
 * //         NodeCreateTime: new Date("TIMESTAMP"),
 * //         AvailabilityZone: "STRING_VALUE",
 * //         NodeStatus: "STRING_VALUE",
 * //         ParameterGroupStatus: "STRING_VALUE",
 * //       },
 * //     ],
 * //     PreferredMaintenanceWindow: "STRING_VALUE",
 * //     NotificationConfiguration: { // NotificationConfiguration
 * //       TopicArn: "STRING_VALUE",
 * //       TopicStatus: "STRING_VALUE",
 * //     },
 * //     SubnetGroup: "STRING_VALUE",
 * //     SecurityGroups: [ // SecurityGroupMembershipList
 * //       { // SecurityGroupMembership
 * //         SecurityGroupIdentifier: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     IamRoleArn: "STRING_VALUE",
 * //     ParameterGroup: { // ParameterGroupStatus
 * //       ParameterGroupName: "STRING_VALUE",
 * //       ParameterApplyStatus: "STRING_VALUE",
 * //       NodeIdsToReboot: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     SSEDescription: { // SSEDescription
 * //       Status: "ENABLING" || "ENABLED" || "DISABLING" || "DISABLED",
 * //     },
 * //     ClusterEndpointEncryptionType: "NONE" || "TLS",
 * //     NetworkType: "ipv4" || "ipv6" || "dual_stack",
 * //   },
 * // };
 *
 * ```
 *
 * @param IncreaseReplicationFactorCommandInput - {@link IncreaseReplicationFactorCommandInput}
 * @returns {@link IncreaseReplicationFactorCommandOutput}
 * @see {@link IncreaseReplicationFactorCommandInput} for command's `input` shape.
 * @see {@link IncreaseReplicationFactorCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for DAXClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *
 * The requested cluster ID does not refer to an existing DAX cluster.
 *
 * @throws {@link InsufficientClusterCapacityFault} (client fault)
 *
 * There are not enough system resources to create the cluster you requested (or to resize an already-existing cluster).
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *
 * The requested DAX cluster is not in the *available* state.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *
 * Two or more incompatible parameters were specified.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value for a parameter is invalid.
 *
 * @throws {@link InvalidVPCNetworkStateFault} (client fault)
 *
 * The VPC network is in an invalid state.
 *
 * @throws {@link NodeQuotaForClusterExceededFault} (client fault)
 *
 * You have attempted to exceed the maximum number of nodes for a DAX cluster.
 *
 * @throws {@link NodeQuotaForCustomerExceededFault} (client fault)
 *
 * You have attempted to exceed the maximum number of nodes for your Amazon Web Services account.
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *
 * The specified service linked role (SLR) was not found.
 *
 * @throws {@link DAXServiceException}
 *
 * Base exception class for all service exceptions from DAX service.
 *
 * @public
 */
export class IncreaseReplicationFactorCommand extends command<IncreaseReplicationFactorCommandInput, IncreaseReplicationFactorCommandOutput>(
  _ep0,
  _mw0,
  "IncreaseReplicationFactor",
  IncreaseReplicationFactor$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: IncreaseReplicationFactorRequest;
      output: IncreaseReplicationFactorResponse;
    };
    sdk: {
      input: IncreaseReplicationFactorCommandInput;
      output: IncreaseReplicationFactorCommandOutput;
    };
  };
}
