// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { AmplifyServiceException as __BaseException } from "./AmplifyServiceException";

/**
 * @public
 * <p> A request contains unexpected data. </p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const Stage = {
  BETA: "BETA",
  DEVELOPMENT: "DEVELOPMENT",
  EXPERIMENTAL: "EXPERIMENTAL",
  PRODUCTION: "PRODUCTION",
  PULL_REQUEST: "PULL_REQUEST",
} as const;

/**
 * @public
 */
export type Stage = (typeof Stage)[keyof typeof Stage];

/**
 * @public
 * <p> Describes the automated branch creation configuration. </p>
 */
export interface AutoBranchCreationConfig {
  /**
   * @public
   * <p> Describes the current stage for the autocreated branch. </p>
   */
  stage?: Stage;

  /**
   * @public
   * <p> The framework for the autocreated branch. </p>
   */
  framework?: string;

  /**
   * @public
   * <p> Enables auto building for the autocreated branch. </p>
   */
  enableAutoBuild?: boolean;

  /**
   * @public
   * <p> The environment variables for the autocreated branch. </p>
   */
  environmentVariables?: Record<string, string>;

  /**
   * @public
   * <p> The basic authorization credentials for the autocreated branch. You must
   *             base64-encode the authorization credentials and provide them in the format
   *                 <code>user:password</code>.</p>
   */
  basicAuthCredentials?: string;

  /**
   * @public
   * <p> Enables basic authorization for the autocreated branch. </p>
   */
  enableBasicAuth?: boolean;

  /**
   * @public
   * <p>Enables performance mode for the branch.</p>
   *          <p>Performance mode optimizes for faster hosting performance by keeping content cached at
   *             the edge for a longer interval. When performance mode is enabled, hosting configuration
   *             or code changes can take up to 10 minutes to roll out. </p>
   */
  enablePerformanceMode?: boolean;

  /**
   * @public
   * <p> The build specification (build spec) for the autocreated branch. </p>
   */
  buildSpec?: string;

  /**
   * @public
   * <p> Enables pull request previews for the autocreated branch. </p>
   */
  enablePullRequestPreview?: boolean;

  /**
   * @public
   * <p> The Amplify environment name for the pull request. </p>
   */
  pullRequestEnvironmentName?: string;
}

/**
 * @public
 * <p> Describes a custom rewrite or redirect rule. </p>
 */
export interface CustomRule {
  /**
   * @public
   * <p> The source pattern for a URL rewrite or redirect rule. </p>
   */
  source: string | undefined;

  /**
   * @public
   * <p> The target pattern for a URL rewrite or redirect rule. </p>
   */
  target: string | undefined;

  /**
   * @public
   * <p> The status code for a URL rewrite or redirect rule. </p>
   *          <dl>
   *             <dt>200</dt>
   *             <dd>
   *                <p>Represents a 200 rewrite rule.</p>
   *             </dd>
   *             <dt>301</dt>
   *             <dd>
   *                <p>Represents a 301 (moved pemanently) redirect rule. This and all future
   *                         requests should be directed to the target URL. </p>
   *             </dd>
   *             <dt>302</dt>
   *             <dd>
   *                <p>Represents a 302 temporary redirect rule.</p>
   *             </dd>
   *             <dt>404</dt>
   *             <dd>
   *                <p>Represents a 404 redirect rule.</p>
   *             </dd>
   *             <dt>404-200</dt>
   *             <dd>
   *                <p>Represents a 404 rewrite rule.</p>
   *             </dd>
   *          </dl>
   */
  status?: string;

  /**
   * @public
   * <p> The condition for a URL rewrite or redirect rule, such as a country code. </p>
   */
  condition?: string;
}

/**
 * @public
 * @enum
 */
export const Platform = {
  WEB: "WEB",
  WEB_COMPUTE: "WEB_COMPUTE",
  WEB_DYNAMIC: "WEB_DYNAMIC",
} as const;

/**
 * @public
 */
export type Platform = (typeof Platform)[keyof typeof Platform];

/**
 * @public
 * <p> The request structure used to create apps in Amplify. </p>
 */
export interface CreateAppRequest {
  /**
   * @public
   * <p> The name for an Amplify app. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> The description for an Amplify app. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The repository for an Amplify app. </p>
   */
  repository?: string;

  /**
   * @public
   * <p> The platform for the Amplify app. For a static app, set the platform type to <code>WEB</code>.
   *             For a dynamic server-side rendered (SSR) app, set the platform type to
   *             <code>WEB_COMPUTE</code>. For an app requiring Amplify Hosting's original SSR support only, set the platform type to
   *             <code>WEB_DYNAMIC</code>.</p>
   */
  platform?: Platform;

  /**
   * @public
   * <p> The AWS Identity and Access Management (IAM) service role for an Amplify app. </p>
   */
  iamServiceRoleArn?: string;

  /**
   * @public
   * <p>The OAuth token for a third-party source control system for an Amplify app. The OAuth
   *             token is used to create a webhook and a read-only deploy key using SSH cloning. The
   *             OAuth token is not stored.</p>
   *          <p>Use <code>oauthToken</code> for repository providers other than GitHub, such as
   *             Bitbucket or CodeCommit. To authorize access to GitHub as your repository provider, use
   *                 <code>accessToken</code>.</p>
   *          <p>You must specify either <code>oauthToken</code> or <code>accessToken</code> when you
   *             create a new app.</p>
   *          <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work
   *             with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub
   *             App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the
   *                 <i>Amplify User Guide</i> .</p>
   */
  oauthToken?: string;

  /**
   * @public
   * <p>The personal access token for a GitHub repository for an Amplify app. The personal
   *             access token is used to authorize access to a GitHub repository using the Amplify GitHub
   *             App. The token is not stored.</p>
   *          <p>Use <code>accessToken</code> for GitHub repositories only. To authorize access to a
   *             repository provider such as Bitbucket or CodeCommit, use <code>oauthToken</code>.</p>
   *          <p>You must specify either <code>accessToken</code> or <code>oauthToken</code> when you
   *             create a new app.</p>
   *          <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work
   *             with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub
   *             App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the
   *                 <i>Amplify User Guide</i> .</p>
   */
  accessToken?: string;

  /**
   * @public
   * <p> The environment variables map for an Amplify app. </p>
   */
  environmentVariables?: Record<string, string>;

  /**
   * @public
   * <p> Enables the auto building of branches for an Amplify app. </p>
   */
  enableBranchAutoBuild?: boolean;

  /**
   * @public
   * <p> Automatically disconnects a branch in the Amplify Console when you delete a branch
   *             from your Git repository. </p>
   */
  enableBranchAutoDeletion?: boolean;

  /**
   * @public
   * <p> Enables basic authorization for an Amplify app. This will apply to all branches that
   *             are part of this app. </p>
   */
  enableBasicAuth?: boolean;

  /**
   * @public
   * <p> The credentials for basic authorization for an Amplify app. You must base64-encode
   *             the authorization credentials and provide them in the format
   *             <code>user:password</code>.</p>
   */
  basicAuthCredentials?: string;

  /**
   * @public
   * <p> The custom rewrite and redirect rules for an Amplify app. </p>
   */
  customRules?: CustomRule[];

  /**
   * @public
   * <p> The tag for an Amplify app. </p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p> The build specification (build spec) for an Amplify app. </p>
   */
  buildSpec?: string;

  /**
   * @public
   * <p>The custom HTTP headers for an Amplify app.</p>
   */
  customHeaders?: string;

  /**
   * @public
   * <p> Enables automated branch creation for an Amplify app. </p>
   */
  enableAutoBranchCreation?: boolean;

