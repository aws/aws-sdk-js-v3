import { _CompromisedCredentialsRiskConfigurationType } from "./_CompromisedCredentialsRiskConfigurationType";
import { _AccountTakeoverRiskConfigurationType } from "./_AccountTakeoverRiskConfigurationType";
import { _RiskExceptionConfigurationType } from "./_RiskExceptionConfigurationType";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SetRiskConfigurationInput shape
 */
export interface SetRiskConfigurationInput {
  /**
   * <p>The user pool ID. </p>
   */
  UserPoolId: string;

  /**
   * <p>The app client ID. If <code>ClientId</code> is null, then the risk configuration is mapped to <code>userPoolId</code>. When the client ID is null, the same risk configuration is applied to all the clients in the userPool.</p> <p>Otherwise, <code>ClientId</code> is mapped to the client. When the client ID is not null, the user pool configuration is overridden and the risk configuration for the client is used instead.</p>
   */
  ClientId?: string;

  /**
   * <p>The compromised credentials risk configuration.</p>
   */
  CompromisedCredentialsRiskConfiguration?: _CompromisedCredentialsRiskConfigurationType;

  /**
   * <p>The account takeover risk configuration.</p>
   */
  AccountTakeoverRiskConfiguration?: _AccountTakeoverRiskConfigurationType;

  /**
   * <p>The configuration to override the risk decision.</p>
   */
  RiskExceptionConfiguration?: _RiskExceptionConfigurationType;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
