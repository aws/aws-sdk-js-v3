// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateContainerAgentRequest, UpdateContainerAgentResponse } from "../models/models_1";
import { de_UpdateContainerAgentCommand, se_UpdateContainerAgentCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateContainerAgentCommand}.
 */
export interface UpdateContainerAgentCommandInput extends UpdateContainerAgentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContainerAgentCommand}.
 */
export interface UpdateContainerAgentCommandOutput extends UpdateContainerAgentResponse, __MetadataBearer {}

/**
 * <p>Updates the Amazon ECS container agent on a specified container instance. Updating the
 * 			Amazon ECS container agent doesn't interrupt running tasks or services on the container
 * 			instance. The process for updating the agent differs depending on whether your container
 * 			instance was launched with the Amazon ECS-optimized AMI or another operating system.</p>
 *          <note>
 *             <p>The <code>UpdateContainerAgent</code> API isn't supported for container instances
 * 				using the Amazon ECS-optimized Amazon Linux 2 (arm64) AMI. To update the container agent,
 * 				you can update the <code>ecs-init</code> package. This updates the agent. For more
 * 				information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/agent-update-ecs-ami.html">Updating the
 * 					Amazon ECS container agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          </note>
 *          <note>
 *             <p>Agent updates with the <code>UpdateContainerAgent</code> API operation do not
 * 				apply to Windows container instances. We recommend that you launch new container
 * 				instances to update the agent version in your Windows clusters.</p>
 *          </note>
 *          <p>The <code>UpdateContainerAgent</code> API requires an Amazon ECS-optimized AMI or Amazon
 * 			Linux AMI with the <code>ecs-init</code> service installed and running. For help
 * 			updating the Amazon ECS container agent on other operating systems, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html#manually_update_agent">Manually updating the Amazon ECS container agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, UpdateContainerAgentCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, UpdateContainerAgentCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // UpdateContainerAgentRequest
 *   cluster: "STRING_VALUE",
 *   containerInstance: "STRING_VALUE", // required
 * };
 * const command = new UpdateContainerAgentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateContainerAgentResponse
 * //   containerInstance: { // ContainerInstance
 * //     containerInstanceArn: "STRING_VALUE",
 * //     ec2InstanceId: "STRING_VALUE",
 * //     capacityProviderName: "STRING_VALUE",
 * //     version: Number("long"),
 * //     versionInfo: { // VersionInfo
 * //       agentVersion: "STRING_VALUE",
 * //       agentHash: "STRING_VALUE",
 * //       dockerVersion: "STRING_VALUE",
 * //     },
 * //     remainingResources: [ // Resources
 * //       { // Resource
 * //         name: "STRING_VALUE",
 * //         type: "STRING_VALUE",
 * //         doubleValue: Number("double"),
 * //         longValue: Number("long"),
 * //         integerValue: Number("int"),
 * //         stringSetValue: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     registeredResources: [
 * //       {
 * //         name: "STRING_VALUE",
 * //         type: "STRING_VALUE",
 * //         doubleValue: Number("double"),
 * //         longValue: Number("long"),
 * //         integerValue: Number("int"),
 * //         stringSetValue: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     status: "STRING_VALUE",
 * //     statusReason: "STRING_VALUE",
 * //     agentConnected: true || false,
 * //     runningTasksCount: Number("int"),
 * //     pendingTasksCount: Number("int"),
 * //     agentUpdateStatus: "PENDING" || "STAGING" || "STAGED" || "UPDATING" || "UPDATED" || "FAILED",
 * //     attributes: [ // Attributes
 * //       { // Attribute
 * //         name: "STRING_VALUE", // required
 * //         value: "STRING_VALUE",
 * //         targetType: "container-instance",
 * //         targetId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     registeredAt: new Date("TIMESTAMP"),
 * //     attachments: [ // Attachments
 * //       { // Attachment
 * //         id: "STRING_VALUE",
 * //         type: "STRING_VALUE",
 * //         status: "STRING_VALUE",
 * //         details: [ // AttachmentDetails
 * //           { // KeyValuePair
 * //             name: "STRING_VALUE",
 * //             value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     tags: [ // Tags
 * //       { // Tag
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     healthStatus: { // ContainerInstanceHealthStatus
 * //       overallStatus: "OK" || "IMPAIRED" || "INSUFFICIENT_DATA" || "INITIALIZING",
 * //       details: [ // InstanceHealthCheckResultList
 * //         { // InstanceHealthCheckResult
 * //           type: "CONTAINER_RUNTIME",
 * //           status: "OK" || "IMPAIRED" || "INSUFFICIENT_DATA" || "INITIALIZING",
 * //           lastUpdated: new Date("TIMESTAMP"),
 * //           lastStatusChange: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateContainerAgentCommandInput - {@link UpdateContainerAgentCommandInput}
 * @returns {@link UpdateContainerAgentCommandOutput}
 * @see {@link UpdateContainerAgentCommandInput} for command's `input` shape.
 * @see {@link UpdateContainerAgentCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *          <p>The following list includes additional causes for the error:</p>
 *          <ul>
 *             <li>
 *                <p>The <code>RunTask</code> could not be processed because you use managed
 * 					scaling and there is a capacity error because the quota of tasks in the
 * 						<code>PROVISIONING</code> per cluster has been reached. For information
 * 					about the service quotas, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-quotas.html">Amazon ECS
 * 						service quotas</a>.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html">ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service event messages</a>. </p>
 *
 * @throws {@link MissingVersionException} (client fault)
 *  <p>Amazon ECS can't determine the current version of the Amazon ECS container agent on the
 * 			container instance and doesn't have enough information to proceed with an update. This
 * 			could be because the agent running on the container instance is a previous or custom
 * 			version that doesn't use our version information.</p>
 *
 * @throws {@link NoUpdateAvailableException} (client fault)
 *  <p>There's no update available for this Amazon ECS container agent. This might be because the
 * 			agent is already running the latest version or because it's so old that there's no
 * 			update path to the current version.</p>
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
 * @public
 * @example To update the container agent version on a container instance
 * ```javascript
 * // This example updates the container agent version on the specified container instance in cluster MyCluster.
 * const input = {
 *   "cluster": "MyCluster",
 *   "containerInstance": "53ac7152-dcd1-4102-81f5-208962864132"
 * };
 * const command = new UpdateContainerAgentCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "containerInstance": {
 *     "agentConnected": true,
 *     "agentUpdateStatus": "PENDING",
 *     "versionInfo": {
 *       "agentHash": "4023248",
 *       "agentVersion": "1.0.0",
 *       "dockerVersion": "DockerVersion: 1.5.0"
 *     }
 *   }
 * }
 * *\/
 * // example id: to-update-the-container-agent-version-on-a-container-instance-1734628653210
 * ```
 *
 */
export class UpdateContainerAgentCommand extends $Command
  .classBuilder<
    UpdateContainerAgentCommandInput,
    UpdateContainerAgentCommandOutput,
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
  .s("AmazonEC2ContainerServiceV20141113", "UpdateContainerAgent", {})
  .n("ECSClient", "UpdateContainerAgentCommand")
  .f(void 0, void 0)
  .ser(se_UpdateContainerAgentCommand)
  .de(de_UpdateContainerAgentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateContainerAgentRequest;
      output: UpdateContainerAgentResponse;
    };
    sdk: {
      input: UpdateContainerAgentCommandInput;
      output: UpdateContainerAgentCommandOutput;
    };
  };
}
