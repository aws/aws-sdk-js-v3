// smithy-typescript generated code
import type { CertificateField, NotificationChannel, NotificationEvent, TrustAnchorType } from "./enums";

/**
 * <p>A single mapping entry for each supported specifier or sub-field.</p>
 * @public
 */
export interface MappingRule {
  /**
   * <p>Specifier within a certificate field, such as CN, OU, or UID from the Subject field.</p>
   * @public
   */
  specifier: string | undefined;
}

/**
 * <p>A mapping applied to the authenticating end-entity certificate.</p>
 * @public
 */
export interface AttributeMapping {
  /**
   * <p>Fields (x509Subject, x509Issuer and x509SAN) within X.509 certificates.</p>
   * @public
   */
  certificateField?: CertificateField | undefined;

  /**
   * <p>A list of mapping entries for every supported specifier or sub-field.</p>
   * @public
   */
  mappingRules?: MappingRule[] | undefined;
}

/**
 * <p>A label that consists of a key and value you define. </p>
 * @public
 */
export interface Tag {
  /**
   * <p>The tag key.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The tag value.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateProfileRequest {
  /**
   * <p>The name of the profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Unused, saved for future use. Will likely specify whether instance properties are required in temporary credential requests with this profile. </p>
   * @public
   */
  requireInstanceProperties?: boolean | undefined;

  /**
   * <p>A session policy that applies to the trust boundary of the vended session credentials. </p>
   * @public
   */
  sessionPolicy?: string | undefined;

  /**
   * <p>A list of IAM roles that this profile can assume in a temporary credential request.</p>
   * @public
   */
  roleArns: string[] | undefined;

  /**
   * <p>A list of managed policy ARNs that apply to the vended session credentials. </p>
   * @public
   */
  managedPolicyArns?: string[] | undefined;

  /**
   * <p> Used to determine how long sessions vended using this profile are valid for. See the <code>Expiration</code> section of the <a href="https://docs.aws.amazon.com/rolesanywhere/latest/userguide/authentication-create-session.html#credentials-object">CreateSession API documentation</a> page for more details. In requests, if this value is not provided, the default value will be 3600. </p>
   * @public
   */
  durationSeconds?: number | undefined;

  /**
   * <p>Specifies whether the profile is enabled.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>The tags to attach to the profile.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>Used to determine if a custom role session name will be accepted in a temporary credential request.</p>
   * @public
   */
  acceptRoleSessionName?: boolean | undefined;

  /**
   * <p>An alias for the profile. When you set an alias, the response includes the alias ARN of the profile in <code>aliasArn</code>.</p> <p>An alias name contains 1 to 256 characters. It must begin with a letter (A-Z or a-z). It can contain only letters (A-Z and a-z), numbers (0-9), underscores (_), hyphens (-), and forward slashes (/). A forward slash can appear only between two other characters, so an alias name can't end with a forward slash or contain two in a row. Alias names that begin with <code>aws/</code>, in any combination of uppercase and lowercase letters, are reserved. Alias names are case sensitive.</p> <p>The alias name must be unique among resources of the same type in your account and Region. If another resource of the same type already has the alias, the request fails with a <code>ValidationException</code>. An invalid or reserved alias name also causes a <code>ValidationException</code>.</p> <p>If you omit this parameter or specify an empty string, the resource is created without an alias.</p>
   * @public
   */
  aliasName?: string | undefined;
}

/**
 * <p>The state of the profile after a read or write operation.</p>
 * @public
 */
export interface ProfileDetail {
  /**
   * <p>The unique identifier of the profile.</p>
   * @public
   */
  profileId?: string | undefined;

  /**
   * <p>The ARN of the profile.</p>
   * @public
   */
  profileArn?: string | undefined;

  /**
   * <p>The name of the profile.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Unused, saved for future use. Will likely specify whether instance properties are required in temporary credential requests with this profile. </p>
   * @public
   */
  requireInstanceProperties?: boolean | undefined;

  /**
   * <p>Indicates whether the profile is enabled.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>The Amazon Web Services account that created the profile.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>A session policy that applies to the trust boundary of the vended session credentials. </p>
   * @public
   */
  sessionPolicy?: string | undefined;

  /**
   * <p>A list of IAM roles that this profile can assume in a temporary credential request.</p>
   * @public
   */
  roleArns?: string[] | undefined;

