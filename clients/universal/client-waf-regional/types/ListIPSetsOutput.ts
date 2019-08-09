import { _UnmarshalledIPSetSummary } from "./_IPSetSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListIPSetsOutput shape
 */
export interface ListIPSetsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If you have more <code>IPSet</code> objects than the number that you specified for <code>Limit</code> in the request, the response includes a <code>NextMarker</code> value. To list more <code>IPSet</code> objects, submit another <code>ListIPSets</code> request, and specify the <code>NextMarker</code> value from the response in the <code>NextMarker</code> value in the next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>An array of <a>IPSetSummary</a> objects.</p>
   */
  IPSets?: Array<_UnmarshalledIPSetSummary>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
