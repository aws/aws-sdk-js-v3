// smithy-typescript generated code
import type {
  BuildComputeType,
  CacheConfigType,
  CertificateType,
  DomainStatus,
  JobStatus,
  JobType,
  Platform,
  RepositoryCloneMethod,
  SourceUrlType,
  Stage,
  UpdateStatus,
  WafStatus,
} from "./enums";

/**
 * Describes the automated branch creation configuration.
 *
 * @public
 */
export interface AutoBranchCreationConfig {
  /**
   * Describes the current stage for the autocreated branch.
   *
   * @public
   */
  stage?: Stage | undefined;

  /**
   * The framework for the autocreated branch.
   *
   * @public
   */
  framework?: string | undefined;

  /**
   * Enables auto building for the autocreated branch.
   *
   * @public
   */
  enableAutoBuild?: boolean | undefined;

  /**
   * The environment variables for the autocreated branch.
   *
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * The basic authorization credentials for the autocreated branch. You must base64-encode the authorization credentials and provide them in the format `user:password`.
   *
   * @public
   */
  basicAuthCredentials?: string | undefined;

  /**
   * Enables basic authorization for the autocreated branch.
   *
   * @public
   */
  enableBasicAuth?: boolean | undefined;

  /**
   * Enables performance mode for the branch.
   *
   * Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out.
   *
   * @public
   */
  enablePerformanceMode?: boolean | undefined;

  /**
   * The build specification (build spec) for the autocreated branch.
   *
   * @public
   */
  buildSpec?: string | undefined;

  /**
   * Enables pull request previews for the autocreated branch.
   *
   * @public
   */
  enablePullRequestPreview?: boolean | undefined;

  /**
   * The Amplify environment name for the pull request.
   *
   * @public
   */
  pullRequestEnvironmentName?: string | undefined;
}

/**
 * Describes the cache configuration for an Amplify app.
 *
 * For more information about how Amplify applies an optimal cache configuration for your app based on the type of content that is being served, see [Managing cache configuration](https://docs.aws.amazon.com/amplify/latest/userguide/managing-cache-configuration) in the *Amplify User guide*.
 *
 * @public
 */
export interface CacheConfig {
  /**
   * The type of cache configuration to use for an Amplify app.
   *
   * The `AMPLIFY_MANAGED` cache configuration automatically applies an optimized cache configuration for your app based on its platform, routing rules, and rewrite rules.
   *
   * The `AMPLIFY_MANAGED_NO_COOKIES` cache configuration type is the same as `AMPLIFY_MANAGED`, except that it excludes all cookies from the cache key. This is the default setting.
   *
   * @public
   */
  type: CacheConfigType | undefined;
}

/**
 * Describes a custom rewrite or redirect rule.
 *
 * @public
 */
export interface CustomRule {
  /**
   * The source pattern for a URL rewrite or redirect rule.
   *
   * @public
   */
  source: string | undefined;

  /**
   * The target pattern for a URL rewrite or redirect rule.
   *
   * @public
   */
  target: string | undefined;

  /**
   * The status code for a URL rewrite or redirect rule.
   *
   * - **200**
   *
   *   Represents a 200 rewrite rule.
   *
   * - **301**
   *
   *   Represents a 301 (moved permanently) redirect rule. This and all future requests should be directed to the target URL.
   *
   * - **302**
   *
   *   Represents a 302 temporary redirect rule.
   *
   * - **404**
   *
   *   Represents a 404 redirect rule.
   *
   * - **404-200**
   *
   *   Represents a 404 rewrite rule.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The condition for a URL rewrite or redirect rule, such as a country code.
   *
   * @public
   */
  condition?: string | undefined;
}

/**
 * Describes the configuration details that apply to the jobs for an Amplify app.
 *
 * Use `JobConfig` to apply configuration to jobs, such as customizing the build instance size when you create or update an Amplify app. For more information about customizable build instances, see [Custom build instances](https://docs.aws.amazon.com/amplify/latest/userguide/custom-build-instance.html) in the *Amplify User Guide*.
 *
 * @public
 */
export interface JobConfig {
  /**
   * Specifies the size of the build instance. Amplify supports three instance sizes: `STANDARD_8GB`, `LARGE_16GB`, and `XLARGE_72GB`. If you don't specify a value, Amplify uses the `STANDARD_8GB` default.
   *
   * The following list describes the CPU, memory, and storage capacity for each build instance type:
   *
   * - **STANDARD_8GB**
   *
   *   - vCPUs: 4
   *   - Memory: 8 GiB
   *   - Disk space: 128 GB
   *
   * - **LARGE_16GB**
   *
   *   - vCPUs: 8
   *   - Memory: 16 GiB
   *   - Disk space: 128 GB
   *
   * - **XLARGE_72GB**
   *
   *   - vCPUs: 36
   *   - Memory: 72 GiB
   *   - Disk space: 256 GB
   *
   * @public
   */
  buildComputeType: BuildComputeType | undefined;
}

/**
 * The request structure used to create apps in Amplify.
 *
 * @public
 */
export interface CreateAppRequest {
  /**
   * The name of the Amplify app.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the Amplify app.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Git repository for the Amplify app.
   *
   * @public
   */
  repository?: string | undefined;

  /**
   * The platform for the Amplify app. For a static app, set the platform type to `WEB`. For a dynamic server-side rendered (SSR) app, set the platform type to `WEB_COMPUTE`. For an app requiring Amplify Hosting's original SSR support only, set the platform type to `WEB_DYNAMIC`.
   *
   * If you are deploying an SSG only app with Next.js version 14 or later, you must set the platform type to `WEB_COMPUTE` and set the artifacts `baseDirectory` to `.next` in the application's build settings. For an example of the build specification settings, see [Amplify build settings for a Next.js 14 SSG application](https://docs.aws.amazon.com/amplify/latest/userguide/deploy-nextjs-app.html#build-setting-detection-ssg-14) in the *Amplify Hosting User Guide*.
   *
   * @public
   */
  platform?: Platform | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to assign to an SSR app. The SSR Compute role allows the Amplify Hosting compute service to securely access specific Amazon Web Services resources based on the role's permissions. For more information about the SSR Compute role, see [Adding an SSR Compute role](https://docs.aws.amazon.com/amplify/latest/userguide/amplify-SSR-compute-role.html) in the *Amplify User Guide*.
   *
   * @public
   */
  computeRoleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM service role for the Amplify app.
   *
   * @public
   */
  iamServiceRoleArn?: string | undefined;

  /**
   * The OAuth token for a third-party source control system for an Amplify app. The OAuth token is used to create a webhook and a read-only deploy key using SSH cloning. The OAuth token is not stored.
   *
   * Use `oauthToken` for repository providers other than GitHub, such as Bitbucket or CodeCommit. To authorize access to GitHub as your repository provider, use `accessToken`.
   *
   * You must specify either `oauthToken` or `accessToken` when you create a new app.
   *
   * Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see [Migrating an existing OAuth app to the Amplify GitHub App](https://docs.aws.amazon.com/amplify/latest/userguide/setting-up-GitHub-access.html#migrating-to-github-app-auth) in the *Amplify User Guide* .
   *
   * @public
   */
  oauthToken?: string | undefined;

  /**
   * The personal access token for a GitHub repository for an Amplify app. The personal access token is used to authorize access to a GitHub repository using the Amplify GitHub App. The token is not stored.
   *
   * Use `accessToken` for GitHub repositories only. To authorize access to a repository provider such as Bitbucket or CodeCommit, use `oauthToken`.
   *
   * You must specify either `accessToken` or `oauthToken` when you create a new app.
   *
   * Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see [Migrating an existing OAuth app to the Amplify GitHub App](https://docs.aws.amazon.com/amplify/latest/userguide/setting-up-GitHub-access.html#migrating-to-github-app-auth) in the *Amplify User Guide* .
   *
   * @public
   */
  accessToken?: string | undefined;

  /**
   * The environment variables map for an Amplify app.
   *
   * For a list of the environment variables that are accessible to Amplify by default, see [Amplify Environment variables](https://docs.aws.amazon.com/amplify/latest/userguide/amplify-console-environment-variables.html) in the *Amplify Hosting User Guide*.
   *
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * Enables the auto building of branches for an Amplify app.
   *
   * @public
   */
  enableBranchAutoBuild?: boolean | undefined;

