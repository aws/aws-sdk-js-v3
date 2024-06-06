// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DefineAnalysisSchemeRequest, DefineAnalysisSchemeResponse } from "../models/models_0";
import { de_DefineAnalysisSchemeCommand, se_DefineAnalysisSchemeCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Configures an analysis scheme that can be applied to a <code>text</code> or <code>text-array</code> field to define language-specific text processing options. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DefineAnalysisSchemeCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DefineAnalysisSchemeCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
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
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An internal error occurred while processing the request. If this problem persists,
 *       report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
 *
 * @throws {@link InvalidTypeException} (client fault)
 *  <p>The request was rejected because it specified an invalid type definition.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because a resource limit has already been met.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was rejected because it has invalid parameters.</p>
 *
 * @throws {@link CloudSearchServiceException}
 * <p>Base exception class for all service exceptions from CloudSearch service.</p>
 *
 * @public
 */
export class DefineAnalysisSchemeCommand extends $Command
  .classBuilder<
    DefineAnalysisSchemeCommandInput,
    DefineAnalysisSchemeCommandOutput,
    CloudSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudSearchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("A9SearchCloudConfigService2013", "DefineAnalysisScheme", {})
  .n("CloudSearchClient", "DefineAnalysisSchemeCommand")
  .f(void 0, void 0)
  .ser(se_DefineAnalysisSchemeCommand)
  .de(de_DefineAnalysisSchemeCommand)
  .build() {}
