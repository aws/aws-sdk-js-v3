// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { WorkMailMessageFlowServiceException as __BaseException } from "./WorkMailMessageFlowServiceException";

/**
 * <p>The requested email message is not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
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
 * <p>WorkMail could not access the updated email content. Possible reasons:</p>
 *          <ul>
 *             <li>
 *                <p>You made the request in a region other than your S3 bucket region.</p>
 *             </li>
 *             <li>
 *                <p>The <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-owner-condition.html">S3 bucket owner</a> is not the
 *         same as the calling AWS account.</p>
 *             </li>
 *             <li>
 *                <p>You have an incomplete or missing S3 bucket policy. For more information about policies, see
 *         <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html">
 *           Updating message content with AWS Lambda
 *         </a> in the <i>WorkMail Administrator
 *           Guide</i>.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class InvalidContentLocation extends __BaseException {
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
 * <p>The requested email is not eligible for update. This is usually the case for a redirected email.</p>
 * @public
 */
export class MessageFrozen extends __BaseException {
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
 * <p>The requested email could not be updated due to an error in the MIME content. Check the error message for more information about
 *       what caused the error.</p>
 * @public
 */
export class MessageRejected extends __BaseException {
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
