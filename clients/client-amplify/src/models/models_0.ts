// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { AmplifyServiceException as __BaseException } from "./AmplifyServiceException";

/**
 * <p>A request contains unexpected data. </p>
 * @public
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
 * <p>Describes the automated branch creation configuration. </p>
 * @public
 */
export interface AutoBranchCreationConfig {
  /**
   * <p>Describes the current stage for the autocreated branch. </p>
   * @public
   */
  stage?: Stage | undefined;

  /**
   * <p>The framework for the autocreated branch. </p>
   * @public
   */
  framework?: string | undefined;

  /**
   * <p>Enables auto building for the autocreated branch. </p>
   * @public
   */
  enableAutoBuild?: boolean | undefined;

  /**
   * <p>The environment variables for the autocreated branch. </p>
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * <p>The basic authorization credentials for the autocreated branch. You must base64-encode
   *             the authorization credentials and provide them in the format
   *             <code>user:password</code>.</p>
   * @public
   */
  basicAuthCredentials?: string | undefined;

  /**
   * <p>Enables basic authorization for the autocreated branch. </p>
   * @public
   */
  enableBasicAuth?: boolean | undefined;

  /**
   * <p>Enables performance mode for the branch.</p>
   *          <p>Performance mode optimizes for faster hosting performance by keeping content cached at
   *             the edge for a longer interval. When performance mode is enabled, hosting configuration
   *             or code changes can take up to 10 minutes to roll out. </p>
   * @public
   */
  enablePerformanceMode?: boolean | undefined;

  /**
   * <p>The build specification (build spec) for the autocreated branch. </p>
   * @public
   */
  buildSpec?: string | undefined;

  /**
   * <p>Enables pull request previews for the autocreated branch. </p>
   * @public
   */
  enablePullRequestPreview?: boolean | undefined;

  /**
   * <p>The Amplify environment name for the pull request. </p>
   * @public
   */
  pullRequestEnvironmentName?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CacheConfigType = {
  AMPLIFY_MANAGED: "AMPLIFY_MANAGED",
  AMPLIFY_MANAGED_NO_COOKIES: "AMPLIFY_MANAGED_NO_COOKIES",
} as const;

/**
 * @public
 */
export type CacheConfigType = (typeof CacheConfigType)[keyof typeof CacheConfigType];

/**
 * <p>Describes the cache configuration for an Amplify app.</p>
 *          <p>For more information about how Amplify applies an optimal cache
 *             configuration for your app based on the type of content that is being served, see <a href="https://docs.aws.amazon.com/amplify/latest/userguide/managing-cache-configuration">Managing cache configuration</a> in the <i>Amplify User
 *                 guide</i>.</p>
 * @public
 */
export interface CacheConfig {
  /**
   * <p>The type of cache configuration to use for an Amplify app.</p>
   *          <p>The <code>AMPLIFY_MANAGED</code> cache configuration automatically applies an
   *             optimized cache configuration for your app based on its platform, routing rules, and
   *             rewrite rules.</p>
   *          <p>The <code>AMPLIFY_MANAGED_NO_COOKIES</code> cache configuration type is the same as
   *                 <code>AMPLIFY_MANAGED</code>, except that it excludes all cookies from the cache
   *             key. This is the default setting.</p>
   * @public
   */
  type: CacheConfigType | undefined;
}

/**
 * <p>Describes a custom rewrite or redirect rule. </p>
 * @public
 */
export interface CustomRule {
  /**
   * <p>The source pattern for a URL rewrite or redirect rule. </p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>The target pattern for a URL rewrite or redirect rule. </p>
   * @public
   */
  target: string | undefined;

  /**
   * <p>The status code for a URL rewrite or redirect rule. </p>
   *          <dl>
   *             <dt>200</dt>
   *             <dd>
   *                <p>Represents a 200 rewrite rule.</p>
   *             </dd>
   *             <dt>301</dt>
   *             <dd>
   *                <p>Represents a 301 (moved permanently) redirect rule. This and all future
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
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The condition for a URL rewrite or redirect rule, such as a country code. </p>
   * @public
   */
  condition?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BuildComputeType = {
  LARGE_16GB: "LARGE_16GB",
  STANDARD_8GB: "STANDARD_8GB",
  XLARGE_72GB: "XLARGE_72GB",
} as const;

/**
 * @public
 */
export type BuildComputeType = (typeof BuildComputeType)[keyof typeof BuildComputeType];

/**
 * <p>Describes the configuration details that apply to the jobs for an Amplify app.</p>
 *          <p>Use <code>JobConfig</code> to apply configuration to jobs, such as customizing the build instance size when you create or
 *             update an Amplify app. For more information about customizable build
 *             instances, see <a href="https://docs.aws.amazon.com/amplify/latest/userguide/custom-build-instance.html">Custom build instances</a> in the <i>Amplify User Guide</i>.</p>
 * @public
 */
export interface JobConfig {
  /**
   * <p>Specifies the size of the build instance. Amplify supports three
   *             instance sizes: <code>STANDARD_8GB</code>, <code>LARGE_16GB</code>, and
   *                 <code>XLARGE_72GB</code>. If you don't specify a value, Amplify uses
   *             the <code>STANDARD_8GB</code> default.</p>
   *          <p>The following list describes the CPU, memory, and storage capacity for each build
   *             instance type:</p>
   *          <dl>
   *             <dt>STANDARD_8GB</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>vCPUs: 4</p>
   *                   </li>
   *                   <li>
   *                      <p>Memory: 8 GiB</p>
   *                   </li>
   *                   <li>
   *                      <p>Disk space: 128 GB</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>LARGE_16GB</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>vCPUs: 8</p>
   *                   </li>
   *                   <li>
   *                      <p>Memory: 16 GiB</p>
   *                   </li>
   *                   <li>
   *                      <p>Disk space: 128 GB</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>XLARGE_72GB</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>vCPUs: 36</p>
   *                   </li>
   *                   <li>
   *                      <p>Memory: 72 GiB</p>
   *                   </li>
   *                   <li>
   *                      <p>Disk space: 256 GB</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *          </dl>
   * @public
   */
  buildComputeType: BuildComputeType | undefined;
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
 * <p>The request structure used to create apps in Amplify. </p>
 * @public
 */
export interface CreateAppRequest {
  /**
   * <p>The name of the Amplify app. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the Amplify app. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Git repository for the Amplify app. </p>
   * @public
   */
  repository?: string | undefined;

  /**
   * <p>The platform for the Amplify app. For a static app, set the platform type to
   *                 <code>WEB</code>. For a dynamic server-side rendered (SSR) app, set the platform
   *             type to <code>WEB_COMPUTE</code>. For an app requiring Amplify Hosting's original SSR
   *             support only, set the platform type to <code>WEB_DYNAMIC</code>.</p>
   *          <p>If you are deploying an SSG only app with Next.js version 14 or later, you must set
   *             the platform type to <code>WEB_COMPUTE</code> and set the artifacts
   *                 <code>baseDirectory</code> to <code>.next</code> in the application's build
   *             settings. For an example of the build specification settings, see <a href="https://docs.aws.amazon.com/amplify/latest/userguide/deploy-nextjs-app.html#build-setting-detection-ssg-14">Amplify build settings for a Next.js 14 SSG application</a> in the
   *                 <i>Amplify Hosting User Guide</i>.</p>
   * @public
   */
  platform?: Platform | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to assign to an SSR app.
   *             The SSR Compute role allows the Amplify Hosting compute service to
   *             securely access specific Amazon Web Services resources based on the role's permissions.
   *             For more information about the SSR Compute role, see <a href="https://docs.aws.amazon.com/amplify/latest/userguide/amplify-SSR-compute-role.html">Adding an SSR Compute
   *                 role</a> in the <i>Amplify User Guide</i>.</p>
   * @public
   */
  computeRoleArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role for the Amplify app.</p>
   * @public
   */
  iamServiceRoleArn?: string | undefined;

  /**
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
   *             App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/userguide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the
   *                 <i>Amplify User Guide</i> .</p>
   * @public
   */
  oauthToken?: string | undefined;

  /**
   * <p>The personal access token for a GitHub repository for an Amplify app. The personal
   *             access token is used to authorize access to a GitHub repository using the Amplify GitHub
   *             App. The token is not stored.</p>
   *          <p>Use <code>accessToken</code> for GitHub repositories only. To authorize access to a
   *             repository provider such as Bitbucket or CodeCommit, use <code>oauthToken</code>.</p>
   *          <p>You must specify either <code>accessToken</code> or <code>oauthToken</code> when you
   *             create a new app.</p>
   *          <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work
   *             with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub
   *             App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/userguide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the
   *                 <i>Amplify User Guide</i> .</p>
   * @public
   */
  accessToken?: string | undefined;

  /**
   * <p>The environment variables map for an Amplify app. </p>
   *          <p>For a list of the environment variables that are accessible to Amplify by default, see
   *                 <a href="https://docs.aws.amazon.com/amplify/latest/userguide/amplify-console-environment-variables.html">Amplify
   *                 Environment variables</a> in the <i>Amplify Hosting User
   *             Guide</i>.</p>
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * <p>Enables the auto building of branches for an Amplify app. </p>
   * @public
   */
  enableBranchAutoBuild?: boolean | undefined;

