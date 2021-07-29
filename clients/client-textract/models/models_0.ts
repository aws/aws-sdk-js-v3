import { LazyJsonString as __LazyJsonString } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>You aren't authorized to perform the action. Use the Amazon Resource Name (ARN)
 *             of an authorized user or IAM role to perform the operation.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
  Code?: string;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>The S3 bucket name and file name that identifies the document.</p>
 *          <p>The AWS Region for the S3 bucket that contains the document must match the Region that
 *          you use for Amazon Textract operations.</p>
 *
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
   *          in JPEG or PNG format. Asynchronous operations also support PDF format files.</p>
   */
  Name?: string;

  /**
   * <p>If the bucket has versioning enabled, you can specify the object version. </p>
   */
  Version?: string;
}

export namespace S3Object {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3Object): any => ({
    ...obj,
  });
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
 *
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

export namespace Document {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Document): any => ({
    ...obj,
  });
}

export enum FeatureType {
  FORMS = "FORMS",
  TABLES = "TABLES",
}

export enum ContentClassifier {
  FREE_OF_ADULT_CONTENT = "FreeOfAdultContent",
  FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION = "FreeOfPersonallyIdentifiableInformation",
}

/**
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

export namespace HumanLoopDataAttributes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HumanLoopDataAttributes): any => ({
    ...obj,
  });
}

/**
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

export namespace HumanLoopConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HumanLoopConfig): any => ({
    ...obj,
  });
}

export interface AnalyzeDocumentRequest {
  /**
   * <p>The input document as base64-encoded bytes or an Amazon S3 object. If you use the AWS CLI
   *          to call Amazon Textract operations, you can't pass image bytes. The document must be an image
   *          in JPEG or PNG format.</p>
   *          <p>If you're using an AWS SDK to call Amazon Textract, you might not need to base64-encode
   *          image bytes that are passed using the <code>Bytes</code> field. </p>
   */
  Document: Document | undefined;

  /**
   * <p>A list of the types of analysis to perform. Add TABLES to the list to return information
   *          about the tables that are detected in the input document. Add FORMS to return detected form data.
   *          To perform both types of analysis, add TABLES and FORMS to
   *             <code>FeatureTypes</code>. All lines and words detected in the document are included in
   *          the response (including text that isn't related to the value of <code>FeatureTypes</code>). </p>
   */
  FeatureTypes: (FeatureType | string)[] | undefined;

  /**
   * <p>Sets the configuration for the human in the loop workflow for analyzing documents.</p>
   */
  HumanLoopConfig?: HumanLoopConfig;
}

export namespace AnalyzeDocumentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnalyzeDocumentRequest): any => ({
    ...obj,
  });
}

export enum BlockType {
  CELL = "CELL",
  KEY_VALUE_SET = "KEY_VALUE_SET",
  LINE = "LINE",
  PAGE = "PAGE",
  SELECTION_ELEMENT = "SELECTION_ELEMENT",
  TABLE = "TABLE",
  WORD = "WORD",
}

export enum EntityType {
  KEY = "KEY",
  VALUE = "VALUE",
}

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

export namespace BoundingBox {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BoundingBox): any => ({
    ...obj,
  });
}

/**
 * <p>The X and Y coordinates of a point on a document page. The X and Y
 *          values that are returned are ratios of the overall document page size. For example, if the
 *          input document is 700 x 200 and the operation returns X=0.5 and Y=0.25, then the point is
 *          at the (350,50) pixel coordinate on the document page.</p>
 *
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

export namespace Point {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Point): any => ({
    ...obj,
  });
}

/**
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

export namespace Geometry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Geometry): any => ({
    ...obj,
  });
}

export enum RelationshipType {
  CHILD = "CHILD",
  COMPLEX_FEATURES = "COMPLEX_FEATURES",
  VALUE = "VALUE",
}

/**
 * <p>Information about how blocks are related to each other. A <code>Block</code> object
 *          contains 0 or more <code>Relation</code> objects in a list, <code>Relationships</code>. For
 *          more information, see <a>Block</a>.</p>
 *          <p>The <code>Type</code> element provides the type of the relationship for all blocks in
 *          the <code>IDs</code> array. </p>
 */
export interface Relationship {
  /**
   * <p>The type of relationship that the blocks in the IDs array have with the current block.
   *          The relationship can be <code>VALUE</code> or <code>CHILD</code>. A relationship of type
   *          VALUE is a list that contains the ID of the VALUE block that's associated with the KEY of a
   *          key-value pair. A relationship of type CHILD is a list of IDs that identify WORD blocks in
   *          the case of lines Cell blocks in the case of Tables, and WORD blocks in the case of
   *          Selection Elements.</p>
   */
  Type?: RelationshipType | string;

