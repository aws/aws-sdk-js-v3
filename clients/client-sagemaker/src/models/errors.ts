// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SageMakerServiceException as __BaseException } from "./SageMakerServiceException";

/**
 * <p> You have exceeded an SageMaker resource limit. For example, you might have too many training jobs created. </p>
 * @public
 */
export class ResourceLimitExceeded extends __BaseException {
  readonly name = "ResourceLimitExceeded" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceLimitExceeded, __BaseException>) {
    super({
      name: "ResourceLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceLimitExceeded.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Resource being access is not found.</p>
 * @public
 */
export class ResourceNotFound extends __BaseException {
  readonly name = "ResourceNotFound" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFound, __BaseException>) {
    super({
      name: "ResourceNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFound.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>There was a conflict when you attempted to modify a SageMaker entity such as an <code>Experiment</code> or <code>Artifact</code>.</p>
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
 * <p>Resource being accessed is in use.</p>
 * @public
 */
export class ResourceInUse extends __BaseException {
  readonly name = "ResourceInUse" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUse, __BaseException>) {
    super({
      name: "ResourceInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUse.prototype);
    this.Message = opts.Message;
  }
}
