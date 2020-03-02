import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message?: string;
}

export namespace AccessDeniedException {
  export function isa(o: any): o is AccessDeniedException {
    return __isa(o, "AccessDeniedException");
  }
}

/**
 * <p>The request
 * 			contains invalid parameters for the ARN or tags. This exception also occurs when you
 * 			call a tagging API on a cancelled signing
 * 			profile.</p>
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

export interface CancelSigningProfileRequest {
  __type?: "CancelSigningProfileRequest";
  /**
   * <p>The name of the signing profile to be canceled.</p>
   */
  profileName: string | undefined;
}

export namespace CancelSigningProfileRequest {
  export function isa(o: any): o is CancelSigningProfileRequest {
    return __isa(o, "CancelSigningProfileRequest");
  }
}

export type Category = "AWSIoT";

export interface DescribeSigningJobRequest {
  __type?: "DescribeSigningJobRequest";
  /**
   * <p>The ID of the signing job on input.</p>
   */
  jobId: string | undefined;
}

export namespace DescribeSigningJobRequest {
  export function isa(o: any): o is DescribeSigningJobRequest {
    return __isa(o, "DescribeSigningJobRequest");
  }
}

export interface DescribeSigningJobResponse {
  __type?: "DescribeSigningJobResponse";
  /**
   * <p>Date and time that the signing job was completed.</p>
   */
  completedAt?: Date;

  /**
   * <p>Date and time that the signing job was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The ID of the signing job on output.</p>
   */
  jobId?: string;

  /**
   * <p>A list of any overrides that were applied to the signing operation.</p>
   */
  overrides?: SigningPlatformOverrides;

  /**
   * <p>The microcontroller platform to which your signed code image will be
   * 			distributed.</p>
   */
  platformId?: string;

  /**
   * <p>The name of the profile that initiated the signing operation.</p>
   */
  profileName?: string;

  /**
   * <p>The IAM principal that requested the signing job.</p>
   */
  requestedBy?: string;

  /**
   * <p>Name of the S3 bucket where the signed code image is saved by code signing.</p>
   */
  signedObject?: SignedObject;

  /**
   * <p>Amazon Resource Name (ARN) of your code signing certificate.</p>
   */
  signingMaterial?: SigningMaterial;

  /**
   * <p>Map of user-assigned key-value pairs used during signing. These values contain any
   * 			information that you specified for use in your signing job. </p>
   */
  signingParameters?: { [key: string]: string };

  /**
   * <p>The object that contains the name of your S3 bucket or your raw code.</p>
   */
  source?: Source;

  /**
   * <p>Status of the signing job.</p>
   */
  status?: SigningStatus | string;

  /**
   * <p>String value that contains the status reason.</p>
   */
  statusReason?: string;
}

export namespace DescribeSigningJobResponse {
  export function isa(o: any): o is DescribeSigningJobResponse {
    return __isa(o, "DescribeSigningJobResponse");
  }
}

/**
 * <p>Points to an <code>S3Destination</code> object that contains information about your S3
 * 			bucket.</p>
 */
export interface Destination {
  __type?: "Destination";
  /**
   * <p>The <code>S3Destination</code> object.</p>
   */
  s3?: S3Destination;
}

export namespace Destination {
  export function isa(o: any): o is Destination {
    return __isa(o, "Destination");
  }
}

export type EncryptionAlgorithm = "ECDSA" | "RSA";

/**
 * <p>The encryption algorithm options that are available to a code signing job.</p>
 */
export interface EncryptionAlgorithmOptions {
  __type?: "EncryptionAlgorithmOptions";
  /**
   * <p>The set of accepted encryption algorithms that are allowed in a code signing job.</p>
   */
  allowedValues: Array<EncryptionAlgorithm | string> | undefined;

  /**
   * <p>The default encryption algorithm that is used by a code signing job.</p>
   */
  defaultValue: EncryptionAlgorithm | string | undefined;
}

export namespace EncryptionAlgorithmOptions {
  export function isa(o: any): o is EncryptionAlgorithmOptions {
    return __isa(o, "EncryptionAlgorithmOptions");
  }
}

export interface GetSigningPlatformRequest {
  __type?: "GetSigningPlatformRequest";
  /**
   * <p>The ID of the target signing platform.</p>
   */
  platformId: string | undefined;
}

