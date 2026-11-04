// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchDetectDominantLanguageRequest, BatchDetectDominantLanguageResponse } from "../models/models_0";
import { BatchDetectDominantLanguage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface BatchDetectDominantLanguageCommandOutput extends BatchDetectDominantLanguageResponse, __MetadataBearer {}

/**
 * Determines the dominant language of the input text for a batch of documents. For a list of languages that Amazon Comprehend can detect, see [Amazon Comprehend Supported Languages](https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, BatchDetectDominantLanguageCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, BatchDetectDominantLanguageCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
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
 *
 * The number of documents in the request exceeds the limit of 25. Try your request again with fewer documents.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is invalid.
 *
 * @throws {@link TextSizeLimitExceededException} (client fault)
 *
 * The size of the input text exceeds the limit. Use a smaller document.
 *
 * @throws {@link ComprehendServiceException}
 *
 * Base exception class for all service exceptions from Comprehend service.
 *
 * @public
 */
export class BatchDetectDominantLanguageCommand extends command<BatchDetectDominantLanguageCommandInput, BatchDetectDominantLanguageCommandOutput>(
  _ep0,
  _mw0,
  "BatchDetectDominantLanguage",
  BatchDetectDominantLanguage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDetectDominantLanguageRequest;
      output: BatchDetectDominantLanguageResponse;
    };
    sdk: {
      input: BatchDetectDominantLanguageCommandInput;
      output: BatchDetectDominantLanguageCommandOutput;
    };
  };
}