  /**
   * Automatically disconnects a branch in the Amplify console when you delete a branch from your Git repository.
   *
   * @public
   */
  enableBranchAutoDeletion?: boolean | undefined;

  /**
   * Enables basic authorization for an Amplify app. This will apply to all branches that are part of this app.
   *
   * @public
   */
  enableBasicAuth?: boolean | undefined;

  /**
   * The credentials for basic authorization for an Amplify app. You must base64-encode the authorization credentials and provide them in the format `user:password`.
   *
   * @public
   */
  basicAuthCredentials?: string | undefined;

  /**
   * The custom rewrite and redirect rules for an Amplify app.
   *
   * @public
   */
  customRules?: CustomRule[] | undefined;

  /**
   * The tag for an Amplify app.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The build specification (build spec) for an Amplify app.
   *
   * @public
   */
  buildSpec?: string | undefined;

  /**
   * The custom HTTP headers for an Amplify app.
   *
   * @public
   */
  customHeaders?: string | undefined;

  /**
   * Enables automated branch creation for an Amplify app.
   *
   * @public
   */
  enableAutoBranchCreation?: boolean | undefined;

  /**
   * The automated branch creation glob patterns for an Amplify app.
   *
   * @public
   */
  autoBranchCreationPatterns?: string[] | undefined;

  /**
   * The automated branch creation configuration for an Amplify app.
   *
   * @public
   */
  autoBranchCreationConfig?: AutoBranchCreationConfig | undefined;

  /**
   * Describes the configuration details that apply to the jobs for an Amplify app.
   *
   * @public
   */
  jobConfig?: JobConfig | undefined;

  /**
   * The cache configuration for the Amplify app.
   *
   * @public
   */
  cacheConfig?: CacheConfig | undefined;
}

/**
 * Describes the information about a production branch for an Amplify app.
 *
 * @public
 */
export interface ProductionBranch {
  /**
   * The last deploy time of the production branch.
   *
   * @public
   */
  lastDeployTime?: Date | undefined;

  /**
   * The status of the production branch.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The thumbnail URL for the production branch.
   *
   * @public
   */
  thumbnailUrl?: string | undefined;

  /**
   * The branch name for the production branch.
   *
   * @public
   */
  branchName?: string | undefined;
}

/**
 * Describes the Firewall configuration for a hosted Amplify application. Firewall support enables you to protect your web applications with a direct integration with WAF. For more information about using WAF protections for an Amplify application, see [Firewall support for hosted sites](https://docs.aws.amazon.com/amplify/latest/userguide/WAF-integration.html) in the *Amplify User Guide*.
 *
 * @public
 */
export interface WafConfiguration {
  /**
   * The Amazon Resource Name (ARN) for the web ACL associated with an Amplify app.
   *
   * @public
   */
  webAclArn?: string | undefined;

  /**
   * The status of the process to associate or disassociate a web ACL to an Amplify app.
   *
   * @public
   */
  wafStatus?: WafStatus | undefined;

  /**
   * The reason for the current status of the Firewall configuration.
   *
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * Represents the different branches of a repository for building, deploying, and hosting an Amplify app.
 *
 * @public
 */
export interface App {
  /**
   * The unique ID of the Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amplify app.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * The name for the Amplify app.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The tag for the Amplify app.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The description for the Amplify app.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The Git repository for the Amplify app.
   *
   * @public
   */
  repository: string | undefined;

  /**
   * The platform for the Amplify app. For a static app, set the platform type to `WEB`. For a dynamic server-side rendered (SSR) app, set the platform type to `WEB_COMPUTE`. For an app requiring Amplify Hosting's original SSR support only, set the platform type to `WEB_DYNAMIC`.
   *
   * If you are deploying an SSG only app with Next.js 14 or later, you must use the platform type `WEB_COMPUTE`.
   *
   * @public
   */
  platform: Platform | undefined;

  /**
   * A timestamp of when Amplify created the application.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * A timestamp of when Amplify updated the application.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role for an SSR app. The Compute role allows the Amplify Hosting compute service to securely access specific Amazon Web Services resources based on the role's permissions. For more information about the SSR Compute role, see [Adding an SSR Compute role](https://docs.aws.amazon.com/amplify/latest/userguide/amplify-SSR-compute-role.html) in the *Amplify User Guide*.
   *
   * @public
   */
  computeRoleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM service role for the Amplify app.
   *
   * @public
   */
  iamServiceRoleArn?: string | undefined;

  /**
   * The environment variables for the Amplify app.
   *
   * For a list of the environment variables that are accessible to Amplify by default, see [Amplify Environment variables](https://docs.aws.amazon.com/amplify/latest/userguide/amplify-console-environment-variables.html) in the *Amplify Hosting User Guide*.
   *
   * @public
   */
  environmentVariables: Record<string, string> | undefined;

  /**
   * The default domain for the Amplify app.
   *
   * @public
   */
  defaultDomain: string | undefined;

  /**
   * Enables the auto-building of branches for the Amplify app.
   *
   * @public
   */
  enableBranchAutoBuild: boolean | undefined;

  /**
   * Automatically disconnect a branch in the Amplify console when you delete a branch from your Git repository.
   *
   * @public
   */
  enableBranchAutoDeletion?: boolean | undefined;

  /**
   * Enables basic authorization for the Amplify app's branches.
   *
   * @public
   */
  enableBasicAuth: boolean | undefined;

  /**
   * The basic authorization credentials for branches for the Amplify app. You must base64-encode the authorization credentials and provide them in the format `user:password`.
   *
   * @public
   */
  basicAuthCredentials?: string | undefined;

  /**
   * Describes the custom redirect and rewrite rules for the Amplify app.
   *
   * @public
   */
  customRules?: CustomRule[] | undefined;

  /**
   * Describes the information about a production branch of the Amplify app.
   *
   * @public
   */
  productionBranch?: ProductionBranch | undefined;

  /**
   * Describes the content of the build specification (build spec) for the Amplify app.
   *
   * @public
   */
  buildSpec?: string | undefined;

  /**
   * Describes the custom HTTP headers for the Amplify app.
   *
   * @public
   */
  customHeaders?: string | undefined;

  /**
   * Enables automated branch creation for the Amplify app.
   *
   * @public
   */
  enableAutoBranchCreation?: boolean | undefined;

  /**
   * Describes the automated branch creation glob patterns for the Amplify app.
   *
   * @public
   */
  autoBranchCreationPatterns?: string[] | undefined;

  /**
   * Describes the automated branch creation configuration for the Amplify app.
   *
   * @public
   */
  autoBranchCreationConfig?: AutoBranchCreationConfig | undefined;

  /**
   * > **Note:** This is for internal use.
   *
   * The Amplify service uses this parameter to specify the authentication protocol to use to access the Git repository for an Amplify app. Amplify specifies `TOKEN` for a GitHub repository, `SIGV4` for an Amazon Web Services CodeCommit repository, and `SSH` for GitLab and Bitbucket repositories.
   *
   * @public
   */
  repositoryCloneMethod?: RepositoryCloneMethod | undefined;

  /**
   * The cache configuration for the Amplify app. If you don't specify the cache configuration `type`, Amplify uses the default `AMPLIFY_MANAGED` setting.
   *
   * @public
   */
  cacheConfig?: CacheConfig | undefined;

  /**
   * A timestamp of when Amplify created the webhook in your Git repository.
   *
   * @public
   */
  webhookCreateTime?: Date | undefined;

  /**
   * Describes the Firewall configuration for the Amplify app. Firewall support enables you to protect your hosted applications with a direct integration with WAF.
   *
   * @public
   */
  wafConfiguration?: WafConfiguration | undefined;

  /**
   * The configuration details that apply to the jobs for an Amplify app.
   *
   * @public
   */
  jobConfig?: JobConfig | undefined;
}

/**
 * @public
 */
export interface CreateAppResult {
  /**
   * Represents the different branches of a repository for building, deploying, and hosting an Amplify app.
   *
   * @public
   */
  app: App | undefined;
}

/**
 * The request structure for the backend environment create request.
 *
 * @public
 */
export interface CreateBackendEnvironmentRequest {
  /**
   * The unique ID for an Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name for the backend environment.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The AWS CloudFormation stack name of a backend environment.
   *
   * @public
   */
  stackName?: string | undefined;

