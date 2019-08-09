import {
  _CompromisedCredentialsActionsType,
  _UnmarshalledCompromisedCredentialsActionsType
} from "./_CompromisedCredentialsActionsType";

/**
 * <p>The compromised credentials risk configuration type.</p>
 */
export interface _CompromisedCredentialsRiskConfigurationType {
  /**
   * <p>Perform the action for these events. The default is to perform all events if no event filter is specified.</p>
   */
  EventFilter?:
    | Array<"SIGN_IN" | "PASSWORD_CHANGE" | "SIGN_UP" | string>
    | Iterable<"SIGN_IN" | "PASSWORD_CHANGE" | "SIGN_UP" | string>;

  /**
   * <p>The compromised credentials risk configuration actions.</p>
   */
  Actions: _CompromisedCredentialsActionsType;
}

export interface _UnmarshalledCompromisedCredentialsRiskConfigurationType
  extends _CompromisedCredentialsRiskConfigurationType {
  /**
   * <p>Perform the action for these events. The default is to perform all events if no event filter is specified.</p>
   */
  EventFilter?: Array<"SIGN_IN" | "PASSWORD_CHANGE" | "SIGN_UP" | string>;

  /**
   * <p>The compromised credentials risk configuration actions.</p>
   */
  Actions: _UnmarshalledCompromisedCredentialsActionsType;
}
