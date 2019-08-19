import { _UnmarshalledStoppingCondition } from "./_StoppingCondition";
import { _UnmarshalledModelArtifacts } from "./_ModelArtifacts";
import { _UnmarshalledInputConfig } from "./_InputConfig";
import { _UnmarshalledOutputConfig } from "./_OutputConfig";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeCompilationJobOutput shape
 */
export interface DescribeCompilationJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the model compilation job.</p>
   */
  CompilationJobName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker assumes to perform the model compilation job.</p>
   */
  CompilationJobArn: string;

  /**
   * <p>The status of the model compilation job.</p>
   */
  CompilationJobStatus:
    | "INPROGRESS"
    | "COMPLETED"
    | "FAILED"
    | "STARTING"
    | "STOPPING"
    | "STOPPED"
    | string;

  /**
   * <p>The time when the model compilation job started the <code>CompilationJob</code> instances. </p> <p>You are billed for the time between this timestamp and the timestamp in the <a>DescribeCompilationJobResponse$CompilationEndTime</a> field. In Amazon CloudWatch Logs, the start time might be later than this time. That's because it takes time to download the compilation job, which depends on the size of the compilation job container. </p>
   */
  CompilationStartTime?: Date;

  /**
   * <p>The time when the model compilation job on a compilation job instance ended. For a successful or stopped job, this is when the job's model artifacts have finished uploading. For a failed job, this is when Amazon SageMaker detected that the job failed. </p>
   */
  CompilationEndTime?: Date;

  /**
   * <p>Specifies a limit to how long a model compilation job can run. When the job reaches the time limit, Amazon SageMaker ends the compilation job. Use this API to cap model training costs.</p>
   */
  StoppingCondition: _UnmarshalledStoppingCondition;

  /**
   * <p>The time that the model compilation job was created.</p>
   */
  CreationTime: Date;

  /**
   * <p>The time that the status of the model compilation job was last modified.</p>
   */
  LastModifiedTime: Date;

  /**
   * <p>If a model compilation job failed, the reason it failed. </p>
   */
  FailureReason: string;

  /**
   * <p>Information about the location in Amazon S3 that has been configured for storing the model artifacts used in the compilation job.</p>
   */
  ModelArtifacts: _UnmarshalledModelArtifacts;

  /**
   * <p>The Amazon Resource Name (ARN) of the model compilation job.</p>
   */
  RoleArn: string;

  /**
   * <p>Information about the location in Amazon S3 of the input model artifacts, the name and shape of the expected data inputs, and the framework in which the model was trained.</p>
   */
  InputConfig: _UnmarshalledInputConfig;

  /**
   * <p>Information about the output location for the compiled model and the target device that the model runs on.</p>
   */
  OutputConfig: _UnmarshalledOutputConfig;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