  /**
   * The name of deployment artifacts.
   *
   * @public
   */
  deploymentArtifacts?: string | undefined;
}

/**
 * Describes the backend environment associated with a `Branch` of a Gen 1 Amplify app. Amplify Gen 1 applications are created using Amplify Studio or the Amplify command line interface (CLI).
 *
 * @public
 */
export interface BackendEnvironment {
  /**
   * The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify app.
   *
   * @public
   */
  backendEnvironmentArn: string | undefined;

  /**
   * The name for a backend environment that is part of an Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The AWS CloudFormation stack name of a backend environment.
   *
   * @public
   */
  stackName?: string | undefined;

  /**
   * The name of deployment artifacts.
   *
   * @public
   */
  deploymentArtifacts?: string | undefined;

  /**
   * The creation date and time for a backend environment that is part of an Amplify app.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The last updated date and time for a backend environment that is part of an Amplify app.
   *
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * The result structure for the create backend environment request.
 *
 * @public
 */
export interface CreateBackendEnvironmentResult {
  /**
   * Describes the backend environment for an Amplify app.
   *
   * @public
   */
  backendEnvironment: BackendEnvironment | undefined;
}

/**
 * Describes the backend associated with an Amplify `Branch`.
 *
 * This property is available to Amplify Gen 2 apps only. When you deploy an application with Amplify Gen 2, you provision the app's backend infrastructure using Typescript code.
 *
 * @public
 */
export interface Backend {
  /**
   * The Amazon Resource Name (ARN) for the CloudFormation stack.
   *
   * @public
   */
  stackArn?: string | undefined;
}

/**
 * The request structure for the create branch request.
 *
 * @public
 */
export interface CreateBranchRequest {
  /**
   * The unique ID for an Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name for the branch.
   *
   * @public
   */
  branchName: string | undefined;

  /**
   * The description for the branch.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Describes the current stage for the branch.
   *
   * @public
   */
  stage?: Stage | undefined;

  /**
   * The framework for the branch.
   *
   * @public
   */
  framework?: string | undefined;

  /**
   * Enables notifications for the branch.
   *
   * @public
   */
  enableNotification?: boolean | undefined;

  /**
   * Enables auto building for the branch.
   *
   * @public
   */
  enableAutoBuild?: boolean | undefined;

  /**
   * Specifies whether the skew protection feature is enabled for the branch.
   *
   * Deployment skew protection is available to Amplify applications to eliminate version skew issues between client and servers in web applications. When you apply skew protection to a branch, you can ensure that your clients always interact with the correct version of server-side assets, regardless of when a deployment occurs. For more information about skew protection, see [Skew protection for Amplify deployments](https://docs.aws.amazon.com/amplify/latest/userguide/skew-protection.html) in the *Amplify User Guide*.
   *
   * @public
   */
  enableSkewProtection?: boolean | undefined;

  /**
   * The environment variables for the branch.
   *
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * The basic authorization credentials for the branch. You must base64-encode the authorization credentials and provide them in the format `user:password`.
   *
   * @public
   */
  basicAuthCredentials?: string | undefined;

  /**
   * Enables basic authorization for the branch.
   *
   * @public
   */
  enableBasicAuth?: boolean | undefined;

  /**
   * Enables performance mode for the branch.
   *
   * Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out.
   *
   * @public
   */
  enablePerformanceMode?: boolean | undefined;

  /**
   * The tag for the branch.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The build specification (build spec) for the branch.
   *
   * @public
   */
  buildSpec?: string | undefined;

  /**
   * The content Time To Live (TTL) for the website in seconds.
   *
   * @public
   */
  ttl?: string | undefined;

  /**
   * The display name for a branch. This is used as the default domain prefix.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * Enables pull request previews for this branch.
   *
   * @public
   */
  enablePullRequestPreview?: boolean | undefined;

  /**
   * The Amplify environment name for the pull request.
   *
   * @public
   */
  pullRequestEnvironmentName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for a backend environment that is part of a Gen 1 Amplify app.
   *
   * This field is available to Amplify Gen 1 apps only where the backend is created using Amplify Studio or the Amplify command line interface (CLI).
   *
   * @public
   */
  backendEnvironmentArn?: string | undefined;

  /**
   * The backend for a `Branch` of an Amplify app. Use for a backend created from an CloudFormation stack.
   *
   * This field is available to Amplify Gen 2 apps only. When you deploy an application with Amplify Gen 2, you provision the app's backend infrastructure using Typescript code.
   *
   * @public
   */
  backend?: Backend | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to assign to a branch of an SSR app. The SSR Compute role allows the Amplify Hosting compute service to securely access specific Amazon Web Services resources based on the role's permissions. For more information about the SSR Compute role, see [Adding an SSR Compute role](https://docs.aws.amazon.com/amplify/latest/userguide/amplify-SSR-compute-role.html) in the *Amplify User Guide*.
   *
   * @public
   */
  computeRoleArn?: string | undefined;
}

/**
 * The branch for an Amplify app, which maps to a third-party repository branch.
 *
 * @public
 */
export interface Branch {
  /**
   * The Amazon Resource Name (ARN) for a branch that is part of an Amplify app.
   *
   * @public
   */
  branchArn: string | undefined;

  /**
   * The name for the branch that is part of an Amplify app.
   *
   * @public
   */
  branchName: string | undefined;

  /**
   * The description for the branch that is part of an Amplify app.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The tag for the branch of an Amplify app.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The current stage for the branch that is part of an Amplify app.
   *
   * @public
   */
  stage: Stage | undefined;

  /**
   * The display name for the branch. This is used as the default domain prefix.
   *
   * @public
   */
  displayName: string | undefined;

  /**
   * Enables notifications for a branch that is part of an Amplify app.
   *
   * @public
   */
  enableNotification: boolean | undefined;

  /**
   * A timestamp of when Amplify created the branch.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * A timestamp for the last updated time for a branch.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The environment variables specific to a branch of an Amplify app.
   *
   * @public
   */
  environmentVariables: Record<string, string> | undefined;

  /**
   * Enables auto-building on push for a branch of an Amplify app.
   *
   * @public
   */
  enableAutoBuild: boolean | undefined;

  /**
   * Specifies whether the skew protection feature is enabled for the branch.
   *
   * Deployment skew protection is available to Amplify applications to eliminate version skew issues between client and servers in web applications. When you apply skew protection to a branch, you can ensure that your clients always interact with the correct version of server-side assets, regardless of when a deployment occurs. For more information about skew protection, see [Skew protection for Amplify deployments](https://docs.aws.amazon.com/amplify/latest/userguide/skew-protection.html) in the *Amplify User Guide*.
   *
   * @public
   */
  enableSkewProtection?: boolean | undefined;

  /**
   * The custom domains for a branch of an Amplify app.
   *
   * @public
   */
  customDomains: string[] | undefined;

  /**
   * The framework for a branch of an Amplify app.
   *
   * @public
   */
  framework: string | undefined;

  /**
   * The ID of the active job for a branch of an Amplify app.
   *
   * @public
   */
  activeJobId: string | undefined;

  /**
   * The total number of jobs that are part of an Amplify app.
   *
   * @public
   */
  totalNumberOfJobs: string | undefined;

  /**
   * Enables basic authorization for a branch of an Amplify app.
   *
   * @public
   */
  enableBasicAuth: boolean | undefined;

  /**
   * Enables performance mode for the branch.
   *
   * Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out.
   *
   * @public
   */
  enablePerformanceMode?: boolean | undefined;

  /**
   * The thumbnail URL for the branch of an Amplify app.
   *
   * @public
   */
  thumbnailUrl?: string | undefined;

  /**
   * The basic authorization credentials for a branch of an Amplify app. You must base64-encode the authorization credentials and provide them in the format `user:password`.
   *
   * @public
   */
  basicAuthCredentials?: string | undefined;

  /**
   * The build specification (build spec) content for the branch of an Amplify app.
   *
   * @public
   */
  buildSpec?: string | undefined;

