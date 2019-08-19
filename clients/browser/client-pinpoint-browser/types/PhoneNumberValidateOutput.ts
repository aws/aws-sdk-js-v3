import { _UnmarshalledNumberValidateResponse } from "./_NumberValidateResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PhoneNumberValidateOutput shape
 */
export interface PhoneNumberValidateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides information about a phone number.</p>
   */
  NumberValidateResponse: _UnmarshalledNumberValidateResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
