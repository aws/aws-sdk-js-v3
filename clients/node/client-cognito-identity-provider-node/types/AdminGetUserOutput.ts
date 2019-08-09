import { _UnmarshalledAttributeType } from "./_AttributeType";
import { _UnmarshalledMFAOptionType } from "./_MFAOptionType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the response from the server from the request to get the specified user as an administrator.</p>
 */
export interface AdminGetUserOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The user name of the user about whom you are receiving information.</p>
   */
  Username: string;

  /**
   * <p>An array of name-value pairs representing user attributes.</p>
   */
  UserAttributes?: Array<_UnmarshalledAttributeType>;

  /**
   * <p>The date the user was created.</p>
   */
  UserCreateDate?: Date;

  /**
   * <p>The date the user was last modified.</p>
   */
  UserLastModifiedDate?: Date;

  /**
   * <p>Indicates that the status is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The user status. Can be one of the following:</p> <ul> <li> <p>UNCONFIRMED - User has been created but not confirmed.</p> </li> <li> <p>CONFIRMED - User has been confirmed.</p> </li> <li> <p>ARCHIVED - User is no longer active.</p> </li> <li> <p>COMPROMISED - User is disabled due to a potential security threat.</p> </li> <li> <p>UNKNOWN - User status is not known.</p> </li> <li> <p>RESET_REQUIRED - User is confirmed, but the user must request a code and reset his or her password before he or she can sign in.</p> </li> <li> <p>FORCE_CHANGE_PASSWORD - The user is confirmed and the user can sign in using a temporary password, but on first sign-in, the user must change his or her password to a new value before doing anything else. </p> </li> </ul>
   */
  UserStatus?:
    | "UNCONFIRMED"
    | "CONFIRMED"
    | "ARCHIVED"
    | "COMPROMISED"
    | "UNKNOWN"
    | "RESET_REQUIRED"
    | "FORCE_CHANGE_PASSWORD"
    | string;

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
