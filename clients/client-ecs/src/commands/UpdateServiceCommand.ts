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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { UpdateServiceRequest, UpdateServiceResponse } from "../models/models_0";
import { de_UpdateServiceCommand, se_UpdateServiceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Modifies the parameters of a service.</p>
 *          <p>For services using the rolling update (<code>ECS</code>) you can update the desired
 * 			count, deployment configuration, network configuration, load balancers, service
 * 			registries, enable ECS managed tags option, propagate tags option, task placement
 * 			constraints and strategies, and task definition. When you update any of these
 * 			parameters, Amazon ECS starts new tasks with the new configuration. </p>
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
 * 			updated, create a new task set For more information, see <a>CreateTaskSet</a>.</p>
 *          <p>You can add to or subtract from the number of instantiations of a task definition in a
 * 			service by specifying the cluster that the service is running in and a new
 * 				<code>desiredCount</code> parameter.</p>
 *          <p>If you have updated the Docker image of your application, you can create a new task
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
 *          <p>When <a>UpdateService</a> stops a task during a deployment, the equivalent
 * 			of <code>docker stop</code> is issued to the containers running in the task. This
 * 			results in a <code>SIGTERM</code> and a 30-second timeout. After this,
 * 				<code>SIGKILL</code> is sent and the containers are forcibly stopped. If the
 * 			container handles the <code>SIGTERM</code> gracefully and exits within 30 seconds from
 * 			receiving it, no <code>SIGKILL</code> is sent.</p>
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
 *          <note>
 *             <p>You must have a service-linked role when you update any of the following service
 * 				properties:</p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <code>loadBalancers</code>,</p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>serviceRegistries</code>
 *                   </p>
 *                </li>
 *             </ul>
 *             <p>For more information about the role see the <code>CreateService</code> request parameter
 * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html#ECS-CreateService-request-role">
 *                   <code>role</code>
 *                </a>. </p>
 *          </note>
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
 *       enable: true || false, // required
 *       rollback: true || false, // required
 *     },
 *   },
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
 *   enableExecuteCommand: true || false,
 *   enableECSManagedTags: true || false,
 *   loadBalancers: [ // LoadBalancers
 *     { // LoadBalancer
 *       targetGroupArn: "STRING_VALUE",
 *       loadBalancerName: "STRING_VALUE",
 *       containerName: "STRING_VALUE",
 *       containerPort: Number("int"),
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
 * @throws {@link ServiceNotActiveException} (client fault)
 *  <p>The specified service isn't active. You can't update a service that's inactive. If you
 * 			have previously deleted a service, you can re-create it with <a>CreateService</a>.</p>
 *
 * @throws {@link ServiceNotFoundException} (client fault)
 *  <p>The specified service wasn't found. You can view your available services with <a>ListServices</a>. Amazon ECS services are cluster specific and Region
 * 			specific.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 * @example To change the task definition used in a service
 * ```javascript
 * // This example updates the my-http-service service to use the amazon-ecs-sample task definition.
 * const input = {
 *   "service": "my-http-service",
 *   "taskDefinition": "amazon-ecs-sample"
 * };
 * const command = new UpdateServiceCommand(input);
 * await client.send(command);
 * // example id: cc9e8900-0cc2-44d2-8491-64d1d3d37887
 * ```
 *
 * @example To change the number of tasks in a service
 * ```javascript
 * // This example updates the desired count of the my-http-service service to 10.
 * const input = {
 *   "desiredCount": 10,
 *   "service": "my-http-service"
 * };
 * const command = new UpdateServiceCommand(input);
 * await client.send(command);
 * // example id: 9581d6c5-02e3-4140-8cc1-5a4301586633
 * ```
 *
 */
export class UpdateServiceCommand extends $Command<
  UpdateServiceCommandInput,
  UpdateServiceCommandOutput,
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
  constructor(readonly input: UpdateServiceCommandInput) {
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
  ): Handler<UpdateServiceCommandInput, UpdateServiceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateServiceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "UpdateServiceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2ContainerServiceV20141113",
        operation: "UpdateService",
      },
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
  private serialize(input: UpdateServiceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateServiceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateServiceCommandOutput> {
    return de_UpdateServiceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
