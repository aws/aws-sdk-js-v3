import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteSecretInput shape
 */
export interface DeleteSecretInput {
  /**
   * <p>Specifies the secret that you want to delete. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret.</p> <note> <p>If you specify an ARN, we generally recommend that you specify a complete ARN. You can specify a partial ARN too—for example, if you don’t include the final hyphen and six random characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN match can work as long as it uniquely matches only one secret. However, if your secret has a name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six characters to the ARN) and you try to use that as a partial ARN, then those characters cause Secrets Manager to assume that you’re specifying a complete ARN. This confusion can cause unexpected results. To avoid this situation, we recommend that you don’t create secret names that end with a hyphen followed by six characters.</p> </note>
   */
  SecretId: string;

  /**
   * <p>(Optional) Specifies the number of days that Secrets Manager waits before it can delete the secret. You can't use both this parameter and the <code>ForceDeleteWithoutRecovery</code> parameter in the same API call.</p> <p>This value can range from 7 to 30 days. The default value is 30.</p>
   */
  RecoveryWindowInDays?: number;

  /**
   * <p>(Optional) Specifies that the secret is to be deleted without any recovery window. You can't use both this parameter and the <code>RecoveryWindowInDays</code> parameter in the same API call.</p> <p>An asynchronous background process performs the actual deletion, so there can be a short delay before the operation completes. If you write code to delete and then immediately recreate a secret with the same name, ensure that your code includes appropriate back off and retry logic.</p> <important> <p>Use this parameter with caution. This parameter causes the operation to skip the normal waiting period before the permanent deletion that AWS would normally impose with the <code>RecoveryWindowInDays</code> parameter. If you delete a secret with the <code>ForceDeleteWithouRecovery</code> parameter, then you have no opportunity to recover the secret. It is permanently lost.</p> </important>
   */
  ForceDeleteWithoutRecovery?: boolean;

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
