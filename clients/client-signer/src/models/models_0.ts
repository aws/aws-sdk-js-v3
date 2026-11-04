// smithy-typescript generated code
import type {
  Category,
  EncryptionAlgorithm,
  HashAlgorithm,
  ImageFormat,
  SigningProfileStatus,
  SigningStatus,
  ValidityType,
} from "./enums";

/**
 * @public
 */
export interface AddProfilePermissionRequest {
  /**
   * The human-readable name of the signing profile.
   *
   * @public
   */
  profileName: string | undefined;

  /**
   * The version of the signing profile.
   *
   * @public
   */
  profileVersion?: string | undefined;

  /**
   * For cross-account signing. Grant a designated account permission to perform one or more of the following actions. Each action is associated with a specific API's operations. For more information about cross-account signing, see [Using cross-account signing with signing profiles](http://docs.aws.amazon.com/signer/latest/developerguide/signing-profile-cross-account.html) in the *AWS Signer Developer Guide*.
   *
   * You can designate the following actions to an account.
   *
   * - `signer:StartSigningJob`. This action isn't supported for container image workflows. For details, see StartSigningJob.
   * - `signer:SignPayload`. This action isn't supported for AWS Lambda workflows. For details, see SignPayload
   * - `signer:GetSigningProfile`. For details, see GetSigningProfile.
   * - `signer:RevokeSignature`. For details, see RevokeSignature.
   *
   * @public
   */
  action: string | undefined;

  /**
   * The AWS principal receiving cross-account permissions. This may be an IAM role or another AWS account ID.
   *
   * @public
   */
  principal: string | undefined;

  /**
   * A unique identifier for the current profile revision.
   *
   * @public
   */
  revisionId?: string | undefined;

  /**
   * A unique identifier for the cross-account permission statement.
   *
   * @public
   */
  statementId: string | undefined;
}

/**
 * @public
 */
export interface AddProfilePermissionResponse {
  /**
   * A unique identifier for the current profile revision.
   *
   * @public
   */
  revisionId?: string | undefined;
}

/**
 * @public
 */
export interface CancelSigningProfileRequest {
  /**
   * The name of the signing profile to be canceled.
   *
   * @public
   */
  profileName: string | undefined;
}

/**
 * @public
 */
export interface DescribeSigningJobRequest {
  /**
   * The ID of the signing job on input.
   *
   * @public
   */
  jobId: string | undefined;
}

/**
 * A signing configuration that overrides the default encryption or hash algorithm of a signing job.
 *
 * @public
 */
export interface SigningConfigurationOverrides {
  /**
   * A specified override of the default encryption algorithm that is used in a code-signing job.
   *
   * @public
   */
  encryptionAlgorithm?: EncryptionAlgorithm | undefined;

  /**
   * A specified override of the default hash algorithm that is used in a code-signing job.
   *
   * @public
   */
  hashAlgorithm?: HashAlgorithm | undefined;
}

/**
 * Any overrides that are applied to the signing configuration of a signing platform.
 *
 * @public
 */
export interface SigningPlatformOverrides {
  /**
   * A signing configuration that overrides the default encryption or hash algorithm of a signing job.
   *
   * @public
   */
  signingConfiguration?: SigningConfigurationOverrides | undefined;

  /**
   * A signed image is a JSON object. When overriding the default signing platform configuration, a customer can select either of two signing formats, `JSONEmbedded` or `JSONDetached`. (A third format value, `JSON`, is reserved for future use.) With `JSONEmbedded`, the signing image has the payload embedded in it. With `JSONDetached`, the payload is not be embedded in the signing image.
   *
   * @public
   */
  signingImageFormat?: ImageFormat | undefined;
}

/**
 * Revocation information for a signing job.
 *
 * @public
 */
export interface SigningJobRevocationRecord {
  /**
   * A caller-supplied reason for revocation.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The time of revocation.
   *
   * @public
   */
  revokedAt?: Date | undefined;

  /**
   * The identity of the revoker.
   *
   * @public
   */
  revokedBy?: string | undefined;
}

/**
 * The Amazon S3 bucket name and key where Signer saved your signed code image.
 *
 * @public
 */
export interface S3SignedObject {
  /**
   * Name of the S3 bucket.
   *
   * @public
   */
  bucketName?: string | undefined;

