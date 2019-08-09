import { _UnmarshalledType } from "./_Type";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetTypeOutput shape
 */
export interface GetTypeOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <code>Type</code> object.</p>
   */
  type?: _UnmarshalledType;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
