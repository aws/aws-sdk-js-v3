// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SignerServiceException as __BaseException } from "./SignerServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  code?: string;
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
    this.code = opts.code;
  }
}

/**
 * @public
 */
export interface AddProfilePermissionRequest {
  /**
   * @public
   * <p>The human-readable name of the signing profile.</p>
   */
  profileName: string | undefined;

  /**
   * @public
   * <p>The version of the signing profile.</p>
   */
  profileVersion?: string;

  /**
   * @public
   * <p>The AWS Signer action permitted as part of cross-account permissions.</p>
   */
  action: string | undefined;

  /**
   * @public
   * <p>The AWS principal receiving cross-account permissions. This may be an IAM role or
   * 			another AWS account ID.</p>
   */
  principal: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the current profile revision.</p>
   */
  revisionId?: string;

  /**
   * @public
   * <p>A unique identifier for the cross-account permission statement.</p>
   */
  statementId: string | undefined;
}

/**
 * @public
 */
export interface AddProfilePermissionResponse {
  /**
   * @public
   * <p>A unique identifier for the current profile revision.</p>
   */
  revisionId?: string;
}

/**
 * @public
 * <p>The resource encountered a conflicting state.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.code = opts.code;
  }
}

/**
 * @public
 * <p>An internal error occurred.</p>
 */
