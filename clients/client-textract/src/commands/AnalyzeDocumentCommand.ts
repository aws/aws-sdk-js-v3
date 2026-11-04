// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AnalyzeDocumentRequest, AnalyzeDocumentResponse } from "../models/models_0";
import { AnalyzeDocument$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Analyzes an input document for relationships between detected items.
 *
 * The types of information returned are as follows:
 *
 * - Form data (key-value pairs). The related information is returned in two Block objects, each of type `KEY_VALUE_SET`: a KEY `Block` object and a VALUE `Block` object. For example, *Name: Ana Silva Carolina* contains a key and value. *Name:* is the key. *Ana Silva Carolina* is the value.
 * - Table and table cell data. A TABLE `Block` object contains information about a detected table. A CELL `Block` object is returned for each cell in a table.
 * - Lines and words of text. A LINE `Block` object contains one or more WORD `Block` objects. All lines and words that are detected in the document are returned (including text that doesn't have a relationship with the value of `FeatureTypes`).
 * - Signatures. A SIGNATURE `Block` object contains the location information of a signature in a document. If used in conjunction with forms or tables, a signature can be given a Key-Value pairing or be detected in the cell of a table.
 * - Query. A QUERY Block object contains the query text, alias and link to the associated Query results block object.
 * - Query Result. A QUERY_RESULT Block object contains the answer to the query and an ID that connects it to the query asked. This Block also contains a confidence score.
 *
 * Selection elements such as check boxes and option buttons (radio buttons) can be detected in form data and in tables. A SELECTION_ELEMENT `Block` object contains information about a selection element, including the selection status.
 *
 * You can choose which type of analysis to perform by specifying the `FeatureTypes` list.
 *
 * The output is returned in a list of `Block` objects.
 *
 * `AnalyzeDocument` is a synchronous operation. To analyze documents asynchronously, use StartDocumentAnalysis.
 *
 * For more information, see [Document Text Analysis](https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, AnalyzeDocumentCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, AnalyzeDocumentCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * // import type { TextractClientConfig } from "@aws-sdk/client-textract";
 * const config = {}; // type is TextractClientConfig
 * const client = new TextractClient(config);
 * const input = { // AnalyzeDocumentRequest
 *   Document: { // Document
 *     Bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
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
 * @throws {@link HumanLoopQuotaExceededException} (client fault)
 *
 * Indicates you have exceeded the maximum number of active human in the loop workflows available
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
export class AnalyzeDocumentCommand extends command<AnalyzeDocumentCommandInput, AnalyzeDocumentCommandOutput>(
  _ep0,
  _mw0,
  "AnalyzeDocument",
  AnalyzeDocument$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AnalyzeDocumentRequest;
      output: AnalyzeDocumentResponse;
    };
    sdk: {
      input: AnalyzeDocumentCommandInput;
      output: AnalyzeDocumentCommandOutput;
    };
  };
}
