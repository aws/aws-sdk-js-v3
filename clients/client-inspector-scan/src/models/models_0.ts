// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { DocumentType as __DocumentType } from "@smithy/types";

import { InspectorScanServiceException as __BaseException } from "./InspectorScanServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action.
 *   </p>
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
 * @public
 * <p>The request processing has failed because of an unknown error, exception or failure.
 *
 *   </p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @public
   * <p>The reason for the validation failure.</p>
   */
  reason: InternalServerExceptionReason | undefined;

  /**
   * @public
   * <p>The number of seconds to wait before retrying the request.</p>
   */
  retryAfterSeconds?: number;

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
   * @public
   * <p>The JSON file for the SBOM you want to scan. The SBOM must be in CycloneDX 1.5 format.</p>
   */
  sbom: __DocumentType | undefined;

  /**
   * @public
   * <p>The output format for the vulnerability report.</p>
   */
  outputFormat?: OutputFormat;
}

/**
 * @public
 */
export interface ScanSbomResponse {
  /**
   * @public
   * <p>The vulnerability report for the scanned SBOM.</p>
   */
  sbom?: __DocumentType;
}

/**
 * @public
 * <p>The request was denied due to request throttling.
 *
 *   </p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * @public
   * <p>The number of seconds to wait before retrying the request.</p>
   */
  retryAfterSeconds?: number;

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
 * @public
 * <p>The request has failed validation due to missing required fields or having invalid inputs.
 *    </p>
 */
export interface ValidationExceptionField {
  /**
   * @public
   * <p>The name of the validation exception.
   *
   *   </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The validation exception message.
   *   </p>
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
 * @public
 * <p>The request has failed validation due to missing required fields or having invalid inputs.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The reason for the validation failure.</p>
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * @public
   * <p>The fields that failed validation.</p>
   */
  fields?: ValidationExceptionField[];

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