export class InternalServiceErrorException extends __BaseException {
  readonly name: "InternalServiceErrorException" = "InternalServiceErrorException";
  readonly $fault: "server" = "server";
  code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceErrorException, __BaseException>) {
    super({
      name: "InternalServiceErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceErrorException.prototype);
    this.code = opts.code;
  }
}

/**
 * @public
 * <p>A specified resource could not be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  code?: string;
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
    this.code = opts.code;
  }
}

/**
 * @public
 * <p>The client is making a request that exceeds service limits.</p>
 */
export class ServiceLimitExceededException extends __BaseException {
  readonly name: "ServiceLimitExceededException" = "ServiceLimitExceededException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceLimitExceededException, __BaseException>) {
    super({
      name: "ServiceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceLimitExceededException.prototype);
    this.code = opts.code;
  }
}

/**
 * @public
 * <p>The allowed number of job-signing requests has been exceeded.</p>
 * 		       <p>This error supersedes the error <code>ThrottlingException</code>.</p>
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.code = opts.code;
  }
}

/**
 * @public
 * <p>You signing certificate could not be validated.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  code?: string;
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
    this.code = opts.code;
  }
}

/**
 * @public
 * <p>The request contains invalid parameters for the ARN or tags. This exception also
 * 			occurs when you call a tagging API on a cancelled signing profile.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.code = opts.code;
  }
}

/**
 * @public
 */
export interface CancelSigningProfileRequest {
  /**
   * @public
   * <p>The name of the signing profile to be canceled.</p>
   */
  profileName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Category = {
  AWSIoT: "AWSIoT",
} as const;

/**
 * @public
 */
export type Category = (typeof Category)[keyof typeof Category];

/**
 * @public
 */
export interface DescribeSigningJobRequest {
  /**
   * @public
   * <p>The ID of the signing job on input.</p>
   */
  jobId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EncryptionAlgorithm = {
  ECDSA: "ECDSA",
  RSA: "RSA",
} as const;

/**
 * @public
 */
export type EncryptionAlgorithm = (typeof EncryptionAlgorithm)[keyof typeof EncryptionAlgorithm];

/**
 * @public
 * @enum
 */
export const HashAlgorithm = {
  SHA1: "SHA1",
  SHA256: "SHA256",
} as const;

/**
 * @public
 */
export type HashAlgorithm = (typeof HashAlgorithm)[keyof typeof HashAlgorithm];

/**
 * @public
 * <p>A signing configuration that overrides the default encryption or hash algorithm of a
 * 			signing job.</p>
 */
export interface SigningConfigurationOverrides {
  /**
   * @public
   * <p>A specified override of the default encryption algorithm that is used in a code signing
   * 			job.</p>
   */
  encryptionAlgorithm?: EncryptionAlgorithm | string;

  /**
   * @public
   * <p>A specified override of the default hash algorithm that is used in a code signing
   * 			job.</p>
   */
  hashAlgorithm?: HashAlgorithm | string;
}

/**
 * @public
 * @enum
 */
export const ImageFormat = {
  JSON: "JSON",
  JSONDetached: "JSONDetached",
  JSONEmbedded: "JSONEmbedded",
} as const;

/**
 * @public
 */
export type ImageFormat = (typeof ImageFormat)[keyof typeof ImageFormat];

/**
 * @public
 * <p>Any overrides that are applied to the signing configuration of a code signing
 * 			platform.</p>
 */
export interface SigningPlatformOverrides {
  /**
   * @public
   * <p>A signing configuration that overrides the default encryption or hash algorithm of a
   * 			signing job.</p>
   */
  signingConfiguration?: SigningConfigurationOverrides;

  /**
   * @public
   * <p>A signed image is a JSON object. When overriding the default signing platform
   * 			configuration, a customer can select either of two signing formats,
   * 				<code>JSONEmbedded</code> or <code>JSONDetached</code>. (A third format value,
   * 				<code>JSON</code>, is reserved for future use.) With <code>JSONEmbedded</code>, the
   * 			signing image has the payload embedded in it. With <code>JSONDetached</code>, the
   * 			payload is not be embedded in the signing image.</p>
   */
  signingImageFormat?: ImageFormat | string;
}

/**
 * @public
 * <p>Revocation information for a signing job.</p>
 */
export interface SigningJobRevocationRecord {
  /**
   * @public
   * <p>A caller-supplied reason for revocation.</p>
   */
  reason?: string;

  /**
   * @public
   * <p>The time of revocation.</p>
   */
  revokedAt?: Date;

  /**
   * @public
   * <p>The identity of the revoker.</p>
   */
  revokedBy?: string;
}

/**
 * @public
 * <p>The S3 bucket name and key where code signing saved your signed code image.</p>
 */
export interface S3SignedObject {
  /**
   * @public
   * <p>Name of the S3 bucket.</p>
   */
  bucketName?: string;

  /**
   * @public
   * <p>Key name that uniquely identifies a signed code image in your bucket.</p>
   */
  key?: string;
}

/**
 * @public
 * <p>Points to an <code>S3SignedObject</code> object that contains information about your
 * 			signed code image.</p>
 */
export interface SignedObject {
  /**
   * @public
   * <p>The <code>S3SignedObject</code>.</p>
   */
  s3?: S3SignedObject;
}

/**
 * @public
 * <p>The ACM certificate that is used to sign your code.</p>
 */
export interface SigningMaterial {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the certificates that is used to sign your
   * 			code.</p>
   */
  certificateArn: string | undefined;
}

/**
 * @public
 * <p>Information about the S3 bucket where you saved your unsigned code.</p>
 */
export interface S3Source {
  /**
   * @public
   * <p>Name of the S3 bucket.</p>
   */
  bucketName: string | undefined;

  /**
   * @public
   * <p>Key name of the bucket object that contains your unsigned code.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>Version of your source image in your version enabled S3 bucket.</p>
   */
  version: string | undefined;
}

/**
 * @public
 * <p>An <code>S3Source</code> object that contains information about the S3 bucket where
 * 			you saved your unsigned code.</p>
 */
export interface Source {
  /**
   * @public
   * <p>The <code>S3Source</code> object.</p>
   */
  s3?: S3Source;
}

/**
 * @public
 * @enum
 */
export const SigningStatus = {
  Failed: "Failed",
  InProgress: "InProgress",
  Succeeded: "Succeeded",
} as const;

/**
 * @public
 */
export type SigningStatus = (typeof SigningStatus)[keyof typeof SigningStatus];

/**
 * @public
 */
export interface DescribeSigningJobResponse {
  /**
   * @public
   * <p>The ID of the signing job on output.</p>
   */
  jobId?: string;

  /**
   * @public
   * <p>The object that contains the name of your S3 bucket or your raw code.</p>
   */
  source?: Source;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of your code signing certificate.</p>
   */
  signingMaterial?: SigningMaterial;

  /**
   * @public
   * <p>The microcontroller platform to which your signed code image will be
   * 			distributed.</p>
   */
  platformId?: string;

  /**
   * @public
   * <p>A human-readable name for the signing platform associated with the signing job.</p>
   */
  platformDisplayName?: string;

  /**
   * @public
   * <p>The name of the profile that initiated the signing operation.</p>
   */
  profileName?: string;

  /**
   * @public
   * <p>The version of the signing profile used to initiate the signing job.</p>
   */
  profileVersion?: string;

  /**
   * @public
   * <p>A list of any overrides that were applied to the signing operation.</p>
   */
  overrides?: SigningPlatformOverrides;

  /**
   * @public
   * <p>Map of user-assigned key-value pairs used during signing. These values contain any
   * 			information that you specified for use in your signing job. </p>
   */
  signingParameters?: Record<string, string>;

  /**
   * @public
   * <p>Date and time that the signing job was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>Date and time that the signing job was completed.</p>
   */
  completedAt?: Date;

  /**
   * @public
   * <p>Thr expiration timestamp for the signature generated by the signing job.</p>
   */
  signatureExpiresAt?: Date;

  /**
   * @public
   * <p>The IAM principal that requested the signing job.</p>
   */
  requestedBy?: string;

  /**
   * @public
   * <p>Status of the signing job.</p>
   */
  status?: SigningStatus | string;

  /**
   * @public
   * <p>String value that contains the status reason.</p>
   */
  statusReason?: string;

  /**
   * @public
   * <p>A revocation record if the signature generated by the signing job has been revoked.
   * 			Contains a timestamp and the ID of the IAM entity that revoked the signature.</p>
   */
  revocationRecord?: SigningJobRevocationRecord;

  /**
   * @public
   * <p>Name of the S3 bucket where the signed code image is saved by code signing.</p>
   */
  signedObject?: SignedObject;

  /**
   * @public
   * <p>The AWS account ID of the job owner.</p>
   */
  jobOwner?: string;

  /**
   * @public
   * <p>The IAM entity that initiated the signing job.</p>
   */
  jobInvoker?: string;
}

/**
 * @public
 * <p>The name and prefix of the S3 bucket where code signing saves your signed objects.</p>
 */
export interface S3Destination {
  /**
   * @public
   * <p>Name of the S3 bucket.</p>
   */
  bucketName?: string;

  /**
   * @public
   * <p>An Amazon S3 prefix that you can use to limit responses to those that begin with the
   * 			specified prefix.</p>
   */
  prefix?: string;
}

/**
 * @public
 * <p>Points to an <code>S3Destination</code> object that contains information about your S3
 * 			bucket.</p>
 */
export interface Destination {
  /**
   * @public
   * <p>The <code>S3Destination</code> object.</p>
   */
  s3?: S3Destination;
}

/**
 * @public
 * <p>The encryption algorithm options that are available to a code signing job.</p>
 */
export interface EncryptionAlgorithmOptions {
  /**
   * @public
   * <p>The set of accepted encryption algorithms that are allowed in a code signing job.</p>
   */
  allowedValues: (EncryptionAlgorithm | string)[] | undefined;

  /**
   * @public
   * <p>The default encryption algorithm that is used by a code signing job.</p>
   */
  defaultValue: EncryptionAlgorithm | string | undefined;
}

/**
 * @public
 */
export interface GetRevocationStatusRequest {
  /**
   * @public
   * <p>The timestamp of the signature that validates the profile or job.</p>
   */
  signatureTimestamp: Date | undefined;

  /**
   * @public
   * <p>The ID of a signing platform. </p>
   */
  platformId: string | undefined;

  /**
   * @public
   * <p>The version of a signing profile.</p>
   */
  profileVersionArn: string | undefined;

  /**
   * @public
   * <p>The ARN of a signing job.</p>
   */
  jobArn: string | undefined;

  /**
   * @public
   * <p>A list of composite signed hashes that identify certificates.</p>
   * 		       <p>A certificate identifier consists of a subject certificate TBS hash (signed by the
   * 			parent CA) combined with a parent CA TBS hash (signed by the parent CA’s CA). Root
   * 			certificates are defined as their own CA.</p>
   */
  certificateHashes: string[] | undefined;
}

/**
 * @public
 */
export interface GetRevocationStatusResponse {
  /**
   * @public
   * <p>A list of revoked entities (including one or more of the signing profile ARN, signing
   * 			job ID, and certificate hash) supplied as input to the API.</p>
   */
  revokedEntities?: string[];
}

/**
 * @public
 */
export interface GetSigningPlatformRequest {
  /**
   * @public
   * <p>The ID of the target signing platform.</p>
   */
  platformId: string | undefined;
}

/**
 * @public
 * <p>The hash algorithms that are available to a code signing job.</p>
 */
export interface HashAlgorithmOptions {
  /**
   * @public
   * <p>The set of accepted hash algorithms allowed in a code signing job.</p>
   */
  allowedValues: (HashAlgorithm | string)[] | undefined;

  /**
   * @public
   * <p>The default hash algorithm that is used in a code signing job.</p>
   */
  defaultValue: HashAlgorithm | string | undefined;
}

/**
 * @public
 * <p>The configuration of a code signing operation.</p>
 */
export interface SigningConfiguration {
  /**
   * @public
   * <p>The encryption algorithm options that are available for a code signing job.</p>
   */
  encryptionAlgorithmOptions: EncryptionAlgorithmOptions | undefined;

  /**
   * @public
   * <p>The hash algorithm options that are available for a code signing job.</p>
   */
  hashAlgorithmOptions: HashAlgorithmOptions | undefined;
}

/**
 * @public
 * <p>The image format of a code signing platform or profile.</p>
 */
export interface SigningImageFormat {
  /**
   * @public
   * <p>The supported formats of a code signing image.</p>
   */
  supportedFormats: (ImageFormat | string)[] | undefined;

  /**
   * @public
   * <p>The default format of a code signing image.</p>
   */
  defaultFormat: ImageFormat | string | undefined;
}

/**
 * @public
 */
export interface GetSigningPlatformResponse {
  /**
   * @public
   * <p>The ID of the target signing platform.</p>
   */
  platformId?: string;

  /**
   * @public
   * <p>The display name of the target signing platform.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>A list of partner entities that use the target signing platform.</p>
   */
  partner?: string;

  /**
   * @public
   * <p>The validation template that is used by the target signing platform.</p>
   */
  target?: string;

  /**
   * @public
   * <p>The category type of the target signing platform.</p>
   */
  category?: Category | string;

  /**
   * @public
   * <p>A list of configurations applied to the target platform at signing.</p>
   */
  signingConfiguration?: SigningConfiguration;

  /**
   * @public
   * <p>The format of the target platform's signing image.</p>
   */
  signingImageFormat?: SigningImageFormat;

  /**
   * @public
   * <p>The maximum size (in MB) of the payload that can be signed by the target
   * 			platform.</p>
   */
  maxSizeInMB?: number;

  /**
   * @public
   * <p>A flag indicating whether signatures generated for the signing platform can be
   * 			revoked.</p>
   */
  revocationSupported?: boolean;
}

/**
 * @public
 */
export interface GetSigningProfileRequest {
  /**
   * @public
   * <p>The name of the target signing profile.</p>
   */
  profileName: string | undefined;

  /**
   * @public
   * <p>The AWS account ID of the profile owner.</p>
   */
  profileOwner?: string;
}

/**
 * @public
 * <p>Revocation information for a signing profile.</p>
 */
export interface SigningProfileRevocationRecord {
  /**
   * @public
   * <p>The time when revocation becomes effective.</p>
   */
  revocationEffectiveFrom?: Date;

  /**
   * @public
   * <p>The time when the signing profile was revoked.</p>
   */
  revokedAt?: Date;

  /**
   * @public
   * <p>The identity of the revoker.</p>
   */
  revokedBy?: string;
}

/**
 * @public
 * @enum
 */
export const ValidityType = {
  DAYS: "DAYS",
  MONTHS: "MONTHS",
  YEARS: "YEARS",
} as const;

/**
 * @public
 */
export type ValidityType = (typeof ValidityType)[keyof typeof ValidityType];

/**
 * @public
 * <p>The validity period for a signing job.</p>
 */
export interface SignatureValidityPeriod {
  /**
   * @public
   * <p>The numerical value of the time unit for signature validity.</p>
   */
  value?: number;

  /**
   * @public
   * <p>The time unit for signature validity.</p>
   */
  type?: ValidityType | string;
}

/**
 * @public
 * @enum
 */
export const SigningProfileStatus = {
  Active: "Active",
  Canceled: "Canceled",
  Revoked: "Revoked",
} as const;

/**
 * @public
 */
export type SigningProfileStatus = (typeof SigningProfileStatus)[keyof typeof SigningProfileStatus];

/**
 * @public
 */
export interface GetSigningProfileResponse {
  /**
   * @public
   * <p>The name of the target signing profile.</p>
   */
  profileName?: string;

  /**
   * @public
   * <p>The current version of the signing profile.</p>
   */
  profileVersion?: string;

  /**
   * @public
   * <p>The signing profile ARN, including the profile version.</p>
   */
  profileVersionArn?: string;

  /**
   * @public
   * <p>Revocation information for a signing profile.</p>
   */
  revocationRecord?: SigningProfileRevocationRecord;

  /**
   * @public
   * <p>The ARN of the certificate that the target profile uses for signing operations.</p>
   */
  signingMaterial?: SigningMaterial;

  /**
   * @public
   * <p>The ID of the platform that is used by the target signing profile.</p>
   */
  platformId?: string;

  /**
   * @public
   * <p>A human-readable name for the signing platform associated with the signing
   * 			profile.</p>
   */
  platformDisplayName?: string;

  /**
   * @public
   * <p>The validity period for a signing job.</p>
   */
  signatureValidityPeriod?: SignatureValidityPeriod;

  /**
   * @public
   * <p>A list of overrides applied by the target signing profile for signing
   * 			operations.</p>
   */
  overrides?: SigningPlatformOverrides;

  /**
   * @public
   * <p>A map of key-value pairs for signing operations that is attached to the target signing
   * 			profile.</p>
   */
  signingParameters?: Record<string, string>;

  /**
   * @public
   * <p>The status of the target signing profile.</p>
   */
  status?: SigningProfileStatus | string;

  /**
   * @public
   * <p>Reason for the status of the target signing profile.</p>
   */
  statusReason?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the signing profile.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>A list of tags associated with the signing profile.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListProfilePermissionsRequest {
  /**
   * @public
   * <p>Name of the signing profile containing the cross-account permissions.</p>
   */
  profileName: string | undefined;

  /**
   * @public
   * <p>String for specifying the next set of paginated results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>A cross-account permission for a signing profile.</p>
 */
export interface Permission {
  /**
   * @public
   * <p>An AWS Signer action permitted as part of cross-account permissions.</p>
   */
  action?: string;

  /**
   * @public
   * <p>The AWS principal that has been granted a cross-account permission.</p>
   */
  principal?: string;

  /**
   * @public
   * <p>A unique identifier for a cross-account permission statement.</p>
   */
  statementId?: string;

  /**
   * @public
   * <p>The signing profile version that a permission applies to.</p>
   */
  profileVersion?: string;
}

/**
 * @public
 */
export interface ListProfilePermissionsResponse {
  /**
   * @public
   * <p>The identifier for the current revision of profile permissions.</p>
   */
  revisionId?: string;

  /**
   * @public
   * <p>Total size of the policy associated with the Signing Profile in bytes.</p>
   */
  policySizeBytes?: number;

  /**
   * @public
   * <p>List of permissions associated with the Signing Profile.</p>
   */
  permissions?: Permission[];

  /**
   * @public
   * <p>String for specifying the next set of paginated results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSigningJobsRequest {
  /**
   * @public
   * <p>A status value with which to filter your results.</p>
   */
  status?: SigningStatus | string;

  /**
   * @public
   * <p>The ID of microcontroller platform that you specified for the distribution of your
   * 			code image.</p>
   */
  platformId?: string;

  /**
   * @public
   * <p>The IAM principal that requested the signing job.</p>
   */
  requestedBy?: string;

  /**
   * @public
   * <p>Specifies the maximum number of items to return in the response. Use this parameter
   * 			when paginating results. If additional items exist beyond the number you specify, the
   * 				<code>nextToken</code> element is set in the response. Use the
   * 				<code>nextToken</code> value in a subsequent request to retrieve additional items.
   * 		</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>String for specifying the next set of paginated results to return. After you receive a
   * 			response with truncated results, use this parameter in a subsequent request. Set it to
   * 			the value of <code>nextToken</code> from the response that you just received.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Filters results to return only signing jobs with revoked signatures.</p>
   */
  isRevoked?: boolean;

  /**
   * @public
   * <p>Filters results to return only signing jobs with signatures expiring before a
   * 			specified timestamp.</p>
   */
  signatureExpiresBefore?: Date;

  /**
   * @public
   * <p>Filters results to return only signing jobs with signatures expiring after a specified
   * 			timestamp.</p>
   */
  signatureExpiresAfter?: Date;

  /**
   * @public
   * <p>Filters results to return only signing jobs initiated by a specified IAM
   * 			entity.</p>
   */
  jobInvoker?: string;
}

/**
 * @public
 * <p>Contains information about a signing job.</p>
 */
export interface SigningJob {
  /**
   * @public
   * <p>The ID of the signing job.</p>
   */
  jobId?: string;

  /**
   * @public
   * <p>A <code>Source</code> that contains information about a signing job's code image
   * 			source.</p>
   */
  source?: Source;

  /**
   * @public
   * <p>A <code>SignedObject</code> structure that contains information about a signing job's
   * 			signed code image.</p>
   */
  signedObject?: SignedObject;

  /**
   * @public
   * <p>A <code>SigningMaterial</code> object that contains the Amazon Resource Name (ARN) of
   * 			the certificate used for the signing job.</p>
   */
  signingMaterial?: SigningMaterial;

  /**
   * @public
   * <p>The date and time that the signing job was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The status of the signing job.</p>
   */
  status?: SigningStatus | string;

  /**
   * @public
   * <p>Indicates whether the signing job is revoked.</p>
   */
  isRevoked?: boolean;

  /**
   * @public
   * <p>The name of the signing profile that created a signing job.</p>
   */
  profileName?: string;

  /**
   * @public
   * <p>The version of the signing profile that created a signing job.</p>
   */
  profileVersion?: string;

  /**
   * @public
   * <p>The unique identifier for a signing platform.</p>
   */
  platformId?: string;

  /**
   * @public
   * <p>The name of a signing platform.</p>
   */
  platformDisplayName?: string;

  /**
   * @public
   * <p>The time when the signature of a signing job expires.</p>
   */
  signatureExpiresAt?: Date;

  /**
   * @public
   * <p>The AWS account ID of the job owner.</p>
   */
  jobOwner?: string;

  /**
   * @public
   * <p>The AWS account ID of the job invoker.</p>
   */
  jobInvoker?: string;
}

/**
 * @public
 */
export interface ListSigningJobsResponse {
  /**
   * @public
   * <p>A list of your signing jobs.</p>
   */
  jobs?: SigningJob[];

  /**
   * @public
   * <p>String for specifying the next set of paginated results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSigningPlatformsRequest {
  /**
   * @public
   * <p>The category type of a signing platform.</p>
   */
  category?: string;

  /**
   * @public
   * <p>Any partner entities connected to a signing platform.</p>
   */
  partner?: string;

  /**
   * @public
   * <p>The validation template that is used by the target signing platform.</p>
   */
  target?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned by this operation.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Value for specifying the next set of paginated results to return. After you receive a
   * 			response with truncated results, use this parameter in a subsequent request. Set it to
   * 			the value of <code>nextToken</code> from the response that you just received.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Contains information about the signing configurations and parameters that are used to
 * 			perform a code signing job.</p>
 */
export interface SigningPlatform {
  /**
   * @public
   * <p>The ID of a code signing platform.</p>
   */
  platformId?: string;

  /**
   * @public
   * <p>The display name of a code signing platform.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>Any partner entities linked to a code signing platform.</p>
   */
  partner?: string;

  /**
   * @public
   * <p>The types of targets that can be signed by a code signing platform.</p>
   */
  target?: string;

  /**
   * @public
   * <p>The category of a code signing platform.</p>
   */
  category?: Category | string;

  /**
   * @public
   * <p>The configuration of a code signing platform. This includes the designated hash algorithm
   * 			and encryption algorithm of a signing platform.</p>
   */
  signingConfiguration?: SigningConfiguration;

  /**
   * @public
   * <p>The image format of a code signing platform or profile.</p>
   */
  signingImageFormat?: SigningImageFormat;

  /**
   * @public
   * <p>The maximum size (in MB) of code that can be signed by a code signing platform.</p>
   */
  maxSizeInMB?: number;

  /**
   * @public
   * <p>Indicates whether revocation is supported for the platform.</p>
   */
  revocationSupported?: boolean;
}

/**
 * @public
 */
export interface ListSigningPlatformsResponse {
  /**
   * @public
   * <p>A list of all platforms that match the request parameters.</p>
   */
  platforms?: SigningPlatform[];

  /**
   * @public
   * <p>Value for specifying the next set of paginated results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSigningProfilesRequest {
  /**
   * @public
   * <p>Designates whether to include profiles with the status of
   * 			<code>CANCELED</code>.</p>
   */
  includeCanceled?: boolean;

  /**
   * @public
   * <p>The maximum number of profiles to be returned.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Value for specifying the next set of paginated results to return. After you receive a
   * 			response with truncated results, use this parameter in a subsequent request. Set it to
   * 			the value of <code>nextToken</code> from the response that you just received.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Filters results to return only signing jobs initiated for a specified signing
   * 			platform.</p>
   */
  platformId?: string;

  /**
   * @public
   * <p>Filters results to return only signing jobs with statuses in the specified
   * 			list.</p>
   */
  statuses?: (SigningProfileStatus | string)[];
}

/**
 * @public
 * <p>Contains information about the ACM certificates and code signing configuration parameters
 * 			that can be used by a given code signing user.</p>
 */
export interface SigningProfile {
  /**
   * @public
   * <p>The name of the signing profile.</p>
   */
  profileName?: string;

  /**
   * @public
   * <p>The version of a signing profile.</p>
   */
  profileVersion?: string;

  /**
   * @public
   * <p>The ARN of a signing profile, including the profile version.</p>
   */
  profileVersionArn?: string;

  /**
   * @public
   * <p>The ACM certificate that is available for use by a signing profile.</p>
   */
  signingMaterial?: SigningMaterial;

  /**
   * @public
   * <p>The validity period for a signing job created using this signing profile.</p>
   */
  signatureValidityPeriod?: SignatureValidityPeriod;

  /**
   * @public
   * <p>The ID of a platform that is available for use by a signing profile.</p>
   */
  platformId?: string;

  /**
   * @public
   * <p>The name of the signing platform.</p>
   */
  platformDisplayName?: string;

  /**
   * @public
   * <p>The parameters that are available for use by a code signing user.</p>
   */
  signingParameters?: Record<string, string>;

  /**
   * @public
   * <p>The status of a code signing profile.</p>
   */
  status?: SigningProfileStatus | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the signing profile.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>A list of tags associated with the signing profile.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListSigningProfilesResponse {
  /**
   * @public
   * <p>A list of profiles that are available in the AWS account. This includes profiles with
   * 			the status of <code>CANCELED</code> if the <code>includeCanceled</code> parameter is set
   * 			to <code>true</code>.</p>
   */
  profiles?: SigningProfile[];

  /**
   * @public
   * <p>Value for specifying the next set of paginated results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the signing profile.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>A list of tags associated with the signing profile.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>The signing profile was not found.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.code = opts.code;
  }
}

/**
 * @public
 */
export interface PutSigningProfileRequest {
  /**
   * @public
   * <p>The name of the signing profile to be created.</p>
   */
  profileName: string | undefined;

  /**
   * @public
   * <p>The AWS Certificate Manager certificate that will be used to sign code with the new signing
   * 			profile.</p>
   */
  signingMaterial?: SigningMaterial;

  /**
   * @public
   * <p>The default validity period override for any signature generated using this signing
   * 			profile. If unspecified, the default is 135 months.</p>
   */
  signatureValidityPeriod?: SignatureValidityPeriod;

  /**
   * @public
   * <p>The ID of the signing platform to be created.</p>
   */
  platformId: string | undefined;

  /**
   * @public
   * <p>A subfield of <code>platform</code>. This specifies any different configuration
   * 			options that you want to apply to the chosen platform (such as a different
   * 				<code>hash-algorithm</code> or <code>signing-algorithm</code>).</p>
   */
  overrides?: SigningPlatformOverrides;

  /**
   * @public
   * <p>Map of key-value pairs for signing. These can include any information that you want to
   * 			use during signing.</p>
   */
  signingParameters?: Record<string, string>;

  /**
   * @public
   * <p>Tags to be associated with the signing profile that is being created.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface PutSigningProfileResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the signing profile created.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The version of the signing profile being created.</p>
   */
  profileVersion?: string;

  /**
   * @public
   * <p>The signing profile ARN, including the profile version.</p>
   */
  profileVersionArn?: string;
}

/**
 * @public
 */
export interface RemoveProfilePermissionRequest {
  /**
   * @public
   * <p>A human-readable name for the signing profile with permissions to be removed.</p>
   */
  profileName: string | undefined;

  /**
   * @public
   * <p>An identifier for the current revision of the signing profile permissions.</p>
   */
  revisionId: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the cross-account permissions statement.</p>
   */
  statementId: string | undefined;
}

/**
 * @public
 */
export interface RemoveProfilePermissionResponse {
  /**
   * @public
   * <p>An identifier for the current revision of the profile permissions.</p>
   */
  revisionId?: string;
}

/**
 * @public
 */
export interface RevokeSignatureRequest {
  /**
   * @public
   * <p>ID of the signing job to be revoked.</p>
   */
  jobId: string | undefined;

  /**
   * @public
   * <p>AWS account ID of the job owner.</p>
   */
  jobOwner?: string;

  /**
   * @public
   * <p>The reason for revoking the signing job.</p>
   */
  reason: string | undefined;
}

/**
 * @public
 */
export interface RevokeSigningProfileRequest {
  /**
   * @public
   * <p>The name of the signing profile to be revoked.</p>
   */
  profileName: string | undefined;

  /**
   * @public
   * <p>The version of the signing profile to be revoked.</p>
   */
  profileVersion: string | undefined;

  /**
   * @public
   * <p>The reason for revoking a signing profile.</p>
   */
  reason: string | undefined;

  /**
   * @public
   * <p>A timestamp for when revocation of a Signing Profile should become effective.
   * 			Signatures generated using the signing profile after this timestamp are not
   * 			trusted.</p>
   */
  effectiveTime: Date | undefined;
}

/**
 * @public
 */
export interface SignPayloadRequest {
  /**
   * @public
   * <p>The name of the signing profile.</p>
   */
  profileName: string | undefined;

  /**
   * @public
   * <p>The AWS account ID of the profile owner.</p>
   */
  profileOwner?: string;

  /**
   * @public
   * <p>Specifies the object digest (hash) to sign.</p>
   */
  payload: Uint8Array | undefined;

  /**
   * @public
   * <p>Payload content type</p>
   */
  payloadFormat: string | undefined;
}

/**
 * @public
 */
export interface SignPayloadResponse {
  /**
   * @public
   * <p>Unique identifier of the signing job.</p>
   */
  jobId?: string;

  /**
   * @public
   * <p>The AWS account ID of the job owner.</p>
   */
  jobOwner?: string;

  /**
   * @public
   * <p>Information including the signing profile ARN and the signing job ID. Clients use
   * 			metadata to signature records, for example, as annotations added to the signature
   * 			manifest inside an OCI registry.</p>
   */
  metadata?: Record<string, string>;

  /**
   * @public
   * <p>A cryptographic signature.</p>
   */
  signature?: Uint8Array;
}

/**
 * @public
 */
export interface StartSigningJobRequest {
  /**
   * @public
   * <p>The S3 bucket that contains the object to sign or a BLOB that contains your raw
   * 			code.</p>
   */
  source: Source | undefined;

  /**
   * @public
   * <p>The S3 bucket in which to save your signed object. The destination contains the name
   * 			of your bucket and an optional prefix.</p>
   */
  destination: Destination | undefined;

  /**
   * @public
   * <p>The name of the signing profile.</p>
   */
  profileName: string | undefined;

  /**
   * @public
   * <p>String that identifies the signing request. All calls after the first that use this
   * 			token return the same response as the first call.</p>
   */
  clientRequestToken?: string;

  /**
   * @public
   * <p>The AWS account ID of the signing profile owner.</p>
   */
  profileOwner?: string;
}

/**
 * @public
 */
export interface StartSigningJobResponse {
  /**
   * @public
   * <p>The ID of your signing job.</p>
   */
  jobId?: string;

  /**
   * @public
   * <p>The AWS account ID of the signing job owner.</p>
   */
  jobOwner?: string;
}

/**
 * @public
 * @deprecated
 *
 * <p>The request was denied due to request throttling.</p>
 * 		       <p>Instead of this error, <code>TooManyRequestsException</code> should be used.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.code = opts.code;
  }
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the signing profile.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>One or more tags to be associated with the signing profile.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) for the signing profile.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>A list of tag keys to be removed from the signing profile.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
