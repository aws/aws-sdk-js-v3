// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateExpressGatewayServiceRequest, UpdateExpressGatewayServiceResponse } from "../models/models_0";
import { UpdateExpressGatewayService$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface UpdateExpressGatewayServiceCommandOutput
  extends UpdateExpressGatewayServiceResponse,
    __MetadataBearer {}

/**
 * <p>Updates an existing Express service configuration. Modifies container settings, resource
 * 			allocation, auto-scaling configuration, and other service parameters without recreating the
 * 			service.</p>
 *          <p>Amazon ECS creates a new service revision with updated configuration and performs a rolling
 * 			deployment to replace existing tasks. The service remains available during updates,
 * 			ensuring zero-downtime deployments.</p>
 *          <p>Some parameters like the infrastructure role cannot be modified after service creation
 * 			and require creating a new service.</p>
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
 *   scalingTarget: { // ExpressGatewayScalingTarget
 *     minTaskCount: Number("int"),
 *     maxTaskCount: Number("int"),
 *     autoScalingMetric: "AVERAGE_CPU" || "AVERAGE_MEMORY" || "REQUEST_COUNT_PER_TARGET",
 *     autoScalingTargetValue: Number("int"),
 *   },
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
 * //       cpu: "STRING_VALUE",
 * //       memory: "STRING_VALUE",
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
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ServiceNotActiveException} (client fault)
 *  <p>The specified service isn't active. You can't update a service that's inactive. If you
 * 			have previously deleted a service, you can re-create it with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html">CreateService</a>.</p>
 *
 * @throws {@link ServiceNotFoundException} (client fault)
 *  <p>The specified service wasn't found. You can view your available services with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html">ListServices</a>. Amazon ECS services are cluster specific and Region
 * 			specific.</p>
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
export class UpdateExpressGatewayServiceCommand extends $Command
  .classBuilder<
    UpdateExpressGatewayServiceCommandInput,
    UpdateExpressGatewayServiceCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerServiceV20141113", "UpdateExpressGatewayService", {})
  .n("ECSClient", "UpdateExpressGatewayServiceCommand")
  .sc(UpdateExpressGatewayService$)
  .build() {
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
