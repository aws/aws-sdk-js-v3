import { _UnmarshalledHierarchyGroupSummary } from "./_HierarchyGroupSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListUserHierarchyGroupsOutput shape
 */
export interface ListUserHierarchyGroupsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>HierarchyGroupSummary</code> objects.</p>
   */
  UserHierarchyGroupSummaryList?: Array<_UnmarshalledHierarchyGroupSummary>;

  /**
   * <p>A string returned in the response. Use the value returned in the response as the value of the NextToken in a subsequent request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
