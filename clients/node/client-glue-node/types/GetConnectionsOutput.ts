import { _UnmarshalledConnection } from "./_Connection";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetConnectionsOutput shape
 */
export interface GetConnectionsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of requested connection definitions.</p>
   */
  ConnectionList?: Array<_UnmarshalledConnection>;

  /**
   * <p>A continuation token, if the list of connections returned does not include the last of the filtered connections.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
