// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { AmplifyServiceException as __BaseException } from "./AmplifyServiceException";

/**
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

export enum Stage {
  BETA = "BETA",
  DEVELOPMENT = "DEVELOPMENT",
  EXPERIMENTAL = "EXPERIMENTAL",
  PRODUCTION = "PRODUCTION",
  PULL_REQUEST = "PULL_REQUEST",
}

/**
 * <p> Describes the automated branch creation configuration. </p>
 */
export interface AutoBranchCreationConfig {
  /**
   * <p> Describes the current stage for the autocreated branch. </p>
   */
  stage?: Stage | string;

  /**
   * <p> The framework for the autocreated branch. </p>
   */
  framework?: string;

  /**
   * <p> Enables auto building for the autocreated branch. </p>
   */
  enableAutoBuild?: boolean;

  /**
   * <p> The environment variables for the autocreated branch. </p>
   */
  environmentVariables?: Record<string, string>;

  /**
   * <p> The basic authorization credentials for the autocreated branch. You must
   *             base64-encode the authorization credentials and provide them in the format
   *                 <code>user:password</code>.</p>
   */
  basicAuthCredentials?: string;

  /**
   * <p> Enables basic authorization for the autocreated branch. </p>
   */
  enableBasicAuth?: boolean;

  /**
   * <p>Enables performance mode for the branch.</p>
   *         <p>Performance mode optimizes for faster hosting performance by keeping content cached at
   *             the edge for a longer interval. When performance mode is enabled, hosting configuration
   *             or code changes can take up to 10 minutes to roll out. </p>
   */
  enablePerformanceMode?: boolean;

  /**
   * <p> The build specification (build spec) for the autocreated branch. </p>
   */
  buildSpec?: string;

  /**
   * <p> Enables pull request previews for the autocreated branch. </p>
   */
  enablePullRequestPreview?: boolean;

  /**
   * <p> The Amplify environment name for the pull request. </p>
   */
  pullRequestEnvironmentName?: string;
}

/**
 * <p> Describes a custom rewrite or redirect rule. </p>
 */
export interface CustomRule {
  /**
   * <p> The source pattern for a URL rewrite or redirect rule. </p>
   */
  source: string | undefined;

  /**
   * <p> The target pattern for a URL rewrite or redirect rule. </p>
   */
  target: string | undefined;

  /**
   * <p> The status code for a URL rewrite or redirect rule. </p>
   *
   *         <dl>
   *             <dt>200</dt>
   *             <dd>
   *                     <p>Represents a 200 rewrite rule.</p>
   *                 </dd>
   *             <dt>301</dt>
   *             <dd>
   *                     <p>Represents a 301 (moved pemanently) redirect rule. This and all future
   *                         requests should be directed to the target URL. </p>
   *                 </dd>
   *             <dt>302</dt>
   *             <dd>
   *                     <p>Represents a 302 temporary redirect rule.</p>
   *                 </dd>
   *             <dt>404</dt>
   *             <dd>
   *                     <p>Represents a 404 redirect rule.</p>
   *                 </dd>
   *             <dt>404-200</dt>
   *             <dd>
   *                     <p>Represents a 404 rewrite rule.</p>
   *                 </dd>
   *          </dl>
   */
  status?: string;

  /**
   * <p> The condition for a URL rewrite or redirect rule, such as a country code. </p>
   */
  condition?: string;
}

export enum Platform {
  WEB = "WEB",
  WEB_COMPUTE = "WEB_COMPUTE",
  WEB_DYNAMIC = "WEB_DYNAMIC",
}

/**
 * <p> The request structure used to create apps in Amplify. </p>
 */
export interface CreateAppRequest {
  /**
   * <p> The name for an Amplify app. </p>
   */
  name: string | undefined;

  /**
   * <p> The description for an Amplify app. </p>
   */
  description?: string;

  /**
   * <p> The repository for an Amplify app. </p>
   */
  repository?: string;

  /**
   * <p> The platform for the Amplify app. For a static app, set the platform type to <code>WEB</code>.
   *             For a dynamic server-side rendered (SSR) app, set the platform type to
   *             <code>WEB_COMPUTE</code>. For an app requiring Amplify Hosting's original SSR support only, set the platform type to
   *             <code>WEB_DYNAMIC</code>.</p>
   */
  platform?: Platform | string;

  /**
   * <p> The AWS Identity and Access Management (IAM) service role for an Amplify app. </p>
   */
  iamServiceRoleArn?: string;

  /**
   * <p>The OAuth token for a third-party source control system for an Amplify app. The OAuth
   *             token is used to create a webhook and a read-only deploy key using SSH cloning. The
   *             OAuth token is not stored.</p>
   *         <p>Use <code>oauthToken</code> for repository providers other than GitHub, such as
   *             Bitbucket or CodeCommit. To authorize access to GitHub as your repository provider, use
   *                 <code>accessToken</code>.</p>
   *         <p>You must specify either <code>oauthToken</code> or <code>accessToken</code> when you
   *             create a new app.</p>
   *         <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work
   *             with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub
   *             App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the
   *                 <i>Amplify User Guide</i> .</p>
   */
  oauthToken?: string;

  /**
   * <p>The personal access token for a GitHub repository for an Amplify app. The personal
   *             access token is used to authorize access to a GitHub repository using the Amplify GitHub
   *             App. The token is not stored.</p>
   *         <p>Use <code>accessToken</code> for GitHub repositories only. To authorize access to a
   *             repository provider such as Bitbucket or CodeCommit, use <code>oauthToken</code>.</p>
   *         <p>You must specify either <code>accessToken</code> or <code>oauthToken</code> when you
   *             create a new app.</p>
   *         <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work
   *             with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub
   *             App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the
   *                 <i>Amplify User Guide</i> .</p>
   */
  accessToken?: string;

  /**
   * <p> The environment variables map for an Amplify app. </p>
   */
  environmentVariables?: Record<string, string>;

  /**
   * <p> Enables the auto building of branches for an Amplify app. </p>
   */
  enableBranchAutoBuild?: boolean;

  /**
   * <p> Automatically disconnects a branch in the Amplify Console when you delete a branch
   *             from your Git repository. </p>
   */
  enableBranchAutoDeletion?: boolean;

  /**
   * <p> Enables basic authorization for an Amplify app. This will apply to all branches that
   *             are part of this app. </p>
   */
  enableBasicAuth?: boolean;

  /**
   * <p> The credentials for basic authorization for an Amplify app. You must base64-encode
   *             the authorization credentials and provide them in the format
   *             <code>user:password</code>.</p>
   */
  basicAuthCredentials?: string;

  /**
   * <p> The custom rewrite and redirect rules for an Amplify app. </p>
   */
  customRules?: CustomRule[];

  /**
   * <p> The tag for an Amplify app. </p>
   */
  tags?: Record<string, string>;

  /**
   * <p> The build specification (build spec) for an Amplify app. </p>
   */
  buildSpec?: string;

  /**
   * <p>The custom HTTP headers for an Amplify app.</p>
   */
  customHeaders?: string;

  /**
   * <p> Enables automated branch creation for an Amplify app. </p>
   */
  enableAutoBranchCreation?: boolean;

  /**
   * <p> The automated branch creation glob patterns for an Amplify app. </p>
   */
  autoBranchCreationPatterns?: string[];

