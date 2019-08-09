import { _UnmarshalledRelationalDatabaseSnapshot } from "./_RelationalDatabaseSnapshot";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetRelationalDatabaseSnapshotOutput shape
 */
export interface GetRelationalDatabaseSnapshotOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object describing the specified database snapshot.</p>
   */
  relationalDatabaseSnapshot?: _UnmarshalledRelationalDatabaseSnapshot;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
