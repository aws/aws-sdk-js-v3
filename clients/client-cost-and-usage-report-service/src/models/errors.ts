// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import {
  CostAndUsageReportServiceServiceException as __BaseException,
} from "./CostAndUsageReportServiceServiceException";

/**
 * An error on the server occurred during the processing of your request. Try again later.
 *
 * @public
 */
export class InternalErrorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.costandusagereportservice#InternalErrorException";
  readonly name = "InternalErrorException" as const;
  readonly $fault = "server" as const;
  /**
   * A message to show the detail of the exception.
   *
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalErrorException, __BaseException>) {
    super({
      name: "InternalErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalErrorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.costandusagereportservice#ValidationException";
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * A message to show the detail of the exception.
   *
   * @public
   */
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * The specified report (`ReportName`) in the request doesn't exist.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.costandusagereportservice#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * A message to show the detail of the exception.
   *
   * @public
   */
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * A report with the specified name already exists in the account. Specify a different report name.
 *
 * @public
 */
export class DuplicateReportNameException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.costandusagereportservice#DuplicateReportNameException";
  readonly name = "DuplicateReportNameException" as const;
  readonly $fault = "client" as const;
  /**
   * A message to show the detail of the exception.
   *
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateReportNameException, __BaseException>) {
    super({
      name: "DuplicateReportNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateReportNameException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * This account already has five reports defined. To define a new report, you must delete an existing report.
 *
 * @public
 */
export class ReportLimitReachedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.costandusagereportservice#ReportLimitReachedException";
  readonly name = "ReportLimitReachedException" as const;
  readonly $fault = "client" as const;
  /**
   * A message to show the detail of the exception.
   *
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReportLimitReachedException, __BaseException>) {
    super({
      name: "ReportLimitReachedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReportLimitReachedException.prototype);
    this.Message = opts.Message;
  }
}
