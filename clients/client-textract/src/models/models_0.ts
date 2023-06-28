// smithy-typescript generated code
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
} from "@smithy/smithy-client";

import { TextractServiceException as __BaseException } from "./TextractServiceException";

/**
 * @public
 * <p>You aren't authorized to perform the action. Use the Amazon Resource Name (ARN)
 *             of an authorized user or IAM role to perform the operation.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 * <p>The S3 bucket name and file name that identifies the document.</p>
 *          <p>The AWS Region for the S3 bucket that contains the document must match the Region that
 *          you use for Amazon Textract operations.</p>
 *          <p>For Amazon Textract to process a file in an S3 bucket, the user must have
 *          permission to access the S3 bucket and file.
 *
 *       </p>
 */
export interface S3Object {
  /**
   * <p>The name of the S3 bucket. Note that the # character is not valid in the file
   *          name.</p>
   */
  Bucket?: string;

  /**
   * <p>The file name of the input document. Synchronous operations can use image files that are
   *          in JPEG or PNG format. Asynchronous operations also support PDF and TIFF format files.</p>
   */
  Name?: string;

  /**
   * <p>If the bucket has versioning enabled, you can specify the object version. </p>
   */
  Version?: string;
}

/**
 * @public
 * <p>The input document, either as bytes or as an S3 object.</p>
 *          <p>You pass image bytes to an Amazon Textract API operation by using the <code>Bytes</code>
 *          property. For example, you would use the <code>Bytes</code> property to pass a document
 *          loaded from a local file system. Image bytes passed by using the <code>Bytes</code>
 *          property must be base64 encoded. Your code might not need to encode document file bytes if
 *          you're using an AWS SDK to call Amazon Textract API operations. </p>
 *          <p>You pass images stored in an S3 bucket to an Amazon Textract API operation by using the
 *             <code>S3Object</code> property. Documents stored in an S3 bucket don't need to be base64
 *          encoded.</p>
 *          <p>The AWS Region for the S3 bucket that contains the S3 object must match the AWS
 *          Region that you use for Amazon Textract operations.</p>
 *          <p>If you use the AWS CLI to call Amazon Textract operations, passing image bytes using
 *          the Bytes property isn't supported. You must first upload the document to an Amazon S3
 *          bucket, and then call the operation using the S3Object property.</p>
 *          <p>For Amazon Textract to process an S3 object, the user must have permission
 *          to access the S3 object. </p>
 */
export interface Document {
  /**
   * <p>A blob of base64-encoded document bytes. The maximum size of a document that's provided
   *          in a blob of bytes is 5 MB. The document bytes must be in PNG or JPEG format.</p>
   *          <p>If you're using an AWS SDK to call Amazon Textract, you might not need to base64-encode
   *          image bytes passed using the <code>Bytes</code> field. </p>
   */
  Bytes?: Uint8Array;

  /**
   * <p>Identifies an S3 object as the document source. The maximum size of a document that's
   *          stored in an S3 bucket is 5 MB.</p>
   */
  S3Object?: S3Object;
}

/**
 * @public
 * @enum
 */
export const FeatureType = {
  FORMS: "FORMS",
  QUERIES: "QUERIES",
  SIGNATURES: "SIGNATURES",
  TABLES: "TABLES",
} as const;

/**
 * @public
 */
export type FeatureType = (typeof FeatureType)[keyof typeof FeatureType];

/**
 * @public
 * @enum
 */
export const ContentClassifier = {
  FREE_OF_ADULT_CONTENT: "FreeOfAdultContent",
  FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION: "FreeOfPersonallyIdentifiableInformation",
} as const;

/**
 * @public
 */
export type ContentClassifier = (typeof ContentClassifier)[keyof typeof ContentClassifier];

/**
 * @public
 * <p>Allows you to set attributes of the image. Currently, you can declare an image as free
 *          of personally identifiable information and adult content. </p>
 */
export interface HumanLoopDataAttributes {
  /**
   * <p>Sets whether the input image is free of personally identifiable information or adult
   *          content.</p>
   */
  ContentClassifiers?: (ContentClassifier | string)[];
}

/**
 * @public
 * <p>Sets up the human review workflow the document will be sent to if one of the conditions
 *          is met. You can also set certain attributes of the image before review. </p>
 */
export interface HumanLoopConfig {
  /**
   * <p>The name of the human workflow used for this image. This should be kept unique within a
   *          region.</p>
   */
  HumanLoopName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition.</p>
   */
  FlowDefinitionArn: string | undefined;

  /**
   * <p>Sets attributes of the input data.</p>
   */
  DataAttributes?: HumanLoopDataAttributes;
}

/**
 * @public
 * <p>Each query contains the question you want to ask in the Text and the alias you want to associate.</p>
 */
export interface Query {
  /**
   * <p>Question that Amazon Textract will apply to the document. An example would be "What is the customer's SSN?"</p>
   */
  Text: string | undefined;

  /**
   * <p>Alias attached to the query, for ease of location.</p>
   */
  Alias?: string;

  /**
   * <p>Pages is a parameter that the user inputs to specify which pages to apply a query to. The following is a
   *          list of rules for using this parameter.</p>
   *          <ul>
   *             <li>
   *                <p>If a page is not specified, it is set to <code>["1"]</code> by default.</p>
   *             </li>
   *             <li>
   *                <p>The following characters are allowed in the parameter's string:
   *                <code>0 1 2 3 4 5 6 7 8 9 - *</code>. No whitespace is allowed.</p>
   *             </li>
   *             <li>
   *                <p>When using * to indicate all pages, it must be the only element in the list.</p>
   *             </li>
   *             <li>
   *                <p>You can use page intervals, such as <code>[“1-3”, “1-1”, “4-*”]</code>. Where <code>*</code> indicates last page of
   *                document.</p>
   *             </li>
   *             <li>
   *                <p>Specified pages must be greater than 0 and less than or equal to the number of pages in the document.</p>
   *             </li>
   *          </ul>
   */
  Pages?: string[];
}

/**
 * @public
 * <p></p>
 */
export interface QueriesConfig {
  /**
   * <p></p>
   */
  Queries: Query[] | undefined;
}

/**
 * @public
 */
export interface AnalyzeDocumentRequest {
  /**
   * <p>The input document as base64-encoded bytes or an Amazon S3 object. If you use the AWS
   *          CLI to call Amazon Textract operations, you can't pass image bytes. The document must be an
   *          image in JPEG, PNG, PDF, or TIFF format.</p>
   *          <p>If you're using an AWS SDK to call Amazon Textract, you might not need to base64-encode
   *          image bytes that are passed using the <code>Bytes</code> field. </p>
   */
  Document: Document | undefined;

  /**
   * <p>A list of the types of analysis to perform. Add TABLES to the list to return information
   *          about the tables that are detected in the input document. Add FORMS to return detected form
   *          data. Add SIGNATURES to return the locations of detected signatures. To perform both forms
   *          and table analysis, add TABLES and FORMS to <code>FeatureTypes</code>. To detect signatures within
   *          form data and table data, add SIGNATURES to either TABLES or FORMS.
   *          All lines and words detected in the document are included in the response (including text
   *          that isn't related to the value of <code>FeatureTypes</code>). </p>
   */
  FeatureTypes: (FeatureType | string)[] | undefined;

  /**
   * <p>Sets the configuration for the human in the loop workflow for analyzing
   *          documents.</p>
   */
  HumanLoopConfig?: HumanLoopConfig;

  /**
   * <p>Contains Queries and the alias for those Queries, as determined by the input. </p>
   */
  QueriesConfig?: QueriesConfig;
}

/**
 * @public
 * @enum
 */
export const BlockType = {
  CELL: "CELL",
  KEY_VALUE_SET: "KEY_VALUE_SET",
  LINE: "LINE",
  MERGED_CELL: "MERGED_CELL",
  PAGE: "PAGE",
  QUERY: "QUERY",
  QUERY_RESULT: "QUERY_RESULT",
  SELECTION_ELEMENT: "SELECTION_ELEMENT",
  SIGNATURE: "SIGNATURE",
  TABLE: "TABLE",
  TABLE_FOOTER: "TABLE_FOOTER",
  TABLE_TITLE: "TABLE_TITLE",
  TITLE: "TITLE",
  WORD: "WORD",
} as const;

