// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SignerServiceException as __BaseException } from "./SignerServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
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
   * <p>The human-readable name of the signing profile.</p>
   * @public
   */
  profileName: string | undefined;

  /**
   * <p>The version of the signing profile.</p>
   * @public
   */
  profileVersion?: string;

  /**
   * <p>For cross-account signing. Grant a designated account permission to perform one or more of the following actions. Each action is associated with a specific API's operations. For more information about cross-account signing, see <a href="https://docs.aws.amazon.com/signer/latest/developerguide/signing-profile-cross-account.html">Using cross-account signing with signing profiles</a> in the <i>AWS Signer Developer Guide</i>.</p>
   * 		       <p>You can designate the following actions to an account.</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>signer:StartSigningJob</code>. This action isn't supported for container image workflows. For details, see <a>StartSigningJob</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>signer:SignPayload</code>. This action isn't supported for AWS Lambda workflows. For details, see <a>SignPayload</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>signer:GetSigningProfile</code>. For details, see <a>GetSigningProfile</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>signer:RevokeSignature</code>. For details, see <a>RevokeSignature</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  action: string | undefined;

  /**
   * <p>The AWS principal receiving cross-account permissions. This may be an IAM role or another
   * 			AWS account ID.</p>
   * @public
   */
  principal: string | undefined;

  /**
   * <p>A unique identifier for the current profile revision.</p>
   * @public
   */
  revisionId?: string;

  /**
   * <p>A unique identifier for the cross-account permission statement.</p>
   * @public
   */
  statementId: string | undefined;
}

/**
 * @public
 */
export interface AddProfilePermissionResponse {
  /**
   * <p>A unique identifier for the current profile revision.</p>
   * @public
   */
  revisionId?: string;
}

/**
 * <p>The resource encountered a conflicting state.</p>
 * @public
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
 * <p>An internal error occurred.</p>
 * @public
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
 * <p>A specified resource could not be found.</p>
 * @public
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
 * <p>The client is making a request that exceeds service limits.</p>
 * @public
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
 * <p>The allowed number of job-signing requests has been exceeded.</p>
 * 		       <p>This error supersedes the error <code>ThrottlingException</code>.</p>
 * @public
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
 * <p>You signing certificate could not be validated.</p>
 * @public
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
 * <p>The request contains invalid parameters for the ARN or tags. This exception also
 * 			occurs when you call a tagging API on a cancelled signing profile.</p>
 * @public
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
   * <p>The name of the signing profile to be canceled.</p>
   * @public
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
   * <p>The ID of the signing job on input.</p>
   * @public
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
 * <p>A signing configuration that overrides the default encryption or hash algorithm of a
 * 			signing job.</p>
 * @public
 */
export interface SigningConfigurationOverrides {
  /**
   * <p>A specified override of the default encryption algorithm that is used in a code-signing
   * 			job.</p>
   * @public
   */
  encryptionAlgorithm?: EncryptionAlgorithm;

  /**
   * <p>A specified override of the default hash algorithm that is used in a code-signing
   * 			job.</p>
   * @public
   */
  hashAlgorithm?: HashAlgorithm;
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
 * <p>Any overrides that are applied to the signing configuration of a signing platform.</p>
 * @public
 */
export interface SigningPlatformOverrides {
  /**
   * <p>A signing configuration that overrides the default encryption or hash algorithm of a
   * 			signing job.</p>
   * @public
   */
  signingConfiguration?: SigningConfigurationOverrides;

  /**
   * <p>A signed image is a JSON object. When overriding the default signing platform
   * 			configuration, a customer can select either of two signing formats,
   * 				<code>JSONEmbedded</code> or <code>JSONDetached</code>. (A third format value,
   * 				<code>JSON</code>, is reserved for future use.) With <code>JSONEmbedded</code>, the
   * 			signing image has the payload embedded in it. With <code>JSONDetached</code>, the
   * 			payload is not be embedded in the signing image.</p>
   * @public
   */
  signingImageFormat?: ImageFormat;
}

/**
 * <p>Revocation information for a signing job.</p>
 * @public
 */
export interface SigningJobRevocationRecord {
  /**
   * <p>A caller-supplied reason for revocation.</p>
   * @public
   */
  reason?: string;

