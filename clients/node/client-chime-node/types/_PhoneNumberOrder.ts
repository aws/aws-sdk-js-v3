import {
  _OrderedPhoneNumber,
  _UnmarshalledOrderedPhoneNumber
} from "./_OrderedPhoneNumber";

/**
 * <p>The details of a phone number order created for Amazon Chime.</p>
 */
export interface _PhoneNumberOrder {
  /**
   * <p>The phone number order ID.</p>
   */
  PhoneNumberOrderId?: string;

  /**
   * <p>The phone number order product type.</p>
   */
  ProductType?: "BusinessCalling" | "VoiceConnector" | string;

  /**
   * <p>The status of the phone number order.</p>
   */
  Status?: "Processing" | "Successful" | "Failed" | "Partial" | string;

  /**
   * <p>The ordered phone number details, such as the phone number in E.164 format and the phone number status.</p>
   */
  OrderedPhoneNumbers?:
    | Array<_OrderedPhoneNumber>
    | Iterable<_OrderedPhoneNumber>;

  /**
   * <p>The phone number order creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date | string | number;

  /**
   * <p>The updated phone number order timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date | string | number;
}

export interface _UnmarshalledPhoneNumberOrder extends _PhoneNumberOrder {
  /**
   * <p>The ordered phone number details, such as the phone number in E.164 format and the phone number status.</p>
   */
  OrderedPhoneNumbers?: Array<_UnmarshalledOrderedPhoneNumber>;

  /**
   * <p>The phone number order creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The updated phone number order timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}
