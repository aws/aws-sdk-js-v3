// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { KafkaServiceException as __BaseException } from "./KafkaServiceException";

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name = "BadRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
  Message?: string | undefined;
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
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class ForbiddenException extends __BaseException {
  readonly name = "ForbiddenException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class InternalServerErrorException extends __BaseException {
  readonly name = "InternalServerErrorException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerErrorException, __BaseException>) {
    super({
      name: "InternalServerErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerErrorException.prototype);
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name = "NotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
  Message?: string | undefined;
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
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name = "ServiceUnavailableException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
  Message?: string | undefined;
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
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name = "TooManyRequestsException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name = "UnauthorizedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class ClusterConnectivityException extends __BaseException {
  readonly name = "ClusterConnectivityException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterConnectivityException, __BaseException>) {
    super({
      name: "ClusterConnectivityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterConnectivityException.prototype);
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
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
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class ControllerMovedException extends __BaseException {
  readonly name = "ControllerMovedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ControllerMovedException, __BaseException>) {
    super({
      name: "ControllerMovedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ControllerMovedException.prototype);
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class GroupSubscribedToTopicException extends __BaseException {
  readonly name = "GroupSubscribedToTopicException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GroupSubscribedToTopicException, __BaseException>) {
    super({
      name: "GroupSubscribedToTopicException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GroupSubscribedToTopicException.prototype);
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class KafkaRequestException extends __BaseException {
  readonly name = "KafkaRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KafkaRequestException, __BaseException>) {
    super({
      name: "KafkaRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KafkaRequestException.prototype);
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class KafkaTimeoutException extends __BaseException {
  readonly name = "KafkaTimeoutException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KafkaTimeoutException, __BaseException>) {
    super({
      name: "KafkaTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KafkaTimeoutException.prototype);
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class NotControllerException extends __BaseException {
  readonly name = "NotControllerException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotControllerException, __BaseException>) {
    super({
      name: "NotControllerException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotControllerException.prototype);
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class ReassignmentInProgressException extends __BaseException {
  readonly name = "ReassignmentInProgressException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReassignmentInProgressException, __BaseException>) {
    super({
      name: "ReassignmentInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReassignmentInProgressException.prototype);
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class TopicExistsException extends __BaseException {
  readonly name = "TopicExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TopicExistsException, __BaseException>) {
    super({
      name: "TopicExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TopicExistsException.prototype);
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class UnknownTopicOrPartitionException extends __BaseException {
  readonly name = "UnknownTopicOrPartitionException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnknownTopicOrPartitionException, __BaseException>) {
    super({
      name: "UnknownTopicOrPartitionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnknownTopicOrPartitionException.prototype);
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}