  /**
   * <p>A list of managed policy ARNs that apply to the vended session credentials. </p>
   * @public
   */
  managedPolicyArns?: string[] | undefined;

  /**
   * <p>The ISO-8601 timestamp when the profile was created. </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The ISO-8601 timestamp when the profile was last updated. </p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p> Used to determine how long sessions vended using this profile are valid for. See the <code>Expiration</code> section of the <a href="https://docs.aws.amazon.com/rolesanywhere/latest/userguide/authentication-create-session.html#credentials-object">CreateSession API documentation</a> page for more details. In requests, if this value is not provided, the default value will be 3600. </p>
   * @public
   */
  durationSeconds?: number | undefined;

  /**
   * <p>Used to determine if a custom role session name will be accepted in a temporary credential request.</p>
   * @public
   */
  acceptRoleSessionName?: boolean | undefined;

  /**
   * <p>A mapping applied to the authenticating end-entity certificate.</p>
   * @public
   */
  attributeMappings?: AttributeMapping[] | undefined;

  /**
   * <p>The alias of the profile. Present only if the profile has an alias.</p>
   * @public
   */
  aliasName?: string | undefined;

  /**
   * <p>The alias ARN of the profile, in the form <code>arn:<i>partition</i>:rolesanywhere:<i>region</i>:<i>account</i>:alias/profile/<i>alias-name</i> </code>. Present only if the profile has an alias.</p> <p>You can use the alias ARN in place of the resource ID or ARN in the request parameters whose descriptions say that they accept an alias ARN. Don't use the alias ARN in Identity and Access Management (IAM) policies. A policy statement that names an alias ARN doesn't apply to the resource that holds the alias. Write policies with the ARN that contains the resource ID instead.</p>
   * @public
   */
  aliasArn?: string | undefined;

  /**
   * <p>The alias that the resource had before the update request. IAM Roles Anywhere returns this value only in the response to an update request that changed or removed an existing alias. It isn't returned when the alias was unchanged, when the resource had no alias before the request, or by other operations.</p>
   * @public
   */
  previousAliasName?: string | undefined;
}

/**
 * @public
 */
export interface ProfileDetailResponse {
  /**
   * <p>The state of the profile after a read or write operation.</p>
   * @public
   */
  profile?: ProfileDetail | undefined;
}

/**
 * <p> Customizable notification settings that will be applied to notification events. IAM Roles Anywhere consumes these settings while notifying across multiple channels - CloudWatch metrics, EventBridge, and Health Dashboard. </p>
 * @public
 */
export interface NotificationSetting {
  /**
   * <p>Indicates whether the notification setting is enabled.</p>
   * @public
   */
  enabled: boolean | undefined;

  /**
   * <p>The event to which this notification setting is applied.</p>
   * @public
   */
  event: NotificationEvent | undefined;

  /**
   * <p>The number of days before a notification event. This value is required for a notification setting that is enabled.</p>
   * @public
   */
  threshold?: number | undefined;

  /**
   * <p>The specified channel of notification. IAM Roles Anywhere uses CloudWatch metrics, EventBridge, and Health Dashboard to notify for an event.</p> <note> <p>In the absence of a specific channel, IAM Roles Anywhere applies this setting to 'ALL' channels.</p> </note>
   * @public
   */
  channel?: NotificationChannel | undefined;
}

/**
 * <p>The data field of the trust anchor depending on its type. </p>
 * @public
 */
export type SourceData =
  | SourceData.AcmPcaArnMember
  | SourceData.X509CertificateDataMember
  | SourceData.$UnknownMember;

/**
 * @public
 */
export namespace SourceData {
  /**
   * <p>The PEM-encoded data for the certificate anchor. Included for trust anchors of type <code>CERTIFICATE_BUNDLE</code>. </p>
   * @public
   */
  export interface X509CertificateDataMember {
    x509CertificateData: string;
    acmPcaArn?: never;
    $unknown?: never;
  }

  /**
   * <p> The root certificate of the Private Certificate Authority specified by this ARN is used in trust validation for temporary credential requests. Included for trust anchors of type <code>AWS_ACM_PCA</code>. </p>
   * @public
   */
  export interface AcmPcaArnMember {
    x509CertificateData?: never;
    acmPcaArn: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    x509CertificateData?: never;
    acmPcaArn?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    x509CertificateData: (value: string) => T;
    acmPcaArn: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The trust anchor type and its related certificate data.</p>
 * @public
 */
export interface Source {
  /**
   * <p>The type of the trust anchor. </p>
   * @public
   */
  sourceType?: TrustAnchorType | undefined;

