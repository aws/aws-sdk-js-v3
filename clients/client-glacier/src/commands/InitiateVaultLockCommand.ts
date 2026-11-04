// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { InitiateVaultLockInput, InitiateVaultLockOutput } from "../models/models_0";
import { InitiateVaultLock$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link InitiateVaultLockCommand}.
 */
export interface InitiateVaultLockCommandInput extends InitiateVaultLockInput {}
/**
 * @public
 *
 * The output of {@link InitiateVaultLockCommand}.
 */
export interface InitiateVaultLockCommandOutput extends InitiateVaultLockOutput, __MetadataBearer {}

/**
 * This operation initiates the vault locking process by doing the following:
 *
 * - Installing a vault lock policy on the specified vault.
 * - Setting the lock state of vault lock to `InProgress`.
 * - Returning a lock ID, which is used to complete the vault locking process.
 *
 * You can set one vault lock policy for each vault and this policy can be up to 20 KB in size. For more information about vault lock policies, see [Amazon Glacier Access Control with Vault Lock Policies](https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html).
 *
 * You must complete the vault locking process within 24 hours after the vault lock enters the `InProgress` state. After the 24 hour window ends, the lock ID expires, the vault automatically exits the `InProgress` state, and the vault lock policy is removed from the vault. You call CompleteVaultLock to complete the vault locking process by setting the state of the vault lock to `Locked`.
 *
 * After a vault lock is in the `Locked` state, you cannot initiate a new vault lock for the vault.
 *
 * You can abort the vault locking process by calling AbortVaultLock. You can get the state of the vault lock by calling GetVaultLock. For more information about the vault locking process, [Amazon Glacier Vault Lock](https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html).
 *
 * If this operation is called when the vault lock is in the `InProgress` state, the operation returns an `AccessDeniedException` error. When the vault lock is in the `InProgress` state you must call AbortVaultLock before you can initiate a new vault lock policy.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, InitiateVaultLockCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, InitiateVaultLockCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * // import type { GlacierClientConfig } from "@aws-sdk/client-glacier";
 * const config = {}; // type is GlacierClientConfig
 * const client = new GlacierClient(config);
 * const input = { // InitiateVaultLockInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 *   policy: { // VaultLockPolicy
 *     Policy: "STRING_VALUE",
 *   },
 * };
 * const command = new InitiateVaultLockCommand(input);
 * const response = await client.send(command);
 * // { // InitiateVaultLockOutput
 * //   lockId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param InitiateVaultLockCommandInput - {@link InitiateVaultLockCommandInput}
 * @returns {@link InitiateVaultLockCommandOutput}
 * @see {@link InitiateVaultLockCommandInput} for command's `input` shape.
 * @see {@link InitiateVaultLockCommandOutput} for command's `response` shape.
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
 * @example To initiate the vault locking process
 * ```javascript
 * // The example initiates the vault locking process for the vault named my-vault.
 * const input = {
 *   accountId: "-",
 *   policy: {
 *     Policy: `{"Version":"2012-10-17","Statement":[{"Sid":"Define-vault-lock","Effect":"Deny","Principal":{"AWS":"arn:aws:iam::999999999999:root"},"Action":"glacier:DeleteArchive","Resource":"arn:aws:glacier:us-west-2:999999999999:vaults/examplevault","Condition":{"NumericLessThanEquals":{"glacier:ArchiveAgeinDays":"365"}}}]}`
 *   },
 *   vaultName: "my-vault"
 * };
 * const command = new InitiateVaultLockCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   lockId: "AE863rKkWZU53SLW5be4DUcW"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class InitiateVaultLockCommand extends command<InitiateVaultLockCommandInput, InitiateVaultLockCommandOutput>(
  _ep0,
  _mw0,
  "InitiateVaultLock",
  InitiateVaultLock$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InitiateVaultLockInput;
      output: InitiateVaultLockOutput;
    };
    sdk: {
      input: InitiateVaultLockCommandInput;
      output: InitiateVaultLockCommandOutput;
    };
  };
}
