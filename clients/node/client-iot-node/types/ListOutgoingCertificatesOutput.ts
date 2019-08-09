import { _UnmarshalledOutgoingCertificate } from "./_OutgoingCertificate";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output from the ListOutgoingCertificates operation.</p>
 */
export interface ListOutgoingCertificatesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The certificates that are being transferred but not yet accepted.</p>
   */
  outgoingCertificates?: Array<_UnmarshalledOutgoingCertificate>;

  /**
   * <p>The marker for the next set of results.</p>
   */
  nextMarker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
