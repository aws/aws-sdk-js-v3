import { _UnmarshalledPhoneNumberError } from "./_PhoneNumberError";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AssociatePhoneNumbersWithVoiceConnectorOutput shape
 */
export interface AssociatePhoneNumbersWithVoiceConnectorOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: Array<_UnmarshalledPhoneNumberError>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
