import {
  _AliasRoutingConfiguration,
  _UnmarshalledAliasRoutingConfiguration
} from "./_AliasRoutingConfiguration";

/**
 * <p>Provides configuration information about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.</p>
 */
export interface _AliasConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the alias.</p>
   */
  AliasArn?: string;

  /**
   * <p>The name of the alias.</p>
   */
  Name?: string;

  /**
   * <p>The function version that the alias invokes.</p>
   */
  FunctionVersion?: string;

  /**
   * <p>A description of the alias.</p>
   */
  Description?: string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">routing configuration</a> of the alias.</p>
   */
  RoutingConfig?: _AliasRoutingConfiguration;

  /**
   * <p>A unique identifier that changes when you update the alias.</p>
   */
  RevisionId?: string;
}

export interface _UnmarshalledAliasConfiguration extends _AliasConfiguration {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">routing configuration</a> of the alias.</p>
   */
  RoutingConfig?: _UnmarshalledAliasRoutingConfiguration;
}
