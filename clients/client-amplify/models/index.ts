import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>
 *             Amplify App represents different branches of a repository for building, deploying, and hosting.
 *         </p>
 */
export interface App {
  __type?: "App";
  /**
   * <p>
   *             ARN for the Amplify App.
   *         </p>
   */
  appArn: string | undefined;

  /**
   * <p>
   *             Unique Id for the Amplify App.
   *         </p>
   */
  appId: string | undefined;

  /**
   * <p>
   *             Automated branch creation config for the Amplify App.
   *         </p>
   */
  autoBranchCreationConfig?: AutoBranchCreationConfig;

  /**
   * <p>
   *             Automated branch creation glob patterns for the Amplify App.
   *         </p>
   */
  autoBranchCreationPatterns?: Array<string>;

  /**
   * <p>
   *             Basic Authorization credentials for branches for the Amplify App.
   *         </p>
   */
  basicAuthCredentials?: string;

  /**
   * <p>
   *             BuildSpec content for Amplify App.
   *         </p>
   */
  buildSpec?: string;

  /**
   * <p>
   *             Create date / time for the Amplify App.
   *         </p>
   */
  createTime: Date | undefined;

  /**
   * <p>
   *             Custom redirect / rewrite rules for the Amplify App.
   *         </p>
   */
  customRules?: Array<CustomRule>;

  /**
   * <p>
   *             Default domain for the Amplify App.
   *         </p>
   */
  defaultDomain: string | undefined;

  /**
   * <p>
   *             Description for the Amplify App.
   *         </p>
   */
  description: string | undefined;

  /**
   * <p>
   *             Enables automated branch creation for the Amplify App.
   *         </p>
   */
  enableAutoBranchCreation?: boolean;

  /**
   * <p>
   *             Enables Basic Authorization for branches for the Amplify App.
   *         </p>
   */
  enableBasicAuth: boolean | undefined;

  /**
   * <p>
   *             Enables auto-building of branches for the Amplify App.
   *         </p>
   */
  enableBranchAutoBuild: boolean | undefined;

  /**
   * <p>
   *             Environment Variables for the Amplify App.
   *         </p>
   */
  environmentVariables: { [key: string]: string } | undefined;

  /**
   * <p>
   *             IAM service role ARN for the Amplify App.
   *         </p>
   */
  iamServiceRoleArn?: string;

  /**
   * <p>
   *             Name for the Amplify App.
   *         </p>
   */
  name: string | undefined;

  /**
   * <p>
   *             Platform for the Amplify App.
   *         </p>
   */
  platform: Platform | string | undefined;

  /**
   * <p>
   *             Structure with Production Branch information.
   *         </p>
   */
  productionBranch?: ProductionBranch;

  /**
   * <p>
   *             Repository for the Amplify App.
   *         </p>
   */
  repository: string | undefined;

  /**
   * <p>
   *             Tag for Amplify App.
   *         </p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>
   *             Update date / time for the Amplify App.
   *         </p>
   */
  updateTime: Date | undefined;
}

export namespace App {
  export function isa(o: any): o is App {
    return __isa(o, "App");
  }
}

/**
 * <p>
 *             Structure for artifact.
 *         </p>
 */
export interface Artifact {
  __type?: "Artifact";
  /**
   * <p>
   *             File name for the artifact.
   *         </p>
   */
  artifactFileName: string | undefined;

  /**
   * <p>
   *             Unique Id for a artifact.
   *         </p>
   */
  artifactId: string | undefined;
}

export namespace Artifact {
  export function isa(o: any): o is Artifact {
    return __isa(o, "Artifact");
  }
}

/**
 * <p>
 *             Structure with auto branch creation config.
 *         </p>
 */
export interface AutoBranchCreationConfig {
  __type?: "AutoBranchCreationConfig";
  /**
   * <p>
   *             Basic Authorization credentials for the auto created branch.
   *         </p>
   */
  basicAuthCredentials?: string;

  /**
   * <p>
   *             BuildSpec for the auto created branch.
   *         </p>
   */
  buildSpec?: string;

  /**
   * <p>
   *             Enables auto building for the auto created branch.
   *         </p>
   */
  enableAutoBuild?: boolean;

  /**
   * <p>
   *             Enables Basic Auth for the auto created branch.
   *         </p>
   */
  enableBasicAuth?: boolean;

  /**
   * <p>
   *             Enables Pull Request Preview for auto created branch.
   *         </p>
   */
  enablePullRequestPreview?: boolean;

  /**
   * <p>
   *             Environment Variables for the auto created branch.
   *         </p>
   */
  environmentVariables?: { [key: string]: string };

  /**
   * <p>
   *             Framework for the auto created branch.
   *         </p>
   */
  framework?: string;

  /**
   * <p>
   *             The Amplify Environment name for the pull request.
   *         </p>
   */
  pullRequestEnvironmentName?: string;

  /**
   * <p>
   *             Stage for the auto created branch.
   *         </p>
   */
  stage?: Stage | string;
}

export namespace AutoBranchCreationConfig {
  export function isa(o: any): o is AutoBranchCreationConfig {
    return __isa(o, "AutoBranchCreationConfig");
  }
}

/**
 * <p>
 *             Backend environment for an Amplify App.
 *         </p>
 */
export interface BackendEnvironment {
  __type?: "BackendEnvironment";
  /**
   * <p>
   *             Arn for a backend environment, part of an Amplify App.
   *         </p>
   */
  backendEnvironmentArn: string | undefined;

  /**
   * <p>
   *             Creation date and time for a backend environment, part of an Amplify App.
   *         </p>
   */
  createTime: Date | undefined;

  /**
   * <p>
   *             Name of deployment artifacts.
   *         </p>
   */
  deploymentArtifacts?: string;

  /**
   * <p>
   *             Name for a backend environment, part of an Amplify App.
   *         </p>
   */
  environmentName: string | undefined;

  /**
   * <p>
   *             CloudFormation stack name of backend environment.
   *         </p>
   */
  stackName?: string;

  /**
   * <p>
   *             Last updated date and time for a backend environment, part of an Amplify App.
   *         </p>
   */
  updateTime: Date | undefined;
}

export namespace BackendEnvironment {
  export function isa(o: any): o is BackendEnvironment {
    return __isa(o, "BackendEnvironment");
  }
}

/**
 * <p>
 *             Exception thrown when a request contains unexpected data.
 *         </p>
 */
export interface BadRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  message?: string;
}

export namespace BadRequestException {
  export function isa(o: any): o is BadRequestException {
    return __isa(o, "BadRequestException");
  }
}

/**
 * <p>
 *             Branch for an Amplify App, which maps to a 3rd party repository branch.
 *         </p>
 */
export interface Branch {
  __type?: "Branch";
  /**
   * <p>
   *             Id of the active job for a branch, part of an Amplify App.
   *         </p>
   */
  activeJobId: string | undefined;

  /**
   * <p>
   *             List of custom resources that are linked to this branch.
   *         </p>
   */
  associatedResources?: Array<string>;

  /**
   * <p>
   *             ARN for a Backend Environment, part of an Amplify App.
   *         </p>
   */
  backendEnvironmentArn?: string;

  /**
   * <p>
   *             Basic Authorization credentials for a branch, part of an Amplify App.
   *         </p>
   */
  basicAuthCredentials?: string;

  /**
   * <p>
   *             ARN for a branch, part of an Amplify App.
   *         </p>
   */
  branchArn: string | undefined;

  /**
   * <p>
   *             Name for a branch, part of an Amplify App.
   *         </p>
   */
  branchName: string | undefined;

  /**
   * <p>
   *             BuildSpec content for branch for Amplify App.
   *         </p>
   */
  buildSpec?: string;

  /**
   * <p>
   *             Creation date and time for a branch, part of an Amplify App.
   *         </p>
   */
  createTime: Date | undefined;

  /**
   * <p>
   *             Custom domains for a branch, part of an Amplify App.
   *         </p>
   */
  customDomains: Array<string> | undefined;

  /**
   * <p>
   *             Description for a branch, part of an Amplify App.
   *         </p>
   */
  description: string | undefined;

  /**
   * <p>
   *             The destination branch if the branch is a pull request branch.
   *         </p>
   */
  destinationBranch?: string;

  /**
   * <p>
   *             Display name for a branch, will use as the default domain prefix.
   *         </p>
   */
  displayName: string | undefined;

  /**
   * <p>
   *             Enables auto-building on push for a branch, part of an Amplify App.
   *         </p>
   */
  enableAutoBuild: boolean | undefined;

  /**
   * <p>
   *             Enables Basic Authorization for a branch, part of an Amplify App.
   *         </p>
   */
  enableBasicAuth: boolean | undefined;

  /**
   * <p>
   *             Enables notifications for a branch, part of an Amplify App.
   *         </p>
   */
  enableNotification: boolean | undefined;

  /**
   * <p>
   *             Enables Pull Request Preview for this branch.
   *         </p>
   */
  enablePullRequestPreview: boolean | undefined;

  /**
   * <p>
   *             Environment Variables specific to a branch, part of an Amplify App.
   *         </p>
   */
  environmentVariables: { [key: string]: string } | undefined;

