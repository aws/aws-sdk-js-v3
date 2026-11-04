// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutLexiconInput, PutLexiconOutput } from "../models/models_0";
import { PutLexicon$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutLexiconCommand}.
 */
export interface PutLexiconCommandInput extends PutLexiconInput {}
/**
 * @public
 *
 * The output of {@link PutLexiconCommand}.
 */
export interface PutLexiconCommandOutput extends PutLexiconOutput, __MetadataBearer {}

/**
 * Stores a pronunciation lexicon in an Amazon Web Services Region. If a lexicon with the same name already exists in the region, it is overwritten by the new lexicon. Lexicon operations have eventual consistency, therefore, it might take some time before the lexicon is available to the SynthesizeSpeech operation.
 *
 * For more information, see [Managing Lexicons](https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PollyClient, PutLexiconCommand } from "@aws-sdk/client-polly"; // ES Modules import
 * // const { PollyClient, PutLexiconCommand } = require("@aws-sdk/client-polly"); // CommonJS import
 * // import type { PollyClientConfig } from "@aws-sdk/client-polly";
 * const config = {}; // type is PollyClientConfig
 * const client = new PollyClient(config);
 * const input = { // PutLexiconInput
 *   Name: "STRING_VALUE", // required
 *   Content: "STRING_VALUE", // required
 * };
 * const command = new PutLexiconCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutLexiconCommandInput - {@link PutLexiconCommandInput}
 * @returns {@link PutLexiconCommandOutput}
 * @see {@link PutLexiconCommandInput} for command's `input` shape.
 * @see {@link PutLexiconCommandOutput} for command's `response` shape.
 * @see {@link PollyClientResolvedConfig | config} for PollyClient's `config` shape.
 *
 * @throws {@link InvalidLexiconException} (client fault)
 *
 * Amazon Polly can't find the specified lexicon. Verify that the lexicon's name is spelled correctly, and then try again.
 *
 * @throws {@link LexiconSizeExceededException} (client fault)
 *
 * The maximum size of the specified lexicon would be exceeded by this operation.
 *
 * @throws {@link MaxLexemeLengthExceededException} (client fault)
 *
 * The maximum size of the lexeme would be exceeded by this operation.
 *
 * @throws {@link MaxLexiconsNumberExceededException} (client fault)
 *
 * The maximum number of lexicons would be exceeded by this operation.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * An unknown condition has caused a service failure.
 *
 * @throws {@link UnsupportedPlsAlphabetException} (client fault)
 *
 * The alphabet specified by the lexicon is not a supported alphabet. Valid values are `ipa`, `x-sampa`, `x-amazon-pinyin`, `x-amazon-jyutping`, `x-amazon-pron-kana`, and `x-amazon-yomigana`. Replace the unsupported alphabet with one of the valid values and resubmit your request.
 *
 * @throws {@link UnsupportedPlsLanguageException} (client fault)
 *
 * The language specified in the lexicon is unsupported. For a list of supported languages, see [Lexicon Attributes](https://docs.aws.amazon.com/polly/latest/dg/API_LexiconAttributes.html).
 *
 * @throws {@link PollyServiceException}
 *
 * Base exception class for all service exceptions from Polly service.
 *
 * @example To save a lexicon
 * ```javascript
 * // Stores a pronunciation lexicon in an AWS Region.
 * const input = {
 *   Content: "<Lexicon Content>",
 *   Name: "W3C"
 * };
 * const command = new PutLexiconCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class PutLexiconCommand extends command<PutLexiconCommandInput, PutLexiconCommandOutput>(
  _ep0,
  _mw0,
  "PutLexicon",
  PutLexicon$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutLexiconInput;
      output: {};
    };
    sdk: {
      input: PutLexiconCommandInput;
      output: PutLexiconCommandOutput;
    };
  };
}