  /**
   * <p>An
   *          array of IDs for related blocks. You can get the type of the relationship from the
   *             <code>Type</code> element.</p>
   */
  Ids?: string[];
}

export namespace Relationship {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Relationship): any => ({
    ...obj,
  });
}

export enum SelectionStatus {
  NOT_SELECTED = "NOT_SELECTED",
  SELECTED = "SELECTED",
}

export enum TextType {
  HANDWRITING = "HANDWRITING",
  PRINTED = "PRINTED",
}

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
   *                   <i>CELL</i> - A cell within a detected table. The cell is the parent
   *                of the block that contains the text in the cell.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>SELECTION_ELEMENT</i> - A selection element such as an option
   *                button (radio button) or a check box that's detected on a document page. Use the
   *                value of <code>SelectionStatus</code> to determine the status of the selection
   *                element.</p>
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
   * <p>The number of rows that a table cell spans. Currently this value is always 1, even if
   *          the number of rows spanned is greater than 1. <code>RowSpan</code> isn't returned by
   *             <code>DetectDocumentText</code> and <code>GetDocumentTextDetection</code>.</p>
   */
  RowSpan?: number;

  /**
   * <p>The number of columns that a table cell spans. Currently this value is always 1, even if
   *          the number of columns spanned is greater than 1. <code>ColumnSpan</code> isn't returned by
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
   * <p>A list of child blocks of the current block. For example, a LINE object has child blocks
   *          for each WORD block that's part of the line of text. There aren't Relationship objects in
   *          the list for relationships that don't exist, such as when the current block has no child
   *          blocks. The list size can be the following:</p>
   *          <ul>
   *             <li>
   *                <p>0 - The block has no child blocks.</p>
   *             </li>
   *             <li>
   *                <p>1 - The block has child blocks.</p>
   *             </li>
   *          </ul>
   */
  Relationships?: Relationship[];

  /**
   * <p>The type of entity. The following can be returned:</p>
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
   * <p>The page on which a block was detected. <code>Page</code> is returned by asynchronous
   *          operations. Page values greater than 1 are only returned for multipage documents that are
   *          in PDF format. A scanned image (JPEG/PNG), even if it contains multiple document pages, is
   *          considered to be a single-page document. The value of <code>Page</code> is always 1.
   *          Synchronous operations don't return <code>Page</code> because every input document is
   *          considered to be a single-page document.</p>
   */
  Page?: number;
}

export namespace Block {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Block): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the input document.</p>
 */
export interface DocumentMetadata {
  /**
   * <p>The number of pages that are detected in the document.</p>
   */
  Pages?: number;
}

export namespace DocumentMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentMetadata): any => ({
    ...obj,
  });
}

/**
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

export namespace HumanLoopActivationOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HumanLoopActivationOutput): any => ({
    ...obj,
  });
}

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

export namespace AnalyzeDocumentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnalyzeDocumentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Amazon Textract isn't able to read the document. For more information on the document
 *          limits in Amazon Textract, see <a>limits</a>.</p>
 */
export interface BadDocumentException extends __SmithyException, $MetadataBearer {
  name: "BadDocumentException";
  $fault: "client";
  Message?: string;
  Code?: string;
}

export namespace BadDocumentException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BadDocumentException): any => ({
    ...obj,
  });
}

/**
 * <p>The document can't be processed because it's too large. The maximum document size for
 *          synchronous operations 10 MB. The maximum document size for asynchronous operations is 500
 *          MB for PDF files.</p>
 */
export interface DocumentTooLargeException extends __SmithyException, $MetadataBearer {
  name: "DocumentTooLargeException";
  $fault: "client";
  Message?: string;
  Code?: string;
}

export namespace DocumentTooLargeException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentTooLargeException): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates you have exceeded the maximum number of active human in the loop workflows available</p>
 */
export interface HumanLoopQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "HumanLoopQuotaExceededException";
  $fault: "client";
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
}

export namespace HumanLoopQuotaExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HumanLoopQuotaExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>Amazon Textract experienced a service issue. Try your call again.</p>
 */
export interface InternalServerError extends __SmithyException, $MetadataBearer {
  name: "InternalServerError";
  $fault: "server";
  Message?: string;
  Code?: string;
}

export namespace InternalServerError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerError): any => ({
    ...obj,
  });
}