  /**
   * <p> The automated branch creation configuration for an Amplify app. </p>
   */
  autoBranchCreationConfig?: AutoBranchCreationConfig;
}

/**
 * <p> Describes the information about a production branch for an Amplify app. </p>
 */
export interface ProductionBranch {
  /**
   * <p> The last deploy time of the production branch. </p>
   */
  lastDeployTime?: Date;

  /**
   * <p> The status of the production branch. </p>
   */
  status?: string;

  /**
   * <p> The thumbnail URL for the production branch. </p>
   */
  thumbnailUrl?: string;

  /**
   * <p> The branch name for the production branch. </p>
   */
  branchName?: string;
}

export enum RepositoryCloneMethod {
  SIGV4 = "SIGV4",
  SSH = "SSH",
  TOKEN = "TOKEN",
}

/**
 * <p> Represents the different branches of a repository for building, deploying, and
 *             hosting an Amplify app. </p>
 */
export interface App {
  /**
   * <p> The unique ID of the Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the Amplify app. </p>
   */
  appArn: string | undefined;

  /**
   * <p> The name for the Amplify app. </p>
   */
  name: string | undefined;

  /**
   * <p> The tag for the Amplify app. </p>
   */
  tags?: Record<string, string>;

  /**
   * <p> The description for the Amplify app. </p>
   */
  description: string | undefined;

  /**
   * <p> The Git repository for the Amplify app. </p>
   */
  repository: string | undefined;

  /**
   * <p> The platform for the Amplify app. For a static app, set the platform type to <code>WEB</code>.
   *             For a dynamic server-side rendered (SSR) app, set the platform type to
   *             <code>WEB_COMPUTE</code>. For an app requiring Amplify Hosting's original SSR support only, set the platform type to
   *             <code>WEB_DYNAMIC</code>.</p>
   */
  platform: Platform | string | undefined;

  /**
   * <p> Creates a date and time for the Amplify app. </p>
   */
  createTime: Date | undefined;

  /**
   * <p> Updates the date and time for the Amplify app. </p>
   */
  updateTime: Date | undefined;

  /**
   * <p> The AWS Identity and Access Management (IAM) service role for the Amazon Resource
   *             Name (ARN) of the Amplify app. </p>
   */
  iamServiceRoleArn?: string;

  /**
   * <p> The environment variables for the Amplify app. </p>
   */
  environmentVariables: Record<string, string> | undefined;

  /**
   * <p> The default domain for the Amplify app. </p>
   */
  defaultDomain: string | undefined;

  /**
   * <p> Enables the auto-building of branches for the Amplify app. </p>
   */
  enableBranchAutoBuild: boolean | undefined;

  /**
   * <p> Automatically disconnect a branch in the Amplify Console when you delete a branch
   *             from your Git repository. </p>
   */
  enableBranchAutoDeletion?: boolean;

  /**
   * <p> Enables basic authorization for the Amplify app's branches. </p>
   */
  enableBasicAuth: boolean | undefined;

  /**
   * <p> The basic authorization credentials for branches for the Amplify app. You must
   *             base64-encode the authorization credentials and provide them in the format
   *                 <code>user:password</code>.</p>
   */
  basicAuthCredentials?: string;

  /**
   * <p> Describes the custom redirect and rewrite rules for the Amplify app. </p>
   */
  customRules?: CustomRule[];

  /**
   * <p> Describes the information about a production branch of the Amplify app. </p>
   */
  productionBranch?: ProductionBranch;

  /**
   * <p> Describes the content of the build specification (build spec) for the Amplify app.
   *         </p>
   */
  buildSpec?: string;

  /**
   * <p>Describes the custom HTTP headers for the Amplify app.</p>
   */
  customHeaders?: string;

  /**
   * <p> Enables automated branch creation for the Amplify app. </p>
   */
  enableAutoBranchCreation?: boolean;

  /**
   * <p> Describes the automated branch creation glob patterns for the Amplify app. </p>
   */
  autoBranchCreationPatterns?: string[];

  /**
   * <p> Describes the automated branch creation configuration for the Amplify app. </p>
   */
  autoBranchCreationConfig?: AutoBranchCreationConfig;

  /**
   * <note>
   *             <p>This is for internal use.</p>
   *         </note>
   *         <p>The Amplify service uses this parameter to specify the authentication protocol to use to access
   *             the Git repository for an Amplify app. Amplify specifies <code>TOKEN</code> for a GitHub
   *             repository, <code>SIGV4</code> for an Amazon Web Services CodeCommit repository, and
   *                 <code>SSH</code> for GitLab and Bitbucket repositories.</p>
   */
  repositoryCloneMethod?: RepositoryCloneMethod | string;
}

export interface CreateAppResult {
  /**
   * <p> Represents the different branches of a repository for building, deploying, and
   *             hosting an Amplify app. </p>
   */
  app: App | undefined;
}

/**
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
 * <p> The request structure for the backend environment create request. </p>
 */
export interface CreateBackendEnvironmentRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The name for the backend environment. </p>
   */
  environmentName: string | undefined;

  /**
   * <p> The AWS CloudFormation stack name of a backend environment. </p>
   */
  stackName?: string;

  /**
   * <p> The name of deployment artifacts. </p>
   */
  deploymentArtifacts?: string;
}

/**
 * <p> Describes the backend environment for an Amplify app. </p>
 */
export interface BackendEnvironment {
  /**
   * <p> The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify
   *             app. </p>
   */
  backendEnvironmentArn: string | undefined;

  /**
   * <p> The name for a backend environment that is part of an Amplify app. </p>
   */
  environmentName: string | undefined;

  /**
   * <p> The AWS CloudFormation stack name of a backend environment. </p>
   */
  stackName?: string;

  /**
   * <p> The name of deployment artifacts. </p>
   */
  deploymentArtifacts?: string;

  /**
   * <p> The creation date and time for a backend environment that is part of an Amplify app.
   *         </p>
   */
  createTime: Date | undefined;

  /**
   * <p> The last updated date and time for a backend environment that is part of an Amplify
   *             app. </p>
   */
  updateTime: Date | undefined;
}

/**
 * <p> The result structure for the create backend environment request. </p>
 */
export interface CreateBackendEnvironmentResult {
  /**
   * <p> Describes the backend environment for an Amplify app. </p>
   */
  backendEnvironment: BackendEnvironment | undefined;
}

/**
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
 * <p> The request structure for the create branch request. </p>
 */