  /**
   * @public
   * <p> The automated branch creation glob patterns for an Amplify app. </p>
   */
  autoBranchCreationPatterns?: string[];

  /**
   * @public
   * <p> The automated branch creation configuration for an Amplify app. </p>
   */
  autoBranchCreationConfig?: AutoBranchCreationConfig;
}

/**
 * @public
 * <p> Describes the information about a production branch for an Amplify app. </p>
 */
export interface ProductionBranch {
  /**
   * @public
   * <p> The last deploy time of the production branch. </p>
   */
  lastDeployTime?: Date;

  /**
   * @public
   * <p> The status of the production branch. </p>
   */
  status?: string;

  /**
   * @public
   * <p> The thumbnail URL for the production branch. </p>
   */
  thumbnailUrl?: string;

  /**
   * @public
   * <p> The branch name for the production branch. </p>
   */
  branchName?: string;
}

/**
 * @public
 * @enum
 */
export const RepositoryCloneMethod = {
  SIGV4: "SIGV4",
  SSH: "SSH",
  TOKEN: "TOKEN",
} as const;

/**
 * @public
 */
export type RepositoryCloneMethod = (typeof RepositoryCloneMethod)[keyof typeof RepositoryCloneMethod];

/**
 * @public
 * <p> Represents the different branches of a repository for building, deploying, and
 *             hosting an Amplify app. </p>
 */
export interface App {
  /**
   * @public
   * <p> The unique ID of the Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the Amplify app. </p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p> The name for the Amplify app. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> The tag for the Amplify app. </p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p> The description for the Amplify app. </p>
   */
  description: string | undefined;

  /**
   * @public
   * <p> The Git repository for the Amplify app. </p>
   */
  repository: string | undefined;

  /**
   * @public
   * <p> The platform for the Amplify app. For a static app, set the platform type to <code>WEB</code>.
   *             For a dynamic server-side rendered (SSR) app, set the platform type to
   *             <code>WEB_COMPUTE</code>. For an app requiring Amplify Hosting's original SSR support only, set the platform type to
   *             <code>WEB_DYNAMIC</code>.</p>
   */
  platform: Platform | undefined;

  /**
   * @public
   * <p> Creates a date and time for the Amplify app. </p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p> Updates the date and time for the Amplify app. </p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p> The AWS Identity and Access Management (IAM) service role for the Amazon Resource
   *             Name (ARN) of the Amplify app. </p>
   */
  iamServiceRoleArn?: string;

  /**
   * @public
   * <p> The environment variables for the Amplify app. </p>
   */
  environmentVariables: Record<string, string> | undefined;

  /**
   * @public
   * <p> The default domain for the Amplify app. </p>
   */
  defaultDomain: string | undefined;

  /**
   * @public
   * <p> Enables the auto-building of branches for the Amplify app. </p>
   */
  enableBranchAutoBuild: boolean | undefined;

  /**
   * @public
   * <p> Automatically disconnect a branch in the Amplify Console when you delete a branch
   *             from your Git repository. </p>
   */
  enableBranchAutoDeletion?: boolean;

  /**
   * @public
   * <p> Enables basic authorization for the Amplify app's branches. </p>
   */
  enableBasicAuth: boolean | undefined;

  /**
   * @public
   * <p> The basic authorization credentials for branches for the Amplify app. You must
   *             base64-encode the authorization credentials and provide them in the format
   *                 <code>user:password</code>.</p>
   */
  basicAuthCredentials?: string;

  /**
   * @public
   * <p> Describes the custom redirect and rewrite rules for the Amplify app. </p>
   */
  customRules?: CustomRule[];

  /**
   * @public
   * <p> Describes the information about a production branch of the Amplify app. </p>
   */
  productionBranch?: ProductionBranch;

  /**
   * @public
   * <p> Describes the content of the build specification (build spec) for the Amplify app.
   *         </p>
   */
  buildSpec?: string;

  /**
   * @public
   * <p>Describes the custom HTTP headers for the Amplify app.</p>
   */
  customHeaders?: string;

  /**
   * @public
   * <p> Enables automated branch creation for the Amplify app. </p>
   */
  enableAutoBranchCreation?: boolean;

  /**
   * @public
   * <p> Describes the automated branch creation glob patterns for the Amplify app. </p>
   */
  autoBranchCreationPatterns?: string[];

  /**
   * @public
   * <p> Describes the automated branch creation configuration for the Amplify app. </p>
   */
  autoBranchCreationConfig?: AutoBranchCreationConfig;

  /**
   * @public
   * <note>
   *             <p>This is for internal use.</p>
   *          </note>
   *          <p>The Amplify service uses this parameter to specify the authentication protocol to use to access
   *             the Git repository for an Amplify app. Amplify specifies <code>TOKEN</code> for a GitHub
   *             repository, <code>SIGV4</code> for an Amazon Web Services CodeCommit repository, and
   *                 <code>SSH</code> for GitLab and Bitbucket repositories.</p>
   */
  repositoryCloneMethod?: RepositoryCloneMethod;
}

/**
 * @public
 */
export interface CreateAppResult {
  /**
   * @public
   * <p> Represents the different branches of a repository for building, deploying, and
   *             hosting an Amplify app. </p>
   */
  app: App | undefined;
}

/**
 * @public
 * <p> An operation failed because a dependent service threw an exception. </p>
 */
export class DependentServiceFailureException extends __BaseException {
  readonly name: "DependentServiceFailureException" = "DependentServiceFailureException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DependentServiceFailureException, __BaseException>) {
    super({
      name: "DependentServiceFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, DependentServiceFailureException.prototype);
  }
}

/**
 * @public
 * <p> The service failed to perform an operation due to an internal issue. </p>
 */
export class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException" = "InternalFailureException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
  }
}

/**
 * @public
 * <p> A resource could not be created because service quotas were exceeded. </p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * @public
 * <p> An operation failed due to a lack of access. </p>
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
  }
}

/**
 * @public
 * <p> The request structure for the backend environment create request. </p>
 */
export interface CreateBackendEnvironmentRequest {
  /**
   * @public
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p> The name for the backend environment. </p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p> The AWS CloudFormation stack name of a backend environment. </p>
   */
  stackName?: string;

  /**
   * @public
   * <p> The name of deployment artifacts. </p>
   */
  deploymentArtifacts?: string;
}

/**
 * @public
 * <p> Describes the backend environment for an Amplify app. </p>
 */
export interface BackendEnvironment {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify
   *             app. </p>
   */
  backendEnvironmentArn: string | undefined;

  /**
   * @public
   * <p> The name for a backend environment that is part of an Amplify app. </p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p> The AWS CloudFormation stack name of a backend environment. </p>
   */
  stackName?: string;

  /**
   * @public
   * <p> The name of deployment artifacts. </p>
   */
  deploymentArtifacts?: string;

  /**
   * @public
   * <p> The creation date and time for a backend environment that is part of an Amplify app.
   *         </p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p> The last updated date and time for a backend environment that is part of an Amplify
   *             app. </p>
   */
  updateTime: Date | undefined;
}

/**
 * @public
 * <p> The result structure for the create backend environment request. </p>
 */
export interface CreateBackendEnvironmentResult {
  /**
   * @public
   * <p> Describes the backend environment for an Amplify app. </p>
   */
  backendEnvironment: BackendEnvironment | undefined;
}

/**
 * @public
 * <p> An entity was not found during an operation. </p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
  }
}

/**
 * @public
 * <p> The request structure for the create branch request. </p>
 */
export interface CreateBranchRequest {
  /**
   * @public
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p> The name for the branch. </p>
   */
  branchName: string | undefined;

  /**
   * @public
   * <p> The description for the branch. </p>
   */
  description?: string;