  /**
   * The content Time to Live (TTL) for the website in seconds.
   *
   * @public
   */
  ttl: string | undefined;

  /**
   * A list of custom resources that are linked to this branch.
   *
   * @public
   */
  associatedResources?: string[] | undefined;

  /**
   * Enables pull request previews for the branch.
   *
   * @public
   */
  enablePullRequestPreview: boolean | undefined;

  /**
   * The Amplify environment name for the pull request.
   *
   * @public
   */
  pullRequestEnvironmentName?: string | undefined;

  /**
   * The destination branch if the branch is a pull request branch.
   *
   * @public
   */
  destinationBranch?: string | undefined;

  /**
   * The source branch if the branch is a pull request branch.
   *
   * @public
   */
  sourceBranch?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify app.
   *
   * This property is available to Amplify Gen 1 apps only. When you deploy an application with Amplify Gen 2, you provision the app's backend infrastructure using Typescript code.
   *
   * @public
   */
  backendEnvironmentArn?: string | undefined;

  /**
   * Describes the backend associated with an Amplify `Branch`.
   *
   * This property is available to Amplify Gen 2 apps only. When you deploy an application with Amplify Gen 2, you provision the app's backend infrastructure using Typescript code.
   *
   * @public
   */
  backend?: Backend | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role for a branch of an SSR app. The Compute role allows the Amplify Hosting compute service to securely access specific Amazon Web Services resources based on the role's permissions. For more information about the SSR Compute role, see [Adding an SSR Compute role](https://docs.aws.amazon.com/amplify/latest/userguide/amplify-SSR-compute-role.html) in the *Amplify User Guide*.
   *
   * @public
   */
  computeRoleArn?: string | undefined;
}

/**
 * The result structure for create branch request.
 *
 * @public
 */
export interface CreateBranchResult {
  /**
   * Describes the branch for an Amplify app, which maps to a third-party repository branch.
   *
   * @public
   */
  branch: Branch | undefined;
}

/**
 * The request structure for the create a new deployment request.
 *
 * @public
 */
export interface CreateDeploymentRequest {
  /**
   * The unique ID for an Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the branch to use for the job.
   *
   * @public
   */
  branchName: string | undefined;

  /**
   * An optional file map that contains the file name as the key and the file content md5 hash as the value. If this argument is provided, the service will generate a unique upload URL per file. Otherwise, the service will only generate a single upload URL for the zipped files.
   *
   * @public
   */
  fileMap?: Record<string, string> | undefined;
}

/**
 * The result structure for the create a new deployment request.
 *
 * @public
 */
export interface CreateDeploymentResult {
  /**
   * The job ID for this deployment. will supply to start deployment api.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * When the `fileMap` argument is provided in the request, `fileUploadUrls` will contain a map of file names to upload URLs.
   *
   * @public
   */
  fileUploadUrls: Record<string, string> | undefined;

  /**
   * When the `fileMap` argument is not provided in the request, this `zipUploadUrl` is returned.
   *
   * @public
   */
  zipUploadUrl: string | undefined;
}

/**
 * The type of SSL/TLS certificate to use for your custom domain. If a certificate type isn't specified, Amplify uses the default `AMPLIFY_MANAGED` certificate.
 *
 * @public
 */
export interface CertificateSettings {
  /**
   * The certificate type.
   *
   * Specify `AMPLIFY_MANAGED` to use the default certificate that Amplify provisions for you.
   *
   * Specify `CUSTOM` to use your own certificate that you have already added to Certificate Manager in your Amazon Web Services account. Make sure you request (or import) the certificate in the US East (N. Virginia) Region (us-east-1). For more information about using ACM, see [Importing certificates into Certificate Manager](https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html) in the *ACM User guide*.
   *
   * @public
   */
  type: CertificateType | undefined;

  /**
   * The Amazon resource name (ARN) for the custom certificate that you have already added to Certificate Manager in your Amazon Web Services account.
   *
   * This field is required only when the certificate type is `CUSTOM`.
   *
   * @public
   */
  customCertificateArn?: string | undefined;
}

/**
 * Describes the settings for the subdomain.
 *
 * @public
 */
export interface SubDomainSetting {
  /**
   * The prefix setting for the subdomain.
   *
   * @public
   */
  prefix: string | undefined;

  /**
   * The branch name setting for the subdomain.
   *
   * @public
   */
  branchName: string | undefined;
}

/**
 * The request structure for the create domain association request.
 *
 * @public
 */
export interface CreateDomainAssociationRequest {
  /**
   * The unique ID for an Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The domain name for the domain association.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * Enables the automated creation of subdomains for branches.
   *
   * @public
   */
  enableAutoSubDomain?: boolean | undefined;

  /**
   * The setting for the subdomain.
   *
   * @public
   */
  subDomainSettings: SubDomainSetting[] | undefined;

  /**
   * Sets the branch patterns for automatic subdomain creation.
   *
   * @public
   */
  autoSubDomainCreationPatterns?: string[] | undefined;

  /**
   * The required AWS Identity and Access Management (IAM) service role for the Amazon Resource Name (ARN) for automatically creating subdomains.
   *
   * @public
   */
  autoSubDomainIAMRole?: string | undefined;

  /**
   * The type of SSL/TLS certificate to use for your custom domain. If you don't specify a certificate type, Amplify uses the default certificate that it provisions and manages for you.
   *
   * @public
   */
  certificateSettings?: CertificateSettings | undefined;
}

/**
 * Describes the current SSL/TLS certificate that is in use for the domain. If you are using `CreateDomainAssociation` to create a new domain association, `Certificate` describes the new certificate that you are creating.
 *
 * @public
 */
export interface Certificate {
  /**
   * The type of SSL/TLS certificate that you want to use.
   *
   * Specify `AMPLIFY_MANAGED` to use the default certificate that Amplify provisions for you.
   *
   * Specify `CUSTOM` to use your own certificate that you have already added to Certificate Manager in your Amazon Web Services account. Make sure you request (or import) the certificate in the US East (N. Virginia) Region (us-east-1). For more information about using ACM, see [Importing certificates into Certificate Manager](https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html) in the *ACM User guide*.
   *
   * @public
   */
  type: CertificateType | undefined;

  /**
   * The Amazon resource name (ARN) for a custom certificate that you have already added to Certificate Manager in your Amazon Web Services account.
   *
   * This field is required only when the certificate type is `CUSTOM`.
   *
   * @public
   */
  customCertificateArn?: string | undefined;

  /**
   * The DNS record for certificate verification.
   *
   * @public
   */
  certificateVerificationDNSRecord?: string | undefined;
}

/**
 * The subdomain for the domain association.
 *
 * @public
 */
export interface SubDomain {
  /**
   * Describes the settings for the subdomain.
   *
   * @public
   */
  subDomainSetting: SubDomainSetting | undefined;

  /**
   * The verified status of the subdomain
   *
   * @public
   */
  verified: boolean | undefined;

  /**
   * The DNS record for the subdomain.
   *
   * @public
   */
  dnsRecord: string | undefined;
}

/**
 * Describes the association between a custom domain and an Amplify app.
 *
 * @public
 */
export interface DomainAssociation {
  /**
   * The Amazon Resource Name (ARN) for the domain association.
   *
   * @public
   */
  domainAssociationArn: string | undefined;

  /**
   * The name of the domain.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * Enables the automated creation of subdomains for branches.
   *
   * @public
   */
  enableAutoSubDomain: boolean | undefined;

  /**
   * Sets branch patterns for automatic subdomain creation.
   *
   * @public
   */
  autoSubDomainCreationPatterns?: string[] | undefined;

  /**
   * The required AWS Identity and Access Management (IAM) service role for the Amazon Resource Name (ARN) for automatically creating subdomains.
   *
   * @public
   */
  autoSubDomainIAMRole?: string | undefined;

  /**
   * The current status of the domain association.
   *
   * @public
   */
  domainStatus: DomainStatus | undefined;

