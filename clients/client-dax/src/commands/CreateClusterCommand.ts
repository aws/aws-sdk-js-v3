// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateClusterRequest, CreateClusterResponse } from "../models/models_0";
import { CreateCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateClusterCommand}.
 */
export interface CreateClusterCommandInput extends CreateClusterRequest {}
/**
 * @public
 *
 * The output of {@link CreateClusterCommand}.
 */
export interface CreateClusterCommandOutput extends CreateClusterResponse, __MetadataBearer {}

/**
 * Creates a DAX cluster. All nodes in the cluster run the same DAX caching software.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, CreateClusterCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, CreateClusterCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * // import type { DAXClientConfig } from "@aws-sdk/client-dax";
 * const config = {}; // type is DAXClientConfig
 * const client = new DAXClient(config);
 * const input = { // CreateClusterRequest
 *   ClusterName: "STRING_VALUE", // required
 *   NodeType: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ReplicationFactor: Number("int"), // required
 *   AvailabilityZones: [ // AvailabilityZoneList
 *     "STRING_VALUE",
 *   ],
 *   SubnetGroupName: "STRING_VALUE",
 *   SecurityGroupIds: [ // SecurityGroupIdentifierList
 *     "STRING_VALUE",
 *   ],
 *   PreferredMaintenanceWindow: "STRING_VALUE",
 *   NotificationTopicArn: "STRING_VALUE",
 *   IamRoleArn: "STRING_VALUE", // required
 *   ParameterGroupName: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   SSESpecification: { // SSESpecification
 *     Enabled: true || false, // required
 *   },
 *   ClusterEndpointEncryptionType: "NONE" || "TLS",
 *   NetworkType: "ipv4" || "ipv6" || "dual_stack",
 * };
 * const command = new CreateClusterCommand(input);
 * const response = await client.send(command);
 * // { // CreateClusterResponse
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
 * @param CreateClusterCommandInput - {@link CreateClusterCommandInput}
 * @returns {@link CreateClusterCommandOutput}
 * @see {@link CreateClusterCommandInput} for command's `input` shape.
 * @see {@link CreateClusterCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for DAXClient's `config` shape.
 *
 * @throws {@link ClusterAlreadyExistsFault} (client fault)
 *
 * You already have a DAX cluster with the given identifier.
 *
 * @throws {@link ClusterQuotaForCustomerExceededFault} (client fault)
 *
 * You have attempted to exceed the maximum number of DAX clusters for your Amazon Web Services account.
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
 * @throws {@link InvalidParameterGroupStateFault} (client fault)
 *
 * One or more parameters in a parameter group are in an invalid state.
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
 * @throws {@link ParameterGroupNotFoundFault} (client fault)
 *
 * The specified parameter group does not exist.
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *
 * The specified service linked role (SLR) was not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You have reached the maximum number of x509 certificates that can be created for encrypted clusters in a 30 day period. Contact Amazon Web Services customer support to discuss options for continuing to create encrypted clusters.
 *
 * @throws {@link SubnetGroupNotFoundFault} (client fault)
 *
 * The requested subnet group name does not refer to an existing subnet group.
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *
 * You have exceeded the maximum number of tags for this DAX cluster.
 *
 * @throws {@link DAXServiceException}
 *
 * Base exception class for all service exceptions from DAX service.
 *
 * @public
 */
export class CreateClusterCommand extends command<CreateClusterCommandInput, CreateClusterCommandOutput>(
  _ep0,
  _mw0,
  "CreateCluster",
  CreateCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateClusterRequest;
      output: CreateClusterResponse;
    };
    sdk: {
      input: CreateClusterCommandInput;
      output: CreateClusterCommandOutput;
    };
  };
}
