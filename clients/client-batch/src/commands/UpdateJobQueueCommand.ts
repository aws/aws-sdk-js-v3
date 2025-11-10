// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateJobQueueRequest, UpdateJobQueueResponse } from "../models/models_0";
import { UpdateJobQueue } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateJobQueueCommand}.
 */
export interface UpdateJobQueueCommandInput extends UpdateJobQueueRequest {}
/**
 * @public
 *
 * The output of {@link UpdateJobQueueCommand}.
 */
export interface UpdateJobQueueCommandOutput extends UpdateJobQueueResponse, __MetadataBearer {}

/**
 * <p>Updates a job queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, UpdateJobQueueCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, UpdateJobQueueCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * // import type { BatchClientConfig } from "@aws-sdk/client-batch";
 * const config = {}; // type is BatchClientConfig
 * const client = new BatchClient(config);
 * const input = { // UpdateJobQueueRequest
 *   jobQueue: "STRING_VALUE", // required
 *   state: "ENABLED" || "DISABLED",
 *   schedulingPolicyArn: "STRING_VALUE",
 *   priority: Number("int"),
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
 *   jobStateTimeLimitActions: [ // JobStateTimeLimitActions
 *     { // JobStateTimeLimitAction
 *       reason: "STRING_VALUE", // required
 *       state: "RUNNABLE", // required
 *       maxTimeSeconds: Number("int"), // required
 *       action: "CANCEL" || "TERMINATE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateJobQueueCommand(input);
 * const response = await client.send(command);
 * // { // UpdateJobQueueResponse
 * //   jobQueueName: "STRING_VALUE",
 * //   jobQueueArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateJobQueueCommandInput - {@link UpdateJobQueueCommandInput}
 * @returns {@link UpdateJobQueueCommandOutput}
 * @see {@link UpdateJobQueueCommandInput} for command's `input` shape.
 * @see {@link UpdateJobQueueCommandOutput} for command's `response` shape.
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
 * @example To update a job queue
 * ```javascript
 * // This example disables a job queue so that it can be deleted.
 * const input = {
 *   jobQueue: "GPGPU",
 *   state: "DISABLED"
 * };
 * const command = new UpdateJobQueueCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   jobQueueArn: "arn:aws:batch:us-east-1:012345678910:job-queue/GPGPU",
 *   jobQueueName: "GPGPU"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateJobQueueCommand extends $Command
  .classBuilder<
    UpdateJobQueueCommandInput,
    UpdateJobQueueCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBatchV20160810", "UpdateJobQueue", {})
  .n("BatchClient", "UpdateJobQueueCommand")
  .sc(UpdateJobQueue)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateJobQueueRequest;
      output: UpdateJobQueueResponse;
    };
    sdk: {
      input: UpdateJobQueueCommandInput;
      output: UpdateJobQueueCommandOutput;
    };
  };
}
