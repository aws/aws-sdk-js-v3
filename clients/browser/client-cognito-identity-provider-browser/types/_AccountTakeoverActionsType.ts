import {
  _AccountTakeoverActionType,
  _UnmarshalledAccountTakeoverActionType
} from "./_AccountTakeoverActionType";

/**
 * <p>Account takeover actions type.</p>
 */
export interface _AccountTakeoverActionsType {
  /**
   * <p>Action to take for a low risk.</p>
   */
  LowAction?: _AccountTakeoverActionType;

  /**
   * <p>Action to take for a medium risk.</p>
   */
  MediumAction?: _AccountTakeoverActionType;

  /**
   * <p>Action to take for a high risk.</p>
   */
  HighAction?: _AccountTakeoverActionType;
}

export interface _UnmarshalledAccountTakeoverActionsType
  extends _AccountTakeoverActionsType {
  /**
   * <p>Action to take for a low risk.</p>
   */
  LowAction?: _UnmarshalledAccountTakeoverActionType;

  /**
   * <p>Action to take for a medium risk.</p>
   */
  MediumAction?: _UnmarshalledAccountTakeoverActionType;

  /**
   * <p>Action to take for a high risk.</p>
   */
  HighAction?: _UnmarshalledAccountTakeoverActionType;
}
