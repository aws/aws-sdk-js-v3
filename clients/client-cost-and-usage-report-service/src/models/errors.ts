// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CostAndUsageReportServiceServiceException as __BaseException } from "./CostAndUsageReportServiceServiceException";

/**
 * <p>An error on the server occurred during the processing of your request. Try again later.</p>
 * @public
 */
export class InternalErrorException extends __BaseException {
  readonly name = "InternalErrorException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>A message to show the detail of the exception.</p>
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
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message to show the detail of the exception.</p>
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
 * <p>The specified report (<code>ReportName</code>) in the request doesn't exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message to show the detail of the exception.</p>
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
 * <p>A report with the specified name already exists in the account. Specify a different report name.</p>
 * @public
 */
export class DuplicateReportNameException extends __BaseException {
  readonly name = "DuplicateReportNameException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message to show the detail of the exception.</p>
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
 * <p>This account already has five reports defined. To define a new report, you must delete an existing report.</p>
 * @public
 */
export class ReportLimitReachedException extends __BaseException {
  readonly name = "ReportLimitReachedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message to show the detail of the exception.</p>
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
