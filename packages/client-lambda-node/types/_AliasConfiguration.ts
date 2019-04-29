import {
  _AliasRoutingConfiguration,
  _UnmarshalledAliasRoutingConfiguration
} from "./_AliasRoutingConfiguration";

/**
 * <p>Provides configuration information about a Lambda function version alias.</p>
 */
export interface _AliasConfiguration {
  /**
   * <p>Lambda function ARN that is qualified using the alias name as the suffix. For example, if you create an alias called <code>BETA</code> that points to a helloworld function version, the ARN is <code>arn:aws:lambda:aws-regions:acct-id:function:helloworld:BETA</code>.</p>
   */
  AliasArn?: string;

  /**
   * <p>Alias name.</p>
   */
  Name?: string;

  /**
   * <p>Function version to which the alias points.</p>
   */
  FunctionVersion?: string;

  /**
   * <p>Alias description.</p>
   */
  Description?: string;

  /**
   * <p>Specifies an additional function versions the alias points to, allowing you to dictate what percentage of traffic will invoke each version.</p>
   */
  RoutingConfig?: _AliasRoutingConfiguration;

  /**
   * <p>Represents the latest updated revision of the function or alias.</p>
   */
  RevisionId?: string;
}

export interface _UnmarshalledAliasConfiguration extends _AliasConfiguration {
  /**
   * <p>Specifies an additional function versions the alias points to, allowing you to dictate what percentage of traffic will invoke each version.</p>
   */
  RoutingConfig?: _UnmarshalledAliasRoutingConfiguration;
}
