// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { IoTRoboRunnerServiceException as __BaseException } from "./IoTRoboRunnerServiceException";

/**
 * @public
 *  User does not have sufficient access to perform this action.
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  $retryable = {};
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
  }
}

/**
 * @public
 * Cartesian coordinates in 3D space relative to the RoboRunner origin.
 */
export interface CartesianCoordinates {
  /**
   * @public
   * X coordinate.
   */
  x: number | undefined;

  /**
   * @public
   * Y coordinate.
   */
  y: number | undefined;

  /**
   * @public
   * Z coordinate.
   */
  z?: number;
}

/**
 * @public
 * Exception thrown if a resource in a create request already exists.
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * @enum
 */
export const DestinationState = {
  DECOMMISSIONED: "DECOMMISSIONED",
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type DestinationState = (typeof DestinationState)[keyof typeof DestinationState];

/**
 * @public
 */
export interface CreateDestinationRequest {
  /**
   * @public
   * Token used for detecting replayed requests. Replayed requests will not be performed multiple times.
   */
  clientToken?: string;

  /**
   * @public
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * @public
   * Site ARN.
   */
  site: string | undefined;

  /**
   * @public
   * The state of the destination. Default used if not specified.
   */
  state?: DestinationState | string;

  /**
   * @public
   * JSON document containing additional fixed properties regarding the destination
   */
  additionalFixedProperties?: string;
}

/**
 * @public
 */
export interface CreateDestinationResponse {
  /**
   * @public
   * Destination ARN.
   */
  arn: string | undefined;

  /**
   * @public
   * Filters access by the destination's identifier
   */
  id: string | undefined;

  /**
   * @public
   * Timestamp at which the resource was created.
   */
  createdAt: Date | undefined;

  /**
   * @public
   * Timestamp at which the resource was last updated.
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * State of the destination.
   */
  state: DestinationState | string | undefined;
}

/**
 * @public
 * Exception thrown if something goes wrong within the service.
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
 * Exception thrown if a resource referenced in the request doesn't exist.
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
 * Exception thrown if the user's AWS account has reached a service limit and the operation cannot proceed.
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * @public
 * Exception thrown if the api has been called too quickly be the client.
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
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
  }
}

/**
 * @public
 * Exception thrown if an invalid parameter is provided to an API.
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 */
export interface CreateSiteRequest {
  /**
   * @public
   * Token used for detecting replayed requests. Replayed requests will not be performed multiple times.
   */
  clientToken?: string;

  /**
   * @public
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * @public
   * A valid ISO 3166-1 alpha-2 code for the country in which the site resides. e.g., US.
   */
  countryCode: string | undefined;

  /**
   * @public
   * A high-level description of the site.
   */
  description?: string;
}

/**
 * @public
 */
export interface CreateSiteResponse {
  /**
   * @public
   * Site ARN.
   */
  arn: string | undefined;

  /**
   * @public
   * Filters access by the site's identifier
   */
  id: string | undefined;

  /**
   * @public
   * Timestamp at which the resource was created.
   */
  createdAt: Date | undefined;

  /**
   * @public
   * Timestamp at which the resource was last updated.
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 * Worker orientation measured in units clockwise from north.
 */
export type Orientation = Orientation.DegreesMember | Orientation.$UnknownMember;

/**
 * @public
 */
export namespace Orientation {
  /**
   * @public
   * Degrees, limited on [0, 360)
   */
  export interface DegreesMember {
    degrees: number;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    degrees?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    degrees: (value: number) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Orientation, visitor: Visitor<T>): T => {
    if (value.degrees !== undefined) return visitor.degrees(value.degrees);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * Supported coordinates for worker position.
 */
export type PositionCoordinates = PositionCoordinates.CartesianCoordinatesMember | PositionCoordinates.$UnknownMember;

/**
 * @public
 */
export namespace PositionCoordinates {
  /**
   * @public
   * Cartesian coordinates.
   */
  export interface CartesianCoordinatesMember {
    cartesianCoordinates: CartesianCoordinates;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cartesianCoordinates?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    cartesianCoordinates: (value: CartesianCoordinates) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PositionCoordinates, visitor: Visitor<T>): T => {
    if (value.cartesianCoordinates !== undefined) return visitor.cartesianCoordinates(value.cartesianCoordinates);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * Properties of the worker that are provided by the vendor FMS.
 */
export interface VendorProperties {
  /**
   * @public
   * The worker ID defined by the vendor FMS.
   */
  vendorWorkerId: string | undefined;

  /**
   * @public
   * The worker IP address defined by the vendor FMS.
   */
  vendorWorkerIpAddress?: string;

  /**
   * @public
   * JSON blob containing unstructured vendor properties that are transient and may change during regular operation.
   */
  vendorAdditionalTransientProperties?: string;

  /**
   * @public
   * JSON blob containing unstructured vendor properties that are fixed and won't change during regular operation.
   */
  vendorAdditionalFixedProperties?: string;
}

/**
 * @public
 */
export interface CreateWorkerRequest {
  /**
   * @public
   * Token used for detecting replayed requests. Replayed requests will not be performed multiple times.
   */
  clientToken?: string;

  /**
   * @public
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * @public
   * Full ARN of the worker fleet.
   */
  fleet: string | undefined;

  /**
   * @public
   * JSON blob containing unstructured worker properties that are transient and may change during regular operation.
   */
  additionalTransientProperties?: string;

  /**
   * @public
   * JSON blob containing unstructured worker properties that are fixed and won't change during regular operation.
   */
  additionalFixedProperties?: string;

  /**
   * @public
   * Properties of the worker that are provided by the vendor FMS.
   */
  vendorProperties?: VendorProperties;

  /**
   * @public
   * Supported coordinates for worker position.
   */
  position?: PositionCoordinates;

  /**
   * @public
   * Worker orientation measured in units clockwise from north.
   */
  orientation?: Orientation;
}

/**
 * @public
 */
export interface CreateWorkerResponse {
  /**
   * @public
   * Full ARN of the worker.
   */
  arn: string | undefined;

  /**
   * @public
   * Filters access by the workers identifier
   */
  id: string | undefined;

  /**
   * @public
   * Timestamp at which the resource was created.
   */
  createdAt: Date | undefined;

  /**
   * @public
   * Timestamp at which the resource was last updated.
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * Site ARN.
   */
  site: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkerFleetRequest {
  /**
   * @public
   * Token used for detecting replayed requests. Replayed requests will not be performed multiple times.
   */
  clientToken?: string;

  /**
   * @public
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * @public
   * Site ARN.
   */
  site: string | undefined;

  /**
   * @public
   * JSON blob containing additional fixed properties regarding the worker fleet
   */
  additionalFixedProperties?: string;
}

/**
 * @public
 */
export interface CreateWorkerFleetResponse {
  /**
   * @public
   * Full ARN of the worker fleet.
   */
  arn: string | undefined;

  /**
   * @public
   * Filters access by the worker fleet's identifier
   */
  id: string | undefined;

  /**
   * @public
   * Timestamp at which the resource was created.
   */
  createdAt: Date | undefined;

  /**
   * @public
   * Timestamp at which the resource was last updated.
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteDestinationRequest {
  /**
   * @public
   * Destination ARN.
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteDestinationResponse {}

/**
 * @public
 */
export interface DeleteSiteRequest {
  /**
   * @public
   * Site ARN.
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteSiteResponse {}

/**
 * @public
 */
export interface DeleteWorkerRequest {
  /**
   * @public
   * Full ARN of the worker.
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkerResponse {}

/**
 * @public
 */
export interface DeleteWorkerFleetRequest {
  /**
   * @public
   * Full ARN of the worker fleet.
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkerFleetResponse {}

/**
 * @public
 * Area within a facility where work can be performed.
 */
export interface Destination {
  /**
   * @public
   * Destination ARN.
   */
  arn: string | undefined;

  /**
   * @public
   * Filters access by the destination's identifier
   */
  id: string | undefined;

  /**
   * @public
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * @public
   * Site ARN.
   */
  site: string | undefined;

  /**
   * @public
   * Timestamp at which the resource was created.
   */
  createdAt: Date | undefined;

  /**
   * @public
   * Timestamp at which the resource was last updated.
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * State of the destination.
   */
  state: DestinationState | string | undefined;

  /**
   * @public
   * JSON document containing additional fixed properties regarding the destination
   */
  additionalFixedProperties?: string;
}

/**
 * @public
 */
export interface GetDestinationRequest {
  /**
   * @public
   * Destination ARN.
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetDestinationResponse {
  /**
   * @public
   * Destination ARN.
   */
  arn: string | undefined;

  /**
   * @public
   * Filters access by the destination's identifier
   */
  id: string | undefined;

  /**
   * @public
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * @public
   * Site ARN.
   */
  site: string | undefined;

  /**
   * @public
   * Timestamp at which the resource was created.
   */
  createdAt: Date | undefined;

  /**
   * @public
   * Timestamp at which the resource was last updated.
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * State of the destination.
   */
  state: DestinationState | string | undefined;

  /**
   * @public
   * JSON document containing additional fixed properties regarding the destination
   */
  additionalFixedProperties?: string;
}

/**
 * @public
 */
export interface ListDestinationsRequest {
  /**
   * @public
   * Site ARN.
   */
  site: string | undefined;

  /**
   * @public
   * Maximum number of results to retrieve in a single call.
   */
  maxResults?: number;

  /**
   * @public
   * Pagination token returned when another page of data exists. Provide it in your next call to the API to receive
   * the next page.
   */
  nextToken?: string;

  /**
   * @public
   * State of the destination.
   */
  state?: DestinationState | string;
}

/**
 * @public
 */
export interface ListDestinationsResponse {
  /**
   * @public
   * Pagination token returned when another page of data exists. Provide it in your next call to the API to receive
   * the next page.
   */
  nextToken?: string;

  /**
   * @public
   * List of destinations.
   */
  destinations?: Destination[];
}

/**
 * @public
 */
export interface UpdateDestinationRequest {
  /**
   * @public
   * Destination ARN.
   */
  id: string | undefined;

  /**
   * @public
   * Human friendly name of the resource.
   */
  name?: string;

  /**
   * @public
   * State of the destination.
   */
  state?: DestinationState | string;

  /**
   * @public
   * JSON document containing additional fixed properties regarding the destination
   */
  additionalFixedProperties?: string;
}

/**
 * @public
 */
export interface UpdateDestinationResponse {
  /**
   * @public
   * Destination ARN.
   */
  arn: string | undefined;

  /**
   * @public
   * Filters access by the destination's identifier
   */
  id: string | undefined;

  /**
   * @public
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * @public
   * Timestamp at which the resource was last updated.
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * State of the destination.
   */
  state: DestinationState | string | undefined;

  /**
   * @public
   * JSON document containing additional fixed properties regarding the destination
   */
  additionalFixedProperties?: string;
}

/**
 * @public
 */
export interface GetSiteRequest {
  /**
   * @public
   * Site ARN.
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetSiteResponse {
  /**
   * @public
   * Site ARN.
   */
  arn: string | undefined;

  /**
   * @public
   * Filters access by the site's identifier
   */
  id: string | undefined;

  /**
   * @public
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * @public
   * A valid ISO 3166-1 alpha-2 code for the country in which the site resides. e.g., US.
   */
  countryCode: string | undefined;

  /**
   * @public
   * A high-level description of the site.
   */
  description?: string;

  /**
   * @public
   * Timestamp at which the resource was created.
   */
  createdAt: Date | undefined;

  /**
   * @public
   * Timestamp at which the resource was last updated.
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetWorkerRequest {
  /**
   * @public
   * Full ARN of the worker.
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetWorkerResponse {
  /**
   * @public
   * Full ARN of the worker.
   */
  arn: string | undefined;

  /**
   * @public
   * Filters access by the workers identifier
   */
  id: string | undefined;

  /**
   * @public
   * Full ARN of the worker fleet.
   */
  fleet: string | undefined;

  /**
   * @public
   * Site ARN.
   */
  site: string | undefined;

  /**
   * @public
   * Timestamp at which the resource was created.
   */
  createdAt: Date | undefined;

  /**
   * @public
   * Timestamp at which the resource was last updated.
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * @public
   * JSON blob containing unstructured worker properties that are transient and may change during regular operation.
   */
  additionalTransientProperties?: string;

  /**
   * @public
   * JSON blob containing unstructured worker properties that are fixed and won't change during regular operation.
   */
  additionalFixedProperties?: string;

  /**
   * @public
   * Properties of the worker that are provided by the vendor FMS.
   */
  vendorProperties?: VendorProperties;

  /**
   * @public
   * Supported coordinates for worker position.
   */
  position?: PositionCoordinates;

  /**
   * @public
   * Worker orientation measured in units clockwise from north.
   */
  orientation?: Orientation;
}

/**
 * @public
 */
export interface GetWorkerFleetRequest {
  /**
   * @public
   * Full ARN of the worker fleet.
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetWorkerFleetResponse {
  /**
   * @public
   * Filters access by the worker fleet's identifier
   */
  id: string | undefined;

  /**
   * @public
   * Full ARN of the worker fleet.
   */
  arn: string | undefined;

  /**
   * @public
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * @public
   * Site ARN.
   */
  site: string | undefined;

  /**
   * @public
   * Timestamp at which the resource was created.
   */
  createdAt: Date | undefined;

  /**
   * @public
   * Timestamp at which the resource was last updated.
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * JSON blob containing additional fixed properties regarding the worker fleet
   */
  additionalFixedProperties?: string;
}

/**
 * @public
 */
export interface ListWorkersRequest {
  /**
   * @public
   * Site ARN.
   */
  site: string | undefined;

  /**
   * @public
   * Maximum number of results to retrieve in a single ListWorkers call.
   */
  maxResults?: number;

  /**
   * @public
   * Pagination token returned when another page of data exists. Provide it in your next call to the API to receive
   * the next page.
   */
  nextToken?: string;

  /**
   * @public
   * Full ARN of the worker fleet.
   */
  fleet?: string;
}

/**
 * @public
 * A unit capable of performing tasks.
 */
export interface Worker {
  /**
   * @public
   * Full ARN of the worker.
   */
  arn: string | undefined;

  /**
   * @public
   * Filters access by the workers identifier
   */
  id: string | undefined;

  /**
   * @public
   * Full ARN of the worker fleet.
   */
  fleet: string | undefined;

  /**
   * @public
   * Timestamp at which the resource was created.
   */
  createdAt: Date | undefined;

  /**
   * @public
   * Timestamp at which the resource was last updated.
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * @public
   * Site ARN.
   */
  site: string | undefined;

  /**
   * @public
   * JSON blob containing unstructured worker properties that are transient and may change during regular operation.
   */
  additionalTransientProperties?: string;

  /**
   * @public
   * JSON blob containing unstructured worker properties that are fixed and won't change during regular operation.
   */
  additionalFixedProperties?: string;

  /**
   * @public
   * Properties of the worker that are provided by the vendor FMS.
   */
  vendorProperties?: VendorProperties;

  /**
   * @public
   * Supported coordinates for worker position.
   */
  position?: PositionCoordinates;

  /**
   * @public
   * Worker orientation measured in units clockwise from north.
   */
  orientation?: Orientation;
}

/**
 * @public
 */
export interface ListWorkersResponse {
  /**
   * @public
   * Pagination token returned when another page of data exists. Provide it in your next call to the API to receive
   * the next page.
   */
  nextToken?: string;

  /**
   * @public
   * List of workers.
   */
  workers?: Worker[];
}

/**
 * @public
 */
export interface ListSitesRequest {
  /**
   * @public
   * Maximum number of results to retrieve in a single ListSites call.
   */
  maxResults?: number;

  /**
   * @public
   * Pagination token returned when another page of data exists. Provide it in your next call to the API to receive
   * the next page.
   */
  nextToken?: string;
}

/**
 * @public
 * Facility containing destinations, workers, activities, and tasks.
 */
export interface Site {
  /**
   * @public
   * Site ARN.
   */
  arn: string | undefined;

  /**
   * @public
   * The name of the site. Mutable after creation and unique within a given account.
   */
  name: string | undefined;

  /**
   * @public
   * A valid ISO 3166-1 alpha-2 code for the country in which the site resides. e.g., US.
   */
  countryCode: string | undefined;

  /**
   * @public
   * Timestamp at which the resource was created.
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface ListSitesResponse {
  /**
   * @public
   * Pagination token returned when another page of data exists. Provide it in your next call to the API to receive
   * the next page.
   */
  nextToken?: string;

  /**
   * @public
   * List of facilities.
   */
  sites?: Site[];
}

/**
 * @public
 */
export interface UpdateSiteRequest {
  /**
   * @public
   * Site ARN.
   */
  id: string | undefined;

  /**
   * @public
   * Human friendly name of the resource.
   */
  name?: string;

  /**
   * @public
   * A valid ISO 3166-1 alpha-2 code for the country in which the site resides. e.g., US.
   */
  countryCode?: string;

  /**
   * @public
   * A high-level description of the site.
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateSiteResponse {
  /**
   * @public
   * Site ARN.
   */
  arn: string | undefined;

  /**
   * @public
   * Filters access by the site's identifier
   */
  id: string | undefined;

  /**
   * @public
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * @public
   * A valid ISO 3166-1 alpha-2 code for the country in which the site resides. e.g., US.
   */
  countryCode?: string;

  /**
   * @public
   * A high-level description of the site.
   */
  description?: string;

  /**
   * @public
   * Timestamp at which the resource was last updated.
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListWorkerFleetsRequest {
  /**
   * @public
   * Site ARN.
   */
  site: string | undefined;

  /**
   * @public
   * Maximum number of results to retrieve in a single ListWorkerFleets call.
   */
  maxResults?: number;

  /**
   * @public
   * Pagination token returned when another page of data exists. Provide it in your next call to the API to receive
   * the next page.
   */
  nextToken?: string;
}

/**
 * @public
 * A collection of workers organized within a facility.
 */
export interface WorkerFleet {
  /**
   * @public
   * Full ARN of the worker fleet.
   */
  arn: string | undefined;

  /**
   * @public
   * Filters access by the worker fleet's identifier
   */
  id: string | undefined;

  /**
   * @public
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * @public
   * Site ARN.
   */
  site: string | undefined;

  /**
   * @public
   * Timestamp at which the resource was created.
   */
  createdAt: Date | undefined;

  /**
   * @public
   * Timestamp at which the resource was last updated.
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * JSON blob containing additional fixed properties regarding the worker fleet
   */
  additionalFixedProperties?: string;
}

/**
 * @public
 */
export interface ListWorkerFleetsResponse {
  /**
   * @public
   * Pagination token returned when another page of data exists. Provide it in your next call to the API to receive
   * the next page.
   */
  nextToken?: string;

  /**
   * @public
   * List of worker fleets.
   */
  workerFleets?: WorkerFleet[];
}

/**
 * @public
 */
export interface UpdateWorkerRequest {
  /**
   * @public
   * Full ARN of the worker.
   */
  id: string | undefined;

  /**
   * @public
   * Human friendly name of the resource.
   */
  name?: string;

  /**
   * @public
   * JSON blob containing unstructured worker properties that are transient and may change during regular operation.
   */
  additionalTransientProperties?: string;

  /**
   * @public
   * JSON blob containing unstructured worker properties that are fixed and won't change during regular operation.
   */
  additionalFixedProperties?: string;

  /**
   * @public
   * Properties of the worker that are provided by the vendor FMS.
   */
  vendorProperties?: VendorProperties;

  /**
   * @public
   * Supported coordinates for worker position.
   */
  position?: PositionCoordinates;

  /**
   * @public
   * Worker orientation measured in units clockwise from north.
   */
  orientation?: Orientation;
}

/**
 * @public
 */
export interface UpdateWorkerResponse {
  /**
   * @public
   * Full ARN of the worker.
   */
  arn: string | undefined;

  /**
   * @public
   * Filters access by the workers identifier
   */
  id: string | undefined;

  /**
   * @public
   * Full ARN of the worker fleet.
   */
  fleet: string | undefined;

  /**
   * @public
   * Timestamp at which the resource was last updated.
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * @public
   * JSON blob containing unstructured worker properties that are transient and may change during regular operation.
   */
  additionalTransientProperties?: string;

  /**
   * @public
   * JSON blob containing unstructured worker properties that are fixed and won't change during regular operation.
   */
  additionalFixedProperties?: string;

  /**
   * @public
   * Worker orientation measured in units clockwise from north.
   */
  orientation?: Orientation;

  /**
   * @public
   * Properties of the worker that are provided by the vendor FMS.
   */
  vendorProperties?: VendorProperties;

  /**
   * @public
   * Supported coordinates for worker position.
   */
  position?: PositionCoordinates;
}

/**
 * @public
 */
export interface UpdateWorkerFleetRequest {
  /**
   * @public
   * Full ARN of the worker fleet.
   */
  id: string | undefined;

  /**
   * @public
   * Human friendly name of the resource.
   */
  name?: string;

  /**
   * @public
   * JSON blob containing additional fixed properties regarding the worker fleet
   */
  additionalFixedProperties?: string;
}

/**
 * @public
 */
export interface UpdateWorkerFleetResponse {
  /**
   * @public
   * Full ARN of the worker fleet.
   */
  arn: string | undefined;

  /**
   * @public
   * Filters access by the worker fleet's identifier
   */
  id: string | undefined;

  /**
   * @public
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * @public
   * Timestamp at which the resource was last updated.
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * JSON blob containing additional fixed properties regarding the worker fleet
   */
  additionalFixedProperties?: string;
}