/**
 * <p>An input parameter violated a constraint. For example, in synchronous operations,
 *        an <code>InvalidParameterException</code> exception occurs
 *       when neither of the <code>S3Object</code> or <code>Bytes</code> values are supplied in the <code>Document</code>
 *       request parameter.
 *        Validate your parameter before calling the API operation again.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  Message?: string;
  Code?: string;
}

export namespace InvalidParameterException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj,
  });
}

/**
 * <p>Amazon Textract is unable to access the S3 object that's specified in the request.
 *          for more information, <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html">Configure Access to Amazon S3</a>
 *          For troubleshooting information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/troubleshooting.html">Troubleshooting Amazon S3</a>
 *          </p>
 */
export interface InvalidS3ObjectException extends __SmithyException, $MetadataBearer {
  name: "InvalidS3ObjectException";
  $fault: "client";
  Message?: string;
  Code?: string;
}

export namespace InvalidS3ObjectException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidS3ObjectException): any => ({
    ...obj,
  });
}

/**
 * <p>The number of requests exceeded your throughput limit. If you want to increase this limit,
 *          contact Amazon Textract.</p>
 */
export interface ProvisionedThroughputExceededException extends __SmithyException, $MetadataBearer {
  name: "ProvisionedThroughputExceededException";
  $fault: "client";
  Message?: string;
  Code?: string;
}

export namespace ProvisionedThroughputExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProvisionedThroughputExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>Amazon Textract is temporarily unable to process the request. Try your call again.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "server";
  Message?: string;
  Code?: string;
}

export namespace ThrottlingException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p>The format of the input document isn't supported. Documents for synchronous operations can be in
 *          PNG or JPEG format. Documents for asynchronous operations can also be in PDF format.</p>
 */
export interface UnsupportedDocumentException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedDocumentException";
  $fault: "client";
  Message?: string;
  Code?: string;
}

export namespace UnsupportedDocumentException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnsupportedDocumentException): any => ({
    ...obj,
  });
}

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
   *
   *          <p>For Amazon Textract to process an S3 object, the user must have permission
   *          to access the S3 object. </p>
   */
  Document: Document | undefined;
}

export namespace AnalyzeExpenseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnalyzeExpenseRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace ExpenseDetection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExpenseDetection): any => ({
    ...obj,
  });
}

/**
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

export namespace ExpenseType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExpenseType): any => ({
    ...obj,
  });
}

/**
 * <p>Breakdown of detected information, seperated into
 *          the catagories Type, LableDetection, and ValueDetection</p>
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
}

export namespace ExpenseField {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExpenseField): any => ({
    ...obj,
  });
}

/**
 * <p>A structure that holds information about the different lines found in a document's tables.</p>
 */
export interface LineItemFields {
  /**
   * <p>ExpenseFields used to show information from detected lines on a table.</p>
   */
  LineItemExpenseFields?: ExpenseField[];
}

export namespace LineItemFields {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LineItemFields): any => ({
    ...obj,
  });
}

/**
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

export namespace LineItemGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LineItemGroup): any => ({
    ...obj,
  });
}

/**
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
}

export namespace ExpenseDocument {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExpenseDocument): any => ({
    ...obj,
  });
}

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

export namespace AnalyzeExpenseResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnalyzeExpenseResponse): any => ({
    ...obj,
  });
}

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

export namespace DetectDocumentTextRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectDocumentTextRequest): any => ({
    ...obj,
  });
}

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

export namespace DetectDocumentTextResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectDocumentTextResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon S3 bucket that contains the document to be processed. It's used by asynchronous
 *          operations such as <a>StartDocumentTextDetection</a>.</p>
 *          <p>The input document can be an image file in JPEG or PNG format. It can also be a file in
 *          PDF format.</p>
 */
export interface DocumentLocation {
  /**
   * <p>The Amazon S3 bucket that contains the input document.</p>
   */
  S3Object?: S3Object;
}

export namespace DocumentLocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentLocation): any => ({
    ...obj,
  });
}

export interface GetDocumentAnalysisRequest {
  /**
   * <p>A unique identifier for the text-detection job. The <code>JobId</code> is returned from
   *          <code>StartDocumentAnalysis</code>. A <code>JobId</code> value is only valid for 7 days.</p>
   */
  JobId: string | undefined;

  /**
   * <p>The maximum number of results to return per paginated call. The largest value that you
   *          can specify is 1,000. If you specify a value greater than 1,000, a maximum of 1,000 results
   *          is returned. The default value is 1,000.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous response was incomplete (because there are more blocks to retrieve), Amazon Textract returns a pagination
   *          token in the response. You can use this pagination token to retrieve the next set of blocks.</p>
   */
  NextToken?: string;
}

export namespace GetDocumentAnalysisRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDocumentAnalysisRequest): any => ({
    ...obj,
  });
}

export enum JobStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PARTIAL_SUCCESS = "PARTIAL_SUCCESS",
  SUCCEEDED = "SUCCEEDED",
}

