// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ClassifyDocumentRequest,
  ClassifyDocumentRequestFilterSensitiveLog,
  ClassifyDocumentResponse,
  ClassifyDocumentResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ClassifyDocumentCommand, se_ClassifyDocumentCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a classification request to analyze a single document in real-time. <code>ClassifyDocument</code>
 *       supports the following model types:</p>
 *          <ul>
 *             <li>
 *                <p>Custom classifier - a custom model that you have created and trained.
 *         For input, you can provide plain text, a single-page document (PDF, Word, or image), or
 *         Amazon Textract API output. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-document-classification.html">Custom classification</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>Prompt safety classifier - Amazon Comprehend provides a pre-trained model for classifying
 *         input prompts for generative AI applications.
 *         For input, you provide English plain text input.
 *         For prompt safety classification, the response includes only the <code>Classes</code> field.
 *         For more information about prompt safety classifiers, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/trust-safety.html#prompt-classification">Prompt safety classification</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
 *             </li>
 *          </ul>
 *          <p>If the system detects errors while processing a page in the input document,
 *       the API response includes an <code>Errors</code> field that describes the errors.</p>
 *          <p>If the system detects a document-level error in your input document, the API returns an
 *       <code>InvalidRequestException</code> error response.
 *       For details about this exception, see
 *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync-err.html">
 *         Errors in semi-structured documents</a> in the Comprehend Developer Guide.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ClassifyDocumentCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ClassifyDocumentCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 * @public
 */
export class ClassifyDocumentCommand extends $Command
  .classBuilder<
    ClassifyDocumentCommandInput,
    ClassifyDocumentCommandOutput,
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
  .s("Comprehend_20171127", "ClassifyDocument", {})
  .n("ComprehendClient", "ClassifyDocumentCommand")
  .f(ClassifyDocumentRequestFilterSensitiveLog, ClassifyDocumentResponseFilterSensitiveLog)
  .ser(se_ClassifyDocumentCommand)
  .de(de_ClassifyDocumentCommand)
  .build() {
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
