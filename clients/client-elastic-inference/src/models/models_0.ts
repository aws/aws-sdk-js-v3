// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ElasticInferenceServiceException as __BaseException } from "./ElasticInferenceServiceException";

/**
 * <p>
 *             The memory information of an Elastic Inference Accelerator type.
 *         </p>
 * @public
 */
export interface MemoryInfo {
  /**
   * <p>
   *             The size in mebibytes of the Elastic Inference Accelerator type.
   *         </p>
   * @public
   */
  sizeInMiB?: number | undefined;
}

/**
 * <p>
 *             A throughput entry for an Elastic Inference Accelerator type.
 *         </p>
 * @public
 */
export interface KeyValuePair {
  /**
   * <p>
   *             The throughput value of the Elastic Inference Accelerator type. It can assume the following values:
   *             TFLOPS16bit: the throughput expressed in 16bit TeraFLOPS.
   *             TFLOPS32bit: the throughput expressed in 32bit TeraFLOPS.
   *         </p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>
   *             The throughput value of the Elastic Inference Accelerator type.
   *         </p>
   * @public
   */
  value?: number | undefined;
}

/**
 * <p>
 *             The details of an Elastic Inference Accelerator type.
 *         </p>
 * @public
 */
export interface AcceleratorType {
  /**
   * <p>
   *             The name of the Elastic Inference Accelerator type.
   *         </p>
   * @public
   */
  acceleratorTypeName?: string | undefined;

  /**
   * <p>
   *             The memory information of the Elastic Inference Accelerator type.
   *         </p>
   * @public
   */
  memoryInfo?: MemoryInfo | undefined;

  /**
   * <p>
   *             The throughput information of the Elastic Inference Accelerator type.
   *         </p>
   * @public
   */
  throughputInfo?: KeyValuePair[] | undefined;
}

/**
 * @public
 * @enum
 */
export const LocationType = {
  availability_zone: "availability-zone",
  availability_zone_id: "availability-zone-id",
  region: "region",
} as const;

/**
 * @public
 */
export type LocationType = (typeof LocationType)[keyof typeof LocationType];

/**
 * <p>
 *             The offering for an Elastic Inference Accelerator type.
 *         </p>
 * @public
 */
export interface AcceleratorTypeOffering {
  /**
   * <p>
   *             The name of the Elastic Inference Accelerator type.
   *         </p>
   * @public
   */
  acceleratorType?: string | undefined;

  /**
   * <p>
   *             The location type for the offering. It can assume the following values:
   *             region: defines that the offering is at the regional level.
   *             availability-zone: defines that the offering is at the availability zone level.
   *             availability-zone-id: defines that the offering is at the availability zone level, defined by the availability zone id.
   *         </p>
   * @public
   */
  locationType?: LocationType | undefined;

  /**
   * <p>
   *             The location for the offering.
   *             It will return either the region, availability zone or availability zone id for the offering depending on the locationType value.
   *         </p>
   * @public
   */
  location?: string | undefined;
}

/**
 * <p>
 *             Raised when a malformed input has been provided to the API.
 *         </p>
 * @public
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

/**
 * @public
 */
export interface DescribeAcceleratorOfferingsRequest {
  /**
   * <p>
   *             The location type that you want to describe accelerator type offerings for. It can assume the following values:
   *             region: will return the accelerator type offering at the regional level.
   *             availability-zone: will return the accelerator type offering at the availability zone level.
   *             availability-zone-id: will return the accelerator type offering at the availability zone level returning the availability zone id.
   *         </p>
   * @public
   */
  locationType: LocationType | undefined;

  /**
   * <p>
   *             The list of accelerator types to describe.
   *         </p>
   * @public
   */
  acceleratorTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAcceleratorOfferingsResponse {
  /**
   * <p>
   *             The list of accelerator type offerings for a specific location.
   *         </p>
   * @public
   */
  acceleratorTypeOfferings?: AcceleratorTypeOffering[] | undefined;
}

/**
 * <p>
 *             Raised when an unexpected error occurred during request processing.
 *         </p>
 * @public
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
 * @public
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
 * @public
 */
export interface Filter {
  /**
   * <p>
   *             The filter name for the Elastic Inference Accelerator list. It can assume the following values:
   *             accelerator-type: the type of Elastic Inference Accelerator to filter for.
   *             instance-id: an EC2 instance id to filter for.
   *         </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>
   *             The values for the filter of the Elastic Inference Accelerator list.
   *         </p>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAcceleratorsRequest {
  /**
   * <p>
   *             The IDs of the accelerators to describe.
   *         </p>
   * @public
   */
  acceleratorIds?: string[] | undefined;

  /**
   * <p>
   *             One or more filters. Filter names and values are case-sensitive. Valid filter names are:
   *             accelerator-types: can provide a list of accelerator type names to filter for.
   *             instance-id: can provide a list of EC2 instance ids to filter for.
   *         </p>
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>
   *             The total number of items to return in the command's output. If the total number of items available is more than the value specified, a NextToken is provided in the command's output.
   *             To resume pagination, provide the NextToken value in the starting-token argument of a subsequent command.
   *             Do not use the NextToken response element directly outside of the AWS CLI.
   *         </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>
   *             A token to specify where to start paginating. This is the NextToken from a previously truncated response.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>
 *             The health details of an Elastic Inference Accelerator.
 *         </p>
 * @public
 */
export interface ElasticInferenceAcceleratorHealth {
  /**
   * <p>
   *             The health status of the Elastic Inference Accelerator.
   *         </p>
   * @public
   */
  status?: string | undefined;
}

/**
 * <p>
 *             The details of an Elastic Inference Accelerator.
 *         </p>
 * @public
 */
export interface ElasticInferenceAccelerator {
  /**
   * <p>
   *             The health of the Elastic Inference Accelerator.
   *         </p>
   * @public
   */
  acceleratorHealth?: ElasticInferenceAcceleratorHealth | undefined;

  /**
   * <p>
   *             The type of the Elastic Inference Accelerator.
   *         </p>
   * @public
   */
  acceleratorType?: string | undefined;

  /**
   * <p>
   *             The ID of the Elastic Inference Accelerator.
   *         </p>
   * @public
   */
  acceleratorId?: string | undefined;

  /**
   * <p>
   *             The availability zone where the Elastic Inference Accelerator is present.
   *         </p>
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * <p>
   *             The ARN of the resource that the Elastic Inference Accelerator is attached to.
   *         </p>
   * @public
   */
  attachedResource?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAcceleratorsResponse {
  /**
   * <p>
   *             The details of the Elastic Inference Accelerators.
   *         </p>
   * @public
   */
  acceleratorSet?: ElasticInferenceAccelerator[] | undefined;

  /**
   * <p>
   *             A token to specify where to start paginating. This is the NextToken from a previously truncated response.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAcceleratorTypesRequest {}

/**
 * @public
 */
export interface DescribeAcceleratorTypesResponse {
  /**
   * <p>
   *             The available accelerator types.
   *         </p>
   * @public
   */
  acceleratorTypes?: AcceleratorType[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>
   *             The ARN of the Elastic Inference Accelerator to list the tags for.
   *         </p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResult {
  /**
   * <p>
   *             The tags of the Elastic Inference Accelerator.
   *         </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>
   *             The ARN of the Elastic Inference Accelerator to tag.
   *         </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>
   *             The tags to add to the Elastic Inference Accelerator.
   *         </p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResult {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>
   *             The ARN of the Elastic Inference Accelerator to untag.
   *         </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>
   *             The list of tags to remove from the Elastic Inference Accelerator.
   *         </p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResult {}