  /**
   * <p>The time of revocation.</p>
   * @public
   */
  revokedAt?: Date;

  /**
   * <p>The identity of the revoker.</p>
   * @public
   */
  revokedBy?: string;
}

/**
 * <p>The Amazon S3 bucket name and key where Signer saved your signed code image.</p>
 * @public
 */
export interface S3SignedObject {
  /**
   * <p>Name of the S3 bucket.</p>
   * @public
   */
  bucketName?: string;

  /**
   * <p>Key name that uniquely identifies a signed code image in your bucket.</p>
   * @public
   */
  key?: string;
}

/**
 * <p>Points to an <code>S3SignedObject</code> object that contains information about your
 * 			signed code image.</p>
 * @public
 */
export interface SignedObject {
  /**
   * <p>The <code>S3SignedObject</code>.</p>
   * @public
   */
  s3?: S3SignedObject;
}

/**
 * <p>The ACM certificate that is used to sign your code.</p>
 * @public
 */
export interface SigningMaterial {
  /**
   * <p>The Amazon Resource Name (ARN) of the certificates that is used to sign your
   * 			code.</p>
   * @public
   */
  certificateArn: string | undefined;
}

/**
 * <p>Information about the Amazon S3 bucket where you saved your unsigned code.</p>
 * @public
 */
export interface S3Source {
  /**
   * <p>Name of the S3 bucket.</p>
   * @public
   */
  bucketName: string | undefined;

  /**
   * <p>Key name of the bucket object that contains your unsigned code.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>Version of your source image in your version enabled S3 bucket.</p>
   * @public
   */
  version: string | undefined;
}

/**
 * <p>An <code>S3Source</code> object that contains information about the S3 bucket where
 * 			you saved your unsigned code.</p>
 * @public
 */
export interface Source {
  /**
   * <p>The <code>S3Source</code> object.</p>
   * @public
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
   * <p>The ID of the signing job on output.</p>
   * @public
   */
  jobId?: string;

  /**
   * <p>The object that contains the name of your S3 bucket or your raw code.</p>
   * @public
   */
  source?: Source;

  /**
   * <p>The Amazon Resource Name (ARN) of your code signing certificate.</p>
   * @public
   */
  signingMaterial?: SigningMaterial;

  /**
   * <p>The microcontroller platform to which your signed code image will be
   * 			distributed.</p>
   * @public
   */
  platformId?: string;

  /**
   * <p>A human-readable name for the signing platform associated with the signing job.</p>
   * @public
   */
  platformDisplayName?: string;

  /**
   * <p>The name of the profile that initiated the signing operation.</p>
   * @public
   */
  profileName?: string;

  /**
   * <p>The version of the signing profile used to initiate the signing job.</p>
   * @public
   */
  profileVersion?: string;

  /**
   * <p>A list of any overrides that were applied to the signing operation.</p>
   * @public
   */
  overrides?: SigningPlatformOverrides;

  /**
   * <p>Map of user-assigned key-value pairs used during signing. These values contain any
   * 			information that you specified for use in your signing job. </p>
   * @public
   */
  signingParameters?: Record<string, string>;

  /**
   * <p>Date and time that the signing job was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>Date and time that the signing job was completed.</p>
   * @public
   */
  completedAt?: Date;

  /**
   * <p>Thr expiration timestamp for the signature generated by the signing job.</p>
   * @public
   */
  signatureExpiresAt?: Date;

  /**
   * <p>The IAM principal that requested the signing job.</p>
   * @public
   */
  requestedBy?: string;

  /**
   * <p>Status of the signing job.</p>
   * @public
   */
  status?: SigningStatus;

  /**
   * <p>String value that contains the status reason.</p>
   * @public
   */
  statusReason?: string;

  /**
   * <p>A revocation record if the signature generated by the signing job has been revoked.
   * 			Contains a timestamp and the ID of the IAM entity that revoked the signature.</p>
   * @public
   */
  revocationRecord?: SigningJobRevocationRecord;

