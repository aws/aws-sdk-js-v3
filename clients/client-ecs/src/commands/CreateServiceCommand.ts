// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateServiceRequest, CreateServiceResponse } from "../models/models_0";
import { de_CreateServiceCommand, se_CreateServiceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateServiceCommand}.
 */
export interface CreateServiceCommandInput extends CreateServiceRequest {}
/**
 * @public
 *
 * The output of {@link CreateServiceCommand}.
 */
export interface CreateServiceCommandOutput extends CreateServiceResponse, __MetadataBearer {}

/**
 * <p>Runs and maintains your desired number of tasks from a specified task definition. If
 * 			the number of tasks running in a service drops below the <code>desiredCount</code>,
 * 			Amazon ECS runs another copy of the task in the specified cluster. To update an existing
 * 			service, use <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateService.html">UpdateService</a>.</p>
 *          <note>
 *             <p>On March 21, 2024, a change was made to resolve the task definition revision before authorization. When a task definition revision is not specified, authorization will occur using the latest revision of a task definition.</p>
 *          </note>
 *          <note>
 *             <p>Amazon Elastic Inference (EI) is no longer available to customers.</p>
 *          </note>
 *          <p>In addition to maintaining the desired count of tasks in your service, you can
 * 			optionally run your service behind one or more load balancers. The load balancers
 * 			distribute traffic across the tasks that are associated with the service. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html">Service load balancing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <p>You can attach Amazon EBS volumes to Amazon ECS tasks by configuring the volume when creating or
 * 			updating a service. <code>volumeConfigurations</code> is only supported for REPLICA
 * 			service and not DAEMON service. For more infomation, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-volumes.html#ebs-volume-types">Amazon EBS volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <p>Tasks for services that don't use a load balancer are considered healthy if they're in
 * 			the <code>RUNNING</code> state. Tasks for services that use a load balancer are
 * 			considered healthy if they're in the <code>RUNNING</code> state and are reported as
 * 			healthy by the load balancer.</p>
 *          <p>There are two service scheduler strategies available:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>REPLICA</code> - The replica scheduling strategy places and
 * 					maintains your desired number of tasks across your cluster. By default, the
 * 					service scheduler spreads tasks across Availability Zones. You can use task
 * 					placement strategies and constraints to customize task placement decisions. For
 * 					more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Service scheduler concepts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DAEMON</code> - The daemon scheduling strategy deploys exactly one
 * 					task on each active container instance that meets all of the task placement
 * 					constraints that you specify in your cluster. The service scheduler also
 * 					evaluates the task placement constraints for running tasks. It also stops tasks
 * 					that don't meet the placement constraints. When using this strategy, you don't
 * 					need to specify a desired number of tasks, a task placement strategy, or use
 * 					Service Auto Scaling policies. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Service scheduler concepts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *             </li>
 *          </ul>
 *          <p>You can optionally specify a deployment configuration for your service. The deployment
 * 			is initiated by changing properties. For example, the deployment might be initiated by
 * 			the task definition or by your desired count of a service. You can use <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateService.html">UpdateService</a>. The default value for a replica service for
 * 				<code>minimumHealthyPercent</code> is 100%. The default value for a daemon service
 * 			for <code>minimumHealthyPercent</code> is 0%.</p>
 *          <p>If a service uses the <code>ECS</code> deployment controller, the minimum healthy
 * 			percent represents a lower limit on the number of tasks in a service that must remain in
 * 			the <code>RUNNING</code> state during a deployment. Specifically, it represents it as a
 * 			percentage of your desired number of tasks (rounded up to the nearest integer). This
 * 			happens when any of your container instances are in the <code>DRAINING</code> state if
 * 			the service contains tasks using the EC2 launch type. Using this
 * 			parameter, you can deploy without using additional cluster capacity. For example, if you
 * 			set your service to have desired number of four tasks and a minimum healthy percent of
 * 			50%, the scheduler might stop two existing tasks to free up cluster capacity before
 * 			starting two new tasks. If they're in the <code>RUNNING</code> state, tasks for services
 * 			that don't use a load balancer are considered healthy . If they're in the
 * 				<code>RUNNING</code> state and reported as healthy by the load balancer, tasks for
 * 			services that <i>do</i> use a load balancer are considered healthy . The
 * 			default value for minimum healthy percent is 100%.</p>
 *          <p>If a service uses the <code>ECS</code> deployment controller, the <b>maximum percent</b> parameter represents an upper limit on the
 * 			number of tasks in a service that are allowed in the <code>RUNNING</code> or
 * 				<code>PENDING</code> state during a deployment. Specifically, it represents it as a
 * 			percentage of the desired number of tasks (rounded down to the nearest integer). This
 * 			happens when any of your container instances are in the <code>DRAINING</code> state if
 * 			the service contains tasks using the EC2 launch type. Using this
 * 			parameter, you can define the deployment batch size. For example, if your service has a
 * 			desired number of four tasks and a maximum percent value of 200%, the scheduler may
 * 			start four new tasks before stopping the four older tasks (provided that the cluster
 * 			resources required to do this are available). The default value for maximum percent is
 * 			200%.</p>
 *          <p>If a service uses either the <code>CODE_DEPLOY</code> or <code>EXTERNAL</code>
 * 			deployment controller types and tasks that use the EC2 launch type, the
 * 				<b>minimum healthy percent</b> and <b>maximum percent</b> values are used only to define the lower and upper limit
 * 			on the number of the tasks in the service that remain in the <code>RUNNING</code> state.
 * 			This is while the container instances are in the <code>DRAINING</code> state. If the
 * 			tasks in the service use the Fargate launch type, the minimum healthy
 * 			percent and maximum percent values aren't used. This is the case even if they're
 * 			currently visible when describing your service.</p>
 *          <p>When creating a service that uses the <code>EXTERNAL</code> deployment controller, you
 * 			can specify only parameters that aren't controlled at the task set level. The only
 * 			required parameter is the service name. You control your services using the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateTaskSet.html">CreateTaskSet</a>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <p>When the service scheduler launches new tasks, it determines task placement. For
 * 			information about task placement and task placement strategies, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement.html">Amazon ECS
 * 				task placement</a> in the <i>Amazon Elastic Container Service Developer Guide</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, CreateServiceCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, CreateServiceCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ECSClient(config);
 * const input = { // CreateServiceRequest
 *   cluster: "STRING_VALUE",
 *   serviceName: "STRING_VALUE", // required
 *   taskDefinition: "STRING_VALUE",
 *   availabilityZoneRebalancing: "ENABLED" || "DISABLED",
 *   loadBalancers: [ // LoadBalancers
 *     { // LoadBalancer
 *       targetGroupArn: "STRING_VALUE",
 *       loadBalancerName: "STRING_VALUE",
 *       containerName: "STRING_VALUE",
 *       containerPort: Number("int"),
 *     },
 *   ],
 *   serviceRegistries: [ // ServiceRegistries
 *     { // ServiceRegistry
 *       registryArn: "STRING_VALUE",
 *       port: Number("int"),
 *       containerName: "STRING_VALUE",
 *       containerPort: Number("int"),
 *     },
 *   ],
 *   desiredCount: Number("int"),
 *   clientToken: "STRING_VALUE",
 *   launchType: "EC2" || "FARGATE" || "EXTERNAL",
 *   capacityProviderStrategy: [ // CapacityProviderStrategy
 *     { // CapacityProviderStrategyItem
 *       capacityProvider: "STRING_VALUE", // required
 *       weight: Number("int"),
 *       base: Number("int"),
 *     },
 *   ],
 *   platformVersion: "STRING_VALUE",
 *   role: "STRING_VALUE",
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
 *   healthCheckGracePeriodSeconds: Number("int"),
 *   schedulingStrategy: "REPLICA" || "DAEMON",
 *   deploymentController: { // DeploymentController
 *     type: "ECS" || "CODE_DEPLOY" || "EXTERNAL", // required
 *   },
 *   tags: [ // Tags
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   enableECSManagedTags: true || false,
 *   propagateTags: "TASK_DEFINITION" || "SERVICE" || "NONE",
 *   enableExecuteCommand: true || false,
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
 *         iops: Number("int"),
 *         throughput: Number("int"),
 *         tagSpecifications: [ // EBSTagSpecifications
 *           { // EBSTagSpecification
 *             resourceType: "volume", // required
 *             tags: [
 *               {
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
 * const command = new CreateServiceCommand(input);
 * const response = await client.send(command);
 * // { // CreateServiceResponse
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
 * @param CreateServiceCommandInput - {@link CreateServiceCommandInput}
 * @returns {@link CreateServiceCommandOutput}
 * @see {@link CreateServiceCommandInput} for command's `input` shape.
 * @see {@link CreateServiceCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have authorization to perform the requested action.</p>
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
 * @throws {@link UnsupportedFeatureException} (client fault)
 *  <p>The specified task isn't supported in this Region.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 * @public
 * @example To create a new service
 * ```javascript
 * // This example creates a service in your default region called ``ecs-simple-service``. The service uses the ``hello_world`` task definition and it maintains 10 copies of that task.
 * const input = {
 *   "desiredCount": 10,
 *   "serviceName": "ecs-simple-service",
 *   "taskDefinition": "hello_world"
 * };
 * const command = new CreateServiceCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "service": {
 *     "clusterArn": "arn:aws:ecs:us-east-1:012345678910:cluster/default",
 *     "createdAt": "2016-08-29T16:13:47.298Z",
 *     "deploymentConfiguration": {
 *       "maximumPercent": 200,
 *       "minimumHealthyPercent": 100
 *     },
 *     "deployments": [
 *       {
 *         "createdAt": "2016-08-29T16:13:47.298Z",
 *         "desiredCount": 10,
 *         "id": "ecs-svc/9223370564342348388",
 *         "pendingCount": 0,
 *         "runningCount": 0,
 *         "status": "PRIMARY",
 *         "taskDefinition": "arn:aws:ecs:us-east-1:012345678910:task-definition/hello_world:6",
 *         "updatedAt": "2016-08-29T16:13:47.298Z"
 *       },
 *       {
 *         "createdAt": "2016-08-29T15:52:44.481Z",
 *         "desiredCount": 0,
 *         "id": "ecs-svc/9223370564343611322",
 *         "pendingCount": 0,
 *         "runningCount": 0,
 *         "status": "ACTIVE",
 *         "taskDefinition": "arn:aws:ecs:us-east-1:012345678910:task-definition/hello_world:6",
 *         "updatedAt": "2016-08-29T16:11:38.941Z"
 *       }
 *     ],
 *     "desiredCount": 10,
 *     "events": [],
 *     "loadBalancers": [],
 *     "pendingCount": 0,
 *     "runningCount": 0,
 *     "serviceArn": "arn:aws:ecs:us-east-1:012345678910:service/default/ecs-simple-service",
 *     "serviceName": "ecs-simple-service",
 *     "status": "ACTIVE",
 *     "taskDefinition": "arn:aws:ecs:us-east-1:012345678910:task-definition/default/hello_world:6"
 *   }
 * }
 * *\/
 * // example id: to-create-a-new-service-1472512584282
 * ```
 *
 * @example To create a new service behind a load balancer
 * ```javascript
 * // This example creates a service in your default region called ``ecs-simple-service-elb``. The service uses the ``ecs-demo`` task definition and it maintains 10 copies of that task. You must reference an existing load balancer in the same region by its name.
 * const input = {
 *   "desiredCount": 10,
 *   "loadBalancers": [
 *     {
 *       "containerName": "simple-app",
 *       "containerPort": 80,
 *       "loadBalancerName": "EC2Contai-EcsElast-15DCDAURT3ZO2"
 *     }
 *   ],
 *   "role": "ecsServiceRole",
 *   "serviceName": "ecs-simple-service-elb",
 *   "taskDefinition": "console-sample-app-static"
 * };
 * const command = new CreateServiceCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "service": {
 *     "clusterArn": "arn:aws:ecs:us-east-1:012345678910:cluster/default",
 *     "createdAt": "2016-08-29T16:02:54.884Z",
 *     "deploymentConfiguration": {
 *       "maximumPercent": 200,
 *       "minimumHealthyPercent": 100
 *     },
 *     "deployments": [
 *       {
 *         "createdAt": "2016-08-29T16:02:54.884Z",
 *         "desiredCount": 10,
 *         "id": "ecs-svc/9223370564343000923",
 *         "pendingCount": 0,
 *         "runningCount": 0,
 *         "status": "PRIMARY",
 *         "taskDefinition": "arn:aws:ecs:us-east-1:012345678910:task-definition/console-sample-app-static:6",
 *         "updatedAt": "2016-08-29T16:02:54.884Z"
 *       }
 *     ],
 *     "desiredCount": 10,
 *     "events": [],
 *     "loadBalancers": [
 *       {
 *         "containerName": "simple-app",
 *         "containerPort": 80,
 *         "loadBalancerName": "EC2Contai-EcsElast-15DCDAURT3ZO2"
 *       }
 *     ],
 *     "pendingCount": 0,
 *     "roleArn": "arn:aws:iam::012345678910:role/ecsServiceRole",
 *     "runningCount": 0,
 *     "serviceArn": "arn:aws:ecs:us-east-1:012345678910:service/default/ecs-simple-service-elb",
 *     "serviceName": "ecs-simple-service-elb",
 *     "status": "ACTIVE",
 *     "taskDefinition": "arn:aws:ecs:us-east-1:012345678910:task-definition/default/console-sample-app-static:6"
 *   }
 * }
 * *\/
 * // example id: to-create-a-new-service-behind-a-load-balancer-1472512484823
 * ```
 *
 */
export class CreateServiceCommand extends $Command
  .classBuilder<
    CreateServiceCommandInput,
    CreateServiceCommandOutput,
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
  .s("AmazonEC2ContainerServiceV20141113", "CreateService", {})
  .n("ECSClient", "CreateServiceCommand")
  .f(void 0, void 0)
  .ser(se_CreateServiceCommand)
  .de(de_CreateServiceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateServiceRequest;
      output: CreateServiceResponse;
    };
    sdk: {
      input: CreateServiceCommandInput;
      output: CreateServiceCommandOutput;
    };
  };
}
