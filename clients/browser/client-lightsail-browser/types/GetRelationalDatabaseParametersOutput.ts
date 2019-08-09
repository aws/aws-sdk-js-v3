import { _UnmarshalledRelationalDatabaseParameter } from "./_RelationalDatabaseParameter";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetRelationalDatabaseParametersOutput shape
 */
export interface GetRelationalDatabaseParametersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object describing the result of your get relational database parameters request.</p>
   */
  parameters?: Array<_UnmarshalledRelationalDatabaseParameter>;

  /**
   * <p>A token used for advancing to the next page of results from your get static IPs request.</p>
   */
  nextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
