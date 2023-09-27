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

import { GetExpenseAnalysisRequest, GetExpenseAnalysisResponse } from "../models/models_0";
import { de_GetExpenseAnalysisCommand, se_GetExpenseAnalysisCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetExpenseAnalysisCommand}.
 */
export interface GetExpenseAnalysisCommandInput extends GetExpenseAnalysisRequest {}
/**
 * @public
 *
 * The output of {@link GetExpenseAnalysisCommand}.
 */
export interface GetExpenseAnalysisCommandOutput extends GetExpenseAnalysisResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the results for an Amazon Textract asynchronous operation that analyzes invoices and
 *    receipts. Amazon Textract finds contact information, items purchased, and vendor name, from input
 *    invoices and receipts.</p>
 *          <p>You start asynchronous invoice/receipt analysis by calling <a>StartExpenseAnalysis</a>, which returns a job identifier (<code>JobId</code>). Upon
 *    completion of the invoice/receipt analysis, Amazon Textract publishes the completion status to the
 *    Amazon Simple Notification Service (Amazon SNS) topic. This topic must be registered in the initial call to
 *     <code>StartExpenseAnalysis</code>. To get the results of the invoice/receipt analysis operation,
 *    first ensure that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so,
 *    call <code>GetExpenseAnalysis</code>, and pass the job identifier (<code>JobId</code>) from the
 *    initial call to <code>StartExpenseAnalysis</code>.</p>
 *          <p>Use the MaxResults parameter to limit the number of blocks that are returned. If there are
 *    more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in
 *    the operation response contains a pagination token for getting the next set of results. To get
 *    the next page of results, call <code>GetExpenseAnalysis</code>, and populate the
 *     <code>NextToken</code> request parameter with the token value that's returned from the previous
 *    call to <code>GetExpenseAnalysis</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/invoices-receipts.html">Analyzing Invoices and Receipts</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, GetExpenseAnalysisCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, GetExpenseAnalysisCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * const client = new TextractClient(config);
 * const input = { // GetExpenseAnalysisRequest
 *   JobId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetExpenseAnalysisCommand(input);
 * const response = await client.send(command);
 * // { // GetExpenseAnalysisResponse
 * //   DocumentMetadata: { // DocumentMetadata
 * //     Pages: Number("int"),
 * //   },
 * //   JobStatus: "IN_PROGRESS" || "SUCCEEDED" || "FAILED" || "PARTIAL_SUCCESS",
 * //   NextToken: "STRING_VALUE",
 * //   ExpenseDocuments: [ // ExpenseDocumentList
 * //     { // ExpenseDocument
 * //       ExpenseIndex: Number("int"),
 * //       SummaryFields: [ // ExpenseFieldList
 * //         { // ExpenseField
 * //           Type: { // ExpenseType
 * //             Text: "STRING_VALUE",
 * //             Confidence: Number("float"),
 * //           },
 * //           LabelDetection: { // ExpenseDetection
 * //             Text: "STRING_VALUE",
 * //             Geometry: { // Geometry
 * //               BoundingBox: { // BoundingBox
 * //                 Width: Number("float"),
 * //                 Height: Number("float"),
 * //                 Left: Number("float"),
 * //                 Top: Number("float"),
 * //               },
 * //               Polygon: [ // Polygon
 * //                 { // Point
 * //                   X: Number("float"),
 * //                   Y: Number("float"),
 * //                 },
 * //               ],
 * //             },
 * //             Confidence: Number("float"),
 * //           },
 * //           ValueDetection: {
 * //             Text: "STRING_VALUE",
 * //             Geometry: {
 * //               BoundingBox: {
 * //                 Width: Number("float"),
 * //                 Height: Number("float"),
 * //                 Left: Number("float"),
 * //                 Top: Number("float"),
 * //               },
 * //               Polygon: [
 * //                 {
 * //                   X: Number("float"),
 * //                   Y: Number("float"),
 * //                 },
 * //               ],
 * //             },
 * //             Confidence: Number("float"),
 * //           },
 * //           PageNumber: Number("int"),
 * //           Currency: { // ExpenseCurrency
 * //             Code: "STRING_VALUE",
 * //             Confidence: Number("float"),
 * //           },
 * //           GroupProperties: [ // ExpenseGroupPropertyList
 * //             { // ExpenseGroupProperty
 * //               Types: [ // StringList
 * //                 "STRING_VALUE",
 * //               ],
 * //               Id: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       LineItemGroups: [ // LineItemGroupList
 * //         { // LineItemGroup
 * //           LineItemGroupIndex: Number("int"),
 * //           LineItems: [ // LineItemList
 * //             { // LineItemFields
 * //               LineItemExpenseFields: [
 * //                 {
 * //                   Type: {
 * //                     Text: "STRING_VALUE",
 * //                     Confidence: Number("float"),
 * //                   },
 * //                   LabelDetection: {
 * //                     Text: "STRING_VALUE",
 * //                     Geometry: {
 * //                       BoundingBox: {
 * //                         Width: Number("float"),
 * //                         Height: Number("float"),
 * //                         Left: Number("float"),
 * //                         Top: Number("float"),
 * //                       },
 * //                       Polygon: [
 * //                         {
 * //                           X: Number("float"),
 * //                           Y: Number("float"),
 * //                         },
 * //                       ],
 * //                     },
 * //                     Confidence: Number("float"),
 * //                   },
 * //                   ValueDetection: {
 * //                     Text: "STRING_VALUE",
 * //                     Geometry: {
 * //                       BoundingBox: {
 * //                         Width: Number("float"),
 * //                         Height: Number("float"),
 * //                         Left: Number("float"),
 * //                         Top: Number("float"),
 * //                       },
 * //                       Polygon: [
 * //                         {
 * //                           X: Number("float"),
 * //                           Y: Number("float"),
 * //                         },
 * //                       ],
 * //                     },
 * //                     Confidence: Number("float"),
 * //                   },
 * //                   PageNumber: Number("int"),
 * //                   Currency: {
 * //                     Code: "STRING_VALUE",
 * //                     Confidence: Number("float"),
 * //                   },
 * //                   GroupProperties: [
 * //                     {
 * //                       Types: [
 * //                         "STRING_VALUE",
 * //                       ],
 * //                       Id: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       Blocks: [ // BlockList
 * //         { // Block
 * //           BlockType: "KEY_VALUE_SET" || "PAGE" || "LINE" || "WORD" || "TABLE" || "CELL" || "SELECTION_ELEMENT" || "MERGED_CELL" || "TITLE" || "QUERY" || "QUERY_RESULT" || "SIGNATURE" || "TABLE_TITLE" || "TABLE_FOOTER" || "LAYOUT_TEXT" || "LAYOUT_TITLE" || "LAYOUT_HEADER" || "LAYOUT_FOOTER" || "LAYOUT_SECTION_HEADER" || "LAYOUT_PAGE_NUMBER" || "LAYOUT_LIST" || "LAYOUT_FIGURE" || "LAYOUT_TABLE" || "LAYOUT_KEY_VALUE",
 * //           Confidence: Number("float"),
 * //           Text: "STRING_VALUE",
 * //           TextType: "HANDWRITING" || "PRINTED",
 * //           RowIndex: Number("int"),
 * //           ColumnIndex: Number("int"),
 * //           RowSpan: Number("int"),
 * //           ColumnSpan: Number("int"),
 * //           Geometry: "<Geometry>",
 * //           Id: "STRING_VALUE",
 * //           Relationships: [ // RelationshipList
 * //             { // Relationship
 * //               Type: "VALUE" || "CHILD" || "COMPLEX_FEATURES" || "MERGED_CELL" || "TITLE" || "ANSWER" || "TABLE" || "TABLE_TITLE" || "TABLE_FOOTER",
 * //               Ids: [ // IdList
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //           EntityTypes: [ // EntityTypes
 * //             "KEY" || "VALUE" || "COLUMN_HEADER" || "TABLE_TITLE" || "TABLE_FOOTER" || "TABLE_SECTION_TITLE" || "TABLE_SUMMARY" || "STRUCTURED_TABLE" || "SEMI_STRUCTURED_TABLE",
 * //           ],
 * //           SelectionStatus: "SELECTED" || "NOT_SELECTED",
 * //           Page: Number("int"),
 * //           Query: { // Query
 * //             Text: "STRING_VALUE", // required
 * //             Alias: "STRING_VALUE",
 * //             Pages: [ // QueryPages
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   Warnings: [ // Warnings
 * //     { // Warning
 * //       ErrorCode: "STRING_VALUE",
 * //       Pages: [ // Pages
 * //         Number("int"),
 * //       ],
 * //     },
 * //   ],
 * //   StatusMessage: "STRING_VALUE",
 * //   AnalyzeExpenseModelVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetExpenseAnalysisCommandInput - {@link GetExpenseAnalysisCommandInput}
 * @returns {@link GetExpenseAnalysisCommandOutput}
 * @see {@link GetExpenseAnalysisCommandInput} for command's `input` shape.
 * @see {@link GetExpenseAnalysisCommandOutput} for command's `response` shape.
 * @see {@link TextractClientResolvedConfig | config} for TextractClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You aren't authorized to perform the action. Use the Amazon Resource Name (ARN)
 *             of an authorized user or IAM role to perform the operation.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Textract experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidJobIdException} (client fault)
 *  <p>An invalid job identifier was passed to an asynchronous analysis operation.</p>
 *
 * @throws {@link InvalidKMSKeyException} (client fault)
 *  <p> Indicates you do not have decrypt permissions with the KMS key entered, or the KMS key
 *         was entered incorrectly. </p>
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
 * @throws {@link TextractServiceException}
 * <p>Base exception class for all service exceptions from Textract service.</p>
 *
 */
export class GetExpenseAnalysisCommand extends $Command<
  GetExpenseAnalysisCommandInput,
  GetExpenseAnalysisCommandOutput,
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
  constructor(readonly input: GetExpenseAnalysisCommandInput) {
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
  ): Handler<GetExpenseAnalysisCommandInput, GetExpenseAnalysisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetExpenseAnalysisCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TextractClient";
    const commandName = "GetExpenseAnalysisCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Textract",
        operation: "GetExpenseAnalysis",
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
  private serialize(input: GetExpenseAnalysisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetExpenseAnalysisCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetExpenseAnalysisCommandOutput> {
    return de_GetExpenseAnalysisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
