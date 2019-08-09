import { _BlockDeviceMapping } from "./_BlockDeviceMapping";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the parameters for RegisterImage.</p>
 */
export interface RegisterImageInput {
  /**
   * <p>The full path to your AMI manifest in Amazon S3 storage. The specified bucket must have the <code>aws-exec-read</code> canned access control list (ACL) to ensure that it can be accessed by Amazon EC2. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl">Canned ACLs</a> in the <i>Amazon S3 Service Developer Guide</i>.</p>
   */
  ImageLocation?: string;

  /**
   * <p>The architecture of the AMI.</p> <p>Default: For Amazon EBS-backed AMIs, <code>i386</code>. For instance store-backed AMIs, the architecture specified in the manifest file.</p>
   */
  Architecture?: "i386" | "x86_64" | "arm64" | string;

  /**
   * <p>The block device mapping entries.</p>
   */
  BlockDeviceMappings?:
    | Array<_BlockDeviceMapping>
    | Iterable<_BlockDeviceMapping>;

  /**
   * <p>A description for your AMI.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Set to <code>true</code> to enable enhanced networking with ENA for the AMI and any instances that you launch from the AMI.</p> <p>This option is supported only for HVM AMIs. Specifying this option with a PV AMI can make instances launched from the AMI unreachable.</p>
   */
  EnaSupport?: boolean;

  /**
   * <p>The ID of the kernel.</p>
   */
  KernelId?: string;

  /**
   * <p>A name for your AMI.</p> <p>Constraints: 3-128 alphanumeric characters, parentheses (()), square brackets ([]), spaces ( ), periods (.), slashes (/), dashes (-), single quotes ('), at-signs (@), or underscores(_)</p>
   */
  Name: string;

  /**
   * <p>The billing product codes. Your account must be authorized to specify billing product codes. Otherwise, you can use the AWS Marketplace to bill for the use of an AMI.</p>
   */
  BillingProducts?: Array<string> | Iterable<string>;

  /**
   * <p>The ID of the RAM disk.</p>
   */
  RamdiskId?: string;

  /**
   * <p>The device name of the root device volume (for example, <code>/dev/sda1</code>).</p>
   */
  RootDeviceName?: string;

  /**
   * <p>Set to <code>simple</code> to enable enhanced networking with the Intel 82599 Virtual Function interface for the AMI and any instances that you launch from the AMI.</p> <p>There is no way to disable <code>sriovNetSupport</code> at this time.</p> <p>This option is supported only for HVM AMIs. Specifying this option with a PV AMI can make instances launched from the AMI unreachable.</p>
   */
  SriovNetSupport?: string;

  /**
   * <p>The type of virtualization (<code>hvm</code> | <code>paravirtual</code>).</p> <p>Default: <code>paravirtual</code> </p>
   */
  VirtualizationType?: string;

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
