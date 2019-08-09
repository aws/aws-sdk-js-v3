import { _UnmarshalledServiceSpecificCredential } from "./_ServiceSpecificCredential";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateServiceSpecificCredentialOutput shape
 */
export interface CreateServiceSpecificCredentialOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A structure that contains information about the newly created service-specific credential.</p> <important> <p>This is the only time that the password for this credential set is available. It cannot be recovered later. Instead, you must reset the password with <a>ResetServiceSpecificCredential</a>.</p> </important>
   */
  ServiceSpecificCredential?: _UnmarshalledServiceSpecificCredential;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
