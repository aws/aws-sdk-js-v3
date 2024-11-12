// smithy-typescript generated code
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
} from "@smithy/smithy-client";

import { TextractServiceException as __BaseException } from "./TextractServiceException";

/**
 * <p>You aren't authorized to perform the action. Use the Amazon Resource Name (ARN)
 *             of an authorized user or IAM role to perform the operation.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Code?: string | undefined;
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
 * <p>An adapter selected for use when analyzing documents. Contains an adapter ID and a version number.
 *          Contains information on pages selected for analysis when analyzing documents asychronously.</p>
 * @public
 */
export interface Adapter {
  /**
   * <p>A unique identifier for the adapter resource.</p>
   * @public
   */
  AdapterId: string | undefined;

  /**
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
   * @public
   */
  Pages?: string[] | undefined;

  /**
   * <p>A string that identifies the version of the adapter.</p>
   * @public
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
 * <p>Contains information on the adapter, including the adapter ID, Name, Creation time, and feature types.</p>
 * @public
 */
export interface AdapterOverview {
  /**
   * <p>A unique identifier for the adapter resource.</p>
   * @public
   */
  AdapterId?: string | undefined;

  /**
   * <p>A string naming the adapter resource.</p>
   * @public
   */
  AdapterName?: string | undefined;

  /**
   * <p>The date and time that the adapter was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The feature types that the adapter is operating on.</p>
   * @public
   */
  FeatureTypes?: FeatureType[] | undefined;
}

/**
 * <p>Contains information about adapters used when analyzing a document,
 *          with each adapter specified using an AdapterId and version</p>
 * @public
 */
export interface AdaptersConfig {
  /**
   * <p>A list of adapters to be used when analyzing the specified document.</p>
   * @public
   */
  Adapters: Adapter[] | undefined;
}

/**
 * <p>The S3 bucket name and file name that identifies the document.</p>
 *          <p>The AWS Region for the S3 bucket that contains the document must match the Region that
 *          you use for Amazon Textract operations.</p>
 *          <p>For Amazon Textract to process a file in an S3 bucket, the user must have
 *          permission to access the S3 bucket and file.
 *
 *       </p>
 * @public
 */
export interface S3Object {
  /**
   * <p>The name of the S3 bucket. Note that the # character is not valid in the file
   *          name.</p>
   * @public
   */
  Bucket?: string | undefined;

  /**
   * <p>The file name of the input document. Synchronous operations can use image files that are
   *          in JPEG or PNG format. Asynchronous operations also support PDF and TIFF format files.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>If the bucket has versioning enabled, you can specify the object version. </p>
   * @public
   */
  Version?: string | undefined;
}

/**
 * <p>The dataset configuration options for a given version of an adapter.
 *          Can include an Amazon S3 bucket if specified.</p>
 * @public
 */
export interface AdapterVersionDatasetConfig {
  /**
   * <p>The S3 bucket name and file name that identifies the document.</p>
   *          <p>The AWS Region for the S3 bucket that contains the document must match the Region that
   *          you use for Amazon Textract operations.</p>
   *          <p>For Amazon Textract to process a file in an S3 bucket, the user must have
   *          permission to access the S3 bucket and file.
   *
   *       </p>
   * @public
   */
  ManifestS3Object?: S3Object | undefined;
}

/**
 * <p>The evaluation metrics (F1 score, Precision, and Recall) for an adapter version.</p>
 * @public
 */
export interface EvaluationMetric {
  /**
   * <p>The F1 score for an adapter version.</p>
   * @public
   */
  F1Score?: number | undefined;

  /**
   * <p>The Precision score for an adapter version.</p>
   * @public
   */
  Precision?: number | undefined;

  /**
   * <p>The Recall score for an adapter version.</p>
   * @public
   */
  Recall?: number | undefined;
}

/**
 * <p>Contains information on the metrics used to evalute the peformance of a given adapter version. Includes data for
 *          baseline model performance and individual adapter version perfromance.</p>
 * @public
 */
export interface AdapterVersionEvaluationMetric {
  /**
   * <p>The F1 score, precision, and recall metrics for the baseline model.</p>
   * @public
   */
  Baseline?: EvaluationMetric | undefined;

  /**
   * <p>The F1 score, precision, and recall metrics for the baseline model.</p>
   * @public
   */
  AdapterVersion?: EvaluationMetric | undefined;

  /**
   * <p>Indicates the feature type being analyzed by a given adapter version.</p>
   * @public
   */
  FeatureType?: FeatureType | undefined;
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
 * <p>Summary info for an adapter version. Contains information on the AdapterId, AdapterVersion, CreationTime, FeatureTypes, and Status.</p>
 * @public
 */
export interface AdapterVersionOverview {
  /**
   * <p>A unique identifier for the adapter associated with a given adapter version.</p>
   * @public
   */
  AdapterId?: string | undefined;

  /**
   * <p>An identified for a given adapter version.</p>
   * @public
   */
  AdapterVersion?: string | undefined;

  /**
   * <p>The date and time that a given adapter version was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The feature types that the adapter version is operating on.</p>
   * @public
   */
  FeatureTypes?: FeatureType[] | undefined;

  /**
   * <p>Contains information on the status of a given adapter version.</p>
   * @public
   */
  Status?: AdapterVersionStatus | undefined;

  /**
   * <p>A message explaining the status of a given adapter vesion.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

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
 * @public
 */
export interface Document {
  /**
   * <p>A blob of base64-encoded document bytes. The maximum size of a document that's provided
   *          in a blob of bytes is 5 MB. The document bytes must be in PNG or JPEG format.</p>
   *          <p>If you're using an AWS SDK to call Amazon Textract, you might not need to base64-encode
   *          image bytes passed using the <code>Bytes</code> field. </p>
   * @public
   */
  Bytes?: Uint8Array | undefined;

  /**
   * <p>Identifies an S3 object as the document source. The maximum size of a document that's
   *          stored in an S3 bucket is 5 MB.</p>
   * @public
   */
  S3Object?: S3Object | undefined;
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
 * <p>Allows you to set attributes of the image. Currently, you can declare an image as free
 *          of personally identifiable information and adult content. </p>
 * @public
 */
export interface HumanLoopDataAttributes {
  /**
   * <p>Sets whether the input image is free of personally identifiable information or adult
   *          content.</p>
   * @public
   */
  ContentClassifiers?: ContentClassifier[] | undefined;
}

/**
 * <p>Sets up the human review workflow the document will be sent to if one of the conditions
 *          is met. You can also set certain attributes of the image before review. </p>
 * @public
 */
export interface HumanLoopConfig {
  /**
   * <p>The name of the human workflow used for this image. This should be kept unique within a
   *          region.</p>
   * @public
   */
  HumanLoopName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition.</p>
   * @public
   */
  FlowDefinitionArn: string | undefined;

  /**
   * <p>Sets attributes of the input data.</p>
   * @public
   */
  DataAttributes?: HumanLoopDataAttributes | undefined;
}

/**
 * <p>Each query contains the question you want to ask in the Text and the alias you want to associate.</p>
 * @public
 */
export interface Query {
  /**
   * <p>Question that Amazon Textract will apply to the document. An example would be "What is the customer's SSN?"</p>
   * @public
   */
  Text: string | undefined;

