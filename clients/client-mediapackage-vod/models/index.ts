import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum AdMarkers {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
  SCTE35_ENHANCED = "SCTE35_ENHANCED",
}

/**
 * A MediaPackage VOD Asset resource.
 */
export interface AssetShallow {
  __type?: "AssetShallow";
  /**
   * The ARN of the Asset.
   */
  Arn?: string;

  /**
   * The time the Asset was initially submitted for Ingest.
   */
  CreatedAt?: string;

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
   * ARN of the source object in S3.
   */
  SourceArn?: string;

  /**
   * The IAM role ARN used to access the source S3 bucket.
   */
  SourceRoleArn?: string;
}

export namespace AssetShallow {
  export const filterSensitiveLog = (obj: AssetShallow): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssetShallow => __isa(o, "AssetShallow");
}

/**
 * A CMAF encryption configuration.
 */
export interface CmafEncryption {
  __type?: "CmafEncryption";
  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: SpekeKeyProvider | undefined;
}

export namespace CmafEncryption {
  export const filterSensitiveLog = (obj: CmafEncryption): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CmafEncryption => __isa(o, "CmafEncryption");
}

/**
 * A CMAF packaging configuration.
 */
export interface CmafPackage {
  __type?: "CmafPackage";
  /**
   * A CMAF encryption configuration.
   */
  Encryption?: CmafEncryption;

  /**
   * A list of HLS manifest configurations.
   */
  HlsManifests: HlsManifest[] | undefined;

  /**
   * Duration (in seconds) of each fragment. Actual fragments will be
   * rounded to the nearest multiple of the source fragment duration.
   */
  SegmentDurationSeconds?: number;
}

export namespace CmafPackage {
  export const filterSensitiveLog = (obj: CmafPackage): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CmafPackage => __isa(o, "CmafPackage");
}

/**
 * A new MediaPackage VOD Asset configuration.
 */
export interface CreateAssetRequest {
  __type?: "CreateAssetRequest";
  /**
   * The unique identifier for the Asset.
   */
  Id: string | undefined;

  /**
   * The ID of the PackagingGroup for the Asset.
   */
  PackagingGroupId: string | undefined;

  /**
   * The resource ID to include in SPEKE key requests.
   */
  ResourceId?: string;

  /**
   * ARN of the source object in S3.
   */
  SourceArn: string | undefined;

  /**
   * The IAM role ARN used to access the source S3 bucket.
   */
  SourceRoleArn: string | undefined;
}

export namespace CreateAssetRequest {
  export const filterSensitiveLog = (obj: CreateAssetRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateAssetRequest => __isa(o, "CreateAssetRequest");
}

export interface CreateAssetResponse {
  __type?: "CreateAssetResponse";
  /**
   * The ARN of the Asset.
   */
  Arn?: string;

  /**
   * The time the Asset was initially submitted for Ingest.
   */
  CreatedAt?: string;

  /**
   * The list of egress endpoints available for the Asset.
   */
  EgressEndpoints?: EgressEndpoint[];

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
   * ARN of the source object in S3.
   */
  SourceArn?: string;

  /**
   * The IAM role_arn used to access the source S3 bucket.
   */
  SourceRoleArn?: string;
}

export namespace CreateAssetResponse {
  export const filterSensitiveLog = (obj: CreateAssetResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateAssetResponse => __isa(o, "CreateAssetResponse");
}

/**
 * A new MediaPackage VOD PackagingConfiguration resource configuration.
 */
export interface CreatePackagingConfigurationRequest {
  __type?: "CreatePackagingConfigurationRequest";
  /**
   * A CMAF packaging configuration.
   */
  CmafPackage?: CmafPackage;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * The ID of the PackagingConfiguration.
   */
  Id: string | undefined;

  /**
   * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
   */
  MssPackage?: MssPackage;

  /**
   * The ID of a PackagingGroup.
   */
  PackagingGroupId: string | undefined;
}

export namespace CreatePackagingConfigurationRequest {
  export const filterSensitiveLog = (obj: CreatePackagingConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreatePackagingConfigurationRequest =>
    __isa(o, "CreatePackagingConfigurationRequest");
}

export interface CreatePackagingConfigurationResponse {
  __type?: "CreatePackagingConfigurationResponse";
  /**
   * The ARN of the PackagingConfiguration.
   */
  Arn?: string;

