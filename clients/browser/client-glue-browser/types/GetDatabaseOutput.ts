import { _UnmarshalledDatabase } from "./_Database";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDatabaseOutput shape
 */
export interface GetDatabaseOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The definition of the specified database in the catalog.</p>
   */
  Database?: _UnmarshalledDatabase;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
