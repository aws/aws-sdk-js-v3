// smithy-typescript generated code
import { AutomaticJsonStringConversion as __AutomaticJsonStringConversion } from "@smithy/core/serde";

import type {
  AdapterVersionStatus,
  AutoUpdate,
  BlockType,
  ContentClassifier,
  EntityType,
  FeatureType,
  JobStatus,
  RelationshipType,
  SelectionStatus,
  TextType,
  ValueType,
} from "./enums";

/**
 * An adapter selected for use when analyzing documents. Contains an adapter ID and a version number. Contains information on pages selected for analysis when analyzing documents asychronously.
 *
 * @public
 */
export interface Adapter {
  /**
   * A unique identifier for the adapter resource.
   *
   * @public
   */
  AdapterId: string | undefined;

  /**
   * Pages is a parameter that the user inputs to specify which pages to apply an adapter to. The following is a list of rules for using this parameter.
   *
   * - If a page is not specified, it is set to `["1"]` by default.
   * - The following characters are allowed in the parameter's string: `0 1 2 3 4 5 6 7 8 9 - *`. No whitespace is allowed.
   * - When using * to indicate all pages, it must be the only element in the list.
   * - You can use page intervals, such as `["1-3", "1-1", "4-*"]`. Where `*` indicates last page of document.
   * - Specified pages must be greater than 0 and less than or equal to the number of pages in the document.
   *
   * @public
   */
  Pages?: string[] | undefined;

  /**
   * A string that identifies the version of the adapter.
   *
   * @public
   */
  Version: string | undefined;
}

/**
 * Contains information on the adapter, including the adapter ID, Name, Creation time, and feature types.
 *
 * @public
 */
export interface AdapterOverview {
  /**
   * A unique identifier for the adapter resource.
   *
   * @public
   */
  AdapterId?: string | undefined;

  /**
   * A string naming the adapter resource.
   *
   * @public
   */
  AdapterName?: string | undefined;

  /**
   * The date and time that the adapter was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The feature types that the adapter is operating on.
   *
   * @public
   */
  FeatureTypes?: FeatureType[] | undefined;
}

/**
 * Contains information about adapters used when analyzing a document, with each adapter specified using an AdapterId and version
 *
 * @public
 */
export interface AdaptersConfig {
  /**
   * A list of adapters to be used when analyzing the specified document.
   *
   * @public
   */
  Adapters: Adapter[] | undefined;
}

/**
 * The S3 bucket name and file name that identifies the document.
 *
 * The AWS Region for the S3 bucket that contains the document must match the Region that you use for Amazon Textract operations.
 *
 * For Amazon Textract to process a file in an S3 bucket, the user must have permission to access the S3 bucket and file.
 *
 * @public
 */
export interface S3Object {
  /**
   * The name of the S3 bucket. Note that the # character is not valid in the file name.
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * The file name of the input document. Image files may be in PDF, TIFF, JPEG, or PNG format.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * If the bucket has versioning enabled, you can specify the object version.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * The dataset configuration options for a given version of an adapter. Can include an Amazon S3 bucket if specified.
 *
 * @public
 */
export interface AdapterVersionDatasetConfig {
  /**
   * The S3 bucket name and file name that identifies the document.
   *
   * The AWS Region for the S3 bucket that contains the document must match the Region that you use for Amazon Textract operations.
   *
   * For Amazon Textract to process a file in an S3 bucket, the user must have permission to access the S3 bucket and file.
   *
   * @public
   */
  ManifestS3Object?: S3Object | undefined;
}

/**
 * The evaluation metrics (F1 score, Precision, and Recall) for an adapter version.
 *
 * @public
 */
export interface EvaluationMetric {
  /**
   * The F1 score for an adapter version.
   *
   * @public
   */
  F1Score?: number | undefined;

  /**
   * The Precision score for an adapter version.
   *
   * @public
   */
  Precision?: number | undefined;

  /**
   * The Recall score for an adapter version.
   *
   * @public
   */
  Recall?: number | undefined;
}

/**
 * Contains information on the metrics used to evalute the peformance of a given adapter version. Includes data for baseline model performance and individual adapter version perfromance.
 *
 * @public
 */
export interface AdapterVersionEvaluationMetric {
  /**
   * The F1 score, precision, and recall metrics for the baseline model.
   *
   * @public
   */
  Baseline?: EvaluationMetric | undefined;

  /**
   * The F1 score, precision, and recall metrics for the baseline model.
   *
   * @public
   */
  AdapterVersion?: EvaluationMetric | undefined;

  /**
   * Indicates the feature type being analyzed by a given adapter version.
   *
   * @public
   */
  FeatureType?: FeatureType | undefined;
}

/**
 * Summary info for an adapter version. Contains information on the AdapterId, AdapterVersion, CreationTime, FeatureTypes, and Status.
 *
 * @public
 */
export interface AdapterVersionOverview {
  /**
   * A unique identifier for the adapter associated with a given adapter version.
   *
   * @public
   */
  AdapterId?: string | undefined;

  /**
   * An identified for a given adapter version.
   *
   * @public
   */
  AdapterVersion?: string | undefined;

  /**
   * The date and time that a given adapter version was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The feature types that the adapter version is operating on.
   *
   * @public
   */
  FeatureTypes?: FeatureType[] | undefined;

  /**
   * Contains information on the status of a given adapter version.
   *
   * @public
   */
  Status?: AdapterVersionStatus | undefined;

  /**
   * A message explaining the status of a given adapter vesion.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * The input document, either as bytes or as an S3 object.
 *
 * You pass image bytes to an Amazon Textract API operation by using the `Bytes` property. For example, you would use the `Bytes` property to pass a document loaded from a local file system. Image bytes passed by using the `Bytes` property must be base64 encoded. Your code might not need to encode document file bytes if you're using an AWS SDK to call Amazon Textract API operations.
 *
 * You pass images stored in an S3 bucket to an Amazon Textract API operation by using the `S3Object` property. Documents stored in an S3 bucket don't need to be base64 encoded.
 *
 * The AWS Region for the S3 bucket that contains the S3 object must match the AWS Region that you use for Amazon Textract operations.
 *
 * If you use the AWS CLI to call Amazon Textract operations, passing image bytes using the Bytes property isn't supported. You must first upload the document to an Amazon S3 bucket, and then call the operation using the S3Object property.
 *
 * For Amazon Textract to process an S3 object, the user must have permission to access the S3 object.
 *
 * @public
 */
export interface Document {
  /**
   * A blob of base64-encoded document bytes. The maximum size of a document that's provided in a blob of bytes is 5 MB. The document bytes must be in PNG or JPEG format.
   *
   * If you're using an AWS SDK to call Amazon Textract, you might not need to base64-encode image bytes passed using the `Bytes` field.
   *
   * @public
   */
  Bytes?: Uint8Array | undefined;

  /**
   * Identifies an S3 object as the document source. The maximum size of a document that's stored in an S3 bucket is 5 MB.
   *
   * @public
   */
  S3Object?: S3Object | undefined;
}

/**
 * Allows you to set attributes of the image. Currently, you can declare an image as free of personally identifiable information and adult content.
 *
 * @public
 */
export interface HumanLoopDataAttributes {
  /**
   * Sets whether the input image is free of personally identifiable information or adult content.
   *
   * @public
   */
  ContentClassifiers?: ContentClassifier[] | undefined;
}

/**
 * Sets up the human review workflow the document will be sent to if one of the conditions is met. You can also set certain attributes of the image before review.
 *
 * > **Note:** Amazon Textract uses Amazon Augmented AI (A2I) to run the human review workflows that you specify in `HumanLoopConfig`. A2I entered maintenance mode in July 2026 and no longer accepts new customers. If your account is not an existing A2I customer, requests fail with an `InvalidParameterException`. For more information, see [AWS service availability](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-service-availability/). If you're an existing A2I customer but receive this error, contact AWS Support and request assistance from the A2I team.
 *
 * @public
 */
export interface HumanLoopConfig {
  /**
   * The name of the human workflow used for this image. This should be kept unique within a region.
   *
   * @public
   */
  HumanLoopName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the flow definition.
   *
   * @public
   */
  FlowDefinitionArn: string | undefined;

  /**
   * Sets attributes of the input data.
   *
   * @public
   */
  DataAttributes?: HumanLoopDataAttributes | undefined;
}

/**
 * Each query contains the question you want to ask in the Text and the alias you want to associate.
 *
 * @public
 */
export interface Query {
  /**
   * Question that Amazon Textract will apply to the document. An example would be "What is the customer's SSN?"
   *
   * @public
   */
  Text: string | undefined;

