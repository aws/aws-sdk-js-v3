// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeJobQueuesRequest, DescribeJobQueuesResponse } from "../models/models_0";
import { de_DescribeJobQueuesCommand, se_DescribeJobQueuesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeJobQueuesCommand}.
 */
export interface DescribeJobQueuesCommandInput extends DescribeJobQueuesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeJobQueuesCommand}.
 */
export interface DescribeJobQueuesCommandOutput extends DescribeJobQueuesResponse, __MetadataBearer {}

/**
 * <p>Describes one or more of your job queues.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DescribeJobQueuesCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DescribeJobQueuesCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * // import type { BatchClientConfig } from "@aws-sdk/client-batch";
 * const config = {}; // type is BatchClientConfig
 * const client = new BatchClient(config);
 * const input = { // DescribeJobQueuesRequest
 *   jobQueues: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeJobQueuesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeJobQueuesResponse
 * //   jobQueues: [ // JobQueueDetailList
 * //     { // JobQueueDetail
 * //       jobQueueName: "STRING_VALUE", // required
 * //       jobQueueArn: "STRING_VALUE", // required
 * //       state: "ENABLED" || "DISABLED", // required
 * //       schedulingPolicyArn: "STRING_VALUE",
 * //       status: "CREATING" || "UPDATING" || "DELETING" || "DELETED" || "VALID" || "INVALID",
 * //       statusReason: "STRING_VALUE",
 * //       priority: Number("int"), // required
 * //       computeEnvironmentOrder: [ // ComputeEnvironmentOrders // required
 * //         { // ComputeEnvironmentOrder
 * //           order: Number("int"), // required
 * //           computeEnvironment: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       serviceEnvironmentOrder: [ // ServiceEnvironmentOrders
 * //         { // ServiceEnvironmentOrder
 * //           order: Number("int"), // required
 * //           serviceEnvironment: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       jobQueueType: "EKS" || "ECS" || "ECS_FARGATE" || "SAGEMAKER_TRAINING",
 * //       tags: { // TagrisTagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       jobStateTimeLimitActions: [ // JobStateTimeLimitActions
 * //         { // JobStateTimeLimitAction
 * //           reason: "STRING_VALUE", // required
 * //           state: "RUNNABLE", // required
 * //           maxTimeSeconds: Number("int"), // required
 * //           action: "CANCEL" || "TERMINATE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeJobQueuesCommandInput - {@link DescribeJobQueuesCommandInput}
 * @returns {@link DescribeJobQueuesCommandOutput}
 * @see {@link DescribeJobQueuesCommandInput} for command's `input` shape.
 * @see {@link DescribeJobQueuesCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link BatchServiceException}
 * <p>Base exception class for all service exceptions from Batch service.</p>
 *
 *
 * @example To describe a job queue
 * ```javascript
 * // This example describes the HighPriority job queue.
 * const input = {
 *   jobQueues: [
 *     "HighPriority"
 *   ]
 * };
 * const command = new DescribeJobQueuesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   jobQueues: [
 *     {
 *       computeEnvironmentOrder: [
 *         {
 *           computeEnvironment: "arn:aws:batch:us-east-1:012345678910:compute-environment/C4OnDemand",
 *           order: 1
 *         }
 *       ],
 *       jobQueueArn: "arn:aws:batch:us-east-1:012345678910:job-queue/HighPriority",
 *       jobQueueName: "HighPriority",
 *       priority: 1,
 *       state: "ENABLED",
 *       status: "VALID",
 *       statusReason: "JobQueue Healthy"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeJobQueuesCommand extends $Command
  .classBuilder<
    DescribeJobQueuesCommandInput,
    DescribeJobQueuesCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBatchV20160810", "DescribeJobQueues", {})
  .n("BatchClient", "DescribeJobQueuesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeJobQueuesCommand)
  .de(de_DescribeJobQueuesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeJobQueuesRequest;
      output: DescribeJobQueuesResponse;
    };
    sdk: {
      input: DescribeJobQueuesCommandInput;
      output: DescribeJobQueuesCommandOutput;
    };
  };
}
