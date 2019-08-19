import { _UnmarshalledIdentityInfo } from "./_IdentityInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A list of all of the identities that you've attempted to verify for use with Amazon Pinpoint, regardless of whether or not those identities were successfully verified.</p>
 */
export interface ListEmailIdentitiesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array that includes all of the identities associated with your Amazon Pinpoint account.</p>
   */
  EmailIdentities?: Array<_UnmarshalledIdentityInfo>;

  /**
   * <p>A token that indicates that there are additional configuration sets to list. To view additional configuration sets, issue another request to <code>ListEmailIdentities</code>, and pass this token in the <code>NextToken</code> parameter.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
