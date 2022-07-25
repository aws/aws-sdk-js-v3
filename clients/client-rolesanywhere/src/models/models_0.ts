// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { RolesAnywhereServiceException as __BaseException } from "./RolesAnywhereServiceException";

/**
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

export interface CreateProfileRequest {
  /**
   * <p>The name of the profile.</p>
   */
  name: string | undefined;

  /**
   * <p>Specifies whether instance properties are required in <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a> requests with this profile. </p>
   */
  requireInstanceProperties?: boolean;

  /**
   * <p>A session policy that applies to the trust boundary of the vended session credentials. </p>
   */
  sessionPolicy?: string;

  /**
   * <p>A list of IAM roles that this profile can assume in a <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a> operation.</p>
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
   * <p>Specifies whether instance properties are required in <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a> requests with this profile. </p>
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
   * <p>A list of IAM roles that this profile can assume in a <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a> operation.</p>
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

export interface ProfileDetailResponse {
  /**
   * <p>The state of the profile after a read or write operation.</p>
   */
  profile?: ProfileDetail;
}

/**
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
 * <p>The data field of the trust anchor depending on its type. </p>
 */
export type SourceData = SourceData.AcmPcaArnMember | SourceData.X509CertificateDataMember | SourceData.$UnknownMember;

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
   * <p>The root certificate of the Certificate Manager Private Certificate Authority specified by this ARN is used in trust validation for <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a> operations. Included for trust anchors of type <code>AWS_ACM_PCA</code>. </p>
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

export enum TrustAnchorType {
  AWS_ACM_PCA = "AWS_ACM_PCA",
  CERTIFICATE_BUNDLE = "CERTIFICATE_BUNDLE",
  SELF_SIGNED_REPOSITORY = "SELF_SIGNED_REPOSITORY",
}

/**
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
}

/**
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
}

export interface TrustAnchorDetailResponse {
  /**
   * <p>The state of the trust anchor after a read or write operation. </p>
   */
  trustAnchor: TrustAnchorDetail | undefined;
}

/**
 * <p>A record of a presented X509 credential to <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a>. </p>
 */
export interface CredentialSummary {
  /**
   * <p>The ISO-8601 time stamp of when the certificate was last used in a <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a> operation.</p>
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
   * <p>Indicates whether the <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a> operation was successful. </p>
   */
  failed?: boolean;
}

/**
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

export interface CrlDetailResponse {
  /**
   * <p>The state of the certificate revocation list (CRL) after a read or write operation.</p>
   */
  crl: CrlDetail | undefined;
}

/**
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

export interface ScalarCrlRequest {
  /**
   * <p>The unique identifier of the certificate revocation list (CRL).</p>
   */
  crlId: string | undefined;
}

export interface ImportCrlRequest {
  /**
   * <p>The name of the certificate revocation list (CRL).</p>
   */
  name: string | undefined;

  /**
   * <p>The x509 v3 specified certificate revocation list</p>
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

export interface ListCrlsResponse {
  /**
   * <p>A token that indicates where the output should continue from, if a previous operation did not show all results. To get the next results, call the operation again with this value.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of certificate revocation lists (CRL). </p>
   */
  crls?: CrlDetail[];
}

export interface ListRequest {
  /**
   * <p>A token that indicates where the output should continue from, if a previous operation did not show all results. To get the next results, call the operation again with this value.</p>
   */
  nextToken?: string;

  /**
   * <p>The number of resources in the paginated list. </p>
   */
  pageSize?: number;
}

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
   * <p>The x509 v3 specified certificate revocation list</p>
   */
  crlData?: Uint8Array;
}

export interface ScalarProfileRequest {
  /**
   * <p>The unique identifier of the profile.</p>
   */
  profileId: string | undefined;
}

export interface ScalarTrustAnchorRequest {
  /**
   * <p>The unique identifier of the trust anchor.</p>
   */
  trustAnchorId: string | undefined;
}

export interface ScalarSubjectRequest {
  /**
   * <p>The unique identifier of the subject. </p>
   */
  subjectId: string | undefined;
}

/**
 * <p>A key-value pair you set that identifies a property of the authenticating instance.</p>
 */
export interface InstanceProperty {
  /**
   * <p>The ISO-8601 time stamp of when the certificate was last used in a <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a> operation.</p>
   */
  seenAt?: Date;

  /**
   * <p>A list of instanceProperty objects. </p>
   */
  properties?: Record<string, string>;

  /**
   * <p>Indicates whether the <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a> operation was successful. </p>
   */
  failed?: boolean;
}

/**
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
   * <p>The ISO-8601 timestamp of the last time this Subject requested temporary session credentials.</p>
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
   * <p>The temporary session credentials vended at the last authenticating call with this Subject.</p>
   */
  credentials?: CredentialSummary[];

  /**
   * <p>The specified instance properties associated with the request.</p>
   */
  instanceProperties?: InstanceProperty[];
}

export interface SubjectDetailResponse {
  /**
   * <p>The state of the subject after a read or write operation.</p>
   */
  subject?: SubjectDetail;
}

