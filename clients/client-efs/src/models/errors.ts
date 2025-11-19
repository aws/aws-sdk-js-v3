// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { EFSServiceException as __BaseException } from "./EFSServiceException";

/**
 * <p>Returned if the access point that you are trying to create already exists, with the
 *             creation token you provided in the request.</p>
 * @public
 */
export class AccessPointAlreadyExists extends __BaseException {
  readonly name = "AccessPointAlreadyExists" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;

  AccessPointId: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessPointAlreadyExists, __BaseException>) {
    super({
      name: "AccessPointAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessPointAlreadyExists.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
    this.AccessPointId = opts.AccessPointId;
  }
}

/**
 * <p>Returned if the Amazon Web Services account has already created the maximum number of access points
 *             allowed per file system. For more informaton, see <a href="https://docs.aws.amazon.com/efs/latest/ug/limits.html#limits-efs-resources-per-account-per-region">https://docs.aws.amazon.com/efs/latest/ug/limits.html#limits-efs-resources-per-account-per-region</a>.</p>
 * @public
 */
export class AccessPointLimitExceeded extends __BaseException {
  readonly name = "AccessPointLimitExceeded" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessPointLimitExceeded, __BaseException>) {
    super({
      name: "AccessPointLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessPointLimitExceeded.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if the specified <code>AccessPointId</code> value doesn't exist in the
 *             requester's Amazon Web Services account.</p>
 * @public
 */
export class AccessPointNotFound extends __BaseException {
  readonly name = "AccessPointNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessPointNotFound, __BaseException>) {
    super({
      name: "AccessPointNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessPointNotFound.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if the Availability Zone that was specified for a mount target is
 *             different from the Availability Zone that was specified for One Zone storage.
 *             For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/availability-durability.html">Regional and One Zone storage redundancy</a>.</p>
 * @public
 */
export class AvailabilityZonesMismatch extends __BaseException {
  readonly name = "AvailabilityZonesMismatch" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AvailabilityZonesMismatch, __BaseException>) {
    super({
      name: "AvailabilityZonesMismatch",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AvailabilityZonesMismatch.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if the request is malformed or contains an error such as an invalid
 *             parameter value or a missing required parameter.</p>
 * @public
 */
export class BadRequest extends __BaseException {
  readonly name = "BadRequest" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequest, __BaseException>) {
    super({
      name: "BadRequest",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequest.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if the source file system in a replication is encrypted but the destination file system is unencrypted.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
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
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the
 *             requester's Amazon Web Services account.</p>
 * @public
 */
export class FileSystemNotFound extends __BaseException {
  readonly name = "FileSystemNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FileSystemNotFound, __BaseException>) {
    super({
      name: "FileSystemNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FileSystemNotFound.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if the file system's lifecycle state is not "available".</p>
 * @public
 */
export class IncorrectFileSystemLifeCycleState extends __BaseException {
  readonly name = "IncorrectFileSystemLifeCycleState" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncorrectFileSystemLifeCycleState, __BaseException>) {
    super({
      name: "IncorrectFileSystemLifeCycleState",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncorrectFileSystemLifeCycleState.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if an error occurred on the server side.</p>
 * @public
 */
export class InternalServerError extends __BaseException {
  readonly name = "InternalServerError" as const;
  readonly $fault = "server" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerError, __BaseException>) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerError.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned when the <code>CreateAccessPoint</code> API action is called too quickly and
 *             the number of Access Points on the file system is nearing the
 *             <a href="https://docs.aws.amazon.com/efs/latest/ug/limits.html#limits-efs-resources-per-account-per-region">limit of 120</a>.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
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
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if the file system you are trying to create already exists, with the
 *             creation token you provided.</p>
 * @public
 */
export class FileSystemAlreadyExists extends __BaseException {
  readonly name = "FileSystemAlreadyExists" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;

  FileSystemId: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FileSystemAlreadyExists, __BaseException>) {
    super({
      name: "FileSystemAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FileSystemAlreadyExists.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
    this.FileSystemId = opts.FileSystemId;
  }
}

/**
 * <p>Returned if the Amazon Web Services account has already created the maximum number of file systems
 *             allowed per account.</p>
 * @public
 */
export class FileSystemLimitExceeded extends __BaseException {
  readonly name = "FileSystemLimitExceeded" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FileSystemLimitExceeded, __BaseException>) {
    super({
      name: "FileSystemLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FileSystemLimitExceeded.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if there's not enough capacity to provision additional throughput. This value
 *             might be returned when you try to create a file system in provisioned throughput mode,
 *             when you attempt to increase the provisioned throughput of an existing file system, or
 *             when you attempt to change an existing file system from Bursting Throughput to
 *             Provisioned Throughput mode. Try again later.</p>
 * @public
 */
export class InsufficientThroughputCapacity extends __BaseException {
  readonly name = "InsufficientThroughputCapacity" as const;
  readonly $fault = "server" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientThroughputCapacity, __BaseException>) {
    super({
      name: "InsufficientThroughputCapacity",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientThroughputCapacity.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if the throughput mode or amount of provisioned throughput can't be changed
 *             because the throughput limit of 1024 MiB/s has been reached.</p>
 * @public
 */
export class ThroughputLimitExceeded extends __BaseException {
  readonly name = "ThroughputLimitExceeded" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThroughputLimitExceeded, __BaseException>) {
    super({
      name: "ThroughputLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThroughputLimitExceeded.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if the requested Amazon EFS functionality is not available in the specified Availability Zone.</p>
 * @public
 */
export class UnsupportedAvailabilityZone extends __BaseException {
  readonly name = "UnsupportedAvailabilityZone" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedAvailabilityZone, __BaseException>) {
    super({
      name: "UnsupportedAvailabilityZone",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedAvailabilityZone.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if the request specified an <code>IpAddress</code> that is already in use
 *             in the subnet.</p>
 * @public
 */
export class IpAddressInUse extends __BaseException {
  readonly name = "IpAddressInUse" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IpAddressInUse, __BaseException>) {
    super({
      name: "IpAddressInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IpAddressInUse.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if the mount target would violate one of the specified restrictions based
 *             on the file system's existing mount targets.</p>
 * @public
 */
export class MountTargetConflict extends __BaseException {
  readonly name = "MountTargetConflict" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MountTargetConflict, __BaseException>) {
    super({
      name: "MountTargetConflict",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MountTargetConflict.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>The calling account has reached the limit for elastic network interfaces for the
 *             specific Amazon Web Services Region. Either delete some network interfaces or request
 *             that the account quota be raised. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html">Amazon VPC Quotas</a>
 *             in the <i>Amazon VPC User Guide</i> (see the <b>Network
 *                 interfaces per Region</b> entry in the <b>Network
 *                 interfaces</b> table). </p>
 * @public
 */
export class NetworkInterfaceLimitExceeded extends __BaseException {
  readonly name = "NetworkInterfaceLimitExceeded" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NetworkInterfaceLimitExceeded, __BaseException>) {
    super({
      name: "NetworkInterfaceLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NetworkInterfaceLimitExceeded.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if <code>IpAddress</code> was not specified in the request and there are
 *             no free IP addresses in the subnet.</p>
 * @public
 */
export class NoFreeAddressesInSubnet extends __BaseException {
  readonly name = "NoFreeAddressesInSubnet" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoFreeAddressesInSubnet, __BaseException>) {
    super({
      name: "NoFreeAddressesInSubnet",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoFreeAddressesInSubnet.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if the number of <code>SecurityGroups</code> specified in the request is
 *             greater than the limit, which is based on account quota.  Either delete some security groups
 *             or request that the account quota be raised. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html">Amazon VPC Quotas</a>
 *             in the <i>Amazon VPC User Guide</i> (see the <b>Security Groups</b>
 *             table).
 *         </p>
 * @public
 */
export class SecurityGroupLimitExceeded extends __BaseException {
  readonly name = "SecurityGroupLimitExceeded" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SecurityGroupLimitExceeded, __BaseException>) {
    super({
      name: "SecurityGroupLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SecurityGroupLimitExceeded.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if one of the specified security groups doesn't exist in the subnet's
 *             virtual private cloud (VPC).</p>
 * @public
 */
export class SecurityGroupNotFound extends __BaseException {
  readonly name = "SecurityGroupNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SecurityGroupNotFound, __BaseException>) {
    super({
      name: "SecurityGroupNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SecurityGroupNotFound.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if there is no subnet with ID <code>SubnetId</code> provided in the
 *             request.</p>
 * @public
 */
export class SubnetNotFound extends __BaseException {
  readonly name = "SubnetNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetNotFound, __BaseException>) {
    super({
      name: "SubnetNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetNotFound.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if the specified file system does not have a replication
 *             configuration.</p>
 * @public
 */
export class ReplicationNotFound extends __BaseException {
  readonly name = "ReplicationNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * <p>ReplicationNotFound</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReplicationNotFound, __BaseException>) {
    super({
      name: "ReplicationNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReplicationNotFound.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if the Backup service is not available in the Amazon Web Services Region in which the request was made.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
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
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if a file system has mount targets.</p>
 * @public
 */
export class FileSystemInUse extends __BaseException {
  readonly name = "FileSystemInUse" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FileSystemInUse, __BaseException>) {
    super({
      name: "FileSystemInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FileSystemInUse.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>The service timed out trying to fulfill the request, and the client should try the
 *             call again.</p>
 * @public
 */
export class DependencyTimeout extends __BaseException {
  readonly name = "DependencyTimeout" as const;
  readonly $fault = "server" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DependencyTimeout, __BaseException>) {
    super({
      name: "DependencyTimeout",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, DependencyTimeout.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if there is no mount target with the specified ID found in the
 *             caller's Amazon Web Services account.</p>
 * @public
 */
export class MountTargetNotFound extends __BaseException {
  readonly name = "MountTargetNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MountTargetNotFound, __BaseException>) {
    super({
      name: "MountTargetNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MountTargetNotFound.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if <code>no backup</code> is specified for a One Zone EFS file system.</p>
 * @public
 */
export class PolicyNotFound extends __BaseException {
  readonly name = "PolicyNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicyNotFound, __BaseException>) {
    super({
      name: "PolicyNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicyNotFound.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if the mount target is not in the correct state for the
 *             operation.</p>
 * @public
 */
export class IncorrectMountTargetState extends __BaseException {
  readonly name = "IncorrectMountTargetState" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncorrectMountTargetState, __BaseException>) {
    super({
      name: "IncorrectMountTargetState",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncorrectMountTargetState.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if the <code>FileSystemPolicy</code> is malformed or contains an error such
 *             as a parameter value that is not valid or a missing required parameter. Returned in the
 *             case of a policy lockout safety check error.</p>
 * @public
 */
export class InvalidPolicyException extends __BaseException {
  readonly name = "InvalidPolicyException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPolicyException, __BaseException>) {
    super({
      name: "InvalidPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPolicyException.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if you don’t wait at least 24 hours before either changing the throughput mode, or
 *             decreasing the Provisioned Throughput value.</p>
 * @public
 */
export class TooManyRequests extends __BaseException {
  readonly name = "TooManyRequests" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequests, __BaseException>) {
    super({
      name: "TooManyRequests",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequests.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if the file system is already included in a replication configuration.></p>
 * @public
 */
export class ReplicationAlreadyExists extends __BaseException {
  readonly name = "ReplicationAlreadyExists" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReplicationAlreadyExists, __BaseException>) {
    super({
      name: "ReplicationAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReplicationAlreadyExists.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}
