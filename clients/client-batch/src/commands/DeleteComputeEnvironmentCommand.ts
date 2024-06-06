// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteComputeEnvironmentRequest, DeleteComputeEnvironmentResponse } from "../models/models_0";
import { de_DeleteComputeEnvironmentCommand, se_DeleteComputeEnvironmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteComputeEnvironmentCommand}.
 */
export interface DeleteComputeEnvironmentCommandInput extends DeleteComputeEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteComputeEnvironmentCommand}.
 */
export interface DeleteComputeEnvironmentCommandOutput extends DeleteComputeEnvironmentResponse, __MetadataBearer {}

/**
 * <p>Deletes an Batch compute environment.</p>
 *          <p>Before you can delete a compute environment, you must set its state to
 *         <code>DISABLED</code> with the <a>UpdateComputeEnvironment</a> API operation and
 *       disassociate it from any job queues with the <a>UpdateJobQueue</a> API operation.
 *       Compute environments that use Fargate resources must terminate all active jobs on that
 *       compute environment before deleting the compute environment. If this isn't done, the compute
 *       environment enters an invalid state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DeleteComputeEnvironmentCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DeleteComputeEnvironmentCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const input = { // DeleteComputeEnvironmentRequest
 *   computeEnvironment: "STRING_VALUE", // required
 * };
 * const command = new DeleteComputeEnvironmentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteComputeEnvironmentCommandInput - {@link DeleteComputeEnvironmentCommandInput}
 * @returns {@link DeleteComputeEnvironmentCommandOutput}
 * @see {@link DeleteComputeEnvironmentCommandInput} for command's `input` shape.
 * @see {@link DeleteComputeEnvironmentCommandOutput} for command's `response` shape.
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
 * @example To delete a compute environment
 * ```javascript
 * // This example deletes the P2OnDemand compute environment.
 * const input = {
 *   "computeEnvironment": "P2OnDemand"
 * };
 * const command = new DeleteComputeEnvironmentCommand(input);
 * await client.send(command);
 * // example id: to-delete-a-compute-environment-1481153105644
 * ```
 *
 */
export class DeleteComputeEnvironmentCommand extends $Command
  .classBuilder<
    DeleteComputeEnvironmentCommandInput,
    DeleteComputeEnvironmentCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBatchV20160810", "DeleteComputeEnvironment", {})
  .n("BatchClient", "DeleteComputeEnvironmentCommand")
  .f(void 0, void 0)
  .ser(se_DeleteComputeEnvironmentCommand)
  .de(de_DeleteComputeEnvironmentCommand)
  .build() {}