  /**
   * <p>Name of the S3 bucket where the signed code image is saved by AWS Signer.</p>
   * @public
   */
  signedObject?: SignedObject;

  /**
   * <p>The AWS account ID of the job owner.</p>
   * @public
   */
  jobOwner?: string;

  /**
   * <p>The IAM entity that initiated the signing job.</p>
   * @public
   */
  jobInvoker?: string;
}

/**
 * <p>The name and prefix of the Amazon S3 bucket where AWS Signer saves your signed objects.</p>
 * @public
 */
export interface S3Destination {
  /**
   * <p>Name of the S3 bucket.</p>
   * @public
   */
  bucketName?: string;

  /**
   * <p>An S3 prefix that you can use to limit responses to those that begin with the specified
   * 			prefix.</p>
   * @public
   */
  prefix?: string;
}

/**
 * <p>Points to an <code>S3Destination</code> object that contains information about your S3
 * 			bucket.</p>
 * @public
 */
export interface Destination {
  /**
   * <p>The <code>S3Destination</code> object.</p>
   * @public
   */
  s3?: S3Destination;
}

/**
 * <p>The encryption algorithm options that are available to a code-signing job.</p>
 * @public
 */
export interface EncryptionAlgorithmOptions {
  /**
   * <p>The set of accepted encryption algorithms that are allowed in a code-signing job.</p>
   * @public
   */
  allowedValues: EncryptionAlgorithm[] | undefined;

  /**
   * <p>The default encryption algorithm that is used by a code-signing job.</p>
   * @public
   */
  defaultValue: EncryptionAlgorithm | undefined;
}

/**
 * @public
 */
export interface GetRevocationStatusRequest {
  /**
   * <p>The timestamp of the signature that validates the profile or job.</p>
   * @public
   */
  signatureTimestamp: Date | undefined;

  /**
   * <p>The ID of a signing platform. </p>
   * @public
   */
  platformId: string | undefined;

  /**
   * <p>The version of a signing profile.</p>
   * @public
   */
  profileVersionArn: string | undefined;

  /**
   * <p>The ARN of a signing job.</p>
   * @public
   */
  jobArn: string | undefined;

  /**
   * <p>A list of composite signed hashes that identify certificates.</p>
   * 		       <p>A certificate identifier consists of a subject certificate TBS hash (signed by the
   * 			parent CA) combined with a parent CA TBS hash (signed by the parent CA’s CA). Root
   * 			certificates are defined as their own CA.</p>
   * 		       <p>The following example shows how to calculate a hash for this parameter using OpenSSL
   * 			commands: </p>
   *
   * 			      <p>
   *             <code>openssl asn1parse -in childCert.pem -strparse 4 -out childCert.tbs</code>
   *          </p>
   * 			      <p>
   *             <code>openssl sha384 < childCert.tbs -binary > childCertTbsHash</code>
   *          </p>
   * 			      <p>
   *             <code>openssl asn1parse -in parentCert.pem -strparse 4 -out parentCert.tbs</code>
   *          </p>
   * 			      <p>
   *             <code>openssl sha384 < parentCert.tbs -binary > parentCertTbsHash xxd -p
   * 				childCertTbsHash > certificateHash.hex xxd -p parentCertTbsHash >>
   * 				certificateHash.hex</code>
   *          </p>
   * 			      <p>
   *             <code>cat certificateHash.hex | tr -d '\n'</code>
   *          </p>
   * @public
   */
  certificateHashes: string[] | undefined;
}

/**
 * @public
 */
export interface GetRevocationStatusResponse {
  /**
   * <p>A list of revoked entities (including zero or more of the signing profile ARN, signing job
   * 			ARN, and certificate hashes) supplied as input to the API.</p>
   * @public
   */
  revokedEntities?: string[];
}

/**
 * @public
 */
export interface GetSigningPlatformRequest {
  /**
   * <p>The ID of the target signing platform.</p>
   * @public
   */
  platformId: string | undefined;
}

/**
 * <p>The hash algorithms that are available to a code-signing job.</p>
 * @public
 */
export interface HashAlgorithmOptions {
  /**
   * <p>The set of accepted hash algorithms allowed in a code-signing job.</p>
   * @public
   */
  allowedValues: HashAlgorithm[] | undefined;