  /**
   * Alias attached to the query, for ease of location.
   *
   * @public
   */
  Alias?: string | undefined;

  /**
   * Pages is a parameter that the user inputs to specify which pages to apply a query to. The following is a list of rules for using this parameter.
   *
   * - If a page is not specified, it is set to `["1"]` by default.
   * - The following characters are allowed in the parameter's string: `0 1 2 3 4 5 6 7 8 9 - *`. No whitespace is allowed.
   * - When using * to indicate all pages, it must be the only element in the list.
   * - You can use page intervals, such as `[“1-3”, “1-1”, “4-*”]`. Where `*` indicates last page of document.
   * - Specified pages must be greater than 0 and less than or equal to the number of pages in the document.
   *
   * @public
   */
  Pages?: string[] | undefined;
}

/**
 * @public
 */
export interface QueriesConfig {
  /**
   * @public
   */
  Queries: Query[] | undefined;
}

/**
 * @public
 */
export interface AnalyzeDocumentRequest {
  /**
   * The input document as base64-encoded bytes or an Amazon S3 object. If you use the AWS CLI to call Amazon Textract operations, you can't pass image bytes. The document must be an image in JPEG, PNG, PDF, or TIFF format.
   *
   * If you're using an AWS SDK to call Amazon Textract, you might not need to base64-encode image bytes that are passed using the `Bytes` field.
   *
   * @public
   */
  Document: Document | undefined;

  /**
   * A list of the types of analysis to perform. Add TABLES to the list to return information about the tables that are detected in the input document. Add FORMS to return detected form data. Add SIGNATURES to return the locations of detected signatures. Add LAYOUT to the list to return information about the layout of the document. All lines and words detected in the document are included in the response (including text that isn't related to the value of `FeatureTypes`).
   *
   * @public
   */
  FeatureTypes: FeatureType[] | undefined;

  /**
   * Sets the configuration for the human in the loop workflow for analyzing documents.
   *
   * > **Note:** Amazon Textract uses Amazon Augmented AI (A2I) to run the human review workflows that you specify in `HumanLoopConfig`. A2I entered maintenance mode in July 2026 and no longer accepts new customers. If your account is not an existing A2I customer, requests fail with an `InvalidParameterException`. For more information, see [AWS service availability](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-service-availability/). If you're an existing A2I customer but receive this error, contact AWS Support and request assistance from the A2I team.
   *
   * @public
   */
  HumanLoopConfig?: HumanLoopConfig | undefined;

  /**
   * Contains Queries and the alias for those Queries, as determined by the input.
   *
   * @public
   */
  QueriesConfig?: QueriesConfig | undefined;

  /**
   * Specifies the adapter to be used when analyzing a document.
   *
   * @public
   */
  AdaptersConfig?: AdaptersConfig | undefined;
}

/**
 * The bounding box around the detected page, text, key-value pair, table, table cell, or selection element on a document page. The `left` (x-coordinate) and `top` (y-coordinate) are coordinates that represent the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0).
 *
 * The `top` and `left` values returned are ratios of the overall document page size. For example, if the input image is 700 x 200 pixels, and the top-left coordinate of the bounding box is 350 x 50 pixels, the API returns a `left` value of 0.5 (350/700) and a `top` value of 0.25 (50/200).
 *
 * The `width` and `height` values represent the dimensions of the bounding box as a ratio of the overall document page dimension. For example, if the document page size is 700 x 200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1.
 *
 * @public
 */
export interface BoundingBox {
  /**
   * The width of the bounding box as a ratio of the overall document page width.
   *
   * @public
   */
  Width?: number | undefined;

  /**
   * The height of the bounding box as a ratio of the overall document page height.
   *
   * @public
   */
  Height?: number | undefined;

  /**
   * The left coordinate of the bounding box as a ratio of overall document page width.
   *
   * @public
   */
  Left?: number | undefined;

  /**
   * The top coordinate of the bounding box as a ratio of overall document page height.
   *
   * @public
   */
  Top?: number | undefined;
}

/**
 * The X and Y coordinates of a point on a document page. The X and Y values that are returned are ratios of the overall document page size. For example, if the input document is 700 x 200 and the operation returns X=0.5 and Y=0.25, then the point is at the (350,50) pixel coordinate on the document page.
 *
 * An array of `Point` objects, `Polygon`, is returned by DetectDocumentText. `Polygon` represents a fine-grained polygon around detected text. For more information, see Geometry in the Amazon Textract Developer Guide.
 *
 * @public
 */
export interface Point {
  /**
   * The value of the X coordinate for a point on a `Polygon`.
   *
   * @public
   */
  X?: number | undefined;

  /**
   * The value of the Y coordinate for a point on a `Polygon`.
   *
   * @public
   */
  Y?: number | undefined;
}

/**
 * Information about where the following items are located on a document page: detected page, text, key-value pairs, tables, table cells, and selection elements.
 *
 * @public
 */
export interface Geometry {
  /**
   * An axis-aligned coarse representation of the location of the recognized item on the document page.
   *
   * @public
   */
  BoundingBox?: BoundingBox | undefined;

  /**
   * Within the bounding box, a fine-grained polygon around the recognized item.
   *
   * @public
   */
  Polygon?: Point[] | undefined;

  /**
   * Provides a numerical value corresponding to the rotation of the WORD block. Possible values are 0, 90, 180, and 270.
   *
   * @public
   */
  RotationAngle?: number | undefined;
}

/**
 * Information about how blocks are related to each other. A `Block` object contains 0 or more `Relation` objects in a list, `Relationships`. For more information, see Block.
 *
 * The `Type` element provides the type of the relationship for all blocks in the `IDs` array.
 *
 * @public
 */
export interface Relationship {
  /**
   * The type of relationship between the blocks in the IDs array and the current block. The following list describes the relationship types that can be returned.
   *
   * - *VALUE* - A list that contains the ID of the VALUE block that's associated with the KEY of a key-value pair.
   * - *CHILD* - A list of IDs that identify blocks found within the current block object. For example, WORD blocks have a CHILD relationship to the LINE block type.
   * - *MERGED_CELL* - A list of IDs that identify each of the MERGED_CELL block types in a table.
   * - *ANSWER* - A list that contains the ID of the QUERY_RESULT block that’s associated with the corresponding QUERY block.
   * - *TABLE* - A list of IDs that identify associated TABLE block types.
   * - *TABLE_TITLE* - A list that contains the ID for the TABLE_TITLE block type in a table.
   * - *TABLE_FOOTER* - A list of IDs that identify the TABLE_FOOTER block types in a table.
   *
   * @public
   */
  Type?: RelationshipType | undefined;

