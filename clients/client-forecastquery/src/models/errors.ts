// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { ForecastqueryServiceException as __BaseException } from "./ForecastqueryServiceException";

/**
 * <p>The value is invalid or is too long.</p>
 * @public
 */
export class InvalidInputException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.forecastquery#InvalidInputException";
  readonly name = "InvalidInputException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
 * <p>The token is not valid. Tokens expire after 24 hours.</p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.forecastquery#InvalidNextTokenException";
  readonly name = "InvalidNextTokenException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The limit on the number of requests per second has been exceeded.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.forecastquery#LimitExceededException";
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified resource is in use.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.forecastquery#ResourceInUseException";
  readonly name = "ResourceInUseException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>We can't find that resource. Check the information that you've provided and try
 *       again.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.forecastquery#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
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