export interface ListProfilesResponse {
  /**
   * <p>A token that indicates where the output should continue from, if a previous operation did not show all results. To get the next results, call the operation again with this value.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of profiles.</p>
   */
  profiles?: ProfileDetail[];
}

/**
 * <p>A summary representation of Subject resources returned in read operations; primarily ListSubjects.</p>
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
   * <p>The enabled status of the Subject. </p>
   */
  enabled?: boolean;

  /**
   * <p>The x509 principal identifier of the authenticating certificate.</p>
   */
  x509Subject?: string;

  /**
   * <p>The ISO-8601 time stamp of when the certificate was last used in a <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a> operation.</p>
   */
  lastSeenAt?: Date;

  /**
   * <p>The ISO-8601 time stamp of when the certificate was first used in a <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a> operation.</p>
   */
  createdAt?: Date;

  /**
   * <p>The ISO-8601 timestamp when the subject was last updated. </p>
   */
  updatedAt?: Date;
}

export interface ListSubjectsResponse {
  /**
   * <p>A list of subjects.</p>
   */
  subjects?: SubjectSummary[];

  /**
   * <p>A token that indicates where the output should continue from, if a previous operation did not show all results. To get the next results, call the operation again with this value.</p>
   */
  nextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tags attached to the resource.</p>
   */
  tags?: Tag[];
}

export interface ListTrustAnchorsResponse {
  /**
   * <p>A token that indicates where the output should continue from, if a previous operation did not show all results. To get the next results, call the operation again with this value.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of trust anchors.</p>
   */
  trustAnchors?: TrustAnchorDetail[];
}

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
   * <p>A list of IAM roles that this profile can assume in a <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a> operation.</p>
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

export interface TagResourceResponse {}

/**
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
export const ProfileDetailFilterSensitiveLog = (obj: ProfileDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProfileDetailResponseFilterSensitiveLog = (obj: ProfileDetailResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourceDataFilterSensitiveLog = (obj: SourceData): any => {
  if (obj.x509CertificateData !== undefined) return { x509CertificateData: obj.x509CertificateData };
  if (obj.acmPcaArn !== undefined) return { acmPcaArn: obj.acmPcaArn };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const SourceFilterSensitiveLog = (obj: Source): any => ({
  ...obj,
  ...(obj.sourceData && { sourceData: SourceDataFilterSensitiveLog(obj.sourceData) }),
});

/**
 * @internal
 */
export const CreateTrustAnchorRequestFilterSensitiveLog = (obj: CreateTrustAnchorRequest): any => ({
  ...obj,
  ...(obj.source && { source: SourceFilterSensitiveLog(obj.source) }),
  ...(obj.tags && { tags: obj.tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const TrustAnchorDetailFilterSensitiveLog = (obj: TrustAnchorDetail): any => ({
  ...obj,
  ...(obj.source && { source: SourceFilterSensitiveLog(obj.source) }),
});

/**
 * @internal
 */
export const TrustAnchorDetailResponseFilterSensitiveLog = (obj: TrustAnchorDetailResponse): any => ({
  ...obj,
  ...(obj.trustAnchor && { trustAnchor: TrustAnchorDetailFilterSensitiveLog(obj.trustAnchor) }),
});

/**
 * @internal
 */
export const CredentialSummaryFilterSensitiveLog = (obj: CredentialSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CrlDetailFilterSensitiveLog = (obj: CrlDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CrlDetailResponseFilterSensitiveLog = (obj: CrlDetailResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScalarCrlRequestFilterSensitiveLog = (obj: ScalarCrlRequest): any => ({
  ...obj,
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
export const ListCrlsResponseFilterSensitiveLog = (obj: ListCrlsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRequestFilterSensitiveLog = (obj: ListRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCrlRequestFilterSensitiveLog = (obj: UpdateCrlRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScalarProfileRequestFilterSensitiveLog = (obj: ScalarProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScalarTrustAnchorRequestFilterSensitiveLog = (obj: ScalarTrustAnchorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScalarSubjectRequestFilterSensitiveLog = (obj: ScalarSubjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstancePropertyFilterSensitiveLog = (obj: InstanceProperty): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubjectDetailFilterSensitiveLog = (obj: SubjectDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubjectDetailResponseFilterSensitiveLog = (obj: SubjectDetailResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProfilesResponseFilterSensitiveLog = (obj: ListProfilesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubjectSummaryFilterSensitiveLog = (obj: SubjectSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSubjectsResponseFilterSensitiveLog = (obj: ListSubjectsResponse): any => ({
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
  ...(obj.tags && { tags: obj.tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListTrustAnchorsResponseFilterSensitiveLog = (obj: ListTrustAnchorsResponse): any => ({
  ...obj,
  ...(obj.trustAnchors && { trustAnchors: obj.trustAnchors.map((item) => TrustAnchorDetailFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateProfileRequestFilterSensitiveLog = (obj: UpdateProfileRequest): any => ({
  ...obj,
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
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTrustAnchorRequestFilterSensitiveLog = (obj: UpdateTrustAnchorRequest): any => ({
  ...obj,
  ...(obj.source && { source: SourceFilterSensitiveLog(obj.source) }),
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
  ...(obj.tagKeys && { tagKeys: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});
