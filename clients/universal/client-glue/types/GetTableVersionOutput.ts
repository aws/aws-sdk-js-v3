import { _UnmarshalledTableVersion } from "./_TableVersion";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetTableVersionOutput shape
 */
export interface GetTableVersionOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The requested table version.</p>
   */
  TableVersion?: _UnmarshalledTableVersion;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
