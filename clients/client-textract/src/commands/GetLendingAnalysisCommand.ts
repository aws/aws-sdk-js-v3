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

import { GetLendingAnalysisRequest, GetLendingAnalysisResponse } from "../models/models_0";
import { de_GetLendingAnalysisCommand, se_GetLendingAnalysisCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetLendingAnalysisCommand}.
 */
export interface GetLendingAnalysisCommandInput extends GetLendingAnalysisRequest {}
/**
 * @public
 *
 * The output of {@link GetLendingAnalysisCommand}.
 */
export interface GetLendingAnalysisCommandOutput extends GetLendingAnalysisResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the results for an Amazon Textract asynchronous operation that analyzes text in a
 *             lending document. </p>
 *          <p>You start asynchronous text analysis by calling <code>StartLendingAnalysis</code>,
 *             which returns a job identifier (<code>JobId</code>). When the text analysis operation
 *             finishes, Amazon Textract publishes a completion status to the Amazon Simple
 *             Notification Service (Amazon SNS) topic that's registered in the initial call to
 *                 <code>StartLendingAnalysis</code>. </p>
 *          <p>To get the results of the text analysis operation, first check that the status value
 *             published to the Amazon SNS topic is SUCCEEDED. If so, call GetLendingAnalysis, and pass
 *             the job identifier (<code>JobId</code>) from the initial call to
 *                 <code>StartLendingAnalysis</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, GetLendingAnalysisCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, GetLendingAnalysisCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * const client = new TextractClient(config);
 * const input = { // GetLendingAnalysisRequest
 *   JobId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetLendingAnalysisCommand(input);
 * const response = await client.send(command);
 * // { // GetLendingAnalysisResponse
 * //   DocumentMetadata: { // DocumentMetadata
 * //     Pages: Number("int"),
 * //   },
 * //   JobStatus: "IN_PROGRESS" || "SUCCEEDED" || "FAILED" || "PARTIAL_SUCCESS",
 * //   NextToken: "STRING_VALUE",
 * //   Results: [ // LendingResultList
 * //     { // LendingResult
 * //       Page: Number("int"),
 * //       PageClassification: { // PageClassification
 * //         PageType: [ // PredictionList // required
 * //           { // Prediction
 * //             Value: "STRING_VALUE",
 * //             Confidence: Number("float"),
 * //           },
 * //         ],
 * //         PageNumber: [ // required
 * //           {
 * //             Value: "STRING_VALUE",
 * //             Confidence: Number("float"),
 * //           },
 * //         ],
 * //       },
 * //       Extractions: [ // ExtractionList
 * //         { // Extraction
 * //           LendingDocument: { // LendingDocument
 * //             LendingFields: [ // LendingFieldList
 * //               { // LendingField
 * //                 Type: "STRING_VALUE",
 * //                 KeyDetection: { // LendingDetection
 * //                   Text: "STRING_VALUE",
 * //                   SelectionStatus: "SELECTED" || "NOT_SELECTED",
 * //                   Geometry: { // Geometry
 * //                     BoundingBox: { // BoundingBox
 * //                       Width: Number("float"),
 * //                       Height: Number("float"),
 * //                       Left: Number("float"),
 * //                       Top: Number("float"),
 * //                     },
 * //                     Polygon: [ // Polygon
 * //                       { // Point
 * //                         X: Number("float"),
 * //                         Y: Number("float"),
 * //                       },
 * //                     ],
 * //                   },
 * //                   Confidence: Number("float"),
 * //                 },
 * //                 ValueDetections: [ // LendingDetectionList
 * //                   {
 * //                     Text: "STRING_VALUE",
 * //                     SelectionStatus: "SELECTED" || "NOT_SELECTED",
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
 * //                 ],
 * //               },
 * //             ],
 * //             SignatureDetections: [ // SignatureDetectionList
 * //               { // SignatureDetection
 * //                 Confidence: Number("float"),
 * //                 Geometry: "<Geometry>",
 * //               },
 * //             ],
 * //           },
 * //           ExpenseDocument: { // ExpenseDocument
 * //             ExpenseIndex: Number("int"),
 * //             SummaryFields: [ // ExpenseFieldList
 * //               { // ExpenseField
 * //                 Type: { // ExpenseType
 * //                   Text: "STRING_VALUE",
 * //                   Confidence: Number("float"),
 * //                 },
 * //                 LabelDetection: { // ExpenseDetection
 * //                   Text: "STRING_VALUE",
 * //                   Geometry: "<Geometry>",
 * //                   Confidence: Number("float"),
 * //                 },
 * //                 ValueDetection: {
 * //                   Text: "STRING_VALUE",
 * //                   Geometry: "<Geometry>",
 * //                   Confidence: Number("float"),
 * //                 },
 * //                 PageNumber: Number("int"),
 * //                 Currency: { // ExpenseCurrency
 * //                   Code: "STRING_VALUE",
 * //                   Confidence: Number("float"),
 * //                 },
 * //                 GroupProperties: [ // ExpenseGroupPropertyList
 * //                   { // ExpenseGroupProperty
 * //                     Types: [ // StringList
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     Id: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //             LineItemGroups: [ // LineItemGroupList
 * //               { // LineItemGroup
 * //                 LineItemGroupIndex: Number("int"),
 * //                 LineItems: [ // LineItemList
 * //                   { // LineItemFields
 * //                     LineItemExpenseFields: [
 * //                       {
 * //                         Type: {
 * //                           Text: "STRING_VALUE",
 * //                           Confidence: Number("float"),
 * //                         },
 * //                         LabelDetection: {
 * //                           Text: "STRING_VALUE",
 * //                           Geometry: "<Geometry>",
 * //                           Confidence: Number("float"),
 * //                         },
 * //                         ValueDetection: {
 * //                           Text: "STRING_VALUE",
 * //                           Geometry: "<Geometry>",
 * //                           Confidence: Number("float"),
 * //                         },
 * //                         PageNumber: Number("int"),
 * //                         Currency: {
 * //                           Code: "STRING_VALUE",
 * //                           Confidence: Number("float"),
 * //                         },
 * //                         GroupProperties: [
 * //                           {
 * //                             Types: [
 * //                               "STRING_VALUE",
 * //                             ],
 * //                             Id: "STRING_VALUE",
 * //                           },
 * //                         ],
 * //                       },
 * //                     ],
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //             Blocks: [ // BlockList
 * //               { // Block
 * //                 BlockType: "KEY_VALUE_SET" || "PAGE" || "LINE" || "WORD" || "TABLE" || "CELL" || "SELECTION_ELEMENT" || "MERGED_CELL" || "TITLE" || "QUERY" || "QUERY_RESULT" || "SIGNATURE" || "TABLE_TITLE" || "TABLE_FOOTER",
 * //                 Confidence: Number("float"),
 * //                 Text: "STRING_VALUE",
 * //                 TextType: "HANDWRITING" || "PRINTED",
 * //                 RowIndex: Number("int"),
 * //                 ColumnIndex: Number("int"),
 * //                 RowSpan: Number("int"),
 * //                 ColumnSpan: Number("int"),
 * //                 Geometry: "<Geometry>",
 * //                 Id: "STRING_VALUE",
 * //                 Relationships: [ // RelationshipList
 * //                   { // Relationship
 * //                     Type: "VALUE" || "CHILD" || "COMPLEX_FEATURES" || "MERGED_CELL" || "TITLE" || "ANSWER" || "TABLE" || "TABLE_TITLE" || "TABLE_FOOTER",
 * //                     Ids: [ // IdList
 * //                       "STRING_VALUE",
 * //                     ],
 * //                   },
 * //                 ],
 * //                 EntityTypes: [ // EntityTypes
 * //                   "KEY" || "VALUE" || "COLUMN_HEADER" || "TABLE_TITLE" || "TABLE_FOOTER" || "TABLE_SECTION_TITLE" || "TABLE_SUMMARY" || "STRUCTURED_TABLE" || "SEMI_STRUCTURED_TABLE",
 * //                 ],
 * //                 SelectionStatus: "SELECTED" || "NOT_SELECTED",
 * //                 Page: Number("int"),
 * //                 Query: { // Query
 * //                   Text: "STRING_VALUE", // required
 * //                   Alias: "STRING_VALUE",
 * //                   Pages: [ // QueryPages
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //           IdentityDocument: { // IdentityDocument
 * //             DocumentIndex: Number("int"),
 * //             IdentityDocumentFields: [ // IdentityDocumentFieldList
 * //               { // IdentityDocumentField
 * //                 Type: { // AnalyzeIDDetections
 * //                   Text: "STRING_VALUE", // required
 * //                   NormalizedValue: { // NormalizedValue
 * //                     Value: "STRING_VALUE",
 * //                     ValueType: "DATE",
 * //                   },
 * //                   Confidence: Number("float"),
 * //                 },
 * //                 ValueDetection: {
 * //                   Text: "STRING_VALUE", // required
 * //                   NormalizedValue: {
 * //                     Value: "STRING_VALUE",
 * //                     ValueType: "DATE",
 * //                   },
 * //                   Confidence: Number("float"),
 * //                 },
 * //               },
 * //             ],
 * //             Blocks: [
 * //               {
 * //                 BlockType: "KEY_VALUE_SET" || "PAGE" || "LINE" || "WORD" || "TABLE" || "CELL" || "SELECTION_ELEMENT" || "MERGED_CELL" || "TITLE" || "QUERY" || "QUERY_RESULT" || "SIGNATURE" || "TABLE_TITLE" || "TABLE_FOOTER",
 * //                 Confidence: Number("float"),
 * //                 Text: "STRING_VALUE",
 * //                 TextType: "HANDWRITING" || "PRINTED",
 * //                 RowIndex: Number("int"),
 * //                 ColumnIndex: Number("int"),
 * //                 RowSpan: Number("int"),
 * //                 ColumnSpan: Number("int"),
 * //                 Geometry: "<Geometry>",
 * //                 Id: "STRING_VALUE",
 * //                 Relationships: [
 * //                   {
 * //                     Type: "VALUE" || "CHILD" || "COMPLEX_FEATURES" || "MERGED_CELL" || "TITLE" || "ANSWER" || "TABLE" || "TABLE_TITLE" || "TABLE_FOOTER",
 * //                     Ids: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                   },
 * //                 ],
 * //                 EntityTypes: [
 * //                   "KEY" || "VALUE" || "COLUMN_HEADER" || "TABLE_TITLE" || "TABLE_FOOTER" || "TABLE_SECTION_TITLE" || "TABLE_SUMMARY" || "STRUCTURED_TABLE" || "SEMI_STRUCTURED_TABLE",
 * //                 ],
 * //                 SelectionStatus: "SELECTED" || "NOT_SELECTED",
 * //                 Page: Number("int"),
 * //                 Query: {
 * //                   Text: "STRING_VALUE", // required
 * //                   Alias: "STRING_VALUE",
 * //                   Pages: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
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
 * //   AnalyzeLendingModelVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetLendingAnalysisCommandInput - {@link GetLendingAnalysisCommandInput}
 * @returns {@link GetLendingAnalysisCommandOutput}
 * @see {@link GetLendingAnalysisCommandInput} for command's `input` shape.
 * @see {@link GetLendingAnalysisCommandOutput} for command's `response` shape.
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
export class GetLendingAnalysisCommand extends $Command<
  GetLendingAnalysisCommandInput,
  GetLendingAnalysisCommandOutput,
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
  constructor(readonly input: GetLendingAnalysisCommandInput) {
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
  ): Handler<GetLendingAnalysisCommandInput, GetLendingAnalysisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLendingAnalysisCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TextractClient";
    const commandName = "GetLendingAnalysisCommand";
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
  private serialize(input: GetLendingAnalysisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetLendingAnalysisCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLendingAnalysisCommandOutput> {
    return de_GetLendingAnalysisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
