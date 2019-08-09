import { _UnmarshalledCertificate } from "./_Certificate";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output of the ListCertificatesByCA operation.</p>
 */
export interface ListCertificatesByCAOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The device certificates signed by the specified CA certificate.</p>
   */
  certificates?: Array<_UnmarshalledCertificate>;

  /**
   * <p>The marker for the next set of results, or null if there are no additional results.</p>
   */
  nextMarker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
