import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>
 *             The details of an Elastic Inference Accelerator type.
 *         </p>
 */
export interface AcceleratorType {
  __type?: "AcceleratorType";
  /**
   * <p>
   *             The throughput information of the Elastic Inference Accelerator type.
   *         </p>
   */
  throughputInfo?: KeyValuePair[];

  /**
   * <p>
   *             The name of the Elastic Inference Accelerator type.
   *         </p>
   */
  acceleratorTypeName?: string;

  /**
   * <p>
   *             The memory information of the Elastic Inference Accelerator type.
   *         </p>
   */
  memoryInfo?: MemoryInfo;
}

export namespace AcceleratorType {
  export const filterSensitiveLog = (obj: AcceleratorType): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AcceleratorType => __isa(o, "AcceleratorType");
}

/**
 * <p>
 *             The offering for an Elastic Inference Accelerator type.
 *         </p>
 */
export interface AcceleratorTypeOffering {
  __type?: "AcceleratorTypeOffering";
  /**
   * <p>
   *             The name of the Elastic Inference Accelerator type.
   *         </p>
   */
  acceleratorType?: string;

  /**
   * <p>
   *             The location for the offering.
   *             It will return either the region, availability zone or availability zone id for the offering depending on the locationType value.
   *         </p>
   */
  location?: string;

  /**
   * <p>
   *             The location type for the offering. It can assume the following values:
   *             region: defines that the offering is at the regional level.
   *             availability-zone: defines that the offering is at the availability zone level.
   *             availability-zone-id: defines that the offering is at the availability zone level, defined by the availability zone id.
   *         </p>
   */
  locationType?: LocationType | string;
}

export namespace AcceleratorTypeOffering {
  export const filterSensitiveLog = (obj: AcceleratorTypeOffering): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AcceleratorTypeOffering => __isa(o, "AcceleratorTypeOffering");
}

/**
 * <p>
 *             Raised when a malformed input has been provided to the API.
 *         </p>
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

export interface DescribeAcceleratorOfferingsRequest {
  __type?: "DescribeAcceleratorOfferingsRequest";
  /**
   * <p>
   *             The location type that you want to describe accelerator type offerings for. It can assume the following values:
   *             region: will return the accelerator type offering at the regional level.
   *             availability-zone: will return the accelerator type offering at the availability zone level.
   *             availability-zone-id: will return the accelerator type offering at the availability zone level returning the availability zone id.
   *         </p>
   */
  locationType: LocationType | string | undefined;

  /**
   * <p>
   *             The list of accelerator types to describe.
   *         </p>
   */
  acceleratorTypes?: string[];
}

export namespace DescribeAcceleratorOfferingsRequest {
  export const filterSensitiveLog = (obj: DescribeAcceleratorOfferingsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeAcceleratorOfferingsRequest =>
    __isa(o, "DescribeAcceleratorOfferingsRequest");
}

export interface DescribeAcceleratorOfferingsResponse {
  __type?: "DescribeAcceleratorOfferingsResponse";
  /**
   * <p>
   *             The list of accelerator type offerings for a specific location.
   *         </p>
   */
  acceleratorTypeOfferings?: AcceleratorTypeOffering[];
}

export namespace DescribeAcceleratorOfferingsResponse {
  export const filterSensitiveLog = (obj: DescribeAcceleratorOfferingsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeAcceleratorOfferingsResponse =>
    __isa(o, "DescribeAcceleratorOfferingsResponse");
}

export interface DescribeAcceleratorsRequest {
  __type?: "DescribeAcceleratorsRequest";
  /**
   * <p>
   *             One or more filters. Filter names and values are case-sensitive. Valid filter names are:
   *             accelerator-types: can provide a list of accelerator type names to filter for.
   *             instance-id: can provide a list of EC2 instance ids to filter for.
   *         </p>
   */
  filters?: Filter[];

