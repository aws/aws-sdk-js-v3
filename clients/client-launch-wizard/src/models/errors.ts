// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { LaunchWizardServiceException as __BaseException } from "./LaunchWizardServiceException";

/**
 * <p>An internal error has occurred. Retry your request, but if the problem persists, contact
 *          us with details by posting a question on <a href="https://repost.aws/">re:Post</a>.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
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
 * <p>You have exceeded an Launch Wizard resource limit. For example, you might have too many
 *          deployments in progress.</p>
 * @public
 */
export class ResourceLimitException extends __BaseException {
  readonly name = "ResourceLimitException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceLimitException, __BaseException>) {
    super({
      name: "ResourceLimitException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceLimitException.prototype);
  }
}

/**
 * <p>The specified workload or deployment resource can't be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
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
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
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
