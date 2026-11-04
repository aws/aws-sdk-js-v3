// smithy-typescript generated code
import type { CertificateField, NotificationChannel, NotificationEvent, TrustAnchorType } from "./enums";

/**
 * A single mapping entry for each supported specifier or sub-field.
 *
 * @public
 */
export interface MappingRule {
  /**
   * Specifier within a certificate field, such as CN, OU, or UID from the Subject field.
   *
   * @public
   */
  specifier: string | undefined;
}

/**
 * A mapping applied to the authenticating end-entity certificate.
 *
 * @public
 */
export interface AttributeMapping {
  /**
   * Fields (x509Subject, x509Issuer and x509SAN) within X.509 certificates.
   *
   * @public
   */
  certificateField?: CertificateField | undefined;

  /**
   * A list of mapping entries for every supported specifier or sub-field.
   *
   * @public
   */
  mappingRules?: MappingRule[] | undefined;
}

/**
 * A label that consists of a key and value you define.
 *
 * @public
 */
export interface Tag {
  /**
   * The tag key.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The tag value.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateProfileRequest {
  /**
   * The name of the profile.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Unused, saved for future use. Will likely specify whether instance properties are required in temporary credential requests with this profile.
   *
   * @public
   */
  requireInstanceProperties?: boolean | undefined;

  /**
   * A session policy that applies to the trust boundary of the vended session credentials.
   *
   * @public
   */
  sessionPolicy?: string | undefined;

  /**
   * A list of IAM roles that this profile can assume in a temporary credential request.
   *
   * @public
   */
  roleArns: string[] | undefined;

  /**
   * A list of managed policy ARNs that apply to the vended session credentials.
   *
   * @public
   */
  managedPolicyArns?: string[] | undefined;

  /**
   * Used to determine how long sessions vended using this profile are valid for. See the `Expiration` section of the [CreateSession API documentation](https://docs.aws.amazon.com/rolesanywhere/latest/userguide/authentication-create-session.html#credentials-object) page for more details. In requests, if this value is not provided, the default value will be 3600.
   *
   * @public
   */
  durationSeconds?: number | undefined;

  /**
   * Specifies whether the profile is enabled.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The tags to attach to the profile.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Used to determine if a custom role session name will be accepted in a temporary credential request.
   *
   * @public
   */
  acceptRoleSessionName?: boolean | undefined;
}

/**
 * The state of the profile after a read or write operation.
 *
 * @public
 */
export interface ProfileDetail {
  /**
   * The unique identifier of the profile.
   *
   * @public
   */
  profileId?: string | undefined;

  /**
   * The ARN of the profile.
   *
   * @public
   */
  profileArn?: string | undefined;

  /**
   * The name of the profile.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Unused, saved for future use. Will likely specify whether instance properties are required in temporary credential requests with this profile.
   *
   * @public
   */
  requireInstanceProperties?: boolean | undefined;

  /**
   * Indicates whether the profile is enabled.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The Amazon Web Services account that created the profile.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * A session policy that applies to the trust boundary of the vended session credentials.
   *
   * @public
   */
  sessionPolicy?: string | undefined;

  /**
   * A list of IAM roles that this profile can assume in a temporary credential request.
   *
   * @public
   */
  roleArns?: string[] | undefined;

  /**
   * A list of managed policy ARNs that apply to the vended session credentials.
   *
   * @public
   */
  managedPolicyArns?: string[] | undefined;

  /**
   * The ISO-8601 timestamp when the profile was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The ISO-8601 timestamp when the profile was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * Used to determine how long sessions vended using this profile are valid for. See the `Expiration` section of the [CreateSession API documentation](https://docs.aws.amazon.com/rolesanywhere/latest/userguide/authentication-create-session.html#credentials-object) page for more details. In requests, if this value is not provided, the default value will be 3600.
   *
   * @public
   */
  durationSeconds?: number | undefined;

  /**
   * Used to determine if a custom role session name will be accepted in a temporary credential request.
   *
   * @public
   */
  acceptRoleSessionName?: boolean | undefined;

  /**
   * A mapping applied to the authenticating end-entity certificate.
   *
   * @public
   */
  attributeMappings?: AttributeMapping[] | undefined;
}

