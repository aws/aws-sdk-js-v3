// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSpendingLimitRequest, DeleteSpendingLimitResponse } from "../models/models_0";
import { DeleteSpendingLimit$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes an existing spending limit. This operation permanently removes the spending limit and cannot be undone. After deletion, the associated device becomes unrestricted for spending.
 *
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
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * The request failed because of an unknown error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The API throttling rate limit is exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input request failed to satisfy constraints expected by Amazon Braket.
 *
 * @throws {@link BraketServiceException}
 *
 * Base exception class for all service exceptions from Braket service.
 *
 * @public
 */
export class DeleteSpendingLimitCommand extends command<DeleteSpendingLimitCommandInput, DeleteSpendingLimitCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSpendingLimit",
  DeleteSpendingLimit$
) {
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