export interface CreateBranchRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The name for the branch. </p>
   */
  branchName: string | undefined;

  /**
   * <p> The description for the branch. </p>
   */
  description?: string;

  /**
   * <p> Describes the current stage for the branch. </p>
   */
  stage?: Stage | string;

  /**
   * <p> The framework for the branch. </p>
   */
  framework?: string;

  /**
   * <p> Enables notifications for the branch. </p>
   */
  enableNotification?: boolean;

  /**
   * <p> Enables auto building for the branch. </p>
   */
  enableAutoBuild?: boolean;

  /**
   * <p> The environment variables for the branch. </p>
   */
  environmentVariables?: Record<string, string>;

  /**
   * <p> The basic authorization credentials for the branch. You must base64-encode the
   *             authorization credentials and provide them in the format
   *             <code>user:password</code>.</p>
   */
  basicAuthCredentials?: string;

  /**
   * <p> Enables basic authorization for the branch. </p>
   */
  enableBasicAuth?: boolean;

  /**
   * <p>Enables performance mode for the branch.</p>
   *         <p>Performance mode optimizes for faster hosting performance by keeping content cached at
   *             the edge for a longer interval. When performance mode is enabled, hosting configuration
   *             or code changes can take up to 10 minutes to roll out. </p>
   */
  enablePerformanceMode?: boolean;

  /**
   * <p> The tag for the branch. </p>
   */
  tags?: Record<string, string>;

  /**
   * <p> The build specification (build spec) for the branch. </p>
   */
  buildSpec?: string;

  /**
   * <p> The content Time To Live (TTL) for the website in seconds. </p>
   */
  ttl?: string;

  /**
   * <p> The display name for a branch. This is used as the default domain prefix. </p>
   */
  displayName?: string;

  /**
   * <p> Enables pull request previews for this branch. </p>
   */
  enablePullRequestPreview?: boolean;

  /**
   * <p> The Amplify environment name for the pull request. </p>
   */
  pullRequestEnvironmentName?: string;

  /**
   * <p> The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify
   *             app. </p>
   */
  backendEnvironmentArn?: string;
}

/**
 * <p> The branch for an Amplify app, which maps to a third-party repository branch. </p>
 */
export interface Branch {
  /**
   * <p> The Amazon Resource Name (ARN) for a branch that is part of an Amplify app. </p>
   */
  branchArn: string | undefined;

  /**
   * <p> The name for the branch that is part of an Amplify app. </p>
   */
  branchName: string | undefined;

  /**
   * <p> The description for the branch that is part of an Amplify app. </p>
   */
  description: string | undefined;

  /**
   * <p> The tag for the branch of an Amplify app. </p>
   */
  tags?: Record<string, string>;

  /**
   * <p> The current stage for the branch that is part of an Amplify app. </p>
   */
  stage: Stage | string | undefined;

  /**
   * <p> The display name for the branch. This is used as the default domain prefix. </p>
   */
  displayName: string | undefined;

  /**
   * <p> Enables notifications for a branch that is part of an Amplify app. </p>
   */
  enableNotification: boolean | undefined;

  /**
   * <p> The creation date and time for a branch that is part of an Amplify app. </p>
   */
  createTime: Date | undefined;

  /**
   * <p> The last updated date and time for a branch that is part of an Amplify app. </p>
   */
  updateTime: Date | undefined;

  /**
   * <p> The environment variables specific to a branch of an Amplify app. </p>
   */
  environmentVariables: Record<string, string> | undefined;

  /**
   * <p> Enables auto-building on push for a branch of an Amplify app. </p>
   */
  enableAutoBuild: boolean | undefined;

  /**
   * <p> The custom domains for a branch of an Amplify app. </p>
   */
  customDomains: string[] | undefined;

  /**
   * <p> The framework for a branch of an Amplify app. </p>
   */
  framework: string | undefined;

  /**
   * <p> The ID of the active job for a branch of an Amplify app. </p>
   */
  activeJobId: string | undefined;

  /**
   * <p> The total number of jobs that are part of an Amplify app. </p>
   */
  totalNumberOfJobs: string | undefined;

  /**
   * <p> Enables basic authorization for a branch of an Amplify app. </p>
   */
  enableBasicAuth: boolean | undefined;

  /**
   * <p>Enables performance mode for the branch.</p>
   *         <p>Performance mode optimizes for faster hosting performance by keeping content cached at
   *             the edge for a longer interval. When performance mode is enabled, hosting configuration
   *             or code changes can take up to 10 minutes to roll out. </p>
   */
  enablePerformanceMode?: boolean;

  /**
   * <p> The thumbnail URL for the branch of an Amplify app. </p>
   */
  thumbnailUrl?: string;

  /**
   * <p> The basic authorization credentials for a branch of an Amplify app. You must
   *             base64-encode the authorization credentials and provide them in the format
   *                 <code>user:password</code>.</p>
   */
  basicAuthCredentials?: string;

  /**
   * <p> The build specification (build spec) content for the branch of an Amplify app.
   *         </p>
   */
  buildSpec?: string;

  /**
   * <p> The content Time to Live (TTL) for the website in seconds. </p>
   */
  ttl: string | undefined;

  /**
   * <p> A list of custom resources that are linked to this branch. </p>
   */
  associatedResources?: string[];

  /**
   * <p> Enables pull request previews for the branch. </p>
   */
  enablePullRequestPreview: boolean | undefined;

  /**
   * <p> The Amplify environment name for the pull request. </p>
   */
  pullRequestEnvironmentName?: string;

  /**
   * <p> The destination branch if the branch is a pull request branch. </p>
   */
  destinationBranch?: string;

  /**
   * <p> The source branch if the branch is a pull request branch. </p>
   */
  sourceBranch?: string;

  /**
   * <p> The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify
   *             app. </p>
   */
  backendEnvironmentArn?: string;
}

/**
 * <p> The result structure for create branch request. </p>
 */
export interface CreateBranchResult {
  /**
   * <p> Describes the branch for an Amplify app, which maps to a third-party repository
   *             branch. </p>
   */
  branch: Branch | undefined;
}

/**
 * <p> The request structure for the create a new deployment request. </p>
 */
export interface CreateDeploymentRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The name for the branch, for the job. </p>
   */
  branchName: string | undefined;

  /**
   * <p> An optional file map that contains the file name as the key and the file content md5
   *             hash as the value. If this argument is provided, the service will generate a unique
   *             upload URL per file. Otherwise, the service will only generate a single upload URL for
   *             the zipped files. </p>
   */
  fileMap?: Record<string, string>;
}

/**
 * <p> The result structure for the create a new deployment request. </p>
 */
export interface CreateDeploymentResult {
  /**
   * <p> The job ID for this deployment. will supply to start deployment api. </p>
   */
  jobId?: string;

  /**
   * <p> When the <code>fileMap</code> argument is provided in the request,
   *                 <code>fileUploadUrls</code> will contain a map of file names to upload URLs. </p>
   */
  fileUploadUrls: Record<string, string> | undefined;

  /**
   * <p> When the <code>fileMap</code> argument is not provided in the request, this
   *                 <code>zipUploadUrl</code> is returned. </p>
   */
  zipUploadUrl: string | undefined;
}

/**
 * <p> Describes the settings for the subdomain. </p>
 */
export interface SubDomainSetting {
  /**
   * <p> The prefix setting for the subdomain. </p>
   */
  prefix: string | undefined;

  /**
   * <p> The branch name setting for the subdomain. </p>
   */
  branchName: string | undefined;
}

/**
 * <p> The request structure for the create domain association request. </p>
 */
export interface CreateDomainAssociationRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The domain name for the domain association. </p>
   */
  domainName: string | undefined;

  /**
   * <p> Enables the automated creation of subdomains for branches. </p>
   */
  enableAutoSubDomain?: boolean;

  /**
   * <p> The setting for the subdomain. </p>
   */
  subDomainSettings: SubDomainSetting[] | undefined;

  /**
   * <p> Sets the branch patterns for automatic subdomain creation. </p>
   */
  autoSubDomainCreationPatterns?: string[];

  /**
   * <p> The required AWS Identity and Access Management (IAM) service role for the Amazon
   *             Resource Name (ARN) for automatically creating subdomains. </p>
   */
  autoSubDomainIAMRole?: string;
}

