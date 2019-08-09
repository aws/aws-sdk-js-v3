import {
  _ResourceChange,
  _UnmarshalledResourceChange
} from "./_ResourceChange";

/**
 * <p>The <code>Change</code> structure describes the changes AWS CloudFormation will perform if you execute the change set.</p>
 */
export interface _Change {
  /**
   * <p>The type of entity that AWS CloudFormation changes. Currently, the only entity type is <code>Resource</code>.</p>
   */
  Type?: "Resource" | string;

  /**
   * <p>A <code>ResourceChange</code> structure that describes the resource and action that AWS CloudFormation will perform.</p>
   */
  ResourceChange?: _ResourceChange;
}

export interface _UnmarshalledChange extends _Change {
  /**
   * <p>A <code>ResourceChange</code> structure that describes the resource and action that AWS CloudFormation will perform.</p>
   */
  ResourceChange?: _UnmarshalledResourceChange;
}
