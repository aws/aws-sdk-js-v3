// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteQuotaShareRequest, DeleteQuotaShareResponse } from "../models/models_0";
import { DeleteQuotaShare$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteQuotaShareCommand}.
 */
export interface DeleteQuotaShareCommandInput extends DeleteQuotaShareRequest {}
/**
 * @public
 *
 * The output of {@link DeleteQuotaShareCommand}.
 */
export interface DeleteQuotaShareCommandOutput extends DeleteQuotaShareResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified quota share. You must first disable submissions for the share by
 *       updating the state to <code>DISABLED</code> using the <a>UpdateQuotaShare</a> operation.
 *       All jobs in the share are eventually terminated when you delete a quota share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DeleteQuotaShareCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DeleteQuotaShareCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * // import type { BatchClientConfig } from "@aws-sdk/client-batch";
 * const config = {}; // type is BatchClientConfig
 * const client = new BatchClient(config);
 * const input = { // DeleteQuotaShareRequest
 *   quotaShareArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteQuotaShareCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteQuotaShareCommandInput - {@link DeleteQuotaShareCommandInput}
 * @returns {@link DeleteQuotaShareCommandOutput}
 * @see {@link DeleteQuotaShareCommandInput} for command's `input` shape.
 * @see {@link DeleteQuotaShareCommandOutput} for command's `response` shape.
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
export class DeleteQuotaShareCommand extends $Command
  .classBuilder<
    DeleteQuotaShareCommandInput,
    DeleteQuotaShareCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBatchV20160810", "DeleteQuotaShare", {})
  .n("BatchClient", "DeleteQuotaShareCommand")
  .sc(DeleteQuotaShare$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteQuotaShareRequest;
      output: {};
    };
    sdk: {
      input: DeleteQuotaShareCommandInput;
      output: DeleteQuotaShareCommandOutput;
    };
  };
}
