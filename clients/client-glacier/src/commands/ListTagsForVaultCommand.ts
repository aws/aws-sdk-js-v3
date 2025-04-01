// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { ListTagsForVaultInput, ListTagsForVaultOutput } from "../models/models_0";
import { de_ListTagsForVaultCommand, se_ListTagsForVaultCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTagsForVaultCommand}.
 */
export interface ListTagsForVaultCommandInput extends ListTagsForVaultInput {}
/**
 * @public
 *
 * The output of {@link ListTagsForVaultCommand}.
 */
export interface ListTagsForVaultCommandOutput extends ListTagsForVaultOutput, __MetadataBearer {}

/**
 * <p>This operation lists all the tags attached to a vault. The operation returns an empty
 *          map if there are no tags. For more information about tags, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html">Tagging Amazon S3 Glacier
 *          Resources</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, ListTagsForVaultCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, ListTagsForVaultCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const input = { // ListTagsForVaultInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 * };
 * const command = new ListTagsForVaultCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsForVaultOutput
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ListTagsForVaultCommandInput - {@link ListTagsForVaultCommandInput}
 * @returns {@link ListTagsForVaultCommandOutput}
 * @see {@link ListTagsForVaultCommandInput} for command's `input` shape.
 * @see {@link ListTagsForVaultCommandOutput} for command's `response` shape.
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
 * @example To list the tags for a vault
 * ```javascript
 * // The example lists all the tags attached to the vault examplevault.
 * const input = {
 *   accountId: "-",
 *   vaultName: "examplevault"
 * };
 * const command = new ListTagsForVaultCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Tags: {
 *     date: "july2015",
 *     id: "1234"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListTagsForVaultCommand extends $Command
  .classBuilder<
    ListTagsForVaultCommandInput,
    ListTagsForVaultCommandOutput,
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
  .s("Glacier", "ListTagsForVault", {})
  .n("GlacierClient", "ListTagsForVaultCommand")
  .f(void 0, void 0)
  .ser(se_ListTagsForVaultCommand)
  .de(de_ListTagsForVaultCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTagsForVaultInput;
      output: ListTagsForVaultOutput;
    };
    sdk: {
      input: ListTagsForVaultCommandInput;
      output: ListTagsForVaultCommandOutput;
    };
  };
}