/**
 * @public
 */
export interface ProfileDetailResponse {
  /**
   * The state of the profile after a read or write operation.
   *
   * @public
   */
  profile?: ProfileDetail | undefined;
}

/**
 * Customizable notification settings that will be applied to notification events. IAM Roles Anywhere consumes these settings while notifying across multiple channels - CloudWatch metrics, EventBridge, and Health Dashboard.
 *
 * @public
 */
export interface NotificationSetting {
  /**
   * Indicates whether the notification setting is enabled.
   *
   * @public
   */
  enabled: boolean | undefined;

  /**
   * The event to which this notification setting is applied.
   *
   * @public
   */
  event: NotificationEvent | undefined;

  /**
   * The number of days before a notification event. This value is required for a notification setting that is enabled.
   *
   * @public
   */
  threshold?: number | undefined;

  /**
   * The specified channel of notification. IAM Roles Anywhere uses CloudWatch metrics, EventBridge, and Health Dashboard to notify for an event.
   *
   * > **Note:** In the absence of a specific channel, IAM Roles Anywhere applies this setting to 'ALL' channels.
   *
   * @public
   */
  channel?: NotificationChannel | undefined;
}

/**
 * The data field of the trust anchor depending on its type.
 *
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
   * The PEM-encoded data for the certificate anchor. Included for trust anchors of type `CERTIFICATE_BUNDLE`.
   *
   * @public
   */
  export interface X509CertificateDataMember {
    x509CertificateData: string;
    acmPcaArn?: never;
    $unknown?: never;
  }

  /**
   * The root certificate of the Private Certificate Authority specified by this ARN is used in trust validation for temporary credential requests. Included for trust anchors of type `AWS_ACM_PCA`.
   *
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
 * The trust anchor type and its related certificate data.
 *
 * @public
 */
export interface Source {
  /**
   * The type of the trust anchor.
   *
   * @public
   */
  sourceType?: TrustAnchorType | undefined;

  /**
   * The data field of the trust anchor depending on its type.
   *
   * @public
   */
  sourceData?: SourceData | undefined;
}

/**
 * @public
 */
export interface CreateTrustAnchorRequest {
  /**
   * The name of the trust anchor.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The trust anchor type and its related certificate data.
   *
   * @public
   */
  source: Source | undefined;

  /**
   * Specifies whether the trust anchor is enabled.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The tags to attach to the trust anchor.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * A list of notification settings to be associated to the trust anchor.
   *
   * @public
   */
  notificationSettings?: NotificationSetting[] | undefined;
}

/**
 * The state of a notification setting.
 *
 * A notification setting includes information such as event name, threshold, status of the notification setting, and the channel to notify.
 *
 * @public
 */
export interface NotificationSettingDetail {
  /**
   * Indicates whether the notification setting is enabled.
   *
   * @public
   */
  enabled: boolean | undefined;

  /**
   * The event to which this notification setting is applied.
   *
   * @public
   */
  event: NotificationEvent | undefined;

  /**
   * The number of days before a notification event.
   *
   * @public
   */
  threshold?: number | undefined;

  /**
   * The specified channel of notification. IAM Roles Anywhere uses CloudWatch metrics, EventBridge, and Health Dashboard to notify for an event.
   *
   * > **Note:** In the absence of a specific channel, IAM Roles Anywhere applies this setting to 'ALL' channels.
   *
   * @public
   */
  channel?: NotificationChannel | undefined;

  /**
   * The principal that configured the notification setting. For default settings configured by IAM Roles Anywhere, the value is `rolesanywhere.amazonaws.com`, and for customized notifications settings, it is the respective account ID.
   *
   * @public
   */
  configuredBy?: string | undefined;
}

/**
 * The state of the trust anchor after a read or write operation.
 *
 * @public
 */
export interface TrustAnchorDetail {
  /**
   * The unique identifier of the trust anchor.
   *
   * @public
   */
  trustAnchorId?: string | undefined;

  /**
   * The ARN of the trust anchor.
   *
   * @public
   */
  trustAnchorArn?: string | undefined;

