// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DecreaseReplicationFactorRequest, DecreaseReplicationFactorResponse } from "../models/models_0";
import { DecreaseReplicationFactor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DecreaseReplicationFactorCommand}.
 */
export interface DecreaseReplicationFactorCommandInput extends DecreaseReplicationFactorRequest {}
/**
 * @public
 *
 * The output of {@link DecreaseReplicationFactorCommand}.
 */
export interface DecreaseReplicationFactorCommandOutput extends DecreaseReplicationFactorResponse, __MetadataBearer {}

/**
 * Removes one or more nodes from a DAX cluster.
 *
 * > **Note:** You cannot use `DecreaseReplicationFactor` to remove the last node in a DAX cluster. If you need to do this, use `DeleteCluster` instead.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, DecreaseReplicationFactorCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, DecreaseReplicationFactorCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * // import type { DAXClientConfig } from "@aws-sdk/client-dax";
 * const config = {}; // type is DAXClientConfig
 * const client = new DAXClient(config);
 * const input = { // DecreaseReplicationFactorRequest
 *   ClusterName: "STRING_VALUE", // required
 *   NewReplicationFactor: Number("int"), // required
 *   AvailabilityZones: [ // AvailabilityZoneList
 *     "STRING_VALUE",
 *   ],
 *   NodeIdsToRemove: [ // NodeIdentifierList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DecreaseReplicationFactorCommand(input);
 * const response = await client.send(command);
 * // { // DecreaseReplicationFactorResponse
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
 * @param DecreaseReplicationFactorCommandInput - {@link DecreaseReplicationFactorCommandInput}
 * @returns {@link DecreaseReplicationFactorCommandOutput}
 * @see {@link DecreaseReplicationFactorCommandInput} for command's `input` shape.
 * @see {@link DecreaseReplicationFactorCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for DAXClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *
 * The requested cluster ID does not refer to an existing DAX cluster.
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
 * @throws {@link NodeNotFoundFault} (client fault)
 *
 * None of the nodes in the cluster have the given node ID.
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
export class DecreaseReplicationFactorCommand extends command<DecreaseReplicationFactorCommandInput, DecreaseReplicationFactorCommandOutput>(
  _ep0,
  _mw0,
  "DecreaseReplicationFactor",
  DecreaseReplicationFactor$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DecreaseReplicationFactorRequest;
      output: DecreaseReplicationFactorResponse;
    };
    sdk: {
      input: DecreaseReplicationFactorCommandInput;
      output: DecreaseReplicationFactorCommandOutput;
    };
  };
}
