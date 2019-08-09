import { _UnmarshalledRelationalDatabase } from "./_RelationalDatabase";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetRelationalDatabaseOutput shape
 */
export interface GetRelationalDatabaseOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object describing the specified database.</p>
   */
  relationalDatabase?: _UnmarshalledRelationalDatabase;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
