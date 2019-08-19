import { _UnmarshalledOperation } from "./_Operation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateLoadBalancerTlsCertificateOutput shape
 */
export interface CreateLoadBalancerTlsCertificateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object containing information about the API operations.</p>
   */
  operations?: Array<_UnmarshalledOperation>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
