import { _UnmarshalledSendQuota } from "./_SendQuota";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A list of details about the email-sending capabilities of your Amazon Pinpoint account in the current AWS Region.</p>
 */
export interface GetAccountOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object that contains information about the per-day and per-second sending limits for your Amazon Pinpoint account in the current AWS Region.</p>
   */
  SendQuota?: _UnmarshalledSendQuota;

  /**
   * <p>Indicates whether or not email sending is enabled for your Amazon Pinpoint account in the current AWS Region.</p>
   */
  SendingEnabled?: boolean;

  /**
   * <p>Indicates whether or not the automatic warm-up feature is enabled for dedicated IP addresses that are associated with your account.</p>
   */
  DedicatedIpAutoWarmupEnabled?: boolean;

  /**
   * <p>The reputation status of your Amazon Pinpoint account. The status can be one of the following:</p> <ul> <li> <p> <code>HEALTHY</code> – There are no reputation-related issues that currently impact your account.</p> </li> <li> <p> <code>PROBATION</code> – We've identified some issues with your Amazon Pinpoint account. We're placing your account under review while you work on correcting these issues.</p> </li> <li> <p> <code>SHUTDOWN</code> – Your account's ability to send email is currently paused because of an issue with the email sent from your account. When you correct the issue, you can contact us and request that your account's ability to send email is resumed.</p> </li> </ul>
   */
  EnforcementStatus?: string;

  /**
   * <p>Indicates whether or not your account has production access in the current AWS Region.</p> <p>If the value is <code>false</code>, then your account is in the <i>sandbox</i>. When your account is in the sandbox, you can only send email to verified identities. Additionally, the maximum number of emails you can send in a 24-hour period (your sending quota) is 200, and the maximum number of emails you can send per second (your maximum sending rate) is 1.</p> <p>If the value is <code>true</code>, then your account has production access. When your account has production access, you can send email to any address. The sending quota and maximum sending rate for your account vary based on your specific use case.</p>
   */
  ProductionAccessEnabled?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