  /**
   * Key name that uniquely identifies a signed code image in your bucket.
   *
   * @public
   */
  key?: string | undefined;
}

/**
 * Points to an `S3SignedObject` object that contains information about your signed code image.
 *
 * @public
 */
export interface SignedObject {
  /**
   * The `S3SignedObject`.
   *
   * @public
   */
  s3?: S3SignedObject | undefined;
}

/**
 * The ACM certificate that is used to sign your code.
 *
 * @public
 */
export interface SigningMaterial {
  /**
   * The Amazon Resource Name (ARN) of the certificates that is used to sign your code.
   *
   * @public
   */
  certificateArn: string | undefined;
}

/**
 * Information about the Amazon S3 bucket where you saved your unsigned code.
 *
 * @public
 */
export interface S3Source {
  /**
   * Name of the S3 bucket.
   *
   * @public
   */
  bucketName: string | undefined;

  /**
   * Key name of the bucket object that contains your unsigned code.
   *
   * @public
   */
  key: string | undefined;

  /**
   * Version of your source image in your version enabled S3 bucket.
   *
   * @public
   */
  version: string | undefined;
}

/**
 * An `S3Source` object that contains information about the S3 bucket where you saved your unsigned code.
 *
 * @public
 */
export interface Source {
  /**
   * The `S3Source` object.
   *
   * @public
   */
  s3?: S3Source | undefined;
}

/**
 * @public
 */
export interface DescribeSigningJobResponse {
  /**
   * The ID of the signing job on output.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * The object that contains the name of your S3 bucket or your raw code.
   *
   * @public
   */
  source?: Source | undefined;

  /**
   * The Amazon Resource Name (ARN) of your code signing certificate.
   *
   * @public
   */
  signingMaterial?: SigningMaterial | undefined;

  /**
   * The microcontroller platform to which your signed code image will be distributed.
   *
   * @public
   */
  platformId?: string | undefined;

  /**
   * A human-readable name for the signing platform associated with the signing job.
   *
   * @public
   */
  platformDisplayName?: string | undefined;

  /**
   * The name of the profile that initiated the signing operation.
   *
   * @public
   */
  profileName?: string | undefined;

  /**
   * The version of the signing profile used to initiate the signing job.
   *
   * @public
   */
  profileVersion?: string | undefined;

  /**
   * A list of any overrides that were applied to the signing operation.
   *
   * @public
   */
  overrides?: SigningPlatformOverrides | undefined;

  /**
   * Map of user-assigned key-value pairs used during signing. These values contain any information that you specified for use in your signing job.
   *
   * @public
   */
  signingParameters?: Record<string, string> | undefined;

  /**
   * Date and time that the signing job was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Date and time that the signing job was completed.
   *
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * Thr expiration timestamp for the signature generated by the signing job.
   *
   * @public
   */
  signatureExpiresAt?: Date | undefined;

  /**
   * The IAM principal that requested the signing job.
   *
   * @public
   */
  requestedBy?: string | undefined;

  /**
   * Status of the signing job.
   *
   * @public
   */
  status?: SigningStatus | undefined;

  /**
   * String value that contains the status reason.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * A revocation record if the signature generated by the signing job has been revoked. Contains a timestamp and the ID of the IAM entity that revoked the signature.
   *
   * @public
   */
  revocationRecord?: SigningJobRevocationRecord | undefined;

  /**
   * Name of the S3 bucket where the signed code image is saved by AWS Signer.
   *
   * @public
   */
  signedObject?: SignedObject | undefined;

  /**
   * The AWS account ID of the job owner.
   *
   * @public
   */
  jobOwner?: string | undefined;

  /**
   * The IAM entity that initiated the signing job.
   *
   * @public
   */
  jobInvoker?: string | undefined;
}

/**
 * The name and prefix of the Amazon S3 bucket where AWS Signer saves your signed objects.
 *
 * @public
 */
export interface S3Destination {
  /**
   * Name of the S3 bucket.
   *
   * @public
   */
  bucketName?: string | undefined;

  /**
   * An S3 prefix that you can use to limit responses to those that begin with the specified prefix.
   *
   * @public
   */
  prefix?: string | undefined;
}

/**
 * Points to an `S3Destination` object that contains information about your S3 bucket.
 *
 * @public
 */
export interface Destination {
  /**
   * The `S3Destination` object.
   *
   * @public
   */
  s3?: S3Destination | undefined;
}

