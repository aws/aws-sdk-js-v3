import { _CreateBucketConfiguration } from "./_CreateBucketConfiguration";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateBucketInput shape
 */
export interface CreateBucketInput {
  /**
   * <p>The canned ACL to apply to the bucket.</p>
   */
  ACL?:
    | "private"
    | "public-read"
    | "public-read-write"
    | "authenticated-read"
    | string;

  /**
   * <p/>
   */
  Bucket: string;

  /**
   * <p/>
   */
  CreateBucketConfiguration?: _CreateBucketConfiguration;

  /**
   * <p>Allows grantee the read, write, read ACP, and write ACP permissions on the bucket.</p>
   */
  GrantFullControl?: string;

  /**
   * <p>Allows grantee to list the objects in the bucket.</p>
   */
  GrantRead?: string;

  /**
   * <p>Allows grantee to read the bucket ACL.</p>
   */
  GrantReadACP?: string;

  /**
   * <p>Allows grantee to create, overwrite, and delete any object in the bucket.</p>
   */
  GrantWrite?: string;

  /**
   * <p>Allows grantee to write the ACL for the applicable bucket.</p>
   */
  GrantWriteACP?: string;

  /**
   * <p>Specifies whether you want Amazon S3 object lock to be enabled for the new bucket.</p>
   */
  ObjectLockEnabledForBucket?: boolean;

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
