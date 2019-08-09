import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>RefreshCacheInput</p>
 */
export interface RefreshCacheInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the file share you want to refresh.</p>
   */
  FileShareARN: string;

  /**
   * <p>A comma-separated list of the paths of folders to refresh in the cache. The default is [<code>"/"</code>]. The default refreshes objects and folders at the root of the Amazon S3 bucket. If <code>Recursive</code> is set to "true", the entire S3 bucket that the file share has access to is refreshed.</p>
   */
  FolderList?: Array<string> | Iterable<string>;

  /**
   * <p>A value that specifies whether to recursively refresh folders in the cache. The refresh includes folders that were in the cache the last time the gateway listed the folder's contents. If this value set to "true", each folder that is listed in <code>FolderList</code> is recursively updated. Otherwise, subfolders listed in <code>FolderList</code> are not refreshed. Only objects that are in folders listed directly under <code>FolderList</code> are found and used for the update. The default is "true".</p>
   */
  Recursive?: boolean;

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
