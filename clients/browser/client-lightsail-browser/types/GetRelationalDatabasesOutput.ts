import { _UnmarshalledRelationalDatabase } from "./_RelationalDatabase";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetRelationalDatabasesOutput shape
 */
export interface GetRelationalDatabasesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object describing the result of your get relational databases request.</p>
   */
  relationalDatabases?: Array<_UnmarshalledRelationalDatabase>;

  /**
   * <p>A token used for advancing to the next page of results from your get relational databases request.</p>
   */
  nextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
