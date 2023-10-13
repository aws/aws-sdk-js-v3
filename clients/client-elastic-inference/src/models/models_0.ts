// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ElasticInferenceServiceException as __BaseException } from "./ElasticInferenceServiceException";

/**
 * @public
 * <p>
 *             The memory information of an Elastic Inference Accelerator type.
 *         </p>
 */
export interface MemoryInfo {
  /**
   * @public
   * <p>
   *             The size in mebibytes of the Elastic Inference Accelerator type.
   *         </p>
   */
  sizeInMiB?: number;
}

/**
 * @public
 * <p>
 *             A throughput entry for an Elastic Inference Accelerator type.
 *         </p>
 */
export interface KeyValuePair {
  /**
   * @public
   * <p>
   *             The throughput value of the Elastic Inference Accelerator type. It can assume the following values:
   *             TFLOPS16bit: the throughput expressed in 16bit TeraFLOPS.
   *             TFLOPS32bit: the throughput expressed in 32bit TeraFLOPS.
   *         </p>
   */
  key?: string;

  /**
   * @public
   * <p>
   *             The throughput value of the Elastic Inference Accelerator type.
   *         </p>
   */
  value?: number;
}

/**
 * @public
 * <p>
 *             The details of an Elastic Inference Accelerator type.
 *         </p>
 */
export interface AcceleratorType {
  /**
   * @public
   * <p>
   *             The name of the Elastic Inference Accelerator type.
   *         </p>
   */
  acceleratorTypeName?: string;

  /**
   * @public
   * <p>
   *             The memory information of the Elastic Inference Accelerator type.
   *         </p>
   */
  memoryInfo?: MemoryInfo;

  /**
   * @public
   * <p>
   *             The throughput information of the Elastic Inference Accelerator type.
   *         </p>
   */
  throughputInfo?: KeyValuePair[];
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
 * @public
 * <p>
 *             The offering for an Elastic Inference Accelerator type.
 *         </p>
 */
export interface AcceleratorTypeOffering {
  /**
   * @public
   * <p>
   *             The name of the Elastic Inference Accelerator type.
   *         </p>
   */
  acceleratorType?: string;

  /**
   * @public
   * <p>
   *             The location type for the offering. It can assume the following values:
   *             region: defines that the offering is at the regional level.
   *             availability-zone: defines that the offering is at the availability zone level.
   *             availability-zone-id: defines that the offering is at the availability zone level, defined by the availability zone id.
   *         </p>
   */
  locationType?: LocationType;

  /**
   * @public
   * <p>
   *             The location for the offering.
   *             It will return either the region, availability zone or availability zone id for the offering depending on the locationType value.
   *         </p>
   */
  location?: string;
}

/**
 * @public
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

/**
 * @public
 */
export interface DescribeAcceleratorOfferingsRequest {
  /**
   * @public
   * <p>
   *             The location type that you want to describe accelerator type offerings for. It can assume the following values:
   *             region: will return the accelerator type offering at the regional level.
   *             availability-zone: will return the accelerator type offering at the availability zone level.
   *             availability-zone-id: will return the accelerator type offering at the availability zone level returning the availability zone id.
   *         </p>
   */
  locationType: LocationType | undefined;

  /**
   * @public
   * <p>
   *             The list of accelerator types to describe.
   *         </p>
   */
  acceleratorTypes?: string[];
}

/**
 * @public
 */
export interface DescribeAcceleratorOfferingsResponse {
  /**
   * @public
   * <p>
   *             The list of accelerator type offerings for a specific location.
   *         </p>
   */
  acceleratorTypeOfferings?: AcceleratorTypeOffering[];
}

/**
 * @public
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
 * @public
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
 * @public
 * <p>
 *             A filter expression for the Elastic Inference Accelerator list.
 *         </p>
 */
export interface Filter {
  /**
   * @public
   * <p>
   *             The filter name for the Elastic Inference Accelerator list. It can assume the following values:
   *             accelerator-type: the type of Elastic Inference Accelerator to filter for.
   *             instance-id: an EC2 instance id to filter for.
   *         </p>
   */
  name?: string;

  /**
   * @public
   * <p>
   *             The values for the filter of the Elastic Inference Accelerator list.
   *         </p>
   */
  values?: string[];
}

/**
 * @public
 */
export interface DescribeAcceleratorsRequest {
  /**
   * @public
   * <p>
   *             The IDs of the accelerators to describe.
   *         </p>
   */
  acceleratorIds?: string[];

  /**
   * @public
   * <p>
   *             One or more filters. Filter names and values are case-sensitive. Valid filter names are:
   *             accelerator-types: can provide a list of accelerator type names to filter for.
   *             instance-id: can provide a list of EC2 instance ids to filter for.
   *         </p>
   */
  filters?: Filter[];

  /**
   * @public
   * <p>
   *             The total number of items to return in the command's output. If the total number of items available is more than the value specified, a NextToken is provided in the command's output.
   *             To resume pagination, provide the NextToken value in the starting-token argument of a subsequent command.
   *             Do not use the NextToken response element directly outside of the AWS CLI.
   *         </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>
   *             A token to specify where to start paginating. This is the NextToken from a previously truncated response.
   *         </p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>
 *             The health details of an Elastic Inference Accelerator.
 *         </p>
 */
export interface ElasticInferenceAcceleratorHealth {
  /**
   * @public
   * <p>
   *             The health status of the Elastic Inference Accelerator.
   *         </p>
   */
  status?: string;
}

/**
 * @public
 * <p>
 *             The details of an Elastic Inference Accelerator.
 *         </p>
 */
export interface ElasticInferenceAccelerator {
  /**
   * @public
   * <p>
   *             The health of the Elastic Inference Accelerator.
   *         </p>
   */
  acceleratorHealth?: ElasticInferenceAcceleratorHealth;

  /**
   * @public
   * <p>
   *             The type of the Elastic Inference Accelerator.
   *         </p>
   */
  acceleratorType?: string;

  /**
   * @public
   * <p>
   *             The ID of the Elastic Inference Accelerator.
   *         </p>
   */
  acceleratorId?: string;

  /**
   * @public
   * <p>
   *             The availability zone where the Elastic Inference Accelerator is present.
   *         </p>
   */
  availabilityZone?: string;

  /**
   * @public
   * <p>
   *             The ARN of the resource that the Elastic Inference Accelerator is attached to.
   *         </p>
   */
  attachedResource?: string;
}

/**
 * @public
 */
export interface DescribeAcceleratorsResponse {
  /**
   * @public
   * <p>
   *             The details of the Elastic Inference Accelerators.
   *         </p>
   */
  acceleratorSet?: ElasticInferenceAccelerator[];

  /**
   * @public
   * <p>
   *             A token to specify where to start paginating. This is the NextToken from a previously truncated response.
   *         </p>
   */
  nextToken?: string;
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
   * @public
   * <p>
   *             The available accelerator types.
   *         </p>
   */
  acceleratorTypes?: AcceleratorType[];
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>
   *             The ARN of the Elastic Inference Accelerator to list the tags for.
   *         </p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResult {
  /**
   * @public
   * <p>
   *             The tags of the Elastic Inference Accelerator.
   *         </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>
   *             The ARN of the Elastic Inference Accelerator to tag.
   *         </p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>
   *             The tags to add to the Elastic Inference Accelerator.
   *         </p>
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
   * @public
   * <p>
   *             The ARN of the Elastic Inference Accelerator to untag.
   *         </p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>
   *             The list of tags to remove from the Elastic Inference Accelerator.
   *         </p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResult {}