  /**
   * An array of IDs for related blocks. You can get the type of the relationship from the `Type` element.
   *
   * @public
   */
  Ids?: string[] | undefined;
}

/**
 * A `Block` represents items that are recognized in a document within a group of pixels close to each other. The information returned in a `Block` object depends on the type of operation. In text detection for documents (for example DetectDocumentText), you get information about the detected words and lines of text. In text analysis (for example AnalyzeDocument), you can also get information about the fields, tables, and selection elements that are detected in the document.
 *
 * An array of `Block` objects is returned by both synchronous and asynchronous operations. In synchronous operations, such as DetectDocumentText, the array of `Block` objects is the entire set of results. In asynchronous operations, such as GetDocumentAnalysis, the array is returned over one or more responses.
 *
 * For more information, see [How Amazon Textract Works](https://docs.aws.amazon.com/textract/latest/dg/how-it-works.html).
 *
 * @public
 */
export interface Block {
  /**
   * The type of text item that's recognized. In operations for text detection, the following types are returned:
   *
   * - *PAGE* - Contains a list of the LINE `Block` objects that are detected on a document page.
   * - *WORD* - A word detected on a document page. A word is one or more ISO basic Latin script characters that aren't separated by spaces.
   * - *LINE* - A string of space-delimited, contiguous words that are detected on a document page.
   *
   * In text analysis operations, the following types are returned:
   *
   * - *PAGE* - Contains a list of child `Block` objects that are detected on a document page.
   * - *KEY_VALUE_SET* - Stores the KEY and VALUE `Block` objects for linked text that's detected on a document page. Use the `EntityType` field to determine if a KEY_VALUE_SET object is a KEY `Block` object or a VALUE `Block` object.
   * - *WORD* - A word that's detected on a document page. A word is one or more ISO basic Latin script characters that aren't separated by spaces.
   * - *LINE* - A string of tab-delimited, contiguous words that are detected on a document page.
   * - *TABLE* - A table that's detected on a document page. A table is grid-based information with two or more rows or columns, with a cell span of one row and one column each.
   * - *TABLE_TITLE* - The title of a table. A title is typically a line of text above or below a table, or embedded as the first row of a table.
   * - *TABLE_FOOTER* - The footer associated with a table. A footer is typically a line or lines of text below a table or embedded as the last row of a table.
   * - *CELL* - A cell within a detected table. The cell is the parent of the block that contains the text in the cell.
   * - *MERGED_CELL* - A cell in a table whose content spans more than one row or column. The `Relationships` array for this cell contain data from individual cells.
   * - *SELECTION_ELEMENT* - A selection element such as an option button (radio button) or a check box that's detected on a document page. Use the value of `SelectionStatus` to determine the status of the selection element.
   * - *SIGNATURE* - The location and confidence score of a signature detected on a document page. Can be returned as part of a Key-Value pair or a detected cell.
   * - *QUERY* - A question asked during the call of AnalyzeDocument. Contains an alias and an ID that attaches it to its answer.
   * - *QUERY_RESULT* - A response to a question asked during the call of analyze document. Comes with an alias and ID for ease of locating in a response. Also contains location and confidence score.
   *
   * The following BlockTypes are only returned for Amazon Textract Layout.
   *
   * - `LAYOUT_TITLE` - The main title of the document.
   * - `LAYOUT_HEADER` - Text located in the top margin of the document.
   * - `LAYOUT_FOOTER` - Text located in the bottom margin of the document.
   * - `LAYOUT_SECTION_HEADER` - The titles of sections within a document.
   * - `LAYOUT_PAGE_NUMBER` - The page number of the documents.
   * - `LAYOUT_LIST` - Any information grouped together in list form.
   * - `LAYOUT_FIGURE` - Indicates the location of an image in a document.
   * - `LAYOUT_TABLE` - Indicates the location of a table in the document.
   * - `LAYOUT_KEY_VALUE` - Indicates the location of form key-values in a document.
   * - `LAYOUT_TEXT` - Text that is present typically as a part of paragraphs in documents.
   *
   * @public
   */
  BlockType?: BlockType | undefined;

  /**
   * The confidence score that Amazon Textract has in the accuracy of the recognized text and the accuracy of the geometry points around the recognized text.
   *
   * @public
   */
  Confidence?: number | undefined;

  /**
   * The word or line of text that's recognized by Amazon Textract.
   *
   * @public
   */
  Text?: string | undefined;

  /**
   * The kind of text that Amazon Textract has detected. Can check for handwritten text and printed text.
   *
   * @public
   */
  TextType?: TextType | undefined;

  /**
   * The row in which a table cell is located. The first row position is 1. `RowIndex` isn't returned by `DetectDocumentText` and `GetDocumentTextDetection`.
   *
   * @public
   */
  RowIndex?: number | undefined;

  /**
   * The column in which a table cell appears. The first column position is 1. `ColumnIndex` isn't returned by `DetectDocumentText` and `GetDocumentTextDetection`.
   *
   * @public
   */
  ColumnIndex?: number | undefined;

  /**
   * The number of rows that a table cell spans. `RowSpan` isn't returned by `DetectDocumentText` and `GetDocumentTextDetection`.
   *
   * @public
   */
  RowSpan?: number | undefined;

  /**
   * The number of columns that a table cell spans. `ColumnSpan` isn't returned by `DetectDocumentText` and `GetDocumentTextDetection`.
   *
   * @public
   */
  ColumnSpan?: number | undefined;

  /**
   * The location of the recognized text on the image. It includes an axis-aligned, coarse bounding box that surrounds the text, and a finer-grain polygon for more accurate spatial information.
   *
   * @public
   */
  Geometry?: Geometry | undefined;

  /**
   * The identifier for the recognized text. The identifier is only unique for a single operation.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * A list of relationship objects that describe how blocks are related to each other. For example, a LINE block object contains a CHILD relationship type with the WORD blocks that make up the line of text. There aren't Relationship objects in the list for relationships that don't exist, such as when the current block has no child blocks.
   *
   * @public
   */
  Relationships?: Relationship[] | undefined;

  /**
   * The type of entity.
   *
   * The following entity types can be returned by FORMS analysis:
   *
   * - *KEY* - An identifier for a field on the document.
   * - *VALUE* - The field text.
   *
   * The following entity types can be returned by TABLES analysis:
   *
   * - *COLUMN_HEADER* - Identifies a cell that is a header of a column.
   * - *TABLE_TITLE* - Identifies a cell that is a title within the table.
   * - *TABLE_SECTION_TITLE* - Identifies a cell that is a title of a section within a table. A section title is a cell that typically spans an entire row above a section.
   * - *TABLE_FOOTER* - Identifies a cell that is a footer of a table.
   * - *TABLE_SUMMARY* - Identifies a summary cell of a table. A summary cell can be a row of a table or an additional, smaller table that contains summary information for another table.
   * - *STRUCTURED_TABLE* - Identifies a table with column headers where the content of each row corresponds to the headers.
   * - *SEMI_STRUCTURED_TABLE* - Identifies a non-structured table.
   *
   * `EntityTypes` isn't returned by `DetectDocumentText` and `GetDocumentTextDetection`.
   *
   * @public
   */
  EntityTypes?: EntityType[] | undefined;

  /**
   * The selection status of a selection element, such as an option button or check box.
   *
   * @public
   */
  SelectionStatus?: SelectionStatus | undefined;

  /**
   * The page on which a block was detected. `Page` is returned by synchronous and asynchronous operations. Page values greater than 1 are only returned for multipage documents that are in PDF or TIFF format. A scanned image (JPEG/PNG) provided to an asynchronous operation, even if it contains multiple document pages, is considered a single-page document. This means that for scanned images the value of `Page` is always 1.
   *
   * @public
   */
  Page?: number | undefined;

  /**
   * @public
   */
  Query?: Query | undefined;
}

/**
 * Information about the input document.
 *
 * @public
 */
export interface DocumentMetadata {
  /**
   * The number of pages that are detected in the document.
   *
   * @public
   */
  Pages?: number | undefined;
}

/**
 * Shows the results of the human in the loop evaluation. If there is no HumanLoopArn, the input did not trigger human review.
 *
 * @public
 */
export interface HumanLoopActivationOutput {
  /**
   * The Amazon Resource Name (ARN) of the HumanLoop created.
   *
   * @public
   */
  HumanLoopArn?: string | undefined;

  /**
   * Shows if and why human review was needed.
   *
   * @public
   */
  HumanLoopActivationReasons?: string[] | undefined;

  /**
   * Shows the result of condition evaluations, including those conditions which activated a human review.
   *
   * @public
   */
  HumanLoopActivationConditionsEvaluationResults?: __AutomaticJsonStringConversion | string | undefined;
}

/**
 * @public
 */
export interface AnalyzeDocumentResponse {
  /**
   * Metadata about the analyzed document. An example is the number of pages.
   *
   * @public
   */
  DocumentMetadata?: DocumentMetadata | undefined;

  /**
   * The items that are detected and analyzed by `AnalyzeDocument`.
   *
   * @public
   */
  Blocks?: Block[] | undefined;

  /**
   * Shows the results of the human in the loop evaluation.
   *
   * @public
   */
  HumanLoopActivationOutput?: HumanLoopActivationOutput | undefined;

  /**
   * The version of the model used to analyze the document.
   *
   * @public
   */
  AnalyzeDocumentModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface AnalyzeExpenseRequest {
  /**
   * The input document, either as bytes or as an S3 object.
   *
   * You pass image bytes to an Amazon Textract API operation by using the `Bytes` property. For example, you would use the `Bytes` property to pass a document loaded from a local file system. Image bytes passed by using the `Bytes` property must be base64 encoded. Your code might not need to encode document file bytes if you're using an AWS SDK to call Amazon Textract API operations.
   *
   * You pass images stored in an S3 bucket to an Amazon Textract API operation by using the `S3Object` property. Documents stored in an S3 bucket don't need to be base64 encoded.
   *
   * The AWS Region for the S3 bucket that contains the S3 object must match the AWS Region that you use for Amazon Textract operations.
   *
   * If you use the AWS CLI to call Amazon Textract operations, passing image bytes using the Bytes property isn't supported. You must first upload the document to an Amazon S3 bucket, and then call the operation using the S3Object property.
   *
   * For Amazon Textract to process an S3 object, the user must have permission to access the S3 object.
   *
   * @public
   */
  Document: Document | undefined;
}

/**
 * Returns the kind of currency detected.
 *
 * @public
 */
export interface ExpenseCurrency {
  /**
   * Currency code for detected currency. the current supported codes are:
   *
   * - USD
   * - EUR
   * - GBP
   * - CAD
   * - INR
   * - JPY
   * - CHF
   * - AUD
   * - CNY
   * - BZR
   * - SEK
   * - HKD
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * Percentage confideence in the detected currency.
   *
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * Shows the group that a certain key belongs to. This helps differentiate between names and addresses for different organizations, that can be hard to determine via JSON response.
 *
 * @public
 */
export interface ExpenseGroupProperty {
  /**
   * Informs you on whether the expense group is a name or an address.
   *
   * @public
   */
  Types?: string[] | undefined;

