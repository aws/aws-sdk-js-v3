// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AnalyzeIDRequest, AnalyzeIDResponse } from "../models/models_0";
import { de_AnalyzeIDCommand, se_AnalyzeIDCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AnalyzeIDCommand}.
 */
export interface AnalyzeIDCommandInput extends AnalyzeIDRequest {}
/**
 * @public
 *
 * The output of {@link AnalyzeIDCommand}.
 */
export interface AnalyzeIDCommandOutput extends AnalyzeIDResponse, __MetadataBearer {}

/**
 * <p>Analyzes identity documents for relevant information. This information is extracted and
 *          returned as <code>IdentityDocumentFields</code>, which records both the normalized field
 *          and value of the extracted text. Unlike other Amazon Textract operations,
 *             <code>AnalyzeID</code> doesn't return any Geometry data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, AnalyzeIDCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, AnalyzeIDCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * const client = new TextractClient(config);
 * const input = { // AnalyzeIDRequest
 *   DocumentPages: [ // DocumentPages // required
 *     { // Document
 *       Bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *       S3Object: { // S3Object
 *         Bucket: "STRING_VALUE",
 *         Name: "STRING_VALUE",
 *         Version: "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new AnalyzeIDCommand(input);
 * const response = await client.send(command);
 * // { // AnalyzeIDResponse
 * //   IdentityDocuments: [ // IdentityDocumentList
 * //     { // IdentityDocument
 * //       DocumentIndex: Number("int"),
 * //       IdentityDocumentFields: [ // IdentityDocumentFieldList
 * //         { // IdentityDocumentField
 * //           Type: { // AnalyzeIDDetections
 * //             Text: "STRING_VALUE", // required
 * //             NormalizedValue: { // NormalizedValue
 * //               Value: "STRING_VALUE",
 * //               ValueType: "DATE",
 * //             },
 * //             Confidence: Number("float"),
 * //           },
 * //           ValueDetection: {
 * //             Text: "STRING_VALUE", // required
 * //             NormalizedValue: {
 * //               Value: "STRING_VALUE",
 * //               ValueType: "DATE",
 * //             },
 * //             Confidence: Number("float"),
 * //           },
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
 * //           Geometry: { // Geometry
 * //             BoundingBox: { // BoundingBox
 * //               Width: Number("float"),
 * //               Height: Number("float"),
 * //               Left: Number("float"),
 * //               Top: Number("float"),
 * //             },
 * //             Polygon: [ // Polygon
 * //               { // Point
 * //                 X: Number("float"),
 * //                 Y: Number("float"),
 * //               },
 * //             ],
 * //           },
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
 * //   DocumentMetadata: { // DocumentMetadata
 * //     Pages: Number("int"),
 * //   },
 * //   AnalyzeIDModelVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AnalyzeIDCommandInput - {@link AnalyzeIDCommandInput}
 * @returns {@link AnalyzeIDCommandOutput}
 * @see {@link AnalyzeIDCommandInput} for command's `input` shape.
 * @see {@link AnalyzeIDCommandOutput} for command's `response` shape.
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
 * @public
 */
export class AnalyzeIDCommand extends $Command
  .classBuilder<
    AnalyzeIDCommandInput,
    AnalyzeIDCommandOutput,
    TextractClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: TextractClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Textract", "AnalyzeID", {})
  .n("TextractClient", "AnalyzeIDCommand")
  .f(void 0, void 0)
  .ser(se_AnalyzeIDCommand)
  .de(de_AnalyzeIDCommand)
  .build() {}
