import { _AttributeType, _UnmarshalledAttributeType } from "./_AttributeType";
import { _MFAOptionType, _UnmarshalledMFAOptionType } from "./_MFAOptionType";

/**
 * <p>The user type.</p>
 */
export interface _UserType {
  /**
   * <p>The user name of the user you wish to describe.</p>
   */
  Username?: string;

  /**
   * <p>A container with information about the user type attributes.</p>
   */
  Attributes?: Array<_AttributeType> | Iterable<_AttributeType>;

  /**
   * <p>The creation date of the user.</p>
   */
  UserCreateDate?: Date | string | number;

  /**
   * <p>The last modified date of the user.</p>
   */
  UserLastModifiedDate?: Date | string | number;

  /**
   * <p>Specifies whether the user is enabled.</p>
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
   * <p>The MFA options for the user.</p>
   */
  MFAOptions?: Array<_MFAOptionType> | Iterable<_MFAOptionType>;
}

export interface _UnmarshalledUserType extends _UserType {
  /**
   * <p>A container with information about the user type attributes.</p>
   */
  Attributes?: Array<_UnmarshalledAttributeType>;

  /**
   * <p>The creation date of the user.</p>
   */
  UserCreateDate?: Date;

  /**
   * <p>The last modified date of the user.</p>
   */
  UserLastModifiedDate?: Date;

  /**
   * <p>The MFA options for the user.</p>
   */
  MFAOptions?: Array<_UnmarshalledMFAOptionType>;
}
