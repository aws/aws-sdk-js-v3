// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AnalyzeExpenseRequest, AnalyzeExpenseResponse } from "../models/models_0";
import { AnalyzeExpense$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AnalyzeExpenseCommand}.
 */
export interface AnalyzeExpenseCommandInput extends AnalyzeExpenseRequest {}
/**
 * @public
 *
 * The output of {@link AnalyzeExpenseCommand}.
 */
export interface AnalyzeExpenseCommandOutput extends AnalyzeExpenseResponse, __MetadataBearer {}

/**
 * `AnalyzeExpense` synchronously analyzes an input document for financially related relationships between text.
 *
 * Information is returned as `ExpenseDocuments` and seperated as follows:
 *
 * - `LineItemGroups`- A data set containing `LineItems` which store information about the lines of text, such as an item purchased and its price on a receipt.
 * - `SummaryFields`- Contains all other information a receipt, such as header information or the vendors name.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, AnalyzeExpenseCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, AnalyzeExpenseCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * // import type { TextractClientConfig } from "@aws-sdk/client-textract";
 * const config = {}; // type is TextractClientConfig
 * const client = new TextractClient(config);
 * const input = { // AnalyzeExpenseRequest
 *   Document: { // Document
 *     Bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     S3Object: { // S3Object
 *       Bucket: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *       Version: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new AnalyzeExpenseCommand(input);
 * const response = await client.send(command);
 * // { // AnalyzeExpenseResponse
 * //   DocumentMetadata: { // DocumentMetadata
 * //     Pages: Number("int"),
 * //   },
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
 * // };
 *
 * ```
 *
 * @param AnalyzeExpenseCommandInput - {@link AnalyzeExpenseCommandInput}
 * @returns {@link AnalyzeExpenseCommandOutput}
 * @see {@link AnalyzeExpenseCommandInput} for command's `input` shape.
 * @see {@link AnalyzeExpenseCommandOutput} for command's `response` shape.
 * @see {@link TextractClientResolvedConfig | config} for TextractClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You aren't authorized to perform the action. Use the Amazon Resource Name (ARN) of an authorized user or IAM role to perform the operation.
 *
 * @throws {@link BadDocumentException} (client fault)
 *
 * Amazon Textract isn't able to read the document. For more information on the document limits in Amazon Textract, see [Hard limits](https://docs.aws.amazon.com/textract/latest/dg/limits.html).
 *
 * @throws {@link DocumentTooLargeException} (client fault)
 *
 * The document can't be processed because it's too large. The maximum document size for synchronous operations 10 MB. The maximum document size for asynchronous operations is 500 MB for PDF files.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Amazon Textract experienced a service issue. Try your call again.
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
 * @throws {@link UnsupportedDocumentException} (client fault)
 *
 * The format of the input document isn't supported. Documents for operations can be in PNG, JPEG, PDF, or TIFF format.
 *
 * @throws {@link TextractServiceException}
 *
 * Base exception class for all service exceptions from Textract service.
 *
 * @public
 */
export class AnalyzeExpenseCommand extends command<AnalyzeExpenseCommandInput, AnalyzeExpenseCommandOutput>(
  _ep0,
  _mw0,
  "AnalyzeExpense",
  AnalyzeExpense$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AnalyzeExpenseRequest;
      output: AnalyzeExpenseResponse;
    };
    sdk: {
      input: AnalyzeExpenseCommandInput;
      output: AnalyzeExpenseCommandOutput;
    };
  };
}
