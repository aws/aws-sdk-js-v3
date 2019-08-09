import { _UnmarshalledUserProfile } from "./_UserProfile";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a <code>DescribeUserProfiles</code> request.</p>
 */
export interface DescribeUserProfilesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A <code>Users</code> object that describes the specified users.</p>
   */
  UserProfiles?: Array<_UnmarshalledUserProfile>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
