// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateClusterSettingsRequest, UpdateClusterSettingsResponse } from "../models/models_0";
import { UpdateClusterSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Modifies the settings to use for a cluster.
 *
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
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have authorization to perform the requested action.
 *
 * @throws {@link ClientException} (client fault)
 *
 * These errors are usually caused by a client action. This client action might be using an action or resource on behalf of a user that doesn't have permissions to use the action or resource. Or, it might be specifying an identifier that isn't valid.
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *
 * The specified cluster wasn't found. You can view your available clusters with [ListClusters](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html). Amazon ECS clusters are Region specific.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter isn't valid. Review the available parameters for the API request.
 *
 * For more information about service event errors, see [Amazon ECS service event messages](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html).
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server issue.
 *
 * @throws {@link UpdateInProgressException} (client fault)
 *
 * There's already a current Amazon ECS container agent update in progress on the container instance that's specified. If the container agent becomes disconnected while it's in a transitional stage, such as `PENDING` or `STAGING`, the update process can get stuck in that state. However, when the agent reconnects, it resumes where it stopped previously.
 *
 * @throws {@link ECSServiceException}
 *
 * Base exception class for all service exceptions from ECS service.
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
export class UpdateClusterSettingsCommand extends command<UpdateClusterSettingsCommandInput, UpdateClusterSettingsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateClusterSettings",
  UpdateClusterSettings$
) {
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
