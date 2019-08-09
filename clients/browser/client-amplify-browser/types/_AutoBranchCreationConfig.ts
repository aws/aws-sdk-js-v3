/**
 * <p> Structure with auto branch creation config. </p>
 */
export interface _AutoBranchCreationConfig {
  /**
   * <p> Stage for the auto created branch. </p>
   */
  stage?: "PRODUCTION" | "BETA" | "DEVELOPMENT" | "EXPERIMENTAL" | string;

  /**
   * <p> Framework for the auto created branch. </p>
   */
  framework?: string;

  /**
   * <p> Enables auto building for the auto created branch. </p>
   */
  enableAutoBuild?: boolean;

  /**
   * <p> Environment Variables for the auto created branch. </p>
   */
  environmentVariables?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p> Basic Authorization credentials for the auto created branch. </p>
   */
  basicAuthCredentials?: string;

  /**
   * <p> Enables Basic Auth for the auto created branch. </p>
   */
  enableBasicAuth?: boolean;

  /**
   * <p> BuildSpec for the auto created branch. </p>
   */
  buildSpec?: string;
}

export interface _UnmarshalledAutoBranchCreationConfig
  extends _AutoBranchCreationConfig {
  /**
   * <p> Environment Variables for the auto created branch. </p>
   */
  environmentVariables?: { [key: string]: string };
}
