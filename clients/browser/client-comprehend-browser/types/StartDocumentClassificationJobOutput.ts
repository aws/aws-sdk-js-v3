import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartDocumentClassificationJobOutput shape
 */
export interface StartDocumentClassificationJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identifier generated for the job. To get the status of the job, use this identifier with the operation.</p>
   */
  JobId?: string;

  /**
   * <p>The status of the job:</p> <ul> <li> <p>SUBMITTED - The job has been received and queued for processing.</p> </li> <li> <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p> </li> <li> <p>COMPLETED - The job was successfully completed and the output is available.</p> </li> <li> <p>FAILED - The job did not complete. For details, use the operation.</p> </li> <li> <p>STOP_REQUESTED - Amazon Comprehend has received a stop request for the job and is processing the request.</p> </li> <li> <p>STOPPED - The job was successfully stopped without completing.</p> </li> </ul>
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
