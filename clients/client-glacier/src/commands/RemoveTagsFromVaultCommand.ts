// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { RemoveTagsFromVaultInput } from "../models/models_0";
import { de_RemoveTagsFromVaultCommand, se_RemoveTagsFromVaultCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveTagsFromVaultCommand}.
 */
export interface RemoveTagsFromVaultCommandInput extends RemoveTagsFromVaultInput {}
/**
 * @public
 *
 * The output of {@link RemoveTagsFromVaultCommand}.
 */
export interface RemoveTagsFromVaultCommandOutput extends __MetadataBearer {}

/**
 * <p>This operation removes one or more tags from the set of tags attached to a vault. For
 *          more information about tags, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html">Tagging Amazon S3 Glacier Resources</a>.
 *          This operation is idempotent. The operation will be successful, even if there are no tags
 *          attached to the vault. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, RemoveTagsFromVaultCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, RemoveTagsFromVaultCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const input = { // RemoveTagsFromVaultInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 *   TagKeys: [ // TagKeyList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new RemoveTagsFromVaultCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveTagsFromVaultCommandInput - {@link RemoveTagsFromVaultCommandInput}
 * @returns {@link RemoveTagsFromVaultCommandOutput}
 * @see {@link RemoveTagsFromVaultCommandInput} for command's `input` shape.
 * @see {@link RemoveTagsFromVaultCommandOutput} for command's `response` shape.
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
 * @example To remove tags from a vault
 * ```javascript
 * // The example removes two tags from the vault named examplevault.
 * const input = {
 *   TagKeys: [
 *     "examplekey1",
 *     "examplekey2"
 *   ],
 *   accountId: "-",
 *   vaultName: "examplevault"
 * };
 * const command = new RemoveTagsFromVaultCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class RemoveTagsFromVaultCommand extends $Command
  .classBuilder<
    RemoveTagsFromVaultCommandInput,
    RemoveTagsFromVaultCommandOutput,
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
  .s("Glacier", "RemoveTagsFromVault", {})
  .n("GlacierClient", "RemoveTagsFromVaultCommand")
  .f(void 0, void 0)
  .ser(se_RemoveTagsFromVaultCommand)
  .de(de_RemoveTagsFromVaultCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveTagsFromVaultInput;
      output: {};
    };
    sdk: {
      input: RemoveTagsFromVaultCommandInput;
      output: RemoveTagsFromVaultCommandOutput;
    };
  };
}
