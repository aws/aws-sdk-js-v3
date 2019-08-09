import { _UnmarshalledLoadBalancerTlsCertificate } from "./_LoadBalancerTlsCertificate";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetLoadBalancerTlsCertificatesOutput shape
 */
export interface GetLoadBalancerTlsCertificatesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of LoadBalancerTlsCertificate objects describing your SSL/TLS certificates.</p>
   */
  tlsCertificates?: Array<_UnmarshalledLoadBalancerTlsCertificate>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
