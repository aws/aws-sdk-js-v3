// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { RolesAnywhereServiceException as __BaseException } from "./RolesAnywhereServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * @public
 * <p>A label that consists of a key and value you define. </p>
 */
export interface Tag {
  /**
   * <p>The tag key.</p>
   */
  key: string | undefined;

  /**
   * <p>The tag value.</p>
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateProfileRequest {
  /**
   * <p>The name of the profile.</p>
   */
  name: string | undefined;

  /**
   * <p>Specifies whether instance properties are required in temporary credential requests with this profile. </p>
   */
  requireInstanceProperties?: boolean;

  /**
   * <p>A session policy that applies to the trust boundary of the vended session credentials. </p>
   */
  sessionPolicy?: string;

  /**
   * <p>A list of IAM roles that this profile can assume in a temporary credential request.</p>
   */
  roleArns: string[] | undefined;

  /**
   * <p>A list of managed policy ARNs that apply to the vended session credentials. </p>
   */
  managedPolicyArns?: string[];

  /**
   * <p> The number of seconds the vended session credentials are valid for. </p>
   */
  durationSeconds?: number;

  /**
   * <p>Specifies whether the profile is enabled.</p>
   */
  enabled?: boolean;

  /**
   * <p>The tags to attach to the profile.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 * <p>The state of the profile after a read or write operation.</p>
 */
export interface ProfileDetail {
  /**
   * <p>The unique identifier of the profile.</p>
   */
  profileId?: string;

  /**
   * <p>The ARN of the profile.</p>
   */
  profileArn?: string;

  /**
   * <p>The name of the profile.</p>
   */
  name?: string;

  /**
   * <p>Specifies whether instance properties are required in temporary credential requests with this profile. </p>
   */
  requireInstanceProperties?: boolean;

  /**
   * <p>Indicates whether the profile is enabled.</p>
   */
  enabled?: boolean;

  /**
   * <p>The Amazon Web Services account that created the profile.</p>
   */
  createdBy?: string;

  /**
   * <p>A session policy that applies to the trust boundary of the vended session credentials. </p>
   */
  sessionPolicy?: string;

  /**
   * <p>A list of IAM roles that this profile can assume in a temporary credential request.</p>
   */
  roleArns?: string[];

  /**
   * <p>A list of managed policy ARNs that apply to the vended session credentials. </p>
   */
  managedPolicyArns?: string[];

  /**
   * <p>The ISO-8601 timestamp when the profile was created. </p>
   */
  createdAt?: Date;

  /**
   * <p>The ISO-8601 timestamp when the profile was last updated. </p>
   */
  updatedAt?: Date;

  /**
   * <p> The number of seconds the vended session credentials are valid for. </p>
   */
  durationSeconds?: number;
}

/**
 * @public
 */
export interface ProfileDetailResponse {
  /**
   * <p>The state of the profile after a read or write operation.</p>
   */
  profile?: ProfileDetail;
}

/**
 * @public
 * <p>Validation exception error.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const NotificationChannel = {
  ALL: "ALL",
} as const;

/**
 * @public
 */
export type NotificationChannel = (typeof NotificationChannel)[keyof typeof NotificationChannel];

/**
 * @public
 * @enum
 */
export const NotificationEvent = {
  CA_CERTIFICATE_EXPIRY: "CA_CERTIFICATE_EXPIRY",
  END_ENTITY_CERTIFICATE_EXPIRY: "END_ENTITY_CERTIFICATE_EXPIRY",
} as const;

/**
 * @public
 */
export type NotificationEvent = (typeof NotificationEvent)[keyof typeof NotificationEvent];

/**
 * @public
 * <p>
 *          Customizable notification settings that will be applied to notification events.
 *          IAM Roles Anywhere consumes these settings while notifying across multiple channels - CloudWatch metrics, EventBridge, and Health Dashboard.
 *       </p>
 */
export interface NotificationSetting {
  /**
   * <p>Indicates whether the notification setting is enabled.</p>
   */
  enabled: boolean | undefined;

  /**
   * <p>The event to which this notification setting is applied.</p>
   */
  event: NotificationEvent | string | undefined;

  /**
   * <p>The number of days before a notification event. This value is required for a notification setting that is enabled.</p>
   */
  threshold?: number;

