// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateClusterRequest, UpdateClusterResponse } from "../models/models_0";
import { UpdateCluster } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateClusterCommand}.
 */
export interface UpdateClusterCommandInput extends UpdateClusterRequest {}
/**
 * @public
 *
 * The output of {@link UpdateClusterCommand}.
 */
export interface UpdateClusterCommandOutput extends UpdateClusterResponse, __MetadataBearer {}

/**
 * <p>Modifies the settings for a DAX cluster. You can use this action to
 *             change one or more cluster configuration parameters by specifying the parameters and the
 *             new values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, UpdateClusterCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, UpdateClusterCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * // import type { DAXClientConfig } from "@aws-sdk/client-dax";
 * const config = {}; // type is DAXClientConfig
 * const client = new DAXClient(config);
 * const input = { // UpdateClusterRequest
 *   ClusterName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   PreferredMaintenanceWindow: "STRING_VALUE",
 *   NotificationTopicArn: "STRING_VALUE",
 *   NotificationTopicStatus: "STRING_VALUE",
 *   ParameterGroupName: "STRING_VALUE",
 *   SecurityGroupIds: [ // SecurityGroupIdentifierList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateClusterCommand(input);
 * const response = await client.send(command);
 * // { // UpdateClusterResponse
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
 * @param UpdateClusterCommandInput - {@link UpdateClusterCommandInput}
 * @returns {@link UpdateClusterCommandOutput}
 * @see {@link UpdateClusterCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for DAXClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The requested cluster ID does not refer to an existing DAX
 *             cluster.</p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The requested DAX cluster is not in the
 *                 <i>available</i> state.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterGroupStateFault} (client fault)
 *  <p>One or more parameters in a parameter group are in an invalid state.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ParameterGroupNotFoundFault} (client fault)
 *  <p>The specified parameter group does not exist.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The specified service linked role (SLR) was not found.</p>
 *
 * @throws {@link DAXServiceException}
 * <p>Base exception class for all service exceptions from DAX service.</p>
 *
 *
 * @public
 */
export class UpdateClusterCommand extends $Command
  .classBuilder<
    UpdateClusterCommandInput,
    UpdateClusterCommandOutput,
    DAXClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DAXClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDAXV3", "UpdateCluster", {})
  .n("DAXClient", "UpdateClusterCommand")
  .sc(UpdateCluster)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateClusterRequest;
      output: UpdateClusterResponse;
    };
    sdk: {
      input: UpdateClusterCommandInput;
      output: UpdateClusterCommandOutput;
    };
  };
}
