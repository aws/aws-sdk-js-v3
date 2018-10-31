import {_UnmarshalledPerformanceMetrics} from './_PerformanceMetrics';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>Represents the output of a <code>GetEvaluation</code> operation and describes an <code>Evaluation</code>.</p>
 */
export interface GetEvaluationOutput {
    /**
     * <p>The evaluation ID which is same as the <code>EvaluationId</code> in the request.</p>
     */
    EvaluationId?: string;

    /**
     * <p>The ID of the <code>MLModel</code> that was the focus of the evaluation.</p>
     */
    MLModelId?: string;

    /**
     * <p>The <code>DataSource</code> used for this evaluation.</p>
     */
    EvaluationDataSourceId?: string;

    /**
     * <p>The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).</p>
     */
    InputDataLocationS3?: string;

    /**
     * <p>The AWS user account that invoked the evaluation. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.</p>
     */
    CreatedByIamUser?: string;

    /**
     * <p>The time that the <code>Evaluation</code> was created. The time is expressed in epoch time.</p>
     */
    CreatedAt?: Date;

    /**
     * <p>The time of the most recent edit to the <code>Evaluation</code>. The time is expressed in epoch time.</p>
     */
    LastUpdatedAt?: Date;

    /**
     * <p>A user-supplied name or description of the <code>Evaluation</code>. </p>
     */
    Name?: string;

    /**
     * <p>The status of the evaluation. This element can have one of the following values:</p> <ul> <li> <code>PENDING</code> - Amazon Machine Language (Amazon ML) submitted a request to evaluate an <code>MLModel</code>.</li> <li> <code>INPROGRESS</code> - The evaluation is underway.</li> <li> <code>FAILED</code> - The request to evaluate an <code>MLModel</code> did not run to completion. It is not usable.</li> <li> <code>COMPLETED</code> - The evaluation process completed successfully.</li> <li> <code>DELETED</code> - The <code>Evaluation</code> is marked as deleted. It is not usable.</li> </ul>
     */
    Status?: 'PENDING'|'INPROGRESS'|'FAILED'|'COMPLETED'|'DELETED'|string;

    /**
     * <p>Measurements of how well the <code>MLModel</code> performed using observations referenced by the <code>DataSource</code>. One of the following metric is returned based on the type of the <code>MLModel</code>: </p> <ul> <li> <p>BinaryAUC: A binary <code>MLModel</code> uses the Area Under the Curve (AUC) technique to measure performance. </p> </li> <li> <p>RegressionRMSE: A regression <code>MLModel</code> uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.</p> </li> <li> <p>MulticlassAvgFScore: A multiclass <code>MLModel</code> uses the F1 score technique to measure performance. </p> </li> </ul> <p> For more information about performance metrics, please see the <a href="http://docs.aws.amazon.com/machine-learning/latest/dg">Amazon Machine Learning Developer Guide</a>. </p>
     */
    PerformanceMetrics?: _UnmarshalledPerformanceMetrics;

    /**
     * <p>A link to the file that contains logs of the <code>CreateEvaluation</code> operation.</p>
     */
    LogUri?: string;

    /**
     * <p>A description of the most recent details about evaluating the <code>MLModel</code>.</p>
     */
    Message?: string;

    /**
     * <p>The approximate CPU time in milliseconds that Amazon Machine Learning spent processing the <code>Evaluation</code>, normalized and scaled on computation resources. <code>ComputeTime</code> is only available if the <code>Evaluation</code> is in the <code>COMPLETED</code> state.</p>
     */
    ComputeTime?: number;

    /**
     * <p>The epoch time when Amazon Machine Learning marked the <code>Evaluation</code> as <code>COMPLETED</code> or <code>FAILED</code>. <code>FinishedAt</code> is only available when the <code>Evaluation</code> is in the <code>COMPLETED</code> or <code>FAILED</code> state.</p>
     */
    FinishedAt?: Date;

    /**
     * <p>The epoch time when Amazon Machine Learning marked the <code>Evaluation</code> as <code>INPROGRESS</code>. <code>StartedAt</code> isn't available if the <code>Evaluation</code> is in the <code>PENDING</code> state.</p>
     */
    StartedAt?: Date;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
