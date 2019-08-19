import { _Tag } from "./_Tag";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface CreateHsmConfigurationInput {
  /**
   * <p>The identifier to be assigned to the new Amazon Redshift HSM configuration.</p>
   */
  HsmConfigurationIdentifier: string;

  /**
   * <p>A text description of the HSM configuration to be created.</p>
   */
  Description: string;

  /**
   * <p>The IP address that the Amazon Redshift cluster must use to access the HSM.</p>
   */
  HsmIpAddress: string;

  /**
   * <p>The name of the partition in the HSM where the Amazon Redshift clusters will store their database encryption keys.</p>
   */
  HsmPartitionName: string;

  /**
   * <p>The password required to access the HSM partition.</p>
   */
  HsmPartitionPassword: string;

  /**
   * <p>The HSMs public certificate file. When using Cloud HSM, the file name is server.pem.</p>
   */
  HsmServerPublicCertificate: string;

  /**
   * <p>A list of tag instances.</p>
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