/**
 * The encryption algorithm options that are available to a code-signing job.
 *
 * @public
 */
export interface EncryptionAlgorithmOptions {
  /**
   * The set of accepted encryption algorithms that are allowed in a code-signing job.
   *
   * @public
   */
  allowedValues: EncryptionAlgorithm[] | undefined;

  /**
   * The default encryption algorithm that is used by a code-signing job.
   *
   * @public
   */
  defaultValue: EncryptionAlgorithm | undefined;
}

/**
 * @public
 */
export interface GetRevocationStatusRequest {
  /**
   * The timestamp of the signature that validates the profile or job.
   *
   * @public
   */
  signatureTimestamp: Date | undefined;

  /**
   * The ID of a signing platform.
   *
   * @public
   */
  platformId: string | undefined;

  /**
   * The version of a signing profile.
   *
   * @public
   */
  profileVersionArn: string | undefined;

  /**
   * The ARN of a signing job.
   *
   * @public
   */
  jobArn: string | undefined;

  /**
   * A list of composite signed hashes that identify certificates.
   *
   * A certificate identifier consists of a subject certificate TBS hash (signed by the parent CA) combined with a parent CA TBS hash (signed by the parent CA’s CA). Root certificates are defined as their own CA.
   *
   * The following example shows how to calculate a hash for this parameter using OpenSSL commands:
   *
   * `openssl asn1parse -in childCert.pem -strparse 4 -out childCert.tbs`
   *
   * `openssl sha384 < childCert.tbs -binary > childCertTbsHash`
   *
   * `openssl asn1parse -in parentCert.pem -strparse 4 -out parentCert.tbs`
   *
   * `openssl sha384 < parentCert.tbs -binary > parentCertTbsHash xxd -p childCertTbsHash > certificateHash.hex xxd -p parentCertTbsHash >> certificateHash.hex`
   *
   * `cat certificateHash.hex | tr -d '\n'`
   *
   * @public
   */
  certificateHashes: string[] | undefined;
}

/**
 * @public
 */
export interface GetRevocationStatusResponse {
  /**
   * A list of revoked entities (including zero or more of the signing profile ARN, signing job ARN, and certificate hashes) supplied as input to the API.
   *
   * @public
   */
  revokedEntities?: string[] | undefined;
}

/**
 * @public
 */
export interface GetSigningPlatformRequest {
  /**
   * The ID of the target signing platform.
   *
   * @public
   */
  platformId: string | undefined;
}

/**
 * The hash algorithms that are available to a code-signing job.
 *
 * @public
 */
export interface HashAlgorithmOptions {
  /**
   * The set of accepted hash algorithms allowed in a code-signing job.
   *
   * @public
   */
  allowedValues: HashAlgorithm[] | undefined;

  /**
   * The default hash algorithm that is used in a code-signing job.
   *
   * @public
   */
  defaultValue: HashAlgorithm | undefined;
}

/**
 * The configuration of a signing operation.
 *
 * @public
 */
export interface SigningConfiguration {
  /**
   * The encryption algorithm options that are available for a code-signing job.
   *
   * @public
   */
  encryptionAlgorithmOptions: EncryptionAlgorithmOptions | undefined;

  /**
   * The hash algorithm options that are available for a code-signing job.
   *
   * @public
   */
  hashAlgorithmOptions: HashAlgorithmOptions | undefined;
}

/**
 * The image format of a AWS Signer platform or profile.
 *
 * @public
 */
export interface SigningImageFormat {
  /**
   * The supported formats of a signing image.
   *
   * @public
   */
  supportedFormats: ImageFormat[] | undefined;

  /**
   * The default format of a signing image.
   *
   * @public
   */
  defaultFormat: ImageFormat | undefined;
}

/**
 * @public
 */
export interface GetSigningPlatformResponse {
  /**
   * The ID of the target signing platform.
   *
   * @public
   */
  platformId?: string | undefined;

  /**
   * The display name of the target signing platform.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * A list of partner entities that use the target signing platform.
   *
   * @public
   */
  partner?: string | undefined;

  /**
   * The validation template that is used by the target signing platform.
   *
   * @public
   */
  target?: string | undefined;

  /**
   * The category type of the target signing platform.
   *
   * @public
   */
  category?: Category | undefined;

