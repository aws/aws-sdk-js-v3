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
 * <p>An adapter selected for use when analyzing documents. Contains an adapter ID and a version number.
 *          Contains information on pages selected for analysis when analyzing documents asychronously.</p>
 */
export interface Adapter {
  /**
   * @public
   * <p>A unique identifier for the adapter resource.</p>
   */
  AdapterId: string | undefined;

  /**
   * @public
   * <p>Pages is a parameter that the user inputs to specify which pages to apply an adapter to. The following is a
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
   *                <p>You can use page intervals, such as <code>["1-3", "1-1", "4-*"]</code>. Where <code>*</code> indicates last page of
   *                document.</p>
   *             </li>
   *             <li>
   *                <p>Specified pages must be greater than 0 and less than or equal to the number of pages in the document.</p>
   *             </li>
   *          </ul>
   */
  Pages?: string[];

  /**
   * @public
   * <p>A string that identifies the version of the adapter.</p>
   */
  Version: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FeatureType = {
  FORMS: "FORMS",
  LAYOUT: "LAYOUT",
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
 * <p>Contains information on the adapter, including the adapter ID, Name, Creation time, and feature types.</p>
 */
export interface AdapterOverview {
  /**
   * @public
   * <p>A unique identifier for the adapter resource.</p>
   */
  AdapterId?: string;

  /**
   * @public
   * <p>A string naming the adapter resource.</p>
   */
  AdapterName?: string;

  /**
   * @public
   * <p>The date and time that the adapter was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The feature types that the adapter is operating on.</p>
   */
  FeatureTypes?: FeatureType[];
}

/**
 * @public
 * <p>Contains information about adapters used when analyzing a document,
 *          with each adapter specified using an AdapterId and version</p>
 */
export interface AdaptersConfig {
  /**
   * @public
   * <p>A list of adapters to be used when analyzing the specified document.</p>
   */
  Adapters: Adapter[] | undefined;
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
   * @public
   * <p>The name of the S3 bucket. Note that the # character is not valid in the file
   *          name.</p>
   */
  Bucket?: string;

  /**
   * @public
   * <p>The file name of the input document. Synchronous operations can use image files that are
   *          in JPEG or PNG format. Asynchronous operations also support PDF and TIFF format files.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>If the bucket has versioning enabled, you can specify the object version. </p>
   */
  Version?: string;
}

/**
 * @public
 * <p>The dataset configuration options for a given version of an adapter.
 *          Can include an Amazon S3 bucket if specified.</p>
 */
export interface AdapterVersionDatasetConfig {
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
  ManifestS3Object?: S3Object;
}

/**
 * @public
 * <p>The evaluation metrics (F1 score, Precision, and Recall) for an adapter version.</p>
 */
export interface EvaluationMetric {
  /**
   * @public
   * <p>The F1 score for an adapter version.</p>
   */
  F1Score?: number;

  /**
   * @public
   * <p>The Precision score for an adapter version.</p>
   */
  Precision?: number;

  /**
   * @public
   * <p>The Recall score for an adapter version.</p>
   */
  Recall?: number;
}

/**
 * @public
 * <p>Contains information on the metrics used to evalute the peformance of a given adapter version. Includes data for
 *          baseline model performance and individual adapter version perfromance.</p>
 */
export interface AdapterVersionEvaluationMetric {
  /**
   * @public
   * <p>The F1 score, precision, and recall metrics for the baseline model.</p>
   */
  Baseline?: EvaluationMetric;

  /**
   * @public
   * <p>The F1 score, precision, and recall metrics for the baseline model.</p>
   */
  AdapterVersion?: EvaluationMetric;

  /**
   * @public
   * <p>Indicates the feature type being analyzed by a given adapter version.</p>
   */
  FeatureType?: FeatureType;
}

/**
 * @public
 * @enum
 */
export const AdapterVersionStatus = {
  ACTIVE: "ACTIVE",
  AT_RISK: "AT_RISK",
  CREATION_ERROR: "CREATION_ERROR",
  CREATION_IN_PROGRESS: "CREATION_IN_PROGRESS",
  DEPRECATED: "DEPRECATED",
} as const;

/**
 * @public
 */
export type AdapterVersionStatus = (typeof AdapterVersionStatus)[keyof typeof AdapterVersionStatus];

/**
 * @public
 * <p>Summary info for an adapter version. Contains information on the AdapterId, AdapterVersion, CreationTime, FeatureTypes, and Status.</p>
 */
export interface AdapterVersionOverview {
  /**
   * @public
   * <p>A unique identifier for the adapter associated with a given adapter version.</p>
   */
  AdapterId?: string;

  /**
   * @public
   * <p>An identified for a given adapter version.</p>
   */
  AdapterVersion?: string;

  /**
   * @public
   * <p>The date and time that a given adapter version was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The feature types that the adapter version is operating on.</p>
   */
  FeatureTypes?: FeatureType[];

  /**
   * @public
   * <p>Contains information on the status of a given adapter version.</p>
   */
  Status?: AdapterVersionStatus;

  /**
   * @public
   * <p>A message explaining the status of a given adapter vesion.</p>
   */
  StatusMessage?: string;
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
   * @public
   * <p>A blob of base64-encoded document bytes. The maximum size of a document that's provided
   *          in a blob of bytes is 5 MB. The document bytes must be in PNG or JPEG format.</p>
   *          <p>If you're using an AWS SDK to call Amazon Textract, you might not need to base64-encode
   *          image bytes passed using the <code>Bytes</code> field. </p>
   */
  Bytes?: Uint8Array;

  /**
   * @public
   * <p>Identifies an S3 object as the document source. The maximum size of a document that's
   *          stored in an S3 bucket is 5 MB.</p>
   */
  S3Object?: S3Object;
}

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
   * @public
   * <p>Sets whether the input image is free of personally identifiable information or adult
   *          content.</p>
   */
  ContentClassifiers?: ContentClassifier[];
}

/**
 * @public
 * <p>Sets up the human review workflow the document will be sent to if one of the conditions
 *          is met. You can also set certain attributes of the image before review. </p>
 */
export interface HumanLoopConfig {
  /**
   * @public
   * <p>The name of the human workflow used for this image. This should be kept unique within a
   *          region.</p>
   */
  HumanLoopName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the flow definition.</p>
   */
  FlowDefinitionArn: string | undefined;

