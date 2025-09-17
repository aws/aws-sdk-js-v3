// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { CompleteVaultLockInput } from "../models/models_0";
import { de_CompleteVaultLockCommand, se_CompleteVaultLockCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CompleteVaultLockCommand}.
 */
export interface CompleteVaultLockCommandInput extends CompleteVaultLockInput {}
/**
 * @public
 *
 * The output of {@link CompleteVaultLockCommand}.
 */
export interface CompleteVaultLockCommandOutput extends __MetadataBearer {}

/**
 * <p>This operation completes the vault locking process by transitioning the vault lock
 *          from the <code>InProgress</code> state to the <code>Locked</code> state, which causes the
 *          vault lock policy to become unchangeable. A vault lock is put into the
 *             <code>InProgress</code> state by calling <a>InitiateVaultLock</a>. You can
 *          obtain the state of the vault lock by calling <a>GetVaultLock</a>. For more
 *          information about the vault locking process, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon Glacier Vault Lock</a>. </p>
 *          <p>This operation is idempotent. This request is always successful if the vault lock is
 *          in the <code>Locked</code> state and the provided lock ID matches the lock ID originally
 *          used to lock the vault.</p>
 *          <p>If an invalid lock ID is passed in the request when the vault lock is in the
 *             <code>Locked</code> state, the operation returns an <code>AccessDeniedException</code>
 *          error. If an invalid lock ID is passed in the request when the vault lock is in the
 *             <code>InProgress</code> state, the operation throws an <code>InvalidParameter</code>
 *          error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, CompleteVaultLockCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, CompleteVaultLockCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * // import type { GlacierClientConfig } from "@aws-sdk/client-glacier";
 * const config = {}; // type is GlacierClientConfig
 * const client = new GlacierClient(config);
 * const input = { // CompleteVaultLockInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 *   lockId: "STRING_VALUE", // required
 * };
 * const command = new CompleteVaultLockCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CompleteVaultLockCommandInput - {@link CompleteVaultLockCommandInput}
 * @returns {@link CompleteVaultLockCommandOutput}
 * @see {@link CompleteVaultLockCommandInput} for command's `input` shape.
 * @see {@link CompleteVaultLockCommandOutput} for command's `response` shape.
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
 * @example To complete a vault lock
 * ```javascript
 * // The example completes the vault locking process by transitioning the vault lock from the InProgress state to the Locked state.
 * const input = {
 *   accountId: "-",
 *   lockId: "AE863rKkWZU53SLW5be4DUcW",
 *   vaultName: "example-vault"
 * };
 * const command = new CompleteVaultLockCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CompleteVaultLockCommand extends $Command
  .classBuilder<
    CompleteVaultLockCommandInput,
    CompleteVaultLockCommandOutput,
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
  .s("Glacier", "CompleteVaultLock", {})
  .n("GlacierClient", "CompleteVaultLockCommand")
  .f(void 0, void 0)
  .ser(se_CompleteVaultLockCommand)
  .de(de_CompleteVaultLockCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CompleteVaultLockInput;
      output: {};
    };
    sdk: {
      input: CompleteVaultLockCommandInput;
      output: CompleteVaultLockCommandOutput;
    };
  };
}
