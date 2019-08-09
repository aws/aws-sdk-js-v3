import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents your Amazon SES daily sending quota, maximum send rate, and the number of emails you have sent in the last 24 hours.</p>
 */
export interface GetSendQuotaOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The maximum number of emails the user is allowed to send in a 24-hour interval. A value of -1 signifies an unlimited quota.</p>
   */
  Max24HourSend?: number;

  /**
   * <p>The maximum number of emails that Amazon SES can accept from the user's account per second.</p> <note> <p>The rate at which Amazon SES accepts the user's messages might be less than the maximum send rate.</p> </note>
   */
  MaxSendRate?: number;

  /**
   * <p>The number of emails sent during the previous 24 hours.</p>
   */
  SentLast24Hours?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
