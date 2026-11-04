// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { KinesisAnalyticsV2ServiceException as __BaseException } from "./KinesisAnalyticsV2ServiceException";

/**
 * Exception thrown as a result of concurrent modifications to an application. This error can be the result of attempting to modify an application without using the current application ID.
 *
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException";
  readonly name = "ConcurrentModificationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The user-provided application configuration is not valid.
 *
 * @public
 */
export class InvalidApplicationConfigurationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException";
  readonly name = "InvalidApplicationConfigurationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidApplicationConfigurationException, __BaseException>) {
    super({
      name: "InvalidApplicationConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidApplicationConfigurationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified input parameter value is not valid.
 *
 * @public
 */
export class InvalidArgumentException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException";
  readonly name = "InvalidArgumentException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArgumentException, __BaseException>) {
    super({
      name: "InvalidArgumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArgumentException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The request JSON is not valid for the operation.
 *
 * @public
 */
export class InvalidRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisanalyticsv2#InvalidRequestException";
  readonly name = "InvalidRequestException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The application is not available for this operation.
 *
 * @public
 */
export class ResourceInUseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisanalyticsv2#ResourceInUseException";
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
 * Specified application can't be found.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException";
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

/**
 * The user-provided application code (query) is not valid. This can be a simple syntax error.
 *
 * @public
 */
export class CodeValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisanalyticsv2#CodeValidationException";
  readonly name = "CodeValidationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CodeValidationException, __BaseException>) {
    super({
      name: "CodeValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CodeValidationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The number of allowed resources has been exceeded.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisanalyticsv2#LimitExceededException";
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
 * Application created with too many tags, or too many tags added to an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.
 *
 * @public
 */
export class TooManyTagsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisanalyticsv2#TooManyTagsException";
  readonly name = "TooManyTagsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
  }
}

/**
 * The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation.
 *
 * @public
 */
export class UnsupportedOperationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException";
  readonly name = "UnsupportedOperationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperationException, __BaseException>) {
    super({
      name: "UnsupportedOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Discovery failed to get a record from the streaming source because of the Kinesis Streams `ProvisionedThroughputExceededException`. For more information, see [GetRecords](http://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetRecords.html) in the Amazon Kinesis Streams API Reference.
 *
 * @public
 */
export class ResourceProvisionedThroughputExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisanalyticsv2#ResourceProvisionedThroughputExceededException";
  readonly name = "ResourceProvisionedThroughputExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceProvisionedThroughputExceededException, __BaseException>) {
    super({
      name: "ResourceProvisionedThroughputExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceProvisionedThroughputExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The service cannot complete the request.
 *
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisanalyticsv2#ServiceUnavailableException";
  readonly name = "ServiceUnavailableException" as const;
  readonly $fault = "server" as const;
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
    this.Message = opts.Message;
  }
}

/**
 * The data format is not valid. Kinesis Data Analytics cannot detect the schema for the given streaming source.
 *
 * @public
 */
export class UnableToDetectSchemaException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisanalyticsv2#UnableToDetectSchemaException";
  readonly name = "UnableToDetectSchemaException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * Raw stream data that was sampled to infer the schema.
   *
   * @public
   */
  RawInputRecords?: string[] | undefined;

  /**
   * Stream data that was modified by the processor specified in the `InputProcessingConfiguration` parameter.
   *
   * @public
   */
  ProcessedInputRecords?: string[] | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnableToDetectSchemaException, __BaseException>) {
    super({
      name: "UnableToDetectSchemaException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnableToDetectSchemaException.prototype);
    this.Message = opts.Message;
    this.RawInputRecords = opts.RawInputRecords;
    this.ProcessedInputRecords = opts.ProcessedInputRecords;
  }
}
