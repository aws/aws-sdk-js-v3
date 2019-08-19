import { _S3Resource, _UnmarshalledS3Resource } from "./_S3Resource";

/**
 * <p>Includes details about the failed S3 resources.</p>
 */
export interface _FailedS3Resource {
  /**
   * <p>The failed S3 resources.</p>
   */
  failedItem?: _S3Resource;

  /**
   * <p>The status code of a failed item.</p>
   */
  errorCode?: string;

  /**
   * <p>The error message of a failed item.</p>
   */
  errorMessage?: string;
}

export interface _UnmarshalledFailedS3Resource extends _FailedS3Resource {
  /**
   * <p>The failed S3 resources.</p>
   */
  failedItem?: _UnmarshalledS3Resource;
}
