import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum __PeriodTriggersElement {
  ADS = "ADS",
}

export enum AdMarkers {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
  SCTE35_ENHANCED = "SCTE35_ENHANCED",
}

/**
 * A MediaPackage VOD Asset resource.
 */
export interface AssetShallow {
  /**
   * The time the Asset was initially submitted for Ingest.
   */
  CreatedAt?: string;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };

  /**
   * The ID of the PackagingGroup for the Asset.
   */
  PackagingGroupId?: string;

  /**
   * ARN of the source object in S3.
   */
  SourceArn?: string;

  /**
   * The resource ID to include in SPEKE key requests.
   */
  ResourceId?: string;

  /**
   * The IAM role ARN used to access the source S3 bucket.
   */
  SourceRoleArn?: string;

  /**
   * The unique identifier for the Asset.
   */
  Id?: string;

  /**
   * The ARN of the Asset.
   */
  Arn?: string;
}

export namespace AssetShallow {
  export const filterSensitiveLog = (obj: AssetShallow): any => ({
    ...obj,
  });
}

/**
 * CDN Authorization credentials
 */
export interface Authorization {
  /**
   * The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager.
   */
  SecretsRoleArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the secret in AWS Secrets Manager that is used for CDN authorization.
   */
  CdnIdentifierSecret: string | undefined;
}

export namespace Authorization {
  export const filterSensitiveLog = (obj: Authorization): any => ({
    ...obj,
  });
}

/**
 * A CMAF encryption configuration.
 */
export interface CmafEncryption {
  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: SpekeKeyProvider | undefined;
}

export namespace CmafEncryption {
  export const filterSensitiveLog = (obj: CmafEncryption): any => ({
    ...obj,
  });
}

/**
 * A CMAF packaging configuration.
 */
export interface CmafPackage {
  /**
   * A list of HLS manifest configurations.
   */
  HlsManifests: HlsManifest[] | undefined;

  /**
   * Duration (in seconds) of each fragment. Actual fragments will be
   * rounded to the nearest multiple of the source fragment duration.
   */
  SegmentDurationSeconds?: number;

  /**
   * A CMAF encryption configuration.
   */
  Encryption?: CmafEncryption;
}

export namespace CmafPackage {
  export const filterSensitiveLog = (obj: CmafPackage): any => ({
    ...obj,
  });
}

/**
 * A new MediaPackage VOD Asset configuration.
 */
export interface CreateAssetRequest {
  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };

  /**
   * The resource ID to include in SPEKE key requests.
   */
  ResourceId?: string;

  /**
   * ARN of the source object in S3.
   */
  SourceArn: string | undefined;

  /**
   * The ID of the PackagingGroup for the Asset.
   */
  PackagingGroupId: string | undefined;

  /**
   * The IAM role ARN used to access the source S3 bucket.
   */
  SourceRoleArn: string | undefined;

  /**
   * The unique identifier for the Asset.
   */
  Id: string | undefined;
}

export namespace CreateAssetRequest {
  export const filterSensitiveLog = (obj: CreateAssetRequest): any => ({
    ...obj,
  });
}

export interface CreateAssetResponse {
  /**
   * The time the Asset was initially submitted for Ingest.
   */
  CreatedAt?: string;

  /**
   * ARN of the source object in S3.
   */
  SourceArn?: string;

  /**
   * The unique identifier for the Asset.
   */
  Id?: string;

  /**
   * The ID of the PackagingGroup for the Asset.
   */
  PackagingGroupId?: string;

  /**
   * The resource ID to include in SPEKE key requests.
   */
  ResourceId?: string;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };

  /**
   * The list of egress endpoints available for the Asset.
   */
  EgressEndpoints?: EgressEndpoint[];

  /**
   * The IAM role_arn used to access the source S3 bucket.
   */
  SourceRoleArn?: string;

  /**
   * The ARN of the Asset.
   */
  Arn?: string;
}

export namespace CreateAssetResponse {
  export const filterSensitiveLog = (obj: CreateAssetResponse): any => ({
    ...obj,
  });
}

/**
 * A new MediaPackage VOD PackagingConfiguration resource configuration.
 */
