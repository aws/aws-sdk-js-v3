// smithy-typescript generated code
import {
  CisSecurityLevel,
  CodeScanStatus,
  Ec2DeepInspectionStatus,
  FilterAction,
  IntegrationStatus,
  ResourceType,
  ScanType,
  StopCisSessionStatus,
} from "./enums";
import type {
  AutoEnable,
  CodeSecurityResource,
  CodeSecurityScanConfiguration,
  ComputePlatform,
  Ec2Configuration,
  EcrConfiguration,
  FilterCriteria,
  Schedule,
} from "./models_0";

/**
 * @public
 */
export interface StartCisSessionResponse {}

/**
 * @public
 */
export interface StartCodeSecurityScanRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The resource identifier for the code repository to scan.</p>
   * @public
   */
  resource: CodeSecurityResource | undefined;
}

/**
 * @public
 */
export interface StartCodeSecurityScanResponse {
  /**
   * <p>The unique identifier of the initiated scan.</p>
   * @public
   */
  scanId?: string | undefined;

  /**
   * <p>The current status of the initiated scan.</p>
   * @public
   */
  status?: CodeScanStatus | undefined;
}

/**
 * <p>The stop CIS message progress.</p>
 * @public
 */
export interface StopCisMessageProgress {
  /**
   * <p>The progress' total checks.</p>
   * @public
   */
  totalChecks?: number | undefined;

  /**
   * <p>The progress' successful checks.</p>
   * @public
   */
  successfulChecks?: number | undefined;

  /**
   * <p>The progress' failed checks.</p>
   * @public
   */
  failedChecks?: number | undefined;

  /**
   * <p>The progress' not evaluated checks.</p>
   * @public
   */
  notEvaluatedChecks?: number | undefined;

  /**
   * <p>The progress' unknown checks.</p>
   * @public
   */
  unknownChecks?: number | undefined;

  /**
   * <p>The progress' not applicable checks.</p>
   * @public
   */
  notApplicableChecks?: number | undefined;

  /**
   * <p>The progress' informational checks.</p>
   * @public
   */
  informationalChecks?: number | undefined;

  /**
   * <p>The progress' error checks.</p>
   * @public
   */
  errorChecks?: number | undefined;
}

/**
 * <p>The stop CIS session message.</p>
 * @public
 */
export interface StopCisSessionMessage {
  /**
   * <p>The status of the message.</p>
   * @public
   */
  status: StopCisSessionStatus | undefined;

  /**
   * <p>The reason for the message.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>The progress of the message.</p>
   * @public
   */
  progress: StopCisMessageProgress | undefined;

  /**
   * <p>The message compute platform.</p>
   * @public
   */
  computePlatform?: ComputePlatform | undefined;

  /**
   * <p>The message benchmark version.</p>
   * @public
   */
  benchmarkVersion?: string | undefined;

  /**
   * <p>The message benchmark profile.</p>
   * @public
   */
  benchmarkProfile?: string | undefined;
}

/**
 * @public
 */
export interface StopCisSessionRequest {
  /**
   * <p>A unique identifier for the scan job.</p>
   * @public
   */
  scanJobId: string | undefined;

  /**
   * <p>The unique token that identifies the CIS session.</p>
   * @public
   */
  sessionToken: string | undefined;

  /**
   * <p>The stop CIS session message.</p>
   * @public
   */
  message: StopCisSessionMessage | undefined;
}

/**
 * @public
 */
export interface StopCisSessionResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to apply a tag to.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to be added to a resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource to remove tags from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys to remove from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * <p>Updates CIS targets.</p>
 * @public
 */
export interface UpdateCisTargets {
  /**
   * <p>The target account ids.</p>
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * <p>The target resource tags.</p>
   * @public
   */
  targetResourceTags?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface UpdateCisScanConfigurationRequest {
  /**
   * <p>The CIS scan configuration ARN.</p>
   * @public
   */
  scanConfigurationArn: string | undefined;

  /**
   * <p>The scan name for the CIS scan configuration.</p>
   * @public
   */
  scanName?: string | undefined;

  /**
   * <p> The security level for the CIS scan configuration. Security level refers to the
   *          Benchmark levels that CIS assigns to a profile. </p>
   * @public
   */
  securityLevel?: CisSecurityLevel | undefined;

  /**
   * <p>The schedule for the CIS scan configuration.</p>
   * @public
   */
  schedule?: Schedule | undefined;

  /**
   * <p>The targets for the CIS scan configuration.</p>
   * @public
   */
  targets?: UpdateCisTargets | undefined;
}

/**
 * @public
 */
export interface UpdateCisScanConfigurationResponse {
  /**
   * <p>The CIS scan configuration ARN.</p>
   * @public
   */
  scanConfigurationArn: string | undefined;
}

/**
 * <p>Contains details required to update an integration with GitHub.</p>
 * @public
 */
export interface UpdateGitHubIntegrationDetail {
  /**
   * <p>The authorization code received from GitHub to update the integration.</p>
   * @public
   */
  code: string | undefined;

  /**
   * <p>The installation ID of the GitHub App associated with the integration.</p>
   * @public
   */
  installationId: string | undefined;
}

/**
 * <p>Contains details required to update an integration with a self-managed GitLab
 *          instance.</p>
 * @public
 */
export interface UpdateGitLabSelfManagedIntegrationDetail {
  /**
   * <p>The authorization code received from the self-managed GitLab instance to update the
   *          integration.</p>
   * @public
   */
  authCode: string | undefined;
}

/**
 * <p>Contains details required to update a code security integration with a specific
 *          repository provider.</p>
 * @public
 */
export type UpdateIntegrationDetails =
  | UpdateIntegrationDetails.GithubMember
  | UpdateIntegrationDetails.GitlabSelfManagedMember
  | UpdateIntegrationDetails.$UnknownMember;

/**
 * @public
 */
export namespace UpdateIntegrationDetails {
  /**
   * <p>Details specific to updating an integration with a self-managed GitLab instance.</p>
   * @public
   */
  export interface GitlabSelfManagedMember {
    gitlabSelfManaged: UpdateGitLabSelfManagedIntegrationDetail;
    github?: never;
    $unknown?: never;
  }