  /**
   * A CMAF packaging configuration.
   */
  CmafPackage?: CmafPackage;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * The ID of the PackagingConfiguration.
   */
  Id?: string;

  /**
   * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
   */
  MssPackage?: MssPackage;

  /**
   * The ID of a PackagingGroup.
   */
  PackagingGroupId?: string;
}

export namespace CreatePackagingConfigurationResponse {
  export const filterSensitiveLog = (obj: CreatePackagingConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreatePackagingConfigurationResponse =>
    __isa(o, "CreatePackagingConfigurationResponse");
}

/**
 * A new MediaPackage VOD PackagingGroup resource configuration.
 */
export interface CreatePackagingGroupRequest {
  __type?: "CreatePackagingGroupRequest";
  /**
   * The ID of the PackagingGroup.
   */
  Id: string | undefined;
}

export namespace CreatePackagingGroupRequest {
  export const filterSensitiveLog = (obj: CreatePackagingGroupRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreatePackagingGroupRequest => __isa(o, "CreatePackagingGroupRequest");
}

export interface CreatePackagingGroupResponse {
  __type?: "CreatePackagingGroupResponse";
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

export namespace CreatePackagingGroupResponse {
  export const filterSensitiveLog = (obj: CreatePackagingGroupResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreatePackagingGroupResponse => __isa(o, "CreatePackagingGroupResponse");
}

/**
 * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
 */
export interface DashEncryption {
  __type?: "DashEncryption";
  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: SpekeKeyProvider | undefined;
}

export namespace DashEncryption {
  export const filterSensitiveLog = (obj: DashEncryption): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DashEncryption => __isa(o, "DashEncryption");
}

/**
 * A DASH manifest configuration.
 */
export interface DashManifest {
  __type?: "DashManifest";
  /**
   * An optional string to include in the name of the manifest.
   */
  ManifestName?: string;

  /**
   * Minimum duration (in seconds) that a player will buffer media before starting the presentation.
   */
  MinBufferTimeSeconds?: number;

  /**
   * The Dynamic Adaptive Streaming over HTTP (DASH) profile type.  When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled.
   */
  Profile?: Profile | string;

  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: StreamSelection;
}

export namespace DashManifest {
  export const filterSensitiveLog = (obj: DashManifest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DashManifest => __isa(o, "DashManifest");
}

/**
 * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
 */
export interface DashPackage {
  __type?: "DashPackage";
  /**
   * A list of DASH manifest configurations.
   */
  DashManifests: DashManifest[] | undefined;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
   */
  Encryption?: DashEncryption;

  /**
   * Duration (in seconds) of each segment. Actual segments will be
   * rounded to the nearest multiple of the source segment duration.
   */
  SegmentDurationSeconds?: number;
}

export namespace DashPackage {
  export const filterSensitiveLog = (obj: DashPackage): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DashPackage => __isa(o, "DashPackage");
}

export interface DeleteAssetRequest {
  __type?: "DeleteAssetRequest";
  /**
   * The ID of the MediaPackage VOD Asset resource to delete.
   */
  Id: string | undefined;
}

export namespace DeleteAssetRequest {
  export const filterSensitiveLog = (obj: DeleteAssetRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteAssetRequest => __isa(o, "DeleteAssetRequest");
}

export interface DeleteAssetResponse {
  __type?: "DeleteAssetResponse";
}

export namespace DeleteAssetResponse {
  export const filterSensitiveLog = (obj: DeleteAssetResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteAssetResponse => __isa(o, "DeleteAssetResponse");
}

export interface DeletePackagingConfigurationRequest {
  __type?: "DeletePackagingConfigurationRequest";
  /**
   * The ID of the MediaPackage VOD PackagingConfiguration resource to delete.
   */
  Id: string | undefined;
}

export namespace DeletePackagingConfigurationRequest {
  export const filterSensitiveLog = (obj: DeletePackagingConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeletePackagingConfigurationRequest =>
    __isa(o, "DeletePackagingConfigurationRequest");
}

export interface DeletePackagingConfigurationResponse {
  __type?: "DeletePackagingConfigurationResponse";
}

export namespace DeletePackagingConfigurationResponse {
  export const filterSensitiveLog = (obj: DeletePackagingConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeletePackagingConfigurationResponse =>
    __isa(o, "DeletePackagingConfigurationResponse");
}

export interface DeletePackagingGroupRequest {
  __type?: "DeletePackagingGroupRequest";
  /**
   * The ID of the MediaPackage VOD PackagingGroup resource to delete.
   */
  Id: string | undefined;
}

export namespace DeletePackagingGroupRequest {
  export const filterSensitiveLog = (obj: DeletePackagingGroupRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeletePackagingGroupRequest => __isa(o, "DeletePackagingGroupRequest");
}

export interface DeletePackagingGroupResponse {
  __type?: "DeletePackagingGroupResponse";
}

export namespace DeletePackagingGroupResponse {
  export const filterSensitiveLog = (obj: DeletePackagingGroupResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeletePackagingGroupResponse => __isa(o, "DeletePackagingGroupResponse");
}

export interface DescribeAssetRequest {
  __type?: "DescribeAssetRequest";
  /**
   * The ID of an MediaPackage VOD Asset resource.
   */
  Id: string | undefined;
}

export namespace DescribeAssetRequest {
  export const filterSensitiveLog = (obj: DescribeAssetRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeAssetRequest => __isa(o, "DescribeAssetRequest");
}

export interface DescribeAssetResponse {
  __type?: "DescribeAssetResponse";
  /**
   * The ARN of the Asset.
   */
  Arn?: string;

