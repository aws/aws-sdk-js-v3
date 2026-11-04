// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDocumentTextDetectionRequest, GetDocumentTextDetectionResponse } from "../models/models_0";
import { GetDocumentTextDetection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDocumentTextDetectionCommand}.
 */
export interface GetDocumentTextDetectionCommandInput extends GetDocumentTextDetectionRequest {}
/**
 * @public
 *
 * The output of {@link GetDocumentTextDetectionCommand}.
 */
export interface GetDocumentTextDetectionCommandOutput extends GetDocumentTextDetectionResponse, __MetadataBearer {}

/**
 * Gets the results for an Amazon Textract asynchronous operation that detects text in a document. Amazon Textract can detect lines of text and the words that make up a line of text.
 *
 * You start asynchronous text detection by calling StartDocumentTextDetection, which returns a job identifier (`JobId`). When the text detection operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to `StartDocumentTextDetection`. To get the results of the text-detection operation, first check that the status value published to the Amazon SNS topic is `SUCCEEDED`. If so, call `GetDocumentTextDetection`, and pass the job identifier (`JobId`) from the initial call to `StartDocumentTextDetection`.
 *
 * `GetDocumentTextDetection` returns an array of Block objects.
 *
 * Each document page has as an associated `Block` of type PAGE. Each PAGE `Block` object is the parent of LINE `Block` objects that represent the lines of detected text on a page. A LINE `Block` object is a parent for each word that makes up the line. Words are represented by `Block` objects of type WORD.
 *
 * Use the MaxResults parameter to limit the number of blocks that are returned. If there are more results than specified in `MaxResults`, the value of `NextToken` in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call `GetDocumentTextDetection`, and populate the `NextToken` request parameter with the token value that's returned from the previous call to `GetDocumentTextDetection`.
 *
 * For more information, see [Document Text Detection](https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, GetDocumentTextDetectionCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, GetDocumentTextDetectionCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * // import type { TextractClientConfig } from "@aws-sdk/client-textract";
 * const config = {}; // type is TextractClientConfig
 * const client = new TextractClient(config);
 * const input = { // GetDocumentTextDetectionRequest
 *   JobId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetDocumentTextDetectionCommand(input);
 * const response = await client.send(command);
 * // { // GetDocumentTextDetectionResponse
 * //   DocumentMetadata: { // DocumentMetadata
 * //     Pages: Number("int"),
 * //   },
 * //   JobStatus: "IN_PROGRESS" || "SUCCEEDED" || "FAILED" || "PARTIAL_SUCCESS",
 * //   NextToken: "STRING_VALUE",
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
 * //         RotationAngle: Number("float"),
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
 * //   Warnings: [ // Warnings
 * //     { // Warning
 * //       ErrorCode: "STRING_VALUE",
 * //       Pages: [ // Pages
 * //         Number("int"),
 * //       ],
 * //     },
 * //   ],
 * //   StatusMessage: "STRING_VALUE",
 * //   DetectDocumentTextModelVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDocumentTextDetectionCommandInput - {@link GetDocumentTextDetectionCommandInput}
 * @returns {@link GetDocumentTextDetectionCommandOutput}
 * @see {@link GetDocumentTextDetectionCommandInput} for command's `input` shape.
 * @see {@link GetDocumentTextDetectionCommandOutput} for command's `response` shape.
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
export class GetDocumentTextDetectionCommand extends command<GetDocumentTextDetectionCommandInput, GetDocumentTextDetectionCommandOutput>(
  _ep0,
  _mw0,
  "GetDocumentTextDetection",
  GetDocumentTextDetection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDocumentTextDetectionRequest;
      output: GetDocumentTextDetectionResponse;
    };
    sdk: {
      input: GetDocumentTextDetectionCommandInput;
      output: GetDocumentTextDetectionCommandOutput;
    };
  };
}
