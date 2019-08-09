import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateCustomKeyStoreInput shape
 */
export interface CreateCustomKeyStoreInput {
  /**
   * <p>Specifies a friendly name for the custom key store. The name must be unique in your AWS account.</p>
   */
  CustomKeyStoreName: string;

  /**
   * <p>Identifies the AWS CloudHSM cluster for the custom key store. Enter the cluster ID of any active AWS CloudHSM cluster that is not already associated with a custom key store. To find the cluster ID, use the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html">DescribeClusters</a> operation.</p>
   */
  CloudHsmClusterId: string;

  /**
   * <p>Enter the content of the trust anchor certificate for the cluster. This is the content of the <code>customerCA.crt</code> file that you created when you <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/initialize-cluster.html">initialized the cluster</a>.</p>
   */
  TrustAnchorCertificate: string;

  /**
   * <p>Enter the password of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-store-concepts.html#concept-kmsuser"> <code>kmsuser</code> crypto user (CU) account</a> in the specified AWS CloudHSM cluster. AWS KMS logs into the cluster as this user to manage key material on your behalf.</p> <p>This parameter tells AWS KMS the <code>kmsuser</code> account password; it does not change the password in the AWS CloudHSM cluster.</p>
   */
  KeyStorePassword: string;

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
