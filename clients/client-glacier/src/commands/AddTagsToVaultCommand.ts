// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { AddTagsToVaultInput } from "../models/models_0";
import { de_AddTagsToVaultCommand, se_AddTagsToVaultCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddTagsToVaultCommand}.
 */
export interface AddTagsToVaultCommandInput extends AddTagsToVaultInput {}
/**
 * @public
 *
 * The output of {@link AddTagsToVaultCommand}.
 */
export interface AddTagsToVaultCommandOutput extends __MetadataBearer {}

/**
 * <p>This operation adds the specified tags to a vault. Each tag is composed of a key and
 *          a value. Each vault can have up to 10 tags. If your request would cause the tag limit for
 *          the vault to be exceeded, the operation throws the <code>LimitExceededException</code>
 *          error. If a tag already exists on the vault under a specified key, the existing key value
 *          will be overwritten. For more information about tags, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html">Tagging Amazon S3 Glacier Resources</a>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, AddTagsToVaultCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, AddTagsToVaultCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const input = { // AddTagsToVaultInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new AddTagsToVaultCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddTagsToVaultCommandInput - {@link AddTagsToVaultCommandInput}
 * @returns {@link AddTagsToVaultCommandOutput}
 * @see {@link AddTagsToVaultCommandInput} for command's `input` shape.
 * @see {@link AddTagsToVaultCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Returned if a parameter of the request is incorrectly specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Returned if the request results in a vault or account limit being exceeded.</p>
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
 * @public
 * @example To add tags to a vault
 * ```javascript
 * // The example adds two tags to a my-vault.
 * const input = {
 *   "Tags": {
 *     "examplekey1": "examplevalue1",
 *     "examplekey2": "examplevalue2"
 *   },
 *   "accountId": "-",
 *   "vaultName": "my-vault"
 * };
 * const command = new AddTagsToVaultCommand(input);
 * await client.send(command);
 * // example id: add-tags-to-vault-post-tags-add-1481663457694
 * ```
 *
 */
export class AddTagsToVaultCommand extends $Command
  .classBuilder<
    AddTagsToVaultCommandInput,
    AddTagsToVaultCommandOutput,
    GlacierClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlacierClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Glacier", "AddTagsToVault", {})
  .n("GlacierClient", "AddTagsToVaultCommand")
  .f(void 0, void 0)
  .ser(se_AddTagsToVaultCommand)
  .de(de_AddTagsToVaultCommand)
  .build() {}
