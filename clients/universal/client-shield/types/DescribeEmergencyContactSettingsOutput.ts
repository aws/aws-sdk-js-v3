import { _UnmarshalledEmergencyContact } from "./_EmergencyContact";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeEmergencyContactSettingsOutput shape
 */
export interface DescribeEmergencyContactSettingsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of email addresses that the DRT can use to contact you during a suspected attack.</p>
   */
  EmergencyContactList?: Array<_UnmarshalledEmergencyContact>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
