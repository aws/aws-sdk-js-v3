// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import type { ReferenceType } from "./enums";
import { LexModelBuildingServiceServiceException as __BaseException } from "./LexModelBuildingServiceServiceException";
import type { ResourceReference } from "./models_0";

/**
 * Your IAM user or role does not have permission to call the Amazon Lex V2 APIs required to migrate your bot.
 *
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lexmodelbuildingservice#AccessDeniedException";
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
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
 * The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.
 *
 * @public
 */
export class BadRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lexmodelbuildingservice#BadRequestException";
  readonly name = "BadRequestException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * There was a conflict processing the request. Try your request again.
 *
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lexmodelbuildingservice#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * An internal Amazon Lex error occurred. Try your request again.
 *
 * @public
 */
export class InternalFailureException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lexmodelbuildingservice#InternalFailureException";
  readonly name = "InternalFailureException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
  }
}

/**
 * The request exceeded a limit. Try your request again.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lexmodelbuildingservice#LimitExceededException";
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  retryAfterSeconds?: string | undefined;
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
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * The resource specified in the request was not found. Check the resource and try again.
 *
 * @public
 */
export class NotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lexmodelbuildingservice#NotFoundException";
  readonly name = "NotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
  }
}

/**
 * The checksum of the resource that you are trying to change does not match the checksum in the request. Check the resource's checksum and try again.
 *
 * @public
 */
export class PreconditionFailedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lexmodelbuildingservice#PreconditionFailedException";
  readonly name = "PreconditionFailedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PreconditionFailedException, __BaseException>) {
    super({
      name: "PreconditionFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PreconditionFailedException.prototype);
  }
}

/**
 * The resource that you are attempting to delete is referred to by another resource. Use this information to remove references to the resource that you are trying to delete.
 *
 * The body of the exception contains a JSON object that describes the resource.
 *
 * `\{ "resourceType": BOT | BOTALIAS | BOTCHANNEL | INTENT,`
 *
 * `"resourceReference": \{`
 *
 * `"name": string, "version": string \} \}`
 *
 * @public
 */
export class ResourceInUseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lexmodelbuildingservice#ResourceInUseException";
  readonly name = "ResourceInUseException" as const;
  readonly $fault = "client" as const;
  referenceType?: ReferenceType | undefined;
  /**
   * Describes the resource that refers to the resource that you are attempting to delete. This object is returned as part of the `ResourceInUseException` exception.
   *
   * @public
   */
  exampleReference?: ResourceReference | undefined;
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
    this.referenceType = opts.referenceType;
    this.exampleReference = opts.exampleReference;
  }
}
