import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateGlobalClusterInput shape
 */
export interface CreateGlobalClusterInput {
  /**
   * <p>The cluster identifier of the new global database cluster.</p>
   */
  GlobalClusterIdentifier?: string;

  /**
   * <p> The Amazon Resource Name (ARN) to use as the primary cluster of the global database. This parameter is optional. </p>
   */
  SourceDBClusterIdentifier?: string;

  /**
   * <p>Provides the name of the database engine to be used for this DB cluster.</p>
   */
  Engine?: string;

  /**
   * <p>The engine version of the Aurora global database.</p>
   */
  EngineVersion?: string;

  /**
   * <p> The deletion protection setting for the new global database. The global database can't be deleted when deletion protection is enabled. </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p> The name for your database of up to 64 alpha-numeric characters. If you do not provide a name, Amazon Aurora will not create a database in the global database cluster you are creating. </p>
   */
  DatabaseName?: string;

  /**
   * <p> The storage encryption setting for the new global database cluster. </p>
   */
  StorageEncrypted?: boolean;

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