  /**
   * <p>Automatically disconnects a branch in the Amplify console when you delete a branch
   *             from your Git repository. </p>
   * @public
   */
  enableBranchAutoDeletion?: boolean | undefined;

  /**
   * <p>Enables basic authorization for an Amplify app. This will apply to all branches that
   *             are part of this app. </p>
   * @public
   */
  enableBasicAuth?: boolean | undefined;

  /**
   * <p>The credentials for basic authorization for an Amplify app. You must base64-encode the
   *             authorization credentials and provide them in the format
   *             <code>user:password</code>.</p>
   * @public
   */
  basicAuthCredentials?: string | undefined;

  /**
   * <p>The custom rewrite and redirect rules for an Amplify app. </p>
   * @public
   */
  customRules?: CustomRule[] | undefined;

  /**
   * <p>The tag for an Amplify app. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The build specification (build spec) for an Amplify app. </p>
   * @public
   */
  buildSpec?: string | undefined;

  /**
   * <p>The custom HTTP headers for an Amplify app.</p>
   * @public
   */
  customHeaders?: string | undefined;

  /**
   * <p>Enables automated branch creation for an Amplify app. </p>
   * @public
   */
  enableAutoBranchCreation?: boolean | undefined;

  /**
   * <p>The automated branch creation glob patterns for an Amplify app. </p>
   * @public
   */
  autoBranchCreationPatterns?: string[] | undefined;

  /**
   * <p>The automated branch creation configuration for an Amplify app. </p>
   * @public
   */
  autoBranchCreationConfig?: AutoBranchCreationConfig | undefined;

  /**
   * <p>Describes the configuration details that apply to the jobs for an Amplify app.</p>
   * @public
   */
  jobConfig?: JobConfig | undefined;

  /**
   * <p>The cache configuration for the Amplify app.</p>
   * @public
   */
  cacheConfig?: CacheConfig | undefined;
}

/**
 * <p>Describes the information about a production branch for an Amplify app. </p>
 * @public
 */
export interface ProductionBranch {
  /**
   * <p>The last deploy time of the production branch. </p>
   * @public
   */
  lastDeployTime?: Date | undefined;

  /**
   * <p>The status of the production branch. </p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The thumbnail URL for the production branch. </p>
   * @public
   */
  thumbnailUrl?: string | undefined;

  /**
   * <p>The branch name for the production branch. </p>
   * @public
   */
  branchName?: string | undefined;
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
 * @enum
 */
export const WafStatus = {
  ASSOCIATING: "ASSOCIATING",
  ASSOCIATION_FAILED: "ASSOCIATION_FAILED",
  ASSOCIATION_SUCCESS: "ASSOCIATION_SUCCESS",
  DISASSOCIATING: "DISASSOCIATING",
  DISASSOCIATION_FAILED: "DISASSOCIATION_FAILED",
} as const;

/**
 * @public
 */
export type WafStatus = (typeof WafStatus)[keyof typeof WafStatus];

/**
 * <p>Describes the Firewall configuration for a hosted Amplify application.
 *             Firewall support enables you to protect your web applications with a direct integration
 *             with WAF. For more information about using WAF protections
 *             for an Amplify application, see <a href="https://docs.aws.amazon.com/amplify/latest/userguide/WAF-integration.html">Firewall support for hosted
 *                 sites</a> in the <i>Amplify User Guide</i>. </p>
 * @public
 */
export interface WafConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) for the web ACL associated with an Amplify app.</p>
   * @public
   */
  webAclArn?: string | undefined;

  /**
   * <p>The status of the process to associate or disassociate a web ACL to an Amplify app.</p>
   * @public
   */
  wafStatus?: WafStatus | undefined;

  /**
   * <p>The reason for the current status of the Firewall configuration.</p>
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * <p>Represents the different branches of a repository for building, deploying, and hosting
 *             an Amplify app. </p>
 * @public
 */
export interface App {
  /**
   * <p>The unique ID of the Amplify app. </p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amplify app. </p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>The name for the Amplify app. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The tag for the Amplify app. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The description for the Amplify app. </p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The Git repository for the Amplify app. </p>
   * @public
   */
  repository: string | undefined;

  /**
   * <p>The platform for the Amplify app. For a static app, set the platform type to
   *                 <code>WEB</code>. For a dynamic server-side rendered (SSR) app, set the platform
   *             type to <code>WEB_COMPUTE</code>. For an app requiring Amplify Hosting's original SSR
   *             support only, set the platform type to <code>WEB_DYNAMIC</code>.</p>
   *          <p>If you are deploying an SSG only app with Next.js 14 or later, you must use the
   *             platform type <code>WEB_COMPUTE</code>.</p>
   * @public
   */
  platform: Platform | undefined;

  /**
   * <p>A timestamp of when Amplify created the application.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>A timestamp of when Amplify updated the application.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role for an SSR app. The
   *             Compute role allows the Amplify Hosting compute service to securely
   *             access specific Amazon Web Services resources based on the role's permissions. For more
   *             information about the SSR Compute role, see <a href="https://docs.aws.amazon.com/amplify/latest/userguide/amplify-SSR-compute-role.html">Adding an SSR Compute
   *                 role</a> in the <i>Amplify User Guide</i>.</p>
   * @public
   */
  computeRoleArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role for the Amplify app.</p>
   * @public
   */
  iamServiceRoleArn?: string | undefined;

  /**
   * <p>The environment variables for the Amplify app. </p>
   *          <p>For a list of the environment variables that are accessible to Amplify by default, see
   *                 <a href="https://docs.aws.amazon.com/amplify/latest/userguide/amplify-console-environment-variables.html">Amplify
   *                 Environment variables</a> in the <i>Amplify Hosting User
   *             Guide</i>.</p>
   * @public
   */
  environmentVariables: Record<string, string> | undefined;

  /**
   * <p>The default domain for the Amplify app. </p>
   * @public
   */
  defaultDomain: string | undefined;

  /**
   * <p>Enables the auto-building of branches for the Amplify app. </p>
   * @public
   */
  enableBranchAutoBuild: boolean | undefined;

  /**
   * <p>Automatically disconnect a branch in the Amplify console when you delete a branch from
   *             your Git repository.</p>
   * @public
   */
  enableBranchAutoDeletion?: boolean | undefined;

  /**
   * <p>Enables basic authorization for the Amplify app's branches. </p>
   * @public
   */
  enableBasicAuth: boolean | undefined;

  /**
   * <p>The basic authorization credentials for branches for the Amplify app. You must
   *             base64-encode the authorization credentials and provide them in the format
   *                 <code>user:password</code>.</p>
   * @public
   */
  basicAuthCredentials?: string | undefined;

  /**
   * <p>Describes the custom redirect and rewrite rules for the Amplify app. </p>
   * @public
   */
  customRules?: CustomRule[] | undefined;

  /**
   * <p>Describes the information about a production branch of the Amplify app. </p>
   * @public
   */
  productionBranch?: ProductionBranch | undefined;

  /**
   * <p>Describes the content of the build specification (build spec) for the Amplify app.
   *         </p>
   * @public
   */
  buildSpec?: string | undefined;

  /**
   * <p>Describes the custom HTTP headers for the Amplify app.</p>
   * @public
   */
  customHeaders?: string | undefined;

  /**
   * <p>Enables automated branch creation for the Amplify app. </p>
   * @public
   */
  enableAutoBranchCreation?: boolean | undefined;

  /**
   * <p>Describes the automated branch creation glob patterns for the Amplify app. </p>
   * @public
   */
  autoBranchCreationPatterns?: string[] | undefined;

  /**
   * <p>Describes the automated branch creation configuration for the Amplify app. </p>
   * @public
   */
  autoBranchCreationConfig?: AutoBranchCreationConfig | undefined;

  /**
   * <note>
   *             <p>This is for internal use.</p>
   *          </note>
   *          <p>The Amplify service uses this parameter to specify the authentication protocol to use
   *             to access the Git repository for an Amplify app. Amplify specifies <code>TOKEN</code>
   *             for a GitHub repository, <code>SIGV4</code> for an Amazon Web Services CodeCommit
   *             repository, and <code>SSH</code> for GitLab and Bitbucket repositories.</p>
   * @public
   */
  repositoryCloneMethod?: RepositoryCloneMethod | undefined;

  /**
   * <p>The cache configuration for the Amplify app. If you don't specify the
   *             cache configuration <code>type</code>, Amplify uses the default
   *                 <code>AMPLIFY_MANAGED</code> setting.</p>
   * @public
   */
  cacheConfig?: CacheConfig | undefined;

  /**
   * <p>A timestamp of when Amplify created the webhook in your Git
   *             repository.</p>
   * @public
   */
  webhookCreateTime?: Date | undefined;

  /**
   * <p>Describes the Firewall configuration for the Amplify app. Firewall
   *             support enables you to protect your hosted applications with a direct integration with
   *                 WAF.</p>
   * @public
   */
  wafConfiguration?: WafConfiguration | undefined;

