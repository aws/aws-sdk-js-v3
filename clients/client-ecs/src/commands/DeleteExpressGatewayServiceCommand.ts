// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteExpressGatewayServiceRequest, DeleteExpressGatewayServiceResponse } from "../models/models_0";
import { DeleteExpressGatewayService$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DeleteExpressGatewayServiceCommandOutput
  extends DeleteExpressGatewayServiceResponse,
    __MetadataBearer {}

/**
 * <p>Deletes an Express service and removes all associated Amazon Web Services resources. This operation
 * 			stops service tasks, removes the Application Load Balancer, target groups, security groups,
 * 			auto-scaling policies, and other managed infrastructure components.</p>
 *          <p>The service enters a <code>DRAINING</code> state where existing tasks complete current
 * 			requests without starting new tasks. After all tasks stop, the service and infrastructure
 * 			are permanently removed.</p>
 *          <p>This operation cannot be reversed. Back up important data and verify the service is no
 * 			longer needed before deletion.</p>
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
 * @param DeleteExpressGatewayServiceCommandInput - {@link DeleteExpressGatewayServiceCommandInput}
 * @returns {@link DeleteExpressGatewayServiceCommandOutput}
 * @see {@link DeleteExpressGatewayServiceCommandInput} for command's `input` shape.
 * @see {@link DeleteExpressGatewayServiceCommandOutput} for command's `response` shape.
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
export class DeleteExpressGatewayServiceCommand extends $Command
  .classBuilder<
    DeleteExpressGatewayServiceCommandInput,
    DeleteExpressGatewayServiceCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerServiceV20141113", "DeleteExpressGatewayService", {})
  .n("ECSClient", "DeleteExpressGatewayServiceCommand")
  .sc(DeleteExpressGatewayService$)
  .build() {
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