export namespace GetSigningPlatformRequest {
  export function isa(o: any): o is GetSigningPlatformRequest {
    return __isa(o, "GetSigningPlatformRequest");
  }
}

export interface GetSigningPlatformResponse {
  __type?: "GetSigningPlatformResponse";
  /**
   * <p>The category type of the target signing platform.</p>
   */
  category?: Category | string;

  /**
   * <p>The display name of the target signing platform.</p>
   */
  displayName?: string;

  /**
   * <p>The maximum size (in MB) of the payload that can be signed by the target
   * 			platform.</p>
   */
  maxSizeInMB?: number;

  /**
   * <p>A list of partner entities that use the target signing platform.</p>
   */
  partner?: string;

  /**
   * <p>The ID of the target signing platform.</p>
   */
  platformId?: string;

  /**
   * <p>A list of configurations applied to the target platform at signing.</p>
   */
  signingConfiguration?: SigningConfiguration;

  /**
   * <p>The format of the target platform's signing image.</p>
   */
  signingImageFormat?: SigningImageFormat;

  /**
   * <p>The validation template that is used by the target signing platform.</p>
   */
  target?: string;
}

export namespace GetSigningPlatformResponse {
  export function isa(o: any): o is GetSigningPlatformResponse {
    return __isa(o, "GetSigningPlatformResponse");
  }
}

export interface GetSigningProfileRequest {
  __type?: "GetSigningProfileRequest";
  /**
   * <p>The name of the target signing profile.</p>
   */
  profileName: string | undefined;
}

export namespace GetSigningProfileRequest {
  export function isa(o: any): o is GetSigningProfileRequest {
    return __isa(o, "GetSigningProfileRequest");
  }
}

export interface GetSigningProfileResponse {
  __type?: "GetSigningProfileResponse";
  /**
   * <p>The Amazon
   * 			Resource Name (ARN) for the signing
   * 			profile.</p>
   */
  arn?: string;

  /**
   * <p>A list of overrides applied by the target signing profile for signing
   * 			operations.</p>
   */
  overrides?: SigningPlatformOverrides;

  /**
   * <p>The ID of the platform that is used by the target signing profile.</p>
   */
  platformId?: string;

  /**
   * <p>The name of the target signing profile.</p>
   */
  profileName?: string;

  /**
   * <p>The ARN of the certificate that the target profile uses for signing operations.</p>
   */
  signingMaterial?: SigningMaterial;

  /**
   * <p>A map of key-value pairs for signing operations that is attached to the target signing
   * 			profile.</p>
   */
  signingParameters?: { [key: string]: string };

  /**
   * <p>The status of the target signing profile.</p>
   */
  status?: SigningProfileStatus | string;

  /**
   * <p>A list of tags
   * 			associated with the signing
   * 			profile.</p>
   */
  tags?: { [key: string]: string };
}

export namespace GetSigningProfileResponse {
  export function isa(o: any): o is GetSigningProfileResponse {
    return __isa(o, "GetSigningProfileResponse");
  }
}

export type HashAlgorithm = "SHA1" | "SHA256";

/**
 * <p>The hash algorithms that are available to a code signing job.</p>
 */
export interface HashAlgorithmOptions {
  __type?: "HashAlgorithmOptions";
  /**
   * <p>The set of accepted hash algorithms allowed in a code signing job.</p>
   */
  allowedValues: Array<HashAlgorithm | string> | undefined;

  /**
   * <p>The default hash algorithm that is used in a code signing job.</p>
   */
  defaultValue: HashAlgorithm | string | undefined;
}

export namespace HashAlgorithmOptions {
  export function isa(o: any): o is HashAlgorithmOptions {
    return __isa(o, "HashAlgorithmOptions");
  }
}

export type ImageFormat = "JSON";

/**
 * <p>An internal error occurred.</p>
 */
export interface InternalServiceErrorException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServiceErrorException";
  $fault: "server";
  message?: string;
}

export namespace InternalServiceErrorException {
  export function isa(o: any): o is InternalServiceErrorException {
    return __isa(o, "InternalServiceErrorException");
  }
}

export interface ListSigningJobsRequest {
  __type?: "ListSigningJobsRequest";
  /**
   * <p>Specifies the maximum number of items to return in the response. Use this parameter
   * 			when paginating results. If additional items exist beyond the number you specify, the
   * 				<code>nextToken</code> element is set in the response. Use the
   * 				<code>nextToken</code> value in a subsequent request to retrieve additional items.
   * 		</p>
   */
  maxResults?: number;

