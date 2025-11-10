// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DetectEntitiesRequest, DetectEntitiesResponse } from "../models/models_0";
import { DetectEntities } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetectEntitiesCommand}.
 */
export interface DetectEntitiesCommandInput extends DetectEntitiesRequest {}
/**
 * @public
 *
 * The output of {@link DetectEntitiesCommand}.
 */
export interface DetectEntitiesCommandOutput extends DetectEntitiesResponse, __MetadataBearer {}

/**
 * <p>Detects named entities in input text when you use the pre-trained model.
 *       Detects custom entities if you have a custom entity recognition model. </p>
 *          <p>
 *       When detecting named entities using the pre-trained model, use plain text as the input.
 *       For more information about named entities, see
 *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html">Entities</a> in the Comprehend Developer Guide.</p>
 *          <p>When you use a custom entity recognition model,
 *       you can input plain text or you can upload a single-page input document (text, PDF, Word, or image). </p>
 *          <p>If the system detects errors while processing a page in the input document, the API response
 *        includes an entry in <code>Errors</code> for each error. </p>
 *          <p>If the system detects a document-level error in your input document, the API returns an
 *        <code>InvalidRequestException</code> error response.
 *       For details about this exception, see
 *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync-err.html">
 *         Errors in semi-structured documents</a> in the Comprehend Developer Guide.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DetectEntitiesCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DetectEntitiesCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // DetectEntitiesRequest
 *   Text: "STRING_VALUE",
 *   LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW",
 *   EndpointArn: "STRING_VALUE",
 *   Bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   DocumentReaderConfig: { // DocumentReaderConfig
 *     DocumentReadAction: "TEXTRACT_DETECT_DOCUMENT_TEXT" || "TEXTRACT_ANALYZE_DOCUMENT", // required
 *     DocumentReadMode: "SERVICE_DEFAULT" || "FORCE_DOCUMENT_READ_ACTION",
 *     FeatureTypes: [ // ListOfDocumentReadFeatureTypes
 *       "TABLES" || "FORMS",
 *     ],
 *   },
 * };
 * const command = new DetectEntitiesCommand(input);
 * const response = await client.send(command);
 * // { // DetectEntitiesResponse
 * //   Entities: [ // ListOfEntities
 * //     { // Entity
 * //       Score: Number("float"),
 * //       Type: "PERSON" || "LOCATION" || "ORGANIZATION" || "COMMERCIAL_ITEM" || "EVENT" || "DATE" || "QUANTITY" || "TITLE" || "OTHER",
 * //       Text: "STRING_VALUE",
 * //       BeginOffset: Number("int"),
 * //       EndOffset: Number("int"),
 * //       BlockReferences: [ // ListOfBlockReferences
 * //         { // BlockReference
 * //           BlockId: "STRING_VALUE",
 * //           BeginOffset: Number("int"),
 * //           EndOffset: Number("int"),
 * //           ChildBlocks: [ // ListOfChildBlocks
 * //             { // ChildBlock
 * //               ChildBlockId: "STRING_VALUE",
 * //               BeginOffset: Number("int"),
 * //               EndOffset: Number("int"),
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   DocumentMetadata: { // DocumentMetadata
 * //     Pages: Number("int"),
 * //     ExtractedCharacters: [ // ListOfExtractedCharacters
 * //       { // ExtractedCharactersListItem
 * //         Page: Number("int"),
 * //         Count: Number("int"),
 * //       },
 * //     ],
 * //   },
 * //   DocumentType: [ // ListOfDocumentType
 * //     { // DocumentTypeListItem
 * //       Page: Number("int"),
 * //       Type: "NATIVE_PDF" || "SCANNED_PDF" || "MS_WORD" || "IMAGE" || "PLAIN_TEXT" || "TEXTRACT_DETECT_DOCUMENT_TEXT_JSON" || "TEXTRACT_ANALYZE_DOCUMENT_JSON",
 * //     },
 * //   ],
 * //   Blocks: [ // ListOfBlocks
 * //     { // Block
 * //       Id: "STRING_VALUE",
 * //       BlockType: "LINE" || "WORD",
 * //       Text: "STRING_VALUE",
 * //       Page: Number("int"),
 * //       Geometry: { // Geometry
 * //         BoundingBox: { // BoundingBox
 * //           Height: Number("float"),
 * //           Left: Number("float"),
 * //           Top: Number("float"),
 * //           Width: Number("float"),
 * //         },
 * //         Polygon: [ // Polygon
 * //           { // Point
 * //             X: Number("float"),
 * //             Y: Number("float"),
 * //           },
 * //         ],
 * //       },
 * //       Relationships: [ // ListOfRelationships
 * //         { // RelationshipsListItem
 * //           Ids: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //           Type: "CHILD",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   Errors: [ // ListOfErrors
 * //     { // ErrorsListItem
 * //       Page: Number("int"),
 * //       ErrorCode: "TEXTRACT_BAD_PAGE" || "TEXTRACT_PROVISIONED_THROUGHPUT_EXCEEDED" || "PAGE_CHARACTERS_EXCEEDED" || "PAGE_SIZE_EXCEEDED" || "INTERNAL_SERVER_ERROR",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DetectEntitiesCommandInput - {@link DetectEntitiesCommandInput}
 * @returns {@link DetectEntitiesCommandOutput}
 * @see {@link DetectEntitiesCommandInput} for command's `input` shape.
 * @see {@link DetectEntitiesCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *  <p>The specified resource is not available. Check the resource and try your request
 *       again.</p>
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
export class DetectEntitiesCommand extends $Command
  .classBuilder<
    DetectEntitiesCommandInput,
    DetectEntitiesCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Comprehend_20171127", "DetectEntities", {})
  .n("ComprehendClient", "DetectEntitiesCommand")
  .sc(DetectEntities)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetectEntitiesRequest;
      output: DetectEntitiesResponse;
    };
    sdk: {
      input: DetectEntitiesCommandInput;
      output: DetectEntitiesCommandOutput;
    };
  };
}