  /**
   * <p>
   *             The total number of items to return in the command's output. If the total number of items available is more than the value specified, a NextToken is provided in the command's output.
   *             To resume pagination, provide the NextToken value in the starting-token argument of a subsequent command.
   *             Do not use the NextToken response element directly outside of the AWS CLI.
   *         </p>
   */
  maxResults?: number;

  /**
   * <p>
   *             A token to specify where to start paginating. This is the NextToken from a previously truncated response.
   *         </p>
   */
  nextToken?: string;

  /**
   * <p>
   *             The IDs of the accelerators to describe.
   *         </p>
   */
  acceleratorIds?: string[];
}

export namespace DescribeAcceleratorsRequest {
  export const filterSensitiveLog = (obj: DescribeAcceleratorsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeAcceleratorsRequest => __isa(o, "DescribeAcceleratorsRequest");
}

export interface DescribeAcceleratorsResponse {
  __type?: "DescribeAcceleratorsResponse";
  /**
   * <p>
   *             The details of the Elastic Inference Accelerators.
   *         </p>
   */
  acceleratorSet?: ElasticInferenceAccelerator[];

  /**
   * <p>
   *             A token to specify where to start paginating. This is the NextToken from a previously truncated response.
   *         </p>
   */
  nextToken?: string;
}

export namespace DescribeAcceleratorsResponse {
  export const filterSensitiveLog = (obj: DescribeAcceleratorsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeAcceleratorsResponse => __isa(o, "DescribeAcceleratorsResponse");
}

export interface DescribeAcceleratorTypesRequest {
  __type?: "DescribeAcceleratorTypesRequest";
}

export namespace DescribeAcceleratorTypesRequest {
  export const filterSensitiveLog = (obj: DescribeAcceleratorTypesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeAcceleratorTypesRequest => __isa(o, "DescribeAcceleratorTypesRequest");
}

export interface DescribeAcceleratorTypesResponse {
  __type?: "DescribeAcceleratorTypesResponse";
  /**
   * <p>
   *             The available accelerator types.
   *         </p>
   */
  acceleratorTypes?: AcceleratorType[];
}

export namespace DescribeAcceleratorTypesResponse {
  export const filterSensitiveLog = (obj: DescribeAcceleratorTypesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeAcceleratorTypesResponse => __isa(o, "DescribeAcceleratorTypesResponse");
}

/**
 * <p>
 *             The details of an Elastic Inference Accelerator.
 *         </p>
 */
export interface ElasticInferenceAccelerator {
  __type?: "ElasticInferenceAccelerator";
  /**
   * <p>
   *             The type of the Elastic Inference Accelerator.
   *         </p>
   */
  acceleratorType?: string;

  /**
   * <p>
   *             The availability zone where the Elastic Inference Accelerator is present.
   *         </p>
   */
  availabilityZone?: string;

  /**
   * <p>
   *             The ID of the Elastic Inference Accelerator.
   *         </p>
   */
  acceleratorId?: string;

  /**
   * <p>
   *             The ARN of the resource that the Elastic Inference Accelerator is attached to.
   *         </p>
   */
  attachedResource?: string;

  /**
   * <p>
   *             The health of the Elastic Inference Accelerator.
   *         </p>
   */
  acceleratorHealth?: ElasticInferenceAcceleratorHealth;
}

export namespace ElasticInferenceAccelerator {
  export const filterSensitiveLog = (obj: ElasticInferenceAccelerator): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ElasticInferenceAccelerator => __isa(o, "ElasticInferenceAccelerator");
}

/**
 * <p>
 *             The health details of an Elastic Inference Accelerator.
 *         </p>
 */
export interface ElasticInferenceAcceleratorHealth {
  __type?: "ElasticInferenceAcceleratorHealth";
  /**
   * <p>
   *             The health status of the Elastic Inference Accelerator.
   *         </p>
   */
  status?: string;
}

export namespace ElasticInferenceAcceleratorHealth {
  export const filterSensitiveLog = (obj: ElasticInferenceAcceleratorHealth): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ElasticInferenceAcceleratorHealth => __isa(o, "ElasticInferenceAcceleratorHealth");
}

/**
 * <p>
 *             A filter expression for the Elastic Inference Accelerator list.
 *         </p>
 */
export interface Filter {
  __type?: "Filter";
  /**
   * <p>
   *             The values for the filter of the Elastic Inference Accelerator list.
   *         </p>
   */
  values?: string[];

