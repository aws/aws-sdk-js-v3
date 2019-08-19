import { _UnmarshalledRelationalDatabaseEvent } from "./_RelationalDatabaseEvent";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetRelationalDatabaseEventsOutput shape
 */
export interface GetRelationalDatabaseEventsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object describing the result of your get relational database events request.</p>
   */
  relationalDatabaseEvents?: Array<_UnmarshalledRelationalDatabaseEvent>;

  /**
   * <p>A token used for advancing to the next page of results from your get relational database events request.</p>
   */
  nextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
