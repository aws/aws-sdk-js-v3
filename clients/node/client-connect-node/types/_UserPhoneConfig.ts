/**
 * <p>A <code>UserPhoneConfig</code> object that contains information about the user phone configuration settings.</p>
 */
export interface _UserPhoneConfig {
  /**
   * <p>The phone type selected for the user, either Soft phone or Desk phone.</p>
   */
  PhoneType: "SOFT_PHONE" | "DESK_PHONE" | string;

  /**
   * <p>The Auto accept setting for the user, Yes or No.</p>
   */
  AutoAccept?: boolean;

  /**
   * <p>The After Call Work (ACW) timeout setting, in seconds, for the user.</p>
   */
  AfterContactWorkTimeLimit?: number;

  /**
   * <p>The phone number for the user's desk phone.</p>
   */
  DeskPhoneNumber?: string;
}

export type _UnmarshalledUserPhoneConfig = _UserPhoneConfig;
