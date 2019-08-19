import { _UnmarshalledApplicationDependencySummary } from "./_ApplicationDependencySummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListApplicationDependenciesOutput shape
 */
export interface ListApplicationDependenciesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of application summaries nested in the application.</p>
   */
  Dependencies?: Array<_UnmarshalledApplicationDependencySummary>;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