  /**
   * @public
   * <p> Describes the current stage for the branch. </p>
   */
  stage?: Stage;

  /**
   * @public
   * <p> The framework for the branch. </p>
   */
  framework?: string;

  /**
   * @public
   * <p> Enables notifications for the branch. </p>
   */
  enableNotification?: boolean;

  /**
   * @public
   * <p> Enables auto building for the branch. </p>
   */
  enableAutoBuild?: boolean;

  /**
   * @public
   * <p> The environment variables for the branch. </p>
   */
  environmentVariables?: Record<string, string>;

  /**
   * @public
   * <p> The basic authorization credentials for the branch. You must base64-encode the
   *             authorization credentials and provide them in the format
   *             <code>user:password</code>.</p>
   */
  basicAuthCredentials?: string;

  /**
   * @public
   * <p> Enables basic authorization for the branch. </p>
   */
  enableBasicAuth?: boolean;

  /**
   * @public
   * <p>Enables performance mode for the branch.</p>
   *          <p>Performance mode optimizes for faster hosting performance by keeping content cached at
   *             the edge for a longer interval. When performance mode is enabled, hosting configuration
   *             or code changes can take up to 10 minutes to roll out. </p>
   */
  enablePerformanceMode?: boolean;

  /**
   * @public
   * <p> The tag for the branch. </p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p> The build specification (build spec) for the branch. </p>
   */
  buildSpec?: string;

  /**
   * @public
   * <p> The content Time To Live (TTL) for the website in seconds. </p>
   */
  ttl?: string;

  /**
   * @public
   * <p> The display name for a branch. This is used as the default domain prefix. </p>
   */
  displayName?: string;

  /**
   * @public
   * <p> Enables pull request previews for this branch. </p>
   */
  enablePullRequestPreview?: boolean;

  /**
   * @public
   * <p> The Amplify environment name for the pull request. </p>
   */
  pullRequestEnvironmentName?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify
   *             app. </p>
   */
  backendEnvironmentArn?: string;
}

/**
 * @public
 * <p> The branch for an Amplify app, which maps to a third-party repository branch. </p>
 */
export interface Branch {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) for a branch that is part of an Amplify app. </p>
   */
  branchArn: string | undefined;

  /**
   * @public
   * <p> The name for the branch that is part of an Amplify app. </p>
   */
  branchName: string | undefined;

  /**
   * @public
   * <p> The description for the branch that is part of an Amplify app. </p>
   */
  description: string | undefined;

  /**
   * @public
   * <p> The tag for the branch of an Amplify app. </p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p> The current stage for the branch that is part of an Amplify app. </p>
   */
  stage: Stage | undefined;

  /**
   * @public
   * <p> The display name for the branch. This is used as the default domain prefix. </p>
   */
  displayName: string | undefined;

  /**
   * @public
   * <p> Enables notifications for a branch that is part of an Amplify app. </p>
   */
  enableNotification: boolean | undefined;

  /**
   * @public
   * <p> The creation date and time for a branch that is part of an Amplify app. </p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p> The last updated date and time for a branch that is part of an Amplify app. </p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p> The environment variables specific to a branch of an Amplify app. </p>
   */
  environmentVariables: Record<string, string> | undefined;

  /**
   * @public
   * <p> Enables auto-building on push for a branch of an Amplify app. </p>
   */
  enableAutoBuild: boolean | undefined;

  /**
   * @public
   * <p> The custom domains for a branch of an Amplify app. </p>
   */
  customDomains: string[] | undefined;

  /**
   * @public
   * <p> The framework for a branch of an Amplify app. </p>
   */
  framework: string | undefined;

  /**
   * @public
   * <p> The ID of the active job for a branch of an Amplify app. </p>
   */
  activeJobId: string | undefined;

  /**
   * @public
   * <p> The total number of jobs that are part of an Amplify app. </p>
   */
  totalNumberOfJobs: string | undefined;

  /**
   * @public
   * <p> Enables basic authorization for a branch of an Amplify app. </p>
   */
  enableBasicAuth: boolean | undefined;

  /**
   * @public
   * <p>Enables performance mode for the branch.</p>
   *          <p>Performance mode optimizes for faster hosting performance by keeping content cached at
   *             the edge for a longer interval. When performance mode is enabled, hosting configuration
   *             or code changes can take up to 10 minutes to roll out. </p>
   */
  enablePerformanceMode?: boolean;

  /**
   * @public
   * <p> The thumbnail URL for the branch of an Amplify app. </p>
   */
  thumbnailUrl?: string;

  /**
   * @public
   * <p> The basic authorization credentials for a branch of an Amplify app. You must
   *             base64-encode the authorization credentials and provide them in the format
   *                 <code>user:password</code>.</p>
   */
  basicAuthCredentials?: string;

  /**
   * @public
   * <p> The build specification (build spec) content for the branch of an Amplify app.
   *         </p>
   */
  buildSpec?: string;

  /**
   * @public
   * <p> The content Time to Live (TTL) for the website in seconds. </p>
   */
  ttl: string | undefined;

  /**
   * @public
   * <p> A list of custom resources that are linked to this branch. </p>
   */
  associatedResources?: string[];

  /**
   * @public
   * <p> Enables pull request previews for the branch. </p>
   */
  enablePullRequestPreview: boolean | undefined;

  /**
   * @public
   * <p> The Amplify environment name for the pull request. </p>
   */
  pullRequestEnvironmentName?: string;

  /**
   * @public
   * <p> The destination branch if the branch is a pull request branch. </p>
   */
  destinationBranch?: string;

  /**
   * @public
   * <p> The source branch if the branch is a pull request branch. </p>
   */
  sourceBranch?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify
   *             app. </p>
   */
  backendEnvironmentArn?: string;
}

/**
 * @public
 * <p> The result structure for create branch request. </p>
 */
export interface CreateBranchResult {
  /**
   * @public
   * <p> Describes the branch for an Amplify app, which maps to a third-party repository
   *             branch. </p>
   */
  branch: Branch | undefined;
}

/**
 * @public
 * <p> The request structure for the create a new deployment request. </p>
 */
export interface CreateDeploymentRequest {
  /**
   * @public
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p> The name for the branch, for the job. </p>
   */
  branchName: string | undefined;

  /**
   * @public
   * <p> An optional file map that contains the file name as the key and the file content md5
   *             hash as the value. If this argument is provided, the service will generate a unique
   *             upload URL per file. Otherwise, the service will only generate a single upload URL for
   *             the zipped files. </p>
   */
  fileMap?: Record<string, string>;
}

/**
 * @public
 * <p> The result structure for the create a new deployment request. </p>
 */
export interface CreateDeploymentResult {
  /**
   * @public
   * <p> The job ID for this deployment. will supply to start deployment api. </p>
   */
  jobId?: string;

  /**
   * @public
   * <p> When the <code>fileMap</code> argument is provided in the request,
   *                 <code>fileUploadUrls</code> will contain a map of file names to upload URLs. </p>
   */
  fileUploadUrls: Record<string, string> | undefined;

  /**
   * @public
   * <p> When the <code>fileMap</code> argument is not provided in the request, this
   *                 <code>zipUploadUrl</code> is returned. </p>
   */
  zipUploadUrl: string | undefined;
}

/**
 * @public
 * <p> Describes the settings for the subdomain. </p>
 */
export interface SubDomainSetting {
  /**
   * @public
   * <p> The prefix setting for the subdomain. </p>
   */
  prefix: string | undefined;

  /**
   * @public
   * <p> The branch name setting for the subdomain. </p>
   */
  branchName: string | undefined;
}

/**
 * @public
 * <p> The request structure for the create domain association request. </p>
 */
