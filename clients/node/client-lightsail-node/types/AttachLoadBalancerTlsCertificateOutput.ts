import { _UnmarshalledOperation } from "./_Operation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AttachLoadBalancerTlsCertificateOutput shape
 */
export interface AttachLoadBalancerTlsCertificateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object representing the API operations.</p> <p>These SSL/TLS certificates are only usable by Lightsail load balancers. You can't get the certificate and use it for another purpose.</p>
   */
  operations?: Array<_UnmarshalledOperation>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
