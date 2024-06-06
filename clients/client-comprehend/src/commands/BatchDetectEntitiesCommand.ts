// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  BatchDetectEntitiesRequest,
  BatchDetectEntitiesRequestFilterSensitiveLog,
  BatchDetectEntitiesResponse,
  BatchDetectEntitiesResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_BatchDetectEntitiesCommand, se_BatchDetectEntitiesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDetectEntitiesCommand}.
 */
export interface BatchDetectEntitiesCommandInput extends BatchDetectEntitiesRequest {}
/**
 * @public
 *
 * The output of {@link BatchDetectEntitiesCommand}.
 */
export interface BatchDetectEntitiesCommandOutput extends BatchDetectEntitiesResponse, __MetadataBearer {}

/**
 * <p>Inspects the text of a batch of documents for named entities and returns information
 *       about them. For more information about named entities, see
 *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html">Entities</a> in the Comprehend Developer Guide.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, BatchDetectEntitiesCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, BatchDetectEntitiesCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // BatchDetectEntitiesRequest
 *   TextList: [ // CustomerInputStringList // required
 *     "STRING_VALUE",
 *   ],
 *   LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW", // required
 * };
 * const command = new BatchDetectEntitiesCommand(input);
 * const response = await client.send(command);
 * // { // BatchDetectEntitiesResponse
 * //   ResultList: [ // ListOfDetectEntitiesResult // required
 * //     { // BatchDetectEntitiesItemResult
 * //       Index: Number("int"),
 * //       Entities: [ // ListOfEntities
 * //         { // Entity
 * //           Score: Number("float"),
 * //           Type: "PERSON" || "LOCATION" || "ORGANIZATION" || "COMMERCIAL_ITEM" || "EVENT" || "DATE" || "QUANTITY" || "TITLE" || "OTHER",
 * //           Text: "STRING_VALUE",
 * //           BeginOffset: Number("int"),
 * //           EndOffset: Number("int"),
 * //           BlockReferences: [ // ListOfBlockReferences
 * //             { // BlockReference
 * //               BlockId: "STRING_VALUE",
 * //               BeginOffset: Number("int"),
 * //               EndOffset: Number("int"),
 * //               ChildBlocks: [ // ListOfChildBlocks
 * //                 { // ChildBlock
 * //                   ChildBlockId: "STRING_VALUE",
 * //                   BeginOffset: Number("int"),
 * //                   EndOffset: Number("int"),
 * //                 },
 * //               ],
 * //             },
 * //           ],
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
 * @param BatchDetectEntitiesCommandInput - {@link BatchDetectEntitiesCommandInput}
 * @returns {@link BatchDetectEntitiesCommandOutput}
 * @see {@link BatchDetectEntitiesCommandInput} for command's `input` shape.
 * @see {@link BatchDetectEntitiesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class BatchDetectEntitiesCommand extends $Command
  .classBuilder<
    BatchDetectEntitiesCommandInput,
    BatchDetectEntitiesCommandOutput,
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
  .s("Comprehend_20171127", "BatchDetectEntities", {})
  .n("ComprehendClient", "BatchDetectEntitiesCommand")
  .f(BatchDetectEntitiesRequestFilterSensitiveLog, BatchDetectEntitiesResponseFilterSensitiveLog)
  .ser(se_BatchDetectEntitiesCommand)
  .de(de_BatchDetectEntitiesCommand)
  .build() {}
