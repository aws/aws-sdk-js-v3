import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The ARN of the SNS topic could not be found.</p>
 */
export interface SNSTopicArnNotFoundFault
  extends __ServiceException__<_SNSTopicArnNotFoundFaultDetails> {
  name: "SNSTopicArnNotFoundFault";
}

export interface _SNSTopicArnNotFoundFaultDetails {}
