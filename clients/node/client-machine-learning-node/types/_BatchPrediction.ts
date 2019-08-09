/**
 * <p> Represents the output of a <code>GetBatchPrediction</code> operation.</p> <p> The content consists of the detailed metadata, the status, and the data file information of a <code>Batch Prediction</code>.</p>
 */
export interface _BatchPrediction {
  /**
   * <p>The ID assigned to the <code>BatchPrediction</code> at creation. This value should be identical to the value of the <code>BatchPredictionID</code> in the request. </p>
   */
  BatchPredictionId?: string;

  /**
   * <p>The ID of the <code>MLModel</code> that generated predictions for the <code>BatchPrediction</code> request.</p>
   */
  MLModelId?: string;

  /**
   * <p>The ID of the <code>DataSource</code> that points to the group of observations to predict.</p>
   */
  BatchPredictionDataSourceId?: string;

  /**
   * <p>The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).</p>
   */
  InputDataLocationS3?: string;

  /**
   * <p>The AWS user account that invoked the <code>BatchPrediction</code>. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.</p>
   */
  CreatedByIamUser?: string;

  /**
   * <p>The time that the <code>BatchPrediction</code> was created. The time is expressed in epoch time.</p>
   */
  CreatedAt?: Date | string | number;

  /**
   * <p>The time of the most recent edit to the <code>BatchPrediction</code>. The time is expressed in epoch time.</p>
   */
  LastUpdatedAt?: Date | string | number;

  /**
   * <p>A user-supplied name or description of the <code>BatchPrediction</code>.</p>
   */
  Name?: string;

  /**
   * <p>The status of the <code>BatchPrediction</code>. This element can have one of the following values:</p> <ul> <li> <code>PENDING</code> - Amazon Machine Learning (Amazon ML) submitted a request to generate predictions for a batch of observations.</li> <li> <code>INPROGRESS</code> - The process is underway.</li> <li> <code>FAILED</code> - The request to perform a batch prediction did not run to completion. It is not usable.</li> <li> <code>COMPLETED</code> - The batch prediction process completed successfully.</li> <li> <code>DELETED</code> - The <code>BatchPrediction</code> is marked as deleted. It is not usable.</li> </ul>
   */
  Status?:
    | "PENDING"
    | "INPROGRESS"
    | "FAILED"
    | "COMPLETED"
    | "DELETED"
    | string;

  /**
   * <p>The location of an Amazon S3 bucket or directory to receive the operation results. The following substrings are not allowed in the <code>s3 key</code> portion of the <code>outputURI</code> field: ':', '//', '/./', '/../'.</p>
   */
  OutputUri?: string;

  /**
   * <p>A description of the most recent details about processing the batch prediction request.</p>
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

  /**
   * <p>Long integer type that is a 64-bit signed number.</p>
   */
  TotalRecordCount?: number;

  /**
   * <p>Long integer type that is a 64-bit signed number.</p>
   */
  InvalidRecordCount?: number;
}

export interface _UnmarshalledBatchPrediction extends _BatchPrediction {
  /**
   * <p>The time that the <code>BatchPrediction</code> was created. The time is expressed in epoch time.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The time of the most recent edit to the <code>BatchPrediction</code>. The time is expressed in epoch time.</p>
   */
  LastUpdatedAt?: Date;

  /**
   * <p>A timestamp represented in epoch time.</p>
   */
  FinishedAt?: Date;

  /**
   * <p>A timestamp represented in epoch time.</p>
   */
  StartedAt?: Date;
}
