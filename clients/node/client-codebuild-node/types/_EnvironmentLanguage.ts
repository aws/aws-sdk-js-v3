import {
  _EnvironmentImage,
  _UnmarshalledEnvironmentImage
} from "./_EnvironmentImage";

/**
 * <p>A set of Docker images that are related by programming language and are managed by AWS CodeBuild.</p>
 */
export interface _EnvironmentLanguage {
  /**
   * <p>The programming language for the Docker images.</p>
   */
  language?:
    | "JAVA"
    | "PYTHON"
    | "NODE_JS"
    | "RUBY"
    | "GOLANG"
    | "DOCKER"
    | "ANDROID"
    | "DOTNET"
    | "BASE"
    | "PHP"
    | string;

  /**
   * <p>The list of Docker images that are related by the specified programming language.</p>
   */
  images?: Array<_EnvironmentImage> | Iterable<_EnvironmentImage>;
}

export interface _UnmarshalledEnvironmentLanguage extends _EnvironmentLanguage {
  /**
   * <p>The list of Docker images that are related by the specified programming language.</p>
   */
  images?: Array<_UnmarshalledEnvironmentImage>;
}