  /**
   * The time the Asset was initially submitted for Ingest.
   */
  CreatedAt?: string;

  /**
   * The list of egress endpoints available for the Asset.
   */
  EgressEndpoints?: EgressEndpoint[];

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
   * ARN of the source object in S3.
   */
  SourceArn?: string;

  /**
   * The IAM role_arn used to access the source S3 bucket.
   */
  SourceRoleArn?: string;
}

export namespace DescribeAssetResponse {
  export const filterSensitiveLog = (obj: DescribeAssetResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeAssetResponse => __isa(o, "DescribeAssetResponse");
}

export interface DescribePackagingConfigurationRequest {
  __type?: "DescribePackagingConfigurationRequest";
  /**
   * The ID of a MediaPackage VOD PackagingConfiguration resource.
   */
  Id: string | undefined;
}

export namespace DescribePackagingConfigurationRequest {
  export const filterSensitiveLog = (obj: DescribePackagingConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribePackagingConfigurationRequest =>
    __isa(o, "DescribePackagingConfigurationRequest");
}

export interface DescribePackagingConfigurationResponse {
  __type?: "DescribePackagingConfigurationResponse";
  /**
   * The ARN of the PackagingConfiguration.
   */
  Arn?: string;

  /**
   * A CMAF packaging configuration.
   */
  CmafPackage?: CmafPackage;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * The ID of the PackagingConfiguration.
   */
  Id?: string;

  /**
   * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
   */
  MssPackage?: MssPackage;

  /**
   * The ID of a PackagingGroup.
   */
  PackagingGroupId?: string;
}

export namespace DescribePackagingConfigurationResponse {
  export const filterSensitiveLog = (obj: DescribePackagingConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribePackagingConfigurationResponse =>
    __isa(o, "DescribePackagingConfigurationResponse");
}

export interface DescribePackagingGroupRequest {
  __type?: "DescribePackagingGroupRequest";
  /**
   * The ID of a MediaPackage VOD PackagingGroup resource.
   */
  Id: string | undefined;
}

export namespace DescribePackagingGroupRequest {
  export const filterSensitiveLog = (obj: DescribePackagingGroupRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribePackagingGroupRequest => __isa(o, "DescribePackagingGroupRequest");
}

export interface DescribePackagingGroupResponse {
  __type?: "DescribePackagingGroupResponse";
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

export namespace DescribePackagingGroupResponse {
  export const filterSensitiveLog = (obj: DescribePackagingGroupResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribePackagingGroupResponse => __isa(o, "DescribePackagingGroupResponse");
}

/**
 * The endpoint URL used to access an Asset using one PackagingConfiguration.
 */
export interface EgressEndpoint {
  __type?: "EgressEndpoint";
  /**
   * The ID of the PackagingConfiguration being applied to the Asset.
   */
  PackagingConfigurationId?: string;