  /**
   * The status of the domain update operation that is currently in progress. The following list describes the valid update states.
   *
   * - **REQUESTING_CERTIFICATE**
   *
   *   The certificate is in the process of being updated.
   *
   * - **PENDING_VERIFICATION**
   *
   *   Indicates that an Amplify managed certificate is in the process of being verified. This occurs during the creation of a custom domain or when a custom domain is updated to use a managed certificate.
   *
   * - **IMPORTING_CUSTOM_CERTIFICATE**
   *
   *   Indicates that an Amplify custom certificate is in the process of being imported. This occurs during the creation of a custom domain or when a custom domain is updated to use a custom certificate.
   *
   * - **PENDING_DEPLOYMENT**
   *
   *   Indicates that the subdomain or certificate changes are being propagated.
   *
   * - **AWAITING_APP_CNAME**
   *
   *   Amplify is waiting for CNAME records corresponding to subdomains to be propagated. If your custom domain is on Route 53, Amplify handles this for you automatically. For more information about custom domains, see [Setting up custom domains](https://docs.aws.amazon.com/amplify/latest/userguide/custom-domains.html) in the *Amplify Hosting User Guide*.
   *
   * - **UPDATE_COMPLETE**
   *
   *   The certificate has been associated with a domain.
   *
   * - **UPDATE_FAILED**
   *
   *   The certificate has failed to be provisioned or associated, and there is no existing active certificate to roll back to.
   *
   * @public
   */
  updateStatus?: UpdateStatus | undefined;

  /**
   * Additional information that describes why the domain association is in the current state.
   *
   * @public
   */
  statusReason: string | undefined;

  /**
   * The DNS record for certificate verification.
   *
   * @public
   */
  certificateVerificationDNSRecord?: string | undefined;

  /**
   * The subdomains for the domain association.
   *
   * @public
   */
  subDomains: SubDomain[] | undefined;

  /**
   * Describes the SSL/TLS certificate for the domain association. This can be your own custom certificate or the default certificate that Amplify provisions for you.
   *
   * If you are updating your domain to use a different certificate, `certificate` points to the new certificate that is being created instead of the current active certificate. Otherwise, `certificate` points to the current active certificate.
   *
   * @public
   */
  certificate?: Certificate | undefined;
}

/**
 * The result structure for the create domain association request.
 *
 * @public
 */
export interface CreateDomainAssociationResult {
  /**
   * Describes the structure of a domain association, which associates a custom domain with an Amplify app.
   *
   * @public
   */
  domainAssociation: DomainAssociation | undefined;
}

/**
 * The request structure for the create webhook request.
 *
 * @public
 */
export interface CreateWebhookRequest {
  /**
   * The unique ID for an Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name for a branch that is part of an Amplify app.
   *
   * @public
   */
  branchName: string | undefined;

  /**
   * The description for a webhook.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * Describes a webhook that connects repository events to an Amplify app.
 *
 * @public
 */
export interface Webhook {
  /**
   * The Amazon Resource Name (ARN) for the webhook.
   *
   * @public
   */
  webhookArn: string | undefined;

  /**
   * The ID of the webhook.
   *
   * @public
   */
  webhookId: string | undefined;

  /**
   * The URL of the webhook.
   *
   * @public
   */
  webhookUrl: string | undefined;

  /**
   * The unique ID of an Amplify app.
   *
   * @public
   */
  appId?: string | undefined;

  /**
   * The name for a branch that is part of an Amplify app.
   *
   * @public
   */
  branchName: string | undefined;

  /**
   * The description for a webhook.
   *
   * @public
   */
  description: string | undefined;

  /**
   * A timestamp of when Amplify created the webhook in your Git repository.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * A timestamp of when Amplify updated the webhook in your Git repository.
   *
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * The result structure for the create webhook request.
 *
 * @public
 */
export interface CreateWebhookResult {
  /**
   * Describes a webhook that connects repository events to an Amplify app.
   *
   * @public
   */
  webhook: Webhook | undefined;
}

/**
 * Describes the request structure for the delete app request.
 *
 * @public
 */
export interface DeleteAppRequest {
  /**
   * The unique ID for an Amplify app.
   *
   * @public
   */
  appId: string | undefined;
}

/**
 * The result structure for the delete app request.
 *
 * @public
 */
export interface DeleteAppResult {
  /**
   * Represents the different branches of a repository for building, deploying, and hosting an Amplify app.
   *
   * @public
   */
  app: App | undefined;
}

/**
 * The request structure for the delete backend environment request.
 *
 * @public
 */
export interface DeleteBackendEnvironmentRequest {
  /**
   * The unique ID of an Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of a backend environment of an Amplify app.
   *
   * @public
   */
  environmentName: string | undefined;
}

/**
 * The result structure of the delete backend environment result.
 *
 * @public
 */
export interface DeleteBackendEnvironmentResult {
  /**
   * Describes the backend environment for an Amplify app.
   *
   * @public
   */
  backendEnvironment: BackendEnvironment | undefined;
}

/**
 * The request structure for the delete branch request.
 *
 * @public
 */
export interface DeleteBranchRequest {
  /**
   * The unique ID for an Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the branch.
   *
   * @public
   */
  branchName: string | undefined;
}

/**
 * The result structure for the delete branch request.
 *
 * @public
 */
export interface DeleteBranchResult {
  /**
   * The branch for an Amplify app, which maps to a third-party repository branch.
   *
   * @public
   */
  branch: Branch | undefined;
}

/**
 * The request structure for the delete domain association request.
 *
 * @public
 */
export interface DeleteDomainAssociationRequest {
  /**
   * The unique id for an Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the domain.
   *
   * @public
   */
  domainName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainAssociationResult {
  /**
   * Describes the association between a custom domain and an Amplify app.
   *
   * @public
   */
  domainAssociation: DomainAssociation | undefined;
}

/**
 * The request structure for the delete job request.
 *
 * @public
 */
export interface DeleteJobRequest {
  /**
   * The unique ID for an Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the branch to use for the job.
   *
   * @public
   */
  branchName: string | undefined;

  /**
   * The unique ID for the job.
   *
   * @public
   */
  jobId: string | undefined;
}

/**
 * Describes the summary for an execution job for an Amplify app.
 *
 * @public
 */
export interface JobSummary {
  /**
   * The Amazon Resource Name (ARN) for the job.
   *
   * @public
   */
  jobArn: string | undefined;

  /**
   * The unique ID for the job.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The commit ID from a third-party repository provider for the job.
   *
   * @public
   */
  commitId: string | undefined;

  /**
   * The commit message from a third-party repository provider for the job.
   *
   * @public
   */
  commitMessage: string | undefined;

  /**
   * The commit date and time for the job.
   *
   * @public
   */
  commitTime: Date | undefined;

  /**
   * The start date and time for the job.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The current status for the job.
   *
   * @public
   */
  status: JobStatus | undefined;

  /**
   * The end date and time for the job.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The type for the job. If the value is `RELEASE`, the job was manually released from its source by using the `StartJob` API. This value is available only for apps that are connected to a repository.
   *
   * If the value is `RETRY`, the job was manually retried using the `StartJob` API. If the value is `WEB_HOOK`, the job was automatically triggered by webhooks. If the value is `MANUAL`, the job is for a manually deployed app. Manually deployed apps are not connected to a Git repository.
   *
   * @public
   */
  jobType: JobType | undefined;

  /**
   * The source URL for the files to deploy. The source URL can be either an HTTP GET URL that is publicly accessible and downloads a single .zip file, or an Amazon S3 bucket and prefix.
   *
   * @public
   */
  sourceUrl?: string | undefined;

