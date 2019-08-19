import { _UnmarshalledServiceSpecificCredential } from "./_ServiceSpecificCredential";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ResetServiceSpecificCredentialOutput shape
 */
export interface ResetServiceSpecificCredentialOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A structure with details about the updated service-specific credential, including the new password.</p> <important> <p>This is the <b>only</b> time that you can access the password. You cannot recover the password later, but you can reset it again.</p> </important>
   */
  ServiceSpecificCredential?: _UnmarshalledServiceSpecificCredential;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
