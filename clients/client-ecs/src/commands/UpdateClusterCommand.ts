// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateClusterRequest, UpdateClusterResponse } from "../models/models_0";
import { de_UpdateClusterCommand, se_UpdateClusterCommand } from "../protocols/Aws_json1_1";

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
 * <p>Updates the cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, UpdateClusterCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, UpdateClusterCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // UpdateClusterRequest
 *   cluster: "STRING_VALUE", // required
 *   settings: [ // ClusterSettings
 *     { // ClusterSetting
 *       name: "containerInsights",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   configuration: { // ClusterConfiguration
 *     executeCommandConfiguration: { // ExecuteCommandConfiguration
 *       kmsKeyId: "STRING_VALUE",
 *       logging: "NONE" || "DEFAULT" || "OVERRIDE",
 *       logConfiguration: { // ExecuteCommandLogConfiguration
 *         cloudWatchLogGroupName: "STRING_VALUE",
 *         cloudWatchEncryptionEnabled: true || false,
 *         s3BucketName: "STRING_VALUE",
 *         s3EncryptionEnabled: true || false,
 *         s3KeyPrefix: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   serviceConnectDefaults: { // ClusterServiceConnectDefaultsRequest
 *     namespace: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateClusterCommand(input);
 * const response = await client.send(command);
 * // { // UpdateClusterResponse
 * //   cluster: { // Cluster
 * //     clusterArn: "STRING_VALUE",
 * //     clusterName: "STRING_VALUE",
 * //     configuration: { // ClusterConfiguration
 * //       executeCommandConfiguration: { // ExecuteCommandConfiguration
 * //         kmsKeyId: "STRING_VALUE",
 * //         logging: "NONE" || "DEFAULT" || "OVERRIDE",
 * //         logConfiguration: { // ExecuteCommandLogConfiguration
 * //           cloudWatchLogGroupName: "STRING_VALUE",
 * //           cloudWatchEncryptionEnabled: true || false,
 * //           s3BucketName: "STRING_VALUE",
 * //           s3EncryptionEnabled: true || false,
 * //           s3KeyPrefix: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     status: "STRING_VALUE",
 * //     registeredContainerInstancesCount: Number("int"),
 * //     runningTasksCount: Number("int"),
 * //     pendingTasksCount: Number("int"),
 * //     activeServicesCount: Number("int"),
 * //     statistics: [ // Statistics
 * //       { // KeyValuePair
 * //         name: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     tags: [ // Tags
 * //       { // Tag
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     settings: [ // ClusterSettings
 * //       { // ClusterSetting
 * //         name: "containerInsights",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     capacityProviders: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     defaultCapacityProviderStrategy: [ // CapacityProviderStrategy
 * //       { // CapacityProviderStrategyItem
 * //         capacityProvider: "STRING_VALUE", // required
 * //         weight: Number("int"),
 * //         base: Number("int"),
 * //       },
 * //     ],
 * //     attachments: [ // Attachments
 * //       { // Attachment
 * //         id: "STRING_VALUE",
 * //         type: "STRING_VALUE",
 * //         status: "STRING_VALUE",
 * //         details: [ // AttachmentDetails
 * //           {
 * //             name: "STRING_VALUE",
 * //             value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     attachmentsStatus: "STRING_VALUE",
 * //     serviceConnectDefaults: { // ClusterServiceConnectDefaults
 * //       namespace: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateClusterCommandInput - {@link UpdateClusterCommandInput}
 * @returns {@link UpdateClusterCommandOutput}
 * @see {@link UpdateClusterCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *
 * @throws {@link NamespaceNotFoundException} (client fault)
 *  <p>The specified namespace wasn't found.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 * @public
 */
export class UpdateClusterCommand extends $Command
  .classBuilder<
    UpdateClusterCommandInput,
    UpdateClusterCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2ContainerServiceV20141113", "UpdateCluster", {})
  .n("ECSClient", "UpdateClusterCommand")
  .f(void 0, void 0)
  .ser(se_UpdateClusterCommand)
  .de(de_UpdateClusterCommand)
  .build() {}
