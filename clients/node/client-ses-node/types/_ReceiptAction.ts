import { _S3Action, _UnmarshalledS3Action } from "./_S3Action";
import { _BounceAction, _UnmarshalledBounceAction } from "./_BounceAction";
import {
  _WorkmailAction,
  _UnmarshalledWorkmailAction
} from "./_WorkmailAction";
import { _LambdaAction, _UnmarshalledLambdaAction } from "./_LambdaAction";
import { _StopAction, _UnmarshalledStopAction } from "./_StopAction";
import {
  _AddHeaderAction,
  _UnmarshalledAddHeaderAction
} from "./_AddHeaderAction";
import { _SNSAction, _UnmarshalledSNSAction } from "./_SNSAction";

/**
 * <p>An action that Amazon SES can take when it receives an email on behalf of one or more email addresses or domains that you own. An instance of this data type can represent only one action.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p>
 */
export interface _ReceiptAction {
  /**
   * <p>Saves the received message to an Amazon Simple Storage Service (Amazon S3) bucket and, optionally, publishes a notification to Amazon SNS.</p>
   */
  S3Action?: _S3Action;

  /**
   * <p>Rejects the received email by returning a bounce response to the sender and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p>
   */
  BounceAction?: _BounceAction;

  /**
   * <p>Calls Amazon WorkMail and, optionally, publishes a notification to Amazon Amazon SNS.</p>
   */
  WorkmailAction?: _WorkmailAction;

  /**
   * <p>Calls an AWS Lambda function, and optionally, publishes a notification to Amazon SNS.</p>
   */
  LambdaAction?: _LambdaAction;

  /**
   * <p>Terminates the evaluation of the receipt rule set and optionally publishes a notification to Amazon SNS.</p>
   */
  StopAction?: _StopAction;

  /**
   * <p>Adds a header to the received email.</p>
   */
  AddHeaderAction?: _AddHeaderAction;

  /**
   * <p>Publishes the email content within a notification to Amazon SNS.</p>
   */
  SNSAction?: _SNSAction;
}

export interface _UnmarshalledReceiptAction extends _ReceiptAction {
  /**
   * <p>Saves the received message to an Amazon Simple Storage Service (Amazon S3) bucket and, optionally, publishes a notification to Amazon SNS.</p>
   */
  S3Action?: _UnmarshalledS3Action;

  /**
   * <p>Rejects the received email by returning a bounce response to the sender and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p>
   */
  BounceAction?: _UnmarshalledBounceAction;

  /**
   * <p>Calls Amazon WorkMail and, optionally, publishes a notification to Amazon Amazon SNS.</p>
   */
  WorkmailAction?: _UnmarshalledWorkmailAction;

  /**
   * <p>Calls an AWS Lambda function, and optionally, publishes a notification to Amazon SNS.</p>
   */
  LambdaAction?: _UnmarshalledLambdaAction;

  /**
   * <p>Terminates the evaluation of the receipt rule set and optionally publishes a notification to Amazon SNS.</p>
   */
  StopAction?: _UnmarshalledStopAction;

  /**
   * <p>Adds a header to the received email.</p>
   */
  AddHeaderAction?: _UnmarshalledAddHeaderAction;

  /**
   * <p>Publishes the email content within a notification to Amazon SNS.</p>
   */
  SNSAction?: _UnmarshalledSNSAction;
}