  /**
   * <p>
   *             Framework for a branch, part of an Amplify App.
   *         </p>
   */
  framework: string | undefined;

  /**
   * <p>
   *             The Amplify Environment name for the pull request.
   *         </p>
   */
  pullRequestEnvironmentName?: string;

  /**
   * <p>
   *             The source branch if the branch is a pull request branch.
   *         </p>
   */
  sourceBranch?: string;

  /**
   * <p>
   *             Stage for a branch, part of an Amplify App.
   *         </p>
   */
  stage: Stage | string | undefined;

  /**
   * <p>
   *             Tag for branch for Amplify App.
   *         </p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>
   *             Thumbnail URL for the branch.
   *         </p>
   */
  thumbnailUrl?: string;

  /**
   * <p>
   *             Total number of Jobs part of an Amplify App.
   *         </p>
   */
  totalNumberOfJobs: string | undefined;

  /**
   * <p>
   *             The content TTL for the website in seconds.
   *         </p>
   */
  ttl: string | undefined;

  /**
   * <p>
   *             Last updated date and time for a branch, part of an Amplify App.
   *         </p>
   */
  updateTime: Date | undefined;
}

export namespace Branch {
  export function isa(o: any): o is Branch {
    return __isa(o, "Branch");
  }
}

/**
 * <p>
 *             Request structure used to create Apps in Amplify.
 *         </p>
 */
export interface CreateAppRequest {
  __type?: "CreateAppRequest";
  /**
   * <p>
   *             Personal Access token for 3rd party source control system for an Amplify App, used to create webhook and read-only
   *             deploy key. Token is not stored.
   *         </p>
   */
  accessToken?: string;

  /**
   * <p>
   *             Automated branch creation config for the Amplify App.
   *         </p>
   */
  autoBranchCreationConfig?: AutoBranchCreationConfig;

  /**
   * <p>
   *             Automated branch creation glob patterns for the Amplify App.
   *         </p>
   */
  autoBranchCreationPatterns?: Array<string>;

  /**
   * <p>
   *             Credentials for Basic Authorization for an Amplify App.
   *         </p>
   */
  basicAuthCredentials?: string;

  /**
   * <p>
   *             BuildSpec for an Amplify App
   *         </p>
   */
  buildSpec?: string;

  /**
   * <p>
   *             Custom rewrite / redirect rules for an Amplify App.
   *         </p>
   */
  customRules?: Array<CustomRule>;

  /**
   * <p>
   *             Description for an Amplify App
   *         </p>
   */
  description?: string;

  /**
   * <p>
   *             Enables automated branch creation for the Amplify App.
   *         </p>
   */
  enableAutoBranchCreation?: boolean;

  /**
   * <p>
   *             Enable Basic Authorization for an Amplify App, this will apply to all branches part of this App.
   *         </p>
   */
  enableBasicAuth?: boolean;

  /**
   * <p>
   *             Enable the auto building of branches for an Amplify App.
   *         </p>
   */
  enableBranchAutoBuild?: boolean;

  /**
   * <p>
   *             Environment variables map for an Amplify App.
   *         </p>
   */
  environmentVariables?: { [key: string]: string };

  /**
   * <p>
   *             AWS IAM service role for an Amplify App
   *         </p>
   */
  iamServiceRoleArn?: string;

  /**
   * <p>
   *             Name for the Amplify App
   *         </p>
   */
  name: string | undefined;

  /**
   * <p>
   *             OAuth token for 3rd party source control system for an Amplify App, used to create webhook and read-only
   *             deploy key. OAuth token is not stored.
   *         </p>
   */
  oauthToken?: string;

  /**
   * <p>
   *             Platform / framework for an Amplify App
   *         </p>
   */
  platform?: Platform | string;

  /**
   * <p>
   *             Repository for an Amplify App
   *         </p>
   */
  repository?: string;

  /**
   * <p>
   *             Tag for an Amplify App
   *         </p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateAppRequest {
  export function isa(o: any): o is CreateAppRequest {
    return __isa(o, "CreateAppRequest");
  }
}

export interface CreateAppResult {
  __type?: "CreateAppResult";
  /**
   * <p>
   *             Amplify App represents different branches of a repository for building, deploying, and hosting.
   *         </p>
   */
  app: App | undefined;
}

export namespace CreateAppResult {
  export function isa(o: any): o is CreateAppResult {
    return __isa(o, "CreateAppResult");
  }
}

/**
 * <p>
 *             Request structure for a backend environment create request.
 *         </p>
 */
export interface CreateBackendEnvironmentRequest {
  __type?: "CreateBackendEnvironmentRequest";
  /**
   * <p>
   *             Unique Id for an Amplify App.
   *         </p>
   */
  appId: string | undefined;

  /**
   * <p>
   *             Name of deployment artifacts.
   *         </p>
   */
  deploymentArtifacts?: string;

  /**
   * <p>
   *             Name for the backend environment.
   *         </p>
   */
  environmentName: string | undefined;

  /**
   * <p>
   *             CloudFormation stack name of backend environment.
   *         </p>
   */
  stackName?: string;
}

export namespace CreateBackendEnvironmentRequest {
  export function isa(o: any): o is CreateBackendEnvironmentRequest {
    return __isa(o, "CreateBackendEnvironmentRequest");
  }
}

/**
 * <p>
 *             Result structure for create backend environment.
 *         </p>
 */
export interface CreateBackendEnvironmentResult {
  __type?: "CreateBackendEnvironmentResult";
  /**
   * <p>
   *             Backend environment structure for an amplify App.
   *         </p>
   */
  backendEnvironment: BackendEnvironment | undefined;
}

export namespace CreateBackendEnvironmentResult {
  export function isa(o: any): o is CreateBackendEnvironmentResult {
    return __isa(o, "CreateBackendEnvironmentResult");
  }
}

/**
 * <p>
 *             Request structure for a branch create request.
 *         </p>
 */
export interface CreateBranchRequest {
  __type?: "CreateBranchRequest";
  /**
   * <p>
   *             Unique Id for an Amplify App.
   *         </p>
   */
  appId: string | undefined;

  /**
   * <p>
   *             ARN for a Backend Environment, part of an Amplify App.
   *         </p>
   */
  backendEnvironmentArn?: string;

  /**
   * <p>
   *             Basic Authorization credentials for the branch.
   *         </p>
   */
  basicAuthCredentials?: string;

  /**
   * <p>
   *             Name for the branch.
   *         </p>
   */
  branchName: string | undefined;

  /**
   * <p>
   *             BuildSpec for the branch.
   *         </p>
   */
  buildSpec?: string;

  /**
   * <p>
   *             Description for the branch.
   *         </p>
   */
  description?: string;

  /**
   * <p>
   *             Display name for a branch, will use as the default domain prefix.
   *         </p>
   */
  displayName?: string;

  /**
   * <p>
   *             Enables auto building for the branch.
   *         </p>
   */
  enableAutoBuild?: boolean;

  /**
   * <p>
   *             Enables Basic Auth for the branch.
   *         </p>
   */
  enableBasicAuth?: boolean;

  /**
   * <p>
   *             Enables notifications for the branch.
   *         </p>
   */
  enableNotification?: boolean;

  /**
   * <p>
   *             Enables Pull Request Preview for this branch.
   *         </p>
   */
  enablePullRequestPreview?: boolean;

  /**
   * <p>
   *             Environment Variables for the branch.
   *         </p>
   */
  environmentVariables?: { [key: string]: string };

  /**
   * <p>
   *             Framework for the branch.
   *         </p>
   */
  framework?: string;

  /**
   * <p>
   *             The Amplify Environment name for the pull request.
   *         </p>
   */
  pullRequestEnvironmentName?: string;

  /**
   * <p>
   *             Stage for the branch.
   *         </p>
   */
  stage?: Stage | string;

  /**
   * <p>
   *             Tag for the branch.
   *         </p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>
   *             The content TTL for the website in seconds.
   *         </p>
   */
  ttl?: string;
}

export namespace CreateBranchRequest {
  export function isa(o: any): o is CreateBranchRequest {
    return __isa(o, "CreateBranchRequest");
  }
}

/**
 * <p>
 *             Result structure for create branch request.
 *         </p>
 */
export interface CreateBranchResult {
  __type?: "CreateBranchResult";
  /**
   * <p>
   *             Branch structure for an Amplify App.
   *         </p>
   */
  branch: Branch | undefined;
}

export namespace CreateBranchResult {
  export function isa(o: any): o is CreateBranchResult {
    return __isa(o, "CreateBranchResult");
  }
}

/**
 * <p>
 *             Request structure for create a new deployment.
 *         </p>
 */
export interface CreateDeploymentRequest {
  __type?: "CreateDeploymentRequest";
  /**
   * <p>
   *             Unique Id for an Amplify App.
   *         </p>
   */
  appId: string | undefined;

  /**
   * <p>
   *             Name for the branch, for the Job.
   *         </p>
   */
  branchName: string | undefined;

  /**
   * <p>
   *             Optional file map that contains file name as the key and file content md5 hash as the value.
   *             If this argument is provided, the service will generate different upload url per file.
   *             Otherwise, the service will only generate a single upload url for the zipped files.
   *         </p>
   */
  fileMap?: { [key: string]: string };
}

