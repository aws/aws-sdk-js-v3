/**
 * <p>The details about the developer that published the skill.</p>
 */
export interface _DeveloperInfo {
  /**
   * <p>The name of the developer.</p>
   */
  DeveloperName?: string;

  /**
   * <p>The URL of the privacy policy.</p>
   */
  PrivacyPolicy?: string;

  /**
   * <p>The email of the developer.</p>
   */
  Email?: string;

  /**
   * <p>The website of the developer.</p>
   */
  Url?: string;
}

export type _UnmarshalledDeveloperInfo = _DeveloperInfo;
