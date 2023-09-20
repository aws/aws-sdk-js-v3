// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
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
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Creates a new document classification request to analyze a single document in real-time,
 *       using a previously created and trained custom model and an endpoint.</p>
 *          <p>You can input plain text or you can upload a single-page input document (text, PDF, Word, or image). </p>
 *          <p>If the system detects errors while processing a page in the input document,
 *       the API response includes an entry in <code>Errors</code> that describes the errors.</p>
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
 * const client = new ComprehendClient(config);
 * const input = { // ClassifyDocumentRequest
 *   Text: "STRING_VALUE",
 *   EndpointArn: "STRING_VALUE", // required
 *   Bytes: "BLOB_VALUE",
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
 */
export class ClassifyDocumentCommand extends $Command<
  ClassifyDocumentCommandInput,
  ClassifyDocumentCommandOutput,
  ComprehendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ClassifyDocumentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ClassifyDocumentCommandInput, ClassifyDocumentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ClassifyDocumentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "ClassifyDocumentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ClassifyDocumentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ClassifyDocumentResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "Comprehend_20171127",
        operation: "ClassifyDocument",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ClassifyDocumentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ClassifyDocumentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ClassifyDocumentCommandOutput> {
    return de_ClassifyDocumentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
