import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>AttachVolumeInput</p>
 */
export interface AttachVolumeInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway that you want to attach the volume to.</p>
   */
  GatewayARN: string;

  /**
   * <p>The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN. For example, specifying <code>TargetName</code> as <i>myvolume</i> results in the target ARN of <code>arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume</code>. The target name must be unique across all volumes on a gateway.</p> <p>If you don't specify a value, Storage Gateway uses the value that was previously used for this volume as the new target name.</p>
   */
  TargetName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the volume to attach to the specified gateway.</p>
   */
  VolumeARN: string;

  /**
   * <p>The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted. Use <a>DescribeGatewayInformation</a> to get a list of the network interfaces available on a gateway.</p> <p> Valid Values: A valid IP address.</p>
   */
  NetworkInterfaceId: string;

  /**
   * <p>The unique device ID or other distinguishing data that identifies the local disk used to create the volume. This value is only required when you are attaching a stored volume.</p>
   */
  DiskId?: string;

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
