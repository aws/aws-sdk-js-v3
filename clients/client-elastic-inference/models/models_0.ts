import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>
 *             The memory information of an Elastic Inference Accelerator type.
 *         </p>
 */
export interface MemoryInfo {
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
}

/**
 * <p>
 *             A throughput entry for an Elastic Inference Accelerator type.
 *         </p>
 */
export interface KeyValuePair {
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
}

/**
 * <p>
 *             The details of an Elastic Inference Accelerator type.
 *         </p>
 */
export interface AcceleratorType {
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

  /**
   * <p>
   *             The throughput information of the Elastic Inference Accelerator type.
   *         </p>
   */
  throughputInfo?: KeyValuePair[];
}

export namespace AcceleratorType {
  export const filterSensitiveLog = (obj: AcceleratorType): any => ({
    ...obj,
  });
}

export type LocationType = "availability-zone" | "availability-zone-id" | "region";

/**
 * <p>
 *             The offering for an Elastic Inference Accelerator type.
 *         </p>
 */
export interface AcceleratorTypeOffering {
  /**
   * <p>
   *             The name of the Elastic Inference Accelerator type.
   *         </p>
   */
  acceleratorType?: string;

  /**
   * <p>
   *             The location type for the offering. It can assume the following values:
   *             region: defines that the offering is at the regional level.
   *             availability-zone: defines that the offering is at the availability zone level.
   *             availability-zone-id: defines that the offering is at the availability zone level, defined by the availability zone id.
   *         </p>
   */
  locationType?: LocationType | string;

  /**
   * <p>
   *             The location for the offering.
   *             It will return either the region, availability zone or availability zone id for the offering depending on the locationType value.
   *         </p>
   */
  location?: string;
}

export namespace AcceleratorTypeOffering {
  export const filterSensitiveLog = (obj: AcceleratorTypeOffering): any => ({
    ...obj,
  });
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
}

export interface DescribeAcceleratorOfferingsRequest {
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
}

export interface DescribeAcceleratorOfferingsResponse {
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
}

/**
 * <p>
 *             A filter expression for the Elastic Inference Accelerator list.
 *         </p>
 */
export interface Filter {
  /**
   * <p>
   *             The filter name for the Elastic Inference Accelerator list. It can assume the following values:
   *             accelerator-type: the type of Elastic Inference Accelerator to filter for.
   *             instance-id: an EC2 instance id to filter for.
   *         </p>
   */
  name?: string;

  /**
   * <p>
   *             The values for the filter of the Elastic Inference Accelerator list.
   *         </p>
   */
  values?: string[];
}

export namespace Filter {
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
}

export interface DescribeAcceleratorsRequest {
  /**
   * <p>
   *             The IDs of the accelerators to describe.
   *         </p>
   */
  acceleratorIds?: string[];

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
}

export namespace DescribeAcceleratorsRequest {
  export const filterSensitiveLog = (obj: DescribeAcceleratorsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             The health details of an Elastic Inference Accelerator.
 *         </p>
 */
export interface ElasticInferenceAcceleratorHealth {
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
}

/**
 * <p>
 *             The details of an Elastic Inference Accelerator.
 *         </p>
 */
export interface ElasticInferenceAccelerator {
  /**
   * <p>
   *             The health of the Elastic Inference Accelerator.
   *         </p>
   */
  acceleratorHealth?: ElasticInferenceAcceleratorHealth;

  /**
   * <p>
   *             The type of the Elastic Inference Accelerator.
   *         </p>
   */
  acceleratorType?: string;

  /**
   * <p>
   *             The ID of the Elastic Inference Accelerator.
   *         </p>
   */
  acceleratorId?: string;

  /**
   * <p>
   *             The availability zone where the Elastic Inference Accelerator is present.
   *         </p>
   */
  availabilityZone?: string;

  /**
   * <p>
   *             The ARN of the resource that the Elastic Inference Accelerator is attached to.
   *         </p>
   */
  attachedResource?: string;
}

export namespace ElasticInferenceAccelerator {
  export const filterSensitiveLog = (obj: ElasticInferenceAccelerator): any => ({
    ...obj,
  });
}

export interface DescribeAcceleratorsResponse {
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
}

export interface DescribeAcceleratorTypesRequest {}

export namespace DescribeAcceleratorTypesRequest {
  export const filterSensitiveLog = (obj: DescribeAcceleratorTypesRequest): any => ({
    ...obj,
  });
}

export interface DescribeAcceleratorTypesResponse {
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
}

export interface ListTagsForResourceRequest {
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
}

export interface ListTagsForResourceResult {
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
}

export interface TagResourceRequest {
  /**
   * <p>
   *             The ARN of the Elastic Inference Accelerator to tag.
   *         </p>
   */
  resourceArn: string | undefined;

  /**
   * <p>
   *             The tags to add to the Elastic Inference Accelerator.
   *         </p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResult {}

export namespace TagResourceResult {
  export const filterSensitiveLog = (obj: TagResourceResult): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>
   *             The ARN of the Elastic Inference Accelerator to untag.
   *         </p>
   */
  resourceArn: string | undefined;

  /**
   * <p>
   *             The list of tags to remove from the Elastic Inference Accelerator.
   *         </p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResult {}

export namespace UntagResourceResult {
  export const filterSensitiveLog = (obj: UntagResourceResult): any => ({
    ...obj,
  });
}
