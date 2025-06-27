// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import { Gender, PartyType, UpdateAddress } from "./models_0";

/**
 * @public
 */
export interface UpdateProfileRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique identifier of a customer profile.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>Any additional information relevant to the customer’s profile.</p>
   * @public
   */
  AdditionalInformation?: string | undefined;

  /**
   * <p>An account number that you have assigned to the customer.</p>
   * @public
   */
  AccountNumber?: string | undefined;

  /**
   * <p>The type of profile used to describe the customer.</p>
   *
   * @deprecated
   * @public
   */
  PartyType?: PartyType | undefined;

  /**
   * <p>The name of the customer’s business.</p>
   * @public
   */
  BusinessName?: string | undefined;

  /**
   * <p>The customer’s first name.</p>
   * @public
   */
  FirstName?: string | undefined;

  /**
   * <p>The customer’s middle name.</p>
   * @public
   */
  MiddleName?: string | undefined;

  /**
   * <p>The customer’s last name.</p>
   * @public
   */
  LastName?: string | undefined;

  /**
   * <p>The customer’s birth date. </p>
   * @public
   */
  BirthDate?: string | undefined;

  /**
   * <p>The gender with which the customer identifies. </p>
   *
   * @deprecated
   * @public
   */
  Gender?: Gender | undefined;

  /**
   * <p>The customer’s phone number, which has not been specified as a mobile, home, or business
   *          number. </p>
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * <p>The customer’s mobile phone number.</p>
   * @public
   */
  MobilePhoneNumber?: string | undefined;

  /**
   * <p>The customer’s home phone number.</p>
   * @public
   */
  HomePhoneNumber?: string | undefined;

  /**
   * <p>The customer’s business phone number.</p>
   * @public
   */
  BusinessPhoneNumber?: string | undefined;

  /**
   * <p>The customer’s email address, which has not been specified as a personal or business
   *          address. </p>
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * <p>The customer’s personal email address.</p>
   * @public
   */
  PersonalEmailAddress?: string | undefined;

  /**
   * <p>The customer’s business email address.</p>
   * @public
   */
  BusinessEmailAddress?: string | undefined;

  /**
   * <p>A generic address associated with the customer that is not mailing, shipping, or
   *          billing.</p>
   * @public
   */
  Address?: UpdateAddress | undefined;

  /**
   * <p>The customer’s shipping address.</p>
   * @public
   */
  ShippingAddress?: UpdateAddress | undefined;

  /**
   * <p>The customer’s mailing address.</p>
   * @public
   */
  MailingAddress?: UpdateAddress | undefined;

  /**
   * <p>The customer’s billing address.</p>
   * @public
   */
  BillingAddress?: UpdateAddress | undefined;

  /**
   * <p>A key value pair of attributes of a customer profile.</p>
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * <p>An alternative to <code>PartyType</code> which accepts any string as input.</p>
   * @public
   */
  PartyTypeString?: string | undefined;

  /**
   * <p>An alternative to <code>Gender</code> which accepts any string as input.</p>
   * @public
   */
  GenderString?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProfileResponse {
  /**
   * <p>The unique identifier of a customer profile.</p>
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * @internal
 */
export const UpdateProfileRequestFilterSensitiveLog = (obj: UpdateProfileRequest): any => ({
  ...obj,
  ...(obj.AdditionalInformation && { AdditionalInformation: SENSITIVE_STRING }),
  ...(obj.AccountNumber && { AccountNumber: SENSITIVE_STRING }),
  ...(obj.PartyType && { PartyType: SENSITIVE_STRING }),
  ...(obj.BusinessName && { BusinessName: SENSITIVE_STRING }),
  ...(obj.FirstName && { FirstName: SENSITIVE_STRING }),
  ...(obj.MiddleName && { MiddleName: SENSITIVE_STRING }),
  ...(obj.LastName && { LastName: SENSITIVE_STRING }),
  ...(obj.BirthDate && { BirthDate: SENSITIVE_STRING }),
  ...(obj.Gender && { Gender: SENSITIVE_STRING }),
  ...(obj.PhoneNumber && { PhoneNumber: SENSITIVE_STRING }),
  ...(obj.MobilePhoneNumber && { MobilePhoneNumber: SENSITIVE_STRING }),
  ...(obj.HomePhoneNumber && { HomePhoneNumber: SENSITIVE_STRING }),
  ...(obj.BusinessPhoneNumber && { BusinessPhoneNumber: SENSITIVE_STRING }),
  ...(obj.EmailAddress && { EmailAddress: SENSITIVE_STRING }),
  ...(obj.PersonalEmailAddress && { PersonalEmailAddress: SENSITIVE_STRING }),
  ...(obj.BusinessEmailAddress && { BusinessEmailAddress: SENSITIVE_STRING }),
  ...(obj.Address && { Address: SENSITIVE_STRING }),
  ...(obj.ShippingAddress && { ShippingAddress: SENSITIVE_STRING }),
  ...(obj.MailingAddress && { MailingAddress: SENSITIVE_STRING }),
  ...(obj.BillingAddress && { BillingAddress: SENSITIVE_STRING }),
  ...(obj.Attributes && { Attributes: SENSITIVE_STRING }),
  ...(obj.PartyTypeString && { PartyTypeString: SENSITIVE_STRING }),
  ...(obj.GenderString && { GenderString: SENSITIVE_STRING }),
});
