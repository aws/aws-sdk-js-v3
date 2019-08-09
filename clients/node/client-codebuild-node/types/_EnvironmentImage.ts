/**
 * <p>Information about a Docker image that is managed by AWS CodeBuild.</p>
 */
export interface _EnvironmentImage {
  /**
   * <p>The name of the Docker image.</p>
   */
  name?: string;

  /**
   * <p>The description of the Docker image.</p>
   */
  description?: string;

  /**
   * <p>A list of environment image versions.</p>
   */
  versions?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledEnvironmentImage extends _EnvironmentImage {
  /**
   * <p>A list of environment image versions.</p>
   */
  versions?: Array<string>;
}