export enum DomainStatus {
  AVAILABLE = "AVAILABLE",
  CREATING = "CREATING",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING_DEPLOYMENT = "PENDING_DEPLOYMENT",
  PENDING_VERIFICATION = "PENDING_VERIFICATION",
  REQUESTING_CERTIFICATE = "REQUESTING_CERTIFICATE",
  UPDATING = "UPDATING",
}

/**
 * <p> The subdomain for the domain association. </p>
 */
export interface SubDomain {
  /**
   * <p> Describes the settings for the subdomain. </p>
   */
  subDomainSetting: SubDomainSetting | undefined;

  /**
   * <p> The verified status of the subdomain </p>
   */
  verified: boolean | undefined;

  /**
   * <p> The DNS record for the subdomain. </p>
   */
  dnsRecord: string | undefined;
}

/**
 * <p> Describes a domain association that associates a custom domain with an Amplify app.
 *         </p>
 */
export interface DomainAssociation {
  /**
   * <p> The Amazon Resource Name (ARN) for the domain association. </p>
   */
  domainAssociationArn: string | undefined;

  /**
   * <p> The name of the domain. </p>
   */
  domainName: string | undefined;

  /**
   * <p> Enables the automated creation of subdomains for branches. </p>
   */
  enableAutoSubDomain: boolean | undefined;

  /**
   * <p> Sets branch patterns for automatic subdomain creation. </p>
   */
  autoSubDomainCreationPatterns?: string[];

  /**
   * <p> The required AWS Identity and Access Management (IAM) service role for the Amazon
   *             Resource Name (ARN) for automatically creating subdomains. </p>
   */
  autoSubDomainIAMRole?: string;

  /**
   * <p> The current status of the domain association. </p>
   */
  domainStatus: DomainStatus | string | undefined;

  /**
   * <p> The reason for the current status of the domain association. </p>
   */
  statusReason: string | undefined;

  /**
   * <p> The DNS record for certificate verification. </p>
   */
  certificateVerificationDNSRecord?: string;

  /**
   * <p> The subdomains for the domain association. </p>
   */
  subDomains: SubDomain[] | undefined;
}

/**
 * <p> The result structure for the create domain association request. </p>
 */
export interface CreateDomainAssociationResult {
  /**
   * <p> Describes the structure of a domain association, which associates a custom domain
   *             with an Amplify app. </p>
   */
  domainAssociation: DomainAssociation | undefined;
}

/**
 * <p> The request structure for the create webhook request. </p>
 */
export interface CreateWebhookRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The name for a branch that is part of an Amplify app. </p>
   */
  branchName: string | undefined;

  /**
   * <p> The description for a webhook. </p>
   */
  description?: string;
}

/**
 * <p> Describes a webhook that connects repository events to an Amplify app. </p>
 */
export interface Webhook {
  /**
   * <p> The Amazon Resource Name (ARN) for the webhook. </p>
   */
  webhookArn: string | undefined;

  /**
   * <p> The ID of the webhook. </p>
   */
  webhookId: string | undefined;

  /**
   * <p> The URL of the webhook. </p>
   */
  webhookUrl: string | undefined;

  /**
   * <p> The name for a branch that is part of an Amplify app. </p>
   */
  branchName: string | undefined;

  /**
   * <p> The description for a webhook. </p>
   */
  description: string | undefined;

  /**
   * <p> The create date and time for a webhook. </p>
   */
  createTime: Date | undefined;

  /**
   * <p> Updates the date and time for a webhook. </p>
   */
  updateTime: Date | undefined;
}

/**
 * <p> The result structure for the create webhook request. </p>
 */
export interface CreateWebhookResult {
  /**
   * <p> Describes a webhook that connects repository events to an Amplify app. </p>
   */
  webhook: Webhook | undefined;
}

/**
 * <p> Describes the request structure for the delete app request. </p>
 */
export interface DeleteAppRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
}

/**
 * <p> The result structure for the delete app request. </p>
 */
export interface DeleteAppResult {
  /**
   * <p> Represents the different branches of a repository for building, deploying, and
   *             hosting an Amplify app. </p>
   */
  app: App | undefined;
}

/**
 * <p> The request structure for the delete backend environment request. </p>
 */
export interface DeleteBackendEnvironmentRequest {
  /**
   * <p> The unique ID of an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The name of a backend environment of an Amplify app. </p>
   */
  environmentName: string | undefined;
}

/**
 * <p> The result structure of the delete backend environment result. </p>
 */
export interface DeleteBackendEnvironmentResult {
  /**
   * <p> Describes the backend environment for an Amplify app. </p>
   */
  backendEnvironment: BackendEnvironment | undefined;
}

/**
 * <p> The request structure for the delete branch request. </p>
 */
export interface DeleteBranchRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The name for the branch. </p>
   */
  branchName: string | undefined;
}

/**
 * <p> The result structure for the delete branch request. </p>
 */
export interface DeleteBranchResult {
  /**
   * <p> The branch for an Amplify app, which maps to a third-party repository branch. </p>
   */
  branch: Branch | undefined;
}

/**
 * <p> The request structure for the delete domain association request. </p>
 */
export interface DeleteDomainAssociationRequest {
  /**
   * <p> The unique id for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The name of the domain. </p>
   */
  domainName: string | undefined;
}

export interface DeleteDomainAssociationResult {
  /**
   * <p> Describes a domain association that associates a custom domain with an Amplify app.
   *         </p>
   */
  domainAssociation: DomainAssociation | undefined;
}

/**
 * <p> The request structure for the delete job request. </p>
 */
export interface DeleteJobRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The name for the branch, for the job. </p>
   */
  branchName: string | undefined;

  /**
   * <p> The unique ID for the job. </p>
   */
  jobId: string | undefined;
}

export enum JobType {
  MANUAL = "MANUAL",
  RELEASE = "RELEASE",
  RETRY = "RETRY",
  WEB_HOOK = "WEB_HOOK",
}

export enum JobStatus {
  CANCELLED = "CANCELLED",
  CANCELLING = "CANCELLING",
  FAILED = "FAILED",
  PENDING = "PENDING",
  PROVISIONING = "PROVISIONING",
  RUNNING = "RUNNING",
  SUCCEED = "SUCCEED",
}

/**
 * <p> Describes the summary for an execution job for an Amplify app. </p>
 */
export interface JobSummary {
  /**
   * <p> The Amazon Resource Name (ARN) for the job. </p>
   */
  jobArn: string | undefined;

  /**
   * <p> The unique ID for the job. </p>
   */
  jobId: string | undefined;

  /**
   * <p> The commit ID from a third-party repository provider for the job. </p>
   */
  commitId: string | undefined;

  /**
   * <p> The commit message from a third-party repository provider for the job. </p>
   */
  commitMessage: string | undefined;

  /**
   * <p> The commit date and time for the job. </p>
   */
  commitTime: Date | undefined;

  /**
   * <p> The start date and time for the job. </p>
   */
  startTime: Date | undefined;

  /**
   * <p> The current status for the job. </p>
   */
  status: JobStatus | string | undefined;

  /**
   * <p> The end date and time for the job. </p>
   */
  endTime?: Date;

  /**
   * <p> The type for the job. If the value is <code>RELEASE</code>, the job was manually
   *             released from its source by using the <code>StartJob</code> API. If the value is
   *                 <code>RETRY</code>, the job was manually retried using the <code>StartJob</code>
   *             API. If the value is <code>WEB_HOOK</code>, the job was automatically triggered by
   *             webhooks. </p>
   */
  jobType: JobType | string | undefined;
}

