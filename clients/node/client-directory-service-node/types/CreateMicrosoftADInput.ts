import { _DirectoryVpcSettings } from "./_DirectoryVpcSettings";
import { _Tag } from "./_Tag";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Creates an AWS Managed Microsoft AD directory.</p>
 */
export interface CreateMicrosoftADInput {
  /**
   * <p>The fully qualified domain name for the directory, such as <code>corp.example.com</code>. This name will resolve inside your VPC only. It does not need to be publicly resolvable.</p>
   */
  Name: string;

  /**
   * <p>The NetBIOS name for your domain. A short identifier for your domain, such as <code>CORP</code>. If you don't specify a NetBIOS name, it will default to the first part of your directory DNS. For example, <code>CORP</code> for the directory DNS <code>corp.example.com</code>. </p>
   */
  ShortName?: string;

  /**
   * <p>The password for the default administrative user named <code>Admin</code>.</p>
   */
  Password: string;

  /**
   * <p>A textual description for the directory. This label will appear on the AWS console <code>Directory Details</code> page after the directory is created.</p>
   */
  Description?: string;

  /**
   * <p>Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.</p>
   */
  VpcSettings: _DirectoryVpcSettings;

  /**
   * <p>AWS Managed Microsoft AD is available in two editions: Standard and Enterprise. Enterprise is the default.</p>
   */
  Edition?: "Enterprise" | "Standard" | string;

  /**
   * <p>The tags to be assigned to the AWS Managed Microsoft AD directory.</p>
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
