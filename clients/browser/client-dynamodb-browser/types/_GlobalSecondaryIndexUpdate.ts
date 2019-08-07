import {
  _UpdateGlobalSecondaryIndexAction,
  _UnmarshalledUpdateGlobalSecondaryIndexAction
} from "./_UpdateGlobalSecondaryIndexAction";
import {
  _CreateGlobalSecondaryIndexAction,
  _UnmarshalledCreateGlobalSecondaryIndexAction
} from "./_CreateGlobalSecondaryIndexAction";
import {
  _DeleteGlobalSecondaryIndexAction,
  _UnmarshalledDeleteGlobalSecondaryIndexAction
} from "./_DeleteGlobalSecondaryIndexAction";

/**
 * <p>Represents one of the following:</p> <ul> <li> <p>A new global secondary index to be added to an existing table.</p> </li> <li> <p>New provisioned throughput parameters for an existing global secondary index.</p> </li> <li> <p>An existing global secondary index to be removed from an existing table.</p> </li> </ul>
 */
export interface _GlobalSecondaryIndexUpdate {
  /**
   * <p>The name of an existing global secondary index, along with new provisioned throughput settings to be applied to that index.</p>
   */
  Update?: _UpdateGlobalSecondaryIndexAction;

  /**
   * <p>The parameters required for creating a global secondary index on an existing table:</p> <ul> <li> <p> <code>IndexName </code> </p> </li> <li> <p> <code>KeySchema </code> </p> </li> <li> <p> <code>AttributeDefinitions </code> </p> </li> <li> <p> <code>Projection </code> </p> </li> <li> <p> <code>ProvisionedThroughput </code> </p> </li> </ul>
   */
  Create?: _CreateGlobalSecondaryIndexAction;

  /**
   * <p>The name of an existing global secondary index to be removed.</p>
   */
  Delete?: _DeleteGlobalSecondaryIndexAction;
}

export interface _UnmarshalledGlobalSecondaryIndexUpdate
  extends _GlobalSecondaryIndexUpdate {
  /**
   * <p>The name of an existing global secondary index, along with new provisioned throughput settings to be applied to that index.</p>
   */
  Update?: _UnmarshalledUpdateGlobalSecondaryIndexAction;

  /**
   * <p>The parameters required for creating a global secondary index on an existing table:</p> <ul> <li> <p> <code>IndexName </code> </p> </li> <li> <p> <code>KeySchema </code> </p> </li> <li> <p> <code>AttributeDefinitions </code> </p> </li> <li> <p> <code>Projection </code> </p> </li> <li> <p> <code>ProvisionedThroughput </code> </p> </li> </ul>
   */
  Create?: _UnmarshalledCreateGlobalSecondaryIndexAction;

  /**
   * <p>The name of an existing global secondary index to be removed.</p>
   */
  Delete?: _UnmarshalledDeleteGlobalSecondaryIndexAction;
}