export interface CreateDomainAssociationRequest {
  /**
   * @public
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p> The domain name for the domain association. </p>
   */
  domainName: string | undefined;

  /**
   * @public
   * <p> Enables the automated creation of subdomains for branches. </p>
   */
  enableAutoSubDomain?: boolean;

  /**
   * @public
   * <p> The setting for the subdomain. </p>
   */
  subDomainSettings: SubDomainSetting[] | undefined;

  /**
   * @public
   * <p> Sets the branch patterns for automatic subdomain creation. </p>
   */
  autoSubDomainCreationPatterns?: string[];

  /**
   * @public
   * <p> The required AWS Identity and Access Management (IAM) service role for the Amazon
   *             Resource Name (ARN) for automatically creating subdomains. </p>
   */
  autoSubDomainIAMRole?: string;
}

/**
 * @public
 * @enum
 */
export const DomainStatus = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING_DEPLOYMENT: "PENDING_DEPLOYMENT",
  PENDING_VERIFICATION: "PENDING_VERIFICATION",
  REQUESTING_CERTIFICATE: "REQUESTING_CERTIFICATE",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type DomainStatus = (typeof DomainStatus)[keyof typeof DomainStatus];

/**
 * @public
 * <p> The subdomain for the domain association. </p>
 */
export interface SubDomain {
  /**
   * @public
   * <p> Describes the settings for the subdomain. </p>
   */
  subDomainSetting: SubDomainSetting | undefined;

  /**
   * @public
   * <p> The verified status of the subdomain </p>
   */
  verified: boolean | undefined;

  /**
   * @public
   * <p> The DNS record for the subdomain. </p>
   */
  dnsRecord: string | undefined;
}

/**
 * @public
 * <p> Describes a domain association that associates a custom domain with an Amplify app.
 *         </p>
 */
export interface DomainAssociation {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) for the domain association. </p>
   */
  domainAssociationArn: string | undefined;

  /**
   * @public
   * <p> The name of the domain. </p>
   */
  domainName: string | undefined;

  /**
   * @public
   * <p> Enables the automated creation of subdomains for branches. </p>
   */
  enableAutoSubDomain: boolean | undefined;

  /**
   * @public
   * <p> Sets branch patterns for automatic subdomain creation. </p>
   */
  autoSubDomainCreationPatterns?: string[];

  /**
   * @public
   * <p> The required AWS Identity and Access Management (IAM) service role for the Amazon
   *             Resource Name (ARN) for automatically creating subdomains. </p>
   */
  autoSubDomainIAMRole?: string;

  /**
   * @public
   * <p> The current status of the domain association. </p>
   */
  domainStatus: DomainStatus | undefined;

  /**
   * @public
   * <p> The reason for the current status of the domain association. </p>
   */
  statusReason: string | undefined;

  /**
   * @public
   * <p> The DNS record for certificate verification. </p>
   */
  certificateVerificationDNSRecord?: string;

  /**
   * @public
   * <p> The subdomains for the domain association. </p>
   */
  subDomains: SubDomain[] | undefined;
}

/**
 * @public
 * <p> The result structure for the create domain association request. </p>
 */
export interface CreateDomainAssociationResult {
  /**
   * @public
   * <p> Describes the structure of a domain association, which associates a custom domain
   *             with an Amplify app. </p>
   */
  domainAssociation: DomainAssociation | undefined;
}

/**
 * @public
 * <p> The request structure for the create webhook request. </p>
 */
export interface CreateWebhookRequest {
  /**
   * @public
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p> The name for a branch that is part of an Amplify app. </p>
   */
  branchName: string | undefined;

  /**
   * @public
   * <p> The description for a webhook. </p>
   */
  description?: string;
}

/**
 * @public
 * <p> Describes a webhook that connects repository events to an Amplify app. </p>
 */
export interface Webhook {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) for the webhook. </p>
   */
  webhookArn: string | undefined;

  /**
   * @public
   * <p> The ID of the webhook. </p>
   */
  webhookId: string | undefined;

  /**
   * @public
   * <p> The URL of the webhook. </p>
   */
  webhookUrl: string | undefined;

  /**
   * @public
   * <p> The name for a branch that is part of an Amplify app. </p>
   */
  branchName: string | undefined;

  /**
   * @public
   * <p> The description for a webhook. </p>
   */
  description: string | undefined;

  /**
   * @public
   * <p> The create date and time for a webhook. </p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p> Updates the date and time for a webhook. </p>
   */
  updateTime: Date | undefined;
}

/**
 * @public
 * <p> The result structure for the create webhook request. </p>
 */
export interface CreateWebhookResult {
  /**
   * @public
   * <p> Describes a webhook that connects repository events to an Amplify app. </p>
   */
  webhook: Webhook | undefined;
}

/**
 * @public
 * <p> Describes the request structure for the delete app request. </p>
 */
export interface DeleteAppRequest {
  /**
   * @public
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
}

/**
 * @public
 * <p> The result structure for the delete app request. </p>
 */
export interface DeleteAppResult {
  /**
   * @public
   * <p> Represents the different branches of a repository for building, deploying, and
   *             hosting an Amplify app. </p>
   */
  app: App | undefined;
}

/**
 * @public
 * <p> The request structure for the delete backend environment request. </p>
 */
export interface DeleteBackendEnvironmentRequest {
  /**
   * @public
   * <p> The unique ID of an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p> The name of a backend environment of an Amplify app. </p>
   */
  environmentName: string | undefined;
}

/**
 * @public
 * <p> The result structure of the delete backend environment result. </p>
 */
export interface DeleteBackendEnvironmentResult {
  /**
   * @public
   * <p> Describes the backend environment for an Amplify app. </p>
   */
  backendEnvironment: BackendEnvironment | undefined;
}

/**
 * @public
 * <p> The request structure for the delete branch request. </p>
 */
export interface DeleteBranchRequest {
  /**
   * @public
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p> The name for the branch. </p>
   */
  branchName: string | undefined;
}

/**
 * @public
 * <p> The result structure for the delete branch request. </p>
 */
export interface DeleteBranchResult {
  /**
   * @public
   * <p> The branch for an Amplify app, which maps to a third-party repository branch. </p>
   */
  branch: Branch | undefined;
}

/**
 * @public
 * <p> The request structure for the delete domain association request. </p>
 */
export interface DeleteDomainAssociationRequest {
  /**
   * @public
   * <p> The unique id for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p> The name of the domain. </p>
   */
  domainName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainAssociationResult {
  /**
   * @public
   * <p> Describes a domain association that associates a custom domain with an Amplify app.
   *         </p>
   */
  domainAssociation: DomainAssociation | undefined;
}

/**
 * @public
 * <p> The request structure for the delete job request. </p>
 */
export interface DeleteJobRequest {
  /**
   * @public
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p> The name for the branch, for the job. </p>
   */
  branchName: string | undefined;

  /**
   * @public
   * <p> The unique ID for the job. </p>
   */
  jobId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const JobType = {
  MANUAL: "MANUAL",
  RELEASE: "RELEASE",
  RETRY: "RETRY",
  WEB_HOOK: "WEB_HOOK",
} as const;

/**
 * @public
 */
export type JobType = (typeof JobType)[keyof typeof JobType];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  FAILED: "FAILED",
  PENDING: "PENDING",
  PROVISIONING: "PROVISIONING",
  RUNNING: "RUNNING",
  SUCCEED: "SUCCEED",
} as const;

/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * <p> Describes the summary for an execution job for an Amplify app. </p>
 */
export interface JobSummary {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) for the job. </p>
   */
  jobArn: string | undefined;

