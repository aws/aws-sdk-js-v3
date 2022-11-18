// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { IoTRoboRunnerServiceException as __BaseException } from "./IoTRoboRunnerServiceException";

/**
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

export enum DestinationState {
  DECOMMISSIONED = "DECOMMISSIONED",
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

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
 * Worker orientation measured in units clockwise from north.
 */
export type Orientation = Orientation.DegreesMember | Orientation.$UnknownMember;

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
 * Supported coordinates for worker position.
 */
export type PositionCoordinates = PositionCoordinates.CartesianCoordinatesMember | PositionCoordinates.$UnknownMember;

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

export interface DeleteDestinationRequest {
  /**
   * Destination ARN.
   */
  id: string | undefined;
}

export interface DeleteDestinationResponse {}

export interface DeleteSiteRequest {
  /**
   * Site ARN.
   */
  id: string | undefined;
}

export interface DeleteSiteResponse {}

export interface DeleteWorkerRequest {
  /**
   * Full ARN of the worker.
   */
  id: string | undefined;
}

export interface DeleteWorkerResponse {}

export interface DeleteWorkerFleetRequest {
  /**
   * Full ARN of the worker fleet.
   */
  id: string | undefined;
}

export interface DeleteWorkerFleetResponse {}

/**
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

export interface GetDestinationRequest {
  /**
   * Destination ARN.
   */
  id: string | undefined;
}

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

export interface GetSiteRequest {
  /**
   * Site ARN.
   */
  id: string | undefined;
}

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

export interface GetWorkerRequest {
  /**
   * Full ARN of the worker.
   */
  id: string | undefined;
}

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

export interface GetWorkerFleetRequest {
  /**
   * Full ARN of the worker fleet.
   */
  id: string | undefined;
}

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

/**
 * @internal
 */
export const CartesianCoordinatesFilterSensitiveLog = (obj: CartesianCoordinates): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDestinationRequestFilterSensitiveLog = (obj: CreateDestinationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDestinationResponseFilterSensitiveLog = (obj: CreateDestinationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSiteRequestFilterSensitiveLog = (obj: CreateSiteRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSiteResponseFilterSensitiveLog = (obj: CreateSiteResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrientationFilterSensitiveLog = (obj: Orientation): any => {
  if (obj.degrees !== undefined) return { degrees: obj.degrees };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const PositionCoordinatesFilterSensitiveLog = (obj: PositionCoordinates): any => {
  if (obj.cartesianCoordinates !== undefined)
    return { cartesianCoordinates: CartesianCoordinatesFilterSensitiveLog(obj.cartesianCoordinates) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const VendorPropertiesFilterSensitiveLog = (obj: VendorProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorkerRequestFilterSensitiveLog = (obj: CreateWorkerRequest): any => ({
  ...obj,
  ...(obj.position && { position: PositionCoordinatesFilterSensitiveLog(obj.position) }),
  ...(obj.orientation && { orientation: OrientationFilterSensitiveLog(obj.orientation) }),
});

/**
 * @internal
 */
export const CreateWorkerResponseFilterSensitiveLog = (obj: CreateWorkerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorkerFleetRequestFilterSensitiveLog = (obj: CreateWorkerFleetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorkerFleetResponseFilterSensitiveLog = (obj: CreateWorkerFleetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDestinationRequestFilterSensitiveLog = (obj: DeleteDestinationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDestinationResponseFilterSensitiveLog = (obj: DeleteDestinationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSiteRequestFilterSensitiveLog = (obj: DeleteSiteRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSiteResponseFilterSensitiveLog = (obj: DeleteSiteResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWorkerRequestFilterSensitiveLog = (obj: DeleteWorkerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWorkerResponseFilterSensitiveLog = (obj: DeleteWorkerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWorkerFleetRequestFilterSensitiveLog = (obj: DeleteWorkerFleetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWorkerFleetResponseFilterSensitiveLog = (obj: DeleteWorkerFleetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DestinationFilterSensitiveLog = (obj: Destination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDestinationRequestFilterSensitiveLog = (obj: GetDestinationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDestinationResponseFilterSensitiveLog = (obj: GetDestinationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDestinationsRequestFilterSensitiveLog = (obj: ListDestinationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDestinationsResponseFilterSensitiveLog = (obj: ListDestinationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDestinationRequestFilterSensitiveLog = (obj: UpdateDestinationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDestinationResponseFilterSensitiveLog = (obj: UpdateDestinationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSiteRequestFilterSensitiveLog = (obj: GetSiteRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSiteResponseFilterSensitiveLog = (obj: GetSiteResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWorkerRequestFilterSensitiveLog = (obj: GetWorkerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWorkerResponseFilterSensitiveLog = (obj: GetWorkerResponse): any => ({
  ...obj,
  ...(obj.position && { position: PositionCoordinatesFilterSensitiveLog(obj.position) }),
  ...(obj.orientation && { orientation: OrientationFilterSensitiveLog(obj.orientation) }),
});

/**
 * @internal
 */
export const GetWorkerFleetRequestFilterSensitiveLog = (obj: GetWorkerFleetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWorkerFleetResponseFilterSensitiveLog = (obj: GetWorkerFleetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorkersRequestFilterSensitiveLog = (obj: ListWorkersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkerFilterSensitiveLog = (obj: Worker): any => ({
  ...obj,
  ...(obj.position && { position: PositionCoordinatesFilterSensitiveLog(obj.position) }),
  ...(obj.orientation && { orientation: OrientationFilterSensitiveLog(obj.orientation) }),
});

/**
 * @internal
 */
export const ListWorkersResponseFilterSensitiveLog = (obj: ListWorkersResponse): any => ({
  ...obj,
  ...(obj.workers && { workers: obj.workers.map((item) => WorkerFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListSitesRequestFilterSensitiveLog = (obj: ListSitesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SiteFilterSensitiveLog = (obj: Site): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSitesResponseFilterSensitiveLog = (obj: ListSitesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSiteRequestFilterSensitiveLog = (obj: UpdateSiteRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSiteResponseFilterSensitiveLog = (obj: UpdateSiteResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorkerFleetsRequestFilterSensitiveLog = (obj: ListWorkerFleetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkerFleetFilterSensitiveLog = (obj: WorkerFleet): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorkerFleetsResponseFilterSensitiveLog = (obj: ListWorkerFleetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateWorkerRequestFilterSensitiveLog = (obj: UpdateWorkerRequest): any => ({
  ...obj,
  ...(obj.position && { position: PositionCoordinatesFilterSensitiveLog(obj.position) }),
  ...(obj.orientation && { orientation: OrientationFilterSensitiveLog(obj.orientation) }),
});

/**
 * @internal
 */
export const UpdateWorkerResponseFilterSensitiveLog = (obj: UpdateWorkerResponse): any => ({
  ...obj,
  ...(obj.orientation && { orientation: OrientationFilterSensitiveLog(obj.orientation) }),
  ...(obj.position && { position: PositionCoordinatesFilterSensitiveLog(obj.position) }),
});

/**
 * @internal
 */
export const UpdateWorkerFleetRequestFilterSensitiveLog = (obj: UpdateWorkerFleetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateWorkerFleetResponseFilterSensitiveLog = (obj: UpdateWorkerFleetResponse): any => ({
  ...obj,
});
