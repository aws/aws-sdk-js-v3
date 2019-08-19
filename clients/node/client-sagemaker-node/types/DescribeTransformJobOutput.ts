import { _UnmarshalledTransformInput } from "./_TransformInput";
import { _UnmarshalledTransformOutput } from "./_TransformOutput";
import { _UnmarshalledTransformResources } from "./_TransformResources";
import { _UnmarshalledDataProcessing } from "./_DataProcessing";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeTransformJobOutput shape
 */
export interface DescribeTransformJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the transform job.</p>
   */
  TransformJobName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the transform job.</p>
   */
  TransformJobArn: string;

  /**
   * <p>The status of the transform job. If the transform job failed, the reason is returned in the <code>FailureReason</code> field.</p>
   */
  TransformJobStatus:
    | "InProgress"
    | "Completed"
    | "Failed"
    | "Stopping"
    | "Stopped"
    | string;

  /**
   * <p>If the transform job failed, <code>FailureReason</code> describes why it failed. A transform job creates a log file, which includes error messages, and stores it as an Amazon S3 object. For more information, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/logging-cloudwatch.html">Log Amazon SageMaker Events with Amazon CloudWatch</a>.</p>
   */
  FailureReason?: string;

  /**
   * <p>The name of the model used in the transform job.</p>
   */
  ModelName: string;

  /**
   * <p>The maximum number of parallel requests on each instance node that can be launched in a transform job. The default value is 1.</p>
   */
  MaxConcurrentTransforms?: number;

  /**
   * <p>The maximum payload size, in MB, used in the transform job.</p>
   */
  MaxPayloadInMB?: number;

  /**
   * <p>Specifies the number of records to include in a mini-batch for an HTTP inference request. A <i>record</i> <i/> is a single unit of input data that inference can be made on. For example, a single line in a CSV file is a record. </p> <p>To enable the batch strategy, you must set <code>SplitType</code> to <code>Line</code>, <code>RecordIO</code>, or <code>TFRecord</code>.</p>
   */
  BatchStrategy?: "MultiRecord" | "SingleRecord" | string;

  /**
   * <p>The environment variables to set in the Docker container. We support up to 16 key and values entries in the map.</p>
   */
  Environment?: { [key: string]: string };

  /**
   * <p>Describes the dataset to be transformed and the Amazon S3 location where it is stored.</p>
   */
  TransformInput: _UnmarshalledTransformInput;

  /**
   * <p>Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the transform job.</p>
   */
  TransformOutput?: _UnmarshalledTransformOutput;

  /**
   * <p>Describes the resources, including ML instance types and ML instance count, to use for the transform job.</p>
   */
  TransformResources: _UnmarshalledTransformResources;

  /**
   * <p>A timestamp that shows when the transform Job was created.</p>
   */
  CreationTime: Date;

  /**
   * <p>Indicates when the transform job starts on ML instances. You are billed for the time interval between this time and the value of <code>TransformEndTime</code>.</p>
   */
  TransformStartTime?: Date;

  /**
   * <p>Indicates when the transform job has been completed, or has stopped or failed. You are billed for the time interval between this time and the value of <code>TransformStartTime</code>.</p>
   */
  TransformEndTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SageMaker Ground Truth labeling job that created the transform or training job.</p>
   */
  LabelingJobArn?: string;

  /**
   * <p>The data structure used to combine the input data and transformed data from the batch transform output into a joined dataset and to store it in an output file. It also contains information on how to filter the input data and the joined dataset. For more information, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-io-join.html">Batch Transform I/O Join</a>.</p>
   */
  DataProcessing?: _UnmarshalledDataProcessing;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