  /**
   * @public
   * <p> The unique ID for the job. </p>
   */
  jobId: string | undefined;

  /**
   * @public
   * <p> The commit ID from a third-party repository provider for the job. </p>
   */
  commitId: string | undefined;

  /**
   * @public
   * <p> The commit message from a third-party repository provider for the job. </p>
   */
  commitMessage: string | undefined;

  /**
   * @public
   * <p> The commit date and time for the job. </p>
   */
  commitTime: Date | undefined;

  /**
   * @public
   * <p> The start date and time for the job. </p>
   */
  startTime: Date | undefined;

  /**
   * @public
   * <p> The current status for the job. </p>
   */
  status: JobStatus | undefined;

  /**
   * @public
   * <p> The end date and time for the job. </p>
   */
  endTime?: Date;

  /**
   * @public
   * <p> The type for the job. If the value is <code>RELEASE</code>, the job was manually
   *             released from its source by using the <code>StartJob</code> API. If the value is
   *                 <code>RETRY</code>, the job was manually retried using the <code>StartJob</code>
   *             API. If the value is <code>WEB_HOOK</code>, the job was automatically triggered by
   *             webhooks. </p>
   */
  jobType: JobType | undefined;
}

/**
 * @public
 * <p> The result structure for the delete job request. </p>
 */
export interface DeleteJobResult {
  /**
   * @public
   * <p> Describes the summary for an execution job for an Amplify app. </p>
   */
  jobSummary: JobSummary | undefined;
}

/**
 * @public
 * <p> The request structure for the delete webhook request. </p>
 */
export interface DeleteWebhookRequest {
  /**
   * @public
   * <p> The unique ID for a webhook. </p>
   */
  webhookId: string | undefined;
}

/**
 * @public
 * <p> The result structure for the delete webhook request. </p>
 */
export interface DeleteWebhookResult {
  /**
   * @public
   * <p> Describes a webhook that connects repository events to an Amplify app. </p>
   */
  webhook: Webhook | undefined;
}

/**
 * @public
 * <p> The request structure for the generate access logs request. </p>
 */
export interface GenerateAccessLogsRequest {
  /**
   * @public
   * <p> The time at which the logs should start. The time range specified is inclusive of the
   *             start time. </p>
   */
  startTime?: Date;

  /**
   * @public
   * <p> The time at which the logs should end. The time range specified is inclusive of the
   *             end time. </p>
   */
  endTime?: Date;

  /**
   * @public
   * <p> The name of the domain. </p>
   */
  domainName: string | undefined;

  /**
   * @public
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
}

/**
 * @public
 * <p> The result structure for the generate access logs request. </p>
 */
export interface GenerateAccessLogsResult {
  /**
   * @public
   * <p> The pre-signed URL for the requested access logs. </p>
   */
  logUrl?: string;
}

/**
 * @public
 * <p> The request structure for the get app request. </p>
 */
export interface GetAppRequest {
  /**
   * @public
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
}

/**
 * @public
 */
export interface GetAppResult {
  /**
   * @public
   * <p> Represents the different branches of a repository for building, deploying, and
   *             hosting an Amplify app. </p>
   */
  app: App | undefined;
}

/**
 * @public
 * <p> Returns the request structure for the get artifact request. </p>
 */
export interface GetArtifactUrlRequest {
  /**
   * @public
   * <p> The unique ID for an artifact. </p>
   */
  artifactId: string | undefined;
}

/**
 * @public
 * <p> Returns the result structure for the get artifact request. </p>
 */
export interface GetArtifactUrlResult {
  /**
   * @public
   * <p> The unique ID for an artifact. </p>
   */
  artifactId: string | undefined;

  /**
   * @public
   * <p> The presigned URL for the artifact. </p>
   */
  artifactUrl: string | undefined;
}

/**
 * @public
 * <p> The request structure for the get backend environment request. </p>
 */
export interface GetBackendEnvironmentRequest {
  /**
   * @public
   * <p> The unique id for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p> The name for the backend environment. </p>
   */
  environmentName: string | undefined;
}

/**
 * @public
 * <p> The result structure for the get backend environment result. </p>
 */
export interface GetBackendEnvironmentResult {
  /**
   * @public
   * <p> Describes the backend environment for an Amplify app. </p>
   */
  backendEnvironment: BackendEnvironment | undefined;
}

/**
 * @public
 * <p> The request structure for the get branch request. </p>
 */
export interface GetBranchRequest {
  /**
   * @public
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p> The name for the branch. </p>
   */
  branchName: string | undefined;
}

/**
 * @public
 */
export interface GetBranchResult {
  /**
   * @public
   * <p> The branch for an Amplify app, which maps to a third-party repository branch. </p>
   */
  branch: Branch | undefined;
}

/**
 * @public
 * <p> The request structure for the get domain association request. </p>
 */
export interface GetDomainAssociationRequest {
  /**
   * @public
   * <p> The unique id for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p> The name of the domain. </p>
   */
  domainName: string | undefined;
}

/**
 * @public
 * <p> The result structure for the get domain association request. </p>
 */
export interface GetDomainAssociationResult {
  /**
   * @public
   * <p> Describes the structure of a domain association, which associates a custom domain
   *             with an Amplify app. </p>
   */
  domainAssociation: DomainAssociation | undefined;
}

/**
 * @public
 * <p> The request structure for the get job request. </p>
 */
export interface GetJobRequest {
  /**
   * @public
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p> The branch name for the job. </p>
   */
  branchName: string | undefined;

  /**
   * @public
   * <p> The unique ID for the job. </p>
   */
  jobId: string | undefined;
}

/**
 * @public
 * <p> Describes an execution step, for an execution job, for an Amplify app. </p>
 */
export interface Step {
  /**
   * @public
   * <p> The name of the execution step. </p>
   */
  stepName: string | undefined;

  /**
   * @public
   * <p> The start date and time of the execution step. </p>
   */
  startTime: Date | undefined;

  /**
   * @public
   * <p> The status of the execution step. </p>
   */
  status: JobStatus | undefined;

  /**
   * @public
   * <p> The end date and time of the execution step. </p>
   */
  endTime: Date | undefined;

  /**
   * @public
   * <p> The URL to the logs for the execution step. </p>
   */
  logUrl?: string;

  /**
   * @public
   * <p> The URL to the artifact for the execution step. </p>
   */
  artifactsUrl?: string;

  /**
   * @public
   * <p> The URL to the test artifact for the execution step. </p>
   */
  testArtifactsUrl?: string;

  /**
   * @public
   * <p> The URL to the test configuration for the execution step. </p>
   */
  testConfigUrl?: string;

  /**
   * @public
   * <p> The list of screenshot URLs for the execution step, if relevant. </p>
   */
  screenshots?: Record<string, string>;

  /**
   * @public
   * <p> The reason for the current step status. </p>
   */
  statusReason?: string;

  /**
   * @public
   * <p> The context for the current step. Includes a build image if the step is build.
   *         </p>
   */
  context?: string;
}

/**
 * @public
 * <p> Describes an execution job for an Amplify app. </p>
 */
export interface Job {
  /**
   * @public
   * <p> Describes the summary for an execution job for an Amplify app. </p>
   */
  summary: JobSummary | undefined;

