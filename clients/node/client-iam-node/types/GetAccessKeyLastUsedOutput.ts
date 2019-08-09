import { _UnmarshalledAccessKeyLastUsed } from "./_AccessKeyLastUsed";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>GetAccessKeyLastUsed</a> request. It is also returned as a member of the <a>AccessKeyMetaData</a> structure returned by the <a>ListAccessKeys</a> action.</p>
 */
export interface GetAccessKeyLastUsedOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the AWS IAM user that owns this access key.</p> <p/>
   */
  UserName?: string;

  /**
   * <p>Contains information about the last time the access key was used.</p>
   */
  AccessKeyLastUsed?: _UnmarshalledAccessKeyLastUsed;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