  /**
   * <p>String for specifying the next set of paginated results to return. After you receive a
   * 			response with truncated results, use this parameter in a subsequent request. Set it to
   * 			the value of <code>nextToken</code> from the response that you just received.</p>
   */
  nextToken?: string;

  /**
   * <p>The ID of microcontroller platform that you specified for the distribution of your
   * 			code image.</p>
   */
  platformId?: string;

  /**
   * <p>The IAM principal that requested the signing job.</p>
   */
  requestedBy?: string;

  /**
   * <p>A status value with which to filter your results.</p>
   */
  status?: SigningStatus | string;
}

export namespace ListSigningJobsRequest {
  export function isa(o: any): o is ListSigningJobsRequest {
    return __isa(o, "ListSigningJobsRequest");
  }
}

export interface ListSigningJobsResponse {
  __type?: "ListSigningJobsResponse";
  /**
   * <p>A list of your signing jobs.</p>
   */
  jobs?: Array<SigningJob>;

  /**
   * <p>String for specifying the next set of paginated results.</p>
   */
  nextToken?: string;
}

export namespace ListSigningJobsResponse {
  export function isa(o: any): o is ListSigningJobsResponse {
    return __isa(o, "ListSigningJobsResponse");
  }
}

export interface ListSigningPlatformsRequest {
  __type?: "ListSigningPlatformsRequest";
  /**
   * <p>The category type of a signing platform.</p>
   */
  category?: string;

  /**
   * <p>The maximum number of results to be returned by this operation.</p>
   */
  maxResults?: number;

  /**
   * <p>Value for specifying the next set of paginated results to return. After you receive a
   * 			response with truncated results, use this parameter in a subsequent request. Set it to
   * 			the value of <code>nextToken</code> from the response that you just received.</p>
   */
  nextToken?: string;

  /**
   * <p>Any partner entities connected to a signing platform.</p>
   */
  partner?: string;

  /**
   * <p>The validation template that is used by the target signing platform.</p>
   */
  target?: string;
}

export namespace ListSigningPlatformsRequest {
  export function isa(o: any): o is ListSigningPlatformsRequest {
    return __isa(o, "ListSigningPlatformsRequest");
  }
}

export interface ListSigningPlatformsResponse {
  __type?: "ListSigningPlatformsResponse";
  /**
   * <p>Value for specifying the next set of paginated results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of all platforms that match the request parameters.</p>
   */
  platforms?: Array<SigningPlatform>;
}

export namespace ListSigningPlatformsResponse {
  export function isa(o: any): o is ListSigningPlatformsResponse {
    return __isa(o, "ListSigningPlatformsResponse");
  }
}

export interface ListSigningProfilesRequest {
  __type?: "ListSigningProfilesRequest";
  /**
   * <p>Designates whether to include profiles with the status of
   * 			<code>CANCELED</code>.</p>
   */
  includeCanceled?: boolean;

  /**
   * <p>The maximum number of profiles to be returned.</p>
   */
  maxResults?: number;

  /**
   * <p>Value for specifying the next set of paginated results to return. After you receive a
   * 			response with truncated results, use this parameter in a subsequent request. Set it to
   * 			the value of <code>nextToken</code> from the response that you just received.</p>
   */
  nextToken?: string;
}

export namespace ListSigningProfilesRequest {
  export function isa(o: any): o is ListSigningProfilesRequest {
    return __isa(o, "ListSigningProfilesRequest");
  }
}

export interface ListSigningProfilesResponse {
  __type?: "ListSigningProfilesResponse";
  /**
   * <p>Value for specifying the next set of paginated results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of profiles that are available in the AWS account. This includes profiles with
   * 			the status of <code>CANCELED</code> if the <code>includeCanceled</code> parameter is set
   * 			to <code>true</code>.</p>
   */
  profiles?: Array<SigningProfile>;
}

export namespace ListSigningProfilesResponse {
  export function isa(o: any): o is ListSigningProfilesResponse {
    return __isa(o, "ListSigningProfilesResponse");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The Amazon
   * 			Resource Name (ARN) for the signing
   * 			profile.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return __isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>A list of tags
   * 			associated with the signing
   * 			profile.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return __isa(o, "ListTagsForResourceResponse");
  }
}

