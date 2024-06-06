// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSchedulingPolicyRequest, DeleteSchedulingPolicyResponse } from "../models/models_0";
import { de_DeleteSchedulingPolicyCommand, se_DeleteSchedulingPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSchedulingPolicyCommand}.
 */
export interface DeleteSchedulingPolicyCommandInput extends DeleteSchedulingPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSchedulingPolicyCommand}.
 */
export interface DeleteSchedulingPolicyCommandOutput extends DeleteSchedulingPolicyResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified scheduling policy.</p>
 *          <p>You can't delete a scheduling policy that's used in any job queues.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DeleteSchedulingPolicyCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DeleteSchedulingPolicyCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const input = { // DeleteSchedulingPolicyRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteSchedulingPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSchedulingPolicyCommandInput - {@link DeleteSchedulingPolicyCommandInput}
 * @returns {@link DeleteSchedulingPolicyCommandOutput}
 * @see {@link DeleteSchedulingPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteSchedulingPolicyCommandOutput} for command's `response` shape.
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
 */
export class DeleteSchedulingPolicyCommand extends $Command
  .classBuilder<
    DeleteSchedulingPolicyCommandInput,
    DeleteSchedulingPolicyCommandOutput,
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
  .s("AWSBatchV20160810", "DeleteSchedulingPolicy", {})
  .n("BatchClient", "DeleteSchedulingPolicyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSchedulingPolicyCommand)
  .de(de_DeleteSchedulingPolicyCommand)
  .build() {}
