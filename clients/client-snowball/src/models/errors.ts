// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { SnowballServiceException as __BaseException } from "./SnowballServiceException";

/**
 * The action can't be performed because the job's current state doesn't allow that action to be performed.
 *
 * @public
 */
export class InvalidJobStateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.snowball#InvalidJobStateException";
  readonly name = "InvalidJobStateException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidJobStateException, __BaseException>) {
    super({
      name: "InvalidJobStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidJobStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified resource can't be found. Check the information you provided in your last request, and try again.
 *
 * @public
 */
export class InvalidResourceException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.snowball#InvalidResourceException";
  readonly name = "InvalidResourceException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The provided resource value is invalid.
   *
   * @public
   */
  ResourceType?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceException, __BaseException>) {
    super({
      name: "InvalidResourceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * The provided Key Management Service key lacks the permissions to perform the specified CreateJob or UpdateJob action.
 *
 * @public
 */
export class KMSRequestFailedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.snowball#KMSRequestFailedException";
  readonly name = "KMSRequestFailedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSRequestFailedException, __BaseException>) {
    super({
      name: "KMSRequestFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSRequestFailedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The address provided was invalid. Check the address with your region's carrier, and try again.
 *
 * @public
 */
export class InvalidAddressException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.snowball#InvalidAddressException";
  readonly name = "InvalidAddressException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAddressException, __BaseException>) {
    super({
      name: "InvalidAddressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAddressException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The address is either outside the serviceable area for your region, or an error occurred. Check the address with your region's carrier and try again. If the issue persists, contact Amazon Web Services Support.
 *
 * @public
 */
export class UnsupportedAddressException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.snowball#UnsupportedAddressException";
  readonly name = "UnsupportedAddressException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedAddressException, __BaseException>) {
    super({
      name: "UnsupportedAddressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedAddressException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Your user lacks the necessary Amazon EC2 permissions to perform the attempted action.
 *
 * @public
 */
export class Ec2RequestFailedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.snowball#Ec2RequestFailedException";
  readonly name = "Ec2RequestFailedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<Ec2RequestFailedException, __BaseException>) {
    super({
      name: "Ec2RequestFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, Ec2RequestFailedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Job or cluster creation failed. One or more inputs were invalid. Confirm that the CreateClusterRequest$SnowballType value supports your CreateJobRequest$JobType, and try again.
 *
 * @public
 */
export class InvalidInputCombinationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.snowball#InvalidInputCombinationException";
  readonly name = "InvalidInputCombinationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInputCombinationException, __BaseException>) {
    super({
      name: "InvalidInputCombinationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInputCombinationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Job creation failed. Currently, clusters support five nodes. If you have fewer than five nodes for your cluster and you have more nodes to create for this cluster, try again and create jobs until your cluster has exactly five nodes.
 *
 * @public
 */
export class ClusterLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.snowball#ClusterLimitExceededException";
  readonly name = "ClusterLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterLimitExceededException, __BaseException>) {
    super({
      name: "ClusterLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * You get this exception when you call `CreateReturnShippingLabel` more than once when other requests are not completed.
 *
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.snowball#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * You get this resource when you call `CreateReturnShippingLabel` more than once when other requests are not completed. .
   *
   * @public
   */
  ConflictResource?: string | undefined;

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
    this.ConflictResource = opts.ConflictResource;
    this.Message = opts.Message;
  }
}

/**
 * You get this exception if you call `CreateReturnShippingLabel` and a valid return shipping label already exists. In this case, use `DescribeReturnShippingLabel` to get the URL.
 *
 * @public
 */
export class ReturnShippingLabelAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.snowball#ReturnShippingLabelAlreadyExistsException";
  readonly name = "ReturnShippingLabelAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReturnShippingLabelAlreadyExistsException, __BaseException>) {
    super({
      name: "ReturnShippingLabelAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReturnShippingLabelAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The `NextToken` string was altered unexpectedly, and the operation has stopped. Run the operation without changing the `NextToken` string, and try again.
 *
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.snowball#InvalidNextTokenException";
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
