// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  BatchDetectDominantLanguageRequest,
  BatchDetectDominantLanguageRequestFilterSensitiveLog,
  BatchDetectDominantLanguageResponse,
  BatchDetectDominantLanguageResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_BatchDetectDominantLanguageCommand, se_BatchDetectDominantLanguageCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDetectDominantLanguageCommand}.
 */
export interface BatchDetectDominantLanguageCommandInput extends BatchDetectDominantLanguageRequest {}
/**
 * @public
 *
 * The output of {@link BatchDetectDominantLanguageCommand}.
 */
export interface BatchDetectDominantLanguageCommandOutput
  extends BatchDetectDominantLanguageResponse,
    __MetadataBearer {}

/**
 * <p>Determines the dominant language of the input text for a batch of documents. For a list
 *       of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, BatchDetectDominantLanguageCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, BatchDetectDominantLanguageCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // BatchDetectDominantLanguageRequest
 *   TextList: [ // CustomerInputStringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDetectDominantLanguageCommand(input);
 * const response = await client.send(command);
 * // { // BatchDetectDominantLanguageResponse
 * //   ResultList: [ // ListOfDetectDominantLanguageResult // required
 * //     { // BatchDetectDominantLanguageItemResult
 * //       Index: Number("int"),
 * //       Languages: [ // ListOfDominantLanguages
 * //         { // DominantLanguage
 * //           LanguageCode: "STRING_VALUE",
 * //           Score: Number("float"),
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
 * @param BatchDetectDominantLanguageCommandInput - {@link BatchDetectDominantLanguageCommandInput}
 * @returns {@link BatchDetectDominantLanguageCommandOutput}
 * @see {@link BatchDetectDominantLanguageCommandInput} for command's `input` shape.
 * @see {@link BatchDetectDominantLanguageCommandOutput} for command's `response` shape.
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
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 * @public
 */
export class BatchDetectDominantLanguageCommand extends $Command
  .classBuilder<
    BatchDetectDominantLanguageCommandInput,
    BatchDetectDominantLanguageCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Comprehend_20171127", "BatchDetectDominantLanguage", {})
  .n("ComprehendClient", "BatchDetectDominantLanguageCommand")
  .f(BatchDetectDominantLanguageRequestFilterSensitiveLog, BatchDetectDominantLanguageResponseFilterSensitiveLog)
  .ser(se_BatchDetectDominantLanguageCommand)
  .de(de_BatchDetectDominantLanguageCommand)
  .build() {}