export interface CreatePackagingConfigurationRequest {
  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };

  /**
   * A CMAF packaging configuration.
   */
  CmafPackage?: CmafPackage;

  /**
   * The ID of the PackagingConfiguration.
   */
  Id: string | undefined;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;

  /**
   * The ID of a PackagingGroup.
   */
  PackagingGroupId: string | undefined;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
   */
  MssPackage?: MssPackage;
}

export namespace CreatePackagingConfigurationRequest {
  export const filterSensitiveLog = (obj: CreatePackagingConfigurationRequest): any => ({
    ...obj,
  });
}

export interface CreatePackagingConfigurationResponse {
  /**
   * A CMAF packaging configuration.
   */
  CmafPackage?: CmafPackage;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
   */
  MssPackage?: MssPackage;

  /**
   * The ID of a PackagingGroup.
   */
  PackagingGroupId?: string;

  /**
   * The ID of the PackagingConfiguration.
   */
  Id?: string;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;

  /**
   * The ARN of the PackagingConfiguration.
   */
  Arn?: string;
}

export namespace CreatePackagingConfigurationResponse {
  export const filterSensitiveLog = (obj: CreatePackagingConfigurationResponse): any => ({
    ...obj,
  });
}

/**
 * A new MediaPackage VOD PackagingGroup resource configuration.
 */
export interface CreatePackagingGroupRequest {
  /**
   * The ID of the PackagingGroup.
   */
  Id: string | undefined;

  /**
   * CDN Authorization credentials
   */
  Authorization?: Authorization;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };
}

export namespace CreatePackagingGroupRequest {
  export const filterSensitiveLog = (obj: CreatePackagingGroupRequest): any => ({
    ...obj,
  });
}

export interface CreatePackagingGroupResponse {
  /**
   * CDN Authorization credentials
   */
  Authorization?: Authorization;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };

  /**
   * The fully qualified domain name for Assets in the PackagingGroup.
   */
  DomainName?: string;

  /**
   * The ARN of the PackagingGroup.
   */
  Arn?: string;

  /**
   * The ID of the PackagingGroup.
   */
  Id?: string;
}

export namespace CreatePackagingGroupResponse {
  export const filterSensitiveLog = (obj: CreatePackagingGroupResponse): any => ({
    ...obj,
  });
}

/**
 * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
 */
export interface DashEncryption {
  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: SpekeKeyProvider | undefined;
}

export namespace DashEncryption {
  export const filterSensitiveLog = (obj: DashEncryption): any => ({
    ...obj,
  });
}

/**
 * A DASH manifest configuration.
 */
export interface DashManifest {
  /**
   * An optional string to include in the name of the manifest.
   */
  ManifestName?: string;

  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: StreamSelection;

  /**
   * Minimum duration (in seconds) that a player will buffer media before starting the presentation.
   */
  MinBufferTimeSeconds?: number;

  /**
   * Determines the position of some tags in the Media Presentation Description (MPD).  When set to FULL, elements like SegmentTemplate and ContentProtection are included in each Representation.  When set to COMPACT, duplicate elements are combined and presented at the AdaptationSet level.
   */
  ManifestLayout?: ManifestLayout | string;

  /**
   * The Dynamic Adaptive Streaming over HTTP (DASH) profile type.  When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled.
   */
  Profile?: Profile | string;
}

export namespace DashManifest {
  export const filterSensitiveLog = (obj: DashManifest): any => ({
    ...obj,
  });
}

/**
 * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
 */
export interface DashPackage {
  /**
   * Duration (in seconds) of each segment. Actual segments will be
   * rounded to the nearest multiple of the source segment duration.
   */
  SegmentDurationSeconds?: number;

  /**
   * A list of DASH manifest configurations.
   */
  DashManifests: DashManifest[] | undefined;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
   */
  Encryption?: DashEncryption;

  /**
   * A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH)
   * Media Presentation Description (MPD) will be partitioned into multiple periods. If empty, the content will not
   * be partitioned into more than one period. If the list contains "ADS", new periods will be created where
   * the Asset contains SCTE-35 ad markers.
   */
  PeriodTriggers?: (__PeriodTriggersElement | string)[];

  /**
   * Determines the type of SegmentTemplate included in the Media Presentation Description (MPD).  When set to NUMBER_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs.  When set to TIME_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to NUMBER_WITH_DURATION, only a duration is included in each SegmentTemplate, with $Number$ media URLs.
   */
  SegmentTemplateFormat?: SegmentTemplateFormat | string;
}

