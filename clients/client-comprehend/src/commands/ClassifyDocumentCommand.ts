// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ClassifyDocumentRequest, ClassifyDocumentResponse } from "../models/models_0";
import { ClassifyDocument$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ClassifyDocumentCommand}.
 */
export interface ClassifyDocumentCommandInput extends ClassifyDocumentRequest {}
/**
 * @public
 *
 * The output of {@link ClassifyDocumentCommand}.
 */
export interface ClassifyDocumentCommandOutput extends ClassifyDocumentResponse, __MetadataBearer {}

/**
 * Creates a classification request to analyze a single document in real-time. `ClassifyDocument` supports the following model types:
 *
 * - Custom classifier - a custom model that you have created and trained. For input, you can provide plain text, a single-page document (PDF, Word, or image), or Amazon Textract API output. For more information, see [Custom classification](https://docs.aws.amazon.com/comprehend/latest/dg/how-document-classification.html) in the *Amazon Comprehend Developer Guide*.
 * - Prompt safety classifier - Amazon Comprehend provides a pre-trained model for classifying input prompts for generative AI applications. For input, you provide English plain text input. For prompt safety classification, the response includes only the `Classes` field. For more information about prompt safety classifiers, see [Prompt safety classification](https://docs.aws.amazon.com/comprehend/latest/dg/trust-safety.html#prompt-classification) in the *Amazon Comprehend Developer Guide*.
 *
 * If the system detects errors while processing a page in the input document, the API response includes an `Errors` field that describes the errors.
 *
 * If the system detects a document-level error in your input document, the API returns an `InvalidRequestException` error response. For details about this exception, see [Errors in semi-structured documents](https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync-err.html) in the Comprehend Developer Guide.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ClassifyDocumentCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ClassifyDocumentCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // ClassifyDocumentRequest
 *   Text: "STRING_VALUE",
 *   EndpointArn: "STRING_VALUE", // required
 *   Bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   DocumentReaderConfig: { // DocumentReaderConfig
 *     DocumentReadAction: "TEXTRACT_DETECT_DOCUMENT_TEXT" || "TEXTRACT_ANALYZE_DOCUMENT", // required
 *     DocumentReadMode: "SERVICE_DEFAULT" || "FORCE_DOCUMENT_READ_ACTION",
 *     FeatureTypes: [ // ListOfDocumentReadFeatureTypes
 *       "TABLES" || "FORMS",
 *     ],
 *   },
 * };
 * const command = new ClassifyDocumentCommand(input);
 * const response = await client.send(command);
 * // { // ClassifyDocumentResponse
 * //   Classes: [ // ListOfClasses
 * //     { // DocumentClass
 * //       Name: "STRING_VALUE",
 * //       Score: Number("float"),
 * //       Page: Number("int"),
 * //     },
 * //   ],
 * //   Labels: [ // ListOfLabels
 * //     { // DocumentLabel
 * //       Name: "STRING_VALUE",
 * //       Score: Number("float"),
 * //       Page: Number("int"),
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
 * //   Errors: [ // ListOfErrors
 * //     { // ErrorsListItem
 * //       Page: Number("int"),
 * //       ErrorCode: "TEXTRACT_BAD_PAGE" || "TEXTRACT_PROVISIONED_THROUGHPUT_EXCEEDED" || "PAGE_CHARACTERS_EXCEEDED" || "PAGE_SIZE_EXCEEDED" || "INTERNAL_SERVER_ERROR",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Warnings: [ // ListOfWarnings
 * //     { // WarningsListItem
 * //       Page: Number("int"),
 * //       WarnCode: "INFERENCING_PLAINTEXT_WITH_NATIVE_TRAINED_MODEL" || "INFERENCING_NATIVE_DOCUMENT_WITH_PLAINTEXT_TRAINED_MODEL",
 * //       WarnMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ClassifyDocumentCommandInput - {@link ClassifyDocumentCommandInput}
 * @returns {@link ClassifyDocumentCommandOutput}
 * @see {@link ClassifyDocumentCommandInput} for command's `input` shape.
 * @see {@link ClassifyDocumentCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is invalid.
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *
 * The specified resource is not available. Check the resource and try your request again.
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
export class ClassifyDocumentCommand extends command<ClassifyDocumentCommandInput, ClassifyDocumentCommandOutput>(
  _ep0,
  _mw0,
  "ClassifyDocument",
  ClassifyDocument$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ClassifyDocumentRequest;
      output: ClassifyDocumentResponse;
    };
    sdk: {
      input: ClassifyDocumentCommandInput;
      output: ClassifyDocumentCommandOutput;
    };
  };
}
