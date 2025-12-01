// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SnowballServiceException as __BaseException } from "./SnowballServiceException";

/**
 * <p>The action can't be performed because the job's current state doesn't allow that action
 *       to be performed.</p>
 * @public
 */
export class InvalidJobStateException extends __BaseException {
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
 * <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 * @public
 */
export class InvalidResourceException extends __BaseException {
  readonly name = "InvalidResourceException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p>The provided resource value is invalid.</p>
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
 * <p>The provided Key Management Service key lacks the permissions to perform the specified
 *         <a>CreateJob</a> or <a>UpdateJob</a> action.</p>
 * @public
 */
export class KMSRequestFailedException extends __BaseException {
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
 * <p>The address provided was invalid. Check the address with your region's carrier, and try
 *       again.</p>
 * @public
 */
export class InvalidAddressException extends __BaseException {
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
 * <p>The address is either outside the serviceable area for your region, or an error
 *       occurred. Check the address with your region's carrier and try again. If the issue persists,
 *       contact Amazon Web Services Support.</p>
 * @public
 */
export class UnsupportedAddressException extends __BaseException {
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
 * <p>Your user lacks the necessary Amazon EC2 permissions to perform the attempted
 *       action.</p>
 * @public
 */
export class Ec2RequestFailedException extends __BaseException {
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
 * <p>Job or cluster creation failed. One or more inputs were invalid. Confirm that the <a>CreateClusterRequest$SnowballType</a> value supports your <a>CreateJobRequest$JobType</a>, and try again.</p>
 * @public
 */
export class InvalidInputCombinationException extends __BaseException {
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
 * <p>Job creation failed. Currently, clusters support five nodes. If you have fewer than
 *       five nodes for your cluster and you have more nodes to create for this cluster, try again and
 *       create jobs until your cluster has exactly five nodes.</p>
 * @public
 */
export class ClusterLimitExceededException extends __BaseException {
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
 * <p>You get this exception when you call <code>CreateReturnShippingLabel</code> more than once
 *       when other requests are not completed.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>You get this resource when you call <code>CreateReturnShippingLabel</code> more than once when other requests are not completed. .</p>
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
 * <p>You get this exception if you call <code>CreateReturnShippingLabel</code> and a valid
 *       return shipping label already exists. In this case, use
 *         <code>DescribeReturnShippingLabel</code> to get the URL.</p>
 * @public
 */
export class ReturnShippingLabelAlreadyExistsException extends __BaseException {
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
 * <p>The <code>NextToken</code> string was altered unexpectedly, and the operation has
 *       stopped. Run the operation without changing the <code>NextToken</code> string, and try
 *       again.</p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
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