  /**
   * A list of configurations applied to the target platform at signing.
   *
   * @public
   */
  signingConfiguration?: SigningConfiguration | undefined;

  /**
   * The format of the target platform's signing image.
   *
   * @public
   */
  signingImageFormat?: SigningImageFormat | undefined;

  /**
   * The maximum size (in MB) of the payload that can be signed by the target platform.
   *
   * @public
   */
  maxSizeInMB?: number | undefined;

  /**
   * A flag indicating whether signatures generated for the signing platform can be revoked.
   *
   * @public
   */
  revocationSupported?: boolean | undefined;
}

/**
 * @public
 */
export interface GetSigningProfileRequest {
  /**
   * The name of the target signing profile.
   *
   * @public
   */
  profileName: string | undefined;

  /**
   * The AWS account ID of the profile owner.
   *
   * @public
   */
  profileOwner?: string | undefined;
}

/**
 * Revocation information for a signing profile.
 *
 * @public
 */
export interface SigningProfileRevocationRecord {
  /**
   * The time when revocation becomes effective.
   *
   * @public
   */
  revocationEffectiveFrom?: Date | undefined;

  /**
   * The time when the signing profile was revoked.
   *
   * @public
   */
  revokedAt?: Date | undefined;

  /**
   * The identity of the revoker.
   *
   * @public
   */
  revokedBy?: string | undefined;
}

/**
 * The validity period for a signing job.
 *
 * @public
 */
export interface SignatureValidityPeriod {
  /**
   * The numerical value of the time unit for signature validity.
   *
   * @public
   */
  value?: number | undefined;

  /**
   * The time unit for signature validity.
   *
   * @public
   */
  type?: ValidityType | undefined;
}

/**
 * @public
 */
export interface GetSigningProfileResponse {
  /**
   * The name of the target signing profile.
   *
   * @public
   */
  profileName?: string | undefined;

  /**
   * The current version of the signing profile.
   *
   * @public
   */
  profileVersion?: string | undefined;

  /**
   * The signing profile ARN, including the profile version.
   *
   * @public
   */
  profileVersionArn?: string | undefined;

  /**
   * Revocation information for a signing profile.
   *
   * @public
   */
  revocationRecord?: SigningProfileRevocationRecord | undefined;

  /**
   * The ARN of the certificate that the target profile uses for signing operations.
   *
   * @public
   */
  signingMaterial?: SigningMaterial | undefined;

  /**
   * The ID of the platform that is used by the target signing profile.
   *
   * @public
   */
  platformId?: string | undefined;

  /**
   * A human-readable name for the signing platform associated with the signing profile.
   *
   * @public
   */
  platformDisplayName?: string | undefined;

  /**
   * The validity period for a signing job.
   *
   * @public
   */
  signatureValidityPeriod?: SignatureValidityPeriod | undefined;

  /**
   * A list of overrides applied by the target signing profile for signing operations.
   *
   * @public
   */
  overrides?: SigningPlatformOverrides | undefined;

  /**
   * A map of key-value pairs for signing operations that is attached to the target signing profile.
   *
   * @public
   */
  signingParameters?: Record<string, string> | undefined;

  /**
   * The status of the target signing profile.
   *
   * @public
   */
  status?: SigningProfileStatus | undefined;

  /**
   * Reason for the status of the target signing profile.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the signing profile.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * A list of tags associated with the signing profile.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListProfilePermissionsRequest {
  /**
   * Name of the signing profile containing the cross-account permissions.
   *
   * @public
   */
  profileName: string | undefined;

  /**
   * String for specifying the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A cross-account permission for a signing profile.
 *
 * @public
 */
export interface Permission {
  /**
   * An AWS Signer action permitted as part of cross-account permissions.
   *
   * @public
   */
  action?: string | undefined;

  /**
   * The AWS principal that has been granted a cross-account permission.
   *
   * @public
   */
  principal?: string | undefined;

  /**
   * A unique identifier for a cross-account permission statement.
   *
   * @public
   */
  statementId?: string | undefined;