  /**
   * <p>The configuration details that apply to the jobs for an Amplify app.</p>
   * @public
   */
  jobConfig?: JobConfig | undefined;
}

/**
 * @public
 */
export interface CreateAppResult {
  /**
   * <p>Represents the different branches of a repository for building, deploying, and hosting
   *             an Amplify app. </p>
   * @public
   */
  app: App | undefined;
}

/**
 * <p>An operation failed because a dependent service threw an exception. </p>
 * @public
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
 * <p>The service failed to perform an operation due to an internal issue. </p>
 * @public
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
 * <p>A resource could not be created because service quotas were exceeded. </p>
 * @public
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
 * <p>An operation failed due to a lack of access. </p>
 * @public
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
 * <p>The request structure for the backend environment create request. </p>
 * @public
 */
export interface CreateBackendEnvironmentRequest {
  /**
   * <p>The unique ID for an Amplify app. </p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name for the backend environment. </p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The AWS CloudFormation stack name of a backend environment. </p>
   * @public
   */
  stackName?: string | undefined;

  /**
   * <p>The name of deployment artifacts. </p>
   * @public
   */
  deploymentArtifacts?: string | undefined;
}

/**
 * <p>Describes the backend environment associated with a <code>Branch</code> of a Gen 1
 *                 Amplify app. Amplify Gen 1 applications are created
 *             using Amplify Studio or the Amplify command line interface
 *             (CLI).</p>
 * @public
 */
export interface BackendEnvironment {
  /**
   * <p>The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify
   *             app. </p>
   * @public
   */
  backendEnvironmentArn: string | undefined;

  /**
   * <p>The name for a backend environment that is part of an Amplify app. </p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The AWS CloudFormation stack name of a backend environment. </p>
   * @public
   */
  stackName?: string | undefined;

  /**
   * <p>The name of deployment artifacts. </p>
   * @public
   */
  deploymentArtifacts?: string | undefined;

  /**
   * <p>The creation date and time for a backend environment that is part of an Amplify app.
   *         </p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The last updated date and time for a backend environment that is part of an Amplify
   *             app. </p>
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * <p>The result structure for the create backend environment request. </p>
 * @public
 */
export interface CreateBackendEnvironmentResult {
  /**
   * <p>Describes the backend environment for an Amplify app. </p>
   * @public
   */
  backendEnvironment: BackendEnvironment | undefined;
}

/**
 * <p>An entity was not found during an operation. </p>
 * @public
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
 * <p>Describes the backend associated with an Amplify
 *             <code>Branch</code>.</p>
 *          <p>This property is available to Amplify Gen 2 apps only. When you deploy
 *             an application with Amplify Gen 2, you provision the app's backend infrastructure using
 *             Typescript code.</p>
 * @public
 */
export interface Backend {
  /**
   * <p>The Amazon Resource Name (ARN) for the CloudFormation stack.</p>
   * @public
   */
  stackArn?: string | undefined;
}

/**
 * <p> The request structure for the create branch request. </p>
 * @public
 */
export interface CreateBranchRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name for the branch. </p>
   * @public
   */
  branchName: string | undefined;

  /**
   * <p>The description for the branch. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Describes the current stage for the branch. </p>
   * @public
   */
  stage?: Stage | undefined;

  /**
   * <p> The framework for the branch. </p>
   * @public
   */
  framework?: string | undefined;

  /**
   * <p> Enables notifications for the branch. </p>
   * @public
   */
  enableNotification?: boolean | undefined;

  /**
   * <p> Enables auto building for the branch. </p>
   * @public
   */
  enableAutoBuild?: boolean | undefined;

  /**
   * <p>Specifies whether the skew protection feature is enabled for the branch.</p>
   *          <p>Deployment skew protection is available to Amplify applications to
   *             eliminate version skew issues between client and servers in web applications. When you
   *             apply skew protection to a branch, you can ensure that your clients always interact with
   *             the correct version of server-side assets, regardless of when a deployment occurs. For
   *             more information about skew protection, see <a href="https://docs.aws.amazon.com/amplify/latest/userguide/skew-protection.html">Skew protection for Amplify deployments</a> in the <i>Amplify User
   *                 Guide</i>.</p>
   * @public
   */
  enableSkewProtection?: boolean | undefined;

  /**
   * <p> The environment variables for the branch. </p>
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * <p> The basic authorization credentials for the branch. You must base64-encode the
   *             authorization credentials and provide them in the format
   *             <code>user:password</code>.</p>
   * @public
   */
  basicAuthCredentials?: string | undefined;

  /**
   * <p> Enables basic authorization for the branch. </p>
   * @public
   */
  enableBasicAuth?: boolean | undefined;

  /**
   * <p>Enables performance mode for the branch.</p>
   *          <p>Performance mode optimizes for faster hosting performance by keeping content cached at
   *             the edge for a longer interval. When performance mode is enabled, hosting configuration
   *             or code changes can take up to 10 minutes to roll out. </p>
   * @public
   */
  enablePerformanceMode?: boolean | undefined;

  /**
   * <p> The tag for the branch. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p> The build specification (build spec) for the branch. </p>
   * @public
   */
  buildSpec?: string | undefined;

  /**
   * <p> The content Time To Live (TTL) for the website in seconds. </p>
   * @public
   */
  ttl?: string | undefined;

  /**
   * <p> The display name for a branch. This is used as the default domain prefix. </p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p> Enables pull request previews for this branch. </p>
   * @public
   */
  enablePullRequestPreview?: boolean | undefined;

  /**
   * <p> The Amplify environment name for the pull request. </p>
   * @public
   */
  pullRequestEnvironmentName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for a backend environment that is part of a Gen 1
   *             Amplify app. </p>
   *          <p>This field is available to Amplify Gen 1 apps only where the backend is
   *             created using Amplify Studio or the Amplify command line
   *             interface (CLI).</p>
   * @public
   */
  backendEnvironmentArn?: string | undefined;

  /**
   * <p>The backend for a <code>Branch</code> of an Amplify app. Use for a
   *             backend created from an CloudFormation stack.</p>
   *          <p>This field is available to Amplify Gen 2 apps only. When you deploy an
   *             application with Amplify Gen 2, you provision the app's backend infrastructure using
   *             Typescript code.</p>
   * @public
   */
  backend?: Backend | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to assign to a branch of
   *             an SSR app. The SSR Compute role allows the Amplify Hosting compute
   *             service to securely access specific Amazon Web Services resources based on the role's
   *             permissions. For more information about the SSR Compute role, see <a href="https://docs.aws.amazon.com/amplify/latest/userguide/amplify-SSR-compute-role.html">Adding an SSR Compute role</a> in the <i>Amplify User
   *                 Guide</i>.</p>
   * @public
   */
  computeRoleArn?: string | undefined;
}

/**
 * <p> The branch for an Amplify app, which maps to a third-party repository branch. </p>
 * @public
 */
export interface Branch {
  /**
   * <p> The Amazon Resource Name (ARN) for a branch that is part of an Amplify app. </p>
   * @public
   */
  branchArn: string | undefined;

  /**
   * <p> The name for the branch that is part of an Amplify app. </p>
   * @public
   */
  branchName: string | undefined;

  /**
   * <p> The description for the branch that is part of an Amplify app. </p>
   * @public
   */
  description: string | undefined;

  /**
   * <p> The tag for the branch of an Amplify app. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p> The current stage for the branch that is part of an Amplify app. </p>
   * @public
   */
  stage: Stage | undefined;

  /**
   * <p> The display name for the branch. This is used as the default domain prefix. </p>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p> Enables notifications for a branch that is part of an Amplify app. </p>
   * @public
   */
  enableNotification: boolean | undefined;

  /**
   * <p>A timestamp of when Amplify created the branch.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>A timestamp for the last updated time for a branch.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p> The environment variables specific to a branch of an Amplify app. </p>
   * @public
   */
  environmentVariables: Record<string, string> | undefined;

  /**
   * <p> Enables auto-building on push for a branch of an Amplify app. </p>
   * @public
   */
  enableAutoBuild: boolean | undefined;

  /**
   * <p>Specifies whether the skew protection feature is enabled for the branch.</p>
   *          <p>Deployment skew protection is available to Amplify applications to
   *             eliminate version skew issues between client and servers in web applications. When you
   *             apply skew protection to a branch, you can ensure that your clients always interact with
   *             the correct version of server-side assets, regardless of when a deployment occurs. For
   *             more information about skew protection, see <a href="https://docs.aws.amazon.com/amplify/latest/userguide/skew-protection.html">Skew protection for Amplify deployments</a> in the <i>Amplify User
   *                 Guide</i>.</p>
   * @public
   */
  enableSkewProtection?: boolean | undefined;

  /**
   * <p> The custom domains for a branch of an Amplify app. </p>
   * @public
   */
  customDomains: string[] | undefined;

  /**
   * <p> The framework for a branch of an Amplify app. </p>
   * @public
   */
  framework: string | undefined;

  /**
   * <p> The ID of the active job for a branch of an Amplify app. </p>
   * @public
   */
  activeJobId: string | undefined;

  /**
   * <p> The total number of jobs that are part of an Amplify app. </p>
   * @public
   */
  totalNumberOfJobs: string | undefined;

  /**
   * <p> Enables basic authorization for a branch of an Amplify app. </p>
   * @public
   */
  enableBasicAuth: boolean | undefined;

  /**
   * <p>Enables performance mode for the branch.</p>
   *          <p>Performance mode optimizes for faster hosting performance by keeping content cached at
   *             the edge for a longer interval. When performance mode is enabled, hosting configuration
   *             or code changes can take up to 10 minutes to roll out. </p>
   * @public
   */
  enablePerformanceMode?: boolean | undefined;

