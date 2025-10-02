// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateJobQueueRequest, CreateJobQueueResponse } from "../models/models_0";
import { de_CreateJobQueueCommand, se_CreateJobQueueCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateJobQueueCommand}.
 */
export interface CreateJobQueueCommandInput extends CreateJobQueueRequest {}
/**
 * @public
 *
 * The output of {@link CreateJobQueueCommand}.
 */
export interface CreateJobQueueCommandOutput extends CreateJobQueueResponse, __MetadataBearer {}

/**
 * <p>Creates an Batch job queue. When you create a job queue, you associate one or more
 *       compute environments to the queue and assign an order of preference for the compute
 *       environments.</p>
 *          <p>You also set a priority to the job queue that determines the order that the Batch
 *       scheduler places jobs onto its associated compute environments. For example, if a compute
 *       environment is associated with more than one job queue, the job queue with a higher priority
 *       is given preference for scheduling jobs to that compute environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, CreateJobQueueCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, CreateJobQueueCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * // import type { BatchClientConfig } from "@aws-sdk/client-batch";
 * const config = {}; // type is BatchClientConfig
 * const client = new BatchClient(config);
 * const input = { // CreateJobQueueRequest
 *   jobQueueName: "STRING_VALUE", // required
 *   state: "ENABLED" || "DISABLED",
 *   schedulingPolicyArn: "STRING_VALUE",
 *   priority: Number("int"), // required
 *   computeEnvironmentOrder: [ // ComputeEnvironmentOrders
 *     { // ComputeEnvironmentOrder
 *       order: Number("int"), // required
 *       computeEnvironment: "STRING_VALUE", // required
 *     },
 *   ],
 *   serviceEnvironmentOrder: [ // ServiceEnvironmentOrders
 *     { // ServiceEnvironmentOrder
 *       order: Number("int"), // required
 *       serviceEnvironment: "STRING_VALUE", // required
 *     },
 *   ],
 *   jobQueueType: "EKS" || "ECS" || "ECS_FARGATE" || "SAGEMAKER_TRAINING",
 *   tags: { // TagrisTagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   jobStateTimeLimitActions: [ // JobStateTimeLimitActions
 *     { // JobStateTimeLimitAction
 *       reason: "STRING_VALUE", // required
 *       state: "RUNNABLE", // required
 *       maxTimeSeconds: Number("int"), // required
 *       action: "CANCEL" || "TERMINATE", // required
 *     },
 *   ],
 * };
 * const command = new CreateJobQueueCommand(input);
 * const response = await client.send(command);
 * // { // CreateJobQueueResponse
 * //   jobQueueName: "STRING_VALUE", // required
 * //   jobQueueArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateJobQueueCommandInput - {@link CreateJobQueueCommandInput}
 * @returns {@link CreateJobQueueCommandOutput}
 * @see {@link CreateJobQueueCommandInput} for command's `input` shape.
 * @see {@link CreateJobQueueCommandOutput} for command's `response` shape.
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
 * @example To create a job queue with a single compute environment
 * ```javascript
 * // This example creates a job queue called LowPriority that uses the M4Spot compute environment.
 * const input = {
 *   computeEnvironmentOrder: [
 *     {
 *       computeEnvironment: "M4Spot",
 *       order: 1
 *     }
 *   ],
 *   jobQueueName: "LowPriority",
 *   priority: 1,
 *   state: "ENABLED"
 * };
 * const command = new CreateJobQueueCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   jobQueueArn: "arn:aws:batch:us-east-1:012345678910:job-queue/LowPriority",
 *   jobQueueName: "LowPriority"
 * }
 * *\/
 * ```
 *
 * @example To create a job queue with multiple compute environments
 * ```javascript
 * // This example creates a job queue called HighPriority that uses the C4OnDemand compute environment with an order of 1 and the M4Spot compute environment with an order of 2.
 * const input = {
 *   computeEnvironmentOrder: [
 *     {
 *       computeEnvironment: "C4OnDemand",
 *       order: 1
 *     },
 *     {
 *       computeEnvironment: "M4Spot",
 *       order: 2
 *     }
 *   ],
 *   jobQueueName: "HighPriority",
 *   priority: 10,
 *   state: "ENABLED"
 * };
 * const command = new CreateJobQueueCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   jobQueueArn: "arn:aws:batch:us-east-1:012345678910:job-queue/HighPriority",
 *   jobQueueName: "HighPriority"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateJobQueueCommand extends $Command
  .classBuilder<
    CreateJobQueueCommandInput,
    CreateJobQueueCommandOutput,
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
  .s("AWSBatchV20160810", "CreateJobQueue", {})
  .n("BatchClient", "CreateJobQueueCommand")
  .f(void 0, void 0)
  .ser(se_CreateJobQueueCommand)
  .de(de_CreateJobQueueCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateJobQueueRequest;
      output: CreateJobQueueResponse;
    };
    sdk: {
      input: CreateJobQueueCommandInput;
      output: CreateJobQueueCommandOutput;
    };
  };
}
