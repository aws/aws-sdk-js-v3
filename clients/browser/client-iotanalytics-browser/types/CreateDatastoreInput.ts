import { _DatastoreStorage } from "./_DatastoreStorage";
import { _RetentionPeriod } from "./_RetentionPeriod";
import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDatastoreInput shape
 */
export interface CreateDatastoreInput {
  /**
   * <p>The name of the data store.</p>
   */
  datastoreName: string;

  /**
   * <p>Where data store data is stored.</p>
   */
  datastoreStorage?: _DatastoreStorage;

  /**
   * <p>How long, in days, message data is kept for the data store.</p>
   */
  retentionPeriod?: _RetentionPeriod;

  /**
   * <p>Metadata which can be used to manage the data store.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;

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