/**
 * @public
 */
export type BlockType = (typeof BlockType)[keyof typeof BlockType];

/**
 * @public
 * @enum
 */
export const EntityType = {
  COLUMN_HEADER: "COLUMN_HEADER",
  KEY: "KEY",
  SEMI_STRUCTURED_TABLE: "SEMI_STRUCTURED_TABLE",
  STRUCTURED_TABLE: "STRUCTURED_TABLE",
  TABLE_FOOTER: "TABLE_FOOTER",
  TABLE_SECTION_TITLE: "TABLE_SECTION_TITLE",
  TABLE_SUMMARY: "TABLE_SUMMARY",
  TABLE_TITLE: "TABLE_TITLE",
  VALUE: "VALUE",
} as const;

/**
 * @public
 */
export type EntityType = (typeof EntityType)[keyof typeof EntityType];

/**
 * @public
 * <p>The bounding box around the detected page, text, key-value pair, table, table cell, or
 *          selection element on a document page. The <code>left</code> (x-coordinate) and
 *             <code>top</code> (y-coordinate) are coordinates that represent the top and left sides of
 *          the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p>
 *          <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall
 *          document page size. For example, if the input image is 700 x 200 pixels, and the top-left
 *          coordinate of the bounding box is 350 x 50 pixels, the API returns a <code>left</code>
 *          value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p>
 *          <p>The <code>width</code> and <code>height</code> values represent the dimensions of the
 *          bounding box as a ratio of the overall document page dimension. For example, if the
 *          document page size is 700 x 200 pixels, and the bounding box width is 70 pixels, the width
 *          returned is 0.1. </p>
 */
export interface BoundingBox {
  /**
   * <p>The width of the bounding box as a ratio of the overall document page
   *          width.</p>
   */
  Width?: number;

  /**
   * <p>The height of the bounding box as a ratio of the overall document page
   *          height.</p>
   */
  Height?: number;

  /**
   * <p>The left coordinate of the bounding box as a ratio of overall document page
   *          width.</p>
   */
  Left?: number;

  /**
   * <p>The top coordinate of the bounding box as a ratio of overall document page
   *          height.</p>
   */
  Top?: number;
}

/**
 * @public
 * <p>The X and Y coordinates of a point on a document page. The X and Y
 *          values that are returned are ratios of the overall document page size. For example, if the
 *          input document is 700 x 200 and the operation returns X=0.5 and Y=0.25, then the point is
 *          at the (350,50) pixel coordinate on the document page.</p>
 *          <p>An array of <code>Point</code> objects, <code>Polygon</code>, is returned
 *          by <a>DetectDocumentText</a>. <code>Polygon</code> represents a fine-grained
 *          polygon around detected text. For more information, see Geometry in the Amazon Textract
 *          Developer Guide. </p>
 */
export interface Point {
  /**
   * <p>The value of the X coordinate for a point on a <code>Polygon</code>.</p>
   */
  X?: number;

  /**
   * <p>The value of the Y coordinate for a point on a <code>Polygon</code>.</p>
   */
  Y?: number;
}

/**
 * @public
 * <p>Information about where the following items are located on a document page: detected
 *          page, text, key-value pairs, tables, table cells, and selection elements.</p>
 */
export interface Geometry {
  /**
   * <p>An axis-aligned coarse representation of the location of the recognized item on the
   *          document page.</p>
   */
  BoundingBox?: BoundingBox;

  /**
   * <p>Within the bounding box, a fine-grained polygon around the recognized item.</p>
   */
  Polygon?: Point[];
}

/**
 * @public
 * @enum
 */
export const RelationshipType = {
  ANSWER: "ANSWER",
  CHILD: "CHILD",
  COMPLEX_FEATURES: "COMPLEX_FEATURES",
  MERGED_CELL: "MERGED_CELL",
  TABLE: "TABLE",
  TABLE_FOOTER: "TABLE_FOOTER",
  TABLE_TITLE: "TABLE_TITLE",
  TITLE: "TITLE",
  VALUE: "VALUE",
} as const;

/**
 * @public
 */
export type RelationshipType = (typeof RelationshipType)[keyof typeof RelationshipType];

/**
 * @public
 * <p>Information about how blocks are related to each other. A <code>Block</code> object
 *          contains 0 or more <code>Relation</code> objects in a list, <code>Relationships</code>. For
 *          more information, see <a>Block</a>.</p>
 *          <p>The <code>Type</code> element provides the type of the relationship for all blocks in
 *          the <code>IDs</code> array. </p>
 */
export interface Relationship {
  /**
   * <p>The type of relationship between the blocks in the IDs array and the current block. The
   *          following list describes the relationship types that can be returned. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>VALUE</i> - A list that contains the ID of the VALUE block that's associated with the
   *                KEY of a key-value pair.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>CHILD</i> - A list of IDs that identify blocks found within the
   *                current block object. For example, WORD blocks have a CHILD relationship to the LINE
   *                block type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>MERGED_CELL</i> - A list of IDs that identify each of the
   *                MERGED_CELL block types in a table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>ANSWER</i> - A list that contains the ID of the QUERY_RESULT
   *                block that’s associated with the corresponding QUERY block. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>TABLE</i> - A list of IDs that identify associated TABLE block
   *                types. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>TABLE_TITLE</i> - A list that contains the ID for the TABLE_TITLE
   *                block type in a table. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>TABLE_FOOTER</i> - A list of IDs that identify the TABLE_FOOTER
   *                block types in a table. </p>
   *             </li>
   *          </ul>
   */
  Type?: RelationshipType | string;

  /**
   * <p>An
   *          array of IDs for related blocks. You can get the type of the relationship from the
   *             <code>Type</code> element.</p>
   */
  Ids?: string[];
}

/**
 * @public
 * @enum
 */
export const SelectionStatus = {
  NOT_SELECTED: "NOT_SELECTED",
  SELECTED: "SELECTED",
} as const;

/**
 * @public
 */
export type SelectionStatus = (typeof SelectionStatus)[keyof typeof SelectionStatus];

/**
 * @public
 * @enum
 */
export const TextType = {
  HANDWRITING: "HANDWRITING",
  PRINTED: "PRINTED",
} as const;

/**
 * @public
 */
export type TextType = (typeof TextType)[keyof typeof TextType];

/**
 * @public
 * <p>A <code>Block</code> represents items that are recognized in a document within a group
 *          of pixels close to each other. The information returned in a <code>Block</code> object
 *          depends on the type of operation. In text detection for documents (for example <a>DetectDocumentText</a>), you get information about the detected words and lines
 *          of text. In text analysis (for example <a>AnalyzeDocument</a>), you can also get
 *          information about the fields, tables, and selection elements that are detected in the
 *          document.</p>
 *          <p>An array of <code>Block</code> objects is returned by both synchronous and asynchronous
 *          operations. In synchronous operations, such as <a>DetectDocumentText</a>, the
 *          array of <code>Block</code> objects is the entire set of results. In asynchronous
 *          operations, such as <a>GetDocumentAnalysis</a>, the array is returned over one
 *          or more responses.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works.html">How Amazon Textract Works</a>.</p>
 */
