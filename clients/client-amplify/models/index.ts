import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p> Represents the different branches of a repository for building, deploying, and
 *             hosting an Amplify app. </p>
 */
export interface App {
  __type?: "App";
  /**
   * <p> The platform for the Amplify app. </p>
   */
  platform: Platform | string | undefined;

  /**
   * <p> Enables basic authorization for the Amplify app's branches. </p>
   */
  enableBasicAuth: boolean | undefined;

  /**
   * <p> The name for the Amplify app. </p>
   */
  name: string | undefined;

  /**
   * <p> The environment variables for the Amplify app. </p>
   */
  environmentVariables: { [key: string]: string } | undefined;

  /**
   * <p> Describes the automated branch creation glob patterns for the Amplify app. </p>
   */
  autoBranchCreationPatterns?: string[];

  /**
   * <p> Updates the date and time for the Amplify app. </p>
   */
  updateTime: Date | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the Amplify app. </p>
   */
  appArn: string | undefined;

  /**
   * <p> Describes the content of the build specification (build spec) for the Amplify app.
   *         </p>
   */
  buildSpec?: string;

  /**
   * <p> The default domain for the Amplify app. </p>
   */
  defaultDomain: string | undefined;

  /**
   * <p> Creates a date and time for the Amplify app. </p>
   */
  createTime: Date | undefined;

  /**
   * <p> The unique ID of the Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> Enables automated branch creation for the Amplify app. </p>
   */
  enableAutoBranchCreation?: boolean;

  /**
   * <p> The basic authorization credentials for branches for the Amplify app. </p>
   */
  basicAuthCredentials?: string;

  /**
   * <p> Automatically disconnect a branch in the Amplify Console when you delete a branch
   *             from your Git repository. </p>
   */
  enableBranchAutoDeletion?: boolean;

  /**
   * <p> The tag for the Amplify app. </p>
   */
  tags?: { [key: string]: string };

  /**
   * <p> Enables the auto-building of branches for the Amplify app. </p>
   */
  enableBranchAutoBuild: boolean | undefined;

  /**
   * <p> The repository for the Amplify app. </p>
   */
  repository: string | undefined;

  /**
   * <p> The description for the Amplify app. </p>
   */
  description: string | undefined;

  /**
   * <p> Describes the information about a production branch of the Amplify app. </p>
   */
  productionBranch?: ProductionBranch;

  /**
   * <p> Describes the automated branch creation configuration for the Amplify app. </p>
   */
  autoBranchCreationConfig?: AutoBranchCreationConfig;

  /**
   * <p> Describes the custom redirect and rewrite rules for the Amplify app. </p>
   */
  customRules?: CustomRule[];

  /**
   * <p> The AWS Identity and Access Management (IAM) service role for the Amazon Resource
   *             Name (ARN) of the Amplify app. </p>
   */
  iamServiceRoleArn?: string;
}

export namespace App {
  export const filterSensitiveLog = (obj: App): any => ({
    ...obj,
    ...(obj.basicAuthCredentials && { basicAuthCredentials: SENSITIVE_STRING }),
    ...(obj.autoBranchCreationConfig && {
      autoBranchCreationConfig: AutoBranchCreationConfig.filterSensitiveLog(obj.autoBranchCreationConfig),
    }),
  });
  export const isa = (o: any): o is App => __isa(o, "App");
}

/**
 * <p> Describes an artifact. </p>
 */
export interface Artifact {
  __type?: "Artifact";
  /**
   * <p> The unique ID for the artifact. </p>
   */
  artifactId: string | undefined;

  /**
   * <p> The file name for the artifact. </p>
   */
  artifactFileName: string | undefined;
}

export namespace Artifact {
  export const filterSensitiveLog = (obj: Artifact): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Artifact => __isa(o, "Artifact");
}

/**
 * <p> Describes the automated branch creation configuration. </p>
 */
export interface AutoBranchCreationConfig {
  __type?: "AutoBranchCreationConfig";
  /**
   * <p> The Amplify environment name for the pull request. </p>
   */
  pullRequestEnvironmentName?: string;

  /**
   * <p> Enables basic authorization for the autocreated branch. </p>
   */
  enableBasicAuth?: boolean;

  /**
   * <p> The framework for the autocreated branch. </p>
   */
  framework?: string;

  /**
   * <p> Enables pull request preview for the autocreated branch. </p>
   */
  enablePullRequestPreview?: boolean;

  /**
   * <p> The environment variables for the autocreated branch. </p>
   */
  environmentVariables?: { [key: string]: string };

  /**
   * <p> Enables auto building for the autocreated branch. </p>
   */
  enableAutoBuild?: boolean;

  /**
   * <p> Describes the current stage for the autocreated branch. </p>
   */
  stage?: Stage | string;

  /**
   * <p> The basic authorization credentials for the autocreated branch. </p>
   */
  basicAuthCredentials?: string;

  /**
   * <p> The build specification (build spec) for the autocreated branch. </p>
   */
  buildSpec?: string;
}

