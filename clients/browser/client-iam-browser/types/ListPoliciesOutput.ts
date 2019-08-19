import { _UnmarshalledPolicy } from "./_Policy";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>ListPolicies</a> request. </p>
 */
export interface ListPoliciesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of policies.</p>
   */
  Policies?: Array<_UnmarshalledPolicy>;

  /**
   * <p>A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the <code>Marker</code> request parameter to retrieve more items. Note that IAM might return fewer than the <code>MaxItems</code> number of results even when there are more results available. We recommend that you check <code>IsTruncated</code> after every call to ensure that you receive all your results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element is present and contains the value to use for the <code>Marker</code> parameter in a subsequent pagination request.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
