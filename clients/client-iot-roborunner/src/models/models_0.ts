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
   * X coordinate.
   */
  x: number | undefined;

  /**
   * Y coordinate.
   */
  y: number | undefined;

  /**
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
   * Token used for detecting replayed requests. Replayed requests will not be performed multiple times.
   */
  clientToken?: string;

  /**
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * Site ARN.
   */
  site: string | undefined;

  /**
   * The state of the destination. Default used if not specified.
   */
  state?: DestinationState | string;

  /**
   * JSON document containing additional fixed properties regarding the destination
   */
  additionalFixedProperties?: string;
}

/**
 * @public
 */
export interface CreateDestinationResponse {
  /**
   * Destination ARN.
   */
  arn: string | undefined;

  /**
   * Filters access by the destination's identifier
   */
  id: string | undefined;

  /**
   * Timestamp at which the resource was created.
   */
  createdAt: Date | undefined;

  /**
   * Timestamp at which the resource was last updated.
   */
  updatedAt: Date | undefined;

  /**
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
   * Token used for detecting replayed requests. Replayed requests will not be performed multiple times.
   */
  clientToken?: string;

  /**
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * A valid ISO 3166-1 alpha-2 code for the country in which the site resides. e.g., US.
   */
  countryCode: string | undefined;

  /**
   * A high-level description of the site.
   */
  description?: string;
}

/**
 * @public
 */
export interface CreateSiteResponse {
  /**
   * Site ARN.
   */
  arn: string | undefined;

  /**
   * Filters access by the site's identifier
   */
  id: string | undefined;

  /**
   * Timestamp at which the resource was created.
   */
  createdAt: Date | undefined;

  /**
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
   * Degrees, limited on [0, 360)
   */
  export interface DegreesMember {
    degrees: number;
    $unknown?: never;
  }

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
   * Cartesian coordinates.
   */
  export interface CartesianCoordinatesMember {
    cartesianCoordinates: CartesianCoordinates;
    $unknown?: never;
  }

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
   * The worker ID defined by the vendor FMS.
   */
  vendorWorkerId: string | undefined;

  /**
   * The worker IP address defined by the vendor FMS.
   */
  vendorWorkerIpAddress?: string;

  /**
   * JSON blob containing unstructured vendor properties that are transient and may change during regular operation.
   */
  vendorAdditionalTransientProperties?: string;

  /**
   * JSON blob containing unstructured vendor properties that are fixed and won't change during regular operation.
   */
  vendorAdditionalFixedProperties?: string;
}

/**
 * @public
 */
export interface CreateWorkerRequest {
  /**
   * Token used for detecting replayed requests. Replayed requests will not be performed multiple times.
   */
  clientToken?: string;

  /**
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * Full ARN of the worker fleet.
   */
  fleet: string | undefined;

  /**
   * JSON blob containing unstructured worker properties that are transient and may change during regular operation.
   */
  additionalTransientProperties?: string;

  /**
   * JSON blob containing unstructured worker properties that are fixed and won't change during regular operation.
   */
  additionalFixedProperties?: string;

  /**
   * Properties of the worker that are provided by the vendor FMS.
   */
  vendorProperties?: VendorProperties;

  /**
   * Supported coordinates for worker position.
   */
  position?: PositionCoordinates;

  /**
   * Worker orientation measured in units clockwise from north.
   */
  orientation?: Orientation;
}

/**
 * @public
 */
export interface CreateWorkerResponse {
  /**
   * Full ARN of the worker.
   */
  arn: string | undefined;

  /**
   * Filters access by the workers identifier
   */
  id: string | undefined;

  /**
   * Timestamp at which the resource was created.
   */
  createdAt: Date | undefined;

  /**
   * Timestamp at which the resource was last updated.
   */
  updatedAt: Date | undefined;

  /**
   * Site ARN.
   */
  site: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkerFleetRequest {
  /**
   * Token used for detecting replayed requests. Replayed requests will not be performed multiple times.
   */
  clientToken?: string;

  /**
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * Site ARN.
   */
  site: string | undefined;

  /**
   * JSON blob containing additional fixed properties regarding the worker fleet
   */
  additionalFixedProperties?: string;
}

/**
 * @public
 */
export interface CreateWorkerFleetResponse {
  /**
   * Full ARN of the worker fleet.
   */
  arn: string | undefined;

