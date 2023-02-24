// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { ARCZonalShiftServiceException as __BaseException } from "./ARCZonalShiftServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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

export enum AppliedStatus {
  APPLIED = "APPLIED",
  NOT_APPLIED = "NOT_APPLIED",
}

export interface CancelZonalShiftRequest {
  /**
   * <p>The internally-generated identifier of a zonal shift.</p>
   */
  zonalShiftId: string | undefined;
}

export enum ConflictExceptionReason {
  SIMULTANEOUS_ZONAL_SHIFTS_CONFLICT = "SimultaneousZonalShiftsConflict",
  ZONAL_SHIFT_ALREADY_EXISTS = "ZonalShiftAlreadyExists",
  ZONAL_SHIFT_STATUS_NOT_ACTIVE = "ZonalShiftStatusNotActive",
}

/**
 * <p>The request could not be processed because of conflict in the current state of the resource.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The reason for the conflict exception.</p>
   */
  reason: ConflictExceptionReason | string | undefined;

  /**
   * <p>The zonal shift ID associated with the conflict exception.</p>
   */
  zonalShiftId?: string;

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
    this.reason = opts.reason;
    this.zonalShiftId = opts.zonalShiftId;
  }
}

/**
 * <p>There was an internal server error.</p>
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
 * <p>The input requested a resource that was not found.</p>
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
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
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

export enum ValidationExceptionReason {
  INVALID_AZ = "InvalidAz",
  INVALID_EXPIRES_IN = "InvalidExpiresIn",
  INVALID_RESOURCE_IDENTIFIER = "InvalidResourceIdentifier",
  INVALID_STATUS = "InvalidStatus",
  INVALID_TOKEN = "InvalidToken",
  MISSING_VALUE = "MissingValue",
  UNSUPPORTED_AZ = "UnsupportedAz",
}

/**
 * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The reason for the validation exception.</p>
   */
  reason: ValidationExceptionReason | string | undefined;

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
    this.reason = opts.reason;
  }
}

export enum ZonalShiftStatus {
  ACTIVE = "ACTIVE",
  CANCELED = "CANCELED",
  EXPIRED = "EXPIRED",
}

export interface ZonalShift {
  /**
   * <p>The identifier of a zonal shift.</p>
   */
  zonalShiftId: string | undefined;

  /**
   * <p>The identifier for the resource to include in a zonal shift. The identifier is the Amazon Resource Name (ARN) for the resource.</p>
   * 		       <p>At this time, you can only start a zonal shift for Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.</p>
   */
  resourceIdentifier: string | undefined;

  /**
   * <p>The Availability Zone that traffic is moved away from for a resource when you start a zonal shift.
   * 			Until the zonal shift expires or you cancel it, traffic for the resource is instead moved to other Availability Zones in the AWS Region.</p>
   */
  awayFrom: string | undefined;

  /**
   * <p>The expiry time (expiration time) for the zonal shift. A zonal shift is temporary and must be set to expire when you start the zonal shift.
   * 			You can initially set a zonal shift to expire in a maximum of three days (72 hours). However, you can update a zonal shift
   * 			to set a new expiration at any time. </p>
   * 		       <p>When you start a zonal shift, you specify how long you want it to be active, which Route 53 ARC converts
   * 			to an expiry time (expiration time). You can cancel a zonal shift, for example, if you're ready to restore traffic to the Availability Zone. Or you
   * 			can update the zonal shift to specify another length of time to expire in.</p>
   */
  expiryTime: Date | undefined;

  /**
   * <p>The time (UTC) when the zonal shift is started.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>A status for a zonal shift.</p>
   *    	     <p>The <code>Status</code> for a zonal shift can have one of the following values:</p>
   *    	     <ul>
   *             <li>
   *                <p>
   *                   <b>ACTIVE:</b> The zonal shift is started and active.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EXPIRED:</b> The zonal shift has expired (the expiry time was exceeded).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CANCELED:</b> The zonal shift was canceled.</p>
   *             </li>
   *          </ul>
   */
  status: ZonalShiftStatus | string | undefined;

  /**
   * <p>A comment that you enter about the zonal shift. Only the latest comment is retained; no comment
   *    		history is maintained. A new comment overwrites any existing comment string.</p>
   */
  comment: string | undefined;
}