  /**
   * @public
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
   * @public
   * <p>Question that Amazon Textract will apply to the document. An example would be "What is the customer's SSN?"</p>
   */
  Text: string | undefined;

  /**
   * @public
   * <p>Alias attached to the query, for ease of location.</p>
   */
  Alias?: string;

  /**
   * @public
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
   * @public
   * <p></p>
   */
  Queries: Query[] | undefined;
}

/**
 * @public
 */
export interface AnalyzeDocumentRequest {
  /**
   * @public
   * <p>The input document as base64-encoded bytes or an Amazon S3 object. If you use the AWS
   *          CLI to call Amazon Textract operations, you can't pass image bytes. The document must be an
   *          image in JPEG, PNG, PDF, or TIFF format.</p>
   *          <p>If you're using an AWS SDK to call Amazon Textract, you might not need to base64-encode
   *          image bytes that are passed using the <code>Bytes</code> field. </p>
   */
  Document: Document | undefined;

  /**
   * @public
   * <p>A list of the types of analysis to perform. Add TABLES to the list to return information
   *          about the tables that are detected in the input document. Add FORMS to return detected form
   *          data. Add SIGNATURES to return the locations of detected signatures. Add LAYOUT to the list
   *          to return information about the layout of the document.  All lines and words detected in the document are included in the response (including
   *          text that isn't related to the value of <code>FeatureTypes</code>). </p>
   */
  FeatureTypes: FeatureType[] | undefined;

  /**
   * @public
   * <p>Sets the configuration for the human in the loop workflow for analyzing
   *          documents.</p>
   */
  HumanLoopConfig?: HumanLoopConfig;

  /**
   * @public
   * <p>Contains Queries and the alias for those Queries, as determined by the input. </p>
   */
  QueriesConfig?: QueriesConfig;

