import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The limit for the number of <a>DescribeAttachment</a> requests in a short period of time has been exceeded.</p>
 */
export interface DescribeAttachmentLimitExceeded
  extends __ServiceException__<_DescribeAttachmentLimitExceededDetails> {
  name: "DescribeAttachmentLimitExceeded";
}

export interface _DescribeAttachmentLimitExceededDetails {
  /**
   * <p>The limit for the number of <a>DescribeAttachment</a> requests in a short period of time has been exceeded.</p>
   */
  message?: string;
}
