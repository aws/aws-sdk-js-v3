import { _UnmarshalledApplicationSummary } from "./_ApplicationSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListApplicationsOutput shape
 */
export interface ListApplicationsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <code>ApplicationSummary</code> objects.</p>
   */
  ApplicationSummaries: Array<_UnmarshalledApplicationSummary>;

  /**
   * <p>The pagination token for the next set of results, or <code>null</code> if there are no additional results. Pass this token into a subsequent command to retrieve the next set of items For more information about pagination, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/pagination.html">Using the AWS Command Line Interface's Pagination Options</a>.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
