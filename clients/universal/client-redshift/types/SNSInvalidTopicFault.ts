import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Amazon SNS has responded that there is a problem with the specified Amazon SNS topic.</p>
 */
export interface SNSInvalidTopicFault
  extends __ServiceException__<_SNSInvalidTopicFaultDetails> {
  name: "SNSInvalidTopicFault";
}

export interface _SNSInvalidTopicFaultDetails {}
