// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { EC2InstanceConnectServiceException as __BaseException } from "./EC2InstanceConnectServiceException";

/**
 * <p>Either your AWS credentials are not valid or you do not have access to the EC2 instance.</p>
 */
export class AuthException extends __BaseException {
  readonly name: "AuthException" = "AuthException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * <p>The specified instance was not found.</p>
 */
export class EC2InstanceNotFoundException extends __BaseException {
  readonly name: "EC2InstanceNotFoundException" = "EC2InstanceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * <p>Unable to connect because the instance is not in a valid state.
 *             Connecting to a stopped or terminated instance is not supported. If the instance is stopped,
 *             start your instance, and try to connect again.</p>
 */
export class EC2InstanceStateInvalidException extends __BaseException {
  readonly name: "EC2InstanceStateInvalidException" = "EC2InstanceStateInvalidException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * <p>The instance type is not supported for connecting via the serial console. Only Nitro
 *             instance types are currently supported.</p>
 */
export class EC2InstanceTypeInvalidException extends __BaseException {
  readonly name: "EC2InstanceTypeInvalidException" = "EC2InstanceTypeInvalidException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * <p>The instance is currently unavailable. Wait a few minutes and try again.</p>
 */
export class EC2InstanceUnavailableException extends __BaseException {
  readonly name: "EC2InstanceUnavailableException" = "EC2InstanceUnavailableException";
  readonly $fault: "server" = "server";
  Message?: string;
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
 * <p>One of the parameters is not valid.</p>
 */
export class InvalidArgsException extends __BaseException {
  readonly name: "InvalidArgsException" = "InvalidArgsException";
  readonly $fault: "client" = "client";
  Message?: string;
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

export interface SendSerialConsoleSSHPublicKeyRequest {
  /**
   * <p>The ID of the EC2 instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The serial port of the EC2 instance. Currently only port 0 is supported.</p>
   *         <p>Default: 0</p>
   */
  SerialPort?: number;

  /**
   * <p>The public key material. To use the public key, you must have the matching private
   *             key. For information about the supported key formats and lengths, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#how-to-generate-your-own-key-and-import-it-to-aws">Requirements for key pairs</a> in the <i>Amazon EC2 User
   *             Guide</i>.</p>
   */
  SSHPublicKey: string | undefined;
}

export interface SendSerialConsoleSSHPublicKeyResponse {
  /**
   * <p>The ID of the request. Please provide this ID when contacting AWS Support for assistance.</p>
   */
  RequestId?: string;

  /**
   * <p>Is true if the request succeeds and an error otherwise.</p>
   */
  Success?: boolean;
}

/**
 * <p>Your account is not authorized to use the EC2 Serial Console. To authorize your
 *             account, run the EnableSerialConsoleAccess API. For more information, see
 *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableSerialConsoleAccess.html">EnableSerialConsoleAccess</a> in the <i>Amazon EC2 API Reference</i>.</p>
 */
export class SerialConsoleAccessDisabledException extends __BaseException {
  readonly name: "SerialConsoleAccessDisabledException" = "SerialConsoleAccessDisabledException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * <p>The instance currently has 1 active serial console session. Only 1 session is supported at a time.</p>
 */
export class SerialConsoleSessionLimitExceededException extends __BaseException {
  readonly name: "SerialConsoleSessionLimitExceededException" = "SerialConsoleSessionLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * <p>Unable to start a serial console session. Please try again.</p>
 */
export class SerialConsoleSessionUnavailableException extends __BaseException {
  readonly name: "SerialConsoleSessionUnavailableException" = "SerialConsoleSessionUnavailableException";
  readonly $fault: "server" = "server";
  Message?: string;
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
 * <p>The service encountered an error. Follow the instructions in the error message and try again.</p>
 */
export class ServiceException extends __BaseException {
  readonly name: "ServiceException" = "ServiceException";
  readonly $fault: "server" = "server";
  Message?: string;
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
 * <p>The requests were made too frequently and have been throttled. Wait a while and try again.
 *             To increase the limit on your request frequency, contact AWS Support.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string;
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

export interface SendSSHPublicKeyRequest {
  /**
   * <p>The ID of the EC2 instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The OS user on the EC2 instance for whom the key can be used to authenticate.</p>
   */
  InstanceOSUser: string | undefined;

  /**
   * <p>The public key material. To use the public key, you must have the matching private key.</p>
   */
  SSHPublicKey: string | undefined;

  /**
   * <p>The Availability Zone in which the EC2 instance was launched.</p>
   */
  AvailabilityZone?: string;
}

export interface SendSSHPublicKeyResponse {
  /**
   * <p>The ID of the request. Please provide this ID when contacting AWS Support for assistance.</p>
   */
  RequestId?: string;

  /**
   * <p>Is true if the request succeeds and an error otherwise.</p>
   */
  Success?: boolean;
}

/**
 * @internal
 */
export const SendSerialConsoleSSHPublicKeyRequestFilterSensitiveLog = (
  obj: SendSerialConsoleSSHPublicKeyRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendSerialConsoleSSHPublicKeyResponseFilterSensitiveLog = (
  obj: SendSerialConsoleSSHPublicKeyResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendSSHPublicKeyRequestFilterSensitiveLog = (obj: SendSSHPublicKeyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendSSHPublicKeyResponseFilterSensitiveLog = (obj: SendSSHPublicKeyResponse): any => ({
  ...obj,
});
