import { _UnmarshalledServiceSpecificCredentialMetadata } from "./_ServiceSpecificCredentialMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListServiceSpecificCredentialsOutput shape
 */
export interface ListServiceSpecificCredentialsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of structures that each contain details about a service-specific credential.</p>
   */
  ServiceSpecificCredentials?: Array<
    _UnmarshalledServiceSpecificCredentialMetadata
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
