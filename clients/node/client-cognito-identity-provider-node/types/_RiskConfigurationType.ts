import {
  _CompromisedCredentialsRiskConfigurationType,
  _UnmarshalledCompromisedCredentialsRiskConfigurationType
} from "./_CompromisedCredentialsRiskConfigurationType";
import {
  _AccountTakeoverRiskConfigurationType,
  _UnmarshalledAccountTakeoverRiskConfigurationType
} from "./_AccountTakeoverRiskConfigurationType";
import {
  _RiskExceptionConfigurationType,
  _UnmarshalledRiskExceptionConfigurationType
} from "./_RiskExceptionConfigurationType";

/**
 * <p>The risk configuration type.</p>
 */
export interface _RiskConfigurationType {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId?: string;

  /**
   * <p>The app client ID.</p>
   */
  ClientId?: string;

  /**
   * <p>The compromised credentials risk configuration object including the <code>EventFilter</code> and the <code>EventAction</code> </p>
   */
  CompromisedCredentialsRiskConfiguration?: _CompromisedCredentialsRiskConfigurationType;

  /**
   * <p>The account takeover risk configuration object including the <code>NotifyConfiguration</code> object and <code>Actions</code> to take in the case of an account takeover.</p>
   */
  AccountTakeoverRiskConfiguration?: _AccountTakeoverRiskConfigurationType;

  /**
   * <p>The configuration to override the risk decision.</p>
   */
  RiskExceptionConfiguration?: _RiskExceptionConfigurationType;

  /**
   * <p>The last modified date.</p>
   */
  LastModifiedDate?: Date | string | number;
}

export interface _UnmarshalledRiskConfigurationType
  extends _RiskConfigurationType {
  /**
   * <p>The compromised credentials risk configuration object including the <code>EventFilter</code> and the <code>EventAction</code> </p>
   */
  CompromisedCredentialsRiskConfiguration?: _UnmarshalledCompromisedCredentialsRiskConfigurationType;

  /**
   * <p>The account takeover risk configuration object including the <code>NotifyConfiguration</code> object and <code>Actions</code> to take in the case of an account takeover.</p>
   */
  AccountTakeoverRiskConfiguration?: _UnmarshalledAccountTakeoverRiskConfigurationType;

  /**
   * <p>The configuration to override the risk decision.</p>
   */
  RiskExceptionConfiguration?: _UnmarshalledRiskExceptionConfigurationType;

  /**
   * <p>The last modified date.</p>
   */
  LastModifiedDate?: Date;
}