  /**
   * @public
   * <p> The execution steps for an execution job, for an Amplify app. </p>
   */
  steps: Step[] | undefined;
}

/**
 * @public
 */
export interface GetJobResult {
  /**
   * @public
   * <p> Describes an execution job for an Amplify app. </p>
   */
  job: Job | undefined;
}

/**
 * @public
 * <p> The request structure for the get webhook request. </p>
 */
export interface GetWebhookRequest {
  /**
   * @public
   * <p> The unique ID for a webhook. </p>
   */
  webhookId: string | undefined;
}

/**
 * @public
 * <p> The result structure for the get webhook request. </p>
 */
export interface GetWebhookResult {
  /**
   * @public
   * <p> Describes the structure of a webhook. </p>
   */
  webhook: Webhook | undefined;
}

/**
 * @public
 * <p> The request structure for the list apps request. </p>
 */
export interface ListAppsRequest {
  /**
   * @public
   * <p> A pagination token. If non-null, the pagination token is returned in a result. Pass
   *             its value in another request to retrieve more entries. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> The maximum number of records to list in a single response. </p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p> The result structure for an Amplify app list request. </p>
 */
export interface ListAppsResult {
  /**
   * @public
   * <p> A list of Amplify apps. </p>
   */
  apps: App[] | undefined;

  /**
   * @public
   * <p> A pagination token. Set to null to start listing apps from start. If non-null, the
   *             pagination token is returned in a result. Pass its value in here to list more projects.
   *         </p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p> Describes the request structure for the list artifacts request. </p>
 */
export interface ListArtifactsRequest {
  /**
   * @public
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p> The name of a branch that is part of an Amplify app. </p>
   */
  branchName: string | undefined;

  /**
   * @public
   * <p> The unique ID for a job. </p>
   */
  jobId: string | undefined;

  /**
   * @public
   * <p> A pagination token. Set to null to start listing artifacts from start. If a non-null
   *             pagination token is returned in a result, pass its value in here to list more artifacts.
   *         </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> The maximum number of records to list in a single response. </p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p> Describes an artifact. </p>
 */
export interface Artifact {
  /**
   * @public
   * <p> The file name for the artifact. </p>
   */
  artifactFileName: string | undefined;

  /**
   * @public
   * <p> The unique ID for the artifact. </p>
   */
  artifactId: string | undefined;
}

/**
 * @public
 * <p> The result structure for the list artifacts request. </p>
 */
export interface ListArtifactsResult {
  /**
   * @public
   * <p> A list of artifacts. </p>
   */
  artifacts: Artifact[] | undefined;

  /**
   * @public
   * <p> A pagination token. If a non-null pagination token is returned in a result, pass its
   *             value in another request to retrieve more entries. </p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p> The request structure for the list backend environments request. </p>
 */
export interface ListBackendEnvironmentsRequest {
  /**
   * @public
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p> The name of the backend environment </p>
   */
  environmentName?: string;

  /**
   * @public
   * <p> A pagination token. Set to null to start listing backend environments from the start.
   *             If a non-null pagination token is returned in a result, pass its value in here to list
   *             more backend environments. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> The maximum number of records to list in a single response. </p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p> The result structure for the list backend environments result. </p>
 */
export interface ListBackendEnvironmentsResult {
  /**
   * @public
   * <p> The list of backend environments for an Amplify app. </p>
   */
  backendEnvironments: BackendEnvironment[] | undefined;

  /**
   * @public
   * <p> A pagination token. If a non-null pagination token is returned in a result, pass its
   *             value in another request to retrieve more entries. </p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p> The request structure for the list branches request. </p>
 */
export interface ListBranchesRequest {
  /**
   * @public
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p> A pagination token. Set to null to start listing branches from the start. If a
   *             non-null pagination token is returned in a result, pass its value in here to list more
   *             branches. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> The maximum number of records to list in a single response. </p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p> The result structure for the list branches request. </p>
 */
export interface ListBranchesResult {
  /**
   * @public
   * <p> A list of branches for an Amplify app. </p>
   */
  branches: Branch[] | undefined;

  /**
   * @public
   * <p> A pagination token. If a non-null pagination token is returned in a result, pass its
   *             value in another request to retrieve more entries. </p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p> The request structure for the list domain associations request. </p>
 */
export interface ListDomainAssociationsRequest {
  /**
   * @public
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p> A pagination token. Set to null to start listing apps from the start. If non-null, a
   *             pagination token is returned in a result. Pass its value in here to list more projects.
   *         </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> The maximum number of records to list in a single response. </p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p> The result structure for the list domain association request. </p>
 */
export interface ListDomainAssociationsResult {
  /**
   * @public
   * <p> A list of domain associations. </p>
   */
  domainAssociations: DomainAssociation[] | undefined;

  /**
   * @public
   * <p> A pagination token. If non-null, a pagination token is returned in a result. Pass its
   *             value in another request to retrieve more entries. </p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p> The request structure for the list jobs request. </p>
 */
export interface ListJobsRequest {
  /**
   * @public
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p> The name for a branch. </p>
   */
  branchName: string | undefined;

  /**
   * @public
   * <p> A pagination token. Set to null to start listing steps from the start. If a non-null
   *             pagination token is returned in a result, pass its value in here to list more steps.
   *         </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> The maximum number of records to list in a single response. </p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p> The maximum number of records to list in a single response. </p>
 */
export interface ListJobsResult {
  /**
   * @public
   * <p> The result structure for the list job result request. </p>
   */
  jobSummaries: JobSummary[] | undefined;

  /**
   * @public
   * <p> A pagination token. If non-null the pagination token is returned in a result. Pass
   *             its value in another request to retrieve more entries. </p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p> The request structure to use to list tags for a resource. </p>
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) to use to list tags. </p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 * <p> The response for the list tags for resource request. </p>
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p> A list of tags for the specified The Amazon Resource Name (ARN). </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p> An operation failed due to a non-existent resource. </p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.code = opts.code;
  }
}

/**
 * @public
 * <p> The request structure for the list webhooks request. </p>
 */
export interface ListWebhooksRequest {
  /**
   * @public
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p> A pagination token. Set to null to start listing webhooks from the start. If
   *             non-null,the pagination token is returned in a result. Pass its value in here to list
   *             more webhooks. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> The maximum number of records to list in a single response. </p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p> The result structure for the list webhooks request. </p>
 */
export interface ListWebhooksResult {
  /**
   * @public
   * <p> A list of webhooks. </p>
   */
  webhooks: Webhook[] | undefined;

  /**
   * @public
   * <p> A pagination token. If non-null, the pagination token is returned in a result. Pass
   *             its value in another request to retrieve more entries. </p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p> The request structure for the start a deployment request. </p>
 */
export interface StartDeploymentRequest {
  /**
   * @public
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p> The name for the branch, for the job. </p>
   */
  branchName: string | undefined;

  /**
   * @public
   * <p> The job ID for this deployment, generated by the create deployment request. </p>
   */
  jobId?: string;

  /**
   * @public
   * <p> The source URL for this deployment, used when calling start deployment without create
   *             deployment. The source URL can be any HTTP GET URL that is publicly accessible and
   *             downloads a single .zip file. </p>
   */
  sourceUrl?: string;
}

/**
 * @public
 * <p> The result structure for the start a deployment request. </p>
 */
export interface StartDeploymentResult {
  /**
   * @public
   * <p> The summary for the job. </p>
   */
  jobSummary: JobSummary | undefined;
}

/**
 * @public
 * <p> The request structure for the start job request. </p>
 */
export interface StartJobRequest {
  /**
   * @public
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p> The branch name for the job. </p>
   */
  branchName: string | undefined;

  /**
   * @public
   * <p> The unique ID for an existing job. This is required if the value of
   *                 <code>jobType</code> is <code>RETRY</code>. </p>
   */
  jobId?: string;

  /**
   * @public
   * <p> Describes the type for the job. The job type <code>RELEASE</code> starts a new job
   *             with the latest change from the specified branch. This value is available only for apps
   *             that are connected to a repository. The job type <code>RETRY</code> retries an existing
   *             job. If the job type value is <code>RETRY</code>, the <code>jobId</code> is also
   *             required. </p>
   */
  jobType: JobType | undefined;

