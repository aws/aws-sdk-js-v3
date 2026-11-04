// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  BatchDeleteCustomVocabularyItemRequest,
  BatchDeleteCustomVocabularyItemResponse,
} from "../models/models_0";
import { BatchDeleteCustomVocabularyItem$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchDeleteCustomVocabularyItemCommand}.
 */
export interface BatchDeleteCustomVocabularyItemCommandInput extends BatchDeleteCustomVocabularyItemRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteCustomVocabularyItemCommand}.
 */
export interface BatchDeleteCustomVocabularyItemCommandOutput extends BatchDeleteCustomVocabularyItemResponse, __MetadataBearer {}

/**
 * Delete a batch of custom vocabulary items for a given bot locale's custom vocabulary.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, BatchDeleteCustomVocabularyItemCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, BatchDeleteCustomVocabularyItemCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // BatchDeleteCustomVocabularyItemRequest
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   customVocabularyItemList: [ // DeleteCustomVocabularyItemsList // required
 *     { // CustomVocabularyEntryId
 *       itemId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchDeleteCustomVocabularyItemCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteCustomVocabularyItemResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   errors: [ // FailedCustomVocabularyItems
 * //     { // FailedCustomVocabularyItem
 * //       itemId: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //       errorCode: "DUPLICATE_INPUT" || "RESOURCE_DOES_NOT_EXIST" || "RESOURCE_ALREADY_EXISTS" || "INTERNAL_SERVER_FAILURE",
 * //     },
 * //   ],
 * //   resources: [ // CustomVocabularyItems
 * //     { // CustomVocabularyItem
 * //       itemId: "STRING_VALUE", // required
 * //       phrase: "STRING_VALUE", // required
 * //       weight: Number("int"),
 * //       displayAs: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteCustomVocabularyItemCommandInput - {@link BatchDeleteCustomVocabularyItemCommandInput}
 * @returns {@link BatchDeleteCustomVocabularyItemCommandOutput}
 * @see {@link BatchDeleteCustomVocabularyItemCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteCustomVocabularyItemCommandOutput} for command's `response` shape.
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
export class BatchDeleteCustomVocabularyItemCommand extends command<BatchDeleteCustomVocabularyItemCommandInput, BatchDeleteCustomVocabularyItemCommandOutput>(
  _ep0,
  _mw0,
  "BatchDeleteCustomVocabularyItem",
  BatchDeleteCustomVocabularyItem$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteCustomVocabularyItemRequest;
      output: BatchDeleteCustomVocabularyItemResponse;
    };
    sdk: {
      input: BatchDeleteCustomVocabularyItemCommandInput;
      output: BatchDeleteCustomVocabularyItemCommandOutput;
    };
  };
}
