// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateClusterSettingsRequest, UpdateClusterSettingsResponse } from "../models/models_1";
import { UpdateClusterSettings } from "../schemas/schemas_3_Cluster";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateClusterSettingsCommand}.
 */
export interface UpdateClusterSettingsCommandInput extends UpdateClusterSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateClusterSettingsCommand}.
 */
export interface UpdateClusterSettingsCommandOutput extends UpdateClusterSettingsResponse, __MetadataBearer {}

/**
 * <p>Modifies the settings to use for a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, UpdateClusterSettingsCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, UpdateClusterSettingsCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // UpdateClusterSettingsRequest
 *   cluster: "STRING_VALUE", // required
 *   settings: [ // ClusterSettings // required
 *     { // ClusterSetting
 *       name: "containerInsights",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateClusterSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateClusterSettingsResponse
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
 * //       managedStorageConfiguration: { // ManagedStorageConfiguration
 * //         kmsKeyId: "STRING_VALUE",
 * //         fargateEphemeralStorageKmsKeyId: "STRING_VALUE",
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
 * @param UpdateClusterSettingsCommandInput - {@link UpdateClusterSettingsCommandInput}
 * @returns {@link UpdateClusterSettingsCommandOutput}
 * @see {@link UpdateClusterSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterSettingsCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html">ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service
 * 				event messages</a>. </p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @example To update a cluster's settings
 * ```javascript
 * // This example enables CloudWatch Container Insights for the default cluster.
 * const input = {
 *   cluster: "default",
 *   settings: [
 *     {
 *       name: "containerInsights",
 *       value: "enabled"
 *     }
 *   ]
 * };
 * const command = new UpdateClusterSettingsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   cluster: {
 *     activeServicesCount: 0,
 *     clusterArn: "arn:aws:ecs:us-west-2:123456789012:cluster/MyCluster",
 *     clusterName: "default",
 *     pendingTasksCount: 0,
 *     registeredContainerInstancesCount: 0,
 *     runningTasksCount: 0,
 *     settings: [
 *       {
 *         name: "containerInsights",
 *         value: "enabled"
 *       }
 *     ],
 *     statistics:     [],
 *     status: "ACTIVE",
 *     tags:     []
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateClusterSettingsCommand extends $Command
  .classBuilder<
    UpdateClusterSettingsCommandInput,
    UpdateClusterSettingsCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerServiceV20141113", "UpdateClusterSettings", {})
  .n("ECSClient", "UpdateClusterSettingsCommand")
  .sc(UpdateClusterSettings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateClusterSettingsRequest;
      output: UpdateClusterSettingsResponse;
    };
    sdk: {
      input: UpdateClusterSettingsCommandInput;
      output: UpdateClusterSettingsCommandOutput;
    };
  };
}