  /**
   * The signing profile version that a permission applies to.
   *
   * @public
   */
  profileVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListProfilePermissionsResponse {
  /**
   * The identifier for the current revision of profile permissions.
   *
   * @public
   */
  revisionId?: string | undefined;

  /**
   * Total size of the policy associated with the Signing Profile in bytes.
   *
   * @public
   */
  policySizeBytes?: number | undefined;

  /**
   * List of permissions associated with the Signing Profile.
   *
   * @public
   */
  permissions?: Permission[] | undefined;

  /**
   * String for specifying the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSigningJobsRequest {
  /**
   * A status value with which to filter your results.
   *
   * @public
   */
  status?: SigningStatus | undefined;

  /**
   * The ID of microcontroller platform that you specified for the distribution of your code image.
   *
   * @public
   */
  platformId?: string | undefined;

  /**
   * The IAM principal that requested the signing job.
   *
   * @public
   */
  requestedBy?: string | undefined;

  /**
   * Specifies the maximum number of items to return in the response. Use this parameter when paginating results. If additional items exist beyond the number you specify, the `nextToken` element is set in the response. Use the `nextToken` value in a subsequent request to retrieve additional items.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * String for specifying the next set of paginated results to return. After you receive a response with truncated results, use this parameter in a subsequent request. Set it to the value of `nextToken` from the response that you just received.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Filters results to return only signing jobs with revoked signatures.
   *
   * @public
   */
  isRevoked?: boolean | undefined;

  /**
   * Filters results to return only signing jobs with signatures expiring before a specified timestamp.
   *
   * @public
   */
  signatureExpiresBefore?: Date | undefined;

  /**
   * Filters results to return only signing jobs with signatures expiring after a specified timestamp.
   *
   * @public
   */
  signatureExpiresAfter?: Date | undefined;

  /**
   * Filters results to return only signing jobs initiated by a specified IAM entity.
   *
   * @public
   */
  jobInvoker?: string | undefined;
}

/**
 * Contains information about a signing job.
 *
 * @public
 */
export interface SigningJob {
  /**
   * The ID of the signing job.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * A `Source` that contains information about a signing job's code image source.
   *
   * @public
   */
  source?: Source | undefined;

  /**
   * A `SignedObject` structure that contains information about a signing job's signed code image.
   *
   * @public
   */
  signedObject?: SignedObject | undefined;

  /**
   * A `SigningMaterial` object that contains the Amazon Resource Name (ARN) of the certificate used for the signing job.
   *
   * @public
   */
  signingMaterial?: SigningMaterial | undefined;

  /**
   * The date and time that the signing job was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The status of the signing job.
   *
   * @public
   */
  status?: SigningStatus | undefined;

  /**
   * Indicates whether the signing job is revoked.
   *
   * @public
   */
  isRevoked?: boolean | undefined;

  /**
   * The name of the signing profile that created a signing job.
   *
   * @public
   */
  profileName?: string | undefined;

  /**
   * The version of the signing profile that created a signing job.
   *
   * @public
   */
  profileVersion?: string | undefined;

  /**
   * The unique identifier for a signing platform.
   *
   * @public
   */
  platformId?: string | undefined;

  /**
   * The name of a signing platform.
   *
   * @public
   */
  platformDisplayName?: string | undefined;

  /**
   * The time when the signature of a signing job expires.
   *
   * @public
   */
  signatureExpiresAt?: Date | undefined;

  /**
   * The AWS account ID of the job owner.
   *
   * @public
   */
  jobOwner?: string | undefined;

  /**
   * The AWS account ID of the job invoker.
   *
   * @public
   */
  jobInvoker?: string | undefined;
}

/**
 * @public
 */
export interface ListSigningJobsResponse {
  /**
   * A list of your signing jobs.
   *
   * @public
   */
  jobs?: SigningJob[] | undefined;

  /**
   * String for specifying the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSigningPlatformsRequest {
  /**
   * The category type of a signing platform.
   *
   * @public
   */
  category?: string | undefined;

  /**
   * Any partner entities connected to a signing platform.
   *
   * @public
   */
  partner?: string | undefined;

  /**
   * The validation template that is used by the target signing platform.
   *
   * @public
   */
  target?: string | undefined;

  /**
   * The maximum number of results to be returned by this operation.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Value for specifying the next set of paginated results to return. After you receive a response with truncated results, use this parameter in a subsequent request. Set it to the value of `nextToken` from the response that you just received.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains information about the signing configurations and parameters that are used to perform a code-signing job.
 *
 * @public
 */
export interface SigningPlatform {
  /**
   * The ID of a signing platform.
   *
   * @public
   */
  platformId?: string | undefined;

