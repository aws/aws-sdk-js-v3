import { _UnmarshalledObjectLockLegalHold } from "./_ObjectLockLegalHold";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetObjectLegalHoldOutput shape
 */
export interface GetObjectLegalHoldOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The current Legal Hold status for the specified object.</p>
   */
  LegalHold?: _UnmarshalledObjectLockLegalHold;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
