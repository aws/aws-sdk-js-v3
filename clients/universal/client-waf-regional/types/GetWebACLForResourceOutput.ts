import { _UnmarshalledWebACLSummary } from "./_WebACLSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetWebACLForResourceOutput shape
 */
export interface GetWebACLForResourceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the web ACL that you specified in the <code>GetWebACLForResource</code> request. If there is no associated resource, a null WebACLSummary is returned.</p>
   */
  WebACLSummary?: _UnmarshalledWebACLSummary;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