/**
 * <p>The signing
 * 			profile was not
 * 			found.</p>
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

export interface PutSigningProfileRequest {
  __type?: "PutSigningProfileRequest";
  /**
   * <p>A subfield of <code>platform</code>. This specifies any different configuration
   * 			options that you want to apply to the chosen platform (such as a different
   * 				<code>hash-algorithm</code> or <code>signing-algorithm</code>).</p>
   */
  overrides?: SigningPlatformOverrides;

  /**
   * <p>The ID of the signing profile to be created.</p>
   */
  platformId: string | undefined;

  /**
   * <p>The name of the signing profile to be created.</p>
   */
  profileName: string | undefined;

  /**
   * <p>The AWS Certificate Manager certificate that will be used to sign code with the new signing
   * 			profile.</p>
   */
  signingMaterial: SigningMaterial | undefined;

  /**
   * <p>Map of key-value pairs for signing. These can include any information that you want to
   * 			use during signing.</p>
   */
  signingParameters?: { [key: string]: string };

  /**
   * <p>Tags to be
   * 			associated with the signing profile being
   * 			created.</p>
   */
  tags?: { [key: string]: string };
}

export namespace PutSigningProfileRequest {
  export function isa(o: any): o is PutSigningProfileRequest {
    return __isa(o, "PutSigningProfileRequest");
  }
}

export interface PutSigningProfileResponse {
  __type?: "PutSigningProfileResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the signing profile created.</p>
   */
  arn?: string;
}

export namespace PutSigningProfileResponse {
  export function isa(o: any): o is PutSigningProfileResponse {
    return __isa(o, "PutSigningProfileResponse");
  }
}

/**
 * <p>A specified resource could not be found.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

/**
 * <p>The name and prefix of the S3 bucket where code signing saves your signed objects.</p>
 */
export interface S3Destination {
  __type?: "S3Destination";
  /**
   * <p>Name of the S3 bucket.</p>
   */
  bucketName?: string;

  /**
   * <p>An Amazon S3 prefix that you can use to limit responses to those that begin with the
   * 			specified prefix.</p>
   */
  prefix?: string;
}

export namespace S3Destination {
  export function isa(o: any): o is S3Destination {
    return __isa(o, "S3Destination");
  }
}

/**
 * <p>The S3 bucket name and key where code signing saved your signed code image.</p>
 */
export interface S3SignedObject {
  __type?: "S3SignedObject";
  /**
   * <p>Name of the S3 bucket.</p>
   */
  bucketName?: string;

  /**
   * <p>Key name that uniquely identifies a signed code image in your bucket.</p>
   */
  key?: string;
}

export namespace S3SignedObject {
  export function isa(o: any): o is S3SignedObject {
    return __isa(o, "S3SignedObject");
  }
}

/**
 * <p>Information about the S3 bucket where you saved your unsigned code.</p>
 */
export interface S3Source {
  __type?: "S3Source";
  /**
   * <p>Name of the S3 bucket.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>Key name of the bucket object that contains your unsigned code.</p>
   */
  key: string | undefined;

  /**
   * <p>Version of your source image in your version enabled S3 bucket.</p>
   */
  version: string | undefined;
}

export namespace S3Source {
  export function isa(o: any): o is S3Source {
    return __isa(o, "S3Source");
  }
}

/**
 * <p>Points to an <code>S3SignedObject</code> object that contains information about your
 * 			signed code image.</p>
 */
export interface SignedObject {
  __type?: "SignedObject";
  /**
   * <p>The <code>S3SignedObject</code>.</p>
   */
  s3?: S3SignedObject;
}

export namespace SignedObject {
  export function isa(o: any): o is SignedObject {
    return __isa(o, "SignedObject");
  }
}

/**
 * <p>The configuration of a code signing operation.</p>
 */
export interface SigningConfiguration {
  __type?: "SigningConfiguration";
  /**
   * <p>The encryption algorithm options that are available for a code signing job.</p>
   */
  encryptionAlgorithmOptions: EncryptionAlgorithmOptions | undefined;

  /**
   * <p>The hash algorithm options that are available for a a code signing job.</p>
   */
  hashAlgorithmOptions: HashAlgorithmOptions | undefined;
}

