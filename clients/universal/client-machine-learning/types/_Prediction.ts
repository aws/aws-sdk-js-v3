/**
 * <p>The output from a <code>Predict</code> operation: </p> <ul> <li> <p> <code>Details</code> - Contains the following attributes: <code>DetailsAttributes.PREDICTIVE_MODEL_TYPE - REGRESSION | BINARY | MULTICLASS</code> <code>DetailsAttributes.ALGORITHM - SGD</code> </p> </li> <li> <p> <code>PredictedLabel</code> - Present for either a <code>BINARY</code> or <code>MULTICLASS</code> <code>MLModel</code> request. </p> </li> <li> <p> <code>PredictedScores</code> - Contains the raw classification score corresponding to each label. </p> </li> <li> <p> <code>PredictedValue</code> - Present for a <code>REGRESSION</code> <code>MLModel</code> request. </p> </li> </ul>
 */
export interface _Prediction {
  /**
   * <p>The prediction label for either a <code>BINARY</code> or <code>MULTICLASS</code> <code>MLModel</code>.</p>
   */
  predictedLabel?: string;

  /**
   * The prediction value for <code>REGRESSION</code> <code>MLModel</code>.
   */
  predictedValue?: number;

  /**
   * Provides the raw classification score corresponding to each label.
   */
  predictedScores?: { [key: string]: number } | Iterable<[string, number]>;

  /**
   * Provides any additional details regarding the prediction.
   */
  details?:
    | { [key in "PredictiveModelType" | "Algorithm" | string]: string }
    | Iterable<["PredictiveModelType" | "Algorithm" | string, string]>;
}

export interface _UnmarshalledPrediction extends _Prediction {
  /**
   * Provides the raw classification score corresponding to each label.
   */
  predictedScores?: { [key: string]: number };

  /**
   * Provides any additional details regarding the prediction.
   */
  details?: { [key in "PredictiveModelType" | "Algorithm" | string]: string };
}
