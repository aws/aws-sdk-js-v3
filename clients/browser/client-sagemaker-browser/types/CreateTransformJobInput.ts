import { _TransformInput } from "./_TransformInput";
import { _TransformOutput } from "./_TransformOutput";
import { _TransformResources } from "./_TransformResources";
import { _DataProcessing } from "./_DataProcessing";
import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateTransformJobInput shape
 */
export interface CreateTransformJobInput {
  /**
   * <p>The name of the transform job. The name must be unique within an AWS Region in an AWS account. </p>
   */
  TransformJobName: string;

  /**
   * <p>The name of the model that you want to use for the transform job. <code>ModelName</code> must be the name of an existing Amazon SageMaker model within an AWS Region in an AWS account.</p>
   */
  ModelName: string;

  /**
   * <p>The maximum number of parallel requests that can be sent to each instance in a transform job. If <code>MaxConcurrentTransforms</code> is set to <code>0</code> or left unset, Amazon SageMaker checks the optional execution-parameters to determine the optimal settings for your chosen algorithm. If the execution-parameters endpoint is not enabled, the default value is <code>1</code>. For more information on execution-parameters, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-batch-code.html#your-algorithms-batch-code-how-containe-serves-requests">How Containers Serve Requests</a>. For built-in algorithms, you don't need to set a value for <code>MaxConcurrentTransforms</code>.</p>
   */
  MaxConcurrentTransforms?: number;

  /**
   * <p>The maximum allowed size of the payload, in MB. A <i>payload</i> is the data portion of a record (without metadata). The value in <code>MaxPayloadInMB</code> must be greater than, or equal to, the size of a single record. To estimate the size of a record in MB, divide the size of your dataset by the number of records. To ensure that the records fit within the maximum payload size, we recommend using a slightly larger value. The default value is <code>6</code> MB. </p> <p>For cases where the payload might be arbitrarily large and is transmitted using HTTP chunked encoding, set the value to <code>0</code>. This feature works only in supported algorithms. Currently, Amazon SageMaker built-in algorithms do not support HTTP chunked encoding.</p>
   */
  MaxPayloadInMB?: number;

  /**
   * <p>Specifies the number of records to include in a mini-batch for an HTTP inference request. A <i>record</i> <i/> is a single unit of input data that inference can be made on. For example, a single line in a CSV file is a record. </p> <p>To enable the batch strategy, you must set <code>SplitType</code> to <code>Line</code>, <code>RecordIO</code>, or <code>TFRecord</code>.</p> <p>To use only one record when making an HTTP invocation request to a container, set <code>BatchStrategy</code> to <code>SingleRecord</code> and <code>SplitType</code> to <code>Line</code>.</p> <p>To fit as many records in a mini-batch as can fit within the <code>MaxPayloadInMB</code> limit, set <code>BatchStrategy</code> to <code>MultiRecord</code> and <code>SplitType</code> to <code>Line</code>.</p>
   */
  BatchStrategy?: "MultiRecord" | "SingleRecord" | string;

  /**
   * <p>The environment variables to set in the Docker container. We support up to 16 key and values entries in the map.</p>
   */
  Environment?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>Describes the input source and the way the transform job consumes it.</p>
   */
  TransformInput: _TransformInput;

  /**
   * <p>Describes the results of the transform job.</p>
   */
  TransformOutput: _TransformOutput;

  /**
   * <p>Describes the resources, including ML instance types and ML instance count, to use for the transform job.</p>
   */
  TransformResources: _TransformResources;

  /**
   * <p>The data structure used for combining the input data and inference in the output file. For more information, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-io-join.html">Batch Transform I/O Join</a>.</p>
   */
  DataProcessing?: _DataProcessing;

  /**
   * <p>(Optional) An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>.</p>
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
