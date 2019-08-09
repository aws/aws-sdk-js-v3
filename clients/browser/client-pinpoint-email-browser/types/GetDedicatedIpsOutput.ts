import { _UnmarshalledDedicatedIp } from "./_DedicatedIp";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Information about the dedicated IP addresses that are associated with your Amazon Pinpoint account.</p>
 */
export interface GetDedicatedIpsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of dedicated IP addresses that are reserved for use by your Amazon Pinpoint account.</p>
   */
  DedicatedIps?: Array<_UnmarshalledDedicatedIp>;

  /**
   * <p>A token that indicates that there are additional dedicated IP addresses to list. To view additional addresses, issue another request to <code>GetDedicatedIps</code>, passing this token in the <code>NextToken</code> parameter.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
