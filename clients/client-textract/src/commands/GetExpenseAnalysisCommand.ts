// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetExpenseAnalysisRequest, GetExpenseAnalysisResponse } from "../models/models_0";
import { GetExpenseAnalysis$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets the results for an Amazon Textract asynchronous operation that analyzes invoices and receipts. Amazon Textract finds contact information, items purchased, and vendor name, from input invoices and receipts.
 *
 * You start asynchronous invoice/receipt analysis by calling StartExpenseAnalysis, which returns a job identifier (`JobId`). Upon completion of the invoice/receipt analysis, Amazon Textract publishes the completion status to the Amazon Simple Notification Service (Amazon SNS) topic. This topic must be registered in the initial call to `StartExpenseAnalysis`. To get the results of the invoice/receipt analysis operation, first ensure that the status value published to the Amazon SNS topic is `SUCCEEDED`. If so, call `GetExpenseAnalysis`, and pass the job identifier (`JobId`) from the initial call to `StartExpenseAnalysis`.
 *
 * Use the MaxResults parameter to limit the number of blocks that are returned. If there are more results than specified in `MaxResults`, the value of `NextToken` in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call `GetExpenseAnalysis`, and populate the `NextToken` request parameter with the token value that's returned from the previous call to `GetExpenseAnalysis`.
 *
 * For more information, see [Analyzing Invoices and Receipts](https://docs.aws.amazon.com/textract/latest/dg/invoices-receipts.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, GetExpenseAnalysisCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, GetExpenseAnalysisCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * // import type { TextractClientConfig } from "@aws-sdk/client-textract";
 * const config = {}; // type is TextractClientConfig
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
 * //               RotationAngle: Number("float"),
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
 * //               RotationAngle: Number("float"),
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
 * //                       RotationAngle: Number("float"),
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
 * //                       RotationAngle: Number("float"),
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
 *
 * You aren't authorized to perform the action. Use the Amazon Resource Name (ARN) of an authorized user or IAM role to perform the operation.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Amazon Textract experienced a service issue. Try your call again.
 *
 * @throws {@link InvalidJobIdException} (client fault)
 *
 * An invalid job identifier was passed to an asynchronous analysis operation.
 *
 * @throws {@link InvalidKMSKeyException} (client fault)
 *
 * Indicates you do not have decrypt permissions with the KMS key entered, or the KMS key was entered incorrectly.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * An input parameter violated a constraint. For example, in synchronous operations, an `InvalidParameterException` exception occurs when neither of the `S3Object` or `Bytes` values are supplied in the `Document` request parameter. Validate your parameter before calling the API operation again.
 *
 * @throws {@link InvalidS3ObjectException} (client fault)
 *
 * Amazon Textract is unable to access the S3 object that's specified in the request. for more information, [Configure Access to Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html) For troubleshooting information, see [Troubleshooting Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/troubleshooting.html)
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *
 * The number of requests exceeded your throughput limit. If you want to increase this limit, contact Amazon Textract.
 *
 * @throws {@link ThrottlingException} (server fault)
 *
 * Amazon Textract is temporarily unable to process the request. Try your call again.
 *
 * @throws {@link TextractServiceException}
 *
 * Base exception class for all service exceptions from Textract service.
 *
 * @public
 */
export class GetExpenseAnalysisCommand extends command<GetExpenseAnalysisCommandInput, GetExpenseAnalysisCommandOutput>(
  _ep0,
  _mw0,
  "GetExpenseAnalysis",
  GetExpenseAnalysis$
) {
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
