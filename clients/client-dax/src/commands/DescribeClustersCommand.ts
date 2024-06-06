// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeClustersRequest, DescribeClustersResponse } from "../models/models_0";
import { de_DescribeClustersCommand, se_DescribeClustersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeClustersCommand}.
 */
export interface DescribeClustersCommandInput extends DescribeClustersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClustersCommand}.
 */
export interface DescribeClustersCommandOutput extends DescribeClustersResponse, __MetadataBearer {}

/**
 * <p>Returns information about all provisioned DAX clusters if no cluster identifier
 *             is specified, or about a specific DAX cluster if a cluster identifier is
 *             supplied.</p>
 *         <p>If the cluster is in the CREATING state, only cluster level information will be
 *             displayed until all of the nodes are successfully provisioned.</p>
 *         <p>If the cluster is in the DELETING state, only cluster level information will be
 *             displayed.</p>
 *         <p>If nodes are currently being added to the DAX cluster, node endpoint information
 *             and creation time for the additional nodes will not be displayed until they are
 *             completely provisioned. When the DAX cluster state is <i>available</i>,
 *             the cluster is ready for use.</p>
 *         <p>If nodes are currently being removed from the DAX cluster, no endpoint
 *             information for the removed nodes is displayed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, DescribeClustersCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, DescribeClustersCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const input = { // DescribeClustersRequest
 *   ClusterNames: [ // ClusterNameList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeClustersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClustersResponse
 * //   NextToken: "STRING_VALUE",
 * //   Clusters: [ // ClusterList
 * //     { // Cluster
 * //       ClusterName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       ClusterArn: "STRING_VALUE",
 * //       TotalNodes: Number("int"),
 * //       ActiveNodes: Number("int"),
 * //       NodeType: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       ClusterDiscoveryEndpoint: { // Endpoint
 * //         Address: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         URL: "STRING_VALUE",
 * //       },
 * //       NodeIdsToRemove: [ // NodeIdentifierList
 * //         "STRING_VALUE",
 * //       ],
 * //       Nodes: [ // NodeList
 * //         { // Node
 * //           NodeId: "STRING_VALUE",
 * //           Endpoint: {
 * //             Address: "STRING_VALUE",
 * //             Port: Number("int"),
 * //             URL: "STRING_VALUE",
 * //           },
 * //           NodeCreateTime: new Date("TIMESTAMP"),
 * //           AvailabilityZone: "STRING_VALUE",
 * //           NodeStatus: "STRING_VALUE",
 * //           ParameterGroupStatus: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PreferredMaintenanceWindow: "STRING_VALUE",
 * //       NotificationConfiguration: { // NotificationConfiguration
 * //         TopicArn: "STRING_VALUE",
 * //         TopicStatus: "STRING_VALUE",
 * //       },
 * //       SubnetGroup: "STRING_VALUE",
 * //       SecurityGroups: [ // SecurityGroupMembershipList
 * //         { // SecurityGroupMembership
 * //           SecurityGroupIdentifier: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
 * //       IamRoleArn: "STRING_VALUE",
 * //       ParameterGroup: { // ParameterGroupStatus
 * //         ParameterGroupName: "STRING_VALUE",
 * //         ParameterApplyStatus: "STRING_VALUE",
 * //         NodeIdsToReboot: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       SSEDescription: { // SSEDescription
 * //         Status: "ENABLING" || "ENABLED" || "DISABLING" || "DISABLED",
 * //       },
 * //       ClusterEndpointEncryptionType: "NONE" || "TLS",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeClustersCommandInput - {@link DescribeClustersCommandInput}
 * @returns {@link DescribeClustersCommandOutput}
 * @see {@link DescribeClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeClustersCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for DAXClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The requested cluster ID does not refer to an existing DAX cluster.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The specified service linked role (SLR) was not found.</p>
 *
 * @throws {@link DAXServiceException}
 * <p>Base exception class for all service exceptions from DAX service.</p>
 *
 * @public
 */
export class DescribeClustersCommand extends $Command
  .classBuilder<
    DescribeClustersCommandInput,
    DescribeClustersCommandOutput,
    DAXClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DAXClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDAXV3", "DescribeClusters", {})
  .n("DAXClient", "DescribeClustersCommand")
  .f(void 0, void 0)
  .ser(se_DescribeClustersCommand)
  .de(de_DescribeClustersCommand)
  .build() {}
