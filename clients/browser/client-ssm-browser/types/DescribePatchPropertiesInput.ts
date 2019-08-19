import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribePatchPropertiesInput shape
 */
export interface DescribePatchPropertiesInput {
  /**
   * <p>The operating system type for which to list patches.</p>
   */
  OperatingSystem:
    | "WINDOWS"
    | "AMAZON_LINUX"
    | "AMAZON_LINUX_2"
    | "UBUNTU"
    | "REDHAT_ENTERPRISE_LINUX"
    | "SUSE"
    | "CENTOS"
    | string;

  /**
   * <p>The patch property for which you want to view patch details. </p>
   */
  Property:
    | "PRODUCT"
    | "PRODUCT_FAMILY"
    | "CLASSIFICATION"
    | "MSRC_SEVERITY"
    | "PRIORITY"
    | "SEVERITY"
    | string;

  /**
   * <p>Indicates whether to list patches for the Windows operating system or for Microsoft applications. Not applicable for Linux operating systems.</p>
   */
  PatchSet?: "OS" | "APPLICATION" | string;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  NextToken?: string;

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