export namespace CreateDeploymentRequest {
  export function isa(o: any): o is CreateDeploymentRequest {
    return __isa(o, "CreateDeploymentRequest");
  }
}

/**
 * <p>
 *             Result structure for create a new deployment.
 *         </p>
 */
export interface CreateDeploymentResult {
  __type?: "CreateDeploymentResult";
  /**
   * <p>
   *             When the fileMap argument is provided in the request,
   *             the fileUploadUrls will contain a map of file names to upload url.
   *         </p>
   */
  fileUploadUrls: { [key: string]: string } | undefined;

  /**
   * <p>
   *             The jobId for this deployment, will supply to start deployment api.
   *         </p>
   */
  jobId?: string;

  /**
   * <p>
   *             When the fileMap argument is NOT provided. This zipUploadUrl will be returned.
   *         </p>
   */
  zipUploadUrl: string | undefined;
}

export namespace CreateDeploymentResult {
  export function isa(o: any): o is CreateDeploymentResult {
    return __isa(o, "CreateDeploymentResult");
  }
}

/**
 * <p>
 *             Request structure for create Domain Association request.
 *         </p>
 */
export interface CreateDomainAssociationRequest {
  __type?: "CreateDomainAssociationRequest";
  /**
   * <p>
   *             Unique Id for an Amplify App.
   *         </p>
   */
  appId: string | undefined;

  /**
   * <p>
   *             Domain name for the Domain Association.
   *         </p>
   */
  domainName: string | undefined;

  /**
   * <p>
   *             Enables automated creation of Subdomains for branches. (Currently not supported)
   *         </p>
   */
  enableAutoSubDomain?: boolean;

  /**
   * <p>
   *             Setting structure for the Subdomain.
   *         </p>
   */
  subDomainSettings: Array<SubDomainSetting> | undefined;
}

export namespace CreateDomainAssociationRequest {
  export function isa(o: any): o is CreateDomainAssociationRequest {
    return __isa(o, "CreateDomainAssociationRequest");
  }
}

/**
 * <p>
 *             Result structure for the create Domain Association request.
 *         </p>
 */
export interface CreateDomainAssociationResult {
  __type?: "CreateDomainAssociationResult";
  /**
   * <p>
   *             Domain Association structure.
   *         </p>
   */
  domainAssociation: DomainAssociation | undefined;
}

export namespace CreateDomainAssociationResult {
  export function isa(o: any): o is CreateDomainAssociationResult {
    return __isa(o, "CreateDomainAssociationResult");
  }
}

/**
 * <p>
 *             Request structure for create webhook request.
 *         </p>
 */
export interface CreateWebhookRequest {
  __type?: "CreateWebhookRequest";
  /**
   * <p>
   *             Unique Id for an Amplify App.
   *         </p>
   */
  appId: string | undefined;

  /**
   * <p>
   *             Name for a branch, part of an Amplify App.
   *         </p>
   */
  branchName: string | undefined;

  /**
   * <p>
   *             Description for a webhook.
   *         </p>
   */
  description?: string;
}

export namespace CreateWebhookRequest {
  export function isa(o: any): o is CreateWebhookRequest {
    return __isa(o, "CreateWebhookRequest");
  }
}

/**
 * <p>
 *             Result structure for the create webhook request.
 *         </p>
 */
export interface CreateWebhookResult {
  __type?: "CreateWebhookResult";
  /**
   * <p>
   *             Webhook structure.
   *         </p>
   */
  webhook: Webhook | undefined;
}

export namespace CreateWebhookResult {
  export function isa(o: any): o is CreateWebhookResult {
    return __isa(o, "CreateWebhookResult");
  }
}

/**
 * <p>
 *             Custom rewrite / redirect rule.
 *         </p>
 */
export interface CustomRule {
  __type?: "CustomRule";
  /**
   * <p>
   *             The condition for a URL rewrite or redirect rule, e.g. country code.
   *         </p>
   */
  condition?: string;

  /**
   * <p>
   *             The source pattern for a URL rewrite or redirect rule.
   *         </p>
   */
  source: string | undefined;

  /**
   * <p>
   *             The status code for a URL rewrite or redirect rule.
   *         </p>
   */
  status?: string;

  /**
   * <p>
   *             The target pattern for a URL rewrite or redirect rule.
   *         </p>
   */
  target: string | undefined;
}

export namespace CustomRule {
  export function isa(o: any): o is CustomRule {
    return __isa(o, "CustomRule");
  }
}

/**
 * <p>
 *             Request structure for an Amplify App delete request.
 *         </p>
 */
export interface DeleteAppRequest {
  __type?: "DeleteAppRequest";
  /**
   * <p>
   *             Unique Id for an Amplify App.
   *         </p>
   */
  appId: string | undefined;
}

export namespace DeleteAppRequest {
  export function isa(o: any): o is DeleteAppRequest {
    return __isa(o, "DeleteAppRequest");
  }
}

/**
 * <p>
 *             Result structure for an Amplify App delete request.
 *         </p>
 */
export interface DeleteAppResult {
  __type?: "DeleteAppResult";
  /**
   * <p>
   *             Amplify App represents different branches of a repository for building, deploying, and hosting.
   *         </p>
   */
  app: App | undefined;
}

export namespace DeleteAppResult {
  export function isa(o: any): o is DeleteAppResult {
    return __isa(o, "DeleteAppResult");
  }
}

/**
 * <p>
 *             Request structure for delete backend environment request.
 *         </p>
 */
export interface DeleteBackendEnvironmentRequest {
  __type?: "DeleteBackendEnvironmentRequest";
  /**
   * <p>
   *             Unique Id of an Amplify App.
   *         </p>
   */
  appId: string | undefined;

  /**
   * <p>
   *             Name of a backend environment of an Amplify App.
   *         </p>
   */
  environmentName: string | undefined;
}

export namespace DeleteBackendEnvironmentRequest {
  export function isa(o: any): o is DeleteBackendEnvironmentRequest {
    return __isa(o, "DeleteBackendEnvironmentRequest");
  }
}

/**
 * <p>
 *             Result structure of a delete backend environment result.
 *         </p>
 */
export interface DeleteBackendEnvironmentResult {
  __type?: "DeleteBackendEnvironmentResult";
  /**
   * <p>
   *             Backend environment structure for an Amplify App.
   *         </p>
   */
  backendEnvironment: BackendEnvironment | undefined;
}

export namespace DeleteBackendEnvironmentResult {
  export function isa(o: any): o is DeleteBackendEnvironmentResult {
    return __isa(o, "DeleteBackendEnvironmentResult");
  }
}

/**
 * <p>
 *             Request structure for delete branch request.
 *         </p>
 */
export interface DeleteBranchRequest {
  __type?: "DeleteBranchRequest";
  /**
   * <p>
   *             Unique Id for an Amplify App.
   *         </p>
   */
  appId: string | undefined;

  /**
   * <p>
   *             Name for the branch.
   *         </p>
   */
  branchName: string | undefined;
}

export namespace DeleteBranchRequest {
  export function isa(o: any): o is DeleteBranchRequest {
    return __isa(o, "DeleteBranchRequest");
  }
}

/**
 * <p>
 *             Result structure for delete branch request.
 *         </p>
 */
export interface DeleteBranchResult {
  __type?: "DeleteBranchResult";
  /**
   * <p>
   *             Branch structure for an Amplify App.
   *         </p>
   */
  branch: Branch | undefined;
}

export namespace DeleteBranchResult {
  export function isa(o: any): o is DeleteBranchResult {
    return __isa(o, "DeleteBranchResult");
  }
}

/**
 * <p>
 *             Request structure for the delete Domain Association request.
 *         </p>
 */
export interface DeleteDomainAssociationRequest {
  __type?: "DeleteDomainAssociationRequest";
  /**
   * <p>
   *             Unique Id for an Amplify App.
   *         </p>
   */
  appId: string | undefined;

  /**
   * <p>
   *             Name of the domain.
   *         </p>
   */
  domainName: string | undefined;
}

export namespace DeleteDomainAssociationRequest {
  export function isa(o: any): o is DeleteDomainAssociationRequest {
    return __isa(o, "DeleteDomainAssociationRequest");
  }
}

export interface DeleteDomainAssociationResult {
  __type?: "DeleteDomainAssociationResult";
  /**
   * <p>
   *             Structure for Domain Association, which associates a custom domain with an Amplify App.
   *         </p>
   */
  domainAssociation: DomainAssociation | undefined;
}

export namespace DeleteDomainAssociationResult {
  export function isa(o: any): o is DeleteDomainAssociationResult {
    return __isa(o, "DeleteDomainAssociationResult");
  }
}

/**
 * <p>
 *             Request structure for delete job request.
 *         </p>
 */
export interface DeleteJobRequest {
  __type?: "DeleteJobRequest";
  /**
   * <p>
   *             Unique Id for an Amplify App.
   *         </p>
   */
  appId: string | undefined;

  /**
   * <p>
   *             Name for the branch, for the Job.
   *         </p>
   */
  branchName: string | undefined;