  /**
   * Filters access by the worker fleet's identifier
   */
  id: string | undefined;

  /**
   * Timestamp at which the resource was created.
   */
  createdAt: Date | undefined;

  /**
   * Timestamp at which the resource was last updated.
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteDestinationRequest {
  /**
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
   * Destination ARN.
   */
  arn: string | undefined;

  /**
   * Filters access by the destination's identifier
   */
  id: string | undefined;

  /**
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * Site ARN.
   */
  site: string | undefined;

  /**
   * Timestamp at which the resource was created.
   */
  createdAt: Date | undefined;

  /**
   * Timestamp at which the resource was last updated.
   */
  updatedAt: Date | undefined;

  /**
   * State of the destination.
   */
  state: DestinationState | string | undefined;

  /**
   * JSON document containing additional fixed properties regarding the destination
   */
  additionalFixedProperties?: string;
}

/**
 * @public
 */
export interface GetDestinationRequest {
  /**
   * Destination ARN.
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetDestinationResponse {
  /**
   * Destination ARN.
   */
  arn: string | undefined;

  /**
   * Filters access by the destination's identifier
   */
  id: string | undefined;

  /**
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * Site ARN.
   */
  site: string | undefined;

  /**
   * Timestamp at which the resource was created.
   */
  createdAt: Date | undefined;

  /**
   * Timestamp at which the resource was last updated.
   */
  updatedAt: Date | undefined;

  /**
   * State of the destination.
   */
  state: DestinationState | string | undefined;

  /**
   * JSON document containing additional fixed properties regarding the destination
   */
  additionalFixedProperties?: string;
}

/**
 * @public
 */
export interface ListDestinationsRequest {
  /**
   * Site ARN.
   */
  site: string | undefined;

  /**
   * Maximum number of results to retrieve in a single call.
   */
  maxResults?: number;

  /**
   * Pagination token returned when another page of data exists. Provide it in your next call to the API to receive
   * the next page.
   */
  nextToken?: string;

  /**
   * State of the destination.
   */
  state?: DestinationState | string;
}

/**
 * @public
 */
export interface ListDestinationsResponse {
  /**
   * Pagination token returned when another page of data exists. Provide it in your next call to the API to receive
   * the next page.
   */
  nextToken?: string;

  /**
   * List of destinations.
   */
  destinations?: Destination[];
}

/**
 * @public
 */
export interface UpdateDestinationRequest {
  /**
   * Destination ARN.
   */
  id: string | undefined;

  /**
   * Human friendly name of the resource.
   */
  name?: string;

  /**
   * State of the destination.
   */
  state?: DestinationState | string;

  /**
   * JSON document containing additional fixed properties regarding the destination
   */
  additionalFixedProperties?: string;
}

/**
 * @public
 */
export interface UpdateDestinationResponse {
  /**
   * Destination ARN.
   */
  arn: string | undefined;

  /**
   * Filters access by the destination's identifier
   */
  id: string | undefined;

  /**
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * Timestamp at which the resource was last updated.
   */
  updatedAt: Date | undefined;

  /**
   * State of the destination.
   */
  state: DestinationState | string | undefined;

  /**
   * JSON document containing additional fixed properties regarding the destination
   */
  additionalFixedProperties?: string;
}

/**
 * @public
 */
export interface GetSiteRequest {
  /**
   * Site ARN.
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetSiteResponse {
  /**
   * Site ARN.
   */
  arn: string | undefined;

  /**
   * Filters access by the site's identifier
   */
  id: string | undefined;

  /**
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * A valid ISO 3166-1 alpha-2 code for the country in which the site resides. e.g., US.
   */
  countryCode: string | undefined;

  /**
   * A high-level description of the site.
   */
  description?: string;

  /**
   * Timestamp at which the resource was created.
   */
  createdAt: Date | undefined;

  /**
   * Timestamp at which the resource was last updated.
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetWorkerRequest {
  /**
   * Full ARN of the worker.
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetWorkerResponse {
  /**
   * Full ARN of the worker.
   */
  arn: string | undefined;

  /**
   * Filters access by the workers identifier
   */
  id: string | undefined;

  /**
   * Full ARN of the worker fleet.
   */
  fleet: string | undefined;

  /**
   * Site ARN.
   */
  site: string | undefined;