  /**
   * The display name of a signing platform.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * Any partner entities linked to a signing platform.
   *
   * @public
   */
  partner?: string | undefined;

  /**
   * The types of targets that can be signed by a signing platform.
   *
   * @public
   */
  target?: string | undefined;

  /**
   * The category of a signing platform.
   *
   * @public
   */
  category?: Category | undefined;

  /**
   * The configuration of a signing platform. This includes the designated hash algorithm and encryption algorithm of a signing platform.
   *
   * @public
   */
  signingConfiguration?: SigningConfiguration | undefined;

  /**
   * The image format of a AWS Signer platform or profile.
   *
   * @public
   */
  signingImageFormat?: SigningImageFormat | undefined;

  /**
   * The maximum size (in MB) of code that can be signed by a signing platform.
   *
   * @public
   */
  maxSizeInMB?: number | undefined;

  /**
   * Indicates whether revocation is supported for the platform.
   *
   * @public
   */
  revocationSupported?: boolean | undefined;
}

/**
 * @public
 */
export interface ListSigningPlatformsResponse {
  /**
   * A list of all platforms that match the request parameters.
   *
   * @public
   */
  platforms?: SigningPlatform[] | undefined;

  /**
   * Value for specifying the next set of paginated results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSigningProfilesRequest {
  /**
   * Designates whether to include profiles with the status of `CANCELED`.
   *
   * @public
   */
  includeCanceled?: boolean | undefined;

  /**
   * The maximum number of profiles to be returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Value for specifying the next set of paginated results to return. After you receive a response with truncated results, use this parameter in a subsequent request. Set it to the value of `nextToken` from the response that you just received.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Filters results to return only signing jobs initiated for a specified signing platform.
   *
   * @public
   */
  platformId?: string | undefined;

  /**
   * Filters results to return only signing jobs with statuses in the specified list.
   *
   * @public
   */
  statuses?: SigningProfileStatus[] | undefined;
}

/**
 * Contains information about the ACM certificates and signing configuration parameters that can be used by a given code signing user.
 *
 * @public
 */
export interface SigningProfile {
  /**
   * The name of the signing profile.
   *
   * @public
   */
  profileName?: string | undefined;

  /**
   * The version of a signing profile.
   *
   * @public
   */
  profileVersion?: string | undefined;

  /**
   * The ARN of a signing profile, including the profile version.
   *
   * @public
   */
  profileVersionArn?: string | undefined;

  /**
   * The ACM certificate that is available for use by a signing profile.
   *
   * @public
   */
  signingMaterial?: SigningMaterial | undefined;

  /**
   * The validity period for a signing job created using this signing profile.
   *
   * @public
   */
  signatureValidityPeriod?: SignatureValidityPeriod | undefined;

  /**
   * The ID of a platform that is available for use by a signing profile.
   *
   * @public
   */
  platformId?: string | undefined;

  /**
   * The name of the signing platform.
   *
   * @public
   */
  platformDisplayName?: string | undefined;

  /**
   * The parameters that are available for use by a Signer user.
   *
   * @public
   */
  signingParameters?: Record<string, string> | undefined;