  /**
   * <p>The data field of the trust anchor depending on its type. </p>
   * @public
   */
  sourceData?: SourceData | undefined;
}

/**
 * @public
 */
export interface CreateTrustAnchorRequest {
  /**
   * <p>The name of the trust anchor.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The trust anchor type and its related certificate data.</p>
   * @public
   */
  source: Source | undefined;

  /**
   * <p>Specifies whether the trust anchor is enabled.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>Specifies whether the trust anchor checks certificate revocation status against CRL distribution points.</p>
   * @public
   */
  crlDpRevocationEnabled?: boolean | undefined;

  /**
   * <p>The tags to attach to the trust anchor.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>A list of notification settings to be associated to the trust anchor.</p>
   * @public
   */
  notificationSettings?: NotificationSetting[] | undefined;

  /**
   * <p>An alias for the trust anchor. When you set an alias, the response includes the alias ARN of the trust anchor in <code>aliasArn</code>.</p> <p>An alias name contains 1 to 256 characters. It must begin with a letter (A-Z or a-z). It can contain only letters (A-Z and a-z), numbers (0-9), underscores (_), hyphens (-), and forward slashes (/). A forward slash can appear only between two other characters, so an alias name can't end with a forward slash or contain two in a row. Alias names that begin with <code>aws/</code>, in any combination of uppercase and lowercase letters, are reserved. Alias names are case sensitive.</p> <p>The alias name must be unique among resources of the same type in your account and Region. If another resource of the same type already has the alias, the request fails with a <code>ValidationException</code>. An invalid or reserved alias name also causes a <code>ValidationException</code>.</p> <p>If you omit this parameter or specify an empty string, the resource is created without an alias.</p>
   * @public
   */
  aliasName?: string | undefined;
}

/**
 * <p>The state of a notification setting.</p> <p>A notification setting includes information such as event name, threshold, status of the notification setting, and the channel to notify.</p>
 * @public
 */
export interface NotificationSettingDetail {
  /**
   * <p>Indicates whether the notification setting is enabled.</p>
   * @public
   */
  enabled: boolean | undefined;

  /**
   * <p>The event to which this notification setting is applied.</p>
   * @public
   */
  event: NotificationEvent | undefined;

  /**
   * <p>The number of days before a notification event.</p>
   * @public
   */
  threshold?: number | undefined;

  /**
   * <p>The specified channel of notification. IAM Roles Anywhere uses CloudWatch metrics, EventBridge, and Health Dashboard to notify for an event.</p> <note> <p>In the absence of a specific channel, IAM Roles Anywhere applies this setting to 'ALL' channels.</p> </note>
   * @public
   */
  channel?: NotificationChannel | undefined;

  /**
   * <p>The principal that configured the notification setting. For default settings configured by IAM Roles Anywhere, the value is <code>rolesanywhere.amazonaws.com</code>, and for customized notifications settings, it is the respective account ID. </p>
   * @public
   */
  configuredBy?: string | undefined;
}

/**
 * <p>The state of the trust anchor after a read or write operation. </p>
 * @public
 */
export interface TrustAnchorDetail {
  /**
   * <p>The unique identifier of the trust anchor.</p>
   * @public
   */
  trustAnchorId?: string | undefined;

  /**
   * <p>The ARN of the trust anchor.</p>
   * @public
   */
  trustAnchorArn?: string | undefined;

  /**
   * <p>The name of the trust anchor.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The trust anchor type and its related certificate data.</p>
   * @public
   */
  source?: Source | undefined;

  /**
   * <p>Indicates whether the trust anchor is enabled.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>Specifies whether the trust anchor checks certificate revocation status against CRL distribution points.</p>
   * @public
   */
  crlDpRevocationEnabled?: boolean | undefined;

  /**
   * <p>The ISO-8601 timestamp when the trust anchor was created. </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The ISO-8601 timestamp when the trust anchor was last updated. </p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>A list of notification settings to be associated to the trust anchor.</p>
   * @public
   */
  notificationSettings?: NotificationSettingDetail[] | undefined;

  /**
   * <p>The alias of the trust anchor. Present only if the trust anchor has an alias.</p>
   * @public
   */
  aliasName?: string | undefined;