  /**
   * Timestamp at which the resource was created.
   */
  createdAt: Date | undefined;

  /**
   * Timestamp at which the resource was last updated.
   */
  updatedAt: Date | undefined;

  /**
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * JSON blob containing unstructured worker properties that are transient and may change during regular operation.
   */
  additionalTransientProperties?: string;

  /**
   * JSON blob containing unstructured worker properties that are fixed and won't change during regular operation.
   */
  additionalFixedProperties?: string;

  /**
   * Properties of the worker that are provided by the vendor FMS.
   */
  vendorProperties?: VendorProperties;

  /**
   * Supported coordinates for worker position.
   */
  position?: PositionCoordinates;

  /**
   * Worker orientation measured in units clockwise from north.
   */
  orientation?: Orientation;
}

/**
 * @public
 */
export interface GetWorkerFleetRequest {
  /**
   * Full ARN of the worker fleet.
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetWorkerFleetResponse {
  /**
   * Filters access by the worker fleet's identifier
   */
  id: string | undefined;

  /**
   * Full ARN of the worker fleet.
   */
  arn: string | undefined;

  /**
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * Site ARN.
   */
  site: string | undefined;

  /**
   * Timestamp at which the resource was created.
   */
  createdAt: Date | undefined;

  /**
   * Timestamp at which the resource was last updated.
   */
  updatedAt: Date | undefined;

  /**
   * JSON blob containing additional fixed properties regarding the worker fleet
   */
  additionalFixedProperties?: string;
}

/**
 * @public
 */
export interface ListWorkersRequest {
  /**
   * Site ARN.
   */
  site: string | undefined;

  /**
   * Maximum number of results to retrieve in a single ListWorkers call.
   */
  maxResults?: number;

  /**
   * Pagination token returned when another page of data exists. Provide it in your next call to the API to receive
   * the next page.
   */
  nextToken?: string;

  /**
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
   * Full ARN of the worker.
   */
  arn: string | undefined;

  /**
   * Filters access by the workers identifier
   */
  id: string | undefined;

  /**
   * Full ARN of the worker fleet.
   */
  fleet: string | undefined;

  /**
   * Timestamp at which the resource was created.
   */
  createdAt: Date | undefined;

  /**
   * Timestamp at which the resource was last updated.
   */
  updatedAt: Date | undefined;

  /**
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * Site ARN.
   */
  site: string | undefined;

  /**
   * JSON blob containing unstructured worker properties that are transient and may change during regular operation.
   */
  additionalTransientProperties?: string;

  /**
   * JSON blob containing unstructured worker properties that are fixed and won't change during regular operation.
   */
  additionalFixedProperties?: string;

  /**
   * Properties of the worker that are provided by the vendor FMS.
   */
  vendorProperties?: VendorProperties;

  /**
   * Supported coordinates for worker position.
   */
  position?: PositionCoordinates;

  /**
   * Worker orientation measured in units clockwise from north.
   */
  orientation?: Orientation;
}

/**
 * @public
 */
export interface ListWorkersResponse {
  /**
   * Pagination token returned when another page of data exists. Provide it in your next call to the API to receive
   * the next page.
   */
  nextToken?: string;

  /**
   * List of workers.
   */
  workers?: Worker[];
}

/**
 * @public
 */
export interface ListSitesRequest {
  /**
   * Maximum number of results to retrieve in a single ListSites call.
   */
  maxResults?: number;

  /**
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
   * Site ARN.
   */
  arn: string | undefined;

  /**
   * The name of the site. Mutable after creation and unique within a given account.
   */
  name: string | undefined;

  /**
   * A valid ISO 3166-1 alpha-2 code for the country in which the site resides. e.g., US.
   */
  countryCode: string | undefined;

  /**
   * Timestamp at which the resource was created.
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface ListSitesResponse {
  /**
   * Pagination token returned when another page of data exists. Provide it in your next call to the API to receive
   * the next page.
   */
  nextToken?: string;

  /**
   * List of facilities.
   */
  sites?: Site[];
}

/**
 * @public
 */
export interface UpdateSiteRequest {
  /**
   * Site ARN.
   */
  id: string | undefined;

  /**
   * Human friendly name of the resource.
   */
  name?: string;

  /**
   * A valid ISO 3166-1 alpha-2 code for the country in which the site resides. e.g., US.
   */
  countryCode?: string;

