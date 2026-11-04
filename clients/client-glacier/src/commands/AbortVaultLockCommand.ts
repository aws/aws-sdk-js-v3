// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AbortVaultLockInput } from "../models/models_0";
import { AbortVaultLock$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * This operation aborts the vault locking process if the vault lock is not in the `Locked` state. If the vault lock is in the `Locked` state when this operation is requested, the operation returns an `AccessDeniedException` error. Aborting the vault locking process removes the vault lock policy from the specified vault.
 *
 * A vault lock is put into the `InProgress` state by calling InitiateVaultLock. A vault lock is put into the `Locked` state by calling CompleteVaultLock. You can get the state of a vault lock by calling GetVaultLock. For more information about the vault locking process, see [Amazon Glacier Vault Lock](https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html). For more information about vault lock policies, see [Amazon Glacier Access Control with Vault Lock Policies](https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html).
 *
 * This operation is idempotent. You can successfully invoke this operation multiple times, if the vault lock is in the `InProgress` state or if there is no policy associated with the vault.
 *
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
 *
 * Returned if a parameter of the request is incorrectly specified.
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *
 * Returned if a required header or parameter is missing from the request.
 *
 * @throws {@link NoLongerSupportedException} (client fault)
 *
 * Returned if the request was made by a customer with no Amazon Glacier storage. The request is denied as the API is no longer supported for new customers. Please use Amazon S3 Glacier storage classes instead.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * Returned if the service cannot complete the request.
 *
 * @throws {@link GlacierServiceException}
 *
 * Base exception class for all service exceptions from Glacier service.
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
export class AbortVaultLockCommand extends command<AbortVaultLockCommandInput, AbortVaultLockCommandOutput>(
  _ep0,
  _mw0,
  "AbortVaultLock",
  AbortVaultLock$
) {
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