  /**
   * The status of a signing profile.
   *
   * @public
   */
  status?: SigningProfileStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) for the signing profile.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * A list of tags associated with the signing profile.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListSigningProfilesResponse {
  /**
   * A list of profiles that are available in the AWS account. This includes profiles with the status of `CANCELED` if the `includeCanceled` parameter is set to `true`.
   *
   * @public
   */
  profiles?: SigningProfile[] | undefined;

  /**
   * Value for specifying the next set of paginated results to return.
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
   * The Amazon Resource Name (ARN) for the signing profile.
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
   * A list of tags associated with the signing profile.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutSigningProfileRequest {
  /**
   * The name of the signing profile to be created.
   *
   * @public
   */
  profileName: string | undefined;

  /**
   * The AWS Certificate Manager certificate that will be used to sign code with the new signing profile.
   *
   * @public
   */
  signingMaterial?: SigningMaterial | undefined;

  /**
   * The default validity period override for any signature generated using this signing profile. If unspecified, the default is 135 months.
   *
   * @public
   */
  signatureValidityPeriod?: SignatureValidityPeriod | undefined;

  /**
   * The ID of the signing platform to be created.
   *
   * @public
   */
  platformId: string | undefined;

  /**
   * A subfield of `platform`. This specifies any different configuration options that you want to apply to the chosen platform (such as a different `hash-algorithm` or `signing-algorithm`).
   *
   * @public
   */
  overrides?: SigningPlatformOverrides | undefined;

  /**
   * Map of key-value pairs for signing. These can include any information that you want to use during signing.
   *
   * @public
   */
  signingParameters?: Record<string, string> | undefined;

  /**
   * Tags to be associated with the signing profile that is being created.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutSigningProfileResponse {
  /**
   * The Amazon Resource Name (ARN) of the signing profile created.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The version of the signing profile being created.
   *
   * @public
   */
  profileVersion?: string | undefined;

  /**
   * The signing profile ARN, including the profile version.
   *
   * @public
   */
  profileVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface RemoveProfilePermissionRequest {
  /**
   * A human-readable name for the signing profile with permissions to be removed.
   *
   * @public
   */
  profileName: string | undefined;

  /**
   * An identifier for the current revision of the signing profile permissions.
   *
   * @public
   */
  revisionId: string | undefined;

  /**
   * A unique identifier for the cross-account permissions statement.
   *
   * @public
   */
  statementId: string | undefined;
}

/**
 * @public
 */
export interface RemoveProfilePermissionResponse {
  /**
   * An identifier for the current revision of the profile permissions.
   *
   * @public
   */
  revisionId?: string | undefined;
}

/**
 * @public
 */
export interface RevokeSignatureRequest {
  /**
   * ID of the signing job to be revoked.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * AWS account ID of the job owner.
   *
   * @public
   */
  jobOwner?: string | undefined;

  /**
   * The reason for revoking the signing job.
   *
   * @public
   */
  reason: string | undefined;
}

/**
 * @public
 */
export interface RevokeSigningProfileRequest {
  /**
   * The name of the signing profile to be revoked.
   *
   * @public
   */
  profileName: string | undefined;

  /**
   * The version of the signing profile to be revoked.
   *
   * @public
   */
  profileVersion: string | undefined;

  /**
   * The reason for revoking a signing profile.
   *
   * @public
   */
  reason: string | undefined;

  /**
   * A timestamp for when revocation of a Signing Profile should become effective. Signatures generated using the signing profile after this timestamp are not trusted.
   *
   * @public
   */
  effectiveTime: Date | undefined;
}

/**
 * @public
 */
export interface SignPayloadRequest {
  /**
   * The name of the signing profile.
   *
   * @public
   */
  profileName: string | undefined;

  /**
   * The AWS account ID of the profile owner.
   *
   * @public
   */
  profileOwner?: string | undefined;

  /**
   * Specifies the object digest (hash) to sign.
   *
   * @public
   */
  payload: Uint8Array | undefined;

  /**
   * Payload content type. The single valid type is `application/vnd.cncf.notary.payload.v1+json`.
   *
   * @public
   */
  payloadFormat: string | undefined;
}

/**
 * @public
 */
export interface SignPayloadResponse {
  /**
   * Unique identifier of the signing job.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * The AWS account ID of the job owner.
   *
   * @public
   */
  jobOwner?: string | undefined;

  /**
   * Information including the signing profile ARN and the signing job ID.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * A cryptographic signature.
   *
   * @public
   */
  signature?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface StartSigningJobRequest {
  /**
   * The S3 bucket that contains the object to sign or a BLOB that contains your raw code.
   *
   * @public
   */
  source: Source | undefined;

  /**
   * The S3 bucket in which to save your signed object. The destination contains the name of your bucket and an optional prefix.
   *
   * @public
   */
  destination: Destination | undefined;

  /**
   * The name of the signing profile.
   *
   * @public
   */
  profileName: string | undefined;

  /**
   * String that identifies the signing request. All calls after the first that use this token return the same response as the first call.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * The AWS account ID of the signing profile owner.
   *
   * @public
   */
  profileOwner?: string | undefined;
}

/**
 * @public
 */
export interface StartSigningJobResponse {
  /**
   * The ID of your signing job.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * The AWS account ID of the signing job owner.
   *
   * @public
   */
  jobOwner?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) for the signing profile.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * One or more tags to be associated with the signing profile.
   *
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
   * The Amazon Resource Name (ARN) for the signing profile.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of tag keys to be removed from the signing profile.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