  /**
   * @public
   * <p> A descriptive reason for starting this job. </p>
   */
  jobReason?: string;

  /**
   * @public
   * <p> The commit ID from a third-party repository provider for the job. </p>
   */
  commitId?: string;

  /**
   * @public
   * <p> The commit message from a third-party repository provider for the job. </p>
   */
  commitMessage?: string;

  /**
   * @public
   * <p> The commit date and time for the job. </p>
   */
  commitTime?: Date;
}

/**
 * @public
 * <p> The result structure for the run job request. </p>
 */
export interface StartJobResult {
  /**
   * @public
   * <p> The summary for the job. </p>
   */
  jobSummary: JobSummary | undefined;
}

/**
 * @public
 * <p> The request structure for the stop job request. </p>
 */
export interface StopJobRequest {
  /**
   * @public
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p> The name for the branch, for the job. </p>
   */
  branchName: string | undefined;

  /**
   * @public
   * <p> The unique id for the job. </p>
   */
  jobId: string | undefined;
}

/**
 * @public
 * <p> The result structure for the stop job request. </p>
 */
export interface StopJobResult {
  /**
   * @public
   * <p> The summary for the job. </p>
   */
  jobSummary: JobSummary | undefined;
}

/**
 * @public
 * <p> The request structure to tag a resource with a tag key and value. </p>
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) to use to tag a resource. </p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p> The tags used to tag the resource. </p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 * <p> The response for the tag resource request. </p>
 */
export interface TagResourceResponse {}

/**
 * @public
 * <p> The request structure for the untag resource request. </p>
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) to use to untag a resource. </p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p> The tag keys to use to untag a resource. </p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 * <p> The response for the untag resource request. </p>
 */
export interface UntagResourceResponse {}

/**
 * @public
 * <p> The request structure for the update app request. </p>
 */
export interface UpdateAppRequest {
  /**
   * @public
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p> The name for an Amplify app. </p>
   */
  name?: string;

  /**
   * @public
   * <p> The description for an Amplify app. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The platform for the Amplify app. For a static app, set the platform type to <code>WEB</code>.
   *             For a dynamic server-side rendered (SSR) app, set the platform type to
   *             <code>WEB_COMPUTE</code>. For an app requiring Amplify Hosting's original SSR support only, set the platform type to
   *             <code>WEB_DYNAMIC</code>.</p>
   */
  platform?: Platform;

  /**
   * @public
   * <p> The AWS Identity and Access Management (IAM) service role for an Amplify app. </p>
   */
  iamServiceRoleArn?: string;

  /**
   * @public
   * <p> The environment variables for an Amplify app. </p>
   */
  environmentVariables?: Record<string, string>;

  /**
   * @public
   * <p> Enables branch auto-building for an Amplify app. </p>
   */
  enableBranchAutoBuild?: boolean;

  /**
   * @public
   * <p> Automatically disconnects a branch in the Amplify Console when you delete a branch
   *             from your Git repository. </p>
   */
  enableBranchAutoDeletion?: boolean;

  /**
   * @public
   * <p> Enables basic authorization for an Amplify app. </p>
   */
  enableBasicAuth?: boolean;

  /**
   * @public
   * <p> The basic authorization credentials for an Amplify app. You must base64-encode the
   *             authorization credentials and provide them in the format
   *             <code>user:password</code>.</p>
   */
  basicAuthCredentials?: string;

  /**
   * @public
   * <p> The custom redirect and rewrite rules for an Amplify app. </p>
   */
  customRules?: CustomRule[];

  /**
   * @public
   * <p> The build specification (build spec) for an Amplify app. </p>
   */
  buildSpec?: string;

  /**
   * @public
   * <p>The custom HTTP headers for an Amplify app.</p>
   */
  customHeaders?: string;

  /**
   * @public
   * <p> Enables automated branch creation for an Amplify app. </p>
   */
  enableAutoBranchCreation?: boolean;

  /**
   * @public
   * <p> Describes the automated branch creation glob patterns for an Amplify app. </p>
   */
  autoBranchCreationPatterns?: string[];

  /**
   * @public
   * <p> The automated branch creation configuration for an Amplify app. </p>
   */
  autoBranchCreationConfig?: AutoBranchCreationConfig;

  /**
   * @public
   * <p> The name of the repository for an Amplify app </p>
   */
  repository?: string;

  /**
   * @public
   * <p>The OAuth token for a third-party source control system for an Amplify app. The OAuth
   *             token is used to create a webhook and a read-only deploy key using SSH cloning. The
   *             OAuth token is not stored.</p>
   *          <p>Use <code>oauthToken</code> for repository providers other than GitHub, such as
   *             Bitbucket or CodeCommit.</p>
   *          <p>To authorize access to GitHub as your repository provider, use
   *                 <code>accessToken</code>.</p>
   *          <p>You must specify either <code>oauthToken</code> or <code>accessToken</code> when you
   *             update an app.</p>
   *          <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work
   *             with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub
   *             App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the
   *                 <i>Amplify User Guide</i> .</p>
   */
  oauthToken?: string;

  /**
   * @public
   * <p>The personal access token for a GitHub repository for an Amplify app. The personal
   *             access token is used to authorize access to a GitHub repository using the Amplify GitHub
   *             App. The token is not stored.</p>
   *          <p>Use <code>accessToken</code> for GitHub repositories only. To authorize access to a
   *             repository provider such as Bitbucket or CodeCommit, use <code>oauthToken</code>.</p>
   *          <p>You must specify either <code>accessToken</code> or <code>oauthToken</code> when you
   *             update an app.</p>
   *          <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work
   *             with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub
   *             App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the
   *                 <i>Amplify User Guide</i> .</p>
   */
  accessToken?: string;
}

/**
 * @public
 * <p> The result structure for an Amplify app update request. </p>
 */
export interface UpdateAppResult {
  /**
   * @public
   * <p> Represents the updated Amplify app. </p>
   */
  app: App | undefined;
}

/**
 * @public
 * <p> The request structure for the update branch request. </p>
 */
export interface UpdateBranchRequest {
  /**
   * @public
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p> The name for the branch. </p>
   */
  branchName: string | undefined;

  /**
   * @public
   * <p> The description for the branch. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The framework for the branch. </p>
   */
  framework?: string;

  /**
   * @public
   * <p> Describes the current stage for the branch. </p>
   */
  stage?: Stage;

  /**
   * @public
   * <p> Enables notifications for the branch. </p>
   */
  enableNotification?: boolean;

  /**
   * @public
   * <p> Enables auto building for the branch. </p>
   */
  enableAutoBuild?: boolean;

  /**
   * @public
   * <p> The environment variables for the branch. </p>
   */
  environmentVariables?: Record<string, string>;

  /**
   * @public
   * <p> The basic authorization credentials for the branch. You must base64-encode the
   *             authorization credentials and provide them in the format
   *             <code>user:password</code>.</p>
   */
  basicAuthCredentials?: string;

  /**
   * @public
   * <p> Enables basic authorization for the branch. </p>
   */
  enableBasicAuth?: boolean;

  /**
   * @public
   * <p>Enables performance mode for the branch.</p>
   *          <p>Performance mode optimizes for faster hosting performance by keeping content cached at
   *             the edge for a longer interval. When performance mode is enabled, hosting configuration
   *             or code changes can take up to 10 minutes to roll out. </p>
   */
  enablePerformanceMode?: boolean;

  /**
   * @public
   * <p> The build specification (build spec) for the branch. </p>
   */
  buildSpec?: string;

  /**
   * @public
   * <p> The content Time to Live (TTL) for the website in seconds. </p>
   */
  ttl?: string;

