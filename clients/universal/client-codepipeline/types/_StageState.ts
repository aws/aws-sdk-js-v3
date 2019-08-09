import {
  _TransitionState,
  _UnmarshalledTransitionState
} from "./_TransitionState";
import { _ActionState, _UnmarshalledActionState } from "./_ActionState";
import {
  _StageExecution,
  _UnmarshalledStageExecution
} from "./_StageExecution";

/**
 * <p>Represents information about the state of the stage.</p>
 */
export interface _StageState {
  /**
   * <p>The name of the stage.</p>
   */
  stageName?: string;

  /**
   * <p>The state of the inbound transition, which is either enabled or disabled.</p>
   */
  inboundTransitionState?: _TransitionState;

  /**
   * <p>The state of the stage.</p>
   */
  actionStates?: Array<_ActionState> | Iterable<_ActionState>;

  /**
   * <p>Information about the latest execution in the stage, including its ID and status.</p>
   */
  latestExecution?: _StageExecution;
}

export interface _UnmarshalledStageState extends _StageState {
  /**
   * <p>The state of the inbound transition, which is either enabled or disabled.</p>
   */
  inboundTransitionState?: _UnmarshalledTransitionState;

  /**
   * <p>The state of the stage.</p>
   */
  actionStates?: Array<_UnmarshalledActionState>;

  /**
   * <p>Information about the latest execution in the stage, including its ID and status.</p>
   */
  latestExecution?: _UnmarshalledStageExecution;
}
