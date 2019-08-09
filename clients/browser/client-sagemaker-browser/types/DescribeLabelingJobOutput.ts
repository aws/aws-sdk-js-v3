import { _UnmarshalledLabelCounters } from "./_LabelCounters";
import { _UnmarshalledLabelingJobInputConfig } from "./_LabelingJobInputConfig";
import { _UnmarshalledLabelingJobOutputConfig } from "./_LabelingJobOutputConfig";
import { _UnmarshalledLabelingJobStoppingConditions } from "./_LabelingJobStoppingConditions";
import { _UnmarshalledLabelingJobAlgorithmsConfig } from "./_LabelingJobAlgorithmsConfig";
import { _UnmarshalledHumanTaskConfig } from "./_HumanTaskConfig";
import { _UnmarshalledTag } from "./_Tag";
import { _UnmarshalledLabelingJobOutput } from "./_LabelingJobOutput";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeLabelingJobOutput shape
 */
export interface DescribeLabelingJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The processing status of the labeling job. </p>
   */
  LabelingJobStatus:
    | "InProgress"
    | "Completed"
    | "Failed"
    | "Stopping"
    | "Stopped"
    | string;

  /**
   * <p>Provides a breakdown of the number of data objects labeled by humans, the number of objects labeled by machine, the number of objects than couldn't be labeled, and the total number of objects labeled. </p>
   */
  LabelCounters: _UnmarshalledLabelCounters;

  /**
   * <p>If the job failed, the reason that it failed. </p>
   */
  FailureReason?: string;

  /**
   * <p>The date and time that the labeling job was created.</p>
   */
  CreationTime: Date;

  /**
   * <p>The date and time that the labeling job was last updated.</p>
   */
  LastModifiedTime: Date;

  /**
   * <p>A unique identifier for work done as part of a labeling job.</p>
   */
  JobReferenceCode: string;

  /**
   * <p>The name assigned to the labeling job when it was created.</p>
   */
  LabelingJobName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the labeling job.</p>
   */
  LabelingJobArn: string;

  /**
   * <p>The attribute used as the label in the output manifest file.</p>
   */
  LabelAttributeName?: string;

  /**
   * <p>Input configuration information for the labeling job, such as the Amazon S3 location of the data objects and the location of the manifest file that describes the data objects.</p>
   */
  InputConfig: _UnmarshalledLabelingJobInputConfig;

  /**
   * <p>The location of the job's output data and the AWS Key Management Service key ID for the key used to encrypt the output data, if any.</p>
   */
  OutputConfig: _UnmarshalledLabelingJobOutputConfig;

  /**
   * <p>The Amazon Resource Name (ARN) that Amazon SageMaker assumes to perform tasks on your behalf during data labeling.</p>
   */
  RoleArn: string;

  /**
   * <p>The S3 location of the JSON file that defines the categories used to label data objects.</p> <p>The file is a JSON structure in the following format:</p> <p> <code>{</code> </p> <p> <code> "document-version": "2018-11-28"</code> </p> <p> <code> "labels": [</code> </p> <p> <code> {</code> </p> <p> <code> "label": "<i>label 1</i>"</code> </p> <p> <code> },</code> </p> <p> <code> {</code> </p> <p> <code> "label": "<i>label 2</i>"</code> </p> <p> <code> },</code> </p> <p> <code> ...</code> </p> <p> <code> {</code> </p> <p> <code> "label": "<i>label n</i>"</code> </p> <p> <code> }</code> </p> <p> <code> ]</code> </p> <p> <code>}</code> </p>
   */
  LabelCategoryConfigS3Uri?: string;

  /**
   * <p>A set of conditions for stopping a labeling job. If any of the conditions are met, the job is automatically stopped.</p>
   */
  StoppingConditions?: _UnmarshalledLabelingJobStoppingConditions;

  /**
   * <p>Configuration information for automated data labeling.</p>
   */
  LabelingJobAlgorithmsConfig?: _UnmarshalledLabelingJobAlgorithmsConfig;

  /**
   * <p>Configuration information required for human workers to complete a labeling task.</p>
   */
  HumanTaskConfig: _UnmarshalledHumanTaskConfig;

  /**
   * <p>An array of key/value pairs. For more information, see <a href="http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * <p>The location of the output produced by the labeling job.</p>
   */
  LabelingJobOutput?: _UnmarshalledLabelingJobOutput;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
