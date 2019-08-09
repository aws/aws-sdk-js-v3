import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The response from the <code>CheckIfPhoneNumberIsOptedOut</code> action.</p>
 */
export interface CheckIfPhoneNumberIsOptedOutOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Indicates whether the phone number is opted out:</p> <ul> <li> <p> <code>true</code> – The phone number is opted out, meaning you cannot publish SMS messages to it.</p> </li> <li> <p> <code>false</code> – The phone number is opted in, meaning you can publish SMS messages to it.</p> </li> </ul>
   */
  isOptedOut?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