export namespace SigningConfiguration {
  export function isa(o: any): o is SigningConfiguration {
    return __isa(o, "SigningConfiguration");
  }
}

/**
 * <p>A signing configuration that overrides the default encryption or hash algorithm of a
 * 			signing job.</p>
 */
export interface SigningConfigurationOverrides {
  __type?: "SigningConfigurationOverrides";
  /**
   * <p>A specified override of the default encryption algorithm that is used in a code signing
   * 			job.</p>
   */
  encryptionAlgorithm?: EncryptionAlgorithm | string;

  /**
   * <p>A specified override of the default hash algorithm that is used in a code signing
   * 			job.</p>
   */
  hashAlgorithm?: HashAlgorithm | string;
}

export namespace SigningConfigurationOverrides {
  export function isa(o: any): o is SigningConfigurationOverrides {
    return __isa(o, "SigningConfigurationOverrides");
  }
}

/**
 * <p>The image format of a code signing platform or profile.</p>
 */
export interface SigningImageFormat {
  __type?: "SigningImageFormat";
  /**
   * <p>The default format of a code signing signing image.</p>
   */
  defaultFormat: ImageFormat | string | undefined;

  /**
   * <p>The supported formats of a code signing signing image.</p>
   */
  supportedFormats: Array<ImageFormat | string> | undefined;
}

export namespace SigningImageFormat {
  export function isa(o: any): o is SigningImageFormat {
    return __isa(o, "SigningImageFormat");
  }
}

/**
 * <p>Contains information about a signing job.</p>
 */
export interface SigningJob {
  __type?: "SigningJob";
  /**
   * <p>The date and time that the signing job was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The ID of the signing job.</p>
   */
  jobId?: string;

  /**
   * <p>A <code>SignedObject</code> structure that contains information about a signing job's
   * 			signed code image.</p>
   */
  signedObject?: SignedObject;

  /**
   * <p>A <code>SigningMaterial</code> object that contains the Amazon Resource Name (ARN) of
   * 			the certificate used for the signing job.</p>
   */
  signingMaterial?: SigningMaterial;

  /**
   * <p>A <code>Source</code> that contains information about a signing job's code image
   * 			source.</p>
   */
  source?: Source;

  /**
   * <p>The status of the signing job.</p>
   */
  status?: SigningStatus | string;
}

export namespace SigningJob {
  export function isa(o: any): o is SigningJob {
    return __isa(o, "SigningJob");
  }
}

/**
 * <p>The ACM certificate that is used to sign your code.</p>
 */
export interface SigningMaterial {
  __type?: "SigningMaterial";
  /**
   * <p>The Amazon Resource Name (ARN) of the certificates that is used to sign your
   * 			code.</p>
   */
  certificateArn: string | undefined;
}

export namespace SigningMaterial {
  export function isa(o: any): o is SigningMaterial {
    return __isa(o, "SigningMaterial");
  }
}

/**
 * <p>Contains information about the signing configurations and parameters that is used to
 * 			perform a code signing job.</p>
 */
export interface SigningPlatform {
  __type?: "SigningPlatform";
  /**
   * <p>The category of a code signing platform.</p>
   */
  category?: Category | string;

  /**
   * <p>The display name of a code signing platform.</p>
   */
  displayName?: string;

  /**
   * <p>The maximum size (in MB) of code that can be signed by a code signing platform.</p>
   */
  maxSizeInMB?: number;

  /**
   * <p>Any partner entities linked to a code signing platform.</p>
   */
  partner?: string;

  /**
   * <p>The ID of a code signing; platform.</p>
   */
  platformId?: string;

  /**
   * <p>The configuration of a code signing platform. This includes the designated hash algorithm
   * 			and encryption algorithm of a signing platform.</p>
   */
  signingConfiguration?: SigningConfiguration;

  /**
   * <p>The image format of a code signing platform or profile.</p>
   */
  signingImageFormat?: SigningImageFormat;

  /**
   * <p>The types of targets that can be signed by a code signing platform.</p>
   */
  target?: string;
}

export namespace SigningPlatform {
  export function isa(o: any): o is SigningPlatform {
    return __isa(o, "SigningPlatform");
  }
}

/**
 * <p>Any overrides that are applied to the signing configuration of a code signing
 * 			platform.</p>
 */
