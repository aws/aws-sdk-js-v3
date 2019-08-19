import {
  _EnvironmentLanguage,
  _UnmarshalledEnvironmentLanguage
} from "./_EnvironmentLanguage";

/**
 * <p>A set of Docker images that are related by platform and are managed by AWS CodeBuild.</p>
 */
export interface _EnvironmentPlatform {
  /**
   * <p>The platform's name.</p>
   */
  platform?: "DEBIAN" | "AMAZON_LINUX" | "UBUNTU" | "WINDOWS_SERVER" | string;

  /**
   * <p>The list of programming languages that are available for the specified platform.</p>
   */
  languages?: Array<_EnvironmentLanguage> | Iterable<_EnvironmentLanguage>;
}

export interface _UnmarshalledEnvironmentPlatform extends _EnvironmentPlatform {
  /**
   * <p>The list of programming languages that are available for the specified platform.</p>
   */
  languages?: Array<_UnmarshalledEnvironmentLanguage>;
}
