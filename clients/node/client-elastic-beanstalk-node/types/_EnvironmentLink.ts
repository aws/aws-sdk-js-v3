/**
 * <p>A link to another environment, defined in the environment's manifest. Links provide connection information in system properties that can be used to connect to another environment in the same group. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest (env.yaml)</a> for details.</p>
 */
export interface _EnvironmentLink {
  /**
   * <p>The name of the link.</p>
   */
  LinkName?: string;

  /**
   * <p>The name of the linked environment (the dependency).</p>
   */
  EnvironmentName?: string;
}

export type _UnmarshalledEnvironmentLink = _EnvironmentLink;
