/**
 * <p>A classifier that uses <code>grok</code> patterns.</p>
 */
export interface _GrokClassifier {
  /**
   * <p>The name of the classifier.</p>
   */
  Name: string;

  /**
   * <p>An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, and so on.</p>
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
   * <p>The grok pattern applied to a data store by this classifier. For more information, see built-in patterns in <a href="http://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html">Writing Custom Classifiers</a>.</p>
   */
  GrokPattern: string;

  /**
   * <p>Optional custom grok patterns defined by this classifier. For more information, see custom patterns in <a href="http://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html">Writing Custom Classifiers</a>.</p>
   */
  CustomPatterns?: string;
}

export interface _UnmarshalledGrokClassifier extends _GrokClassifier {
  /**
   * <p>The time that this classifier was registered.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time that this classifier was last updated.</p>
   */
  LastUpdated?: Date;
}