  /**
   * The name of the trust anchor.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The trust anchor type and its related certificate data.
   *
   * @public
   */
  source?: Source | undefined;

  /**
   * Indicates whether the trust anchor is enabled.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The ISO-8601 timestamp when the trust anchor was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The ISO-8601 timestamp when the trust anchor was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * A list of notification settings to be associated to the trust anchor.
   *
   * @public
   */
  notificationSettings?: NotificationSettingDetail[] | undefined;
}

/**
 * @public
 */
export interface TrustAnchorDetailResponse {
  /**
   * The state of the trust anchor after a read or write operation.
   *
   * @public
   */
  trustAnchor: TrustAnchorDetail | undefined;
}

/**
 * A record of a presented X509 credential from a temporary credential request.
 *
 * @public
 */
export interface CredentialSummary {
  /**
   * The ISO-8601 time stamp of when the certificate was last used in a temporary credential request.
   *
   * @public
   */
  seenAt?: Date | undefined;

  /**
   * The serial number of the certificate.
   *
   * @public
   */
  serialNumber?: string | undefined;

  /**
   * The fully qualified domain name of the issuing certificate for the presented end-entity certificate.
   *
   * @public
   */
  issuer?: string | undefined;

  /**
   * Indicates whether the credential is enabled.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The PEM-encoded data of the certificate.
   *
   * @public
   */
  x509CertificateData?: string | undefined;

  /**
   * Indicates whether the temporary credential request was successful.
   *
   * @public
   */
  failed?: boolean | undefined;
}

/**
 * The state of the certificate revocation list (CRL) after a read or write operation.
 *
 * @public
 */
export interface CrlDetail {
  /**
   * The unique identifier of the certificate revocation list (CRL).
   *
   * @public
   */
  crlId?: string | undefined;

  /**
   * The ARN of the certificate revocation list (CRL).
   *
   * @public
   */
  crlArn?: string | undefined;

  /**
   * The name of the certificate revocation list (CRL).
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Indicates whether the certificate revocation list (CRL) is enabled.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The state of the certificate revocation list (CRL) after a read or write operation.
   *
   * @public
   */
  crlData?: Uint8Array | undefined;

  /**
   * The ARN of the TrustAnchor the certificate revocation list (CRL) will provide revocation for.
   *
   * @public
   */
  trustAnchorArn?: string | undefined;

  /**
   * The ISO-8601 timestamp when the certificate revocation list (CRL) was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The ISO-8601 timestamp when the certificate revocation list (CRL) was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CrlDetailResponse {
  /**
   * The state of the certificate revocation list (CRL) after a read or write operation.
   *
   * @public
   */
  crl: CrlDetail | undefined;
}

/**
 * @public
 */
export interface ScalarCrlRequest {
  /**
   * The unique identifier of the certificate revocation list (CRL).
   *
   * @public
   */
  crlId: string | undefined;
}

/**
 * @public
 */
export interface ImportCrlRequest {
  /**
   * The name of the certificate revocation list (CRL).
   *
   * @public
   */
  name: string | undefined;

  /**
   * The x509 v3 specified certificate revocation list (CRL).
   *
   * @public
   */
  crlData: Uint8Array | undefined;

  /**
   * Specifies whether the certificate revocation list (CRL) is enabled.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * A list of tags to attach to the certificate revocation list (CRL).
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The ARN of the TrustAnchor the certificate revocation list (CRL) will provide revocation for.
   *
   * @public
   */
  trustAnchorArn: string | undefined;
}

/**
 * @public
 */
export interface ListCrlsResponse {
  /**
   * A token that indicates where the output should continue from, if a previous request did not show all results. To get the next results, make the request again with this value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of certificate revocation lists (CRL).
   *
   * @public
   */
  crls?: CrlDetail[] | undefined;
}

/**
 * @public
 */
export interface ListRequest {
  /**
   * A token that indicates where the output should continue from, if a previous request did not show all results. To get the next results, make the request again with this value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The number of resources in the paginated list.
   *
   * @public
   */
  pageSize?: number | undefined;
}

/**
 * @public
 */
export interface UpdateCrlRequest {
  /**
   * The unique identifier of the certificate revocation list (CRL).
   *
   * @public
   */
  crlId: string | undefined;

