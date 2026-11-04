// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteServiceRequest, DeleteServiceResponse } from "../models/models_1";
import { DeleteService$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteServiceCommand}.
 */
export interface DeleteServiceCommandInput extends DeleteServiceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteServiceCommand}.
 */
export interface DeleteServiceCommandOutput extends DeleteServiceResponse, __MetadataBearer {}

/**
 * Deletes a specified service within a cluster. You can delete a service if you have no running tasks in it and the desired task count is zero. If the service is actively maintaining tasks, you can't delete it, and you must update the service to a desired task count of zero. For more information, see [UpdateService](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateService.html).
 *
 * > **Note:** When you delete a service, if there are still running tasks that require cleanup, the service status moves from `ACTIVE` to `DRAINING`, and the service is no longer visible in the console or in the [ListServices](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html) API operation. After all tasks have transitioned to either `STOPPING` or `STOPPED` status, the service status moves from `DRAINING` to `INACTIVE`. Services in the `DRAINING` or `INACTIVE` status can still be viewed with the [DescribeServices](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeServices.html) API operation. However, in the future, `INACTIVE` services may be cleaned up and purged from Amazon ECS record keeping, and [DescribeServices](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeServices.html) calls on those services return a `ServiceNotFoundException` error.
 *
 * > **Important:** If you attempt to create a new service with the same name as an existing service in either `ACTIVE` or `DRAINING` status, you receive an error.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeleteServiceCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeleteServiceCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // DeleteServiceRequest
 *   cluster: "STRING_VALUE",
 *   service: "STRING_VALUE", // required
 *   force: true || false,
 * };
 * const command = new DeleteServiceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteServiceResponse
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
 * //     launchType: "EC2" || "FARGATE" || "EXTERNAL" || "MANAGED_INSTANCES",
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
 * //         resetOnHealthyTask: true || false,
 * //         thresholdConfiguration: { // ThresholdConfiguration
 * //           type: "COUNT" || "BOUNDED_PERCENT" || "UNBOUNDED_PERCENT", // required
 * //           value: Number("int"), // required
 * //         },
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
 * //       strategy: "ROLLING" || "BLUE_GREEN" || "LINEAR" || "CANARY",
 * //       bakeTimeInMinutes: Number("int"),
 * //       lifecycleHooks: [ // DeploymentLifecycleHookList
 * //         { // DeploymentLifecycleHook
 * //           targetType: "AWS_LAMBDA" || "PAUSE",
 * //           hookTargetArn: "STRING_VALUE",
 * //           roleArn: "STRING_VALUE",
 * //           lifecycleStages: [ // DeploymentLifecycleHookStageList
 * //             "RECONCILE_SERVICE" || "PRE_SCALE_UP" || "POST_SCALE_UP" || "TEST_TRAFFIC_SHIFT" || "POST_TEST_TRAFFIC_SHIFT" || "PRE_PRODUCTION_TRAFFIC_SHIFT" || "PRODUCTION_TRAFFIC_SHIFT" || "POST_PRODUCTION_TRAFFIC_SHIFT",
 * //           ],
 * //           hookDetails: "DOCUMENT_VALUE",
 * //           timeoutConfiguration: { // DeploymentLifecycleHookTimeoutConfiguration
 * //             timeoutInMinutes: Number("int"),
 * //             action: "ROLLBACK" || "CONTINUE",
 * //           },
 * //         },
 * //       ],
 * //       linearConfiguration: { // LinearConfiguration
 * //         stepPercent: Number("double"),
 * //         stepBakeTimeInMinutes: Number("int"),
 * //       },
 * //       canaryConfiguration: { // CanaryConfiguration
 * //         canaryPercent: Number("double"),
 * //         canaryBakeTimeInMinutes: Number("int"),
 * //       },
 * //       earlySuccessCriteria: { // DeploymentEarlySuccessCriteria
 * //         enable: true || false, // required
 * //         healthyPercent: Number("int"),
 * //         sourceServiceRevisionCleanup: "BLOCKING" || "DEFERRED",
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
 * //         launchType: "EC2" || "FARGATE" || "EXTERNAL" || "MANAGED_INSTANCES",
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
 * //         launchType: "EC2" || "FARGATE" || "EXTERNAL" || "MANAGED_INSTANCES",
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
 * //           accessLogConfiguration: { // ServiceConnectAccessLogConfiguration
 * //             format: "TEXT" || "JSON", // required
 * //             includeQueryParameters: "DISABLED" || "ENABLED",
 * //           },
 * //           containerConfigurations: [ // ServiceConnectContainerConfigurations
 * //             { // ServiceConnectContainerConfiguration Union: only one key present
 * //               logLevel: "debug" || "info",
 * //             },
 * //           ],
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
 * //             advancedConfiguration: { // VpcLatticeAdvancedConfiguration
 * //               alternateTargetGroupArn: "STRING_VALUE",
 * //               productionListenerRule: "STRING_VALUE",
 * //               testListenerRule: "STRING_VALUE",
 * //             },
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
 * //     currentServiceDeployment: "STRING_VALUE",
 * //     currentServiceRevisions: [ // ServiceCurrentRevisionSummaryList
 * //       { // ServiceCurrentRevisionSummary
 * //         arn: "STRING_VALUE",
 * //         requestedTaskCount: Number("int"),
 * //         runningTaskCount: Number("int"),
 * //         pendingTaskCount: Number("int"),
 * //       },
 * //     ],
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
 * //     resourceManagementType: "CUSTOMER" || "ECS",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteServiceCommandInput - {@link DeleteServiceCommandInput}
 * @returns {@link DeleteServiceCommandOutput}
 * @see {@link DeleteServiceCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceNotFoundException} (client fault)
 *
 * The specified service wasn't found. You can view your available services with [ListServices](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html). Amazon ECS services are cluster specific and Region specific.
 *
 * @throws {@link ECSServiceException}
 *
 * Base exception class for all service exceptions from ECS service.
 *
 * @example To delete a service
 * ```javascript
 * // This example deletes the my-http-service service. The service must have a desired count and running count of 0 before you can delete it.
 * const input = {
 *   service: "my-http-service"
 * };
 * const command = new DeleteServiceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteServiceCommand extends command<DeleteServiceCommandInput, DeleteServiceCommandOutput>(
  _ep0,
  _mw0,
  "DeleteService",
  DeleteService$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteServiceRequest;
      output: DeleteServiceResponse;
    };
    sdk: {
      input: DeleteServiceCommandInput;
      output: DeleteServiceCommandOutput;
    };
  };
}
