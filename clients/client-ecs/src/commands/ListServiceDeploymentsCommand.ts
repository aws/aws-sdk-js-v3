// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListServiceDeploymentsRequest, ListServiceDeploymentsResponse } from "../models/models_0";
import { ListServiceDeployments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServiceDeploymentsCommand}.
 */
export interface ListServiceDeploymentsCommandInput extends ListServiceDeploymentsRequest {}
/**
 * @public
 *
 * The output of {@link ListServiceDeploymentsCommand}.
 */
export interface ListServiceDeploymentsCommandOutput extends ListServiceDeploymentsResponse, __MetadataBearer {}

/**
 * <p>This operation lists all the service deployments that meet the specified filter
 * 			criteria.</p>
 *          <p>A service deployment happens when you release a software update for the service. You
 * 			route traffic from the running service revisions to the new service revison and control
 * 			the number of running tasks. </p>
 *          <p>This API returns the values that you use for the request parameters in <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeServiceRevisions.html">DescribeServiceRevisions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListServiceDeploymentsCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListServiceDeploymentsCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // ListServiceDeploymentsRequest
 *   service: "STRING_VALUE", // required
 *   cluster: "STRING_VALUE",
 *   status: [ // ServiceDeploymentStatusList
 *     "PENDING" || "SUCCESSFUL" || "STOPPED" || "STOP_REQUESTED" || "IN_PROGRESS" || "ROLLBACK_REQUESTED" || "ROLLBACK_IN_PROGRESS" || "ROLLBACK_SUCCESSFUL" || "ROLLBACK_FAILED",
 *   ],
 *   createdAt: { // CreatedAt
 *     before: new Date("TIMESTAMP"),
 *     after: new Date("TIMESTAMP"),
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListServiceDeploymentsCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceDeploymentsResponse
 * //   serviceDeployments: [ // ServiceDeploymentsBrief
 * //     { // ServiceDeploymentBrief
 * //       serviceDeploymentArn: "STRING_VALUE",
 * //       serviceArn: "STRING_VALUE",
 * //       clusterArn: "STRING_VALUE",
 * //       startedAt: new Date("TIMESTAMP"),
 * //       createdAt: new Date("TIMESTAMP"),
 * //       finishedAt: new Date("TIMESTAMP"),
 * //       targetServiceRevisionArn: "STRING_VALUE",
 * //       status: "PENDING" || "SUCCESSFUL" || "STOPPED" || "STOP_REQUESTED" || "IN_PROGRESS" || "ROLLBACK_REQUESTED" || "ROLLBACK_IN_PROGRESS" || "ROLLBACK_SUCCESSFUL" || "ROLLBACK_FAILED",
 * //       statusReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServiceDeploymentsCommandInput - {@link ListServiceDeploymentsCommandInput}
 * @returns {@link ListServiceDeploymentsCommandOutput}
 * @see {@link ListServiceDeploymentsCommandInput} for command's `input` shape.
 * @see {@link ListServiceDeploymentsCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS
 * 				service event messages</a>. </p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
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
 * @example To list service deployments that meet the specified criteria
 * ```javascript
 * // This example lists all successful service deployments for the service "sd-example" in the cluster "example".
 * const input = {
 *   cluster: "example",
 *   service: "sd-example",
 *   status: [
 *     "SUCCESSFUL"
 *   ]
 * };
 * const command = new ListServiceDeploymentsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   serviceDeployments: [
 *     {
 *       clusterArn: "arn:aws:ecs:us-west-2:123456789012:cluster/example",
 *       serviceArn: "arn:aws:ecs:us-west-2:123456789012:service/example/sd-example",
 *       serviceDeploymentArn: "arn:aws:ecs:us-west-2:123456789012:service-deployment/example/sd-example/NCWGC2ZR-taawPAYrIaU5",
 *       status: "SUCCESSFUL",
 *       targetServiceRevisionArn: "arn:aws:ecs:us-west-2:123456789012:service-revision/example/sd-example/4980306466373577095"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListServiceDeploymentsCommand extends $Command
  .classBuilder<
    ListServiceDeploymentsCommandInput,
    ListServiceDeploymentsCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerServiceV20141113", "ListServiceDeployments", {})
  .n("ECSClient", "ListServiceDeploymentsCommand")
  .sc(ListServiceDeployments$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceDeploymentsRequest;
      output: ListServiceDeploymentsResponse;
    };
    sdk: {
      input: ListServiceDeploymentsCommandInput;
      output: ListServiceDeploymentsCommandOutput;
    };
  };
}
