// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetVaultLockInput, GetVaultLockOutput } from "../models/models_0";
import { GetVaultLock$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetVaultLockCommand}.
 */
export interface GetVaultLockCommandInput extends GetVaultLockInput {}
/**
 * @public
 *
 * The output of {@link GetVaultLockCommand}.
 */
export interface GetVaultLockCommandOutput extends GetVaultLockOutput, __MetadataBearer {}

/**
 * This operation retrieves the following attributes from the `lock-policy` subresource set on the specified vault:
 *
 * - The vault lock policy set on the vault.
 * - The state of the vault lock, which is either `InProgess` or `Locked`.
 * - When the lock ID expires. The lock ID is used to complete the vault locking process.
 * - When the vault lock was initiated and put into the `InProgress` state.
 *
 * A vault lock is put into the `InProgress` state by calling InitiateVaultLock. A vault lock is put into the `Locked` state by calling CompleteVaultLock. You can abort the vault locking process by calling AbortVaultLock. For more information about the vault locking process, [Amazon Glacier Vault Lock](https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html).
 *
 * If there is no vault lock policy set on the vault, the operation returns a `404 Not found` error. For more information about vault lock policies, [Amazon Glacier Access Control with Vault Lock Policies](https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, GetVaultLockCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, GetVaultLockCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * // import type { GlacierClientConfig } from "@aws-sdk/client-glacier";
 * const config = {}; // type is GlacierClientConfig
 * const client = new GlacierClient(config);
 * const input = { // GetVaultLockInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 * };
 * const command = new GetVaultLockCommand(input);
 * const response = await client.send(command);
 * // { // GetVaultLockOutput
 * //   Policy: "STRING_VALUE",
 * //   State: "STRING_VALUE",
 * //   ExpirationDate: "STRING_VALUE",
 * //   CreationDate: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetVaultLockCommandInput - {@link GetVaultLockCommandInput}
 * @returns {@link GetVaultLockCommandOutput}
 * @see {@link GetVaultLockCommandInput} for command's `input` shape.
 * @see {@link GetVaultLockCommandOutput} for command's `response` shape.
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
 * @example To retrieve vault lock-policy related attributes that are set on a vault
 * ```javascript
 * // The example retrieves the attributes from the lock-policy subresource set on the vault named examplevault.
 * const input = {
 *   accountId: "-",
 *   vaultName: "examplevault"
 * };
 * const command = new GetVaultLockCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CreationDate: "exampledate",
 *   ExpirationDate: "exampledate",
 *   Policy: `{"Version":"2012-10-17","Statement":[{"Sid":"Define-vault-lock","Effect":"Deny","Principal":{"AWS":"arn:aws:iam::999999999999:root"},"Action":"glacier:DeleteArchive","Resource":"arn:aws:glacier:us-west-2:999999999999:vaults/examplevault","Condition":{"NumericLessThanEquals":{"glacier:ArchiveAgeinDays":"365"}}}]}`,
 *   State: "InProgress"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetVaultLockCommand extends command<GetVaultLockCommandInput, GetVaultLockCommandOutput>(
  _ep0,
  _mw0,
  "GetVaultLock",
  GetVaultLock$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVaultLockInput;
      output: GetVaultLockOutput;
    };
    sdk: {
      input: GetVaultLockCommandInput;
      output: GetVaultLockCommandOutput;
    };
  };
}
