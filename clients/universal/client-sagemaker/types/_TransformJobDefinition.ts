import {
  _TransformInput,
  _UnmarshalledTransformInput
} from "./_TransformInput";
import {
  _TransformOutput,
  _UnmarshalledTransformOutput
} from "./_TransformOutput";
import {
  _TransformResources,
  _UnmarshalledTransformResources
} from "./_TransformResources";

/**
 * <p>Defines the input needed to run a transform job using the inference specification specified in the algorithm.</p>
 */
export interface _TransformJobDefinition {
  /**
   * <p>The maximum number of parallel requests that can be sent to each instance in a transform job. The default value is 1.</p>
   */
  MaxConcurrentTransforms?: number;

  /**
   * <p>The maximum payload size allowed, in MB. A payload is the data portion of a record (without metadata).</p>
   */
  MaxPayloadInMB?: number;

  /**
   * <p>A string that determines the number of records included in a single mini-batch.</p> <p> <code>SingleRecord</code> means only one record is used per mini-batch. <code>MultiRecord</code> means a mini-batch is set to contain as many records that can fit within the <code>MaxPayloadInMB</code> limit.</p>
   */
  BatchStrategy?: "MultiRecord" | "SingleRecord" | string;

  /**
   * <p>The environment variables to set in the Docker container. We support up to 16 key and values entries in the map.</p>
   */
  Environment?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>A description of the input source and the way the transform job consumes it.</p>
   */
  TransformInput: _TransformInput;

  /**
   * <p>Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the transform job.</p>
   */
  TransformOutput: _TransformOutput;

  /**
   * <p>Identifies the ML compute instances for the transform job.</p>
   */
  TransformResources: _TransformResources;
}

export interface _UnmarshalledTransformJobDefinition
  extends _TransformJobDefinition {
  /**
   * <p>The environment variables to set in the Docker container. We support up to 16 key and values entries in the map.</p>
   */
  Environment?: { [key: string]: string };

  /**
   * <p>A description of the input source and the way the transform job consumes it.</p>
   */
  TransformInput: _UnmarshalledTransformInput;

  /**
   * <p>Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the transform job.</p>
   */
  TransformOutput: _UnmarshalledTransformOutput;

  /**
   * <p>Identifies the ML compute instances for the transform job.</p>
   */
  TransformResources: _UnmarshalledTransformResources;
}
