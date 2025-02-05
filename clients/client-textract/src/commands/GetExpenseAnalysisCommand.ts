// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetExpenseAnalysisRequest, GetExpenseAnalysisResponse } from "../models/models_0";
import { de_GetExpenseAnalysisCommand, se_GetExpenseAnalysisCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
 */
export class GetExpenseAnalysisCommand extends $Command
  .classBuilder<
    GetExpenseAnalysisCommandInput,
    GetExpenseAnalysisCommandOutput,
    TextractClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TextractClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Textract", "GetExpenseAnalysis", {})
  .n("TextractClient", "GetExpenseAnalysisCommand")
  .f(void 0, void 0)
  .ser(se_GetExpenseAnalysisCommand)
  .de(de_GetExpenseAnalysisCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetExpenseAnalysisRequest;
      output: GetExpenseAnalysisResponse;
    };
    sdk: {
      input: GetExpenseAnalysisCommandInput;
      output: GetExpenseAnalysisCommandOutput;
    };
  };
}
