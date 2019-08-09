import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StopDominantLanguageDetectionJobOutput shape
 */
export interface StopDominantLanguageDetectionJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identifier of the dominant language detection job to stop.</p>
   */
  JobId?: string;

  /**
   * <p>Either <code>STOP_REQUESTED</code> if the job is currently running, or <code>STOPPED</code> if the job was previously stopped with the <code>StopDominantLanguageDetectionJob</code> operation.</p>
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
