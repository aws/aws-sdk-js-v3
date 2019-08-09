import { _UnmarshalledDatabase } from "./_Database";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDatabasesOutput shape
 */
export interface GetDatabasesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <code>Database</code> objects from the specified catalog.</p>
   */
  DatabaseList: Array<_UnmarshalledDatabase>;

  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