  /**
   * <p>
   *             Unique Id for the Job.
   *         </p>
   */
  jobId: string | undefined;
}

export namespace DeleteJobRequest {
  export function isa(o: any): o is DeleteJobRequest {
    return __isa(o, "DeleteJobRequest");
  }
}

/**
 * <p>
 *             Result structure for the delete job request.
 *         </p>
 */
export interface DeleteJobResult {
  __type?: "DeleteJobResult";
  /**
   * <p>
   *             Structure for the summary of a Job.
   *         </p>
   */
  jobSummary: JobSummary | undefined;
}

export namespace DeleteJobResult {
  export function isa(o: any): o is DeleteJobResult {
    return __isa(o, "DeleteJobResult");
  }
}

/**
 * <p>
 *             Request structure for the delete webhook request.
 *         </p>
 */
export interface DeleteWebhookRequest {
  __type?: "DeleteWebhookRequest";
  /**
   * <p>
   *             Unique Id for a webhook.
   *         </p>
   */
  webhookId: string | undefined;
}

export namespace DeleteWebhookRequest {
  export function isa(o: any): o is DeleteWebhookRequest {
    return __isa(o, "DeleteWebhookRequest");
  }
}

/**
 * <p>
 *             Result structure for the delete webhook request.
 *         </p>
 */
export interface DeleteWebhookResult {
  __type?: "DeleteWebhookResult";
  /**
   * <p>
   *             Webhook structure.
   *         </p>
   */
  webhook: Webhook | undefined;
}

export namespace DeleteWebhookResult {
  export function isa(o: any): o is DeleteWebhookResult {
    return __isa(o, "DeleteWebhookResult");
  }
}

/**
 * <p>
 *             Exception thrown when an operation fails due to a dependent service throwing an exception.
 *         </p>
 */
export interface DependentServiceFailureException
  extends __SmithyException,
    $MetadataBearer {
  name: "DependentServiceFailureException";
  $fault: "server";
  message?: string;
}

export namespace DependentServiceFailureException {
  export function isa(o: any): o is DependentServiceFailureException {
    return __isa(o, "DependentServiceFailureException");
  }
}

/**
 * <p>
 *             Structure for Domain Association, which associates a custom domain with an Amplify App.
 *         </p>
 */
export interface DomainAssociation {
  __type?: "DomainAssociation";
  /**
   * <p>
   *             DNS Record for certificate verification.
   *         </p>
   */
  certificateVerificationDNSRecord?: string;

  /**
   * <p>
   *             ARN for the Domain Association.
   *         </p>
   */
  domainAssociationArn: string | undefined;

  /**
   * <p>
   *             Name of the domain.
   *         </p>
   */
  domainName: string | undefined;

  /**
   * <p>
   *             Status fo the Domain Association.
   *         </p>
   */
  domainStatus: DomainStatus | string | undefined;

  /**
   * <p>
   *             Enables automated creation of Subdomains for branches. (Currently not supported)
   *         </p>
   */
  enableAutoSubDomain: boolean | undefined;

  /**
   * <p>
   *             Reason for the current status of the Domain Association.
   *         </p>
   */
  statusReason: string | undefined;

  /**
   * <p>
   *             Subdomains for the Domain Association.
   *         </p>
   */
  subDomains: Array<SubDomain> | undefined;
}

export namespace DomainAssociation {
  export function isa(o: any): o is DomainAssociation {
    return __isa(o, "DomainAssociation");
  }
}

export enum DomainStatus {
  AVAILABLE = "AVAILABLE",
  CREATING = "CREATING",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING_DEPLOYMENT = "PENDING_DEPLOYMENT",
  PENDING_VERIFICATION = "PENDING_VERIFICATION",
  REQUESTING_CERTIFICATE = "REQUESTING_CERTIFICATE",
  UPDATING = "UPDATING"
}

/**
 * <p>
 *             Request structure for the generate access logs request.
 *         </p>
 */
export interface GenerateAccessLogsRequest {
  __type?: "GenerateAccessLogsRequest";
  /**
   * <p>
   *             Unique Id for an Amplify App.
   *         </p>
   */
  appId: string | undefined;

  /**
   * <p>
   *             Name of the domain.
   *         </p>
   */
  domainName: string | undefined;

  /**
   * <p>
   *             The time at which the logs should end, inclusive.
   *         </p>
   */
  endTime?: Date;

  /**
   * <p>
   *             The time at which the logs should start, inclusive.
   *         </p>
   */
  startTime?: Date;
}

export namespace GenerateAccessLogsRequest {
  export function isa(o: any): o is GenerateAccessLogsRequest {
    return __isa(o, "GenerateAccessLogsRequest");
  }
}

/**
 * <p>
 *             Result structure for the generate access logs request.
 *         </p>
 */
export interface GenerateAccessLogsResult {
  __type?: "GenerateAccessLogsResult";
  /**
   * <p>
   *             Pre-signed URL for the requested access logs.
   *         </p>
   */
  logUrl?: string;
}

export namespace GenerateAccessLogsResult {
  export function isa(o: any): o is GenerateAccessLogsResult {
    return __isa(o, "GenerateAccessLogsResult");
  }
}

/**
 * <p>
 *             Request structure for get App request.
 *         </p>
 */
export interface GetAppRequest {
  __type?: "GetAppRequest";
  /**
   * <p>
   *             Unique Id for an Amplify App.
   *         </p>
   */
  appId: string | undefined;
}

export namespace GetAppRequest {
  export function isa(o: any): o is GetAppRequest {
    return __isa(o, "GetAppRequest");
  }
}

export interface GetAppResult {
  __type?: "GetAppResult";
  /**
   * <p>
   *             Amplify App represents different branches of a repository for building, deploying, and hosting.
   *         </p>
   */
  app: App | undefined;
}

export namespace GetAppResult {
  export function isa(o: any): o is GetAppResult {
    return __isa(o, "GetAppResult");
  }
}

/**
 * <p>
 *             Request structure for the get artifact request.
 *         </p>
 */
export interface GetArtifactUrlRequest {
  __type?: "GetArtifactUrlRequest";
  /**
   * <p>
   *             Unique Id for a artifact.
   *         </p>
   */
  artifactId: string | undefined;
}

export namespace GetArtifactUrlRequest {
  export function isa(o: any): o is GetArtifactUrlRequest {
    return __isa(o, "GetArtifactUrlRequest");
  }
}

/**
 * <p>
 *             Result structure for the get artifact request.
 *         </p>
 */
export interface GetArtifactUrlResult {
  __type?: "GetArtifactUrlResult";
  /**
   * <p>
   *             Unique Id for a artifact.
   *         </p>
   */
  artifactId: string | undefined;

  /**
   * <p>
   *             Presigned url for the artifact.
   *         </p>
   */
  artifactUrl: string | undefined;
}

export namespace GetArtifactUrlResult {
  export function isa(o: any): o is GetArtifactUrlResult {
    return __isa(o, "GetArtifactUrlResult");
  }
}

/**
 * <p>
 *             Request structure for get backend environment request.
 *         </p>
 */
export interface GetBackendEnvironmentRequest {
  __type?: "GetBackendEnvironmentRequest";
  /**
   * <p>
   *             Unique Id for an Amplify App.
   *         </p>
   */
  appId: string | undefined;

  /**
   * <p>
   *             Name for the backend environment.
   *         </p>
   */
  environmentName: string | undefined;
}

export namespace GetBackendEnvironmentRequest {
  export function isa(o: any): o is GetBackendEnvironmentRequest {
    return __isa(o, "GetBackendEnvironmentRequest");
  }
}

/**
 * <p>
 *             Result structure for get backend environment result.
 *         </p>
 */
export interface GetBackendEnvironmentResult {
  __type?: "GetBackendEnvironmentResult";
  /**
   * <p>
   *             Backend environment structure for an an Amplify App.
   *         </p>
   */
  backendEnvironment: BackendEnvironment | undefined;
}

export namespace GetBackendEnvironmentResult {
  export function isa(o: any): o is GetBackendEnvironmentResult {
    return __isa(o, "GetBackendEnvironmentResult");
  }
}

/**
 * <p>
 *             Request structure for get branch request.
 *         </p>
 */
export interface GetBranchRequest {
  __type?: "GetBranchRequest";
  /**
   * <p>
   *             Unique Id for an Amplify App.
   *         </p>
   */
  appId: string | undefined;

  /**
   * <p>
   *             Name for the branch.
   *         </p>
   */
  branchName: string | undefined;
}

export namespace GetBranchRequest {
  export function isa(o: any): o is GetBranchRequest {
    return __isa(o, "GetBranchRequest");
  }
}

export interface GetBranchResult {
  __type?: "GetBranchResult";
  /**
   * <p>
   *             Branch for an Amplify App, which maps to a 3rd party repository branch.
   *         </p>
   */
  branch: Branch | undefined;
}

export namespace GetBranchResult {
  export function isa(o: any): o is GetBranchResult {
    return __isa(o, "GetBranchResult");
  }
}

/**
 * <p>
 *             Request structure for the get Domain Association request.
 *         </p>
 */
