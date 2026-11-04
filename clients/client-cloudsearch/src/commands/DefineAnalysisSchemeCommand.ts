// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DefineAnalysisSchemeRequest, DefineAnalysisSchemeResponse } from "../models/models_0";
import { DefineAnalysisScheme$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DefineAnalysisSchemeCommand}.
 */
export interface DefineAnalysisSchemeCommandInput extends DefineAnalysisSchemeRequest {}
/**
 * @public
 *
 * The output of {@link DefineAnalysisSchemeCommand}.
 */
export interface DefineAnalysisSchemeCommandOutput extends DefineAnalysisSchemeResponse, __MetadataBearer {}

/**
 * Configures an analysis scheme that can be applied to a `text` or `text-array` field to define language-specific text processing options. For more information, see [Configuring Analysis Schemes](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html) in the *Amazon CloudSearch Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DefineAnalysisSchemeCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DefineAnalysisSchemeCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * // import type { CloudSearchClientConfig } from "@aws-sdk/client-cloudsearch";
 * const config = {}; // type is CloudSearchClientConfig
 * const client = new CloudSearchClient(config);
 * const input = { // DefineAnalysisSchemeRequest
 *   DomainName: "STRING_VALUE", // required
 *   AnalysisScheme: { // AnalysisScheme
 *     AnalysisSchemeName: "STRING_VALUE", // required
 *     AnalysisSchemeLanguage: "ar" || "bg" || "ca" || "cs" || "da" || "de" || "el" || "en" || "es" || "eu" || "fa" || "fi" || "fr" || "ga" || "gl" || "he" || "hi" || "hu" || "hy" || "id" || "it" || "ja" || "ko" || "lv" || "mul" || "nl" || "no" || "pt" || "ro" || "ru" || "sv" || "th" || "tr" || "zh-Hans" || "zh-Hant", // required
 *     AnalysisOptions: { // AnalysisOptions
 *       Synonyms: "STRING_VALUE",
 *       Stopwords: "STRING_VALUE",
 *       StemmingDictionary: "STRING_VALUE",
 *       JapaneseTokenizationDictionary: "STRING_VALUE",
 *       AlgorithmicStemming: "none" || "minimal" || "light" || "full",
 *     },
 *   },
 * };
 * const command = new DefineAnalysisSchemeCommand(input);
 * const response = await client.send(command);
 * // { // DefineAnalysisSchemeResponse
 * //   AnalysisScheme: { // AnalysisSchemeStatus
 * //     Options: { // AnalysisScheme
 * //       AnalysisSchemeName: "STRING_VALUE", // required
 * //       AnalysisSchemeLanguage: "ar" || "bg" || "ca" || "cs" || "da" || "de" || "el" || "en" || "es" || "eu" || "fa" || "fi" || "fr" || "ga" || "gl" || "he" || "hi" || "hu" || "hy" || "id" || "it" || "ja" || "ko" || "lv" || "mul" || "nl" || "no" || "pt" || "ro" || "ru" || "sv" || "th" || "tr" || "zh-Hans" || "zh-Hant", // required
 * //       AnalysisOptions: { // AnalysisOptions
 * //         Synonyms: "STRING_VALUE",
 * //         Stopwords: "STRING_VALUE",
 * //         StemmingDictionary: "STRING_VALUE",
 * //         JapaneseTokenizationDictionary: "STRING_VALUE",
 * //         AlgorithmicStemming: "none" || "minimal" || "light" || "full",
 * //       },
 * //     },
 * //     Status: { // OptionStatus
 * //       CreationDate: new Date("TIMESTAMP"), // required
 * //       UpdateDate: new Date("TIMESTAMP"), // required
 * //       UpdateVersion: Number("int"),
 * //       State: "RequiresIndexDocuments" || "Processing" || "Active" || "FailedToValidate", // required
 * //       PendingDeletion: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DefineAnalysisSchemeCommandInput - {@link DefineAnalysisSchemeCommandInput}
 * @returns {@link DefineAnalysisSchemeCommandOutput}
 * @see {@link DefineAnalysisSchemeCommandInput} for command's `input` shape.
 * @see {@link DefineAnalysisSchemeCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for CloudSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *
 * An error occurred while processing the request.
 *
 * @throws {@link InternalException} (server fault)
 *
 * An internal error occurred while processing the request. If this problem persists, report an issue from the [Service Health Dashboard](http://status.aws.amazon.com/).
 *
 * @throws {@link InvalidTypeException} (client fault)
 *
 * The request was rejected because it specified an invalid type definition.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because a resource limit has already been met.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request was rejected because it attempted to reference a resource that does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request was rejected because it has invalid parameters.
 *
 * @throws {@link CloudSearchServiceException}
 *
 * Base exception class for all service exceptions from CloudSearch service.
 *
 * @public
 */
export class DefineAnalysisSchemeCommand extends command<DefineAnalysisSchemeCommandInput, DefineAnalysisSchemeCommandOutput>(
  _ep0,
  _mw0,
  "DefineAnalysisScheme",
  DefineAnalysisScheme$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DefineAnalysisSchemeRequest;
      output: DefineAnalysisSchemeResponse;
    };
    sdk: {
      input: DefineAnalysisSchemeCommandInput;
      output: DefineAnalysisSchemeCommandOutput;
    };
  };
}
