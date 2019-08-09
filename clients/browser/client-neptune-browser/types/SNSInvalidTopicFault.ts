import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The SNS topic is invalid.</p>
 */
export interface SNSInvalidTopicFault
  extends __ServiceException__<_SNSInvalidTopicFaultDetails> {
  name: "SNSInvalidTopicFault";
}

export interface _SNSInvalidTopicFaultDetails {}
