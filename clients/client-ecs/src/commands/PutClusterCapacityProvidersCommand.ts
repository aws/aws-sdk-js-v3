// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutClusterCapacityProvidersRequest, PutClusterCapacityProvidersResponse } from "../models/models_0";
import { de_PutClusterCapacityProvidersCommand, se_PutClusterCapacityProvidersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutClusterCapacityProvidersCommand}.
 */
export interface PutClusterCapacityProvidersCommandInput extends PutClusterCapacityProvidersRequest {}
/**
 * @public
 *
 * The output of {@link PutClusterCapacityProvidersCommand}.
 */
export interface PutClusterCapacityProvidersCommandOutput
  extends PutClusterCapacityProvidersResponse,
    __MetadataBearer {}

/**
 * <p>Modifies the available capacity providers and the default capacity provider strategy
 * 			for a cluster.</p>
 *          <p>You must specify both the available capacity providers and a default capacity provider
 * 			strategy for the cluster. If the specified cluster has existing capacity providers
 * 			associated with it, you must specify all existing capacity providers in addition to any
 * 			new ones you want to add. Any existing capacity providers that are associated with a
 * 			cluster that are omitted from a <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutClusterCapacityProviders.html">PutClusterCapacityProviders</a> API call will be disassociated with the
 * 			cluster. You can only disassociate an existing capacity provider from a cluster if it's
 * 			not being used by any existing tasks.</p>
 *          <p>When creating a service or running a task on a cluster, if no capacity provider or
 * 			launch type is specified, then the cluster's default capacity provider strategy is used.
 * 			We recommend that you define a default capacity provider strategy for your cluster.
 * 			However, you must specify an empty array (<code>[]</code>) to bypass defining a default
 * 			strategy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, PutClusterCapacityProvidersCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, PutClusterCapacityProvidersCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // PutClusterCapacityProvidersRequest
 *   cluster: "STRING_VALUE", // required
 *   capacityProviders: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 *   defaultCapacityProviderStrategy: [ // CapacityProviderStrategy // required
 *     { // CapacityProviderStrategyItem
 *       capacityProvider: "STRING_VALUE", // required
 *       weight: Number("int"),
 *       base: Number("int"),
 *     },
 *   ],
 * };
 * const command = new PutClusterCapacityProvidersCommand(input);
 * const response = await client.send(command);
 * // { // PutClusterCapacityProvidersResponse
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
 * @param PutClusterCapacityProvidersCommandInput - {@link PutClusterCapacityProvidersCommandInput}
 * @returns {@link PutClusterCapacityProvidersCommandOutput}
 * @see {@link PutClusterCapacityProvidersCommandInput} for command's `input` shape.
 * @see {@link PutClusterCapacityProvidersCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in-use and can't be removed.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link UpdateInProgressException} (client fault)
 *  <p>There's already a current Amazon ECS container agent update in progress on the container
 * 			instance that's specified. If the container agent becomes disconnected while it's in a
 * 			transitional stage, such as <code>PENDING</code> or <code>STAGING</code>, the update
 * 			process can get stuck in that state. However, when the agent reconnects, it resumes
 * 			where it stopped previously.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @example To add an existing capacity provider to a cluuster
 * ```javascript
 * // This example adds an existing capacity provider "MyCapacityProvider2" to a cluster that already has the capacity provider "MyCapacityProvider1" associated with it. Both "MyCapacityProvider2" and "MyCapacityProvider1" need to be specified.
 * const input = {
 *   capacityProviders: [
 *     "MyCapacityProvider1",
 *     "MyCapacityProvider2"
 *   ],
 *   cluster: "MyCluster",
 *   defaultCapacityProviderStrategy: [
 *     {
 *       capacityProvider: "MyCapacityProvider1",
 *       weight: 1
 *     },
 *     {
 *       capacityProvider: "MyCapacityProvider2",
 *       weight: 1
 *     }
 *   ]
 * };
 * const command = new PutClusterCapacityProvidersCommand(input);
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
 *             value: "MyCapacityProvider1"
 *           },
 *           {
 *             name: "scalingPolicyName",
 *             value: "ECSManagedAutoScalingPolicy-a1b2c3d4-5678-90ab-cdef-EXAMPLE11111"
 *           }
 *         ],
 *         id: "0fb0c8f4-6edd-4de1-9b09-17e470ee1918",
 *         status: "ACTIVE",
 *         type: "as_policy"
 *       },
 *       {
 *         details: [
 *           {
 *             name: "capacityProviderName",
 *             value: "MyCapacityProvider2"
 *           },
 *           {
 *             name: "scalingPolicyName",
 *             value: "ECSManagedAutoScalingPolicy-a1b2c3d4-5678-90ab-cdef-EXAMPLE22222"
 *           }
 *         ],
 *         id: "ae592060-2382-4663-9476-b015c685593c",
 *         status: "ACTIVE",
 *         type: "as_policy"
 *       }
 *     ],
 *     attachmentsStatus: "UPDATE_IN_PROGRESS",
 *     capacityProviders: [
 *       "MyCapacityProvider1",
 *       "MyCapacityProvider2"
 *     ],
 *     clusterArn: "arn:aws:ecs:us-west-2:123456789012:cluster/MyCluster",
 *     clusterName: "MyCluster",
 *     defaultCapacityProviderStrategy: [
 *       {
 *         base: 0,
 *         capacityProvider: "MyCapacityProvider1",
 *         weight: 1
 *       },
 *       {
 *         base: 0,
 *         capacityProvider: "MyCapacityProvider2",
 *         weight: 1
 *       }
 *     ],
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
 * @example To remove a capacity provider from a cluster
 * ```javascript
 * // This example removes a capacity provider "MyCapacityProvider2" from a cluster that has both "MyCapacityProvider2" and "MyCapacityProvider1" associated with it. Only "MyCapacityProvider1" needs to be specified in this scenario.
 * const input = {
 *   capacityProviders: [
 *     "MyCapacityProvider1"
 *   ],
 *   cluster: "MyCluster",
 *   defaultCapacityProviderStrategy: [
 *     {
 *       base: 0,
 *       capacityProvider: "MyCapacityProvider1",
 *       weight: 1
 *     }
 *   ]
 * };
 * const command = new PutClusterCapacityProvidersCommand(input);
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
 *             value: "MyCapacityProvider1"
 *           },
 *           {
 *             name: "scalingPolicyName",
 *             value: "ECSManagedAutoScalingPolicy-a1b2c3d4-5678-90ab-cdef-EXAMPLE11111"
 *           }
 *         ],
 *         id: "0fb0c8f4-6edd-4de1-9b09-17e470ee1918",
 *         status: "ACTIVE",
 *         type: "as_policy"
 *       },
 *       {
 *         details: [
 *           {
 *             name: "capacityProviderName",
 *             value: "MyCapacityProvider2"
 *           },
 *           {
 *             name: "scalingPolicyName",
 *             value: "ECSManagedAutoScalingPolicy-a1b2c3d4-5678-90ab-cdef-EXAMPLE22222"
 *           }
 *         ],
 *         id: "ae592060-2382-4663-9476-b015c685593c",
 *         status: "DELETING",
 *         type: "as_policy"
 *       }
 *     ],
 *     attachmentsStatus: "UPDATE_IN_PROGRESS",
 *     capacityProviders: [
 *       "MyCapacityProvider1"
 *     ],
 *     clusterArn: "arn:aws:ecs:us-west-2:123456789012:cluster/MyCluster",
 *     clusterName: "MyCluster",
 *     defaultCapacityProviderStrategy: [
 *       {
 *         base: 0,
 *         capacityProvider: "MyCapacityProvider1",
 *         weight: 1
 *       }
 *     ],
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
 * @example To remove all capacity providers from a cluster
 * ```javascript
 * // This example removes all capacity providers associated with a cluster.
 * const input = {
 *   capacityProviders:   [],
 *   cluster: "MyCluster",
 *   defaultCapacityProviderStrategy:   []
 * };
 * const command = new PutClusterCapacityProvidersCommand(input);
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
 *             value: "MyCapacityProvider1"
 *           },
 *           {
 *             name: "scalingPolicyName",
 *             value: "ECSManagedAutoScalingPolicy-a1b2c3d4-5678-90ab-cdef-EXAMPLE11111"
 *           }
 *         ],
 *         id: "0fb0c8f4-6edd-4de1-9b09-17e470ee1918",
 *         status: "DELETING",
 *         type: "as_policy"
 *       },
 *       {
 *         details: [
 *           {
 *             name: "capacityProviderName",
 *             value: "MyCapacityProvider2"
 *           },
 *           {
 *             name: "scalingPolicyName",
 *             value: "ECSManagedAutoScalingPolicy-a1b2c3d4-5678-90ab-cdef-EXAMPLE22222"
 *           }
 *         ],
 *         id: "ae592060-2382-4663-9476-b015c685593c",
 *         status: "DELETING",
 *         type: "as_policy"
 *       }
 *     ],
 *     attachmentsStatus: "UPDATE_IN_PROGRESS",
 *     capacityProviders:     [],
 *     clusterArn: "arn:aws:ecs:us-west-2:123456789012:cluster/MyCluster",
 *     clusterName: "MyCluster",
 *     defaultCapacityProviderStrategy:     [],
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
export class PutClusterCapacityProvidersCommand extends $Command
  .classBuilder<
    PutClusterCapacityProvidersCommandInput,
    PutClusterCapacityProvidersCommandOutput,
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
  .s("AmazonEC2ContainerServiceV20141113", "PutClusterCapacityProviders", {})
  .n("ECSClient", "PutClusterCapacityProvidersCommand")
  .f(void 0, void 0)
  .ser(se_PutClusterCapacityProvidersCommand)
  .de(de_PutClusterCapacityProvidersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutClusterCapacityProvidersRequest;
      output: PutClusterCapacityProvidersResponse;
    };
    sdk: {
      input: PutClusterCapacityProvidersCommandInput;
      output: PutClusterCapacityProvidersCommandOutput;
    };
  };
}
