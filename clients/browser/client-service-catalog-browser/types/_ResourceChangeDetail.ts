import {
  _ResourceTargetDefinition,
  _UnmarshalledResourceTargetDefinition
} from "./_ResourceTargetDefinition";

/**
 * <p>Information about a change to a resource attribute.</p>
 */
export interface _ResourceChangeDetail {
  /**
   * <p>Information about the resource attribute to be modified.</p>
   */
  Target?: _ResourceTargetDefinition;

  /**
   * <p>For static evaluations, the value of the resource attribute will change and the new value is known. For dynamic evaluations, the value might change, and any new value will be determined when the plan is updated.</p>
   */
  Evaluation?: "STATIC" | "DYNAMIC" | string;

  /**
   * <p>The ID of the entity that caused the change.</p>
   */
  CausingEntity?: string;
}

export interface _UnmarshalledResourceChangeDetail
  extends _ResourceChangeDetail {
  /**
   * <p>Information about the resource attribute to be modified.</p>
   */
  Target?: _UnmarshalledResourceTargetDefinition;
}
