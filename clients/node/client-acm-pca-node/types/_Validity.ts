/**
 * <p>Length of time for which the certificate issued by your private certificate authority (CA), or by the private CA itself, is valid in days, months, or years. You can issue a certificate by calling the <a>IssueCertificate</a> action.</p>
 */
export interface _Validity {
  /**
   * <p>Time period.</p>
   */
  Value: number;

  /**
   * <p>Specifies whether the <code>Value</code> parameter represents days, months, or years.</p>
   */
  Type: "END_DATE" | "ABSOLUTE" | "DAYS" | "MONTHS" | "YEARS" | string;
}

export type _UnmarshalledValidity = _Validity;
