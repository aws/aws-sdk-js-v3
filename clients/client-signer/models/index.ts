import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AccessDeniedException => __isa(o, "AccessDeniedException");
}

/**
 * <p>The request contains invalid parameters for the ARN or tags. This exception also
 * 			occurs when you call a tagging API on a cancelled signing profile.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  message?: string;
}

export namespace BadRequestException {
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BadRequestException => __isa(o, "BadRequestException");
}

export interface CancelSigningProfileRequest {
  __type?: "CancelSigningProfileRequest";
  /**
   * <p>The name of the signing profile to be canceled.</p>
   */
  profileName: string | undefined;
}

export namespace CancelSigningProfileRequest {
  export const filterSensitiveLog = (obj: CancelSigningProfileRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CancelSigningProfileRequest => __isa(o, "CancelSigningProfileRequest");
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
  export const filterSensitiveLog = (obj: DescribeSigningJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeSigningJobRequest => __isa(o, "DescribeSigningJobRequest");
}

export interface DescribeSigningJobResponse {
  __type?: "DescribeSigningJobResponse";
  /**
   * <p>The object that contains the name of your S3 bucket or your raw code.</p>
   */
  source?: Source;

  /**
   * <p>The ID of the signing job on output.</p>
   */
  jobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of your code signing certificate.</p>
   */
  signingMaterial?: SigningMaterial;

  /**
   * <p>The microcontroller platform to which your signed code image will be
   * 			distributed.</p>
   */
  platformId?: string;

  /**
   * <p>Status of the signing job.</p>
   */
  status?: SigningStatus | string;

  /**
   * <p>Name of the S3 bucket where the signed code image is saved by code signing.</p>
   */
  signedObject?: SignedObject;

  /**
   * <p>String value that contains the status reason.</p>
   */
  statusReason?: string;

  /**
   * <p>The IAM principal that requested the signing job.</p>
   */
  requestedBy?: string;

  /**
   * <p>Date and time that the signing job was completed.</p>
   */
  completedAt?: Date;

  /**
   * <p>A list of any overrides that were applied to the signing operation.</p>
   */
  overrides?: SigningPlatformOverrides;

  /**
   * <p>Map of user-assigned key-value pairs used during signing. These values contain any
   * 			information that you specified for use in your signing job. </p>
   */
  signingParameters?: { [key: string]: string };

  /**
   * <p>Date and time that the signing job was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The name of the profile that initiated the signing operation.</p>
   */
  profileName?: string;
}

export namespace DescribeSigningJobResponse {
  export const filterSensitiveLog = (obj: DescribeSigningJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeSigningJobResponse => __isa(o, "DescribeSigningJobResponse");
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
  export const filterSensitiveLog = (obj: Destination): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Destination => __isa(o, "Destination");
}

export type EncryptionAlgorithm = "ECDSA" | "RSA";

/**
 * <p>The encryption algorithm options that are available to a code signing job.</p>
 */
export interface EncryptionAlgorithmOptions {
  __type?: "EncryptionAlgorithmOptions";
  /**
   * <p>The default encryption algorithm that is used by a code signing job.</p>
   */
  defaultValue: EncryptionAlgorithm | string | undefined;

  /**
   * <p>The set of accepted encryption algorithms that are allowed in a code signing job.</p>
   */
  allowedValues: (EncryptionAlgorithm | string)[] | undefined;
}

export namespace EncryptionAlgorithmOptions {
  export const filterSensitiveLog = (obj: EncryptionAlgorithmOptions): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EncryptionAlgorithmOptions => __isa(o, "EncryptionAlgorithmOptions");
}

export interface GetSigningPlatformRequest {
  __type?: "GetSigningPlatformRequest";
  /**
   * <p>The ID of the target signing platform.</p>
   */
  platformId: string | undefined;
}

export namespace GetSigningPlatformRequest {
  export const filterSensitiveLog = (obj: GetSigningPlatformRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetSigningPlatformRequest => __isa(o, "GetSigningPlatformRequest");
}

export interface GetSigningPlatformResponse {
  __type?: "GetSigningPlatformResponse";
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
   * <p>The category type of the target signing platform.</p>
   */
  category?: Category | string;

  /**
   * <p>The format of the target platform's signing image.</p>
   */
  signingImageFormat?: SigningImageFormat;

  /**
   * <p>The maximum size (in MB) of the payload that can be signed by the target
   * 			platform.</p>
   */
  maxSizeInMB?: number;

  /**
   * <p>The validation template that is used by the target signing platform.</p>
   */
  target?: string;

  /**
   * <p>The display name of the target signing platform.</p>
   */
  displayName?: string;
}

export namespace GetSigningPlatformResponse {
  export const filterSensitiveLog = (obj: GetSigningPlatformResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetSigningPlatformResponse => __isa(o, "GetSigningPlatformResponse");
}

export interface GetSigningProfileRequest {
  __type?: "GetSigningProfileRequest";
  /**
   * <p>The name of the target signing profile.</p>
   */
  profileName: string | undefined;
}

export namespace GetSigningProfileRequest {
  export const filterSensitiveLog = (obj: GetSigningProfileRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetSigningProfileRequest => __isa(o, "GetSigningProfileRequest");
}

export interface GetSigningProfileResponse {
  __type?: "GetSigningProfileResponse";
  /**
   * <p>A list of overrides applied by the target signing profile for signing
   * 			operations.</p>
   */
  overrides?: SigningPlatformOverrides;

  /**
   * <p>The Amazon Resource Name (ARN) for the signing profile.</p>
   */
  arn?: string;

  /**
   * <p>A map of key-value pairs for signing operations that is attached to the target signing
   * 			profile.</p>
   */
  signingParameters?: { [key: string]: string };

  /**
   * <p>The ARN of the certificate that the target profile uses for signing operations.</p>
   */
  signingMaterial?: SigningMaterial;

  /**
   * <p>The ID of the platform that is used by the target signing profile.</p>
   */
  platformId?: string;

  /**
   * <p>A list of tags associated with the signing profile.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The status of the target signing profile.</p>
   */
  status?: SigningProfileStatus | string;

  /**
   * <p>The name of the target signing profile.</p>
   */
  profileName?: string;
}

export namespace GetSigningProfileResponse {
  export const filterSensitiveLog = (obj: GetSigningProfileResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetSigningProfileResponse => __isa(o, "GetSigningProfileResponse");
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
  allowedValues: (HashAlgorithm | string)[] | undefined;

  /**
   * <p>The default hash algorithm that is used in a code signing job.</p>
   */
  defaultValue: HashAlgorithm | string | undefined;
}

export namespace HashAlgorithmOptions {
  export const filterSensitiveLog = (obj: HashAlgorithmOptions): any => ({
    ...obj,
  });
  export const isa = (o: any): o is HashAlgorithmOptions => __isa(o, "HashAlgorithmOptions");
}

export type ImageFormat = "JSON" | "JSONDetached" | "JSONEmbedded";

/**
 * <p>An internal error occurred.</p>
 */
export interface InternalServiceErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalServiceErrorException";
  $fault: "server";
  message?: string;
}

export namespace InternalServiceErrorException {
  export const filterSensitiveLog = (obj: InternalServiceErrorException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalServiceErrorException => __isa(o, "InternalServiceErrorException");
}

export interface ListSigningJobsRequest {
  __type?: "ListSigningJobsRequest";
  /**
   * <p>The ID of microcontroller platform that you specified for the distribution of your
   * 			code image.</p>
   */
  platformId?: string;

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
   * <p>The IAM principal that requested the signing job.</p>
   */
  requestedBy?: string;

  /**
   * <p>A status value with which to filter your results.</p>
   */
  status?: SigningStatus | string;
}

export namespace ListSigningJobsRequest {
  export const filterSensitiveLog = (obj: ListSigningJobsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListSigningJobsRequest => __isa(o, "ListSigningJobsRequest");
}

export interface ListSigningJobsResponse {
  __type?: "ListSigningJobsResponse";
  /**
   * <p>String for specifying the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of your signing jobs.</p>
   */
  jobs?: SigningJob[];
}

export namespace ListSigningJobsResponse {
  export const filterSensitiveLog = (obj: ListSigningJobsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListSigningJobsResponse => __isa(o, "ListSigningJobsResponse");
}

export interface ListSigningPlatformsRequest {
  __type?: "ListSigningPlatformsRequest";
  /**
   * <p>Value for specifying the next set of paginated results to return. After you receive a
   * 			response with truncated results, use this parameter in a subsequent request. Set it to
   * 			the value of <code>nextToken</code> from the response that you just received.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to be returned by this operation.</p>
   */
  maxResults?: number;

  /**
   * <p>Any partner entities connected to a signing platform.</p>
   */
  partner?: string;

  /**
   * <p>The validation template that is used by the target signing platform.</p>
   */
  target?: string;

  /**
   * <p>The category type of a signing platform.</p>
   */
  category?: string;
}

export namespace ListSigningPlatformsRequest {
  export const filterSensitiveLog = (obj: ListSigningPlatformsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListSigningPlatformsRequest => __isa(o, "ListSigningPlatformsRequest");
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
  platforms?: SigningPlatform[];
}

export namespace ListSigningPlatformsResponse {
  export const filterSensitiveLog = (obj: ListSigningPlatformsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListSigningPlatformsResponse => __isa(o, "ListSigningPlatformsResponse");
}

export interface ListSigningProfilesRequest {
  __type?: "ListSigningProfilesRequest";
  /**
   * <p>Designates whether to include profiles with the status of
   * 			<code>CANCELED</code>.</p>
   */
  includeCanceled?: boolean;

  /**
   * <p>Value for specifying the next set of paginated results to return. After you receive a
   * 			response with truncated results, use this parameter in a subsequent request. Set it to
   * 			the value of <code>nextToken</code> from the response that you just received.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of profiles to be returned.</p>
   */
  maxResults?: number;
}

export namespace ListSigningProfilesRequest {
  export const filterSensitiveLog = (obj: ListSigningProfilesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListSigningProfilesRequest => __isa(o, "ListSigningProfilesRequest");
}

export interface ListSigningProfilesResponse {
  __type?: "ListSigningProfilesResponse";
  /**
   * <p>A list of profiles that are available in the AWS account. This includes profiles with
   * 			the status of <code>CANCELED</code> if the <code>includeCanceled</code> parameter is set
   * 			to <code>true</code>.</p>
   */
  profiles?: SigningProfile[];

  /**
   * <p>Value for specifying the next set of paginated results to return.</p>
   */
  nextToken?: string;
}

export namespace ListSigningProfilesResponse {
  export const filterSensitiveLog = (obj: ListSigningProfilesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListSigningProfilesResponse => __isa(o, "ListSigningProfilesResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) for the signing profile.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceRequest => __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>A list of tags associated with the signing profile.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceResponse => __isa(o, "ListTagsForResourceResponse");
}

/**
 * <p>The signing profile was not found.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  message?: string;
}

export namespace NotFoundException {
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NotFoundException => __isa(o, "NotFoundException");
}

export interface PutSigningProfileRequest {
  __type?: "PutSigningProfileRequest";
  /**
   * <p>Tags to be associated with the signing profile that is being created.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The name of the signing profile to be created.</p>
   */
  profileName: string | undefined;

  /**
   * <p>A subfield of <code>platform</code>. This specifies any different configuration
   * 			options that you want to apply to the chosen platform (such as a different
   * 				<code>hash-algorithm</code> or <code>signing-algorithm</code>).</p>
   */
  overrides?: SigningPlatformOverrides;

  /**
   * <p>Map of key-value pairs for signing. These can include any information that you want to
   * 			use during signing.</p>
   */
  signingParameters?: { [key: string]: string };

  /**
   * <p>The ID of the signing platform to be created.</p>
   */
  platformId: string | undefined;

  /**
   * <p>The AWS Certificate Manager certificate that will be used to sign code with the new signing
   * 			profile.</p>
   */
  signingMaterial: SigningMaterial | undefined;
}

export namespace PutSigningProfileRequest {
  export const filterSensitiveLog = (obj: PutSigningProfileRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutSigningProfileRequest => __isa(o, "PutSigningProfileRequest");
}

export interface PutSigningProfileResponse {
  __type?: "PutSigningProfileResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the signing profile created.</p>
   */
  arn?: string;
}

export namespace PutSigningProfileResponse {
  export const filterSensitiveLog = (obj: PutSigningProfileResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutSigningProfileResponse => __isa(o, "PutSigningProfileResponse");
}

/**
 * <p>A specified resource could not be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceNotFoundException => __isa(o, "ResourceNotFoundException");
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
  export const filterSensitiveLog = (obj: S3Destination): any => ({
    ...obj,
  });
  export const isa = (o: any): o is S3Destination => __isa(o, "S3Destination");
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
  export const filterSensitiveLog = (obj: S3SignedObject): any => ({
    ...obj,
  });
  export const isa = (o: any): o is S3SignedObject => __isa(o, "S3SignedObject");
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
   * <p>Version of your source image in your version enabled S3 bucket.</p>
   */
  version: string | undefined;

  /**
   * <p>Key name of the bucket object that contains your unsigned code.</p>
   */
  key: string | undefined;
}

export namespace S3Source {
  export const filterSensitiveLog = (obj: S3Source): any => ({
    ...obj,
  });
  export const isa = (o: any): o is S3Source => __isa(o, "S3Source");
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
  export const filterSensitiveLog = (obj: SignedObject): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SignedObject => __isa(o, "SignedObject");
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
   * <p>The hash algorithm options that are available for a code signing job.</p>
   */
  hashAlgorithmOptions: HashAlgorithmOptions | undefined;
}

export namespace SigningConfiguration {
  export const filterSensitiveLog = (obj: SigningConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SigningConfiguration => __isa(o, "SigningConfiguration");
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
  export const filterSensitiveLog = (obj: SigningConfigurationOverrides): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SigningConfigurationOverrides => __isa(o, "SigningConfigurationOverrides");
}

/**
 * <p>The image format of a code signing platform or profile.</p>
 */
export interface SigningImageFormat {
  __type?: "SigningImageFormat";
  /**
   * <p>The default format of a code signing image.</p>
   */
  defaultFormat: ImageFormat | string | undefined;

  /**
   * <p>The supported formats of a code signing image.</p>
   */
  supportedFormats: (ImageFormat | string)[] | undefined;
}

export namespace SigningImageFormat {
  export const filterSensitiveLog = (obj: SigningImageFormat): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SigningImageFormat => __isa(o, "SigningImageFormat");
}

/**
 * <p>Contains information about a signing job.</p>
 */
export interface SigningJob {
  __type?: "SigningJob";
  /**
   * <p>The status of the signing job.</p>
   */
  status?: SigningStatus | string;

  /**
   * <p>A <code>Source</code> that contains information about a signing job's code image
   * 			source.</p>
   */
  source?: Source;

  /**
   * <p>The ID of the signing job.</p>
   */
  jobId?: string;

  /**
   * <p>A <code>SigningMaterial</code> object that contains the Amazon Resource Name (ARN) of
   * 			the certificate used for the signing job.</p>
   */
  signingMaterial?: SigningMaterial;

  /**
   * <p>The date and time that the signing job was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>A <code>SignedObject</code> structure that contains information about a signing job's
   * 			signed code image.</p>
   */
  signedObject?: SignedObject;
}

export namespace SigningJob {
  export const filterSensitiveLog = (obj: SigningJob): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SigningJob => __isa(o, "SigningJob");
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
  export const filterSensitiveLog = (obj: SigningMaterial): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SigningMaterial => __isa(o, "SigningMaterial");
}

/**
 * <p>Contains information about the signing configurations and parameters that are used to
 * 			perform a code signing job.</p>
 */
export interface SigningPlatform {
  __type?: "SigningPlatform";
  /**
   * <p>The types of targets that can be signed by a code signing platform.</p>
   */
  target?: string;

  /**
   * <p>The display name of a code signing platform.</p>
   */
  displayName?: string;

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
   * <p>The ID of a code signing; platform.</p>
   */
  platformId?: string;

  /**
   * <p>The category of a code signing platform.</p>
   */
  category?: Category | string;

  /**
   * <p>Any partner entities linked to a code signing platform.</p>
   */
  partner?: string;

  /**
   * <p>The maximum size (in MB) of code that can be signed by a code signing platform.</p>
   */
  maxSizeInMB?: number;
}

export namespace SigningPlatform {
  export const filterSensitiveLog = (obj: SigningPlatform): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SigningPlatform => __isa(o, "SigningPlatform");
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

  /**
   * <p>A signed image is a JSON object. When overriding the default signing platform configuration,
   * 			a customer can select either of two signing formats, <code>JSONEmbedded</code> or
   * 				<code>JSONDetached</code>.  (A third format value, <code>JSON</code>, is reserved
   * 			for future use.) With <code>JSONEmbedded</code>, the signing image has the payload
   * 			embedded in it. With <code>JSONDetached</code>, the payload is not be embedded in the
   * 			signing image.</p>
   */
  signingImageFormat?: ImageFormat | string;
}

export namespace SigningPlatformOverrides {
  export const filterSensitiveLog = (obj: SigningPlatformOverrides): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SigningPlatformOverrides => __isa(o, "SigningPlatformOverrides");
}

/**
 * <p>Contains information about the ACM certificates and code signing configuration parameters that
 * 			can be used by a given code signing user.</p>
 */
export interface SigningProfile {
  __type?: "SigningProfile";
  /**
   * <p>The ACM certificate that is available for use by a signing profile.</p>
   */
  signingMaterial?: SigningMaterial;

  /**
   * <p>The parameters that are available for use by a code signing user.</p>
   */
  signingParameters?: { [key: string]: string };

  /**
   * <p>The name of the signing profile.</p>
   */
  profileName?: string;

  /**
   * <p>The ID of a platform that is available for use by a signing profile.</p>
   */
  platformId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the signing profile.</p>
   */
  arn?: string;

  /**
   * <p>A list of tags associated with the signing profile.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The status of a code signing profile.</p>
   */
  status?: SigningProfileStatus | string;
}

export namespace SigningProfile {
  export const filterSensitiveLog = (obj: SigningProfile): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SigningProfile => __isa(o, "SigningProfile");
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
  export const filterSensitiveLog = (obj: Source): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Source => __isa(o, "Source");
}

export interface StartSigningJobRequest {
  __type?: "StartSigningJobRequest";
  /**
   * <p>The name of the signing profile.</p>
   */
  profileName?: string;

  /**
   * <p>String that identifies the signing request. All calls after the first that use this
   * 			token return the same response as the first call.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The S3 bucket that contains the object to sign or a BLOB that contains your raw
   * 			code.</p>
   */
  source: Source | undefined;

  /**
   * <p>The S3 bucket in which to save your signed object. The destination contains the name
   * 			of your bucket and an optional prefix.</p>
   */
  destination: Destination | undefined;
}

export namespace StartSigningJobRequest {
  export const filterSensitiveLog = (obj: StartSigningJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartSigningJobRequest => __isa(o, "StartSigningJobRequest");
}

export interface StartSigningJobResponse {
  __type?: "StartSigningJobResponse";
  /**
   * <p>The ID of your signing job.</p>
   */
  jobId?: string;
}

export namespace StartSigningJobResponse {
  export const filterSensitiveLog = (obj: StartSigningJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartSigningJobResponse => __isa(o, "StartSigningJobResponse");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>One or more tags to be associated with the signing profile.</p>
   */
  tags: { [key: string]: string } | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the signing profile.</p>
   */
  resourceArn: string | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceRequest => __isa(o, "TagResourceRequest");
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceResponse => __isa(o, "TagResourceResponse");
}

/**
 * <p>The signing job has been throttled.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message?: string;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ThrottlingException => __isa(o, "ThrottlingException");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) for the signing profile.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of tag keys to be removed from the signing profile.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceRequest => __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceResponse => __isa(o, "UntagResourceResponse");
}

/**
 * <p>You signing certificate could not be validated.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message?: string;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ValidationException => __isa(o, "ValidationException");
}
