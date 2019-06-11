import {
  _KeySchemaElement,
  _UnmarshalledKeySchemaElement
} from "./_KeySchemaElement";
import { _Projection, _UnmarshalledProjection } from "./_Projection";
import {
  _ProvisionedThroughput,
  _UnmarshalledProvisionedThroughput
} from "./_ProvisionedThroughput";

/**
 * <p>Represents a new global secondary index to be added to an existing table.</p>
 */
export interface _CreateGlobalSecondaryIndexAction {
  /**
   * <p>The name of the global secondary index to be created.</p>
   */
  IndexName: string;

  /**
   * <p>The key schema for the global secondary index.</p>
   */
  KeySchema: Array<_KeySchemaElement> | Iterable<_KeySchemaElement>;

  /**
   * <p>Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.</p>
   */
  Projection: _Projection;

  /**
   * <p>Represents the provisioned throughput settings for the specified global secondary index.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ProvisionedThroughput?: _ProvisionedThroughput;
}

export interface _UnmarshalledCreateGlobalSecondaryIndexAction
  extends _CreateGlobalSecondaryIndexAction {
  /**
   * <p>The key schema for the global secondary index.</p>
   */
  KeySchema: Array<_UnmarshalledKeySchemaElement>;

  /**
   * <p>Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.</p>
   */
  Projection: _UnmarshalledProjection;

  /**
   * <p>Represents the provisioned throughput settings for the specified global secondary index.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ProvisionedThroughput?: _UnmarshalledProvisionedThroughput;
}
