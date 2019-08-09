import { _UnmarshalledStreamProcessorInput } from "./_StreamProcessorInput";
import { _UnmarshalledStreamProcessorOutput } from "./_StreamProcessorOutput";
import { _UnmarshalledStreamProcessorSettings } from "./_StreamProcessorSettings";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeStreamProcessorOutput shape
 */
export interface DescribeStreamProcessorOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Name of the stream processor. </p>
   */
  Name?: string;

  /**
   * <p>ARN of the stream processor.</p>
   */
  StreamProcessorArn?: string;

  /**
   * <p>Current status of the stream processor.</p>
   */
  Status?: "STOPPED" | "STARTING" | "RUNNING" | "FAILED" | "STOPPING" | string;

  /**
   * <p>Detailed status message about the stream processor.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Date and time the stream processor was created</p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>The time, in Unix format, the stream processor was last updated. For example, when the stream processor moves from a running state to a failed state, or when the user starts or stops the stream processor.</p>
   */
  LastUpdateTimestamp?: Date;

  /**
   * <p>Kinesis video stream that provides the source streaming video.</p>
   */
  Input?: _UnmarshalledStreamProcessorInput;

  /**
   * <p>Kinesis data stream to which Amazon Rekognition Video puts the analysis results.</p>
   */
  Output?: _UnmarshalledStreamProcessorOutput;

  /**
   * <p>ARN of the IAM role that allows access to the stream processor.</p>
   */
  RoleArn?: string;

  /**
   * <p>Face recognition input parameters that are being used by the stream processor. Includes the collection to use for face recognition and the face attributes to detect.</p>
   */
  Settings?: _UnmarshalledStreamProcessorSettings;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
