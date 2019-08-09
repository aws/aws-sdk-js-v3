import { _UnmarshalledPolicy } from "./_Policy";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListAttachedPoliciesOutput shape
 */
export interface ListAttachedPoliciesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The policies.</p>
   */
  policies?: Array<_UnmarshalledPolicy>;

  /**
   * <p>The token to retrieve the next set of results, or ``null`` if there are no more results.</p>
   */
  nextMarker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
