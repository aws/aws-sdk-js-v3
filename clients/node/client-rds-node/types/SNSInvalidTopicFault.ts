import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>SNS has responded that there is a problem with the SND topic specified.</p>
 */
export interface SNSInvalidTopicFault
  extends __ServiceException__<_SNSInvalidTopicFaultDetails> {
  name: "SNSInvalidTopicFault";
}

export interface _SNSInvalidTopicFaultDetails {}
