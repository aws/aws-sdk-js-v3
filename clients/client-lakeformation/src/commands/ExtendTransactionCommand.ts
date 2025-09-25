// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { ExtendTransactionRequest, ExtendTransactionResponse } from "../models/models_0";
import { ExtendTransaction } from "../schemas/schemas_8_Transaction";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExtendTransactionCommand}.
 */
export interface ExtendTransactionCommandInput extends ExtendTransactionRequest {}
/**
 * @public
 *
 * The output of {@link ExtendTransactionCommand}.
 */
export interface ExtendTransactionCommandOutput extends ExtendTransactionResponse, __MetadataBearer {}

/**
 * <p>Indicates to the service that the specified transaction is still active and should not be treated as idle and aborted.</p>
 *          <p>Write transactions that remain idle for a long period are automatically aborted unless explicitly extended.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, ExtendTransactionCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, ExtendTransactionCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // ExtendTransactionRequest
 *   TransactionId: "STRING_VALUE",
 * };
 * const command = new ExtendTransactionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ExtendTransactionCommandInput - {@link ExtendTransactionCommandInput}
 * @returns {@link ExtendTransactionCommandOutput}
 * @see {@link ExtendTransactionCommandInput} for command's `input` shape.
 * @see {@link ExtendTransactionCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
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
 * @throws {@link TransactionCanceledException} (client fault)
 *  <p>Contains details about an error related to a transaction that was cancelled.</p>
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
export class ExtendTransactionCommand extends $Command
  .classBuilder<
    ExtendTransactionCommandInput,
    ExtendTransactionCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLakeFormation", "ExtendTransaction", {})
  .n("LakeFormationClient", "ExtendTransactionCommand")
  .sc(ExtendTransaction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExtendTransactionRequest;
      output: {};
    };
    sdk: {
      input: ExtendTransactionCommandInput;
      output: ExtendTransactionCommandOutput;
    };
  };
}
