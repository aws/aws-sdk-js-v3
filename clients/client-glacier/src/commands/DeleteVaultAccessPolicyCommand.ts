// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import type { DeleteVaultAccessPolicyInput } from "../models/models_0";
import { DeleteVaultAccessPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVaultAccessPolicyCommand}.
 */
export interface DeleteVaultAccessPolicyCommandInput extends DeleteVaultAccessPolicyInput {}
/**
 * @public
 *
 * The output of {@link DeleteVaultAccessPolicyCommand}.
 */
export interface DeleteVaultAccessPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>This operation deletes the access policy associated with the specified vault. The
 *          operation is eventually consistent; that is, it might take some time for Amazon Glacier to
 *          completely remove the access policy, and you might still see the effect of the policy for a
 *          short time after you send the delete request.</p>
 *          <p>This operation is idempotent. You can invoke delete multiple times, even if there is
 *          no policy associated with the vault. For more information about vault access policies, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html">Amazon Glacier Access Control with Vault Access Policies</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, DeleteVaultAccessPolicyCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, DeleteVaultAccessPolicyCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * // import type { GlacierClientConfig } from "@aws-sdk/client-glacier";
 * const config = {}; // type is GlacierClientConfig
 * const client = new GlacierClient(config);
 * const input = { // DeleteVaultAccessPolicyInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 * };
 * const command = new DeleteVaultAccessPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVaultAccessPolicyCommandInput - {@link DeleteVaultAccessPolicyCommandInput}
 * @returns {@link DeleteVaultAccessPolicyCommandOutput}
 * @see {@link DeleteVaultAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteVaultAccessPolicyCommandOutput} for command's `response` shape.
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
 * @example To delete the vault access policy
 * ```javascript
 * // The example deletes the access policy associated with the vault named examplevault.
 * const input = {
 *   accountId: "-",
 *   vaultName: "examplevault"
 * };
 * const command = new DeleteVaultAccessPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteVaultAccessPolicyCommand extends $Command
  .classBuilder<
    DeleteVaultAccessPolicyCommandInput,
    DeleteVaultAccessPolicyCommandOutput,
    GlacierClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlacierClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Glacier", "DeleteVaultAccessPolicy", {})
  .n("GlacierClient", "DeleteVaultAccessPolicyCommand")
  .sc(DeleteVaultAccessPolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVaultAccessPolicyInput;
      output: {};
    };
    sdk: {
      input: DeleteVaultAccessPolicyCommandInput;
      output: DeleteVaultAccessPolicyCommandOutput;
    };
  };
}
