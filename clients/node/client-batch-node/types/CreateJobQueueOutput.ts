import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateJobQueueOutput shape
 */
export interface CreateJobQueueOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the job queue.</p>
   */
  jobQueueName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the job queue.</p>
   */
  jobQueueArn: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
