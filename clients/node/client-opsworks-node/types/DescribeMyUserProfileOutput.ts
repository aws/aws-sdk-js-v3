import { _UnmarshalledSelfUserProfile } from "./_SelfUserProfile";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a <code>DescribeMyUserProfile</code> request.</p>
 */
export interface DescribeMyUserProfileOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A <code>UserProfile</code> object that describes the user's SSH information.</p>
   */
  UserProfile?: _UnmarshalledSelfUserProfile;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
