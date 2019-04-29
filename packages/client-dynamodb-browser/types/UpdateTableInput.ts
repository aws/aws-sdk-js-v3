import { _AttributeDefinition } from "./_AttributeDefinition";
import { _ProvisionedThroughput } from "./_ProvisionedThroughput";
import { _GlobalSecondaryIndexUpdate } from "./_GlobalSecondaryIndexUpdate";
import { _StreamSpecification } from "./_StreamSpecification";
import { _SSESpecification } from "./_SSESpecification";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input of an <code>UpdateTable</code> operation.</p>
 */
export interface UpdateTableInput {
  /**
   * <p>An array of attributes that describe the key schema for the table and indexes. If you are adding a new global secondary index to the table, <code>AttributeDefinitions</code> must include the key element(s) of the new index.</p>
   */
  AttributeDefinitions?:
    | Array<_AttributeDefinition>
    | Iterable<_AttributeDefinition>;

  /**
   * <p>The name of the table to be updated.</p>
   */
  TableName: string;

  /**
   * <p>The new provisioned throughput settings for the specified table or index.</p>
   */
  ProvisionedThroughput?: _ProvisionedThroughput;

  /**
   * <p>An array of one or more global secondary indexes for the table. For each index in the array, you can request one action:</p> <ul> <li> <p> <code>Create</code> - add a new global secondary index to the table.</p> </li> <li> <p> <code>Update</code> - modify the provisioned throughput settings of an existing global secondary index.</p> </li> <li> <p> <code>Delete</code> - remove a global secondary index from the table.</p> </li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.OnlineOps.html">Managing Global Secondary Indexes</a> in the <i>Amazon DynamoDB Developer Guide</i>. </p>
   */
  GlobalSecondaryIndexUpdates?:
    | Array<_GlobalSecondaryIndexUpdate>
    | Iterable<_GlobalSecondaryIndexUpdate>;

  /**
   * <p>Represents the DynamoDB Streams configuration for the table.</p> <note> <p>You will receive a <code>ResourceInUseException</code> if you attempt to enable a stream on a table that already has a stream, or if you attempt to disable a stream on a table which does not have a stream.</p> </note>
   */
  StreamSpecification?: _StreamSpecification;

  /**
   * <p>The new server-side encryption settings for the specified table.</p>
   */
  SSESpecification?: _SSESpecification;

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
