import {
  _PhoneNumberCapabilities,
  _UnmarshalledPhoneNumberCapabilities
} from "./_PhoneNumberCapabilities";
import {
  _PhoneNumberAssociation,
  _UnmarshalledPhoneNumberAssociation
} from "./_PhoneNumberAssociation";

/**
 * <p>A phone number used for Amazon Chime Business Calling or an Amazon Chime Voice Connector.</p>
 */
export interface _PhoneNumber {
  /**
   * <p>The phone number ID.</p>
   */
  PhoneNumberId?: string;

  /**
   * <p>The phone number, in E.164 format.</p>
   */
  E164PhoneNumber?: string;

  /**
   * <p>The phone number type.</p>
   */
  Type?: "Local" | "TollFree" | string;

  /**
   * <p>The phone number product type.</p>
   */
  ProductType?: "BusinessCalling" | "VoiceConnector" | string;

  /**
   * <p>The phone number status.</p>
   */
  Status?:
    | "AcquireInProgress"
    | "AcquireFailed"
    | "Unassigned"
    | "Assigned"
    | "ReleaseInProgress"
    | "DeleteInProgress"
    | "ReleaseFailed"
    | "DeleteFailed"
    | string;

  /**
   * <p>The phone number capabilities.</p>
   */
  Capabilities?: _PhoneNumberCapabilities;

  /**
   * <p>The phone number associations.</p>
   */
  Associations?:
    | Array<_PhoneNumberAssociation>
    | Iterable<_PhoneNumberAssociation>;

  /**
   * <p>The phone number creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date | string | number;

  /**
   * <p>The updated phone number timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date | string | number;

  /**
   * <p>The deleted phone number timestamp, in ISO 8601 format.</p>
   */
  DeletionTimestamp?: Date | string | number;
}

export interface _UnmarshalledPhoneNumber extends _PhoneNumber {
  /**
   * <p>The phone number capabilities.</p>
   */
  Capabilities?: _UnmarshalledPhoneNumberCapabilities;

  /**
   * <p>The phone number associations.</p>
   */
  Associations?: Array<_UnmarshalledPhoneNumberAssociation>;

  /**
   * <p>The phone number creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The updated phone number timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * <p>The deleted phone number timestamp, in ISO 8601 format.</p>
   */
  DeletionTimestamp?: Date;
}
