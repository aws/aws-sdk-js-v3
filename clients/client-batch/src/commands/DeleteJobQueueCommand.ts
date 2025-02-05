// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteJobQueueRequest, DeleteJobQueueResponse } from "../models/models_0";
import { de_DeleteJobQueueCommand, se_DeleteJobQueueCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteJobQueueCommand}.
 */
export interface DeleteJobQueueCommandInput extends DeleteJobQueueRequest {}
/**
 * @public
 *
 * The output of {@link DeleteJobQueueCommand}.
 */
export interface DeleteJobQueueCommandOutput extends DeleteJobQueueResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified job queue. You must first disable submissions for a queue with the
 *         <a>UpdateJobQueue</a> operation. All jobs in the queue are eventually terminated
 *       when you delete a job queue. The jobs are terminated at a rate of about 16 jobs each
 *       second.</p>
 *          <p>It's not necessary to disassociate compute environments from a queue before submitting a
 *         <code>DeleteJobQueue</code> request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DeleteJobQueueCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DeleteJobQueueCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new BatchClient(config);
 * const input = { // DeleteJobQueueRequest
 *   jobQueue: "STRING_VALUE", // required
 * };
 * const command = new DeleteJobQueueCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteJobQueueCommandInput - {@link DeleteJobQueueCommandInput}
 * @returns {@link DeleteJobQueueCommandOutput}
 * @see {@link DeleteJobQueueCommandInput} for command's `input` shape.
 * @see {@link DeleteJobQueueCommandOutput} for command's `response` shape.
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
 * @public
 * @example To delete a job queue
 * ```javascript
 * // This example deletes the GPGPU job queue.
 * const input = {
 *   "jobQueue": "GPGPU"
 * };
 * const command = new DeleteJobQueueCommand(input);
 * await client.send(command);
 * // example id: to-delete-a-job-queue-1481153508134
 * ```
 *
 */
export class DeleteJobQueueCommand extends $Command
  .classBuilder<
    DeleteJobQueueCommandInput,
    DeleteJobQueueCommandOutput,
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
  .s("AWSBatchV20160810", "DeleteJobQueue", {})
  .n("BatchClient", "DeleteJobQueueCommand")
  .f(void 0, void 0)
  .ser(se_DeleteJobQueueCommand)
  .de(de_DeleteJobQueueCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteJobQueueRequest;
      output: {};
    };
    sdk: {
      input: DeleteJobQueueCommandInput;
      output: DeleteJobQueueCommandOutput;
    };
  };
}
