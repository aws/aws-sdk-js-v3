import { _UnmarshalledUserProfileSummary } from "./_UserProfileSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListUserProfilesOutput shape
 */
export interface ListUserProfilesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>All the user profiles configured in AWS CodeStar for an AWS account.</p>
   */
  userProfiles: Array<_UnmarshalledUserProfileSummary>;

  /**
   * <p>The continuation token to use when requesting the next set of results, if there are more results to be returned.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