  /**
   * @public
   * <p> The display name for a branch. This is used as the default domain prefix. </p>
   */
  displayName?: string;

  /**
   * @public
   * <p> Enables pull request previews for this branch. </p>
   */
  enablePullRequestPreview?: boolean;

  /**
   * @public
   * <p> The Amplify environment name for the pull request. </p>
   */
  pullRequestEnvironmentName?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify
   *             app. </p>
   */
  backendEnvironmentArn?: string;
}

/**
 * @public
 * <p> The result structure for the update branch request. </p>
 */
export interface UpdateBranchResult {
  /**
   * @public
   * <p> The branch for an Amplify app, which maps to a third-party repository branch. </p>
   */
  branch: Branch | undefined;
}

/**
 * @public
 * <p> The request structure for the update domain association request. </p>
 */
export interface UpdateDomainAssociationRequest {
  /**
   * @public
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p> The name of the domain. </p>
   */
  domainName: string | undefined;

  /**
   * @public
   * <p> Enables the automated creation of subdomains for branches. </p>
   */
  enableAutoSubDomain?: boolean;

  /**
   * @public
   * <p> Describes the settings for the subdomain. </p>
   */
  subDomainSettings?: SubDomainSetting[];

  /**
   * @public
   * <p> Sets the branch patterns for automatic subdomain creation. </p>
   */
  autoSubDomainCreationPatterns?: string[];

  /**
   * @public
   * <p> The required AWS Identity and Access Management (IAM) service role for the Amazon
   *             Resource Name (ARN) for automatically creating subdomains. </p>
   */
  autoSubDomainIAMRole?: string;
}

/**
 * @public
 * <p> The result structure for the update domain association request. </p>
 */
export interface UpdateDomainAssociationResult {
  /**
   * @public
   * <p> Describes a domain association, which associates a custom domain with an Amplify app.
   *         </p>
   */
  domainAssociation: DomainAssociation | undefined;
}

/**
 * @public
 * <p> The request structure for the update webhook request. </p>
 */
export interface UpdateWebhookRequest {
  /**
   * @public
   * <p> The unique ID for a webhook. </p>
   */
  webhookId: string | undefined;

  /**
   * @public
   * <p> The name for a branch that is part of an Amplify app. </p>
   */
  branchName?: string;

  /**
   * @public
   * <p> The description for a webhook. </p>
   */
  description?: string;
}

/**
 * @public
 * <p> The result structure for the update webhook request. </p>
 */
export interface UpdateWebhookResult {
  /**
   * @public
   * <p> Describes a webhook that connects repository events to an Amplify app. </p>
   */
  webhook: Webhook | undefined;
}

/**
 * @internal
 */
export const AutoBranchCreationConfigFilterSensitiveLog = (obj: AutoBranchCreationConfig): any => ({
  ...obj,
  ...(obj.basicAuthCredentials && { basicAuthCredentials: SENSITIVE_STRING }),
  ...(obj.buildSpec && { buildSpec: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAppRequestFilterSensitiveLog = (obj: CreateAppRequest): any => ({
  ...obj,
  ...(obj.oauthToken && { oauthToken: SENSITIVE_STRING }),
  ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
  ...(obj.basicAuthCredentials && { basicAuthCredentials: SENSITIVE_STRING }),
  ...(obj.buildSpec && { buildSpec: SENSITIVE_STRING }),
  ...(obj.autoBranchCreationConfig && {
    autoBranchCreationConfig: AutoBranchCreationConfigFilterSensitiveLog(obj.autoBranchCreationConfig),
  }),
});

/**
 * @internal
 */
export const AppFilterSensitiveLog = (obj: App): any => ({
  ...obj,
  ...(obj.basicAuthCredentials && { basicAuthCredentials: SENSITIVE_STRING }),
  ...(obj.buildSpec && { buildSpec: SENSITIVE_STRING }),
  ...(obj.autoBranchCreationConfig && {
    autoBranchCreationConfig: AutoBranchCreationConfigFilterSensitiveLog(obj.autoBranchCreationConfig),
  }),
});

/**
 * @internal
 */
export const CreateAppResultFilterSensitiveLog = (obj: CreateAppResult): any => ({
  ...obj,
  ...(obj.app && { app: AppFilterSensitiveLog(obj.app) }),
});

/**
 * @internal
 */
export const CreateBranchRequestFilterSensitiveLog = (obj: CreateBranchRequest): any => ({
  ...obj,
  ...(obj.basicAuthCredentials && { basicAuthCredentials: SENSITIVE_STRING }),
  ...(obj.buildSpec && { buildSpec: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BranchFilterSensitiveLog = (obj: Branch): any => ({
  ...obj,
  ...(obj.basicAuthCredentials && { basicAuthCredentials: SENSITIVE_STRING }),
  ...(obj.buildSpec && { buildSpec: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateBranchResultFilterSensitiveLog = (obj: CreateBranchResult): any => ({
  ...obj,
  ...(obj.branch && { branch: BranchFilterSensitiveLog(obj.branch) }),
});

/**
 * @internal
 */
export const DeleteAppResultFilterSensitiveLog = (obj: DeleteAppResult): any => ({
  ...obj,
  ...(obj.app && { app: AppFilterSensitiveLog(obj.app) }),
});

/**
 * @internal
 */
export const DeleteBranchResultFilterSensitiveLog = (obj: DeleteBranchResult): any => ({
  ...obj,
  ...(obj.branch && { branch: BranchFilterSensitiveLog(obj.branch) }),
});

/**
 * @internal
 */
export const GetAppResultFilterSensitiveLog = (obj: GetAppResult): any => ({
  ...obj,
  ...(obj.app && { app: AppFilterSensitiveLog(obj.app) }),
});

/**
 * @internal
 */
export const GetBranchResultFilterSensitiveLog = (obj: GetBranchResult): any => ({
  ...obj,
  ...(obj.branch && { branch: BranchFilterSensitiveLog(obj.branch) }),
});

/**
 * @internal
 */
export const ListAppsResultFilterSensitiveLog = (obj: ListAppsResult): any => ({
  ...obj,
  ...(obj.apps && { apps: obj.apps.map((item) => AppFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListBranchesResultFilterSensitiveLog = (obj: ListBranchesResult): any => ({
  ...obj,
  ...(obj.branches && { branches: obj.branches.map((item) => BranchFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateAppRequestFilterSensitiveLog = (obj: UpdateAppRequest): any => ({
  ...obj,
  ...(obj.basicAuthCredentials && { basicAuthCredentials: SENSITIVE_STRING }),
  ...(obj.buildSpec && { buildSpec: SENSITIVE_STRING }),
  ...(obj.autoBranchCreationConfig && {
    autoBranchCreationConfig: AutoBranchCreationConfigFilterSensitiveLog(obj.autoBranchCreationConfig),
  }),
  ...(obj.oauthToken && { oauthToken: SENSITIVE_STRING }),
  ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateAppResultFilterSensitiveLog = (obj: UpdateAppResult): any => ({
  ...obj,
  ...(obj.app && { app: AppFilterSensitiveLog(obj.app) }),
});

/**
 * @internal
 */
export const UpdateBranchRequestFilterSensitiveLog = (obj: UpdateBranchRequest): any => ({
  ...obj,
  ...(obj.basicAuthCredentials && { basicAuthCredentials: SENSITIVE_STRING }),
  ...(obj.buildSpec && { buildSpec: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateBranchResultFilterSensitiveLog = (obj: UpdateBranchResult): any => ({
  ...obj,
  ...(obj.branch && { branch: BranchFilterSensitiveLog(obj.branch) }),
});
