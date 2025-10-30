// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateClusterRequest, CreateClusterResponse } from "../models/models_0";
import { de_CreateClusterCommand, se_CreateClusterCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a new Amazon ECS cluster. By default, your account receives a
 * 				<code>default</code> cluster when you launch your first container instance. However,
 * 			you can create your own cluster with a unique name.</p>
 *          <note>
 *             <p>When you call the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCluster.html">CreateCluster</a>
 * 				API operation, Amazon ECS attempts to create the Amazon ECS service-linked role for
 * 				your account. This is so that it can manage required resources in other Amazon Web
 * 					Services services on your behalf. However, if the user that makes the
 * 				call doesn't have permissions to create the service-linked role, it isn't created.
 * 				For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Using
 * 					service-linked roles for Amazon ECS</a> in the <i>Amazon Elastic
 * 					Container Service Developer Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, CreateClusterCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, CreateClusterCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // CreateClusterRequest
 *   clusterName: "STRING_VALUE",
 *   tags: [ // Tags
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
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
 *   capacityProviders: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   defaultCapacityProviderStrategy: [ // CapacityProviderStrategy
 *     { // CapacityProviderStrategyItem
 *       capacityProvider: "STRING_VALUE", // required
 *       weight: Number("int"),
 *       base: Number("int"),
 *     },
 *   ],
 *   serviceConnectDefaults: { // ClusterServiceConnectDefaultsRequest
 *     namespace: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CreateClusterCommand(input);
 * const response = await client.send(command);
 * // { // CreateClusterResponse
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
 * @param CreateClusterCommandInput - {@link CreateClusterCommandInput}
 * @returns {@link CreateClusterCommandOutput}
 * @see {@link CreateClusterCommandInput} for command's `input` shape.
 * @see {@link CreateClusterCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource. Or, it might be specifying an identifier that isn't valid.</p>
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
 * @example To create a new cluster
 * ```javascript
 * // This example creates a cluster in your default region.
 * const input = {
 *   clusterName: "my_cluster"
 * };
 * const command = new CreateClusterCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   cluster: {
 *     activeServicesCount: 0,
 *     clusterArn: "arn:aws:ecs:us-east-1:012345678910:cluster/my_cluster",
 *     clusterName: "my_cluster",
 *     pendingTasksCount: 0,
 *     registeredContainerInstancesCount: 0,
 *     runningTasksCount: 0,
 *     status: "ACTIVE"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateClusterCommand extends $Command
  .classBuilder<
    CreateClusterCommandInput,
    CreateClusterCommandOutput,
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
  .s("AmazonEC2ContainerServiceV20141113", "CreateCluster", {})
  .n("ECSClient", "CreateClusterCommand")
  .f(void 0, void 0)
  .ser(se_CreateClusterCommand)
  .de(de_CreateClusterCommand)
  .build() {
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