export interface Block {
  /**
   * <p>The type of text item that's recognized. In operations for text detection, the following
   *          types are returned:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>PAGE</i> - Contains a list of the LINE <code>Block</code> objects
   *                that are detected on a document page.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>WORD</i> - A word detected on a document page. A word is one or
   *                more ISO basic Latin script characters that aren't separated by spaces.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>LINE</i> - A string of tab-delimited, contiguous words that are
   *                detected on a document page.</p>
   *             </li>
   *          </ul>
   *          <p>In text analysis operations, the following types are returned:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>PAGE</i> - Contains a list of child <code>Block</code> objects
   *                that are detected on a document page.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>KEY_VALUE_SET</i> - Stores the KEY and VALUE <code>Block</code>
   *                objects for linked text that's detected on a document page. Use the
   *                   <code>EntityType</code> field to determine if a KEY_VALUE_SET object is a KEY
   *                   <code>Block</code> object or a VALUE <code>Block</code> object. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>WORD</i> - A word that's detected on a document page. A word is
   *                one or more ISO basic Latin script characters that aren't separated by spaces.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>LINE</i> - A string of tab-delimited, contiguous words that are
   *                detected on a document page.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>TABLE</i> - A table that's detected on a document page. A table
   *                is grid-based information with two or more rows or columns, with a cell span of one
   *                row and one column each. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>TABLE_TITLE</i> - The title of a table. A title is typically a
   *                line of text above or below a table, or embedded as the first row of a table. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>TABLE_FOOTER</i> - The footer associated with a table. A footer
   *                is typically a line or lines of text below a table or embedded as the last row of a
   *                table. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>CELL</i> - A cell within a detected table. The cell is the parent
   *                of the block that contains the text in the cell.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>MERGED_CELL</i>  - A cell in a table whose content spans more than
   *                one row or column. The <code>Relationships</code> array for this cell contain data
   *                from individual cells.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>SELECTION_ELEMENT</i> - A selection element such as an option
   *                button (radio button) or a check box that's detected on a document page. Use the
   *                value of <code>SelectionStatus</code> to determine the status of the selection
   *                element.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>SIGNATURE</i> - The location and confidene score of a signature detected on a
   *                document page. Can be returned as part of a Key-Value pair or a detected cell.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>QUERY</i> - A question asked during the call of AnalyzeDocument. Contains an
   *                alias and an ID that attaches it to its answer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>QUERY_RESULT</i> - A response to a question asked during the call
   *                of analyze document. Comes with an alias and ID for ease of locating in a
   *                response. Also contains location and confidence score.</p>
   *             </li>
   *          </ul>
   */
  BlockType?: BlockType | string;

  /**
   * <p>The confidence score that Amazon Textract has in the accuracy of the recognized text and
   *          the accuracy of the geometry points around the recognized text.</p>
   */
  Confidence?: number;

  /**
   * <p>The word or line of text that's recognized by Amazon Textract. </p>
   */
  Text?: string;

  /**
   * <p>The kind of text that Amazon Textract has detected. Can check for handwritten text and
   *          printed text.</p>
   */
  TextType?: TextType | string;

  /**
   * <p>The row in which a table cell is located. The first row position is 1.
   *             <code>RowIndex</code> isn't returned by <code>DetectDocumentText</code> and
   *             <code>GetDocumentTextDetection</code>.</p>
   */
  RowIndex?: number;

  /**
   * <p>The column in which a table cell appears. The first column position is 1.
   *             <code>ColumnIndex</code> isn't returned by <code>DetectDocumentText</code> and
   *             <code>GetDocumentTextDetection</code>.</p>
   */
  ColumnIndex?: number;

  /**
   * <p>The number of rows that a table cell spans. <code>RowSpan</code> isn't returned by
   *             <code>DetectDocumentText</code> and <code>GetDocumentTextDetection</code>.</p>
   */
  RowSpan?: number;

  /**
   * <p>The number of columns that a table cell spans. <code>ColumnSpan</code> isn't returned by
   *             <code>DetectDocumentText</code> and <code>GetDocumentTextDetection</code>. </p>
   */
  ColumnSpan?: number;

  /**
   * <p>The location of the recognized text on the image. It includes an axis-aligned, coarse
   *          bounding box that surrounds the text, and a finer-grain polygon for more accurate spatial
   *          information. </p>
   */
  Geometry?: Geometry;

  /**
   * <p>The identifier for the recognized text. The identifier is only unique for a single
   *          operation. </p>
   */
  Id?: string;

  /**
   * <p>A list of relationship objects that describe how blocks are related to each other. For
   *          example, a LINE block object contains a CHILD relationship type with the WORD blocks that
   *          make up the line of text. There aren't Relationship objects in the list for relationships
   *          that don't exist, such as when the current block has no child blocks.</p>
   */
  Relationships?: Relationship[];

  /**
   * <p>The type of entity. </p>
   *          <p>The following entity types can be returned by FORMS analysis:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>KEY</i> - An identifier for a field on the document.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>VALUE</i> - The field text.</p>
   *             </li>
   *          </ul>
   *          <p>The following entity types can be returned by TABLES analysis:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>COLUMN_HEADER</i> - Identifies a cell that is a header of a column. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>TABLE_TITLE</i> - Identifies a cell that is a title within the
   *                table. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>TABLE_SECTION_TITLE</i> - Identifies a cell that is a title of a
   *                section within a table. A section title is a cell that typically spans an entire row
   *                above a section. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>TABLE_FOOTER</i> - Identifies a cell that is a footer of a table. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>TABLE_SUMMARY</i> - Identifies a summary cell of a table. A
   *                summary cell can be a row of a table or an additional, smaller table that contains
   *                summary information for another table. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>STRUCTURED_TABLE </i> - Identifies a table with column headers
   *                where the content of each row corresponds to the headers. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>SEMI_STRUCTURED_TABLE</i> - Identifies a non-structured table. </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>EntityTypes</code> isn't returned by <code>DetectDocumentText</code> and
   *             <code>GetDocumentTextDetection</code>.</p>
   */
  EntityTypes?: (EntityType | string)[];

  /**
   * <p>The selection status of a selection element, such as an option button or check box.
   *       </p>
   */
  SelectionStatus?: SelectionStatus | string;

  /**
   * <p>The page on which a block was detected. <code>Page</code> is returned by synchronous and
   *          asynchronous operations. Page values greater than 1 are only returned for multipage
   *          documents that are in PDF or TIFF format. A scanned image (JPEG/PNG) provided to an
   *          asynchronous operation, even if it contains multiple document pages, is considered a
   *          single-page document. This means that for scanned images the value of <code>Page</code> is
   *          always 1. Synchronous operations will also return a <code>Page</code> value of 1
   *          because every input document is considered to be a single-page document.</p>
   */
  Page?: number;

  /**
   * <p></p>
   */
  Query?: Query;
}

/**
 * @public
 * <p>Information about the input document.</p>
 */
export interface DocumentMetadata {
  /**
   * <p>The number of pages that are detected in the document.</p>
   */
  Pages?: number;
}

/**
 * @public
 * <p>Shows the results of the human in the loop evaluation. If there is no HumanLoopArn, the
 *          input did not trigger human review.</p>
 */
export interface HumanLoopActivationOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the HumanLoop created.</p>
   */
  HumanLoopArn?: string;

  /**
   * <p>Shows if and why human review was needed.</p>
   */
  HumanLoopActivationReasons?: string[];

  /**
   * <p>Shows the result of condition evaluations, including those conditions which activated a
   *          human review.</p>
   */
  HumanLoopActivationConditionsEvaluationResults?: __LazyJsonString | string;
}

/**
 * @public
 */
export interface AnalyzeDocumentResponse {
  /**
   * <p>Metadata about the analyzed document. An example is the number of pages.</p>
   */
  DocumentMetadata?: DocumentMetadata;

  /**
   * <p>The items that are detected and analyzed by <code>AnalyzeDocument</code>.</p>
   */
  Blocks?: Block[];

  /**
   * <p>Shows the results of the human in the loop evaluation.</p>
   */
  HumanLoopActivationOutput?: HumanLoopActivationOutput;

  /**
   * <p>The version of the model used to analyze the document.</p>
   */
  AnalyzeDocumentModelVersion?: string;
}

/**
 * @public
 * <p>Amazon Textract isn't able to read the document. For more information on the document
 *          limits in Amazon Textract, see <a>limits</a>.</p>
 */
