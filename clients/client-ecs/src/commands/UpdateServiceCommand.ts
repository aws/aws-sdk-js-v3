// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateServiceRequest, UpdateServiceResponse } from "../models/models_1";
import { de_UpdateServiceCommand, se_UpdateServiceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateServiceCommand}.
 */
export interface UpdateServiceCommandInput extends UpdateServiceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateServiceCommand}.
 */
export interface UpdateServiceCommandOutput extends UpdateServiceResponse, __MetadataBearer {}

/**
 * <p>Modifies the parameters of a service.</p>
 *          <note>
 *             <p>On March 21, 2024, a change was made to resolve the task definition revision before authorization. When a task definition revision is not specified, authorization will occur using the latest revision of a task definition.</p>
 *          </note>
 *          <p>For services using the rolling update (<code>ECS</code>) you can update the desired
 * 			count, deployment configuration, network configuration, load balancers, service
 * 			registries, enable ECS managed tags option, propagate tags option, task placement
 * 			constraints and strategies, and task definition. When you update any of these
 * 			parameters, Amazon ECS starts new tasks with the new configuration. </p>
 *          <p>You can attach Amazon EBS volumes to Amazon ECS tasks by configuring the volume when starting or
 * 			running a task, or when creating or updating a service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-volumes.html#ebs-volume-types">Amazon EBS volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. You can update
 * 			your volume configurations and trigger a new deployment.
 * 				<code>volumeConfigurations</code> is only supported for REPLICA service and not
 * 			DAEMON service. If you leave <code>volumeConfigurations</code>
 *             <code>null</code>, it doesn't trigger a new deployment. For more information on volumes,
 * 			see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-volumes.html#ebs-volume-types">Amazon EBS volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <p>For services using the blue/green (<code>CODE_DEPLOY</code>) deployment controller,
 * 			only the desired count, deployment configuration, health check grace period, task
 * 			placement constraints and strategies, enable ECS managed tags option, and propagate tags
 * 			can be updated using this API. If the network configuration, platform version, task
 * 			definition, or load balancer need to be updated, create a new CodeDeploy deployment. For more
 * 			information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeployment.html">CreateDeployment</a> in the <i>CodeDeploy API Reference</i>.</p>
 *          <p>For services using an external deployment controller, you can update only the desired
 * 			count, task placement constraints and strategies, health check grace period, enable ECS
 * 			managed tags option, and propagate tags option, using this API. If the launch type, load
 * 			balancer, network configuration, platform version, or task definition need to be
 * 			updated, create a new task set For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateTaskSet.html">CreateTaskSet</a>.</p>
 *          <p>You can add to or subtract from the number of instantiations of a task definition in a
 * 			service by specifying the cluster that the service is running in and a new
 * 				<code>desiredCount</code> parameter.</p>
 *          <p>You can attach Amazon EBS volumes to Amazon ECS tasks by configuring the volume when starting or
 * 			running a task, or when creating or updating a service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-volumes.html#ebs-volume-types">Amazon EBS volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <p>If you have updated the container image of your application, you can create a new task
 * 			definition with that image and deploy it to your service. The service scheduler uses the
 * 			minimum healthy percent and maximum percent parameters (in the service's deployment
 * 			configuration) to determine the deployment strategy.</p>
 *          <note>
 *             <p>If your updated Docker image uses the same tag as what is in the existing task
 * 				definition for your service (for example, <code>my_image:latest</code>), you don't
 * 				need to create a new revision of your task definition. You can update the service
 * 				using the <code>forceNewDeployment</code> option. The new tasks launched by the
 * 				deployment pull the current image/tag combination from your repository when they
 * 				start.</p>
 *          </note>
 *          <p>You can also update the deployment configuration of a service. When a deployment is
 * 			triggered by updating the task definition of a service, the service scheduler uses the
 * 			deployment configuration parameters, <code>minimumHealthyPercent</code> and
 * 				<code>maximumPercent</code>, to determine the deployment strategy.</p>
 *          <ul>
 *             <li>
 *                <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore
 * 						<code>desiredCount</code> temporarily during a deployment. For example, if
 * 						<code>desiredCount</code> is four tasks, a minimum of 50% allows the
 * 					scheduler to stop two existing tasks before starting two new tasks. Tasks for
 * 					services that don't use a load balancer are considered healthy if they're in the
 * 						<code>RUNNING</code> state. Tasks for services that use a load balancer are
 * 					considered healthy if they're in the <code>RUNNING</code> state and are reported
 * 					as healthy by the load balancer.</p>
 *             </li>
 *             <li>
 *                <p>The <code>maximumPercent</code> parameter represents an upper limit on the
 * 					number of running tasks during a deployment. You can use it to define the
 * 					deployment batch size. For example, if <code>desiredCount</code> is four tasks,
 * 					a maximum of 200% starts four new tasks before stopping the four older tasks
 * 					(provided that the cluster resources required to do this are available).</p>
 *             </li>
 *          </ul>
 *          <p>When <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateService.html">UpdateService</a>
 * 			stops a task during a deployment, the equivalent of <code>docker stop</code> is issued
 * 			to the containers running in the task. This results in a <code>SIGTERM</code> and a
 * 			30-second timeout. After this, <code>SIGKILL</code> is sent and the containers are
 * 			forcibly stopped. If the container handles the <code>SIGTERM</code> gracefully and exits
 * 			within 30 seconds from receiving it, no <code>SIGKILL</code> is sent.</p>
 *          <p>When the service scheduler launches new tasks, it determines task placement in your
 * 			cluster with the following logic.</p>
 *          <ul>
 *             <li>
 *                <p>Determine which of the container instances in your cluster can support your
 * 					service's task definition. For example, they have the required CPU, memory,
 * 					ports, and container instance attributes.</p>
 *             </li>
 *             <li>
 *                <p>By default, the service scheduler attempts to balance tasks across
 * 					Availability Zones in this manner even though you can choose a different
 * 					placement strategy.</p>
 *                <ul>
 *                   <li>
 *                      <p>Sort the valid container instances by the fewest number of running
 * 							tasks for this service in the same Availability Zone as the instance.
 * 							For example, if zone A has one running service task and zones B and C
 * 							each have zero, valid container instances in either zone B or C are
 * 							considered optimal for placement.</p>
 *                   </li>
 *                   <li>
 *                      <p>Place the new service task on a valid container instance in an optimal
 * 							Availability Zone (based on the previous steps), favoring container
 * 							instances with the fewest number of running tasks for this
 * 							service.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>When the service scheduler stops running tasks, it attempts to maintain balance across
 * 			the Availability Zones in your cluster using the following logic: </p>
 *          <ul>
 *             <li>
 *                <p>Sort the container instances by the largest number of running tasks for this
 * 					service in the same Availability Zone as the instance. For example, if zone A
 * 					has one running service task and zones B and C each have two, container
 * 					instances in either zone B or C are considered optimal for termination.</p>
 *             </li>
 *             <li>
 *                <p>Stop the task on a container instance in an optimal Availability Zone (based
 * 					on the previous steps), favoring container instances with the largest number of
 * 					running tasks for this service.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, UpdateServiceCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, UpdateServiceCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // UpdateServiceRequest
 *   cluster: "STRING_VALUE",
 *   service: "STRING_VALUE", // required
 *   desiredCount: Number("int"),
 *   taskDefinition: "STRING_VALUE",
 *   capacityProviderStrategy: [ // CapacityProviderStrategy
 *     { // CapacityProviderStrategyItem
 *       capacityProvider: "STRING_VALUE", // required
 *       weight: Number("int"),
 *       base: Number("int"),
 *     },
 *   ],
 *   deploymentConfiguration: { // DeploymentConfiguration
 *     deploymentCircuitBreaker: { // DeploymentCircuitBreaker
 *       enable: true || false, // required
 *       rollback: true || false, // required
 *     },
 *     maximumPercent: Number("int"),
 *     minimumHealthyPercent: Number("int"),
 *     alarms: { // DeploymentAlarms
 *       alarmNames: [ // StringList // required
 *         "STRING_VALUE",
 *       ],
 *       rollback: true || false, // required
 *       enable: true || false, // required
 *     },
 *     strategy: "ROLLING" || "BLUE_GREEN",
 *     bakeTimeInMinutes: Number("int"),
 *     lifecycleHooks: [ // DeploymentLifecycleHookList
 *       { // DeploymentLifecycleHook
 *         hookTargetArn: "STRING_VALUE",
 *         roleArn: "STRING_VALUE",
 *         lifecycleStages: [ // DeploymentLifecycleHookStageList
 *           "RECONCILE_SERVICE" || "PRE_SCALE_UP" || "POST_SCALE_UP" || "TEST_TRAFFIC_SHIFT" || "POST_TEST_TRAFFIC_SHIFT" || "PRODUCTION_TRAFFIC_SHIFT" || "POST_PRODUCTION_TRAFFIC_SHIFT",
 *         ],
 *         hookDetails: "DOCUMENT_VALUE",
 *       },
 *     ],
 *   },
 *   availabilityZoneRebalancing: "ENABLED" || "DISABLED",
 *   networkConfiguration: { // NetworkConfiguration
 *     awsvpcConfiguration: { // AwsVpcConfiguration
 *       subnets: [ // required
 *         "STRING_VALUE",
 *       ],
 *       securityGroups: [
 *         "STRING_VALUE",
 *       ],
 *       assignPublicIp: "ENABLED" || "DISABLED",
 *     },
 *   },
 *   placementConstraints: [ // PlacementConstraints
 *     { // PlacementConstraint
 *       type: "distinctInstance" || "memberOf",
 *       expression: "STRING_VALUE",
 *     },
 *   ],
 *   placementStrategy: [ // PlacementStrategies
 *     { // PlacementStrategy
 *       type: "random" || "spread" || "binpack",
 *       field: "STRING_VALUE",
 *     },
 *   ],
 *   platformVersion: "STRING_VALUE",
 *   forceNewDeployment: true || false,
 *   healthCheckGracePeriodSeconds: Number("int"),
 *   deploymentController: { // DeploymentController
 *     type: "ECS" || "CODE_DEPLOY" || "EXTERNAL", // required
 *   },
 *   enableExecuteCommand: true || false,
 *   enableECSManagedTags: true || false,
 *   loadBalancers: [ // LoadBalancers
 *     { // LoadBalancer
 *       targetGroupArn: "STRING_VALUE",
 *       loadBalancerName: "STRING_VALUE",
 *       containerName: "STRING_VALUE",
 *       containerPort: Number("int"),
 *       advancedConfiguration: { // AdvancedConfiguration
 *         alternateTargetGroupArn: "STRING_VALUE",
 *         productionListenerRule: "STRING_VALUE",
 *         testListenerRule: "STRING_VALUE",
 *         roleArn: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   propagateTags: "TASK_DEFINITION" || "SERVICE" || "NONE",
 *   serviceRegistries: [ // ServiceRegistries
 *     { // ServiceRegistry
 *       registryArn: "STRING_VALUE",
 *       port: Number("int"),
 *       containerName: "STRING_VALUE",
 *       containerPort: Number("int"),
 *     },
 *   ],
 *   serviceConnectConfiguration: { // ServiceConnectConfiguration
 *     enabled: true || false, // required
 *     namespace: "STRING_VALUE",
 *     services: [ // ServiceConnectServiceList
 *       { // ServiceConnectService
 *         portName: "STRING_VALUE", // required
 *         discoveryName: "STRING_VALUE",
 *         clientAliases: [ // ServiceConnectClientAliasList
 *           { // ServiceConnectClientAlias
 *             port: Number("int"), // required
 *             dnsName: "STRING_VALUE",
 *             testTrafficRules: { // ServiceConnectTestTrafficRules
 *               header: { // ServiceConnectTestTrafficHeaderRules
 *                 name: "STRING_VALUE", // required
 *                 value: { // ServiceConnectTestTrafficHeaderMatchRules
 *                   exact: "STRING_VALUE", // required
 *                 },
 *               },
 *             },
 *           },
 *         ],
 *         ingressPortOverride: Number("int"),
 *         timeout: { // TimeoutConfiguration
 *           idleTimeoutSeconds: Number("int"),
 *           perRequestTimeoutSeconds: Number("int"),
 *         },
 *         tls: { // ServiceConnectTlsConfiguration
 *           issuerCertificateAuthority: { // ServiceConnectTlsCertificateAuthority
 *             awsPcaAuthorityArn: "STRING_VALUE",
 *           },
 *           kmsKey: "STRING_VALUE",
 *           roleArn: "STRING_VALUE",
 *         },
 *       },
 *     ],
 *     logConfiguration: { // LogConfiguration
 *       logDriver: "json-file" || "syslog" || "journald" || "gelf" || "fluentd" || "awslogs" || "splunk" || "awsfirelens", // required
 *       options: { // LogConfigurationOptionsMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       secretOptions: [ // SecretList
 *         { // Secret
 *           name: "STRING_VALUE", // required
 *           valueFrom: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   },
 *   volumeConfigurations: [ // ServiceVolumeConfigurations
 *     { // ServiceVolumeConfiguration
 *       name: "STRING_VALUE", // required
 *       managedEBSVolume: { // ServiceManagedEBSVolumeConfiguration
 *         encrypted: true || false,
 *         kmsKeyId: "STRING_VALUE",
 *         volumeType: "STRING_VALUE",
 *         sizeInGiB: Number("int"),
 *         snapshotId: "STRING_VALUE",
 *         volumeInitializationRate: Number("int"),
 *         iops: Number("int"),
 *         throughput: Number("int"),
 *         tagSpecifications: [ // EBSTagSpecifications
 *           { // EBSTagSpecification
 *             resourceType: "volume", // required
 *             tags: [ // Tags
 *               { // Tag
 *                 key: "STRING_VALUE",
 *                 value: "STRING_VALUE",
 *               },
 *             ],
 *             propagateTags: "TASK_DEFINITION" || "SERVICE" || "NONE",
 *           },
 *         ],
 *         roleArn: "STRING_VALUE", // required
 *         filesystemType: "ext3" || "ext4" || "xfs" || "ntfs",
 *       },
 *     },
 *   ],
 *   vpcLatticeConfigurations: [ // VpcLatticeConfigurations
 *     { // VpcLatticeConfiguration
 *       roleArn: "STRING_VALUE", // required
 *       targetGroupArn: "STRING_VALUE", // required
 *       portName: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateServiceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServiceResponse
 * //   service: { // Service
 * //     serviceArn: "STRING_VALUE",
 * //     serviceName: "STRING_VALUE",
 * //     clusterArn: "STRING_VALUE",
 * //     loadBalancers: [ // LoadBalancers
 * //       { // LoadBalancer
 * //         targetGroupArn: "STRING_VALUE",
 * //         loadBalancerName: "STRING_VALUE",
 * //         containerName: "STRING_VALUE",
 * //         containerPort: Number("int"),
 * //         advancedConfiguration: { // AdvancedConfiguration
 * //           alternateTargetGroupArn: "STRING_VALUE",
 * //           productionListenerRule: "STRING_VALUE",
 * //           testListenerRule: "STRING_VALUE",
 * //           roleArn: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     serviceRegistries: [ // ServiceRegistries
 * //       { // ServiceRegistry
 * //         registryArn: "STRING_VALUE",
 * //         port: Number("int"),
 * //         containerName: "STRING_VALUE",
 * //         containerPort: Number("int"),
 * //       },
 * //     ],
 * //     status: "STRING_VALUE",
 * //     desiredCount: Number("int"),
 * //     runningCount: Number("int"),
 * //     pendingCount: Number("int"),
 * //     launchType: "EC2" || "FARGATE" || "EXTERNAL",
 * //     capacityProviderStrategy: [ // CapacityProviderStrategy
 * //       { // CapacityProviderStrategyItem
 * //         capacityProvider: "STRING_VALUE", // required
 * //         weight: Number("int"),
 * //         base: Number("int"),
 * //       },
 * //     ],
 * //     platformVersion: "STRING_VALUE",
 * //     platformFamily: "STRING_VALUE",
 * //     taskDefinition: "STRING_VALUE",
 * //     deploymentConfiguration: { // DeploymentConfiguration
 * //       deploymentCircuitBreaker: { // DeploymentCircuitBreaker
 * //         enable: true || false, // required
 * //         rollback: true || false, // required
 * //       },
 * //       maximumPercent: Number("int"),
 * //       minimumHealthyPercent: Number("int"),
 * //       alarms: { // DeploymentAlarms
 * //         alarmNames: [ // StringList // required
 * //           "STRING_VALUE",
 * //         ],
 * //         rollback: true || false, // required
 * //         enable: true || false, // required
 * //       },
 * //       strategy: "ROLLING" || "BLUE_GREEN",
 * //       bakeTimeInMinutes: Number("int"),
 * //       lifecycleHooks: [ // DeploymentLifecycleHookList
 * //         { // DeploymentLifecycleHook
 * //           hookTargetArn: "STRING_VALUE",
 * //           roleArn: "STRING_VALUE",
 * //           lifecycleStages: [ // DeploymentLifecycleHookStageList
 * //             "RECONCILE_SERVICE" || "PRE_SCALE_UP" || "POST_SCALE_UP" || "TEST_TRAFFIC_SHIFT" || "POST_TEST_TRAFFIC_SHIFT" || "PRODUCTION_TRAFFIC_SHIFT" || "POST_PRODUCTION_TRAFFIC_SHIFT",
 * //           ],
 * //           hookDetails: "DOCUMENT_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     taskSets: [ // TaskSets
 * //       { // TaskSet
 * //         id: "STRING_VALUE",
 * //         taskSetArn: "STRING_VALUE",
 * //         serviceArn: "STRING_VALUE",
 * //         clusterArn: "STRING_VALUE",
 * //         startedBy: "STRING_VALUE",
 * //         externalId: "STRING_VALUE",
 * //         status: "STRING_VALUE",
 * //         taskDefinition: "STRING_VALUE",
 * //         computedDesiredCount: Number("int"),
 * //         pendingCount: Number("int"),
 * //         runningCount: Number("int"),
 * //         createdAt: new Date("TIMESTAMP"),
 * //         updatedAt: new Date("TIMESTAMP"),
 * //         launchType: "EC2" || "FARGATE" || "EXTERNAL",
 * //         capacityProviderStrategy: [
 * //           {
 * //             capacityProvider: "STRING_VALUE", // required
 * //             weight: Number("int"),
 * //             base: Number("int"),
 * //           },
 * //         ],
 * //         platformVersion: "STRING_VALUE",
 * //         platformFamily: "STRING_VALUE",
 * //         networkConfiguration: { // NetworkConfiguration
 * //           awsvpcConfiguration: { // AwsVpcConfiguration
 * //             subnets: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //             securityGroups: [
 * //               "STRING_VALUE",
 * //             ],
 * //             assignPublicIp: "ENABLED" || "DISABLED",
 * //           },
 * //         },
 * //         loadBalancers: [
 * //           {
 * //             targetGroupArn: "STRING_VALUE",
 * //             loadBalancerName: "STRING_VALUE",
 * //             containerName: "STRING_VALUE",
 * //             containerPort: Number("int"),
 * //             advancedConfiguration: {
 * //               alternateTargetGroupArn: "STRING_VALUE",
 * //               productionListenerRule: "STRING_VALUE",
 * //               testListenerRule: "STRING_VALUE",
 * //               roleArn: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         serviceRegistries: [
 * //           {
 * //             registryArn: "STRING_VALUE",
 * //             port: Number("int"),
 * //             containerName: "STRING_VALUE",
 * //             containerPort: Number("int"),
 * //           },
 * //         ],
 * //         scale: { // Scale
 * //           value: Number("double"),
 * //           unit: "PERCENT",
 * //         },
 * //         stabilityStatus: "STEADY_STATE" || "STABILIZING",
 * //         stabilityStatusAt: new Date("TIMESTAMP"),
 * //         tags: [ // Tags
 * //           { // Tag
 * //             key: "STRING_VALUE",
 * //             value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         fargateEphemeralStorage: { // DeploymentEphemeralStorage
 * //           kmsKeyId: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     deployments: [ // Deployments
 * //       { // Deployment
 * //         id: "STRING_VALUE",
 * //         status: "STRING_VALUE",
 * //         taskDefinition: "STRING_VALUE",
 * //         desiredCount: Number("int"),
 * //         pendingCount: Number("int"),
 * //         runningCount: Number("int"),
 * //         failedTasks: Number("int"),
 * //         createdAt: new Date("TIMESTAMP"),
 * //         updatedAt: new Date("TIMESTAMP"),
 * //         capacityProviderStrategy: [
 * //           {
 * //             capacityProvider: "STRING_VALUE", // required
 * //             weight: Number("int"),
 * //             base: Number("int"),
 * //           },
 * //         ],
 * //         launchType: "EC2" || "FARGATE" || "EXTERNAL",
 * //         platformVersion: "STRING_VALUE",
 * //         platformFamily: "STRING_VALUE",
 * //         networkConfiguration: {
 * //           awsvpcConfiguration: {
 * //             subnets: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //             securityGroups: [
 * //               "STRING_VALUE",
 * //             ],
 * //             assignPublicIp: "ENABLED" || "DISABLED",
 * //           },
 * //         },
 * //         rolloutState: "COMPLETED" || "FAILED" || "IN_PROGRESS",
 * //         rolloutStateReason: "STRING_VALUE",
 * //         serviceConnectConfiguration: { // ServiceConnectConfiguration
 * //           enabled: true || false, // required
 * //           namespace: "STRING_VALUE",
 * //           services: [ // ServiceConnectServiceList
 * //             { // ServiceConnectService
 * //               portName: "STRING_VALUE", // required
 * //               discoveryName: "STRING_VALUE",
 * //               clientAliases: [ // ServiceConnectClientAliasList
 * //                 { // ServiceConnectClientAlias
 * //                   port: Number("int"), // required
 * //                   dnsName: "STRING_VALUE",
 * //                   testTrafficRules: { // ServiceConnectTestTrafficRules
 * //                     header: { // ServiceConnectTestTrafficHeaderRules
 * //                       name: "STRING_VALUE", // required
 * //                       value: { // ServiceConnectTestTrafficHeaderMatchRules
 * //                         exact: "STRING_VALUE", // required
 * //                       },
 * //                     },
 * //                   },
 * //                 },
 * //               ],
 * //               ingressPortOverride: Number("int"),
 * //               timeout: { // TimeoutConfiguration
 * //                 idleTimeoutSeconds: Number("int"),
 * //                 perRequestTimeoutSeconds: Number("int"),
 * //               },
 * //               tls: { // ServiceConnectTlsConfiguration
 * //                 issuerCertificateAuthority: { // ServiceConnectTlsCertificateAuthority
 * //                   awsPcaAuthorityArn: "STRING_VALUE",
 * //                 },
 * //                 kmsKey: "STRING_VALUE",
 * //                 roleArn: "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //           logConfiguration: { // LogConfiguration
 * //             logDriver: "json-file" || "syslog" || "journald" || "gelf" || "fluentd" || "awslogs" || "splunk" || "awsfirelens", // required
 * //             options: { // LogConfigurationOptionsMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             secretOptions: [ // SecretList
 * //               { // Secret
 * //                 name: "STRING_VALUE", // required
 * //                 valueFrom: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         serviceConnectResources: [ // ServiceConnectServiceResourceList
 * //           { // ServiceConnectServiceResource
 * //             discoveryName: "STRING_VALUE",
 * //             discoveryArn: "STRING_VALUE",
 * //           },
 * //         ],
 * //         volumeConfigurations: [ // ServiceVolumeConfigurations
 * //           { // ServiceVolumeConfiguration
 * //             name: "STRING_VALUE", // required
 * //             managedEBSVolume: { // ServiceManagedEBSVolumeConfiguration
 * //               encrypted: true || false,
 * //               kmsKeyId: "STRING_VALUE",
 * //               volumeType: "STRING_VALUE",
 * //               sizeInGiB: Number("int"),
 * //               snapshotId: "STRING_VALUE",
 * //               volumeInitializationRate: Number("int"),
 * //               iops: Number("int"),
 * //               throughput: Number("int"),
 * //               tagSpecifications: [ // EBSTagSpecifications
 * //                 { // EBSTagSpecification
 * //                   resourceType: "volume", // required
 * //                   tags: [
 * //                     {
 * //                       key: "STRING_VALUE",
 * //                       value: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   propagateTags: "TASK_DEFINITION" || "SERVICE" || "NONE",
 * //                 },
 * //               ],
 * //               roleArn: "STRING_VALUE", // required
 * //               filesystemType: "ext3" || "ext4" || "xfs" || "ntfs",
 * //             },
 * //           },
 * //         ],
 * //         fargateEphemeralStorage: {
 * //           kmsKeyId: "STRING_VALUE",
 * //         },
 * //         vpcLatticeConfigurations: [ // VpcLatticeConfigurations
 * //           { // VpcLatticeConfiguration
 * //             roleArn: "STRING_VALUE", // required
 * //             targetGroupArn: "STRING_VALUE", // required
 * //             portName: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     roleArn: "STRING_VALUE",
 * //     events: [ // ServiceEvents
 * //       { // ServiceEvent
 * //         id: "STRING_VALUE",
 * //         createdAt: new Date("TIMESTAMP"),
 * //         message: "STRING_VALUE",
 * //       },
 * //     ],
 * //     createdAt: new Date("TIMESTAMP"),
 * //     placementConstraints: [ // PlacementConstraints
 * //       { // PlacementConstraint
 * //         type: "distinctInstance" || "memberOf",
 * //         expression: "STRING_VALUE",
 * //       },
 * //     ],
 * //     placementStrategy: [ // PlacementStrategies
 * //       { // PlacementStrategy
 * //         type: "random" || "spread" || "binpack",
 * //         field: "STRING_VALUE",
 * //       },
 * //     ],
 * //     networkConfiguration: {
 * //       awsvpcConfiguration: {
 * //         subnets: "<StringList>", // required
 * //         securityGroups: "<StringList>",
 * //         assignPublicIp: "ENABLED" || "DISABLED",
 * //       },
 * //     },
 * //     healthCheckGracePeriodSeconds: Number("int"),
 * //     schedulingStrategy: "REPLICA" || "DAEMON",
 * //     deploymentController: { // DeploymentController
 * //       type: "ECS" || "CODE_DEPLOY" || "EXTERNAL", // required
 * //     },
 * //     tags: "<Tags>",
 * //     createdBy: "STRING_VALUE",
 * //     enableECSManagedTags: true || false,
 * //     propagateTags: "TASK_DEFINITION" || "SERVICE" || "NONE",
 * //     enableExecuteCommand: true || false,
 * //     availabilityZoneRebalancing: "ENABLED" || "DISABLED",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateServiceCommandInput - {@link UpdateServiceCommandInput}
 * @returns {@link UpdateServiceCommandOutput}
 * @see {@link UpdateServiceCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have authorization to perform the requested action.</p>
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
 * @throws {@link NamespaceNotFoundException} (client fault)
 *  <p>The specified namespace wasn't found.</p>
 *
 * @throws {@link PlatformTaskDefinitionIncompatibilityException} (client fault)
 *  <p>The specified platform version doesn't satisfy the required capabilities of the task
 * 			definition.</p>
 *
 * @throws {@link PlatformUnknownException} (client fault)
 *  <p>The specified platform version doesn't exist.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ServiceNotActiveException} (client fault)
 *  <p>The specified service isn't active. You can't update a service that's inactive. If you
 * 			have previously deleted a service, you can re-create it with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html">CreateService</a>.</p>
 *
 * @throws {@link ServiceNotFoundException} (client fault)
 *  <p>The specified service wasn't found. You can view your available services with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html">ListServices</a>. Amazon ECS services are cluster specific and Region
 * 			specific.</p>
 *
 * @throws {@link UnsupportedFeatureException} (client fault)
 *  <p>The specified task isn't supported in this Region.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @example To change the number of tasks in a service
 * ```javascript
 * // This example updates the desired count of the my-http-service service to 10.
 * const input = {
 *   desiredCount: 10,
 *   service: "my-http-service"
 * };
 * const command = new UpdateServiceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @example To change the task definition used in a service
 * ```javascript
 * // This example updates the my-http-service service to use the amazon-ecs-sample task definition.
 * const input = {
 *   service: "my-http-service",
 *   taskDefinition: "amazon-ecs-sample"
 * };
 * const command = new UpdateServiceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateServiceCommand extends $Command
  .classBuilder<
    UpdateServiceCommandInput,
    UpdateServiceCommandOutput,
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
  .s("AmazonEC2ContainerServiceV20141113", "UpdateService", {})
  .n("ECSClient", "UpdateServiceCommand")
  .f(void 0, void 0)
  .ser(se_UpdateServiceCommand)
  .de(de_UpdateServiceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateServiceRequest;
      output: UpdateServiceResponse;
    };
    sdk: {
      input: UpdateServiceCommandInput;
      output: UpdateServiceCommandOutput;
    };
  };
}
