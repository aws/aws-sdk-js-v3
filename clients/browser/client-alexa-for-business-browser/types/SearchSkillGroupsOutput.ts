import { _UnmarshalledSkillGroupData } from "./_SkillGroupData";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchSkillGroupsOutput shape
 */
export interface SearchSkillGroupsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The skill groups that meet the filter criteria, in sort order.</p>
   */
  SkillGroups?: Array<_UnmarshalledSkillGroupData>;

  /**
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of skill groups returned.</p>
   */
  TotalCount?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