  /**
   * The URL of the parent manifest for the repackaged Asset.
   */
  Url?: string;
}

export namespace EgressEndpoint {
  export const filterSensitiveLog = (obj: EgressEndpoint): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EgressEndpoint => __isa(o, "EgressEndpoint");
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
  export const isa = (o: any): o is ForbiddenException => __isa(o, "ForbiddenException");
}

/**
 * An HTTP Live Streaming (HLS) encryption configuration.
 */
export interface HlsEncryption {
  __type?: "HlsEncryption";
  /**
   * A constant initialization vector for encryption (optional).
   * When not specified the initialization vector will be periodically rotated.
   */
  ConstantInitializationVector?: string;

  /**
   * The encryption method to use.
   */
  EncryptionMethod?: EncryptionMethod | string;

  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: SpekeKeyProvider | undefined;
}

export namespace HlsEncryption {
  export const filterSensitiveLog = (obj: HlsEncryption): any => ({
    ...obj,
  });
  export const isa = (o: any): o is HlsEncryption => __isa(o, "HlsEncryption");
}

/**
 * An HTTP Live Streaming (HLS) manifest configuration.
 */
export interface HlsManifest {
  __type?: "HlsManifest";
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
   * When enabled, an I-Frame only stream will be included in the output.
   */
  IncludeIframeOnlyStream?: boolean;

  /**
   * An optional string to include in the name of the manifest.
   */
  ManifestName?: string;

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
   * When enabled, the EXT-X-KEY tag will be repeated in output manifests.
   */
  RepeatExtXKey?: boolean;

  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: StreamSelection;
}

export namespace HlsManifest {
  export const filterSensitiveLog = (obj: HlsManifest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is HlsManifest => __isa(o, "HlsManifest");
}

/**
 * An HTTP Live Streaming (HLS) packaging configuration.
 */
export interface HlsPackage {
  __type?: "HlsPackage";
  /**
   * An HTTP Live Streaming (HLS) encryption configuration.
   */
  Encryption?: HlsEncryption;

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
   * When enabled, audio streams will be placed in rendition groups in the output.
   */
  UseAudioRenditionGroup?: boolean;
}

export namespace HlsPackage {
  export const filterSensitiveLog = (obj: HlsPackage): any => ({
    ...obj,
  });
  export const isa = (o: any): o is HlsPackage => __isa(o, "HlsPackage");
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
  export const isa = (o: any): o is InternalServerErrorException => __isa(o, "InternalServerErrorException");
}

export interface ListAssetsRequest {
  __type?: "ListAssetsRequest";
  /**
   * Upper bound on number of records to return.
   */
  MaxResults?: number;

  /**
   * A token used to resume pagination from the end of a previous request.
   */
  NextToken?: string;

  /**
   * Returns Assets associated with the specified PackagingGroup.
   */
  PackagingGroupId?: string;
}

export namespace ListAssetsRequest {
  export const filterSensitiveLog = (obj: ListAssetsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListAssetsRequest => __isa(o, "ListAssetsRequest");
}

export interface ListAssetsResponse {
  __type?: "ListAssetsResponse";
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
  export const isa = (o: any): o is ListAssetsResponse => __isa(o, "ListAssetsResponse");
}

export interface ListPackagingConfigurationsRequest {
  __type?: "ListPackagingConfigurationsRequest";
  /**
   * Upper bound on number of records to return.
   */
  MaxResults?: number;

  /**
   * A token used to resume pagination from the end of a previous request.
   */
  NextToken?: string;

  /**
   * Returns MediaPackage VOD PackagingConfigurations associated with the specified PackagingGroup.
   */
  PackagingGroupId?: string;
}

export namespace ListPackagingConfigurationsRequest {
  export const filterSensitiveLog = (obj: ListPackagingConfigurationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListPackagingConfigurationsRequest =>
    __isa(o, "ListPackagingConfigurationsRequest");
}

export interface ListPackagingConfigurationsResponse {
  __type?: "ListPackagingConfigurationsResponse";
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
  export const isa = (o: any): o is ListPackagingConfigurationsResponse =>
    __isa(o, "ListPackagingConfigurationsResponse");
}

export interface ListPackagingGroupsRequest {
  __type?: "ListPackagingGroupsRequest";
  /**
   * Upper bound on number of records to return.
   */
  MaxResults?: number;

