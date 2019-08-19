import { _UnmarshalledConnection } from "./_Connection";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetConnectionOutput shape
 */
export interface GetConnectionOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The requested connection definition.</p>
   */
  Connection?: _UnmarshalledConnection;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