  /**
   * <p> The thumbnail URL for the branch of an Amplify app. </p>
   * @public
   */
  thumbnailUrl?: string | undefined;

  /**
   * <p> The basic authorization credentials for a branch of an Amplify app. You must
   *             base64-encode the authorization credentials and provide them in the format
   *                 <code>user:password</code>.</p>
   * @public
   */
  basicAuthCredentials?: string | undefined;

  /**
   * <p> The build specification (build spec) content for the branch of an Amplify app.
   *         </p>
   * @public
   */
  buildSpec?: string | undefined;

  /**
   * <p> The content Time to Live (TTL) for the website in seconds. </p>
   * @public
   */
  ttl: string | undefined;

  /**
   * <p> A list of custom resources that are linked to this branch. </p>
   * @public
   */
  associatedResources?: string[] | undefined;

  /**
   * <p> Enables pull request previews for the branch. </p>
   * @public
   */
  enablePullRequestPreview: boolean | undefined;

  /**
   * <p> The Amplify environment name for the pull request. </p>
   * @public
   */
  pullRequestEnvironmentName?: string | undefined;

  /**
   * <p> The destination branch if the branch is a pull request branch. </p>
   * @public
   */
  destinationBranch?: string | undefined;

  /**
   * <p> The source branch if the branch is a pull request branch. </p>
   * @public
   */
  sourceBranch?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify app. </p>
   *          <p>This property is available to Amplify Gen 1 apps only. When you deploy
   *             an application with Amplify Gen 2, you provision the app's backend infrastructure using
   *             Typescript code.</p>
   * @public
   */
  backendEnvironmentArn?: string | undefined;

  /**
   * <p>Describes the backend associated with an Amplify
   *             <code>Branch</code>.</p>
   *          <p>This property is available to Amplify Gen 2 apps only. When you deploy
   *             an application with Amplify Gen 2, you provision the app's backend infrastructure using
   *             Typescript code.</p>
   * @public
   */
  backend?: Backend | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role for a branch of an SSR
   *             app. The Compute role allows the Amplify Hosting compute service to
   *             securely access specific Amazon Web Services resources based on the role's permissions.
   *             For more information about the SSR Compute role, see <a href="https://docs.aws.amazon.com/amplify/latest/userguide/amplify-SSR-compute-role.html">Adding an SSR Compute
   *                 role</a> in the <i>Amplify User Guide</i>.</p>
   * @public
   */
  computeRoleArn?: string | undefined;
}

/**
 * <p> The result structure for create branch request. </p>
 * @public
 */
export interface CreateBranchResult {
  /**
   * <p> Describes the branch for an Amplify app, which maps to a third-party repository
   *             branch. </p>
   * @public
   */
  branch: Branch | undefined;
}

/**
 * <p> The request structure for the create a new deployment request. </p>
 * @public
 */
export interface CreateDeploymentRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p> The name of the branch to use for the job. </p>
   * @public
   */
  branchName: string | undefined;

  /**
   * <p> An optional file map that contains the file name as the key and the file content md5
   *             hash as the value. If this argument is provided, the service will generate a unique
   *             upload URL per file. Otherwise, the service will only generate a single upload URL for
   *             the zipped files. </p>
   * @public
   */
  fileMap?: Record<string, string> | undefined;
}

/**
 * <p> The result structure for the create a new deployment request. </p>
 * @public
 */
export interface CreateDeploymentResult {
  /**
   * <p> The job ID for this deployment. will supply to start deployment api. </p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p> When the <code>fileMap</code> argument is provided in the request,
   *                 <code>fileUploadUrls</code> will contain a map of file names to upload URLs. </p>
   * @public
   */
  fileUploadUrls: Record<string, string> | undefined;

  /**
   * <p> When the <code>fileMap</code> argument is not provided in the request, this
   *                 <code>zipUploadUrl</code> is returned. </p>
   * @public
   */
  zipUploadUrl: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CertificateType = {
  AMPLIFY_MANAGED: "AMPLIFY_MANAGED",
  CUSTOM: "CUSTOM",
} as const;

/**
 * @public
 */
export type CertificateType = (typeof CertificateType)[keyof typeof CertificateType];

/**
 * <p>The type of SSL/TLS certificate to use for your custom domain. If a certificate type
 *             isn't specified, Amplify uses the default <code>AMPLIFY_MANAGED</code>
 *             certificate.</p>
 * @public
 */
export interface CertificateSettings {
  /**
   * <p>The certificate type.</p>
   *          <p>Specify <code>AMPLIFY_MANAGED</code> to use the default certificate that Amplify
   *             provisions for you.</p>
   *          <p>Specify <code>CUSTOM</code> to use your own certificate that you have already added to
   *                 Certificate Manager in your Amazon Web Services account. Make sure you request (or
   *             import) the certificate in the US East (N. Virginia) Region (us-east-1). For more
   *             information about using ACM, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing certificates into
   *                     Certificate Manager</a> in the <i>ACM User
   *                 guide</i>.</p>
   * @public
   */
  type: CertificateType | undefined;

  /**
   * <p>The Amazon resource name (ARN) for the custom certificate that you have already added
   *             to Certificate Manager in your Amazon Web Services account.</p>
   *          <p>This field is required only when the certificate type is <code>CUSTOM</code>.</p>
   * @public
   */
  customCertificateArn?: string | undefined;
}

/**
 * <p> Describes the settings for the subdomain. </p>
 * @public
 */
export interface SubDomainSetting {
  /**
   * <p> The prefix setting for the subdomain. </p>
   * @public
   */
  prefix: string | undefined;

  /**
   * <p> The branch name setting for the subdomain. </p>
   * @public
   */
  branchName: string | undefined;
}

/**
 * <p> The request structure for the create domain association request. </p>
 * @public
 */
export interface CreateDomainAssociationRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p> The domain name for the domain association. </p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p> Enables the automated creation of subdomains for branches. </p>
   * @public
   */
  enableAutoSubDomain?: boolean | undefined;

  /**
   * <p> The setting for the subdomain. </p>
   * @public
   */
  subDomainSettings: SubDomainSetting[] | undefined;

  /**
   * <p> Sets the branch patterns for automatic subdomain creation. </p>
   * @public
   */
  autoSubDomainCreationPatterns?: string[] | undefined;

  /**
   * <p> The required AWS Identity and Access Management (IAM) service role for the Amazon
   *             Resource Name (ARN) for automatically creating subdomains. </p>
   * @public
   */
  autoSubDomainIAMRole?: string | undefined;

  /**
   * <p>The type of SSL/TLS certificate to use for your custom domain. If you don't specify a
   *             certificate type, Amplify uses the default certificate that it provisions and manages
   *             for you.</p>
   * @public
   */
  certificateSettings?: CertificateSettings | undefined;
}

/**
 * <p>Describes the current SSL/TLS certificate that is in use for the domain. If you are
 *             using <code>CreateDomainAssociation</code> to create a new domain association,
 *                 <code>Certificate</code> describes the new certificate that you are creating.</p>
 * @public
 */
export interface Certificate {
  /**
   * <p>The type of SSL/TLS certificate that you want to use.</p>
   *          <p>Specify <code>AMPLIFY_MANAGED</code> to use the default certificate that Amplify
   *             provisions for you.</p>
   *          <p>Specify <code>CUSTOM</code> to use your own certificate that you have already added to
   *                 Certificate Manager in your Amazon Web Services account. Make sure you request (or
   *             import) the certificate in the US East (N. Virginia) Region (us-east-1). For more
   *             information about using ACM, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing certificates into
   *                     Certificate Manager</a> in the <i>ACM User
   *                 guide</i>.</p>
   * @public
   */
  type: CertificateType | undefined;

  /**
   * <p>The Amazon resource name (ARN) for a custom certificate that you have already added to
   *                 Certificate Manager in your Amazon Web Services account. </p>
   *          <p>This field is required only when the certificate type is <code>CUSTOM</code>.</p>
   * @public
   */
  customCertificateArn?: string | undefined;