  /**
   * <p>The specified channel of notification.
   *       IAM Roles Anywhere uses CloudWatch metrics, EventBridge, and Health Dashboard to notify for an event.</p>
   *          <note>
   *             <p>In the absence of a specific channel, IAM Roles Anywhere applies this setting to 'ALL' channels.</p>
   *          </note>
   */
  channel?: NotificationChannel | string;
}

/**
 * @public
 * <p>The data field of the trust anchor depending on its type. </p>
 */
export type SourceData = SourceData.AcmPcaArnMember | SourceData.X509CertificateDataMember | SourceData.$UnknownMember;

/**
 * @public
 */
export namespace SourceData {
  /**
   * <p>The PEM-encoded data for the certificate anchor. Included for trust anchors of type <code>CERTIFICATE_BUNDLE</code>. </p>
   */
  export interface X509CertificateDataMember {
    x509CertificateData: string;
    acmPcaArn?: never;
    $unknown?: never;
  }

  /**
   * <p>
   *          The root certificate of the Private Certificate Authority specified by this ARN is used in trust
   *          validation for temporary credential requests. Included for trust anchors of type <code>AWS_ACM_PCA</code>.
   *       </p>
   */
  export interface AcmPcaArnMember {
    x509CertificateData?: never;
    acmPcaArn: string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    x509CertificateData?: never;
    acmPcaArn?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    x509CertificateData: (value: string) => T;
    acmPcaArn: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SourceData, visitor: Visitor<T>): T => {
    if (value.x509CertificateData !== undefined) return visitor.x509CertificateData(value.x509CertificateData);
    if (value.acmPcaArn !== undefined) return visitor.acmPcaArn(value.acmPcaArn);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const TrustAnchorType = {
  AWS_ACM_PCA: "AWS_ACM_PCA",
  CERTIFICATE_BUNDLE: "CERTIFICATE_BUNDLE",
  SELF_SIGNED_REPOSITORY: "SELF_SIGNED_REPOSITORY",
} as const;

/**
 * @public
 */
export type TrustAnchorType = (typeof TrustAnchorType)[keyof typeof TrustAnchorType];

/**
 * @public
 * <p>The trust anchor type and its related certificate data.</p>
 */
export interface Source {
  /**
   * <p>The type of the trust anchor. </p>
   */
  sourceType?: TrustAnchorType | string;

  /**
   * <p>The data field of the trust anchor depending on its type. </p>
   */
  sourceData?: SourceData;
}

/**
 * @public
 */
export interface CreateTrustAnchorRequest {
  /**
   * <p>The name of the trust anchor.</p>
   */
  name: string | undefined;

  /**
   * <p>The trust anchor type and its related certificate data.</p>
   */
  source: Source | undefined;

  /**
   * <p>Specifies whether the trust anchor is enabled.</p>
   */
  enabled?: boolean;

  /**
   * <p>The tags to attach to the trust anchor.</p>
   */
  tags?: Tag[];

  /**
   * <p>A list of notification settings to be associated to the trust anchor.</p>
   */
  notificationSettings?: NotificationSetting[];
}

/**
 * @public
 * <p>The state of a notification setting.</p>
 *          <p>A notification setting includes information such as event name, threshold, status of
 *          the notification setting, and the channel to notify.</p>
 */
export interface NotificationSettingDetail {
  /**
   * <p>Indicates whether the notification setting is enabled.</p>
   */
  enabled: boolean | undefined;

  /**
   * <p>The event to which this notification setting is applied.</p>
   */
  event: NotificationEvent | string | undefined;

  /**
   * <p>The number of days before a notification event.</p>
   */
  threshold?: number;

  /**
   * <p>The specified channel of notification.
   *       IAM Roles Anywhere uses CloudWatch metrics, EventBridge, and Health Dashboard to notify for an event.</p>
   *          <note>
   *             <p>In the absence of a specific channel, IAM Roles Anywhere applies this setting to 'ALL' channels.</p>
   *          </note>
   */
  channel?: NotificationChannel | string;

  /**
   * <p>The principal that configured the notification setting.
   *       For default settings configured by IAM Roles Anywhere,
   *       the value is <code>rolesanywhere.amazonaws.com</code>, and
   *       for customized notifications settings, it is the respective account ID.
   *       </p>
   */
  configuredBy?: string;
}

/**
 * @public
 * <p>The state of the trust anchor after a read or write operation. </p>
 */
export interface TrustAnchorDetail {
  /**
   * <p>The unique identifier of the trust anchor.</p>
   */
  trustAnchorId?: string;

  /**
   * <p>The ARN of the trust anchor.</p>
   */
  trustAnchorArn?: string;

  /**
   * <p>The name of the trust anchor.</p>
   */
  name?: string;

  /**
   * <p>The trust anchor type and its related certificate data.</p>
   */
  source?: Source;

  /**
   * <p>Indicates whether the trust anchor is enabled.</p>
   */
  enabled?: boolean;

  /**
   * <p>The ISO-8601 timestamp when the trust anchor was created. </p>
   */
  createdAt?: Date;

  /**
   * <p>The ISO-8601 timestamp when the trust anchor was last updated. </p>
   */
  updatedAt?: Date;

  /**
   * <p>A list of notification settings to be associated to the trust anchor.</p>
   */
  notificationSettings?: NotificationSettingDetail[];
}

/**
 * @public
 */
export interface TrustAnchorDetailResponse {
  /**
   * <p>The state of the trust anchor after a read or write operation. </p>
   */
  trustAnchor: TrustAnchorDetail | undefined;
}

/**
 * @public
 * <p>A record of a presented X509 credential from a temporary credential request. </p>
 */
export interface CredentialSummary {
  /**
   * <p>The ISO-8601 time stamp of when the certificate was last used in a temporary credential request.</p>
   */
  seenAt?: Date;

  /**
   * <p>The serial number of the certificate.</p>
   */
  serialNumber?: string;

  /**
   * <p>The fully qualified domain name of the issuing certificate for the presented end-entity certificate.</p>
   */
  issuer?: string;

  /**
   * <p>Indicates whether the credential is enabled.</p>
   */
  enabled?: boolean;

  /**
   * <p>The PEM-encoded data of the certificate.</p>
   */
  x509CertificateData?: string;

  /**
   * <p>Indicates whether the temporary credential request was successful. </p>
   */
  failed?: boolean;
}

/**
 * @public
 * <p>The state of the certificate revocation list (CRL) after a read or write operation.</p>
 */
export interface CrlDetail {
  /**
   * <p>The unique identifier of the certificate revocation list (CRL).</p>
   */
  crlId?: string;

  /**
   * <p>The ARN of the certificate revocation list (CRL).</p>
   */
  crlArn?: string;

  /**
   * <p>The name of the certificate revocation list (CRL).</p>
   */
  name?: string;

  /**
   * <p>Indicates whether the certificate revocation list (CRL) is enabled.</p>
   */
  enabled?: boolean;

  /**
   * <p>The state of the certificate revocation list (CRL) after a read or write operation.</p>
   */
  crlData?: Uint8Array;

  /**
   * <p>The ARN of the TrustAnchor the certificate revocation list (CRL) will provide revocation for. </p>
   */
  trustAnchorArn?: string;

  /**
   * <p>The ISO-8601 timestamp when the certificate revocation list (CRL) was created. </p>
   */
  createdAt?: Date;

  /**
   * <p>The ISO-8601 timestamp when the certificate revocation list (CRL) was last updated. </p>
   */
  updatedAt?: Date;
}

/**
 * @public
 */
export interface CrlDetailResponse {
  /**
   * <p>The state of the certificate revocation list (CRL) after a read or write operation.</p>
   */
  crl: CrlDetail | undefined;
}

/**
 * @public
 * <p>The resource could not be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 */
export interface ScalarCrlRequest {
  /**
   * <p>The unique identifier of the certificate revocation list (CRL).</p>
   */
  crlId: string | undefined;
}

/**
 * @public
 */
export interface ImportCrlRequest {
  /**
   * <p>The name of the certificate revocation list (CRL).</p>
   */
  name: string | undefined;

  /**
   * <p>The x509 v3 specified certificate revocation list (CRL).</p>
   */
  crlData: Uint8Array | undefined;

  /**
   * <p>Specifies whether the certificate revocation list (CRL) is enabled.</p>
   */
  enabled?: boolean;

  /**
   * <p>A list of tags to attach to the certificate revocation list (CRL).</p>
   */
  tags?: Tag[];

  /**
   * <p>The ARN of the TrustAnchor the certificate revocation list (CRL) will provide revocation for.</p>
   */
  trustAnchorArn: string | undefined;
}

/**
 * @public
 */
export interface ListCrlsResponse {
  /**
   * <p>A token that indicates where the output should continue from, if a previous request did not show all results. To get the next results, make the request again with this value.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of certificate revocation lists (CRL). </p>
   */
  crls?: CrlDetail[];
}

/**
 * @public
 */
export interface ListRequest {
  /**
   * <p>A token that indicates where the output should continue from, if a previous request did not show all results. To get the next results, make the request again with this value.</p>
   */
  nextToken?: string;

  /**
   * <p>The number of resources in the paginated list. </p>
   */
  pageSize?: number;
}

/**
 * @public
 */
export interface UpdateCrlRequest {
  /**
   * <p>The unique identifier of the certificate revocation list (CRL).</p>
   */
  crlId: string | undefined;

  /**
   * <p>The name of the Crl.</p>
   */
  name?: string;

  /**
   * <p>The x509 v3 specified certificate revocation list (CRL).</p>
   */
  crlData?: Uint8Array;
}

/**
 * @public
 */
export interface ScalarProfileRequest {
  /**
   * <p>The unique identifier of the profile.</p>
   */
  profileId: string | undefined;
}

/**
 * @public
 */
export interface ScalarTrustAnchorRequest {
  /**
   * <p>The unique identifier of the trust anchor.</p>
   */
  trustAnchorId: string | undefined;
}

/**
 * @public
 */
export interface ScalarSubjectRequest {
  /**
   * <p>The unique identifier of the subject. </p>
   */
  subjectId: string | undefined;
}

/**
 * @public
 * <p>A key-value pair you set that identifies a property of the authenticating instance.</p>
 */
export interface InstanceProperty {
  /**
   * <p>The ISO-8601 time stamp of when the certificate was last used in a temporary credential request.</p>
   */
  seenAt?: Date;

  /**
   * <p>A list of instanceProperty objects. </p>
   */
  properties?: Record<string, string>;

  /**
   * <p>Indicates whether the temporary credential request was successful. </p>
   */
  failed?: boolean;
}

/**
 * @public
 * <p>The state of the subject after a read or write operation.</p>
 */
export interface SubjectDetail {
  /**
   * <p>The ARN of the resource.</p>
   */
  subjectArn?: string;

  /**
   * <p>The id of the resource</p>
   */
  subjectId?: string;

  /**
   * <p>The enabled status of the subject.</p>
   */
  enabled?: boolean;

  /**
   * <p>The x509 principal identifier of the authenticating certificate.</p>
   */
  x509Subject?: string;

  /**
   * <p>The ISO-8601 timestamp of the last time this subject requested temporary session credentials.</p>
   */
  lastSeenAt?: Date;

  /**
   * <p>The ISO-8601 timestamp when the subject was created. </p>
   */
  createdAt?: Date;

  /**
   * <p>The ISO-8601 timestamp when the subject was last updated.</p>
   */
  updatedAt?: Date;

  /**
   * <p>The temporary session credentials vended at the last authenticating call with this subject.</p>
   */
  credentials?: CredentialSummary[];

  /**
   * <p>The specified instance properties associated with the request.</p>
   */
  instanceProperties?: InstanceProperty[];
}

/**
 * @public
 */
export interface SubjectDetailResponse {
  /**
   * <p>The state of the subject after a read or write operation.</p>
   */
  subject?: SubjectDetail;
}

/**
 * @public
 */
export interface ListProfilesResponse {
  /**
   * <p>A token that indicates where the output should continue from, if a previous request did not show all results. To get the next results, make the request again with this value.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of profiles.</p>
   */
  profiles?: ProfileDetail[];
}

/**
 * @public
 * <p>A summary representation of subjects.</p>
 */
export interface SubjectSummary {
  /**
   * <p>The ARN of the resource.</p>
   */
  subjectArn?: string;

  /**
   * <p>The id of the resource.</p>
   */
  subjectId?: string;

  /**
   * <p>The enabled status of the subject. </p>
   */
  enabled?: boolean;

  /**
   * <p>The x509 principal identifier of the authenticating certificate.</p>
   */
  x509Subject?: string;

  /**
   * <p>The ISO-8601 time stamp of when the certificate was last used in a temporary credential request.</p>
   */
  lastSeenAt?: Date;

  /**
   * <p>The ISO-8601 time stamp of when the certificate was first used in a temporary credential request.</p>
   */
  createdAt?: Date;

  /**
   * <p>The ISO-8601 timestamp when the subject was last updated. </p>
   */
  updatedAt?: Date;
}

/**
 * @public
 */
export interface ListSubjectsResponse {
  /**
   * <p>A list of subjects.</p>
   */
  subjects?: SubjectSummary[];

  /**
   * <p>A token that indicates where the output should continue from, if a previous request did not show all results. To get the next results, make the request again with this value.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tags attached to the resource.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface ListTrustAnchorsResponse {
  /**
   * <p>A token that indicates where the output should continue from, if a previous request did not show all results. To get the next results, make the request again with this value.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of trust anchors.</p>
   */
  trustAnchors?: TrustAnchorDetail[];
}

/**
 * @public
 * <p>A notification setting key to reset.
 *          A notification setting key includes the event and the channel.
 *       </p>
 */
export interface NotificationSettingKey {
  /**
   * <p>The notification setting event to reset.</p>
   */
  event: NotificationEvent | string | undefined;

  /**
   * <p>The specified channel of notification.</p>
   */
  channel?: NotificationChannel | string;
}

/**
 * @public
 */
export interface UpdateProfileRequest {
  /**
   * <p>The unique identifier of the profile.</p>
   */
  profileId: string | undefined;

  /**
   * <p>The name of the profile.</p>
   */
  name?: string;

  /**
   * <p>A session policy that applies to the trust boundary of the vended session credentials. </p>
   */
  sessionPolicy?: string;

  /**
   * <p>A list of IAM roles that this profile can assume in a temporary credential request.</p>
   */
  roleArns?: string[];

  /**
   * <p>A list of managed policy ARNs that apply to the vended session credentials. </p>
   */
  managedPolicyArns?: string[];

  /**
   * <p> The number of seconds the vended session credentials are valid for. </p>
   */
  durationSeconds?: number;
}

/**
 * @public
 */
export interface PutNotificationSettingsRequest {
  /**
   * <p>The unique identifier of the trust anchor.</p>
   */
  trustAnchorId: string | undefined;

  /**
   * <p>A list of notification settings to be associated to the trust anchor.</p>
   */
  notificationSettings: NotificationSetting[] | undefined;
}

/**
 * @public
 */
export interface PutNotificationSettingsResponse {
  /**
   * <p>The state of the trust anchor after a read or write operation. </p>
   */
  trustAnchor: TrustAnchorDetail | undefined;
}

/**
 * @public
 */
export interface ResetNotificationSettingsRequest {
  /**
   * <p>The unique identifier of the trust anchor.</p>
   */
  trustAnchorId: string | undefined;

  /**
   * <p>A list of notification setting keys to reset.
   *          A notification setting key includes the event and the channel.
   *       </p>
   */
  notificationSettingKeys: NotificationSettingKey[] | undefined;
}

/**
 * @public
 */
export interface ResetNotificationSettingsResponse {
  /**
   * <p>The state of the trust anchor after a read or write operation. </p>
   */
  trustAnchor: TrustAnchorDetail | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to attach to the resource.</p>
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 * <p>Too many tags.</p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
  }
}

/**
 * @public
 */
export interface UpdateTrustAnchorRequest {
  /**
   * <p>The unique identifier of the trust anchor.</p>
   */
  trustAnchorId: string | undefined;

  /**
   * <p>The name of the trust anchor.</p>
   */
  name?: string;

  /**
   * <p>The trust anchor type and its related certificate data.</p>
   */
  source?: Source;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of keys. Tag keys are the unique identifiers of tags. </p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
  ...(obj.key && { key: SENSITIVE_STRING }),
  ...(obj.value && { value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateProfileRequestFilterSensitiveLog = (obj: CreateProfileRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: obj.tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateTrustAnchorRequestFilterSensitiveLog = (obj: CreateTrustAnchorRequest): any => ({
  ...obj,
  ...(obj.source && { source: obj.source }),
  ...(obj.tags && { tags: obj.tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ImportCrlRequestFilterSensitiveLog = (obj: ImportCrlRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: obj.tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
  ...(obj.tags && { tags: obj.tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: obj.tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
  ...(obj.tagKeys && { tagKeys: SENSITIVE_STRING }),
});
