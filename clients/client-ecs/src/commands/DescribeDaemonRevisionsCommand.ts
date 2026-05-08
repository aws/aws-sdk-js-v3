// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeDaemonRevisionsRequest, DescribeDaemonRevisionsResponse } from "../models/models_0";
import { DescribeDaemonRevisions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDaemonRevisionsCommand}.
 */
export interface DescribeDaemonRevisionsCommandInput extends DescribeDaemonRevisionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDaemonRevisionsCommand}.
 */
export interface DescribeDaemonRevisionsCommandOutput extends DescribeDaemonRevisionsResponse, __MetadataBearer {}

/**
 * <p>Describes one or more of your daemon revisions.</p> <p>A daemon revision is a snapshot of a daemon's configuration at the time a deployment was initiated. It captures the daemon task definition, container images, tag propagation, and execute command settings. Daemon revisions are immutable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeDaemonRevisionsCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeDaemonRevisionsCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // DescribeDaemonRevisionsRequest
 *   daemonRevisionArns: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeDaemonRevisionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDaemonRevisionsResponse
 * //   daemonRevisions: [ // DaemonRevisions
 * //     { // DaemonRevision
 * //       daemonRevisionArn: "STRING_VALUE",
 * //       clusterArn: "STRING_VALUE",
 * //       daemonArn: "STRING_VALUE",
 * //       daemonTaskDefinitionArn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       containerImages: [ // DaemonContainerImages
 * //         { // DaemonContainerImage
 * //           containerName: "STRING_VALUE",
 * //           imageDigest: "STRING_VALUE",
 * //           image: "STRING_VALUE",
 * //         },
 * //       ],
 * //       propagateTags: "DAEMON" || "NONE",
 * //       enableECSManagedTags: true || false,
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
 * @param DescribeDaemonRevisionsCommandInput - {@link DescribeDaemonRevisionsCommandInput}
 * @returns {@link DescribeDaemonRevisionsCommandOutput}
 * @see {@link DescribeDaemonRevisionsCommandInput} for command's `input` shape.
 * @see {@link DescribeDaemonRevisionsCommandOutput} for command's `response` shape.
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
 * @example To describe daemon revisions
 * ```javascript
 * // This example describes a daemon revision for the my-monitoring-daemon daemon.
 * const input = {
 *   daemonRevisionArns: [
 *     "arn:aws:ecs:us-east-1:123456789012:daemon-revision/my-cluster/my-monitoring-daemon/4980306466373577095"
 *   ]
 * };
 * const command = new DescribeDaemonRevisionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   daemonRevisions: [
 *     {
 *       clusterArn: "arn:aws:ecs:us-east-1:123456789012:cluster/my-cluster",
 *       containerImages: [
 *         {
 *           containerName: "cloudwatch-agent",
 *           image: "public.ecr.aws/cloudwatch-agent/cloudwatch-agent:latest",
 *           imageDigest: "sha256:a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2"
 *         }
 *       ],
 *       createdAt: "2025-03-15T12:00:00.000Z",
 *       daemonArn: "arn:aws:ecs:us-east-1:123456789012:daemon/my-cluster/my-monitoring-daemon",
 *       daemonRevisionArn: "arn:aws:ecs:us-east-1:123456789012:daemon-revision/my-cluster/my-monitoring-daemon/4980306466373577095",
 *       daemonTaskDefinitionArn: "arn:aws:ecs:us-east-1:123456789012:daemon-task-definition/monitoring-agent:1",
 *       enableECSManagedTags: false,
 *       enableExecuteCommand: false,
 *       propagateTags: "NONE"
 *     }
 *   ],
 *   failures:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeDaemonRevisionsCommand extends $Command
  .classBuilder<
    DescribeDaemonRevisionsCommandInput,
    DescribeDaemonRevisionsCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerServiceV20141113", "DescribeDaemonRevisions", {})
  .n("ECSClient", "DescribeDaemonRevisionsCommand")
  .sc(DescribeDaemonRevisions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDaemonRevisionsRequest;
      output: DescribeDaemonRevisionsResponse;
    };
    sdk: {
      input: DescribeDaemonRevisionsCommandInput;
      output: DescribeDaemonRevisionsCommandOutput;
    };
  };
}