export interface GetDomainAssociationRequest {
  __type?: "GetDomainAssociationRequest";
  /**
   * <p>
   *             Unique Id for an Amplify App.
   *         </p>
   */
  appId: string | undefined;

  /**
   * <p>
   *             Name of the domain.
   *         </p>
   */
  domainName: string | undefined;
}

export namespace GetDomainAssociationRequest {
  export function isa(o: any): o is GetDomainAssociationRequest {
    return __isa(o, "GetDomainAssociationRequest");
  }
}

/**
 * <p>
 *             Result structure for the get Domain Association request.
 *         </p>
 */
export interface GetDomainAssociationResult {
  __type?: "GetDomainAssociationResult";
  /**
   * <p>
   *             Domain Association structure.
   *         </p>
   */
  domainAssociation: DomainAssociation | undefined;
}

export namespace GetDomainAssociationResult {
  export function isa(o: any): o is GetDomainAssociationResult {
    return __isa(o, "GetDomainAssociationResult");
  }
}

/**
 * <p>
 *             Request structure for get job request.
 *         </p>
 */
export interface GetJobRequest {
  __type?: "GetJobRequest";
  /**
   * <p>
   *             Unique Id for an Amplify App.
   *         </p>
   */
  appId: string | undefined;

  /**
   * <p>
   *             Name for the branch, for the Job.
   *         </p>
   */
  branchName: string | undefined;

  /**
   * <p>
   *             Unique Id for the Job.
   *         </p>
   */
  jobId: string | undefined;
}

export namespace GetJobRequest {
  export function isa(o: any): o is GetJobRequest {
    return __isa(o, "GetJobRequest");
  }
}

export interface GetJobResult {
  __type?: "GetJobResult";
  /**
   * <p>
   *             Structure for an execution job for an Amplify App.
   *         </p>
   */
  job: Job | undefined;
}

export namespace GetJobResult {
  export function isa(o: any): o is GetJobResult {
    return __isa(o, "GetJobResult");
  }
}

/**
 * <p>
 *             Request structure for the get webhook request.
 *         </p>
 */
export interface GetWebhookRequest {
  __type?: "GetWebhookRequest";
  /**
   * <p>
   *             Unique Id for a webhook.
   *         </p>
   */
  webhookId: string | undefined;
}

export namespace GetWebhookRequest {
  export function isa(o: any): o is GetWebhookRequest {
    return __isa(o, "GetWebhookRequest");
  }
}

/**
 * <p>
 *             Result structure for the get webhook request.
 *         </p>
 */
export interface GetWebhookResult {
  __type?: "GetWebhookResult";
  /**
   * <p>
   *             Webhook structure.
   *         </p>
   */
  webhook: Webhook | undefined;
}

export namespace GetWebhookResult {
  export function isa(o: any): o is GetWebhookResult {
    return __isa(o, "GetWebhookResult");
  }
}

/**
 * <p>
 *             Exception thrown when the service fails to perform an operation due to an internal issue.
 *         </p>
 */
export interface InternalFailureException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalFailureException";
  $fault: "server";
  message?: string;
}

export namespace InternalFailureException {
  export function isa(o: any): o is InternalFailureException {
    return __isa(o, "InternalFailureException");
  }
}

/**
 * <p>
 *             Structure for an execution job for an Amplify App.
 *         </p>
 */
export interface Job {
  __type?: "Job";
  /**
   * <p>
   *             Execution steps for an execution job, for an Amplify App.
   *         </p>
   */
  steps: Array<Step> | undefined;

  /**
   * <p>
   *             Summary for an execution job for an Amplify App.
   *         </p>
   */
  summary: JobSummary | undefined;
}

export namespace Job {
  export function isa(o: any): o is Job {
    return __isa(o, "Job");
  }
}

export enum JobStatus {
  CANCELLED = "CANCELLED",
  CANCELLING = "CANCELLING",
  FAILED = "FAILED",
  PENDING = "PENDING",
  PROVISIONING = "PROVISIONING",
  RUNNING = "RUNNING",
  SUCCEED = "SUCCEED"
}

/**
 * <p>
 *             Structure for the summary of a Job.
 *         </p>
 */
export interface JobSummary {
  __type?: "JobSummary";
  /**
   * <p>
   *             Commit Id from 3rd party repository provider for the Job.
   *         </p>
   */
  commitId: string | undefined;

  /**
   * <p>
   *             Commit message from 3rd party repository provider for the Job.
   *         </p>
   */
  commitMessage: string | undefined;

  /**
   * <p>
   *             Commit date / time for the Job.
   *         </p>
   */
  commitTime: Date | undefined;

  /**
   * <p>
   *             End date / time for the Job.
   *         </p>
   */
  endTime?: Date;

  /**
   * <p>
   *             Arn for the Job.
   *         </p>
   */
  jobArn: string | undefined;

  /**
   * <p>
   *             Unique Id for the Job.
   *         </p>
   */
  jobId: string | undefined;

  /**
   * <p>
   *             Type for the Job. \n
   *             "RELEASE": Manually released from source by using StartJob API.
   *             "RETRY": Manually retried by using StartJob API.
   *             "WEB_HOOK": Automatically triggered by WebHooks.
   *         </p>
   */
  jobType: JobType | string | undefined;

  /**
   * <p>
   *             Start date / time for the Job.
   *         </p>
   */
  startTime: Date | undefined;

  /**
   * <p>
   *             Status for the Job.
   *         </p>
   */
  status: JobStatus | string | undefined;
}

export namespace JobSummary {
  export function isa(o: any): o is JobSummary {
    return __isa(o, "JobSummary");
  }
}

export enum JobType {
  MANUAL = "MANUAL",
  RELEASE = "RELEASE",
  RETRY = "RETRY",
  WEB_HOOK = "WEB_HOOK"
}

/**
 * <p>
 *             Exception thrown when a resource could not be created because of service limits.
 *         </p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return __isa(o, "LimitExceededException");
  }
}

/**
 * <p>
 *             Request structure for an Amplify App list request.
 *         </p>
 */
export interface ListAppsRequest {
  __type?: "ListAppsRequest";
  /**
   * <p>
   *             Maximum number of records to list in a single response.
   *         </p>
   */
  maxResults?: number;

  /**
   * <p>
   *             Pagination token. If non-null pagination token is returned in a result,
   *             then pass its value in another request to fetch more entries.
   *         </p>
   */
  nextToken?: string;
}

export namespace ListAppsRequest {
  export function isa(o: any): o is ListAppsRequest {
    return __isa(o, "ListAppsRequest");
  }
}

/**
 * <p>
 *             Result structure for an Amplify App list request.
 *         </p>
 */
export interface ListAppsResult {
  __type?: "ListAppsResult";
  /**
   * <p>
   *             List of Amplify Apps.
   *         </p>
   */
  apps: Array<App> | undefined;

  /**
   * <p>
   *             Pagination token. Set to null to start listing Apps from start.
   *             If non-null pagination token is returned in a result, then pass its
   *             value in here to list more projects.
   *         </p>
   */
  nextToken?: string;
}

export namespace ListAppsResult {
  export function isa(o: any): o is ListAppsResult {
    return __isa(o, "ListAppsResult");
  }
}

/**
 * <p>
 *             Request structure for the list artifacts request.
 *         </p>
 */
export interface ListArtifactsRequest {
  __type?: "ListArtifactsRequest";
  /**
   * <p>
   *             Unique Id for an Amplify App.
   *         </p>
   */
  appId: string | undefined;

  /**
   * <p>
   *             Name for a branch, part of an Amplify App.
   *         </p>
   */
  branchName: string | undefined;

  /**
   * <p>
   *             Unique Id for an Job.
   *         </p>
   */
  jobId: string | undefined;

  /**
   * <p>
   *             Maximum number of records to list in a single response.
   *         </p>
   */
  maxResults?: number;

  /**
   * <p>
   *             Pagination token. Set to null to start listing artifacts from start.
   *             If non-null pagination token is returned in a result, then pass its
   *             value in here to list more artifacts.
   *         </p>
   */
  nextToken?: string;
}

export namespace ListArtifactsRequest {
  export function isa(o: any): o is ListArtifactsRequest {
    return __isa(o, "ListArtifactsRequest");
  }
}

/**
 * <p>
 *             Result structure for the list artifacts request.
 *         </p>
 */
export interface ListArtifactsResult {
  __type?: "ListArtifactsResult";
  /**
   * <p>
   *             List of artifacts.
   *         </p>
   */
  artifacts: Array<Artifact> | undefined;

  /**
   * <p>
   *             Pagination token. If non-null pagination token is returned in a result,
   *             then pass its value in another request to fetch more entries.
   *         </p>
   */
  nextToken?: string;
}

export namespace ListArtifactsResult {
  export function isa(o: any): o is ListArtifactsResult {
    return __isa(o, "ListArtifactsResult");
  }
}

/**
 * <p>
 *             Request structure for list backend environments request.
 *         </p>
 */
export interface ListBackendEnvironmentsRequest {
  __type?: "ListBackendEnvironmentsRequest";
  /**
   * <p>
   *             Unique Id for an amplify App.
   *         </p>
   */
  appId: string | undefined;

