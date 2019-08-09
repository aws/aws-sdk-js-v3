import { _UnmarshalledCACertificateDescription } from "./_CACertificateDescription";
import { _UnmarshalledRegistrationConfig } from "./_RegistrationConfig";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output from the DescribeCACertificate operation.</p>
 */
export interface DescribeCACertificateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The CA certificate description.</p>
   */
  certificateDescription?: _UnmarshalledCACertificateDescription;

  /**
   * <p>Information about the registration configuration.</p>
   */
  registrationConfig?: _UnmarshalledRegistrationConfig;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
