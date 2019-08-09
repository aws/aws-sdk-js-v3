import { _UnmarshalledSecurityProfileSummary } from "./_SecurityProfileSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListSecurityProfilesOutput shape
 */
export interface ListSecurityProfilesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>SecurityProfileSummary</code> objects.</p>
   */
  SecurityProfileSummaryList?: Array<_UnmarshalledSecurityProfileSummary>;

  /**
   * <p>A string returned in the response. Use the value returned in the response as the value of the NextToken in a subsequent request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