  /**
   * <p>Alias attached to the query, for ease of location.</p>
   * @public
   */
  Alias?: string | undefined;

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
   * @public
   */
  Pages?: string[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface QueriesConfig {
  /**
   * <p></p>
   * @public
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
   * @public
   */
  Document: Document | undefined;

  /**
   * <p>A list of the types of analysis to perform. Add TABLES to the list to return information
   *          about the tables that are detected in the input document. Add FORMS to return detected form
   *          data. Add SIGNATURES to return the locations of detected signatures. Add LAYOUT to the list
   *          to return information about the layout of the document.  All lines and words detected in the document are included in the response (including
   *          text that isn't related to the value of <code>FeatureTypes</code>). </p>
   * @public
   */
  FeatureTypes: FeatureType[] | undefined;

  /**
   * <p>Sets the configuration for the human in the loop workflow for analyzing
   *          documents.</p>
   * @public
   */
  HumanLoopConfig?: HumanLoopConfig | undefined;

  /**
   * <p>Contains Queries and the alias for those Queries, as determined by the input. </p>
   * @public
   */
  QueriesConfig?: QueriesConfig | undefined;

  /**
   * <p>Specifies the adapter to be used when analyzing a document.</p>
   * @public
   */
  AdaptersConfig?: AdaptersConfig | undefined;
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
 * @public
 */
export interface BoundingBox {
  /**
   * <p>The width of the bounding box as a ratio of the overall document page
   *          width.</p>
   * @public
   */
  Width?: number | undefined;

  /**
   * <p>The height of the bounding box as a ratio of the overall document page
   *          height.</p>
   * @public
   */
  Height?: number | undefined;

  /**
   * <p>The left coordinate of the bounding box as a ratio of overall document page
   *          width.</p>
   * @public
   */
  Left?: number | undefined;

  /**
   * <p>The top coordinate of the bounding box as a ratio of overall document page
   *          height.</p>
   * @public
   */
  Top?: number | undefined;
}

/**
 * <p>The X and Y coordinates of a point on a document page. The X and Y
 *          values that are returned are ratios of the overall document page size. For example, if the
 *          input document is 700 x 200 and the operation returns X=0.5 and Y=0.25, then the point is
 *          at the (350,50) pixel coordinate on the document page.</p>
 *          <p>An array of <code>Point</code> objects, <code>Polygon</code>, is returned
 *          by <a>DetectDocumentText</a>. <code>Polygon</code> represents a fine-grained
 *          polygon around detected text. For more information, see Geometry in the Amazon Textract
 *          Developer Guide. </p>
 * @public
 */
export interface Point {
  /**
   * <p>The value of the X coordinate for a point on a <code>Polygon</code>.</p>
   * @public
   */
  X?: number | undefined;

  /**
   * <p>The value of the Y coordinate for a point on a <code>Polygon</code>.</p>
   * @public
   */
  Y?: number | undefined;
}

/**
 * <p>Information about where the following items are located on a document page: detected
 *          page, text, key-value pairs, tables, table cells, and selection elements.</p>
 * @public
 */
export interface Geometry {
  /**
   * <p>An axis-aligned coarse representation of the location of the recognized item on the
   *          document page.</p>
   * @public
   */
  BoundingBox?: BoundingBox | undefined;

  /**
   * <p>Within the bounding box, a fine-grained polygon around the recognized item.</p>
   * @public
   */
  Polygon?: Point[] | undefined;
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
 * <p>Information about how blocks are related to each other. A <code>Block</code> object
 *          contains 0 or more <code>Relation</code> objects in a list, <code>Relationships</code>. For
 *          more information, see <a>Block</a>.</p>
 *          <p>The <code>Type</code> element provides the type of the relationship for all blocks in
 *          the <code>IDs</code> array. </p>
 * @public
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
   * @public
   */
  Type?: RelationshipType | undefined;

  /**
   * <p>An
   *          array of IDs for related blocks. You can get the type of the relationship from the
   *             <code>Type</code> element.</p>
   * @public
   */
  Ids?: string[] | undefined;
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
 * @public
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
   * @public
   */
  BlockType?: BlockType | undefined;

  /**
   * <p>The confidence score that Amazon Textract has in the accuracy of the recognized text and
   *          the accuracy of the geometry points around the recognized text.</p>
   * @public
   */
  Confidence?: number | undefined;

  /**
   * <p>The word or line of text that's recognized by Amazon Textract. </p>
   * @public
   */
  Text?: string | undefined;

  /**
   * <p>The kind of text that Amazon Textract has detected. Can check for handwritten text and
   *          printed text.</p>
   * @public
   */
  TextType?: TextType | undefined;

  /**
   * <p>The row in which a table cell is located. The first row position is 1.
   *             <code>RowIndex</code> isn't returned by <code>DetectDocumentText</code> and
   *             <code>GetDocumentTextDetection</code>.</p>
   * @public
   */
  RowIndex?: number | undefined;

  /**
   * <p>The column in which a table cell appears. The first column position is 1.
   *             <code>ColumnIndex</code> isn't returned by <code>DetectDocumentText</code> and
   *             <code>GetDocumentTextDetection</code>.</p>
   * @public
   */
  ColumnIndex?: number | undefined;

  /**
   * <p>The number of rows that a table cell spans. <code>RowSpan</code> isn't returned by
   *             <code>DetectDocumentText</code> and <code>GetDocumentTextDetection</code>.</p>
   * @public
   */
  RowSpan?: number | undefined;

  /**
   * <p>The number of columns that a table cell spans. <code>ColumnSpan</code> isn't returned by
   *             <code>DetectDocumentText</code> and <code>GetDocumentTextDetection</code>. </p>
   * @public
   */
  ColumnSpan?: number | undefined;

  /**
   * <p>The location of the recognized text on the image. It includes an axis-aligned, coarse
   *          bounding box that surrounds the text, and a finer-grain polygon for more accurate spatial
   *          information. </p>
   * @public
   */
  Geometry?: Geometry | undefined;

  /**
   * <p>The identifier for the recognized text. The identifier is only unique for a single
   *          operation. </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>A list of relationship objects that describe how blocks are related to each other. For
   *          example, a LINE block object contains a CHILD relationship type with the WORD blocks that
   *          make up the line of text. There aren't Relationship objects in the list for relationships
   *          that don't exist, such as when the current block has no child blocks.</p>
   * @public
   */
  Relationships?: Relationship[] | undefined;

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
   * @public
   */
  EntityTypes?: EntityType[] | undefined;

  /**
   * <p>The selection status of a selection element, such as an option button or check box.
   *       </p>
   * @public
   */
  SelectionStatus?: SelectionStatus | undefined;

  /**
   * <p>The page on which a block was detected. <code>Page</code> is returned by synchronous and
   *          asynchronous operations. Page values greater than 1 are only returned for multipage
   *          documents that are in PDF or TIFF format. A scanned image (JPEG/PNG) provided to an
   *          asynchronous operation, even if it contains multiple document pages, is considered a
   *          single-page document. This means that for scanned images the value of <code>Page</code> is
   *          always 1. </p>
   * @public
   */
  Page?: number | undefined;

  /**
   * <p></p>
   * @public
   */
  Query?: Query | undefined;
}

/**
 * <p>Information about the input document.</p>
 * @public
 */
export interface DocumentMetadata {
  /**
   * <p>The number of pages that are detected in the document.</p>
   * @public
   */
  Pages?: number | undefined;
}

/**
 * <p>Shows the results of the human in the loop evaluation. If there is no HumanLoopArn, the
 *          input did not trigger human review.</p>
 * @public
 */
export interface HumanLoopActivationOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the HumanLoop created.</p>
   * @public
   */
  HumanLoopArn?: string | undefined;

  /**
   * <p>Shows if and why human review was needed.</p>
   * @public
   */
  HumanLoopActivationReasons?: string[] | undefined;

  /**
   * <p>Shows the result of condition evaluations, including those conditions which activated a
   *          human review.</p>
   * @public
   */
  HumanLoopActivationConditionsEvaluationResults?: __LazyJsonString | string | undefined;
}

/**
 * @public
 */
export interface AnalyzeDocumentResponse {
  /**
   * <p>Metadata about the analyzed document. An example is the number of pages.</p>
   * @public
   */
  DocumentMetadata?: DocumentMetadata | undefined;

  /**
   * <p>The items that are detected and analyzed by <code>AnalyzeDocument</code>.</p>
   * @public
   */
  Blocks?: Block[] | undefined;

  /**
   * <p>Shows the results of the human in the loop evaluation.</p>
   * @public
   */
  HumanLoopActivationOutput?: HumanLoopActivationOutput | undefined;

  /**
   * <p>The version of the model used to analyze the document.</p>
   * @public
   */
  AnalyzeDocumentModelVersion?: string | undefined;
}

/**
 * <p>Amazon Textract isn't able to read the document. For more information on the document
 *          limits in Amazon Textract, see <a>limits</a>.</p>
 * @public
 */
export class BadDocumentException extends __BaseException {
  readonly name: "BadDocumentException" = "BadDocumentException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Code?: string | undefined;
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
 * <p>The document can't be processed because it's too large. The maximum document size for
 *          synchronous operations 10 MB. The maximum document size for asynchronous operations is 500
 *          MB for PDF files.</p>
 * @public
 */
export class DocumentTooLargeException extends __BaseException {
  readonly name: "DocumentTooLargeException" = "DocumentTooLargeException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Code?: string | undefined;
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
 * <p>Indicates you have exceeded the maximum number of active human in the loop workflows available</p>
 * @public
 */
export class HumanLoopQuotaExceededException extends __BaseException {
  readonly name: "HumanLoopQuotaExceededException" = "HumanLoopQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The resource type.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The quota code.</p>
   * @public
   */
  QuotaCode?: string | undefined;

  /**
   * <p>The service code.</p>
   * @public
   */
  ServiceCode?: string | undefined;

  Message?: string | undefined;
  Code?: string | undefined;
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
 * <p>Amazon Textract experienced a service issue. Try your call again.</p>
 * @public
 */
export class InternalServerError extends __BaseException {
  readonly name: "InternalServerError" = "InternalServerError";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  Code?: string | undefined;
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
 * <p>An input parameter violated a constraint. For example, in synchronous operations,
 *        an <code>InvalidParameterException</code> exception occurs
 *       when neither of the <code>S3Object</code> or <code>Bytes</code> values are supplied in the <code>Document</code>
 *       request parameter.
 *        Validate your parameter before calling the API operation again.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Code?: string | undefined;
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
 * <p>Amazon Textract is unable to access the S3 object that's specified in the request.
 *          for more information, <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html">Configure Access to Amazon S3</a>
 *          For troubleshooting information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/troubleshooting.html">Troubleshooting Amazon S3</a>
 *          </p>
 * @public
 */
export class InvalidS3ObjectException extends __BaseException {
  readonly name: "InvalidS3ObjectException" = "InvalidS3ObjectException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Code?: string | undefined;
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
 * <p>The number of requests exceeded your throughput limit. If you want to increase this limit,
 *          contact Amazon Textract.</p>
 * @public
 */
export class ProvisionedThroughputExceededException extends __BaseException {
  readonly name: "ProvisionedThroughputExceededException" = "ProvisionedThroughputExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Code?: string | undefined;
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
 * <p>Amazon Textract is temporarily unable to process the request. Try your call again.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  Code?: string | undefined;
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
 * <p>The format of the input document isn't supported. Documents for operations can be in
 *          PNG, JPEG, PDF, or TIFF format.</p>
 * @public
 */
export class UnsupportedDocumentException extends __BaseException {
  readonly name: "UnsupportedDocumentException" = "UnsupportedDocumentException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Code?: string | undefined;
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
   * @public
   */
  Document: Document | undefined;
}

/**
 * <p>Returns the kind of currency detected.</p>
 * @public
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
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>Percentage confideence in the detected currency.</p>
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * <p>Shows the group that a certain key belongs to. This helps differentiate between
 *          names and addresses for different organizations, that can be hard to determine
 *          via JSON response.</p>
 * @public
 */
export interface ExpenseGroupProperty {
  /**
   * <p>Informs you on whether the expense group is a name or an address.</p>
   * @public
   */
  Types?: string[] | undefined;

  /**
   * <p>Provides a group Id number, which will be the same for each in the group.</p>
   * @public
   */
  Id?: string | undefined;
}

/**
 * <p>An object used to store information about the Value or Label detected by Amazon Textract.</p>
 * @public
 */
export interface ExpenseDetection {
  /**
   * <p>The word or line of text recognized by Amazon Textract</p>
   * @public
   */
  Text?: string | undefined;

  /**
   * <p>Information about where the following items are located on a document page: detected
   *          page, text, key-value pairs, tables, table cells, and selection elements.</p>
   * @public
   */
  Geometry?: Geometry | undefined;

  /**
   * <p>The confidence in detection, as a percentage</p>
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * <p>An object used to store information about the Type detected by Amazon Textract.</p>
 * @public
 */
export interface ExpenseType {
  /**
   * <p>The word or line of text detected by Amazon Textract.</p>
   * @public
   */
  Text?: string | undefined;

  /**
   * <p>The confidence of accuracy, as a percentage.</p>
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * <p>Breakdown of detected information, seperated into
 *          the catagories Type, LabelDetection, and ValueDetection</p>
 * @public
 */
export interface ExpenseField {
  /**
   * <p>The implied label of a detected element. Present alongside LabelDetection for explicit elements.</p>
   * @public
   */
  Type?: ExpenseType | undefined;

  /**
   * <p>The explicitly stated label of a detected element.</p>
   * @public
   */
  LabelDetection?: ExpenseDetection | undefined;

  /**
   * <p>The value of a detected element. Present in explicit and implicit elements.</p>
   * @public
   */
  ValueDetection?: ExpenseDetection | undefined;

  /**
   * <p>The page number the value was detected on.</p>
   * @public
   */
  PageNumber?: number | undefined;

  /**
   * <p>Shows the kind of currency, both the code and confidence associated with any monatary value
   *          detected.</p>
   * @public
   */
  Currency?: ExpenseCurrency | undefined;

  /**
   * <p>Shows which group a response object belongs to, such as whether an address line
   *          belongs to the vendor's address or the recipent's address.</p>
   * @public
   */
  GroupProperties?: ExpenseGroupProperty[] | undefined;
}

/**
 * <p>A structure that holds information about the different lines found in a document's tables.</p>
 * @public
 */
export interface LineItemFields {
  /**
   * <p>ExpenseFields used to show information from detected lines on a table.</p>
   * @public
   */
  LineItemExpenseFields?: ExpenseField[] | undefined;
}

/**
 * <p>A grouping of tables which contain LineItems, with each table identified by the table's <code>LineItemGroupIndex</code>.</p>
 * @public
 */
export interface LineItemGroup {
  /**
   * <p>The number used to identify a specific table in a document. The first table encountered will have a LineItemGroupIndex of 1, the second 2, etc.</p>
   * @public
   */
  LineItemGroupIndex?: number | undefined;

  /**
   * <p>The breakdown of information on a particular line of a table. </p>
   * @public
   */
  LineItems?: LineItemFields[] | undefined;
}

/**
 * <p>The structure holding all the information returned by AnalyzeExpense</p>
 * @public
 */
export interface ExpenseDocument {
  /**
   * <p>Denotes which invoice or receipt in the document the information is coming from.
   *       First document will be 1, the second 2, and so on.</p>
   * @public
   */
  ExpenseIndex?: number | undefined;

  /**
   * <p>Any information found outside of a table by Amazon Textract.</p>
   * @public
   */
  SummaryFields?: ExpenseField[] | undefined;

  /**
   * <p>Information detected on each table of a document, seperated into <code>LineItems</code>.</p>
   * @public
   */
  LineItemGroups?: LineItemGroup[] | undefined;

  /**
   * <p>This is a block object, the same as reported when DetectDocumentText is run on a document.
   *       It provides word level recognition of text.</p>
   * @public
   */
  Blocks?: Block[] | undefined;
}

/**
 * @public
 */
export interface AnalyzeExpenseResponse {
  /**
   * <p>Information about the input document.</p>
   * @public
   */
  DocumentMetadata?: DocumentMetadata | undefined;

  /**
   * <p>The expenses detected by Amazon Textract.</p>
   * @public
   */
  ExpenseDocuments?: ExpenseDocument[] | undefined;
}

/**
 * @public
 */
export interface AnalyzeIDRequest {
  /**
   * <p>The document being passed to AnalyzeID.</p>
   * @public
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
 * <p>Contains information relating to dates in a document, including the type
 *          of value, and the value.</p>
 * @public
 */
export interface NormalizedValue {
  /**
   * <p>The value of the date, written as Year-Month-DayTHour:Minute:Second.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The normalized type of the value detected. In this case, DATE.</p>
   * @public
   */
  ValueType?: ValueType | undefined;
}

/**
 * <p>Used to contain the information detected by an AnalyzeID operation.</p>
 * @public
 */
export interface AnalyzeIDDetections {
  /**
   * <p>Text of either the normalized field or value associated with it.</p>
   * @public
   */
  Text: string | undefined;

  /**
   * <p>Only returned for dates, returns the type of value detected and the date
   *          written in a more machine readable way.</p>
   * @public
   */
  NormalizedValue?: NormalizedValue | undefined;

  /**
   * <p>The confidence score of the detected text.</p>
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * <p>Structure containing both the normalized type of the extracted information
 *          and the text associated with it. These are extracted as Type and Value respectively.</p>
 * @public
 */
export interface IdentityDocumentField {
  /**
   * <p>Used to contain the information detected by an AnalyzeID operation.</p>
   * @public
   */
  Type?: AnalyzeIDDetections | undefined;

  /**
   * <p>Used to contain the information detected by an AnalyzeID operation.</p>
   * @public
   */
  ValueDetection?: AnalyzeIDDetections | undefined;
}

/**
 * <p>The structure that lists each document processed in an AnalyzeID operation.</p>
 * @public
 */
export interface IdentityDocument {
  /**
   * <p>Denotes the placement of a document in the IdentityDocument list. The first document
   *          is marked 1, the second 2 and so on.</p>
   * @public
   */
  DocumentIndex?: number | undefined;

  /**
   * <p>The structure used to record information extracted from identity documents.
   *          Contains both normalized field and value of the extracted text.</p>
   * @public
   */
  IdentityDocumentFields?: IdentityDocumentField[] | undefined;

  /**
   * <p>Individual word recognition, as returned by document detection.</p>
   * @public
   */
  Blocks?: Block[] | undefined;
}

/**
 * @public
 */
export interface AnalyzeIDResponse {
  /**
   * <p>The list of documents processed by AnalyzeID. Includes a number denoting their place in
   *          the list and the response structure for the document.</p>
   * @public
   */
  IdentityDocuments?: IdentityDocument[] | undefined;

  /**
   * <p>Information about the input document.</p>
   * @public
   */
  DocumentMetadata?: DocumentMetadata | undefined;

  /**
   * <p>The version of the AnalyzeIdentity API being used to process documents.</p>
   * @public
   */
  AnalyzeIDModelVersion?: string | undefined;
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
 * <p>Updating or deleting a resource can cause an inconsistent state.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Code?: string | undefined;
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
   * <p>The name to be assigned to the adapter being created.</p>
   * @public
   */
  AdapterName: string | undefined;

  /**
   * <p>Idempotent token is used to recognize the request. If the same token is used with multiple
   *          CreateAdapter requests, the same session is returned.
   *          This token is employed to avoid unintentionally creating the same session multiple times.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The description to be assigned to the adapter being created.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The type of feature that the adapter is being trained on. Currrenly, supported feature
   *          types are: <code>QUERIES</code>
   *          </p>
   * @public
   */
  FeatureTypes: FeatureType[] | undefined;

  /**
   * <p>Controls whether or not the adapter should automatically update.</p>
   * @public
   */
  AutoUpdate?: AutoUpdate | undefined;

  /**
   * <p>A list of tags to be added to the adapter.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAdapterResponse {
  /**
   * <p>A string containing the unique ID for the adapter that has been created.</p>
   * @public
   */
  AdapterId?: string | undefined;
}

/**
 * <p>A <code>ClientRequestToken</code> input parameter was reused with an operation, but at
 *          least one of the other input parameters is different from the previous call to the
 *          operation. </p>
 * @public
 */
export class IdempotentParameterMismatchException extends __BaseException {
  readonly name: "IdempotentParameterMismatchException" = "IdempotentParameterMismatchException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Code?: string | undefined;
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
 * <p>An Amazon Textract service limit was exceeded. For example, if you start too many
 *          asynchronous jobs concurrently, calls to start operations
 *             (<code>StartDocumentTextDetection</code>, for example) raise a LimitExceededException
 *          exception (HTTP status code: 400) until the number of concurrently running jobs is below
 *          the Amazon Textract service limit. </p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Code?: string | undefined;
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
 * <p>Returned when a request cannot be completed as it would exceed a maximum service quota.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Code?: string | undefined;
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
 * <p>  Indicates that a request was not valid. Check request for proper formatting. </p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Code?: string | undefined;
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
 * @public
 */
export interface OutputConfig {
  /**
   * <p>The name of the bucket your output will go to.</p>
   * @public
   */
  S3Bucket: string | undefined;

  /**
   * <p>The prefix of the object key that the output will be saved to. When not enabled, the
   *          prefix will be “textract_output".</p>
   * @public
   */
  S3Prefix?: string | undefined;
}

/**
 * @public
 */
export interface CreateAdapterVersionRequest {
  /**
   * <p>A string containing a unique ID for the adapter that will receive a new version.</p>
   * @public
   */
  AdapterId: string | undefined;

  /**
   * <p>Idempotent token is used to recognize the request. If the same token is used with multiple
   *          CreateAdapterVersion requests, the same session is returned.
   *          This token is employed to avoid unintentionally creating the same session multiple times.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>Specifies a dataset used to train a new adapter version. Takes a ManifestS3Object as the
   *          value.</p>
   * @public
   */
  DatasetConfig: AdapterVersionDatasetConfig | undefined;

  /**
   * <p>The identifier for your AWS Key Management Service key (AWS KMS key). Used to encrypt your documents.</p>
   * @public
   */
  KMSKeyId?: string | undefined;

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
   * @public
   */
  OutputConfig: OutputConfig | undefined;

  /**
   * <p>A set of tags (key-value pairs) that you want to attach to the adapter version. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAdapterVersionResponse {
  /**
   * <p>A string containing the unique ID for the adapter that has received a new version.</p>
   * @public
   */
  AdapterId?: string | undefined;

  /**
   * <p>A string describing the new version of the adapter.</p>
   * @public
   */
  AdapterVersion?: string | undefined;
}

/**
 * <p> Indicates you do not have decrypt permissions with the KMS key entered, or the KMS key
 *         was entered incorrectly. </p>
 * @public
 */
export class InvalidKMSKeyException extends __BaseException {
  readonly name: "InvalidKMSKeyException" = "InvalidKMSKeyException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Code?: string | undefined;
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
 * <p> Returned when an operation tried to access a nonexistent resource. </p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Code?: string | undefined;
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
   * <p>A string containing a unique ID for the adapter to be deleted.</p>
   * @public
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
   * <p>A string containing a unique ID for the adapter version that will be deleted.</p>
   * @public
   */
  AdapterId: string | undefined;

  /**
   * <p>Specifies the adapter version to be deleted.</p>
   * @public
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
   * <p>The input document as base64-encoded bytes or an Amazon S3 object. If you use the AWS CLI
   *          to call Amazon Textract operations, you can't pass image bytes. The document must be an image
   *       in JPEG or PNG format.</p>
   *          <p>If you're using an AWS SDK to call Amazon Textract, you might not need to base64-encode
   *          image bytes that are passed using the <code>Bytes</code> field. </p>
   * @public
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
   * @public
   */
  DocumentMetadata?: DocumentMetadata | undefined;

  /**
   * <p>An array of <code>Block</code> objects that contain the text that's detected in the
   *          document.</p>
   * @public
   */
  Blocks?: Block[] | undefined;

  /**
   * <p></p>
   * @public
   */
  DetectDocumentTextModelVersion?: string | undefined;
}

/**
 * <p>A structure that holds information regarding a detected signature on a page.</p>
 * @public
 */
export interface DetectedSignature {
  /**
   * <p>The page a detected signature was found on.</p>
   * @public
   */
  Page?: number | undefined;
}

/**
 * <p>Contains information about the pages of a document, defined by logical boundary.</p>
 * @public
 */
export interface SplitDocument {
  /**
   * <p>The index for a given document in a DocumentGroup of a specific Type.</p>
   * @public
   */
  Index?: number | undefined;

  /**
   * <p>An array of page numbers for a for a given document, ordered by logical boundary.</p>
   * @public
   */
  Pages?: number[] | undefined;
}

/**
 * <p>A structure containing information about an undetected signature on a page where it was expected but not found.</p>
 * @public
 */
export interface UndetectedSignature {
  /**
   * <p>The page where a signature was expected but not found.</p>
   * @public
   */
  Page?: number | undefined;
}

/**
 * <p>Summary information about documents grouped by the same document type.</p>
 * @public
 */
export interface DocumentGroup {
  /**
   * <p>The type of document that Amazon Textract has detected. See <a href="https://docs.aws.amazon.com/textract/latest/dg/lending-response-objects.html">Analyze Lending Response Objects</a> for a list of all types returned by Textract.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>An array that contains information about the pages of a document, defined by logical boundary.</p>
   * @public
   */
  SplitDocuments?: SplitDocument[] | undefined;

  /**
   * <p>A list of the detected signatures found in a document group.</p>
   * @public
   */
  DetectedSignatures?: DetectedSignature[] | undefined;

  /**
   * <p>A list of any expected signatures not found in a document group.</p>
   * @public
   */
  UndetectedSignatures?: UndetectedSignature[] | undefined;
}

/**
 * <p>The Amazon S3 bucket that contains the document to be processed. It's used by asynchronous
 *          operations.</p>
 *          <p>The input document can be an image file in JPEG or PNG format. It can also be a file in
 *          PDF format.</p>
 * @public
 */
export interface DocumentLocation {
  /**
   * <p>The Amazon S3 bucket that contains the input document.</p>
   * @public
   */
  S3Object?: S3Object | undefined;
}

/**
 * <p>The results extracted for a lending document.</p>
 * @public
 */
export interface LendingDetection {
  /**
   * <p>The text extracted for a detected value in a lending document.</p>
   * @public
   */
  Text?: string | undefined;

  /**
   * <p>The selection status of a selection element, such as an option button or check box.</p>
   * @public
   */
  SelectionStatus?: SelectionStatus | undefined;

  /**
   * <p>Information about where the following items are located on a document page: detected
   *          page, text, key-value pairs, tables, table cells, and selection elements.</p>
   * @public
   */
  Geometry?: Geometry | undefined;

  /**
   * <p>The confidence level for the text of a detected value in a lending document.</p>
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * <p>Holds the normalized key-value pairs returned by AnalyzeDocument, including the document type, detected text, and geometry.</p>
 * @public
 */
export interface LendingField {
  /**
   * <p>The type of the lending document.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The results extracted for a lending document.</p>
   * @public
   */
  KeyDetection?: LendingDetection | undefined;

  /**
   * <p>An array of LendingDetection objects.</p>
   * @public
   */
  ValueDetections?: LendingDetection[] | undefined;
}

/**
 * <p>Information regarding a detected signature on a page.</p>
 * @public
 */
export interface SignatureDetection {
  /**
   * <p>The confidence, from 0 to 100, in the predicted values for a detected signature.</p>
   * @public
   */
  Confidence?: number | undefined;

  /**
   * <p>Information about where the following items are located on a document page: detected
   *          page, text, key-value pairs, tables, table cells, and selection elements.</p>
   * @public
   */
  Geometry?: Geometry | undefined;
}

/**
 * <p>Holds the structured data returned by AnalyzeDocument for lending documents.</p>
 * @public
 */
export interface LendingDocument {
  /**
   * <p>An array of LendingField objects.</p>
   * @public
   */
  LendingFields?: LendingField[] | undefined;

  /**
   * <p>A list of signatures detected in a lending document.</p>
   * @public
   */
  SignatureDetections?: SignatureDetection[] | undefined;
}

/**
 * <p>Contains information extracted by an analysis operation after using StartLendingAnalysis.</p>
 * @public
 */
export interface Extraction {
  /**
   * <p>Holds the structured data returned by AnalyzeDocument for lending documents.</p>
   * @public
   */
  LendingDocument?: LendingDocument | undefined;

  /**
   * <p>The structure holding all the information returned by AnalyzeExpense</p>
   * @public
   */
  ExpenseDocument?: ExpenseDocument | undefined;

  /**
   * <p>The structure that lists each document processed in an AnalyzeID operation.</p>
   * @public
   */
  IdentityDocument?: IdentityDocument | undefined;
}

/**
 * @public
 */
export interface GetAdapterRequest {
  /**
   * <p>A string containing a unique ID for the adapter.</p>
   * @public
   */
  AdapterId: string | undefined;
}

/**
 * @public
 */
export interface GetAdapterResponse {
  /**
   * <p>A string identifying the adapter that information has been retrieved for.</p>
   * @public
   */
  AdapterId?: string | undefined;

  /**
   * <p>The name of the requested adapter.</p>
   * @public
   */
  AdapterName?: string | undefined;

  /**
   * <p>The date and time the requested adapter was created at.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The description for the requested adapter.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>List of the targeted feature types for the requested adapter.</p>
   * @public
   */
  FeatureTypes?: FeatureType[] | undefined;

  /**
   * <p>Binary value indicating if the adapter is being automatically updated or not.</p>
   * @public
   */
  AutoUpdate?: AutoUpdate | undefined;

  /**
   * <p>A set of tags (key-value pairs) associated with the adapter that has been retrieved.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetAdapterVersionRequest {
  /**
   * <p>A string specifying a unique ID for the adapter version you want to retrieve information for.</p>
   * @public
   */
  AdapterId: string | undefined;

  /**
   * <p>A string specifying the adapter version you want to retrieve information for.</p>
   * @public
   */
  AdapterVersion: string | undefined;
}

/**
 * @public
 */
export interface GetAdapterVersionResponse {
  /**
   * <p>A string containing a unique ID for the adapter version being retrieved.</p>
   * @public
   */
  AdapterId?: string | undefined;

  /**
   * <p>A string containing the adapter version that has been retrieved.</p>
   * @public
   */
  AdapterVersion?: string | undefined;

  /**
   * <p>The time that the adapter version was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>List of the targeted feature types for the requested adapter version.</p>
   * @public
   */
  FeatureTypes?: FeatureType[] | undefined;

  /**
   * <p>The status of the adapter version that has been requested.</p>
   * @public
   */
  Status?: AdapterVersionStatus | undefined;

  /**
   * <p>A message that describes the status of the requested adapter version.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Specifies a dataset used to train a new adapter version. Takes a ManifestS3Objec as the
   *          value.</p>
   * @public
   */
  DatasetConfig?: AdapterVersionDatasetConfig | undefined;

  /**
   * <p>The identifier for your AWS Key Management Service key (AWS KMS key). Used to encrypt your documents.</p>
   * @public
   */
  KMSKeyId?: string | undefined;

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
   * @public
   */
  OutputConfig?: OutputConfig | undefined;

  /**
   * <p>The evaluation metrics (F1 score, Precision, and Recall) for the requested version,
   *          grouped by baseline metrics and adapter version.</p>
   * @public
   */
  EvaluationMetrics?: AdapterVersionEvaluationMetric[] | undefined;

  /**
   * <p>A set of tags (key-value pairs) that are associated with the adapter version.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetDocumentAnalysisRequest {
  /**
   * <p>A unique identifier for the text-detection job. The <code>JobId</code> is returned from
   *             <code>StartDocumentAnalysis</code>. A <code>JobId</code> value is only valid for 7
   *          days.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The maximum number of results to return per paginated call. The largest value that you
   *          can specify is 1,000. If you specify a value greater than 1,000, a maximum of 1,000 results
   *          is returned. The default value is 1,000.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the previous response was incomplete (because there are more blocks to retrieve),
   *          Amazon Textract returns a pagination token in the response. You can use this pagination
   *          token to retrieve the next set of blocks.</p>
   * @public
   */
  NextToken?: string | undefined;
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
 * <p>A warning about an issue that occurred during asynchronous text analysis (<a>StartDocumentAnalysis</a>) or asynchronous document text detection (<a>StartDocumentTextDetection</a>). </p>
 * @public
 */
export interface Warning {
  /**
   * <p>The error code for the warning.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>A list of the pages that the warning applies to.</p>
   * @public
   */
  Pages?: number[] | undefined;
}

/**
 * @public
 */
export interface GetDocumentAnalysisResponse {
  /**
   * <p>Information about a document that Amazon Textract processed.
   *             <code>DocumentMetadata</code> is returned in every page of paginated responses from an
   *          Amazon Textract video operation.</p>
   * @public
   */
  DocumentMetadata?: DocumentMetadata | undefined;

  /**
   * <p>The current status of the text detection job.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>If the response is truncated, Amazon Textract returns this token. You can use this token
   *          in the subsequent request to retrieve the next set of text detection results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The results of the text-analysis operation.</p>
   * @public
   */
  Blocks?: Block[] | undefined;

  /**
   * <p>A list of warnings that occurred during the document-analysis operation.</p>
   * @public
   */
  Warnings?: Warning[] | undefined;

  /**
   * <p>Returns if the detection job could not be completed. Contains explanation for what error
   *          occured.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  AnalyzeDocumentModelVersion?: string | undefined;
}

/**
 * <p>An invalid job identifier was passed to an asynchronous analysis operation.</p>
 * @public
 */
export class InvalidJobIdException extends __BaseException {
  readonly name: "InvalidJobIdException" = "InvalidJobIdException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Code?: string | undefined;
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
   * <p>A unique identifier for the text detection job. The <code>JobId</code> is returned from
   *          <code>StartDocumentTextDetection</code>. A <code>JobId</code> value is only valid for 7 days.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The maximum number of results to return per paginated call. The largest value you can
   *          specify is 1,000. If you specify a value greater than 1,000, a maximum of 1,000 results is
   *          returned. The default value is 1,000.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the previous response was incomplete (because there are more blocks to retrieve), Amazon Textract returns a pagination
   *          token in the response. You can use this pagination token to retrieve the next set of blocks.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDocumentTextDetectionResponse {
  /**
   * <p>Information about a document that Amazon Textract processed. <code>DocumentMetadata</code> is
   *          returned in every page of paginated responses from an Amazon Textract video operation.</p>
   * @public
   */
  DocumentMetadata?: DocumentMetadata | undefined;

  /**
   * <p>The current status of the text detection job.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>If the response is truncated, Amazon Textract returns this token. You can use this token in
   *          the subsequent request to retrieve the next set of text-detection results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The results of the text-detection operation.</p>
   * @public
   */
  Blocks?: Block[] | undefined;

  /**
   * <p>A list of warnings that occurred during the text-detection operation for the
   *          document.</p>
   * @public
   */
  Warnings?: Warning[] | undefined;

  /**
   * <p>Returns if the detection job could not be completed. Contains explanation for what error occured. </p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  DetectDocumentTextModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetExpenseAnalysisRequest {
  /**
   * <p>A unique identifier for the text detection job. The <code>JobId</code> is returned from
   *     <code>StartExpenseAnalysis</code>. A <code>JobId</code> value is only valid for 7 days.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The maximum number of results to return per paginated call. The largest value you can
   *    specify is 20. If you specify a value greater than 20, a maximum of 20 results is
   *    returned. The default value is 20.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the previous response was incomplete (because there are more blocks to retrieve), Amazon Textract returns a pagination
   *    token in the response. You can use this pagination token to retrieve the next set of blocks.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetExpenseAnalysisResponse {
  /**
   * <p>Information about a document that Amazon Textract processed. <code>DocumentMetadata</code> is
   *    returned in every page of paginated responses from an Amazon Textract operation.</p>
   * @public
   */
  DocumentMetadata?: DocumentMetadata | undefined;

  /**
   * <p>The current status of the text detection job.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>If the response is truncated, Amazon Textract returns this token. You can use this token in
   *    the subsequent request to retrieve the next set of text-detection results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The expenses detected by Amazon Textract.</p>
   * @public
   */
  ExpenseDocuments?: ExpenseDocument[] | undefined;

  /**
   * <p>A list of warnings that occurred during the text-detection operation for the
   *    document.</p>
   * @public
   */
  Warnings?: Warning[] | undefined;

  /**
   * <p>Returns if the detection job could not be completed. Contains explanation for what error occured. </p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The current model version of AnalyzeExpense.</p>
   * @public
   */
  AnalyzeExpenseModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetLendingAnalysisRequest {
  /**
   * <p>A unique identifier for the lending or text-detection job. The <code>JobId</code> is
   *             returned from <code>StartLendingAnalysis</code>. A <code>JobId</code> value is only
   *             valid for 7 days.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The maximum number of results to return per paginated call. The largest value that you
   *             can specify is 30. If you specify a value greater than 30, a maximum of 30 results is
   *             returned. The default value is 30.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the previous response was incomplete, Amazon Textract returns a pagination token in
   *             the response. You can use this pagination token to retrieve the next set of lending
   *             results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains information regarding predicted values returned by Amazon Textract operations, including the
 *          predicted value and the confidence in the predicted value.</p>
 * @public
 */
export interface Prediction {
  /**
   * <p>The predicted value of a detected object.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>Amazon Textract's confidence in its predicted value.</p>
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * <p>The class assigned to a Page object detected in an input document.
 *          Contains information regarding the predicted type/class of a document's page and the
 *          page number that the Page object was detected on.</p>
 * @public
 */
export interface PageClassification {
  /**
   * <p>The class, or document type, assigned to a detected Page object. The class, or document type,
   *          assigned to a detected Page object.</p>
   * @public
   */
  PageType: Prediction[] | undefined;

  /**
   * <p> The page number the value was detected on, relative to Amazon Textract's starting position.</p>
   * @public
   */
  PageNumber: Prediction[] | undefined;
}

/**
 * <p>Contains the detections for each page analyzed through the Analyze Lending API.</p>
 * @public
 */
export interface LendingResult {
  /**
   * <p>The page number for a page, with regard to whole submission.</p>
   * @public
   */
  Page?: number | undefined;

  /**
   * <p>The classifier result for a given page.</p>
   * @public
   */
  PageClassification?: PageClassification | undefined;

  /**
   * <p>An array of Extraction to hold structured data. e.g. normalized key value pairs instead of raw OCR detections .</p>
   * @public
   */
  Extractions?: Extraction[] | undefined;
}

/**
 * @public
 */
export interface GetLendingAnalysisResponse {
  /**
   * <p>Information about the input document.</p>
   * @public
   */
  DocumentMetadata?: DocumentMetadata | undefined;

  /**
   * <p> The current status of the lending analysis job.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>If the response is truncated, Amazon Textract returns this token.
   *             You can use this token in the subsequent request to retrieve the next set of lending results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> Holds the information returned by one of AmazonTextract's document analysis
   *             operations for the pinstripe.</p>
   * @public
   */
  Results?: LendingResult[] | undefined;

  /**
   * <p> A list of warnings that occurred during the lending analysis operation. </p>
   * @public
   */
  Warnings?: Warning[] | undefined;

  /**
   * <p>  Returns if the lending analysis job could not be completed. Contains explanation for
   *             what error occurred. </p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p> The current model version of the Analyze Lending API.</p>
   * @public
   */
  AnalyzeLendingModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetLendingAnalysisSummaryRequest {
  /**
   * <p> A unique identifier for the lending or text-detection job. The <code>JobId</code> is
   *    returned from StartLendingAnalysis. A <code>JobId</code> value is only valid for 7 days.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * <p>Contains information regarding DocumentGroups and UndetectedDocumentTypes.</p>
 * @public
 */
export interface LendingSummary {
  /**
   * <p>Contains an array of all DocumentGroup objects.</p>
   * @public
   */
  DocumentGroups?: DocumentGroup[] | undefined;

  /**
   * <p>UndetectedDocumentTypes.</p>
   * @public
   */
  UndetectedDocumentTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface GetLendingAnalysisSummaryResponse {
  /**
   * <p>Information about the input document.</p>
   * @public
   */
  DocumentMetadata?: DocumentMetadata | undefined;

  /**
   * <p> The current status of the lending analysis job. </p>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p> Contains summary information for documents grouped by type.</p>
   * @public
   */
  Summary?: LendingSummary | undefined;

  /**
   * <p>A list of warnings that occurred during the lending analysis operation.</p>
   * @public
   */
  Warnings?: Warning[] | undefined;

  /**
   * <p>Returns if the lending analysis could not be completed. Contains explanation for what error
   *    occurred.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The current model version of the Analyze Lending API.</p>
   * @public
   */
  AnalyzeLendingModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListAdaptersRequest {
  /**
   * <p>Specifies the lower bound for the ListAdapters operation.
   *          Ensures ListAdapters returns only adapters created after the specified creation time.</p>
   * @public
   */
  AfterCreationTime?: Date | undefined;

  /**
   * <p>Specifies the upper bound for the ListAdapters operation.
   *          Ensures ListAdapters returns only adapters created before the specified creation time.</p>
   * @public
   */
  BeforeCreationTime?: Date | undefined;

  /**
   * <p>The maximum number of results to return when listing adapters.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Identifies the next page of results to return when listing adapters.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAdaptersResponse {
  /**
   * <p>A list of adapters that matches the filtering criteria specified when calling ListAdapters.</p>
   * @public
   */
  Adapters?: AdapterOverview[] | undefined;

  /**
   * <p>Identifies the next page of results to return when listing adapters.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAdapterVersionsRequest {
  /**
   * <p>A string containing a unique ID for the adapter to match for when listing adapter versions.</p>
   * @public
   */
  AdapterId?: string | undefined;

  /**
   * <p>Specifies the lower bound for the ListAdapterVersions operation.
   *          Ensures ListAdapterVersions returns only adapter versions created after the specified creation time.</p>
   * @public
   */
  AfterCreationTime?: Date | undefined;

  /**
   * <p>Specifies the upper bound for the ListAdapterVersions operation.
   *          Ensures ListAdapterVersions returns only adapter versions created after the specified creation time.</p>
   * @public
   */
  BeforeCreationTime?: Date | undefined;

  /**
   * <p>The maximum number of results to return when listing adapter versions.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Identifies the next page of results to return when listing adapter versions.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAdapterVersionsResponse {
  /**
   * <p>Adapter versions that match the filtering criteria specified when calling ListAdapters.</p>
   * @public
   */
  AdapterVersions?: AdapterVersionOverview[] | undefined;

  /**
   * <p>Identifies the next page of results to return when listing adapter versions.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that specifies the resource to list tags for.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A set of tags (key-value pairs) that are part of the requested resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>The Amazon Simple Notification Service (Amazon SNS) topic to which Amazon Textract publishes the completion status of
 *          an asynchronous document operation. </p>
 * @public
 */
export interface NotificationChannel {
  /**
   * <p>The Amazon SNS topic that Amazon Textract posts the completion status to.</p>
   * @public
   */
  SNSTopicArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that gives Amazon Textract publishing permissions to the Amazon SNS topic. </p>
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface StartDocumentAnalysisRequest {
  /**
   * <p>The location of the document to be processed.</p>
   * @public
   */
  DocumentLocation: DocumentLocation | undefined;

  /**
   * <p>A list of the types of analysis to perform. Add TABLES to the list to return information
   *          about the tables that are detected in the input document. Add FORMS to return detected
   *          form data. To perform both types of analysis, add TABLES
   *          and FORMS to <code>FeatureTypes</code>. All lines and words detected in the document are
   *          included in the response (including text that isn't related to the value of
   *             <code>FeatureTypes</code>). </p>
   * @public
   */
  FeatureTypes: FeatureType[] | undefined;

  /**
   * <p>The idempotent token that you use to identify the start request. If you use the same
   *          token with multiple <code>StartDocumentAnalysis</code> requests, the same
   *             <code>JobId</code> is returned. Use <code>ClientRequestToken</code> to prevent the same
   *          job from being accidentally started more than once. For more information, see
   *          <a href="https://docs.aws.amazon.com/textract/latest/dg/api-async.html">Calling Amazon Textract Asynchronous Operations</a>.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>An identifier that you specify that's included in the completion notification published
   *          to the Amazon SNS topic. For example, you can use <code>JobTag</code> to identify the type of
   *          document that the completion notification corresponds to (such as a tax form or a
   *          receipt).</p>
   * @public
   */
  JobTag?: string | undefined;

  /**
   * <p>The Amazon SNS topic ARN that you want Amazon Textract to publish the completion status of the
   *          operation to. </p>
   * @public
   */
  NotificationChannel?: NotificationChannel | undefined;

  /**
   * <p>Sets if the output will go to a customer defined bucket. By default, Amazon Textract will save
   *          the results internally to be accessed by the GetDocumentAnalysis operation.</p>
   * @public
   */
  OutputConfig?: OutputConfig | undefined;

  /**
   * <p>The KMS key used to encrypt the inference results. This can be
   *          in either Key ID or Key Alias format. When a KMS key is provided, the
   *          KMS key will be used for server-side encryption of the objects in the
   *          customer bucket. When this parameter is not enabled, the result will
   *          be encrypted server side,using SSE-S3.</p>
   * @public
   */
  KMSKeyId?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  QueriesConfig?: QueriesConfig | undefined;

  /**
   * <p>Specifies the adapter to be used when analyzing a document.</p>
   * @public
   */
  AdaptersConfig?: AdaptersConfig | undefined;
}

/**
 * @public
 */
export interface StartDocumentAnalysisResponse {
  /**
   * <p>The identifier for the document text detection job. Use <code>JobId</code> to identify
   *          the job in a subsequent call to <code>GetDocumentAnalysis</code>. A <code>JobId</code> value
   *          is only valid for 7 days.</p>
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface StartDocumentTextDetectionRequest {
  /**
   * <p>The location of the document to be processed.</p>
   * @public
   */
  DocumentLocation: DocumentLocation | undefined;

  /**
   * <p>The idempotent token that's used to identify the start request. If you use the same
   *          token with multiple <code>StartDocumentTextDetection</code> requests, the same
   *             <code>JobId</code> is returned. Use <code>ClientRequestToken</code> to prevent the same
   *          job from being accidentally started more than once. For more information, see
   *          <a href="https://docs.aws.amazon.com/textract/latest/dg/api-async.html">Calling Amazon Textract Asynchronous Operations</a>.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>An identifier that you specify that's included in the completion notification published
   *          to the Amazon SNS topic. For example, you can use <code>JobTag</code> to identify the type of
   *          document that the completion notification corresponds to (such as a tax form or a
   *          receipt).</p>
   * @public
   */
  JobTag?: string | undefined;

  /**
   * <p>The Amazon SNS topic ARN that you want Amazon Textract to publish the completion status of the
   *          operation to. </p>
   * @public
   */
  NotificationChannel?: NotificationChannel | undefined;

  /**
   * <p>Sets if the output will go to a customer defined bucket. By default Amazon Textract will
   *          save the results internally to be accessed with the GetDocumentTextDetection operation.</p>
   * @public
   */
  OutputConfig?: OutputConfig | undefined;

  /**
   * <p>The KMS key used to encrypt the inference results. This can be
   *          in either Key ID or Key Alias format. When a KMS key is provided, the
   *          KMS key will be used for server-side encryption of the objects in the
   *          customer bucket. When this parameter is not enabled, the result will
   *          be encrypted server side,using SSE-S3.</p>
   * @public
   */
  KMSKeyId?: string | undefined;
}

/**
 * @public
 */
export interface StartDocumentTextDetectionResponse {
  /**
   * <p>The identifier of the text detection job for the document. Use <code>JobId</code> to
   *          identify the job in a subsequent call to <code>GetDocumentTextDetection</code>.
   *          A <code>JobId</code> value is only valid for 7 days.</p>
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface StartExpenseAnalysisRequest {
  /**
   * <p>The location of the document to be processed.</p>
   * @public
   */
  DocumentLocation: DocumentLocation | undefined;

  /**
   * <p>The idempotent token that's used to identify the start request. If you use the same token with multiple <code>StartDocumentTextDetection</code> requests, the same <code>JobId</code> is returned.
   *    Use <code>ClientRequestToken</code> to prevent the same job from being accidentally started more than once.
   *    For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/api-async.html">Calling Amazon Textract Asynchronous Operations</a>
   *          </p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>An identifier you specify that's included in the completion notification published
   *    to the Amazon SNS topic. For example, you can use <code>JobTag</code> to identify the type of
   *    document that the completion notification corresponds to (such as a tax form or a
   *    receipt).</p>
   * @public
   */
  JobTag?: string | undefined;

  /**
   * <p>The Amazon SNS topic ARN that you want Amazon Textract to publish the completion status of the
   *    operation to. </p>
   * @public
   */
  NotificationChannel?: NotificationChannel | undefined;

  /**
   * <p>Sets if the output will go to a customer defined bucket. By default, Amazon Textract will
   *    save the results internally to be accessed by the <code>GetExpenseAnalysis</code>
   *    operation.</p>
   * @public
   */
  OutputConfig?: OutputConfig | undefined;

  /**
   * <p>The KMS key used to encrypt the inference results. This can be
   *    in either Key ID or Key Alias format. When a KMS key is provided, the
   *    KMS key will be used for server-side encryption of the objects in the
   *    customer bucket. When this parameter is not enabled, the result will
   *    be encrypted server side,using SSE-S3.</p>
   * @public
   */
  KMSKeyId?: string | undefined;
}

/**
 * @public
 */
export interface StartExpenseAnalysisResponse {
  /**
   * <p>A unique identifier for the text detection job. The <code>JobId</code> is returned from
   *     <code>StartExpenseAnalysis</code>. A <code>JobId</code> value is only valid for 7 days.</p>
   * @public
   */
  JobId?: string | undefined;
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
   * @public
   */
  DocumentLocation: DocumentLocation | undefined;

  /**
   * <p>The idempotent token that you use to identify the start request. If you use the same token
   *    with multiple <code>StartLendingAnalysis</code> requests, the same <code>JobId</code> is
   *    returned. Use <code>ClientRequestToken</code> to prevent the same job from being accidentally
   *    started more than once. For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/api-sync.html">Calling Amazon Textract Asynchronous Operations</a>.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>An identifier that you specify to be included in the completion notification published to
   *    the Amazon SNS topic. For example, you can use <code>JobTag</code> to identify the type of
   *    document that the completion notification corresponds to (such as a tax form or a
   *    receipt).</p>
   * @public
   */
  JobTag?: string | undefined;

  /**
   * <p>The Amazon Simple Notification Service (Amazon SNS) topic to which Amazon Textract publishes the completion status of
   *          an asynchronous document operation. </p>
   * @public
   */
  NotificationChannel?: NotificationChannel | undefined;

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
   * @public
   */
  OutputConfig?: OutputConfig | undefined;

  /**
   * <p>The KMS key used to encrypt the inference results. This can be in either Key ID or Key
   *    Alias format. When a KMS key is provided, the KMS key will be used for server-side encryption of
   *    the objects in the customer bucket. When this parameter is not enabled, the result will be
   *    encrypted server side, using SSE-S3. </p>
   * @public
   */
  KMSKeyId?: string | undefined;
}

/**
 * @public
 */
export interface StartLendingAnalysisResponse {
  /**
   * <p>A unique identifier for the lending or text-detection job. The <code>JobId</code> is
   *    returned from <code>StartLendingAnalysis</code>. A <code>JobId</code> value is only valid for 7
   *    days.</p>
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that specifies the resource to be tagged.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>A set of tags (key-value pairs) that you want to assign to the resource.</p>
   * @public
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
   * <p>The Amazon Resource Name (ARN) that specifies the resource to be untagged.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>Specifies the tags to be removed from the resource specified by the ResourceARN.</p>
   * @public
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
   * <p>A string containing a unique ID for the adapter that will be updated.</p>
   * @public
   */
  AdapterId: string | undefined;

  /**
   * <p>The new description to be applied to the adapter.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The new name to be applied to the adapter.</p>
   * @public
   */
  AdapterName?: string | undefined;

  /**
   * <p>The new auto-update status to be applied to the adapter.</p>
   * @public
   */
  AutoUpdate?: AutoUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateAdapterResponse {
  /**
   * <p>A string containing a unique ID for the adapter that has been updated.</p>
   * @public
   */
  AdapterId?: string | undefined;

  /**
   * <p>A string containing the name of the adapter that has been updated.</p>
   * @public
   */
  AdapterName?: string | undefined;

  /**
   * <p>An object specifying the creation time of the the adapter that has been updated.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>A string containing the description of the adapter that has been updated.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>List of the targeted feature types for the updated adapter.</p>
   * @public
   */
  FeatureTypes?: FeatureType[] | undefined;

  /**
   * <p>The auto-update status of the adapter that has been updated.</p>
   * @public
   */
  AutoUpdate?: AutoUpdate | undefined;
}