  /**
   * <p>The default hash algorithm that is used in a code-signing job.</p>
   * @public
   */
  defaultValue: HashAlgorithm | undefined;
}

/**
 * <p>The configuration of a signing operation.</p>
 * @public
 */
export interface SigningConfiguration {
  /**
   * <p>The encryption algorithm options that are available for a code-signing job.</p>
   * @public
   */
  encryptionAlgorithmOptions: EncryptionAlgorithmOptions | undefined;

  /**
   * <p>The hash algorithm options that are available for a code-signing job.</p>
   * @public
   */
  hashAlgorithmOptions: HashAlgorithmOptions | undefined;
}

/**
 * <p>The image format of a AWS Signer platform or profile.</p>
 * @public
 */
export interface SigningImageFormat {
  /**
   * <p>The supported formats of a signing image.</p>
   * @public
   */
  supportedFormats: ImageFormat[] | undefined;

  /**
   * <p>The default format of a signing image.</p>
   * @public
   */
  defaultFormat: ImageFormat | undefined;
}

/**
 * @public
 */
export interface GetSigningPlatformResponse {
  /**
   * <p>The ID of the target signing platform.</p>
   * @public
   */
  platformId?: string;

  /**
   * <p>The display name of the target signing platform.</p>
   * @public
   */
  displayName?: string;

  /**
   * <p>A list of partner entities that use the target signing platform.</p>
   * @public
   */
  partner?: string;

  /**
   * <p>The validation template that is used by the target signing platform.</p>
   * @public
   */
  target?: string;

  /**
   * <p>The category type of the target signing platform.</p>
   * @public
   */
  category?: Category;

  /**
   * <p>A list of configurations applied to the target platform at signing.</p>
   * @public
   */
  signingConfiguration?: SigningConfiguration;

  /**
   * <p>The format of the target platform's signing image.</p>
   * @public
   */
  signingImageFormat?: SigningImageFormat;

  /**
   * <p>The maximum size (in MB) of the payload that can be signed by the target
   * 			platform.</p>
   * @public
   */
  maxSizeInMB?: number;

  /**
   * <p>A flag indicating whether signatures generated for the signing platform can be
   * 			revoked.</p>
   * @public
   */
  revocationSupported?: boolean;
}

/**
 * @public
 */
export interface GetSigningProfileRequest {
  /**
   * <p>The name of the target signing profile.</p>
   * @public
   */
  profileName: string | undefined;

  /**
   * <p>The AWS account ID of the profile owner.</p>
   * @public
   */
  profileOwner?: string;
}

/**
 * <p>Revocation information for a signing profile.</p>
 * @public
 */
export interface SigningProfileRevocationRecord {
  /**
   * <p>The time when revocation becomes effective.</p>
   * @public
   */
  revocationEffectiveFrom?: Date;

  /**
   * <p>The time when the signing profile was revoked.</p>
   * @public
   */
  revokedAt?: Date;

  /**
   * <p>The identity of the revoker.</p>
   * @public
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
 * <p>The validity period for a signing job.</p>
 * @public
 */
export interface SignatureValidityPeriod {
  /**
   * <p>The numerical value of the time unit for signature validity.</p>
   * @public
   */
  value?: number;

  /**
   * <p>The time unit for signature validity.</p>
   * @public
   */
  type?: ValidityType;
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
   * <p>The name of the target signing profile.</p>
   * @public
   */
  profileName?: string;

  /**
   * <p>The current version of the signing profile.</p>
   * @public
   */
  profileVersion?: string;

  /**
   * <p>The signing profile ARN, including the profile version.</p>
   * @public
   */
  profileVersionArn?: string;

  /**
   * <p>Revocation information for a signing profile.</p>
   * @public
   */
  revocationRecord?: SigningProfileRevocationRecord;

  /**
   * <p>The ARN of the certificate that the target profile uses for signing operations.</p>
   * @public
   */
  signingMaterial?: SigningMaterial;

  /**
   * <p>The ID of the platform that is used by the target signing profile.</p>
   * @public
   */
  platformId?: string;

