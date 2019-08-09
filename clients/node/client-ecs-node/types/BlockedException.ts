import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Your AWS account has been blocked. For more information, contact <a href="http://aws.amazon.com/contact-us/">AWS Support</a>.</p>
 */
export interface BlockedException
  extends __ServiceException__<_BlockedExceptionDetails> {
  name: "BlockedException";
}

export interface _BlockedExceptionDetails {}
