import { _UnmarshalledApplicationSummary } from "./_ApplicationSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListApplicationsOutput shape
 */
export interface ListApplicationsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of application summaries.</p>
   */
  Applications?: Array<_UnmarshalledApplicationSummary>;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
