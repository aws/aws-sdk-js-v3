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

import { AnalyzeDocumentRequest, AnalyzeDocumentResponse } from "../models/models_0";
import { de_AnalyzeDocumentCommand, se_AnalyzeDocumentCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AnalyzeDocumentCommand}.
 */
export interface AnalyzeDocumentCommandInput extends AnalyzeDocumentRequest {}
/**
 * @public
 *
 * The output of {@link AnalyzeDocumentCommand}.
 */
export interface AnalyzeDocumentCommandOutput extends AnalyzeDocumentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Analyzes an input document for relationships between detected items. </p>
 *          <p>The types of information returned are as follows: </p>
 *          <ul>
 *             <li>
 *                <p>Form data (key-value pairs). The related information is returned in two <a>Block</a> objects, each of type <code>KEY_VALUE_SET</code>: a KEY
 *                   <code>Block</code> object and a VALUE <code>Block</code> object. For example,
 *                   <i>Name: Ana Silva Carolina</i> contains a key and value.
 *                   <i>Name:</i> is the key. <i>Ana Silva Carolina</i> is
 *                the value.</p>
 *             </li>
 *             <li>
 *                <p>Table and table cell data. A TABLE <code>Block</code> object contains information
 *                about a detected table. A CELL <code>Block</code> object is returned for each cell in
 *                a table.</p>
 *             </li>
 *             <li>
 *                <p>Lines and words of text. A LINE <code>Block</code> object contains one or more
 *                WORD <code>Block</code> objects. All lines and words that are detected in the
 *                document are returned (including text that doesn't have a relationship with the value
 *                of <code>FeatureTypes</code>). </p>
 *             </li>
 *             <li>
 *                <p>Signatures. A SIGNATURE <code>Block</code> object contains the location information
 *                of a signature in a document. If used in conjunction with forms or tables, a signature
 *                can be given a Key-Value pairing or be detected in the cell of a table.</p>
 *             </li>
 *             <li>
 *                <p>Query. A QUERY Block object contains the query text, alias and link to the
 *                associated Query results block object.</p>
 *             </li>
 *             <li>
 *                <p>Query Result. A QUERY_RESULT Block object contains the answer to the query and an
 *                ID that connects it to the query asked. This Block also contains a confidence
 *                score.</p>
 *             </li>
 *          </ul>
 *          <p>Selection elements such as check boxes and option buttons (radio buttons) can be
 *          detected in form data and in tables. A SELECTION_ELEMENT <code>Block</code> object contains
 *          information about a selection element, including the selection status.</p>
 *          <p>You can choose which type of analysis to perform by specifying the
 *             <code>FeatureTypes</code> list. </p>
 *          <p>The output is returned in a list of <code>Block</code> objects.</p>
 *          <p>
 *             <code>AnalyzeDocument</code> is a synchronous operation. To analyze documents
 *          asynchronously, use <a>StartDocumentAnalysis</a>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text
 *          Analysis</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, AnalyzeDocumentCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, AnalyzeDocumentCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * const client = new TextractClient(config);
 * const input = { // AnalyzeDocumentRequest
 *   Document: { // Document
 *     Bytes: "BLOB_VALUE",
 *     S3Object: { // S3Object
 *       Bucket: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *       Version: "STRING_VALUE",
 *     },
 *   },
 *   FeatureTypes: [ // FeatureTypes // required
 *     "TABLES" || "FORMS" || "QUERIES" || "SIGNATURES" || "LAYOUT",
 *   ],
 *   HumanLoopConfig: { // HumanLoopConfig
 *     HumanLoopName: "STRING_VALUE", // required
 *     FlowDefinitionArn: "STRING_VALUE", // required
 *     DataAttributes: { // HumanLoopDataAttributes
 *       ContentClassifiers: [ // ContentClassifiers
 *         "FreeOfPersonallyIdentifiableInformation" || "FreeOfAdultContent",
 *       ],
 *     },
 *   },
 *   QueriesConfig: { // QueriesConfig
 *     Queries: [ // Queries // required
 *       { // Query
 *         Text: "STRING_VALUE", // required
 *         Alias: "STRING_VALUE",
 *         Pages: [ // QueryPages
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 *   AdaptersConfig: { // AdaptersConfig
 *     Adapters: [ // Adapters // required
 *       { // Adapter
 *         AdapterId: "STRING_VALUE", // required
 *         Pages: [ // AdapterPages
 *           "STRING_VALUE",
 *         ],
 *         Version: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new AnalyzeDocumentCommand(input);
 * const response = await client.send(command);
 * // { // AnalyzeDocumentResponse
 * //   DocumentMetadata: { // DocumentMetadata
 * //     Pages: Number("int"),
 * //   },
 * //   Blocks: [ // BlockList
 * //     { // Block
 * //       BlockType: "KEY_VALUE_SET" || "PAGE" || "LINE" || "WORD" || "TABLE" || "CELL" || "SELECTION_ELEMENT" || "MERGED_CELL" || "TITLE" || "QUERY" || "QUERY_RESULT" || "SIGNATURE" || "TABLE_TITLE" || "TABLE_FOOTER" || "LAYOUT_TEXT" || "LAYOUT_TITLE" || "LAYOUT_HEADER" || "LAYOUT_FOOTER" || "LAYOUT_SECTION_HEADER" || "LAYOUT_PAGE_NUMBER" || "LAYOUT_LIST" || "LAYOUT_FIGURE" || "LAYOUT_TABLE" || "LAYOUT_KEY_VALUE",
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
 * //   HumanLoopActivationOutput: { // HumanLoopActivationOutput
 * //     HumanLoopArn: "STRING_VALUE",
 * //     HumanLoopActivationReasons: [ // HumanLoopActivationReasons
 * //       "STRING_VALUE",
 * //     ],
 * //     HumanLoopActivationConditionsEvaluationResults: "STRING_VALUE",
 * //   },
 * //   AnalyzeDocumentModelVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AnalyzeDocumentCommandInput - {@link AnalyzeDocumentCommandInput}
 * @returns {@link AnalyzeDocumentCommandOutput}
 * @see {@link AnalyzeDocumentCommandInput} for command's `input` shape.
 * @see {@link AnalyzeDocumentCommandOutput} for command's `response` shape.
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
 * @throws {@link HumanLoopQuotaExceededException} (client fault)
 *  <p>Indicates you have exceeded the maximum number of active human in the loop workflows available</p>
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
export class AnalyzeDocumentCommand extends $Command<
  AnalyzeDocumentCommandInput,
  AnalyzeDocumentCommandOutput,
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
  constructor(readonly input: AnalyzeDocumentCommandInput) {
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
  ): Handler<AnalyzeDocumentCommandInput, AnalyzeDocumentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AnalyzeDocumentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TextractClient";
    const commandName = "AnalyzeDocumentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Textract",
        operation: "AnalyzeDocument",
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
  private serialize(input: AnalyzeDocumentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AnalyzeDocumentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AnalyzeDocumentCommandOutput> {
    return de_AnalyzeDocumentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
