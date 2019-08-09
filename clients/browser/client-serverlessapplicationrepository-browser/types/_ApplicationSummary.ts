/**
 * <p>Summary of details about the application.</p>
 */
export interface _ApplicationSummary {
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationId: string;

  /**
   * <p>The name of the author publishing the app.</p><p>Minimum length=1. Maximum length=127.</p><p>Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";</p>
   */
  Author: string;

  /**
   * <p>The date and time this resource was created.</p>
   */
  CreationTime?: string;

  /**
   * <p>The description of the application.</p><p>Minimum length=1. Maximum length=256</p>
   */
  Description: string;

  /**
   * <p>A URL with more information about the application, for example the location of your GitHub repository for the application.</p>
   */
  HomePageUrl?: string;

  /**
   * <p>Labels to improve discovery of apps in search results.</p><p>Minimum length=1. Maximum length=127. Maximum number of labels: 10</p><p>Pattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";</p>
   */
  Labels?: Array<string> | Iterable<string>;

  /**
   * <p>The name of the application.</p><p>Minimum length=1. Maximum length=140</p><p>Pattern: "[a-zA-Z0-9\\-]+";</p>
   */
  Name: string;

  /**
   * <p>A valid identifier from <a href="https://spdx.org/licenses/">https://spdx.org/licenses/</a>.</p>
   */
  SpdxLicenseId?: string;
}

export interface _UnmarshalledApplicationSummary extends _ApplicationSummary {
  /**
   * <p>Labels to improve discovery of apps in search results.</p><p>Minimum length=1. Maximum length=127. Maximum number of labels: 10</p><p>Pattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";</p>
   */
  Labels?: Array<string>;
}
