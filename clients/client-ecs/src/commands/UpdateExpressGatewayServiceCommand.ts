// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateExpressGatewayServiceRequest, UpdateExpressGatewayServiceResponse } from "../models/models_1";
import { UpdateExpressGatewayService$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateExpressGatewayServiceCommand}.
 */
export interface UpdateExpressGatewayServiceCommandInput extends UpdateExpressGatewayServiceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateExpressGatewayServiceCommand}.
 */
export interface UpdateExpressGatewayServiceCommandOutput extends UpdateExpressGatewayServiceResponse, __MetadataBearer {}

/**
 * Updates an existing Express service configuration. Modifies container settings, resource allocation, auto-scaling configuration, and other service parameters without recreating the service.
 *
 * Amazon ECS creates a new service revision with updated configuration and performs a rolling deployment to replace existing tasks. The service remains available during updates, ensuring zero-downtime deployments.
 *
 * Some parameters like the infrastructure role cannot be modified after service creation and require creating a new service.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, UpdateExpressGatewayServiceCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, UpdateExpressGatewayServiceCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // UpdateExpressGatewayServiceRequest
 *   serviceArn: "STRING_VALUE", // required
 *   executionRoleArn: "STRING_VALUE",
 *   healthCheckPath: "STRING_VALUE",
 *   primaryContainer: { // ExpressGatewayContainer
 *     image: "STRING_VALUE", // required
 *     containerPort: Number("int"),
 *     awsLogsConfiguration: { // ExpressGatewayServiceAwsLogsConfiguration
 *       logGroup: "STRING_VALUE", // required
 *       logStreamPrefix: "STRING_VALUE", // required
 *     },
 *     repositoryCredentials: { // ExpressGatewayRepositoryCredentials
 *       credentialsParameter: "STRING_VALUE",
 *     },
 *     command: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *     environment: [ // EnvironmentVariables
 *       { // KeyValuePair
 *         name: "STRING_VALUE",
 *         value: "STRING_VALUE",
 *       },
 *     ],
 *     secrets: [ // SecretList
 *       { // Secret
 *         name: "STRING_VALUE", // required
 *         valueFrom: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   taskRoleArn: "STRING_VALUE",
 *   networkConfiguration: { // ExpressGatewayServiceNetworkConfiguration
 *     securityGroups: [
 *       "STRING_VALUE",
 *     ],
 *     subnets: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   cpu: "STRING_VALUE",
 *   memory: "STRING_VALUE",
 *   cpuArchitecture: "X86_64" || "ARM64",
 *   scalingTarget: { // ExpressGatewayScalingTarget
 *     minTaskCount: Number("int"),
 *     maxTaskCount: Number("int"),
 *     autoScalingMetric: "AVERAGE_CPU" || "AVERAGE_MEMORY" || "REQUEST_COUNT_PER_TARGET",
 *     autoScalingTargetValue: Number("int"),
 *   },
 *   taskDefinitionArn: "STRING_VALUE",
 * };
 * const command = new UpdateExpressGatewayServiceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateExpressGatewayServiceResponse
 * //   service: { // UpdatedExpressGatewayService
 * //     serviceArn: "STRING_VALUE",
 * //     cluster: "STRING_VALUE",
 * //     serviceName: "STRING_VALUE",
 * //     status: { // ExpressGatewayServiceStatus
 * //       statusCode: "ACTIVE" || "DRAINING" || "INACTIVE",
 * //       statusReason: "STRING_VALUE",
 * //     },
 * //     targetConfiguration: { // ExpressGatewayServiceConfiguration
 * //       serviceRevisionArn: "STRING_VALUE",
 * //       executionRoleArn: "STRING_VALUE",
 * //       taskRoleArn: "STRING_VALUE",
 * //       taskDefinitionArn: "STRING_VALUE",
 * //       cpu: "STRING_VALUE",
 * //       memory: "STRING_VALUE",
 * //       cpuArchitecture: "X86_64" || "ARM64",
 * //       networkConfiguration: { // ExpressGatewayServiceNetworkConfiguration
 * //         securityGroups: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //         subnets: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       healthCheckPath: "STRING_VALUE",
 * //       primaryContainer: { // ExpressGatewayContainer
 * //         image: "STRING_VALUE", // required
 * //         containerPort: Number("int"),
 * //         awsLogsConfiguration: { // ExpressGatewayServiceAwsLogsConfiguration
 * //           logGroup: "STRING_VALUE", // required
 * //           logStreamPrefix: "STRING_VALUE", // required
 * //         },
 * //         repositoryCredentials: { // ExpressGatewayRepositoryCredentials
 * //           credentialsParameter: "STRING_VALUE",
 * //         },
 * //         command: [
 * //           "STRING_VALUE",
 * //         ],
 * //         environment: [ // EnvironmentVariables
 * //           { // KeyValuePair
 * //             name: "STRING_VALUE",
 * //             value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         secrets: [ // SecretList
 * //           { // Secret
 * //             name: "STRING_VALUE", // required
 * //             valueFrom: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       scalingTarget: { // ExpressGatewayScalingTarget
 * //         minTaskCount: Number("int"),
 * //         maxTaskCount: Number("int"),
 * //         autoScalingMetric: "AVERAGE_CPU" || "AVERAGE_MEMORY" || "REQUEST_COUNT_PER_TARGET",
 * //         autoScalingTargetValue: Number("int"),
 * //       },
 * //       ingressPaths: [ // IngressPathSummaries
 * //         { // IngressPathSummary
 * //           accessType: "PUBLIC" || "PRIVATE", // required
 * //           endpoint: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateExpressGatewayServiceCommandInput - {@link UpdateExpressGatewayServiceCommandInput}
 * @returns {@link UpdateExpressGatewayServiceCommandOutput}
 * @see {@link UpdateExpressGatewayServiceCommandInput} for command's `input` shape.
 * @see {@link UpdateExpressGatewayServiceCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceNotActiveException} (client fault)
 *
 * The specified service isn't active. You can't update a service that's inactive. If you have previously deleted a service, you can re-create it with [CreateService](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html).
 *
 * @throws {@link ServiceNotFoundException} (client fault)
 *
 * The specified service wasn't found. You can view your available services with [ListServices](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html). Amazon ECS services are cluster specific and Region specific.
 *
 * @throws {@link UnsupportedFeatureException} (client fault)
 *
 * The specified task isn't supported in this Region.
 *
 * @throws {@link ECSServiceException}
 *
 * Base exception class for all service exceptions from ECS service.
 *
 * @public
 */
export class UpdateExpressGatewayServiceCommand extends command<UpdateExpressGatewayServiceCommandInput, UpdateExpressGatewayServiceCommandOutput>(
  _ep0,
  _mw0,
  "UpdateExpressGatewayService",
  UpdateExpressGatewayService$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateExpressGatewayServiceRequest;
      output: UpdateExpressGatewayServiceResponse;
    };
    sdk: {
      input: UpdateExpressGatewayServiceCommandInput;
      output: UpdateExpressGatewayServiceCommandOutput;
    };
  };
}
