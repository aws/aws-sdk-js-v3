import {
  _ClassifierEvaluationMetrics,
  _UnmarshalledClassifierEvaluationMetrics
} from "./_ClassifierEvaluationMetrics";

/**
 * <p>Provides information about a document classifier.</p>
 */
export interface _ClassifierMetadata {
  /**
   * <p>The number of labels in the input data. </p>
   */
  NumberOfLabels?: number;

  /**
   * <p>The number of documents in the input data that were used to train the classifier. Typically this is 80 to 90 percent of the input documents.</p>
   */
  NumberOfTrainedDocuments?: number;

  /**
   * <p>The number of documents in the input data that were used to test the classifier. Typically this is 10 to 20 percent of the input documents.</p>
   */
  NumberOfTestDocuments?: number;

  /**
   * <p> Describes the result metrics for the test data associated with an documentation classifier.</p>
   */
  EvaluationMetrics?: _ClassifierEvaluationMetrics;
}

export interface _UnmarshalledClassifierMetadata extends _ClassifierMetadata {
  /**
   * <p> Describes the result metrics for the test data associated with an documentation classifier.</p>
   */
  EvaluationMetrics?: _UnmarshalledClassifierEvaluationMetrics;
}
