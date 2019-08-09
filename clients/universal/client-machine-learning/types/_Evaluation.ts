import {
  _PerformanceMetrics,
  _UnmarshalledPerformanceMetrics
} from "./_PerformanceMetrics";

/**
 * <p> Represents the output of <code>GetEvaluation</code> operation. </p> <p>The content consists of the detailed metadata and data file information and the current status of the <code>Evaluation</code>.</p>
 */
export interface _Evaluation {
  /**
   * <p>The ID that is assigned to the <code>Evaluation</code> at creation.</p>
   */
  EvaluationId?: string;

  /**
   * <p>The ID of the <code>MLModel</code> that is the focus of the evaluation.</p>
   */
  MLModelId?: string;

  /**
   * <p>The ID of the <code>DataSource</code> that is used to evaluate the <code>MLModel</code>.</p>
   */
  EvaluationDataSourceId?: string;

  /**
   * <p>The location and name of the data in Amazon Simple Storage Server (Amazon S3) that is used in the evaluation.</p>
   */
  InputDataLocationS3?: string;

  /**
   * <p>The AWS user account that invoked the evaluation. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.</p>
   */
  CreatedByIamUser?: string;

  /**
   * <p>The time that the <code>Evaluation</code> was created. The time is expressed in epoch time.</p>
   */
  CreatedAt?: Date | string | number;

  /**
   * <p>The time of the most recent edit to the <code>Evaluation</code>. The time is expressed in epoch time.</p>
   */
  LastUpdatedAt?: Date | string | number;

  /**
   * <p>A user-supplied name or description of the <code>Evaluation</code>. </p>
   */
  Name?: string;

  /**
   * <p>The status of the evaluation. This element can have one of the following values:</p> <ul> <li> <code>PENDING</code> - Amazon Machine Learning (Amazon ML) submitted a request to evaluate an <code>MLModel</code>.</li> <li> <code>INPROGRESS</code> - The evaluation is underway.</li> <li> <code>FAILED</code> - The request to evaluate an <code>MLModel</code> did not run to completion. It is not usable.</li> <li> <code>COMPLETED</code> - The evaluation process completed successfully.</li> <li> <code>DELETED</code> - The <code>Evaluation</code> is marked as deleted. It is not usable.</li> </ul>
   */
  Status?:
    | "PENDING"
    | "INPROGRESS"
    | "FAILED"
    | "COMPLETED"
    | "DELETED"
    | string;

  /**
   * <p>Measurements of how well the <code>MLModel</code> performed, using observations referenced by the <code>DataSource</code>. One of the following metrics is returned, based on the type of the <code>MLModel</code>: </p> <ul> <li> <p>BinaryAUC: A binary <code>MLModel</code> uses the Area Under the Curve (AUC) technique to measure performance. </p> </li> <li> <p>RegressionRMSE: A regression <code>MLModel</code> uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.</p> </li> <li> <p>MulticlassAvgFScore: A multiclass <code>MLModel</code> uses the F1 score technique to measure performance. </p> </li> </ul> <p> For more information about performance metrics, please see the <a href="http://docs.aws.amazon.com/machine-learning/latest/dg">Amazon Machine Learning Developer Guide</a>. </p>
   */
  PerformanceMetrics?: _PerformanceMetrics;

  /**
   * <p>A description of the most recent details about evaluating the <code>MLModel</code>.</p>
   */
  Message?: string;

  /**
   * <p>Long integer type that is a 64-bit signed number.</p>
   */
  ComputeTime?: number;

  /**
   * <p>A timestamp represented in epoch time.</p>
   */
  FinishedAt?: Date | string | number;

  /**
   * <p>A timestamp represented in epoch time.</p>
   */
  StartedAt?: Date | string | number;
}

export interface _UnmarshalledEvaluation extends _Evaluation {
  /**
   * <p>The time that the <code>Evaluation</code> was created. The time is expressed in epoch time.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The time of the most recent edit to the <code>Evaluation</code>. The time is expressed in epoch time.</p>
   */
  LastUpdatedAt?: Date;

  /**
   * <p>Measurements of how well the <code>MLModel</code> performed, using observations referenced by the <code>DataSource</code>. One of the following metrics is returned, based on the type of the <code>MLModel</code>: </p> <ul> <li> <p>BinaryAUC: A binary <code>MLModel</code> uses the Area Under the Curve (AUC) technique to measure performance. </p> </li> <li> <p>RegressionRMSE: A regression <code>MLModel</code> uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.</p> </li> <li> <p>MulticlassAvgFScore: A multiclass <code>MLModel</code> uses the F1 score technique to measure performance. </p> </li> </ul> <p> For more information about performance metrics, please see the <a href="http://docs.aws.amazon.com/machine-learning/latest/dg">Amazon Machine Learning Developer Guide</a>. </p>
   */
  PerformanceMetrics?: _UnmarshalledPerformanceMetrics;

  /**
   * <p>A timestamp represented in epoch time.</p>
   */
  FinishedAt?: Date;

  /**
   * <p>A timestamp represented in epoch time.</p>
   */
  StartedAt?: Date;
}
