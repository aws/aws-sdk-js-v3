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
 * 			service and not DAEMON service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-volumes.html#ebs-volume-types">Amazon EBS volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
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
 * 					Service Auto Scaling policies. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Amazon ECS services</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *             </li>
 *          </ul>
 *          <p>The deployment controller is the mechanism that determines how tasks are deployed for
 * 			your service. The valid options are:</p>
 *          <ul>
 *             <li>
 *                <p>ECS</p>
 *                <p>When you create a service which uses the <code>ECS</code> deployment controller, you can choose between the following deployment strategies:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>ROLLING</code>: When you create a service which uses the <i>rolling update</i>
 * 							(<code>ROLLING</code>) deployment strategy, the Amazon ECS service scheduler replaces the
 * 							currently running tasks with new tasks. The number of tasks that Amazon ECS adds or
 * 							removes from the service during a rolling update is controlled by the service
 * 							deployment configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html">Deploy Amazon ECS services by replacing tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *                      <p>Rolling update deployments are best suited for the following scenarios:</p>
 *                      <ul>
 *                         <li>
 *                            <p>Gradual service updates: You need to
 * 									update your service incrementally without taking the entire service
 * 									offline at once.</p>
 *                         </li>
 *                         <li>
 *                            <p>Limited resource requirements: You
 * 									want to avoid the additional resource costs of running two complete
 * 									environments simultaneously (as required by blue/green
 * 									deployments).</p>
 *                         </li>
 *                         <li>
 *                            <p>Acceptable deployment time: Your
 * 									application can tolerate a longer deployment process, as rolling updates
 * 									replace tasks one by one.</p>
 *                         </li>
 *                         <li>
 *                            <p>No need for instant roll back: Your
 * 									service can tolerate a rollback process that takes minutes rather than
 * 									seconds.</p>
 *                         </li>
 *                         <li>
 *                            <p>Simple deployment process: You prefer
 * 									a straightforward deployment approach without the complexity of managing
 * 									multiple environments, target groups, and listeners.</p>
 *                         </li>
 *                         <li>
 *                            <p>No load balancer requirement: Your
 * 									service doesn't use or require a load balancer, Application Load Balancer, Network Load Balancer, or Service Connect (which are required
 * 									for blue/green deployments).</p>
 *                         </li>
 *                         <li>
 *                            <p>Stateful applications: Your
 * 									application maintains state that makes it difficult to run two parallel
 * 									environments.</p>
 *                         </li>
 *                         <li>
 *                            <p>Cost sensitivity: You want to
 * 									minimize deployment costs by not running duplicate environments during
 * 									deployment.</p>
 *                         </li>
 *                      </ul>
 *                      <p>Rolling updates are the default deployment strategy for services and provide a
 * 							balance between deployment safety and resource efficiency for many common
 * 							application scenarios.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>BLUE_GREEN</code>: A <i>blue/green</i> deployment strategy (<code>BLUE_GREEN</code>) is a release methodology that reduces downtime and
 * 							risk by running two identical production environments called blue and green.
 * 							With Amazon ECS blue/green deployments, you can validate new service revisions before
 * 							directing production traffic to them. This approach provides a safer way to
 * 							deploy changes with the ability to quickly roll back if needed. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-blue-green.html">Amazon ECS blue/green deployments</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *                      <p>Amazon ECS blue/green deployments are best suited for the following scenarios:</p>
 *                      <ul>
 *                         <li>
 *                            <p>Service validation: When you need to
 * 									validate new service revisions before directing production traffic to
 * 									them</p>
 *                         </li>
 *                         <li>
 *                            <p>Zero downtime: When your service
 * 									requires zero-downtime deployments</p>
 *                         </li>
 *                         <li>
 *                            <p>Instant roll back: When you
 * 									need the ability to quickly roll back if issues are detected</p>
 *                         </li>
 *                         <li>
 *                            <p>Load balancer requirement: When your
 * 									service uses Application Load Balancer, Network Load Balancer, or Service Connect</p>
 *                         </li>
 *                      </ul>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>External</p>
 *                <p>Use a third-party deployment controller.</p>
 *             </li>
 *             <li>
 *                <p>Blue/green deployment (powered by CodeDeploy)</p>
 *                <p>CodeDeploy installs an updated version of the application as a new replacement task
 * 					set and reroutes production traffic from the original application task set to
 * 					the replacement task set. The original task set is terminated after a successful
 * 					deployment. Use this deployment controller to verify a new deployment of a service
 * 					before sending production traffic to it.</p>
 *             </li>
 *          </ul>
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
 *       advancedConfiguration: { // AdvancedConfiguration
 *         alternateTargetGroupArn: "STRING_VALUE",
 *         productionListenerRule: "STRING_VALUE",
 *         testListenerRule: "STRING_VALUE",
 *         roleArn: "STRING_VALUE",
 *       },
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
 * @throws {@link UnsupportedFeatureException} (client fault)
 *  <p>The specified task isn't supported in this Region.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @example To create a new service
 * ```javascript
 * // This example creates a service in your default region called ``ecs-simple-service``. The service uses the ``hello_world`` task definition and it maintains 10 copies of that task.
 * const input = {
 *   desiredCount: 10,
 *   serviceName: "ecs-simple-service",
 *   taskDefinition: "hello_world"
 * };
 * const command = new CreateServiceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   service: {
 *     clusterArn: "arn:aws:ecs:us-east-1:012345678910:cluster/default",
 *     createdAt: "2016-08-29T16:13:47.298Z",
 *     deploymentConfiguration: {
 *       maximumPercent: 200,
 *       minimumHealthyPercent: 100
 *     },
 *     deployments: [
 *       {
 *         createdAt: "2016-08-29T16:13:47.298Z",
 *         desiredCount: 10,
 *         id: "ecs-svc/9223370564342348388",
 *         pendingCount: 0,
 *         runningCount: 0,
 *         status: "PRIMARY",
 *         taskDefinition: "arn:aws:ecs:us-east-1:012345678910:task-definition/hello_world:6",
 *         updatedAt: "2016-08-29T16:13:47.298Z"
 *       },
 *       {
 *         createdAt: "2016-08-29T15:52:44.481Z",
 *         desiredCount: 0,
 *         id: "ecs-svc/9223370564343611322",
 *         pendingCount: 0,
 *         runningCount: 0,
 *         status: "ACTIVE",
 *         taskDefinition: "arn:aws:ecs:us-east-1:012345678910:task-definition/hello_world:6",
 *         updatedAt: "2016-08-29T16:11:38.941Z"
 *       }
 *     ],
 *     desiredCount: 10,
 *     events:     [],
 *     loadBalancers:     [],
 *     pendingCount: 0,
 *     runningCount: 0,
 *     serviceArn: "arn:aws:ecs:us-east-1:012345678910:service/default/ecs-simple-service",
 *     serviceName: "ecs-simple-service",
 *     status: "ACTIVE",
 *     taskDefinition: "arn:aws:ecs:us-east-1:012345678910:task-definition/default/hello_world:6"
 *   }
 * }
 * *\/
 * ```
 *
 * @example To create a new service behind a load balancer
 * ```javascript
 * // This example creates a service in your default region called ``ecs-simple-service-elb``. The service uses the ``ecs-demo`` task definition and it maintains 10 copies of that task. You must reference an existing load balancer in the same region by its name.
 * const input = {
 *   desiredCount: 10,
 *   loadBalancers: [
 *     {
 *       containerName: "simple-app",
 *       containerPort: 80,
 *       loadBalancerName: "EC2Contai-EcsElast-15DCDAURT3ZO2"
 *     }
 *   ],
 *   role: "ecsServiceRole",
 *   serviceName: "ecs-simple-service-elb",
 *   taskDefinition: "console-sample-app-static"
 * };
 * const command = new CreateServiceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   service: {
 *     clusterArn: "arn:aws:ecs:us-east-1:012345678910:cluster/default",
 *     createdAt: "2016-08-29T16:02:54.884Z",
 *     deploymentConfiguration: {
 *       maximumPercent: 200,
 *       minimumHealthyPercent: 100
 *     },
 *     deployments: [
 *       {
 *         createdAt: "2016-08-29T16:02:54.884Z",
 *         desiredCount: 10,
 *         id: "ecs-svc/9223370564343000923",
 *         pendingCount: 0,
 *         runningCount: 0,
 *         status: "PRIMARY",
 *         taskDefinition: "arn:aws:ecs:us-east-1:012345678910:task-definition/console-sample-app-static:6",
 *         updatedAt: "2016-08-29T16:02:54.884Z"
 *       }
 *     ],
 *     desiredCount: 10,
 *     events:     [],
 *     loadBalancers: [
 *       {
 *         containerName: "simple-app",
 *         containerPort: 80,
 *         loadBalancerName: "EC2Contai-EcsElast-15DCDAURT3ZO2"
 *       }
 *     ],
 *     pendingCount: 0,
 *     roleArn: "arn:aws:iam::012345678910:role/ecsServiceRole",
 *     runningCount: 0,
 *     serviceArn: "arn:aws:ecs:us-east-1:012345678910:service/default/ecs-simple-service-elb",
 *     serviceName: "ecs-simple-service-elb",
 *     status: "ACTIVE",
 *     taskDefinition: "arn:aws:ecs:us-east-1:012345678910:task-definition/default/console-sample-app-static:6"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
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
