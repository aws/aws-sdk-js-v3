/**
 * <p>Specifies a JSON classifier for <code>CreateClassifier</code> to create.</p>
 */
export interface _CreateJsonClassifierRequest {
  /**
   * <p>The name of the classifier.</p>
   */
  Name: string;

  /**
   * <p>A <code>JsonPath</code> string defining the JSON data for the classifier to classify. AWS Glue supports a subset of <code>JsonPath</code>, as described in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json">Writing JsonPath Custom Classifiers</a>.</p>
   */
  JsonPath: string;
}

export type _UnmarshalledCreateJsonClassifierRequest = _CreateJsonClassifierRequest;
