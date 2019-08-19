import { _UnmarshalledDistributionList } from "./_DistributionList";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The response to a request to list the distributions that are associated with a specified AWS WAF web ACL. </p>
 */
export interface ListDistributionsByWebACLIdOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <code>DistributionList</code> type. </p>
   */
  DistributionList?: _UnmarshalledDistributionList;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
