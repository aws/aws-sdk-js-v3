// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCustomVocabularyItemsRequest, ListCustomVocabularyItemsResponse } from "../models/models_1";
import { ListCustomVocabularyItems$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCustomVocabularyItemsCommand}.
 */
export interface ListCustomVocabularyItemsCommandInput extends ListCustomVocabularyItemsRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomVocabularyItemsCommand}.
 */
export interface ListCustomVocabularyItemsCommandOutput extends ListCustomVocabularyItemsResponse, __MetadataBearer {}

/**
 * Paginated list of custom vocabulary items for a given bot locale's custom vocabulary.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListCustomVocabularyItemsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListCustomVocabularyItemsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // ListCustomVocabularyItemsRequest
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListCustomVocabularyItemsCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomVocabularyItemsResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   customVocabularyItems: [ // CustomVocabularyItems
 * //     { // CustomVocabularyItem
 * //       itemId: "STRING_VALUE", // required
 * //       phrase: "STRING_VALUE", // required
 * //       weight: Number("int"),
 * //       displayAs: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCustomVocabularyItemsCommandInput - {@link ListCustomVocabularyItemsCommandInput}
 * @returns {@link ListCustomVocabularyItemsCommandOutput}
 * @see {@link ListCustomVocabularyItemsCommandInput} for command's `input` shape.
 * @see {@link ListCustomVocabularyItemsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The service encountered an unexpected condition. Try your request again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * You asked to describe a resource that doesn't exist. Check the resource that you are requesting and try again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You have reached a quota for your bot.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Your request rate is too high. Reduce the frequency of requests.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One of the input parameters in your request isn't valid. Check the parameters and try your request again.
 *
 * @throws {@link LexModelsV2ServiceException}
 *
 * Base exception class for all service exceptions from LexModelsV2 service.
 *
 * @public
 */
export class ListCustomVocabularyItemsCommand extends command<ListCustomVocabularyItemsCommandInput, ListCustomVocabularyItemsCommandOutput>(
  _ep0,
  _mw0,
  "ListCustomVocabularyItems",
  ListCustomVocabularyItems$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCustomVocabularyItemsRequest;
      output: ListCustomVocabularyItemsResponse;
    };
    sdk: {
      input: ListCustomVocabularyItemsCommandInput;
      output: ListCustomVocabularyItemsCommandOutput;
    };
  };
}
