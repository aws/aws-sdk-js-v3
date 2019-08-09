import { _UnmarshalledObjectLockRetention } from "./_ObjectLockRetention";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetObjectRetentionOutput shape
 */
export interface GetObjectRetentionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The container element for an object's retention settings.</p>
   */
  Retention?: _UnmarshalledObjectLockRetention;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
