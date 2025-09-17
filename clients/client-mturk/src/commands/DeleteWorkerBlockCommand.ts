// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteWorkerBlockRequest, DeleteWorkerBlockResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_DeleteWorkerBlockCommand, se_DeleteWorkerBlockCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWorkerBlockCommand}.
 */
export interface DeleteWorkerBlockCommandInput extends DeleteWorkerBlockRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkerBlockCommand}.
 */
export interface DeleteWorkerBlockCommandOutput extends DeleteWorkerBlockResponse, __MetadataBearer {}

/**
 * <p>The <code>DeleteWorkerBlock</code> operation allows you to reinstate a blocked Worker to work on your HITs. This operation reverses the effects of the CreateWorkerBlock operation. You need the Worker ID to use this operation. If the Worker ID is missing or invalid, this operation fails and returns the message “WorkerId is invalid.” If the specified Worker is not blocked, this operation returns successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, DeleteWorkerBlockCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, DeleteWorkerBlockCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * // import type { MTurkClientConfig } from "@aws-sdk/client-mturk";
 * const config = {}; // type is MTurkClientConfig
 * const client = new MTurkClient(config);
 * const input = { // DeleteWorkerBlockRequest
 *   WorkerId: "STRING_VALUE", // required
 *   Reason: "STRING_VALUE",
 * };
 * const command = new DeleteWorkerBlockCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWorkerBlockCommandInput - {@link DeleteWorkerBlockCommandInput}
 * @returns {@link DeleteWorkerBlockCommandOutput}
 * @see {@link DeleteWorkerBlockCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkerBlockCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 * @throws {@link RequestError} (client fault)
 *  <p>Your request is invalid.</p>
 *
 * @throws {@link ServiceFault} (server fault)
 *  <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 *
 * @throws {@link MTurkServiceException}
 * <p>Base exception class for all service exceptions from MTurk service.</p>
 *
 *
 * @public
 */
export class DeleteWorkerBlockCommand extends $Command
  .classBuilder<
    DeleteWorkerBlockCommandInput,
    DeleteWorkerBlockCommandOutput,
    MTurkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MTurkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MTurkRequesterServiceV20170117", "DeleteWorkerBlock", {})
  .n("MTurkClient", "DeleteWorkerBlockCommand")
  .f(void 0, void 0)
  .ser(se_DeleteWorkerBlockCommand)
  .de(de_DeleteWorkerBlockCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWorkerBlockRequest;
      output: {};
    };
    sdk: {
      input: DeleteWorkerBlockCommandInput;
      output: DeleteWorkerBlockCommandOutput;
    };
  };
}
