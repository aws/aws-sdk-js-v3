// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAnalysisSchemesRequest, DescribeAnalysisSchemesResponse } from "../models/models_0";
import { DescribeAnalysisSchemes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAnalysisSchemesCommand}.
 */
export interface DescribeAnalysisSchemesCommandInput extends DescribeAnalysisSchemesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAnalysisSchemesCommand}.
 */
export interface DescribeAnalysisSchemesCommandOutput extends DescribeAnalysisSchemesResponse, __MetadataBearer {}

/**
 * Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a `text` field. Can be limited to specific analysis schemes by name. By default, shows all analysis schemes and includes any pending changes to the configuration. Set the `Deployed` option to `true` to show the active configuration and exclude pending changes. For more information, see [Configuring Analysis Schemes](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html) in the *Amazon CloudSearch Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeAnalysisSchemesCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeAnalysisSchemesCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * // import type { CloudSearchClientConfig } from "@aws-sdk/client-cloudsearch";
 * const config = {}; // type is CloudSearchClientConfig
 * const client = new CloudSearchClient(config);
 * const input = { // DescribeAnalysisSchemesRequest
 *   DomainName: "STRING_VALUE", // required
 *   AnalysisSchemeNames: [ // StandardNameList
 *     "STRING_VALUE",
 *   ],
 *   Deployed: true || false,
 * };
 * const command = new DescribeAnalysisSchemesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAnalysisSchemesResponse
 * //   AnalysisSchemes: [ // AnalysisSchemeStatusList // required
 * //     { // AnalysisSchemeStatus
 * //       Options: { // AnalysisScheme
 * //         AnalysisSchemeName: "STRING_VALUE", // required
 * //         AnalysisSchemeLanguage: "ar" || "bg" || "ca" || "cs" || "da" || "de" || "el" || "en" || "es" || "eu" || "fa" || "fi" || "fr" || "ga" || "gl" || "he" || "hi" || "hu" || "hy" || "id" || "it" || "ja" || "ko" || "lv" || "mul" || "nl" || "no" || "pt" || "ro" || "ru" || "sv" || "th" || "tr" || "zh-Hans" || "zh-Hant", // required
 * //         AnalysisOptions: { // AnalysisOptions
 * //           Synonyms: "STRING_VALUE",
 * //           Stopwords: "STRING_VALUE",
 * //           StemmingDictionary: "STRING_VALUE",
 * //           JapaneseTokenizationDictionary: "STRING_VALUE",
 * //           AlgorithmicStemming: "none" || "minimal" || "light" || "full",
 * //         },
 * //       },
 * //       Status: { // OptionStatus
 * //         CreationDate: new Date("TIMESTAMP"), // required
 * //         UpdateDate: new Date("TIMESTAMP"), // required
 * //         UpdateVersion: Number("int"),
 * //         State: "RequiresIndexDocuments" || "Processing" || "Active" || "FailedToValidate", // required
 * //         PendingDeletion: true || false,
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAnalysisSchemesCommandInput - {@link DescribeAnalysisSchemesCommandInput}
 * @returns {@link DescribeAnalysisSchemesCommandOutput}
 * @see {@link DescribeAnalysisSchemesCommandInput} for command's `input` shape.
 * @see {@link DescribeAnalysisSchemesCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request was rejected because it attempted to reference a resource that does not exist.
 *
 * @throws {@link CloudSearchServiceException}
 *
 * Base exception class for all service exceptions from CloudSearch service.
 *
 * @public
 */
export class DescribeAnalysisSchemesCommand extends command<DescribeAnalysisSchemesCommandInput, DescribeAnalysisSchemesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAnalysisSchemes",
  DescribeAnalysisSchemes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAnalysisSchemesRequest;
      output: DescribeAnalysisSchemesResponse;
    };
    sdk: {
      input: DescribeAnalysisSchemesCommandInput;
      output: DescribeAnalysisSchemesCommandOutput;
    };
  };
}
