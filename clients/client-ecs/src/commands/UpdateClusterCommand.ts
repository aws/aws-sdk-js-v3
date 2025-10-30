// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateClusterRequest, UpdateClusterResponse } from "../models/models_1";
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
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
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
 *     managedStorageConfiguration: { // ManagedStorageConfiguration
 *       kmsKeyId: "STRING_VALUE",
 *       fargateEphemeralStorageKmsKeyId: "STRING_VALUE",
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
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html">ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS
 * 				service event messages</a>. </p>
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
 *
 * @example To update a cluster's observability settings.
 * ```javascript
 * // This example turns on enhanced containerInsights in an existing cluster.
 * const input = {
 *   cluster: "ECS-project-update-cluster",
 *   settings: [
 *     {
 *       name: "containerInsights",
 *       value: "enhanced"
 *     }
 *   ]
 * };
 * const command = new UpdateClusterCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   cluster: {
 *     activeServicesCount: 0,
 *     attachments: [
 *       {
 *         details: [
 *           {
 *             name: "capacityProviderName",
 *             value: "Infra-ECS-Cluster-ECS-project-update-cluster-d6bb6d5b-EC2CapacityProvider-3fIpdkLywwFt"
 *           },
 *           {
 *             name: "scalingPolicyName",
 *             value: "ECSManagedAutoScalingPolicy-152363a6-8c65-484c-b721-42c3e070ae93"
 *           }
 *         ],
 *         id: "069d002b-7634-42e4-b1d4-544f4c8f6380",
 *         status: "CREATED",
 *         type: "as_policy"
 *       },
 *       {
 *         details: [
 *           {
 *             name: "capacityProviderName",
 *             value: "Infra-ECS-Cluster-ECS-project-update-cluster-d6bb6d5b-EC2CapacityProvider-3fIpdkLywwFt"
 *           },
 *           {
 *             name: "autoScalingLifecycleHookName",
 *             value: "ecs-managed-draining-termination-hook"
 *           }
 *         ],
 *         id: "08b5b6ca-45e9-4209-a65d-e962a27c490a",
 *         status: "CREATED",
 *         type: "managed_draining"
 *       },
 *       {
 *         details:         [],
 *         id: "45d0b36f-8cff-46b6-9380-1288744802ab",
 *         status: "ATTACHED",
 *         type: "sc"
 *       }
 *     ],
 *     attachmentsStatus: "UPDATE_COMPLETE",
 *     capacityProviders: [
 *       "Infra-ECS-Cluster-ECS-project-update-cluster-d6bb6d5b-EC2CapacityProvider-3fIpdkLywwFt"
 *     ],
 *     clusterArn: "arn:aws:ecs:us-west-2:123456789012:cluster/ECS-project-update-cluster",
 *     clusterName: "ECS-project-update-cluster",
 *     defaultCapacityProviderStrategy: [
 *       {
 *         base: 0,
 *         capacityProvider: "Infra-ECS-Cluster-ECS-project-update-cluster-d6bb6d5b-EC2CapacityProvider-3fIpdkLywwFt",
 *         weight: 1
 *       }
 *     ],
 *     pendingTasksCount: 0,
 *     registeredContainerInstancesCount: 0,
 *     runningTasksCount: 0,
 *     serviceConnectDefaults: {
 *       namespace: "arn:aws:servicediscovery:us-west-2:123456789012:namespace/ns-igwrsylmy3kwvcdx"
 *     },
 *     settings: [
 *       {
 *         name: "containerInsights",
 *         value: "enhanced"
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
 * @example To update a cluster's Service Connect defaults.
 * ```javascript
 * // This example sets a default Service Connect namespace.
 * const input = {
 *   cluster: "ECS-project-update-cluster",
 *   serviceConnectDefaults: {
 *     namespace: "test"
 *   }
 * };
 * const command = new UpdateClusterCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   cluster: {
 *     activeServicesCount: 0,
 *     attachments: [
 *       {
 *         details: [
 *           {
 *             name: "capacityProviderName",
 *             value: "Infra-ECS-Cluster-ECS-project-update-cluster-d6bb6d5b-EC2CapacityProvider-3fIpdkLywwFt"
 *           },
 *           {
 *             name: "scalingPolicyName",
 *             value: "ECSManagedAutoScalingPolicy-152363a6-8c65-484c-b721-42c3e070ae93"
 *           }
 *         ],
 *         id: "069d002b-7634-42e4-b1d4-544f4c8f6380",
 *         status: "CREATED",
 *         type: "as_policy"
 *       },
 *       {
 *         details: [
 *           {
 *             name: "capacityProviderName",
 *             value: "Infra-ECS-Cluster-ECS-project-update-cluster-d6bb6d5b-EC2CapacityProvider-3fIpdkLywwFt"
 *           },
 *           {
 *             name: "autoScalingLifecycleHookName",
 *             value: "ecs-managed-draining-termination-hook"
 *           }
 *         ],
 *         id: "08b5b6ca-45e9-4209-a65d-e962a27c490a",
 *         status: "CREATED",
 *         type: "managed_draining"
 *       },
 *       {
 *         details:         [],
 *         id: "45d0b36f-8cff-46b6-9380-1288744802ab",
 *         status: "DELETED",
 *         type: "sc"
 *       },
 *       {
 *         details:         [],
 *         id: "3e6890c3-609c-4832-91de-d6ca891b3ef1",
 *         status: "ATTACHED",
 *         type: "sc"
 *       },
 *       {
 *         details:         [],
 *         id: "961b8ec1-c2f1-4070-8495-e669b7668e90",
 *         status: "DELETED",
 *         type: "sc"
 *       }
 *     ],
 *     attachmentsStatus: "UPDATE_COMPLETE",
 *     capacityProviders: [
 *       "Infra-ECS-Cluster-ECS-project-update-cluster-d6bb6d5b-EC2CapacityProvider-3fIpdkLywwFt"
 *     ],
 *     clusterArn: "arn:aws:ecs:us-west-2:123456789012:cluster/ECS-project-update-cluster",
 *     clusterName: "ECS-project-update-cluster",
 *     defaultCapacityProviderStrategy: [
 *       {
 *         base: 0,
 *         capacityProvider: "Infra-ECS-Cluster-ECS-project-update-cluster-d6bb6d5b-EC2CapacityProvider-3fIpdkLywwFt",
 *         weight: 1
 *       }
 *     ],
 *     pendingTasksCount: 0,
 *     registeredContainerInstancesCount: 0,
 *     runningTasksCount: 0,
 *     serviceConnectDefaults: {
 *       namespace: "arn:aws:servicediscovery:us-west-2:123456789012:namespace/ns-dtjmxqpfi46ht7dr"
 *     },
 *     settings: [
 *       {
 *         name: "containerInsights",
 *         value: "enhanced"
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
export class UpdateClusterCommand extends $Command
  .classBuilder<
    UpdateClusterCommandInput,
    UpdateClusterCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
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
