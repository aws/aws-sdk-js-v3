/**
 * <p>An object that contains the response from the <code>SendBulkTemplatedEmail</code> operation.</p>
 */
export interface _BulkEmailDestinationStatus {
  /**
   * <p>The status of a message sent using the <code>SendBulkTemplatedEmail</code> operation.</p> <p>Possible values for this parameter include:</p> <ul> <li> <p> <code>Success</code>: Amazon SES accepted the message, and will attempt to deliver it to the recipients.</p> </li> <li> <p> <code>MessageRejected</code>: The message was rejected because it contained a virus.</p> </li> <li> <p> <code>MailFromDomainNotVerified</code>: The sender's email address or domain was not verified.</p> </li> <li> <p> <code>ConfigurationSetDoesNotExist</code>: The configuration set you specified does not exist.</p> </li> <li> <p> <code>TemplateDoesNotExist</code>: The template you specified does not exist.</p> </li> <li> <p> <code>AccountSuspended</code>: Your account has been shut down because of issues related to your email sending practices.</p> </li> <li> <p> <code>AccountThrottled</code>: The number of emails you can send has been reduced because your account has exceeded its allocated sending limit.</p> </li> <li> <p> <code>AccountDailyQuotaExceeded</code>: You have reached or exceeded the maximum number of emails you can send from your account in a 24-hour period.</p> </li> <li> <p> <code>InvalidSendingPoolName</code>: The configuration set you specified refers to an IP pool that does not exist.</p> </li> <li> <p> <code>AccountSendingPaused</code>: Email sending for the Amazon SES account was disabled using the <a>UpdateAccountSendingEnabled</a> operation.</p> </li> <li> <p> <code>ConfigurationSetSendingPaused</code>: Email sending for this configuration set was disabled using the <a>UpdateConfigurationSetSendingEnabled</a> operation.</p> </li> <li> <p> <code>InvalidParameterValue</code>: One or more of the parameters you specified when calling this operation was invalid. See the error message for additional information.</p> </li> <li> <p> <code>TransientFailure</code>: Amazon SES was unable to process your request because of a temporary issue.</p> </li> <li> <p> <code>Failed</code>: Amazon SES was unable to process your request. See the error message for additional information.</p> </li> </ul>
   */
  Status?:
    | "Success"
    | "MessageRejected"
    | "MailFromDomainNotVerified"
    | "ConfigurationSetDoesNotExist"
    | "TemplateDoesNotExist"
    | "AccountSuspended"
    | "AccountThrottled"
    | "AccountDailyQuotaExceeded"
    | "InvalidSendingPoolName"
    | "AccountSendingPaused"
    | "ConfigurationSetSendingPaused"
    | "InvalidParameterValue"
    | "TransientFailure"
    | "Failed"
    | string;

  /**
   * <p>A description of an error that prevented a message being sent using the <code>SendBulkTemplatedEmail</code> operation.</p>
   */
  Error?: string;

  /**
   * <p>The unique message identifier returned from the <code>SendBulkTemplatedEmail</code> operation.</p>
   */
  MessageId?: string;
}

export type _UnmarshalledBulkEmailDestinationStatus = _BulkEmailDestinationStatus;