/**
 * <p> The result structure for the delete job request. </p>
 */
export interface DeleteJobResult {
  /**
   * <p> Describes the summary for an execution job for an Amplify app. </p>
   */
  jobSummary: JobSummary | undefined;
}

/**
 * <p> The request structure for the delete webhook request. </p>
 */
export interface DeleteWebhookRequest {
  /**
   * <p> The unique ID for a webhook. </p>
   */
  webhookId: string | undefined;
}

/**
 * <p> The result structure for the delete webhook request. </p>
 */
export interface DeleteWebhookResult {
  /**
   * <p> Describes a webhook that connects repository events to an Amplify app. </p>
   */
  webhook: Webhook | undefined;
}

/**
 * <p> The request structure for the generate access logs request. </p>
 */
export interface GenerateAccessLogsRequest {
  /**
   * <p> The time at which the logs should start. The time range specified is inclusive of the
   *             start time. </p>
   */
  startTime?: Date;

  /**
   * <p> The time at which the logs should end. The time range specified is inclusive of the
   *             end time. </p>
   */
  endTime?: Date;

  /**
   * <p> The name of the domain. </p>
   */
  domainName: string | undefined;

  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
}

/**
 * <p> The result structure for the generate access logs request. </p>
 */
export interface GenerateAccessLogsResult {
  /**
   * <p> The pre-signed URL for the requested access logs. </p>
   */
  logUrl?: string;
}

/**
 * <p> The request structure for the get app request. </p>
 */
export interface GetAppRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
}

export interface GetAppResult {
  /**
   * <p> Represents the different branches of a repository for building, deploying, and
   *             hosting an Amplify app. </p>
   */
  app: App | undefined;
}

/**
 * <p> Returns the request structure for the get artifact request. </p>
 */
export interface GetArtifactUrlRequest {
  /**
   * <p> The unique ID for an artifact. </p>
   */
  artifactId: string | undefined;
}

/**
 * <p> Returns the result structure for the get artifact request. </p>
 */
export interface GetArtifactUrlResult {
  /**
   * <p> The unique ID for an artifact. </p>
   */
  artifactId: string | undefined;

  /**
   * <p> The presigned URL for the artifact. </p>
   */
  artifactUrl: string | undefined;
}

/**
 * <p> The request structure for the get backend environment request. </p>
 */
export interface GetBackendEnvironmentRequest {
  /**
   * <p> The unique id for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The name for the backend environment. </p>
   */
  environmentName: string | undefined;
}

/**
 * <p> The result structure for the get backend environment result. </p>
 */
export interface GetBackendEnvironmentResult {
  /**
   * <p> Describes the backend environment for an Amplify app. </p>
   */
  backendEnvironment: BackendEnvironment | undefined;
}

/**
 * <p> The request structure for the get branch request. </p>
 */
export interface GetBranchRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The name for the branch. </p>
   */
  branchName: string | undefined;
}

export interface GetBranchResult {
  /**
   * <p> The branch for an Amplify app, which maps to a third-party repository branch. </p>
   */
  branch: Branch | undefined;
}

/**
 * <p> The request structure for the get domain association request. </p>
 */
export interface GetDomainAssociationRequest {
  /**
   * <p> The unique id for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The name of the domain. </p>
   */
  domainName: string | undefined;
}

/**
 * <p> The result structure for the get domain association request. </p>
 */
export interface GetDomainAssociationResult {
  /**
   * <p> Describes the structure of a domain association, which associates a custom domain
   *             with an Amplify app. </p>
   */
  domainAssociation: DomainAssociation | undefined;
}

/**
 * <p> The request structure for the get job request. </p>
 */
export interface GetJobRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The branch name for the job. </p>
   */
  branchName: string | undefined;

  /**
   * <p> The unique ID for the job. </p>
   */
  jobId: string | undefined;
}

/**
 * <p> Describes an execution step, for an execution job, for an Amplify app. </p>
 */
export interface Step {
  /**
   * <p> The name of the execution step. </p>
   */
  stepName: string | undefined;

  /**
   * <p> The start date and time of the execution step. </p>
   */
  startTime: Date | undefined;

  /**
   * <p> The status of the execution step. </p>
   */
  status: JobStatus | string | undefined;

  /**
   * <p> The end date and time of the execution step. </p>
   */
  endTime: Date | undefined;

  /**
   * <p> The URL to the logs for the execution step. </p>
   */
  logUrl?: string;

  /**
   * <p> The URL to the artifact for the execution step. </p>
   */
  artifactsUrl?: string;

  /**
   * <p> The URL to the test artifact for the execution step. </p>
   */
  testArtifactsUrl?: string;

  /**
   * <p> The URL to the test configuration for the execution step. </p>
   */
  testConfigUrl?: string;

  /**
   * <p> The list of screenshot URLs for the execution step, if relevant. </p>
   */
  screenshots?: Record<string, string>;

  /**
   * <p> The reason for the current step status. </p>
   */
  statusReason?: string;

  /**
   * <p> The context for the current step. Includes a build image if the step is build.
   *         </p>
   */
  context?: string;
}

/**
 * <p> Describes an execution job for an Amplify app. </p>
 */
export interface Job {
  /**
   * <p> Describes the summary for an execution job for an Amplify app. </p>
   */
  summary: JobSummary | undefined;

  /**
   * <p> The execution steps for an execution job, for an Amplify app. </p>
   */
  steps: Step[] | undefined;
}

export interface GetJobResult {
  /**
   * <p> Describes an execution job for an Amplify app. </p>
   */
  job: Job | undefined;
}

/**
 * <p> The request structure for the get webhook request. </p>
 */
export interface GetWebhookRequest {
  /**
   * <p> The unique ID for a webhook. </p>
   */
  webhookId: string | undefined;
}

/**
 * <p> The result structure for the get webhook request. </p>
 */
export interface GetWebhookResult {
  /**
   * <p> Describes the structure of a webhook. </p>
   */
  webhook: Webhook | undefined;
}

/**
 * <p> The request structure for the list apps request. </p>
 */
export interface ListAppsRequest {
  /**
   * <p> A pagination token. If non-null, the pagination token is returned in a result. Pass
   *             its value in another request to retrieve more entries. </p>
   */
  nextToken?: string;

  /**
   * <p> The maximum number of records to list in a single response. </p>
   */
  maxResults?: number;
}

/**
 * <p> The result structure for an Amplify app list request. </p>
 */
export interface ListAppsResult {
  /**
   * <p> A list of Amplify apps. </p>
   */
  apps: App[] | undefined;

  /**
   * <p> A pagination token. Set to null to start listing apps from start. If non-null, the
   *             pagination token is returned in a result. Pass its value in here to list more projects.
   *         </p>
   */
  nextToken?: string;
}

/**
 * <p> Describes the request structure for the list artifacts request. </p>
 */
export interface ListArtifactsRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The name of a branch that is part of an Amplify app. </p>
   */
  branchName: string | undefined;

  /**
   * <p> The unique ID for a job. </p>
   */
  jobId: string | undefined;

  /**
   * <p> A pagination token. Set to null to start listing artifacts from start. If a non-null
   *             pagination token is returned in a result, pass its value in here to list more artifacts.
   *         </p>
   */
  nextToken?: string;

  /**
   * <p> The maximum number of records to list in a single response. </p>
   */
  maxResults?: number;
}

