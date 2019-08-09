import {
  _GrokClassifier,
  _UnmarshalledGrokClassifier
} from "./_GrokClassifier";
import { _XMLClassifier, _UnmarshalledXMLClassifier } from "./_XMLClassifier";
import {
  _JsonClassifier,
  _UnmarshalledJsonClassifier
} from "./_JsonClassifier";
import { _CsvClassifier, _UnmarshalledCsvClassifier } from "./_CsvClassifier";

/**
 * <p>Classifiers are triggered during a crawl task. A classifier checks whether a given file is in a format it can handle. If it is, the classifier creates a schema in the form of a <code>StructType</code> object that matches that data format.</p> <p>You can use the standard classifiers that AWS Glue provides, or you can write your own classifiers to best categorize your data sources and specify the appropriate schemas to use for them. A classifier can be a <code>grok</code> classifier, an <code>XML</code> classifier, a <code>JSON</code> classifier, or a custom <code>CSV</code> classifier, as specified in one of the fields in the <code>Classifier</code> object.</p>
 */
export interface _Classifier {
  /**
   * <p>A classifier that uses <code>grok</code>.</p>
   */
  GrokClassifier?: _GrokClassifier;

  /**
   * <p>A classifier for XML content.</p>
   */
  XMLClassifier?: _XMLClassifier;

  /**
   * <p>A classifier for JSON content.</p>
   */
  JsonClassifier?: _JsonClassifier;

  /**
   * <p>A classifier for comma-separated values (CSV).</p>
   */
  CsvClassifier?: _CsvClassifier;
}

export interface _UnmarshalledClassifier extends _Classifier {
  /**
   * <p>A classifier that uses <code>grok</code>.</p>
   */
  GrokClassifier?: _UnmarshalledGrokClassifier;

  /**
   * <p>A classifier for XML content.</p>
   */
  XMLClassifier?: _UnmarshalledXMLClassifier;

  /**
   * <p>A classifier for JSON content.</p>
   */
  JsonClassifier?: _UnmarshalledJsonClassifier;

  /**
   * <p>A classifier for comma-separated values (CSV).</p>
   */
  CsvClassifier?: _UnmarshalledCsvClassifier;
}
