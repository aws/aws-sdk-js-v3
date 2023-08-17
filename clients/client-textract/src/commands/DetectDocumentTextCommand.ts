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
} from "@smithy/types";

import { DetectDocumentTextRequest, DetectDocumentTextResponse } from "../models/models_0";
import { de_DetectDocumentTextCommand, se_DetectDocumentTextCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DetectDocumentTextCommand}.
 */
export interface DetectDocumentTextCommandInput extends DetectDocumentTextRequest {}
/**
 * @public
 *
 * The output of {@link DetectDocumentTextCommand}.
 */
export interface DetectDocumentTextCommandOutput extends DetectDocumentTextResponse, __MetadataBearer {}

/**
 * @public
 * <p>Detects text in the input document. Amazon Textract can detect lines of text and the
 *          words that make up a line of text. The input document must be in one of the following image
 *          formats:  JPEG, PNG, PDF, or TIFF. <code>DetectDocumentText</code> returns the detected
 *          text in an array of <a>Block</a> objects. </p>
 *          <p>Each document page has as an associated <code>Block</code> of type PAGE. Each PAGE <code>Block</code> object
 *          is the parent of LINE <code>Block</code> objects that represent the lines of detected text on a page. A LINE <code>Block</code> object is
 *          a parent for each word that makes up the line. Words are represented by <code>Block</code> objects of type WORD.</p>
 *          <p>
 *             <code>DetectDocumentText</code> is a synchronous operation. To analyze documents
 *          asynchronously, use <a>StartDocumentTextDetection</a>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, DetectDocumentTextCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, DetectDocumentTextCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * const client = new TextractClient(config);
 * const input = { // DetectDocumentTextRequest
 *   Document: { // Document
 *     Bytes: "BLOB_VALUE",
 *     S3Object: { // S3Object
 *       Bucket: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *       Version: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new DetectDocumentTextCommand(input);
 * const response = await client.send(command);
 * // { // DetectDocumentTextResponse
 * //   DocumentMetadata: { // DocumentMetadata
 * //     Pages: Number("int"),
 * //   },
 * //   Blocks: [ // BlockList
 * //     { // Block
 * //       BlockType: "KEY_VALUE_SET" || "PAGE" || "LINE" || "WORD" || "TABLE" || "CELL" || "SELECTION_ELEMENT" || "MERGED_CELL" || "TITLE" || "QUERY" || "QUERY_RESULT" || "SIGNATURE" || "TABLE_TITLE" || "TABLE_FOOTER",
 * //       Confidence: Number("float"),
 * //       Text: "STRING_VALUE",
 * //       TextType: "HANDWRITING" || "PRINTED",
 * //       RowIndex: Number("int"),
 * //       ColumnIndex: Number("int"),
 * //       RowSpan: Number("int"),
 * //       ColumnSpan: Number("int"),
 * //       Geometry: { // Geometry
 * //         BoundingBox: { // BoundingBox
 * //           Width: Number("float"),
 * //           Height: Number("float"),
 * //           Left: Number("float"),
 * //           Top: Number("float"),
 * //         },
 * //         Polygon: [ // Polygon
 * //           { // Point
 * //             X: Number("float"),
 * //             Y: Number("float"),
 * //           },
 * //         ],
 * //       },
 * //       Id: "STRING_VALUE",
 * //       Relationships: [ // RelationshipList
 * //         { // Relationship
 * //           Type: "VALUE" || "CHILD" || "COMPLEX_FEATURES" || "MERGED_CELL" || "TITLE" || "ANSWER" || "TABLE" || "TABLE_TITLE" || "TABLE_FOOTER",
 * //           Ids: [ // IdList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       EntityTypes: [ // EntityTypes
 * //         "KEY" || "VALUE" || "COLUMN_HEADER" || "TABLE_TITLE" || "TABLE_FOOTER" || "TABLE_SECTION_TITLE" || "TABLE_SUMMARY" || "STRUCTURED_TABLE" || "SEMI_STRUCTURED_TABLE",
 * //       ],
 * //       SelectionStatus: "SELECTED" || "NOT_SELECTED",
 * //       Page: Number("int"),
 * //       Query: { // Query
 * //         Text: "STRING_VALUE", // required
 * //         Alias: "STRING_VALUE",
 * //         Pages: [ // QueryPages
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   DetectDocumentTextModelVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DetectDocumentTextCommandInput - {@link DetectDocumentTextCommandInput}
 * @returns {@link DetectDocumentTextCommandOutput}
 * @see {@link DetectDocumentTextCommandInput} for command's `input` shape.
 * @see {@link DetectDocumentTextCommandOutput} for command's `response` shape.
 * @see {@link TextractClientResolvedConfig | config} for TextractClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You aren't authorized to perform the action. Use the Amazon Resource Name (ARN)
 *             of an authorized user or IAM role to perform the operation.</p>
 *
 * @throws {@link BadDocumentException} (client fault)
 *  <p>Amazon Textract isn't able to read the document. For more information on the document
 *          limits in Amazon Textract, see <a>limits</a>.</p>
 *
 * @throws {@link DocumentTooLargeException} (client fault)
 *  <p>The document can't be processed because it's too large. The maximum document size for
 *          synchronous operations 10 MB. The maximum document size for asynchronous operations is 500
 *          MB for PDF files.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Textract experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An input parameter violated a constraint. For example, in synchronous operations,
 *        an <code>InvalidParameterException</code> exception occurs
 *       when neither of the <code>S3Object</code> or <code>Bytes</code> values are supplied in the <code>Document</code>
 *       request parameter.
 *        Validate your parameter before calling the API operation again.</p>
 *
 * @throws {@link InvalidS3ObjectException} (client fault)
 *  <p>Amazon Textract is unable to access the S3 object that's specified in the request.
 *          for more information, <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html">Configure Access to Amazon S3</a>
 *          For troubleshooting information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/troubleshooting.html">Troubleshooting Amazon S3</a>
 *          </p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this limit,
 *          contact Amazon Textract.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Textract is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link UnsupportedDocumentException} (client fault)
 *  <p>The format of the input document isn't supported. Documents for operations can be in
 *          PNG, JPEG, PDF, or TIFF format.</p>
 *
 * @throws {@link TextractServiceException}
 * <p>Base exception class for all service exceptions from Textract service.</p>
 *
 */
export class DetectDocumentTextCommand extends $Command<
  DetectDocumentTextCommandInput,
  DetectDocumentTextCommandOutput,
  TextractClientResolvedConfig
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
  constructor(readonly input: DetectDocumentTextCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TextractClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetectDocumentTextCommandInput, DetectDocumentTextCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DetectDocumentTextCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TextractClient";
    const commandName = "DetectDocumentTextCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: DetectDocumentTextCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DetectDocumentTextCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectDocumentTextCommandOutput> {
    return de_DetectDocumentTextCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
