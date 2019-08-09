import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An Amazon SNS topic with the specified Amazon Resource Name (ARN) does not exist.</p>
 */
export interface SNSTopicArnNotFoundFault
  extends __ServiceException__<_SNSTopicArnNotFoundFaultDetails> {
  name: "SNSTopicArnNotFoundFault";
}

export interface _SNSTopicArnNotFoundFaultDetails {}