  /**
   * <p>Details specific to updating an integration with GitHub.</p>
   * @public
   */
  export interface GithubMember {
    gitlabSelfManaged?: never;
    github: UpdateGitHubIntegrationDetail;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    gitlabSelfManaged?: never;
    github?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    gitlabSelfManaged: (value: UpdateGitLabSelfManagedIntegrationDetail) => T;
    github: (value: UpdateGitHubIntegrationDetail) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface UpdateCodeSecurityIntegrationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the code security integration to update.</p>
   * @public
   */
  integrationArn: string | undefined;

  /**
   * <p>The updated integration details specific to the repository provider type.</p>
   * @public
   */
  details: UpdateIntegrationDetails | undefined;
}

/**
 * @public
 */
export interface UpdateCodeSecurityIntegrationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated code security integration.</p>
   * @public
   */
  integrationArn: string | undefined;

  /**
   * <p>The current status of the updated code security integration.</p>
   * @public
   */
  status: IntegrationStatus | undefined;
}

/**
 * @public
 */
export interface UpdateCodeSecurityScanConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the scan configuration to update.</p>
   * @public
   */
  scanConfigurationArn: string | undefined;

  /**
   * <p>The updated configuration settings for the code security scan.</p>
   * @public
   */
  configuration: CodeSecurityScanConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateCodeSecurityScanConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated scan configuration.</p>
   * @public
   */
  scanConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConfigurationRequest {
  /**
   * <p>Specifies how the ECR automated re-scan will be updated for your environment.</p>
   * @public
   */
  ecrConfiguration?: EcrConfiguration | undefined;

  /**
   * <p>Specifies how the Amazon EC2 automated scan will be updated for your environment.</p>
   * @public
   */
  ec2Configuration?: Ec2Configuration | undefined;
}

/**
 * @public
 */
export interface UpdateConfigurationResponse {}

/**
 * @public
 */
export interface UpdateEc2DeepInspectionConfigurationRequest {
  /**
   * <p>Specify <code>TRUE</code> to activate Amazon Inspector deep inspection in your account, or
   *             <code>FALSE</code> to deactivate. Member accounts in an organization cannot deactivate
   *          deep inspection, instead the delegated administrator for the organization can deactivate a
   *          member account using <a href="https://docs.aws.amazon.com/inspector/v2/APIReference/API_BatchUpdateMemberEc2DeepInspectionStatus.html">BatchUpdateMemberEc2DeepInspectionStatus</a>.</p>
   * @public
   */
  activateDeepInspection?: boolean | undefined;

  /**
   * <p>The Amazon Inspector deep inspection custom paths you are adding for your account.</p>
   * @public
   */
  packagePaths?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateEc2DeepInspectionConfigurationResponse {
  /**
   * <p>The current Amazon Inspector deep inspection custom paths for your account.</p>
   * @public
   */
  packagePaths?: string[] | undefined;

  /**
   * <p>The current Amazon Inspector deep inspection custom paths for the organization.</p>
   * @public
   */
  orgPackagePaths?: string[] | undefined;

  /**
   * <p>The status of Amazon Inspector deep inspection in your account.</p>
   * @public
   */
  status?: Ec2DeepInspectionStatus | undefined;

  /**
   * <p>An error message explaining why new Amazon Inspector deep inspection custom paths could not be
   *          added.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEncryptionKeyRequest {
  /**
   * <p>A KMS key ID for the encryption key.</p>
   * @public
   */
  kmsKeyId: string | undefined;

  /**
   * <p>The scan type for the encryption key.</p>
   * @public
   */
  scanType: ScanType | undefined;

  /**
   * <p>The resource type for the encryption key.</p>
   * @public
   */
  resourceType: ResourceType | undefined;
}

/**
 * @public
 */
export interface UpdateEncryptionKeyResponse {}

/**
 * @public
 */
export interface UpdateFilterRequest {
  /**
   * <p>Specifies the action that is to be applied to the findings that match the filter.</p>
   * @public
   */
  action?: FilterAction | undefined;

  /**
   * <p>A description of the filter.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Defines the criteria to be update in the filter.</p>
   * @public
   */
  filterCriteria?: FilterCriteria | undefined;

  /**
   * <p>The name of the filter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the filter to update.</p>
   * @public
   */
  filterArn: string | undefined;

  /**
   * <p>The reason the filter was updated.</p>
   * @public
   */
  reason?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFilterResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the successfully updated filter.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationRequest {
  /**
   * <p>Defines which scan types are enabled automatically for new members of your Amazon Inspector
   *          organization.</p>
   * @public
   */
  autoEnable: AutoEnable | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationResponse {
  /**
   * <p>The updated status of scan types automatically enabled for new members of your Amazon Inspector
   *          organization.</p>
   * @public
   */
  autoEnable: AutoEnable | undefined;
}

/**
 * @public
 */
export interface UpdateOrgEc2DeepInspectionConfigurationRequest {
  /**
   * <p>The Amazon Inspector deep inspection custom paths you are adding for your organization.</p>
   * @public
   */
  orgPackagePaths: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateOrgEc2DeepInspectionConfigurationResponse {}