  /**
   * <p>
   *             The filter name for the Elastic Inference Accelerator list. It can assume the following values:
   *             accelerator-type: the type of Elastic Inference Accelerator to filter for.
   *             instance-id: an EC2 instance id to filter for.
   *         </p>
   */
  name?: string;
}

export namespace Filter {
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Filter => __isa(o, "Filter");
}

/**
 * <p>
 *             Raised when an unexpected error occurred during request processing.
 *         </p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  message?: string;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalServerException => __isa(o, "InternalServerException");
}

/**
 * <p>
 *             A throughput entry for an Elastic Inference Accelerator type.
 *         </p>
 */
export interface KeyValuePair {
  __type?: "KeyValuePair";
  /**
   * <p>
   *             The throughput value of the Elastic Inference Accelerator type. It can assume the following values:
   *             TFLOPS16bit: the throughput expressed in 16bit TeraFLOPS.
   *             TFLOPS32bit: the throughput expressed in 32bit TeraFLOPS.
   *         </p>
   */
  key?: string;

  /**
   * <p>
   *             The throughput value of the Elastic Inference Accelerator type.
   *         </p>
   */
  value?: number;
}

export namespace KeyValuePair {
  export const filterSensitiveLog = (obj: KeyValuePair): any => ({
    ...obj,
  });
  export const isa = (o: any): o is KeyValuePair => __isa(o, "KeyValuePair");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>
   *             The ARN of the Elastic Inference Accelerator to list the tags for.
   *         </p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceRequest => __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResult {
  __type?: "ListTagsForResourceResult";
  /**
   * <p>
   *             The tags of the Elastic Inference Accelerator.
   *         </p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResult {
  export const filterSensitiveLog = (obj: ListTagsForResourceResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceResult => __isa(o, "ListTagsForResourceResult");
}

export type LocationType = "availability-zone" | "availability-zone-id" | "region";

/**
 * <p>
 *             The memory information of an Elastic Inference Accelerator type.
 *         </p>
 */
export interface MemoryInfo {
  __type?: "MemoryInfo";
  /**
   * <p>
   *             The size in mebibytes of the Elastic Inference Accelerator type.
   *         </p>
   */
  sizeInMiB?: number;
}

export namespace MemoryInfo {
  export const filterSensitiveLog = (obj: MemoryInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MemoryInfo => __isa(o, "MemoryInfo");
}

/**
 * <p>
 *             Raised when the requested resource cannot be found.
 *         </p>
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

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>
   *             The tags to add to the Elastic Inference Accelerator.
   *         </p>
   */
  tags: { [key: string]: string } | undefined;

  /**
   * <p>
   *             The ARN of the Elastic Inference Accelerator to tag.
   *         </p>
   */
  resourceArn: string | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceRequest => __isa(o, "TagResourceRequest");
}

export interface TagResourceResult {
  __type?: "TagResourceResult";
}

export namespace TagResourceResult {
  export const filterSensitiveLog = (obj: TagResourceResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceResult => __isa(o, "TagResourceResult");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>
   *             The list of tags to remove from the Elastic Inference Accelerator.
   *         </p>
   */
  tagKeys: string[] | undefined;

  /**
   * <p>
   *             The ARN of the Elastic Inference Accelerator to untag.
   *         </p>
   */
  resourceArn: string | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceRequest => __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResult {
  __type?: "UntagResourceResult";
}

export namespace UntagResourceResult {
  export const filterSensitiveLog = (obj: UntagResourceResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceResult => __isa(o, "UntagResourceResult");
}
