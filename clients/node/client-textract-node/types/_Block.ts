import { _Geometry, _UnmarshalledGeometry } from "./_Geometry";
import { _Relationship, _UnmarshalledRelationship } from "./_Relationship";

/**
 * <p>A <code>Block</code> represents items that are recognized in a document within a group of pixels close to each other. The information returned in a <code>Block</code> depends on the type of operation. In document-text detection (for example <a>DetectDocumentText</a>), you get information about the detected words and lines of text. In text analysis (for example <a>AnalyzeDocument</a>), you can also get information about the fields, tables and selection elements that are detected in the document.</p> <p>An array of <code>Block</code> objects is returned by both synchronous and asynchronous operations. In synchronous operations, such as <a>DetectDocumentText</a>, the array of <code>Block</code> objects is the entire set of results. In asynchronous operations, such as <a>GetDocumentAnalysis</a>, the array is returned over one or more responses.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works.html">How Amazon Textract Works</a>.</p>
 */
export interface _Block {
  /**
   * <p>The type of text that's recognized in a block. In text-detection operations, the following types are returned:</p> <ul> <li> <p> <i>PAGE</i> - Contains a list of the LINE Block objects that are detected on a document page.</p> </li> <li> <p> <i>WORD</i> - A word detected on a document page. A word is one or more ISO basic Latin script characters that aren't separated by spaces.</p> </li> <li> <p> <i>LINE</i> - A string of tab-delimited, contiguous words that's detected on a document page.</p> </li> </ul> <p>In text analysis operations, the following types are returned:</p> <ul> <li> <p> <i>PAGE</i> - Contains a list of child Block objects that are detected on a document page.</p> </li> <li> <p> <i>KEY_VALUE_SET</i> - Stores the KEY and VALUE Block objects for a field that's detected on a document page. Use the <code>EntityType</code> field to determine if a KEY_VALUE_SET object is a KEY Block object or a VALUE Block object. </p> </li> <li> <p> <i>WORD</i> - A word detected on a document page. A word is one or more ISO basic Latin script characters that aren't separated by spaces that's detected on a document page.</p> </li> <li> <p> <i>LINE</i> - A string of tab-delimited, contiguous words that's detected on a document page.</p> </li> <li> <p> <i>TABLE</i> - A table that's detected on a document page. A table is any grid-based information with 2 or more rows or columns with a cell span of 1 row and 1 column each. </p> </li> <li> <p> <i>CELL</i> - A cell within a detected table. The cell is the parent of the block that contains the text in the cell.</p> </li> <li> <p> <i>SELECTION_ELEMENT</i> - A selectable element such as a radio button or checkbox that's detected on a document page. Use the value of <code>SelectionStatus</code> to determine the status of the selection element.</p> </li> </ul>
   */
  BlockType?:
    | "KEY_VALUE_SET"
    | "PAGE"
    | "LINE"
    | "WORD"
    | "TABLE"
    | "CELL"
    | "SELECTION_ELEMENT"
    | string;

  /**
   * <p>The confidence that Amazon Textract has in the accuracy of the recognized text and the accuracy of the geometry points around the recognized text.</p>
   */
  Confidence?: number;

  /**
   * <p>The word or line of text that's recognized by Amazon Textract. </p>
   */
  Text?: string;

  /**
   * <p>The row in which a table cell is located. The first row position is 1. <code>RowIndex</code> isn't returned by <code>DetectDocumentText</code> and <code>GetDocumentTextDetection</code>.</p>
   */
  RowIndex?: number;

  /**
   * <p>The column in which a table cell appears. The first column position is 1. <code>ColumnIndex</code> isn't returned by <code>DetectDocumentText</code> and <code>GetDocumentTextDetection</code>.</p>
   */
  ColumnIndex?: number;

  /**
   * <p>The number of rows that a table spans. <code>RowSpan</code> isn't returned by <code>DetectDocumentText</code> and <code>GetDocumentTextDetection</code>.</p>
   */
  RowSpan?: number;

  /**
   * <p>The number of columns that a table cell spans. <code>ColumnSpan</code> isn't returned by <code>DetectDocumentText</code> and <code>GetDocumentTextDetection</code>. </p>
   */
  ColumnSpan?: number;

  /**
   * <p>The location of the recognized text on the image. It includes an axis-aligned, coarse bounding box that surrounds the text, and a finer-grain polygon for more accurate spatial information. </p>
   */
  Geometry?: _Geometry;

  /**
   * <p>The identifier for the recognized text. The identifier is only unique for a single operation. </p>
   */
  Id?: string;

  /**
   * <p>A list of child blocks of the current block. For example a LINE object has child blocks for each WORD block that's part of the line of text. There aren't Relationship objects in the list for relationships that don't exist, such as when the current block has no child blocks. The list size can be the following:</p> <ul> <li> <p>0 - The block has no child blocks.</p> </li> <li> <p>1 - The block has child blocks.</p> </li> </ul>
   */
  Relationships?: Array<_Relationship> | Iterable<_Relationship>;

  /**
   * <p>The type of entity. The following can be returned:</p> <ul> <li> <p> <i>KEY</i> - An identifier for a field on the document.</p> </li> <li> <p> <i>VALUE</i> - The field text.</p> </li> </ul> <p> <code>EntityTypes</code> isn't returned by <code>DetectDocumentText</code> and <code>GetDocumentTextDetection</code>.</p>
   */
  EntityTypes?:
    | Array<"KEY" | "VALUE" | string>
    | Iterable<"KEY" | "VALUE" | string>;

  /**
   * <p>The selection status of a selectable element such as a radio button or checkbox. </p>
   */
  SelectionStatus?: "SELECTED" | "NOT_SELECTED" | string;

  /**
   * <p>The page in which a block was detected. <code>Page</code> is returned by asynchronous operations. Page values greater than 1 are only returned for multi-page documents that are in PDF format. A scanned image (JPG/PNG), even if it contains multiple document pages, is always considered to be a single-page document and the value of <code>Page</code> is always 1. Synchronous operations don't return <code>Page</code> as every input document is considered to be a single-page document.</p>
   */
  Page?: number;
}

export interface _UnmarshalledBlock extends _Block {
  /**
   * <p>The location of the recognized text on the image. It includes an axis-aligned, coarse bounding box that surrounds the text, and a finer-grain polygon for more accurate spatial information. </p>
   */
  Geometry?: _UnmarshalledGeometry;

  /**
   * <p>A list of child blocks of the current block. For example a LINE object has child blocks for each WORD block that's part of the line of text. There aren't Relationship objects in the list for relationships that don't exist, such as when the current block has no child blocks. The list size can be the following:</p> <ul> <li> <p>0 - The block has no child blocks.</p> </li> <li> <p>1 - The block has child blocks.</p> </li> </ul>
   */
  Relationships?: Array<_UnmarshalledRelationship>;

  /**
   * <p>The type of entity. The following can be returned:</p> <ul> <li> <p> <i>KEY</i> - An identifier for a field on the document.</p> </li> <li> <p> <i>VALUE</i> - The field text.</p> </li> </ul> <p> <code>EntityTypes</code> isn't returned by <code>DetectDocumentText</code> and <code>GetDocumentTextDetection</code>.</p>
   */
  EntityTypes?: Array<"KEY" | "VALUE" | string>;
}