/**
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

export namespace Warning {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Warning): any => ({
    ...obj,
  });
}

export interface GetDocumentAnalysisResponse {
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
   *          the subsequent request to retrieve the next set of text detection results.</p>
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
   * <p>Returns if the detection job could not be completed. Contains explanation for what error occured.</p>
   */
  StatusMessage?: string;

  /**
   * <p></p>
   */
  AnalyzeDocumentModelVersion?: string;
}

export namespace GetDocumentAnalysisResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDocumentAnalysisResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An invalid job identifier was passed to <a>GetDocumentAnalysis</a> or to
 *       <a>GetDocumentAnalysis</a>.</p>
 */
export interface InvalidJobIdException extends __SmithyException, $MetadataBearer {
  name: "InvalidJobIdException";
  $fault: "client";
  Message?: string;
  Code?: string;
}

export namespace InvalidJobIdException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidJobIdException): any => ({
    ...obj,
  });
}

/**
 * <p> Indicates you do not have decrypt permissions with the KMS key entered, or the KMS key
 *         was entered incorrectly. </p>
 */
export interface InvalidKMSKeyException extends __SmithyException, $MetadataBearer {
  name: "InvalidKMSKeyException";
  $fault: "client";
  Message?: string;
  Code?: string;
}

export namespace InvalidKMSKeyException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidKMSKeyException): any => ({
    ...obj,
  });
}

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

export namespace GetDocumentTextDetectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDocumentTextDetectionRequest): any => ({
    ...obj,
  });
}

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

export namespace GetDocumentTextDetectionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDocumentTextDetectionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A <code>ClientRequestToken</code> input parameter was reused with an operation, but at
 *          least one of the other input parameters is different from the previous call to the
 *          operation. </p>
 */
export interface IdempotentParameterMismatchException extends __SmithyException, $MetadataBearer {
  name: "IdempotentParameterMismatchException";
  $fault: "client";
  Message?: string;
  Code?: string;
}

export namespace IdempotentParameterMismatchException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IdempotentParameterMismatchException): any => ({
    ...obj,
  });
}

/**
 * <p>An Amazon Textract service limit was exceeded. For example, if you start too many
 *          asynchronous jobs concurrently, calls to start operations
 *             (<code>StartDocumentTextDetection</code>, for example) raise a LimitExceededException
 *          exception (HTTP status code: 400) until the number of concurrently running jobs is below
 *          the Amazon Textract service limit. </p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
  Code?: string;
}

export namespace LimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon Simple Notification Service (Amazon SNS) topic to which Amazon Textract publishes the completion status of
 *          an asynchronous document operation, such as <a>StartDocumentTextDetection</a>. </p>
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

export namespace NotificationChannel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotificationChannel): any => ({
    ...obj,
  });
}

/**
 * <p>Sets whether or not your output will go to a user created bucket. Used to set the name
 *          of the bucket, and the prefix on the output file.</p>
 *          <p>
 *             <code>OutputConfig</code> is an optional parameter which lets you adjust where your output will be placed.
 *          By default, Amazon Textract will store the results internally and can only be accessed by the Get
 *          API operations. With OutputConfig enabled, you can set the name of the bucket the output will be
 *          sent to and the file prefix of the results where you can download your results. Additionally, you
 *          can set the <code>KMSKeyID</code> parameter to a customer master key (CMK) to encrypt your output. Without this
 *          parameter set Amazon Textract will encrypt server-side using the AWS managed CMK for Amazon S3.</p>
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

export namespace OutputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutputConfig): any => ({
    ...obj,
  });
}

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
}

export namespace StartDocumentAnalysisRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDocumentAnalysisRequest): any => ({
    ...obj,
  });
}

export interface StartDocumentAnalysisResponse {
  /**
   * <p>The identifier for the document text detection job. Use <code>JobId</code> to identify
   *          the job in a subsequent call to <code>GetDocumentAnalysis</code>. A <code>JobId</code> value
   *          is only valid for 7 days.</p>
   */
  JobId?: string;
}

export namespace StartDocumentAnalysisResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDocumentAnalysisResponse): any => ({
    ...obj,
  });
}

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

export namespace StartDocumentTextDetectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDocumentTextDetectionRequest): any => ({
    ...obj,
  });
}

export interface StartDocumentTextDetectionResponse {
  /**
   * <p>The identifier of the text detection job for the document. Use <code>JobId</code> to
   *          identify the job in a subsequent call to <code>GetDocumentTextDetection</code>.
   *          A <code>JobId</code> value is only valid for 7 days.</p>
   */
  JobId?: string;
}

export namespace StartDocumentTextDetectionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDocumentTextDetectionResponse): any => ({
    ...obj,
  });
}
