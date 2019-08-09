import { _UnmarshalledCACertificate } from "./_CACertificate";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output from the ListCACertificates operation.</p>
 */
export interface ListCACertificatesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The CA certificates registered in your AWS account.</p>
   */
  certificates?: Array<_UnmarshalledCACertificate>;

  /**
   * <p>The current position within the list of CA certificates.</p>
   */
  nextMarker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
