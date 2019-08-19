/**
 * <p>A classifier for <code>JSON</code> content.</p>
 */
export interface _JsonClassifier {
  /**
   * <p>The name of the classifier.</p>
   */
  Name: string;

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
   * <p>A <code>JsonPath</code> string defining the JSON data for the classifier to classify. AWS Glue supports a subset of <code>JsonPath</code>, as described in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json">Writing JsonPath Custom Classifiers</a>.</p>
   */
  JsonPath: string;
}

export interface _UnmarshalledJsonClassifier extends _JsonClassifier {
  /**
   * <p>The time that this classifier was registered.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time that this classifier was last updated.</p>
   */
  LastUpdated?: Date;
}