  /**
   * Provides a group Id number, which will be the same for each in the group.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * An object used to store information about the Value or Label detected by Amazon Textract.
 *
 * @public
 */
export interface ExpenseDetection {
  /**
   * The word or line of text recognized by Amazon Textract
   *
   * @public
   */
  Text?: string | undefined;

  /**
   * Information about where the following items are located on a document page: detected page, text, key-value pairs, tables, table cells, and selection elements.
   *
   * @public
   */
  Geometry?: Geometry | undefined;

  /**
   * The confidence in detection, as a percentage
   *
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * An object used to store information about the Type detected by Amazon Textract.
 *
 * @public
 */
export interface ExpenseType {
  /**
   * The word or line of text detected by Amazon Textract.
   *
   * @public
   */
  Text?: string | undefined;

  /**
   * The confidence of accuracy, as a percentage.
   *
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * Breakdown of detected information, seperated into the catagories Type, LabelDetection, and ValueDetection
 *
 * @public
 */
export interface ExpenseField {
  /**
   * The implied label of a detected element. Present alongside LabelDetection for explicit elements.
   *
   * @public
   */
  Type?: ExpenseType | undefined;

  /**
   * The explicitly stated label of a detected element.
   *
   * @public
   */
  LabelDetection?: ExpenseDetection | undefined;

  /**
   * The value of a detected element. Present in explicit and implicit elements.
   *
   * @public
   */
  ValueDetection?: ExpenseDetection | undefined;

  /**
   * The page number the value was detected on.
   *
   * @public
   */
  PageNumber?: number | undefined;

  /**
   * Shows the kind of currency, both the code and confidence associated with any monatary value detected.
   *
   * @public
   */
  Currency?: ExpenseCurrency | undefined;

  /**
   * Shows which group a response object belongs to, such as whether an address line belongs to the vendor's address or the recipent's address.
   *
   * @public
   */
  GroupProperties?: ExpenseGroupProperty[] | undefined;
}

/**
 * A structure that holds information about the different lines found in a document's tables.
 *
 * @public
 */
export interface LineItemFields {
  /**
   * ExpenseFields used to show information from detected lines on a table.
   *
   * @public
   */
  LineItemExpenseFields?: ExpenseField[] | undefined;
}

/**
 * A grouping of tables which contain LineItems, with each table identified by the table's `LineItemGroupIndex`.
 *
 * @public
 */
export interface LineItemGroup {
  /**
   * The number used to identify a specific table in a document. The first table encountered will have a LineItemGroupIndex of 1, the second 2, etc.
   *
   * @public
   */
  LineItemGroupIndex?: number | undefined;

  /**
   * The breakdown of information on a particular line of a table.
   *
   * @public
   */
  LineItems?: LineItemFields[] | undefined;
}

/**
 * The structure holding all the information returned by AnalyzeExpense
 *
 * @public
 */
export interface ExpenseDocument {
  /**
   * Denotes which invoice or receipt in the document the information is coming from. First document will be 1, the second 2, and so on.
   *
   * @public
   */
  ExpenseIndex?: number | undefined;

  /**
   * Any information found outside of a table by Amazon Textract.
   *
   * @public
   */
  SummaryFields?: ExpenseField[] | undefined;

  /**
   * Information detected on each table of a document, seperated into `LineItems`.
   *
   * @public
   */
  LineItemGroups?: LineItemGroup[] | undefined;

  /**
   * This is a block object, the same as reported when DetectDocumentText is run on a document. It provides word level recognition of text.
   *
   * @public
   */
  Blocks?: Block[] | undefined;
}

/**
 * @public
 */
export interface AnalyzeExpenseResponse {
  /**
   * Information about the input document.
   *
   * @public
   */
  DocumentMetadata?: DocumentMetadata | undefined;

  /**
   * The expenses detected by Amazon Textract.
   *
   * @public
   */
  ExpenseDocuments?: ExpenseDocument[] | undefined;
}

/**
 * @public
 */
export interface AnalyzeIDRequest {
  /**
   * The document being passed to AnalyzeID.
   *
   * @public
   */
  DocumentPages: Document[] | undefined;
}

/**
 * Contains information relating to dates in a document, including the type of value, and the value.
 *
 * @public
 */
export interface NormalizedValue {
  /**
   * The value of the date, written as Year-Month-DayTHour:Minute:Second.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The normalized type of the value detected. In this case, DATE.
   *
   * @public
   */
  ValueType?: ValueType | undefined;
}

/**
 * Used to contain the information detected by an AnalyzeID operation.
 *
 * @public
 */
export interface AnalyzeIDDetections {
  /**
   * Text of either the normalized field or value associated with it.
   *
   * @public
   */
  Text: string | undefined;

  /**
   * Only returned for dates, returns the type of value detected and the date written in a more machine readable way.
   *
   * @public
   */
  NormalizedValue?: NormalizedValue | undefined;

  /**
   * The confidence score of the detected text.
   *
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * Structure containing both the normalized type of the extracted information and the text associated with it. These are extracted as Type and Value respectively.
 *
 * @public
 */
export interface IdentityDocumentField {
  /**
   * Used to contain the information detected by an AnalyzeID operation.
   *
   * @public
   */
  Type?: AnalyzeIDDetections | undefined;

  /**
   * Used to contain the information detected by an AnalyzeID operation.
   *
   * @public
   */
  ValueDetection?: AnalyzeIDDetections | undefined;
}

/**
 * The structure that lists each document processed in an AnalyzeID operation.
 *
 * @public
 */
export interface IdentityDocument {
  /**
   * Denotes the placement of a document in the IdentityDocument list. The first document is marked 1, the second 2 and so on.
   *
   * @public
   */
  DocumentIndex?: number | undefined;

  /**
   * The structure used to record information extracted from identity documents. Contains both normalized field and value of the extracted text.
   *
   * @public
   */
  IdentityDocumentFields?: IdentityDocumentField[] | undefined;

  /**
   * Individual word recognition, as returned by document detection.
   *
   * @public
   */
  Blocks?: Block[] | undefined;
}

/**
 * @public
 */
export interface AnalyzeIDResponse {
  /**
   * The list of documents processed by AnalyzeID. Includes a number denoting their place in the list and the response structure for the document.
   *
   * @public
   */
  IdentityDocuments?: IdentityDocument[] | undefined;

  /**
   * Information about the input document.
   *
   * @public
   */
  DocumentMetadata?: DocumentMetadata | undefined;