export interface GetManagedResourceRequest {
  /**
   * <p>The identifier for the resource to include in a zonal shift. The identifier is the Amazon Resource Name (ARN) for the resource.</p>
   *    	     <p>At this time, you can only start a zonal shift for Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.</p>
   */
  resourceIdentifier: string | undefined;
}

/**
 * <p>A complex structure that lists the zonal shifts for a managed resource and their statuses for the resource.</p>
 */
export interface ZonalShiftInResource {
  /**
   * <p>An <code>appliedStatus</code> for a zonal shift for a resource can have one of two values: <code>APPLIED</code>
   *    		or <code>NOT_APPLIED</code>. </p>
   */
  appliedStatus: AppliedStatus | string | undefined;

  /**
   * <p>The identifier of a zonal shift.</p>
   */
  zonalShiftId: string | undefined;

  /**
   * <p>The identifier for the resource to include in a zonal shift. The identifier is the Amazon Resource Name (ARN) for the resource.</p>
   *    	     <p>At this time, you can only start a zonal shift for Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.</p>
   */
  resourceIdentifier: string | undefined;

  /**
   * <p>The Availability Zone that traffic is moved away from for a resource when you start a zonal shift.
   *    		Until the zonal shift expires or you cancel it, traffic for the resource is instead moved to other Availability Zones in the AWS Region.</p>
   */
  awayFrom: string | undefined;

  /**
   * <p>The expiry time (expiration time) for the zonal shift. A zonal shift is temporary and must be set to expire when you start the zonal shift.
   *    		You can initially set a zonal shift to expire in a maximum of three days (72 hours). However, you can update a zonal shift
   *    		to set a new expiration at any time. </p>
   *    	     <p>When you start a zonal shift, you specify how long you want it to be active, which Route 53 ARC converts
   *    		to an expiry time (expiration time). You can cancel a zonal shift, for example, if you're ready to restore traffic to the Availability Zone. Or you
   *    		can update the zonal shift to specify another length of time to expire in.</p>
   */
  expiryTime: Date | undefined;

  /**
   * <p>The time (UTC) when the zonal shift is started.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>A comment that you enter about the zonal shift. Only the latest comment is retained; no comment
   *    		history is maintained. That is, a new comment overwrites any existing comment string.</p>
   */
  comment: string | undefined;
}

export interface GetManagedResourceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource.</p>
   */
  arn?: string;

  /**
   * <p>The name of the resource.</p>
   */
  name?: string;

  /**
   * <p>A collection of key-value pairs that indicate whether resources are active in Availability Zones or not.
   *    		The key name is the Availability Zone where the resource is deployed. The value is 1 or 0.</p>
   */
  appliedWeights: Record<string, number> | undefined;

  /**
   * <p>The zonal shifts that are currently active for a resource. </p>
   */
  zonalShifts: ZonalShiftInResource[] | undefined;
}

export interface ListManagedResourcesRequest {
  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the
   *    		previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous
   *    		call's <code>NextToken</code> response to request the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The number of objects that you want to return with this call.</p>
   */
  maxResults?: number;
}

/**
 * <p>A complex structure for a managed resource in an account.</p>
 *    	     <p>A managed resource is a Network Load Balancer or Application Load Balancer that has been registered with Route 53 ARC by Elastic Load Balancing. You can start a
 *    		zonal shift in Route 53 ARC for a managed resource to temporarily move traffic for the resource away from an Availability Zone in an AWS Region.</p>
 *    	     <note>
 *             <p>At this time, you can only start a zonal shift for Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.</p>
 *          </note>
 */
export interface ManagedResourceSummary {
  /**
   * <p>The Amazon Resource Name (ARN) for the managed resource.</p>
   */
  arn?: string;

  /**
   * <p>The name of the managed resource.</p>
   */
  name?: string;

  /**
   * <p>The Availability Zones that a resource is deployed in.</p>
   */
  availabilityZones: string[] | undefined;
}

export interface ListManagedResourcesResponse {
  /**
   * <p>The items in the response list.</p>
   */
  items: ManagedResourceSummary[] | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the
   *    		previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous
   *    		call's <code>NextToken</code> response to request the next page of results.</p>
   */
  nextToken?: string;
}

