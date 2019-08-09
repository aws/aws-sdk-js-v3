import {
  _NotifyConfigurationType,
  _UnmarshalledNotifyConfigurationType
} from "./_NotifyConfigurationType";
import {
  _AccountTakeoverActionsType,
  _UnmarshalledAccountTakeoverActionsType
} from "./_AccountTakeoverActionsType";

/**
 * <p>Configuration for mitigation actions and notification for different levels of risk detected for a potential account takeover.</p>
 */
export interface _AccountTakeoverRiskConfigurationType {
  /**
   * <p>The notify configuration used to construct email notifications.</p>
   */
  NotifyConfiguration?: _NotifyConfigurationType;

  /**
   * <p>Account takeover risk configuration actions</p>
   */
  Actions: _AccountTakeoverActionsType;
}

export interface _UnmarshalledAccountTakeoverRiskConfigurationType
  extends _AccountTakeoverRiskConfigurationType {
  /**
   * <p>The notify configuration used to construct email notifications.</p>
   */
  NotifyConfiguration?: _UnmarshalledNotifyConfigurationType;

  /**
   * <p>Account takeover risk configuration actions</p>
   */
  Actions: _UnmarshalledAccountTakeoverActionsType;
}
