// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteServiceEnvironmentRequest, DeleteServiceEnvironmentResponse } from "../models/models_0";
import { de_DeleteServiceEnvironmentCommand, se_DeleteServiceEnvironmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteServiceEnvironmentCommand}.
 */
export interface DeleteServiceEnvironmentCommandInput extends DeleteServiceEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteServiceEnvironmentCommand}.
 */
export interface DeleteServiceEnvironmentCommandOutput extends DeleteServiceEnvironmentResponse, __MetadataBearer {}

/**
 * <p>Deletes a Service environment. Before you can delete a service environment, you must first set its state to <code>DISABLED</code> with the <code>UpdateServiceEnvironment</code> API operation and disassociate it from any job queues with the <code>UpdateJobQueue</code> API operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DeleteServiceEnvironmentCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DeleteServiceEnvironmentCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const input = { // DeleteServiceEnvironmentRequest
 *   serviceEnvironment: "STRING_VALUE", // required
 * };
 * const command = new DeleteServiceEnvironmentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteServiceEnvironmentCommandInput - {@link DeleteServiceEnvironmentCommandInput}
 * @returns {@link DeleteServiceEnvironmentCommandOutput}
 * @see {@link DeleteServiceEnvironmentCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceEnvironmentCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteServiceEnvironmentCommand extends $Command
  .classBuilder<
    DeleteServiceEnvironmentCommandInput,
    DeleteServiceEnvironmentCommandOutput,
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
  .s("AWSBatchV20160810", "DeleteServiceEnvironment", {})
  .n("BatchClient", "DeleteServiceEnvironmentCommand")
  .f(void 0, void 0)
  .ser(se_DeleteServiceEnvironmentCommand)
  .de(de_DeleteServiceEnvironmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteServiceEnvironmentRequest;
      output: {};
    };
    sdk: {
      input: DeleteServiceEnvironmentCommandInput;
      output: DeleteServiceEnvironmentCommandOutput;
    };
  };
}
