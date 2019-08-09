import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartDominantLanguageDetectionJobOutput shape
 */
export interface StartDominantLanguageDetectionJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identifier generated for the job. To get the status of a job, use this identifier with the operation.</p>
   */
  JobId?: string;

  /**
   * <p>The status of the job. </p> <ul> <li> <p>SUBMITTED - The job has been received and is queued for processing.</p> </li> <li> <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p> </li> <li> <p>COMPLETED - The job was successfully completed and the output is available.</p> </li> <li> <p>FAILED - The job did not complete. To get details, use the operation.</p> </li> </ul>
   */
  JobStatus?:
    | "SUBMITTED"
    | "IN_PROGRESS"
    | "COMPLETED"
    | "FAILED"
    | "STOP_REQUESTED"
    | "STOPPED"
    | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