export namespace DashPackage {
  export const filterSensitiveLog = (obj: DashPackage): any => ({
    ...obj,
  });
}

export interface DeleteAssetRequest {
  /**
   * The ID of the MediaPackage VOD Asset resource to delete.
   */
  Id: string | undefined;
}

export namespace DeleteAssetRequest {
  export const filterSensitiveLog = (obj: DeleteAssetRequest): any => ({
    ...obj,
  });
}

export interface DeleteAssetResponse {}

export namespace DeleteAssetResponse {
  export const filterSensitiveLog = (obj: DeleteAssetResponse): any => ({
    ...obj,
  });
}

export interface DeletePackagingConfigurationRequest {
  /**
   * The ID of the MediaPackage VOD PackagingConfiguration resource to delete.
   */
  Id: string | undefined;
}

export namespace DeletePackagingConfigurationRequest {
  export const filterSensitiveLog = (obj: DeletePackagingConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeletePackagingConfigurationResponse {}

export namespace DeletePackagingConfigurationResponse {
  export const filterSensitiveLog = (obj: DeletePackagingConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DeletePackagingGroupRequest {
  /**
   * The ID of the MediaPackage VOD PackagingGroup resource to delete.
   */
  Id: string | undefined;
}

export namespace DeletePackagingGroupRequest {
  export const filterSensitiveLog = (obj: DeletePackagingGroupRequest): any => ({
    ...obj,
  });
}

export interface DeletePackagingGroupResponse {}

export namespace DeletePackagingGroupResponse {
  export const filterSensitiveLog = (obj: DeletePackagingGroupResponse): any => ({
    ...obj,
  });
}

export interface DescribeAssetRequest {
  /**
   * The ID of an MediaPackage VOD Asset resource.
   */
  Id: string | undefined;
}

export namespace DescribeAssetRequest {
  export const filterSensitiveLog = (obj: DescribeAssetRequest): any => ({
    ...obj,
  });
}

export interface DescribeAssetResponse {
  /**
   * The IAM role_arn used to access the source S3 bucket.
   */
  SourceRoleArn?: string;

  /**
   * The unique identifier for the Asset.
   */
  Id?: string;

  /**
   * The resource ID to include in SPEKE key requests.
   */
  ResourceId?: string;

  /**
   * The time the Asset was initially submitted for Ingest.
   */
  CreatedAt?: string;

  /**
   * ARN of the source object in S3.
   */
  SourceArn?: string;

  /**
   * The ID of the PackagingGroup for the Asset.
   */
  PackagingGroupId?: string;

  /**
   * The ARN of the Asset.
   */
  Arn?: string;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };

  /**
   * The list of egress endpoints available for the Asset.
   */
  EgressEndpoints?: EgressEndpoint[];
}

export namespace DescribeAssetResponse {
  export const filterSensitiveLog = (obj: DescribeAssetResponse): any => ({
    ...obj,
  });
}

export interface DescribePackagingConfigurationRequest {
  /**
   * The ID of a MediaPackage VOD PackagingConfiguration resource.
   */
  Id: string | undefined;
}

export namespace DescribePackagingConfigurationRequest {
  export const filterSensitiveLog = (obj: DescribePackagingConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DescribePackagingConfigurationResponse {
  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * The ID of the PackagingConfiguration.
   */
  Id?: string;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };

  /**
   * A CMAF packaging configuration.
   */
  CmafPackage?: CmafPackage;

  /**
   * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
   */
  MssPackage?: MssPackage;

  /**
   * The ID of a PackagingGroup.
   */
  PackagingGroupId?: string;

  /**
   * The ARN of the PackagingConfiguration.
   */
  Arn?: string;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;
}

export namespace DescribePackagingConfigurationResponse {
  export const filterSensitiveLog = (obj: DescribePackagingConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DescribePackagingGroupRequest {
  /**
   * The ID of a MediaPackage VOD PackagingGroup resource.
   */
  Id: string | undefined;
}

export namespace DescribePackagingGroupRequest {
  export const filterSensitiveLog = (obj: DescribePackagingGroupRequest): any => ({
    ...obj,
  });
}

export interface DescribePackagingGroupResponse {
  /**
   * CDN Authorization credentials
   */
  Authorization?: Authorization;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };

  /**
   * The fully qualified domain name for Assets in the PackagingGroup.
   */
  DomainName?: string;

  /**
   * The ARN of the PackagingGroup.
   */
  Arn?: string;

  /**
   * The ID of the PackagingGroup.
   */
  Id?: string;
}

export namespace DescribePackagingGroupResponse {
  export const filterSensitiveLog = (obj: DescribePackagingGroupResponse): any => ({
    ...obj,
  });
}

/**
 * The endpoint URL used to access an Asset using one PackagingConfiguration.
 */
export interface EgressEndpoint {
  /**
   * The URL of the parent manifest for the repackaged Asset.
   */
  Url?: string;

  /**
   * The ID of the PackagingConfiguration being applied to the Asset.
   */
  PackagingConfigurationId?: string;
}

export namespace EgressEndpoint {
  export const filterSensitiveLog = (obj: EgressEndpoint): any => ({
    ...obj,
  });
}

export enum EncryptionMethod {
  AES_128 = "AES_128",
  SAMPLE_AES = "SAMPLE_AES",
}

/**
 * The client is not authorized to access the requested resource.
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
  Message?: string;
}

export namespace ForbiddenException {
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj,
  });
}

/**
 * An HTTP Live Streaming (HLS) encryption configuration.
 */
export interface HlsEncryption {
  /**
   * A constant initialization vector for encryption (optional).
   * When not specified the initialization vector will be periodically rotated.
   */
  ConstantInitializationVector?: string;

  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: SpekeKeyProvider | undefined;

  /**
   * The encryption method to use.
   */
  EncryptionMethod?: EncryptionMethod | string;
}

export namespace HlsEncryption {
  export const filterSensitiveLog = (obj: HlsEncryption): any => ({
    ...obj,
  });
}

/**
 * An HTTP Live Streaming (HLS) manifest configuration.
 */
export interface HlsManifest {
  /**
   * When enabled, an I-Frame only stream will be included in the output.
   */
  IncludeIframeOnlyStream?: boolean;

  /**
   * When enabled, the EXT-X-KEY tag will be repeated in output manifests.
   */
  RepeatExtXKey?: boolean;

  /**
   * The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag
   * inserted into manifests. Additionally, when an interval is specified
   * ID3Timed Metadata messages will be generated every 5 seconds using the
   * ingest time of the content.
   * If the interval is not specified, or set to 0, then
   * no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no
   * ID3Timed Metadata messages will be generated. Note that irrespective
   * of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input,
   * it will be passed through to HLS output.
   */
  ProgramDateTimeIntervalSeconds?: number;

  /**
   * This setting controls how ad markers are included in the packaged OriginEndpoint.
   * "NONE" will omit all SCTE-35 ad markers from the output.
   * "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad
   * markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest.
   * "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35
   * messages in the input source.
   */
  AdMarkers?: AdMarkers | string;

  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: StreamSelection;

  /**
   * An optional string to include in the name of the manifest.
   */
  ManifestName?: string;
}

export namespace HlsManifest {
  export const filterSensitiveLog = (obj: HlsManifest): any => ({
    ...obj,
  });
}

/**
 * An HTTP Live Streaming (HLS) packaging configuration.
 */
export interface HlsPackage {
  /**
   * A list of HLS manifest configurations.
   */
  HlsManifests: HlsManifest[] | undefined;

  /**
   * When enabled, audio streams will be placed in rendition groups in the output.
   */
  UseAudioRenditionGroup?: boolean;

  /**
   * An HTTP Live Streaming (HLS) encryption configuration.
   */
  Encryption?: HlsEncryption;

  /**
   * Duration (in seconds) of each fragment. Actual fragments will be
   * rounded to the nearest multiple of the source fragment duration.
   */
  SegmentDurationSeconds?: number;
}

export namespace HlsPackage {
  export const filterSensitiveLog = (obj: HlsPackage): any => ({
    ...obj,
  });
}

/**
 * An unexpected error occurred.
 */
export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerErrorException {
  export const filterSensitiveLog = (obj: InternalServerErrorException): any => ({
    ...obj,
  });
}

export interface ListAssetsRequest {
  /**
   * A token used to resume pagination from the end of a previous request.
   */
  NextToken?: string;

  /**
   * Upper bound on number of records to return.
   */
  MaxResults?: number;

  /**
   * Returns Assets associated with the specified PackagingGroup.
   */
  PackagingGroupId?: string;
}

export namespace ListAssetsRequest {
  export const filterSensitiveLog = (obj: ListAssetsRequest): any => ({
    ...obj,
  });
}

export interface ListAssetsResponse {
  /**
   * A list of MediaPackage VOD Asset resources.
   */
  Assets?: AssetShallow[];

  /**
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;
}

export namespace ListAssetsResponse {
  export const filterSensitiveLog = (obj: ListAssetsResponse): any => ({
    ...obj,
  });
}

export interface ListPackagingConfigurationsRequest {
  /**
   * Returns MediaPackage VOD PackagingConfigurations associated with the specified PackagingGroup.
   */
  PackagingGroupId?: string;

  /**
   * Upper bound on number of records to return.
   */
  MaxResults?: number;

  /**
   * A token used to resume pagination from the end of a previous request.
   */
  NextToken?: string;
}

export namespace ListPackagingConfigurationsRequest {
  export const filterSensitiveLog = (obj: ListPackagingConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface ListPackagingConfigurationsResponse {
  /**
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;

  /**
   * A list of MediaPackage VOD PackagingConfiguration resources.
   */
  PackagingConfigurations?: PackagingConfiguration[];
}

export namespace ListPackagingConfigurationsResponse {
  export const filterSensitiveLog = (obj: ListPackagingConfigurationsResponse): any => ({
    ...obj,
  });
}

export interface ListPackagingGroupsRequest {
  /**
   * A token used to resume pagination from the end of a previous request.
   */
  NextToken?: string;

  /**
   * Upper bound on number of records to return.
   */
  MaxResults?: number;
}

export namespace ListPackagingGroupsRequest {
  export const filterSensitiveLog = (obj: ListPackagingGroupsRequest): any => ({
    ...obj,
  });
}

export interface ListPackagingGroupsResponse {
  /**
   * A list of MediaPackage VOD PackagingGroup resources.
   */
  PackagingGroups?: PackagingGroup[];

  /**
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;
}

export namespace ListPackagingGroupsResponse {
  export const filterSensitiveLog = (obj: ListPackagingGroupsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) for the resource. You can get this from the response to any request to the resource.
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export enum ManifestLayout {
  COMPACT = "COMPACT",
  FULL = "FULL",
}

/**
 * A Microsoft Smooth Streaming (MSS) encryption configuration.
 */
export interface MssEncryption {
  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: SpekeKeyProvider | undefined;
}

export namespace MssEncryption {
  export const filterSensitiveLog = (obj: MssEncryption): any => ({
    ...obj,
  });
}

/**
 * A Microsoft Smooth Streaming (MSS) manifest configuration.
 */
export interface MssManifest {
  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: StreamSelection;

  /**
   * An optional string to include in the name of the manifest.
   */
  ManifestName?: string;
}

export namespace MssManifest {
  export const filterSensitiveLog = (obj: MssManifest): any => ({
    ...obj,
  });
}

/**
 * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
 */
export interface MssPackage {
  /**
   * A Microsoft Smooth Streaming (MSS) encryption configuration.
   */
  Encryption?: MssEncryption;

  /**
   * A list of MSS manifest configurations.
   */
  MssManifests: MssManifest[] | undefined;

  /**
   * The duration (in seconds) of each segment.
   */
  SegmentDurationSeconds?: number;
}

export namespace MssPackage {
  export const filterSensitiveLog = (obj: MssPackage): any => ({
    ...obj,
  });
}

/**
 * The requested resource does not exist.
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace NotFoundException {
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
}

/**
 * A MediaPackage VOD PackagingConfiguration resource.
 */
export interface PackagingConfiguration {
  /**
   * The ID of the PackagingConfiguration.
   */
  Id?: string;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * The ID of a PackagingGroup.
   */
  PackagingGroupId?: string;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;

  /**
   * The ARN of the PackagingConfiguration.
   */
  Arn?: string;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };

  /**
   * A CMAF packaging configuration.
   */
  CmafPackage?: CmafPackage;

  /**
   * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
   */
  MssPackage?: MssPackage;
}

export namespace PackagingConfiguration {
  export const filterSensitiveLog = (obj: PackagingConfiguration): any => ({
    ...obj,
  });
}

/**
 * A MediaPackage VOD PackagingGroup resource.
 */
export interface PackagingGroup {
  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };

  /**
   * CDN Authorization credentials
   */
  Authorization?: Authorization;

  /**
   * The ARN of the PackagingGroup.
   */
  Arn?: string;

  /**
   * The fully qualified domain name for Assets in the PackagingGroup.
   */
  DomainName?: string;

  /**
   * The ID of the PackagingGroup.
   */
  Id?: string;
}

export namespace PackagingGroup {
  export const filterSensitiveLog = (obj: PackagingGroup): any => ({
    ...obj,
  });
}

export enum Profile {
  HBBTV_1_5 = "HBBTV_1_5",
  NONE = "NONE",
}

export enum SegmentTemplateFormat {
  NUMBER_WITH_DURATION = "NUMBER_WITH_DURATION",
  NUMBER_WITH_TIMELINE = "NUMBER_WITH_TIMELINE",
  TIME_WITH_TIMELINE = "TIME_WITH_TIMELINE",
}

/**
 * An unexpected error occurred.
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  Message?: string;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
}

/**
 * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
 */
export interface SpekeKeyProvider {
  /**
   * An Amazon Resource Name (ARN) of an IAM role that AWS Elemental
   * MediaPackage will assume when accessing the key provider service.
   */
  RoleArn: string | undefined;

  /**
   * The URL of the external key provider service.
   */
  Url: string | undefined;

  /**
   * The system IDs to include in key requests.
   */
  SystemIds: string[] | undefined;
}

export namespace SpekeKeyProvider {
  export const filterSensitiveLog = (obj: SpekeKeyProvider): any => ({
    ...obj,
  });
}

export enum StreamOrder {
  ORIGINAL = "ORIGINAL",
  VIDEO_BITRATE_ASCENDING = "VIDEO_BITRATE_ASCENDING",
  VIDEO_BITRATE_DESCENDING = "VIDEO_BITRATE_DESCENDING",
}

/**
 * A StreamSelection configuration.
 */
export interface StreamSelection {
  /**
   * The minimum video bitrate (bps) to include in output.
   */
  MinVideoBitsPerSecond?: number;

  /**
   * A directive that determines the order of streams in the output.
   */
  StreamOrder?: StreamOrder | string;

  /**
   * The maximum video bitrate (bps) to include in output.
   */
  MaxVideoBitsPerSecond?: number;
}

export namespace StreamSelection {
  export const filterSensitiveLog = (obj: StreamSelection): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) for the resource. You can get this from the response to any request to the resource.
   */
  ResourceArn: string | undefined;

  /**
   * A collection of tags associated with a resource
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

/**
 * The client has exceeded their resource or throttling limits.
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
}

/**
 * The parameters sent in the request are not valid.
 */
export interface UnprocessableEntityException extends __SmithyException, $MetadataBearer {
  name: "UnprocessableEntityException";
  $fault: "client";
  Message?: string;
}

export namespace UnprocessableEntityException {
  export const filterSensitiveLog = (obj: UnprocessableEntityException): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * A comma-separated list of the tag keys to remove from the resource.
   */
  TagKeys: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) for the resource. You can get this from the response to any request to the resource.
   */
  ResourceArn: string | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

/**
 * A MediaPackage VOD PackagingGroup resource configuration.
 */
export interface UpdatePackagingGroupRequest {
  /**
   * The ID of a MediaPackage VOD PackagingGroup resource.
   */
  Id: string | undefined;

  /**
   * CDN Authorization credentials
   */
  Authorization?: Authorization;
}

export namespace UpdatePackagingGroupRequest {
  export const filterSensitiveLog = (obj: UpdatePackagingGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdatePackagingGroupResponse {
  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };

  /**
   * CDN Authorization credentials
   */
  Authorization?: Authorization;

  /**
   * The fully qualified domain name for Assets in the PackagingGroup.
   */
  DomainName?: string;

  /**
   * The ARN of the PackagingGroup.
   */
  Arn?: string;

  /**
   * The ID of the PackagingGroup.
   */
  Id?: string;
}

export namespace UpdatePackagingGroupResponse {
  export const filterSensitiveLog = (obj: UpdatePackagingGroupResponse): any => ({
    ...obj,
  });
}