/**
 * <p> Describes an artifact. </p>
 */
export interface Artifact {
  /**
   * <p> The file name for the artifact. </p>
   */
  artifactFileName: string | undefined;

  /**
   * <p> The unique ID for the artifact. </p>
   */
  artifactId: string | undefined;
}

/**
 * <p> The result structure for the list artifacts request. </p>
 */
export interface ListArtifactsResult {
  /**
   * <p> A list of artifacts. </p>
   */
  artifacts: Artifact[] | undefined;

  /**
   * <p> A pagination token. If a non-null pagination token is returned in a result, pass its
   *             value in another request to retrieve more entries. </p>
   */
  nextToken?: string;
}

/**
 * <p> The request structure for the list backend environments request. </p>
 */
export interface ListBackendEnvironmentsRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The name of the backend environment </p>
   */
  environmentName?: string;

  /**
   * <p> A pagination token. Set to null to start listing backend environments from the start.
   *             If a non-null pagination token is returned in a result, pass its value in here to list
   *             more backend environments. </p>
   */
  nextToken?: string;

  /**
   * <p> The maximum number of records to list in a single response. </p>
   */
  maxResults?: number;
}

/**
 * <p> The result structure for the list backend environments result. </p>
 */
export interface ListBackendEnvironmentsResult {
  /**
   * <p> The list of backend environments for an Amplify app. </p>
   */
  backendEnvironments: BackendEnvironment[] | undefined;

  /**
   * <p> A pagination token. If a non-null pagination token is returned in a result, pass its
   *             value in another request to retrieve more entries. </p>
   */
  nextToken?: string;
}

/**
 * <p> The request structure for the list branches request. </p>
 */
export interface ListBranchesRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> A pagination token. Set to null to start listing branches from the start. If a
   *             non-null pagination token is returned in a result, pass its value in here to list more
   *             branches. </p>
   */
  nextToken?: string;

  /**
   * <p> The maximum number of records to list in a single response. </p>
   */
  maxResults?: number;
}

/**
 * <p> The result structure for the list branches request. </p>
 */
export interface ListBranchesResult {
  /**
   * <p> A list of branches for an Amplify app. </p>
   */
  branches: Branch[] | undefined;

  /**
   * <p> A pagination token. If a non-null pagination token is returned in a result, pass its
   *             value in another request to retrieve more entries. </p>
   */
  nextToken?: string;
}

/**
 * <p> The request structure for the list domain associations request. </p>
 */
export interface ListDomainAssociationsRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> A pagination token. Set to null to start listing apps from the start. If non-null, a
   *             pagination token is returned in a result. Pass its value in here to list more projects.
   *         </p>
   */
  nextToken?: string;

  /**
   * <p> The maximum number of records to list in a single response. </p>
   */
  maxResults?: number;
}

/**
 * <p> The result structure for the list domain association request. </p>
 */
export interface ListDomainAssociationsResult {
  /**
   * <p> A list of domain associations. </p>
   */
  domainAssociations: DomainAssociation[] | undefined;

  /**
   * <p> A pagination token. If non-null, a pagination token is returned in a result. Pass its
   *             value in another request to retrieve more entries. </p>
   */
  nextToken?: string;
}

/**
 * <p> The request structure for the list jobs request. </p>
 */
export interface ListJobsRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The name for a branch. </p>
   */
  branchName: string | undefined;

  /**
   * <p> A pagination token. Set to null to start listing steps from the start. If a non-null
   *             pagination token is returned in a result, pass its value in here to list more steps.
   *         </p>
   */
  nextToken?: string;

  /**
   * <p> The maximum number of records to list in a single response. </p>
   */
  maxResults?: number;
}

/**
 * <p> The maximum number of records to list in a single response. </p>
 */
export interface ListJobsResult {
  /**
   * <p> The result structure for the list job result request. </p>
   */
  jobSummaries: JobSummary[] | undefined;

  /**
   * <p> A pagination token. If non-null the pagination token is returned in a result. Pass
   *             its value in another request to retrieve more entries. </p>
   */
  nextToken?: string;
}

/**
 * <p> The request structure to use to list tags for a resource. </p>
 */
export interface ListTagsForResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) to use to list tags. </p>
   */
  resourceArn: string | undefined;
}

/**
 * <p> The response for the list tags for resource request. </p>
 */
export interface ListTagsForResourceResponse {
  /**
   * <p> A list of tags for the specified The Amazon Resource Name (ARN). </p>
   */
  tags?: Record<string, string>;
}

/**
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
 * <p> The request structure for the list webhooks request. </p>
 */
export interface ListWebhooksRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> A pagination token. Set to null to start listing webhooks from the start. If
   *             non-null,the pagination token is returned in a result. Pass its value in here to list
   *             more webhooks. </p>
   */
  nextToken?: string;

  /**
   * <p> The maximum number of records to list in a single response. </p>
   */
  maxResults?: number;
}

/**
 * <p> The result structure for the list webhooks request. </p>
 */
export interface ListWebhooksResult {
  /**
   * <p> A list of webhooks. </p>
   */
  webhooks: Webhook[] | undefined;

  /**
   * <p> A pagination token. If non-null, the pagination token is returned in a result. Pass
   *             its value in another request to retrieve more entries. </p>
   */
  nextToken?: string;
}

/**
 * <p> The request structure for the start a deployment request. </p>
 */
export interface StartDeploymentRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The name for the branch, for the job. </p>
   */
  branchName: string | undefined;

  /**
   * <p> The job ID for this deployment, generated by the create deployment request. </p>
   */
  jobId?: string;

  /**
   * <p> The source URL for this deployment, used when calling start deployment without create
   *             deployment. The source URL can be any HTTP GET URL that is publicly accessible and
   *             downloads a single .zip file. </p>
   */
  sourceUrl?: string;
}

/**
 * <p> The result structure for the start a deployment request. </p>
 */
export interface StartDeploymentResult {
  /**
   * <p> The summary for the job. </p>
   */
  jobSummary: JobSummary | undefined;
}

/**
 * <p> The request structure for the start job request. </p>
 */
export interface StartJobRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The branch name for the job. </p>
   */
  branchName: string | undefined;

  /**
   * <p> The unique ID for an existing job. This is required if the value of
   *                 <code>jobType</code> is <code>RETRY</code>. </p>
   */
  jobId?: string;

  /**
   * <p> Describes the type for the job. The job type <code>RELEASE</code> starts a new job
   *             with the latest change from the specified branch. This value is available only for apps
   *             that are connected to a repository. The job type <code>RETRY</code> retries an existing
   *             job. If the job type value is <code>RETRY</code>, the <code>jobId</code> is also
   *             required. </p>
   */
  jobType: JobType | string | undefined;

  /**
   * <p> A descriptive reason for starting this job. </p>
   */
  jobReason?: string;

  /**
   * <p> The commit ID from a third-party repository provider for the job. </p>
   */
  commitId?: string;

  /**
   * <p> The commit message from a third-party repository provider for the job. </p>
   */
  commitMessage?: string;

  /**
   * <p> The commit date and time for the job. </p>
   */
  commitTime?: Date;
}

/**
 * <p> The result structure for the run job request. </p>
 */
export interface StartJobResult {
  /**
   * <p> The summary for the job. </p>
   */
  jobSummary: JobSummary | undefined;
}

