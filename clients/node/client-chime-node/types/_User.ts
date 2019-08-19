/**
 * <p>The user on the Amazon Chime account.</p>
 */
export interface _User {
  /**
   * <p>The user ID.</p>
   */
  UserId: string;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The primary email address of the user.</p>
   */
  PrimaryEmail?: string;

  /**
   * <p>The primary phone number associated with the user.</p>
   */
  PrimaryProvisionedNumber?: string;

  /**
   * <p>The display name of the user.</p>
   */
  DisplayName?: string;

  /**
   * <p>The license type for the user.</p>
   */
  LicenseType?: "Basic" | "Plus" | "Pro" | "ProTrial" | string;

  /**
   * <p>The user registration status.</p>
   */
  UserRegistrationStatus?: "Unregistered" | "Registered" | "Suspended" | string;

  /**
   * <p>The user invite status.</p>
   */
  UserInvitationStatus?: "Pending" | "Accepted" | "Failed" | string;

  /**
   * <p>Date and time when the user is registered, in ISO 8601 format.</p>
   */
  RegisteredOn?: Date | string | number;

  /**
   * <p>Date and time when the user is invited to the Amazon Chime account, in ISO 8601 format.</p>
   */
  InvitedOn?: Date | string | number;

  /**
   * <p>The user's personal meeting PIN.</p>
   */
  PersonalPIN?: string;
}

export interface _UnmarshalledUser extends _User {
  /**
   * <p>Date and time when the user is registered, in ISO 8601 format.</p>
   */
  RegisteredOn?: Date;

  /**
   * <p>Date and time when the user is invited to the Amazon Chime account, in ISO 8601 format.</p>
   */
  InvitedOn?: Date;
}
