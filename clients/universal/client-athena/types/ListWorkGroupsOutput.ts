import { _UnmarshalledWorkGroupSummary } from "./_WorkGroupSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListWorkGroupsOutput shape
 */
export interface ListWorkGroupsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of workgroups, including their names, descriptions, creation times, and states.</p>
   */
  WorkGroups?: Array<_UnmarshalledWorkGroupSummary>;

  /**
   * <p>A token to be used by the next request if this request is truncated.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
