import { _LabelingJobInputConfig } from "./_LabelingJobInputConfig";
import { _LabelingJobOutputConfig } from "./_LabelingJobOutputConfig";
import { _LabelingJobStoppingConditions } from "./_LabelingJobStoppingConditions";
import { _LabelingJobAlgorithmsConfig } from "./_LabelingJobAlgorithmsConfig";
import { _HumanTaskConfig } from "./_HumanTaskConfig";
import { _Tag } from "./_Tag";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateLabelingJobInput shape
 */
export interface CreateLabelingJobInput {
  /**
   * <p>The name of the labeling job. This name is used to identify the job in a list of labeling jobs.</p>
   */
  LabelingJobName: string;

  /**
   * <p>The attribute name to use for the label in the output manifest file. This is the key for the key/value pair formed with the label that a worker assigns to the object. The name can't end with "-metadata". If you are running a semantic segmentation labeling job, the attribute name must end with "-ref". If you are running any other kind of labeling job, the attribute name must not end with "-ref".</p>
   */
  LabelAttributeName: string;

  /**
   * <p>Input data for the labeling job, such as the Amazon S3 location of the data objects and the location of the manifest file that describes the data objects.</p>
   */
  InputConfig: _LabelingJobInputConfig;

  /**
   * <p>The location of the output data and the AWS Key Management Service key ID for the key used to encrypt the output data, if any.</p>
   */
  OutputConfig: _LabelingJobOutputConfig;

  /**
   * <p>The Amazon Resource Number (ARN) that Amazon SageMaker assumes to perform tasks on your behalf during data labeling. You must grant this role the necessary permissions so that Amazon SageMaker can successfully complete data labeling.</p>
   */
  RoleArn: string;

  /**
   * <p>The S3 URL of the file that defines the categories used to label the data objects.</p> <p>The file is a JSON structure in the following format:</p> <p> <code>{</code> </p> <p> <code> "document-version": "2018-11-28"</code> </p> <p> <code> "labels": [</code> </p> <p> <code> {</code> </p> <p> <code> "label": "<i>label 1</i>"</code> </p> <p> <code> },</code> </p> <p> <code> {</code> </p> <p> <code> "label": "<i>label 2</i>"</code> </p> <p> <code> },</code> </p> <p> <code> ...</code> </p> <p> <code> {</code> </p> <p> <code> "label": "<i>label n</i>"</code> </p> <p> <code> }</code> </p> <p> <code> ]</code> </p> <p> <code>}</code> </p>
   */
  LabelCategoryConfigS3Uri?: string;

  /**
   * <p>A set of conditions for stopping the labeling job. If any of the conditions are met, the job is automatically stopped. You can use these conditions to control the cost of data labeling.</p>
   */
  StoppingConditions?: _LabelingJobStoppingConditions;

  /**
   * <p>Configures the information required to perform automated data labeling.</p>
   */
  LabelingJobAlgorithmsConfig?: _LabelingJobAlgorithmsConfig;

  /**
   * <p>Configures the information required for human workers to complete a labeling task.</p>
   */
  HumanTaskConfig: _HumanTaskConfig;

  /**
   * <p>An array of key/value pairs. For more information, see <a href="http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
