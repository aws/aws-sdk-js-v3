// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { MigrationHubConfigServiceException as __BaseException } from "./MigrationHubConfigServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

export enum TargetType {
  ACCOUNT = "ACCOUNT",
}

/**
 * <p>The target parameter specifies the identifier to which the home region is applied, which
 *       is always an <code>ACCOUNT</code>. It applies the home region to the current
 *         <code>ACCOUNT</code>.</p>
 */
export interface Target {
  /**
   * <p>The target type is always an <code>ACCOUNT</code>.</p>
   */
  Type: TargetType | string | undefined;

  /**
   * <p>The <code>TargetID</code> is a 12-character identifier of the <code>ACCOUNT</code> for
   *       which the control was created. (This must be the current account.) </p>
   */
  Id?: string;
}

export interface CreateHomeRegionControlRequest {
  /**
   * <p>The name of the home region of the calling account.</p>
   */
  HomeRegion: string | undefined;

  /**
   * <p>The account for which this command sets up a home region control. The <code>Target</code>
   *       is always of type <code>ACCOUNT</code>.</p>
   */
  Target: Target | undefined;

  /**
   * <p>Optional Boolean flag to indicate whether any effect should take place. It tests whether
   *       the caller has permission to make the call.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>A home region control is an object that specifies the home region for an account, with
 *       some additional information. It contains a target (always of type <code>ACCOUNT</code>), an
 *       ID, and a time at which the home region was set.</p>
 */
export interface HomeRegionControl {
  /**
   * <p>A unique identifier that's generated for each home region control. It's always a string
   *       that begins with "hrc-" followed by 12 lowercase letters and numbers.</p>
   */
  ControlId?: string;

  /**
   * <p>The AWS Region that's been set as home region. For example, "us-west-2" or "eu-central-1"
   *       are valid home regions.</p>
   */
  HomeRegion?: string;

  /**
   * <p>The target parameter specifies the identifier to which the home region is applied, which
   *       is always an <code>ACCOUNT</code>. It applies the home region to the current
   *         <code>ACCOUNT</code>.</p>
   */
  Target?: Target;

  /**
   * <p>A timestamp representing the time when the customer called
   *         <code>CreateHomeregionControl</code> and set the home region for the account.</p>
   */
  RequestedTime?: Date;
}

export interface CreateHomeRegionControlResult {
  /**
   * <p>This object is the <code>HomeRegionControl</code> object that's returned by a successful
   *       call to <code>CreateHomeRegionControl</code>.</p>
   */
  HomeRegionControl?: HomeRegionControl;
}

/**
 * <p>Exception raised to indicate that authorization of an action was successful, when the
 *         <code>DryRun</code> flag is set to true.</p>
 */
export class DryRunOperation extends __BaseException {
  readonly name: "DryRunOperation" = "DryRunOperation";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DryRunOperation, __BaseException>) {
    super({
      name: "DryRunOperation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DryRunOperation.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Exception raised when an internal, configuration, or dependency error is
 *       encountered.</p>
 */
export class InternalServerError extends __BaseException {
  readonly name: "InternalServerError" = "InternalServerError";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerError, __BaseException>) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerError.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Exception raised when the provided input violates a policy constraint or is entered in the
 *       wrong format or data type.</p>
 */
export class InvalidInputException extends __BaseException {
  readonly name: "InvalidInputException" = "InvalidInputException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInputException, __BaseException>) {
    super({
      name: "InvalidInputException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInputException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Exception raised when a request fails due to temporary unavailability of the
 *       service.</p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The number of seconds the caller should wait before retrying.</p>
   */
  RetryAfterSeconds?: number;
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
    this.Message = opts.Message;
    this.RetryAfterSeconds = opts.RetryAfterSeconds;
  }
}

export interface DescribeHomeRegionControlsRequest {
  /**
   * <p>The <code>ControlID</code> is a unique identifier string of your
   *         <code>HomeRegionControl</code> object.</p>
   */
  ControlId?: string;

  /**
   * <p>The name of the home region you'd like to view.</p>
   */
  HomeRegion?: string;

  /**
   * <p>The target parameter specifies the identifier to which the home region is applied, which
   *       is always of type <code>ACCOUNT</code>. It applies the home region to the current
   *         <code>ACCOUNT</code>.</p>
   */
  Target?: Target;

  /**
   * <p>The maximum number of filtering results to display per page. </p>
   */
  MaxResults?: number;

  /**
   * <p>If a <code>NextToken</code> was returned by a previous call, more results are available.
   *       To retrieve the next page of results, make the call again using the returned token in
   *         <code>NextToken</code>.</p>
   */
  NextToken?: string;
}

export interface DescribeHomeRegionControlsResult {
  /**
   * <p>An array that contains your <code>HomeRegionControl</code> objects.</p>
   */
  HomeRegionControls?: HomeRegionControl[];

  /**
   * <p>If a <code>NextToken</code> was returned by a previous call, more results are available.
   *       To retrieve the next page of results, make the call again using the returned token in
   *         <code>NextToken</code>.</p>
   */
  NextToken?: string;
}

export interface GetHomeRegionRequest {}

export interface GetHomeRegionResult {
  /**
   * <p>The name of the home region of the calling account.</p>
   */
  HomeRegion?: string;
}

/**
 * @internal
 */
export const TargetFilterSensitiveLog = (obj: Target): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateHomeRegionControlRequestFilterSensitiveLog = (obj: CreateHomeRegionControlRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HomeRegionControlFilterSensitiveLog = (obj: HomeRegionControl): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateHomeRegionControlResultFilterSensitiveLog = (obj: CreateHomeRegionControlResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeHomeRegionControlsRequestFilterSensitiveLog = (obj: DescribeHomeRegionControlsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeHomeRegionControlsResultFilterSensitiveLog = (obj: DescribeHomeRegionControlsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetHomeRegionRequestFilterSensitiveLog = (obj: GetHomeRegionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetHomeRegionResultFilterSensitiveLog = (obj: GetHomeRegionResult): any => ({
  ...obj,
});
