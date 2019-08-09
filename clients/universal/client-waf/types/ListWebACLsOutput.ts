import { _UnmarshalledWebACLSummary } from "./_WebACLSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListWebACLsOutput shape
 */
export interface ListWebACLsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If you have more <code>WebACL</code> objects than the number that you specified for <code>Limit</code> in the request, the response includes a <code>NextMarker</code> value. To list more <code>WebACL</code> objects, submit another <code>ListWebACLs</code> request, and specify the <code>NextMarker</code> value from the response in the <code>NextMarker</code> value in the next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>An array of <a>WebACLSummary</a> objects.</p>
   */
  WebACLs?: Array<_UnmarshalledWebACLSummary>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