  /**
   * The type of source specified by the `sourceURL`. If the value is `ZIP`, the source is a .zip file. If the value is `BUCKET_PREFIX`, the source is an Amazon S3 bucket and prefix. If no value is specified, the default is `ZIP`.
   *
   * @public
   */
  sourceUrlType?: SourceUrlType | undefined;
}

/**
 * The result structure for the delete job request.
 *
 * @public
 */
export interface DeleteJobResult {
  /**
   * Describes the summary for an execution job for an Amplify app.
   *
   * @public
   */
  jobSummary: JobSummary | undefined;
}

/**
 * The request structure for the delete webhook request.
 *
 * @public
 */
export interface DeleteWebhookRequest {
  /**
   * The unique ID for a webhook.
   *
   * @public
   */
  webhookId: string | undefined;
}

/**
 * The result structure for the delete webhook request.
 *
 * @public
 */
export interface DeleteWebhookResult {
  /**
   * Describes a webhook that connects repository events to an Amplify app.
   *
   * @public
   */
  webhook: Webhook | undefined;
}

/**
 * The request structure for the generate access logs request.
 *
 * @public
 */
export interface GenerateAccessLogsRequest {
  /**
   * The time at which the logs should start. The time range specified is inclusive of the start time.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The time at which the logs should end. The time range specified is inclusive of the end time.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The name of the domain.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * The unique ID for an Amplify app.
   *
   * @public
   */
  appId: string | undefined;
}

/**
 * The result structure for the generate access logs request.
 *
 * @public
 */
export interface GenerateAccessLogsResult {
  /**
   * The pre-signed URL for the requested access logs.
   *
   * @public
   */
  logUrl?: string | undefined;
}

/**
 * The request structure for the get app request.
 *
 * @public
 */
export interface GetAppRequest {
  /**
   * The unique ID for an Amplify app.
   *
   * @public
   */
  appId: string | undefined;
}

/**
 * @public
 */
export interface GetAppResult {
  /**
   * Represents the different branches of a repository for building, deploying, and hosting an Amplify app.
   *
   * @public
   */
  app: App | undefined;
}

/**
 * Returns the request structure for the get artifact request.
 *
 * @public
 */
export interface GetArtifactUrlRequest {
  /**
   * The unique ID for an artifact.
   *
   * @public
   */
  artifactId: string | undefined;
}

/**
 * Returns the result structure for the get artifact request.
 *
 * @public
 */
export interface GetArtifactUrlResult {
  /**
   * The unique ID for an artifact.
   *
   * @public
   */
  artifactId: string | undefined;

  /**
   * The presigned URL for the artifact.
   *
   * @public
   */
  artifactUrl: string | undefined;
}

/**
 * The request structure for the get backend environment request.
 *
 * @public
 */
export interface GetBackendEnvironmentRequest {
  /**
   * The unique id for an Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name for the backend environment.
   *
   * @public
   */
  environmentName: string | undefined;
}

/**
 * The result structure for the get backend environment result.
 *
 * @public
 */
export interface GetBackendEnvironmentResult {
  /**
   * Describes the backend environment for an Amplify app.
   *
   * @public
   */
  backendEnvironment: BackendEnvironment | undefined;
}

/**
 * The request structure for the get branch request.
 *
 * @public
 */
export interface GetBranchRequest {
  /**
   * The unique ID for an Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the branch.
   *
   * @public
   */
  branchName: string | undefined;
}

/**
 * @public
 */
export interface GetBranchResult {
  /**
   * The branch for an Amplify app, which maps to a third-party repository branch.
   *
   * @public
   */
  branch: Branch | undefined;
}

/**
 * The request structure for the get domain association request.
 *
 * @public
 */
export interface GetDomainAssociationRequest {
  /**
   * The unique id for an Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the domain.
   *
   * @public
   */
  domainName: string | undefined;
}

/**
 * The result structure for the get domain association request.
 *
 * @public
 */
export interface GetDomainAssociationResult {
  /**
   * Describes the structure of a domain association, which associates a custom domain with an Amplify app.
   *
   * @public
   */
  domainAssociation: DomainAssociation | undefined;
}

/**
 * The request structure for the get job request.
 *
 * @public
 */
export interface GetJobRequest {
  /**
   * The unique ID for an Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the branch to use for the job.
   *
   * @public
   */
  branchName: string | undefined;

  /**
   * The unique ID for the job.
   *
   * @public
   */
  jobId: string | undefined;
}

/**
 * Describes an execution step, for an execution job, for an Amplify app.
 *
 * @public
 */
export interface Step {
  /**
   * The name of the execution step.
   *
   * @public
   */
  stepName: string | undefined;

  /**
   * The start date and time of the execution step.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The status of the execution step.
   *
   * @public
   */
  status: JobStatus | undefined;

  /**
   * The end date and time of the execution step.
   *
   * @public
   */
  endTime: Date | undefined;

  /**
   * The URL to the logs for the execution step.
   *
   * @public
   */
  logUrl?: string | undefined;

  /**
   * The URL to the build artifact for the execution step.
   *
   * @public
   */
  artifactsUrl?: string | undefined;

  /**
   * The URL to the test artifact for the execution step.
   *
   * @public
   */
  testArtifactsUrl?: string | undefined;

  /**
   * The URL to the test configuration for the execution step.
   *
   * @public
   */
  testConfigUrl?: string | undefined;

  /**
   * The list of screenshot URLs for the execution step, if relevant.
   *
   * @public
   */
  screenshots?: Record<string, string> | undefined;

  /**
   * The reason for the current step status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The context for the current step. Includes a build image if the step is build.
   *
   * @public
   */
  context?: string | undefined;
}

/**
 * Describes an execution job for an Amplify app.
 *
 * @public
 */
export interface Job {
  /**
   * Describes the summary for an execution job for an Amplify app.
   *
   * @public
   */
  summary: JobSummary | undefined;

  /**
   * The execution steps for an execution job, for an Amplify app.
   *
   * @public
   */
  steps: Step[] | undefined;
}

/**
 * @public
 */
export interface GetJobResult {
  /**
   * Describes an execution job for an Amplify app.
   *
   * @public
   */
  job: Job | undefined;
}

/**
 * The request structure for the get webhook request.
 *
 * @public
 */
export interface GetWebhookRequest {
  /**
   * The unique ID for a webhook.
   *
   * @public
   */
  webhookId: string | undefined;
}

/**
 * The result structure for the get webhook request.
 *
 * @public
 */
export interface GetWebhookResult {
  /**
   * Describes the structure of a webhook.
   *
   * @public
   */
  webhook: Webhook | undefined;
}

/**
 * The request structure for the list apps request.
 *
 * @public
 */
export interface ListAppsRequest {
  /**
   * A pagination token. If non-null, the pagination token is returned in a result. Pass its value in another request to retrieve more entries.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of records to list in a single response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The result structure for an Amplify app list request.
 *
 * @public
 */
export interface ListAppsResult {
  /**
   * A list of Amplify apps.
   *
   * @public
   */
  apps: App[] | undefined;

  /**
   * A pagination token. Set to null to start listing apps from start. If non-null, the pagination token is returned in a result. Pass its value in here to list more projects.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Describes the request structure for the list artifacts request.
 *
 * @public
 */
export interface ListArtifactsRequest {
  /**
   * The unique ID for an Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of a branch that is part of an Amplify app.
   *
   * @public
   */
  branchName: string | undefined;

  /**
   * The unique ID for a job.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * A pagination token. Set to null to start listing artifacts from start. If a non-null pagination token is returned in a result, pass its value in here to list more artifacts.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of records to list in a single response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Describes an artifact.
 *
 * @public
 */
export interface Artifact {
  /**
   * The file name for the artifact.
   *
   * @public
   */
  artifactFileName: string | undefined;

  /**
   * The unique ID for the artifact.
   *
   * @public
   */
  artifactId: string | undefined;
}

/**
 * The result structure for the list artifacts request.
 *
 * @public
 */
export interface ListArtifactsResult {
  /**
   * A list of artifacts.
   *
   * @public
   */
  artifacts: Artifact[] | undefined;

  /**
   * A pagination token. If a non-null pagination token is returned in a result, pass its value in another request to retrieve more entries.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The request structure for the list backend environments request.
 *
 * @public
 */
export interface ListBackendEnvironmentsRequest {
  /**
   * The unique ID for an Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the backend environment
   *
   * @public
   */
  environmentName?: string | undefined;

  /**
   * A pagination token. Set to null to start listing backend environments from the start. If a non-null pagination token is returned in a result, pass its value in here to list more backend environments.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of records to list in a single response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The result structure for the list backend environments result.
 *
 * @public
 */
export interface ListBackendEnvironmentsResult {
  /**
   * The list of backend environments for an Amplify app.
   *
   * @public
   */
  backendEnvironments: BackendEnvironment[] | undefined;

