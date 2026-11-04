// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchAssociatedTranscriptsRequest, SearchAssociatedTranscriptsResponse } from "../models/models_1";
import { SearchAssociatedTranscripts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchAssociatedTranscriptsCommand}.
 */
export interface SearchAssociatedTranscriptsCommandInput extends SearchAssociatedTranscriptsRequest {}
/**
 * @public
 *
 * The output of {@link SearchAssociatedTranscriptsCommand}.
 */
export interface SearchAssociatedTranscriptsCommandOutput extends SearchAssociatedTranscriptsResponse, __MetadataBearer {}

/**
 * Search for associated transcripts that meet the specified criteria.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, SearchAssociatedTranscriptsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, SearchAssociatedTranscriptsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // SearchAssociatedTranscriptsRequest
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   botRecommendationId: "STRING_VALUE", // required
 *   searchOrder: "Ascending" || "Descending",
 *   filters: [ // AssociatedTranscriptFilters // required
 *     { // AssociatedTranscriptFilter
 *       name: "IntentId" || "SlotTypeId", // required
 *       values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextIndex: Number("int"),
 * };
 * const command = new SearchAssociatedTranscriptsCommand(input);
 * const response = await client.send(command);
 * // { // SearchAssociatedTranscriptsResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   botRecommendationId: "STRING_VALUE",
 * //   nextIndex: Number("int"),
 * //   associatedTranscripts: [ // AssociatedTranscriptList
 * //     { // AssociatedTranscript
 * //       transcript: "STRING_VALUE",
 * //     },
 * //   ],
 * //   totalResults: Number("int"),
 * // };
 *
 * ```
 *
 * @param SearchAssociatedTranscriptsCommandInput - {@link SearchAssociatedTranscriptsCommandInput}
 * @returns {@link SearchAssociatedTranscriptsCommandOutput}
 * @see {@link SearchAssociatedTranscriptsCommandInput} for command's `input` shape.
 * @see {@link SearchAssociatedTranscriptsCommandOutput} for command's `response` shape.
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
export class SearchAssociatedTranscriptsCommand extends command<SearchAssociatedTranscriptsCommandInput, SearchAssociatedTranscriptsCommandOutput>(
  _ep0,
  _mw0,
  "SearchAssociatedTranscripts",
  SearchAssociatedTranscripts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchAssociatedTranscriptsRequest;
      output: SearchAssociatedTranscriptsResponse;
    };
    sdk: {
      input: SearchAssociatedTranscriptsCommandInput;
      output: SearchAssociatedTranscriptsCommandOutput;
    };
  };
}
