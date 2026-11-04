// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeExpressGatewayServiceRequest, DescribeExpressGatewayServiceResponse } from "../models/models_1";
import { DescribeExpressGatewayService$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeExpressGatewayServiceCommand}.
 */
export interface DescribeExpressGatewayServiceCommandInput extends DescribeExpressGatewayServiceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeExpressGatewayServiceCommand}.
 */
export interface DescribeExpressGatewayServiceCommandOutput extends DescribeExpressGatewayServiceResponse, __MetadataBearer {}

/**
 * Retrieves detailed information about an Express service, including current status, configuration, managed infrastructure, and service revisions.
 *
 * Returns comprehensive service details, active service revisions, ingress paths with endpoints, and managed Amazon Web Services resource status including load balancers and auto-scaling policies.
 *
 * Use the `include` parameter to retrieve additional information such as resource tags.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeExpressGatewayServiceCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeExpressGatewayServiceCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // DescribeExpressGatewayServiceRequest
 *   serviceArn: "STRING_VALUE", // required
 *   include: [ // ExpressGatewayServiceIncludeList
 *     "TAGS",
 *   ],
 * };
 * const command = new DescribeExpressGatewayServiceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeExpressGatewayServiceResponse
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
 * @param DescribeExpressGatewayServiceCommandInput - {@link DescribeExpressGatewayServiceCommandInput}
 * @returns {@link DescribeExpressGatewayServiceCommandOutput}
 * @see {@link DescribeExpressGatewayServiceCommandInput} for command's `input` shape.
 * @see {@link DescribeExpressGatewayServiceCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource wasn't found.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server issue.
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
export class DescribeExpressGatewayServiceCommand extends command<DescribeExpressGatewayServiceCommandInput, DescribeExpressGatewayServiceCommandOutput>(
  _ep0,
  _mw0,
  "DescribeExpressGatewayService",
  DescribeExpressGatewayService$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeExpressGatewayServiceRequest;
      output: DescribeExpressGatewayServiceResponse;
    };
    sdk: {
      input: DescribeExpressGatewayServiceCommandInput;
      output: DescribeExpressGatewayServiceCommandOutput;
    };
  };
}
