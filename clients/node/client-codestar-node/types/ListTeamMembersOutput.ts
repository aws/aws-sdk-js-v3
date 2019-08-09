import { _UnmarshalledTeamMember } from "./_TeamMember";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTeamMembersOutput shape
 */
export interface ListTeamMembersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of team member objects for the project.</p>
   */
  teamMembers: Array<_UnmarshalledTeamMember>;

  /**
   * <p>The continuation token to use when requesting the next set of results, if there are more results to be returned.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
