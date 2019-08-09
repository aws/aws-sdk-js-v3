import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDatasetInput shape
 */
export interface CreateDatasetInput {
  /**
   * <p>The name for the dataset.</p>
   */
  name: string;

  /**
   * <p>The ARN of the schema to associate with the dataset. The schema defines the dataset fields.</p>
   */
  schemaArn: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group to add the dataset to.</p>
   */
  datasetGroupArn: string;

  /**
   * <p>The type of dataset.</p> <p>One of the following (case insensitive) values:</p> <ul> <li> <p>Interactions</p> </li> <li> <p>Items</p> </li> <li> <p>Users</p> </li> </ul>
   */
  datasetType: string;

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
