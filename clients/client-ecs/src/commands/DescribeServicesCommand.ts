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
import { DescribeServicesRequest, DescribeServicesResponse } from "../models/models_0";
import { de_DescribeServicesCommand, se_DescribeServicesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeServicesCommand}.
 */
export interface DescribeServicesCommandInput extends DescribeServicesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeServicesCommand}.
 */
export interface DescribeServicesCommandOutput extends DescribeServicesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified services running in your cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeServicesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeServicesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // DescribeServicesRequest
 *   cluster: "STRING_VALUE",
 *   services: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 *   include: [ // ServiceFieldList
 *     "TAGS",
 *   ],
 * };
 * const command = new DescribeServicesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeServicesResponse
 * //   services: [ // Services
 * //     { // Service
 * //       serviceArn: "STRING_VALUE",
 * //       serviceName: "STRING_VALUE",
 * //       clusterArn: "STRING_VALUE",
 * //       loadBalancers: [ // LoadBalancers
 * //         { // LoadBalancer
 * //           targetGroupArn: "STRING_VALUE",
 * //           loadBalancerName: "STRING_VALUE",
 * //           containerName: "STRING_VALUE",
 * //           containerPort: Number("int"),
 * //         },
 * //       ],
 * //       serviceRegistries: [ // ServiceRegistries
 * //         { // ServiceRegistry
 * //           registryArn: "STRING_VALUE",
 * //           port: Number("int"),
 * //           containerName: "STRING_VALUE",
 * //           containerPort: Number("int"),
 * //         },
 * //       ],
 * //       status: "STRING_VALUE",
 * //       desiredCount: Number("int"),
 * //       runningCount: Number("int"),
 * //       pendingCount: Number("int"),
 * //       launchType: "EC2" || "FARGATE" || "EXTERNAL",
 * //       capacityProviderStrategy: [ // CapacityProviderStrategy
 * //         { // CapacityProviderStrategyItem
 * //           capacityProvider: "STRING_VALUE", // required
 * //           weight: Number("int"),
 * //           base: Number("int"),
 * //         },
 * //       ],
 * //       platformVersion: "STRING_VALUE",
 * //       platformFamily: "STRING_VALUE",
 * //       taskDefinition: "STRING_VALUE",
 * //       deploymentConfiguration: { // DeploymentConfiguration
 * //         deploymentCircuitBreaker: { // DeploymentCircuitBreaker
 * //           enable: true || false, // required
 * //           rollback: true || false, // required
 * //         },
 * //         maximumPercent: Number("int"),
 * //         minimumHealthyPercent: Number("int"),
 * //         alarms: { // DeploymentAlarms
 * //           alarmNames: [ // StringList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           enable: true || false, // required
 * //           rollback: true || false, // required
 * //         },
 * //       },
 * //       taskSets: [ // TaskSets
 * //         { // TaskSet
 * //           id: "STRING_VALUE",
 * //           taskSetArn: "STRING_VALUE",
 * //           serviceArn: "STRING_VALUE",
 * //           clusterArn: "STRING_VALUE",
 * //           startedBy: "STRING_VALUE",
 * //           externalId: "STRING_VALUE",
 * //           status: "STRING_VALUE",
 * //           taskDefinition: "STRING_VALUE",
 * //           computedDesiredCount: Number("int"),
 * //           pendingCount: Number("int"),
 * //           runningCount: Number("int"),
 * //           createdAt: new Date("TIMESTAMP"),
 * //           updatedAt: new Date("TIMESTAMP"),
 * //           launchType: "EC2" || "FARGATE" || "EXTERNAL",
 * //           capacityProviderStrategy: [
 * //             {
 * //               capacityProvider: "STRING_VALUE", // required
 * //               weight: Number("int"),
 * //               base: Number("int"),
 * //             },
 * //           ],
 * //           platformVersion: "STRING_VALUE",
 * //           platformFamily: "STRING_VALUE",
 * //           networkConfiguration: { // NetworkConfiguration
 * //             awsvpcConfiguration: { // AwsVpcConfiguration
 * //               subnets: [ // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               securityGroups: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               assignPublicIp: "ENABLED" || "DISABLED",
 * //             },
 * //           },
 * //           loadBalancers: [
 * //             {
 * //               targetGroupArn: "STRING_VALUE",
 * //               loadBalancerName: "STRING_VALUE",
 * //               containerName: "STRING_VALUE",
 * //               containerPort: Number("int"),
 * //             },
 * //           ],
 * //           serviceRegistries: [
 * //             {
 * //               registryArn: "STRING_VALUE",
 * //               port: Number("int"),
 * //               containerName: "STRING_VALUE",
 * //               containerPort: Number("int"),
 * //             },
 * //           ],
 * //           scale: { // Scale
 * //             value: Number("double"),
 * //             unit: "PERCENT",
 * //           },
 * //           stabilityStatus: "STEADY_STATE" || "STABILIZING",
 * //           stabilityStatusAt: new Date("TIMESTAMP"),
 * //           tags: [ // Tags
 * //             { // Tag
 * //               key: "STRING_VALUE",
 * //               value: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       deployments: [ // Deployments
 * //         { // Deployment
 * //           id: "STRING_VALUE",
 * //           status: "STRING_VALUE",
 * //           taskDefinition: "STRING_VALUE",
 * //           desiredCount: Number("int"),
 * //           pendingCount: Number("int"),
 * //           runningCount: Number("int"),
 * //           failedTasks: Number("int"),
 * //           createdAt: new Date("TIMESTAMP"),
 * //           updatedAt: new Date("TIMESTAMP"),
 * //           capacityProviderStrategy: [
 * //             {
 * //               capacityProvider: "STRING_VALUE", // required
 * //               weight: Number("int"),
 * //               base: Number("int"),
 * //             },
 * //           ],
 * //           launchType: "EC2" || "FARGATE" || "EXTERNAL",
 * //           platformVersion: "STRING_VALUE",
 * //           platformFamily: "STRING_VALUE",
 * //           networkConfiguration: {
 * //             awsvpcConfiguration: {
 * //               subnets: [ // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               securityGroups: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               assignPublicIp: "ENABLED" || "DISABLED",
 * //             },
 * //           },
 * //           rolloutState: "COMPLETED" || "FAILED" || "IN_PROGRESS",
 * //           rolloutStateReason: "STRING_VALUE",
 * //           serviceConnectConfiguration: { // ServiceConnectConfiguration
 * //             enabled: true || false, // required
 * //             namespace: "STRING_VALUE",
 * //             services: [ // ServiceConnectServiceList
 * //               { // ServiceConnectService
 * //                 portName: "STRING_VALUE", // required
 * //                 discoveryName: "STRING_VALUE",
 * //                 clientAliases: [ // ServiceConnectClientAliasList
 * //                   { // ServiceConnectClientAlias
 * //                     port: Number("int"), // required
 * //                     dnsName: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 ingressPortOverride: Number("int"),
 * //               },
 * //             ],
 * //             logConfiguration: { // LogConfiguration
 * //               logDriver: "json-file" || "syslog" || "journald" || "gelf" || "fluentd" || "awslogs" || "splunk" || "awsfirelens", // required
 * //               options: { // LogConfigurationOptionsMap
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //               secretOptions: [ // SecretList
 * //                 { // Secret
 * //                   name: "STRING_VALUE", // required
 * //                   valueFrom: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //           serviceConnectResources: [ // ServiceConnectServiceResourceList
 * //             { // ServiceConnectServiceResource
 * //               discoveryName: "STRING_VALUE",
 * //               discoveryArn: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       roleArn: "STRING_VALUE",
 * //       events: [ // ServiceEvents
 * //         { // ServiceEvent
 * //           id: "STRING_VALUE",
 * //           createdAt: new Date("TIMESTAMP"),
 * //           message: "STRING_VALUE",
 * //         },
 * //       ],
 * //       createdAt: new Date("TIMESTAMP"),
 * //       placementConstraints: [ // PlacementConstraints
 * //         { // PlacementConstraint
 * //           type: "distinctInstance" || "memberOf",
 * //           expression: "STRING_VALUE",
 * //         },
 * //       ],
 * //       placementStrategy: [ // PlacementStrategies
 * //         { // PlacementStrategy
 * //           type: "random" || "spread" || "binpack",
 * //           field: "STRING_VALUE",
 * //         },
 * //       ],
 * //       networkConfiguration: {
 * //         awsvpcConfiguration: {
 * //           subnets: "<StringList>", // required
 * //           securityGroups: "<StringList>",
 * //           assignPublicIp: "ENABLED" || "DISABLED",
 * //         },
 * //       },
 * //       healthCheckGracePeriodSeconds: Number("int"),
 * //       schedulingStrategy: "REPLICA" || "DAEMON",
 * //       deploymentController: { // DeploymentController
 * //         type: "ECS" || "CODE_DEPLOY" || "EXTERNAL", // required
 * //       },
 * //       tags: [
 * //         {
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       createdBy: "STRING_VALUE",
 * //       enableECSManagedTags: true || false,
 * //       propagateTags: "TASK_DEFINITION" || "SERVICE" || "NONE",
 * //       enableExecuteCommand: true || false,
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
 * @param DescribeServicesCommandInput - {@link DescribeServicesCommandInput}
 * @returns {@link DescribeServicesCommandOutput}
 * @see {@link DescribeServicesCommandInput} for command's `input` shape.
 * @see {@link DescribeServicesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
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
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 * @example To describe a service
 * ```javascript
 * // This example provides descriptive information about the service named ``ecs-simple-service``.
 * const input = {
 *   "services": [
 *     "ecs-simple-service"
 *   ]
 * };
 * const command = new DescribeServicesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "failures": [],
 *   "services": [
 *     {
 *       "clusterArn": "arn:aws:ecs:us-east-1:012345678910:cluster/default",
 *       "createdAt": "2016-08-29T16:25:52.130Z",
 *       "deploymentConfiguration": {
 *         "maximumPercent": 200,
 *         "minimumHealthyPercent": 100
 *       },
 *       "deployments": [
 *         {
 *           "createdAt": "2016-08-29T16:25:52.130Z",
 *           "desiredCount": 1,
 *           "id": "ecs-svc/9223370564341623665",
 *           "pendingCount": 0,
 *           "runningCount": 0,
 *           "status": "PRIMARY",
 *           "taskDefinition": "arn:aws:ecs:us-east-1:012345678910:task-definition/hello_world:6",
 *           "updatedAt": "2016-08-29T16:25:52.130Z"
 *         }
 *       ],
 *       "desiredCount": 1,
 *       "events": [
 *         {
 *           "createdAt": "2016-08-29T16:25:58.520Z",
 *           "id": "38c285e5-d335-4b68-8b15-e46dedc8e88d",
 *           "message": "(service ecs-simple-service) was unable to place a task because no container instance met all of its requirements. The closest matching (container-instance 3f4de1c5-ffdd-4954-af7e-75b4be0c8841) is already using a port required by your task. For more information, see the Troubleshooting section of the Amazon ECS Developer Guide."
 *         }
 *       ],
 *       "loadBalancers": [],
 *       "pendingCount": 0,
 *       "runningCount": 0,
 *       "serviceArn": "arn:aws:ecs:us-east-1:012345678910:service/ecs-simple-service",
 *       "serviceName": "ecs-simple-service",
 *       "status": "ACTIVE",
 *       "taskDefinition": "arn:aws:ecs:us-east-1:012345678910:task-definition/hello_world:6"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-a-service-1472513256350
 * ```
 *
 */
export class DescribeServicesCommand extends $Command<
  DescribeServicesCommandInput,
  DescribeServicesCommandOutput,
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
  constructor(readonly input: DescribeServicesCommandInput) {
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
  ): Handler<DescribeServicesCommandInput, DescribeServicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeServicesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "DescribeServicesCommand";
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
  private serialize(input: DescribeServicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeServicesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeServicesCommandOutput> {
    return de_DescribeServicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