  /**
   * <p>
   *             Name of the backend environment
   *         </p>
   */
  environmentName?: string;

  /**
   * <p>
   *             Maximum number of records to list in a single response.
   *         </p>
   */
  maxResults?: number;

  /**
   * <p>
   *             Pagination token. Set to null to start listing backen environments from start.
   *             If a non-null pagination token is returned in a result, then pass its
   *             value in here to list more backend environments.
   *         </p>
   */
  nextToken?: string;
}

export namespace ListBackendEnvironmentsRequest {
  export function isa(o: any): o is ListBackendEnvironmentsRequest {
    return __isa(o, "ListBackendEnvironmentsRequest");
  }
}

/**
 * <p>
 *             Result structure for list backend environments result.
 *         </p>
 */
export interface ListBackendEnvironmentsResult {
  __type?: "ListBackendEnvironmentsResult";
  /**
   * <p>
   *             List of backend environments for an Amplify App.
   *         </p>
   */
  backendEnvironments: Array<BackendEnvironment> | undefined;

  /**
   * <p>
   *             Pagination token. If non-null pagination token is returned in a result,
   *             then pass its value in another request to fetch more entries.
   *         </p>
   */
  nextToken?: string;
}

export namespace ListBackendEnvironmentsResult {
  export function isa(o: any): o is ListBackendEnvironmentsResult {
    return __isa(o, "ListBackendEnvironmentsResult");
  }
}

/**
 * <p>
 *             Request structure for list branches request.
 *         </p>
 */
export interface ListBranchesRequest {
  __type?: "ListBranchesRequest";
  /**
   * <p>
   *             Unique Id for an Amplify App.
   *         </p>
   */
  appId: string | undefined;

  /**
   * <p>
   *             Maximum number of records to list in a single response.
   *         </p>
   */
  maxResults?: number;

  /**
   * <p>
   *             Pagination token. Set to null to start listing branches from start.
   *             If a non-null pagination token is returned in a result, then pass its
   *             value in here to list more branches.
   *         </p>
   */
  nextToken?: string;
}

export namespace ListBranchesRequest {
  export function isa(o: any): o is ListBranchesRequest {
    return __isa(o, "ListBranchesRequest");
  }
}

/**
 * <p>
 *             Result structure for list branches request.
 *         </p>
 */
export interface ListBranchesResult {
  __type?: "ListBranchesResult";
  /**
   * <p>
   *             List of branches for an Amplify App.
   *         </p>
   */
  branches: Array<Branch> | undefined;

  /**
   * <p>
   *             Pagination token. If non-null pagination token is returned in a result,
   *             then pass its value in another request to fetch more entries.
   *         </p>
   */
  nextToken?: string;
}

export namespace ListBranchesResult {
  export function isa(o: any): o is ListBranchesResult {
    return __isa(o, "ListBranchesResult");
  }
}

/**
 * <p>
 *             Request structure for the list Domain Associations request.
 *         </p>
 */
export interface ListDomainAssociationsRequest {
  __type?: "ListDomainAssociationsRequest";
  /**
   * <p>
   *             Unique Id for an Amplify App.
   *         </p>
   */
  appId: string | undefined;

  /**
   * <p>
   *             Maximum number of records to list in a single response.
   *         </p>
   */
  maxResults?: number;

  /**
   * <p>
   *             Pagination token. Set to null to start listing Apps from start.
   *             If non-null pagination token is returned in a result, then pass its
   *             value in here to list more projects.
   *         </p>
   */
  nextToken?: string;
}

export namespace ListDomainAssociationsRequest {
  export function isa(o: any): o is ListDomainAssociationsRequest {
    return __isa(o, "ListDomainAssociationsRequest");
  }
}

/**
 * <p>
 *             Result structure for the list Domain Association request.
 *         </p>
 */
export interface ListDomainAssociationsResult {
  __type?: "ListDomainAssociationsResult";
  /**
   * <p>
   *             List of Domain Associations.
   *         </p>
   */
  domainAssociations: Array<DomainAssociation> | undefined;

  /**
   * <p>
   *             Pagination token. If non-null pagination token is returned in a result,
   *             then pass its value in another request to fetch more entries.
   *         </p>
   */
  nextToken?: string;
}

export namespace ListDomainAssociationsResult {
  export function isa(o: any): o is ListDomainAssociationsResult {
    return __isa(o, "ListDomainAssociationsResult");
  }
}

/**
 * <p>
 *             Request structure for list job request.
 *         </p>
 */
export interface ListJobsRequest {
  __type?: "ListJobsRequest";
  /**
   * <p>
   *             Unique Id for an Amplify App.
   *         </p>
   */
  appId: string | undefined;

  /**
   * <p>
   *             Name for a branch.
   *         </p>
   */
  branchName: string | undefined;

  /**
   * <p>
   *             Maximum number of records to list in a single response.
   *         </p>
   */
  maxResults?: number;

  /**
   * <p>
   *             Pagination token. Set to null to start listing steps from start.
   *             If a non-null pagination token is returned in a result, then pass its
   *             value in here to list more steps.
   *         </p>
   */
  nextToken?: string;
}

export namespace ListJobsRequest {
  export function isa(o: any): o is ListJobsRequest {
    return __isa(o, "ListJobsRequest");
  }
}

/**
 * <p>
 *             Maximum number of records to list in a single response.
 *         </p>
 */
export interface ListJobsResult {
  __type?: "ListJobsResult";
  /**
   * <p>
   *             Result structure for list job result request.
   *         </p>
   */
  jobSummaries: Array<JobSummary> | undefined;

  /**
   * <p>
   *             Pagination token. If non-null pagination token is returned in a result,
   *             then pass its value in another request to fetch more entries.
   *         </p>
   */
  nextToken?: string;
}

export namespace ListJobsResult {
  export function isa(o: any): o is ListJobsResult {
    return __isa(o, "ListJobsResult");
  }
}

/**
 * <p>
 *             Request structure used to list tags for resource.
 *         </p>
 */
export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>
   *             Resource arn used to list tags.
   *         </p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return __isa(o, "ListTagsForResourceRequest");
  }
}

/**
 * <p>
 *             Response for list tags.
 *         </p>
 */
export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>
   *             Tags result for response.
   *         </p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return __isa(o, "ListTagsForResourceResponse");
  }
}

/**
 * <p>
 *             Request structure for the list webhooks request.
 *         </p>
 */
export interface ListWebhooksRequest {
  __type?: "ListWebhooksRequest";
  /**
   * <p>
   *             Unique Id for an Amplify App.
   *         </p>
   */
  appId: string | undefined;

  /**
   * <p>
   *             Maximum number of records to list in a single response.
   *         </p>
   */
  maxResults?: number;

  /**
   * <p>
   *             Pagination token. Set to null to start listing webhooks from start.
   *             If non-null pagination token is returned in a result, then pass its
   *             value in here to list more webhooks.
   *         </p>
   */
  nextToken?: string;
}

export namespace ListWebhooksRequest {
  export function isa(o: any): o is ListWebhooksRequest {
    return __isa(o, "ListWebhooksRequest");
  }
}

/**
 * <p>
 *             Result structure for the list webhooks request.
 *         </p>
 */
export interface ListWebhooksResult {
  __type?: "ListWebhooksResult";
  /**
   * <p>
   *             Pagination token. If non-null pagination token is returned in a result,
   *             then pass its value in another request to fetch more entries.
   *         </p>
   */
  nextToken?: string;

  /**
   * <p>
   *             List of webhooks.
   *         </p>
   */
  webhooks: Array<Webhook> | undefined;
}

export namespace ListWebhooksResult {
  export function isa(o: any): o is ListWebhooksResult {
    return __isa(o, "ListWebhooksResult");
  }
}

/**
 * <p>
 *             Exception thrown when an entity has not been found during an operation.
 *         </p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  message?: string;
}

export namespace NotFoundException {
  export function isa(o: any): o is NotFoundException {
    return __isa(o, "NotFoundException");
  }
}

export enum Platform {
  WEB = "WEB"
}

/**
 * <p>
 *             Structure with Production Branch information.
 *         </p>
 */
export interface ProductionBranch {
  __type?: "ProductionBranch";
  /**
   * <p>
   *             Branch Name for Production Branch.
   *         </p>
   */
  branchName?: string;

  /**
   * <p>
   *             Last Deploy Time of Production Branch.
   *         </p>
   */
  lastDeployTime?: Date;

  /**
   * <p>
   *             Status of Production Branch.
   *         </p>
   */
  status?: string;

  /**
   * <p>
   *             Thumbnail URL for Production Branch.
   *         </p>
   */
  thumbnailUrl?: string;
}

export namespace ProductionBranch {
  export function isa(o: any): o is ProductionBranch {
    return __isa(o, "ProductionBranch");
  }
}

/**
 * <p>
 *             Exception thrown when an operation fails due to non-existent resource.
 *         </p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  code: string | undefined;
  message: string | undefined;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

export enum Stage {
  BETA = "BETA",
  DEVELOPMENT = "DEVELOPMENT",
  EXPERIMENTAL = "EXPERIMENTAL",
  PRODUCTION = "PRODUCTION",
  PULL_REQUEST = "PULL_REQUEST"
}

/**
 * <p>
 *             Request structure for start a deployment.
 *         </p>
 */