export interface SigningPlatformOverrides {
  __type?: "SigningPlatformOverrides";
  /**
   * <p>A signing configuration that overrides the default encryption or hash algorithm of a
   * 			signing job.</p>
   */
  signingConfiguration?: SigningConfigurationOverrides;
}

export namespace SigningPlatformOverrides {
  export function isa(o: any): o is SigningPlatformOverrides {
    return __isa(o, "SigningPlatformOverrides");
  }
}

/**
 * <p>Contains information about the ACM certificates and code signing configuration parameters
 * 			that can be used by a given code signing user.</p>
 */
export interface SigningProfile {
  __type?: "SigningProfile";
  /**
   * <p>Amazon Resource
   * 			Name (ARN) for the signing
   * 			profile.</p>
   */
  arn?: string;

  /**
   * <p>The ID of a platform that is available for use by a signing profile.</p>
   */
  platformId?: string;

  /**
   * <p>The name of the
   * 			signing
   * 			profile.</p>
   */
  profileName?: string;

  /**
   * <p>The ACM certificate that is available for use by a signing profile.</p>
   */
  signingMaterial?: SigningMaterial;

  /**
   * <p>The parameters that are available for use by a code signing user.</p>
   */
  signingParameters?: { [key: string]: string };

  /**
   * <p>The status of a code signing profile.</p>
   */
  status?: SigningProfileStatus | string;

  /**
   * <p>A list of tags
   * 			associated with the signing
   * 			profile.</p>
   */
  tags?: { [key: string]: string };
}

export namespace SigningProfile {
  export function isa(o: any): o is SigningProfile {
    return __isa(o, "SigningProfile");
  }
}

export type SigningProfileStatus = "Active" | "Canceled";

export type SigningStatus = "Failed" | "InProgress" | "Succeeded";

/**
 * <p>An <code>S3Source</code> object that contains information about the S3 bucket where
 * 			you saved your unsigned code.</p>
 */
export interface Source {
  __type?: "Source";
  /**
   * <p>The <code>S3Source</code> object.</p>
   */
  s3?: S3Source;
}

export namespace Source {
  export function isa(o: any): o is Source {
    return __isa(o, "Source");
  }
}

export interface StartSigningJobRequest {
  __type?: "StartSigningJobRequest";
  /**
   * <p>String that identifies the signing request. All calls after the first that use this
   * 			token return the same response as the first call.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The S3 bucket in which to save your signed object. The destination contains the name
   * 			of your bucket and an optional prefix.</p>
   */
  destination: Destination | undefined;

  /**
   * <p>The name of the signing profile.</p>
   */
  profileName?: string;

  /**
   * <p>The S3 bucket that contains the object to sign or a BLOB that contains your raw
   * 			code.</p>
   */
  source: Source | undefined;
}

export namespace StartSigningJobRequest {
  export function isa(o: any): o is StartSigningJobRequest {
    return __isa(o, "StartSigningJobRequest");
  }
}

export interface StartSigningJobResponse {
  __type?: "StartSigningJobResponse";
  /**
   * <p>The ID of your signing job.</p>
   */
  jobId?: string;
}

export namespace StartSigningJobResponse {
  export function isa(o: any): o is StartSigningJobResponse {
    return __isa(o, "StartSigningJobResponse");
  }
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>Amazon Resource
   * 			Name (ARN) for the signing
   * 			profile.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>One or more tags
   * 			to be associated with the signing
   * 			profile.</p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return __isa(o, "TagResourceRequest");
  }
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return __isa(o, "TagResourceResponse");
  }
}

/**
 * <p>The signing job has been throttled.</p>
 */
export interface ThrottlingException
  extends __SmithyException,
    $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message?: string;
}

export namespace ThrottlingException {
  export function isa(o: any): o is ThrottlingException {
    return __isa(o, "ThrottlingException");
  }
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>Amazon Resource
   * 			Name (ARN) for the signing profile
   * 			.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of tag keys
   * 			to be removed from the signing profile
   * 			.</p>
   */
  tagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return __isa(o, "UntagResourceRequest");
  }
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export function isa(o: any): o is UntagResourceResponse {
    return __isa(o, "UntagResourceResponse");
  }
}

/**
 * <p>You signing certificate could not be validated.</p>
 */
export interface ValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message?: string;
}

export namespace ValidationException {
  export function isa(o: any): o is ValidationException {
    return __isa(o, "ValidationException");
  }
}
