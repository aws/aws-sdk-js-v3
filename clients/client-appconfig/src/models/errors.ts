// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { AppConfigServiceException as __BaseException } from "./AppConfigServiceException";
import { BadRequestReason, BytesMeasure } from "./enums";
import type { BadRequestDetails } from "./models_0";

/**
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name = "BadRequestException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Reason?: BadRequestReason | undefined;
  /**
   * <p>Detailed information about the input that failed to satisfy the constraints specified by
   *          a call.</p>
   * @public
   */
  Details?: BadRequestDetails | undefined;
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
    this.Message = opts.Message;
    this.Reason = opts.Reason;
    this.Details = opts.Details;
  }
}

/**
 * <p>There was an internal failure in the AppConfig service.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of one more AppConfig resources exceeds the maximum allowed. Verify that your
 *          environment doesn't exceed the following service quotas:</p>
 *          <p>Applications: 100 max</p>
 *          <p>Deployment strategies: 20 max</p>
 *          <p>Configuration profiles: 100 max per application</p>
 *          <p>Environments: 20 max per application</p>
 *          <p>To resolve this issue, you can delete one or more resources and try again. Or, you can
 *          request a quota increase. For more information about quotas and to request an increase, see
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/appconfig.html#limits_appconfig">Service quotas for AppConfig</a> in the Amazon Web Services General Reference.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested resource could not be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  ResourceName?: string | undefined;
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
    this.ResourceName = opts.ResourceName;
  }
}

/**
 * <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The configuration size is too large.</p>
 * @public
 */
export class PayloadTooLargeException extends __BaseException {
  readonly name = "PayloadTooLargeException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Measure?: BytesMeasure | undefined;
  Limit?: number | undefined;
  Size?: number | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PayloadTooLargeException, __BaseException>) {
    super({
      name: "PayloadTooLargeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PayloadTooLargeException.prototype);
    this.Message = opts.Message;
    this.Measure = opts.Measure;
    this.Limit = opts.Limit;
    this.Size = opts.Size;
  }
}
