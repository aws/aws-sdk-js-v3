/**
 * <p>A classifier for <code>XML</code> content.</p>
 */
export interface _XMLClassifier {
  /**
   * <p>The name of the classifier.</p>
   */
  Name: string;

  /**
   * <p>An identifier of the data format that the classifier matches.</p>
   */
  Classification: string;

  /**
   * <p>The time that this classifier was registered.</p>
   */
  CreationTime?: Date | string | number;

  /**
   * <p>The time that this classifier was last updated.</p>
   */
  LastUpdated?: Date | string | number;

  /**
   * <p>The version of this classifier.</p>
   */
  Version?: number;

  /**
   * <p>The XML tag designating the element that contains each record in an XML document being parsed. This can't identify a self-closing element (closed by <code>/&gt;</code>). An empty row element that contains only attributes can be parsed as long as it ends with a closing tag (for example, <code>&lt;row item_a="A" item_b="B"&gt;&lt;/row&gt;</code> is okay, but <code>&lt;row item_a="A" item_b="B" /&gt;</code> is not).</p>
   */
  RowTag?: string;
}

export interface _UnmarshalledXMLClassifier extends _XMLClassifier {
  /**
   * <p>The time that this classifier was registered.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time that this classifier was last updated.</p>
   */
  LastUpdated?: Date;
}
