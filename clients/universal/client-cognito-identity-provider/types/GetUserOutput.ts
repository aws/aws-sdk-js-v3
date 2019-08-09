import { _UnmarshalledAttributeType } from "./_AttributeType";
import { _UnmarshalledMFAOptionType } from "./_MFAOptionType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the response from the server from the request to get information about the user.</p>
 */
export interface GetUserOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The user name of the user you wish to retrieve from the get user request.</p>
   */
  Username: string;

  /**
   * <p>An array of name-value pairs representing user attributes.</p> <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the attribute name.</p>
   */
  UserAttributes: Array<_UnmarshalledAttributeType>;

  /**
   * <p>Specifies the options for MFA (e.g., email or phone number).</p>
   */
  MFAOptions?: Array<_UnmarshalledMFAOptionType>;

  /**
   * <p>The user's preferred MFA setting.</p>
   */
  PreferredMfaSetting?: string;

  /**
   * <p>The list of the user's MFA settings.</p>
   */
  UserMFASettingList?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
