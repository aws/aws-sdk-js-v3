import { _UnmarshalledListPoliciesGrantingServiceAccessEntry } from "./_ListPoliciesGrantingServiceAccessEntry";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListPoliciesGrantingServiceAccessOutput shape
 */
export interface ListPoliciesGrantingServiceAccessOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A <code>ListPoliciesGrantingServiceAccess</code> object that contains details about the permissions policies attached to the specified identity (user, group, or role).</p>
   */
  PoliciesGrantingServiceAccess: Array<
    _UnmarshalledListPoliciesGrantingServiceAccessEntry
  >;

  /**
   * <p>A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the <code>Marker</code> request parameter to retrieve more items. We recommend that you check <code>IsTruncated</code> after every call to ensure that you receive all your results.</p>
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
