// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteExpressGatewayServiceRequest, DeleteExpressGatewayServiceResponse } from "../models/models_1";
import { DeleteExpressGatewayService$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteExpressGatewayServiceCommand}.
 */
export interface DeleteExpressGatewayServiceCommandInput extends DeleteExpressGatewayServiceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteExpressGatewayServiceCommand}.
 */
export interface DeleteExpressGatewayServiceCommandOutput extends DeleteExpressGatewayServiceResponse, __MetadataBearer {}

/**
 * Deletes an Express service and removes all associated Amazon Web Services resources. This operation stops service tasks, removes the Application Load Balancer, target groups, security groups, auto-scaling policies, and other managed infrastructure components.
 *
 * The service enters a `DRAINING` state where existing tasks complete current requests without starting new tasks. After all tasks stop, the service and infrastructure are permanently removed.
 *
 * This operation cannot be reversed. Back up important data and verify the service is no longer needed before deletion.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeleteExpressGatewayServiceCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeleteExpressGatewayServiceCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // DeleteExpressGatewayServiceRequest
 *   serviceArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteExpressGatewayServiceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteExpressGatewayServiceResponse
 * //   service: { // ECSExpressGatewayService
 * //     cluster: "STRING_VALUE",
 * //     serviceName: "STRING_VALUE",
 * //     serviceArn: "STRING_VALUE",
 * //     infrastructureRoleArn: "STRING_VALUE",
 * //     status: { // ExpressGatewayServiceStatus
 * //       statusCode: "ACTIVE" || "DRAINING" || "INACTIVE",
 * //       statusReason: "STRING_VALUE",
 * //     },
 * //     currentDeployment: "STRING_VALUE",
 * //     activeConfigurations: [ // ExpressGatewayServiceConfigurations
 * //       { // ExpressGatewayServiceConfiguration
 * //         serviceRevisionArn: "STRING_VALUE",
 * //         executionRoleArn: "STRING_VALUE",
 * //         taskRoleArn: "STRING_VALUE",
 * //         taskDefinitionArn: "STRING_VALUE",
 * //         cpu: "STRING_VALUE",
 * //         memory: "STRING_VALUE",
 * //         cpuArchitecture: "X86_64" || "ARM64",
 * //         networkConfiguration: { // ExpressGatewayServiceNetworkConfiguration
 * //           securityGroups: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //           subnets: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         healthCheckPath: "STRING_VALUE",
 * //         primaryContainer: { // ExpressGatewayContainer
 * //           image: "STRING_VALUE", // required
 * //           containerPort: Number("int"),
 * //           awsLogsConfiguration: { // ExpressGatewayServiceAwsLogsConfiguration
 * //             logGroup: "STRING_VALUE", // required
 * //             logStreamPrefix: "STRING_VALUE", // required
 * //           },
 * //           repositoryCredentials: { // ExpressGatewayRepositoryCredentials
 * //             credentialsParameter: "STRING_VALUE",
 * //           },
 * //           command: [
 * //             "STRING_VALUE",
 * //           ],
 * //           environment: [ // EnvironmentVariables
 * //             { // KeyValuePair
 * //               name: "STRING_VALUE",
 * //               value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           secrets: [ // SecretList
 * //             { // Secret
 * //               name: "STRING_VALUE", // required
 * //               valueFrom: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //         scalingTarget: { // ExpressGatewayScalingTarget
 * //           minTaskCount: Number("int"),
 * //           maxTaskCount: Number("int"),
 * //           autoScalingMetric: "AVERAGE_CPU" || "AVERAGE_MEMORY" || "REQUEST_COUNT_PER_TARGET",
 * //           autoScalingTargetValue: Number("int"),
 * //         },
 * //         ingressPaths: [ // IngressPathSummaries
 * //           { // IngressPathSummary
 * //             accessType: "PUBLIC" || "PRIVATE", // required
 * //             endpoint: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         createdAt: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     tags: [ // Tags
 * //       { // Tag
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteExpressGatewayServiceCommandInput - {@link DeleteExpressGatewayServiceCommandInput}
 * @returns {@link DeleteExpressGatewayServiceCommandOutput}
 * @see {@link DeleteExpressGatewayServiceCommandInput} for command's `input` shape.
 * @see {@link DeleteExpressGatewayServiceCommandOutput} for command's `response` shape.
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
export class DeleteExpressGatewayServiceCommand extends command<DeleteExpressGatewayServiceCommandInput, DeleteExpressGatewayServiceCommandOutput>(
  _ep0,
  _mw0,
  "DeleteExpressGatewayService",
  DeleteExpressGatewayService$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteExpressGatewayServiceRequest;
      output: DeleteExpressGatewayServiceResponse;
    };
    sdk: {
      input: DeleteExpressGatewayServiceCommandInput;
      output: DeleteExpressGatewayServiceCommandOutput;
    };
  };
}
