import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>GetAccountSummary</a> request. </p>
 */
export interface GetAccountSummaryOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A set of key–value pairs containing information about IAM entity usage and IAM quotas.</p>
   */
  SummaryMap?: {
    [key in
      | "Users"
      | "UsersQuota"
      | "Groups"
      | "GroupsQuota"
      | "ServerCertificates"
      | "ServerCertificatesQuota"
      | "UserPolicySizeQuota"
      | "GroupPolicySizeQuota"
      | "GroupsPerUserQuota"
      | "SigningCertificatesPerUserQuota"
      | "AccessKeysPerUserQuota"
      | "MFADevices"
      | "MFADevicesInUse"
      | "AccountMFAEnabled"
      | "AccountAccessKeysPresent"
      | "AccountSigningCertificatesPresent"
      | "AttachedPoliciesPerGroupQuota"
      | "AttachedPoliciesPerRoleQuota"
      | "AttachedPoliciesPerUserQuota"
      | "Policies"
      | "PoliciesQuota"
      | "PolicySizeQuota"
      | "PolicyVersionsInUse"
      | "PolicyVersionsInUseQuota"
      | "VersionsPerPolicyQuota"
      | "GlobalEndpointTokenVersion"
      | string]: number
  };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