  /**
   * A pagination token. If a non-null pagination token is returned in a result, pass its value in another request to retrieve more entries.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The request structure for the list branches request.
 *
 * @public
 */
export interface ListBranchesRequest {
  /**
   * The unique ID for an Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * A pagination token. Set to null to start listing branches from the start. If a non-null pagination token is returned in a result, pass its value in here to list more branches.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of records to list in a single response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The result structure for the list branches request.
 *
 * @public
 */
export interface ListBranchesResult {
  /**
   * A list of branches for an Amplify app.
   *
   * @public
   */
  branches: Branch[] | undefined;

  /**
   * A pagination token. If a non-null pagination token is returned in a result, pass its value in another request to retrieve more entries.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The request structure for the list domain associations request.
 *
 * @public
 */
export interface ListDomainAssociationsRequest {
  /**
   * The unique ID for an Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * A pagination token. Set to null to start listing apps from the start. If non-null, a pagination token is returned in a result. Pass its value in here to list more projects.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of records to list in a single response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The result structure for the list domain association request.
 *
 * @public
 */
export interface ListDomainAssociationsResult {
  /**
   * A list of domain associations.
   *
   * @public
   */
  domainAssociations: DomainAssociation[] | undefined;

  /**
   * A pagination token. If non-null, a pagination token is returned in a result. Pass its value in another request to retrieve more entries.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The request structure for the list jobs request.
 *
 * @public
 */
export interface ListJobsRequest {
  /**
   * The unique ID for an Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the branch to use for the request.
   *
   * @public
   */
  branchName: string | undefined;

  /**
   * A pagination token. Set to null to start listing steps from the start. If a non-null pagination token is returned in a result, pass its value in here to list more steps.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of records to list in a single response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The maximum number of records to list in a single response.
 *
 * @public
 */
export interface ListJobsResult {
  /**
   * The result structure for the list job result request.
   *
   * @public
   */
  jobSummaries: JobSummary[] | undefined;

  /**
   * A pagination token. If non-null the pagination token is returned in a result. Pass its value in another request to retrieve more entries.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The request structure to use to list tags for a resource.
 *
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) to use to list tags.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * The response for the list tags for resource request.
 *
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A list of tags for the specified The Amazon Resource Name (ARN).
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The request structure for the list webhooks request.
 *
 * @public
 */
export interface ListWebhooksRequest {
  /**
   * The unique ID for an Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * A pagination token. Set to null to start listing webhooks from the start. If non-null,the pagination token is returned in a result. Pass its value in here to list more webhooks.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of records to list in a single response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The result structure for the list webhooks request.
 *
 * @public
 */
export interface ListWebhooksResult {
  /**
   * A list of webhooks.
   *
   * @public
   */
  webhooks: Webhook[] | undefined;

  /**
   * A pagination token. If non-null, the pagination token is returned in a result. Pass its value in another request to retrieve more entries.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The request structure for the start a deployment request.
 *
 * @public
 */
export interface StartDeploymentRequest {
  /**
   * The unique ID for an Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the branch to use for the deployment job.
   *
   * @public
   */
  branchName: string | undefined;

  /**
   * The job ID for this deployment that is generated by the `CreateDeployment` request.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * The source URL for the deployment that is used when calling `StartDeployment` without `CreateDeployment`. The source URL can be either an HTTP GET URL that is publicly accessible and downloads a single .zip file, or an Amazon S3 bucket and prefix.
   *
   * @public
   */
  sourceUrl?: string | undefined;

  /**
   * The type of source specified by the `sourceURL`. If the value is `ZIP`, the source is a .zip file. If the value is `BUCKET_PREFIX`, the source is an Amazon S3 bucket and prefix. If no value is specified, the default is `ZIP`.
   *
   * @public
   */
  sourceUrlType?: SourceUrlType | undefined;
}

/**
 * The result structure for the start a deployment request.
 *
 * @public
 */
export interface StartDeploymentResult {
  /**
   * The summary for the job.
   *
   * @public
   */
  jobSummary: JobSummary | undefined;
}

/**
 * The request structure for the start job request.
 *
 * @public
 */
export interface StartJobRequest {
  /**
   * The unique ID for an Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the branch to use for the job.
   *
   * @public
   */
  branchName: string | undefined;

  /**
   * The unique ID for an existing job. This is required if the value of `jobType` is `RETRY`.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * Describes the type for the job. The job type `RELEASE` starts a new job with the latest change from the specified branch. This value is available only for apps that are connected to a repository.
   *
   * The job type `RETRY` retries an existing job. If the job type value is `RETRY`, the `jobId` is also required.
   *
   * @public
   */
  jobType: JobType | undefined;

  /**
   * A descriptive reason for starting the job.
   *
   * @public
   */
  jobReason?: string | undefined;

  /**
   * The commit ID from a third-party repository provider for the job.
   *
   * @public
   */
  commitId?: string | undefined;

  /**
   * The commit message from a third-party repository provider for the job.
   *
   * @public
   */
  commitMessage?: string | undefined;

  /**
   * The commit date and time for the job.
   *
   * @public
   */
  commitTime?: Date | undefined;
}

/**
 * The result structure for the run job request.
 *
 * @public
 */
export interface StartJobResult {
  /**
   * The summary for the job.
   *
   * @public
   */
  jobSummary: JobSummary | undefined;
}

/**
 * The request structure for the stop job request.
 *
 * @public
 */
export interface StopJobRequest {
  /**
   * The unique ID for an Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the branch to use for the stop job request.
   *
   * @public
   */
  branchName: string | undefined;

  /**
   * The unique id for the job.
   *
   * @public
   */
  jobId: string | undefined;
}

/**
 * The result structure for the stop job request.
 *
 * @public
 */
export interface StopJobResult {
  /**
   * The summary for the job.
   *
   * @public
   */
  jobSummary: JobSummary | undefined;
}

/**
 * The request structure to tag a resource with a tag key and value.
 *
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) to use to tag a resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags used to tag the resource.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * The response for the tag resource request.
 *
 * @public
 */
export interface TagResourceResponse {}

/**
 * The request structure for the untag resource request.
 *
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) to use to untag a resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tag keys to use to untag a resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * The response for the untag resource request.
 *
 * @public
 */
export interface UntagResourceResponse {}

/**
 * The request structure for the update app request.
 *
 * @public
 */
export interface UpdateAppRequest {
  /**
   * The unique ID for an Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name for an Amplify app.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description for an Amplify app.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The platform for the Amplify app. For a static app, set the platform type to `WEB`. For a dynamic server-side rendered (SSR) app, set the platform type to `WEB_COMPUTE`. For an app requiring Amplify Hosting's original SSR support only, set the platform type to `WEB_DYNAMIC`.
   *
   * If you are deploying an SSG only app with Next.js version 14 or later, you must set the platform type to `WEB_COMPUTE`.
   *
   * @public
   */
  platform?: Platform | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to assign to an SSR app. The SSR Compute role allows the Amplify Hosting compute service to securely access specific Amazon Web Services resources based on the role's permissions. For more information about the SSR Compute role, see [Adding an SSR Compute role](https://docs.aws.amazon.com/amplify/latest/userguide/amplify-SSR-compute-role.html) in the *Amplify User Guide*.
   *
   * @public
   */
  computeRoleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM service role for the Amplify app.
   *
   * @public
   */
  iamServiceRoleArn?: string | undefined;

  /**
   * The environment variables for an Amplify app.
   *
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * Enables branch auto-building for an Amplify app.
   *
   * @public
   */
  enableBranchAutoBuild?: boolean | undefined;

  /**
   * Automatically disconnects a branch in the Amplify console when you delete a branch from your Git repository.
   *
   * @public
   */
  enableBranchAutoDeletion?: boolean | undefined;

  /**
   * Enables basic authorization for an Amplify app.
   *
   * @public
   */
  enableBasicAuth?: boolean | undefined;

  /**
   * The basic authorization credentials for an Amplify app. You must base64-encode the authorization credentials and provide them in the format `user:password`.
   *
   * @public
   */
  basicAuthCredentials?: string | undefined;

  /**
   * The custom redirect and rewrite rules for an Amplify app.
   *
   * @public
   */
  customRules?: CustomRule[] | undefined;