  /**
   * The version of the AnalyzeIdentity API being used to process documents.
   *
   * @public
   */
  AnalyzeIDModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface CreateAdapterRequest {
  /**
   * The name to be assigned to the adapter being created.
   *
   * @public
   */
  AdapterName: string | undefined;

  /**
   * Idempotent token is used to recognize the request. If the same token is used with multiple CreateAdapter requests, the same session is returned. This token is employed to avoid unintentionally creating the same session multiple times.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The description to be assigned to the adapter being created.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of feature that the adapter is being trained on. Currrenly, supported feature types are: `QUERIES`
   *
   * @public
   */
  FeatureTypes: FeatureType[] | undefined;

  /**
   * Controls whether or not the adapter should automatically update.
   *
   * @public
   */
  AutoUpdate?: AutoUpdate | undefined;

  /**
   * A list of tags to be added to the adapter.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAdapterResponse {
  /**
   * A string containing the unique ID for the adapter that has been created.
   *
   * @public
   */
  AdapterId?: string | undefined;
}

/**
 * Sets whether or not your output will go to a user created bucket. Used to set the name of the bucket, and the prefix on the output file.
 *
 * `OutputConfig` is an optional parameter which lets you adjust where your output will be placed. By default, Amazon Textract will store the results internally and can only be accessed by the Get API operations. With `OutputConfig` enabled, you can set the name of the bucket the output will be sent to the file prefix of the results where you can download your results. Additionally, you can set the `KMSKeyID` parameter to a customer master key (CMK) to encrypt your output. Without this parameter set Amazon Textract will encrypt server-side using the AWS managed CMK for Amazon S3.
 *
 * Decryption of Customer Content is necessary for processing of the documents by Amazon Textract. If your account is opted out under an AI services opt out policy then all unencrypted Customer Content is immediately and permanently deleted after the Customer Content has been processed by the service. No copy of of the output is retained by Amazon Textract. For information about how to opt out, see [Managing AI services opt-out policy.](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html)
 *
 * For more information on data privacy, see the [Data Privacy FAQ](https://aws.amazon.com/compliance/data-privacy-faq/).
 *
 * @public
 */
export interface OutputConfig {
  /**
   * The name of the bucket your output will go to.
   *
   * @public
   */
  S3Bucket: string | undefined;

  /**
   * The prefix of the object key that the output will be saved to. When not enabled, the prefix will be “textract_output".
   *
   * @public
   */
  S3Prefix?: string | undefined;
}

/**
 * @public
 */
export interface CreateAdapterVersionRequest {
  /**
   * A string containing a unique ID for the adapter that will receive a new version.
   *
   * @public
   */
  AdapterId: string | undefined;

  /**
   * Idempotent token is used to recognize the request. If the same token is used with multiple CreateAdapterVersion requests, the same session is returned. This token is employed to avoid unintentionally creating the same session multiple times.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * Specifies a dataset used to train a new adapter version. Takes a ManifestS3Object as the value.
   *
   * @public
   */
  DatasetConfig: AdapterVersionDatasetConfig | undefined;

  /**
   * The identifier for your AWS Key Management Service key (AWS KMS key). Used to encrypt your documents.
   *
   * @public
   */
  KMSKeyId?: string | undefined;

  /**
   * Sets whether or not your output will go to a user created bucket. Used to set the name of the bucket, and the prefix on the output file.
   *
   * `OutputConfig` is an optional parameter which lets you adjust where your output will be placed. By default, Amazon Textract will store the results internally and can only be accessed by the Get API operations. With `OutputConfig` enabled, you can set the name of the bucket the output will be sent to the file prefix of the results where you can download your results. Additionally, you can set the `KMSKeyID` parameter to a customer master key (CMK) to encrypt your output. Without this parameter set Amazon Textract will encrypt server-side using the AWS managed CMK for Amazon S3.
   *
   * Decryption of Customer Content is necessary for processing of the documents by Amazon Textract. If your account is opted out under an AI services opt out policy then all unencrypted Customer Content is immediately and permanently deleted after the Customer Content has been processed by the service. No copy of of the output is retained by Amazon Textract. For information about how to opt out, see [Managing AI services opt-out policy.](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html)
   *
   * For more information on data privacy, see the [Data Privacy FAQ](https://aws.amazon.com/compliance/data-privacy-faq/).
   *
   * @public
   */
  OutputConfig: OutputConfig | undefined;

  /**
   * A set of tags (key-value pairs) that you want to attach to the adapter version.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAdapterVersionResponse {
  /**
   * A string containing the unique ID for the adapter that has received a new version.
   *
   * @public
   */
  AdapterId?: string | undefined;

  /**
   * A string describing the new version of the adapter.
   *
   * @public
   */
  AdapterVersion?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAdapterRequest {
  /**
   * A string containing a unique ID for the adapter to be deleted.
   *
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
   * A string containing a unique ID for the adapter version that will be deleted.
   *
   * @public
   */
  AdapterId: string | undefined;

  /**
   * Specifies the adapter version to be deleted.
   *
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
   * The input document as base64-encoded bytes or an Amazon S3 object. If you use the AWS CLI to call Amazon Textract operations, you can't pass image bytes. The document must be an image in JPEG or PNG format.
   *
   * If you're using an AWS SDK to call Amazon Textract, you might not need to base64-encode image bytes that are passed using the `Bytes` field.
   *
   * @public
   */
  Document: Document | undefined;
}

/**
 * @public
 */
export interface DetectDocumentTextResponse {
  /**
   * Metadata about the document. It contains the number of pages that are detected in the document.
   *
   * @public
   */
  DocumentMetadata?: DocumentMetadata | undefined;

  /**
   * An array of `Block` objects that contain the text that's detected in the document.
   *
   * @public
   */
  Blocks?: Block[] | undefined;

  /**
   * @public
   */
  DetectDocumentTextModelVersion?: string | undefined;
}

/**
 * A structure that holds information regarding a detected signature on a page.
 *
 * @public
 */
export interface DetectedSignature {
  /**
   * The page a detected signature was found on.
   *
   * @public
   */
  Page?: number | undefined;
}

/**
 * Contains information about the pages of a document, defined by logical boundary.
 *
 * @public
 */
export interface SplitDocument {
  /**
   * The index for a given document in a DocumentGroup of a specific Type.
   *
   * @public
   */
  Index?: number | undefined;

  /**
   * An array of page numbers for a for a given document, ordered by logical boundary.
   *
   * @public
   */
  Pages?: number[] | undefined;
}

/**
 * A structure containing information about an undetected signature on a page where it was expected but not found.
 *
 * @public
 */
export interface UndetectedSignature {
  /**
   * The page where a signature was expected but not found.
   *
   * @public
   */
  Page?: number | undefined;
}

/**
 * Summary information about documents grouped by the same document type.
 *
 * @public
 */
export interface DocumentGroup {
  /**
   * The type of document that Amazon Textract has detected. See [Analyze Lending Response Objects](https://docs.aws.amazon.com/textract/latest/dg/lending-response-objects.html) for a list of all types returned by Textract.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * An array that contains information about the pages of a document, defined by logical boundary.
   *
   * @public
   */
  SplitDocuments?: SplitDocument[] | undefined;

  /**
   * A list of the detected signatures found in a document group.
   *
   * @public
   */
  DetectedSignatures?: DetectedSignature[] | undefined;

  /**
   * A list of any expected signatures not found in a document group.
   *
   * @public
   */
  UndetectedSignatures?: UndetectedSignature[] | undefined;
}

/**
 * The Amazon S3 bucket that contains the document to be processed. It's used by asynchronous operations.
 *
 * The input document can be an image file in JPEG or PNG format. It can also be a file in PDF format.
 *
 * @public
 */
export interface DocumentLocation {
  /**
   * The Amazon S3 bucket that contains the input document.
   *
   * @public
   */
  S3Object?: S3Object | undefined;
}

/**
 * The results extracted for a lending document.
 *
 * @public
 */
export interface LendingDetection {
  /**
   * The text extracted for a detected value in a lending document.
   *
   * @public
   */
  Text?: string | undefined;

  /**
   * The selection status of a selection element, such as an option button or check box.
   *
   * @public
   */
  SelectionStatus?: SelectionStatus | undefined;

  /**
   * Information about where the following items are located on a document page: detected page, text, key-value pairs, tables, table cells, and selection elements.
   *
   * @public
   */
  Geometry?: Geometry | undefined;

  /**
   * The confidence level for the text of a detected value in a lending document.
   *
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * Holds the normalized key-value pairs returned by AnalyzeDocument, including the document type, detected text, and geometry.
 *
 * @public
 */
export interface LendingField {
  /**
   * The type of the lending document.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The results extracted for a lending document.
   *
   * @public
   */
  KeyDetection?: LendingDetection | undefined;

  /**
   * An array of LendingDetection objects.
   *
   * @public
   */
  ValueDetections?: LendingDetection[] | undefined;
}

/**
 * Information regarding a detected signature on a page.
 *
 * @public
 */
export interface SignatureDetection {
  /**
   * The confidence, from 0 to 100, in the predicted values for a detected signature.
   *
   * @public
   */
  Confidence?: number | undefined;

  /**
   * Information about where the following items are located on a document page: detected page, text, key-value pairs, tables, table cells, and selection elements.
   *
   * @public
   */
  Geometry?: Geometry | undefined;
}

/**
 * Holds the structured data returned by AnalyzeDocument for lending documents.
 *
 * @public
 */
export interface LendingDocument {
  /**
   * An array of LendingField objects.
   *
   * @public
   */
  LendingFields?: LendingField[] | undefined;