export interface StartDeploymentRequest {
  __type?: "StartDeploymentRequest";
  /**
   * <p>
   *             Unique Id for an Amplify App.
   *         </p>
   */
  appId: string | undefined;

  /**
   * <p>
   *             Name for the branch, for the Job.
   *         </p>
   */
  branchName: string | undefined;

  /**
   * <p>
   *             The job id for this deployment, generated by create deployment request.
   *         </p>
   */
  jobId?: string;

  /**
   * <p>
   *             The sourceUrl for this deployment, used when calling start deployment without create deployment.
   *             SourceUrl can be any HTTP GET url that is public accessible and downloads a single zip.
   *         </p>
   */
  sourceUrl?: string;
}

export namespace StartDeploymentRequest {
  export function isa(o: any): o is StartDeploymentRequest {
    return __isa(o, "StartDeploymentRequest");
  }
}

/**
 * <p>
 *             Result structure for start a deployment.
 *         </p>
 */
export interface StartDeploymentResult {
  __type?: "StartDeploymentResult";
  /**
   * <p>
   *             Summary for the Job.
   *         </p>
   */
  jobSummary: JobSummary | undefined;
}

export namespace StartDeploymentResult {
  export function isa(o: any): o is StartDeploymentResult {
    return __isa(o, "StartDeploymentResult");
  }
}

/**
 * <p>
 *             Request structure for Start job request.
 *         </p>
 */
export interface StartJobRequest {
  __type?: "StartJobRequest";
  /**
   * <p>
   *             Unique Id for an Amplify App.
   *         </p>
   */
  appId: string | undefined;

  /**
   * <p>
   *             Name for the branch, for the Job.
   *         </p>
   */
  branchName: string | undefined;

  /**
   * <p>
   *             Commit Id from 3rd party repository provider for the Job.
   *         </p>
   */
  commitId?: string;

  /**
   * <p>
   *             Commit message from 3rd party repository provider for the Job.
   *         </p>
   */
  commitMessage?: string;

  /**
   * <p>
   *             Commit date / time for the Job.
   *         </p>
   */
  commitTime?: Date;

  /**
   * <p>
   *             Unique Id for an existing job. Required for "RETRY" JobType.
   *         </p>
   */
  jobId?: string;

  /**
   * <p>
   *             Descriptive reason for starting this job.
   *         </p>
   */
  jobReason?: string;

  /**
   * <p>
   *             Type for the Job. Available JobTypes are: \n
   *             "RELEASE": Start a new job with the latest change from the specified branch. Only available for apps that have connected to a repository.
   *             "RETRY": Retry an existing job. JobId is required for this type of job.
   *         </p>
   */
  jobType: JobType | string | undefined;
}

export namespace StartJobRequest {
  export function isa(o: any): o is StartJobRequest {
    return __isa(o, "StartJobRequest");
  }
}

/**
 * <p>
 *             Result structure for run job request.
 *         </p>
 */
export interface StartJobResult {
  __type?: "StartJobResult";
  /**
   * <p>
   *             Summary for the Job.
   *         </p>
   */
  jobSummary: JobSummary | undefined;
}

export namespace StartJobResult {
  export function isa(o: any): o is StartJobResult {
    return __isa(o, "StartJobResult");
  }
}

/**
 * <p>
 *             Structure for an execution step for an execution job, for an Amplify App.
 *         </p>
 */
export interface Step {
  __type?: "Step";
  /**
   * <p>
   *             URL to the artifact for the execution step.
   *         </p>
   */
  artifactsUrl?: string;

  /**
   * <p>
   *             The context for current step, will include build image if step is build.
   *         </p>
   */
  context?: string;

  /**
   * <p>
   *             End date/ time of the execution step.
   *         </p>
   */
  endTime: Date | undefined;

  /**
   * <p>
   *             URL to the logs for the execution step.
   *         </p>
   */
  logUrl?: string;

  /**
   * <p>
   *             List of screenshot URLs for the execution step, if relevant.
   *         </p>
   */
  screenshots?: { [key: string]: string };

  /**
   * <p>
   *             Start date/ time of the execution step.
   *         </p>
   */
  startTime: Date | undefined;

  /**
   * <p>
   *             Status of the execution step.
   *         </p>
   */
  status: JobStatus | string | undefined;

  /**
   * <p>
   *             The reason for current step status.
   *         </p>
   */
  statusReason?: string;

  /**
   * <p>
   *             Name of the execution step.
   *         </p>
   */
  stepName: string | undefined;

  /**
   * <p>
   *             URL to the test artifact for the execution step.
   *         </p>
   */
  testArtifactsUrl?: string;

  /**
   * <p>
   *             URL to the test config for the execution step.
   *         </p>
   */
  testConfigUrl?: string;
}

export namespace Step {
  export function isa(o: any): o is Step {
    return __isa(o, "Step");
  }
}

/**
 * <p>
 *             Request structure for stop job request.
 *         </p>
 */
export interface StopJobRequest {
  __type?: "StopJobRequest";
  /**
   * <p>
   *             Unique Id for an Amplify App.
   *         </p>
   */
  appId: string | undefined;

  /**
   * <p>
   *             Name for the branch, for the Job.
   *         </p>
   */
  branchName: string | undefined;

  /**
   * <p>
   *             Unique Id for the Job.
   *         </p>
   */
  jobId: string | undefined;
}

export namespace StopJobRequest {
  export function isa(o: any): o is StopJobRequest {
    return __isa(o, "StopJobRequest");
  }
}

/**
 * <p>
 *             Result structure for the stop job request.
 *         </p>
 */
export interface StopJobResult {
  __type?: "StopJobResult";
  /**
   * <p>
   *             Summary for the Job.
   *         </p>
   */
  jobSummary: JobSummary | undefined;
}

export namespace StopJobResult {
  export function isa(o: any): o is StopJobResult {
    return __isa(o, "StopJobResult");
  }
}

/**
 * <p>
 *             Subdomain for the Domain Association.
 *         </p>
 */
export interface SubDomain {
  __type?: "SubDomain";
  /**
   * <p>
   *             DNS record for the Subdomain.
   *         </p>
   */
  dnsRecord: string | undefined;

  /**
   * <p>
   *             Setting structure for the Subdomain.
   *         </p>
   */
  subDomainSetting: SubDomainSetting | undefined;

  /**
   * <p>
   *             Verified status of the Subdomain
   *         </p>
   */
  verified: boolean | undefined;
}

export namespace SubDomain {
  export function isa(o: any): o is SubDomain {
    return __isa(o, "SubDomain");
  }
}

/**
 * <p>
 *             Setting for the Subdomain.
 *         </p>
 */
export interface SubDomainSetting {
  __type?: "SubDomainSetting";
  /**
   * <p>
   *             Branch name setting for the Subdomain.
   *         </p>
   */
  branchName: string | undefined;

  /**
   * <p>
   *             Prefix setting for the Subdomain.
   *         </p>
   */
  prefix: string | undefined;
}

export namespace SubDomainSetting {
  export function isa(o: any): o is SubDomainSetting {
    return __isa(o, "SubDomainSetting");
  }
}

/**
 * <p>
 *             Request structure used to tag resource.
 *         </p>
 */
export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>
   *             Resource arn used to tag resource.
   *         </p>
   */
  resourceArn: string | undefined;

  /**
   * <p>
   *             Tags used to tag resource.
   *         </p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return __isa(o, "TagResourceRequest");
  }
}

/**
 * <p>
 *             Response for tag resource.
 *         </p>
 */
export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return __isa(o, "TagResourceResponse");
  }
}

/**
 * <p>
 *             Exception thrown when an operation fails due to a lack of access.
 *         </p>
 */
export interface UnauthorizedException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnauthorizedException";
  $fault: "client";
  message?: string;
}

export namespace UnauthorizedException {
  export function isa(o: any): o is UnauthorizedException {
    return __isa(o, "UnauthorizedException");
  }
}

/**
 * <p>
 *             Request structure used to untag resource.
 *         </p>
 */
export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>
   *             Resource arn used to untag resource.
   *         </p>
   */
  resourceArn: string | undefined;

  /**
   * <p>
   *             Tag keys used to untag resource.
   *         </p>
   */
  tagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return __isa(o, "UntagResourceRequest");
  }
}

/**
 * <p>
 *             Response for untag resource.
 *         </p>
 */
export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export function isa(o: any): o is UntagResourceResponse {
    return __isa(o, "UntagResourceResponse");
  }
}

/**
 * <p>
 *             Request structure for update App request.
 *         </p>
 */
export interface UpdateAppRequest {
  __type?: "UpdateAppRequest";
  /**
   * <p>
   *             Personal Access token for 3rd party source control system for an Amplify App, used to create webhook and read-only
   *             deploy key. Token is not stored.
   *         </p>
   */
  accessToken?: string;

  /**
   * <p>
   *             Unique Id for an Amplify App.
   *         </p>
   */
  appId: string | undefined;