  /**
   * The name of the Crl.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The x509 v3 specified certificate revocation list (CRL).
   *
   * @public
   */
  crlData?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface DeleteAttributeMappingRequest {
  /**
   * The unique identifier of the profile.
   *
   * @public
   */
  profileId: string | undefined;

  /**
   * Fields (x509Subject, x509Issuer and x509SAN) within X.509 certificates.
   *
   * @public
   */
  certificateField: CertificateField | undefined;

  /**
   * A list of specifiers of a certificate field; for example, CN, OU, UID from a Subject.
   *
   * @public
   */
  specifiers?: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteAttributeMappingResponse {
  /**
   * The state of the profile after a read or write operation.
   *
   * @public
   */
  profile: ProfileDetail | undefined;
}

/**
 * @public
 */
export interface ScalarProfileRequest {
  /**
   * The unique identifier of the profile.
   *
   * @public
   */
  profileId: string | undefined;
}

/**
 * @public
 */
export interface ScalarTrustAnchorRequest {
  /**
   * The unique identifier of the trust anchor.
   *
   * @public
   */
  trustAnchorId: string | undefined;
}

/**
 * @public
 */
export interface ScalarSubjectRequest {
  /**
   * The unique identifier of the subject.
   *
   * @public
   */
  subjectId: string | undefined;
}

/**
 * A key-value pair you set that identifies a property of the authenticating instance.
 *
 * @public
 */
export interface InstanceProperty {
  /**
   * The ISO-8601 time stamp of when the certificate was last used in a temporary credential request.
   *
   * @public
   */
  seenAt?: Date | undefined;

  /**
   * A list of instanceProperty objects.
   *
   * @public
   */
  properties?: Record<string, string> | undefined;

  /**
   * Indicates whether the temporary credential request was successful.
   *
   * @public
   */
  failed?: boolean | undefined;
}

/**
 * The state of the subject after a read or write operation.
 *
 * @public
 */
export interface SubjectDetail {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  subjectArn?: string | undefined;

  /**
   * The id of the resource
   *
   * @public
   */
  subjectId?: string | undefined;

  /**
   * The enabled status of the subject.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The x509 principal identifier of the authenticating certificate.
   *
   * @public
   */
  x509Subject?: string | undefined;

  /**
   * The ISO-8601 timestamp of the last time this subject requested temporary session credentials.
   *
   * @public
   */
  lastSeenAt?: Date | undefined;

  /**
   * The ISO-8601 timestamp when the subject was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The ISO-8601 timestamp when the subject was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The temporary session credentials vended at the last authenticating call with this subject.
   *
   * @public
   */
  credentials?: CredentialSummary[] | undefined;

  /**
   * The specified instance properties associated with the request.
   *
   * @public
   */
  instanceProperties?: InstanceProperty[] | undefined;
}

/**
 * @public
 */
export interface SubjectDetailResponse {
  /**
   * The state of the subject after a read or write operation.
   *
   * @public
   */
  subject?: SubjectDetail | undefined;
}

/**
 * @public
 */
export interface ListProfilesResponse {
  /**
   * A token that indicates where the output should continue from, if a previous request did not show all results. To get the next results, make the request again with this value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of profiles.
   *
   * @public
   */
  profiles?: ProfileDetail[] | undefined;
}

/**
 * A summary representation of subjects.
 *
 * @public
 */
export interface SubjectSummary {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  subjectArn?: string | undefined;

  /**
   * The id of the resource.
   *
   * @public
   */
  subjectId?: string | undefined;

  /**
   * The enabled status of the subject.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The x509 principal identifier of the authenticating certificate.
   *
   * @public
   */
  x509Subject?: string | undefined;

  /**
   * The ISO-8601 time stamp of when the certificate was last used in a temporary credential request.
   *
   * @public
   */
  lastSeenAt?: Date | undefined;

  /**
   * The ISO-8601 time stamp of when the certificate was first used in a temporary credential request.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The ISO-8601 timestamp when the subject was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListSubjectsResponse {
  /**
   * A list of subjects.
   *
   * @public
   */
  subjects?: SubjectSummary[] | undefined;

  /**
   * A token that indicates where the output should continue from, if a previous request did not show all results. To get the next results, make the request again with this value.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A list of tags attached to the resource.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListTrustAnchorsResponse {
  /**
   * A token that indicates where the output should continue from, if a previous request did not show all results. To get the next results, make the request again with this value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of trust anchors.
   *
   * @public
   */
  trustAnchors?: TrustAnchorDetail[] | undefined;
}

/**
 * A notification setting key to reset. A notification setting key includes the event and the channel.
 *
 * @public
 */
export interface NotificationSettingKey {
  /**
   * The notification setting event to reset.
   *
   * @public
   */
  event: NotificationEvent | undefined;

  /**
   * The specified channel of notification.
   *
   * @public
   */
  channel?: NotificationChannel | undefined;
}

/**
 * @public
 */
export interface PutAttributeMappingRequest {
  /**
   * The unique identifier of the profile.
   *
   * @public
   */
  profileId: string | undefined;

  /**
   * Fields (x509Subject, x509Issuer and x509SAN) within X.509 certificates.
   *
   * @public
   */
  certificateField: CertificateField | undefined;

  /**
   * A list of mapping entries for every supported specifier or sub-field.
   *
   * @public
   */
  mappingRules: MappingRule[] | undefined;
}

/**
 * @public
 */
export interface PutAttributeMappingResponse {
  /**
   * The state of the profile after a read or write operation.
   *
   * @public
   */
  profile: ProfileDetail | undefined;
}

/**
 * @public
 */
export interface UpdateProfileRequest {
  /**
   * The unique identifier of the profile.
   *
   * @public
   */
  profileId: string | undefined;

  /**
   * The name of the profile.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A session policy that applies to the trust boundary of the vended session credentials.
   *
   * @public
   */
  sessionPolicy?: string | undefined;

  /**
   * A list of IAM roles that this profile can assume in a temporary credential request.
   *
   * @public
   */
  roleArns?: string[] | undefined;

  /**
   * A list of managed policy ARNs that apply to the vended session credentials.
   *
   * @public
   */
  managedPolicyArns?: string[] | undefined;

  /**
   * Used to determine how long sessions vended using this profile are valid for. See the `Expiration` section of the [CreateSession API documentation](https://docs.aws.amazon.com/rolesanywhere/latest/userguide/authentication-create-session.html#credentials-object) page for more details. In requests, if this value is not provided, the default value will be 3600.
   *
   * @public
   */
  durationSeconds?: number | undefined;

  /**
   * Used to determine if a custom role session name will be accepted in a temporary credential request.
   *
   * @public
   */
  acceptRoleSessionName?: boolean | undefined;
}

/**
 * @public
 */
export interface PutNotificationSettingsRequest {
  /**
   * The unique identifier of the trust anchor.
   *
   * @public
   */
  trustAnchorId: string | undefined;

  /**
   * A list of notification settings to be associated to the trust anchor.
   *
   * @public
   */
  notificationSettings: NotificationSetting[] | undefined;
}

/**
 * @public
 */
export interface PutNotificationSettingsResponse {
  /**
   * The state of the trust anchor after a read or write operation.
   *
   * @public
   */
  trustAnchor: TrustAnchorDetail | undefined;
}

/**
 * @public
 */
export interface ResetNotificationSettingsRequest {
  /**
   * The unique identifier of the trust anchor.
   *
   * @public
   */
  trustAnchorId: string | undefined;

  /**
   * A list of notification setting keys to reset. A notification setting key includes the event and the channel.
   *
   * @public
   */
  notificationSettingKeys: NotificationSettingKey[] | undefined;
}

/**
 * @public
 */
export interface ResetNotificationSettingsResponse {
  /**
   * The state of the trust anchor after a read or write operation.
   *
   * @public
   */
  trustAnchor: TrustAnchorDetail | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags to attach to the resource.
   *
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
   * The unique identifier of the trust anchor.
   *
   * @public
   */
  trustAnchorId: string | undefined;

  /**
   * The name of the trust anchor.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The trust anchor type and its related certificate data.
   *
   * @public
   */
  source?: Source | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of keys. Tag keys are the unique identifiers of tags.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