  /**
   * A list of signatures detected in a lending document.
   *
   * @public
   */
  SignatureDetections?: SignatureDetection[] | undefined;
}

/**
 * Contains information extracted by an analysis operation after using StartLendingAnalysis.
 *
 * @public
 */
export interface Extraction {
  /**
   * Holds the structured data returned by AnalyzeDocument for lending documents.
   *
   * @public
   */
  LendingDocument?: LendingDocument | undefined;

  /**
   * The structure holding all the information returned by AnalyzeExpense
   *
   * @public
   */
  ExpenseDocument?: ExpenseDocument | undefined;

  /**
   * The structure that lists each document processed in an AnalyzeID operation.
   *
   * @public
   */
  IdentityDocument?: IdentityDocument | undefined;
}

/**
 * @public
 */
export interface GetAdapterRequest {
  /**
   * A string containing a unique ID for the adapter.
   *
   * @public
   */
  AdapterId: string | undefined;
}

/**
 * @public
 */
export interface GetAdapterResponse {
  /**
   * A string identifying the adapter that information has been retrieved for.
   *
   * @public
   */
  AdapterId?: string | undefined;

  /**
   * The name of the requested adapter.
   *
   * @public
   */
  AdapterName?: string | undefined;

  /**
   * The date and time the requested adapter was created at.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The description for the requested adapter.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * List of the targeted feature types for the requested adapter.
   *
   * @public
   */
  FeatureTypes?: FeatureType[] | undefined;

  /**
   * Binary value indicating if the adapter is being automatically updated or not.
   *
   * @public
   */
  AutoUpdate?: AutoUpdate | undefined;

  /**
   * A set of tags (key-value pairs) associated with the adapter that has been retrieved.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetAdapterVersionRequest {
  /**
   * A string specifying a unique ID for the adapter version you want to retrieve information for.
   *
   * @public
   */
  AdapterId: string | undefined;

  /**
   * A string specifying the adapter version you want to retrieve information for.
   *
   * @public
   */
  AdapterVersion: string | undefined;
}

/**
 * @public
 */
export interface GetAdapterVersionResponse {
  /**
   * A string containing a unique ID for the adapter version being retrieved.
   *
   * @public
   */
  AdapterId?: string | undefined;

  /**
   * A string containing the adapter version that has been retrieved.
   *
   * @public
   */
  AdapterVersion?: string | undefined;

  /**
   * The time that the adapter version was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * List of the targeted feature types for the requested adapter version.
   *
   * @public
   */
  FeatureTypes?: FeatureType[] | undefined;

  /**
   * The status of the adapter version that has been requested.
   *
   * @public
   */
  Status?: AdapterVersionStatus | undefined;

  /**
   * A message that describes the status of the requested adapter version.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Specifies a dataset used to train a new adapter version. Takes a ManifestS3Objec as the value.
   *
   * @public
   */
  DatasetConfig?: AdapterVersionDatasetConfig | undefined;

  /**
   * The identifier for your AWS Key Management Service key (AWS KMS key). Used to encrypt your documents.
   *
   * @public
   */
  KMSKeyId?: string | undefined;

  /**
   * Sets whether or not your output will go to a user created bucket. Used to set the name of the bucket, and the prefix on the output file.
   *
   * `OutputConfig` is an optional parameter which lets you adjust where your output will be placed. By default, Amazon Textract will store the results internally and can only be accessed by the Get API operations. With `OutputConfig` enabled, you can set the name of the bucket the output will be sent to the file prefix of the results where you can download your results. Additionally, you can set the `KMSKeyID` parameter to a customer master key (CMK) to encrypt your output. Without this parameter set Amazon Textract will encrypt server-side using the AWS managed CMK for Amazon S3.
   *
   * Decryption of Customer Content is necessary for processing of the documents by Amazon Textract. If your account is opted out under an AI services opt out policy then all unencrypted Customer Content is immediately and permanently deleted after the Customer Content has been processed by the service. No copy of of the output is retained by Amazon Textract. For information about how to opt out, see [Managing AI services opt-out policy.](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html)
   *
   * For more information on data privacy, see the [Data Privacy FAQ](https://aws.amazon.com/compliance/data-privacy-faq/).
   *
   * @public
   */
  OutputConfig?: OutputConfig | undefined;

  /**
   * The evaluation metrics (F1 score, Precision, and Recall) for the requested version, grouped by baseline metrics and adapter version.
   *
   * @public
   */
  EvaluationMetrics?: AdapterVersionEvaluationMetric[] | undefined;

  /**
   * A set of tags (key-value pairs) that are associated with the adapter version.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetDocumentAnalysisRequest {
  /**
   * A unique identifier for the text-detection job. The `JobId` is returned from `StartDocumentAnalysis`. A `JobId` value is only valid for 7 days.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * The maximum number of results to return per paginated call. The largest value that you can specify is 1,000. If you specify a value greater than 1,000, a maximum of 1,000 results is returned. The default value is 1,000.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the previous response was incomplete (because there are more blocks to retrieve), Amazon Textract returns a pagination token in the response. You can use this pagination token to retrieve the next set of blocks.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A warning about an issue that occurred during asynchronous text analysis (StartDocumentAnalysis) or asynchronous document text detection (StartDocumentTextDetection).
 *
 * @public
 */
export interface Warning {
  /**
   * The error code for the warning.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * A list of the pages that the warning applies to.
   *
   * @public
   */
  Pages?: number[] | undefined;
}

/**
 * @public
 */
export interface GetDocumentAnalysisResponse {
  /**
   * Information about a document that Amazon Textract processed. `DocumentMetadata` is returned in every page of paginated responses from an Amazon Textract video operation.
   *
   * @public
   */
  DocumentMetadata?: DocumentMetadata | undefined;

  /**
   * The current status of the text detection job.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * If the response is truncated, Amazon Textract returns this token. You can use this token in the subsequent request to retrieve the next set of text detection results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The results of the text-analysis operation.
   *
   * @public
   */
  Blocks?: Block[] | undefined;

  /**
   * A list of warnings that occurred during the document-analysis operation.
   *
   * @public
   */
  Warnings?: Warning[] | undefined;