  /**
   * <p>
   *             Automated branch creation branchConfig for the Amplify App.
   *         </p>
   */
  autoBranchCreationConfig?: AutoBranchCreationConfig;

  /**
   * <p>
   *             Automated branch creation glob patterns for the Amplify App.
   *         </p>
   */
  autoBranchCreationPatterns?: Array<string>;

  /**
   * <p>
   *             Basic Authorization credentials for an Amplify App.
   *         </p>
   */
  basicAuthCredentials?: string;

  /**
   * <p>
   *             BuildSpec for an Amplify App.
   *         </p>
   */
  buildSpec?: string;

  /**
   * <p>
   *             Custom redirect / rewrite rules for an Amplify App.
   *         </p>
   */
  customRules?: Array<CustomRule>;

  /**
   * <p>
   *             Description for an Amplify App.
   *         </p>
   */
  description?: string;

  /**
   * <p>
   *             Enables automated branch creation for the Amplify App.
   *         </p>
   */
  enableAutoBranchCreation?: boolean;

  /**
   * <p>
   *             Enables Basic Authorization for an Amplify App.
   *         </p>
   */
  enableBasicAuth?: boolean;

  /**
   * <p>
   *             Enables branch auto-building for an Amplify App.
   *         </p>
   */
  enableBranchAutoBuild?: boolean;

  /**
   * <p>
   *             Environment Variables for an Amplify App.
   *         </p>
   */
  environmentVariables?: { [key: string]: string };

  /**
   * <p>
   *             IAM service role for an Amplify App.
   *         </p>
   */
  iamServiceRoleArn?: string;

  /**
   * <p>
   *             Name for an Amplify App.
   *         </p>
   */
  name?: string;

  /**
   * <p>
   *             OAuth token for 3rd party source control system for an Amplify App, used to create webhook and read-only
   *             deploy key. OAuth token is not stored.
   *         </p>
   */
  oauthToken?: string;

  /**
   * <p>
   *             Platform for an Amplify App.
   *         </p>
   */
  platform?: Platform | string;

  /**
   * <p>
   *             Repository for an Amplify App
   *         </p>
   */
  repository?: string;
}

export namespace UpdateAppRequest {
  export function isa(o: any): o is UpdateAppRequest {
    return __isa(o, "UpdateAppRequest");
  }
}

/**
 * <p>
 *             Result structure for an Amplify App update request.
 *         </p>
 */
export interface UpdateAppResult {
  __type?: "UpdateAppResult";
  /**
   * <p>
   *             App structure for the updated App.
   *         </p>
   */
  app: App | undefined;
}

export namespace UpdateAppResult {
  export function isa(o: any): o is UpdateAppResult {
    return __isa(o, "UpdateAppResult");
  }
}

/**
 * <p>
 *             Request structure for update branch request.
 *         </p>
 */
export interface UpdateBranchRequest {
  __type?: "UpdateBranchRequest";
  /**
   * <p>
   *             Unique Id for an Amplify App.
   *         </p>
   */
  appId: string | undefined;

  /**
   * <p>
   *             ARN for a Backend Environment, part of an Amplify App.
   *         </p>
   */
  backendEnvironmentArn?: string;

  /**
   * <p>
   *             Basic Authorization credentials for the branch.
   *         </p>
   */
  basicAuthCredentials?: string;

  /**
   * <p>
   *             Name for the branch.
   *         </p>
   */
  branchName: string | undefined;

  /**
   * <p>
   *             BuildSpec for the branch.
   *         </p>
   */
  buildSpec?: string;

  /**
   * <p>
   *             Description for the branch.
   *         </p>
   */
  description?: string;

  /**
   * <p>
   *             Display name for a branch, will use as the default domain prefix.
   *         </p>
   */
  displayName?: string;

  /**
   * <p>
   *             Enables auto building for the branch.
   *         </p>
   */
  enableAutoBuild?: boolean;

  /**
   * <p>
   *             Enables Basic Auth for the branch.
   *         </p>
   */
  enableBasicAuth?: boolean;

  /**
   * <p>
   *             Enables notifications for the branch.
   *         </p>
   */
  enableNotification?: boolean;

  /**
   * <p>
   *             Enables Pull Request Preview for this branch.
   *         </p>
   */
  enablePullRequestPreview?: boolean;

  /**
   * <p>
   *             Environment Variables for the branch.
   *         </p>
   */
  environmentVariables?: { [key: string]: string };

  /**
   * <p>
   *             Framework for the branch.
   *         </p>
   */
  framework?: string;

  /**
   * <p>
   *             The Amplify Environment name for the pull request.
   *         </p>
   */
  pullRequestEnvironmentName?: string;

  /**
   * <p>
   *             Stage for the branch.
   *         </p>
   */
  stage?: Stage | string;

  /**
   * <p>
   *             The content TTL for the website in seconds.
   *         </p>
   */
  ttl?: string;
}

export namespace UpdateBranchRequest {
  export function isa(o: any): o is UpdateBranchRequest {
    return __isa(o, "UpdateBranchRequest");
  }
}

/**
 * <p>
 *             Result structure for update branch request.
 *         </p>
 */
export interface UpdateBranchResult {
  __type?: "UpdateBranchResult";
  /**
   * <p>
   *             Branch structure for an Amplify App.
   *         </p>
   */
  branch: Branch | undefined;
}

export namespace UpdateBranchResult {
  export function isa(o: any): o is UpdateBranchResult {
    return __isa(o, "UpdateBranchResult");
  }
}

/**
 * <p>
 *             Request structure for update Domain Association request.
 *         </p>
 */
export interface UpdateDomainAssociationRequest {
  __type?: "UpdateDomainAssociationRequest";
  /**
   * <p>
   *             Unique Id for an Amplify App.
   *         </p>
   */
  appId: string | undefined;

  /**
   * <p>
   *             Name of the domain.
   *         </p>
   */
  domainName: string | undefined;

  /**
   * <p>
   *             Enables automated creation of Subdomains for branches. (Currently not supported)
   *         </p>
   */
  enableAutoSubDomain?: boolean;

  /**
   * <p>
   *             Setting structure for the Subdomain.
   *         </p>
   */
  subDomainSettings: Array<SubDomainSetting> | undefined;
}

export namespace UpdateDomainAssociationRequest {
  export function isa(o: any): o is UpdateDomainAssociationRequest {
    return __isa(o, "UpdateDomainAssociationRequest");
  }
}

/**
 * <p>
 *             Result structure for the update Domain Association request.
 *         </p>
 */
export interface UpdateDomainAssociationResult {
  __type?: "UpdateDomainAssociationResult";
  /**
   * <p>
   *             Domain Association structure.
   *         </p>
   */
  domainAssociation: DomainAssociation | undefined;
}

export namespace UpdateDomainAssociationResult {
  export function isa(o: any): o is UpdateDomainAssociationResult {
    return __isa(o, "UpdateDomainAssociationResult");
  }
}

/**
 * <p>
 *             Request structure for update webhook request.
 *         </p>
 */
export interface UpdateWebhookRequest {
  __type?: "UpdateWebhookRequest";
  /**
   * <p>
   *             Name for a branch, part of an Amplify App.
   *         </p>
   */
  branchName?: string;

  /**
   * <p>
   *             Description for a webhook.
   *         </p>
   */
  description?: string;

  /**
   * <p>
   *             Unique Id for a webhook.
   *         </p>
   */
  webhookId: string | undefined;
}

export namespace UpdateWebhookRequest {
  export function isa(o: any): o is UpdateWebhookRequest {
    return __isa(o, "UpdateWebhookRequest");
  }
}

/**
 * <p>
 *             Result structure for the update webhook request.
 *         </p>
 */
export interface UpdateWebhookResult {
  __type?: "UpdateWebhookResult";
  /**
   * <p>
   *             Webhook structure.
   *         </p>
   */
  webhook: Webhook | undefined;
}

export namespace UpdateWebhookResult {
  export function isa(o: any): o is UpdateWebhookResult {
    return __isa(o, "UpdateWebhookResult");
  }
}

/**
 * <p>
 *             Structure for webhook, which associates a webhook with an Amplify App.
 *         </p>
 */
export interface Webhook {
  __type?: "Webhook";
  /**
   * <p>
   *             Name for a branch, part of an Amplify App.
   *         </p>
   */
  branchName: string | undefined;

  /**
   * <p>
   *             Create date / time for a webhook.
   *         </p>
   */
  createTime: Date | undefined;

  /**
   * <p>
   *             Description for a webhook.
   *         </p>
   */
  description: string | undefined;

  /**
   * <p>
   *             Update date / time for a webhook.
   *         </p>
   */
  updateTime: Date | undefined;

  /**
   * <p>
   *             ARN for the webhook.
   *         </p>
   */
  webhookArn: string | undefined;

  /**
   * <p>
   *             Id of the webhook.
   *         </p>
   */
  webhookId: string | undefined;

  /**
   * <p>
   *             Url of the webhook.
   *         </p>
   */
  webhookUrl: string | undefined;
}

export namespace Webhook {
  export function isa(o: any): o is Webhook {
    return __isa(o, "Webhook");
  }
}
