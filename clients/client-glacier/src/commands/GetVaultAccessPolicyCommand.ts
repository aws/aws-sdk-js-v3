// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { GetVaultAccessPolicyInput, GetVaultAccessPolicyOutput } from "../models/models_0";
import { de_GetVaultAccessPolicyCommand, se_GetVaultAccessPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>This operation retrieves the <code>access-policy</code> subresource set on the vault;
 *          for more information on setting this subresource, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-SetVaultAccessPolicy.html">Set Vault Access Policy
 *             (PUT access-policy)</a>. If there is no access policy set on the vault, the
 *          operation returns a <code>404 Not found</code> error. For more information about vault
 *          access policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html">Amazon Glacier Access Control
 *             with Vault Access Policies</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, GetVaultAccessPolicyCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, GetVaultAccessPolicyCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
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
export class GetVaultAccessPolicyCommand extends $Command
  .classBuilder<
    GetVaultAccessPolicyCommandInput,
    GetVaultAccessPolicyCommandOutput,
    GlacierClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlacierClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Glacier", "GetVaultAccessPolicy", {})
  .n("GlacierClient", "GetVaultAccessPolicyCommand")
  .f(void 0, void 0)
  .ser(se_GetVaultAccessPolicyCommand)
  .de(de_GetVaultAccessPolicyCommand)
  .build() {
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
