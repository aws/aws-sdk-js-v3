// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { WorkMailMessageFlowServiceException as __BaseException } from "./WorkMailMessageFlowServiceException";

/**
 * The requested email message is not found.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workmailmessageflow#ResourceNotFoundException";
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
 * WorkMail could not access the updated email content. Possible reasons:
 *
 * - You made the request in a region other than your S3 bucket region.
 * - The [S3 bucket owner](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-owner-condition.html) is not the same as the calling AWS account.
 * - You have an incomplete or missing S3 bucket policy. For more information about policies, see [Updating message content with AWS Lambda](https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html) in the *WorkMail Administrator Guide*.
 *
 * @public
 */
export class InvalidContentLocation extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workmailmessageflow#InvalidContentLocation";
  readonly name = "InvalidContentLocation" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidContentLocation, __BaseException>) {
    super({
      name: "InvalidContentLocation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidContentLocation.prototype);
  }
}

/**
 * The requested email is not eligible for update. This is usually the case for a redirected email.
 *
 * @public
 */
export class MessageFrozen extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workmailmessageflow#MessageFrozen";
  readonly name = "MessageFrozen" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MessageFrozen, __BaseException>) {
    super({
      name: "MessageFrozen",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MessageFrozen.prototype);
  }
}

/**
 * The requested email could not be updated due to an error in the MIME content. Check the error message for more information about what caused the error.
 *
 * @public
 */
export class MessageRejected extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workmailmessageflow#MessageRejected";
  readonly name = "MessageRejected" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MessageRejected, __BaseException>) {
    super({
      name: "MessageRejected",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MessageRejected.prototype);
  }
}
