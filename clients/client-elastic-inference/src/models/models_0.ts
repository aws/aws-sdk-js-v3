// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { ElasticInferenceServiceException as __BaseException } from "./ElasticInferenceServiceException";

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

/**
 * <p>
 *             Raised when a malformed input has been provided to the API.
 *         </p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
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
  }
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

export interface DescribeAcceleratorOfferingsResponse {
  /**
   * <p>
   *             The list of accelerator type offerings for a specific location.
   *         </p>
   */
  acceleratorTypeOfferings?: AcceleratorTypeOffering[];
}

/**
 * <p>
 *             Raised when an unexpected error occurred during request processing.
 *         </p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>
 *             Raised when the requested resource cannot be found.
 *         </p>
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

export interface DescribeAcceleratorTypesRequest {}

export interface DescribeAcceleratorTypesResponse {
  /**
   * <p>
   *             The available accelerator types.
   *         </p>
   */
  acceleratorTypes?: AcceleratorType[];
}

export interface ListTagsForResourceRequest {
  /**
   * <p>
   *             The ARN of the Elastic Inference Accelerator to list the tags for.
   *         </p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResult {
  /**
   * <p>
   *             The tags of the Elastic Inference Accelerator.
   *         </p>
   */
  tags?: Record<string, string>;
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
  tags: Record<string, string> | undefined;
}

export interface TagResourceResult {}

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

export interface UntagResourceResult {}

/**
 * @internal
 */
export const MemoryInfoFilterSensitiveLog = (obj: MemoryInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KeyValuePairFilterSensitiveLog = (obj: KeyValuePair): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceleratorTypeFilterSensitiveLog = (obj: AcceleratorType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceleratorTypeOfferingFilterSensitiveLog = (obj: AcceleratorTypeOffering): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAcceleratorOfferingsRequestFilterSensitiveLog = (
  obj: DescribeAcceleratorOfferingsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAcceleratorOfferingsResponseFilterSensitiveLog = (
  obj: DescribeAcceleratorOfferingsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterFilterSensitiveLog = (obj: Filter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAcceleratorsRequestFilterSensitiveLog = (obj: DescribeAcceleratorsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ElasticInferenceAcceleratorHealthFilterSensitiveLog = (obj: ElasticInferenceAcceleratorHealth): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ElasticInferenceAcceleratorFilterSensitiveLog = (obj: ElasticInferenceAccelerator): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAcceleratorsResponseFilterSensitiveLog = (obj: DescribeAcceleratorsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAcceleratorTypesRequestFilterSensitiveLog = (obj: DescribeAcceleratorTypesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAcceleratorTypesResponseFilterSensitiveLog = (obj: DescribeAcceleratorTypesResponse): any => ({
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
export const ListTagsForResourceResultFilterSensitiveLog = (obj: ListTagsForResourceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResultFilterSensitiveLog = (obj: TagResourceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResultFilterSensitiveLog = (obj: UntagResourceResult): any => ({
  ...obj,
});
