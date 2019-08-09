import { _UnmarshalledVersion } from "./_Version";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateApplicationOutput shape
 */
export interface UpdateApplicationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationId?: string;

  /**
   * <p>The name of the author publishing the app.</p><p>Minimum length=1. Maximum length=127.</p><p>Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";</p>
   */
  Author?: string;

  /**
   * <p>The date and time this resource was created.</p>
   */
  CreationTime?: string;

  /**
   * <p>The description of the application.</p><p>Minimum length=1. Maximum length=256</p>
   */
  Description?: string;

  /**
   * <p>A URL with more information about the application, for example the location of your GitHub repository for the application.</p>
   */
  HomePageUrl?: string;

  /**
   * <p>Labels to improve discovery of apps in search results.</p><p>Minimum length=1. Maximum length=127. Maximum number of labels: 10</p><p>Pattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";</p>
   */
  Labels?: Array<string>;

  /**
   * <p>A link to a license file of the app that matches the spdxLicenseID value of your application.</p><p>Maximum size 5 MB</p>
   */
  LicenseUrl?: string;

  /**
   * <p>The name of the application.</p><p>Minimum length=1. Maximum length=140</p><p>Pattern: "[a-zA-Z0-9\\-]+";</p>
   */
  Name?: string;

  /**
   * <p>A link to the readme file in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p>
   */
  ReadmeUrl?: string;

  /**
   * <p>A valid identifier from https://spdx.org/licenses/.</p>
   */
  SpdxLicenseId?: string;

  /**
   * <p>Version information about the application.</p>
   */
  Version?: _UnmarshalledVersion;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