  /**
   * <p>The alias ARN of the trust anchor, in the form <code>arn:<i>partition</i>:rolesanywhere:<i>region</i>:<i>account</i>:alias/trust-anchor/<i>alias-name</i> </code>. Present only if the trust anchor has an alias.</p> <p>You can use the alias ARN in place of the resource ID or ARN in the request parameters whose descriptions say that they accept an alias ARN. Don't use the alias ARN in Identity and Access Management (IAM) policies. A policy statement that names an alias ARN doesn't apply to the resource that holds the alias. Write policies with the ARN that contains the resource ID instead.</p>
   * @public
   */
  aliasArn?: string | undefined;

  /**
   * <p>The alias that the resource had before the update request. IAM Roles Anywhere returns this value only in the response to an update request that changed or removed an existing alias. It isn't returned when the alias was unchanged, when the resource had no alias before the request, or by other operations.</p>
   * @public
   */
  previousAliasName?: string | undefined;
}

/**
 * @public
 */
export interface TrustAnchorDetailResponse {
  /**
   * <p>The state of the trust anchor after a read or write operation. </p>
   * @public
   */
  trustAnchor: TrustAnchorDetail | undefined;
}

/**
 * <p>A record of a presented X509 credential from a temporary credential request. </p>
 * @public
 */
export interface CredentialSummary {
  /**
   * <p>The ISO-8601 time stamp of when the certificate was last used in a temporary credential request.</p>
   * @public
   */
  seenAt?: Date | undefined;

  /**
   * <p>The serial number of the certificate.</p>
   * @public
   */
  serialNumber?: string | undefined;

  /**
   * <p>The fully qualified domain name of the issuing certificate for the presented end-entity certificate.</p>
   * @public
   */
  issuer?: string | undefined;

  /**
   * <p>Indicates whether the credential is enabled.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>The PEM-encoded data of the certificate.</p>
   * @public
   */
  x509CertificateData?: string | undefined;

  /**
   * <p>Indicates whether the temporary credential request was successful. </p>
   * @public
   */
  failed?: boolean | undefined;
}

/**
 * <p>The state of the certificate revocation list (CRL) after a read or write operation.</p>
 * @public
 */
export interface CrlDetail {
  /**
   * <p>The unique identifier of the certificate revocation list (CRL).</p>
   * @public
   */
  crlId?: string | undefined;

  /**
   * <p>The ARN of the certificate revocation list (CRL).</p>
   * @public
   */
  crlArn?: string | undefined;

  /**
   * <p>The name of the certificate revocation list (CRL).</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Indicates whether the certificate revocation list (CRL) is enabled.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>The state of the certificate revocation list (CRL) after a read or write operation.</p>
   * @public
   */
  crlData?: Uint8Array | undefined;

  /**
   * <p>The ARN of the TrustAnchor the certificate revocation list (CRL) will provide revocation for. </p>
   * @public
   */
  trustAnchorArn?: string | undefined;

  /**
   * <p>The ISO-8601 timestamp when the certificate revocation list (CRL) was created. </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The ISO-8601 timestamp when the certificate revocation list (CRL) was last updated. </p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The alias of the certificate revocation list (CRL). Present only if the CRL has an alias.</p>
   * @public
   */
  aliasName?: string | undefined;

  /**
   * <p>The alias ARN of the certificate revocation list (CRL), in the form <code>arn:<i>partition</i>:rolesanywhere:<i>region</i>:<i>account</i>:alias/crl/<i>alias-name</i> </code>. Present only if the CRL has an alias.</p> <p>You can use the alias ARN in place of the resource ID or ARN in the request parameters whose descriptions say that they accept an alias ARN. Don't use the alias ARN in Identity and Access Management (IAM) policies. A policy statement that names an alias ARN doesn't apply to the resource that holds the alias. Write policies with the ARN that contains the resource ID instead.</p>
   * @public
   */
  aliasArn?: string | undefined;

