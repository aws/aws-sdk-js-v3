// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { AbortVaultLockInput } from "../models/models_0";
import { AbortVaultLock } from "../schemas/schemas_16_AbortVaultLock";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AbortVaultLockCommand}.
 */
export interface AbortVaultLockCommandInput extends AbortVaultLockInput {}
/**
 * @public
 *
 * The output of {@link AbortVaultLockCommand}.
 */
export interface AbortVaultLockCommandOutput extends __MetadataBearer {}

/**
 * <p>This operation aborts the vault locking process if the vault lock is not in the
 *             <code>Locked</code> state. If the vault lock is in the <code>Locked</code> state when
 *          this operation is requested, the operation returns an <code>AccessDeniedException</code>
 *          error. Aborting the vault locking process removes the vault lock policy from the specified
 *          vault. </p>
 *          <p>A vault lock is put into the <code>InProgress</code> state by calling <a>InitiateVaultLock</a>. A vault lock is put into the <code>Locked</code> state by
 *          calling <a>CompleteVaultLock</a>. You can get the state of a vault lock by
 *          calling <a>GetVaultLock</a>. For more information about the vault locking
 *          process, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon Glacier Vault Lock</a>. For more information about vault lock policies, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html">Amazon
 *             Glacier Access Control with Vault Lock Policies</a>. </p>
 *          <p>This operation is idempotent. You can successfully invoke this operation multiple
 *          times, if the vault lock is in the <code>InProgress</code> state or if there is no policy
 *          associated with the vault.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, AbortVaultLockCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, AbortVaultLockCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * // import type { GlacierClientConfig } from "@aws-sdk/client-glacier";
 * const config = {}; // type is GlacierClientConfig
 * const client = new GlacierClient(config);
 * const input = { // AbortVaultLockInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 * };
 * const command = new AbortVaultLockCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AbortVaultLockCommandInput - {@link AbortVaultLockCommandInput}
 * @returns {@link AbortVaultLockCommandOutput}
 * @see {@link AbortVaultLockCommandInput} for command's `input` shape.
 * @see {@link AbortVaultLockCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Returned if a parameter of the request is incorrectly specified.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Returned if a required header or parameter is missing from the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't
 *          exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returned if the service cannot complete the request.</p>
 *
 * @throws {@link GlacierServiceException}
 * <p>Base exception class for all service exceptions from Glacier service.</p>
 *
 *
 * @example To abort a vault lock
 * ```javascript
 * // The example aborts the vault locking process if the vault lock is not in the Locked state for the vault named examplevault.
 * const input = {
 *   accountId: "-",
 *   vaultName: "examplevault"
 * };
 * const command = new AbortVaultLockCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AbortVaultLockCommand extends $Command
  .classBuilder<
    AbortVaultLockCommandInput,
    AbortVaultLockCommandOutput,
    GlacierClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlacierClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Glacier", "AbortVaultLock", {})
  .n("GlacierClient", "AbortVaultLockCommand")
  .sc(AbortVaultLock)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AbortVaultLockInput;
      output: {};
    };
    sdk: {
      input: AbortVaultLockCommandInput;
      output: AbortVaultLockCommandOutput;
    };
  };
}
