// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeClustersRequest, DescribeClustersResponse } from "../models/models_0";
import { DescribeClusters } from "../schemas/schemas_0";

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
 * <p>Describes one or more of your clusters.</p>
 *          <p> For CLI
 * 			examples, see <a href="https://github.com/aws/aws-cli/blob/develop/awscli/examples/ecs/describe-clusters.rst">describe-clusters.rst</a> on GitHub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeClustersCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeClustersCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // DescribeClustersRequest
 *   clusters: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   include: [ // ClusterFieldList
 *     "ATTACHMENTS" || "CONFIGURATIONS" || "SETTINGS" || "STATISTICS" || "TAGS",
 *   ],
 * };
 * const command = new DescribeClustersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClustersResponse
 * //   clusters: [ // Clusters
 * //     { // Cluster
 * //       clusterArn: "STRING_VALUE",
 * //       clusterName: "STRING_VALUE",
 * //       configuration: { // ClusterConfiguration
 * //         executeCommandConfiguration: { // ExecuteCommandConfiguration
 * //           kmsKeyId: "STRING_VALUE",
 * //           logging: "NONE" || "DEFAULT" || "OVERRIDE",
 * //           logConfiguration: { // ExecuteCommandLogConfiguration
 * //             cloudWatchLogGroupName: "STRING_VALUE",
 * //             cloudWatchEncryptionEnabled: true || false,
 * //             s3BucketName: "STRING_VALUE",
 * //             s3EncryptionEnabled: true || false,
 * //             s3KeyPrefix: "STRING_VALUE",
 * //           },
 * //         },
 * //         managedStorageConfiguration: { // ManagedStorageConfiguration
 * //           kmsKeyId: "STRING_VALUE",
 * //           fargateEphemeralStorageKmsKeyId: "STRING_VALUE",
 * //         },
 * //       },
 * //       status: "STRING_VALUE",
 * //       registeredContainerInstancesCount: Number("int"),
 * //       runningTasksCount: Number("int"),
 * //       pendingTasksCount: Number("int"),
 * //       activeServicesCount: Number("int"),
 * //       statistics: [ // Statistics
 * //         { // KeyValuePair
 * //           name: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       tags: [ // Tags
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       settings: [ // ClusterSettings
 * //         { // ClusterSetting
 * //           name: "containerInsights",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       capacityProviders: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       defaultCapacityProviderStrategy: [ // CapacityProviderStrategy
 * //         { // CapacityProviderStrategyItem
 * //           capacityProvider: "STRING_VALUE", // required
 * //           weight: Number("int"),
 * //           base: Number("int"),
 * //         },
 * //       ],
 * //       attachments: [ // Attachments
 * //         { // Attachment
 * //           id: "STRING_VALUE",
 * //           type: "STRING_VALUE",
 * //           status: "STRING_VALUE",
 * //           details: [ // AttachmentDetails
 * //             {
 * //               name: "STRING_VALUE",
 * //               value: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       attachmentsStatus: "STRING_VALUE",
 * //       serviceConnectDefaults: { // ClusterServiceConnectDefaults
 * //         namespace: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   failures: [ // Failures
 * //     { // Failure
 * //       arn: "STRING_VALUE",
 * //       reason: "STRING_VALUE",
 * //       detail: "STRING_VALUE",
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
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @example To describe a cluster
 * ```javascript
 * // This example provides a description of the specified cluster in your default region.
 * const input = {
 *   clusters: [
 *     "default"
 *   ]
 * };
 * const command = new DescribeClustersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clusters: [
 *     {
 *       clusterArn: "arn:aws:ecs:us-east-1:aws_account_id:cluster/default",
 *       clusterName: "default",
 *       status: "ACTIVE"
 *     }
 *   ],
 *   failures:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeClustersCommand extends $Command
  .classBuilder<
    DescribeClustersCommandInput,
    DescribeClustersCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerServiceV20141113", "DescribeClusters", {})
  .n("ECSClient", "DescribeClustersCommand")
  .sc(DescribeClusters)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClustersRequest;
      output: DescribeClustersResponse;
    };
    sdk: {
      input: DescribeClustersCommandInput;
      output: DescribeClustersCommandOutput;
    };
  };
}