  /**
   * Returns if the detection job could not be completed. Contains explanation for what error occured.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * @public
   */
  AnalyzeDocumentModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetDocumentTextDetectionRequest {
  /**
   * A unique identifier for the text detection job. The `JobId` is returned from `StartDocumentTextDetection`. A `JobId` value is only valid for 7 days.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * The maximum number of results to return per paginated call. The largest value you can specify is 1,000. If you specify a value greater than 1,000, a maximum of 1,000 results is returned. The default value is 1,000.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the previous response was incomplete (because there are more blocks to retrieve), Amazon Textract returns a pagination token in the response. You can use this pagination token to retrieve the next set of blocks.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDocumentTextDetectionResponse {
  /**
   * Information about a document that Amazon Textract processed. `DocumentMetadata` is returned in every page of paginated responses from an Amazon Textract video operation.
   *
   * @public
   */
  DocumentMetadata?: DocumentMetadata | undefined;

  /**
   * The current status of the text detection job.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * If the response is truncated, Amazon Textract returns this token. You can use this token in the subsequent request to retrieve the next set of text-detection results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The results of the text-detection operation.
   *
   * @public
   */
  Blocks?: Block[] | undefined;

  /**
   * A list of warnings that occurred during the text-detection operation for the document.
   *
   * @public
   */
  Warnings?: Warning[] | undefined;

  /**
   * Returns if the detection job could not be completed. Contains explanation for what error occured.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * @public
   */
  DetectDocumentTextModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetExpenseAnalysisRequest {
  /**
   * A unique identifier for the text detection job. The `JobId` is returned from `StartExpenseAnalysis`. A `JobId` value is only valid for 7 days.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * The maximum number of results to return per paginated call. The largest value you can specify is 20. If you specify a value greater than 20, a maximum of 20 results is returned. The default value is 20.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the previous response was incomplete (because there are more blocks to retrieve), Amazon Textract returns a pagination token in the response. You can use this pagination token to retrieve the next set of blocks.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetExpenseAnalysisResponse {
  /**
   * Information about a document that Amazon Textract processed. `DocumentMetadata` is returned in every page of paginated responses from an Amazon Textract operation.
   *
   * @public
   */
  DocumentMetadata?: DocumentMetadata | undefined;

  /**
   * The current status of the text detection job.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * If the response is truncated, Amazon Textract returns this token. You can use this token in the subsequent request to retrieve the next set of text-detection results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The expenses detected by Amazon Textract.
   *
   * @public
   */
  ExpenseDocuments?: ExpenseDocument[] | undefined;

  /**
   * A list of warnings that occurred during the text-detection operation for the document.
   *
   * @public
   */
  Warnings?: Warning[] | undefined;

  /**
   * Returns if the detection job could not be completed. Contains explanation for what error occured.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The current model version of AnalyzeExpense.
   *
   * @public
   */
  AnalyzeExpenseModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetLendingAnalysisRequest {
  /**
   * A unique identifier for the lending or text-detection job. The `JobId` is returned from `StartLendingAnalysis`. A `JobId` value is only valid for 7 days.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * The maximum number of results to return per paginated call. The largest value that you can specify is 30. If you specify a value greater than 30, a maximum of 30 results is returned. The default value is 30.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the previous response was incomplete, Amazon Textract returns a pagination token in the response. You can use this pagination token to retrieve the next set of lending results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains information regarding predicted values returned by Amazon Textract operations, including the predicted value and the confidence in the predicted value.
 *
 * @public
 */
export interface Prediction {
  /**
   * The predicted value of a detected object.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * Amazon Textract's confidence in its predicted value.
   *
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * The class assigned to a Page object detected in an input document. Contains information regarding the predicted type/class of a document's page and the page number that the Page object was detected on.
 *
 * @public
 */
export interface PageClassification {
  /**
   * The class, or document type, assigned to a detected Page object. The class, or document type, assigned to a detected Page object.
   *
   * @public
   */
  PageType: Prediction[] | undefined;

  /**
   * The page number the value was detected on, relative to Amazon Textract's starting position.
   *
   * @public
   */
  PageNumber: Prediction[] | undefined;
}

/**
 * Contains the detections for each page analyzed through the Analyze Lending API.
 *
 * @public
 */
export interface LendingResult {
  /**
   * The page number for a page, with regard to whole submission.
   *
   * @public
   */
  Page?: number | undefined;

  /**
   * The classifier result for a given page.
   *
   * @public
   */
  PageClassification?: PageClassification | undefined;

  /**
   * An array of Extraction to hold structured data. e.g. normalized key value pairs instead of raw OCR detections .
   *
   * @public
   */
  Extractions?: Extraction[] | undefined;
}

/**
 * @public
 */
export interface GetLendingAnalysisResponse {
  /**
   * Information about the input document.
   *
   * @public
   */
  DocumentMetadata?: DocumentMetadata | undefined;

  /**
   * The current status of the lending analysis job.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * If the response is truncated, Amazon Textract returns this token. You can use this token in the subsequent request to retrieve the next set of lending results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Holds the information returned by one of AmazonTextract's document analysis operations for the pinstripe.
   *
   * @public
   */
  Results?: LendingResult[] | undefined;

  /**
   * A list of warnings that occurred during the lending analysis operation.
   *
   * @public
   */
  Warnings?: Warning[] | undefined;

  /**
   * Returns if the lending analysis job could not be completed. Contains explanation for what error occurred.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The current model version of the Analyze Lending API.
   *
   * @public
   */
  AnalyzeLendingModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetLendingAnalysisSummaryRequest {
  /**
   * A unique identifier for the lending or text-detection job. The `JobId` is returned from StartLendingAnalysis. A `JobId` value is only valid for 7 days.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * Contains information regarding DocumentGroups and UndetectedDocumentTypes.
 *
 * @public
 */
export interface LendingSummary {
  /**
   * Contains an array of all DocumentGroup objects.
   *
   * @public
   */
  DocumentGroups?: DocumentGroup[] | undefined;

  /**
   * UndetectedDocumentTypes.
   *
   * @public
   */
  UndetectedDocumentTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface GetLendingAnalysisSummaryResponse {
  /**
   * Information about the input document.
   *
   * @public
   */
  DocumentMetadata?: DocumentMetadata | undefined;

  /**
   * The current status of the lending analysis job.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * Contains summary information for documents grouped by type.
   *
   * @public
   */
  Summary?: LendingSummary | undefined;

  /**
   * A list of warnings that occurred during the lending analysis operation.
   *
   * @public
   */
  Warnings?: Warning[] | undefined;

  /**
   * Returns if the lending analysis could not be completed. Contains explanation for what error occurred.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The current model version of the Analyze Lending API.
   *
   * @public
   */
  AnalyzeLendingModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListAdaptersRequest {
  /**
   * Specifies the lower bound for the ListAdapters operation. Ensures ListAdapters returns only adapters created after the specified creation time.
   *
   * @public
   */
  AfterCreationTime?: Date | undefined;

  /**
   * Specifies the upper bound for the ListAdapters operation. Ensures ListAdapters returns only adapters created before the specified creation time.
   *
   * @public
   */
  BeforeCreationTime?: Date | undefined;

  /**
   * The maximum number of results to return when listing adapters.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Identifies the next page of results to return when listing adapters.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAdaptersResponse {
  /**
   * A list of adapters that matches the filtering criteria specified when calling ListAdapters.
   *
   * @public
   */
  Adapters?: AdapterOverview[] | undefined;

  /**
   * Identifies the next page of results to return when listing adapters.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAdapterVersionsRequest {
  /**
   * A string containing a unique ID for the adapter to match for when listing adapter versions.
   *
   * @public
   */
  AdapterId?: string | undefined;

  /**
   * Specifies the lower bound for the ListAdapterVersions operation. Ensures ListAdapterVersions returns only adapter versions created after the specified creation time.
   *
   * @public
   */
  AfterCreationTime?: Date | undefined;

  /**
   * Specifies the upper bound for the ListAdapterVersions operation. Ensures ListAdapterVersions returns only adapter versions created after the specified creation time.
   *
   * @public
   */
  BeforeCreationTime?: Date | undefined;

  /**
   * The maximum number of results to return when listing adapter versions.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Identifies the next page of results to return when listing adapter versions.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAdapterVersionsResponse {
  /**
   * Adapter versions that match the filtering criteria specified when calling ListAdapters.
   *
   * @public
   */
  AdapterVersions?: AdapterVersionOverview[] | undefined;

  /**
   * Identifies the next page of results to return when listing adapter versions.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that specifies the resource to list tags for.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A set of tags (key-value pairs) that are part of the requested resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * The Amazon Simple Notification Service (Amazon SNS) topic to which Amazon Textract publishes the completion status of an asynchronous document operation.
 *
 * @public
 */
export interface NotificationChannel {
  /**
   * The Amazon SNS topic that Amazon Textract posts the completion status to.
   *
   * @public
   */
  SNSTopicArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that gives Amazon Textract publishing permissions to the Amazon SNS topic.
   *
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface StartDocumentAnalysisRequest {
  /**
   * The location of the document to be processed.
   *
   * @public
   */
  DocumentLocation: DocumentLocation | undefined;

  /**
   * A list of the types of analysis to perform. Add TABLES to the list to return information about the tables that are detected in the input document. Add FORMS to return detected form data. To perform both types of analysis, add TABLES and FORMS to `FeatureTypes`. All lines and words detected in the document are included in the response (including text that isn't related to the value of `FeatureTypes`).
   *
   * @public
   */
  FeatureTypes: FeatureType[] | undefined;

  /**
   * The idempotent token that you use to identify the start request. If you use the same token with multiple `StartDocumentAnalysis` requests, the same `JobId` is returned. Use `ClientRequestToken` to prevent the same job from being accidentally started more than once. For more information, see [Calling Amazon Textract Asynchronous Operations](https://docs.aws.amazon.com/textract/latest/dg/api-async.html).
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * An identifier that you specify that's included in the completion notification published to the Amazon SNS topic. For example, you can use `JobTag` to identify the type of document that the completion notification corresponds to (such as a tax form or a receipt).
   *
   * @public
   */
  JobTag?: string | undefined;

  /**
   * The Amazon SNS topic ARN that you want Amazon Textract to publish the completion status of the operation to.
   *
   * @public
   */
  NotificationChannel?: NotificationChannel | undefined;

  /**
   * Sets if the output will go to a customer defined bucket. By default, Amazon Textract will save the results internally to be accessed by the GetDocumentAnalysis operation.
   *
   * @public
   */
  OutputConfig?: OutputConfig | undefined;

  /**
   * The KMS key used to encrypt the inference results. This can be in either Key ID or Key Alias format. When a KMS key is provided, the KMS key will be used for server-side encryption of the objects in the customer bucket. When this parameter is not enabled, the result will be encrypted server side,using SSE-S3.
   *
   * @public
   */
  KMSKeyId?: string | undefined;

  /**
   * @public
   */
  QueriesConfig?: QueriesConfig | undefined;

  /**
   * Specifies the adapter to be used when analyzing a document.
   *
   * @public
   */
  AdaptersConfig?: AdaptersConfig | undefined;
}

/**
 * @public
 */
export interface StartDocumentAnalysisResponse {
  /**
   * The identifier for the document text detection job. Use `JobId` to identify the job in a subsequent call to `GetDocumentAnalysis`. A `JobId` value is only valid for 7 days.
   *
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface StartDocumentTextDetectionRequest {
  /**
   * The location of the document to be processed.
   *
   * @public
   */
  DocumentLocation: DocumentLocation | undefined;

  /**
   * The idempotent token that's used to identify the start request. If you use the same token with multiple `StartDocumentTextDetection` requests, the same `JobId` is returned. Use `ClientRequestToken` to prevent the same job from being accidentally started more than once. For more information, see [Calling Amazon Textract Asynchronous Operations](https://docs.aws.amazon.com/textract/latest/dg/api-async.html).
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * An identifier that you specify that's included in the completion notification published to the Amazon SNS topic. For example, you can use `JobTag` to identify the type of document that the completion notification corresponds to (such as a tax form or a receipt).
   *
   * @public
   */
  JobTag?: string | undefined;

  /**
   * The Amazon SNS topic ARN that you want Amazon Textract to publish the completion status of the operation to.
   *
   * @public
   */
  NotificationChannel?: NotificationChannel | undefined;

  /**
   * Sets if the output will go to a customer defined bucket. By default Amazon Textract will save the results internally to be accessed with the GetDocumentTextDetection operation.
   *
   * @public
   */
  OutputConfig?: OutputConfig | undefined;

  /**
   * The KMS key used to encrypt the inference results. This can be in either Key ID or Key Alias format. When a KMS key is provided, the KMS key will be used for server-side encryption of the objects in the customer bucket. When this parameter is not enabled, the result will be encrypted server side,using SSE-S3.
   *
   * @public
   */
  KMSKeyId?: string | undefined;
}

/**
 * @public
 */
export interface StartDocumentTextDetectionResponse {
  /**
   * The identifier of the text detection job for the document. Use `JobId` to identify the job in a subsequent call to `GetDocumentTextDetection`. A `JobId` value is only valid for 7 days.
   *
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface StartExpenseAnalysisRequest {
  /**
   * The location of the document to be processed.
   *
   * @public
   */
  DocumentLocation: DocumentLocation | undefined;

  /**
   * The idempotent token that's used to identify the start request. If you use the same token with multiple `StartDocumentTextDetection` requests, the same `JobId` is returned. Use `ClientRequestToken` to prevent the same job from being accidentally started more than once. For more information, see [Calling Amazon Textract Asynchronous Operations](https://docs.aws.amazon.com/textract/latest/dg/api-async.html)
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * An identifier you specify that's included in the completion notification published to the Amazon SNS topic. For example, you can use `JobTag` to identify the type of document that the completion notification corresponds to (such as a tax form or a receipt).
   *
   * @public
   */
  JobTag?: string | undefined;

  /**
   * The Amazon SNS topic ARN that you want Amazon Textract to publish the completion status of the operation to.
   *
   * @public
   */
  NotificationChannel?: NotificationChannel | undefined;

  /**
   * Sets if the output will go to a customer defined bucket. By default, Amazon Textract will save the results internally to be accessed by the `GetExpenseAnalysis` operation.
   *
   * @public
   */
  OutputConfig?: OutputConfig | undefined;

  /**
   * The KMS key used to encrypt the inference results. This can be in either Key ID or Key Alias format. When a KMS key is provided, the KMS key will be used for server-side encryption of the objects in the customer bucket. When this parameter is not enabled, the result will be encrypted server side,using SSE-S3.
   *
   * @public
   */
  KMSKeyId?: string | undefined;
}

/**
 * @public
 */
export interface StartExpenseAnalysisResponse {
  /**
   * A unique identifier for the text detection job. The `JobId` is returned from `StartExpenseAnalysis`. A `JobId` value is only valid for 7 days.
   *
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface StartLendingAnalysisRequest {
  /**
   * The Amazon S3 bucket that contains the document to be processed. It's used by asynchronous operations.
   *
   * The input document can be an image file in JPEG or PNG format. It can also be a file in PDF format.
   *
   * @public
   */
  DocumentLocation: DocumentLocation | undefined;

  /**
   * The idempotent token that you use to identify the start request. If you use the same token with multiple `StartLendingAnalysis` requests, the same `JobId` is returned. Use `ClientRequestToken` to prevent the same job from being accidentally started more than once. For more information, see [Calling Amazon Textract Asynchronous Operations](https://docs.aws.amazon.com/textract/latest/dg/api-sync.html).
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * An identifier that you specify to be included in the completion notification published to the Amazon SNS topic. For example, you can use `JobTag` to identify the type of document that the completion notification corresponds to (such as a tax form or a receipt).
   *
   * @public
   */
  JobTag?: string | undefined;

  /**
   * The Amazon Simple Notification Service (Amazon SNS) topic to which Amazon Textract publishes the completion status of an asynchronous document operation.
   *
   * @public
   */
  NotificationChannel?: NotificationChannel | undefined;

  /**
   * Sets whether or not your output will go to a user created bucket. Used to set the name of the bucket, and the prefix on the output file.
   *
   * `OutputConfig` is an optional parameter which lets you adjust where your output will be placed. By default, Amazon Textract will store the results internally and can only be accessed by the Get API operations. With `OutputConfig` enabled, you can set the name of the bucket the output will be sent to the file prefix of the results where you can download your results. Additionally, you can set the `KMSKeyID` parameter to a customer master key (CMK) to encrypt your output. Without this parameter set Amazon Textract will encrypt server-side using the AWS managed CMK for Amazon S3.
   *
   * Decryption of Customer Content is necessary for processing of the documents by Amazon Textract. If your account is opted out under an AI services opt out policy then all unencrypted Customer Content is immediately and permanently deleted after the Customer Content has been processed by the service. No copy of of the output is retained by Amazon Textract. For information about how to opt out, see [Managing AI services opt-out policy.](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html)
   *
   * For more information on data privacy, see the [Data Privacy FAQ](https://aws.amazon.com/compliance/data-privacy-faq/).
   *
   * @public
   */
  OutputConfig?: OutputConfig | undefined;

  /**
   * The KMS key used to encrypt the inference results. This can be in either Key ID or Key Alias format. When a KMS key is provided, the KMS key will be used for server-side encryption of the objects in the customer bucket. When this parameter is not enabled, the result will be encrypted server side, using SSE-S3.
   *
   * @public
   */
  KMSKeyId?: string | undefined;
}

/**
 * @public
 */
export interface StartLendingAnalysisResponse {
  /**
   * A unique identifier for the lending or text-detection job. The `JobId` is returned from `StartLendingAnalysis`. A `JobId` value is only valid for 7 days.
   *
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that specifies the resource to be tagged.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * A set of tags (key-value pairs) that you want to assign to the resource.
   *
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
   * The Amazon Resource Name (ARN) that specifies the resource to be untagged.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * Specifies the tags to be removed from the resource specified by the ResourceARN.
   *
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
   * A string containing a unique ID for the adapter that will be updated.
   *
   * @public
   */
  AdapterId: string | undefined;

  /**
   * The new description to be applied to the adapter.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The new name to be applied to the adapter.
   *
   * @public
   */
  AdapterName?: string | undefined;

  /**
   * The new auto-update status to be applied to the adapter.
   *
   * @public
   */
  AutoUpdate?: AutoUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateAdapterResponse {
  /**
   * A string containing a unique ID for the adapter that has been updated.
   *
   * @public
   */
  AdapterId?: string | undefined;

  /**
   * A string containing the name of the adapter that has been updated.
   *
   * @public
   */
  AdapterName?: string | undefined;

  /**
   * An object specifying the creation time of the the adapter that has been updated.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A string containing the description of the adapter that has been updated.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * List of the targeted feature types for the updated adapter.
   *
   * @public
   */
  FeatureTypes?: FeatureType[] | undefined;

  /**
   * The auto-update status of the adapter that has been updated.
   *
   * @public
   */
  AutoUpdate?: AutoUpdate | undefined;
}