  /**
   * @public
   * <p>Specifies the adapter to be used when analyzing a document.</p>
   */
  AdaptersConfig?: AdaptersConfig;
}

/**
 * @public
 * @enum
 */
export const BlockType = {
  CELL: "CELL",
  KEY_VALUE_SET: "KEY_VALUE_SET",
  LAYOUT_FIGURE: "LAYOUT_FIGURE",
  LAYOUT_FOOTER: "LAYOUT_FOOTER",
  LAYOUT_HEADER: "LAYOUT_HEADER",
  LAYOUT_KEY_VALUE: "LAYOUT_KEY_VALUE",
  LAYOUT_LIST: "LAYOUT_LIST",
  LAYOUT_PAGE_NUMBER: "LAYOUT_PAGE_NUMBER",
  LAYOUT_SECTION_HEADER: "LAYOUT_SECTION_HEADER",
  LAYOUT_TABLE: "LAYOUT_TABLE",
  LAYOUT_TEXT: "LAYOUT_TEXT",
  LAYOUT_TITLE: "LAYOUT_TITLE",
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
   * @public
   * <p>The width of the bounding box as a ratio of the overall document page
   *          width.</p>
   */
  Width?: number;

  /**
   * @public
   * <p>The height of the bounding box as a ratio of the overall document page
   *          height.</p>
   */
  Height?: number;

  /**
   * @public
   * <p>The left coordinate of the bounding box as a ratio of overall document page
   *          width.</p>
   */
  Left?: number;

  /**
   * @public
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
   * @public
   * <p>The value of the X coordinate for a point on a <code>Polygon</code>.</p>
   */
  X?: number;

  /**
   * @public
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
   * @public
   * <p>An axis-aligned coarse representation of the location of the recognized item on the
   *          document page.</p>
   */
  BoundingBox?: BoundingBox;

  /**
   * @public
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
   * @public
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
  Type?: RelationshipType;

  /**
   * @public
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
   * @public
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
   *                   <i>SIGNATURE</i> - The location and confidence score of a signature detected on a
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
   *          <p>The following BlockTypes are only returned for Amazon Textract Layout.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LAYOUT_TITLE</code> - The main title of the document.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LAYOUT_HEADER</code> - Text located in the top margin of the document.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LAYOUT_FOOTER</code> - Text located in the bottom margin of the document.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LAYOUT_SECTION_HEADER</code> - The titles of sections within a document.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LAYOUT_PAGE_NUMBER</code> - The page number of the documents.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LAYOUT_LIST</code> - Any information grouped together in list form. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LAYOUT_FIGURE</code> - Indicates the location of an image in a document.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LAYOUT_TABLE</code> - Indicates the location of a table in the document.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LAYOUT_KEY_VALUE</code> - Indicates the location of form key-values in a document.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LAYOUT_TEXT</code> - Text that is present typically as a part of paragraphs in documents.</p>
   *             </li>
   *          </ul>
   */
  BlockType?: BlockType;

  /**
   * @public
   * <p>The confidence score that Amazon Textract has in the accuracy of the recognized text and
   *          the accuracy of the geometry points around the recognized text.</p>
   */
  Confidence?: number;

  /**
   * @public
   * <p>The word or line of text that's recognized by Amazon Textract. </p>
   */
  Text?: string;

  /**
   * @public
   * <p>The kind of text that Amazon Textract has detected. Can check for handwritten text and
   *          printed text.</p>
   */
  TextType?: TextType;

  /**
   * @public
   * <p>The row in which a table cell is located. The first row position is 1.
   *             <code>RowIndex</code> isn't returned by <code>DetectDocumentText</code> and
   *             <code>GetDocumentTextDetection</code>.</p>
   */
  RowIndex?: number;

  /**
   * @public
   * <p>The column in which a table cell appears. The first column position is 1.
   *             <code>ColumnIndex</code> isn't returned by <code>DetectDocumentText</code> and
   *             <code>GetDocumentTextDetection</code>.</p>
   */
  ColumnIndex?: number;

  /**
   * @public
   * <p>The number of rows that a table cell spans. <code>RowSpan</code> isn't returned by
   *             <code>DetectDocumentText</code> and <code>GetDocumentTextDetection</code>.</p>
   */
  RowSpan?: number;

  /**
   * @public
   * <p>The number of columns that a table cell spans. <code>ColumnSpan</code> isn't returned by
   *             <code>DetectDocumentText</code> and <code>GetDocumentTextDetection</code>. </p>
   */
  ColumnSpan?: number;

  /**
   * @public
   * <p>The location of the recognized text on the image. It includes an axis-aligned, coarse
   *          bounding box that surrounds the text, and a finer-grain polygon for more accurate spatial
   *          information. </p>
   */
  Geometry?: Geometry;

  /**
   * @public
   * <p>The identifier for the recognized text. The identifier is only unique for a single
   *          operation. </p>
   */
  Id?: string;

  /**
   * @public
   * <p>A list of relationship objects that describe how blocks are related to each other. For
   *          example, a LINE block object contains a CHILD relationship type with the WORD blocks that
   *          make up the line of text. There aren't Relationship objects in the list for relationships
   *          that don't exist, such as when the current block has no child blocks.</p>
   */
  Relationships?: Relationship[];

  /**
   * @public
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
  EntityTypes?: EntityType[];

  /**
   * @public
   * <p>The selection status of a selection element, such as an option button or check box.
   *       </p>
   */
  SelectionStatus?: SelectionStatus;

  /**
   * @public
   * <p>The page on which a block was detected. <code>Page</code> is returned by synchronous and
   *          asynchronous operations. Page values greater than 1 are only returned for multipage
   *          documents that are in PDF or TIFF format. A scanned image (JPEG/PNG) provided to an
   *          asynchronous operation, even if it contains multiple document pages, is considered a
   *          single-page document. This means that for scanned images the value of <code>Page</code> is
   *          always 1. </p>
   */
  Page?: number;

  /**
   * @public
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
   * @public
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the HumanLoop created.</p>
   */
  HumanLoopArn?: string;

  /**
   * @public
   * <p>Shows if and why human review was needed.</p>
   */
  HumanLoopActivationReasons?: string[];

  /**
   * @public
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
   * @public
   * <p>Metadata about the analyzed document. An example is the number of pages.</p>
   */
  DocumentMetadata?: DocumentMetadata;

  /**
   * @public
   * <p>The items that are detected and analyzed by <code>AnalyzeDocument</code>.</p>
   */
  Blocks?: Block[];

  /**
   * @public
   * <p>Shows the results of the human in the loop evaluation.</p>
   */
  HumanLoopActivationOutput?: HumanLoopActivationOutput;

  /**
   * @public
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
   * @public
   * <p>The resource type.</p>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>The quota code.</p>
   */
  QuotaCode?: string;

  /**
   * @public
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
  Document: Document | undefined;
}

/**
 * @public
 * <p>Returns the kind of currency detected.</p>
 */
export interface ExpenseCurrency {
  /**
   * @public
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
   * @public
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
   * @public
   * <p>Informs you on whether the expense group is a name or an address.</p>
   */
  Types?: string[];

  /**
   * @public
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
   * @public
   * <p>The word or line of text recognized by Amazon Textract</p>
   */
  Text?: string;

  /**
   * @public
   * <p>Information about where the following items are located on a document page: detected
   *          page, text, key-value pairs, tables, table cells, and selection elements.</p>
   */
  Geometry?: Geometry;

  /**
   * @public
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
   * @public
   * <p>The word or line of text detected by Amazon Textract.</p>
   */
  Text?: string;

  /**
   * @public
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
   * @public
   * <p>The implied label of a detected element. Present alongside LabelDetection for explicit elements.</p>
   */
  Type?: ExpenseType;

  /**
   * @public
   * <p>The explicitly stated label of a detected element.</p>
   */
  LabelDetection?: ExpenseDetection;

  /**
   * @public
   * <p>The value of a detected element. Present in explicit and implicit elements.</p>
   */
  ValueDetection?: ExpenseDetection;

  /**
   * @public
   * <p>The page number the value was detected on.</p>
   */
  PageNumber?: number;

  /**
   * @public
   * <p>Shows the kind of currency, both the code and confidence associated with any monatary value
   *          detected.</p>
   */
  Currency?: ExpenseCurrency;

  /**
   * @public
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
   * @public
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
   * @public
   * <p>The number used to identify a specific table in a document. The first table encountered will have a LineItemGroupIndex of 1, the second 2, etc.</p>
   */
  LineItemGroupIndex?: number;

  /**
   * @public
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
   * @public
   * <p>Denotes which invoice or receipt in the document the information is coming from.
   *       First document will be 1, the second 2, and so on.</p>
   */
  ExpenseIndex?: number;

  /**
   * @public
   * <p>Any information found outside of a table by Amazon Textract.</p>
   */
  SummaryFields?: ExpenseField[];

  /**
   * @public
   * <p>Information detected on each table of a document, seperated into <code>LineItems</code>.</p>
   */
  LineItemGroups?: LineItemGroup[];

  /**
   * @public
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
   * @public
   * <p>Information about the input document.</p>
   */
  DocumentMetadata?: DocumentMetadata;

  /**
   * @public
   * <p>The expenses detected by Amazon Textract.</p>
   */
  ExpenseDocuments?: ExpenseDocument[];
}

/**
 * @public
 */
export interface AnalyzeIDRequest {
  /**
   * @public
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
   * @public
   * <p>The value of the date, written as Year-Month-DayTHour:Minute:Second.</p>
   */
  Value?: string;

  /**
   * @public
   * <p>The normalized type of the value detected. In this case, DATE.</p>
   */
  ValueType?: ValueType;
}

/**
 * @public
 * <p>Used to contain the information detected by an AnalyzeID operation.</p>
 */
export interface AnalyzeIDDetections {
  /**
   * @public
   * <p>Text of either the normalized field or value associated with it.</p>
   */
  Text: string | undefined;

  /**
   * @public
   * <p>Only returned for dates, returns the type of value detected and the date
   *          written in a more machine readable way.</p>
   */
  NormalizedValue?: NormalizedValue;

  /**
   * @public
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
   * @public
   * <p>Used to contain the information detected by an AnalyzeID operation.</p>
   */
  Type?: AnalyzeIDDetections;

  /**
   * @public
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
   * @public
   * <p>Denotes the placement of a document in the IdentityDocument list. The first document
   *          is marked 1, the second 2 and so on.</p>
   */
  DocumentIndex?: number;

  /**
   * @public
   * <p>The structure used to record information extracted from identity documents.
   *          Contains both normalized field and value of the extracted text.</p>
   */
  IdentityDocumentFields?: IdentityDocumentField[];

  /**
   * @public
   * <p>Individual word recognition, as returned by document detection.</p>
   */
  Blocks?: Block[];
}

/**
 * @public
 */
export interface AnalyzeIDResponse {
  /**
   * @public
   * <p>The list of documents processed by AnalyzeID. Includes a number denoting their place in
   *          the list and the response structure for the document.</p>
   */
  IdentityDocuments?: IdentityDocument[];

  /**
   * @public
   * <p>Information about the input document.</p>
   */
  DocumentMetadata?: DocumentMetadata;

  /**
   * @public
   * <p>The version of the AnalyzeIdentity API being used to process documents.</p>
   */
  AnalyzeIDModelVersion?: string;
}

/**
 * @public
 * @enum
 */
export const AutoUpdate = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type AutoUpdate = (typeof AutoUpdate)[keyof typeof AutoUpdate];

/**
 * @public
 * <p>Updating or deleting a resource can cause an inconsistent state.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 */
export interface CreateAdapterRequest {
  /**
   * @public
   * <p>The name to be assigned to the adapter being created.</p>
   */
  AdapterName: string | undefined;

  /**
   * @public
   * <p>Idempotent token is used to recognize the request. If the same token is used with multiple
   *          CreateAdapter requests, the same session is returned.
   *          This token is employed to avoid unintentionally creating the same session multiple times.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The description to be assigned to the adapter being created.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The type of feature that the adapter is being trained on. Currrenly, supported feature
   *          types are: <code>QUERIES</code>
   *          </p>
   */
  FeatureTypes: FeatureType[] | undefined;

  /**
   * @public
   * <p>Controls whether or not the adapter should automatically update.</p>
   */
  AutoUpdate?: AutoUpdate;

  /**
   * @public
   * <p>A list of tags to be added to the adapter.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateAdapterResponse {
  /**
   * @public
   * <p>A string containing the unique ID for the adapter that has been created.</p>
   */
  AdapterId?: string;
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
 * <p>Returned when a request cannot be completed as it would exceed a maximum service quota.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 * <p>  Indicates that a request was not valid. Check request for proper formatting. </p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
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
   * @public
   * <p>The name of the bucket your output will go to.</p>
   */
  S3Bucket: string | undefined;

  /**
   * @public
   * <p>The prefix of the object key that the output will be saved to. When not enabled, the
   *          prefix will be “textract_output".</p>
   */
  S3Prefix?: string;
}

/**
 * @public
 */
export interface CreateAdapterVersionRequest {
  /**
   * @public
   * <p>A string containing a unique ID for the adapter that will receive a new version.</p>
   */
  AdapterId: string | undefined;

  /**
   * @public
   * <p>Idempotent token is used to recognize the request. If the same token is used with multiple
   *          CreateAdapterVersion requests, the same session is returned.
   *          This token is employed to avoid unintentionally creating the same session multiple times.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>Specifies a dataset used to train a new adapter version. Takes a ManifestS3Object as the
   *          value.</p>
   */
  DatasetConfig: AdapterVersionDatasetConfig | undefined;

  /**
   * @public
   * <p>The identifier for your AWS Key Management Service key (AWS KMS key). Used to encrypt your documents.</p>
   */
  KMSKeyId?: string;

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
  OutputConfig: OutputConfig | undefined;

  /**
   * @public
   * <p>A set of tags (key-value pairs) that you want to attach to the adapter version. </p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateAdapterVersionResponse {
  /**
   * @public
   * <p>A string containing the unique ID for the adapter that has received a new version.</p>
   */
  AdapterId?: string;

  /**
   * @public
   * <p>A string describing the new version of the adapter.</p>
   */
  AdapterVersion?: string;
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
 * <p> Returned when an operation tried to access a nonexistent resource. </p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 */
export interface DeleteAdapterRequest {
  /**
   * @public
   * <p>A string containing a unique ID for the adapter to be deleted.</p>
   */
  AdapterId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAdapterResponse {}

/**
 * @public
 */
export interface DeleteAdapterVersionRequest {
  /**
   * @public
   * <p>A string containing a unique ID for the adapter version that will be deleted.</p>
   */
  AdapterId: string | undefined;

  /**
   * @public
   * <p>Specifies the adapter version to be deleted.</p>
   */
  AdapterVersion: string | undefined;
}

/**
 * @public
 */
export interface DeleteAdapterVersionResponse {}

/**
 * @public
 */
export interface DetectDocumentTextRequest {
  /**
   * @public
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
   * @public
   * <p>Metadata about the document. It contains the number of pages that are detected in the
   *          document.</p>
   */
  DocumentMetadata?: DocumentMetadata;

  /**
   * @public
   * <p>An array of <code>Block</code> objects that contain the text that's detected in the
   *          document.</p>
   */
  Blocks?: Block[];

  /**
   * @public
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
   * @public
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
   * @public
   * <p>The index for a given document in a DocumentGroup of a specific Type.</p>
   */
  Index?: number;

  /**
   * @public
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
   * @public
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
   * @public
   * <p>The type of document that Amazon Textract has detected. See <a href="https://docs.aws.amazon.com/textract/latest/dg/lending-response-objects.html">Analyze Lending Response Objects</a> for a list of all types returned by Textract.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>An array that contains information about the pages of a document, defined by logical boundary.</p>
   */
  SplitDocuments?: SplitDocument[];

  /**
   * @public
   * <p>A list of the detected signatures found in a document group.</p>
   */
  DetectedSignatures?: DetectedSignature[];

  /**
   * @public
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
   * @public
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
   * @public
   * <p>The text extracted for a detected value in a lending document.</p>
   */
  Text?: string;

  /**
   * @public
   * <p>The selection status of a selection element, such as an option button or check box.</p>
   */
  SelectionStatus?: SelectionStatus;

  /**
   * @public
   * <p>Information about where the following items are located on a document page: detected
   *          page, text, key-value pairs, tables, table cells, and selection elements.</p>
   */
  Geometry?: Geometry;

  /**
   * @public
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
   * @public
   * <p>The type of the lending document.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The results extracted for a lending document.</p>
   */
  KeyDetection?: LendingDetection;

  /**
   * @public
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
   * @public
   * <p>The confidence, from 0 to 100, in the predicted values for a detected signature.</p>
   */
  Confidence?: number;

  /**
   * @public
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
   * @public
   * <p>An array of LendingField objects.</p>
   */
  LendingFields?: LendingField[];

  /**
   * @public
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
   * @public
   * <p>Holds the structured data returned by AnalyzeDocument for lending documents.</p>
   */
  LendingDocument?: LendingDocument;

  /**
   * @public
   * <p>The structure holding all the information returned by AnalyzeExpense</p>
   */
  ExpenseDocument?: ExpenseDocument;

  /**
   * @public
   * <p>The structure that lists each document processed in an AnalyzeID operation.</p>
   */
  IdentityDocument?: IdentityDocument;
}

/**
 * @public
 */
export interface GetAdapterRequest {
  /**
   * @public
   * <p>A string containing a unique ID for the adapter.</p>
   */
  AdapterId: string | undefined;
}

/**
 * @public
 */
export interface GetAdapterResponse {
  /**
   * @public
   * <p>A string identifying the adapter that information has been retrieved for.</p>
   */
  AdapterId?: string;

  /**
   * @public
   * <p>The name of the requested adapter.</p>
   */
  AdapterName?: string;

  /**
   * @public
   * <p>The date and time the requested adapter was created at.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The description for the requested adapter.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>List of the targeted feature types for the requested adapter.</p>
   */
  FeatureTypes?: FeatureType[];

  /**
   * @public
   * <p>Binary value indicating if the adapter is being automatically updated or not.</p>
   */
  AutoUpdate?: AutoUpdate;

  /**
   * @public
   * <p>A set of tags (key-value pairs) associated with the adapter that has been retrieved.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetAdapterVersionRequest {
  /**
   * @public
   * <p>A string specifying a unique ID for the adapter version you want to retrieve information for.</p>
   */
  AdapterId: string | undefined;

  /**
   * @public
   * <p>A string specifying the adapter version you want to retrieve information for.</p>
   */
  AdapterVersion: string | undefined;
}

/**
 * @public
 */
export interface GetAdapterVersionResponse {
  /**
   * @public
   * <p>A string containing a unique ID for the adapter version being retrieved.</p>
   */
  AdapterId?: string;

  /**
   * @public
   * <p>A string containing the adapter version that has been retrieved.</p>
   */
  AdapterVersion?: string;

  /**
   * @public
   * <p>The time that the adapter version was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>List of the targeted feature types for the requested adapter version.</p>
   */
  FeatureTypes?: FeatureType[];

  /**
   * @public
   * <p>The status of the adapter version that has been requested.</p>
   */
  Status?: AdapterVersionStatus;

  /**
   * @public
   * <p>A message that describes the status of the requested adapter version.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>Specifies a dataset used to train a new adapter version. Takes a ManifestS3Objec as the
   *          value.</p>
   */
  DatasetConfig?: AdapterVersionDatasetConfig;

  /**
   * @public
   * <p>The identifier for your AWS Key Management Service key (AWS KMS key). Used to encrypt your documents.</p>
   */
  KMSKeyId?: string;

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
  OutputConfig?: OutputConfig;

  /**
   * @public
   * <p>The evaluation metrics (F1 score, Precision, and Recall) for the requested version,
   *          grouped by baseline metrics and adapter version.</p>
   */
  EvaluationMetrics?: AdapterVersionEvaluationMetric[];

  /**
   * @public
   * <p>A set of tags (key-value pairs) that are associated with the adapter version.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetDocumentAnalysisRequest {
  /**
   * @public
   * <p>A unique identifier for the text-detection job. The <code>JobId</code> is returned from
   *             <code>StartDocumentAnalysis</code>. A <code>JobId</code> value is only valid for 7
   *          days.</p>
   */
  JobId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return per paginated call. The largest value that you
   *          can specify is 1,000. If you specify a value greater than 1,000, a maximum of 1,000 results
   *          is returned. The default value is 1,000.</p>
   */
  MaxResults?: number;

  /**
   * @public
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
   * @public
   * <p>The error code for the warning.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>A list of the pages that the warning applies to.</p>
   */
  Pages?: number[];
}

/**
 * @public
 */
export interface GetDocumentAnalysisResponse {
  /**
   * @public
   * <p>Information about a document that Amazon Textract processed.
   *             <code>DocumentMetadata</code> is returned in every page of paginated responses from an
   *          Amazon Textract video operation.</p>
   */
  DocumentMetadata?: DocumentMetadata;

  /**
   * @public
   * <p>The current status of the text detection job.</p>
   */
  JobStatus?: JobStatus;

  /**
   * @public
   * <p>If the response is truncated, Amazon Textract returns this token. You can use this token
   *          in the subsequent request to retrieve the next set of text detection results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The results of the text-analysis operation.</p>
   */
  Blocks?: Block[];

  /**
   * @public
   * <p>A list of warnings that occurred during the document-analysis operation.</p>
   */
  Warnings?: Warning[];

  /**
   * @public
   * <p>Returns if the detection job could not be completed. Contains explanation for what error
   *          occured.</p>
   */
  StatusMessage?: string;

  /**
   * @public
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
 */
export interface GetDocumentTextDetectionRequest {
  /**
   * @public
   * <p>A unique identifier for the text detection job. The <code>JobId</code> is returned from
   *          <code>StartDocumentTextDetection</code>. A <code>JobId</code> value is only valid for 7 days.</p>
   */
  JobId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return per paginated call. The largest value you can
   *          specify is 1,000. If you specify a value greater than 1,000, a maximum of 1,000 results is
   *          returned. The default value is 1,000.</p>
   */
  MaxResults?: number;

  /**
   * @public
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
   * @public
   * <p>Information about a document that Amazon Textract processed. <code>DocumentMetadata</code> is
   *          returned in every page of paginated responses from an Amazon Textract video operation.</p>
   */
  DocumentMetadata?: DocumentMetadata;

  /**
   * @public
   * <p>The current status of the text detection job.</p>
   */
  JobStatus?: JobStatus;

  /**
   * @public
   * <p>If the response is truncated, Amazon Textract returns this token. You can use this token in
   *          the subsequent request to retrieve the next set of text-detection results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The results of the text-detection operation.</p>
   */
  Blocks?: Block[];

  /**
   * @public
   * <p>A list of warnings that occurred during the text-detection operation for the
   *          document.</p>
   */
  Warnings?: Warning[];

  /**
   * @public
   * <p>Returns if the detection job could not be completed. Contains explanation for what error occured. </p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p></p>
   */
  DetectDocumentTextModelVersion?: string;
}

/**
 * @public
 */
export interface GetExpenseAnalysisRequest {
  /**
   * @public
   * <p>A unique identifier for the text detection job. The <code>JobId</code> is returned from
   *     <code>StartExpenseAnalysis</code>. A <code>JobId</code> value is only valid for 7 days.</p>
   */
  JobId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return per paginated call. The largest value you can
   *    specify is 20. If you specify a value greater than 20, a maximum of 20 results is
   *    returned. The default value is 20.</p>
   */
  MaxResults?: number;

  /**
   * @public
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
   * @public
   * <p>Information about a document that Amazon Textract processed. <code>DocumentMetadata</code> is
   *    returned in every page of paginated responses from an Amazon Textract operation.</p>
   */
  DocumentMetadata?: DocumentMetadata;

  /**
   * @public
   * <p>The current status of the text detection job.</p>
   */
  JobStatus?: JobStatus;

  /**
   * @public
   * <p>If the response is truncated, Amazon Textract returns this token. You can use this token in
   *    the subsequent request to retrieve the next set of text-detection results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The expenses detected by Amazon Textract.</p>
   */
  ExpenseDocuments?: ExpenseDocument[];

  /**
   * @public
   * <p>A list of warnings that occurred during the text-detection operation for the
   *    document.</p>
   */
  Warnings?: Warning[];

  /**
   * @public
   * <p>Returns if the detection job could not be completed. Contains explanation for what error occured. </p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>The current model version of AnalyzeExpense.</p>
   */
  AnalyzeExpenseModelVersion?: string;
}

/**
 * @public
 */
export interface GetLendingAnalysisRequest {
  /**
   * @public
   * <p>A unique identifier for the lending or text-detection job. The <code>JobId</code> is
   *             returned from <code>StartLendingAnalysis</code>. A <code>JobId</code> value is only
   *             valid for 7 days.</p>
   */
  JobId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return per paginated call. The largest value that you
   *             can specify is 30. If you specify a value greater than 30, a maximum of 30 results is
   *             returned. The default value is 30.</p>
   */
  MaxResults?: number;

  /**
   * @public
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
   * @public
   * <p>The predicted value of a detected object.</p>
   */
  Value?: string;

  /**
   * @public
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
   * @public
   * <p>The class, or document type, assigned to a detected Page object. The class, or document type,
   *          assigned to a detected Page object.</p>
   */
  PageType: Prediction[] | undefined;

  /**
   * @public
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
   * @public
   * <p>The page number for a page, with regard to whole submission.</p>
   */
  Page?: number;

  /**
   * @public
   * <p>The classifier result for a given page.</p>
   */
  PageClassification?: PageClassification;

  /**
   * @public
   * <p>An array of Extraction to hold structured data. e.g. normalized key value pairs instead of raw OCR detections .</p>
   */
  Extractions?: Extraction[];
}

/**
 * @public
 */
export interface GetLendingAnalysisResponse {
  /**
   * @public
   * <p>Information about the input document.</p>
   */
  DocumentMetadata?: DocumentMetadata;

  /**
   * @public
   * <p> The current status of the lending analysis job.</p>
   */
  JobStatus?: JobStatus;

  /**
   * @public
   * <p>If the response is truncated, Amazon Textract returns this token.
   *             You can use this token in the subsequent request to retrieve the next set of lending results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p> Holds the information returned by one of AmazonTextract's document analysis
   *             operations for the pinstripe.</p>
   */
  Results?: LendingResult[];

  /**
   * @public
   * <p> A list of warnings that occurred during the lending analysis operation. </p>
   */
  Warnings?: Warning[];

  /**
   * @public
   * <p>  Returns if the lending analysis job could not be completed. Contains explanation for
   *             what error occurred. </p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p> The current model version of the Analyze Lending API.</p>
   */
  AnalyzeLendingModelVersion?: string;
}

/**
 * @public
 */
export interface GetLendingAnalysisSummaryRequest {
  /**
   * @public
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
   * @public
   * <p>Contains an array of all DocumentGroup objects.</p>
   */
  DocumentGroups?: DocumentGroup[];

  /**
   * @public
   * <p>UndetectedDocumentTypes.</p>
   */
  UndetectedDocumentTypes?: string[];
}

/**
 * @public
 */
export interface GetLendingAnalysisSummaryResponse {
  /**
   * @public
   * <p>Information about the input document.</p>
   */
  DocumentMetadata?: DocumentMetadata;

  /**
   * @public
   * <p> The current status of the lending analysis job. </p>
   */
  JobStatus?: JobStatus;

  /**
   * @public
   * <p> Contains summary information for documents grouped by type.</p>
   */
  Summary?: LendingSummary;

  /**
   * @public
   * <p>A list of warnings that occurred during the lending analysis operation.</p>
   */
  Warnings?: Warning[];

  /**
   * @public
   * <p>Returns if the lending analysis could not be completed. Contains explanation for what error
   *    occurred.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>The current model version of the Analyze Lending API.</p>
   */
  AnalyzeLendingModelVersion?: string;
}

/**
 * @public
 */
export interface ListAdaptersRequest {
  /**
   * @public
   * <p>Specifies the lower bound for the ListAdapters operation.
   *          Ensures ListAdapters returns only adapters created after the specified creation time.</p>
   */
  AfterCreationTime?: Date;

  /**
   * @public
   * <p>Specifies the upper bound for the ListAdapters operation.
   *          Ensures ListAdapters returns only adapters created before the specified creation time.</p>
   */
  BeforeCreationTime?: Date;

  /**
   * @public
   * <p>The maximum number of results to return when listing adapters.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Identifies the next page of results to return when listing adapters.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAdaptersResponse {
  /**
   * @public
   * <p>A list of adapters that matches the filtering criteria specified when calling ListAdapters.</p>
   */
  Adapters?: AdapterOverview[];

  /**
   * @public
   * <p>Identifies the next page of results to return when listing adapters.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAdapterVersionsRequest {
  /**
   * @public
   * <p>A string containing a unique ID for the adapter to match for when listing adapter versions.</p>
   */
  AdapterId?: string;

  /**
   * @public
   * <p>Specifies the lower bound for the ListAdapterVersions operation.
   *          Ensures ListAdapterVersions returns only adapter versions created after the specified creation time.</p>
   */
  AfterCreationTime?: Date;

  /**
   * @public
   * <p>Specifies the upper bound for the ListAdapterVersions operation.
   *          Ensures ListAdapterVersions returns only adapter versions created after the specified creation time.</p>
   */
  BeforeCreationTime?: Date;

  /**
   * @public
   * <p>The maximum number of results to return when listing adapter versions.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Identifies the next page of results to return when listing adapter versions.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAdapterVersionsResponse {
  /**
   * @public
   * <p>Adapter versions that match the filtering criteria specified when calling ListAdapters.</p>
   */
  AdapterVersions?: AdapterVersionOverview[];

  /**
   * @public
   * <p>Identifies the next page of results to return when listing adapter versions.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that specifies the resource to list tags for.</p>
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>A set of tags (key-value pairs) that are part of the requested resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>The Amazon Simple Notification Service (Amazon SNS) topic to which Amazon Textract publishes the completion status of
 *          an asynchronous document operation. </p>
 */
export interface NotificationChannel {
  /**
   * @public
   * <p>The Amazon SNS topic that Amazon Textract posts the completion status to.</p>
   */
  SNSTopicArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role that gives Amazon Textract publishing permissions to the Amazon SNS topic. </p>
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface StartDocumentAnalysisRequest {
  /**
   * @public
   * <p>The location of the document to be processed.</p>
   */
  DocumentLocation: DocumentLocation | undefined;

  /**
   * @public
   * <p>A list of the types of analysis to perform. Add TABLES to the list to return information
   *          about the tables that are detected in the input document. Add FORMS to return detected
   *          form data. To perform both types of analysis, add TABLES
   *          and FORMS to <code>FeatureTypes</code>. All lines and words detected in the document are
   *          included in the response (including text that isn't related to the value of
   *             <code>FeatureTypes</code>). </p>
   */
  FeatureTypes: FeatureType[] | undefined;

  /**
   * @public
   * <p>The idempotent token that you use to identify the start request. If you use the same
   *          token with multiple <code>StartDocumentAnalysis</code> requests, the same
   *             <code>JobId</code> is returned. Use <code>ClientRequestToken</code> to prevent the same
   *          job from being accidentally started more than once. For more information, see
   *          <a href="https://docs.aws.amazon.com/textract/latest/dg/api-async.html">Calling Amazon Textract Asynchronous Operations</a>.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>An identifier that you specify that's included in the completion notification published
   *          to the Amazon SNS topic. For example, you can use <code>JobTag</code> to identify the type of
   *          document that the completion notification corresponds to (such as a tax form or a
   *          receipt).</p>
   */
  JobTag?: string;

  /**
   * @public
   * <p>The Amazon SNS topic ARN that you want Amazon Textract to publish the completion status of the
   *          operation to. </p>
   */
  NotificationChannel?: NotificationChannel;

  /**
   * @public
   * <p>Sets if the output will go to a customer defined bucket. By default, Amazon Textract will save
   *          the results internally to be accessed by the GetDocumentAnalysis operation.</p>
   */
  OutputConfig?: OutputConfig;

  /**
   * @public
   * <p>The KMS key used to encrypt the inference results. This can be
   *          in either Key ID or Key Alias format. When a KMS key is provided, the
   *          KMS key will be used for server-side encryption of the objects in the
   *          customer bucket. When this parameter is not enabled, the result will
   *          be encrypted server side,using SSE-S3.</p>
   */
  KMSKeyId?: string;

  /**
   * @public
   * <p></p>
   */
  QueriesConfig?: QueriesConfig;

  /**
   * @public
   * <p>Specifies the adapter to be used when analyzing a document.</p>
   */
  AdaptersConfig?: AdaptersConfig;
}

/**
 * @public
 */
export interface StartDocumentAnalysisResponse {
  /**
   * @public
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
   * @public
   * <p>The location of the document to be processed.</p>
   */
  DocumentLocation: DocumentLocation | undefined;

  /**
   * @public
   * <p>The idempotent token that's used to identify the start request. If you use the same
   *          token with multiple <code>StartDocumentTextDetection</code> requests, the same
   *             <code>JobId</code> is returned. Use <code>ClientRequestToken</code> to prevent the same
   *          job from being accidentally started more than once. For more information, see
   *          <a href="https://docs.aws.amazon.com/textract/latest/dg/api-async.html">Calling Amazon Textract Asynchronous Operations</a>.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>An identifier that you specify that's included in the completion notification published
   *          to the Amazon SNS topic. For example, you can use <code>JobTag</code> to identify the type of
   *          document that the completion notification corresponds to (such as a tax form or a
   *          receipt).</p>
   */
  JobTag?: string;

  /**
   * @public
   * <p>The Amazon SNS topic ARN that you want Amazon Textract to publish the completion status of the
   *          operation to. </p>
   */
  NotificationChannel?: NotificationChannel;

  /**
   * @public
   * <p>Sets if the output will go to a customer defined bucket. By default Amazon Textract will
   *          save the results internally to be accessed with the GetDocumentTextDetection operation.</p>
   */
  OutputConfig?: OutputConfig;

  /**
   * @public
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
   * @public
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
   * @public
   * <p>The location of the document to be processed.</p>
   */
  DocumentLocation: DocumentLocation | undefined;

  /**
   * @public
   * <p>The idempotent token that's used to identify the start request. If you use the same token with multiple <code>StartDocumentTextDetection</code> requests, the same <code>JobId</code> is returned.
   *    Use <code>ClientRequestToken</code> to prevent the same job from being accidentally started more than once.
   *    For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/api-async.html">Calling Amazon Textract Asynchronous Operations</a>
   *          </p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>An identifier you specify that's included in the completion notification published
   *    to the Amazon SNS topic. For example, you can use <code>JobTag</code> to identify the type of
   *    document that the completion notification corresponds to (such as a tax form or a
   *    receipt).</p>
   */
  JobTag?: string;

  /**
   * @public
   * <p>The Amazon SNS topic ARN that you want Amazon Textract to publish the completion status of the
   *    operation to. </p>
   */
  NotificationChannel?: NotificationChannel;

  /**
   * @public
   * <p>Sets if the output will go to a customer defined bucket. By default, Amazon Textract will
   *    save the results internally to be accessed by the <code>GetExpenseAnalysis</code>
   *    operation.</p>
   */
  OutputConfig?: OutputConfig;

  /**
   * @public
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
   * @public
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
   * @public
   * <p>The Amazon S3 bucket that contains the document to be processed. It's used by asynchronous
   *          operations.</p>
   *          <p>The input document can be an image file in JPEG or PNG format. It can also be a file in
   *          PDF format.</p>
   */
  DocumentLocation: DocumentLocation | undefined;

  /**
   * @public
   * <p>The idempotent token that you use to identify the start request. If you use the same token
   *    with multiple <code>StartLendingAnalysis</code> requests, the same <code>JobId</code> is
   *    returned. Use <code>ClientRequestToken</code> to prevent the same job from being accidentally
   *    started more than once. For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/api-sync.html">Calling Amazon Textract Asynchronous Operations</a>.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>An identifier that you specify to be included in the completion notification published to
   *    the Amazon SNS topic. For example, you can use <code>JobTag</code> to identify the type of
   *    document that the completion notification corresponds to (such as a tax form or a
   *    receipt).</p>
   */
  JobTag?: string;

  /**
   * @public
   * <p>The Amazon Simple Notification Service (Amazon SNS) topic to which Amazon Textract publishes the completion status of
   *          an asynchronous document operation. </p>
   */
  NotificationChannel?: NotificationChannel;

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
  OutputConfig?: OutputConfig;

  /**
   * @public
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
   * @public
   * <p>A unique identifier for the lending or text-detection job. The <code>JobId</code> is
   *    returned from <code>StartLendingAnalysis</code>. A <code>JobId</code> value is only valid for 7
   *    days.</p>
   */
  JobId?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that specifies the resource to be tagged.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>A set of tags (key-value pairs) that you want to assign to the resource.</p>
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that specifies the resource to be untagged.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>Specifies the tags to be removed from the resource specified by the ResourceARN.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateAdapterRequest {
  /**
   * @public
   * <p>A string containing a unique ID for the adapter that will be updated.</p>
   */
  AdapterId: string | undefined;

  /**
   * @public
   * <p>The new description to be applied to the adapter.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The new name to be applied to the adapter.</p>
   */
  AdapterName?: string;

  /**
   * @public
   * <p>The new auto-update status to be applied to the adapter.</p>
   */
  AutoUpdate?: AutoUpdate;
}

/**
 * @public
 */
export interface UpdateAdapterResponse {
  /**
   * @public
   * <p>A string containing a unique ID for the adapter that has been updated.</p>
   */
  AdapterId?: string;

  /**
   * @public
   * <p>A string containing the name of the adapter that has been updated.</p>
   */
  AdapterName?: string;

  /**
   * @public
   * <p>An object specifying the creation time of the the adapter that has been updated.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>A string containing the description of the adapter that has been updated.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>List of the targeted feature types for the updated adapter.</p>
   */
  FeatureTypes?: FeatureType[];

  /**
   * @public
   * <p>The auto-update status of the adapter that has been updated.</p>
   */
  AutoUpdate?: AutoUpdate;
}
