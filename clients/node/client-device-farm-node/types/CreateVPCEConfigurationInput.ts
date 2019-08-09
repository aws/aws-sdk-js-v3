import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateVPCEConfigurationInput shape
 */
export interface CreateVPCEConfigurationInput {
  /**
   * <p>The friendly name you give to your VPC endpoint configuration, to manage your configurations more easily.</p>
   */
  vpceConfigurationName: string;

  /**
   * <p>The name of the VPC endpoint service running inside your AWS account that you want Device Farm to test.</p>
   */
  vpceServiceName: string;

  /**
   * <p>The DNS name of the service running in your VPC that you want Device Farm to test.</p>
   */
  serviceDnsName: string;

  /**
   * <p>An optional description, providing more details about your VPC endpoint configuration.</p>
   */
  vpceConfigurationDescription?: string;

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
