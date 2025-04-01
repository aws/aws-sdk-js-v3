// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DocumentType as __DocumentType } from "@smithy/types";

import { InspectorScanServiceException as __BaseException } from "./InspectorScanServiceException";

/**
 * <p>You do not have sufficient access to perform this action.
 *   </p>
 * @public
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

/**
 * @public
 * @enum
 */
export const InternalServerExceptionReason = {
  FAILED_TO_GENERATE_SBOM: "FAILED_TO_GENERATE_SBOM",
  OTHER: "OTHER",
} as const;

/**
 * @public
 */
export type InternalServerExceptionReason =
  (typeof InternalServerExceptionReason)[keyof typeof InternalServerExceptionReason];

/**
 * <p>The request processing has failed because of an unknown error, exception or failure.
 *
 *   </p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * <p>The reason for the validation failure.</p>
   * @public
   */
  reason: InternalServerExceptionReason | undefined;

  /**
   * <p>The number of seconds to wait before retrying the request.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

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
    this.reason = opts.reason;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
 * @enum
 */
export const OutputFormat = {
  CYCLONE_DX_1_5: "CYCLONE_DX_1_5",
  INSPECTOR: "INSPECTOR",
} as const;

/**
 * @public
 */
export type OutputFormat = (typeof OutputFormat)[keyof typeof OutputFormat];

/**
 * @public
 */
export interface ScanSbomRequest {
  /**
   * <p>The JSON file for the SBOM you want to scan. The SBOM must be in CycloneDX 1.5 format.</p>
   * @public
   */
  sbom: __DocumentType | undefined;

  /**
   * <p>The output format for the vulnerability report.</p>
   * @public
   */
  outputFormat?: OutputFormat | undefined;
}

/**
 * @public
 */
export interface ScanSbomResponse {
  /**
   * <p>The vulnerability report for the scanned SBOM.</p>
   * @public
   */
  sbom?: __DocumentType | undefined;
}

/**
 * <p>The request was denied due to request throttling.
 *
 *   </p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * <p>The number of seconds to wait before retrying the request.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

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
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The request has failed validation due to missing required fields or having invalid inputs.
 *    </p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the validation exception.
   *
   *   </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The validation exception message.
   *   </p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  OTHER: "OTHER",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
  UNSUPPORTED_SBOM_TYPE: "UNSUPPORTED_SBOM_TYPE",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>The request has failed validation due to missing required fields or having invalid inputs.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The reason for the validation failure.</p>
   * @public
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * <p>The fields that failed validation.</p>
   * @public
   */
  fields?: ValidationExceptionField[] | undefined;

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
    this.fields = opts.fields;
  }
}
