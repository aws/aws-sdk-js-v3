// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartTransactionRequest, StartTransactionResponse } from "../models/models_0";
import { StartTransaction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartTransactionCommand}.
 */
export interface StartTransactionCommandInput extends StartTransactionRequest {}
/**
 * @public
 *
 * The output of {@link StartTransactionCommand}.
 */
export interface StartTransactionCommandOutput extends StartTransactionResponse, __MetadataBearer {}

/**
 * <p>Starts a new transaction and returns its transaction ID. Transaction IDs are opaque objects that you can use to identify a transaction.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, StartTransactionCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, StartTransactionCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // StartTransactionRequest
 *   TransactionType: "READ_AND_WRITE" || "READ_ONLY",
 * };
 * const command = new StartTransactionCommand(input);
 * const response = await client.send(command);
 * // { // StartTransactionResponse
 * //   TransactionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartTransactionCommandInput - {@link StartTransactionCommandInput}
 * @returns {@link StartTransactionCommandOutput}
 * @see {@link StartTransactionCommandInput} for command's `input` shape.
 * @see {@link StartTransactionCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 *
 * @public
 */
export class StartTransactionCommand extends command<StartTransactionCommandInput, StartTransactionCommandOutput>(
  _ep0,
  _mw0,
  "StartTransaction",
  StartTransaction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartTransactionRequest;
      output: StartTransactionResponse;
    };
    sdk: {
      input: StartTransactionCommandInput;
      output: StartTransactionCommandOutput;
    };
  };
}
