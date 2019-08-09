import {
  _ActionRevision,
  _UnmarshalledActionRevision
} from "./_ActionRevision";
import {
  _ActionExecution,
  _UnmarshalledActionExecution
} from "./_ActionExecution";

/**
 * <p>Represents information about the state of an action.</p>
 */
export interface _ActionState {
  /**
   * <p>The name of the action.</p>
   */
  actionName?: string;

  /**
   * <p>Represents information about the version (or revision) of an action.</p>
   */
  currentRevision?: _ActionRevision;

  /**
   * <p>Represents information about the run of an action.</p>
   */
  latestExecution?: _ActionExecution;

  /**
   * <p>A URL link for more information about the state of the action, such as a deployment group details page.</p>
   */
  entityUrl?: string;

  /**
   * <p>A URL link for more information about the revision, such as a commit details page.</p>
   */
  revisionUrl?: string;
}

export interface _UnmarshalledActionState extends _ActionState {
  /**
   * <p>Represents information about the version (or revision) of an action.</p>
   */
  currentRevision?: _UnmarshalledActionRevision;

  /**
   * <p>Represents information about the run of an action.</p>
   */
  latestExecution?: _UnmarshalledActionExecution;
}
