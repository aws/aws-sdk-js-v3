import { _Locale, _UnmarshalledLocale } from "./_Locale";

/**
 * <p>The Qualification data structure represents a Qualification assigned to a user, including the Qualification type and the value (score).</p>
 */
export interface _Qualification {
  /**
   * <p> The ID of the Qualification type for the Qualification.</p>
   */
  QualificationTypeId?: string;

  /**
   * <p> The ID of the Worker who possesses the Qualification. </p>
   */
  WorkerId?: string;

  /**
   * <p> The date and time the Qualification was granted to the Worker. If the Worker's Qualification was revoked, and then re-granted based on a new Qualification request, GrantTime is the date and time of the last call to the AcceptQualificationRequest operation.</p>
   */
  GrantTime?: Date | string | number;

  /**
   * <p> The value (score) of the Qualification, if the Qualification has an integer value.</p>
   */
  IntegerValue?: number;

  /**
   * <p>The Locale data structure represents a geographical region or location.</p>
   */
  LocaleValue?: _Locale;

  /**
   * <p> The status of the Qualification. Valid values are Granted | Revoked.</p>
   */
  Status?: "Granted" | "Revoked" | string;
}

export interface _UnmarshalledQualification extends _Qualification {
  /**
   * <p> The date and time the Qualification was granted to the Worker. If the Worker's Qualification was revoked, and then re-granted based on a new Qualification request, GrantTime is the date and time of the last call to the AcceptQualificationRequest operation.</p>
   */
  GrantTime?: Date;

  /**
   * <p>The Locale data structure represents a geographical region or location.</p>
   */
  LocaleValue?: _UnmarshalledLocale;
}
