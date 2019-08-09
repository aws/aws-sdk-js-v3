import { _Condition } from "./_Condition";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutPermissionInput shape
 */
export interface PutPermissionInput {
  /**
   * <p>The event bus associated with the rule. If you omit this, the default event bus is used.</p>
   */
  EventBusName?: string;

  /**
   * <p>The action that you're enabling the other account to perform. Currently, this must be <code>events:PutEvents</code>.</p>
   */
  Action: string;

  /**
   * <p>The 12-digit AWS account ID that you are permitting to put events to your default event bus. Specify "*" to permit any account to put events to your default event bus.</p> <p>If you specify "*" without specifying <code>Condition</code>, avoid creating rules that might match undesirable events. To create more secure rules, make sure that the event pattern for each rule contains an <code>account</code> field with a specific account ID to receive events from. Rules with an account field don't match any events sent from other accounts.</p>
   */
  Principal: string;

  /**
   * <p>An identifier string for the external account that you're granting permissions to. If you later want to revoke the permission for this external account, specify this <code>StatementId</code> when you run <a>RemovePermission</a>.</p>
   */
  StatementId: string;

  /**
   * <p>This parameter enables you to limit the permission to accounts that fulfill a certain condition, such as being a member of a certain AWS organization. For more information about AWS Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html">What Is AWS Organizations?</a> in the <i>AWS Organizations User Guide</i>.</p> <p>If you specify <code>Condition</code> with an AWS organization ID and specify "*" as the value for <code>Principal</code>, you grant permission to all the accounts in the named organization.</p> <p>The <code>Condition</code> is a JSON string that must contain <code>Type</code>, <code>Key</code>, and <code>Value</code> fields.</p>
   */
  Condition?: _Condition;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
