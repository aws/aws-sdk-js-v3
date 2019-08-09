/**
 * <p> Branch for an Amplify App, which maps to a 3rd party repository branch. </p>
 */
export interface _Branch {
  /**
   * <p> ARN for a branch, part of an Amplify App. </p>
   */
  branchArn: string;

  /**
   * <p> Name for a branch, part of an Amplify App. </p>
   */
  branchName: string;

  /**
   * <p> Description for a branch, part of an Amplify App. </p>
   */
  description: string;

  /**
   * <p> Tag for branch for Amplify App. </p>
   */
  tags?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p> Stage for a branch, part of an Amplify App. </p>
   */
  stage: "PRODUCTION" | "BETA" | "DEVELOPMENT" | "EXPERIMENTAL" | string;

  /**
   * <p> Display name for a branch, will use as the default domain prefix. </p>
   */
  displayName: string;

  /**
   * <p> Enables notifications for a branch, part of an Amplify App. </p>
   */
  enableNotification: boolean;

  /**
   * <p> Creation date and time for a branch, part of an Amplify App. </p>
   */
  createTime: Date | string | number;

  /**
   * <p> Last updated date and time for a branch, part of an Amplify App. </p>
   */
  updateTime: Date | string | number;

  /**
   * <p> Environment Variables specific to a branch, part of an Amplify App. </p>
   */
  environmentVariables: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p> Enables auto-building on push for a branch, part of an Amplify App. </p>
   */
  enableAutoBuild: boolean;

  /**
   * <p> Custom domains for a branch, part of an Amplify App. </p>
   */
  customDomains: Array<string> | Iterable<string>;

  /**
   * <p> Framework for a branch, part of an Amplify App. </p>
   */
  framework: string;

  /**
   * <p> Id of the active job for a branch, part of an Amplify App. </p>
   */
  activeJobId: string;

  /**
   * <p> Total number of Jobs part of an Amplify App. </p>
   */
  totalNumberOfJobs: string;

  /**
   * <p> Enables Basic Authorization for a branch, part of an Amplify App. </p>
   */
  enableBasicAuth: boolean;

  /**
   * <p> Thumbnail URL for the branch. </p>
   */
  thumbnailUrl?: string;

  /**
   * <p> Basic Authorization credentials for a branch, part of an Amplify App. </p>
   */
  basicAuthCredentials?: string;

  /**
   * <p> BuildSpec content for branch for Amplify App. </p>
   */
  buildSpec?: string;

  /**
   * <p> The content TTL for the website in seconds. </p>
   */
  ttl: string;

  /**
   * <p> List of custom resources that are linked to this branch. </p>
   */
  associatedResources?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledBranch extends _Branch {
  /**
   * <p> Tag for branch for Amplify App. </p>
   */
  tags?: { [key: string]: string };

  /**
   * <p> Creation date and time for a branch, part of an Amplify App. </p>
   */
  createTime: Date;

  /**
   * <p> Last updated date and time for a branch, part of an Amplify App. </p>
   */
  updateTime: Date;

  /**
   * <p> Environment Variables specific to a branch, part of an Amplify App. </p>
   */
  environmentVariables: { [key: string]: string };

  /**
   * <p> Custom domains for a branch, part of an Amplify App. </p>
   */
  customDomains: Array<string>;

  /**
   * <p> List of custom resources that are linked to this branch. </p>
   */
  associatedResources?: Array<string>;
}