  /**
   * <p>The alias that the resource had before the update request. IAM Roles Anywhere returns this value only in the response to an update request that changed or removed an existing alias. It isn't returned when the alias was unchanged, when the resource had no alias before the request, or by other operations.</p>
   * @public
   */
  previousAliasName?: string | undefined;
}

/**
 * @public
 */
export interface CrlDetailResponse {
  /**
   * <p>The state of the certificate revocation list (CRL) after a read or write operation.</p>
   * @public
   */
  crl: CrlDetail | undefined;
}

/**
 * @public
 */
export interface ScalarCrlRequest {
  /**
   * <p>The certificate revocation list (CRL) to act on. You can specify one of the following:</p> <ul> <li> <p>The CRL ID.</p> </li> <li> <p>The CRL ARN.</p> </li> <li> <p>The alias ARN of the CRL.</p> </li> </ul> <p>An ARN must be for a CRL in your account and Region.</p>
   * @public
   */
  crlId: string | undefined;
}

/**
 * @public
 */
export interface ImportCrlRequest {
  /**
   * <p>The name of the certificate revocation list (CRL).</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The x509 v3 specified certificate revocation list (CRL).</p>
   * @public
   */
  crlData: Uint8Array | undefined;

  /**
   * <p>Specifies whether the certificate revocation list (CRL) is enabled.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>A list of tags to attach to the certificate revocation list (CRL).</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The ARN of the trust anchor that the certificate revocation list (CRL) provides revocation for. Specify the trust anchor ARN that contains the trust anchor ID. This parameter doesn't support alias ARNs. If you specify an alias ARN, the request fails with <code>ResourceNotFoundException</code>.</p>
   * @public
   */
  trustAnchorArn: string | undefined;

  /**
   * <p>An alias for the certificate revocation list (CRL). When you set an alias, the response includes the alias ARN of the CRL in <code>aliasArn</code>.</p> <p>An alias name contains 1 to 256 characters. It must begin with a letter (A-Z or a-z). It can contain only letters (A-Z and a-z), numbers (0-9), underscores (_), hyphens (-), and forward slashes (/). A forward slash can appear only between two other characters, so an alias name can't end with a forward slash or contain two in a row. Alias names that begin with <code>aws/</code>, in any combination of uppercase and lowercase letters, are reserved. Alias names are case sensitive.</p> <p>The alias name must be unique among resources of the same type in your account and Region. If another resource of the same type already has the alias, the request fails with a <code>ValidationException</code>. An invalid or reserved alias name also causes a <code>ValidationException</code>.</p> <p>If you omit this parameter or specify an empty string, the resource is created without an alias.</p>
   * @public
   */
  aliasName?: string | undefined;
}

/**
 * @public
 */
export interface ListCrlsResponse {
  /**
   * <p>A token that indicates where the output should continue from, if a previous request did not show all results. To get the next results, make the request again with this value.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of certificate revocation lists (CRL). </p>
   * @public
   */
  crls?: CrlDetail[] | undefined;
}

/**
 * @public
 */
export interface ListRequest {
  /**
   * <p>A token that indicates where the output should continue from, if a previous request did not show all results. To get the next results, make the request again with this value.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The number of resources in the paginated list. </p>
   * @public
   */
  pageSize?: number | undefined;
}

/**
 * @public
 */
export interface UpdateCrlRequest {
  /**
   * <p>The certificate revocation list (CRL) to act on. You can specify one of the following:</p> <ul> <li> <p>The CRL ID.</p> </li> <li> <p>The CRL ARN.</p> </li> <li> <p>The alias ARN of the CRL.</p> </li> </ul> <p>An ARN must be for a CRL in your account and Region.</p>
   * @public
   */
  crlId: string | undefined;

  /**
   * <p>The name of the Crl.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The x509 v3 specified certificate revocation list (CRL).</p>
   * @public
   */
  crlData?: Uint8Array | undefined;

