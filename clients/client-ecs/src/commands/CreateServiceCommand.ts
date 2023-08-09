// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { CreateServiceRequest, CreateServiceResponse } from "../models/models_0";
import { de_CreateServiceCommand, se_CreateServiceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Runs and maintains your desired number of tasks from a specified task definition. If
 * 			the number of tasks running in a service drops below the <code>desiredCount</code>,
 * 			Amazon ECS runs another copy of the task in the specified cluster. To update an existing
 * 			service, see the <a>UpdateService</a> action.</p>
 *          <note>
 *             <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p>
 *          </note>
 *          <p>In addition to maintaining the desired count of tasks in your service, you can
 * 			optionally run your service behind one or more load balancers. The load balancers
 * 			distribute traffic across the tasks that are associated with the service. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html">Service load balancing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
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
 * 			the task definition or by your desired count of a service. This is done with an <a>UpdateService</a> operation. The default value for a replica service for
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
 * 			required parameter is the service name. You control your services using the <a>CreateTaskSet</a> operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <p>When the service scheduler launches new tasks, it determines task placement. For
 * 			information about task placement and task placement strategies, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement.html">Amazon ECS
 * 				task placement</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
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
 *       enable: true || false, // required
 *       rollback: true || false, // required
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
 * //         enable: true || false, // required
 * //         rollback: true || false, // required
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
 * //     tags: [
 * //       {
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     createdBy: "STRING_VALUE",
 * //     enableECSManagedTags: true || false,
 * //     propagateTags: "TASK_DEFINITION" || "SERVICE" || "NONE",
 * //     enableExecuteCommand: true || false,
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
 * 			action or resource,. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region specific.</p>
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
 *     "serviceArn": "arn:aws:ecs:us-east-1:012345678910:service/ecs-simple-service",
 *     "serviceName": "ecs-simple-service",
 *     "status": "ACTIVE",
 *     "taskDefinition": "arn:aws:ecs:us-east-1:012345678910:task-definition/hello_world:6"
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
 *     "serviceArn": "arn:aws:ecs:us-east-1:012345678910:service/ecs-simple-service-elb",
 *     "serviceName": "ecs-simple-service-elb",
 *     "status": "ACTIVE",
 *     "taskDefinition": "arn:aws:ecs:us-east-1:012345678910:task-definition/console-sample-app-static:6"
 *   }
 * }
 * *\/
 * // example id: to-create-a-new-service-behind-a-load-balancer-1472512484823
 * ```
 *
 */
export class CreateServiceCommand extends $Command<
  CreateServiceCommandInput,
  CreateServiceCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateServiceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateServiceCommandInput, CreateServiceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateServiceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "CreateServiceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateServiceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateServiceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateServiceCommandOutput> {
    return de_CreateServiceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
