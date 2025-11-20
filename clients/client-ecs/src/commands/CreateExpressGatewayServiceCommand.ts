// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateExpressGatewayServiceRequest, CreateExpressGatewayServiceResponse } from "../models/models_0";
import { CreateExpressGatewayService } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateExpressGatewayServiceCommand}.
 */
export interface CreateExpressGatewayServiceCommandInput extends CreateExpressGatewayServiceRequest {}
/**
 * @public
 *
 * The output of {@link CreateExpressGatewayServiceCommand}.
 */
export interface CreateExpressGatewayServiceCommandOutput
  extends CreateExpressGatewayServiceResponse,
    __MetadataBearer {}

/**
 * <p>Creates an Express service that simplifies deploying containerized web applications on
 * 			Amazon ECS with managed Amazon Web Services infrastructure. This operation provisions and configures
 * 			Application Load Balancers, target groups, security groups, and auto-scaling policies
 * 			automatically.</p>
 *          <p>Specify a primary container configuration with your application image and basic
 * 			settings. Amazon ECS creates the necessary Amazon Web Services resources for traffic distribution, health
 * 			monitoring, network access control, and capacity management.</p>
 *          <p>Provide an execution role for task operations and an infrastructure role for managing
 * 			Amazon Web Services resources on your behalf.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, CreateExpressGatewayServiceCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, CreateExpressGatewayServiceCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // CreateExpressGatewayServiceRequest
 *   executionRoleArn: "STRING_VALUE", // required
 *   infrastructureRoleArn: "STRING_VALUE", // required
 *   serviceName: "STRING_VALUE",
 *   cluster: "STRING_VALUE",
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
 *   scalingTarget: { // ExpressGatewayScalingTarget
 *     minTaskCount: Number("int"),
 *     maxTaskCount: Number("int"),
 *     autoScalingMetric: "AVERAGE_CPU" || "AVERAGE_MEMORY" || "REQUEST_COUNT_PER_TARGET",
 *     autoScalingTargetValue: Number("int"),
 *   },
 *   tags: [ // Tags
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateExpressGatewayServiceCommand(input);
 * const response = await client.send(command);
 * // { // CreateExpressGatewayServiceResponse
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
 * //         cpu: "STRING_VALUE",
 * //         memory: "STRING_VALUE",
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
 * @param CreateExpressGatewayServiceCommandInput - {@link CreateExpressGatewayServiceCommandInput}
 * @returns {@link CreateExpressGatewayServiceCommandOutput}
 * @see {@link CreateExpressGatewayServiceCommandInput} for command's `input` shape.
 * @see {@link CreateExpressGatewayServiceCommandOutput} for command's `response` shape.
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
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS
 * 				service event messages</a>. </p>
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
 * @public
 */
export class CreateExpressGatewayServiceCommand extends $Command
  .classBuilder<
    CreateExpressGatewayServiceCommandInput,
    CreateExpressGatewayServiceCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerServiceV20141113", "CreateExpressGatewayService", {})
  .n("ECSClient", "CreateExpressGatewayServiceCommand")
  .sc(CreateExpressGatewayService)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateExpressGatewayServiceRequest;
      output: CreateExpressGatewayServiceResponse;
    };
    sdk: {
      input: CreateExpressGatewayServiceCommandInput;
      output: CreateExpressGatewayServiceCommandOutput;
    };
  };
}
