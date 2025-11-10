// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { CancelTransactionRequest, CancelTransactionResponse } from "../models/models_0";
import { CancelTransaction } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelTransactionCommand}.
 */
export interface CancelTransactionCommandInput extends CancelTransactionRequest {}
/**
 * @public
 *
 * The output of {@link CancelTransactionCommand}.
 */
export interface CancelTransactionCommandOutput extends CancelTransactionResponse, __MetadataBearer {}

/**
 * <p>Attempts to cancel the specified transaction. Returns an exception if the transaction was previously committed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, CancelTransactionCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, CancelTransactionCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // CancelTransactionRequest
 *   TransactionId: "STRING_VALUE", // required
 * };
 * const command = new CancelTransactionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelTransactionCommandInput - {@link CancelTransactionCommandInput}
 * @returns {@link CancelTransactionCommandOutput}
 * @see {@link CancelTransactionCommandInput} for command's `input` shape.
 * @see {@link CancelTransactionCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link TransactionCommitInProgressException} (client fault)
 *  <p>Contains details about an error related to a transaction commit that was in progress.</p>
 *
 * @throws {@link TransactionCommittedException} (client fault)
 *  <p>Contains details about an error where the specified transaction has already been committed and cannot be used for <code>UpdateTableObjects</code>.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 *
 * @public
 */
export class CancelTransactionCommand extends $Command
  .classBuilder<
    CancelTransactionCommandInput,
    CancelTransactionCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLakeFormation", "CancelTransaction", {})
  .n("LakeFormationClient", "CancelTransactionCommand")
  .sc(CancelTransaction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelTransactionRequest;
      output: {};
    };
    sdk: {
      input: CancelTransactionCommandInput;
      output: CancelTransactionCommandOutput;
    };
  };
}
