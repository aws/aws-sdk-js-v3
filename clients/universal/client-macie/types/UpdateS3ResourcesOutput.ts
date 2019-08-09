import { _UnmarshalledFailedS3Resource } from "./_FailedS3Resource";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateS3ResourcesOutput shape
 */
export interface UpdateS3ResourcesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The S3 resources whose classification types can't be updated. An error code and an error message are provided for each failed item. </p>
   */
  failedS3Resources?: Array<_UnmarshalledFailedS3Resource>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
