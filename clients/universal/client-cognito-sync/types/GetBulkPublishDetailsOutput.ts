import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * The output for the GetBulkPublishDetails operation.
 */
export interface GetBulkPublishDetailsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
   */
  IdentityPoolId?: string;

  /**
   * The date/time at which the last bulk publish was initiated.
   */
  BulkPublishStartTime?: Date;

  /**
   * If BulkPublishStatus is SUCCEEDED, the time the last bulk publish operation completed.
   */
  BulkPublishCompleteTime?: Date;

  /**
   * Status of the last bulk publish operation, valid values are: <p>NOT_STARTED - No bulk publish has been requested for this identity pool</p> <p>IN_PROGRESS - Data is being published to the configured stream</p> <p>SUCCEEDED - All data for the identity pool has been published to the configured stream</p> <p>FAILED - Some portion of the data has failed to publish, check FailureMessage for the cause.</p>
   */
  BulkPublishStatus?:
    | "NOT_STARTED"
    | "IN_PROGRESS"
    | "FAILED"
    | "SUCCEEDED"
    | string;

  /**
   * If BulkPublishStatus is FAILED this field will contain the error message that caused the bulk publish to fail.
   */
  FailureMessage?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
