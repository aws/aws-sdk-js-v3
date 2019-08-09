import { _HandshakeParty } from "./_HandshakeParty";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * InviteAccountToOrganizationInput shape
 */
export interface InviteAccountToOrganizationInput {
  /**
   * <p>The identifier (ID) of the AWS account that you want to invite to join your organization. This is a JSON object that contains the following elements: </p> <p> <code>{ "Type": "ACCOUNT", "Id": "&lt;<i> <b>account id number</b> </i>&gt;" }</code> </p> <p>If you use the AWS CLI, you can submit this as a single string, similar to the following example:</p> <p> <code>--target Id=123456789012,Type=ACCOUNT</code> </p> <p>If you specify <code>"Type": "ACCOUNT"</code>, you must provide the AWS account ID number as the <code>Id</code>. If you specify <code>"Type": "EMAIL"</code>, you must specify the email address that is associated with the account.</p> <p> <code>--target Id=diego@example.com,Type=EMAIL</code> </p>
   */
  Target: _HandshakeParty;

  /**
   * <p>Additional information that you want to include in the generated email to the recipient account owner.</p>
   */
  Notes?: string;

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
