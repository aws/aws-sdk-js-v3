/**
 * <p>Detailed information about the accuracy of an entity recognizer for a specific entity type. </p>
 */
export interface _EntityTypesEvaluationMetrics {
  /**
   * <p>A measure of the usefulness of the recognizer results for a specific entity type in the test data. High precision means that the recognizer returned substantially more relevant results than irrelevant ones. </p>
   */
  Precision?: number;

  /**
   * <p>A measure of how complete the recognizer results are for a specific entity type in the test data. High recall means that the recognizer returned most of the relevant results.</p>
   */
  Recall?: number;

  /**
   * <p>A measure of how accurate the recognizer results are for for a specific entity type in the test data. It is derived from the <code>Precision</code> and <code>Recall</code> values. The <code>F1Score</code> is the harmonic average of the two scores. The highest score is 1, and the worst score is 0. </p>
   */
  F1Score?: number;
}

export type _UnmarshalledEntityTypesEvaluationMetrics = _EntityTypesEvaluationMetrics;
