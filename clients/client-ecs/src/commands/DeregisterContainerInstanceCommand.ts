// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeregisterContainerInstanceRequest, DeregisterContainerInstanceResponse } from "../models/models_0";
import { DeregisterContainerInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterContainerInstanceCommand}.
 */
export interface DeregisterContainerInstanceCommandInput extends DeregisterContainerInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterContainerInstanceCommand}.
 */
export interface DeregisterContainerInstanceCommandOutput
  extends DeregisterContainerInstanceResponse,
    __MetadataBearer {}

/**
 * <p>Deregisters an Amazon ECS container instance from the specified cluster. This instance
 * 			is no longer available to run tasks.</p>
 *          <p>If you intend to use the container instance for some other purpose after
 * 			deregistration, we recommend that you stop all of the tasks running on the container
 * 			instance before deregistration. That prevents any orphaned tasks from consuming
 * 			resources.</p>
 *          <p>Deregistering a container instance removes the instance from a cluster, but it doesn't
 * 			terminate the EC2 instance. If you are finished using the instance, be sure to terminate
 * 			it in the Amazon EC2 console to stop billing.</p>
 *          <note>
 *             <p>If you terminate a running container instance, Amazon ECS automatically
 * 				deregisters the instance from your cluster (stopped container instances or instances
 * 				with disconnected agents aren't automatically deregistered when terminated).</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeregisterContainerInstanceCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeregisterContainerInstanceCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // DeregisterContainerInstanceRequest
 *   cluster: "STRING_VALUE",
 *   containerInstance: "STRING_VALUE", // required
 *   force: true || false,
 * };
 * const command = new DeregisterContainerInstanceCommand(input);
 * const response = await client.send(command);
 * // { // DeregisterContainerInstanceResponse
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
 * @param DeregisterContainerInstanceCommandInput - {@link DeregisterContainerInstanceCommandInput}
 * @returns {@link DeregisterContainerInstanceCommandOutput}
 * @see {@link DeregisterContainerInstanceCommandInput} for command's `input` shape.
 * @see {@link DeregisterContainerInstanceCommandOutput} for command's `response` shape.
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
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @example To deregister a container instance from a cluster
 * ```javascript
 * // This example deregisters a container instance from the specified cluster in your default region. If there are still tasks running on the container instance, you must either stop those tasks before deregistering, or use the force option.
 * const input = {
 *   cluster: "default",
 *   containerInstance: "container_instance_UUID",
 *   force: true
 * };
 * const command = new DeregisterContainerInstanceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeregisterContainerInstanceCommand extends $Command
  .classBuilder<
    DeregisterContainerInstanceCommandInput,
    DeregisterContainerInstanceCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerServiceV20141113", "DeregisterContainerInstance", {})
  .n("ECSClient", "DeregisterContainerInstanceCommand")
  .sc(DeregisterContainerInstance$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterContainerInstanceRequest;
      output: DeregisterContainerInstanceResponse;
    };
    sdk: {
      input: DeregisterContainerInstanceCommandInput;
      output: DeregisterContainerInstanceCommandOutput;
    };
  };
}
