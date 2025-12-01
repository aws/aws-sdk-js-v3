// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteLexiconInput, DeleteLexiconOutput } from "../models/models_0";
import type { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient";
import { DeleteLexicon } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLexiconCommand}.
 */
export interface DeleteLexiconCommandInput extends DeleteLexiconInput {}
/**
 * @public
 *
 * The output of {@link DeleteLexiconCommand}.
 */
export interface DeleteLexiconCommandOutput extends DeleteLexiconOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified pronunciation lexicon stored in an Amazon Web Services Region. A lexicon which has been deleted is not available for
 *       speech synthesis, nor is it possible to retrieve it using either the
 *         <code>GetLexicon</code> or <code>ListLexicon</code> APIs.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PollyClient, DeleteLexiconCommand } from "@aws-sdk/client-polly"; // ES Modules import
 * // const { PollyClient, DeleteLexiconCommand } = require("@aws-sdk/client-polly"); // CommonJS import
 * // import type { PollyClientConfig } from "@aws-sdk/client-polly";
 * const config = {}; // type is PollyClientConfig
 * const client = new PollyClient(config);
 * const input = { // DeleteLexiconInput
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteLexiconCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLexiconCommandInput - {@link DeleteLexiconCommandInput}
 * @returns {@link DeleteLexiconCommandOutput}
 * @see {@link DeleteLexiconCommandInput} for command's `input` shape.
 * @see {@link DeleteLexiconCommandOutput} for command's `response` shape.
 * @see {@link PollyClientResolvedConfig | config} for PollyClient's `config` shape.
 *
 * @throws {@link LexiconNotFoundException} (client fault)
 *  <p>Amazon Polly can't find the specified lexicon. This could be caused by a
 *       lexicon that is missing, its name is misspelled or specifying a lexicon
 *       that is in a different region.</p>
 *          <p>Verify that the lexicon exists, is in the region (see <a>ListLexicons</a>) and that you spelled its name is spelled
 *       correctly. Then try again.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>An unknown condition has caused a service failure.</p>
 *
 * @throws {@link PollyServiceException}
 * <p>Base exception class for all service exceptions from Polly service.</p>
 *
 *
 * @example To delete a lexicon
 * ```javascript
 * // Deletes a specified pronunciation lexicon stored in an AWS Region.
 * const input = {
 *   Name: "example"
 * };
 * const command = new DeleteLexiconCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteLexiconCommand extends $Command
  .classBuilder<
    DeleteLexiconCommandInput,
    DeleteLexiconCommandOutput,
    PollyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PollyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Parrot_v1", "DeleteLexicon", {})
  .n("PollyClient", "DeleteLexiconCommand")
  .sc(DeleteLexicon)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLexiconInput;
      output: {};
    };
    sdk: {
      input: DeleteLexiconCommandInput;
      output: DeleteLexiconCommandOutput;
    };
  };
}
