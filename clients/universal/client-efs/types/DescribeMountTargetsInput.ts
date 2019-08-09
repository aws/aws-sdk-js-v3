import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface DescribeMountTargetsInput {
  /**
   * <p>(Optional) Maximum number of mount targets to return in the response. Currently, this number is automatically set to 10, and other values are ignored. The response is paginated at 10 per page if you have more than 10 mount targets.</p>
   */
  MaxItems?: number;

  /**
   * <p>(Optional) Opaque pagination token returned from a previous <code>DescribeMountTargets</code> operation (String). If present, it specifies to continue the list from where the previous returning call left off.</p>
   */
  Marker?: string;

  /**
   * <p>(Optional) ID of the file system whose mount targets you want to list (String). It must be included in your request if <code>MountTargetId</code> is not included.</p>
   */
  FileSystemId?: string;

  /**
   * <p>(Optional) ID of the mount target that you want to have described (String). It must be included in your request if <code>FileSystemId</code> is not included.</p>
   */
  MountTargetId?: string;

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
