/**
 * <p>The Locale data structure represents a geographical region or location.</p>
 */
export interface _Locale {
  /**
   * <p> The country of the locale. Must be a valid ISO 3166 country code. For example, the code US refers to the United States of America. </p>
   */
  Country: string;

  /**
   * <p>The state or subdivision of the locale. A valid ISO 3166-2 subdivision code. For example, the code WA refers to the state of Washington.</p>
   */
  Subdivision?: string;
}

export type _UnmarshalledLocale = _Locale;