  /**
   * <p>The DNS record for certificate verification.</p>
   * @public
   */
  certificateVerificationDNSRecord?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DomainStatus = {
  AVAILABLE: "AVAILABLE",
  AWAITING_APP_CNAME: "AWAITING_APP_CNAME",
  CREATING: "CREATING",
  FAILED: "FAILED",
  IMPORTING_CUSTOM_CERTIFICATE: "IMPORTING_CUSTOM_CERTIFICATE",
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
 * <p> The subdomain for the domain association. </p>
 * @public
 */
export interface SubDomain {
  /**
   * <p> Describes the settings for the subdomain. </p>
   * @public
   */
  subDomainSetting: SubDomainSetting | undefined;

  /**
   * <p> The verified status of the subdomain </p>
   * @public
   */
  verified: boolean | undefined;

  /**
   * <p> The DNS record for the subdomain. </p>
   * @public
   */
  dnsRecord: string | undefined;
}

/**
 * @public
 * @enum
 */
export const UpdateStatus = {
  AWAITING_APP_CNAME: "AWAITING_APP_CNAME",
  IMPORTING_CUSTOM_CERTIFICATE: "IMPORTING_CUSTOM_CERTIFICATE",
  PENDING_DEPLOYMENT: "PENDING_DEPLOYMENT",
  PENDING_VERIFICATION: "PENDING_VERIFICATION",
  REQUESTING_CERTIFICATE: "REQUESTING_CERTIFICATE",
  UPDATE_COMPLETE: "UPDATE_COMPLETE",
  UPDATE_FAILED: "UPDATE_FAILED",
} as const;

/**
 * @public
 */
export type UpdateStatus = (typeof UpdateStatus)[keyof typeof UpdateStatus];

/**
 * <p>Describes the association between a custom domain and an Amplify app. </p>
 * @public
 */
export interface DomainAssociation {
  /**
   * <p> The Amazon Resource Name (ARN) for the domain association. </p>
   * @public
   */
  domainAssociationArn: string | undefined;

  /**
   * <p> The name of the domain. </p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p> Enables the automated creation of subdomains for branches. </p>
   * @public
   */
  enableAutoSubDomain: boolean | undefined;

  /**
   * <p> Sets branch patterns for automatic subdomain creation. </p>
   * @public
   */
  autoSubDomainCreationPatterns?: string[] | undefined;

  /**
   * <p> The required AWS Identity and Access Management (IAM) service role for the Amazon
   *             Resource Name (ARN) for automatically creating subdomains. </p>
   * @public
   */
  autoSubDomainIAMRole?: string | undefined;

  /**
   * <p> The current status of the domain association. </p>
   * @public
   */
  domainStatus: DomainStatus | undefined;

  /**
   * <p>The status of the domain update operation that is currently in progress. The following
   *             list describes the valid update states.</p>
   *          <dl>
   *             <dt>REQUESTING_CERTIFICATE</dt>
   *             <dd>
   *                <p>The certificate is in the process of being updated.</p>
   *             </dd>
   *             <dt>PENDING_VERIFICATION</dt>
   *             <dd>
   *                <p>Indicates that an Amplify managed certificate is in the
   *                         process of being verified. This occurs during the creation of a custom
   *                         domain or when a custom domain is updated to use a managed
   *                         certificate.</p>
   *             </dd>
   *             <dt>IMPORTING_CUSTOM_CERTIFICATE</dt>
   *             <dd>
   *                <p>Indicates that an Amplify custom certificate is in the
   *                         process of being imported. This occurs during the creation of a custom
   *                         domain or when a custom domain is updated to use a custom
   *                         certificate.</p>
   *             </dd>
   *             <dt>PENDING_DEPLOYMENT</dt>
   *             <dd>
   *                <p>Indicates that the subdomain or certificate changes are being
   *                         propagated.</p>
   *             </dd>
   *             <dt>AWAITING_APP_CNAME</dt>
   *             <dd>
   *                <p>Amplify is waiting for CNAME records corresponding to
   *                         subdomains to be propagated. If your custom domain is on Route 53,
   *                             Amplify handles this for you automatically. For more
   *                         information about custom domains, see <a href="https://docs.aws.amazon.com/amplify/latest/userguide/custom-domains.html">Setting up custom
   *                             domains</a> in the <i>Amplify Hosting User
   *                             Guide</i>. </p>
   *             </dd>
   *             <dt>UPDATE_COMPLETE</dt>
   *             <dd>
   *                <p>The certificate has been associated with a domain.</p>
   *             </dd>
   *             <dt>UPDATE_FAILED</dt>
   *             <dd>
   *                <p>The certificate has failed to be provisioned or associated, and there is
   *                         no existing active certificate to roll back to.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  updateStatus?: UpdateStatus | undefined;

  /**
   * <p> Additional information that describes why the domain association is in the current
   *             state.</p>
   * @public
   */
  statusReason: string | undefined;

  /**
   * <p> The DNS record for certificate verification. </p>
   * @public
   */
  certificateVerificationDNSRecord?: string | undefined;

  /**
   * <p> The subdomains for the domain association. </p>
   * @public
   */
  subDomains: SubDomain[] | undefined;

  /**
   * <p>Describes the SSL/TLS certificate for the domain association. This can be your own
   *             custom certificate or the default certificate that Amplify provisions for
   *             you.</p>
   *          <p>If you are updating your domain to use a different certificate,
   *                 <code>certificate</code> points to the new certificate that is being created instead
   *             of the current active certificate. Otherwise, <code>certificate</code> points to the
   *             current active certificate.</p>
   * @public
   */
  certificate?: Certificate | undefined;
}

/**
 * <p> The result structure for the create domain association request. </p>
 * @public
 */
export interface CreateDomainAssociationResult {
  /**
   * <p> Describes the structure of a domain association, which associates a custom domain
   *             with an Amplify app. </p>
   * @public
   */
  domainAssociation: DomainAssociation | undefined;
}

/**
 * <p>The request structure for the create webhook request. </p>
 * @public
 */
export interface CreateWebhookRequest {
  /**
   * <p>The unique ID for an Amplify app. </p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name for a branch that is part of an Amplify app. </p>
   * @public
   */
  branchName: string | undefined;

  /**
   * <p>The description for a webhook. </p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>Describes a webhook that connects repository events to an Amplify app. </p>
 * @public
 */
export interface Webhook {
  /**
   * <p>The Amazon Resource Name (ARN) for the webhook. </p>
   * @public
   */
  webhookArn: string | undefined;

  /**
   * <p>The ID of the webhook. </p>
   * @public
   */
  webhookId: string | undefined;

  /**
   * <p>The URL of the webhook. </p>
   * @public
   */
  webhookUrl: string | undefined;

  /**
   * <p>The unique ID of an Amplify app.</p>
   * @public
   */
  appId?: string | undefined;

  /**
   * <p>The name for a branch that is part of an Amplify app. </p>
   * @public
   */
  branchName: string | undefined;

  /**
   * <p>The description for a webhook. </p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>A timestamp of when Amplify created the webhook in your Git
   *             repository.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>A timestamp of when Amplify updated the webhook in your Git
   *             repository.</p>
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * <p>The result structure for the create webhook request. </p>
 * @public
 */
export interface CreateWebhookResult {
  /**
   * <p>Describes a webhook that connects repository events to an Amplify app. </p>
   * @public
   */
  webhook: Webhook | undefined;
}

/**
 * <p>Describes the request structure for the delete app request. </p>
 * @public
 */
export interface DeleteAppRequest {
  /**
   * <p>The unique ID for an Amplify app. </p>
   * @public
   */
  appId: string | undefined;
}

/**
 * <p>The result structure for the delete app request. </p>
 * @public
 */
export interface DeleteAppResult {
  /**
   * <p>Represents the different branches of a repository for building, deploying, and hosting
   *             an Amplify app. </p>
   * @public
   */
  app: App | undefined;
}

/**
 * <p>The request structure for the delete backend environment request. </p>
 * @public
 */
export interface DeleteBackendEnvironmentRequest {
  /**
   * <p>The unique ID of an Amplify app. </p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of a backend environment of an Amplify app. </p>
   * @public
   */
  environmentName: string | undefined;
}

/**
 * <p>The result structure of the delete backend environment result. </p>
 * @public
 */
export interface DeleteBackendEnvironmentResult {
  /**
   * <p>Describes the backend environment for an Amplify app. </p>
   * @public
   */
  backendEnvironment: BackendEnvironment | undefined;
}

/**
 * <p> The request structure for the delete branch request. </p>
 * @public
 */
export interface DeleteBranchRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the branch. </p>
   * @public
   */
  branchName: string | undefined;
}

/**
 * <p>The result structure for the delete branch request. </p>
 * @public
 */
export interface DeleteBranchResult {
  /**
   * <p>The branch for an Amplify app, which maps to a third-party repository branch. </p>
   * @public
   */
  branch: Branch | undefined;
}

/**
 * <p> The request structure for the delete domain association request. </p>
 * @public
 */
export interface DeleteDomainAssociationRequest {
  /**
   * <p> The unique id for an Amplify app. </p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p> The name of the domain. </p>
   * @public
   */
  domainName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainAssociationResult {
  /**
   * <p>Describes the association between a custom domain and an Amplify app. </p>
   * @public
   */
  domainAssociation: DomainAssociation | undefined;
}

/**
 * <p> The request structure for the delete job request. </p>
 * @public
 */
export interface DeleteJobRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the branch to use for the job. </p>
   * @public
   */
  branchName: string | undefined;

  /**
   * <p> The unique ID for the job. </p>
   * @public
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
export const SourceUrlType = {
  BUCKET_PREFIX: "BUCKET_PREFIX",
  ZIP: "ZIP",
} as const;

/**
 * @public
 */
export type SourceUrlType = (typeof SourceUrlType)[keyof typeof SourceUrlType];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  CREATED: "CREATED",
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
 * <p> Describes the summary for an execution job for an Amplify app. </p>
 * @public
 */
export interface JobSummary {
  /**
   * <p> The Amazon Resource Name (ARN) for the job. </p>
   * @public
   */
  jobArn: string | undefined;

  /**
   * <p> The unique ID for the job. </p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p> The commit ID from a third-party repository provider for the job. </p>
   * @public
   */
  commitId: string | undefined;

  /**
   * <p> The commit message from a third-party repository provider for the job. </p>
   * @public
   */
  commitMessage: string | undefined;

  /**
   * <p>The commit date and time for the job. </p>
   * @public
   */
  commitTime: Date | undefined;

  /**
   * <p> The start date and time for the job. </p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p> The current status for the job. </p>
   * @public
   */
  status: JobStatus | undefined;

  /**
   * <p> The end date and time for the job. </p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p> The type for the job. If the value is <code>RELEASE</code>, the job was manually
   *             released from its source by using the <code>StartJob</code> API. This value is available
   *             only for apps that are connected to a repository.</p>
   *          <p>If the value is <code>RETRY</code>, the job was manually retried using the
   *                 <code>StartJob</code> API. If the value is <code>WEB_HOOK</code>, the job was
   *             automatically triggered by webhooks. If the value is <code>MANUAL</code>, the job is for
   *             a manually deployed app. Manually deployed apps are not connected to a Git
   *             repository.</p>
   * @public
   */
  jobType: JobType | undefined;

  /**
   * <p>The source URL for the files to deploy. The source URL can be either an HTTP GET URL
   *             that is publicly accessible and downloads a single .zip file, or an Amazon S3
   *             bucket and prefix.</p>
   * @public
   */
  sourceUrl?: string | undefined;

  /**
   * <p>The type of source specified by the <code>sourceURL</code>. If the value is
   *                 <code>ZIP</code>, the source is a .zip file. If the value is
   *                 <code>BUCKET_PREFIX</code>, the source is an Amazon S3 bucket and prefix. If
   *             no value is specified, the default is <code>ZIP</code>.</p>
   * @public
   */
  sourceUrlType?: SourceUrlType | undefined;
}

/**
 * <p> The result structure for the delete job request. </p>
 * @public
 */
export interface DeleteJobResult {
  /**
   * <p> Describes the summary for an execution job for an Amplify app. </p>
   * @public
   */
  jobSummary: JobSummary | undefined;
}

/**
 * <p>The request structure for the delete webhook request. </p>
 * @public
 */
export interface DeleteWebhookRequest {
  /**
   * <p>The unique ID for a webhook. </p>
   * @public
   */
  webhookId: string | undefined;
}

/**
 * <p>The result structure for the delete webhook request. </p>
 * @public
 */
export interface DeleteWebhookResult {
  /**
   * <p>Describes a webhook that connects repository events to an Amplify app. </p>
   * @public
   */
  webhook: Webhook | undefined;
}

/**
 * <p>The request structure for the generate access logs request. </p>
 * @public
 */
export interface GenerateAccessLogsRequest {
  /**
   * <p>The time at which the logs should start. The time range specified is inclusive of the
   *             start time. </p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The time at which the logs should end. The time range specified is inclusive of the
   *             end time. </p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The name of the domain. </p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p>The unique ID for an Amplify app. </p>
   * @public
   */
  appId: string | undefined;
}

/**
 * <p>The result structure for the generate access logs request. </p>
 * @public
 */
export interface GenerateAccessLogsResult {
  /**
   * <p>The pre-signed URL for the requested access logs. </p>
   * @public
   */
  logUrl?: string | undefined;
}

/**
 * <p>The request structure for the get app request. </p>
 * @public
 */
export interface GetAppRequest {
  /**
   * <p>The unique ID for an Amplify app. </p>
   * @public
   */
  appId: string | undefined;
}

/**
 * @public
 */
export interface GetAppResult {
  /**
   * <p>Represents the different branches of a repository for building, deploying, and hosting
   *             an Amplify app. </p>
   * @public
   */
  app: App | undefined;
}

/**
 * <p>Returns the request structure for the get artifact request. </p>
 * @public
 */
export interface GetArtifactUrlRequest {
  /**
   * <p>The unique ID for an artifact. </p>
   * @public
   */
  artifactId: string | undefined;
}

/**
 * <p>Returns the result structure for the get artifact request. </p>
 * @public
 */
export interface GetArtifactUrlResult {
  /**
   * <p>The unique ID for an artifact. </p>
   * @public
   */
  artifactId: string | undefined;

  /**
   * <p>The presigned URL for the artifact. </p>
   * @public
   */
  artifactUrl: string | undefined;
}

/**
 * <p>The request structure for the get backend environment request. </p>
 * @public
 */
export interface GetBackendEnvironmentRequest {
  /**
   * <p>The unique id for an Amplify app. </p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name for the backend environment. </p>
   * @public
   */
  environmentName: string | undefined;
}

/**
 * <p>The result structure for the get backend environment result. </p>
 * @public
 */
export interface GetBackendEnvironmentResult {
  /**
   * <p>Describes the backend environment for an Amplify app. </p>
   * @public
   */
  backendEnvironment: BackendEnvironment | undefined;
}

/**
 * <p> The request structure for the get branch request. </p>
 * @public
 */
export interface GetBranchRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the branch. </p>
   * @public
   */
  branchName: string | undefined;
}

/**
 * @public
 */
export interface GetBranchResult {
  /**
   * <p> The branch for an Amplify app, which maps to a third-party repository branch. </p>
   * @public
   */
  branch: Branch | undefined;
}

/**
 * <p> The request structure for the get domain association request. </p>
 * @public
 */
export interface GetDomainAssociationRequest {
  /**
   * <p> The unique id for an Amplify app. </p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p> The name of the domain. </p>
   * @public
   */
  domainName: string | undefined;
}

/**
 * <p> The result structure for the get domain association request. </p>
 * @public
 */
export interface GetDomainAssociationResult {
  /**
   * <p> Describes the structure of a domain association, which associates a custom domain
   *             with an Amplify app. </p>
   * @public
   */
  domainAssociation: DomainAssociation | undefined;
}

/**
 * <p>The request structure for the get job request. </p>
 * @public
 */
export interface GetJobRequest {
  /**
   * <p>The unique ID for an Amplify app. </p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the branch to use for the job. </p>
   * @public
   */
  branchName: string | undefined;

  /**
   * <p>The unique ID for the job. </p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * <p> Describes an execution step, for an execution job, for an Amplify app. </p>
 * @public
 */
export interface Step {
  /**
   * <p> The name of the execution step. </p>
   * @public
   */
  stepName: string | undefined;

  /**
   * <p> The start date and time of the execution step. </p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p> The status of the execution step. </p>
   * @public
   */
  status: JobStatus | undefined;

  /**
   * <p> The end date and time of the execution step. </p>
   * @public
   */
  endTime: Date | undefined;

  /**
   * <p> The URL to the logs for the execution step. </p>
   * @public
   */
  logUrl?: string | undefined;

  /**
   * <p> The URL to the build artifact for the execution step. </p>
   * @public
   */
  artifactsUrl?: string | undefined;

  /**
   * <p> The URL to the test artifact for the execution step. </p>
   * @public
   */
  testArtifactsUrl?: string | undefined;

  /**
   * <p> The URL to the test configuration for the execution step. </p>
   * @public
   */
  testConfigUrl?: string | undefined;

  /**
   * <p> The list of screenshot URLs for the execution step, if relevant. </p>
   * @public
   */
  screenshots?: Record<string, string> | undefined;

  /**
   * <p> The reason for the current step status. </p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p> The context for the current step. Includes a build image if the step is build.
   *         </p>
   * @public
   */
  context?: string | undefined;
}

/**
 * <p> Describes an execution job for an Amplify app. </p>
 * @public
 */
export interface Job {
  /**
   * <p> Describes the summary for an execution job for an Amplify app. </p>
   * @public
   */
  summary: JobSummary | undefined;

  /**
   * <p> The execution steps for an execution job, for an Amplify app. </p>
   * @public
   */
  steps: Step[] | undefined;
}

/**
 * @public
 */
export interface GetJobResult {
  /**
   * <p> Describes an execution job for an Amplify app. </p>
   * @public
   */
  job: Job | undefined;
}

/**
 * <p>The request structure for the get webhook request. </p>
 * @public
 */
export interface GetWebhookRequest {
  /**
   * <p>The unique ID for a webhook. </p>
   * @public
   */
  webhookId: string | undefined;
}

/**
 * <p>The result structure for the get webhook request. </p>
 * @public
 */
export interface GetWebhookResult {
  /**
   * <p>Describes the structure of a webhook. </p>
   * @public
   */
  webhook: Webhook | undefined;
}

/**
 * <p>The request structure for the list apps request. </p>
 * @public
 */
export interface ListAppsRequest {
  /**
   * <p>A pagination token. If non-null, the pagination token is returned in a result. Pass
   *             its value in another request to retrieve more entries. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of records to list in a single response. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The result structure for an Amplify app list request. </p>
 * @public
 */
export interface ListAppsResult {
  /**
   * <p>A list of Amplify apps. </p>
   * @public
   */
  apps: App[] | undefined;

  /**
   * <p>A pagination token. Set to null to start listing apps from start. If non-null, the
   *             pagination token is returned in a result. Pass its value in here to list more projects.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Describes the request structure for the list artifacts request. </p>
 * @public
 */
export interface ListArtifactsRequest {
  /**
   * <p>The unique ID for an Amplify app. </p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of a branch that is part of an Amplify app. </p>
   * @public
   */
  branchName: string | undefined;

  /**
   * <p>The unique ID for a job. </p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>A pagination token. Set to null to start listing artifacts from start. If a non-null
   *             pagination token is returned in a result, pass its value in here to list more artifacts.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of records to list in a single response. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Describes an artifact. </p>
 * @public
 */
export interface Artifact {
  /**
   * <p>The file name for the artifact. </p>
   * @public
   */
  artifactFileName: string | undefined;

  /**
   * <p>The unique ID for the artifact. </p>
   * @public
   */
  artifactId: string | undefined;
}

/**
 * <p>The result structure for the list artifacts request. </p>
 * @public
 */
export interface ListArtifactsResult {
  /**
   * <p>A list of artifacts. </p>
   * @public
   */
  artifacts: Artifact[] | undefined;

  /**
   * <p>A pagination token. If a non-null pagination token is returned in a result, pass its
   *             value in another request to retrieve more entries. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The request structure for the list backend environments request. </p>
 * @public
 */
export interface ListBackendEnvironmentsRequest {
  /**
   * <p>The unique ID for an Amplify app. </p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the backend environment </p>
   * @public
   */
  environmentName?: string | undefined;

  /**
   * <p>A pagination token. Set to null to start listing backend environments from the start.
   *             If a non-null pagination token is returned in a result, pass its value in here to list
   *             more backend environments. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of records to list in a single response. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The result structure for the list backend environments result. </p>
 * @public
 */
export interface ListBackendEnvironmentsResult {
  /**
   * <p>The list of backend environments for an Amplify app. </p>
   * @public
   */
  backendEnvironments: BackendEnvironment[] | undefined;

  /**
   * <p>A pagination token. If a non-null pagination token is returned in a result, pass its
   *             value in another request to retrieve more entries. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The request structure for the list branches request. </p>
 * @public
 */
export interface ListBranchesRequest {
  /**
   * <p>The unique ID for an Amplify app. </p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>A pagination token. Set to null to start listing branches from the start. If a
   *             non-null pagination token is returned in a result, pass its value in here to list more
   *             branches. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p> The maximum number of records to list in a single response. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p> The result structure for the list branches request. </p>
 * @public
 */
export interface ListBranchesResult {
  /**
   * <p> A list of branches for an Amplify app. </p>
   * @public
   */
  branches: Branch[] | undefined;

  /**
   * <p> A pagination token. If a non-null pagination token is returned in a result, pass its
   *             value in another request to retrieve more entries. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p> The request structure for the list domain associations request. </p>
 * @public
 */
export interface ListDomainAssociationsRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p> A pagination token. Set to null to start listing apps from the start. If non-null, a
   *             pagination token is returned in a result. Pass its value in here to list more projects.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p> The maximum number of records to list in a single response. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p> The result structure for the list domain association request. </p>
 * @public
 */
export interface ListDomainAssociationsResult {
  /**
   * <p> A list of domain associations. </p>
   * @public
   */
  domainAssociations: DomainAssociation[] | undefined;

  /**
   * <p> A pagination token. If non-null, a pagination token is returned in a result. Pass its
   *             value in another request to retrieve more entries. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p> The request structure for the list jobs request. </p>
 * @public
 */
export interface ListJobsRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the branch to use for the request. </p>
   * @public
   */
  branchName: string | undefined;

  /**
   * <p>A pagination token. Set to null to start listing steps from the start. If a non-null
   *             pagination token is returned in a result, pass its value in here to list more steps.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of records to list in a single response. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The maximum number of records to list in a single response. </p>
 * @public
 */
export interface ListJobsResult {
  /**
   * <p>The result structure for the list job result request. </p>
   * @public
   */
  jobSummaries: JobSummary[] | undefined;

  /**
   * <p>A pagination token. If non-null the pagination token is returned in a result. Pass its
   *             value in another request to retrieve more entries. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The request structure to use to list tags for a resource. </p>
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) to use to list tags. </p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * <p>The response for the list tags for resource request. </p>
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tags for the specified The Amazon Resource Name (ARN). </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>An operation failed due to a non-existent resource. </p>
 * @public
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
 * <p>The request structure for the list webhooks request. </p>
 * @public
 */
export interface ListWebhooksRequest {
  /**
   * <p>The unique ID for an Amplify app. </p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>A pagination token. Set to null to start listing webhooks from the start. If
   *             non-null,the pagination token is returned in a result. Pass its value in here to list
   *             more webhooks. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of records to list in a single response. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The result structure for the list webhooks request. </p>
 * @public
 */
export interface ListWebhooksResult {
  /**
   * <p>A list of webhooks. </p>
   * @public
   */
  webhooks: Webhook[] | undefined;

  /**
   * <p>A pagination token. If non-null, the pagination token is returned in a result. Pass
   *             its value in another request to retrieve more entries. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The request structure for the start a deployment request. </p>
 * @public
 */
export interface StartDeploymentRequest {
  /**
   * <p>The unique ID for an Amplify app. </p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the branch to use for the deployment job. </p>
   * @public
   */
  branchName: string | undefined;

  /**
   * <p>The job ID for this deployment that is generated by the <code>CreateDeployment</code>
   *             request. </p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>The source URL for the deployment that is used when calling
   *                 <code>StartDeployment</code> without <code>CreateDeployment</code>. The source URL
   *             can be either an HTTP GET URL that is publicly accessible and downloads a single .zip
   *             file, or an Amazon S3 bucket and prefix.</p>
   * @public
   */
  sourceUrl?: string | undefined;

  /**
   * <p>The type of source specified by the <code>sourceURL</code>. If the value is
   *                 <code>ZIP</code>, the source is a .zip file. If the value is
   *                 <code>BUCKET_PREFIX</code>, the source is an Amazon S3 bucket and prefix. If
   *             no value is specified, the default is <code>ZIP</code>.</p>
   * @public
   */
  sourceUrlType?: SourceUrlType | undefined;
}

/**
 * <p>The result structure for the start a deployment request. </p>
 * @public
 */
export interface StartDeploymentResult {
  /**
   * <p>The summary for the job. </p>
   * @public
   */
  jobSummary: JobSummary | undefined;
}

/**
 * <p>The request structure for the start job request. </p>
 * @public
 */
export interface StartJobRequest {
  /**
   * <p>The unique ID for an Amplify app. </p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the branch to use for the job. </p>
   * @public
   */
  branchName: string | undefined;

  /**
   * <p>The unique ID for an existing job. This is required if the value of
   *                 <code>jobType</code> is <code>RETRY</code>. </p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>Describes the type for the job. The job type <code>RELEASE</code> starts a new job
   *             with the latest change from the specified branch. This value is available only for apps
   *             that are connected to a repository. </p>
   *          <p>The job type <code>RETRY</code> retries an existing job. If the job type value is
   *                 <code>RETRY</code>, the <code>jobId</code> is also required. </p>
   * @public
   */
  jobType: JobType | undefined;

  /**
   * <p>A descriptive reason for starting the job.</p>
   * @public
   */
  jobReason?: string | undefined;

  /**
   * <p> The commit ID from a third-party repository provider for the job. </p>
   * @public
   */
  commitId?: string | undefined;

  /**
   * <p> The commit message from a third-party repository provider for the job. </p>
   * @public
   */
  commitMessage?: string | undefined;

  /**
   * <p> The commit date and time for the job. </p>
   * @public
   */
  commitTime?: Date | undefined;
}

/**
 * <p> The result structure for the run job request. </p>
 * @public
 */
export interface StartJobResult {
  /**
   * <p> The summary for the job. </p>
   * @public
   */
  jobSummary: JobSummary | undefined;
}

/**
 * <p> The request structure for the stop job request. </p>
 * @public
 */
export interface StopJobRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the branch to use for the stop job request. </p>
   * @public
   */
  branchName: string | undefined;

  /**
   * <p> The unique id for the job. </p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * <p> The result structure for the stop job request. </p>
 * @public
 */
export interface StopJobResult {
  /**
   * <p> The summary for the job. </p>
   * @public
   */
  jobSummary: JobSummary | undefined;
}

/**
 * <p>The request structure to tag a resource with a tag key and value.</p>
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) to use to tag a resource. </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags used to tag the resource. </p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * <p>The response for the tag resource request. </p>
 * @public
 */
export interface TagResourceResponse {}

/**
 * <p>The request structure for the untag resource request. </p>
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) to use to untag a resource. </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys to use to untag a resource. </p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * <p>The response for the untag resource request. </p>
 * @public
 */
export interface UntagResourceResponse {}

/**
 * <p>The request structure for the update app request. </p>
 * @public
 */
export interface UpdateAppRequest {
  /**
   * <p>The unique ID for an Amplify app. </p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name for an Amplify app. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description for an Amplify app. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The platform for the Amplify app. For a static app, set the platform type to
   *                 <code>WEB</code>. For a dynamic server-side rendered (SSR) app, set the platform
   *             type to <code>WEB_COMPUTE</code>. For an app requiring Amplify Hosting's original SSR
   *             support only, set the platform type to <code>WEB_DYNAMIC</code>.</p>
   *          <p>If you are deploying an SSG only app with Next.js version 14 or later, you must set
   *             the platform type to <code>WEB_COMPUTE</code>.</p>
   * @public
   */
  platform?: Platform | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to assign to an SSR app.
   *             The SSR Compute role allows the Amplify Hosting compute service to
   *             securely access specific Amazon Web Services resources based on the role's permissions.
   *             For more information about the SSR Compute role, see <a href="https://docs.aws.amazon.com/amplify/latest/userguide/amplify-SSR-compute-role.html">Adding an SSR Compute
   *                 role</a> in the <i>Amplify User Guide</i>.</p>
   * @public
   */
  computeRoleArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role for the Amplify app.</p>
   * @public
   */
  iamServiceRoleArn?: string | undefined;

  /**
   * <p>The environment variables for an Amplify app. </p>
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * <p>Enables branch auto-building for an Amplify app. </p>
   * @public
   */
  enableBranchAutoBuild?: boolean | undefined;

  /**
   * <p>Automatically disconnects a branch in the Amplify console when you delete a branch
   *             from your Git repository. </p>
   * @public
   */
  enableBranchAutoDeletion?: boolean | undefined;

  /**
   * <p>Enables basic authorization for an Amplify app. </p>
   * @public
   */
  enableBasicAuth?: boolean | undefined;

  /**
   * <p>The basic authorization credentials for an Amplify app. You must base64-encode the
   *             authorization credentials and provide them in the format
   *             <code>user:password</code>.</p>
   * @public
   */
  basicAuthCredentials?: string | undefined;

  /**
   * <p>The custom redirect and rewrite rules for an Amplify app. </p>
   * @public
   */
  customRules?: CustomRule[] | undefined;

  /**
   * <p>The build specification (build spec) for an Amplify app. </p>
   * @public
   */
  buildSpec?: string | undefined;

  /**
   * <p>The custom HTTP headers for an Amplify app.</p>
   * @public
   */
  customHeaders?: string | undefined;

  /**
   * <p>Enables automated branch creation for an Amplify app. </p>
   * @public
   */
  enableAutoBranchCreation?: boolean | undefined;

  /**
   * <p>Describes the automated branch creation glob patterns for an Amplify app. </p>
   * @public
   */
  autoBranchCreationPatterns?: string[] | undefined;

  /**
   * <p>The automated branch creation configuration for an Amplify app. </p>
   * @public
   */
  autoBranchCreationConfig?: AutoBranchCreationConfig | undefined;

  /**
   * <p>The name of the Git repository for an Amplify app.</p>
   * @public
   */
  repository?: string | undefined;

  /**
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
   *             App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/userguide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the
   *                 <i>Amplify User Guide</i> .</p>
   * @public
   */
  oauthToken?: string | undefined;

  /**
   * <p>The personal access token for a GitHub repository for an Amplify app. The personal
   *             access token is used to authorize access to a GitHub repository using the Amplify GitHub
   *             App. The token is not stored.</p>
   *          <p>Use <code>accessToken</code> for GitHub repositories only. To authorize access to a
   *             repository provider such as Bitbucket or CodeCommit, use <code>oauthToken</code>.</p>
   *          <p>You must specify either <code>accessToken</code> or <code>oauthToken</code> when you
   *             update an app.</p>
   *          <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work
   *             with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub
   *             App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/userguide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the
   *                 <i>Amplify User Guide</i> .</p>
   * @public
   */
  accessToken?: string | undefined;

  /**
   * <p>Describes the configuration details that apply to the jobs for an Amplify app.</p>
   * @public
   */
  jobConfig?: JobConfig | undefined;

  /**
   * <p>The cache configuration for the Amplify app.</p>
   * @public
   */
  cacheConfig?: CacheConfig | undefined;
}

/**
 * <p>The result structure for an Amplify app update request. </p>
 * @public
 */
export interface UpdateAppResult {
  /**
   * <p>Represents the updated Amplify app. </p>
   * @public
   */
  app: App | undefined;
}

/**
 * <p>The request structure for the update branch request. </p>
 * @public
 */
export interface UpdateBranchRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The name of the branch. </p>
   * @public
   */
  branchName: string | undefined;

  /**
   * <p> The description for the branch. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The framework for the branch. </p>
   * @public
   */
  framework?: string | undefined;

  /**
   * <p> Describes the current stage for the branch. </p>
   * @public
   */
  stage?: Stage | undefined;

  /**
   * <p> Enables notifications for the branch. </p>
   * @public
   */
  enableNotification?: boolean | undefined;

  /**
   * <p> Enables auto building for the branch. </p>
   * @public
   */
  enableAutoBuild?: boolean | undefined;

  /**
   * <p>Specifies whether the skew protection feature is enabled for the branch.</p>
   *          <p>Deployment skew protection is available to Amplify applications to
   *             eliminate version skew issues between client and servers in web applications. When you
   *             apply skew protection to a branch, you can ensure that your clients always interact with
   *             the correct version of server-side assets, regardless of when a deployment occurs. For
   *             more information about skew protection, see <a href="https://docs.aws.amazon.com/amplify/latest/userguide/skew-protection.html">Skew protection for Amplify deployments</a> in the <i>Amplify User
   *                 Guide</i>.</p>
   * @public
   */
  enableSkewProtection?: boolean | undefined;

  /**
   * <p> The environment variables for the branch. </p>
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * <p> The basic authorization credentials for the branch. You must base64-encode the
   *             authorization credentials and provide them in the format
   *             <code>user:password</code>.</p>
   * @public
   */
  basicAuthCredentials?: string | undefined;

  /**
   * <p> Enables basic authorization for the branch. </p>
   * @public
   */
  enableBasicAuth?: boolean | undefined;

  /**
   * <p>Enables performance mode for the branch.</p>
   *          <p>Performance mode optimizes for faster hosting performance by keeping content cached at
   *             the edge for a longer interval. When performance mode is enabled, hosting configuration
   *             or code changes can take up to 10 minutes to roll out. </p>
   * @public
   */
  enablePerformanceMode?: boolean | undefined;

  /**
   * <p> The build specification (build spec) for the branch. </p>
   * @public
   */
  buildSpec?: string | undefined;

  /**
   * <p> The content Time to Live (TTL) for the website in seconds. </p>
   * @public
   */
  ttl?: string | undefined;

  /**
   * <p> The display name for a branch. This is used as the default domain prefix. </p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p> Enables pull request previews for this branch. </p>
   * @public
   */
  enablePullRequestPreview?: boolean | undefined;

  /**
   * <p> The Amplify environment name for the pull request. </p>
   * @public
   */
  pullRequestEnvironmentName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for a backend environment that is part of a Gen 1
   *             Amplify app. </p>
   *          <p>This field is available to Amplify Gen 1 apps only where the backend is
   *             created using Amplify Studio or the Amplify command line
   *             interface (CLI).</p>
   * @public
   */
  backendEnvironmentArn?: string | undefined;

  /**
   * <p>The backend for a <code>Branch</code> of an Amplify app. Use for a
   *             backend created from an CloudFormation stack.</p>
   *          <p>This field is available to Amplify Gen 2 apps only. When you deploy an
   *             application with Amplify Gen 2, you provision the app's backend infrastructure using
   *             Typescript code.</p>
   * @public
   */
  backend?: Backend | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to assign to a branch of
   *             an SSR app. The SSR Compute role allows the Amplify Hosting compute
   *             service to securely access specific Amazon Web Services resources based on the role's
   *             permissions. For more information about the SSR Compute role, see <a href="https://docs.aws.amazon.com/amplify/latest/userguide/amplify-SSR-compute-role.html">Adding an SSR Compute role</a> in the <i>Amplify User
   *                 Guide</i>.</p>
   * @public
   */
  computeRoleArn?: string | undefined;
}

/**
 * <p> The result structure for the update branch request. </p>
 * @public
 */
export interface UpdateBranchResult {
  /**
   * <p> The branch for an Amplify app, which maps to a third-party repository branch. </p>
   * @public
   */
  branch: Branch | undefined;
}

/**
 * <p> The request structure for the update domain association request. </p>
 * @public
 */
export interface UpdateDomainAssociationRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p> The name of the domain. </p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p> Enables the automated creation of subdomains for branches. </p>
   * @public
   */
  enableAutoSubDomain?: boolean | undefined;

  /**
   * <p> Describes the settings for the subdomain. </p>
   * @public
   */
  subDomainSettings?: SubDomainSetting[] | undefined;

  /**
   * <p> Sets the branch patterns for automatic subdomain creation. </p>
   * @public
   */
  autoSubDomainCreationPatterns?: string[] | undefined;

  /**
   * <p> The required AWS Identity and Access Management (IAM) service role for the Amazon
   *             Resource Name (ARN) for automatically creating subdomains. </p>
   * @public
   */
  autoSubDomainIAMRole?: string | undefined;

  /**
   * <p>The type of SSL/TLS certificate to use for your custom domain.</p>
   * @public
   */
  certificateSettings?: CertificateSettings | undefined;
}

/**
 * <p> The result structure for the update domain association request. </p>
 * @public
 */
export interface UpdateDomainAssociationResult {
  /**
   * <p> Describes a domain association, which associates a custom domain with an Amplify app.
   *         </p>
   * @public
   */
  domainAssociation: DomainAssociation | undefined;
}

/**
 * <p>The request structure for the update webhook request. </p>
 * @public
 */
export interface UpdateWebhookRequest {
  /**
   * <p>The unique ID for a webhook. </p>
   * @public
   */
  webhookId: string | undefined;

  /**
   * <p>The name for a branch that is part of an Amplify app. </p>
   * @public
   */
  branchName?: string | undefined;

  /**
   * <p>The description for a webhook. </p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>The result structure for the update webhook request. </p>
 * @public
 */
export interface UpdateWebhookResult {
  /**
   * <p>Describes a webhook that connects repository events to an Amplify app. </p>
   * @public
   */
  webhook: Webhook | undefined;
}
