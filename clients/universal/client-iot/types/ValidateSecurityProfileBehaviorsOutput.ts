import { _UnmarshalledValidationError } from "./_ValidationError";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ValidateSecurityProfileBehaviorsOutput shape
 */
export interface ValidateSecurityProfileBehaviorsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>True if the behaviors were valid.</p>
   */
  valid?: boolean;

  /**
   * <p>The list of any errors found in the behaviors.</p>
   */
  validationErrors?: Array<_UnmarshalledValidationError>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
