import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateKeyInput shape
 */
export interface CreateKeyInput {
  /**
   * <p>The key policy to attach to the CMK.</p> <p>If you provide a key policy, it must meet the following criteria:</p> <ul> <li> <p>If you don't set <code>BypassPolicyLockoutSafetyCheck</code> to true, the key policy must allow the principal that is making the <code>CreateKey</code> request to make a subsequent <a>PutKeyPolicy</a> request on the CMK. This reduces the risk that the CMK becomes unmanageable. For more information, refer to the scenario in the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam">Default Key Policy</a> section of the <i> <i>AWS Key Management Service Developer Guide</i> </i>.</p> </li> <li> <p>Each statement in the key policy must contain one or more principals. The principals in the key policy must exist and be visible to AWS KMS. When you create a new AWS principal (for example, an IAM user or role), you might need to enforce a delay before including the new principal in a key policy because the new principal might not be immediately visible to AWS KMS. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_general.html#troubleshoot_general_eventual-consistency">Changes that I make are not always immediately visible</a> in the <i>AWS Identity and Access Management User Guide</i>.</p> </li> </ul> <p>If you do not provide a key policy, AWS KMS attaches a default key policy to the CMK. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default">Default Key Policy</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>The key policy size limit is 32 kilobytes (32768 bytes).</p>
   */
  Policy?: string;

  /**
   * <p>A description of the CMK.</p> <p>Use a description that helps you decide whether the CMK is appropriate for a task.</p>
   */
  Description?: string;

  /**
   * <p>The cryptographic operations for which you can use the CMK. The only valid value is <code>ENCRYPT_DECRYPT</code>, which means you can use the CMK to encrypt and decrypt data.</p>
   */
  KeyUsage?: "ENCRYPT_DECRYPT" | string;

  /**
   * <p>The source of the key material for the CMK. You cannot change the origin after you create the CMK.</p> <p>The default is <code>AWS_KMS</code>, which means AWS KMS creates the key material in its own key store.</p> <p>When the parameter value is <code>EXTERNAL</code>, AWS KMS creates a CMK without key material so that you can import key material from your existing key management infrastructure. For more information about importing key material into AWS KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key Material</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>When the parameter value is <code>AWS_CLOUDHSM</code>, AWS KMS creates the CMK in an AWS KMS <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> and creates its key material in the associated AWS CloudHSM cluster. You must also use the <code>CustomKeyStoreId</code> parameter to identify the custom key store.</p>
   */
  Origin?: "AWS_KMS" | "EXTERNAL" | "AWS_CLOUDHSM" | string;

  /**
   * <p>Creates the CMK in the specified <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> and the key material in its associated AWS CloudHSM cluster. To create a CMK in a custom key store, you must also specify the <code>Origin</code> parameter with a value of <code>AWS_CLOUDHSM</code>. The AWS CloudHSM cluster that is associated with the custom key store must have at least two active HSMs, each in a different Availability Zone in the Region.</p> <p>To find the ID of a custom key store, use the <a>DescribeCustomKeyStores</a> operation.</p> <p>The response includes the custom key store ID and the ID of the AWS CloudHSM cluster.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">Custom Key Store feature</a> feature in AWS KMS, which combines the convenience and extensive integration of AWS KMS with the isolation and control of a single-tenant key store.</p>
   */
  CustomKeyStoreId?: string;

  /**
   * <p>A flag to indicate whether to bypass the key policy lockout safety check.</p> <important> <p>Setting this value to true increases the risk that the CMK becomes unmanageable. Do not set this value to true indiscriminately.</p> <p>For more information, refer to the scenario in the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam">Default Key Policy</a> section in the <i> <i>AWS Key Management Service Developer Guide</i> </i>.</p> </important> <p>Use this parameter only when you include a policy in the request and you intend to prevent the principal that is making the request from making a subsequent <a>PutKeyPolicy</a> request on the CMK.</p> <p>The default value is false.</p>
   */
  BypassPolicyLockoutSafetyCheck?: boolean;

  /**
   * <p>One or more tags. Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty (null) strings.</p> <p>Use this parameter to tag the CMK when it is created. Alternately, you can omit this parameter and instead tag the CMK after it is created using <a>TagResource</a>.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

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
