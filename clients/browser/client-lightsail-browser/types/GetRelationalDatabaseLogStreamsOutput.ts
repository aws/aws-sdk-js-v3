import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetRelationalDatabaseLogStreamsOutput shape
 */
export interface GetRelationalDatabaseLogStreamsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object describing the result of your get relational database log streams request.</p>
   */
  logStreams?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