  /**
   * The build specification (build spec) for an Amplify app.
   *
   * @public
   */
  buildSpec?: string | undefined;

  /**
   * The custom HTTP headers for an Amplify app.
   *
   * @public
   */
  customHeaders?: string | undefined;

  /**
   * Enables automated branch creation for an Amplify app.
   *
   * @public
   */
  enableAutoBranchCreation?: boolean | undefined;

  /**
   * Describes the automated branch creation glob patterns for an Amplify app.
   *
   * @public
   */
  autoBranchCreationPatterns?: string[] | undefined;

  /**
   * The automated branch creation configuration for an Amplify app.
   *
   * @public
   */
  autoBranchCreationConfig?: AutoBranchCreationConfig | undefined;

  /**
   * The name of the Git repository for an Amplify app.
   *
   * @public
   */
  repository?: string | undefined;

  /**
   * The OAuth token for a third-party source control system for an Amplify app. The OAuth token is used to create a webhook and a read-only deploy key using SSH cloning. The OAuth token is not stored.
   *
   * Use `oauthToken` for repository providers other than GitHub, such as Bitbucket or CodeCommit.
   *
   * To authorize access to GitHub as your repository provider, use `accessToken`.
   *
   * You must specify either `oauthToken` or `accessToken` when you update an app.
   *
   * Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see [Migrating an existing OAuth app to the Amplify GitHub App](https://docs.aws.amazon.com/amplify/latest/userguide/setting-up-GitHub-access.html#migrating-to-github-app-auth) in the *Amplify User Guide* .
   *
   * @public
   */
  oauthToken?: string | undefined;

  /**
   * The personal access token for a GitHub repository for an Amplify app. The personal access token is used to authorize access to a GitHub repository using the Amplify GitHub App. The token is not stored.
   *
   * Use `accessToken` for GitHub repositories only. To authorize access to a repository provider such as Bitbucket or CodeCommit, use `oauthToken`.
   *
   * You must specify either `accessToken` or `oauthToken` when you update an app.
   *
   * Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see [Migrating an existing OAuth app to the Amplify GitHub App](https://docs.aws.amazon.com/amplify/latest/userguide/setting-up-GitHub-access.html#migrating-to-github-app-auth) in the *Amplify User Guide* .
   *
   * @public
   */
  accessToken?: string | undefined;

  /**
   * Describes the configuration details that apply to the jobs for an Amplify app.
   *
   * @public
   */
  jobConfig?: JobConfig | undefined;

  /**
   * The cache configuration for the Amplify app.
   *
   * @public
   */
  cacheConfig?: CacheConfig | undefined;
}

/**
 * The result structure for an Amplify app update request.
 *
 * @public
 */
export interface UpdateAppResult {
  /**
   * Represents the updated Amplify app.
   *
   * @public
   */
  app: App | undefined;
}

/**
 * The request structure for the update branch request.
 *
 * @public
 */
export interface UpdateBranchRequest {
  /**
   * The unique ID for an Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the branch.
   *
   * @public
   */
  branchName: string | undefined;

  /**
   * The description for the branch.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The framework for the branch.
   *
   * @public
   */
  framework?: string | undefined;

  /**
   * Describes the current stage for the branch.
   *
   * @public
   */
  stage?: Stage | undefined;

  /**
   * Enables notifications for the branch.
   *
   * @public
   */
  enableNotification?: boolean | undefined;

  /**
   * Enables auto building for the branch.
   *
   * @public
   */
  enableAutoBuild?: boolean | undefined;

  /**
   * Specifies whether the skew protection feature is enabled for the branch.
   *
   * Deployment skew protection is available to Amplify applications to eliminate version skew issues between client and servers in web applications. When you apply skew protection to a branch, you can ensure that your clients always interact with the correct version of server-side assets, regardless of when a deployment occurs. For more information about skew protection, see [Skew protection for Amplify deployments](https://docs.aws.amazon.com/amplify/latest/userguide/skew-protection.html) in the *Amplify User Guide*.
   *
   * @public
   */
  enableSkewProtection?: boolean | undefined;

  /**
   * The environment variables for the branch.
   *
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * The basic authorization credentials for the branch. You must base64-encode the authorization credentials and provide them in the format `user:password`.
   *
   * @public
   */
  basicAuthCredentials?: string | undefined;

  /**
   * Enables basic authorization for the branch.
   *
   * @public
   */
  enableBasicAuth?: boolean | undefined;

  /**
   * Enables performance mode for the branch.
   *
   * Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out.
   *
   * @public
   */
  enablePerformanceMode?: boolean | undefined;

  /**
   * The build specification (build spec) for the branch.
   *
   * @public
   */
  buildSpec?: string | undefined;

  /**
   * The content Time to Live (TTL) for the website in seconds.
   *
   * @public
   */
  ttl?: string | undefined;

  /**
   * The display name for a branch. This is used as the default domain prefix.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * Enables pull request previews for this branch.
   *
   * @public
   */
  enablePullRequestPreview?: boolean | undefined;

  /**
   * The Amplify environment name for the pull request.
   *
   * @public
   */
  pullRequestEnvironmentName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for a backend environment that is part of a Gen 1 Amplify app.
   *
   * This field is available to Amplify Gen 1 apps only where the backend is created using Amplify Studio or the Amplify command line interface (CLI).
   *
   * @public
   */
  backendEnvironmentArn?: string | undefined;

  /**
   * The backend for a `Branch` of an Amplify app. Use for a backend created from an CloudFormation stack.
   *
   * This field is available to Amplify Gen 2 apps only. When you deploy an application with Amplify Gen 2, you provision the app's backend infrastructure using Typescript code.
   *
   * @public
   */
  backend?: Backend | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to assign to a branch of an SSR app. The SSR Compute role allows the Amplify Hosting compute service to securely access specific Amazon Web Services resources based on the role's permissions. For more information about the SSR Compute role, see [Adding an SSR Compute role](https://docs.aws.amazon.com/amplify/latest/userguide/amplify-SSR-compute-role.html) in the *Amplify User Guide*.
   *
   * @public
   */
  computeRoleArn?: string | undefined;
}

/**
 * The result structure for the update branch request.
 *
 * @public
 */
export interface UpdateBranchResult {
  /**
   * The branch for an Amplify app, which maps to a third-party repository branch.
   *
   * @public
   */
  branch: Branch | undefined;
}

/**
 * The request structure for the update domain association request.
 *
 * @public
 */
export interface UpdateDomainAssociationRequest {
  /**
   * The unique ID for an Amplify app.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The name of the domain.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * Enables the automated creation of subdomains for branches.
   *
   * @public
   */
  enableAutoSubDomain?: boolean | undefined;

  /**
   * Describes the settings for the subdomain.
   *
   * @public
   */
  subDomainSettings?: SubDomainSetting[] | undefined;

  /**
   * Sets the branch patterns for automatic subdomain creation.
   *
   * @public
   */
  autoSubDomainCreationPatterns?: string[] | undefined;

  /**
   * The required AWS Identity and Access Management (IAM) service role for the Amazon Resource Name (ARN) for automatically creating subdomains.
   *
   * @public
   */
  autoSubDomainIAMRole?: string | undefined;

  /**
   * The type of SSL/TLS certificate to use for your custom domain.
   *
   * @public
   */
  certificateSettings?: CertificateSettings | undefined;
}

/**
 * The result structure for the update domain association request.
 *
 * @public
 */
export interface UpdateDomainAssociationResult {
  /**
   * Describes a domain association, which associates a custom domain with an Amplify app.
   *
   * @public
   */
  domainAssociation: DomainAssociation | undefined;
}

/**
 * The request structure for the update webhook request.
 *
 * @public
 */
export interface UpdateWebhookRequest {
  /**
   * The unique ID for a webhook.
   *
   * @public
   */
  webhookId: string | undefined;

  /**
   * The name for a branch that is part of an Amplify app.
   *
   * @public
   */
  branchName?: string | undefined;

  /**
   * The description for a webhook.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * The result structure for the update webhook request.
 *
 * @public
 */
export interface UpdateWebhookResult {
  /**
   * Describes a webhook that connects repository events to an Amplify app.
   *
   * @public
   */
  webhook: Webhook | undefined;
}
