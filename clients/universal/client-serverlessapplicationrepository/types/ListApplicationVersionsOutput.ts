import { _UnmarshalledVersionSummary } from "./_VersionSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListApplicationVersionsOutput shape
 */
export interface ListApplicationVersionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of version summaries for the application.</p>
   */
  Versions?: Array<_UnmarshalledVersionSummary>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
