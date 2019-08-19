/**
 * <p>The phone number associations, such as Amazon Chime account ID, Amazon Chime user ID, or Amazon Chime Voice Connector ID.</p>
 */
export interface _PhoneNumberAssociation {
  /**
   * <p>Contains the ID for the entity specified in Name.</p>
   */
  Value?: string;

  /**
   * <p>Defines the association with an Amazon Chime account ID, user ID, or Amazon Chime Voice Connector ID.</p>
   */
  Name?: "AccountId" | "UserId" | "VoiceConnectorId" | string;

  /**
   * <p>The timestamp of the phone number association, in ISO 8601 format.</p>
   */
  AssociatedTimestamp?: Date | string | number;
}

export interface _UnmarshalledPhoneNumberAssociation
  extends _PhoneNumberAssociation {
  /**
   * <p>The timestamp of the phone number association, in ISO 8601 format.</p>
   */
  AssociatedTimestamp?: Date;
}