  /**
   * <p>The alias for the certificate revocation list (CRL).</p> <p>You can use this parameter in the following ways:</p> <ul> <li> <p>To set or change the alias, specify the new alias name. After the change, the previous alias ARN no longer identifies the resource. You can then assign the previous alias to another resource of the same type. A change can take a short time to take effect for requests that use an alias ARN.</p> </li> <li> <p>To remove the alias, specify an empty string.</p> </li> <li> <p>To keep the current alias, omit this parameter.</p> </li> </ul> <p>An alias name contains 1 to 256 characters. It must begin with a letter (A-Z or a-z). It can contain only letters (A-Z and a-z), numbers (0-9), underscores (_), hyphens (-), and forward slashes (/). A forward slash can appear only between two other characters, so an alias name can't end with a forward slash or contain two in a row. Alias names that begin with <code>aws/</code>, in any combination of uppercase and lowercase letters, are reserved. Alias names are case sensitive.</p> <p>The alias name must be unique among resources of the same type in your account and Region. If another resource of the same type already has the alias, the request fails with a <code>ValidationException</code>. An invalid or reserved alias name also causes a <code>ValidationException</code>.</p>
   * @public
   */
  aliasName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAttributeMappingRequest {
  /**
   * <p>The profile to act on. You can specify one of the following:</p> <ul> <li> <p>The profile ID.</p> </li> <li> <p>The profile ARN.</p> </li> <li> <p>The alias ARN of the profile.</p> </li> </ul> <p>An ARN must be for a profile in your account and Region.</p>
   * @public
   */
  profileId: string | undefined;

  /**
   * <p>Fields (x509Subject, x509Issuer and x509SAN) within X.509 certificates.</p>
   * @public
   */
  certificateField: CertificateField | undefined;

  /**
   * <p>A list of specifiers of a certificate field; for example, CN, OU, UID from a Subject.</p>
   * @public
   */
  specifiers?: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteAttributeMappingResponse {
  /**
   * <p>The state of the profile after a read or write operation.</p>
   * @public
   */
  profile: ProfileDetail | undefined;
}

/**
 * @public
 */
export interface ScalarProfileRequest {
  /**
   * <p>The profile to act on. You can specify one of the following:</p> <ul> <li> <p>The profile ID.</p> </li> <li> <p>The profile ARN.</p> </li> <li> <p>The alias ARN of the profile.</p> </li> </ul> <p>An ARN must be for a profile in your account and Region.</p>
   * @public
   */
  profileId: string | undefined;
}

/**
 * @public
 */
export interface ScalarTrustAnchorRequest {
  /**
   * <p>The trust anchor to act on. You can specify one of the following:</p> <ul> <li> <p>The trust anchor ID.</p> </li> <li> <p>The trust anchor ARN.</p> </li> <li> <p>The alias ARN of the trust anchor.</p> </li> </ul> <p>An ARN must be for a trust anchor in your account and Region.</p>
   * @public
   */
  trustAnchorId: string | undefined;
}

/**
 * @public
 */
export interface ScalarSubjectRequest {
  /**
   * <p>The unique identifier of the subject. </p>
   * @public
   */
  subjectId: string | undefined;
}

/**
 * <p>A key-value pair you set that identifies a property of the authenticating instance.</p>
 * @public
 */
export interface InstanceProperty {
  /**
   * <p>The ISO-8601 time stamp of when the certificate was last used in a temporary credential request.</p>
   * @public
   */
  seenAt?: Date | undefined;

  /**
   * <p>A list of instanceProperty objects. </p>
   * @public
   */
  properties?: Record<string, string> | undefined;

  /**
   * <p>Indicates whether the temporary credential request was successful. </p>
   * @public
   */
  failed?: boolean | undefined;
}

/**
 * <p>The state of the subject after a read or write operation.</p>
 * @public
 */
export interface SubjectDetail {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  subjectArn?: string | undefined;

  /**
   * <p>The id of the resource</p>
   * @public
   */
  subjectId?: string | undefined;

  /**
   * <p>The enabled status of the subject.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>The x509 principal identifier of the authenticating certificate.</p>
   * @public
   */
  x509Subject?: string | undefined;

  /**
   * <p>The ISO-8601 timestamp of the last time this subject requested temporary session credentials.</p>
   * @public
   */
  lastSeenAt?: Date | undefined;

  /**
   * <p>The ISO-8601 timestamp when the subject was created. </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The ISO-8601 timestamp when the subject was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The temporary session credentials vended at the last authenticating call with this subject.</p>
   * @public
   */
  credentials?: CredentialSummary[] | undefined;

  /**
   * <p>The specified instance properties associated with the request.</p>
   * @public
   */
  instanceProperties?: InstanceProperty[] | undefined;
}

/**
 * @public
 */
export interface SubjectDetailResponse {
  /**
   * <p>The state of the subject after a read or write operation.</p>
   * @public
   */
  subject?: SubjectDetail | undefined;
}

/**
 * @public
 */
export interface ListProfilesResponse {
  /**
   * <p>A token that indicates where the output should continue from, if a previous request did not show all results. To get the next results, make the request again with this value.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of profiles.</p>
   * @public
   */
  profiles?: ProfileDetail[] | undefined;
}

/**
 * <p>A summary representation of subjects.</p>
 * @public
 */
export interface SubjectSummary {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  subjectArn?: string | undefined;

  /**
   * <p>The id of the resource.</p>
   * @public
   */
  subjectId?: string | undefined;

  /**
   * <p>The enabled status of the subject. </p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>The x509 principal identifier of the authenticating certificate.</p>
   * @public
   */
  x509Subject?: string | undefined;

  /**
   * <p>The ISO-8601 time stamp of when the certificate was last used in a temporary credential request.</p>
   * @public
   */
  lastSeenAt?: Date | undefined;

  /**
   * <p>The ISO-8601 time stamp of when the certificate was first used in a temporary credential request.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The ISO-8601 timestamp when the subject was last updated. </p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListSubjectsResponse {
  /**
   * <p>A list of subjects.</p>
   * @public
   */
  subjects?: SubjectSummary[] | undefined;

  /**
   * <p>A token that indicates where the output should continue from, if a previous request did not show all results. To get the next results, make the request again with this value.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tags attached to the resource.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListTrustAnchorsResponse {
  /**
   * <p>A token that indicates where the output should continue from, if a previous request did not show all results. To get the next results, make the request again with this value.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of trust anchors.</p>
   * @public
   */
  trustAnchors?: TrustAnchorDetail[] | undefined;
}

/**
 * <p>A notification setting key to reset. A notification setting key includes the event and the channel. </p>
 * @public
 */
export interface NotificationSettingKey {
  /**
   * <p>The notification setting event to reset.</p>
   * @public
   */
  event: NotificationEvent | undefined;

  /**
   * <p>The specified channel of notification.</p>
   * @public
   */
  channel?: NotificationChannel | undefined;
}

/**
 * @public
 */
export interface PutAttributeMappingRequest {
  /**
   * <p>The profile to act on. You can specify one of the following:</p> <ul> <li> <p>The profile ID.</p> </li> <li> <p>The profile ARN.</p> </li> <li> <p>The alias ARN of the profile.</p> </li> </ul> <p>An ARN must be for a profile in your account and Region.</p>
   * @public
   */
  profileId: string | undefined;

  /**
   * <p>Fields (x509Subject, x509Issuer and x509SAN) within X.509 certificates.</p>
   * @public
   */
  certificateField: CertificateField | undefined;

  /**
   * <p>A list of mapping entries for every supported specifier or sub-field.</p>
   * @public
   */
  mappingRules: MappingRule[] | undefined;
}

/**
 * @public
 */
export interface PutAttributeMappingResponse {
  /**
   * <p>The state of the profile after a read or write operation.</p>
   * @public
   */
  profile: ProfileDetail | undefined;
}

/**
 * @public
 */
export interface UpdateProfileRequest {
  /**
   * <p>The profile to act on. You can specify one of the following:</p> <ul> <li> <p>The profile ID.</p> </li> <li> <p>The profile ARN.</p> </li> <li> <p>The alias ARN of the profile.</p> </li> </ul> <p>An ARN must be for a profile in your account and Region.</p>
   * @public
   */
  profileId: string | undefined;

  /**
   * <p>The name of the profile.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A session policy that applies to the trust boundary of the vended session credentials. </p>
   * @public
   */
  sessionPolicy?: string | undefined;

  /**
   * <p>A list of IAM roles that this profile can assume in a temporary credential request.</p>
   * @public
   */
  roleArns?: string[] | undefined;

  /**
   * <p>A list of managed policy ARNs that apply to the vended session credentials. </p>
   * @public
   */
  managedPolicyArns?: string[] | undefined;

  /**
   * <p> Used to determine how long sessions vended using this profile are valid for. See the <code>Expiration</code> section of the <a href="https://docs.aws.amazon.com/rolesanywhere/latest/userguide/authentication-create-session.html#credentials-object">CreateSession API documentation</a> page for more details. In requests, if this value is not provided, the default value will be 3600. </p>
   * @public
   */
  durationSeconds?: number | undefined;

  /**
   * <p>Used to determine if a custom role session name will be accepted in a temporary credential request.</p>
   * @public
   */
  acceptRoleSessionName?: boolean | undefined;

  /**
   * <p>The alias for the profile.</p> <p>You can use this parameter in the following ways:</p> <ul> <li> <p>To set or change the alias, specify the new alias name. After the change, the previous alias ARN no longer identifies the resource. You can then assign the previous alias to another resource of the same type. A change can take a short time to take effect for requests that use an alias ARN.</p> </li> <li> <p>To remove the alias, specify an empty string.</p> </li> <li> <p>To keep the current alias, omit this parameter.</p> </li> </ul> <p>An alias name contains 1 to 256 characters. It must begin with a letter (A-Z or a-z). It can contain only letters (A-Z and a-z), numbers (0-9), underscores (_), hyphens (-), and forward slashes (/). A forward slash can appear only between two other characters, so an alias name can't end with a forward slash or contain two in a row. Alias names that begin with <code>aws/</code>, in any combination of uppercase and lowercase letters, are reserved. Alias names are case sensitive.</p> <p>The alias name must be unique among resources of the same type in your account and Region. If another resource of the same type already has the alias, the request fails with a <code>ValidationException</code>. An invalid or reserved alias name also causes a <code>ValidationException</code>.</p>
   * @public
   */
  aliasName?: string | undefined;
}

/**
 * @public
 */
export interface PutNotificationSettingsRequest {
  /**
   * <p>The unique identifier of the trust anchor.</p>
   * @public
   */
  trustAnchorId: string | undefined;

  /**
   * <p>A list of notification settings to be associated to the trust anchor.</p>
   * @public
   */
  notificationSettings: NotificationSetting[] | undefined;
}

/**
 * @public
 */
export interface PutNotificationSettingsResponse {
  /**
   * <p>The state of the trust anchor after a read or write operation. </p>
   * @public
   */
  trustAnchor: TrustAnchorDetail | undefined;
}

/**
 * @public
 */
export interface ResetNotificationSettingsRequest {
  /**
   * <p>The unique identifier of the trust anchor.</p>
   * @public
   */
  trustAnchorId: string | undefined;

  /**
   * <p>A list of notification setting keys to reset. A notification setting key includes the event and the channel. </p>
   * @public
   */
  notificationSettingKeys: NotificationSettingKey[] | undefined;
}

/**
 * @public
 */
export interface ResetNotificationSettingsResponse {
  /**
   * <p>The state of the trust anchor after a read or write operation. </p>
   * @public
   */
  trustAnchor: TrustAnchorDetail | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to attach to the resource.</p>
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UpdateTrustAnchorRequest {
  /**
   * <p>The trust anchor to act on. You can specify one of the following:</p> <ul> <li> <p>The trust anchor ID.</p> </li> <li> <p>The trust anchor ARN.</p> </li> <li> <p>The alias ARN of the trust anchor.</p> </li> </ul> <p>An ARN must be for a trust anchor in your account and Region.</p>
   * @public
   */
  trustAnchorId: string | undefined;

  /**
   * <p>The name of the trust anchor.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The trust anchor type and its related certificate data.</p>
   * @public
   */
  source?: Source | undefined;

  /**
   * <p>Specifies whether the trust anchor checks certificate revocation status against CRL distribution points.</p>
   * @public
   */
  crlDpRevocationEnabled?: boolean | undefined;

  /**
   * <p>The alias for the trust anchor.</p> <p>You can use this parameter in the following ways:</p> <ul> <li> <p>To set or change the alias, specify the new alias name. After the change, the previous alias ARN no longer identifies the resource. You can then assign the previous alias to another resource of the same type. A change can take a short time to take effect for requests that use an alias ARN.</p> </li> <li> <p>To remove the alias, specify an empty string.</p> </li> <li> <p>To keep the current alias, omit this parameter.</p> </li> </ul> <p>An alias name contains 1 to 256 characters. It must begin with a letter (A-Z or a-z). It can contain only letters (A-Z and a-z), numbers (0-9), underscores (_), hyphens (-), and forward slashes (/). A forward slash can appear only between two other characters, so an alias name can't end with a forward slash or contain two in a row. Alias names that begin with <code>aws/</code>, in any combination of uppercase and lowercase letters, are reserved. Alias names are case sensitive.</p> <p>The alias name must be unique among resources of the same type in your account and Region. If another resource of the same type already has the alias, the request fails with a <code>ValidationException</code>. An invalid or reserved alias name also causes a <code>ValidationException</code>.</p>
   * @public
   */
  aliasName?: string | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of keys. Tag keys are the unique identifiers of tags. </p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
