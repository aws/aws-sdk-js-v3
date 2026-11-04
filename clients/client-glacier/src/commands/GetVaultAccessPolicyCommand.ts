// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetVaultAccessPolicyInput, GetVaultAccessPolicyOutput } from "../models/models_0";
import { GetVaultAccessPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetVaultAccessPolicyCommand}.
 */
export interface GetVaultAccessPolicyCommandInput extends GetVaultAccessPolicyInput {}
/**
 * @public
 *
 * The output of {@link GetVaultAccessPolicyCommand}.
 */
export interface GetVaultAccessPolicyCommandOutput extends GetVaultAccessPolicyOutput, __MetadataBearer {}

/**
 * This operation retrieves the `access-policy` subresource set on the vault; for more information on setting this subresource, see [Set Vault Access Policy (PUT access-policy)](https://docs.aws.amazon.com/amazonglacier/latest/dev/api-SetVaultAccessPolicy.html). If there is no access policy set on the vault, the operation returns a `404 Not found` error. For more information about vault access policies, see [Amazon Glacier Access Control with Vault Access Policies](https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, GetVaultAccessPolicyCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, GetVaultAccessPolicyCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * // import type { GlacierClientConfig } from "@aws-sdk/client-glacier";
 * const config = {}; // type is GlacierClientConfig
 * const client = new GlacierClient(config);
 * const input = { // GetVaultAccessPolicyInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 * };
 * const command = new GetVaultAccessPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetVaultAccessPolicyOutput
 * //   policy: { // VaultAccessPolicy
 * //     Policy: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetVaultAccessPolicyCommandInput - {@link GetVaultAccessPolicyCommandInput}
 * @returns {@link GetVaultAccessPolicyCommandOutput}
 * @see {@link GetVaultAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link GetVaultAccessPolicyCommandOutput} for command's `response` shape.
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
 * @example To  get the access-policy set on the vault
 * ```javascript
 * // The example retrieves the access-policy set on the vault named example-vault.
 * const input = {
 *   accountId: "-",
 *   vaultName: "example-vault"
 * };
 * const command = new GetVaultAccessPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   policy: {
 *     Policy: `{"Version":"2012-10-17","Statement":[{"Sid":"Define-owner-access-rights","Effect":"Allow","Principal":{"AWS":"arn:aws:iam::999999999999:root"},"Action":"glacier:DeleteArchive","Resource":"arn:aws:glacier:us-west-2:999999999999:vaults/examplevault"}]}`
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetVaultAccessPolicyCommand extends command<GetVaultAccessPolicyCommandInput, GetVaultAccessPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetVaultAccessPolicy",
  GetVaultAccessPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVaultAccessPolicyInput;
      output: GetVaultAccessPolicyOutput;
    };
    sdk: {
      input: GetVaultAccessPolicyCommandInput;
      output: GetVaultAccessPolicyCommandOutput;
    };
  };
}
