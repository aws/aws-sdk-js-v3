import { _UnmarshalledLoggingEnabled } from "./_LoggingEnabled";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBucketLoggingOutput shape
 */
export interface GetBucketLoggingOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p/>
   */
  LoggingEnabled?: _UnmarshalledLoggingEnabled;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
