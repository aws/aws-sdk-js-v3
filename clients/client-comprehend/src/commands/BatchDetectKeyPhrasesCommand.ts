// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  BatchDetectKeyPhrasesRequest,
  BatchDetectKeyPhrasesRequestFilterSensitiveLog,
  BatchDetectKeyPhrasesResponse,
  BatchDetectKeyPhrasesResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_BatchDetectKeyPhrasesCommand, se_BatchDetectKeyPhrasesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDetectKeyPhrasesCommand}.
 */
export interface BatchDetectKeyPhrasesCommandInput extends BatchDetectKeyPhrasesRequest {}
/**
 * @public
 *
 * The output of {@link BatchDetectKeyPhrasesCommand}.
 */
export interface BatchDetectKeyPhrasesCommandOutput extends BatchDetectKeyPhrasesResponse, __MetadataBearer {}

/**
 * <p>Detects the key noun phrases found in a batch of documents.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, BatchDetectKeyPhrasesCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, BatchDetectKeyPhrasesCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // BatchDetectKeyPhrasesRequest
 *   TextList: [ // CustomerInputStringList // required
 *     "STRING_VALUE",
 *   ],
 *   LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW", // required
 * };
 * const command = new BatchDetectKeyPhrasesCommand(input);
 * const response = await client.send(command);
 * // { // BatchDetectKeyPhrasesResponse
 * //   ResultList: [ // ListOfDetectKeyPhrasesResult // required
 * //     { // BatchDetectKeyPhrasesItemResult
 * //       Index: Number("int"),
 * //       KeyPhrases: [ // ListOfKeyPhrases
 * //         { // KeyPhrase
 * //           Score: Number("float"),
 * //           Text: "STRING_VALUE",
 * //           BeginOffset: Number("int"),
 * //           EndOffset: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   ErrorList: [ // BatchItemErrorList // required
 * //     { // BatchItemError
 * //       Index: Number("int"),
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDetectKeyPhrasesCommandInput - {@link BatchDetectKeyPhrasesCommandInput}
 * @returns {@link BatchDetectKeyPhrasesCommandOutput}
 * @see {@link BatchDetectKeyPhrasesCommandInput} for command's `input` shape.
 * @see {@link BatchDetectKeyPhrasesCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link BatchSizeLimitExceededException} (client fault)
 *  <p>The number of documents in the request exceeds the limit of 25. Try your request again
 *       with fewer documents.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link TextSizeLimitExceededException} (client fault)
 *  <p>The size of the input text exceeds the limit. Use a smaller document.</p>
 *
 * @throws {@link UnsupportedLanguageException} (client fault)
 *  <p>Amazon Comprehend can't process the language of the input text. For a list of supported languages,
 *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/supported-languages.html">Supported languages</a> in the Comprehend Developer Guide.
 *     </p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 *
 * @public
 */
export class BatchDetectKeyPhrasesCommand extends $Command
  .classBuilder<
    BatchDetectKeyPhrasesCommandInput,
    BatchDetectKeyPhrasesCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Comprehend_20171127", "BatchDetectKeyPhrases", {})
  .n("ComprehendClient", "BatchDetectKeyPhrasesCommand")
  .f(BatchDetectKeyPhrasesRequestFilterSensitiveLog, BatchDetectKeyPhrasesResponseFilterSensitiveLog)
  .ser(se_BatchDetectKeyPhrasesCommand)
  .de(de_BatchDetectKeyPhrasesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDetectKeyPhrasesRequest;
      output: BatchDetectKeyPhrasesResponse;
    };
    sdk: {
      input: BatchDetectKeyPhrasesCommandInput;
      output: BatchDetectKeyPhrasesCommandOutput;
    };
  };
}
