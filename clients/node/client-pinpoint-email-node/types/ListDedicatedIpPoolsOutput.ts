import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A list of dedicated IP pools.</p>
 */
export interface ListDedicatedIpPoolsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of all of the dedicated IP pools that are associated with your Amazon Pinpoint account.</p>
   */
  DedicatedIpPools?: Array<string>;

  /**
   * <p>A token that indicates that there are additional IP pools to list. To view additional IP pools, issue another request to <code>ListDedicatedIpPools</code>, passing this token in the <code>NextToken</code> parameter.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