export interface ListZonalShiftsRequest {
  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the
   *    		previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous
   *    		call's <code>NextToken</code> response to request the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A status for a zonal shift.</p>
   *    	     <p>The <code>Status</code> for a zonal shift can have one of the following values:</p>
   *    	     <ul>
   *             <li>
   *                <p>
   *                   <b>ACTIVE</b>: The zonal shift is started and active.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EXPIRED</b>: The zonal shift has expired (the expiry time was exceeded).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CANCELED</b>: The zonal shift was canceled.</p>
   *             </li>
   *          </ul>
   */
  status?: ZonalShiftStatus | string;

  /**
   * <p>The number of objects that you want to return with this call.</p>
   */
  maxResults?: number;
}

/**
 * <p>You start a zonal shift to temporarily move load balancer traffic away from an Availability Zone in a AWS Region.
 *    		A zonal shift helps your application recover immediately, for example, from a developer's bad code deployment or from an AWS
 *    		infrastructure failure in a single Availability Zone. You can start a zonal shift in Route 53 ARC only for managed
 *    		resources in your account in an AWS Region. Supported AWS resources are automatically registered with Route 53 ARC.</p>
 *    	     <p>Zonal shifts are temporary. A zonal shift can be active for up to three days (72 hours).</p>
 *    	     <p>When you start a zonal shift, you specify how long you want it to be active, which Amazon Route 53 Application Recovery Controller converts
 *    		to an expiry time (expiration time). You can cancel a zonal shift, for example, if you're ready to restore traffic to the Availability Zone. Or you
 *    		can extend the zonal shift by updating the expiration so the zonal shift is active longer.</p>
 */
export interface ZonalShiftSummary {
  /**
   * <p>The identifier of a zonal shift.</p>
   */
  zonalShiftId: string | undefined;

  /**
   * <p>The identifier for the resource to include in a zonal shift. The identifier is the Amazon Resource Name (ARN) for the resource.</p>
   *    	     <p>At this time, you can only start a zonal shift for Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.</p>
   */
  resourceIdentifier: string | undefined;

  /**
   * <p>The Availability Zone that traffic is moved away from for a resource when you start a zonal shift.
   *    		Until the zonal shift expires or you cancel it, traffic for the resource is instead moved to other Availability Zones in the AWS Region.</p>
   */
  awayFrom: string | undefined;

  /**
   * <p>The expiry time (expiration time) for the zonal shift. A zonal shift is temporary and must be set to expire when you start the zonal shift.
   *    		You can initially set a zonal shift to expire in a maximum of three days (72 hours). However, you can update a zonal shift
   *    		to set a new expiration at any time. </p>
   *    	     <p>When you start a zonal shift, you specify how long you want it to be active, which Route 53 ARC converts
   *    		to an expiry time (expiration time). You can cancel a zonal shift, for example, if you're ready to restore traffic to the Availability Zone. Or you
   *    		can update the zonal shift to specify another length of time to expire in.</p>
   */
  expiryTime: Date | undefined;

  /**
   * <p>The time (UTC) when the zonal shift is started.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>A status for a zonal shift.</p>
   *    	     <p>The <code>Status</code> for a zonal shift can have one of the following values:</p>
   *    	     <ul>
   *             <li>
   *                <p>
   *                   <b>ACTIVE:</b> The zonal shift is started and active.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EXPIRED:</b> The zonal shift has expired (the expiry time was exceeded).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CANCELED:</b> The zonal shift was canceled.</p>
   *             </li>
   *          </ul>
   */
  status: ZonalShiftStatus | string | undefined;

  /**
   * <p>A comment that you enter about the zonal shift. Only the latest comment is retained; no comment
   *    		history is maintained. That is, a new comment overwrites any existing comment string.</p>
   */
  comment: string | undefined;
}

export interface ListZonalShiftsResponse {
  /**
   * <p>The items in the response list.</p>
   */
  items?: ZonalShiftSummary[];

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the
   *    		previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous
   *    		call's <code>NextToken</code> response to request the next page of results.</p>
   */
  nextToken?: string;
}

export interface UpdateZonalShiftRequest {
  /**
   * <p>The identifier of a zonal shift.</p>
   */
  zonalShiftId: string | undefined;