  /**
   * A token used to resume pagination from the end of a previous request.
   */
  NextToken?: string;
}

export namespace ListPackagingGroupsRequest {
  export const filterSensitiveLog = (obj: ListPackagingGroupsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListPackagingGroupsRequest => __isa(o, "ListPackagingGroupsRequest");
}

export interface ListPackagingGroupsResponse {
  __type?: "ListPackagingGroupsResponse";
  /**
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;

  /**
   * A list of MediaPackage VOD PackagingGroup resources.
   */
  PackagingGroups?: PackagingGroup[];
}

export namespace ListPackagingGroupsResponse {
  export const filterSensitiveLog = (obj: ListPackagingGroupsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListPackagingGroupsResponse => __isa(o, "ListPackagingGroupsResponse");
}

/**
 * A Microsoft Smooth Streaming (MSS) encryption configuration.
 */
export interface MssEncryption {
  __type?: "MssEncryption";
  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: SpekeKeyProvider | undefined;
}

export namespace MssEncryption {
  export const filterSensitiveLog = (obj: MssEncryption): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MssEncryption => __isa(o, "MssEncryption");
}

/**
 * A Microsoft Smooth Streaming (MSS) manifest configuration.
 */
export interface MssManifest {
  __type?: "MssManifest";
  /**
   * An optional string to include in the name of the manifest.
   */
  ManifestName?: string;

  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: StreamSelection;
}

export namespace MssManifest {
  export const filterSensitiveLog = (obj: MssManifest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MssManifest => __isa(o, "MssManifest");
}

/**
 * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
 */
export interface MssPackage {
  __type?: "MssPackage";
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
  export const isa = (o: any): o is MssPackage => __isa(o, "MssPackage");
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
  export const isa = (o: any): o is NotFoundException => __isa(o, "NotFoundException");
}

/**
 * A MediaPackage VOD PackagingConfiguration resource.
 */
export interface PackagingConfiguration {
  __type?: "PackagingConfiguration";
  /**
   * The ARN of the PackagingConfiguration.
   */
  Arn?: string;

  /**
   * A CMAF packaging configuration.
   */
  CmafPackage?: CmafPackage;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * The ID of the PackagingConfiguration.
   */
  Id?: string;

  /**
   * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
   */
  MssPackage?: MssPackage;

  /**
   * The ID of a PackagingGroup.
   */
  PackagingGroupId?: string;
}

export namespace PackagingConfiguration {
  export const filterSensitiveLog = (obj: PackagingConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PackagingConfiguration => __isa(o, "PackagingConfiguration");
}

/**
 * A MediaPackage VOD PackagingGroup resource.
 */
export interface PackagingGroup {
  __type?: "PackagingGroup";
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
  export const isa = (o: any): o is PackagingGroup => __isa(o, "PackagingGroup");
}

export enum Profile {
  HBBTV_1_5 = "HBBTV_1_5",
  NONE = "NONE",
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
  export const isa = (o: any): o is ServiceUnavailableException => __isa(o, "ServiceUnavailableException");
}

/**
 * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
 */
export interface SpekeKeyProvider {
  __type?: "SpekeKeyProvider";
  /**
   * An Amazon Resource Name (ARN) of an IAM role that AWS Elemental
   * MediaPackage will assume when accessing the key provider service.
   */
  RoleArn: string | undefined;

  /**
   * The system IDs to include in key requests.
   */
  SystemIds: string[] | undefined;

  /**
   * The URL of the external key provider service.
   */
  Url: string | undefined;
}

export namespace SpekeKeyProvider {
  export const filterSensitiveLog = (obj: SpekeKeyProvider): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SpekeKeyProvider => __isa(o, "SpekeKeyProvider");
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
  __type?: "StreamSelection";
  /**
   * The maximum video bitrate (bps) to include in output.
   */
  MaxVideoBitsPerSecond?: number;

  /**
   * The minimum video bitrate (bps) to include in output.
   */
  MinVideoBitsPerSecond?: number;

  /**
   * A directive that determines the order of streams in the output.
   */
  StreamOrder?: StreamOrder | string;
}

export namespace StreamSelection {
  export const filterSensitiveLog = (obj: StreamSelection): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StreamSelection => __isa(o, "StreamSelection");
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
  export const isa = (o: any): o is TooManyRequestsException => __isa(o, "TooManyRequestsException");
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
  export const isa = (o: any): o is UnprocessableEntityException => __isa(o, "UnprocessableEntityException");
}
