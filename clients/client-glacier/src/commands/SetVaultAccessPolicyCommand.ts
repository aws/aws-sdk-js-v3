// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import type { SetVaultAccessPolicyInput } from "../models/models_0";
import { SetVaultAccessPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetVaultAccessPolicyCommand}.
 */
export interface SetVaultAccessPolicyCommandInput extends SetVaultAccessPolicyInput {}
/**
 * @public
 *
 * The output of {@link SetVaultAccessPolicyCommand}.
 */
export interface SetVaultAccessPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>This operation configures an access policy for a vault and will overwrite an existing
 *          policy. To configure a vault access policy, send a PUT request to the
 *             <code>access-policy</code> subresource of the vault. An access policy is specific to a
 *          vault and is also called a vault subresource. You can set one access policy per vault and
 *          the policy can be up to 20 KB in size. For more information about vault access policies,
 *          see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html">Amazon Glacier Access Control with Vault Access Policies</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, SetVaultAccessPolicyCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, SetVaultAccessPolicyCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * // import type { GlacierClientConfig } from "@aws-sdk/client-glacier";
 * const config = {}; // type is GlacierClientConfig
 * const client = new GlacierClient(config);
 * const input = { // SetVaultAccessPolicyInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 *   policy: { // VaultAccessPolicy
 *     Policy: "STRING_VALUE",
 *   },
 * };
 * const command = new SetVaultAccessPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetVaultAccessPolicyCommandInput - {@link SetVaultAccessPolicyCommandInput}
 * @returns {@link SetVaultAccessPolicyCommandOutput}
 * @see {@link SetVaultAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link SetVaultAccessPolicyCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Returned if a parameter of the request is incorrectly specified.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Returned if a required header or parameter is missing from the request.</p>
 *
 * @throws {@link NoLongerSupportedException} (client fault)
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
 * @example To set the access-policy on a vault
 * ```javascript
 * // The example configures an access policy for the vault named examplevault.
 * const input = {
 *   accountId: "-",
 *   policy: {
 *     Policy: `{"Version":"2012-10-17","Statement":[{"Sid":"Define-owner-access-rights","Effect":"Allow","Principal":{"AWS":"arn:aws:iam::999999999999:root"},"Action":"glacier:DeleteArchive","Resource":"arn:aws:glacier:us-west-2:999999999999:vaults/examplevault"}]}`
 *   },
 *   vaultName: "examplevault"
 * };
 * const command = new SetVaultAccessPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class SetVaultAccessPolicyCommand extends $Command
  .classBuilder<
    SetVaultAccessPolicyCommandInput,
    SetVaultAccessPolicyCommandOutput,
    GlacierClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlacierClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Glacier", "SetVaultAccessPolicy", {})
  .n("GlacierClient", "SetVaultAccessPolicyCommand")
  .sc(SetVaultAccessPolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetVaultAccessPolicyInput;
      output: {};
    };
    sdk: {
      input: SetVaultAccessPolicyCommandInput;
      output: SetVaultAccessPolicyCommandOutput;
    };
  };
}
