// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DecreaseReplicationFactorRequest, DecreaseReplicationFactorResponse } from "../models/models_0";
import { de_DecreaseReplicationFactorCommand, se_DecreaseReplicationFactorCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Removes one or more nodes from a DAX cluster.</p>
 *         <note>
 *             <p>You cannot use <code>DecreaseReplicationFactor</code> to remove the last node in a DAX cluster. If you need to do this, use <code>DeleteCluster</code> instead.</p>
 *          </note>
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
 *  <p>The requested cluster ID does not refer to an existing DAX cluster.</p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The requested DAX cluster is not in the <i>available</i>
 *             state.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link NodeNotFoundFault} (client fault)
 *  <p>None of the nodes in the cluster have the given node ID.</p>
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
export class DecreaseReplicationFactorCommand extends $Command
  .classBuilder<
    DecreaseReplicationFactorCommandInput,
    DecreaseReplicationFactorCommandOutput,
    DAXClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DAXClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDAXV3", "DecreaseReplicationFactor", {})
  .n("DAXClient", "DecreaseReplicationFactorCommand")
  .f(void 0, void 0)
  .ser(se_DecreaseReplicationFactorCommand)
  .de(de_DecreaseReplicationFactorCommand)
  .build() {
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
