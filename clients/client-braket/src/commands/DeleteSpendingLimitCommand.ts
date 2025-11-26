// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BraketClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BraketClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteSpendingLimitRequest, DeleteSpendingLimitResponse } from "../models/models_0";
import { DeleteSpendingLimit } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSpendingLimitCommand}.
 */
export interface DeleteSpendingLimitCommandInput extends DeleteSpendingLimitRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSpendingLimitCommand}.
 */
export interface DeleteSpendingLimitCommandOutput extends DeleteSpendingLimitResponse, __MetadataBearer {}

/**
 * <p>Deletes an existing spending limit. This operation permanently removes the spending limit and cannot be undone. After deletion, the associated device becomes unrestricted for spending.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BraketClient, DeleteSpendingLimitCommand } from "@aws-sdk/client-braket"; // ES Modules import
 * // const { BraketClient, DeleteSpendingLimitCommand } = require("@aws-sdk/client-braket"); // CommonJS import
 * // import type { BraketClientConfig } from "@aws-sdk/client-braket";
 * const config = {}; // type is BraketClientConfig
 * const client = new BraketClient(config);
 * const input = { // DeleteSpendingLimitRequest
 *   spendingLimitArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteSpendingLimitCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSpendingLimitCommandInput - {@link DeleteSpendingLimitCommandInput}
 * @returns {@link DeleteSpendingLimitCommandOutput}
 * @see {@link DeleteSpendingLimitCommandInput} for command's `input` shape.
 * @see {@link DeleteSpendingLimitCommandOutput} for command's `response` shape.
 * @see {@link BraketClientResolvedConfig | config} for BraketClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The request failed because of an unknown error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The API throttling rate limit is exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input request failed to satisfy constraints expected by Amazon Braket.</p>
 *
 * @throws {@link BraketServiceException}
 * <p>Base exception class for all service exceptions from Braket service.</p>
 *
 *
 * @public
 */
export class DeleteSpendingLimitCommand extends $Command
  .classBuilder<
    DeleteSpendingLimitCommandInput,
    DeleteSpendingLimitCommandOutput,
    BraketClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BraketClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Braket", "DeleteSpendingLimit", {})
  .n("BraketClient", "DeleteSpendingLimitCommand")
  .sc(DeleteSpendingLimit)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSpendingLimitRequest;
      output: {};
    };
    sdk: {
      input: DeleteSpendingLimitCommandInput;
      output: DeleteSpendingLimitCommandOutput;
    };
  };
}