export namespace AutoBranchCreationConfig {
  export const filterSensitiveLog = (obj: AutoBranchCreationConfig): any => ({
    ...obj,
    ...(obj.basicAuthCredentials && { basicAuthCredentials: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is AutoBranchCreationConfig => __isa(o, "AutoBranchCreationConfig");
}

/**
 * <p> Describes the backend environment for an Amplify app. </p>
 */
export interface BackendEnvironment {
  __type?: "BackendEnvironment";
  /**
   * <p> The name of deployment artifacts. </p>
   */
  deploymentArtifacts?: string;

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
   * <p> The last updated date and time for a backend environment that is part of an Amplify
   *             app. </p>
   */
  updateTime: Date | undefined;

  /**
   * <p> The creation date and time for a backend environment that is part of an Amplify app.
   *         </p>
   */
  createTime: Date | undefined;

  /**
   * <p> The AWS CloudFormation stack name of a backend environment. </p>
   */
  stackName?: string;
}

export namespace BackendEnvironment {
  export const filterSensitiveLog = (obj: BackendEnvironment): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BackendEnvironment => __isa(o, "BackendEnvironment");
}

/**
 * <p> A request contains unexpected data. </p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  message?: string;
}

export namespace BadRequestException {
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BadRequestException => __isa(o, "BadRequestException");
}

/**
 * <p> The branch for an Amplify app, which maps to a third-party repository branch. </p>
 */
export interface Branch {
  __type?: "Branch";
  /**
   * <p> The name for the branch that is part of an Amplify app. </p>
   */
  branchName: string | undefined;

  /**
   * <p> The Amplify environment name for the pull request. </p>
   */
  pullRequestEnvironmentName?: string;

  /**
   * <p> The thumbnail URL for the branch of an Amplify app. </p>
   */
  thumbnailUrl?: string;

  /**
   * <p> The tag for the branch of an Amplify app. </p>
   */
  tags?: { [key: string]: string };

  /**
   * <p> The ID of the active job for a branch of an Amplify app. </p>
   */
  activeJobId: string | undefined;

  /**
   * <p> The content Time to Live (TTL) for the website in seconds. </p>
   */
  ttl: string | undefined;

  /**
   * <p> Enables auto-building on push for a branch of an Amplify app. </p>
   */
  enableAutoBuild: boolean | undefined;

  /**
   * <p> Enables basic authorization for a branch of an Amplify app. </p>
   */
  enableBasicAuth: boolean | undefined;

  /**
   * <p> The last updated date and time for a branch that is part of an Amplify app. </p>
   */
  updateTime: Date | undefined;

  /**
   * <p> The framework for a branch of an Amplify app. </p>
   */
  framework: string | undefined;

  /**
   * <p> The destination branch if the branch is a pull request branch. </p>
   */
  destinationBranch?: string;

  /**
   * <p> The current stage for the branch that is part of an Amplify app. </p>
   */
  stage: Stage | string | undefined;

  /**
   * <p> The creation date and time for a branch that is part of an Amplify app. </p>
   */
  createTime: Date | undefined;

  /**
   * <p> The build specification (build spec) content for the branch of an Amplify app.
   *         </p>
   */
  buildSpec?: string;

  /**
   * <p> The basic authorization credentials for a branch of an Amplify app. </p>
   */
  basicAuthCredentials?: string;

  /**
   * <p> A list of custom resources that are linked to this branch. </p>
   */
  associatedResources?: string[];

  /**
   * <p> The description for the branch that is part of an Amplify app. </p>
   */
  description: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify
   *             app. </p>
   */
  backendEnvironmentArn?: string;

  /**
   * <p> The display name for the branch. This is used as the default domain prefix. </p>
   */
  displayName: string | undefined;

  /**
   * <p> The environment variables specific to a branch of an Amplify app. </p>
   */
  environmentVariables: { [key: string]: string } | undefined;

  /**
   * <p> Enables pull request preview for the branch. </p>
   */
  enablePullRequestPreview: boolean | undefined;

  /**
   * <p> The total number of jobs that are part of an Amplify app. </p>
   */
  totalNumberOfJobs: string | undefined;

  /**
   * <p> The source branch if the branch is a pull request branch. </p>
   */
  sourceBranch?: string;

  /**
   * <p> The Amazon Resource Name (ARN) for a branch that is part of an Amplify app. </p>
   */
  branchArn: string | undefined;

  /**
   * <p> The custom domains for a branch of an Amplify app. </p>
   */
  customDomains: string[] | undefined;

  /**
   * <p> Enables notifications for a branch that is part of an Amplify app. </p>
   */
  enableNotification: boolean | undefined;
}

export namespace Branch {
  export const filterSensitiveLog = (obj: Branch): any => ({
    ...obj,
    ...(obj.basicAuthCredentials && { basicAuthCredentials: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is Branch => __isa(o, "Branch");
}

/**
 * <p> The request structure used to create apps in Amplify. </p>
 */
export interface CreateAppRequest {
  __type?: "CreateAppRequest";
  /**
   * <p> The tag for an Amplify app. </p>
   */
  tags?: { [key: string]: string };

  /**
   * <p> The repository for an Amplify app. </p>
   */
  repository?: string;

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
   * <p> The credentials for basic authorization for an Amplify app. </p>
   */
  basicAuthCredentials?: string;

  /**
   * <p> The description for an Amplify app. </p>
   */
  description?: string;

  /**
   * <p> The personal access token for a third-party source control system for an Amplify app.
   *             The personal access token is used to create a webhook and a read-only deploy key. The
   *             token is not stored. </p>
   */
  accessToken?: string;

  /**
   * <p> The build specification (build spec) for an Amplify app. </p>
   */
  buildSpec?: string;

  /**
   * <p> Enables automated branch creation for the Amplify app. </p>
   */
  enableAutoBranchCreation?: boolean;

  /**
   * <p> The AWS Identity and Access Management (IAM) service role for an Amplify app. </p>
   */
  iamServiceRoleArn?: string;

  /**
   * <p> The OAuth token for a third-party source control system for an Amplify app. The OAuth
   *             token is used to create a webhook and a read-only deploy key. The OAuth token is not
   *             stored. </p>
   */
  oauthToken?: string;

  /**
   * <p> The automated branch creation glob patterns for the Amplify app. </p>
   */
  autoBranchCreationPatterns?: string[];

  /**
   * <p> The environment variables map for an Amplify app. </p>
   */
  environmentVariables?: { [key: string]: string };

  /**
   * <p> Enables basic authorization for an Amplify app. This will apply to all branches that
   *             are part of this app. </p>
   */
  enableBasicAuth?: boolean;

  /**
   * <p> The name for the Amplify app. </p>
   */
  name: string | undefined;

  /**
   * <p> The platform or framework for an Amplify app. </p>
   */
  platform?: Platform | string;

  /**
   * <p> The automated branch creation configuration for the Amplify app. </p>
   */
  autoBranchCreationConfig?: AutoBranchCreationConfig;

  /**
   * <p> The custom rewrite and redirect rules for an Amplify app. </p>
   */
  customRules?: CustomRule[];
}

export namespace CreateAppRequest {
  export const filterSensitiveLog = (obj: CreateAppRequest): any => ({
    ...obj,
    ...(obj.basicAuthCredentials && { basicAuthCredentials: SENSITIVE_STRING }),
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
    ...(obj.oauthToken && { oauthToken: SENSITIVE_STRING }),
    ...(obj.autoBranchCreationConfig && {
      autoBranchCreationConfig: AutoBranchCreationConfig.filterSensitiveLog(obj.autoBranchCreationConfig),
    }),
  });
  export const isa = (o: any): o is CreateAppRequest => __isa(o, "CreateAppRequest");
}

export interface CreateAppResult {
  __type?: "CreateAppResult";
  /**
   * <p> Represents the different branches of a repository for building, deploying, and
   *             hosting an Amplify app. </p>
   */
  app: App | undefined;
}

export namespace CreateAppResult {
  export const filterSensitiveLog = (obj: CreateAppResult): any => ({
    ...obj,
    ...(obj.app && { app: App.filterSensitiveLog(obj.app) }),
  });
  export const isa = (o: any): o is CreateAppResult => __isa(o, "CreateAppResult");
}

/**
 * <p> The request structure for the backend environment create request. </p>
 */
export interface CreateBackendEnvironmentRequest {
  __type?: "CreateBackendEnvironmentRequest";
  /**
   * <p> The AWS CloudFormation stack name of a backend environment. </p>
   */
  stackName?: string;

  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The name of deployment artifacts. </p>
   */
  deploymentArtifacts?: string;

  /**
   * <p> The name for the backend environment. </p>
   */
  environmentName: string | undefined;
}

export namespace CreateBackendEnvironmentRequest {
  export const filterSensitiveLog = (obj: CreateBackendEnvironmentRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateBackendEnvironmentRequest => __isa(o, "CreateBackendEnvironmentRequest");
}

/**
 * <p> The result structure for the create backend environment request. </p>
 */
export interface CreateBackendEnvironmentResult {
  __type?: "CreateBackendEnvironmentResult";
  /**
   * <p> Describes the backend environment for an Amplify app. </p>
   */
  backendEnvironment: BackendEnvironment | undefined;
}

export namespace CreateBackendEnvironmentResult {
  export const filterSensitiveLog = (obj: CreateBackendEnvironmentResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateBackendEnvironmentResult => __isa(o, "CreateBackendEnvironmentResult");
}

/**
 * <p> The request structure for the create branch request. </p>
 */
export interface CreateBranchRequest {
  __type?: "CreateBranchRequest";
  /**
   * <p> Enables pull request preview for this branch. </p>
   */
  enablePullRequestPreview?: boolean;

  /**
   * <p> Enables basic authorization for the branch. </p>
   */
  enableBasicAuth?: boolean;

  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> Describes the current stage for the branch. </p>
   */
  stage?: Stage | string;

  /**
   * <p> Enables notifications for the branch. </p>
   */
  enableNotification?: boolean;

  /**
   * <p> The basic authorization credentials for the branch. </p>
   */
  basicAuthCredentials?: string;

  /**
   * <p> The build specification (build spec) for the branch. </p>
   */
  buildSpec?: string;

  /**
   * <p> The content Time To Live (TTL) for the website in seconds. </p>
   */
  ttl?: string;

  /**
   * <p> The Amplify environment name for the pull request. </p>
   */
  pullRequestEnvironmentName?: string;

  /**
   * <p> The name for the branch. </p>
   */
  branchName: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify
   *             app. </p>
   */
  backendEnvironmentArn?: string;

  /**
   * <p> The framework for the branch. </p>
   */
  framework?: string;

  /**
   * <p> The tag for the branch. </p>
   */
  tags?: { [key: string]: string };

  /**
   * <p> The environment variables for the branch. </p>
   */
  environmentVariables?: { [key: string]: string };

  /**
   * <p> The display name for a branch. This is used as the default domain prefix. </p>
   */
  displayName?: string;

  /**
   * <p> The description for the branch. </p>
   */
  description?: string;

  /**
   * <p> Enables auto building for the branch. </p>
   */
  enableAutoBuild?: boolean;
}

export namespace CreateBranchRequest {
  export const filterSensitiveLog = (obj: CreateBranchRequest): any => ({
    ...obj,
    ...(obj.basicAuthCredentials && { basicAuthCredentials: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is CreateBranchRequest => __isa(o, "CreateBranchRequest");
}

/**
 * <p> The result structure for create branch request. </p>
 */
export interface CreateBranchResult {
  __type?: "CreateBranchResult";
  /**
   * <p> Describes the branch for an Amplify app, which maps to a third-party repository
   *             branch. </p>
   */
  branch: Branch | undefined;
}

export namespace CreateBranchResult {
  export const filterSensitiveLog = (obj: CreateBranchResult): any => ({
    ...obj,
    ...(obj.branch && { branch: Branch.filterSensitiveLog(obj.branch) }),
  });
  export const isa = (o: any): o is CreateBranchResult => __isa(o, "CreateBranchResult");
}

/**
 * <p> The request structure for the create a new deployment request. </p>
 */
export interface CreateDeploymentRequest {
  __type?: "CreateDeploymentRequest";
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> An optional file map that contains the file name as the key and the file content md5
   *             hash as the value. If this argument is provided, the service will generate a unique
   *             upload URL per file. Otherwise, the service will only generate a single upload URL for
   *             the zipped files. </p>
   */
  fileMap?: { [key: string]: string };

  /**
   * <p> The name for the branch, for the job. </p>
   */
  branchName: string | undefined;
}

export namespace CreateDeploymentRequest {
  export const filterSensitiveLog = (obj: CreateDeploymentRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDeploymentRequest => __isa(o, "CreateDeploymentRequest");
}

/**
 * <p> The result structure for the create a new deployment request. </p>
 */
export interface CreateDeploymentResult {
  __type?: "CreateDeploymentResult";
  /**
   * <p> The job ID for this deployment. will supply to start deployment api. </p>
   */
  jobId?: string;

  /**
   * <p> When the <code>fileMap</code> argument is provided in the request,
   *                 <code>fileUploadUrls</code> will contain a map of file names to upload URLs. </p>
   */
  fileUploadUrls: { [key: string]: string } | undefined;

  /**
   * <p> When the <code>fileMap</code> argument is not provided in the request, this
   *                 <code>zipUploadUrl</code> is returned. </p>
   */
  zipUploadUrl: string | undefined;
}

export namespace CreateDeploymentResult {
  export const filterSensitiveLog = (obj: CreateDeploymentResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDeploymentResult => __isa(o, "CreateDeploymentResult");
}

/**
 * <p> The request structure for the create domain association request. </p>
 */
export interface CreateDomainAssociationRequest {
  __type?: "CreateDomainAssociationRequest";
  /**
   * <p> The required AWS Identity and Access Management (IAM) service role for the Amazon
   *             Resource Name (ARN) for automatically creating subdomains. </p>
   */
  autoSubDomainIAMRole?: string;

  /**
   * <p> Enables the automated creation of subdomains for branches. </p>
   */
  enableAutoSubDomain?: boolean;

  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> Sets the branch patterns for automatic subdomain creation. </p>
   */
  autoSubDomainCreationPatterns?: string[];

  /**
   * <p> The domain name for the domain association. </p>
   */
  domainName: string | undefined;

  /**
   * <p> The setting for the subdomain. </p>
   */
  subDomainSettings: SubDomainSetting[] | undefined;
}

export namespace CreateDomainAssociationRequest {
  export const filterSensitiveLog = (obj: CreateDomainAssociationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDomainAssociationRequest => __isa(o, "CreateDomainAssociationRequest");
}

/**
 * <p> The result structure for the create domain association request. </p>
 */
export interface CreateDomainAssociationResult {
  __type?: "CreateDomainAssociationResult";
  /**
   * <p> Describes the structure of a domain association, which associates a custom domain
   *             with an Amplify app. </p>
   */
  domainAssociation: DomainAssociation | undefined;
}

export namespace CreateDomainAssociationResult {
  export const filterSensitiveLog = (obj: CreateDomainAssociationResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDomainAssociationResult => __isa(o, "CreateDomainAssociationResult");
}

/**
 * <p> The request structure for the create webhook request. </p>
 */
export interface CreateWebhookRequest {
  __type?: "CreateWebhookRequest";
  /**
   * <p> The description for a webhook. </p>
   */
  description?: string;

  /**
   * <p> The name for a branch that is part of an Amplify app. </p>
   */
  branchName: string | undefined;

  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
}

export namespace CreateWebhookRequest {
  export const filterSensitiveLog = (obj: CreateWebhookRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateWebhookRequest => __isa(o, "CreateWebhookRequest");
}

/**
 * <p> The result structure for the create webhook request. </p>
 */
export interface CreateWebhookResult {
  __type?: "CreateWebhookResult";
  /**
   * <p> Describes a webhook that connects repository events to an Amplify app. </p>
   */
  webhook: Webhook | undefined;
}

export namespace CreateWebhookResult {
  export const filterSensitiveLog = (obj: CreateWebhookResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateWebhookResult => __isa(o, "CreateWebhookResult");
}

/**
 * <p> Describes a custom rewrite or redirect rule. </p>
 */
export interface CustomRule {
  __type?: "CustomRule";
  /**
   * <p> The source pattern for a URL rewrite or redirect rule. </p>
   */
  source: string | undefined;

  /**
   * <p> The condition for a URL rewrite or redirect rule, such as a country code. </p>
   */
  condition?: string;

  /**
   * <p> The status code for a URL rewrite or redirect rule. </p>
   */
  status?: string;

  /**
   * <p> The target pattern for a URL rewrite or redirect rule. </p>
   */
  target: string | undefined;
}

export namespace CustomRule {
  export const filterSensitiveLog = (obj: CustomRule): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CustomRule => __isa(o, "CustomRule");
}

/**
 * <p> Describes the request structure for the delete app request. </p>
 */
export interface DeleteAppRequest {
  __type?: "DeleteAppRequest";
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
}

export namespace DeleteAppRequest {
  export const filterSensitiveLog = (obj: DeleteAppRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteAppRequest => __isa(o, "DeleteAppRequest");
}

/**
 * <p> The result structure for the delete app request. </p>
 */
export interface DeleteAppResult {
  __type?: "DeleteAppResult";
  /**
   * <p> Represents the different branches of a repository for building, deploying, and
   *             hosting an Amplify app. </p>
   */
  app: App | undefined;
}

export namespace DeleteAppResult {
  export const filterSensitiveLog = (obj: DeleteAppResult): any => ({
    ...obj,
    ...(obj.app && { app: App.filterSensitiveLog(obj.app) }),
  });
  export const isa = (o: any): o is DeleteAppResult => __isa(o, "DeleteAppResult");
}

/**
 * <p> The request structure for the delete backend environment request. </p>
 */
export interface DeleteBackendEnvironmentRequest {
  __type?: "DeleteBackendEnvironmentRequest";
  /**
   * <p> The unique ID of an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The name of a backend environment of an Amplify app. </p>
   */
  environmentName: string | undefined;
}

export namespace DeleteBackendEnvironmentRequest {
  export const filterSensitiveLog = (obj: DeleteBackendEnvironmentRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteBackendEnvironmentRequest => __isa(o, "DeleteBackendEnvironmentRequest");
}

/**
 * <p> The result structure of the delete backend environment result. </p>
 */
export interface DeleteBackendEnvironmentResult {
  __type?: "DeleteBackendEnvironmentResult";
  /**
   * <p> Describes the backend environment for an Amplify app. </p>
   */
  backendEnvironment: BackendEnvironment | undefined;
}

export namespace DeleteBackendEnvironmentResult {
  export const filterSensitiveLog = (obj: DeleteBackendEnvironmentResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteBackendEnvironmentResult => __isa(o, "DeleteBackendEnvironmentResult");
}

/**
 * <p> The request structure for the delete branch request. </p>
 */
export interface DeleteBranchRequest {
  __type?: "DeleteBranchRequest";
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The name for the branch. </p>
   */
  branchName: string | undefined;
}

export namespace DeleteBranchRequest {
  export const filterSensitiveLog = (obj: DeleteBranchRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteBranchRequest => __isa(o, "DeleteBranchRequest");
}

/**
 * <p> The result structure for the delete branch request. </p>
 */
export interface DeleteBranchResult {
  __type?: "DeleteBranchResult";
  /**
   * <p> The branch for an Amplify app, which maps to a third-party repository branch. </p>
   */
  branch: Branch | undefined;
}

export namespace DeleteBranchResult {
  export const filterSensitiveLog = (obj: DeleteBranchResult): any => ({
    ...obj,
    ...(obj.branch && { branch: Branch.filterSensitiveLog(obj.branch) }),
  });
  export const isa = (o: any): o is DeleteBranchResult => __isa(o, "DeleteBranchResult");
}

/**
 * <p> The request structure for the delete domain association request. </p>
 */
export interface DeleteDomainAssociationRequest {
  __type?: "DeleteDomainAssociationRequest";
  /**
   * <p> The name of the domain. </p>
   */
  domainName: string | undefined;

  /**
   * <p> The unique id for an Amplify app. </p>
   */
  appId: string | undefined;
}

export namespace DeleteDomainAssociationRequest {
  export const filterSensitiveLog = (obj: DeleteDomainAssociationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDomainAssociationRequest => __isa(o, "DeleteDomainAssociationRequest");
}

export interface DeleteDomainAssociationResult {
  __type?: "DeleteDomainAssociationResult";
  /**
   * <p> Describes a domain association that associates a custom domain with an Amplify app.
   *         </p>
   */
  domainAssociation: DomainAssociation | undefined;
}

export namespace DeleteDomainAssociationResult {
  export const filterSensitiveLog = (obj: DeleteDomainAssociationResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDomainAssociationResult => __isa(o, "DeleteDomainAssociationResult");
}

/**
 * <p> The request structure for the delete job request. </p>
 */
export interface DeleteJobRequest {
  __type?: "DeleteJobRequest";
  /**
   * <p> The unique ID for the job. </p>
   */
  jobId: string | undefined;

  /**
   * <p> The name for the branch, for the job. </p>
   */
  branchName: string | undefined;

  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
}

export namespace DeleteJobRequest {
  export const filterSensitiveLog = (obj: DeleteJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteJobRequest => __isa(o, "DeleteJobRequest");
}

/**
 * <p> The result structure for the delete job request. </p>
 */
export interface DeleteJobResult {
  __type?: "DeleteJobResult";
  /**
   * <p> Describes the summary for an execution job for an Amplify app. </p>
   */
  jobSummary: JobSummary | undefined;
}

export namespace DeleteJobResult {
  export const filterSensitiveLog = (obj: DeleteJobResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteJobResult => __isa(o, "DeleteJobResult");
}

/**
 * <p> The request structure for the delete webhook request. </p>
 */
export interface DeleteWebhookRequest {
  __type?: "DeleteWebhookRequest";
  /**
   * <p> The unique ID for a webhook. </p>
   */
  webhookId: string | undefined;
}

export namespace DeleteWebhookRequest {
  export const filterSensitiveLog = (obj: DeleteWebhookRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteWebhookRequest => __isa(o, "DeleteWebhookRequest");
}

/**
 * <p> The result structure for the delete webhook request. </p>
 */
export interface DeleteWebhookResult {
  __type?: "DeleteWebhookResult";
  /**
   * <p> Describes a webhook that connects repository events to an Amplify app. </p>
   */
  webhook: Webhook | undefined;
}

export namespace DeleteWebhookResult {
  export const filterSensitiveLog = (obj: DeleteWebhookResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteWebhookResult => __isa(o, "DeleteWebhookResult");
}

/**
 * <p> An operation failed because a dependent service threw an exception. </p>
 */
export interface DependentServiceFailureException extends __SmithyException, $MetadataBearer {
  name: "DependentServiceFailureException";
  $fault: "server";
  message?: string;
}

export namespace DependentServiceFailureException {
  export const filterSensitiveLog = (obj: DependentServiceFailureException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DependentServiceFailureException => __isa(o, "DependentServiceFailureException");
}

/**
 * <p> Describes a domain association that associates a custom domain with an Amplify app.
 *         </p>
 */
export interface DomainAssociation {
  __type?: "DomainAssociation";
  /**
   * <p> Enables the automated creation of subdomains for branches. </p>
   */
  enableAutoSubDomain: boolean | undefined;

  /**
   * <p> The reason for the current status of the domain association. </p>
   */
  statusReason: string | undefined;

  /**
   * <p> The DNS record for certificate verification. </p>
   */
  certificateVerificationDNSRecord?: string;

  /**
   * <p> The Amazon Resource Name (ARN) for the domain association. </p>
   */
  domainAssociationArn: string | undefined;

  /**
   * <p> Sets branch patterns for automatic subdomain creation. </p>
   */
  autoSubDomainCreationPatterns?: string[];

  /**
   * <p> The current status of the domain association. </p>
   */
  domainStatus: DomainStatus | string | undefined;

  /**
   * <p> The required AWS Identity and Access Management (IAM) service role for the Amazon
   *             Resource Name (ARN) for automatically creating subdomains. </p>
   */
  autoSubDomainIAMRole?: string;

  /**
   * <p> The name of the domain. </p>
   */
  domainName: string | undefined;

  /**
   * <p> The subdomains for the domain association. </p>
   */
  subDomains: SubDomain[] | undefined;
}

export namespace DomainAssociation {
  export const filterSensitiveLog = (obj: DomainAssociation): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DomainAssociation => __isa(o, "DomainAssociation");
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
 * <p> The request structure for the generate access logs request. </p>
 */
export interface GenerateAccessLogsRequest {
  __type?: "GenerateAccessLogsRequest";
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

  /**
   * <p> The time at which the logs should start. The time range specified is inclusive of the
   *             start time. </p>
   */
  startTime?: Date;
}

export namespace GenerateAccessLogsRequest {
  export const filterSensitiveLog = (obj: GenerateAccessLogsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GenerateAccessLogsRequest => __isa(o, "GenerateAccessLogsRequest");
}

/**
 * <p> The result structure for the generate access logs request. </p>
 */
export interface GenerateAccessLogsResult {
  __type?: "GenerateAccessLogsResult";
  /**
   * <p> The pre-signed URL for the requested access logs. </p>
   */
  logUrl?: string;
}

export namespace GenerateAccessLogsResult {
  export const filterSensitiveLog = (obj: GenerateAccessLogsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GenerateAccessLogsResult => __isa(o, "GenerateAccessLogsResult");
}

/**
 * <p> The request structure for the get app request. </p>
 */
export interface GetAppRequest {
  __type?: "GetAppRequest";
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
}

export namespace GetAppRequest {
  export const filterSensitiveLog = (obj: GetAppRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetAppRequest => __isa(o, "GetAppRequest");
}

export interface GetAppResult {
  __type?: "GetAppResult";
  /**
   * <p> Represents the different branches of a repository for building, deploying, and
   *             hosting an Amplify app. </p>
   */
  app: App | undefined;
}

export namespace GetAppResult {
  export const filterSensitiveLog = (obj: GetAppResult): any => ({
    ...obj,
    ...(obj.app && { app: App.filterSensitiveLog(obj.app) }),
  });
  export const isa = (o: any): o is GetAppResult => __isa(o, "GetAppResult");
}

/**
 * <p> Returns the request structure for the get artifact request. </p>
 */
export interface GetArtifactUrlRequest {
  __type?: "GetArtifactUrlRequest";
  /**
   * <p> The unique ID for an artifact. </p>
   */
  artifactId: string | undefined;
}

export namespace GetArtifactUrlRequest {
  export const filterSensitiveLog = (obj: GetArtifactUrlRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetArtifactUrlRequest => __isa(o, "GetArtifactUrlRequest");
}

/**
 * <p> Returns the result structure for the get artifact request. </p>
 */
export interface GetArtifactUrlResult {
  __type?: "GetArtifactUrlResult";
  /**
   * <p> The presigned URL for the artifact. </p>
   */
  artifactUrl: string | undefined;

  /**
   * <p> The unique ID for an artifact. </p>
   */
  artifactId: string | undefined;
}

export namespace GetArtifactUrlResult {
  export const filterSensitiveLog = (obj: GetArtifactUrlResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetArtifactUrlResult => __isa(o, "GetArtifactUrlResult");
}

/**
 * <p> The request structure for the get backend environment request. </p>
 */
export interface GetBackendEnvironmentRequest {
  __type?: "GetBackendEnvironmentRequest";
  /**
   * <p> The unique id for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The name for the backend environment. </p>
   */
  environmentName: string | undefined;
}

export namespace GetBackendEnvironmentRequest {
  export const filterSensitiveLog = (obj: GetBackendEnvironmentRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBackendEnvironmentRequest => __isa(o, "GetBackendEnvironmentRequest");
}

/**
 * <p> The result structure for the get backend environment result. </p>
 */
export interface GetBackendEnvironmentResult {
  __type?: "GetBackendEnvironmentResult";
  /**
   * <p> Describes the backend environment for an Amplify app. </p>
   */
  backendEnvironment: BackendEnvironment | undefined;
}

export namespace GetBackendEnvironmentResult {
  export const filterSensitiveLog = (obj: GetBackendEnvironmentResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBackendEnvironmentResult => __isa(o, "GetBackendEnvironmentResult");
}

/**
 * <p> The request structure for the get branch request. </p>
 */
export interface GetBranchRequest {
  __type?: "GetBranchRequest";
  /**
   * <p> The name for the branch. </p>
   */
  branchName: string | undefined;

  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
}

export namespace GetBranchRequest {
  export const filterSensitiveLog = (obj: GetBranchRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBranchRequest => __isa(o, "GetBranchRequest");
}

export interface GetBranchResult {
  __type?: "GetBranchResult";
  /**
   * <p> The branch for an Amplify app, which maps to a third-party repository branch. </p>
   */
  branch: Branch | undefined;
}

export namespace GetBranchResult {
  export const filterSensitiveLog = (obj: GetBranchResult): any => ({
    ...obj,
    ...(obj.branch && { branch: Branch.filterSensitiveLog(obj.branch) }),
  });
  export const isa = (o: any): o is GetBranchResult => __isa(o, "GetBranchResult");
}

/**
 * <p> The request structure for the get domain association request. </p>
 */
export interface GetDomainAssociationRequest {
  __type?: "GetDomainAssociationRequest";
  /**
   * <p> The name of the domain. </p>
   */
  domainName: string | undefined;

  /**
   * <p> The unique id for an Amplify app. </p>
   */
  appId: string | undefined;
}

export namespace GetDomainAssociationRequest {
  export const filterSensitiveLog = (obj: GetDomainAssociationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDomainAssociationRequest => __isa(o, "GetDomainAssociationRequest");
}

/**
 * <p> The result structure for the get domain association request. </p>
 */
export interface GetDomainAssociationResult {
  __type?: "GetDomainAssociationResult";
  /**
   * <p> Describes the structure of a domain association, which associates a custom domain
   *             with an Amplify app. </p>
   */
  domainAssociation: DomainAssociation | undefined;
}

export namespace GetDomainAssociationResult {
  export const filterSensitiveLog = (obj: GetDomainAssociationResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDomainAssociationResult => __isa(o, "GetDomainAssociationResult");
}

/**
 * <p> The request structure for the get job request. </p>
 */
export interface GetJobRequest {
  __type?: "GetJobRequest";
  /**
   * <p> The branch name for the job. </p>
   */
  branchName: string | undefined;

  /**
   * <p> The unique ID for the job. </p>
   */
  jobId: string | undefined;

  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
}

export namespace GetJobRequest {
  export const filterSensitiveLog = (obj: GetJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetJobRequest => __isa(o, "GetJobRequest");
}

export interface GetJobResult {
  __type?: "GetJobResult";
  /**
   * <p> Describes an execution job for an Amplify app. </p>
   */
  job: Job | undefined;
}

export namespace GetJobResult {
  export const filterSensitiveLog = (obj: GetJobResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetJobResult => __isa(o, "GetJobResult");
}

/**
 * <p> The request structure for the get webhook request. </p>
 */
export interface GetWebhookRequest {
  __type?: "GetWebhookRequest";
  /**
   * <p> The unique ID for a webhook. </p>
   */
  webhookId: string | undefined;
}

export namespace GetWebhookRequest {
  export const filterSensitiveLog = (obj: GetWebhookRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetWebhookRequest => __isa(o, "GetWebhookRequest");
}

/**
 * <p> The result structure for the get webhook request. </p>
 */
export interface GetWebhookResult {
  __type?: "GetWebhookResult";
  /**
   * <p> Describes the structure of a webhook. </p>
   */
  webhook: Webhook | undefined;
}

export namespace GetWebhookResult {
  export const filterSensitiveLog = (obj: GetWebhookResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetWebhookResult => __isa(o, "GetWebhookResult");
}

/**
 * <p> The service failed to perform an operation due to an internal issue. </p>
 */
export interface InternalFailureException extends __SmithyException, $MetadataBearer {
  name: "InternalFailureException";
  $fault: "server";
  message?: string;
}

export namespace InternalFailureException {
  export const filterSensitiveLog = (obj: InternalFailureException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalFailureException => __isa(o, "InternalFailureException");
}

/**
 * <p> Describes an execution job for an Amplify app. </p>
 */
export interface Job {
  __type?: "Job";
  /**
   * <p> The execution steps for an execution job, for an Amplify app. </p>
   */
  steps: Step[] | undefined;

  /**
   * <p> Describes the summary for an execution job for an Amplify app. </p>
   */
  summary: JobSummary | undefined;
}

export namespace Job {
  export const filterSensitiveLog = (obj: Job): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Job => __isa(o, "Job");
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
  __type?: "JobSummary";
  /**
   * <p> The start date and time for the job. </p>
   */
  startTime: Date | undefined;

  /**
   * <p> The commit ID from a third-party repository provider for the job. </p>
   */
  commitId: string | undefined;

  /**
   * <p> The type for the job. If the value is <code>RELEASE</code>, the job was manually
   *             released from its source by using the <code>StartJob</code> API. If the value is
   *                 <code>RETRY</code>, the job was manually retried using the <code>StartJob</code>
   *             API. If the value is <code>WEB_HOOK</code>, the job was automatically triggered by
   *             webhooks. </p>
   */
  jobType: JobType | string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) for the job. </p>
   */
  jobArn: string | undefined;

  /**
   * <p> The end date and time for the job. </p>
   */
  endTime?: Date;

  /**
   * <p> The current status for the job. </p>
   */
  status: JobStatus | string | undefined;

  /**
   * <p> The unique ID for the job. </p>
   */
  jobId: string | undefined;

  /**
   * <p> The commit message from a third-party repository provider for the job. </p>
   */
  commitMessage: string | undefined;

  /**
   * <p> The commit date and time for the job. </p>
   */
  commitTime: Date | undefined;
}

export namespace JobSummary {
  export const filterSensitiveLog = (obj: JobSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is JobSummary => __isa(o, "JobSummary");
}

export enum JobType {
  MANUAL = "MANUAL",
  RELEASE = "RELEASE",
  RETRY = "RETRY",
  WEB_HOOK = "WEB_HOOK",
}

/**
 * <p> A resource could not be created because service quotas were exceeded. </p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LimitExceededException => __isa(o, "LimitExceededException");
}

/**
 * <p> The request structure for the list apps request. </p>
 */
export interface ListAppsRequest {
  __type?: "ListAppsRequest";
  /**
   * <p> The maximum number of records to list in a single response. </p>
   */
  maxResults?: number;

  /**
   * <p> A pagination token. If non-null, the pagination token is returned in a result. Pass
   *             its value in another request to retrieve more entries. </p>
   */
  nextToken?: string;
}

export namespace ListAppsRequest {
  export const filterSensitiveLog = (obj: ListAppsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListAppsRequest => __isa(o, "ListAppsRequest");
}

/**
 * <p> The result structure for an Amplify app list request. </p>
 */
export interface ListAppsResult {
  __type?: "ListAppsResult";
  /**
   * <p> A pagination token. Set to null to start listing apps from start. If non-null, the
   *             pagination token is returned in a result. Pass its value in here to list more projects.
   *         </p>
   */
  nextToken?: string;

  /**
   * <p> A list of Amplify apps. </p>
   */
  apps: App[] | undefined;
}

export namespace ListAppsResult {
  export const filterSensitiveLog = (obj: ListAppsResult): any => ({
    ...obj,
    ...(obj.apps && { apps: obj.apps.map((item) => App.filterSensitiveLog(item)) }),
  });
  export const isa = (o: any): o is ListAppsResult => __isa(o, "ListAppsResult");
}

/**
 * <p> Describes the request structure for the list artifacts request. </p>
 */
export interface ListArtifactsRequest {
  __type?: "ListArtifactsRequest";
  /**
   * <p> The name of a branch that is part of an Amplify app. </p>
   */
  branchName: string | undefined;

  /**
   * <p> The maximum number of records to list in a single response. </p>
   */
  maxResults?: number;

  /**
   * <p> A pagination token. Set to null to start listing artifacts from start. If a non-null
   *             pagination token is returned in a result, pass its value in here to list more artifacts.
   *         </p>
   */
  nextToken?: string;

  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The unique ID for a job. </p>
   */
  jobId: string | undefined;
}

export namespace ListArtifactsRequest {
  export const filterSensitiveLog = (obj: ListArtifactsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListArtifactsRequest => __isa(o, "ListArtifactsRequest");
}

/**
 * <p> The result structure for the list artifacts request. </p>
 */
export interface ListArtifactsResult {
  __type?: "ListArtifactsResult";
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

export namespace ListArtifactsResult {
  export const filterSensitiveLog = (obj: ListArtifactsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListArtifactsResult => __isa(o, "ListArtifactsResult");
}

/**
 * <p> The request structure for the list backend environments request. </p>
 */
export interface ListBackendEnvironmentsRequest {
  __type?: "ListBackendEnvironmentsRequest";
  /**
   * <p> The maximum number of records to list in a single response. </p>
   */
  maxResults?: number;

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
}

export namespace ListBackendEnvironmentsRequest {
  export const filterSensitiveLog = (obj: ListBackendEnvironmentsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListBackendEnvironmentsRequest => __isa(o, "ListBackendEnvironmentsRequest");
}

/**
 * <p> The result structure for the list backend environments result. </p>
 */
export interface ListBackendEnvironmentsResult {
  __type?: "ListBackendEnvironmentsResult";
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

export namespace ListBackendEnvironmentsResult {
  export const filterSensitiveLog = (obj: ListBackendEnvironmentsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListBackendEnvironmentsResult => __isa(o, "ListBackendEnvironmentsResult");
}

/**
 * <p> The request structure for the list branches request. </p>
 */
export interface ListBranchesRequest {
  __type?: "ListBranchesRequest";
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

export namespace ListBranchesRequest {
  export const filterSensitiveLog = (obj: ListBranchesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListBranchesRequest => __isa(o, "ListBranchesRequest");
}

/**
 * <p> The result structure for the list branches request. </p>
 */
export interface ListBranchesResult {
  __type?: "ListBranchesResult";
  /**
   * <p> A pagination token. If a non-null pagination token is returned in a result, pass its
   *             value in another request to retrieve more entries. </p>
   */
  nextToken?: string;

  /**
   * <p> A list of branches for an Amplify app. </p>
   */
  branches: Branch[] | undefined;
}

export namespace ListBranchesResult {
  export const filterSensitiveLog = (obj: ListBranchesResult): any => ({
    ...obj,
    ...(obj.branches && { branches: obj.branches.map((item) => Branch.filterSensitiveLog(item)) }),
  });
  export const isa = (o: any): o is ListBranchesResult => __isa(o, "ListBranchesResult");
}

/**
 * <p> The request structure for the list domain associations request. </p>
 */
export interface ListDomainAssociationsRequest {
  __type?: "ListDomainAssociationsRequest";
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

  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
}

export namespace ListDomainAssociationsRequest {
  export const filterSensitiveLog = (obj: ListDomainAssociationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDomainAssociationsRequest => __isa(o, "ListDomainAssociationsRequest");
}

/**
 * <p> The result structure for the list domain association request. </p>
 */
export interface ListDomainAssociationsResult {
  __type?: "ListDomainAssociationsResult";
  /**
   * <p> A pagination token. If non-null, a pagination token is returned in a result. Pass its
   *             value in another request to retrieve more entries. </p>
   */
  nextToken?: string;

  /**
   * <p> A list of domain associations. </p>
   */
  domainAssociations: DomainAssociation[] | undefined;
}

export namespace ListDomainAssociationsResult {
  export const filterSensitiveLog = (obj: ListDomainAssociationsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDomainAssociationsResult => __isa(o, "ListDomainAssociationsResult");
}

/**
 * <p> The request structure for the list jobs request. </p>
 */
export interface ListJobsRequest {
  __type?: "ListJobsRequest";
  /**
   * <p> The name for a branch. </p>
   */
  branchName: string | undefined;

  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The maximum number of records to list in a single response. </p>
   */
  maxResults?: number;

  /**
   * <p> A pagination token. Set to null to start listing steps from the start. If a non-null
   *             pagination token is returned in a result, pass its value in here to list more steps.
   *         </p>
   */
  nextToken?: string;
}

export namespace ListJobsRequest {
  export const filterSensitiveLog = (obj: ListJobsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListJobsRequest => __isa(o, "ListJobsRequest");
}

/**
 * <p> The maximum number of records to list in a single response. </p>
 */
export interface ListJobsResult {
  __type?: "ListJobsResult";
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

export namespace ListJobsResult {
  export const filterSensitiveLog = (obj: ListJobsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListJobsResult => __isa(o, "ListJobsResult");
}

/**
 * <p> The request structure to use to list tags for a resource. </p>
 */
export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p> The Amazon Resource Name (ARN) to use to list tags. </p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceRequest => __isa(o, "ListTagsForResourceRequest");
}

/**
 * <p> The response for the list tags for resource request. </p>
 */
export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p> A list of tags for the specified The Amazon Resource Name (ARN). </p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceResponse => __isa(o, "ListTagsForResourceResponse");
}

/**
 * <p> The request structure for the list webhooks request. </p>
 */
export interface ListWebhooksRequest {
  __type?: "ListWebhooksRequest";
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The maximum number of records to list in a single response. </p>
   */
  maxResults?: number;

  /**
   * <p> A pagination token. Set to null to start listing webhooks from the start. If
   *             non-null,the pagination token is returned in a result. Pass its value in here to list
   *             more webhooks. </p>
   */
  nextToken?: string;
}

export namespace ListWebhooksRequest {
  export const filterSensitiveLog = (obj: ListWebhooksRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListWebhooksRequest => __isa(o, "ListWebhooksRequest");
}

/**
 * <p> The result structure for the list webhooks request. </p>
 */
export interface ListWebhooksResult {
  __type?: "ListWebhooksResult";
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

export namespace ListWebhooksResult {
  export const filterSensitiveLog = (obj: ListWebhooksResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListWebhooksResult => __isa(o, "ListWebhooksResult");
}

/**
 * <p> An entity was not found during an operation. </p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  message?: string;
}

export namespace NotFoundException {
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NotFoundException => __isa(o, "NotFoundException");
}

export enum Platform {
  WEB = "WEB",
}

/**
 * <p> Describes the information about a production branch for an Amplify app. </p>
 */
export interface ProductionBranch {
  __type?: "ProductionBranch";
  /**
   * <p> The thumbnail URL for the production branch. </p>
   */
  thumbnailUrl?: string;

  /**
   * <p> The status of the production branch. </p>
   */
  status?: string;

  /**
   * <p> The last deploy time of the production branch. </p>
   */
  lastDeployTime?: Date;

  /**
   * <p> The branch name for the production branch. </p>
   */
  branchName?: string;
}

export namespace ProductionBranch {
  export const filterSensitiveLog = (obj: ProductionBranch): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ProductionBranch => __isa(o, "ProductionBranch");
}

/**
 * <p> An operation failed due to a non-existent resource. </p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message: string | undefined;
  code: string | undefined;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceNotFoundException => __isa(o, "ResourceNotFoundException");
}

export enum Stage {
  BETA = "BETA",
  DEVELOPMENT = "DEVELOPMENT",
  EXPERIMENTAL = "EXPERIMENTAL",
  PRODUCTION = "PRODUCTION",
  PULL_REQUEST = "PULL_REQUEST",
}

/**
 * <p> The request structure for the start a deployment request. </p>
 */
export interface StartDeploymentRequest {
  __type?: "StartDeploymentRequest";
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

  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The name for the branch, for the job. </p>
   */
  branchName: string | undefined;
}

export namespace StartDeploymentRequest {
  export const filterSensitiveLog = (obj: StartDeploymentRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartDeploymentRequest => __isa(o, "StartDeploymentRequest");
}

/**
 * <p> The result structure for the start a deployment request. </p>
 */
export interface StartDeploymentResult {
  __type?: "StartDeploymentResult";
  /**
   * <p> The summary for the job. </p>
   */
  jobSummary: JobSummary | undefined;
}

export namespace StartDeploymentResult {
  export const filterSensitiveLog = (obj: StartDeploymentResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartDeploymentResult => __isa(o, "StartDeploymentResult");
}

/**
 * <p> The request structure for the start job request. </p>
 */
export interface StartJobRequest {
  __type?: "StartJobRequest";
  /**
   * <p> The unique ID for an existing job. This is required if the value of
   *                 <code>jobType</code> is <code>RETRY</code>. </p>
   */
  jobId?: string;

  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> A descriptive reason for starting this job. </p>
   */
  jobReason?: string;

  /**
   * <p> The commit message from a third-party repository provider for the job. </p>
   */
  commitMessage?: string;

  /**
   * <p> The commit date and time for the job. </p>
   */
  commitTime?: Date;

  /**
   * <p> The branch name for the job. </p>
   */
  branchName: string | undefined;

  /**
   * <p> Describes the type for the job. The job type <code>RELEASE</code> starts a new job
   *             with the latest change from the specified branch. This value is available only for apps
   *             that are connected to a repository. The job type <code>RETRY</code> retries an existing
   *             job. If the job type value is <code>RETRY</code>, the <code>jobId</code> is also
   *             required. </p>
   */
  jobType: JobType | string | undefined;

  /**
   * <p> The commit ID from a third-party repository provider for the job. </p>
   */
  commitId?: string;
}

export namespace StartJobRequest {
  export const filterSensitiveLog = (obj: StartJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartJobRequest => __isa(o, "StartJobRequest");
}

/**
 * <p> The result structure for the run job request. </p>
 */
export interface StartJobResult {
  __type?: "StartJobResult";
  /**
   * <p> The summary for the job. </p>
   */
  jobSummary: JobSummary | undefined;
}

export namespace StartJobResult {
  export const filterSensitiveLog = (obj: StartJobResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartJobResult => __isa(o, "StartJobResult");
}

/**
 * <p> Describes an execution step, for an execution job, for an Amplify app. </p>
 */
export interface Step {
  __type?: "Step";
  /**
   * <p> The context for the current step. Includes a build image if the step is build.
   *         </p>
   */
  context?: string;

  /**
   * <p> The start date and time of the execution step. </p>
   */
  startTime: Date | undefined;

  /**
   * <p> The name of the execution step. </p>
   */
  stepName: string | undefined;

  /**
   * <p> The end date and time of the execution step. </p>
   */
  endTime: Date | undefined;

  /**
   * <p> The URL to the artifact for the execution step. </p>
   */
  artifactsUrl?: string;

  /**
   * <p> The reason for the current step status. </p>
   */
  statusReason?: string;

  /**
   * <p> The status of the execution step. </p>
   */
  status: JobStatus | string | undefined;

  /**
   * <p> The URL to the logs for the execution step. </p>
   */
  logUrl?: string;

  /**
   * <p> The URL to the test configuration for the execution step. </p>
   */
  testConfigUrl?: string;

  /**
   * <p> The list of screenshot URLs for the execution step, if relevant. </p>
   */
  screenshots?: { [key: string]: string };

  /**
   * <p> The URL to the test artifact for the execution step. </p>
   */
  testArtifactsUrl?: string;
}

export namespace Step {
  export const filterSensitiveLog = (obj: Step): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Step => __isa(o, "Step");
}

/**
 * <p> The request structure for the stop job request. </p>
 */
export interface StopJobRequest {
  __type?: "StopJobRequest";
  /**
   * <p> The name for the branch, for the job. </p>
   */
  branchName: string | undefined;

  /**
   * <p> The unique id for the job. </p>
   */
  jobId: string | undefined;

  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
}

export namespace StopJobRequest {
  export const filterSensitiveLog = (obj: StopJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopJobRequest => __isa(o, "StopJobRequest");
}

/**
 * <p> The result structure for the stop job request. </p>
 */
export interface StopJobResult {
  __type?: "StopJobResult";
  /**
   * <p> The summary for the job. </p>
   */
  jobSummary: JobSummary | undefined;
}

export namespace StopJobResult {
  export const filterSensitiveLog = (obj: StopJobResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopJobResult => __isa(o, "StopJobResult");
}

/**
 * <p> The subdomain for the domain association. </p>
 */
export interface SubDomain {
  __type?: "SubDomain";
  /**
   * <p> The DNS record for the subdomain. </p>
   */
  dnsRecord: string | undefined;

  /**
   * <p> The verified status of the subdomain </p>
   */
  verified: boolean | undefined;

  /**
   * <p> Describes the settings for the subdomain. </p>
   */
  subDomainSetting: SubDomainSetting | undefined;
}

export namespace SubDomain {
  export const filterSensitiveLog = (obj: SubDomain): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SubDomain => __isa(o, "SubDomain");
}

/**
 * <p> Describes the settings for the subdomain. </p>
 */
export interface SubDomainSetting {
  __type?: "SubDomainSetting";
  /**
   * <p> The prefix setting for the subdomain. </p>
   */
  prefix: string | undefined;

  /**
   * <p> The branch name setting for the subdomain. </p>
   */
  branchName: string | undefined;
}

export namespace SubDomainSetting {
  export const filterSensitiveLog = (obj: SubDomainSetting): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SubDomainSetting => __isa(o, "SubDomainSetting");
}

/**
 * <p> The request structure to tag a resource with a tag key and value. </p>
 */
export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p> The Amazon Resource Name (ARN) to use to tag a resource. </p>
   */
  resourceArn: string | undefined;

  /**
   * <p> The tags used to tag the resource. </p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceRequest => __isa(o, "TagResourceRequest");
}

/**
 * <p> The response for the tag resource request. </p>
 */
export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceResponse => __isa(o, "TagResourceResponse");
}

/**
 * <p> An operation failed due to a lack of access. </p>
 */
export interface UnauthorizedException extends __SmithyException, $MetadataBearer {
  name: "UnauthorizedException";
  $fault: "client";
  message?: string;
}

export namespace UnauthorizedException {
  export const filterSensitiveLog = (obj: UnauthorizedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UnauthorizedException => __isa(o, "UnauthorizedException");
}

/**
 * <p> The request structure for the untag resource request. </p>
 */
export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p> The tag keys to use to untag a resource. </p>
   */
  tagKeys: string[] | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) to use to untag a resource. </p>
   */
  resourceArn: string | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceRequest => __isa(o, "UntagResourceRequest");
}

/**
 * <p> The response for the untag resource request. </p>
 */
export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceResponse => __isa(o, "UntagResourceResponse");
}

/**
 * <p> The request structure for the update app request. </p>
 */
export interface UpdateAppRequest {
  __type?: "UpdateAppRequest";
  /**
   * <p> Enables branch auto-building for an Amplify app. </p>
   */
  enableBranchAutoBuild?: boolean;

  /**
   * <p> The name of the repository for an Amplify app </p>
   */
  repository?: string;

  /**
   * <p> The basic authorization credentials for an Amplify app. </p>
   */
  basicAuthCredentials?: string;

  /**
   * <p> The personal access token for a third-party source control system for an Amplify app.
   *             The token is used to create webhook and a read-only deploy key. The token is not stored.
   *         </p>
   */
  accessToken?: string;

  /**
   * <p> Enables automated branch creation for the Amplify app. </p>
   */
  enableAutoBranchCreation?: boolean;

  /**
   * <p> The description for an Amplify app. </p>
   */
  description?: string;

  /**
   * <p> Enables basic authorization for an Amplify app. </p>
   */
  enableBasicAuth?: boolean;

  /**
   * <p> The OAuth token for a third-party source control system for an Amplify app. The token
   *             is used to create a webhook and a read-only deploy key. The OAuth token is not stored.
   *         </p>
   */
  oauthToken?: string;

  /**
   * <p> The platform for an Amplify app. </p>
   */
  platform?: Platform | string;

  /**
   * <p> The AWS Identity and Access Management (IAM) service role for an Amplify app. </p>
   */
  iamServiceRoleArn?: string;

  /**
   * <p> The environment variables for an Amplify app. </p>
   */
  environmentVariables?: { [key: string]: string };

  /**
   * <p> Describes the automated branch creation glob patterns for the Amplify app. </p>
   */
  autoBranchCreationPatterns?: string[];

  /**
   * <p> The custom redirect and rewrite rules for an Amplify app. </p>
   */
  customRules?: CustomRule[];

  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The automated branch creation configuration for the Amplify app. </p>
   */
  autoBranchCreationConfig?: AutoBranchCreationConfig;

  /**
   * <p> The build specification (build spec) for an Amplify app. </p>
   */
  buildSpec?: string;

  /**
   * <p> The name for an Amplify app. </p>
   */
  name?: string;

  /**
   * <p> Automatically disconnects a branch in the Amplify Console when you delete a branch
   *             from your Git repository. </p>
   */
  enableBranchAutoDeletion?: boolean;
}

export namespace UpdateAppRequest {
  export const filterSensitiveLog = (obj: UpdateAppRequest): any => ({
    ...obj,
    ...(obj.basicAuthCredentials && { basicAuthCredentials: SENSITIVE_STRING }),
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
    ...(obj.oauthToken && { oauthToken: SENSITIVE_STRING }),
    ...(obj.autoBranchCreationConfig && {
      autoBranchCreationConfig: AutoBranchCreationConfig.filterSensitiveLog(obj.autoBranchCreationConfig),
    }),
  });
  export const isa = (o: any): o is UpdateAppRequest => __isa(o, "UpdateAppRequest");
}

/**
 * <p> The result structure for an Amplify app update request. </p>
 */
export interface UpdateAppResult {
  __type?: "UpdateAppResult";
  /**
   * <p> Represents the updated Amplify app. </p>
   */
  app: App | undefined;
}

export namespace UpdateAppResult {
  export const filterSensitiveLog = (obj: UpdateAppResult): any => ({
    ...obj,
    ...(obj.app && { app: App.filterSensitiveLog(obj.app) }),
  });
  export const isa = (o: any): o is UpdateAppResult => __isa(o, "UpdateAppResult");
}

/**
 * <p> The request structure for the update branch request. </p>
 */
export interface UpdateBranchRequest {
  __type?: "UpdateBranchRequest";
  /**
   * <p> Enables notifications for the branch. </p>
   */
  enableNotification?: boolean;

  /**
   * <p> Enables pull request preview for this branch. </p>
   */
  enablePullRequestPreview?: boolean;

  /**
   * <p> Describes the current stage for the branch. </p>
   */
  stage?: Stage | string;

  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> The display name for a branch. This is used as the default domain prefix. </p>
   */
  displayName?: string;

  /**
   * <p> The name for the branch. </p>
   */
  branchName: string | undefined;

  /**
   * <p> The Amplify environment name for the pull request. </p>
   */
  pullRequestEnvironmentName?: string;

  /**
   * <p> The content Time to Live (TTL) for the website in seconds. </p>
   */
  ttl?: string;

  /**
   * <p> The basic authorization credentials for the branch. </p>
   */
  basicAuthCredentials?: string;

  /**
   * <p> The build specification (build spec) for the branch. </p>
   */
  buildSpec?: string;

  /**
   * <p> The environment variables for the branch. </p>
   */
  environmentVariables?: { [key: string]: string };

  /**
   * <p> The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify
   *             app. </p>
   */
  backendEnvironmentArn?: string;

  /**
   * <p> Enables auto building for the branch. </p>
   */
  enableAutoBuild?: boolean;

  /**
   * <p> The framework for the branch. </p>
   */
  framework?: string;

  /**
   * <p> Enables basic authorization for the branch. </p>
   */
  enableBasicAuth?: boolean;

  /**
   * <p> The description for the branch. </p>
   */
  description?: string;
}

export namespace UpdateBranchRequest {
  export const filterSensitiveLog = (obj: UpdateBranchRequest): any => ({
    ...obj,
    ...(obj.basicAuthCredentials && { basicAuthCredentials: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is UpdateBranchRequest => __isa(o, "UpdateBranchRequest");
}

/**
 * <p> The result structure for the update branch request. </p>
 */
export interface UpdateBranchResult {
  __type?: "UpdateBranchResult";
  /**
   * <p> The branch for an Amplify app, which maps to a third-party repository branch. </p>
   */
  branch: Branch | undefined;
}

export namespace UpdateBranchResult {
  export const filterSensitiveLog = (obj: UpdateBranchResult): any => ({
    ...obj,
    ...(obj.branch && { branch: Branch.filterSensitiveLog(obj.branch) }),
  });
  export const isa = (o: any): o is UpdateBranchResult => __isa(o, "UpdateBranchResult");
}

/**
 * <p> The request structure for the update domain association request. </p>
 */
export interface UpdateDomainAssociationRequest {
  __type?: "UpdateDomainAssociationRequest";
  /**
   * <p> Enables the automated creation of subdomains for branches. </p>
   */
  enableAutoSubDomain?: boolean;

  /**
   * <p> Sets the branch patterns for automatic subdomain creation. </p>
   */
  autoSubDomainCreationPatterns?: string[];

  /**
   * <p> The required AWS Identity and Access Management (IAM) service role for the Amazon
   *             Resource Name (ARN) for automatically creating subdomains. </p>
   */
  autoSubDomainIAMRole?: string;

  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;

  /**
   * <p> Describes the settings for the subdomain. </p>
   */
  subDomainSettings: SubDomainSetting[] | undefined;

  /**
   * <p> The name of the domain. </p>
   */
  domainName: string | undefined;
}

export namespace UpdateDomainAssociationRequest {
  export const filterSensitiveLog = (obj: UpdateDomainAssociationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDomainAssociationRequest => __isa(o, "UpdateDomainAssociationRequest");
}

/**
 * <p> The result structure for the update domain association request. </p>
 */
export interface UpdateDomainAssociationResult {
  __type?: "UpdateDomainAssociationResult";
  /**
   * <p> Describes a domain association, which associates a custom domain with an Amplify app.
   *         </p>
   */
  domainAssociation: DomainAssociation | undefined;
}

export namespace UpdateDomainAssociationResult {
  export const filterSensitiveLog = (obj: UpdateDomainAssociationResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDomainAssociationResult => __isa(o, "UpdateDomainAssociationResult");
}

/**
 * <p> The request structure for the update webhook request. </p>
 */
export interface UpdateWebhookRequest {
  __type?: "UpdateWebhookRequest";
  /**
   * <p> The name for a branch that is part of an Amplify app. </p>
   */
  branchName?: string;

  /**
   * <p> The description for a webhook. </p>
   */
  description?: string;

  /**
   * <p> The unique ID for a webhook. </p>
   */
  webhookId: string | undefined;
}

export namespace UpdateWebhookRequest {
  export const filterSensitiveLog = (obj: UpdateWebhookRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateWebhookRequest => __isa(o, "UpdateWebhookRequest");
}

/**
 * <p> The result structure for the update webhook request. </p>
 */
export interface UpdateWebhookResult {
  __type?: "UpdateWebhookResult";
  /**
   * <p> Describes a webhook that connects repository events to an Amplify app. </p>
   */
  webhook: Webhook | undefined;
}

export namespace UpdateWebhookResult {
  export const filterSensitiveLog = (obj: UpdateWebhookResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateWebhookResult => __isa(o, "UpdateWebhookResult");
}

/**
 * <p> Describes a webhook that connects repository events to an Amplify app. </p>
 */
export interface Webhook {
  __type?: "Webhook";
  /**
   * <p> The description for a webhook. </p>
   */
  description: string | undefined;

  /**
   * <p> The ID of the webhook. </p>
   */
  webhookId: string | undefined;

  /**
   * <p> The create date and time for a webhook. </p>
   */
  createTime: Date | undefined;

  /**
   * <p> Updates the date and time for a webhook. </p>
   */
  updateTime: Date | undefined;

  /**
   * <p> The name for a branch that is part of an Amplify app. </p>
   */
  branchName: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) for the webhook. </p>
   */
  webhookArn: string | undefined;

  /**
   * <p> The URL of the webhook. </p>
   */
  webhookUrl: string | undefined;
}

export namespace Webhook {
  export const filterSensitiveLog = (obj: Webhook): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Webhook => __isa(o, "Webhook");
}