  /**
   * <p>A comment that you enter about the zonal shift. Only the latest comment is retained; no comment
   *    		history is maintained. A new comment overwrites any existing comment string.</p>
   */
  comment?: string;

  /**
   * <p>The length of time that you want a zonal shift to be active, which Route 53 ARC converts to an expiry time (expiration time).
   *    		Zonal shifts are temporary. You can set a zonal shift to be active initially for up to three days (72 hours).</p>
   *    	     <p>If you want to still keep traffic away from an Availability Zone, you can update the
   *    		zonal shift and set a new expiration. You can also cancel a zonal shift, before it expires, for example, if you're ready to
   *    		restore traffic to the Availability Zone.</p>
   *    	     <p>To set a length of time for a zonal shift to be active, specify a whole number, and then one of the following, with no space:</p>
   *    	     <ul>
   *             <li>
   *                <p>
   *                   <b>A lowercase letter m:</b> To specify that the value is in minutes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>A lowercase letter h:</b> To specify that the value is in hours.</p>
   *             </li>
   *          </ul>
   *    	     <p>For example: <code>20h</code> means the zonal shift expires in 20 hours. <code>120m</code> means the zonal shift expires in 120 minutes (2 hours).</p>
   */
  expiresIn?: string;
}

export interface StartZonalShiftRequest {
  /**
   * <p>The identifier for the resource to include in a zonal shift. The identifier is the Amazon Resource Name (ARN) for the resource.</p>
   *    	     <p>At this time, you can only start a zonal shift for Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.</p>
   */
  resourceIdentifier: string | undefined;

  /**
   * <p>The Availability Zone that traffic is moved away from for a resource when you start a zonal shift.
   *    		Until the zonal shift expires or you cancel it, traffic for the resource is instead moved to other Availability Zones in the AWS Region.</p>
   */
  awayFrom: string | undefined;

  /**
   * <p>The length of time that you want a zonal shift to be active, which Route 53 ARC converts to an expiry time (expiration time).
   *    		Zonal shifts are temporary. You can set a zonal shift to be active initially for up to three days (72 hours).</p>
   *    	     <p>If you want to still keep traffic away from an Availability Zone, you can update the
   *    		zonal shift and set a new expiration. You can also cancel a zonal shift, before it expires, for example, if you're ready to
   *    		restore traffic to the Availability Zone.</p>
   *    	     <p>To set a length of time for a zonal shift to be active, specify a whole number, and then one of the following, with no space:</p>
   *
   *    	     <ul>
   *             <li>
   *                <p>
   *                   <b>A lowercase letter m:</b> To specify that the value is in minutes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>A lowercase letter h:</b> To specify that the value is in hours.</p>
   *             </li>
   *          </ul>
   *    	     <p>For example: <code>20h</code> means the zonal shift expires in 20 hours. <code>120m</code> means the zonal shift expires in 120 minutes (2 hours).</p>
   */
  expiresIn: string | undefined;

  /**
   * <p>A comment that you enter about the zonal shift. Only the latest comment is retained; no comment
   *    		history is maintained. A new comment overwrites any existing comment string.</p>
   */
  comment: string | undefined;
}

/**
 * @internal
 */
export const CancelZonalShiftRequestFilterSensitiveLog = (obj: CancelZonalShiftRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ZonalShiftFilterSensitiveLog = (obj: ZonalShift): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetManagedResourceRequestFilterSensitiveLog = (obj: GetManagedResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ZonalShiftInResourceFilterSensitiveLog = (obj: ZonalShiftInResource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetManagedResourceResponseFilterSensitiveLog = (obj: GetManagedResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListManagedResourcesRequestFilterSensitiveLog = (obj: ListManagedResourcesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ManagedResourceSummaryFilterSensitiveLog = (obj: ManagedResourceSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListManagedResourcesResponseFilterSensitiveLog = (obj: ListManagedResourcesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListZonalShiftsRequestFilterSensitiveLog = (obj: ListZonalShiftsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ZonalShiftSummaryFilterSensitiveLog = (obj: ZonalShiftSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListZonalShiftsResponseFilterSensitiveLog = (obj: ListZonalShiftsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateZonalShiftRequestFilterSensitiveLog = (obj: UpdateZonalShiftRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartZonalShiftRequestFilterSensitiveLog = (obj: StartZonalShiftRequest): any => ({
  ...obj,
});
