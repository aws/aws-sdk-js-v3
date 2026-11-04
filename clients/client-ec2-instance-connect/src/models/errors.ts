// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { EC2InstanceConnectServiceException as __BaseException } from "./EC2InstanceConnectServiceException";

/**
 * Either your AWS credentials are not valid or you do not have access to the EC2 instance.
 *
 * @public
 */
export class AuthException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ec2instanceconnect#AuthException";
  readonly name = "AuthException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AuthException, __BaseException>) {
    super({
      name: "AuthException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AuthException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified instance was not found.
 *
 * @public
 */
export class EC2InstanceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ec2instanceconnect#EC2InstanceNotFoundException";
  readonly name = "EC2InstanceNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EC2InstanceNotFoundException, __BaseException>) {
    super({
      name: "EC2InstanceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EC2InstanceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Unable to connect because the instance is not in a valid state. Connecting to a stopped or terminated instance is not supported. If the instance is stopped, start your instance, and try to connect again.
 *
 * @public
 */
export class EC2InstanceStateInvalidException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ec2instanceconnect#EC2InstanceStateInvalidException";
  readonly name = "EC2InstanceStateInvalidException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EC2InstanceStateInvalidException, __BaseException>) {
    super({
      name: "EC2InstanceStateInvalidException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EC2InstanceStateInvalidException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The instance type is not supported for connecting via the serial console. Only Nitro instance types are currently supported.
 *
 * @public
 */
export class EC2InstanceTypeInvalidException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ec2instanceconnect#EC2InstanceTypeInvalidException";
  readonly name = "EC2InstanceTypeInvalidException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EC2InstanceTypeInvalidException, __BaseException>) {
    super({
      name: "EC2InstanceTypeInvalidException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EC2InstanceTypeInvalidException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The instance is currently unavailable. Wait a few minutes and try again.
 *
 * @public
 */
export class EC2InstanceUnavailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ec2instanceconnect#EC2InstanceUnavailableException";
  readonly name = "EC2InstanceUnavailableException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EC2InstanceUnavailableException, __BaseException>) {
    super({
      name: "EC2InstanceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, EC2InstanceUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * One of the parameters is not valid.
 *
 * @public
 */
export class InvalidArgsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ec2instanceconnect#InvalidArgsException";
  readonly name = "InvalidArgsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArgsException, __BaseException>) {
    super({
      name: "InvalidArgsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArgsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Your account is not authorized to use the EC2 Serial Console. To authorize your account, run the EnableSerialConsoleAccess API. For more information, see [EnableSerialConsoleAccess](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableSerialConsoleAccess.html) in the *Amazon EC2 API Reference*.
 *
 * @public
 */
export class SerialConsoleAccessDisabledException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ec2instanceconnect#SerialConsoleAccessDisabledException";
  readonly name = "SerialConsoleAccessDisabledException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SerialConsoleAccessDisabledException, __BaseException>) {
    super({
      name: "SerialConsoleAccessDisabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SerialConsoleAccessDisabledException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The instance currently has 1 active serial console session. Only 1 session is supported at a time.
 *
 * @public
 */
export class SerialConsoleSessionLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ec2instanceconnect#SerialConsoleSessionLimitExceededException";
  readonly name = "SerialConsoleSessionLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SerialConsoleSessionLimitExceededException, __BaseException>) {
    super({
      name: "SerialConsoleSessionLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SerialConsoleSessionLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Unable to start a serial console session. Please try again.
 *
 * @public
 */
export class SerialConsoleSessionUnavailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ec2instanceconnect#SerialConsoleSessionUnavailableException";
  readonly name = "SerialConsoleSessionUnavailableException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SerialConsoleSessionUnavailableException, __BaseException>) {
    super({
      name: "SerialConsoleSessionUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, SerialConsoleSessionUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Your instance's BIOS version is unsupported for serial console connection. Reboot your instance to update its BIOS, and then try again to connect.
 *
 * @public
 */
export class SerialConsoleSessionUnsupportedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ec2instanceconnect#SerialConsoleSessionUnsupportedException";
  readonly name = "SerialConsoleSessionUnsupportedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SerialConsoleSessionUnsupportedException, __BaseException>) {
    super({
      name: "SerialConsoleSessionUnsupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SerialConsoleSessionUnsupportedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The service encountered an error. Follow the instructions in the error message and try again.
 *
 * @public
 */
export class ServiceException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ec2instanceconnect#ServiceException";
  readonly name = "ServiceException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceException, __BaseException>) {
    super({
      name: "ServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The requests were made too frequently and have been throttled. Wait a while and try again. To increase the limit on your request frequency, contact AWS Support.
 *
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ec2instanceconnect#ThrottlingException";
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}