/**
 * <p> The request structure for the stop job request. </p>
 */
export interface StopJobRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The name for the branch, for the job. </p>
   */
  branchName: string | undefined;

  /**
   * <p> The unique id for the job. </p>
   */
  jobId: string | undefined;
}

/**
 * <p> The result structure for the stop job request. </p>
 */
export interface StopJobResult {
  /**
   * <p> The summary for the job. </p>
   */
  jobSummary: JobSummary | undefined;
}

/**
 * <p> The request structure to tag a resource with a tag key and value. </p>
 */
export interface TagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) to use to tag a resource. </p>
   */
  resourceArn: string | undefined;

  /**
   * <p> The tags used to tag the resource. </p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * <p> The response for the tag resource request. </p>
 */
export interface TagResourceResponse {}

/**
 * <p> The request structure for the untag resource request. </p>
 */
export interface UntagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) to use to untag a resource. </p>
   */
  resourceArn: string | undefined;

  /**
   * <p> The tag keys to use to untag a resource. </p>
   */
  tagKeys: string[] | undefined;
}

/**
 * <p> The response for the untag resource request. </p>
 */
export interface UntagResourceResponse {}

/**
 * <p> The request structure for the update app request. </p>
 */
export interface UpdateAppRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The name for an Amplify app. </p>
   */
  name?: string;

  /**
   * <p> The description for an Amplify app. </p>
   */
  description?: string;

  /**
   * <p> The platform for the Amplify app. For a static app, set the platform type to <code>WEB</code>.
   *             For a dynamic server-side rendered (SSR) app, set the platform type to
   *             <code>WEB_COMPUTE</code>. For an app requiring Amplify Hosting's original SSR support only, set the platform type to
   *             <code>WEB_DYNAMIC</code>.</p>
   */
  platform?: Platform | string;

  /**
   * <p> The AWS Identity and Access Management (IAM) service role for an Amplify app. </p>
   */
  iamServiceRoleArn?: string;

  /**
   * <p> The environment variables for an Amplify app. </p>
   */
  environmentVariables?: Record<string, string>;

  /**
   * <p> Enables branch auto-building for an Amplify app. </p>
   */
  enableBranchAutoBuild?: boolean;

  /**
   * <p> Automatically disconnects a branch in the Amplify Console when you delete a branch
   *             from your Git repository. </p>
   */
  enableBranchAutoDeletion?: boolean;

  /**
   * <p> Enables basic authorization for an Amplify app. </p>
   */
  enableBasicAuth?: boolean;

  /**
   * <p> The basic authorization credentials for an Amplify app. You must base64-encode the
   *             authorization credentials and provide them in the format
   *             <code>user:password</code>.</p>
   */
  basicAuthCredentials?: string;

  /**
   * <p> The custom redirect and rewrite rules for an Amplify app. </p>
   */
  customRules?: CustomRule[];

  /**
   * <p> The build specification (build spec) for an Amplify app. </p>
   */
  buildSpec?: string;

  /**
   * <p>The custom HTTP headers for an Amplify app.</p>
   */
  customHeaders?: string;

  /**
   * <p> Enables automated branch creation for an Amplify app. </p>
   */
  enableAutoBranchCreation?: boolean;

  /**
   * <p> Describes the automated branch creation glob patterns for an Amplify app. </p>
   */
  autoBranchCreationPatterns?: string[];

  /**
   * <p> The automated branch creation configuration for an Amplify app. </p>
   */
  autoBranchCreationConfig?: AutoBranchCreationConfig;

  /**
   * <p> The name of the repository for an Amplify app </p>
   */
  repository?: string;

  /**
   * <p>The OAuth token for a third-party source control system for an Amplify app. The OAuth
   *             token is used to create a webhook and a read-only deploy key using SSH cloning. The
   *             OAuth token is not stored.</p>
   *         <p>Use <code>oauthToken</code> for repository providers other than GitHub, such as
   *             Bitbucket or CodeCommit.</p>
   *         <p>To authorize access to GitHub as your repository provider, use
   *                 <code>accessToken</code>.</p>
   *         <p>You must specify either <code>oauthToken</code> or <code>accessToken</code> when you
   *             update an app.</p>
   *         <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work
   *             with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub
   *             App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the
   *                 <i>Amplify User Guide</i> .</p>
   */
  oauthToken?: string;

  /**
   * <p>The personal access token for a GitHub repository for an Amplify app. The personal
   *             access token is used to authorize access to a GitHub repository using the Amplify GitHub
   *             App. The token is not stored.</p>
   *         <p>Use <code>accessToken</code> for GitHub repositories only. To authorize access to a
   *             repository provider such as Bitbucket or CodeCommit, use <code>oauthToken</code>.</p>
   *         <p>You must specify either <code>accessToken</code> or <code>oauthToken</code> when you
   *             update an app.</p>
   *         <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work
   *             with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub
   *             App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the
   *                 <i>Amplify User Guide</i> .</p>
   */
  accessToken?: string;
}

/**
 * <p> The result structure for an Amplify app update request. </p>
 */
export interface UpdateAppResult {
  /**
   * <p> Represents the updated Amplify app. </p>
   */
  app: App | undefined;
}

/**
 * <p> The request structure for the update branch request. </p>
 */
export interface UpdateBranchRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The name for the branch. </p>
   */
  branchName: string | undefined;

  /**
   * <p> The description for the branch. </p>
   */
  description?: string;

  /**
   * <p> The framework for the branch. </p>
   */
  framework?: string;

  /**
   * <p> Describes the current stage for the branch. </p>
   */
  stage?: Stage | string;

  /**
   * <p> Enables notifications for the branch. </p>
   */
  enableNotification?: boolean;

  /**
   * <p> Enables auto building for the branch. </p>
   */
  enableAutoBuild?: boolean;

  /**
   * <p> The environment variables for the branch. </p>
   */
  environmentVariables?: Record<string, string>;

  /**
   * <p> The basic authorization credentials for the branch. You must base64-encode the
   *             authorization credentials and provide them in the format
   *             <code>user:password</code>.</p>
   */
  basicAuthCredentials?: string;

  /**
   * <p> Enables basic authorization for the branch. </p>
   */
  enableBasicAuth?: boolean;

  /**
   * <p>Enables performance mode for the branch.</p>
   *         <p>Performance mode optimizes for faster hosting performance by keeping content cached at
   *             the edge for a longer interval. When performance mode is enabled, hosting configuration
   *             or code changes can take up to 10 minutes to roll out. </p>
   */
  enablePerformanceMode?: boolean;

  /**
   * <p> The build specification (build spec) for the branch. </p>
   */
  buildSpec?: string;

  /**
   * <p> The content Time to Live (TTL) for the website in seconds. </p>
   */
  ttl?: string;

  /**
   * <p> The display name for a branch. This is used as the default domain prefix. </p>
   */
  displayName?: string;

  /**
   * <p> Enables pull request previews for this branch. </p>
   */
  enablePullRequestPreview?: boolean;

  /**
   * <p> The Amplify environment name for the pull request. </p>
   */
  pullRequestEnvironmentName?: string;

  /**
   * <p> The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify
   *             app. </p>
   */
  backendEnvironmentArn?: string;
}

/**
 * <p> The result structure for the update branch request. </p>
 */