  /**
   * <p>A human-readable name for the signing platform associated with the signing
   * 			profile.</p>
   * @public
   */
  platformDisplayName?: string;

  /**
   * <p>The validity period for a signing job.</p>
   * @public
   */
  signatureValidityPeriod?: SignatureValidityPeriod;

  /**
   * <p>A list of overrides applied by the target signing profile for signing
   * 			operations.</p>
   * @public
   */
  overrides?: SigningPlatformOverrides;

  /**
   * <p>A map of key-value pairs for signing operations that is attached to the target signing
   * 			profile.</p>
   * @public
   */
  signingParameters?: Record<string, string>;

  /**
   * <p>The status of the target signing profile.</p>
   * @public
   */
  status?: SigningProfileStatus;

  /**
   * <p>Reason for the status of the target signing profile.</p>
   * @public
   */
  statusReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the signing profile.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>A list of tags associated with the signing profile.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListProfilePermissionsRequest {
  /**
   * <p>Name of the signing profile containing the cross-account permissions.</p>
   * @public
   */
  profileName: string | undefined;

  /**
   * <p>String for specifying the next set of paginated results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>A cross-account permission for a signing profile.</p>
 * @public
 */
export interface Permission {
  /**
   * <p>An AWS Signer action permitted as part of cross-account permissions.</p>
   * @public
   */
  action?: string;

  /**
   * <p>The AWS principal that has been granted a cross-account permission.</p>
   * @public
   */
  principal?: string;

  /**
   * <p>A unique identifier for a cross-account permission statement.</p>
   * @public
   */
  statementId?: string;

  /**
   * <p>The signing profile version that a permission applies to.</p>
   * @public
   */
  profileVersion?: string;
}

/**
 * @public
 */
export interface ListProfilePermissionsResponse {
  /**
   * <p>The identifier for the current revision of profile permissions.</p>
   * @public
   */
  revisionId?: string;

  /**
   * <p>Total size of the policy associated with the Signing Profile in bytes.</p>
   * @public
   */
  policySizeBytes?: number;

  /**
   * <p>List of permissions associated with the Signing Profile.</p>
   * @public
   */
  permissions?: Permission[];

  /**
   * <p>String for specifying the next set of paginated results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSigningJobsRequest {
  /**
   * <p>A status value with which to filter your results.</p>
   * @public
   */
  status?: SigningStatus;

  /**
   * <p>The ID of microcontroller platform that you specified for the distribution of your
   * 			code image.</p>
   * @public
   */
  platformId?: string;

  /**
   * <p>The IAM principal that requested the signing job.</p>
   * @public
   */
  requestedBy?: string;

  /**
   * <p>Specifies the maximum number of items to return in the response. Use this parameter
   * 			when paginating results. If additional items exist beyond the number you specify, the
   * 				<code>nextToken</code> element is set in the response. Use the
   * 				<code>nextToken</code> value in a subsequent request to retrieve additional items.
   * 		</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>String for specifying the next set of paginated results to return. After you receive a
   * 			response with truncated results, use this parameter in a subsequent request. Set it to
   * 			the value of <code>nextToken</code> from the response that you just received.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Filters results to return only signing jobs with revoked signatures.</p>
   * @public
   */
  isRevoked?: boolean;

  /**
   * <p>Filters results to return only signing jobs with signatures expiring before a
   * 			specified timestamp.</p>
   * @public
   */
  signatureExpiresBefore?: Date;

  /**
   * <p>Filters results to return only signing jobs with signatures expiring after a specified
   * 			timestamp.</p>
   * @public
   */
  signatureExpiresAfter?: Date;

  /**
   * <p>Filters results to return only signing jobs initiated by a specified IAM
   * 			entity.</p>
   * @public
   */
  jobInvoker?: string;
}

/**
 * <p>Contains information about a signing job.</p>
 * @public
 */
export interface SigningJob {
  /**
   * <p>The ID of the signing job.</p>
   * @public
   */
  jobId?: string;

  /**
   * <p>A <code>Source</code> that contains information about a signing job's code image
   * 			source.</p>
   * @public
   */
  source?: Source;

  /**
   * <p>A <code>SignedObject</code> structure that contains information about a signing job's
   * 			signed code image.</p>
   * @public
   */
  signedObject?: SignedObject;

  /**
   * <p>A <code>SigningMaterial</code> object that contains the Amazon Resource Name (ARN) of
   * 			the certificate used for the signing job.</p>
   * @public
   */
  signingMaterial?: SigningMaterial;

  /**
   * <p>The date and time that the signing job was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The status of the signing job.</p>
   * @public
   */
  status?: SigningStatus;

  /**
   * <p>Indicates whether the signing job is revoked.</p>
   * @public
   */
  isRevoked?: boolean;

  /**
   * <p>The name of the signing profile that created a signing job.</p>
   * @public
   */
  profileName?: string;

  /**
   * <p>The version of the signing profile that created a signing job.</p>
   * @public
   */
  profileVersion?: string;

  /**
   * <p>The unique identifier for a signing platform.</p>
   * @public
   */
  platformId?: string;

  /**
   * <p>The name of a signing platform.</p>
   * @public
   */
  platformDisplayName?: string;

  /**
   * <p>The time when the signature of a signing job expires.</p>
   * @public
   */
  signatureExpiresAt?: Date;

  /**
   * <p>The AWS account ID of the job owner.</p>
   * @public
   */
  jobOwner?: string;

  /**
   * <p>The AWS account ID of the job invoker.</p>
   * @public
   */
  jobInvoker?: string;
}

/**
 * @public
 */
export interface ListSigningJobsResponse {
  /**
   * <p>A list of your signing jobs.</p>
   * @public
   */
  jobs?: SigningJob[];

  /**
   * <p>String for specifying the next set of paginated results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSigningPlatformsRequest {
  /**
   * <p>The category type of a signing platform.</p>
   * @public
   */
  category?: string;

  /**
   * <p>Any partner entities connected to a signing platform.</p>
   * @public
   */
  partner?: string;

  /**
   * <p>The validation template that is used by the target signing platform.</p>
   * @public
   */
  target?: string;

  /**
   * <p>The maximum number of results to be returned by this operation.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Value for specifying the next set of paginated results to return. After you receive a
   * 			response with truncated results, use this parameter in a subsequent request. Set it to
   * 			the value of <code>nextToken</code> from the response that you just received.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>Contains information about the signing configurations and parameters that are used to
 * 			perform a code-signing job.</p>
 * @public
 */
export interface SigningPlatform {
  /**
   * <p>The ID of a signing platform.</p>
   * @public
   */
  platformId?: string;

  /**
   * <p>The display name of a signing platform.</p>
   * @public
   */
  displayName?: string;

  /**
   * <p>Any partner entities linked to a signing platform.</p>
   * @public
   */
  partner?: string;

  /**
   * <p>The types of targets that can be signed by a signing platform.</p>
   * @public
   */
  target?: string;

  /**
   * <p>The category of a signing platform.</p>
   * @public
   */
  category?: Category;

  /**
   * <p>The configuration of a signing platform. This includes the designated hash algorithm and
   * 			encryption algorithm of a signing platform.</p>
   * @public
   */
  signingConfiguration?: SigningConfiguration;

  /**
   * <p>The image format of a AWS Signer platform or profile.</p>
   * @public
   */
  signingImageFormat?: SigningImageFormat;

  /**
   * <p>The maximum size (in MB) of code that can be signed by a signing platform.</p>
   * @public
   */
  maxSizeInMB?: number;

  /**
   * <p>Indicates whether revocation is supported for the platform.</p>
   * @public
   */
  revocationSupported?: boolean;
}

/**
 * @public
 */
export interface ListSigningPlatformsResponse {
  /**
   * <p>A list of all platforms that match the request parameters.</p>
   * @public
   */
  platforms?: SigningPlatform[];

  /**
   * <p>Value for specifying the next set of paginated results to return.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSigningProfilesRequest {
  /**
   * <p>Designates whether to include profiles with the status of
   * 			<code>CANCELED</code>.</p>
   * @public
   */
  includeCanceled?: boolean;

  /**
   * <p>The maximum number of profiles to be returned.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Value for specifying the next set of paginated results to return. After you receive a
   * 			response with truncated results, use this parameter in a subsequent request. Set it to
   * 			the value of <code>nextToken</code> from the response that you just received.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Filters results to return only signing jobs initiated for a specified signing
   * 			platform.</p>
   * @public
   */
  platformId?: string;

  /**
   * <p>Filters results to return only signing jobs with statuses in the specified
   * 			list.</p>
   * @public
   */
  statuses?: SigningProfileStatus[];
}

/**
 * <p>Contains information about the ACM certificates and signing configuration parameters that
 * 			can be used by a given code signing user.</p>
 * @public
 */
export interface SigningProfile {
  /**
   * <p>The name of the signing profile.</p>
   * @public
   */
  profileName?: string;

  /**
   * <p>The version of a signing profile.</p>
   * @public
   */
  profileVersion?: string;

  /**
   * <p>The ARN of a signing profile, including the profile version.</p>
   * @public
   */
  profileVersionArn?: string;

  /**
   * <p>The ACM certificate that is available for use by a signing profile.</p>
   * @public
   */
  signingMaterial?: SigningMaterial;

  /**
   * <p>The validity period for a signing job created using this signing profile.</p>
   * @public
   */
  signatureValidityPeriod?: SignatureValidityPeriod;

  /**
   * <p>The ID of a platform that is available for use by a signing profile.</p>
   * @public
   */
  platformId?: string;

  /**
   * <p>The name of the signing platform.</p>
   * @public
   */
  platformDisplayName?: string;

  /**
   * <p>The parameters that are available for use by a Signer user.</p>
   * @public
   */
  signingParameters?: Record<string, string>;

  /**
   * <p>The status of a signing profile.</p>
   * @public
   */
  status?: SigningProfileStatus;

  /**
   * <p>The Amazon Resource Name (ARN) for the signing profile.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>A list of tags associated with the signing profile.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListSigningProfilesResponse {
  /**
   * <p>A list of profiles that are available in the AWS account. This includes profiles with
   * 			the status of <code>CANCELED</code> if the <code>includeCanceled</code> parameter is set
   * 			to <code>true</code>.</p>
   * @public
   */
  profiles?: SigningProfile[];

  /**
   * <p>Value for specifying the next set of paginated results to return.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the signing profile.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tags associated with the signing profile.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * <p>The signing profile was not found.</p>
 * @public
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
   * <p>The name of the signing profile to be created.</p>
   * @public
   */
  profileName: string | undefined;

  /**
   * <p>The AWS Certificate Manager certificate that will be used to sign code with the new signing
   * 			profile.</p>
   * @public
   */
  signingMaterial?: SigningMaterial;

  /**
   * <p>The default validity period override for any signature generated using this signing
   * 			profile. If unspecified, the default is 135 months.</p>
   * @public
   */
  signatureValidityPeriod?: SignatureValidityPeriod;

  /**
   * <p>The ID of the signing platform to be created.</p>
   * @public
   */
  platformId: string | undefined;

  /**
   * <p>A subfield of <code>platform</code>. This specifies any different configuration
   * 			options that you want to apply to the chosen platform (such as a different
   * 				<code>hash-algorithm</code> or <code>signing-algorithm</code>).</p>
   * @public
   */
  overrides?: SigningPlatformOverrides;

  /**
   * <p>Map of key-value pairs for signing. These can include any information that you want to
   * 			use during signing.</p>
   * @public
   */
  signingParameters?: Record<string, string>;

  /**
   * <p>Tags to be associated with the signing profile that is being created.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface PutSigningProfileResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the signing profile created.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The version of the signing profile being created.</p>
   * @public
   */
  profileVersion?: string;

  /**
   * <p>The signing profile ARN, including the profile version.</p>
   * @public
   */
  profileVersionArn?: string;
}

/**
 * @public
 */
export interface RemoveProfilePermissionRequest {
  /**
   * <p>A human-readable name for the signing profile with permissions to be removed.</p>
   * @public
   */
  profileName: string | undefined;

  /**
   * <p>An identifier for the current revision of the signing profile permissions.</p>
   * @public
   */
  revisionId: string | undefined;

  /**
   * <p>A unique identifier for the cross-account permissions statement.</p>
   * @public
   */
  statementId: string | undefined;
}

/**
 * @public
 */
export interface RemoveProfilePermissionResponse {
  /**
   * <p>An identifier for the current revision of the profile permissions.</p>
   * @public
   */
  revisionId?: string;
}

/**
 * @public
 */
export interface RevokeSignatureRequest {
  /**
   * <p>ID of the signing job to be revoked.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>AWS account ID of the job owner.</p>
   * @public
   */
  jobOwner?: string;

  /**
   * <p>The reason for revoking the signing job.</p>
   * @public
   */
  reason: string | undefined;
}

/**
 * @public
 */
export interface RevokeSigningProfileRequest {
  /**
   * <p>The name of the signing profile to be revoked.</p>
   * @public
   */
  profileName: string | undefined;

  /**
   * <p>The version of the signing profile to be revoked.</p>
   * @public
   */
  profileVersion: string | undefined;

  /**
   * <p>The reason for revoking a signing profile.</p>
   * @public
   */
  reason: string | undefined;

  /**
   * <p>A timestamp for when revocation of a Signing Profile should become effective.
   * 			Signatures generated using the signing profile after this timestamp are not
   * 			trusted.</p>
   * @public
   */
  effectiveTime: Date | undefined;
}

/**
 * @public
 */
export interface SignPayloadRequest {
  /**
   * <p>The name of the signing profile.</p>
   * @public
   */
  profileName: string | undefined;

  /**
   * <p>The AWS account ID of the profile owner.</p>
   * @public
   */
  profileOwner?: string;

  /**
   * <p>Specifies the object digest (hash) to sign.</p>
   * @public
   */
  payload: Uint8Array | undefined;

  /**
   * <p>Payload content type. The single valid type is
   * 				<code>application/vnd.cncf.notary.payload.v1+json</code>.</p>
   * @public
   */
  payloadFormat: string | undefined;
}

/**
 * @public
 */
export interface SignPayloadResponse {
  /**
   * <p>Unique identifier of the signing job.</p>
   * @public
   */
  jobId?: string;

  /**
   * <p>The AWS account ID of the job owner.</p>
   * @public
   */
  jobOwner?: string;

  /**
   * <p>Information including the signing profile ARN and the signing job ID.</p>
   * @public
   */
  metadata?: Record<string, string>;

  /**
   * <p>A cryptographic signature.</p>
   * @public
   */
  signature?: Uint8Array;
}

/**
 * @public
 */
export interface StartSigningJobRequest {
  /**
   * <p>The S3 bucket that contains the object to sign or a BLOB that contains your raw
   * 			code.</p>
   * @public
   */
  source: Source | undefined;

  /**
   * <p>The S3 bucket in which to save your signed object. The destination contains the name
   * 			of your bucket and an optional prefix.</p>
   * @public
   */
  destination: Destination | undefined;

  /**
   * <p>The name of the signing profile.</p>
   * @public
   */
  profileName: string | undefined;

  /**
   * <p>String that identifies the signing request. All calls after the first that use this
   * 			token return the same response as the first call.</p>
   * @public
   */
  clientRequestToken?: string;

  /**
   * <p>The AWS account ID of the signing profile owner.</p>
   * @public
   */
  profileOwner?: string;
}

/**
 * @public
 */
export interface StartSigningJobResponse {
  /**
   * <p>The ID of your signing job.</p>
   * @public
   */
  jobId?: string;

  /**
   * <p>The AWS account ID of the signing job owner.</p>
   * @public
   */
  jobOwner?: string;
}

/**
 * <p>The request was denied due to request throttling.</p>
 * 		       <p>Instead of this error, <code>TooManyRequestsException</code> should be used.</p>
 *
 * @deprecated Instead of this error, TooManyRequestsException should be used.
 * @public
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
   * <p>The Amazon Resource Name (ARN) for the signing profile.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>One or more tags to be associated with the signing profile.</p>
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
   * <p>The Amazon Resource Name (ARN) for the signing profile.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of tag keys to be removed from the signing profile.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