export class BadDocumentException extends __BaseException {
  readonly name: "BadDocumentException" = "BadDocumentException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadDocumentException, __BaseException>) {
    super({
      name: "BadDocumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadDocumentException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 * <p>The document can't be processed because it's too large. The maximum document size for
 *          synchronous operations 10 MB. The maximum document size for asynchronous operations is 500
 *          MB for PDF files.</p>
 */
export class DocumentTooLargeException extends __BaseException {
  readonly name: "DocumentTooLargeException" = "DocumentTooLargeException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DocumentTooLargeException, __BaseException>) {
    super({
      name: "DocumentTooLargeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DocumentTooLargeException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 * <p>Indicates you have exceeded the maximum number of active human in the loop workflows available</p>
 */
export class HumanLoopQuotaExceededException extends __BaseException {
  readonly name: "HumanLoopQuotaExceededException" = "HumanLoopQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The resource type.</p>
   */
  ResourceType?: string;

  /**
   * <p>The quota code.</p>
   */
  QuotaCode?: string;

  /**
   * <p>The service code.</p>
   */
  ServiceCode?: string;

  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HumanLoopQuotaExceededException, __BaseException>) {
    super({
      name: "HumanLoopQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HumanLoopQuotaExceededException.prototype);
    this.ResourceType = opts.ResourceType;
    this.QuotaCode = opts.QuotaCode;
    this.ServiceCode = opts.ServiceCode;
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 * <p>Amazon Textract experienced a service issue. Try your call again.</p>
 */
export class InternalServerError extends __BaseException {
  readonly name: "InternalServerError" = "InternalServerError";
  readonly $fault: "server" = "server";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerError, __BaseException>) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerError.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 * <p>An input parameter violated a constraint. For example, in synchronous operations,
 *        an <code>InvalidParameterException</code> exception occurs
 *       when neither of the <code>S3Object</code> or <code>Bytes</code> values are supplied in the <code>Document</code>
 *       request parameter.
 *        Validate your parameter before calling the API operation again.</p>
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 * <p>Amazon Textract is unable to access the S3 object that's specified in the request.
 *          for more information, <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html">Configure Access to Amazon S3</a>
 *          For troubleshooting information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/troubleshooting.html">Troubleshooting Amazon S3</a>
 *          </p>
 */
export class InvalidS3ObjectException extends __BaseException {
  readonly name: "InvalidS3ObjectException" = "InvalidS3ObjectException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidS3ObjectException, __BaseException>) {
    super({
      name: "InvalidS3ObjectException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidS3ObjectException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 * <p>The number of requests exceeded your throughput limit. If you want to increase this limit,
 *          contact Amazon Textract.</p>
 */
export class ProvisionedThroughputExceededException extends __BaseException {
  readonly name: "ProvisionedThroughputExceededException" = "ProvisionedThroughputExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ProvisionedThroughputExceededException, __BaseException>) {
    super({
      name: "ProvisionedThroughputExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ProvisionedThroughputExceededException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 * <p>Amazon Textract is temporarily unable to process the request. Try your call again.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "server" = "server";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 * <p>The format of the input document isn't supported. Documents for operations can be in
 *          PNG, JPEG, PDF, or TIFF format.</p>
 */
export class UnsupportedDocumentException extends __BaseException {
  readonly name: "UnsupportedDocumentException" = "UnsupportedDocumentException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedDocumentException, __BaseException>) {
    super({
      name: "UnsupportedDocumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedDocumentException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 */
export interface AnalyzeExpenseRequest {
  /**
   * <p>The input document, either as bytes or as an S3 object.</p>
   *          <p>You pass image bytes to an Amazon Textract API operation by using the <code>Bytes</code>
   *          property. For example, you would use the <code>Bytes</code> property to pass a document
   *          loaded from a local file system. Image bytes passed by using the <code>Bytes</code>
   *          property must be base64 encoded. Your code might not need to encode document file bytes if
   *          you're using an AWS SDK to call Amazon Textract API operations. </p>
   *          <p>You pass images stored in an S3 bucket to an Amazon Textract API operation by using the
   *             <code>S3Object</code> property. Documents stored in an S3 bucket don't need to be base64
   *          encoded.</p>
   *          <p>The AWS Region for the S3 bucket that contains the S3 object must match the AWS
   *          Region that you use for Amazon Textract operations.</p>
   *          <p>If you use the AWS CLI to call Amazon Textract operations, passing image bytes using
   *          the Bytes property isn't supported. You must first upload the document to an Amazon S3
   *          bucket, and then call the operation using the S3Object property.</p>
   *          <p>For Amazon Textract to process an S3 object, the user must have permission
   *          to access the S3 object. </p>
   */
  Document: Document | undefined;
}

/**
 * @public
 * <p>Returns the kind of currency detected.</p>
 */
export interface ExpenseCurrency {
  /**
   * <p>Currency code for detected currency. the current supported codes are:</p>
   *          <ul>
   *             <li>
   *                <p>USD</p>
   *             </li>
   *             <li>
   *                <p>EUR</p>
   *             </li>
   *             <li>
   *                <p>GBP</p>
   *             </li>
   *             <li>
   *                <p>CAD</p>
   *             </li>
   *             <li>
   *                <p>INR</p>
   *             </li>
   *             <li>
   *                <p>JPY</p>
   *             </li>
   *             <li>
   *                <p>CHF</p>
   *             </li>
   *             <li>
   *                <p>AUD</p>
   *             </li>
   *             <li>
   *                <p>CNY</p>
   *             </li>
   *             <li>
   *                <p>BZR</p>
   *             </li>
   *             <li>
   *                <p>SEK</p>
   *             </li>
   *             <li>
   *                <p>HKD</p>
   *             </li>
   *          </ul>
   */
  Code?: string;

  /**
   * <p>Percentage confideence in the detected currency.</p>
   */
  Confidence?: number;
}

/**
 * @public
 * <p>Shows the group that a certain key belongs to. This helps differentiate between
 *          names and addresses for different organizations, that can be hard to determine
 *          via JSON response.</p>
 */
export interface ExpenseGroupProperty {
  /**
   * <p>Informs you on whether the expense group is a name or an address.</p>
   */
  Types?: string[];

  /**
   * <p>Provides a group Id number, which will be the same for each in the group.</p>
   */
  Id?: string;
}

/**
 * @public
 * <p>An object used to store information about the Value or Label detected by Amazon Textract.</p>
 */
export interface ExpenseDetection {
  /**
   * <p>The word or line of text recognized by Amazon Textract</p>
   */
  Text?: string;

  /**
   * <p>Information about where the following items are located on a document page: detected
   *          page, text, key-value pairs, tables, table cells, and selection elements.</p>
   */
  Geometry?: Geometry;

  /**
   * <p>The confidence in detection, as a percentage</p>
   */
  Confidence?: number;
}

/**
 * @public
 * <p>An object used to store information about the Type detected by Amazon Textract.</p>
 */
export interface ExpenseType {
  /**
   * <p>The word or line of text detected by Amazon Textract.</p>
   */
  Text?: string;

  /**
   * <p>The confidence of accuracy, as a percentage.</p>
   */
  Confidence?: number;
}

/**
 * @public
 * <p>Breakdown of detected information, seperated into
 *          the catagories Type, LabelDetection, and ValueDetection</p>
 */
export interface ExpenseField {
  /**
   * <p>The implied label of a detected element. Present alongside LabelDetection for explicit elements.</p>
   */
  Type?: ExpenseType;

  /**
   * <p>The explicitly stated label of a detected element.</p>
   */
  LabelDetection?: ExpenseDetection;

  /**
   * <p>The value of a detected element. Present in explicit and implicit elements.</p>
   */
  ValueDetection?: ExpenseDetection;

  /**
   * <p>The page number the value was detected on.</p>
   */
  PageNumber?: number;

  /**
   * <p>Shows the kind of currency, both the code and confidence associated with any monatary value
   *          detected.</p>
   */
  Currency?: ExpenseCurrency;

  /**
   * <p>Shows which group a response object belongs to, such as whether an address line
   *          belongs to the vendor's address or the recipent's address.</p>
   */
  GroupProperties?: ExpenseGroupProperty[];
}

/**
 * @public
 * <p>A structure that holds information about the different lines found in a document's tables.</p>
 */
export interface LineItemFields {
  /**
   * <p>ExpenseFields used to show information from detected lines on a table.</p>
   */
  LineItemExpenseFields?: ExpenseField[];
}

/**
 * @public
 * <p>A grouping of tables which contain LineItems, with each table identified by the table's <code>LineItemGroupIndex</code>.</p>
 */
export interface LineItemGroup {
  /**
   * <p>The number used to identify a specific table in a document. The first table encountered will have a LineItemGroupIndex of 1, the second 2, etc.</p>
   */
  LineItemGroupIndex?: number;

  /**
   * <p>The breakdown of information on a particular line of a table. </p>
   */
  LineItems?: LineItemFields[];
}

/**
 * @public
 * <p>The structure holding all the information returned by AnalyzeExpense</p>
 */
export interface ExpenseDocument {
  /**
   * <p>Denotes which invoice or receipt in the document the information is coming from.
   *       First document will be 1, the second 2, and so on.</p>
   */
  ExpenseIndex?: number;

  /**
   * <p>Any information found outside of a table by Amazon Textract.</p>
   */
  SummaryFields?: ExpenseField[];

  /**
   * <p>Information detected on each table of a document, seperated into <code>LineItems</code>.</p>
   */
  LineItemGroups?: LineItemGroup[];

  /**
   * <p>This is a block object, the same as reported when DetectDocumentText is run on a document.
   *       It provides word level recognition of text.</p>
   */
  Blocks?: Block[];
}

/**
 * @public
 */
export interface AnalyzeExpenseResponse {
  /**
   * <p>Information about the input document.</p>
   */
  DocumentMetadata?: DocumentMetadata;

  /**
   * <p>The expenses detected by Amazon Textract.</p>
   */
  ExpenseDocuments?: ExpenseDocument[];
}

/**
 * @public
 */
export interface AnalyzeIDRequest {
  /**
   * <p>The document being passed to AnalyzeID.</p>
   */
  DocumentPages: Document[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ValueType = {
  DATE: "DATE",
} as const;

/**
 * @public
 */
export type ValueType = (typeof ValueType)[keyof typeof ValueType];

/**
 * @public
 * <p>Contains information relating to dates in a document, including the type
 *          of value, and the value.</p>
 */
export interface NormalizedValue {
  /**
   * <p>The value of the date, written as Year-Month-DayTHour:Minute:Second.</p>
   */
  Value?: string;

  /**
   * <p>The normalized type of the value detected. In this case, DATE.</p>
   */
  ValueType?: ValueType | string;
}

/**
 * @public
 * <p>Used to contain the information detected by an AnalyzeID operation.</p>
 */
export interface AnalyzeIDDetections {
  /**
   * <p>Text of either the normalized field or value associated with it.</p>
   */
  Text: string | undefined;

  /**
   * <p>Only returned for dates, returns the type of value detected and the date
   *          written in a more machine readable way.</p>
   */
  NormalizedValue?: NormalizedValue;

  /**
   * <p>The confidence score of the detected text.</p>
   */
  Confidence?: number;
}

/**
 * @public
 * <p>Structure containing both the normalized type of the extracted information
 *          and the text associated with it. These are extracted as Type and Value respectively.</p>
 */
export interface IdentityDocumentField {
  /**
   * <p>Used to contain the information detected by an AnalyzeID operation.</p>
   */
  Type?: AnalyzeIDDetections;

  /**
   * <p>Used to contain the information detected by an AnalyzeID operation.</p>
   */
  ValueDetection?: AnalyzeIDDetections;
}

/**
 * @public
 * <p>The structure that lists each document processed in an AnalyzeID operation.</p>
 */
export interface IdentityDocument {
  /**
   * <p>Denotes the placement of a document in the IdentityDocument list. The first document
   *          is marked 1, the second 2 and so on.</p>
   */
  DocumentIndex?: number;

  /**
   * <p>The structure used to record information extracted from identity documents.
   *          Contains both normalized field and value of the extracted text.</p>
   */
  IdentityDocumentFields?: IdentityDocumentField[];

  /**
   * <p>Individual word recognition, as returned by document detection.</p>
   */
  Blocks?: Block[];
}

/**
 * @public
 */
export interface AnalyzeIDResponse {
  /**
   * <p>The list of documents processed by AnalyzeID. Includes a number denoting their place in
   *          the list and the response structure for the document.</p>
   */
  IdentityDocuments?: IdentityDocument[];

  /**
   * <p>Information about the input document.</p>
   */
  DocumentMetadata?: DocumentMetadata;

  /**
   * <p>The version of the AnalyzeIdentity API being used to process documents.</p>
   */
  AnalyzeIDModelVersion?: string;
}

/**
 * @public
 */
export interface DetectDocumentTextRequest {
  /**
   * <p>The input document as base64-encoded bytes or an Amazon S3 object. If you use the AWS CLI
   *          to call Amazon Textract operations, you can't pass image bytes. The document must be an image
   *       in JPEG or PNG format.</p>
   *          <p>If you're using an AWS SDK to call Amazon Textract, you might not need to base64-encode
   *          image bytes that are passed using the <code>Bytes</code> field. </p>
   */
  Document: Document | undefined;
}

/**
 * @public
 */
export interface DetectDocumentTextResponse {
  /**
   * <p>Metadata about the document. It contains the number of pages that are detected in the
   *          document.</p>
   */
  DocumentMetadata?: DocumentMetadata;

  /**
   * <p>An array of <code>Block</code> objects that contain the text that's detected in the
   *          document.</p>
   */
  Blocks?: Block[];

  /**
   * <p></p>
   */
  DetectDocumentTextModelVersion?: string;
}

/**
 * @public
 * <p>A structure that holds information regarding a detected signature on a page.</p>
 */
export interface DetectedSignature {
  /**
   * <p>The page a detected signature was found on.</p>
   */
  Page?: number;
}

/**
 * @public
 * <p>Contains information about the pages of a document, defined by logical boundary.</p>
 */
export interface SplitDocument {
  /**
   * <p>The index for a given document in a DocumentGroup of a specific Type.</p>
   */
  Index?: number;

  /**
   * <p>An array of page numbers for a for a given document, ordered by logical boundary.</p>
   */
  Pages?: number[];
}

/**
 * @public
 * <p>A structure containing information about an undetected signature on a page where it was expected but not found.</p>
 */
export interface UndetectedSignature {
  /**
   * <p>The page where a signature was expected but not found.</p>
   */
  Page?: number;
}

/**
 * @public
 * <p>Summary information about documents grouped by the same document type.</p>
 */
export interface DocumentGroup {
  /**
   * <p>The type of document that Amazon Textract has detected. See <a href="https://docs.aws.amazon.com/textract/latest/dg/lending-response-objects.html">Analyze Lending Response Objects</a> for a list of all types returned by Textract.</p>
   */
  Type?: string;

  /**
   * <p>An array that contains information about the pages of a document, defined by logical boundary.</p>
   */
  SplitDocuments?: SplitDocument[];

  /**
   * <p>A list of the detected signatures found in a document group.</p>
   */
  DetectedSignatures?: DetectedSignature[];

  /**
   * <p>A list of any expected signatures not found in a document group.</p>
   */
  UndetectedSignatures?: UndetectedSignature[];
}

/**
 * @public
 * <p>The Amazon S3 bucket that contains the document to be processed. It's used by asynchronous
 *          operations.</p>
 *          <p>The input document can be an image file in JPEG or PNG format. It can also be a file in
 *          PDF format.</p>
 */
export interface DocumentLocation {
  /**
   * <p>The Amazon S3 bucket that contains the input document.</p>
   */
  S3Object?: S3Object;
}

/**
 * @public
 * <p>The results extracted for a lending document.</p>
 */
export interface LendingDetection {
  /**
   * <p>The text extracted for a detected value in a lending document.</p>
   */
  Text?: string;

  /**
   * <p>The selection status of a selection element, such as an option button or check box.</p>
   */
  SelectionStatus?: SelectionStatus | string;

  /**
   * <p>Information about where the following items are located on a document page: detected
   *          page, text, key-value pairs, tables, table cells, and selection elements.</p>
   */
  Geometry?: Geometry;

  /**
   * <p>The confidence level for the text of a detected value in a lending document.</p>
   */
  Confidence?: number;
}

/**
 * @public
 * <p>Holds the normalized key-value pairs returned by AnalyzeDocument, including the document type, detected text, and geometry.</p>
 */
export interface LendingField {
  /**
   * <p>The type of the lending document.</p>
   */
  Type?: string;

  /**
   * <p>The results extracted for a lending document.</p>
   */
  KeyDetection?: LendingDetection;

  /**
   * <p>An array of LendingDetection objects.</p>
   */
  ValueDetections?: LendingDetection[];
}

/**
 * @public
 * <p>Information regarding a detected signature on a page.</p>
 */
export interface SignatureDetection {
  /**
   * <p>The confidence, from 0 to 100, in the predicted values for a detected signature.</p>
   */
  Confidence?: number;

  /**
   * <p>Information about where the following items are located on a document page: detected
   *          page, text, key-value pairs, tables, table cells, and selection elements.</p>
   */
  Geometry?: Geometry;
}

/**
 * @public
 * <p>Holds the structured data returned by AnalyzeDocument for lending documents.</p>
 */
export interface LendingDocument {
  /**
   * <p>An array of LendingField objects.</p>
   */
  LendingFields?: LendingField[];

  /**
   * <p>A list of signatures detected in a lending document.</p>
   */
  SignatureDetections?: SignatureDetection[];
}

/**
 * @public
 * <p>Contains information extracted by an analysis operation after using StartLendingAnalysis.</p>
 */
export interface Extraction {
  /**
   * <p>Holds the structured data returned by AnalyzeDocument for lending documents.</p>
   */
  LendingDocument?: LendingDocument;

  /**
   * <p>The structure holding all the information returned by AnalyzeExpense</p>
   */
  ExpenseDocument?: ExpenseDocument;

  /**
   * <p>The structure that lists each document processed in an AnalyzeID operation.</p>
   */
  IdentityDocument?: IdentityDocument;
}

/**
 * @public
 */
export interface GetDocumentAnalysisRequest {
  /**
   * <p>A unique identifier for the text-detection job. The <code>JobId</code> is returned from
   *             <code>StartDocumentAnalysis</code>. A <code>JobId</code> value is only valid for 7
   *          days.</p>
   */
  JobId: string | undefined;

  /**
   * <p>The maximum number of results to return per paginated call. The largest value that you
   *          can specify is 1,000. If you specify a value greater than 1,000, a maximum of 1,000 results
   *          is returned. The default value is 1,000.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous response was incomplete (because there are more blocks to retrieve),
   *          Amazon Textract returns a pagination token in the response. You can use this pagination
   *          token to retrieve the next set of blocks.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const JobStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PARTIAL_SUCCESS: "PARTIAL_SUCCESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * <p>A warning about an issue that occurred during asynchronous text analysis (<a>StartDocumentAnalysis</a>) or asynchronous document text detection (<a>StartDocumentTextDetection</a>). </p>
 */
export interface Warning {
  /**
   * <p>The error code for the warning.</p>
   */
  ErrorCode?: string;

  /**
   * <p>A list of the pages that the warning applies to.</p>
   */
  Pages?: number[];
}

/**
 * @public
 */
export interface GetDocumentAnalysisResponse {
  /**
   * <p>Information about a document that Amazon Textract processed.
   *             <code>DocumentMetadata</code> is returned in every page of paginated responses from an
   *          Amazon Textract video operation.</p>
   */
  DocumentMetadata?: DocumentMetadata;

  /**
   * <p>The current status of the text detection job.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>If the response is truncated, Amazon Textract returns this token. You can use this token
   *          in the subsequent request to retrieve the next set of text detection results.</p>
   */
  NextToken?: string;

  /**
   * <p>The results of the text-analysis operation.</p>
   */
  Blocks?: Block[];

  /**
   * <p>A list of warnings that occurred during the document-analysis operation.</p>
   */
  Warnings?: Warning[];

  /**
   * <p>Returns if the detection job could not be completed. Contains explanation for what error
   *          occured.</p>
   */
  StatusMessage?: string;

  /**
   * <p></p>
   */
  AnalyzeDocumentModelVersion?: string;
}

/**
 * @public
 * <p>An invalid job identifier was passed to an asynchronous analysis operation.</p>
 */
export class InvalidJobIdException extends __BaseException {
  readonly name: "InvalidJobIdException" = "InvalidJobIdException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidJobIdException, __BaseException>) {
    super({
      name: "InvalidJobIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidJobIdException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 * <p> Indicates you do not have decrypt permissions with the KMS key entered, or the KMS key
 *         was entered incorrectly. </p>
 */
export class InvalidKMSKeyException extends __BaseException {
  readonly name: "InvalidKMSKeyException" = "InvalidKMSKeyException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidKMSKeyException, __BaseException>) {
    super({
      name: "InvalidKMSKeyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidKMSKeyException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 */
export interface GetDocumentTextDetectionRequest {
  /**
   * <p>A unique identifier for the text detection job. The <code>JobId</code> is returned from
   *          <code>StartDocumentTextDetection</code>. A <code>JobId</code> value is only valid for 7 days.</p>
   */
  JobId: string | undefined;

  /**
   * <p>The maximum number of results to return per paginated call. The largest value you can
   *          specify is 1,000. If you specify a value greater than 1,000, a maximum of 1,000 results is
   *          returned. The default value is 1,000.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous response was incomplete (because there are more blocks to retrieve), Amazon Textract returns a pagination
   *          token in the response. You can use this pagination token to retrieve the next set of blocks.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetDocumentTextDetectionResponse {
  /**
   * <p>Information about a document that Amazon Textract processed. <code>DocumentMetadata</code> is
   *          returned in every page of paginated responses from an Amazon Textract video operation.</p>
   */
  DocumentMetadata?: DocumentMetadata;

  /**
   * <p>The current status of the text detection job.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>If the response is truncated, Amazon Textract returns this token. You can use this token in
   *          the subsequent request to retrieve the next set of text-detection results.</p>
   */
  NextToken?: string;

  /**
   * <p>The results of the text-detection operation.</p>
   */
  Blocks?: Block[];

  /**
   * <p>A list of warnings that occurred during the text-detection operation for the
   *          document.</p>
   */
  Warnings?: Warning[];

  /**
   * <p>Returns if the detection job could not be completed. Contains explanation for what error occured. </p>
   */
  StatusMessage?: string;

  /**
   * <p></p>
   */
  DetectDocumentTextModelVersion?: string;
}

/**
 * @public
 */
export interface GetExpenseAnalysisRequest {
  /**
   * <p>A unique identifier for the text detection job. The <code>JobId</code> is returned from
   *     <code>StartExpenseAnalysis</code>. A <code>JobId</code> value is only valid for 7 days.</p>
   */
  JobId: string | undefined;

  /**
   * <p>The maximum number of results to return per paginated call. The largest value you can
   *    specify is 20. If you specify a value greater than 20, a maximum of 20 results is
   *    returned. The default value is 20.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous response was incomplete (because there are more blocks to retrieve), Amazon Textract returns a pagination
   *    token in the response. You can use this pagination token to retrieve the next set of blocks.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetExpenseAnalysisResponse {
  /**
   * <p>Information about a document that Amazon Textract processed. <code>DocumentMetadata</code> is
   *    returned in every page of paginated responses from an Amazon Textract operation.</p>
   */
  DocumentMetadata?: DocumentMetadata;

  /**
   * <p>The current status of the text detection job.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>If the response is truncated, Amazon Textract returns this token. You can use this token in
   *    the subsequent request to retrieve the next set of text-detection results.</p>
   */
  NextToken?: string;

  /**
   * <p>The expenses detected by Amazon Textract.</p>
   */
  ExpenseDocuments?: ExpenseDocument[];

  /**
   * <p>A list of warnings that occurred during the text-detection operation for the
   *    document.</p>
   */
  Warnings?: Warning[];

  /**
   * <p>Returns if the detection job could not be completed. Contains explanation for what error occured. </p>
   */
  StatusMessage?: string;

  /**
   * <p>The current model version of AnalyzeExpense.</p>
   */
  AnalyzeExpenseModelVersion?: string;
}

/**
 * @public
 */
export interface GetLendingAnalysisRequest {
  /**
   * <p>A unique identifier for the lending or text-detection job. The <code>JobId</code> is
   *             returned from <code>StartLendingAnalysis</code>. A <code>JobId</code> value is only
   *             valid for 7 days.</p>
   */
  JobId: string | undefined;

  /**
   * <p>The maximum number of results to return per paginated call. The largest value that you
   *             can specify is 30. If you specify a value greater than 30, a maximum of 30 results is
   *             returned. The default value is 30.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous response was incomplete, Amazon Textract returns a pagination token in
   *             the response. You can use this pagination token to retrieve the next set of lending
   *             results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains information regarding predicted values returned by Amazon Textract operations, including the
 *          predicted value and the confidence in the predicted value.</p>
 */
export interface Prediction {
  /**
   * <p>The predicted value of a detected object.</p>
   */
  Value?: string;

  /**
   * <p>Amazon Textract's confidence in its predicted value.</p>
   */
  Confidence?: number;
}

/**
 * @public
 * <p>The class assigned to a Page object detected in an input document.
 *          Contains information regarding the predicted type/class of a document's page and the
 *          page number that the Page object was detected on.</p>
 */
export interface PageClassification {
  /**
   * <p>The class, or document type, assigned to a detected Page object. The class, or document type,
   *          assigned to a detected Page object.</p>
   */
  PageType: Prediction[] | undefined;

  /**
   * <p> The page number the value was detected on, relative to Amazon Textract's starting position.</p>
   */
  PageNumber: Prediction[] | undefined;
}

/**
 * @public
 * <p>Contains the detections for each page analyzed through the Analyze Lending API.</p>
 */
export interface LendingResult {
  /**
   * <p>The page number for a page, with regard to whole submission.</p>
   */
  Page?: number;

  /**
   * <p>The classifier result for a given page.</p>
   */
  PageClassification?: PageClassification;

  /**
   * <p>An array of Extraction to hold structured data. e.g. normalized key value pairs instead of raw OCR detections .</p>
   */
  Extractions?: Extraction[];
}

/**
 * @public
 */
export interface GetLendingAnalysisResponse {
  /**
   * <p>Information about the input document.</p>
   */
  DocumentMetadata?: DocumentMetadata;

  /**
   * <p> The current status of the lending analysis job.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>If the response is truncated, Amazon Textract returns this token.
   *             You can use this token in the subsequent request to retrieve the next set of lending results.</p>
   */
  NextToken?: string;

  /**
   * <p> Holds the information returned by one of AmazonTextract's document analysis
   *             operations for the pinstripe.</p>
   */
  Results?: LendingResult[];

  /**
   * <p> A list of warnings that occurred during the lending analysis operation. </p>
   */
  Warnings?: Warning[];

  /**
   * <p>  Returns if the lending analysis job could not be completed. Contains explanation for
   *             what error occurred. </p>
   */
  StatusMessage?: string;

  /**
   * <p> The current model version of the Analyze Lending API.</p>
   */
  AnalyzeLendingModelVersion?: string;
}

/**
 * @public
 */
export interface GetLendingAnalysisSummaryRequest {
  /**
   * <p> A unique identifier for the lending or text-detection job. The <code>JobId</code> is
   *    returned from StartLendingAnalysis. A <code>JobId</code> value is only valid for 7 days.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 * <p>Contains information regarding DocumentGroups and UndetectedDocumentTypes.</p>
 */
export interface LendingSummary {
  /**
   * <p>Contains an array of all DocumentGroup objects.</p>
   */
  DocumentGroups?: DocumentGroup[];

  /**
   * <p>UndetectedDocumentTypes.</p>
   */
  UndetectedDocumentTypes?: string[];
}

/**
 * @public
 */
export interface GetLendingAnalysisSummaryResponse {
  /**
   * <p>Information about the input document.</p>
   */
  DocumentMetadata?: DocumentMetadata;

  /**
   * <p> The current status of the lending analysis job. </p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p> Contains summary information for documents grouped by type.</p>
   */
  Summary?: LendingSummary;

  /**
   * <p>A list of warnings that occurred during the lending analysis operation.</p>
   */
  Warnings?: Warning[];

  /**
   * <p>Returns if the lending analysis could not be completed. Contains explanation for what error
   *    occurred.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The current model version of the Analyze Lending API.</p>
   */
  AnalyzeLendingModelVersion?: string;
}

/**
 * @public
 * <p>A <code>ClientRequestToken</code> input parameter was reused with an operation, but at
 *          least one of the other input parameters is different from the previous call to the
 *          operation. </p>
 */
export class IdempotentParameterMismatchException extends __BaseException {
  readonly name: "IdempotentParameterMismatchException" = "IdempotentParameterMismatchException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotentParameterMismatchException, __BaseException>) {
    super({
      name: "IdempotentParameterMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotentParameterMismatchException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 * <p>An Amazon Textract service limit was exceeded. For example, if you start too many
 *          asynchronous jobs concurrently, calls to start operations
 *             (<code>StartDocumentTextDetection</code>, for example) raise a LimitExceededException
 *          exception (HTTP status code: 400) until the number of concurrently running jobs is below
 *          the Amazon Textract service limit. </p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 * <p>The Amazon Simple Notification Service (Amazon SNS) topic to which Amazon Textract publishes the completion status of
 *          an asynchronous document operation. </p>
 */
export interface NotificationChannel {
  /**
   * <p>The Amazon SNS topic that Amazon Textract posts the completion status to.</p>
   */
  SNSTopicArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that gives Amazon Textract publishing permissions to the Amazon SNS topic. </p>
   */
  RoleArn: string | undefined;
}

/**
 * @public
 * <p>Sets whether or not your output will go to a user created bucket. Used to set the name
 *          of the bucket, and the prefix on the output file.</p>
 *          <p>
 *             <code>OutputConfig</code> is an optional parameter which lets you adjust where your
 *          output will be placed. By default, Amazon Textract will store the results internally and can
 *          only be accessed by the Get API operations. With <code>OutputConfig</code> enabled, you can
 *          set the name of the bucket the output will be sent to the file prefix of the results where
 *          you can download your results. Additionally, you can set the <code>KMSKeyID</code>
 *          parameter to a customer master key (CMK) to encrypt your output. Without this parameter set
 *          Amazon Textract will encrypt server-side using the AWS managed CMK for Amazon S3.</p>
 *          <p>Decryption of Customer Content is necessary for processing of the documents by Amazon Textract. If your account
 *          is opted out under an AI services opt out policy then all unencrypted Customer Content is immediately and permanently deleted after
 *          the Customer Content has been processed by the service. No copy of of the output is retained by Amazon Textract. For information about how to opt out, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html"> Managing AI services opt-out policy. </a>
 *          </p>
 *          <p>For more information on data privacy,
 *          see the <a href="https://aws.amazon.com/compliance/data-privacy-faq/">Data Privacy
 *             FAQ</a>.</p>
 */
export interface OutputConfig {
  /**
   * <p>The name of the bucket your output will go to.</p>
   */
  S3Bucket: string | undefined;

  /**
   * <p>The prefix of the object key that the output will be saved to. When not enabled, the
   *          prefix will be “textract_output".</p>
   */
  S3Prefix?: string;
}

/**
 * @public
 */
export interface StartDocumentAnalysisRequest {
  /**
   * <p>The location of the document to be processed.</p>
   */
  DocumentLocation: DocumentLocation | undefined;

  /**
   * <p>A list of the types of analysis to perform. Add TABLES to the list to return information
   *          about the tables that are detected in the input document. Add FORMS to return detected
   *          form data. To perform both types of analysis, add TABLES
   *          and FORMS to <code>FeatureTypes</code>. All lines and words detected in the document are
   *          included in the response (including text that isn't related to the value of
   *             <code>FeatureTypes</code>). </p>
   */
  FeatureTypes: (FeatureType | string)[] | undefined;

  /**
   * <p>The idempotent token that you use to identify the start request. If you use the same
   *          token with multiple <code>StartDocumentAnalysis</code> requests, the same
   *             <code>JobId</code> is returned. Use <code>ClientRequestToken</code> to prevent the same
   *          job from being accidentally started more than once. For more information, see
   *          <a href="https://docs.aws.amazon.com/textract/latest/dg/api-async.html">Calling Amazon Textract Asynchronous Operations</a>.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>An identifier that you specify that's included in the completion notification published
   *          to the Amazon SNS topic. For example, you can use <code>JobTag</code> to identify the type of
   *          document that the completion notification corresponds to (such as a tax form or a
   *          receipt).</p>
   */
  JobTag?: string;

  /**
   * <p>The Amazon SNS topic ARN that you want Amazon Textract to publish the completion status of the
   *          operation to. </p>
   */
  NotificationChannel?: NotificationChannel;

  /**
   * <p>Sets if the output will go to a customer defined bucket. By default, Amazon Textract will save
   *          the results internally to be accessed by the GetDocumentAnalysis operation.</p>
   */
  OutputConfig?: OutputConfig;

  /**
   * <p>The KMS key used to encrypt the inference results. This can be
   *          in either Key ID or Key Alias format. When a KMS key is provided, the
   *          KMS key will be used for server-side encryption of the objects in the
   *          customer bucket. When this parameter is not enabled, the result will
   *          be encrypted server side,using SSE-S3.</p>
   */
  KMSKeyId?: string;

  /**
   * <p></p>
   */
  QueriesConfig?: QueriesConfig;
}

/**
 * @public
 */
export interface StartDocumentAnalysisResponse {
  /**
   * <p>The identifier for the document text detection job. Use <code>JobId</code> to identify
   *          the job in a subsequent call to <code>GetDocumentAnalysis</code>. A <code>JobId</code> value
   *          is only valid for 7 days.</p>
   */
  JobId?: string;
}

/**
 * @public
 */
export interface StartDocumentTextDetectionRequest {
  /**
   * <p>The location of the document to be processed.</p>
   */
  DocumentLocation: DocumentLocation | undefined;

  /**
   * <p>The idempotent token that's used to identify the start request. If you use the same
   *          token with multiple <code>StartDocumentTextDetection</code> requests, the same
   *             <code>JobId</code> is returned. Use <code>ClientRequestToken</code> to prevent the same
   *          job from being accidentally started more than once. For more information, see
   *          <a href="https://docs.aws.amazon.com/textract/latest/dg/api-async.html">Calling Amazon Textract Asynchronous Operations</a>.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>An identifier that you specify that's included in the completion notification published
   *          to the Amazon SNS topic. For example, you can use <code>JobTag</code> to identify the type of
   *          document that the completion notification corresponds to (such as a tax form or a
   *          receipt).</p>
   */
  JobTag?: string;

  /**
   * <p>The Amazon SNS topic ARN that you want Amazon Textract to publish the completion status of the
   *          operation to. </p>
   */
  NotificationChannel?: NotificationChannel;

  /**
   * <p>Sets if the output will go to a customer defined bucket. By default Amazon Textract will
   *          save the results internally to be accessed with the GetDocumentTextDetection operation.</p>
   */
  OutputConfig?: OutputConfig;

  /**
   * <p>The KMS key used to encrypt the inference results. This can be
   *          in either Key ID or Key Alias format. When a KMS key is provided, the
   *          KMS key will be used for server-side encryption of the objects in the
   *          customer bucket. When this parameter is not enabled, the result will
   *          be encrypted server side,using SSE-S3.</p>
   */
  KMSKeyId?: string;
}

/**
 * @public
 */
export interface StartDocumentTextDetectionResponse {
  /**
   * <p>The identifier of the text detection job for the document. Use <code>JobId</code> to
   *          identify the job in a subsequent call to <code>GetDocumentTextDetection</code>.
   *          A <code>JobId</code> value is only valid for 7 days.</p>
   */
  JobId?: string;
}

/**
 * @public
 */
export interface StartExpenseAnalysisRequest {
  /**
   * <p>The location of the document to be processed.</p>
   */
  DocumentLocation: DocumentLocation | undefined;

  /**
   * <p>The idempotent token that's used to identify the start request. If you use the same token with multiple <code>StartDocumentTextDetection</code> requests, the same <code>JobId</code> is returned.
   *    Use <code>ClientRequestToken</code> to prevent the same job from being accidentally started more than once.
   *    For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/api-async.html">Calling Amazon Textract Asynchronous Operations</a>
   *          </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>An identifier you specify that's included in the completion notification published
   *    to the Amazon SNS topic. For example, you can use <code>JobTag</code> to identify the type of
   *    document that the completion notification corresponds to (such as a tax form or a
   *    receipt).</p>
   */
  JobTag?: string;

  /**
   * <p>The Amazon SNS topic ARN that you want Amazon Textract to publish the completion status of the
   *    operation to. </p>
   */
  NotificationChannel?: NotificationChannel;

  /**
   * <p>Sets if the output will go to a customer defined bucket. By default, Amazon Textract will
   *    save the results internally to be accessed by the <code>GetExpenseAnalysis</code>
   *    operation.</p>
   */
  OutputConfig?: OutputConfig;

  /**
   * <p>The KMS key used to encrypt the inference results. This can be
   *    in either Key ID or Key Alias format. When a KMS key is provided, the
   *    KMS key will be used for server-side encryption of the objects in the
   *    customer bucket. When this parameter is not enabled, the result will
   *    be encrypted server side,using SSE-S3.</p>
   */
  KMSKeyId?: string;
}

/**
 * @public
 */
export interface StartExpenseAnalysisResponse {
  /**
   * <p>A unique identifier for the text detection job. The <code>JobId</code> is returned from
   *     <code>StartExpenseAnalysis</code>. A <code>JobId</code> value is only valid for 7 days.</p>
   */
  JobId?: string;
}

/**
 * @public
 */
export interface StartLendingAnalysisRequest {
  /**
   * <p>The Amazon S3 bucket that contains the document to be processed. It's used by asynchronous
   *          operations.</p>
   *          <p>The input document can be an image file in JPEG or PNG format. It can also be a file in
   *          PDF format.</p>
   */
  DocumentLocation: DocumentLocation | undefined;

  /**
   * <p>The idempotent token that you use to identify the start request. If you use the same token
   *    with multiple <code>StartLendingAnalysis</code> requests, the same <code>JobId</code> is
   *    returned. Use <code>ClientRequestToken</code> to prevent the same job from being accidentally
   *    started more than once. For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/api-sync.html">Calling Amazon Textract Asynchronous Operations</a>.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>An identifier that you specify to be included in the completion notification published to
   *    the Amazon SNS topic. For example, you can use <code>JobTag</code> to identify the type of
   *    document that the completion notification corresponds to (such as a tax form or a
   *    receipt).</p>
   */
  JobTag?: string;

  /**
   * <p>The Amazon Simple Notification Service (Amazon SNS) topic to which Amazon Textract publishes the completion status of
   *          an asynchronous document operation. </p>
   */
  NotificationChannel?: NotificationChannel;

  /**
   * <p>Sets whether or not your output will go to a user created bucket. Used to set the name
   *          of the bucket, and the prefix on the output file.</p>
   *          <p>
   *             <code>OutputConfig</code> is an optional parameter which lets you adjust where your
   *          output will be placed. By default, Amazon Textract will store the results internally and can
   *          only be accessed by the Get API operations. With <code>OutputConfig</code> enabled, you can
   *          set the name of the bucket the output will be sent to the file prefix of the results where
   *          you can download your results. Additionally, you can set the <code>KMSKeyID</code>
   *          parameter to a customer master key (CMK) to encrypt your output. Without this parameter set
   *          Amazon Textract will encrypt server-side using the AWS managed CMK for Amazon S3.</p>
   *          <p>Decryption of Customer Content is necessary for processing of the documents by Amazon Textract. If your account
   *          is opted out under an AI services opt out policy then all unencrypted Customer Content is immediately and permanently deleted after
   *          the Customer Content has been processed by the service. No copy of of the output is retained by Amazon Textract. For information about how to opt out, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html"> Managing AI services opt-out policy. </a>
   *          </p>
   *          <p>For more information on data privacy,
   *          see the <a href="https://aws.amazon.com/compliance/data-privacy-faq/">Data Privacy
   *             FAQ</a>.</p>
   */
  OutputConfig?: OutputConfig;

  /**
   * <p>The KMS key used to encrypt the inference results. This can be in either Key ID or Key
   *    Alias format. When a KMS key is provided, the KMS key will be used for server-side encryption of
   *    the objects in the customer bucket. When this parameter is not enabled, the result will be
   *    encrypted server side, using SSE-S3. </p>
   */
  KMSKeyId?: string;
}

/**
 * @public
 */
export interface StartLendingAnalysisResponse {
  /**
   * <p>A unique identifier for the lending or text-detection job. The <code>JobId</code> is
   *    returned from <code>StartLendingAnalysis</code>. A <code>JobId</code> value is only valid for 7
   *    days.</p>
   */
  JobId?: string;
}