export interface UpdateBranchResult {
  /**
   * <p> The branch for an Amplify app, which maps to a third-party repository branch. </p>
   */
  branch: Branch | undefined;
}

/**
 * <p> The request structure for the update domain association request. </p>
 */
export interface UpdateDomainAssociationRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The name of the domain. </p>
   */
  domainName: string | undefined;

  /**
   * <p> Enables the automated creation of subdomains for branches. </p>
   */
  enableAutoSubDomain?: boolean;

  /**
   * <p> Describes the settings for the subdomain. </p>
   */
  subDomainSettings?: SubDomainSetting[];

  /**
   * <p> Sets the branch patterns for automatic subdomain creation. </p>
   */
  autoSubDomainCreationPatterns?: string[];

  /**
   * <p> The required AWS Identity and Access Management (IAM) service role for the Amazon
   *             Resource Name (ARN) for automatically creating subdomains. </p>
   */
  autoSubDomainIAMRole?: string;
}

/**
 * <p> The result structure for the update domain association request. </p>
 */
export interface UpdateDomainAssociationResult {
  /**
   * <p> Describes a domain association, which associates a custom domain with an Amplify app.
   *         </p>
   */
  domainAssociation: DomainAssociation | undefined;
}

/**
 * <p> The request structure for the update webhook request. </p>
 */
export interface UpdateWebhookRequest {
  /**
   * <p> The unique ID for a webhook. </p>
   */
  webhookId: string | undefined;

  /**
   * <p> The name for a branch that is part of an Amplify app. </p>
   */
  branchName?: string;

  /**
   * <p> The description for a webhook. </p>
   */
  description?: string;
}

/**
 * <p> The result structure for the update webhook request. </p>
 */
export interface UpdateWebhookResult {
  /**
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
export const CustomRuleFilterSensitiveLog = (obj: CustomRule): any => ({
  ...obj,
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
export const ProductionBranchFilterSensitiveLog = (obj: ProductionBranch): any => ({
  ...obj,
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
export const CreateBackendEnvironmentRequestFilterSensitiveLog = (obj: CreateBackendEnvironmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BackendEnvironmentFilterSensitiveLog = (obj: BackendEnvironment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBackendEnvironmentResultFilterSensitiveLog = (obj: CreateBackendEnvironmentResult): any => ({
  ...obj,
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
export const CreateDeploymentRequestFilterSensitiveLog = (obj: CreateDeploymentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDeploymentResultFilterSensitiveLog = (obj: CreateDeploymentResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubDomainSettingFilterSensitiveLog = (obj: SubDomainSetting): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDomainAssociationRequestFilterSensitiveLog = (obj: CreateDomainAssociationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubDomainFilterSensitiveLog = (obj: SubDomain): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainAssociationFilterSensitiveLog = (obj: DomainAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDomainAssociationResultFilterSensitiveLog = (obj: CreateDomainAssociationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWebhookRequestFilterSensitiveLog = (obj: CreateWebhookRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WebhookFilterSensitiveLog = (obj: Webhook): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWebhookResultFilterSensitiveLog = (obj: CreateWebhookResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAppRequestFilterSensitiveLog = (obj: DeleteAppRequest): any => ({
  ...obj,
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
export const DeleteBackendEnvironmentRequestFilterSensitiveLog = (obj: DeleteBackendEnvironmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBackendEnvironmentResultFilterSensitiveLog = (obj: DeleteBackendEnvironmentResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBranchRequestFilterSensitiveLog = (obj: DeleteBranchRequest): any => ({
  ...obj,
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
export const DeleteDomainAssociationRequestFilterSensitiveLog = (obj: DeleteDomainAssociationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDomainAssociationResultFilterSensitiveLog = (obj: DeleteDomainAssociationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteJobRequestFilterSensitiveLog = (obj: DeleteJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobSummaryFilterSensitiveLog = (obj: JobSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteJobResultFilterSensitiveLog = (obj: DeleteJobResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWebhookRequestFilterSensitiveLog = (obj: DeleteWebhookRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWebhookResultFilterSensitiveLog = (obj: DeleteWebhookResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GenerateAccessLogsRequestFilterSensitiveLog = (obj: GenerateAccessLogsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GenerateAccessLogsResultFilterSensitiveLog = (obj: GenerateAccessLogsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAppRequestFilterSensitiveLog = (obj: GetAppRequest): any => ({
  ...obj,
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
export const GetArtifactUrlRequestFilterSensitiveLog = (obj: GetArtifactUrlRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetArtifactUrlResultFilterSensitiveLog = (obj: GetArtifactUrlResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBackendEnvironmentRequestFilterSensitiveLog = (obj: GetBackendEnvironmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBackendEnvironmentResultFilterSensitiveLog = (obj: GetBackendEnvironmentResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBranchRequestFilterSensitiveLog = (obj: GetBranchRequest): any => ({
  ...obj,
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
export const GetDomainAssociationRequestFilterSensitiveLog = (obj: GetDomainAssociationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDomainAssociationResultFilterSensitiveLog = (obj: GetDomainAssociationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetJobRequestFilterSensitiveLog = (obj: GetJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StepFilterSensitiveLog = (obj: Step): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobFilterSensitiveLog = (obj: Job): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetJobResultFilterSensitiveLog = (obj: GetJobResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWebhookRequestFilterSensitiveLog = (obj: GetWebhookRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWebhookResultFilterSensitiveLog = (obj: GetWebhookResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppsRequestFilterSensitiveLog = (obj: ListAppsRequest): any => ({
  ...obj,
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
export const ListArtifactsRequestFilterSensitiveLog = (obj: ListArtifactsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArtifactFilterSensitiveLog = (obj: Artifact): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListArtifactsResultFilterSensitiveLog = (obj: ListArtifactsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBackendEnvironmentsRequestFilterSensitiveLog = (obj: ListBackendEnvironmentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBackendEnvironmentsResultFilterSensitiveLog = (obj: ListBackendEnvironmentsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBranchesRequestFilterSensitiveLog = (obj: ListBranchesRequest): any => ({
  ...obj,
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
export const ListDomainAssociationsRequestFilterSensitiveLog = (obj: ListDomainAssociationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDomainAssociationsResultFilterSensitiveLog = (obj: ListDomainAssociationsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListJobsRequestFilterSensitiveLog = (obj: ListJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListJobsResultFilterSensitiveLog = (obj: ListJobsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWebhooksRequestFilterSensitiveLog = (obj: ListWebhooksRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWebhooksResultFilterSensitiveLog = (obj: ListWebhooksResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartDeploymentRequestFilterSensitiveLog = (obj: StartDeploymentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartDeploymentResultFilterSensitiveLog = (obj: StartDeploymentResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartJobRequestFilterSensitiveLog = (obj: StartJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartJobResultFilterSensitiveLog = (obj: StartJobResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopJobRequestFilterSensitiveLog = (obj: StopJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopJobResultFilterSensitiveLog = (obj: StopJobResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
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

/**
 * @internal
 */
export const UpdateDomainAssociationRequestFilterSensitiveLog = (obj: UpdateDomainAssociationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDomainAssociationResultFilterSensitiveLog = (obj: UpdateDomainAssociationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateWebhookRequestFilterSensitiveLog = (obj: UpdateWebhookRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateWebhookResultFilterSensitiveLog = (obj: UpdateWebhookResult): any => ({
  ...obj,
});