  /**
   * A high-level description of the site.
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateSiteResponse {
  /**
   * Site ARN.
   */
  arn: string | undefined;

  /**
   * Filters access by the site's identifier
   */
  id: string | undefined;

  /**
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * A valid ISO 3166-1 alpha-2 code for the country in which the site resides. e.g., US.
   */
  countryCode?: string;

  /**
   * A high-level description of the site.
   */
  description?: string;

  /**
   * Timestamp at which the resource was last updated.
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListWorkerFleetsRequest {
  /**
   * Site ARN.
   */
  site: string | undefined;

  /**
   * Maximum number of results to retrieve in a single ListWorkerFleets call.
   */
  maxResults?: number;

  /**
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
   * Full ARN of the worker fleet.
   */
  arn: string | undefined;

  /**
   * Filters access by the worker fleet's identifier
   */
  id: string | undefined;

  /**
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * Site ARN.
   */
  site: string | undefined;

  /**
   * Timestamp at which the resource was created.
   */
  createdAt: Date | undefined;

  /**
   * Timestamp at which the resource was last updated.
   */
  updatedAt: Date | undefined;

  /**
   * JSON blob containing additional fixed properties regarding the worker fleet
   */
  additionalFixedProperties?: string;
}

/**
 * @public
 */
export interface ListWorkerFleetsResponse {
  /**
   * Pagination token returned when another page of data exists. Provide it in your next call to the API to receive
   * the next page.
   */
  nextToken?: string;

  /**
   * List of worker fleets.
   */
  workerFleets?: WorkerFleet[];
}

/**
 * @public
 */
export interface UpdateWorkerRequest {
  /**
   * Full ARN of the worker.
   */
  id: string | undefined;

  /**
   * Human friendly name of the resource.
   */
  name?: string;

  /**
   * JSON blob containing unstructured worker properties that are transient and may change during regular operation.
   */
  additionalTransientProperties?: string;

  /**
   * JSON blob containing unstructured worker properties that are fixed and won't change during regular operation.
   */
  additionalFixedProperties?: string;

  /**
   * Properties of the worker that are provided by the vendor FMS.
   */
  vendorProperties?: VendorProperties;

  /**
   * Supported coordinates for worker position.
   */
  position?: PositionCoordinates;

  /**
   * Worker orientation measured in units clockwise from north.
   */
  orientation?: Orientation;
}

/**
 * @public
 */
export interface UpdateWorkerResponse {
  /**
   * Full ARN of the worker.
   */
  arn: string | undefined;

  /**
   * Filters access by the workers identifier
   */
  id: string | undefined;

  /**
   * Full ARN of the worker fleet.
   */
  fleet: string | undefined;

  /**
   * Timestamp at which the resource was last updated.
   */
  updatedAt: Date | undefined;

  /**
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * JSON blob containing unstructured worker properties that are transient and may change during regular operation.
   */
  additionalTransientProperties?: string;

  /**
   * JSON blob containing unstructured worker properties that are fixed and won't change during regular operation.
   */
  additionalFixedProperties?: string;

  /**
   * Worker orientation measured in units clockwise from north.
   */
  orientation?: Orientation;

  /**
   * Properties of the worker that are provided by the vendor FMS.
   */
  vendorProperties?: VendorProperties;

  /**
   * Supported coordinates for worker position.
   */
  position?: PositionCoordinates;
}

/**
 * @public
 */
export interface UpdateWorkerFleetRequest {
  /**
   * Full ARN of the worker fleet.
   */
  id: string | undefined;

  /**
   * Human friendly name of the resource.
   */
  name?: string;

  /**
   * JSON blob containing additional fixed properties regarding the worker fleet
   */
  additionalFixedProperties?: string;
}

/**
 * @public
 */
export interface UpdateWorkerFleetResponse {
  /**
   * Full ARN of the worker fleet.
   */
  arn: string | undefined;

  /**
   * Filters access by the worker fleet's identifier
   */
  id: string | undefined;

  /**
   * Human friendly name of the resource.
   */
  name: string | undefined;

  /**
   * Timestamp at which the resource was last updated.
   */
  updatedAt: Date | undefined;

  /**
   * JSON blob containing additional fixed properties regarding the worker fleet
   */
  additionalFixedProperties?: string;
}
