/**
 * <p>Specifies an XML classifier for <code>CreateClassifier</code> to create.</p>
 */
export interface _CreateXMLClassifierRequest {
  /**
   * <p>An identifier of the data format that the classifier matches.</p>
   */
  Classification: string;

  /**
   * <p>The name of the classifier.</p>
   */
  Name: string;

  /**
   * <p>The XML tag designating the element that contains each record in an XML document being parsed. This can't identify a self-closing element (closed by <code>/&gt;</code>). An empty row element that contains only attributes can be parsed as long as it ends with a closing tag (for example, <code>&lt;row item_a="A" item_b="B"&gt;&lt;/row&gt;</code> is okay, but <code>&lt;row item_a="A" item_b="B" /&gt;</code> is not).</p>
   */
  RowTag?: string;
}

export type _UnmarshalledCreateXMLClassifierRequest = _CreateXMLClassifierRequest;
