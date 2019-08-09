import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The SNS topic ARN does not exist.</p>
 */
export interface SNSTopicArnNotFoundFault
  extends __ServiceException__<_SNSTopicArnNotFoundFaultDetails> {
  name: "SNSTopicArnNotFoundFault";
}

export interface _SNSTopicArnNotFoundFaultDetails {}
