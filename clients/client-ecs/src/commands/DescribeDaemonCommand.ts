// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeDaemonRequest, DescribeDaemonResponse } from "../models/models_0";
import { DescribeDaemon$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDaemonCommand}.
 */
export interface DescribeDaemonCommandInput extends DescribeDaemonRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDaemonCommand}.
 */
export interface DescribeDaemonCommandOutput extends DescribeDaemonResponse, __MetadataBearer {}

/**
 * <p>Describes the specified daemon.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeDaemonCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeDaemonCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // DescribeDaemonRequest
 *   daemonArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeDaemonCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDaemonResponse
 * //   daemon: { // DaemonDetail
 * //     daemonArn: "STRING_VALUE",
 * //     clusterArn: "STRING_VALUE",
 * //     status: "ACTIVE" || "DELETE_IN_PROGRESS",
 * //     currentRevisions: [ // DaemonRevisionDetailList
 * //       { // DaemonRevisionDetail
 * //         arn: "STRING_VALUE",
 * //         capacityProviders: [ // DaemonCapacityProviderList
 * //           { // DaemonCapacityProvider
 * //             arn: "STRING_VALUE",
 * //             runningCount: Number("int"),
 * //           },
 * //         ],
 * //         totalRunningCount: Number("int"),
 * //       },
 * //     ],
 * //     deploymentArn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDaemonCommandInput - {@link DescribeDaemonCommandInput}
 * @returns {@link DescribeDaemonCommandOutput}
 * @see {@link DescribeDaemonCommandInput} for command's `input` shape.
 * @see {@link DescribeDaemonCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have authorization to perform the requested action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using an action or resource on behalf of a user that doesn't have permissions to use the action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html">ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link DaemonNotFoundException} (client fault)
 *  <p>The specified daemon wasn't found. You can view your available daemons with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListDaemons.html">ListDaemons</a>. Amazon ECS daemons are cluster specific and Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API request.</p> <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service event messages</a>. </p>
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
 * @example To describe a daemon
 * ```javascript
 * // This example describes the my-monitoring-daemon daemon.
 * const input = {
 *   daemonArn: "arn:aws:ecs:us-east-1:123456789012:daemon/my-cluster/my-monitoring-daemon"
 * };
 * const command = new DescribeDaemonCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   daemon: {
 *     clusterArn: "arn:aws:ecs:us-east-1:123456789012:cluster/my-cluster",
 *     createdAt: "2025-03-15T12:00:00.000Z",
 *     currentRevisions: [
 *       {
 *         arn: "arn:aws:ecs:us-east-1:123456789012:daemon-revision/my-cluster/my-monitoring-daemon/4980306466373577095",
 *         capacityProviders: [
 *           {
 *             arn: "arn:aws:ecs:us-east-1:123456789012:capacity-provider/my-capacity-provider",
 *             runningCount: 3
 *           }
 *         ],
 *         totalRunningCount: 3
 *       }
 *     ],
 *     daemonArn: "arn:aws:ecs:us-east-1:123456789012:daemon/my-cluster/my-monitoring-daemon",
 *     deploymentArn: "arn:aws:ecs:us-east-1:123456789012:daemon-deployment/my-cluster/my-monitoring-daemon/aB1cD2eF3gH4iJ5k",
 *     status: "ACTIVE",
 *     updatedAt: "2025-03-20T15:30:00.000Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeDaemonCommand extends $Command
  .classBuilder<
    DescribeDaemonCommandInput,
    DescribeDaemonCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerServiceV20141113", "DescribeDaemon", {})
  .n("ECSClient", "DescribeDaemonCommand")
  .sc(DescribeDaemon$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDaemonRequest;
      output: DescribeDaemonResponse;
    };
    sdk: {
      input: DescribeDaemonCommandInput;
      output: DescribeDaemonCommandOutput;
    };
  };
}
